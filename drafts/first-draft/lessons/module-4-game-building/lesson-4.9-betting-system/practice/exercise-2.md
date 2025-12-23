# Exercise 2: Multiple Betting Rounds & Blinds

**Estimated Time:** 90-120 minutes  
**Difficulty:** Advanced  
**Prerequisites:** Exercise 1 (Basic Betting System)

---

## 🎯 Learning Objectives

By the end of this exercise, you will be able to:
- Implement multiple betting rounds
- Add blinds and dealer button
- Deal community cards (flop, turn, river)
- Rotate positions between hands
- Track bets across multiple rounds

---

## 📋 Overview

In Exercise 1, you had a single betting round. Now you'll add multiple rounds like real Texas Hold'em poker!

---

## Part 1: Community Cards System

### Step 1: Add Community Cards to Game State

```javascript
let gameState = {
    // ... existing properties ...
    
    // NEW: Community cards
    communityCards: [],
    
    // NEW: Betting round tracking
    bettingRound: 'pre-flop', // 'pre-flop', 'flop', 'turn', 'river', 'showdown'
    
    // NEW: Blinds
    smallBlind: 5,
    bigBlind: 10,
    dealerPosition: 0,      // Which player is dealer (0 = player, 1 = dealer)
    
    // NEW: Track bets across rounds
    playerTotalBet: 0,      // Total bet across all rounds
    dealerTotalBet: 0       // Total bet across all rounds
};
```

### Step 2: Deal 2 Cards Instead of 5

