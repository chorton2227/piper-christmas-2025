# Lesson 4.5: Game State Management 🎮

## 🎯 Lesson Objectives

By the end of this lesson, you will:
- Understand what "game state" means and why it's important
- Create a comprehensive game state object to track all game data
- Manage player information (chips, cards, status)
- Track the pot, current bet, and dealer position
- Implement betting rounds (pre-flop, flop, turn, river)
- Handle turn rotation and game flow
- Reset the game state between hands

## 📚 Introduction to Game State

### What is Game State?

**Game state** is all the information needed to describe the current situation in your game:
- Who's playing?
- How many chips does each player have?
- What cards have been dealt?
- Whose turn is it?
- How much is in the pot?
- What betting round are we in?

Think of game state as a **snapshot** of the game at any moment. If you could save the game and load it later, the game state is everything you'd need to save!

### Why is State Management Important?

Good state management:
- **Prevents bugs** - Centralized data means fewer errors
- **Makes code readable** - Everything in one place
- **Enables features** - Save/load, undo, replay
- **Simplifies logic** - Functions can focus on one thing

Poor state management leads to:
- Data scattered everywhere
- Bugs that are hard to find
- Features that are impossible to add
- Code that's hard to understand

## 🎴 Designing the Game State Object

### Core Game State Structure

```javascript
const gameState = {
    // Players in the game
    players: [],
    
    // Deck and community cards
    deck: [],
    communityCards: [],
    
    // Pot and betting
    pot: 0,
    currentBet: 0,
    minRaise: 0,
    
    // Turn tracking
    dealerPosition: 0,
    currentPlayerIndex: 0,
    
    // Game phase
    phase: 'waiting',  // 'waiting', 'dealing', 'betting', 'showdown'
    bettingRound: null,  // null, 'pre-flop', 'flop', 'turn', 'river'
    
    // Configuration
    smallBlind: 10,
    bigBlind: 20,
    startingChips: 1000
};
```

### Player Object Structure

Each player in the `players` array looks like this:

```javascript
{
    id: 1,
    name: 'Player 1',
    chips: 1000,
    bet: 0,
    hand: [],
    folded: false,
    allIn: false,
    isDealer: false,
    isSmallBlind: false,
    isBigBlind: false,
    isAI: false
}
```

**Player Properties Explained:**
- `id` - Unique identifier for the player
- `name` - Display name
- `chips` - Current chip count
- `bet` - Amount bet in current betting round
- `hand` - Player's 2 hole cards
- `folded` - Whether player has folded
- `allIn` - Whether player is all-in (bet all chips)
- `isDealer` - Whether player has the dealer button
- `isSmallBlind` - Whether player posts small blind this hand
- `isBigBlind` - Whether player posts big blind this hand
- `isAI` - Whether player is computer-controlled

## 🏗️ Creating the Initial Game State

### Initialize Game Function

```javascript
function createGame(playerCount, startingChips = 1000) {
    const players = [];
    
    // Create players
    for (let i = 0; i < playerCount; i++) {
        players.push({
            id: i,
            name: i === 0 ? 'You' : `Player ${i + 1}`,
            chips: startingChips,
            bet: 0,
            hand: [],
            folded: false,
            allIn: false,
            isDealer: false,
            isSmallBlind: false,
            isBigBlind: false,
            isAI: i !== 0  // First player is human, rest are AI
        });
    }
    
    const gameState = {
        players: players,
        deck: [],
        communityCards: [],
        pot: 0,
        currentBet: 0,
        minRaise: 20,
        dealerPosition: 0,
        currentPlayerIndex: 0,
        phase: 'waiting',
        bettingRound: null,
        smallBlind: 10,
        bigBlind: 20,
        startingChips: startingChips
    };
    
    return gameState;
}
```

**Usage:**
```javascript
const game = createGame(6, 1000);  // 6 players, 1000 chips each
console.log(game.players.length);  // 6
console.log(game.players[0].name);  // "You"
console.log(game.players[1].name);  // "Player 2"
```

### Setting Dealer and Blinds

