# Lesson 4.8: Game Flow & Logic 🎮

**Integrate hand evaluation into complete poker game**

---

## 🎯 Lesson Overview

**Duration**: 90-120 minutes

**Difficulty**: Intermediate-Advanced

**Prerequisites**:
- Lesson 4.5: JavaScript Basics (functions, game state)
- Lesson 4.6: Animations (async/await, screen management)
- Lesson 4.7: Hand Evaluation (evaluateHand function)

**What You'll Build**:
- Complete game flow from start to finish
- Winner determination using hand evaluator
- Chip and pot management
- Round progression system
- Game over and restart logic

---

## 📚 What You'll Learn

### Core Concepts

1. **Game State Management**
   - Tracking current game phase
   - Managing player/dealer data
   - History tracking

2. **Control Flow**
   - Sequential game phases
   - Decision points (fold vs continue)
   - Conditional logic

3. **Integration**
   - Using hand evaluator in game
   - Combining multiple systems
   - Data flow between functions

4. **User Experience**
   - Clear feedback at each step
   - Smooth transitions
   - Intuitive game progression

---

## 🎲 Understanding Poker Game Flow

### Complete Game Sequence

```
┌─────────────────┐
│  1. START GAME  │
│  - Ante bet     │
│  - Shuffle deck │
│  - Reset hands  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   2. DEAL CARDS │
│  - 5 to player  │
│  - 5 to dealer  │
│  (face down)    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  3. PLAYER TURN │
│  - View cards   │
│  - Decide:      │
│    • Fold       │
│    • Call       │
│    • Raise      │
└────────┬────────┘
         │
    ┌────┴────┐
    │         │
 FOLD?       NO
    │         │
    ▼         ▼
┌───────┐  ┌──────────────┐
│ LOSE  │  │ 4. SHOWDOWN  │
│ ANTE  │  │ - Reveal all │
└───────┘  │ - Evaluate   │
           │ - Compare    │
           └──────┬───────┘
                  │
             ┌────┴────┐
             │         │
          WIN?        LOSE?
             │         │
             ▼         ▼
      ┌──────────┐ ┌──────────┐
      │ WIN POT  │ │ LOSE POT │
      └─────┬────┘ └─────┬────┘
            │            │
            └─────┬──────┘
                  ▼
         ┌────────────────┐
         │  5. END ROUND  │
         │  - Update chips│
         │  - Check game  │
         │    over?       │
         └────────┬───────┘
                  │
            ┌─────┴─────┐
            │           │
        OUT OF       HAS CHIPS?
        CHIPS?          │
            │           ▼
            ▼    ┌─────────────┐
      ┌─────────┐│ 6. NEW ROUND│
      │GAME OVER││ Play again? │
      └─────────┘└─────────────┘
```

---

## Part 1: Game State Structure

### Understanding Game State

**Game state** = All information about current game

```javascript
let gameState = {
    // Game phase tracking
    phase: 'betting',  // 'betting', 'showdown', 'gameover'
    round: 1,
    
    // Cards
    deck: [],
    playerHand: [],
    dealerHand: [],
    
    // Money
    playerChips: 1000,
    dealerChips: 1000,
    pot: 0,
    currentBet: 0,
    
    // Hand evaluation results
    playerResult: null,
    dealerResult: null,
    
    // Game history
    handsPlayed: 0,
    handsWon: 0,
    handsLost: 0,
    totalWinnings: 0
};
```

### Game Phases

**Phase 1: Betting** (Initial)
- Players decide action
- Can fold, call, or raise
- Chips locked in pot

**Phase 2: Showdown**
- Cards revealed
- Hands evaluated
- Winner determined
- Chips distributed

**Phase 3: Game Over**
- Player out of chips
- Show final statistics
- Option to restart

---

## Part 2: Starting a New Round

### Step 1: Initialize Round

```javascript
function startNewRound() {
    console.log('=== STARTING NEW ROUND ===');
    
    // Reset phase
    gameState.phase = 'betting';
    gameState.round++;
    
    // Clear previous hands
    gameState.playerHand = [];
    gameState.dealerHand = [];
    gameState.playerResult = null;
    gameState.dealerResult = null;
    
    // Reset pot
    gameState.pot = 0;
    gameState.currentBet = 0;
    
    // Create and shuffle new deck
    gameState.deck = createDeck();
    shuffleDeck(gameState.deck);
    
    console.log('Deck shuffled, ready to deal!');
}
```

