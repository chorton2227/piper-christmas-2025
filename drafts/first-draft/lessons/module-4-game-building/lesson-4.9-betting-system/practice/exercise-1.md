# Exercise 1: Basic Betting System

**Estimated Time:** 60-90 minutes  
**Difficulty:** Intermediate  
**Prerequisites:** Lesson 4.8 (Game Flow & Logic)

---

## 🎯 Learning Objectives

By the end of this exercise, you will be able to:
- Implement basic betting actions (bet, call, raise, fold)
- Track the current bet amount
- Validate betting amounts
- Update the pot correctly
- Handle betting rounds

---

## 📋 Overview

In this exercise, you'll add a basic betting system to your poker game. You'll start with simple betting actions and gradually add more complexity.

---

## Part 1: Enhanced Game State

### Step 1: Update Game State Structure

Add betting-related properties to your game state:

```javascript
let gameState = {
    // Existing properties
    playerChips: 100,
    dealerChips: 100,
    pot: 0,
    ante: 5,
    playerHand: [],
    dealerHand: [],
    gamePhase: 'betting',
    playerFolded: false,
    
    // NEW: Betting properties
    currentBet: 0,           // Current bet to call
    playerBetThisRound: 0,   // Player's bet this round
    dealerBetThisRound: 0,   // Dealer's bet this round
    minimumBet: 5,           // Minimum bet amount (like ante)
    bettingRound: 1,         // Which betting round (1, 2, etc.)
    maxRaises: 3,            // Maximum raises per round
    raisesThisRound: 0       // Current raise count
};
```

---

## Part 2: Betting Action Functions

### Step 2: Implement Check Action

The check action passes without betting (only available when no bet to call):

```javascript
function check() {
    console.log('Player checks');
    
    // Can only check if no bet to call
    if (gameState.currentBet > 0 && 
        gameState.playerBetThisRound < gameState.currentBet) {
        alert('Cannot check - there is a bet to call!');
        return false;
    }
    
    // If dealer also checks, go to showdown
    if (gameState.dealerBetThisRound === gameState.playerBetThisRound) {
        showdown();
    } else {
        // Dealer's turn
        dealerAction();
    }
    
    updateDisplay();
    return true;
}
```

### Step 3: Implement Bet Action

The bet action makes the first bet of the round:

```javascript
function bet(amount) {
    console.log(`Player bets $${amount}`);
    
    // Validate bet amount
    if (amount < gameState.minimumBet) {
        alert(`Minimum bet is $${gameState.minimumBet}`);
        return false;
    }
    
    if (amount > gameState.playerChips) {
        alert('Not enough chips!');
        return false;
    }
    
    // Can only bet if no current bet
    if (gameState.currentBet > 0) {
        alert('There is already a bet - use raise instead!');
        return false;
    }
    
    // Place bet
    gameState.playerChips -= amount;
    gameState.playerBetThisRound = amount;
    gameState.pot += amount;
    gameState.currentBet = amount;
    
    updateDisplay();
    
    // Dealer's turn to respond
    dealerAction();
    
    return true;
}
```

### Step 4: Update Call Action

Enhance the call action to work with the betting system:

```javascript
function call() {
    const callAmount = gameState.currentBet - gameState.playerBetThisRound;
    
    console.log(`Player calls $${callAmount}`);
    
    if (callAmount <= 0) {
        alert('Nothing to call! Use check instead.');
        return false;
    }
    
    if (callAmount > gameState.playerChips) {
        alert('Not enough chips to call! (Would need all-in)');
        return false;
    }
    
    // Call the bet
    gameState.playerChips -= callAmount;
    gameState.playerBetThisRound += callAmount;
    gameState.pot += callAmount;
    
    updateDisplay();
    
    // Both players have matched - go to showdown
    showdown();
    
    return true;
}
```

### Step 5: Update Raise Action

Enhance the raise action:

```javascript
function raise(raiseAmount) {
    // Calculate total amount needed
    const callAmount = gameState.currentBet - gameState.playerBetThisRound;
    const totalAmount = callAmount + raiseAmount;
    
    console.log(`Player raises $${raiseAmount} (total: $${totalAmount})`);
    
    // Check raise limit
    if (gameState.raisesThisRound >= gameState.maxRaises) {
        alert(`Maximum of ${gameState.maxRaises} raises per round!`);
        return false;
    }
    
    // Validate amounts
    if (raiseAmount < gameState.minimumBet) {
        alert(`Minimum raise is $${gameState.minimumBet}`);
        return false;
    }
    
    if (totalAmount > gameState.playerChips) {
        alert('Not enough chips for that raise!');
        return false;
    }
    
    // Place raise
    gameState.playerChips -= totalAmount;
    gameState.playerBetThisRound += totalAmount;
    gameState.pot += totalAmount;
    gameState.currentBet += raiseAmount;
    gameState.raisesThisRound++;
    
    updateDisplay();
    
    // Dealer's turn to respond
    dealerAction();
    
    return true;
}
```

### Step 6: Keep Fold Action

The fold action stays mostly the same:

```javascript
function fold() {
    console.log('Player folds');
    
    gameState.playerFolded = true;
    
    // Dealer wins pot
    gameState.dealerChips += gameState.pot;
    gameState.pot = 0;
    
    alert('You folded! Dealer wins.');
    
    updateDisplay();
    
    setTimeout(() => {
        startNewRound();
    }, 1500);
    
    return true;
}
```

---

## Part 3: Dealer Response Logic

### Step 7: Implement Basic Dealer AI

Add logic for dealer to respond to player actions:

```javascript
function dealerAction() {
    console.log('Dealer is thinking...');
    
    // Delay for realism
    setTimeout(() => {
        // Evaluate dealer's hand
        const dealerHandValue = evaluateHand(gameState.dealerHand);
        
        // Simple AI logic
        if (gameState.currentBet === 0) {
            // No bet yet - dealer can check or bet
            if (dealerHandValue.rank >= 2) {
                // Dealer has pair or better - bet
                dealerBet(gameState.minimumBet);
            } else {
                // Weak hand - check
                dealerCheck();
            }
        } else {
            // There's a bet - dealer must call, raise, or fold
            const callAmount = gameState.currentBet - gameState.dealerBetThisRound;
            
            if (dealerHandValue.rank >= 3) {
                // Strong hand (two pair+) - raise if possible
                if (gameState.raisesThisRound < gameState.maxRaises) {
                    dealerRaise(gameState.minimumBet);
                } else {
                    dealerCall();
                }
            } else if (dealerHandValue.rank >= 2) {
                // Decent hand (pair) - call
                dealerCall();
            } else {
                // Weak hand - fold
                dealerFold();
            }
        }
    }, 1000); // 1 second delay
}

function dealerCheck() {
    console.log('Dealer checks');
    
    // If both checked, go to showdown
    if (gameState.playerBetThisRound === gameState.dealerBetThisRound) {
        showdown();
    }
    
    updateDisplay();
}

function dealerBet(amount) {
    console.log(`Dealer bets $${amount}`);
    
    gameState.dealerChips -= amount;
    gameState.dealerBetThisRound = amount;
    gameState.pot += amount;
    gameState.currentBet = amount;
    
    alert(`Dealer bets $${amount}. Your turn!`);
    
    updateDisplay();
}

function dealerCall() {
    const callAmount = gameState.currentBet - gameState.dealerBetThisRound;
    
    console.log(`Dealer calls $${callAmount}`);
    
    if (callAmount > gameState.dealerChips) {
        // Dealer doesn't have enough - folds
        dealerFold();
        return;
    }
    
    gameState.dealerChips -= callAmount;
    gameState.dealerBetThisRound += callAmount;
    gameState.pot += callAmount;
    
    alert('Dealer calls. Going to showdown!');
    
    updateDisplay();
    
    // Both matched - showdown
    showdown();
}

function dealerRaise(raiseAmount) {
    const callAmount = gameState.currentBet - gameState.dealerBetThisRound;
    const totalAmount = callAmount + raiseAmount;
    
    console.log(`Dealer raises $${raiseAmount}`);
    
    if (totalAmount > gameState.dealerChips) {
        // Can't afford raise - just call
        dealerCall();
        return;
    }
    
    gameState.dealerChips -= totalAmount;
    gameState.dealerBetThisRound += totalAmount;
    gameState.pot += totalAmount;
    gameState.currentBet += raiseAmount;
    gameState.raisesThisRound++;
    
    alert(`Dealer raises $${raiseAmount}! Your turn.`);
    
    updateDisplay();
}

function dealerFold() {
    console.log('Dealer folds');
    
    gameState.playerChips += gameState.pot;
    gameState.pot = 0;
    
    alert('Dealer folds! You win!');
    
    updateDisplay();
    
    setTimeout(() => {
        startNewRound();
    }, 1500);
}
```

