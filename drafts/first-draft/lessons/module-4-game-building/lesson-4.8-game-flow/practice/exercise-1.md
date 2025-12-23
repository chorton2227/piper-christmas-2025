# Exercise 1: Build Complete Game Flow 🎮

**Goal**: Integrate hand evaluator into working poker game

**Time**: 90-120 minutes

**Difficulty**: Intermediate-Advanced

---

## 🎯 What You'll Build

Complete game flow with:
- Start game → Deal → Player action → Showdown → End round
- Winner determination using hand evaluator
- Chip management
- Statistics tracking
- Play again functionality

---

## Part 1: Setup and Game State (15 min)

### Step 1: Link Your Files

Make sure you have from previous lessons:

**HTML** (`index.html`):
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Poker Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Your HTML from Lesson 4.3 -->
    
    <script src="hand-evaluator.js"></script>
    <script src="script.js"></script>
</body>
</html>
```

**CSS** (`style.css`):
- Your styles from Lesson 4.4

**JavaScript** (`hand-evaluator.js`):
- Your hand evaluation functions from Lesson 4.7

**JavaScript** (`script.js`):
- We'll build this now!

---

### Step 2: Create Enhanced Game State

Open `script.js` and create comprehensive game state:

```javascript
// Enhanced game state with all tracking
let gameState = {
    // Game phase
    phase: 'start',  // 'start', 'betting', 'showdown', 'end', 'gameover'
    round: 0,
    
    // Cards
    deck: [],
    playerHand: [],
    dealerHand: [],
    
    // Chips and betting
    playerChips: 1000,
    dealerChips: 1000,
    pot: 0,
    currentBet: 0,
    anteAmount: 10,
    
    // Hand evaluation results
    playerResult: null,
    dealerResult: null,
    
    // Statistics
    handsPlayed: 0,
    handsWon: 0,
    handsLost: 0,
    handsTied: 0,
    totalWinnings: 0,
    biggestWin: 0,
    biggestLoss: 0,
    
    // Settings
    animationSpeed: 200,  // ms between cards
    messageDelay: 2000     // ms to show messages
};

console.log('Game state initialized:', gameState);
```

**Checkpoint**: Console should show "Game state initialized" with object

---

## Part 2: Game Flow Functions (30 min)

### Step 3: Start New Round

```javascript
/**
 * Initialize a new round of poker
 */
function startNewRound() {
    console.log('=== STARTING ROUND', gameState.round + 1, '===');
    
    // Update round counter
    gameState.round++;
    gameState.phase = 'betting';
    
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
    
    console.log('Deck created and shuffled');
    console.log('Cards in deck:', gameState.deck.length);
}
```

**Test it**:
```javascript
startNewRound();
console.log('Round:', gameState.round);  // Should be 1
console.log('Deck size:', gameState.deck.length);  // Should be 52
```

---

### Step 4: Place Ante Bet

```javascript
/**
 * Place ante bet to start hand
 * @returns {boolean} - Success or failure
 */
function placeAnte() {
    const amount = gameState.anteAmount;
    
    // Check if player has enough chips
    if (gameState.playerChips < amount) {
        console.log('❌ Not enough chips for ante!');
        showMessage('Not enough chips!', 2000);
        gameOver('out_of_chips');
        return false;
    }
    
    // Deduct ante from both players
    gameState.playerChips -= amount;
    gameState.dealerChips -= amount;
    
    // Add to pot
    gameState.pot += (amount * 2);
    gameState.currentBet = amount;
    
    console.log(`✅ Ante placed: $${amount} each`);
    console.log(`💰 Pot now: $${gameState.pot}`);
    
    // Update UI
    updateChipDisplay();
    updatePotDisplay();
    
    return true;
}
```

**Test it**:
```javascript
startNewRound();
placeAnte();
console.log('Player chips:', gameState.playerChips);  // Should be 990
console.log('Pot:', gameState.pot);  // Should be 20
```

---

### Step 5: Deal Initial Cards (With Animation)

```javascript
/**
 * Deal 5 cards to player and dealer with animation
 */
