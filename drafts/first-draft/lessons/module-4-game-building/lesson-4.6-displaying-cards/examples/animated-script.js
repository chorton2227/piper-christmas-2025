// ============================================
// COMPLETE ANIMATED POKER GAME
// Lesson 4.6 - Displaying Cards (Advanced)
// ============================================

// This is a fully working example with all animations
// from Exercise 1 implemented. Copy and modify as needed!

// ============================================
// GAME STATE
// ============================================

let gameState = {
    deck: [],
    playerHand: [],
    dealerHand: [],
    playerChips: 1000,
    dealerChips: 1000,
    currentBet: 0,
    pot: 0,
    gamePhase: 'setup'  // setup, betting, dealing, reveal, end
};

// ============================================
// UTILITY: SLEEP FUNCTION
// ============================================

/**
 * Sleep function for async delays
 * @param {number} ms - Milliseconds to wait
 * @returns {Promise} Promise that resolves after delay
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ============================================
// CARD SYSTEM
// ============================================

/**
 * Creates a standard 52-card deck
 * @returns {Array} Array of card objects
 */
function createDeck() {
    let suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let deck = [];

    for (let suit of suits) {
        for (let rank of ranks) {
            deck.push({ suit: suit, rank: rank });
        }
    }

    console.log('Deck created with', deck.length, 'cards');
    return deck;
}

/**
 * Shuffles deck using Fisher-Yates algorithm
 * @param {Array} deck - Deck to shuffle
 */
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    console.log('Deck shuffled');
}

/**
 * Deals specified number of cards from deck
 * @param {Array} deck - Deck to deal from
 * @param {number} count - Number of cards to deal
 * @returns {Array} Array of dealt cards
 */
function dealHand(deck, count) {
    let hand = [];
    for (let i = 0; i < count; i++) {
        if (deck.length > 0) {
            hand.push(deck.pop());
        }
    }
    console.log('Dealt', hand.length, 'cards');
    return hand;
}

// ============================================
// CARD DISPLAY FUNCTIONS
// ============================================

/**
 * Creates card DOM element
 * @param {Object} card - Card object {suit, rank}
 * @param {boolean} faceDown - Show card face down
 * @returns {HTMLElement} Card div element
 */
function createCardElement(card, faceDown = false) {
    let cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    
    if (faceDown) {
        cardDiv.classList.add('face-down');
        cardDiv.innerHTML = `
            <div class="card-back">
                <div class="card-pattern">🂠</div>
            </div>
        `;
    } else {
        // Determine color
        let color = (card.suit === 'hearts' || card.suit === 'diamonds') ? 'red' : 'black';
        cardDiv.classList.add(color);
        
        // Get suit symbol
        let suitSymbols = {
            'hearts': '♥',
            'diamonds': '♦',
            'clubs': '♣',
            'spades': '♠'
        };
        
        cardDiv.innerHTML = `
            <div class="card-corner top-left">
                <div class="rank">${card.rank}</div>
                <div class="suit">${suitSymbols[card.suit]}</div>
            </div>
            <div class="card-center">
                ${suitSymbols[card.suit]}
            </div>
            <div class="card-corner bottom-right">
                <div class="rank">${card.rank}</div>
                <div class="suit">${suitSymbols[card.suit]}</div>
            </div>
        `;
    }
    
    return cardDiv;
}

/**
 * Displays hand with staggered deal animation
 * @param {Array} hand - Array of card objects
 * @param {string} containerId - ID of container element
 * @param {number} delay - Delay between cards (ms)
 */
function displayHandAnimated(hand, containerId, delay = 200) {
    let container = document.getElementById(containerId);
    container.innerHTML = '';
    
    console.log('Displaying', hand.length, 'cards in', containerId);
    
    hand.forEach((card, index) => {
        setTimeout(() => {
            let cardElement = createCardElement(card);
            cardElement.classList.add('dealing');
            container.appendChild(cardElement);
            
            // Remove animation class after animation completes
            setTimeout(() => {
                cardElement.classList.remove('dealing');
            }, 500);
        }, index * delay);
    });
}

/**
 * Displays dealer hand face-down with animation
 * @param {Array} hand - Array of card objects
 */
function displayDealerHandAnimatedHidden(hand) {
    let container = document.getElementById('dealer-cards');
    container.innerHTML = '';
    
    console.log('Displaying', hand.length, 'face-down dealer cards');
    
    hand.forEach((card, index) => {
        setTimeout(() => {
            let cardElement = createCardElement(card, true);
            cardElement.classList.add('dealing');
            container.appendChild(cardElement);
            
            setTimeout(() => {
                cardElement.classList.remove('dealing');
            }, 500);
        }, index * 200);
    });
}