### Step 2: Place Ante Bet

**Ante** = Mandatory starting bet to play the hand

```javascript
function placeAnte(amount) {
    // Check if player has enough chips
    if (gameState.playerChips < amount) {
        console.log('Not enough chips for ante!');
        gameOver('Out of chips');
        return false;
    }
    
    // Deduct ante from both players
    gameState.playerChips -= amount;
    gameState.dealerChips -= amount;
    
    // Add to pot
    gameState.pot += (amount * 2);
    gameState.currentBet = amount;
    
    console.log(`Ante placed: $${amount} each. Pot: $${gameState.pot}`);
    
    // Update display
    updateChipDisplay();
    updatePotDisplay();
    
    return true;
}
```

### Step 3: Deal Cards

```javascript
async function dealInitialCards() {
    console.log('Dealing cards...');
    
    // Deal 5 cards to player (face up)
    gameState.playerHand = dealHand(gameState.deck, 5);
    
    // Deal 5 cards to dealer (face down initially)
    gameState.dealerHand = dealHand(gameState.deck, 5);
    
    // Display with animation
    showMessage('Dealing cards...', 0);
    await sleep(500);
    
    await displayHandAnimated(
        gameState.playerHand,
        'player-cards',
        200
    );
    
    await sleep(1000);
    
    await displayDealerHandHidden(
        gameState.dealerHand,
        'dealer-cards'
    );
    
    await sleep(500);
    showMessage('Make your decision!', 2000);
    
    // Enable betting buttons
    enableBettingButtons();
}
```

---

## Part 3: Player Actions

### Action 1: Fold

Player gives up, loses ante

```javascript
function fold() {
    console.log('Player folds!');
    
    // Disable buttons immediately
    disableBettingButtons();
    
    // Update game state
    gameState.phase = 'gameover';
    
    // Dealer wins pot
    gameState.dealerChips += gameState.pot;
    
    // Show message
    showMessage('You folded! Dealer wins.', 3000);
    
    // Record loss
    gameState.handsPlayed++;
    gameState.handsLost++;
    gameState.totalWinnings -= gameState.currentBet;
    
    // Update displays
    updateChipDisplay();
    updatePotDisplay();
    updateStatsDisplay();
    
    // End round after delay
    setTimeout(() => {
        endRound('fold');
    }, 3000);
}
```

### Action 2: Call

Player matches current bet

```javascript
function call() {
    console.log('Player calls!');
    
    const callAmount = gameState.currentBet;
    
    // Check if player can call
    if (gameState.playerChips < callAmount) {
        showMessage('Not enough chips to call!', 2000);
        return;
    }
    
    // Disable buttons
    disableBettingButtons();
    
    // Deduct chips from both players
    gameState.playerChips -= callAmount;
    gameState.dealerChips -= callAmount;
    
    // Add to pot
    gameState.pot += (callAmount * 2);
    
    // Update displays
    updateChipDisplay();
    updatePotDisplay();
    
    showMessage(`You called $${callAmount}!`, 1500);
    
    // Move to showdown
    setTimeout(() => {
        showdown();
    }, 1500);
}
```

### Action 3: Raise

Player increases bet

```javascript
function raise() {
    console.log('Player raises!');
    
    const raiseAmount = gameState.currentBet * 2;
    
    // Check if player can raise
    if (gameState.playerChips < raiseAmount) {
        showMessage('Not enough chips to raise!', 2000);
        return;
    }
    
    // Disable buttons
    disableBettingButtons();
    
    // Deduct chips from both players
    gameState.playerChips -= raiseAmount;
    gameState.dealerChips -= raiseAmount;
    
    // Add to pot
    gameState.pot += (raiseAmount * 2);
    
    // Update current bet
    gameState.currentBet = raiseAmount;
    
    // Update displays
    updateChipDisplay();
    updatePotDisplay();
    
    showMessage(`You raised to $${raiseAmount}!`, 1500);
    
    // Move to showdown
    setTimeout(() => {
        showdown();
    }, 1500);
}
```

---

## Part 4: Showdown (Winner Determination)

### Step 1: Reveal All Cards

```javascript
async function showdown() {
    console.log('=== SHOWDOWN ===');
    
    gameState.phase = 'showdown';
    
    // Show message
    showMessage('Showdown! Revealing cards...', 2000);
    await sleep(2000);
    
    // Flip dealer cards
    await flipDealerCards();
    
    await sleep(1000);
    
    // Evaluate hands
    evaluateHands();
}
```