Update dealInitialCards to deal 2 cards (Texas Hold'em style):

```javascript
function dealInitialCards() {
    console.log('Dealing hole cards...');
    
    // Deal 2 cards to each player (not 5!)
    for (let i = 0; i < 2; i++) {
        gameState.playerHand.push(drawCard());
        gameState.dealerHand.push(drawCard());
    }
    
    console.log('Player hand:', gameState.playerHand);
    console.log('Dealer hand:', gameState.dealerHand);
}
```

### Step 3: Implement Deal Flop

Deal 3 community cards:

```javascript
function dealFlop() {
    console.log('Dealing the FLOP...');
    
    // Burn one card (common in real poker)
    drawCard(); // Discarded
    
    // Deal 3 community cards
    for (let i = 0; i < 3; i++) {
        gameState.communityCards.push(drawCard());
    }
    
    console.log('Flop:', gameState.communityCards);
    
    alert(`Flop: ${formatCards(gameState.communityCards)}`);
    
    updateDisplay();
}

function formatCards(cards) {
    return cards.map(c => `${c.rank}${c.suit}`).join(' ');
}
```

### Step 4: Implement Deal Turn

Deal 4th community card:

```javascript
function dealTurn() {
    console.log('Dealing the TURN...');
    
    // Burn one card
    drawCard();
    
    // Deal 1 card
    gameState.communityCards.push(drawCard());
    
    console.log('Turn:', gameState.communityCards);
    
    alert(`Turn: ${formatCards([gameState.communityCards[3]])}`);
    
    updateDisplay();
}
```

### Step 5: Implement Deal River

Deal 5th community card:

```javascript
function dealRiver() {
    console.log('Dealing the RIVER...');
    
    // Burn one card
    drawCard();
    
    // Deal 1 card
    gameState.communityCards.push(drawCard());
    
    console.log('River:', gameState.communityCards);
    
    alert(`River: ${formatCards([gameState.communityCards[4]])}`);
    
    updateDisplay();
}
```

---

## Part 2: Blinds System

### Step 6: Implement Post Blinds

At the start of each hand, post blinds:

```javascript
function postBlinds() {
    console.log('Posting blinds...');
    
    // Determine who posts what based on dealer position
    if (gameState.dealerPosition === 0) {
        // Player is dealer, dealer (opponent) posts blinds
        
        // Small blind (player as dealer posts nothing, dealer posts small)
        const sbAmount = Math.min(gameState.dealerChips, gameState.smallBlind);
        gameState.dealerChips -= sbAmount;
        gameState.dealerBetThisRound = sbAmount;
        gameState.pot += sbAmount;
        
        console.log(`Dealer posts small blind: $${sbAmount}`);
        
        // Big blind (also dealer in heads-up)
        const bbAmount = Math.min(gameState.dealerChips, gameState.bigBlind - sbAmount);
        gameState.dealerChips -= bbAmount;
        gameState.dealerBetThisRound += bbAmount;
        gameState.pot += bbAmount;
        gameState.currentBet = gameState.bigBlind;
        
        console.log(`Dealer posts big blind: $${bbAmount} (total: $${gameState.dealerBetThisRound})`);
        
    } else {
        // Dealer is dealer, player posts blinds
        
        // Small blind
        const sbAmount = Math.min(gameState.playerChips, gameState.smallBlind);
        gameState.playerChips -= sbAmount;
        gameState.playerBetThisRound = sbAmount;
        gameState.pot += sbAmount;
        
        console.log(`Player posts small blind: $${sbAmount}`);
        
        // Big blind
        const bbAmount = Math.min(gameState.playerChips, gameState.bigBlind - sbAmount);
        gameState.playerChips -= bbAmount;
        gameState.playerBetThisRound += bbAmount;
        gameState.pot += bbAmount;
        gameState.currentBet = gameState.bigBlind;
        
        console.log(`Player posts big blind: $${bbAmount} (total: $${gameState.playerBetThisRound})`);
    }
    
    updateDisplay();
}
```

### Step 7: Rotate Dealer Button

After each hand, rotate the dealer button:

```javascript
function rotateDealerButton() {
    gameState.dealerPosition = 1 - gameState.dealerPosition; // Toggle between 0 and 1
    
    console.log(`Dealer button moved to: ${gameState.dealerPosition === 0 ? 'Player' : 'Dealer'}`);
}
```

---

## Part 3: Multiple Betting Rounds

### Step 8: Implement Betting Round Flow

Control the flow through multiple rounds:

```javascript
function startBettingRound(roundName) {
    console.log(`=== ${roundName.toUpperCase()} BETTING ===`);
    
    gameState.bettingRound = roundName;
    
    // Reset round-specific bets
    gameState.playerBetThisRound = 0;
    gameState.dealerBetThisRound = 0;
    gameState.currentBet = 0;
    gameState.raisesThisRound = 0;
    
    updateDisplay();
    
    // Determine who acts first
    // In heads-up: dealer acts first pre-flop, player acts first after
    if (roundName === 'pre-flop') {
        // Dealer (big blind) acts first pre-flop in heads-up
        if (gameState.dealerPosition === 0) {
            // Player has big blind, dealer acts first
            alert('Pre-flop betting! Dealer acts first.');
            dealerAction();
        } else {
            // Dealer has big blind, player acts first
            alert('Pre-flop betting! Your turn.');
        }
    } else {
        // Post-flop: player acts first
        alert(`${roundName.charAt(0).toUpperCase() + roundName.slice(1)} betting! Your turn.`);
    }
}
```

### Step 9: Advance to Next Betting Round

After a betting round completes, advance:

```javascript
function advanceBettingRound() {
    // Move round bets to total bets
    gameState.playerTotalBet += gameState.playerBetThisRound;
    gameState.dealerTotalBet += gameState.dealerBetThisRound;
    
    console.log(`Player total bet: $${gameState.playerTotalBet}`);
    console.log(`Dealer total bet: $${gameState.dealerTotalBet}`);
    
    // Advance to next round
    switch(gameState.bettingRound) {
        case 'pre-flop':
            dealFlop();
            startBettingRound('flop');
            break;
            
        case 'flop':
            dealTurn();
            startBettingRound('turn');
            break;
            
        case 'turn':
            dealRiver();
            startBettingRound('river');
            break;
            
        case 'river':
            // All betting done - showdown
            gameState.bettingRound = 'showdown';
            showdown();
            break;
    }
}
```

### Step 10: Check if Betting Round Complete

Determine when to advance:

```javascript
function checkBettingRoundComplete() {
    // If player folded, round is over
    if (gameState.playerFolded) {
        return true;
    }
    
    // Both players must have acted
    // And bets must be equal
    const betsEqual = (gameState.playerBetThisRound === gameState.dealerBetThisRound);
    
    // Special case: if currentBet is 0, both checked
    if (gameState.currentBet === 0 && betsEqual) {
        console.log('Both players checked - round complete');
        advanceBettingRound();
        return true;
    }
    
    // Normal case: bets match
    if (betsEqual && gameState.currentBet > 0) {
        console.log('Bets matched - round complete');
        advanceBettingRound();
        return true;
    }
    
    return false;
}
```

---

## Part 4: Update Betting Actions

### Step 11: Update Call Function

Call should advance rounds properly:

```javascript
function call() {
    const callAmount = gameState.currentBet - gameState.playerBetThisRound;
    
    console.log(`Player calls $${callAmount}`);
    
    if (callAmount <= 0) {
        alert('Nothing to call! Use check instead.');
        return false;
    }
    
    if (callAmount > gameState.playerChips) {
        alert('Not enough chips to call!');
        return false;
    }
    
    // Call the bet
    gameState.playerChips -= callAmount;
    gameState.playerBetThisRound += callAmount;
    gameState.pot += callAmount;
    
    updateDisplay();
    
    // Check if round complete
    checkBettingRoundComplete();
    
    return true;
}
```

### Step 12: Update Check Function

Check should also advance rounds:

```javascript
function check() {
    console.log('Player checks');
    
    // Can only check if no bet to call
    if (gameState.currentBet > 0 && 
        gameState.playerBetThisRound < gameState.currentBet) {
        alert('Cannot check - there is a bet to call!');
        return false;
    }
    
    updateDisplay();
    
    // If both checked (currentBet is 0), advance round
    if (gameState.currentBet === 0) {
        // Dealer also checks
        dealerCheck();
    } else {
        // Dealer's turn
        dealerAction();
    }
    
    return true;
}
```

---

## Part 5: Update Hand Evaluation

### Step 13: Combine Hole Cards + Community Cards

Update hand evaluation to use best 5 cards from 7:

```javascript
function getBestHand(holeCards, communityCards) {
    // Combine hole cards with community cards
    const allCards = [...holeCards, ...communityCards];
    
    // For simplicity, just use all 7 cards
    // (In real poker, you'd find best 5 from 7)
    // This is a simplified version
    
    return evaluateHand(allCards);
}

function showdown() {
    console.log('=== SHOWDOWN ===');
    
    gameState.gamePhase = 'showdown';
    updateDisplay();
    
    // Evaluate hands using hole cards + community cards
    const playerBestHand = getBestHand(gameState.playerHand, gameState.communityCards);
    const dealerBestHand = getBestHand(gameState.dealerHand, gameState.communityCards);
    
    console.log('Player best hand:', playerBestHand);
    console.log('Dealer best hand:', dealerBestHand);
    
    // Determine winner
    const winner = determineWinner();
    
    // Award pot
    let message = '';
    if (winner === 'player') {
        message = `You win with ${playerBestHand.name}!`;
        gameState.playerChips += gameState.pot;
    } else if (winner === 'dealer') {
        message = `Dealer wins with ${dealerBestHand.name}!`;
        gameState.dealerChips += gameState.pot;
    } else {
        message = `Push! Both have ${playerBestHand.name}`;
        gameState.playerChips += gameState.pot / 2;
        gameState.dealerChips += gameState.pot / 2;
    }
    
    gameState.pot = 0;
    
    alert(message);
    
    updateDisplay();
    
    setTimeout(() => {
        startNewRound();
    }, 3000);
}

// Update determineWinner to use community cards
function determineWinner() {
    const playerEval = getBestHand(gameState.playerHand, gameState.communityCards);
    const dealerEval = getBestHand(gameState.dealerHand, gameState.communityCards);
    
    // Compare ranks
    if (playerEval.rank > dealerEval.rank) {
        return 'player';
    } else if (dealerEval.rank > playerEval.rank) {
        return 'dealer';
    }
    
    // Compare values
    for (let i = 0; i < playerEval.values.length; i++) {
        if (playerEval.values[i] > dealerEval.values[i]) {
            return 'player';
        } else if (dealerEval.values[i] > playerEval.values[i]) {
            return 'dealer';
        }
    }
    
    return 'tie';
}
```

---

## Part 6: UI Updates

### Step 14: Display Community Cards

Add HTML and function to show community cards:

```html
<!-- Community Cards Area -->
<div id="community-cards-area">
    <h3>Community Cards</h3>
    <div id="community-cards"></div>
    <div id="betting-round-label">Pre-Flop</div>
</div>
```

```javascript
function displayCommunityCards() {
    const container = document.getElementById('community-cards');
    container.innerHTML = '';
    
    if (gameState.communityCards.length === 0) {
        container.innerHTML = '<div class="card-back">Waiting for flop...</div>';
        return;
    }
    
    for (let card of gameState.communityCards) {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        
        const color = (card.suit === '♥' || card.suit === '♦') ? 'red' : 'black';
        cardDiv.textContent = `${card.rank}${card.suit}`;
        cardDiv.style.color = color;
        
        container.appendChild(cardDiv);
    }
}

// Update main updateDisplay function
function updateDisplay() {
    // ... existing code ...
    
    // Display community cards
    displayCommunityCards();
    
    // Update betting round label
    document.getElementById('betting-round-label').textContent = 
        gameState.bettingRound.charAt(0).toUpperCase() + gameState.bettingRound.slice(1);
}
```

---

## Part 7: Complete Round Flow

### Step 15: Update Start New Round

Integrate everything:

```javascript
function startNewRound() {
    console.log('=== Starting New Round ===');
    
    // Rotate dealer button
    rotateDealerButton();
    
    // Reset state
    gameState.pot = 0;
    gameState.playerHand = [];
    gameState.dealerHand = [];
    gameState.communityCards = [];
    gameState.playerFolded = false;
    gameState.gamePhase = 'betting';
    gameState.bettingRound = 'pre-flop';
    
    // Reset bets
    gameState.currentBet = 0;
    gameState.playerBetThisRound = 0;
    gameState.dealerBetThisRound = 0;
    gameState.playerTotalBet = 0;
    gameState.dealerTotalBet = 0;
    gameState.raisesThisRound = 0;
    
    // Check if player can afford big blind
    if (gameState.playerChips < gameState.bigBlind) {
        gameOver('You ran out of chips!');
        return;
    }
    
    // Create and shuffle deck
    deck = createDeck();
    shuffleDeck(deck);
    
    // Post blinds
    postBlinds();
    
    // Deal hole cards (2 each)
    dealInitialCards();
    
    // Update display
    updateDisplay();
    
    // Start pre-flop betting
    startBettingRound('pre-flop');
}
```

---

## 🎯 Your Task

### Implementation Checklist

- [ ] Add communityCards array to game state
- [ ] Update dealInitialCards to deal 2 cards
- [ ] Implement dealFlop() (3 cards)
- [ ] Implement dealTurn() (1 card)
- [ ] Implement dealRiver() (1 card)
- [ ] Implement postBlinds()
- [ ] Implement rotateDealerButton()
- [ ] Implement startBettingRound()
- [ ] Implement advanceBettingRound()
- [ ] Implement checkBettingRoundComplete()
- [ ] Update call() to use checkBettingRoundComplete()
- [ ] Update check() to use checkBettingRoundComplete()
- [ ] Update getBestHand() to combine 7 cards
- [ ] Update showdown() to use community cards
- [ ] Add community cards display to HTML
- [ ] Implement displayCommunityCards()
- [ ] Update startNewRound() with full flow

### Testing Scenarios

1. **Complete Hand Flow**
   - Post blinds → Pre-flop → Flop → Turn → River → Showdown

2. **Early Fold**
   - Player folds pre-flop → Dealer wins

3. **All Check**
   - Both check all streets → Showdown

4. **Raise and Call**
   - Raise on flop → Call → Continue to river

---

## 🏆 Success Criteria

Your multi-round betting system should:
- ✅ Deal community cards at correct times
- ✅ Post blinds correctly
- ✅ Rotate dealer button
- ✅ Support 4 betting rounds (pre-flop, flop, turn, river)
- ✅ Evaluate hands using 7 cards (2 hole + 5 community)
- ✅ Display community cards clearly
- ✅ Track bets across multiple rounds

---

**Time Estimate:** 90-120 minutes

**Next:** Exercise 3 - All-In and Side Pots