/**
 * Flips dealer cards to reveal them
 * @param {Array} dealerHand - Array of dealer card objects
 */
async function flipCards(dealerHand) {
    let container = document.getElementById('dealer-cards');
    let cardElements = container.querySelectorAll('.card');
    
    console.log('Flipping', cardElements.length, 'cards');
    
    // Flip each card with delay
    for (let i = 0; i < cardElements.length; i++) {
        await sleep(150);
        
        let cardElement = cardElements[i];
        cardElement.classList.add('flipping');
        
        // At midpoint, update card content
        setTimeout(() => {
            cardElement.classList.remove('face-down');
            let newCard = createCardElement(dealerHand[i]);
            cardElement.innerHTML = newCard.innerHTML;
            cardElement.className = newCard.className + ' flipping';
        }, 300);
        
        // Remove flipping class after animation
        setTimeout(() => {
            cardElement.classList.remove('flipping');
        }, 600);
    }
}

/**
 * Highlights winning cards with animation
 * @param {string} containerId - Container with cards
 * @param {Array} indices - Indices of winning cards
 */
function highlightWinningCards(containerId, indices) {
    let container = document.getElementById(containerId);
    let cards = container.querySelectorAll('.card');
    
    console.log('Highlighting cards at indices:', indices);
    
    indices.forEach(index => {
        if (cards[index]) {
            cards[index].classList.add('winning');
        }
    });
}

/**
 * Highlights all cards in a container
 * @param {string} containerId - Container with cards
 */
function highlightAllCards(containerId) {
    let container = document.getElementById(containerId);
    let cards = container.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.classList.add('winning');
    });
}

/**
 * Clears all highlighting from cards
 * @param {string} containerId - Container with cards
 */
function clearHighlights(containerId) {
    let container = document.getElementById(containerId);
    let cards = container.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.classList.remove('winning');
    });
}

// ============================================
// MESSAGE OVERLAY
// ============================================

/**
 * Shows message overlay
 * @param {string} text - Message to display
 * @param {number} duration - Auto-hide duration (0 = manual hide)
 */
function showMessage(text, duration = 2000) {
    let overlay = document.getElementById('message-overlay');
    let messageText = document.getElementById('message-text');
    
    messageText.textContent = text;
    overlay.classList.add('show');
    
    console.log('Showing message:', text);
    
    if (duration > 0) {
        setTimeout(() => hideMessage(), duration);
    }
}

/**
 * Hides message overlay
 */
function hideMessage() {
    let overlay = document.getElementById('message-overlay');
    overlay.classList.remove('show');
    console.log('Message hidden');
}

// ============================================
// BUTTON CONTROL
// ============================================

/**
 * Disables all game control buttons
 */
function disableButtons() {
    let buttons = document.querySelectorAll('.game-controls button');
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = '0.5';
        btn.style.cursor = 'not-allowed';
    });
    console.log('Buttons disabled');
}

/**
 * Enables all game control buttons
 */
function enableButtons() {
    let buttons = document.querySelectorAll('.game-controls button');
    buttons.forEach(btn => {
        btn.disabled = false;
        btn.style.opacity = '1';
        btn.style.cursor = 'pointer';
    });
    console.log('Buttons enabled');
}

// ============================================
// HAND EVALUATION (SIMPLE VERSION)
// ============================================

/**
 * Simple hand evaluation (returns basic description)
 * @param {Array} hand - Array of card objects
 * @returns {Object} {name, value, cards}
 */
function evaluateHandSimple(hand) {
    // Count ranks
    let rankCounts = {};
    hand.forEach(card => {
        rankCounts[card.rank] = (rankCounts[card.rank] || 0) + 1;
    });
    
    let counts = Object.values(rankCounts).sort((a, b) => b - a);
    
    // Check for pairs, three of a kind, etc.
    if (counts[0] === 4) {
        return { name: 'Four of a Kind', value: 7, cards: [0, 1, 2, 3, 4] };
    } else if (counts[0] === 3 && counts[1] === 2) {
        return { name: 'Full House', value: 6, cards: [0, 1, 2, 3, 4] };
    } else if (counts[0] === 3) {
        return { name: 'Three of a Kind', value: 3, cards: [0, 1, 2] };
    } else if (counts[0] === 2 && counts[1] === 2) {
        return { name: 'Two Pair', value: 2, cards: [0, 1, 2, 3] };
    } else if (counts[0] === 2) {
        return { name: 'Pair', value: 1, cards: [0, 1] };
    }
    
    return { name: 'High Card', value: 0, cards: [0] };
}

