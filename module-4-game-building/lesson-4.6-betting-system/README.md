# Lesson 4.6: Betting System 💰

## 🎯 Lesson Objectives

By the end of this lesson, you will:
- Implement all poker betting actions (check, call, raise, fold)
- Validate betting amounts (minimum/maximum bets)
- Handle all-in situations when players run out of chips
- Calculate and manage side pots with multiple all-in players
- Implement blind posting (small blind and big blind)
- Build a complete betting interface with controls and validation

## 📚 Introduction to Poker Betting

### The Betting Actions

In Texas Hold'em, players have five possible actions:

1. **Fold** - Give up the hand, forfeit any chips already bet
2. **Check** - Pass action without betting (only if no bet to call)
3. **Call** - Match the current bet
4. **Raise** - Increase the current bet
5. **All-In** - Bet all remaining chips

### Betting Rules

**Important rules to implement:**
- Must at least **call** the current bet to stay in the hand
- **Raises** must be at least the size of the previous raise
- Can only **check** if no one has bet yet
- Going **all-in** means betting all remaining chips
- Once all-in, you can't bet anymore but stay in for side pots

## ✅ Implementing Check

### When Can You Check?

You can check when:
- No one has bet in the current betting round (currentBet === 0)
- You've already matched the current bet

### Check Function

```javascript
function check(gameState, playerId) {
    const player = getPlayerById(gameState, playerId);
    
    // Validate
    if (!player) {
        return { success: false, error: 'Player not found' };
    }
    
    if (player.folded) {
        return { success: false, error: 'Player has folded' };
    }
    
    if (player.bet < gameState.currentBet) {
        return { success: false, error: 'Cannot check, must call or raise' };
    }
    
    // Check is valid
    console.log(`${player.name} checks`);
    
    // Move to next player
    nextPlayerTurn(gameState);
    
    return { success: true, action: 'check' };
}
```

**Example:**
```javascript
// No bets yet, player can check
gameState.currentBet = 0;
check(gameState, 0);  // ✅ Success

// Someone bet $50, player can't check
gameState.currentBet = 50;
check(gameState, 0);  // ❌ Error: must call or raise
```

## ☎️ Implementing Call

### What is Calling?

Calling means matching the current bet. If the current bet is $50 and you've bet $20, calling costs you $30 more.

### Call Function

```javascript
function call(gameState, playerId) {
    const player = getPlayerById(gameState, playerId);
    
    // Validate
    if (!player) {
        return { success: false, error: 'Player not found' };
    }
    
    if (player.folded) {
        return { success: false, error: 'Player has folded' };
    }
    
    // Calculate how much more the player needs to bet
    const amountToCall = gameState.currentBet - player.bet;
    
    if (amountToCall === 0) {
        // Nothing to call, should check instead
        return check(gameState, playerId);
    }
    
    // Check if player can afford to call
    if (amountToCall > player.chips) {
        // Player doesn't have enough, must go all-in
        return allIn(gameState, playerId);
    }
    
    // Place the call bet
    player.chips -= amountToCall;
    player.bet += amountToCall;
    gameState.pot += amountToCall;
    
    console.log(`${player.name} calls $${amountToCall}`);
    
    // Move to next player
    nextPlayerTurn(gameState);
    
    return { 
        success: true, 
        action: 'call',
        amount: amountToCall
    };
}
```

**Example:**
```javascript
// Current bet is $100, player has bet $50
gameState.currentBet = 100;
player.bet = 50;
player.chips = 1000;

call(gameState, player.id);
// Result: Player bets $50 more, now has $950 chips
```

## 📈 Implementing Raise

### Raise Rules

- Minimum raise = current bet + size of last raise
- If no raises yet, minimum raise = current bet + big blind
- Maximum raise = all your chips (all-in)

### Calculating Minimum Raise

```javascript
function calculateMinRaise(gameState) {
    if (gameState.currentBet === 0) {
        // No bet yet, minimum is big blind
        return gameState.bigBlind;
    }
    
    // Minimum raise is double the current bet
    // (current bet + size of last raise)
    return gameState.currentBet + gameState.minRaise;
}
```

### Raise Function

