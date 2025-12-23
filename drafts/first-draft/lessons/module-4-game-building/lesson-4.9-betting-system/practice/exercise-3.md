# Exercise 3: All-In Scenarios and Side Pots

**Estimated Time:** 90-120 minutes  
**Difficulty:** Advanced  
**Prerequisites:** Exercises 1-2 (Basic Betting & Multiple Rounds)

---

## 🎯 Learning Objectives

By the end of this exercise, you will be able to:
- Implement all-in functionality
- Calculate and manage side pots
- Handle multiple all-in scenarios
- Award pots correctly to eligible players
- Deal with partial all-ins
- Support 3+ players (optional bonus)

---

## 📋 Overview

All-in situations are the most complex part of poker betting. When a player bets all their chips, we need to create side pots so they can only win what they've contributed.

---

## Part 1: All-In Basics

### Step 1: Add All-In Tracking to Game State

```javascript
let gameState = {
    // ... existing properties ...
    
    // NEW: All-in tracking
    playerIsAllIn: false,
    dealerIsAllIn: false,
    
    // NEW: Side pots
    pots: [],  // Array of pot objects
    
    // NEW: Total bets for pot calculation
    playerTotalBet: 0,
    dealerTotalBet: 0
};
```

### Step 2: Implement All-In Action

```javascript
function allIn() {
    const allInAmount = gameState.playerChips;
    
    console.log(`Player goes ALL-IN for $${allInAmount}!`);
    
    if (allInAmount === 0) {
        alert('You have no chips left!');
        return false;
    }
    
    // Player bets all remaining chips
    gameState.playerChips = 0;
    gameState.playerBetThisRound += allInAmount;
    gameState.pot += allInAmount;
    gameState.playerIsAllIn = true;
    
    // Update current bet if this is higher
    if (gameState.playerBetThisRound > gameState.currentBet) {
        gameState.currentBet = gameState.playerBetThisRound;
    }
    
    alert(`You go ALL-IN for $${allInAmount}!`);
    
    updateDisplay();
    
    // Dealer must respond
    dealerAction();
    
    return true;
}

// Add button to HTML
// <button id="all-in-btn" onclick="allIn()">All-In</button>
```

### Step 3: Handle Dealer All-In

```javascript
function dealerAllIn() {
    const allInAmount = gameState.dealerChips;
    
    console.log(`Dealer goes ALL-IN for $${allInAmount}!`);
    
    gameState.dealerChips = 0;
    gameState.dealerBetThisRound += allInAmount;
    gameState.pot += allInAmount;
    gameState.dealerIsAllIn = true;
    
    // Update current bet if this is higher
    if (gameState.dealerBetThisRound > gameState.currentBet) {
        gameState.currentBet = gameState.dealerBetThisRound;
    }
    
    alert(`Dealer goes ALL-IN for $${allInAmount}!`);
    
    updateDisplay();
    
    // Check if both all-in
    if (gameState.playerIsAllIn && gameState.dealerIsAllIn) {
        // Run out all remaining cards
        runOutCards();
    } else if (gameState.playerIsAllIn) {
        // Player all-in, dealer has chips - dealer's choice
        checkBettingRoundComplete();
    }
}
```

---

## Part 2: Side Pot Calculation

### Step 4: Calculate Side Pots

This is the complex part! We need to split the pot based on who can win what:

```javascript
function calculateSidePots() {
    console.log('=== Calculating Side Pots ===');
    
    // Get total bets from both players
    const playerTotal = gameState.playerTotalBet + gameState.playerBetThisRound;
    const dealerTotal = gameState.dealerTotalBet + gameState.dealerBetThisRound;
    
    console.log(`Player total bet: $${playerTotal}`);
    console.log(`Dealer total bet: $${dealerTotal}`);
    
    gameState.pots = [];
    
    // Case 1: Equal bets - single main pot
    if (playerTotal === dealerTotal) {
        gameState.pots.push({
            amount: gameState.pot,
            eligiblePlayers: ['player', 'dealer'],
            type: 'main'
        });
        console.log(`Main pot: $${gameState.pot} (both eligible)`);
        return;
    }
    
    // Case 2: Unequal bets - main pot + side pot
    const minBet = Math.min(playerTotal, dealerTotal);
    const maxBet = Math.max(playerTotal, dealerTotal);
    
    // Main pot: Both players contribute up to minimum bet
    const mainPot = minBet * 2;
    gameState.pots.push({
        amount: mainPot,
        eligiblePlayers: ['player', 'dealer'],
        type: 'main'
    });
    console.log(`Main pot: $${mainPot} (both eligible)`);
    
    // Side pot: Remaining from player who bet more
    const sidePot = maxBet - minBet;
    if (sidePot > 0) {
        const eligiblePlayer = playerTotal > dealerTotal ? 'player' : 'dealer';
        gameState.pots.push({
            amount: sidePot,
            eligiblePlayers: [eligiblePlayer],
            type: 'side'
        });
        console.log(`Side pot: $${sidePot} (only ${eligiblePlayer} eligible)`);
    }
}
```

### Step 5: Award Side Pots

Award each pot to the best hand among eligible players:

```javascript
function awardSidePots() {
    console.log('=== Awarding Pots ===');
    
    calculateSidePots();
    
    const playerHand = getBestHand(gameState.playerHand, gameState.communityCards);
    const dealerHand = getBestHand(gameState.dealerHand, gameState.communityCards);
    
    let messages = [];
    
    for (let i = 0; i < gameState.pots.length; i++) {
        const pot = gameState.pots[i];
        
        console.log(`\nAwarding ${pot.type} pot: $${pot.amount}`);
        console.log(`Eligible players: ${pot.eligiblePlayers.join(', ')}`);
        
        // Only one eligible player - they win automatically
        if (pot.eligiblePlayers.length === 1) {
            const winner = pot.eligiblePlayers[0];
            if (winner === 'player') {
                gameState.playerChips += pot.amount;
                messages.push(`You win ${pot.type} pot: $${pot.amount} (unopposed)`);
            } else {
                gameState.dealerChips += pot.amount;
                messages.push(`Dealer wins ${pot.type} pot: $${pot.amount} (unopposed)`);
            }
            continue;
        }
        
        // Compare hands for this pot
        const winner = compareHandsForPot(playerHand, dealerHand, pot.eligiblePlayers);
        
        if (winner === 'player') {
            gameState.playerChips += pot.amount;
            messages.push(`You win ${pot.type} pot: $${pot.amount} with ${playerHand.name}!`);
        } else if (winner === 'dealer') {
            gameState.dealerChips += pot.amount;
            messages.push(`Dealer wins ${pot.type} pot: $${pot.amount} with ${dealerHand.name}`);
        } else {
            // Tie - split pot
            const split = pot.amount / 2;
            gameState.playerChips += split;
            gameState.dealerChips += split;
            messages.push(`${pot.type} pot split: $${split} each (both have ${playerHand.name})`);
        }
    }
    
    gameState.pot = 0;
    
    return messages;
}

function compareHandsForPot(playerHand, dealerHand, eligiblePlayers) {
    // If only one eligible, they win
    if (!eligiblePlayers.includes('player')) return 'dealer';
    if (!eligiblePlayers.includes('dealer')) return 'player';
    
    // Both eligible - compare hands
    if (playerHand.rank > dealerHand.rank) {
        return 'player';
    } else if (dealerHand.rank > playerHand.rank) {
        return 'dealer';
    }
    
    // Compare values
    for (let i = 0; i < playerHand.values.length; i++) {
        if (playerHand.values[i] > dealerHand.values[i]) {
            return 'player';
        } else if (dealerHand.values[i] > playerHand.values[i]) {
            return 'dealer';
        }
    }
    
    return 'tie';
}
```

---

## Part 3: All-In Scenarios