/**
 * Compares two hands and returns winner
 * @param {Object} playerHand - Evaluated player hand
 * @param {Object} dealerHand - Evaluated dealer hand
 * @returns {string} 'win', 'lose', or 'tie'
 */
function compareHands(playerHand, dealerHand) {
    if (playerHand.value > dealerHand.value) {
        return 'win';
    } else if (playerHand.value < dealerHand.value) {
        return 'lose';
    } else {
        return 'tie';
    }
}

// ============================================
// CHIP DISPLAY
// ============================================

/**
 * Updates chip display for player and dealer
 */
function updateChipDisplay() {
    document.getElementById('player-chips').textContent = gameState.playerChips;
    document.getElementById('dealer-chips').textContent = gameState.dealerChips;
}

/**
 * Updates pot display
 */
function updatePotDisplay() {
    document.getElementById('pot-amount').textContent = gameState.pot;
}

// ============================================
// SCREEN MANAGEMENT
// ============================================

/**
 * Shows game screen, hides others
 */
function showGameScreen() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    document.getElementById('end-screen').style.display = 'none';
}

/**
 * Shows end screen with result
 * @param {string} result - 'win', 'lose', or 'tie'
 */
function showEndScreen(result) {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('end-screen').style.display = 'block';
    
    let resultText = document.getElementById('result-text');
    let resultEmoji = document.getElementById('result-emoji');
    
    if (result === 'win') {
        resultText.textContent = 'You Win!';
        resultEmoji.textContent = '🎉';
        resultText.style.color = '#4CAF50';
    } else if (result === 'lose') {
        resultText.textContent = 'You Lose';
        resultEmoji.textContent = '😔';
        resultText.style.color = '#f44336';
    } else {
        resultText.textContent = "It's a Tie!";
        resultEmoji.textContent = '🤝';
        resultText.style.color = '#FFC107';
    }
    
    // Update chip displays
    document.getElementById('final-player-chips').textContent = gameState.playerChips;
    document.getElementById('final-dealer-chips').textContent = gameState.dealerChips;
}

/**
 * Resets to start screen
 */
function showStartScreen() {
    document.getElementById('start-screen').style.display = 'block';
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('end-screen').style.display = 'none';
}

// ============================================
// GAME FLOW (ANIMATED VERSION)
// ============================================

/**
 * Starts new game with full animation sequence
 */
async function startGame() {
    console.log('=== STARTING NEW GAME ===');
    
    // Disable buttons during animation
    disableButtons();
    
    // Clear any previous highlights
    clearHighlights('player-cards');
    clearHighlights('dealer-cards');
    
    // Initialize game state
    gameState.deck = createDeck();
    shuffleDeck(gameState.deck);
    gameState.playerHand = dealHand(gameState.deck, 5);
    gameState.dealerHand = dealHand(gameState.deck, 5);
    gameState.currentBet = 10;
    gameState.pot = 20;
    gameState.playerChips -= 10;
    gameState.dealerChips -= 10;
    gameState.gamePhase = 'dealing';
    
    // Show game screen
    showGameScreen();
    updateChipDisplay();
    updatePotDisplay();
    
    await sleep(300);
    
    // Show dealing message
    showMessage('Dealing cards...', 0);
    await sleep(1000);
    hideMessage();
    
    // Deal player cards with animation
    displayHandAnimated(gameState.playerHand, 'player-cards', 200);
    await sleep(1400);  // Wait for all 5 cards (5 * 200 + margin)
    
    // Deal dealer cards (face down)
    displayDealerHandAnimatedHidden(gameState.dealerHand);
    await sleep(1400);
    
    // Ready to play
    gameState.gamePhase = 'betting';
    enableButtons();
    
    console.log('Game ready - waiting for player action');
}

/**
 * Handles call/bet action with animation
 */
async function handleCall() {
    console.log('Player calls');
    
    disableButtons();
    
    showMessage('Calling...', 1000);
    await sleep(1500);
    
    // Proceed to reveal
    await revealAndCompare();
}

/**
 * Handles fold action with animation
 */