```javascript
function raise(gameState, playerId, raiseAmount) {
    const player = getPlayerById(gameState, playerId);
    
    // Validate
    if (!player) {
        return { success: false, error: 'Player not found' };
    }
    
    if (player.folded) {
        return { success: false, error: 'Player has folded' };
    }
    
    // Calculate minimum raise
    const minRaise = calculateMinRaise(gameState);
    
    if (raiseAmount < minRaise) {
        return { 
            success: false, 
            error: `Minimum raise is $${minRaise}` 
        };
    }
    
    // Calculate total amount player needs to put in
    const amountToCall = gameState.currentBet - player.bet;
    const totalAmount = amountToCall + raiseAmount;
    
    if (totalAmount > player.chips) {
        return { 
            success: false, 
            error: 'Not enough chips for this raise' 
        };
    }
    
    // Place the bet
    player.chips -= totalAmount;
    player.bet += totalAmount;
    gameState.pot += totalAmount;
    
    // Update current bet
    const oldBet = gameState.currentBet;
    gameState.currentBet = player.bet;
    
    // Update minimum raise for next player
    gameState.minRaise = gameState.currentBet - oldBet;
    
    console.log(`${player.name} raises to $${gameState.currentBet}`);
    
    // Move to next player
    nextPlayerTurn(gameState);
    
    return { 
        success: true, 
        action: 'raise',
        amount: totalAmount,
        newBet: gameState.currentBet
    };
}
```

**Example:**
```javascript
// Current bet is $100, player has bet $0
gameState.currentBet = 100;
player.bet = 0;
player.chips = 1000;

raise(gameState, player.id, 100);
// Player puts in $200 total ($100 to call + $100 raise)
// New current bet is $200
// Player has $800 chips left
```

## 🚫 Implementing Fold

### Fold Function

```javascript
function fold(gameState, playerId) {
    const player = getPlayerById(gameState, playerId);
    
    // Validate
    if (!player) {
        return { success: false, error: 'Player not found' };
    }
    
    if (player.folded) {
        return { success: false, error: 'Player already folded' };
    }
    
    // Mark player as folded
    player.folded = true;
    
    console.log(`${player.name} folds`);
    
    // Check if only one player remains
    const activePlayers = gameState.players.filter(p => !p.folded);
    if (activePlayers.length === 1) {
        // Award pot to last remaining player
        endHandWithWinner(gameState, activePlayers[0]);
        return { success: true, action: 'fold', handOver: true };
    }
    
    // Move to next player
    nextPlayerTurn(gameState);
    
    return { success: true, action: 'fold' };
}
```

**Important:** When a player folds, check if only one player remains. If so, that player wins the pot immediately without showdown!

## 💸 Implementing All-In

### All-In Function

```javascript
function allIn(gameState, playerId) {
    const player = getPlayerById(gameState, playerId);
    
    // Validate
    if (!player) {
        return { success: false, error: 'Player not found' };
    }
    
    if (player.folded) {
        return { success: false, error: 'Player has folded' };
    }
    
    if (player.chips === 0) {
        return { success: false, error: 'Player has no chips' };
    }
    
    // Bet all remaining chips
    const allInAmount = player.chips;
    player.chips = 0;
    player.bet += allInAmount;
    gameState.pot += allInAmount;
    player.allIn = true;
    
    // Update current bet if this is the highest
    if (player.bet > gameState.currentBet) {
        gameState.currentBet = player.bet;
    }
    
    console.log(`${player.name} goes all-in for $${allInAmount}`);
    
    // Move to next player
    nextPlayerTurn(gameState);
    
    return { 
        success: true, 
        action: 'all-in',
        amount: allInAmount
    };
}
```

**All-In Special Cases:**
- Player can go all-in for less than the current bet
- This doesn't reopen betting for players who already acted
- Creates side pots (covered next)

## 🎲 Side Pots

### Why Side Pots?

When a player goes all-in for less than the current bet, we need **side pots**.