async function dealInitialCards() {
    console.log('🎴 Dealing cards...');
    
    // Deal to player
    gameState.playerHand = dealHand(gameState.deck, 5);
    console.log('Player hand:', gameState.playerHand);
    
    // Deal to dealer
    gameState.dealerHand = dealHand(gameState.deck, 5);
    console.log('Dealer hand:', gameState.dealerHand);
    
    // Clear previous cards from screen
    document.getElementById('player-cards').innerHTML = '';
    document.getElementById('dealer-cards').innerHTML = '';
    
    // Show dealing message
    showMessage('Dealing cards...', 0);
    await sleep(500);
    
    // Display player cards one by one
    await displayHandAnimated(
        gameState.playerHand,
        'player-cards',
        gameState.animationSpeed
    );
    
    await sleep(1000);
    
    // Display dealer cards face down
    for (let i = 0; i < gameState.dealerHand.length; i++) {
        await sleep(gameState.animationSpeed);
        
        const faceDownCard = createFaceDownCard();
        faceDownCard.classList.add('dealing');
        
        document.getElementById('dealer-cards').appendChild(faceDownCard);
        
        // Remove animation class
        setTimeout(() => {
            faceDownCard.classList.remove('dealing');
        }, 500);
    }
    
    await sleep(500);
    showMessage('Make your decision!', gameState.messageDelay);
    
    console.log('✅ Cards dealt!');
}
```

---

### Step 6: Player Actions (Fold, Call, Raise)

```javascript
/**
 * Player folds - loses ante
 */
function fold() {
    console.log('🚫 Player folds');
    
    disableBettingButtons();
    
    // Dealer wins pot
    gameState.dealerChips += gameState.pot;
    
    // Update stats
    gameState.handsPlayed++;
    gameState.handsLost++;
    gameState.totalWinnings -= gameState.anteAmount;
    
    if (gameState.anteAmount > gameState.biggestLoss) {
        gameState.biggestLoss = gameState.anteAmount;
    }
    
    showMessage('You folded! Dealer wins.', 3000);
    
    // Update displays
    updateChipDisplay();
    updateStatsDisplay();
    
    // End round
    setTimeout(() => {
        endRound('fold');
    }, 3000);
}

/**
 * Player calls - matches current bet
 */
