# Answer Key: Betting System

**Complete solutions for all betting system exercises**

---

## Exercise 1: Basic Betting System

### Step 1: Enhanced Game State ✓
```javascript
let gameState = {
    playerChips: 1000,
    dealerChips: 1000,
    pot: 0,
    currentBet: 0,
    minimumBet: 10,
    playerBetThisRound: 0,
    dealerBetThisRound: 0,
    // ... other properties
};
```

**Points: 10**
- Game state includes all betting properties
- Proper initialization values

### Step 2: Check Function ✓
```javascript
function check() {
    const toCall = gameState.currentBet - gameState.playerBetThisRound;
    
    if (toCall > 0) {
        alert(`Cannot check. Bet of $${toCall} to call.`);
        return false;
    }
    
    alert('You check');
    updateDisplay();
    dealerAction();
    return true;
}
```

**Points: 15**
- Validates no bet to call (15 pts)
- Updates display (5 pts)
- Calls dealer action (5 pts)

### Step 3: Bet Function ✓
```javascript
function bet(amount) {
    // Validation
    if (amount < gameState.minimumBet) {
        alert(`Minimum bet is $${gameState.minimumBet}`);
        return false;
    }
    
    if (amount > gameState.playerChips) {
        alert('Not enough chips');
        return false;
    }
    
    // Execute bet
    gameState.playerChips -= amount;
    gameState.playerBetThisRound += amount;
    gameState.pot += amount;
    gameState.currentBet = gameState.playerBetThisRound;
    
    updateDisplay();
    dealerAction();
    return true;
}
```

**Points: 20**
- Minimum bet validation (5 pts)
- Chip validation (5 pts)
- Updates all state correctly (10 pts)

### Step 4: Call Function ✓
```javascript
function call() {
    const toCall = gameState.currentBet - gameState.playerBetThisRound;
    
    if (toCall <= 0) {
        alert('No bet to call');
        return false;
    }
    
    if (toCall > gameState.playerChips) {
        alert('Not enough chips');
        return false;
    }
    
    gameState.playerChips -= toCall;
    gameState.playerBetThisRound += toCall;
    gameState.pot += toCall;
    
    updateDisplay();
    checkBettingRoundComplete();
    return true;
}
```

**Points: 20**
- Calculates toCall correctly (5 pts)
- Validation (5 pts)
- Updates state (5 pts)
- Checks round complete (5 pts)

### Step 5: Raise Function ✓
```javascript
function raise(raiseAmount) {
    const toCall = gameState.currentBet - gameState.playerBetThisRound;
    const totalCost = toCall + raiseAmount;
    
    if (raiseAmount < gameState.minimumBet) {
        alert(`Minimum raise: $${gameState.minimumBet}`);
        return false;
    }
    
    if (totalCost > gameState.playerChips) {
        alert('Not enough chips');
        return false;
    }
    
    gameState.playerChips -= totalCost;
    gameState.playerBetThisRound += totalCost;
    gameState.pot += totalCost;
    gameState.currentBet = gameState.playerBetThisRound;
    
    updateDisplay();
    dealerAction();
    return true;
}
```

**Points: 25**
- Calculates total cost correctly (10 pts)
- Minimum raise validation (5 pts)
- Updates current bet (5 pts)
- Complete state update (5 pts)

### Step 6: Fold Function ✓
```javascript
function fold() {
    alert('You fold. Dealer wins.');
    
    gameState.dealerChips += gameState.pot;
    gameState.pot = 0;
    gameState.gamePhase = 'game-over';
    
    updateDisplay();
    
    setTimeout(() => {
        startNewRound();
    }, 2000);
}
```

**Points: 10**
- Awards pot to dealer (5 pts)
- Resets game state (5 pts)

### Step 7: Dealer AI ✓
```javascript
function dealerAction() {
    const toCall = gameState.currentBet - gameState.dealerBetThisRound;
    const handValue = evaluateHand(gameState.dealerHand);
    
    if (handValue.rank >= 2) {
        // Strong hand - raise
        dealerRaise(gameState.bigBlind);
    } else if (toCall === 0) {
        // No bet - check or small bet
        if (Math.random() < 0.3 && handValue.rank >= 1) {
            dealerBet(gameState.bigBlind);
        } else {
            dealerCheck();
        }
    } else if (toCall <= gameState.bigBlind && handValue.rank >= 1) {
        // Small bet, decent hand - call
        dealerCall();
    } else {
        // Fold
        dealerFold();
    }
}
```