```javascript
function assignDealerAndBlinds(gameState) {
    const { players, dealerPosition } = gameState;
    const playerCount = players.length;
    
    // Reset all positions
    players.forEach(p => {
        p.isDealer = false;
        p.isSmallBlind = false;
        p.isBigBlind = false;
    });
    
    // Assign dealer button
    players[dealerPosition].isDealer = true;
    
    // Assign blinds (clockwise from dealer)
    if (playerCount === 2) {
        // Heads-up: dealer is small blind
        players[dealerPosition].isSmallBlind = true;
        players[(dealerPosition + 1) % playerCount].isBigBlind = true;
    } else {
        // Normal: small blind is left of dealer
        players[(dealerPosition + 1) % playerCount].isSmallBlind = true;
        players[(dealerPosition + 2) % playerCount].isBigBlind = true;
    }
}
```

**Why the modulo operator `%`?**
The `%` wraps around: if dealer is at position 5 in a 6-player game, position `(5+1) % 6 = 0`, which correctly wraps to the first seat.

## 💰 Managing the Pot and Bets

### Adding to the Pot

```javascript
function addToPot(gameState, amount) {
    gameState.pot += amount;
}
```

### Placing a Bet

```javascript
function placeBet(gameState, playerId, amount) {
    const player = gameState.players.find(p => p.id === playerId);
    
    if (!player) {
        console.error('Player not found!');
        return false;
    }
    
    if (amount > player.chips) {
        console.error('Not enough chips!');
        return false;
    }
    
    // Deduct from player's chips
    player.chips -= amount;
    
    // Add to player's current bet
    player.bet += amount;
    
    // Add to pot
    gameState.pot += amount;
    
    // Update current bet if this is a raise
    if (player.bet > gameState.currentBet) {
        gameState.currentBet = player.bet;
    }
    
    // Check if player is all-in
    if (player.chips === 0) {
        player.allIn = true;
    }
    
    return true;
}
```

### Collecting Bets from All Players

At the end of each betting round, we reset individual bets:

```javascript
function collectBets(gameState) {
    let totalCollected = 0;
    
    gameState.players.forEach(player => {
        totalCollected += player.bet;
        player.bet = 0;  // Reset for next betting round
    });
    
    gameState.pot += totalCollected;
    gameState.currentBet = 0;
}
```

## 🔄 Turn Management

### Getting the Next Active Player

We need to skip players who have folded or are all-in:

```javascript
function getNextActivePlayer(gameState) {
    const { players, currentPlayerIndex } = gameState;
    let nextIndex = (currentPlayerIndex + 1) % players.length;
    let attempts = 0;
    
    // Find next player who can act
    while (attempts < players.length) {
        const player = players[nextIndex];
        
        if (!player.folded && !player.allIn) {
            return nextIndex;
        }
        
        nextIndex = (nextIndex + 1) % players.length;
        attempts++;
    }
    
    // No active players found
    return -1;
}
```

### Advancing to Next Player

```javascript
function nextPlayerTurn(gameState) {
    const nextIndex = getNextActivePlayer(gameState);
    
    if (nextIndex === -1) {
        // No more players can act, end betting round
        endBettingRound(gameState);
        return;
    }
    
    gameState.currentPlayerIndex = nextIndex;
}
```

### Checking if Betting Round is Complete

```javascript
function isBettingRoundComplete(gameState) {
    const activePlayers = gameState.players.filter(p => !p.folded && !p.allIn);
    
    // If 0 or 1 active players, round is complete
    if (activePlayers.length <= 1) {
        return true;
    }
    
    // Check if all active players have matched the current bet
    const allMatched = activePlayers.every(p => p.bet === gameState.currentBet);
    
    return allMatched;
}
```

## 🎲 Game Phases and Betting Rounds

### Game Phases

```javascript
const GAME_PHASES = {
    WAITING: 'waiting',       // Before hand starts
    DEALING: 'dealing',       // Dealing cards
    BETTING: 'betting',       // Players are betting
    SHOWDOWN: 'showdown'      // Revealing hands
};
```

### Betting Rounds

```javascript
const BETTING_ROUNDS = {
    PRE_FLOP: 'pre-flop',    // Before flop
    FLOP: 'flop',            // After flop (3 cards)
    TURN: 'turn',            // After turn (4th card)
    RIVER: 'river'           // After river (5th card)
};
```

### Advancing to Next Betting Round