function call() {
    console.log('✅ Player calls');
    
    const callAmount = gameState.currentBet;
    
    // Check if enough chips
    if (gameState.playerChips < callAmount) {
        showMessage('Not enough chips to call!', 2000);
        return;
    }
    
    disableBettingButtons();
    
    // Deduct chips from both
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

/**
 * Player raises - doubles the bet
 */
function raise() {
    console.log('📈 Player raises');
    
    const raiseAmount = gameState.currentBet * 2;
    
    // Check if enough chips
    if (gameState.playerChips < raiseAmount) {
        showMessage('Not enough chips to raise!', 2000);
        return;
    }
    
    disableBettingButtons();
    
    // Deduct chips
    gameState.playerChips -= raiseAmount;
    gameState.dealerChips -= raiseAmount;
    
    // Add to pot
    gameState.pot += (raiseAmount * 2);
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

**Test each action**:
```javascript
// After dealing cards, try:
fold();  // Should show fold message
// OR
call();  // Should proceed to showdown
// OR
raise();  // Should double pot and go to showdown
```

---

## Part 3: Showdown Logic (25 min)

### Step 7: Reveal and Evaluate

```javascript
/**
 * Showdown - reveal cards and determine winner
 */
async function showdown() {
    console.log('🎭 === SHOWDOWN ===');
    
    gameState.phase = 'showdown';
    
    showMessage('Showdown! Revealing cards...', 2000);
    await sleep(2000);
    
    // Flip dealer cards
    await flipDealerCards();
    await sleep(1000);
    
    // Evaluate both hands
    console.log('Evaluating hands...');
    gameState.playerResult = evaluateHand(gameState.playerHand);
    gameState.dealerResult = evaluateHand(gameState.dealerHand);
    
    console.log('Player:', gameState.playerResult.name);
    console.log('Dealer:', gameState.dealerResult.name);
    
    // Show hand names
    showMessage(
        `Player: ${gameState.playerResult.name} vs Dealer: ${gameState.dealerResult.name}`,
        3000
    );
    
    await sleep(3000);
    
    // Determine winner
    determineWinner();
}

/**
 * Flip dealer cards from face-down to face-up
 */
async function flipDealerCards() {
    const dealerContainer = document.getElementById('dealer-cards');
    const cards = dealerContainer.querySelectorAll('.card');
    
    for (let i = 0; i < cards.length; i++) {
        await sleep(200);
        
        const card = gameState.dealerHand[i];
        const colorClass = (card.suit === 'hearts' || card.suit === 'diamonds') ? 'red' : 'black';
        const suitSymbol = getSuitSymbol(card.suit);
        
        // Add flip animation
        cards[i].classList.add('flipping');
        
        await sleep(300);
        
        // Update card content
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

---

### Step 8: Determine Winner

```javascript
/**
 * Compare hands and determine winner
 */
function determineWinner() {
    console.log('🏆 Determining winner...');
    
    const playerValue = gameState.playerResult.value;
    const dealerValue = gameState.dealerResult.value;
    
    let winner;
    
    // Compare hand values
    if (playerValue > dealerValue) {
        winner = 'player';
    } else if (playerValue < dealerValue) {
        winner = 'dealer';
    } else {
        // Same hand type - resolve tiebreaker
        winner = resolveTiebreaker(
            gameState.playerResult,
            gameState.dealerResult
        );
    }
    
    console.log('Winner:', winner);
    
    // Award pot
    awardPot(winner);
}

/**
 * Resolve tie between same hand types
 * @param {Object} playerHand - Player's evaluated hand
 * @param {Object} dealerHand - Dealer's evaluated hand
 * @returns {string} - 'player', 'dealer', or 'tie'
 */
function resolveTiebreaker(playerHand, dealerHand) {
    console.log('Resolving tiebreaker...');
    
    // For pairs/two pair: compare ranks
    if (playerHand.rank && dealerHand.rank) {
        // Extract first rank mentioned
        const playerRank = playerHand.rank.split(' ')[0];
        const dealerRank = dealerHand.rank.split(' ')[0];
        
        const playerValue = getCardValue(playerRank);
        const dealerValue = getCardValue(dealerRank);
        
        if (playerValue > dealerValue) return 'player';
        if (playerValue < dealerValue) return 'dealer';
    }
    
    // For straights/flushes: compare high card
    if (playerHand.highCard && dealerHand.highCard) {
        if (playerHand.highCard > dealerHand.highCard) return 'player';
        if (playerHand.highCard < dealerHand.highCard) return 'dealer';
    }
    
    // Compare kickers if available
    if (playerHand.kickers && dealerHand.kickers) {
        return compareKickers(playerHand.kickers, dealerHand.kickers);
    }
    
    // Exact tie
    return 'tie';
}

function compareKickers(playerKickers, dealerKickers) {
    for (let i = 0; i < Math.min(playerKickers.length, dealerKickers.length); i++) {
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

## Part 4: Award Pot and End Round (20 min)

### Step 9: Award Winner

```javascript
/**
 * Award pot to winner and update stats
 * @param {string} winner - 'player', 'dealer', or 'tie'
 */
async function awardPot(winner) {
    console.log(`💰 Awarding $${gameState.pot} to ${winner}`);
    
    const winAmount = gameState.pot;
    
    if (winner === 'player') {
        // Player wins!
        gameState.playerChips += winAmount;
        
        // Update stats
        gameState.handsPlayed++;
        gameState.handsWon++;
        const netWin = winAmount / 2;
        gameState.totalWinnings += netWin;
        
        if (netWin > gameState.biggestWin) {
            gameState.biggestWin = netWin;
        }
        
        // Show celebration
        showMessage(`🎉 You Win $${winAmount}!`, 3000);
        
        // Highlight winning cards
        if (gameState.playerResult.cards) {
            highlightCards('player-cards', gameState.playerResult.cards);
        }
        
    } else if (winner === 'dealer') {
        // Dealer wins
        gameState.dealerChips += winAmount;
        
        // Update stats
        gameState.handsPlayed++;
        gameState.handsLost++;
        const netLoss = winAmount / 2;
        gameState.totalWinnings -= netLoss;
        
        if (netLoss > gameState.biggestLoss) {
            gameState.biggestLoss = netLoss;
        }
        
        // Show message
        showMessage(`😞 Dealer Wins $${winAmount}`, 3000);
        
        // Highlight dealer's winning cards
        if (gameState.dealerResult.cards) {
            highlightCards('dealer-cards', gameState.dealerResult.cards);
        }
        
    } else {
        // Tie - split pot
        const half = winAmount / 2;
        gameState.playerChips += half;
        gameState.dealerChips += half;
        
        // Update stats
        gameState.handsPlayed++;
        gameState.handsTied++;
        
        // Show message
        showMessage(`🤝 Tie! Pot Split ($${half} each)`, 3000);
    }
    
    // Update displays
    updateChipDisplay();
    updatePotDisplay();
    updateStatsDisplay();
    
    await sleep(3000);
    
    // Check if player can continue
    if (gameState.playerChips < gameState.anteAmount) {
        gameOver('out_of_chips');
    } else {
        endRound(winner);
    }
}

/**
 * Highlight winning cards
 * @param {string} containerId - Container element ID
 * @param {Array} cardIndices - Indices of cards to highlight
 */
function highlightCards(containerId, cardIndices) {
    if (!cardIndices || cardIndices.length === 0) return;
    
    const container = document.getElementById(containerId);
    const cards = container.querySelectorAll('.card');
    
    cardIndices.forEach(index => {
        if (cards[index]) {
            cards[index].classList.add('highlight');
        }
    });
    
    // Remove highlight after animation
    setTimeout(() => {
        cards.forEach(card => {
            card.classList.remove('highlight');
        });
    }, 3000);
}
```

---

### Step 10: End Round and Play Again

```javascript
/**
 * End current round and offer new game
 * @param {string} result - Outcome of round
 */
function endRound(result) {
    console.log('Round ended:', result);
    
    gameState.phase = 'end';
    
    // Show "Play Again" button
    const playAgainBtn = document.getElementById('play-again-btn');
    if (playAgainBtn) {
        playAgainBtn.style.display = 'block';
    }
    
    // Or use screen management
    showEndScreen(result);
}

/**
 * Start a new round
 */
function playAgain() {
    console.log('Starting new round...');
    
    // Hide play again button
    const playAgainBtn = document.getElementById('play-again-btn');
    if (playAgainBtn) {
        playAgainBtn.style.display = 'none';
    }
    
    // Start new game
    startGame();
}

/**
 * Game over - player out of chips
 * @param {string} reason - Why game ended
 */
function gameOver(reason) {
    console.log('💀 GAME OVER:', reason);
    
    gameState.phase = 'gameover';
    
    // Calculate stats
    const winRate = gameState.handsPlayed > 0
        ? Math.round((gameState.handsWon / gameState.handsPlayed) * 100)
        : 0;
    
    // Show game over message
    showMessage(
        `Game Over! You're out of chips.
         Hands: ${gameState.handsPlayed} | Won: ${gameState.handsWon} | Win Rate: ${winRate}%`,
        5000
    );
    
    // Show restart button
    const restartBtn = document.getElementById('restart-btn');
    if (restartBtn) {
        restartBtn.style.display = 'block';
    }
}

/**
 * Restart entire game
 */
function restartGame() {
    console.log('🔄 Restarting game...');
    
    // Reset all state
    gameState = {
        phase: 'start',
        round: 0,
        deck: [],
        playerHand: [],
        dealerHand: [],
        playerChips: 1000,
        dealerChips: 1000,
        pot: 0,
        currentBet: 0,
        anteAmount: 10,
        playerResult: null,
        dealerResult: null,
        handsPlayed: 0,
        handsWon: 0,
        handsLost: 0,
        handsTied: 0,
        totalWinnings: 0,
        biggestWin: 0,
        biggestLoss: 0,
        animationSpeed: 200,
        messageDelay: 2000
    };
    
    // Update displays
    updateChipDisplay();
    updatePotDisplay();
    updateStatsDisplay();
    
    // Hide restart button
    const restartBtn = document.getElementById('restart-btn');
    if (restartBtn) {
        restartBtn.style.display = 'none';
    }
    
    // Show start screen
    showStartScreen();
}
```

---

## Part 5: Update Display Functions (15 min)

### Step 11: Display Updates

```javascript
/**
 * Update chip displays
 */
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

/**
 * Update pot display
 */
function updatePotDisplay() {
    const potEl = document.getElementById('pot-amount');
    
    if (potEl) {
        potEl.textContent = `$${gameState.pot}`;
    }
}

/**
 * Update statistics display
 */
function updateStatsDisplay() {
    const statsEl = document.getElementById('stats');
    
    if (statsEl) {
        const winRate = gameState.handsPlayed > 0
            ? Math.round((gameState.handsWon / gameState.handsPlayed) * 100)
            : 0;
        
        statsEl.innerHTML = `
            <div class="stat-row">
                <span>Hands Played:</span>
                <span>${gameState.handsPlayed}</span>
            </div>
            <div class="stat-row">
                <span>Hands Won:</span>
                <span>${gameState.handsWon}</span>
            </div>
            <div class="stat-row">
                <span>Win Rate:</span>
                <span>${winRate}%</span>
            </div>
            <div class="stat-row">
                <span>Total Winnings:</span>
                <span class="${gameState.totalWinnings >= 0 ? 'positive' : 'negative'}">
                    $${gameState.totalWinnings}
                </span>
            </div>
        `;
    }
}

/**
 * Enable betting buttons
 */
function enableBettingButtons() {
    document.getElementById('fold-btn').disabled = false;
    document.getElementById('call-btn').disabled = false;
    document.getElementById('raise-btn').disabled = false;
}

/**
 * Disable betting buttons
 */
function disableBettingButtons() {
    document.getElementById('fold-btn').disabled = true;
    document.getElementById('call-btn').disabled = true;
    document.getElementById('raise-btn').disabled = true;
}
```

---

## Part 6: Main Start Function and Event Listeners (15 min)

### Step 12: Main Start Game

```javascript
/**
 * Main function to start a game
 */
async function startGame() {
    console.log('🎮 === STARTING POKER GAME ===');
    
    // Initialize new round
    startNewRound();
    
    // Place ante
    if (!placeAnte()) {
        return;  // Not enough chips
    }
    
    // Disable buttons during deal
    disableBettingButtons();
    
    // Deal cards with animation
    await dealInitialCards();
    
    // Enable betting buttons
    enableBettingButtons();
    
    console.log('✅ Game ready - waiting for player action');
}
```

### Step 13: Event Listeners

```javascript
/**
 * Setup all event listeners
 */
function setupEventListeners() {
    // Start button
    const startBtn = document.getElementById('start-btn');
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            console.log('Start button clicked');
            hideStartScreen();
            showGameScreen();
            startGame();
        });
    }
    
    // Betting buttons
    document.getElementById('fold-btn').addEventListener('click', fold);
    document.getElementById('call-btn').addEventListener('click', call);
    document.getElementById('raise-btn').addEventListener('click', raise);
    
    // Play again button
    const playAgainBtn = document.getElementById('play-again-btn');
    if (playAgainBtn) {
        playAgainBtn.addEventListener('click', playAgain);
    }
    
    // Restart button
    const restartBtn = document.getElementById('restart-btn');
    if (restartBtn) {
        restartBtn.addEventListener('click', restartGame);
    }
    
    console.log('✅ Event listeners setup complete');
}

/**
 * Initialize game when page loads
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎴 Poker Game Loaded!');
    
    setupEventListeners();
    updateChipDisplay();
    updatePotDisplay();
    updateStatsDisplay();
    
    console.log('✅ Ready to play!');
});
```

---

## ✅ Testing Your Game Flow

### Test Sequence 1: Normal Win

1. Click "Start Game"
2. Cards should deal with animation
3. Click "Call"
4. Dealer cards flip
5. Winner determined
6. Chips update correctly
7. "Play Again" appears

### Test Sequence 2: Fold

1. Start game
2. Click "Fold"
3. Should lose ante
4. Round ends immediately
5. Stats update

### Test Sequence 3: Multiple Rounds

1. Play 5 rounds
2. Check that:
   - Round counter increases
   - Stats are accurate
   - Chips change correctly
   - Win rate calculates

### Test Sequence 4: Game Over

1. Set chips to 5: `gameState.playerChips = 5;`
2. Play one hand
3. Should trigger game over
4. Restart button appears

---

## 🐛 Debugging Checklist

If something doesn't work:

- [ ] All functions are defined (no "undefined" errors)
- [ ] hand-evaluator.js is linked before script.js
- [ ] Console shows each step logging
- [ ] HTML has all required IDs
- [ ] CSS has animation classes
- [ ] Async functions use await properly
- [ ] Buttons are properly connected
- [ ] Game state updates after each action

---

## 🎯 Success Criteria

Your game should:

- ✅ Deal cards with animation
- ✅ Accept fold/call/raise
- ✅ Evaluate hands correctly
- ✅ Determine winner accurately
- ✅ Update chips properly
- ✅ Track statistics
- ✅ Handle game over
- ✅ Allow playing again
- ✅ Show clear messages throughout

---

## 📝 Reflection Questions

1. **How does game state help organize your code?**

_____________________________________________________

2. **What happens if you forget to await an async function?**

_____________________________________________________

3. **How does the hand evaluator integrate with game flow?**

_____________________________________________________

4. **What edge cases did you encounter?**

_____________________________________________________

---

**Congratulations! You have a complete working poker game!** 🎉🃏