### Step 6: Both Players All-In

When both players are all-in, no more betting - just deal remaining cards:

```javascript
function runOutCards() {
    console.log('Both players all-in - running out remaining cards...');
    
    alert('Both all-in! Dealing remaining cards...');
    
    // Deal remaining community cards
    setTimeout(() => {
        while (gameState.communityCards.length < 3) {
            dealFlop();
        }
        
        setTimeout(() => {
            if (gameState.communityCards.length < 4) {
                dealTurn();
            }
            
            setTimeout(() => {
                if (gameState.communityCards.length < 5) {
                    dealRiver();
                }
                
                setTimeout(() => {
                    showdownWithSidePots();
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}
```

### Step 7: Player All-In, Dealer Has Chips

Player all-in but dealer can still act:

```javascript
function handlePlayerAllIn() {
    // Player is all-in, dealer must decide
    
    const toCall = gameState.playerBetThisRound - gameState.dealerBetThisRound;
    
    if (toCall <= 0) {
        // Dealer has matched or exceeded - move forward
        checkBettingRoundComplete();
        return;
    }
    
    // Dealer evaluates whether to call the all-in
    const dealerHandValue = evaluateHand(gameState.dealerHand);
    
    if (dealerHandValue.rank >= 2 || toCall <= gameState.bigBlind) {
        // Dealer calls
        if (toCall <= gameState.dealerChips) {
            gameState.dealerChips -= toCall;
            gameState.dealerBetThisRound += toCall;
            gameState.pot += toCall;
            
            alert(`Dealer calls your all-in of $${toCall}`);
            
            // Both committed - run out cards
            runOutCards();
        } else {
            // Dealer also all-in
            dealerAllIn();
        }
    } else {
        // Dealer folds to all-in
        dealerFold();
    }
}
```

### Step 8: Partial All-In (Below Minimum)

Handle when all-in is less than the minimum bet:

```javascript
function handlePartialAllIn(player, amount) {
    // Player goes all-in for less than the minimum bet
    
    console.log(`${player} all-in for $${amount} (below minimum)`);
    
    if (player === 'player') {
        gameState.playerChips = 0;
        gameState.playerBetThisRound += amount;
        gameState.pot += amount;
        gameState.playerIsAllIn = true;
        
        // Current bet doesn't change if all-in is below it
        // Dealer can still call/raise the full amount
        
        alert(`You're all-in for $${amount}! (Other players can still bet more)`);
        
        updateDisplay();
        dealerAction();
    }
}
```

---

## Part 4: Update Showdown

### Step 9: Showdown with Side Pots

```javascript
function showdownWithSidePots() {
    console.log('=== SHOWDOWN (with side pots) ===');
    
    gameState.gamePhase = 'showdown';
    updateDisplay();
    
    // Show both hands
    alert('Showdown! Revealing cards...');
    
    // Calculate and award pots
    const messages = awardSidePots();
    
    // Display all messages
    setTimeout(() => {
        alert(messages.join('\n'));
        
        updateDisplay();
        
        setTimeout(() => {
            startNewRound();
        }, 2000);
    }, 1000);
}

// Update regular showdown to handle all-in
function showdown() {
    // Check if anyone is all-in
    if (gameState.playerIsAllIn || gameState.dealerIsAllIn) {
        showdownWithSidePots();
    } else {
        // Regular showdown (no side pots needed)
        regularShowdown();
    }
}