---

## Part 4: UI Updates

### Step 8: Add Betting Buttons

Update your HTML to include betting action buttons:

```html
<!-- Betting Controls -->
<div id="betting-controls">
    <button id="check-btn" onclick="check()">Check</button>
    <button id="bet-btn" onclick="showBetInput()">Bet</button>
    <button id="call-btn" onclick="call()">Call</button>
    <button id="raise-btn" onclick="showRaiseInput()">Raise</button>
    <button id="fold-btn" onclick="fold()">Fold</button>
</div>

<!-- Bet Input Modal -->
<div id="bet-modal" style="display: none;">
    <h3>Enter Bet Amount</h3>
    <input type="number" id="bet-amount" min="5" step="1" value="10">
    <button onclick="confirmBet()">Place Bet</button>
    <button onclick="hideBetInput()">Cancel</button>
</div>

<!-- Raise Input Modal -->
<div id="raise-modal" style="display: none;">
    <h3>Enter Raise Amount</h3>
    <input type="number" id="raise-amount" min="5" step="1" value="10">
    <button onclick="confirmRaise()">Place Raise</button>
    <button onclick="hideRaiseInput()">Cancel</button>
</div>

<!-- Betting Info Display -->
<div id="betting-info">
    <div>Current Bet: $<span id="current-bet">0</span></div>
    <div>Your Bet This Round: $<span id="player-bet-round">0</span></div>
    <div>To Call: $<span id="to-call">0</span></div>
</div>
```

### Step 9: Implement Input Modals

Add functions to show/hide betting input:

```javascript
function showBetInput() {
    document.getElementById('bet-modal').style.display = 'block';
    document.getElementById('bet-amount').value = gameState.minimumBet;
    document.getElementById('bet-amount').focus();
}

function hideBetInput() {
    document.getElementById('bet-modal').style.display = 'none';
}

function confirmBet() {
    const amount = parseInt(document.getElementById('bet-amount').value);
    hideBetInput();
    bet(amount);
}

function showRaiseInput() {
    document.getElementById('raise-modal').style.display = 'block';
    document.getElementById('raise-amount').value = gameState.minimumBet;
    document.getElementById('raise-amount').focus();
}

function hideRaiseInput() {
    document.getElementById('raise-modal').style.display = 'none';
}

function confirmRaise() {
    const amount = parseInt(document.getElementById('raise-amount').value);
    hideRaiseInput();
    raise(amount);
}
```

### Step 10: Update Display Function

Enhance updateDisplay to show betting info:

```javascript
function updateDisplay() {
    // Update chip counts
    document.getElementById('player-chips').textContent = `$${gameState.playerChips}`;
    document.getElementById('dealer-chips').textContent = `$${gameState.dealerChips}`;
    
    // Update pot
    document.getElementById('pot-amount').textContent = `Pot: $${gameState.pot}`;
    
    // Update betting info
    document.getElementById('current-bet').textContent = gameState.currentBet;
    document.getElementById('player-bet-round').textContent = gameState.playerBetThisRound;
    
    const toCall = Math.max(0, gameState.currentBet - gameState.playerBetThisRound);
    document.getElementById('to-call').textContent = toCall;
    
    // Update hands
    displayHand('player-hand', gameState.playerHand, false);
    
    if (gameState.gamePhase === 'showdown') {
        displayHand('dealer-hand', gameState.dealerHand, false);
    } else {
        displayHand('dealer-hand', gameState.dealerHand, true);
    }
    
    // Update button states
    updateButtonStates();
}

function updateButtonStates() {
    const checkBtn = document.getElementById('check-btn');
    const betBtn = document.getElementById('bet-btn');
    const callBtn = document.getElementById('call-btn');
    const raiseBtn = document.getElementById('raise-btn');
    const foldBtn = document.getElementById('fold-btn');
    
    // Disable all during showdown
    if (gameState.gamePhase === 'showdown') {
        checkBtn.disabled = true;
        betBtn.disabled = true;
        callBtn.disabled = true;
        raiseBtn.disabled = true;
        foldBtn.disabled = true;
        return;
    }
    
    // Check available only when no bet
    checkBtn.disabled = !(gameState.currentBet === 0 || 
                          gameState.playerBetThisRound === gameState.currentBet);
    
    // Bet available only when no bet
    betBtn.disabled = !(gameState.currentBet === 0);
    
    // Call available when there's a bet to call
    const toCall = gameState.currentBet - gameState.playerBetThisRound;
    callBtn.disabled = !(toCall > 0 && toCall <= gameState.playerChips);
    
    // Raise available when can afford it and not at max raises
    raiseBtn.disabled = !(gameState.raisesThisRound < gameState.maxRaises && 
                          gameState.playerChips > toCall + gameState.minimumBet);
    
    // Fold always available
    foldBtn.disabled = false;
}
```

---

## Part 5: Round Reset

### Step 11: Update Start New Round

Reset betting state when starting new round:

```javascript
function startNewRound() {
    console.log('=== Starting New Round ===');
    
    // Reset game state
    gameState.pot = 0;
    gameState.playerHand = [];
    gameState.dealerHand = [];
    gameState.playerFolded = false;
    gameState.gamePhase = 'betting';
    
    // Reset betting state
    gameState.currentBet = 0;
    gameState.playerBetThisRound = 0;
    gameState.dealerBetThisRound = 0;
    gameState.raisesThisRound = 0;
    gameState.bettingRound = 1;
    
    // Check if player can afford ante
    if (gameState.playerChips < gameState.ante) {
        gameOver('You ran out of chips!');
        return;
    }
    
    // Place ante
    placeAnte();
    
    // Deal cards
    dealInitialCards();
    
    // Update display
    updateDisplay();
}
```

---

## 🎯 Your Task

### Implementation Checklist

- [ ] Update game state with betting properties
- [ ] Implement check() function
- [ ] Implement bet() function
- [ ] Update call() function
- [ ] Update raise() function
- [ ] Keep fold() function
- [ ] Implement dealerAction() with AI logic
- [ ] Implement dealer response functions
- [ ] Add betting buttons to HTML
- [ ] Implement bet/raise input modals
- [ ] Update updateDisplay() for betting info
- [ ] Update updateButtonStates() for action availability
- [ ] Update startNewRound() to reset betting state
- [ ] Test all betting actions

### Testing Scenarios

Test these scenarios:

1. **Check Scenario**
   - Both players check → showdown
   - Try to check when bet exists → error

2. **Bet Scenario**
   - Player bets → dealer responds
   - Try to bet below minimum → error

3. **Call Scenario**
   - Dealer bets, player calls → showdown
   - Try to call with insufficient chips → error

4. **Raise Scenario**
   - Player raises → dealer responds
   - Hit max raises limit → can't raise more

5. **Fold Scenario**
   - Player folds → dealer wins
   - Dealer folds → player wins

---

## 💡 Hints

1. **Always Validate**: Check chip amounts before any action
2. **Update Display**: Call updateDisplay() after every action
3. **Button States**: Disable unavailable actions
4. **Console Logging**: Log every action for debugging
5. **AI Logic**: Start simple, make dealer smarter later

---

## 🏆 Success Criteria

Your betting system should:
- ✅ Allow all five actions (check, bet, call, raise, fold)
- ✅ Validate all betting amounts
- ✅ Update pot correctly
- ✅ Track current bet accurately
- ✅ Dealer responds intelligently
- ✅ Button states reflect available actions
- ✅ Handle edge cases (insufficient chips, max raises)

---

**Time Estimate:** 60-90 minutes

**Next:** Exercise 2 - Multiple Betting Rounds
