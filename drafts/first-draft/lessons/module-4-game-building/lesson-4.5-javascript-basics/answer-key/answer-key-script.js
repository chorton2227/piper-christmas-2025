/**
 * COMPLETE POKER GAME - SCRIPT.JS
 * JavaScript for 5-Card Draw Poker Game
 * 
 * This is a complete, working example showing all concepts
 * from Lesson 4.5 - JavaScript Basics & Card System
 */

// ============================================
// GAME STATE - Central place for all game data
// ============================================

let gameState = {
    deck: [],              // Array of all cards in deck
    playerHand: [],        // Array of player's cards
    dealerHand: [],        // Array of dealer's cards
    playerChips: 1000,     // Player's money
    dealerChips: 1000,     // Dealer's money
    pot: 0,                // Money in the pot
    currentBet: 20,        // Current bet amount
    ante: 10,              // Ante (entry fee)
    gameActive: false      // Is game currently running?
};


// ============================================
// DECK CREATION AND MANAGEMENT
// ============================================

/**
 * Creates a standard 52-card deck
 * Returns array of 52 card objects
 */
function createDeck() {
    const suits = ['♠', '♥', '♦', '♣'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    
    let deck = [];
    
    // Loop through each suit
    for (let suit of suits) {
        // Determine color based on suit
        let color = (suit === '♥' || suit === '♦') ? 'red' : 'black';
        
        // Loop through each rank
        for (let i = 0; i < ranks.length; i++) {
            deck.push({
                rank: ranks[i],
                suit: suit,
                value: values[i],
                color: color
            });
        }
    }
    
    console.log('✓ Deck created:', deck.length, 'cards');
    return deck;
}


/**
 * Shuffles deck using Fisher-Yates algorithm
 * This is the industry-standard shuffle method
 * Modifies the deck array in place
 */
function shuffleDeck(deck) {
    // Start from the end and work backwards
    for (let i = deck.length - 1; i > 0; i--) {
        // Pick a random index from 0 to i
        let j = Math.floor(Math.random() * (i + 1));
        
        // Swap cards at positions i and j
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    
    console.log('✓ Deck shuffled');
    return deck;
}


/**
 * Deals one card from the top of the deck
 * Removes and returns the last card
 */
function dealCard(deck) {
    if (deck.length === 0) {
        console.error('Deck is empty!');
        return null;
    }
    
    return deck.pop();  // Remove and return last card
}


/**
 * Deals multiple cards from the deck
 * Returns an array of cards
 */
function dealHand(deck, count) {
    let hand = [];
    
    for (let i = 0; i < count; i++) {
        let card = dealCard(deck);
        if (card) {
            hand.push(card);
        }
    }
    
    console.log(`✓ Dealt ${count} cards`);
    return hand;
}


// ============================================
// CARD DISPLAY FUNCTIONS
// ============================================

/**
 * Creates a DOM element for a single card
 * Returns a div with card styling
 */
function createCardElement(card) {
    let cardDiv = document.createElement('div');
    cardDiv.className = `card ${card.color}`;
    
    // Card content
    let rankSpan = document.createElement('span');
    rankSpan.className = 'rank';
    rankSpan.textContent = card.rank;
    
    let suitSpan = document.createElement('span');
    suitSpan.className = 'suit';
    suitSpan.textContent = card.suit;
    
    cardDiv.appendChild(rankSpan);
    cardDiv.appendChild(suitSpan);
    
    return cardDiv;
}


/**
 * Creates a face-down card element
 * Used for hiding dealer cards
 */
function createFaceDownCard() {
    let cardDiv = document.createElement('div');
    cardDiv.className = 'card face-down';
    cardDiv.textContent = '🂠';  // Card back symbol
    return cardDiv;
}


/**
 * Displays all cards in a hand
 * Clears container first, then adds all cards
 */
function displayHand(hand, containerId) {
    let container = document.getElementById(containerId);
    
    if (!container) {
        console.error('Container not found:', containerId);
        return;
    }
    
    // Clear existing cards
    container.innerHTML = '';
    
    // Add each card
    for (let card of hand) {
        let cardElement = createCardElement(card);
        container.appendChild(cardElement);
    }
}


/**
 * Displays dealer's hand with all cards face down
 * Used at start of round
 */
function displayDealerHandHidden(hand) {
    let container = document.getElementById('dealer-cards');
    
    if (!container) {
        console.error('Dealer cards container not found');
        return;
    }
    
    container.innerHTML = '';
    
    // Show all cards face down
    for (let i = 0; i < hand.length; i++) {
        container.appendChild(createFaceDownCard());
    }
}


// ============================================
// SCREEN MANAGEMENT
// ============================================

/**
 * Shows the start screen
 * Hides game and end screens
 */
function showStartScreen() {
    hideAllScreens();
    document.getElementById('start-screen').classList.add('active');
    console.log('Showing start screen');
}


/**
 * Shows the game screen
 * Hides start and end screens
 */
function showGameScreen() {
    hideAllScreens();
    document.getElementById('game-screen').classList.add('active');
    console.log('Showing game screen');
}


/**
 * Shows the end screen with result
 * Hides start and game screens
 */
function showEndScreen(result) {
    hideAllScreens();
    
    let endScreen = document.getElementById('end-screen');
    endScreen.classList.add('active');
    
    // Update result text
    let resultText = document.getElementById('result-text');
    let resultEmoji = document.getElementById('result-emoji');
    
    if (result === 'win') {
        resultText.textContent = 'You Win!';
        resultEmoji.textContent = '🎉';
    } else if (result === 'lose') {
        resultText.textContent = 'You Lose';
        resultEmoji.textContent = '😔';
    } else {
        resultText.textContent = 'Push (Tie)';
        resultEmoji.textContent = '🤝';
    }
    
    console.log('Showing end screen:', result);
}


/**
 * Helper function to hide all screens
 */
function hideAllScreens() {
    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('game-screen').classList.remove('active');
    document.getElementById('end-screen').classList.remove('active');
}


// ============================================
// DISPLAY UPDATES
// ============================================

/**
 * Updates the chip count displays
 */
function updateChipDisplay() {
    let playerChipsElement = document.getElementById('player-chips');
    let dealerChipsElement = document.getElementById('dealer-chips');
    
    if (playerChipsElement) {
        playerChipsElement.textContent = gameState.playerChips;
    }
    
    if (dealerChipsElement) {
        dealerChipsElement.textContent = gameState.dealerChips;
    }
}


/**
 * Updates the pot display
 */
function updatePotDisplay() {
    let potElement = document.getElementById('pot-amount');
    
    if (potElement) {
        potElement.textContent = gameState.pot;
    }
}


/**
 * Updates all displays at once
 */
function updateAllDisplays() {
    updateChipDisplay();
    updatePotDisplay();
    displayHand(gameState.playerHand, 'player-cards');
}


// ============================================
// GAME FLOW FUNCTIONS
// ============================================

/**
 * Starts a new game round
 * This is the main game initialization function
 */
function startGame() {
    console.log('╔══════════════════════════════════╗');
    console.log('║     STARTING NEW POKER GAME      ║');
    console.log('╚══════════════════════════════════╝');
    
    // Step 1: Create and shuffle deck
    console.log('📦 Creating and shuffling deck...');
    gameState.deck = createDeck();
    shuffleDeck(gameState.deck);
    
    // Step 2: Reset hands
    console.log('🗑️  Clearing hands...');
    gameState.playerHand = [];
    gameState.dealerHand = [];
    
    // Step 3: Take ante from both players
    console.log('💰 Taking ante...');
    if (gameState.playerChips >= gameState.ante && gameState.dealerChips >= gameState.ante) {
        gameState.playerChips -= gameState.ante;
        gameState.dealerChips -= gameState.ante;
        gameState.pot = gameState.ante * 2;
    } else {
        alert('Not enough chips to play!');
        return;
    }
    
    // Step 4: Deal cards
    console.log('🎴 Dealing cards...');
    gameState.playerHand = dealHand(gameState.deck, 5);
    gameState.dealerHand = dealHand(gameState.deck, 5);
    console.log(`   Player: ${gameState.playerHand.length} cards`);
    console.log(`   Dealer: ${gameState.dealerHand.length} cards`);
    console.log(`   Deck remaining: ${gameState.deck.length} cards`);
    
    // Step 5: Set game as active
    gameState.gameActive = true;
    
    // Step 6: Update displays
    console.log('🖥️  Updating displays...');
    showGameScreen();
    displayHand(gameState.playerHand, 'player-cards');
    displayDealerHandHidden(gameState.dealerHand);
    updateChipDisplay();
    updatePotDisplay();
    
    console.log('✅ Game ready! Good luck!');
    console.log('═════════════════════════════════════');
}


/**
 * Handles fold action - player gives up
 */
function fold() {
    if (!gameState.gameActive) {
        console.log('No active game');
        return;
    }
    
    console.log('Player folds');
    
    // Dealer wins the pot
    gameState.dealerChips += gameState.pot;
    gameState.pot = 0;
    gameState.gameActive = false;
    
    // Show dealer's cards
    displayHand(gameState.dealerHand, 'dealer-cards');
    
    // Update displays
    updateChipDisplay();
    updatePotDisplay();
    
    // Show end screen
    setTimeout(() => {
        showEndScreen('lose');
    }, 1500);
}


/**
 * Handles call action - player matches bet
 */
function call() {
    if (!gameState.gameActive) {
        console.log('No active game');
        return;
    }
    
    console.log('Player calls');
    
    // Add bet to pot
    if (gameState.playerChips >= gameState.currentBet) {
        gameState.playerChips -= gameState.currentBet;
        gameState.dealerChips -= gameState.currentBet;
        gameState.pot += gameState.currentBet * 2;
        
        updateChipDisplay();
        updatePotDisplay();
        
        // Reveal cards and determine winner
        revealAndCompare();
    } else {
        alert('Not enough chips to call!');
    }
}


/**
 * Handles raise action - player increases bet
 */
function raise() {
    if (!gameState.gameActive) {
        console.log('No active game');
        return;
    }
    
    console.log('Player raises');
    
    let raiseAmount = gameState.currentBet * 2;
    
    if (gameState.playerChips >= raiseAmount && gameState.dealerChips >= raiseAmount) {
        gameState.playerChips -= raiseAmount;
        gameState.dealerChips -= raiseAmount;
        gameState.pot += raiseAmount * 2;
        
        updateChipDisplay();
        updatePotDisplay();
        
        // Reveal cards and determine winner
        revealAndCompare();
    } else {
        alert('Not enough chips to raise!');
    }
}


/**
 * Reveals both hands and determines winner
 * This is a simplified version - doesn't evaluate poker hands yet
 */
function revealAndCompare() {
    console.log('🎭 Revealing cards...');
    
    gameState.gameActive = false;
    
    // Show dealer's cards
    displayHand(gameState.dealerHand, 'dealer-cards');
    
    // Calculate hand values (simple: sum of card values)
    let playerValue = calculateHandValue(gameState.playerHand);
    let dealerValue = calculateHandValue(gameState.dealerHand);
    
    console.log('Player value:', playerValue);
    console.log('Dealer value:', dealerValue);
    
    // Determine winner
    let result;
    if (playerValue > dealerValue) {
        console.log('🎉 Player wins!');
        gameState.playerChips += gameState.pot;
        result = 'win';
    } else if (dealerValue > playerValue) {
        console.log('😔 Dealer wins');
        gameState.dealerChips += gameState.pot;
        result = 'lose';
    } else {
        console.log('🤝 Push (tie)');
        // Return bets
        gameState.playerChips += gameState.pot / 2;
        gameState.dealerChips += gameState.pot / 2;
        result = 'tie';
    }
    
    gameState.pot = 0;
    
    // Update displays
    updateChipDisplay();
    updatePotDisplay();
    
    // Show end screen after delay
    setTimeout(() => {
        showEndScreen(result);
    }, 2000);
}


/**
 * Calculates simple hand value
 * (Just adds up card values - doesn't check for poker hands yet)
 */
function calculateHandValue(hand) {
    let total = 0;
    
    for (let card of hand) {
        total += card.value;
    }
    
    return total;
}


/**
 * Plays another round
 */
function playAgain() {
    // Check if either player is out of chips
    if (gameState.playerChips < gameState.ante) {
        alert('Game Over! You ran out of chips.');
        showStartScreen();
        gameState.playerChips = 1000;
        gameState.dealerChips = 1000;
        return;
    }
    
    if (gameState.dealerChips < gameState.ante) {
        alert('Congratulations! You beat the dealer!');
        showStartScreen();
        gameState.playerChips = 1000;
        gameState.dealerChips = 1000;
        return;
    }
    
    // Start new round
    startGame();
}


// ============================================
// EVENT LISTENERS
// ============================================

/**
 * Sets up all button event listeners
 */
function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Start button
    let startBtn = document.getElementById('start-btn');
    if (startBtn) {
        startBtn.addEventListener('click', startGame);
        console.log('✓ Start button ready');
    }
    
    // Fold button
    let foldBtn = document.getElementById('fold-btn');
    if (foldBtn) {
        foldBtn.addEventListener('click', fold);
        console.log('✓ Fold button ready');
    }
    
    // Call button
    let callBtn = document.getElementById('call-btn');
    if (callBtn) {
        callBtn.addEventListener('click', call);
        console.log('✓ Call button ready');
    }
    
    // Raise button
    let raiseBtn = document.getElementById('raise-btn');
    if (raiseBtn) {
        raiseBtn.addEventListener('click', raise);
        console.log('✓ Raise button ready');
    }
    
    // Play again button
    let playAgainBtn = document.getElementById('play-again-btn');
    if (playAgainBtn) {
        playAgainBtn.addEventListener('click', playAgain);
        console.log('✓ Play again button ready');
    }
    
    console.log('✓ All event listeners set up');
}


// ============================================
// INITIALIZATION
// ============================================

/**
 * Runs when page loads
 * Sets up everything needed for the game
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('═════════════════════════════════════');
    console.log('    POKER GAME INITIALIZING    ');
    console.log('═════════════════════════════════════');
    
    // Set up button listeners
    setupEventListeners();
    
    // Show start screen
    showStartScreen();
    
    // Initialize displays
    updateChipDisplay();
    updatePotDisplay();
    
    console.log('✅ Game ready to play!');
    console.log('═════════════════════════════════════');
});


// ============================================
// TESTING & DEBUG FUNCTIONS
// ============================================

/**
 * Test function - Call from console to test deck
 */
function testDeck() {
    let deck = createDeck();
    console.log('Created deck:', deck);
    console.log('Deck size:', deck.length);
    console.log('First card:', deck[0]);
    console.log('Last card:', deck[51]);
    
    shuffleDeck(deck);
    console.log('After shuffle, first card:', deck[0]);
    
    return deck;
}

/**
 * Test function - Call from console to test dealing
 */
function testDeal() {
    let deck = createDeck();
    shuffleDeck(deck);
    
    let hand = dealHand(deck, 5);
    console.log('Dealt hand:', hand);
    console.log('Deck remaining:', deck.length);
    
    return hand;
}

// Make test functions available in console
window.testDeck = testDeck;
window.testDeal = testDeal;
window.gameState = gameState;