**Points: 30**
- Evaluates hand strength (10 pts)
- Makes logical decisions (10 pts)
- Varies strategy (5 pts)
- Handles all scenarios (5 pts)

### Step 8: Input Modal ✓
```javascript
function promptBet(action) {
    const modal = document.getElementById('bet-modal');
    const input = document.getElementById('bet-input');
    
    modal.style.display = 'flex';
    input.value = gameState.minimumBet;
    input.focus();
    
    document.getElementById('confirm-bet').onclick = () => {
        const amount = parseInt(input.value);
        modal.style.display = 'none';
        
        if (action === 'bet') {
            bet(amount);
        } else {
            raise(amount);
        }
    };
}
```

**Points: 20**
- Modal displays correctly (5 pts)
- Input validation (5 pts)
- Confirms bet/raise (5 pts)
- Cancels properly (5 pts)

### Step 9: Button States ✓
```javascript
function updateButtonStates() {
    const toCall = gameState.currentBet - gameState.playerBetThisRound;
    
    document.getElementById('check-btn').disabled = toCall > 0;
    document.getElementById('call-btn').disabled = toCall <= 0;
    document.getElementById('bet-btn').disabled = 
        gameState.currentBet > 0 || gameState.playerChips < gameState.minimumBet;
    document.getElementById('raise-btn').disabled = 
        gameState.playerChips < (toCall + gameState.minimumBet);
}
```

**Points: 20**
- Check button logic (5 pts)
- Call button logic (5 pts)
- Bet button logic (5 pts)
- Raise button logic (5 pts)

**Exercise 1 Total: 170 points**

---

## Exercise 2: Multiple Betting Rounds

### Step 1: Community Cards Array ✓
```javascript
let gameState = {
    // ... existing properties
    communityCards: [],
    bettingRound: 'pre-flop'
};
```

**Points: 5**

### Step 2: Deal Flop ✓
```javascript
function dealFlop() {
    console.log('Dealing flop...');
    
    // Burn card
    gameState.deck.shift();
    
    // Deal 3 community cards
    for (let i = 0; i < 3; i++) {
        gameState.communityCards.push(gameState.deck.shift());
    }
    
    alert('Flop dealt!');
    updateDisplay();
    
    // First player acts
    if (!gameState.isPlayerDealer) {
        updateButtonStates();
    } else {
        setTimeout(() => dealerAction(), 500);
    }
}
```

**Points: 20**
- Burns card (5 pts)
- Deals 3 cards (10 pts)
- Initiates betting (5 pts)

### Step 3: Deal Turn ✓
```javascript
function dealTurn() {
    gameState.deck.shift(); // Burn
    gameState.communityCards.push(gameState.deck.shift());
    
    alert('Turn dealt!');
    updateDisplay();
    
    // Betting begins
    if (!gameState.isPlayerDealer) {
        updateButtonStates();
    } else {
        setTimeout(() => dealerAction(), 500);
    }
}
```

**Points: 15**

### Step 4: Deal River ✓
```javascript
function dealRiver() {
    gameState.deck.shift(); // Burn
    gameState.communityCards.push(gameState.deck.shift());
    
    alert('River dealt!');
    updateDisplay();
    
    // Final betting
    if (!gameState.isPlayerDealer) {
        updateButtonStates();
    } else {
        setTimeout(() => dealerAction(), 500);
    }
}
```

**Points: 15**

### Step 5: Advance Betting Round ✓
```javascript
function advanceBettingRound() {
    // Save bets to total
    gameState.playerTotalBet += gameState.playerBetThisRound;
    gameState.dealerTotalBet += gameState.dealerBetThisRound;
    
    // Reset round bets
    gameState.playerBetThisRound = 0;
    gameState.dealerBetThisRound = 0;
    gameState.currentBet = 0;
    
    // Advance
    if (gameState.bettingRound === 'pre-flop') {
        gameState.bettingRound = 'flop';
        dealFlop();
    } else if (gameState.bettingRound === 'flop') {
        gameState.bettingRound = 'turn';
        dealTurn();
    } else if (gameState.bettingRound === 'turn') {
        gameState.bettingRound = 'river';
        dealRiver();
    } else {
        showdown();
    }
}
```