```javascript
function nextBettingRound(gameState) {
    // Collect all bets into pot
    collectBets(gameState);
    
    // Determine next round
    if (!gameState.bettingRound) {
        gameState.bettingRound = BETTING_ROUNDS.PRE_FLOP;
    } else if (gameState.bettingRound === BETTING_ROUNDS.PRE_FLOP) {
        gameState.bettingRound = BETTING_ROUNDS.FLOP;
        // Deal flop (3 cards)
        dealCommunityCards(gameState, 3);
    } else if (gameState.bettingRound === BETTING_ROUNDS.FLOP) {
        gameState.bettingRound = BETTING_ROUNDS.TURN;
        // Deal turn (1 card)
        dealCommunityCards(gameState, 1);
    } else if (gameState.bettingRound === BETTING_ROUNDS.TURN) {
        gameState.bettingRound = BETTING_ROUNDS.RIVER;
        // Deal river (1 card)
        dealCommunityCards(gameState, 1);
    } else {
        // After river, go to showdown
        gameState.phase = GAME_PHASES.SHOWDOWN;
        return;
    }
    
    // Start betting with player left of dealer
    gameState.currentPlayerIndex = (gameState.dealerPosition + 1) % gameState.players.length;
    gameState.phase = GAME_PHASES.BETTING;
}
```

### Ending a Betting Round

```javascript
function endBettingRound(gameState) {
    const activePlayers = gameState.players.filter(p => !p.folded);
    
    // If only one player left, they win immediately
    if (activePlayers.length === 1) {
        awardPotToPlayer(gameState, activePlayers[0].id);
        endHand(gameState);
        return;
    }
    
    // Otherwise, advance to next betting round or showdown
    nextBettingRound(gameState);
}
```

## 🔄 Resetting Game State Between Hands

### Reset for New Hand

```javascript
function resetForNewHand(gameState) {
    // Clear cards
    gameState.deck = [];
    gameState.communityCards = [];
    
    // Reset pot and bets
    gameState.pot = 0;
    gameState.currentBet = 0;
    
    // Reset player states
    gameState.players.forEach(player => {
        player.hand = [];
        player.bet = 0;
        player.folded = false;
        player.allIn = false;
    });
    
    // Move dealer button
    gameState.dealerPosition = (gameState.dealerPosition + 1) % gameState.players.length;
    
    // Reset phase and round
    gameState.phase = GAME_PHASES.WAITING;
    gameState.bettingRound = null;
    
    // Reassign dealer and blinds
    assignDealerAndBlinds(gameState);
}
```

### Starting a New Hand

```javascript
function startNewHand(gameState) {
    // Reset everything
    resetForNewHand(gameState);
    
    // Create and shuffle deck
    gameState.deck = createDeck();
    shuffleDeck(gameState.deck);
    
    // Post blinds
    postBlinds(gameState);
    
    // Deal hole cards
    dealHoleCards(gameState);
    
    // Start pre-flop betting
    gameState.phase = GAME_PHASES.BETTING;
    gameState.bettingRound = BETTING_ROUNDS.PRE_FLOP;
    
    // First to act is left of big blind
    gameState.currentPlayerIndex = (gameState.dealerPosition + 3) % gameState.players.length;
}
```

### Posting Blinds

```javascript
function postBlinds(gameState) {
    const { players, smallBlind, bigBlind } = gameState;
    
    // Find small and big blind players
    const smallBlindPlayer = players.find(p => p.isSmallBlind);
    const bigBlindPlayer = players.find(p => p.isBigBlind);
    
    // Post small blind
    if (smallBlindPlayer) {
        const sbAmount = Math.min(smallBlind, smallBlindPlayer.chips);
        placeBet(gameState, smallBlindPlayer.id, sbAmount);
    }
    
    // Post big blind
    if (bigBlindPlayer) {
        const bbAmount = Math.min(bigBlind, bigBlindPlayer.chips);
        placeBet(gameState, bigBlindPlayer.id, bbAmount);
    }
}
```

## 👥 Managing Players

### Getting Active Players

```javascript
function getActivePlayers(gameState) {
    return gameState.players.filter(p => !p.folded);
}
```

### Getting Players Who Can Act

```javascript
function getPlayersWhoCanAct(gameState) {
    return gameState.players.filter(p => !p.folded && !p.allIn);
}
```

### Removing Broke Players

```javascript
function removeBrokePlayers(gameState) {
    gameState.players = gameState.players.filter(p => p.chips > 0);
}
```

### Getting Player by ID

```javascript
function getPlayerById(gameState, id) {
    return gameState.players.find(p => p.id === id);
}
```

## 🎯 Putting It All Together

### Complete Game Flow Example