function regularShowdown() {
    console.log('=== Regular Showdown ===');
    
    gameState.gamePhase = 'showdown';
    updateDisplay();
    
    const playerHand = getBestHand(gameState.playerHand, gameState.communityCards);
    const dealerHand = getBestHand(gameState.dealerHand, gameState.communityCards);
    
    const winner = determineWinner();
    
    let message = '';
    if (winner === 'player') {
        message = `You win with ${playerHand.name}!`;
        gameState.playerChips += gameState.pot;
    } else if (winner === 'dealer') {
        message = `Dealer wins with ${dealerHand.name}`;
        gameState.dealerChips += gameState.pot;
    } else {
        message = `Push! Both have ${playerHand.name}`;
        gameState.playerChips += gameState.pot / 2;
        gameState.dealerChips += gameState.pot / 2;
    }
    
    gameState.pot = 0;
    
    alert(message);
    
    updateDisplay();
    
    setTimeout(() => {
        startNewRound();
    }, 2000);
}
```

---

## Part 5: Update Betting Round Logic

### Step 10: Check for All-In Before Advancing

```javascript
function checkBettingRoundComplete() {
    // Special case: Both all-in
    if (gameState.playerIsAllIn && gameState.dealerIsAllIn) {
        // Run out remaining cards
        runOutCards();
        return true;
    }
    
    // Special case: One all-in, other has matched
    if (gameState.playerIsAllIn || gameState.dealerIsAllIn) {
        // Check if bets are matched
        if (gameState.playerBetThisRound === gameState.dealerBetThisRound) {
            // Advance round or go to showdown
            if (gameState.bettingRound === 'river') {
                showdownWithSidePots();
            } else {
                advanceBettingRound();
            }
            return true;
        }
        return false;
    }
    
    // Normal case: Check if bets are equal and both acted
    const betsEqual = (gameState.playerBetThisRound === gameState.dealerBetThisRound);
    
    if (betsEqual && gameState.currentBet >= 0) {
        if (gameState.bettingRound === 'river') {
            showdown();
        } else {
            advanceBettingRound();
        }
        return true;
    }
    
    return false;
}
```

---

## Part 6: UI Updates

### Step 11: Display All-In Status

```html
<!-- All-In Indicators -->
<div id="all-in-indicators">
    <div id="player-all-in" style="display: none;">
        🔥 YOU ARE ALL-IN! 🔥
    </div>
    <div id="dealer-all-in" style="display: none;">
        💥 DEALER IS ALL-IN! 💥
    </div>
</div>

<!-- Side Pots Display -->
<div id="side-pots-display" style="display: none;">
    <h3>Pots:</h3>
    <div id="pots-list"></div>
</div>
```

```javascript
function updateDisplay() {
    // ... existing code ...
    
    // Show all-in indicators
    document.getElementById('player-all-in').style.display = 
        gameState.playerIsAllIn ? 'block' : 'none';
    
    document.getElementById('dealer-all-in').style.display = 
        gameState.dealerIsAllIn ? 'block' : 'none';
    
    // Show side pots if any
    if (gameState.pots.length > 0) {
        displaySidePots();
    }
    
    // Update button states
    updateButtonStates();
}

function displaySidePots() {
    const potsDisplay = document.getElementById('side-pots-display');
    const potsList = document.getElementById('pots-list');
    
    if (gameState.pots.length === 0) {
        potsDisplay.style.display = 'none';
        return;
    }
    
    potsDisplay.style.display = 'block';
    potsList.innerHTML = '';
    
    for (let pot of gameState.pots) {
        const potDiv = document.createElement('div');
        potDiv.className = 'pot-item';
        potDiv.innerHTML = `
            <strong>${pot.type.toUpperCase()} POT:</strong> $${pot.amount}<br>
            <small>Eligible: ${pot.eligiblePlayers.join(', ')}</small>
        `;
        potsList.appendChild(potDiv);
    }
}