**Points: 30**
- Saves total bets (10 pts)
- Resets round bets (10 pts)
- Advances correctly (10 pts)

### Step 6: Check Round Complete ✓
```javascript
function checkBettingRoundComplete() {
    const betsEqual = 
        (gameState.playerBetThisRound === gameState.dealerBetThisRound);
    
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

**Points: 25**
- Checks bets equal (10 pts)
- Advances or showdown (10 pts)
- Returns correct value (5 pts)

### Step 7: Post Blinds ✓
```javascript
function postBlinds() {
    // Small blind (dealer)
    if (gameState.isPlayerDealer) {
        gameState.playerChips -= gameState.smallBlind;
        gameState.playerBetThisRound = gameState.smallBlind;
        gameState.pot += gameState.smallBlind;
    } else {
        gameState.dealerChips -= gameState.smallBlind;
        gameState.dealerBetThisRound = gameState.smallBlind;
        gameState.pot += gameState.smallBlind;
    }
    
    // Big blind
    if (gameState.isPlayerDealer) {
        gameState.dealerChips -= gameState.bigBlind;
        gameState.dealerBetThisRound = gameState.bigBlind;
        gameState.pot += gameState.bigBlind;
    } else {
        gameState.playerChips -= gameState.bigBlind;
        gameState.playerBetThisRound = gameState.bigBlind;
        gameState.pot += gameState.bigBlind;
    }
    
    gameState.currentBet = gameState.bigBlind;
    updateDisplay();
}
```

**Points: 30**
- Small blind correct (10 pts)
- Big blind correct (10 pts)
- Sets current bet (5 pts)
- Updates display (5 pts)

### Step 8: Rotate Button ✓
```javascript
function rotateButton() {
    gameState.isPlayerDealer = !gameState.isPlayerDealer;
}