```javascript
// 1. Create game
const game = createGame(6, 1000);

// 2. Start first hand
startNewHand(game);

// Game state now:
// - Deck is shuffled
// - Each player has 2 hole cards
// - Small and big blinds are posted
// - Pot = 30 (10 + 20)
// - Phase = 'betting'
// - Round = 'pre-flop'

console.log(game.pot);  // 30
console.log(game.players[0].hand.length);  // 2
console.log(game.communityCards.length);  // 0 (not dealt yet)

// 3. Players make actions (we'll implement in Lesson 4.6)
// ... betting happens ...

// 4. Advance to flop
nextBettingRound(game);
console.log(game.communityCards.length);  // 3 (flop dealt)

// 5. Continue through betting rounds
// ... more betting ...

// 6. Showdown
// ... evaluate hands, award pot ...

// 7. Start next hand
startNewHand(game);
```

## 💡 Best Practices

### 1. Centralize State

Don't scatter game data across multiple variables:

```javascript
// ❌ BAD: Data everywhere
let pot = 0;
let players = [];
let communityCards = [];
let currentBet = 0;
// ... hundreds of global variables

// ✅ GOOD: Everything in one object
const gameState = {
    pot: 0,
    players: [],
    communityCards: [],
    currentBet: 0
    // ... all in one place
};
```

### 2. Use Pure Functions When Possible

Functions that don't modify state are easier to test:

```javascript
// ✅ GOOD: Pure function
function calculatePotOdds(pot, amountToCall) {
    return amountToCall / (pot + amountToCall);
}

// ⚠️ OK but impure: Modifies state
function addToPot(gameState, amount) {
    gameState.pot += amount;
}
```

### 3. Validate State Changes

Always check if actions are valid:

```javascript
function placeBet(gameState, playerId, amount) {
    const player = getPlayerById(gameState, playerId);
    
    // Validate
    if (!player) return false;
    if (player.folded) return false;
    if (amount > player.chips) return false;
    if (amount < 0) return false;
    
    // OK, make the change
    player.chips -= amount;
    gameState.pot += amount;
    return true;
}
```

### 4. Use Constants for Magic Values

```javascript
// ❌ BAD: What does 'b' mean?
gameState.phase = 'b';

// ✅ GOOD: Clear and self-documenting
const PHASES = { BETTING: 'betting' };
gameState.phase = PHASES.BETTING;
```

## 🔍 Common Mistakes to Avoid

### Mistake 1: Forgetting to Update Multiple Related Properties

```javascript
// ❌ BAD: Only updated bet, forgot chips!
player.bet = 100;

// ✅ GOOD: Update all related state
player.bet = 100;
player.chips -= 100;
gameState.pot += 100;
```

### Mistake 2: Mutating State Without Checking Validity

```javascript
// ❌ BAD: No validation
gameState.currentPlayerIndex++;

// ✅ GOOD: Check bounds and validity
gameState.currentPlayerIndex = (gameState.currentPlayerIndex + 1) % gameState.players.length;
```

### Mistake 3: Not Handling Edge Cases

```javascript
// ❌ BAD: What if only 2 players?
const smallBlindIndex = dealerPosition + 1;
const bigBlindIndex = dealerPosition + 2;

// ✅ GOOD: Handle 2-player (heads-up) differently
if (playerCount === 2) {
    // Dealer is small blind in heads-up
} else {
    // Normal blind positions
}
```

## 🏆 Key Takeaways

- **Game state** is a single object containing all game data
- **Players array** tracks each player's chips, cards, and status
- **Pot and bets** must be updated together consistently
- **Turn management** requires tracking active players and dealer position
- **Betting rounds** advance through pre-flop → flop → turn → river
- **Phase transitions** control the flow of the game
- **Validation** prevents invalid state changes
- **Reset functions** prepare for the next hand

## 📝 Practice Challenges

Ready to practice? Check the `practice/` folder for exercises:

1. **Exercise 1:** Create a game state for 4 players
2. **Exercise 2:** Implement turn rotation with folded players
3. **Exercise 3:** Post blinds and track the pot
4. **Exercise 4:** Advance through all betting rounds

## 🎯 What's Next?

In **Lesson 4.6**, we'll implement the **Betting System** - check, call, raise, fold, all-in, and side pot calculations!

---

**Fantastic work! 🎉 You now understand how to track and manage all the data in a poker game. This is the backbone of any complex game!**