### Step 2: Flip Dealer Cards

```javascript
async function flipDealerCards() {
    const dealerContainer = document.getElementById('dealer-cards');
    const cards = dealerContainer.querySelectorAll('.card');
    
    // Flip each card with delay
    for (let i = 0; i < cards.length; i++) {
        await sleep(200);
        
        // Add flip animation
        cards[i].classList.add('flipping');
        
        // Wait for flip halfway
        await sleep(300);
        
        // Update card content
        const card = gameState.dealerHand[i];
        const colorClass = (card.suit === 'hearts' || card.suit === 'diamonds') ? 'red' : 'black';
        const suitSymbol = getSuitSymbol(card.suit);
        
        cards[i].className = `card ${colorClass}`;
        cards[i].textContent = `${card.rank}${suitSymbol}`;
        
        await sleep(300);
    }
}

function getSuitSymbol(suit) {
    const symbols = {
        'hearts': '♥',
        'diamonds': '♦',
        'clubs': '♣',
        'spades': '♠'
    };
    return symbols[suit];
}
```

### Step 3: Evaluate Both Hands

```javascript
function evaluateHands() {
    console.log('Evaluating hands...');
    
    // Use hand evaluator from Lesson 4.7
    gameState.playerResult = evaluateHand(gameState.playerHand);
    gameState.dealerResult = evaluateHand(gameState.dealerHand);
    
    console.log('Player hand:', gameState.playerResult);
    console.log('Dealer hand:', gameState.dealerResult);
    
    // Show hand names
    showMessage(
        `Player: ${gameState.playerResult.name} vs Dealer: ${gameState.dealerResult.name}`,
        3000
    );
    
    // Wait then determine winner
    setTimeout(() => {
        determineWinner();
    }, 3000);
}
```

### Step 4: Compare Hands

```javascript
function determineWinner() {
    console.log('Determining winner...');
    
    const playerValue = gameState.playerResult.value;
    const dealerValue = gameState.dealerResult.value;
    
    let winner;
    
    if (playerValue > dealerValue) {
        winner = 'player';
    } else if (playerValue < dealerValue) {
        winner = 'dealer';
    } else {
        // Same hand type - need tiebreaker
        winner = resolveTiebreaker(
            gameState.playerResult,
            gameState.dealerResult
        );
    }
    
    console.log('Winner:', winner);
    
    // Award pot and show result
    awardPot(winner);
}
```

### Step 5: Resolve Tiebreakers

```javascript
function resolveTiebreaker(playerHand, dealerHand) {
    console.log('Resolving tiebreaker...');
    
    // For pairs: compare pair rank, then kickers
    if (playerHand.name === 'Pair' && dealerHand.name === 'Pair') {
        const playerRankValue = getCardValue(playerHand.rank);
        const dealerRankValue = getCardValue(dealerHand.rank);
        
        if (playerRankValue > dealerRankValue) {
            return 'player';
        } else if (playerRankValue < dealerRankValue) {
            return 'dealer';
        } else {
            // Same pair - compare kickers
            return compareKickers(playerHand.kickers, dealerHand.kickers);
        }
    }
    
    // For high card: compare highest card
    if (playerHand.name === 'High Card' && dealerHand.name === 'High Card') {
        return compareKickers(playerHand.kickers, dealerHand.kickers);
    }
    
    // For straights/flushes: compare high card
    if (playerHand.highCard && dealerHand.highCard) {
        if (playerHand.highCard > dealerHand.highCard) {
            return 'player';
        } else if (playerHand.highCard < dealerHand.highCard) {
            return 'dealer';
        }
    }
    
    // Exact tie
    return 'tie';
}

function compareKickers(playerKickers, dealerKickers) {
    for (let i = 0; i < playerKickers.length; i++) {
        const playerValue = getCardValue(playerKickers[i]);
        const dealerValue = getCardValue(dealerKickers[i]);
        
        if (playerValue > dealerValue) return 'player';
        if (playerValue < dealerValue) return 'dealer';
    }
    return 'tie';
}

function getCardValue(rank) {
    const values = {
        '2': 2, '3': 3, '4': 4, '5': 5, '6': 6,
        '7': 7, '8': 8, '9': 9, '10': 10,
        'J': 11, 'Q': 12, 'K': 13, 'A': 14
    };
    return values[rank] || 0;
}
```