// Called at start of each new round
function startNewRound() {
    rotateButton();
    // ... rest of setup
}
```

**Points: 10**

### Step 9: 7-Card Hand Evaluation ✓
```javascript
function getBestHand(holeCards, communityCards) {
    const allCards = [...holeCards, ...communityCards];
    
    if (allCards.length < 5) {
        // Early rounds - basic evaluation
        const ranks = allCards.map(c => rankValue(c.rank));
        const hasPair = ranks.length !== new Set(ranks).size;
        return {
            rank: hasPair ? 2 : 1,
            values: [Math.max(...ranks)],
            name: hasPair ? 'Pair' : 'High Card'
        };
    }
    
    // Full 5-7 card evaluation
    // [evaluation logic for pairs, flushes, straights, etc.]
    
    return {
        rank: handRank,
        values: sortedValues,
        name: handName
    };
}
```

**Points: 40**
- Combines 7 cards (10 pts)
- Evaluates all hand types (20 pts)
- Returns proper format (10 pts)

**Exercise 2 Total: 190 points**

---

## Exercise 3: All-In & Side Pots

### Step 1: All-In Tracking ✓
```javascript
let gameState = {
    // ... existing properties
    playerIsAllIn: false,
    dealerIsAllIn: false,
    pots: [],
    playerTotalBet: 0,
    dealerTotalBet: 0
};
```

**Points: 10**

### Step 2: All-In Function ✓
```javascript
function allIn() {
    const allInAmount = gameState.playerChips;
    
    if (allInAmount === 0) {
        alert('No chips left!');
        return false;
    }
    
    gameState.playerChips = 0;
    gameState.playerBetThisRound += allInAmount;
    gameState.pot += allInAmount;
    gameState.playerIsAllIn = true;
    
    if (gameState.playerBetThisRound > gameState.currentBet) {
        gameState.currentBet = gameState.playerBetThisRound;
    }
    
    alert(`You go ALL-IN for $${allInAmount}!`);
    updateDisplay();
    dealerAction();
    
    return true;
}
```

**Points: 25**
- Validates chips (5 pts)
- Bets all chips (10 pts)
- Sets all-in flag (5 pts)
- Updates current bet (5 pts)

### Step 3: Calculate Side Pots ✓
```javascript
function calculateSidePots() {
    const playerTotal = gameState.playerTotalBet + gameState.playerBetThisRound;
    const dealerTotal = gameState.dealerTotalBet + gameState.dealerBetThisRound;
    
    gameState.pots = [];
    
    // Equal bets - single pot
    if (playerTotal === dealerTotal) {
        gameState.pots.push({
            amount: gameState.pot,
            eligiblePlayers: ['player', 'dealer'],
            type: 'main'
        });
        return;
    }
    
    // Unequal - main + side pot
    const minBet = Math.min(playerTotal, dealerTotal);
    const maxBet = Math.max(playerTotal, dealerTotal);
    
    // Main pot
    gameState.pots.push({
        amount: minBet * 2,
        eligiblePlayers: ['player', 'dealer'],
        type: 'main'
    });
    
    // Side pot
    const sidePot = maxBet - minBet;
    if (sidePot > 0) {
        const eligiblePlayer = playerTotal > dealerTotal ? 'player' : 'dealer';
        gameState.pots.push({
            amount: sidePot,
            eligiblePlayers: [eligiblePlayer],
            type: 'side'
        });
    }
}
```

**Points: 50**
- Calculates totals correctly (15 pts)
- Main pot correct (15 pts)
- Side pot correct (15 pts)
- Eligibility correct (5 pts)

### Step 4: Award Side Pots ✓
```javascript
function awardSidePots() {
    calculateSidePots();
    
    const playerHand = getBestHand(gameState.playerHand, gameState.communityCards);
    const dealerHand = getBestHand(gameState.dealerHand, gameState.communityCards);
    
    let messages = [];
    
    for (let pot of gameState.pots) {
        // Single eligible - auto win
        if (pot.eligiblePlayers.length === 1) {
            const winner = pot.eligiblePlayers[0];
            if (winner === 'player') {
                gameState.playerChips += pot.amount;
            } else {
                gameState.dealerChips += pot.amount;
            }
            messages.push(`${winner} wins ${pot.type} pot: $${pot.amount}`);
            continue;
        }
        
        // Compare hands
        const winner = compareHandsForPot(playerHand, dealerHand, pot.eligiblePlayers);
        
        if (winner === 'player') {
            gameState.playerChips += pot.amount;
            messages.push(`You win ${pot.type} pot: $${pot.amount}`);
        } else if (winner === 'dealer') {
            gameState.dealerChips += pot.amount;
            messages.push(`Dealer wins ${pot.type} pot: $${pot.amount}`);
        } else {
            const split = pot.amount / 2;
            gameState.playerChips += split;
            gameState.dealerChips += split;
            messages.push(`${pot.type} pot split: $${split} each`);
        }
    }
    
    gameState.pot = 0;
    return messages;
}
```

**Points: 50**
- Awards to eligible only (20 pts)
- Compares hands (15 pts)
- Handles splits (10 pts)
- Returns messages (5 pts)

### Step 5: Run Out Cards ✓
```javascript
function runOutCards() {
    console.log('Both all-in - running out cards...');
    
    alert('Both all-in! Dealing remaining cards...');
    
    gameState.gamePhase = 'run-out';
    updateDisplay();
    
    // Deal remaining cards with delays
    const dealNext = () => {
        if (gameState.communityCards.length < 3) {
            setTimeout(() => {
                dealFlop();
                dealNext();
            }, 1500);
        } else if (gameState.communityCards.length < 4) {
            setTimeout(() => {
                dealTurn();
                dealNext();
            }, 1500);
        } else if (gameState.communityCards.length < 5) {
            setTimeout(() => {
                dealRiver();
                setTimeout(() => showdown(), 1500);
            }, 1500);
        } else {
            setTimeout(() => showdown(), 1000);
        }
    };
    
    dealNext();
}
```

**Points: 30**
- Deals remaining cards (15 pts)
- Proper timing (10 pts)
- Goes to showdown (5 pts)

### Step 6: Update Round Complete ✓
```javascript
function checkBettingRoundComplete() {
    // Both all-in - run out
    if (gameState.playerIsAllIn && gameState.dealerIsAllIn) {
        runOutCards();
        return true;
    }
    
    // One all-in, matched
    if ((gameState.playerIsAllIn || gameState.dealerIsAllIn) && 
        gameState.playerBetThisRound === gameState.dealerBetThisRound) {
        if (gameState.bettingRound === 'river') {
            showdown();
        } else {
            advanceBettingRound();
        }
        return true;
    }
    
    // Normal check
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

**Points: 25**

### Step 7: UI Updates ✓
```javascript
function updateDisplay() {
    // ... existing code ...
    
    // All-in indicators
    document.getElementById('player-all-in').style.display = 
        gameState.playerIsAllIn ? 'block' : 'none';
    document.getElementById('dealer-all-in').style.display = 
        gameState.dealerIsAllIn ? 'block' : 'none';
    
    // Side pots display
    displaySidePots();
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
        potDiv.innerHTML = `
            <strong>${pot.type.toUpperCase()}: $${pot.amount}</strong><br>
            <small>Eligible: ${pot.eligiblePlayers.join(', ')}</small>
        `;
        potsList.appendChild(potDiv);
    }
}
```

**Points: 20**

### Step 8: Reset for New Round ✓
```javascript
function startNewRound() {
    // ... existing reset code ...
    
    // Reset all-in
    gameState.playerIsAllIn = false;
    gameState.dealerIsAllIn = false;
    gameState.pots = [];
    gameState.playerTotalBet = 0;
    gameState.dealerTotalBet = 0;
    
    // ... rest of setup
}
```

**Points: 10**

**Exercise 3 Total: 220 points**

---

## Grading Rubric

### Total Points: 580

**Grade Breakdown:**
- **A+ (540-580):** Exceptional - all features work perfectly, excellent code quality
- **A (500-539):** Excellent - all core features work, minor issues only
- **B+ (460-499):** Very Good - all features implemented, some bugs
- **B (420-459):** Good - most features work, several bugs
- **C+ (380-419):** Satisfactory - basic features work, major bugs in advanced features
- **C (340-379):** Acceptable - basic betting works, missing advanced features
- **D (290-339):** Needs Improvement - significant functionality missing
- **F (0-289):** Incomplete - major features not working

### Bonus Points (up to +50)

- **Code Quality (+10):** Clean, well-commented code
- **UI Polish (+10):** Beautiful interface, smooth animations
- **Extra Features (+15):** Pot-limit betting, ante system, statistics
- **Testing (+15):** Comprehensive test cases, bug documentation

---

## Common Mistakes & Deductions

### Exercise 1
- Not validating minimum bet: -5 pts
- Forgetting to update current bet on raise: -10 pts
- Dealer AI too simple (no hand evaluation): -10 pts
- Button states don't update: -10 pts

### Exercise 2
- Not burning cards: -5 pts
- Forgetting to reset bets each round: -15 pts
- Blinds posted by wrong players: -10 pts
- Round doesn't advance when complete: -15 pts

### Exercise 3
- Side pot calculation wrong: -25 pts
- Awarding pot to ineligible players: -20 pts
- Not running out cards when both all-in: -15 pts
- All-in flags not reset: -5 pts

---

## Testing Checklist

Use this to verify all features work:

### Basic Betting
- [ ] Can check when no bet
- [ ] Cannot check when there's a bet
- [ ] Can bet with valid amount
- [ ] Cannot bet below minimum
- [ ] Can call a bet
- [ ] Can raise a bet
- [ ] Can fold at any time
- [ ] Can go all-in

### Multiple Rounds
- [ ] Pre-flop betting works
- [ ] Flop deals 3 cards
- [ ] Flop betting works
- [ ] Turn deals 4th card
- [ ] Turn betting works
- [ ] River deals 5th card
- [ ] River betting works
- [ ] Showdown after river

### Blinds
- [ ] Small blind posted
- [ ] Big blind posted
- [ ] Button rotates each hand
- [ ] Correct player acts first

### All-In
- [ ] Player can go all-in
- [ ] Dealer can go all-in
- [ ] Both all-in runs out cards
- [ ] Side pots calculated correctly
- [ ] Side pots displayed
- [ ] Pots awarded correctly

---

**Congratulations on completing the Betting System!** This is professional-level poker software!