async function handleFold() {
    console.log('Player folds');
    
    disableButtons();
    
    showMessage('You folded...', 1500);
    await sleep(2000);
    
    // Dealer wins
    gameState.dealerChips += gameState.pot;
    gameState.pot = 0;
    updateChipDisplay();
    updatePotDisplay();
    
    showEndScreen('lose');
}

/**
 * Handles raise action with animation
 */
async function handleRaise() {
    console.log('Player raises');
    
    disableButtons();
    
    let raiseAmount = 20;
    
    if (gameState.playerChips >= raiseAmount) {
        gameState.playerChips -= raiseAmount;
        gameState.pot += raiseAmount;
        updateChipDisplay();
        updatePotDisplay();
        
        showMessage(`Raised $${raiseAmount}!`, 1500);
        await sleep(2000);
        
        // Dealer calls
        gameState.dealerChips -= raiseAmount;
        gameState.pot += raiseAmount;
        updateChipDisplay();
        updatePotDisplay();
        
        showMessage('Dealer calls...', 1000);
        await sleep(1500);
        
        // Proceed to reveal
        await revealAndCompare();
    } else {
        showMessage('Not enough chips!', 2000);
        await sleep(2500);
        enableButtons();
    }
}

/**
 * Reveals dealer cards and compares hands with animation
 */
async function revealAndCompare() {
    console.log('=== REVEAL AND COMPARE ===');
    
    gameState.gamePhase = 'reveal';
    
    // Show reveal message
    showMessage('Revealing...', 0);
    await sleep(1000);
    hideMessage();
    
    // Flip dealer cards with animation
    await flipCards(gameState.dealerHand);
    await sleep(500);
    
    // Evaluate hands
    let playerHandResult = evaluateHandSimple(gameState.playerHand);
    let dealerHandResult = evaluateHandSimple(gameState.dealerHand);
    
    console.log('Player hand:', playerHandResult.name);
    console.log('Dealer hand:', dealerHandResult.name);
    
    // Show hand names
    showMessage(`Player: ${playerHandResult.name} vs Dealer: ${dealerHandResult.name}`, 0);
    await sleep(2000);
    hideMessage();
    
    // Compare hands
    let result = compareHands(playerHandResult, dealerHandResult);
    
    // Highlight and announce winner
    if (result === 'win') {
        highlightWinningCards('player-cards', playerHandResult.cards);
        showMessage('You Win! 🎉', 2000);
        gameState.playerChips += gameState.pot;
    } else if (result === 'lose') {
        highlightWinningCards('dealer-cards', dealerHandResult.cards);
        showMessage('Dealer Wins 😔', 2000);
        gameState.dealerChips += gameState.pot;
    } else {
        highlightAllCards('player-cards');
        highlightAllCards('dealer-cards');
        showMessage("It's a Tie! 🤝", 2000);
        // Split pot
        let split = Math.floor(gameState.pot / 2);
        gameState.playerChips += split;
        gameState.dealerChips += split;
    }
    
    gameState.pot = 0;
    updateChipDisplay();
    updatePotDisplay();
    
    await sleep(2500);
    
    // Check if game over
    if (gameState.playerChips <= 0) {
        showMessage('Out of chips! Game Over', 2000);
        await sleep(2500);
        showEndScreen('lose');
    } else if (gameState.dealerChips <= 0) {
        showMessage('Dealer out of chips! You win!', 2000);
        await sleep(2500);
        showEndScreen('win');
    } else {
        showEndScreen(result);
    }
}

// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Poker game loaded!');
    
    // Start screen
    document.getElementById('start-button').addEventListener('click', startGame);
    
    // Game controls
    document.getElementById('call-button').addEventListener('click', handleCall);
    document.getElementById('fold-button').addEventListener('click', handleFold);
    document.getElementById('raise-button').addEventListener('click', handleRaise);
    
    // End screen
    document.getElementById('play-again-button').addEventListener('click', () => {
        // Reset chips
        gameState.playerChips = 1000;
        gameState.dealerChips = 1000;
        updateChipDisplay();
        
        startGame();
    });
    
    document.getElementById('quit-button').addEventListener('click', () => {
        // Reset everything
        gameState.playerChips = 1000;
        gameState.dealerChips = 1000;
        gameState.pot = 0;
        updateChipDisplay();
        updatePotDisplay();
        
        showStartScreen();
    });
});

// ============================================
// INITIALIZATION
// ============================================

console.log('🎴 Animated Poker Game Ready!');
console.log('All animations implemented from Exercise 1');
console.log('Ready to play!');