---

## Part 5: Award Pot and End Round

### Award Winner

```javascript
async function awardPot(winner) {
    console.log(`Awarding pot to ${winner}`);
    
    if (winner === 'player') {
        // Player wins!
        gameState.playerChips += gameState.pot;
        
        // Update stats
        gameState.handsPlayed++;
        gameState.handsWon++;
        gameState.totalWinnings += (gameState.pot / 2);
        
        // Show celebration
        showMessage(`🎉 You Win $${gameState.pot}!`, 3000);
        highlightWinningCards('player-cards', gameState.playerResult.cards);
        
        // Maybe confetti animation
        // createConfetti();
        
    } else if (winner === 'dealer') {
        // Dealer wins
        gameState.dealerChips += gameState.pot;
        
        // Update stats
        gameState.handsPlayed++;
        gameState.handsLost++;
        gameState.totalWinnings -= (gameState.pot / 2);
        
        // Show message
        showMessage(`😞 Dealer Wins $${gameState.pot}`, 3000);
        highlightWinningCards('dealer-cards', gameState.dealerResult.cards);
        
    } else {
        // Tie - split pot
        const half = gameState.pot / 2;
        gameState.playerChips += half;
        gameState.dealerChips += half;
        
        // Update stats
        gameState.handsPlayed++;
        
        // Show message
        showMessage(`🤝 Tie! Pot Split`, 3000);
    }
    
    // Update displays
    updateChipDisplay();
    updatePotDisplay();
    updateStatsDisplay();
    
    // Wait then check game state
    await sleep(3000);
    
    // Check if player is out of chips
    if (gameState.playerChips < 10) {  // Minimum ante
        gameOver('out_of_chips');
    } else {
        // Offer new round
        endRound(winner);
    }
}
```

### Highlight Winning Cards

```javascript
function highlightWinningCards(containerId, cardIndices) {
    if (!cardIndices || cardIndices.length === 0) return;
    
    const container = document.getElementById(containerId);
    const cards = container.querySelectorAll('.card');
    
    cardIndices.forEach(index => {
        if (cards[index]) {
            cards[index].classList.add('highlight');
        }
    });
    
    // Remove highlight after 3 seconds
    setTimeout(() => {
        cards.forEach(card => card.classList.remove('highlight'));
    }, 3000);
}
```

---

## Part 6: End Round and New Game

### End Round Screen

```javascript
function endRound(result) {
    console.log('Round ended:', result);
    
    gameState.phase = 'end';
    
    // Show end screen with options
    showEndScreen({
        result: result,
        playerHand: gameState.playerResult.name,
        dealerHand: gameState.dealerResult.name,
        potAmount: gameState.pot,
        playerChips: gameState.playerChips,
        stats: {
            played: gameState.handsPlayed,
            won: gameState.handsWon,
            lost: gameState.handsLost,
            winnings: gameState.totalWinnings
        }
    });
}
```

### Play Again

```javascript
function playAgain() {
    console.log('Starting new round...');
    
    // Hide end screen
    hideEndScreen();
    
    // Show game screen
    showGameScreen();
    
    // Clear cards
    clearCards();
    
    // Start new round
    setTimeout(() => {
        startGame();
    }, 500);
}
```

### Game Over

```javascript
function gameOver(reason) {
    console.log('Game over:', reason);
    
    gameState.phase = 'gameover';
    
    // Calculate final stats
    const winRate = gameState.handsPlayed > 0 
        ? Math.round((gameState.handsWon / gameState.handsPlayed) * 100)
        : 0;
    
    // Show game over screen
    showGameOverScreen({
        reason: reason,
        finalChips: gameState.playerChips,
        handsPlayed: gameState.handsPlayed,
        handsWon: gameState.handsWon,
        winRate: winRate,
        totalWinnings: gameState.totalWinnings
    });
}
```

### Restart Game

```javascript
function restartGame() {
    console.log('Restarting game...');
    
    // Reset all game state
    gameState = {
        phase: 'betting',
        round: 0,
        deck: [],
        playerHand: [],
        dealerHand: [],
        playerChips: 1000,  // Starting chips
        dealerChips: 1000,
        pot: 0,
        currentBet: 0,
        playerResult: null,
        dealerResult: null,
        handsPlayed: 0,
        handsWon: 0,
        handsLost: 0,
        totalWinnings: 0
    };
    
    // Hide game over screen
    hideGameOverScreen();
    
    // Show start screen
    showStartScreen();
    
    // Update displays
    updateChipDisplay();
    updatePotDisplay();
    updateStatsDisplay();
}
```

