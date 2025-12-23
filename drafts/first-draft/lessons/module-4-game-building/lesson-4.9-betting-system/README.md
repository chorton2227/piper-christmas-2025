# Lesson 4.9: Advanced Betting System

**Estimated Time:** 3-4 hours  
**Difficulty:** Advanced  
**Prerequisites:** Lessons 4.1-4.8 (especially 4.8 Game Flow)

---

## 🎯 Learning Objectives

By the end of this lesson, you will be able to:
- Implement multiple betting rounds (pre-flop, flop, turn, river)
- Add blinds and ante systems
- Handle all-in scenarios correctly
- Manage side pots for multiple players
- Create realistic betting limits and rules
- Track betting history and patterns

---

## 📚 What You'll Learn

### Part 1: Understanding Betting Rounds
### Part 2: Blinds and Antes
### Part 3: Betting Actions (Check, Bet, Call, Raise, Fold, All-In)
### Part 4: Pot Management and Side Pots
### Part 5: Betting Limits (No-Limit, Pot-Limit, Fixed-Limit)
### Part 6: All-In Scenarios and Edge Cases
### Part 7: Integration with Game Flow

---

## Part 1: Understanding Betting Rounds

### What Are Betting Rounds?

In real poker (especially Texas Hold'em), there are multiple betting rounds:

1. **Pre-Flop** - After players get their cards
2. **Flop** - After 3 community cards are dealt
3. **Turn** - After 4th community card is dealt
4. **River** - After 5th community card is dealt

Each round, players can bet, raise, call, or fold.

### Why Multiple Rounds?

Multiple betting rounds create:
- **Strategy** - Players can bluff or fold based on community cards
- **Tension** - Pot grows gradually
- **Skill** - Good players read opponents across multiple decisions

### Betting Round Structure

```javascript
// Betting round states
const BettingRounds = {
    PRE_FLOP: 'pre-flop',
    FLOP: 'flop',
    TURN: 'turn',
    RIVER: 'river',
    SHOWDOWN: 'showdown'
};

// Add to game state
gameState.bettingRound = BettingRounds.PRE_FLOP;
gameState.currentBet = 0;  // Minimum bet to stay in
gameState.betsThisRound = {}; // Track each player's bet
```

### Round Flow Example

```
ROUND START
↓
Pre-Flop Betting (players have 2 cards)
↓
Deal Flop (3 community cards)
↓
Flop Betting
↓
Deal Turn (4th community card)
↓
Turn Betting
↓
Deal River (5th community card)
↓
River Betting
↓
Showdown (compare hands)
```

---

## Part 2: Blinds and Antes

### What Are Blinds?

**Blinds** are forced bets that start the action:
- **Small Blind (SB)** - Usually half the big blind
- **Big Blind (BB)** - The minimum bet for that round

Example:
- Small Blind: $5
- Big Blind: $10

The player left of the dealer posts the small blind, the next player posts the big blind.

### What Are Antes?

**Antes** are small forced bets from ALL players before each hand.

Example:
- If ante is $1, and there are 4 players, pot starts at $4

### Implementing Blinds

```javascript
gameState.smallBlind = 5;
gameState.bigBlind = 10;
gameState.dealerPosition = 0; // Which player is dealer
gameState.smallBlindPosition = 1; // Left of dealer
gameState.bigBlindPosition = 2; // Left of small blind

function postBlinds() {
    // Small blind posts
    const sbPlayer = players[gameState.smallBlindPosition];
    const sbAmount = Math.min(sbPlayer.chips, gameState.smallBlind);
    sbPlayer.chips -= sbAmount;
    gameState.pot += sbAmount;
    gameState.currentBet = sbAmount;
    
    console.log(`${sbPlayer.name} posts small blind: $${sbAmount}`);
    
    // Big blind posts
    const bbPlayer = players[gameState.bigBlindPosition];
    const bbAmount = Math.min(bbPlayer.chips, gameState.bigBlind);
    bbPlayer.chips -= bbAmount;
    gameState.pot += bbAmount;
    gameState.currentBet = bbAmount;
    
    console.log(`${bbPlayer.name} posts big blind: $${bbAmount}`);
    
    updateDisplay();
}
```

### Rotating Positions

After each hand, the dealer button moves:

```javascript
function rotateDealerButton() {
    gameState.dealerPosition = (gameState.dealerPosition + 1) % players.length;
    gameState.smallBlindPosition = (gameState.dealerPosition + 1) % players.length;
    gameState.bigBlindPosition = (gameState.dealerPosition + 2) % players.length;
    
    console.log(`Dealer button moved to Player ${gameState.dealerPosition + 1}`);
}
```

---

## Part 3: Betting Actions

### Available Actions

1. **Fold** - Give up your hand, lose any bets made
2. **Check** - Pass action (only if no bet to call)
3. **Bet** - Make the first bet of the round
4. **Call** - Match the current bet
5. **Raise** - Increase the bet
6. **All-In** - Bet all remaining chips

### Action Availability

```javascript
function getAvailableActions(player) {
    const actions = ['fold'];
    
    // Check if player can check
    if (gameState.currentBet === 0 || 
        player.betThisRound === gameState.currentBet) {
        actions.push('check');
    }
    
    // Check if player can bet/call
    if (gameState.currentBet === 0 && player.chips > 0) {
        actions.push('bet');
    } else if (gameState.currentBet > 0 && 
               player.betThisRound < gameState.currentBet) {
        actions.push('call');
    }
    
    // Check if player can raise
    if (player.chips > (gameState.currentBet - player.betThisRound)) {
        actions.push('raise');
    }
    
    // Always can go all-in
    if (player.chips > 0) {
        actions.push('all-in');
    }
    
    return actions;
}
```

### Implementing Check

```javascript
function check(player) {
    // Can only check if no bet to call
    if (gameState.currentBet > 0 && player.betThisRound < gameState.currentBet) {
        alert('Cannot check - there is a bet to call!');
        return false;
    }
    
    console.log(`${player.name} checks`);
    moveToNextPlayer();
    return true;
}
```

### Implementing Bet

```javascript
function bet(player, amount) {
    // Must be at least big blind
    if (amount < gameState.bigBlind) {
        alert(`Minimum bet is $${gameState.bigBlind}`);
        return false;
    }
    
    // Check if player has enough chips
    if (amount > player.chips) {
        alert('Not enough chips! Go all-in instead.');
        return false;
    }
    
    // Place bet
    player.chips -= amount;
    player.betThisRound += amount;
    gameState.pot += amount;
    gameState.currentBet = amount;
    
    console.log(`${player.name} bets $${amount}`);
    
    // Other players must now respond
    resetActionFlags();
    player.hasActed = true;
    
    moveToNextPlayer();
    return true;
}
```

### Implementing Call

```javascript
function call(player) {
    const callAmount = gameState.currentBet - player.betThisRound;
    
    if (callAmount <= 0) {
        alert('Nothing to call!');
        return false;
    }
    
    if (player.chips < callAmount) {
        // Player doesn't have enough - must go all-in
        alert('Not enough chips! Going all-in...');
        allIn(player);
        return true;
    }
    
    // Call the bet
    player.chips -= callAmount;
    player.betThisRound += callAmount;
    gameState.pot += callAmount;
    
    console.log(`${player.name} calls $${callAmount}`);
    
    player.hasActed = true;
    moveToNextPlayer();
    return true;
}
```

### Implementing Raise

```javascript
function raise(player, raiseAmount) {
    // Calculate total amount needed
    const callAmount = gameState.currentBet - player.betThisRound;
    const totalAmount = callAmount + raiseAmount;
    
    // Minimum raise is usually the size of the current bet
    if (raiseAmount < gameState.bigBlind) {
        alert(`Minimum raise is $${gameState.bigBlind}`);
        return false;
    }
    
    if (player.chips < totalAmount) {
        alert('Not enough chips for that raise!');
        return false;
    }
    
    // Place raise
    player.chips -= totalAmount;
    player.betThisRound += totalAmount;
    gameState.pot += totalAmount;
    gameState.currentBet += raiseAmount;
    
    console.log(`${player.name} raises $${raiseAmount} (total bet: $${gameState.currentBet})`);
    
    // Reset action flags - everyone must act again
    resetActionFlags();
    player.hasActed = true;
    
    moveToNextPlayer();
    return true;
}
```

### Implementing All-In

```javascript
function allIn(player) {
    const allInAmount = player.chips;
    
    if (allInAmount === 0) {
        alert('No chips left!');
        return false;
    }
    
    // Player bets all remaining chips
    player.chips = 0;
    player.betThisRound += allInAmount;
    gameState.pot += allInAmount;
    player.isAllIn = true;
    
    // Update current bet if this is the highest
    if (player.betThisRound > gameState.currentBet) {
        gameState.currentBet = player.betThisRound;
        resetActionFlags(); // Others must respond
    }
    
    console.log(`${player.name} goes ALL-IN! ($${allInAmount})`);
    
    player.hasActed = true;
    moveToNextPlayer();
    return true;
}
```

---

## Part 4: Pot Management and Side Pots

### What Are Side Pots?

When a player goes all-in for less than the current bet, we need **side pots**.

Example:
- Player A has $50, goes all-in
- Player B has $200, calls $50 and adds $150 more
- Player C has $200, calls $200

**Main Pot:** $150 (Player A can win this)  
**Side Pot:** $300 (Only Player B and C can win this)

### Side Pot Data Structure

```javascript
gameState.pots = [
    {
        amount: 150,
        eligiblePlayers: ['A', 'B', 'C']
    },
    {
        amount: 300,
        eligiblePlayers: ['B', 'C']
    }
];
```

### Calculating Side Pots

```javascript
function calculatePots() {
    // Get all unique bet amounts (sorted)
    const betAmounts = [...new Set(players.map(p => p.totalBet))].sort((a, b) => a - b);
    
    const pots = [];
    let previousAmount = 0;
    
    for (let betLevel of betAmounts) {
        const potContribution = betLevel - previousAmount;
        
        // Find players who bet at least this amount
        const eligiblePlayers = players.filter(p => p.totalBet >= betLevel);
        
        if (eligiblePlayers.length > 0) {
            const potAmount = potContribution * eligiblePlayers.length;
            
            pots.push({
                amount: potAmount,
                eligiblePlayers: eligiblePlayers.map(p => p.id),
                betLevel: betLevel
            });
        }
        
        previousAmount = betLevel;
    }
    
    gameState.pots = pots;
    return pots;
}
```

### Awarding Side Pots

```javascript
function awardPots() {
    calculatePots();
    
    for (let pot of gameState.pots) {
        // Find best hand among eligible players
        let bestPlayers = [];
        let bestRank = 0;
        
        for (let playerId of pot.eligiblePlayers) {
            const player = players.find(p => p.id === playerId);
            if (!player.folded) {
                const handValue = evaluateHand(player.hand);
                
                if (handValue.rank > bestRank) {
                    bestRank = handValue.rank;
                    bestPlayers = [player];
                } else if (handValue.rank === bestRank) {
                    // Compare tiebreakers
                    const comparison = compareHands(player.hand, bestPlayers[0].hand);
                    if (comparison > 0) {
                        bestPlayers = [player];
                    } else if (comparison === 0) {
                        bestPlayers.push(player); // Tie
                    }
                }
            }
        }
        
        // Award pot (split if tie)
        const winningsPerPlayer = pot.amount / bestPlayers.length;
        for (let winner of bestPlayers) {
            winner.chips += winningsPerPlayer;
            console.log(`${winner.name} wins $${winningsPerPlayer} from pot`);
        }
    }
}
```

---

## Part 5: Betting Limits

### Three Main Limit Types

**1. No-Limit**
- Can bet any amount up to your entire stack
- Most popular (especially Texas Hold'em)

**2. Pot-Limit**
- Maximum bet is the size of the pot
- Example: If pot is $100, max bet is $100

**3. Fixed-Limit**
- Bets are fixed amounts
- Example: $10 bets on flop/turn, $20 on river

### Implementing No-Limit

```javascript
function validateNoLimitBet(player, amount) {
    if (amount < gameState.bigBlind) {
        return { valid: false, error: 'Minimum bet is big blind' };
    }
    
    if (amount > player.chips) {
        return { valid: false, error: 'Not enough chips (go all-in instead)' };
    }
    
    return { valid: true };
}
```

### Implementing Pot-Limit

```javascript
function calculateMaxPotLimitBet(player) {
    // Max bet = current pot + amount to call + amount you've bet
    const callAmount = gameState.currentBet - player.betThisRound;
    const maxBet = gameState.pot + callAmount + callAmount;
    
    return Math.min(maxBet, player.chips);
}

function validatePotLimitBet(player, amount) {
    const maxBet = calculateMaxPotLimitBet(player);
    
    if (amount > maxBet) {
        return { 
            valid: false, 
            error: `Maximum pot-limit bet is $${maxBet}` 
        };
    }
    
    if (amount < gameState.bigBlind) {
        return { valid: false, error: 'Minimum bet is big blind' };
    }
    
    return { valid: true };
}
```

### Implementing Fixed-Limit

```javascript
function getFixedLimitAmount() {
    // Small bet for pre-flop and flop
    if (gameState.bettingRound === 'pre-flop' || 
        gameState.bettingRound === 'flop') {
        return gameState.smallBet;
    }
    
    // Big bet for turn and river
    return gameState.bigBet;
}

function validateFixedLimitBet(player, amount) {
    const fixedAmount = getFixedLimitAmount();
    
    if (amount !== fixedAmount) {
        return { 
            valid: false, 
            error: `Fixed-limit bet must be exactly $${fixedAmount}` 
        };
    }
    
    return { valid: true };
}
```

---

## Part 6: All-In Scenarios and Edge Cases

### Scenario 1: Single All-In

```
Player A: $100
Player B: $50 (goes all-in)
Player A calls $50

Result:
- Main pot: $100
- Player A gets $50 back (can't win more than opponent has)
```

### Scenario 2: Multiple All-Ins

```
Player A: $200 (bets $200)
Player B: $100 (all-in $100)
Player C: $50 (all-in $50)

Result:
- Main pot: $150 (all three eligible)
- Side pot 1: $100 (A and B eligible)
- Side pot 2: $100 (only A eligible)
```

### Scenario 3: All-In Below Big Blind

```
Player A: $3 (big blind is $10)
Player A goes all-in for $3

Result:
- $3 is in pot
- Other players can call $3 to stay in
- But they can still raise to $10+
```

### Implementation: Handling Partial All-Ins

```javascript
function handleAllInBelowMinimum(player) {
    const allInAmount = player.chips;
    
    // Player goes all-in
    player.chips = 0;
    player.betThisRound += allInAmount;
    gameState.pot += allInAmount;
    player.isAllIn = true;
    
    // Don't update current bet if all-in is below it
    // Other players can still bet the full amount
    
    console.log(`${player.name} goes all-in for $${allInAmount} (below minimum)`);
}
```

### Scenario 4: All Players All-In

```javascript
function checkIfAllAllIn() {
    const activePlayers = players.filter(p => !p.folded);
    const allInOrNoChips = activePlayers.every(p => p.isAllIn || p.chips === 0);
    
    if (allInOrNoChips) {
        console.log('All players all-in! Running out remaining cards...');
        
        // Deal all remaining community cards
        while (gameState.bettingRound !== 'river') {
            advanceBettingRound();
        }
        
        // Go straight to showdown
        showdown();
        return true;
    }
    
    return false;
}
```

---

## Part 7: Integration with Game Flow

### Updated Game State

```javascript
let gameState = {
    // Existing properties
    playerChips: 100,
    dealerChips: 100,
    pot: 0,
    playerHand: [],
    dealerHand: [],
    
    // NEW: Betting system properties
    bettingRound: 'pre-flop',
    currentBet: 0,
    smallBlind: 5,
    bigBlind: 10,
    dealerPosition: 0,
    
    // NEW: Community cards (for Texas Hold'em)
    communityCards: [],
    
    // NEW: Multiple pots
    pots: [],
    
    // NEW: Betting limits
    limitType: 'no-limit', // 'no-limit', 'pot-limit', 'fixed-limit'
    smallBet: 10,
    bigBet: 20
};
```

### Updated Player Object

```javascript
let player = {
    id: 'player1',
    name: 'You',
    chips: 100,
    hand: [],
    
    // NEW: Betting properties
    betThisRound: 0,
    totalBet: 0,
    hasActed: false,
    folded: false,
    isAllIn: false
};
```

### Betting Round Flow

```javascript
function startBettingRound() {
    console.log(`=== ${gameState.bettingRound.toUpperCase()} Betting ===`);
    
    // Reset round-specific flags
    for (let player of players) {
        player.betThisRound = 0;
        player.hasActed = false;
    }
    
    gameState.currentBet = 0;
    gameState.currentPlayerIndex = getFirstToAct();
    
    // Start betting action
    promptPlayerAction();
}

function getFirstToAct() {
    // Pre-flop: player left of big blind
    if (gameState.bettingRound === 'pre-flop') {
        return (gameState.bigBlindPosition + 1) % players.length;
    }
    
    // Other rounds: player left of dealer
    return (gameState.dealerPosition + 1) % players.length;
}

function checkIfBettingRoundComplete() {
    const activePlayers = players.filter(p => !p.folded && !p.isAllIn);
    
    // All active players have acted
    const allActed = activePlayers.every(p => p.hasActed);
    
    // All bets are equal
    const allBetsEqual = activePlayers.every(p => 
        p.betThisRound === gameState.currentBet
    );
    
    if (allActed && allBetsEqual) {
        advanceBettingRound();
        return true;
    }
    
    return false;
}

function advanceBettingRound() {
    // Move bets from "this round" to "total"
    for (let player of players) {
        player.totalBet += player.betThisRound;
    }
    
    // Advance round
    switch(gameState.bettingRound) {
        case 'pre-flop':
            dealFlop();
            gameState.bettingRound = 'flop';
            startBettingRound();
            break;
        case 'flop':
            dealTurn();
            gameState.bettingRound = 'turn';
            startBettingRound();
            break;
        case 'turn':
            dealRiver();
            gameState.bettingRound = 'river';
            startBettingRound();
            break;
        case 'river':
            gameState.bettingRound = 'showdown';
            showdown();
            break;
    }
}
```

### Dealing Community Cards

```javascript
function dealFlop() {
    // Burn one card
    deck.pop();
    
    // Deal 3 community cards
    for (let i = 0; i < 3; i++) {
        gameState.communityCards.push(drawCard());
    }
    
    console.log('Flop:', gameState.communityCards);
    updateDisplay();
}

function dealTurn() {
    // Burn one card
    deck.pop();
    
    // Deal 1 community card
    gameState.communityCards.push(drawCard());
    
    console.log('Turn:', gameState.communityCards);
    updateDisplay();
}

function dealRiver() {
    // Burn one card
    deck.pop();
    
    // Deal 1 community card
    gameState.communityCards.push(drawCard());
    
    console.log('River:', gameState.communityCards);
    updateDisplay();
}
```

---

## 🎯 Summary

You've learned:
- ✅ Multiple betting rounds (pre-flop, flop, turn, river)
- ✅ Blinds and antes
- ✅ All betting actions (check, bet, call, raise, fold, all-in)
- ✅ Side pot calculation
- ✅ Betting limits (no-limit, pot-limit, fixed-limit)
- ✅ All-in scenarios and edge cases
- ✅ Integration with game flow

---

## 📋 Practice Exercises

Ready to implement these concepts? Move on to:
- **Exercise 1:** Basic Betting System (single round)
- **Exercise 2:** Multiple Betting Rounds
- **Exercise 3:** Advanced Pot Management (side pots, all-ins)

---

**Next:** Practice exercises to build your advanced betting system!