function updateButtonStates() {
    // ... existing code ...
    
    // All-in button always available (unless already all-in)
    const allInBtn = document.getElementById('all-in-btn');
    if (allInBtn) {
        allInBtn.disabled = gameState.playerIsAllIn || 
                            gameState.playerChips === 0 || 
                            gameState.gamePhase === 'showdown';
    }
}
```

---

## Part 7: Reset for New Round

### Step 12: Reset All-In Flags

```javascript
function startNewRound() {
    console.log('=== Starting New Round ===');
    
    // ... existing reset code ...
    
    // Reset all-in flags
    gameState.playerIsAllIn = false;
    gameState.dealerIsAllIn = false;
    
    // Clear side pots
    gameState.pots = [];
    
    // Reset total bets
    gameState.playerTotalBet = 0;
    gameState.dealerTotalBet = 0;
    
    // ... rest of initialization ...
}
```

---

## 🎯 Your Task

### Implementation Checklist

- [ ] Add all-in tracking to game state
- [ ] Implement allIn() function
- [ ] Implement dealerAllIn() function
- [ ] Implement calculateSidePots() function
- [ ] Implement awardSidePots() function
- [ ] Implement compareHandsForPot() function
- [ ] Implement runOutCards() function
- [ ] Implement handlePlayerAllIn() function
- [ ] Implement handlePartialAllIn() function
- [ ] Implement showdownWithSidePots() function
- [ ] Update showdown() to handle all-in
- [ ] Update checkBettingRoundComplete() for all-in
- [ ] Add all-in HTML indicators
- [ ] Implement displaySidePots() function
- [ ] Update updateButtonStates() for all-in button
- [ ] Reset all-in flags in startNewRound()

### Testing Scenarios

1. **Both All-In Pre-Flop**
   - Both go all-in immediately
   - All 5 community cards dealt
   - Side pots calculated correctly

2. **Player All-In, Dealer Calls**
   - Player all-in for $50
   - Dealer has $100, calls $50
   - Main pot: $100 (both eligible)
   - Side pot: $50 (dealer only)

3. **Partial All-In**
   - Player all-in for $3 (big blind is $10)
   - Dealer can still bet $10+
   - Pot split correctly

4. **All-In on River**
   - Player all-in on final betting round
   - Dealer calls or folds
   - Immediate showdown

---

## 💡 Advanced: 3+ Players (Bonus)

If you want to support 3+ players:

```javascript
function calculateMultiPlayerSidePots(players) {
    // Sort players by total bet amount
    const sorted = players
        .map((p, i) => ({ ...p, index: i }))
        .sort((a, b) => a.totalBet - b.totalBet);
    
    const pots = [];
    let previousBet = 0;
    
    for (let i = 0; i < sorted.length; i++) {
        const player = sorted[i];
        const betLevel = player.totalBet;
        
        if (betLevel <= previousBet) continue;
        
        const contribution = betLevel - previousBet;
        
        // Calculate pot for this level
        let potAmount = 0;
        const eligiblePlayers = [];
        
        for (let j = i; j < sorted.length; j++) {
            potAmount += contribution;
            eligiblePlayers.push(sorted[j].id);
        }
        
        if (potAmount > 0) {
            pots.push({
                amount: potAmount,
                eligiblePlayers: eligiblePlayers,
                type: i === 0 ? 'main' : `side ${i}`
            });
        }
        
        previousBet = betLevel;
    }
    
    return pots;
}
```

---

## 🏆 Success Criteria

Your all-in system should:
- ✅ Handle both players going all-in
- ✅ Calculate side pots correctly
- ✅ Award pots to eligible players only
- ✅ Handle partial all-ins (below minimum)
- ✅ Run out remaining cards when both all-in
- ✅ Display all-in status clearly
- ✅ Show side pot breakdowns
- ✅ Work with multiple betting rounds

---

## 🎓 Bonus Challenges

1. **Pot Percentage Display**
   - Show what % of total pot each player can win

2. **All-In Animation**
   - Dramatic animation when player goes all-in
   - Sound effects

3. **Multiple Side Pots**
   - Support 3+ players with complex side pots
   - Clear visual representation

4. **Pot Odds Calculator**
   - Show player their pot odds
   - Help them decide whether to call

---

**Time Estimate:** 90-120 minutes

**Congratulations!** You've implemented the most complex part of poker betting - all-in scenarios and side pots. This is professional-level poker software!

**Next:** Complete your betting system and move on to Lesson 4.10 - AI Dealer Intelligence!