---

## Part 7: Complete Game Flow Integration

### Main Start Game Function

```javascript
async function startGame() {
    console.log('=== STARTING POKER GAME ===');
    
    // Initialize round
    startNewRound();
    
    // Place ante
    const anteAmount = 10;
    if (!placeAnte(anteAmount)) {
        return;  // Not enough chips
    }
    
    // Deal cards with animation
    await dealInitialCards();
    
    // Game is now in betting phase
    // Player makes decision via buttons
    console.log('Waiting for player action...');
}
```

### Update Display Functions

```javascript
function updateChipDisplay() {
    const playerChipsEl = document.getElementById('player-chips');
    const dealerChipsEl = document.getElementById('dealer-chips');
    
    if (playerChipsEl) {
        playerChipsEl.textContent = `$${gameState.playerChips}`;
    }
    
    if (dealerChipsEl) {
        dealerChipsEl.textContent = `$${gameState.dealerChips}`;
    }
}

function updatePotDisplay() {
    const potEl = document.getElementById('pot-amount');
    
    if (potEl) {
        potEl.textContent = `$${gameState.pot}`;
    }
}

function updateStatsDisplay() {
    const statsEl = document.getElementById('stats');
    
    if (statsEl) {
        const winRate = gameState.handsPlayed > 0
            ? Math.round((gameState.handsWon / gameState.handsPlayed) * 100)
            : 0;
        
        statsEl.innerHTML = `
            <p>Hands Played: ${gameState.handsPlayed}</p>
            <p>Hands Won: ${gameState.handsWon}</p>
            <p>Win Rate: ${winRate}%</p>
            <p>Total Winnings: $${gameState.totalWinnings}</p>
        `;
    }
}
```

### Button Enable/Disable

```javascript
function enableBettingButtons() {
    document.getElementById('fold-btn').disabled = false;
    document.getElementById('call-btn').disabled = false;
    document.getElementById('raise-btn').disabled = false;
}

function disableBettingButtons() {
    document.getElementById('fold-btn').disabled = true;
    document.getElementById('call-btn').disabled = true;
    document.getElementById('raise-btn').disabled = true;
}
```

---

## 🎯 Key Takeaways

### 1. Sequential Game Flow
- Each phase leads to next
- Clear transitions between states
- User knows what's happening

### 2. State Management
- One central gameState object
- All functions read/write to it
- Easy to debug and modify

### 3. Integration
- Hand evaluator is now used
- Determines actual winners
- Handles all edge cases

### 4. User Experience
- Animations between phases
- Clear messages
- Immediate feedback

---

## 🐛 Common Issues and Fixes

### Issue 1: Pot Not Updating

**Problem**: Pot stays at 0 after bets

**Fix**: Make sure you're calling `updatePotDisplay()` after changing `gameState.pot`

---

### Issue 2: Cards Don't Flip

**Problem**: Dealer cards stay face down

**Fix**: Check that `flipDealerCards()` is awaited and animations are in CSS

---

### Issue 3: Winner Wrong

**Problem**: Wrong person wins

**Fix**: Verify hand evaluator is working correctly. Test with `console.log()`

---

### Issue 4: Can't Play Again

**Problem**: "Play Again" button doesn't work

**Fix**: Make sure `playAgain()` clears previous game state

---

## 📝 Testing Checklist

Test your game flow:

- [ ] Start game → cards dealt
- [ ] Fold → lose ante, round ends
- [ ] Call → showdown happens
- [ ] Raise → pot increases, showdown happens
- [ ] Player wins → chips increase
- [ ] Dealer wins → chips decrease
- [ ] Tie → pot splits
- [ ] Out of chips → game over
- [ ] Play again → new round starts
- [ ] Restart → back to start screen

---

## 🚀 Next Steps

After this lesson:
- ✅ Complete game flow working
- ✅ Hand evaluator integrated
- ✅ Winner determination correct
- ✅ Round management working

**Next Lesson 4.9**: Add full betting system with blinds and multiple rounds!

---

**You now have a working poker game!** 🎉🃏