**Example:**
- Player A has $100, goes all-in
- Player B has $500, calls $100
- Player C has $500, calls $100
- Main pot = $300 (everyone's $100)
- Player B and C continue betting, creating a side pot

### Side Pot Structure

```javascript
{
    amount: 300,
    eligiblePlayers: [0, 1, 2]  // Player IDs who can win this pot
}
```

### Calculating Side Pots

```javascript
function calculateSidePots(gameState) {
    const pots = [];
    const players = gameState.players.filter(p => !p.folded);
    
    // Sort players by how much they've bet
    const playerBets = players
        .map(p => ({ id: p.id, bet: p.bet }))
        .sort((a, b) => a.bet - b.bet);
    
    let previousBet = 0;
    let remainingPlayers = [...players];
    
    for (let i = 0; i < playerBets.length; i++) {
        const currentBet = playerBets[i].bet;
        const betDifference = currentBet - previousBet;
        
        if (betDifference > 0 && remainingPlayers.length > 0) {
            // Create a pot for this betting level
            const potAmount = betDifference * remainingPlayers.length;
            
            pots.push({
                amount: potAmount,
                eligiblePlayers: remainingPlayers.map(p => p.id)
            });
        }
        
        // Remove this player from remaining players
        remainingPlayers = remainingPlayers.filter(p => p.id !== playerBets[i].id);
        previousBet = currentBet;
    }
    
    return pots;
}
```

**Example:**
```javascript
// Player 1 bets $100 (all-in)
// Player 2 bets $300 (all-in)
// Player 3 bets $500

const pots = calculateSidePots(gameState);
// [
//   { amount: 300, eligiblePlayers: [1, 2, 3] },  // Main pot: everyone's $100
//   { amount: 400, eligiblePlayers: [2, 3] },     // Side pot 1: Players 2&3's extra $200
//   { amount: 200, eligiblePlayers: [3] }         // Side pot 2: Player 3's extra $200
// ]
```

### Awarding Side Pots

```javascript
function awardSidePots(gameState, pots) {
    // Evaluate hands for each pot
    for (const pot of pots) {
        // Get eligible players
        const eligible = pot.eligiblePlayers.map(id => getPlayerById(gameState, id));
        
        // Find best hand among eligible players
        const winner = findBestHand(eligible);
        
        // Award pot to winner
        winner.chips += pot.amount;
        console.log(`${winner.name} wins $${pot.amount}`);
    }
}
```

## 🎯 Posting Blinds

### Small Blind and Big Blind

Before each hand, two players post forced bets:
- **Small Blind** - Usually half the big blind (e.g., $10)
- **Big Blind** - The minimum bet for the hand (e.g., $20)

### Posting Blinds Function

```javascript
function postBlinds(gameState) {
    const { players, smallBlind, bigBlind } = gameState;
    
    // Find blind players
    const sbPlayer = players.find(p => p.isSmallBlind);
    const bbPlayer = players.find(p => p.isBigBlind);
    
    // Post small blind
    if (sbPlayer) {
        const sbAmount = Math.min(smallBlind, sbPlayer.chips);
        sbPlayer.chips -= sbAmount;
        sbPlayer.bet = sbAmount;
        gameState.pot += sbAmount;
        
        if (sbPlayer.chips === 0) {
            sbPlayer.allIn = true;
        }
        
        console.log(`${sbPlayer.name} posts small blind $${sbAmount}`);
    }
    
    // Post big blind
    if (bbPlayer) {
        const bbAmount = Math.min(bigBlind, bbPlayer.chips);
        bbPlayer.chips -= bbAmount;
        bbPlayer.bet = bbAmount;
        gameState.pot += bbAmount;
        gameState.currentBet = bbAmount;
        
        if (bbPlayer.chips === 0) {
            bbPlayer.allIn = true;
        }
        
        console.log(`${bbPlayer.name} posts big blind $${bbAmount}`);
    }
}
```

**Special Cases:**
- If player doesn't have enough for full blind, they post what they have
- If small blind goes all-in, big blind still posts full amount
- In heads-up (2 players), dealer posts small blind

## 🎮 Building the Betting Interface

### Betting Control Panel HTML

```html
<div id="betting-controls">
    <div class="player-info">
        <div class="chips">Your Chips: $<span id="player-chips">1000</span></div>
        <div class="current-bet">Current Bet: $<span id="current-bet">0</span></div>
        <div class="to-call">To Call: $<span id="to-call">0</span></div>
    </div>
    
    <div class="action-buttons">
        <button id="fold-btn" class="btn btn-fold">Fold</button>
        <button id="check-btn" class="btn btn-check">Check</button>
        <button id="call-btn" class="btn btn-call">Call $<span id="call-amount">0</span></button>
        <button id="raise-btn" class="btn btn-raise">Raise</button>
        <button id="all-in-btn" class="btn btn-all-in">All-In</button>
    </div>
    
    <div class="raise-controls" style="display: none;">
        <label>Raise Amount:</label>
        <input type="range" id="raise-slider" min="20" max="1000" value="20">
        <span id="raise-amount">$20</span>
        <button id="confirm-raise-btn">Confirm Raise</button>
        <button id="cancel-raise-btn">Cancel</button>
    </div>
</div>
```

### Updating UI Based on Game State

```javascript
function updateBettingControls(gameState, playerId) {
    const player = getPlayerById(gameState, playerId);
    
    if (!player) return;
    
    // Update player info
    document.getElementById('player-chips').textContent = player.chips;
    document.getElementById('current-bet').textContent = gameState.currentBet;
    
    const toCall = gameState.currentBet - player.bet;
    document.getElementById('to-call').textContent = toCall;
    document.getElementById('call-amount').textContent = toCall;
    
    // Enable/disable buttons based on game state
    const checkBtn = document.getElementById('check-btn');
    const callBtn = document.getElementById('call-btn');
    const raiseBtn = document.getElementById('raise-btn');
    
    // Can check if no bet to call
    checkBtn.disabled = toCall > 0;
    
    // Can call if there's a bet to call
    callBtn.disabled = toCall === 0;
    
    // Can raise if player has enough chips
    const minRaise = calculateMinRaise(gameState);
    raiseBtn.disabled = player.chips < minRaise + toCall;
    
    // Update raise slider
    const slider = document.getElementById('raise-slider');
    slider.min = minRaise;
    slider.max = player.chips;
    slider.value = minRaise;
}
```

### Handling Button Clicks

```javascript
// Fold button
document.getElementById('fold-btn').addEventListener('click', () => {
    const result = fold(gameState, currentPlayerId);
    if (result.success) {
        updateUI(gameState);
    }
});

// Check button
document.getElementById('check-btn').addEventListener('click', () => {
    const result = check(gameState, currentPlayerId);
    if (result.success) {
        updateUI(gameState);
    } else {
        alert(result.error);
    }
});

// Call button
document.getElementById('call-btn').addEventListener('click', () => {
    const result = call(gameState, currentPlayerId);
    if (result.success) {
        updateUI(gameState);
    }
});

// Raise button - shows slider
document.getElementById('raise-btn').addEventListener('click', () => {
    document.querySelector('.raise-controls').style.display = 'block';
});

// Confirm raise
document.getElementById('confirm-raise-btn').addEventListener('click', () => {
    const raiseAmount = parseInt(document.getElementById('raise-slider').value);
    const result = raise(gameState, currentPlayerId, raiseAmount);
    
    if (result.success) {
        document.querySelector('.raise-controls').style.display = 'none';
        updateUI(gameState);
    } else {
        alert(result.error);
    }
});

// All-in button
document.getElementById('all-in-btn').addEventListener('click', () => {
    const result = allIn(gameState, currentPlayerId);
    if (result.success) {
        updateUI(gameState);
    }
});
```

### Raise Slider Interactivity

```javascript
const slider = document.getElementById('raise-slider');
const amountDisplay = document.getElementById('raise-amount');

slider.addEventListener('input', (e) => {
    amountDisplay.textContent = `$${e.target.value}`;
});
```

## 💡 Best Practices

### 1. Always Validate Actions

```javascript
function validateBettingAction(gameState, player, action, amount) {
    // Check player exists and is active
    if (!player || player.folded) {
        return { valid: false, error: 'Invalid player' };
    }
    
    // Check it's player's turn
    if (gameState.currentPlayerIndex !== player.id) {
        return { valid: false, error: 'Not your turn' };
    }
    
    // Validate specific action
    // ... more checks ...
    
    return { valid: true };
}
```

### 2. Return Detailed Results

```javascript
// ✅ GOOD: Detailed result
return {
    success: true,
    action: 'raise',
    amount: 200,
    newBet: 300,
    chipsRemaining: 800
};

// ❌ BAD: Just true/false
return true;
```

### 3. Handle Edge Cases

```javascript
// What if player doesn't have enough to call?
if (amountToCall > player.chips) {
    // Force all-in instead
    return allIn(gameState, playerId);
}

// What if only one player remains after fold?
if (activePlayers.length === 1) {
    endHandWithWinner(gameState, activePlayers[0]);
}
```

## 🔍 Common Mistakes to Avoid

### Mistake 1: Not Updating All Related State

```javascript
// ❌ BAD: Forgot to update pot
player.chips -= 100;
player.bet += 100;
// Missing: gameState.pot += 100;

// ✅ GOOD: Update everything
player.chips -= 100;
player.bet += 100;
gameState.pot += 100;
```

### Mistake 2: Allowing Invalid Actions

```javascript
// ❌ BAD: No validation
function check(gameState, playerId) {
    nextPlayerTurn(gameState);
}

// ✅ GOOD: Validate first
function check(gameState, playerId) {
    if (gameState.currentBet > player.bet) {
        return { success: false, error: 'Cannot check' };
    }
    nextPlayerTurn(gameState);
}
```

### Mistake 3: Incorrect Side Pot Calculation

```javascript
// ❌ BAD: Creates one pot for everyone
const pot = players.reduce((sum, p) => sum + p.bet, 0);

// ✅ GOOD: Separate pots for different bet levels
const pots = calculateSidePots(gameState);
```

## 🏆 Key Takeaways

- **Five actions:** Fold, Check, Call, Raise, All-In
- **Validation** prevents invalid bets and actions
- **All-in** can create side pots when players have different chip counts
- **Side pots** require tracking which players are eligible for each pot
- **Blinds** are forced bets posted before cards are dealt
- **Minimum raise** is typically double the current bet
- **UI controls** should update based on valid actions

## 📝 Practice Challenges

Ready to practice? Check the `practice/` folder for exercises:

1. **Exercise 1:** Implement check, call, and fold functions
2. **Exercise 2:** Build a raise function with validation
3. **Exercise 3:** Calculate side pots with 3 all-in players
4. **Exercise 4:** Create a betting control panel UI

## 🎯 What's Next?

In **Lesson 4.7**, we'll build **AI Opponent Logic** - creating computer players that can make smart betting decisions!

---

**Outstanding! 🎉 You now understand the complete poker betting system. This is one of the most complex parts of the game!**
