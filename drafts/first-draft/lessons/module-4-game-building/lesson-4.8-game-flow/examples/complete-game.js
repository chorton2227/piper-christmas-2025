// ============================================
// COMPLETE POKER GAME - WORKING EXAMPLE
// Lesson 4.8: Game Flow & Logic
// ============================================

// This is a complete, working poker game that demonstrates
// all the concepts from Lesson 4.8. Study this code to see
// how all the pieces fit together!

// ============================================
// PART 1: GAME STATE
// ============================================

let gameState = {
    playerChips: 100,
    dealerChips: 100,
    pot: 0,
    ante: 5,
    playerHand: [],
    dealerHand: [],
    gamePhase: 'betting', // 'betting', 'showdown', 'gameOver'
    playerFolded: false
};

// Deck management
let deck = [];

// ============================================
// PART 2: CARD FUNCTIONS
// ============================================

function createDeck() {
    const newDeck = [];
    const suits = ['♠', '♥', '♦', '♣'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    
    for (let suit of suits) {
        for (let rank of ranks) {
            newDeck.push({ rank, suit });
        }
    }
    
    return newDeck;
}

function shuffleDeck(deckToShuffle) {
    // Fisher-Yates shuffle
    for (let i = deckToShuffle.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deckToShuffle[i], deckToShuffle[j]] = [deckToShuffle[j], deckToShuffle[i]];
    }
}

function drawCard() {
    // If deck is empty, create and shuffle new deck
    if (deck.length === 0) {
        deck = createDeck();
        shuffleDeck(deck);
    }
    
    return deck.pop();
}

function cardValue(rank) {
    if (rank === 'A') return 14;
    if (rank === 'K') return 13;
    if (rank === 'Q') return 12;
    if (rank === 'J') return 11;
    return parseInt(rank);
}

// ============================================
// PART 3: HAND EVALUATION (from Lesson 4.7)
// ============================================

function evaluateHand(hand) {
    // Sort hand by card value (high to low)
    const sorted = hand.slice().sort((a, b) => 
        cardValue(b.rank) - cardValue(a.rank)
    );
    
    // Check for each hand type (from best to worst)
    const royalFlush = checkRoyalFlush(sorted);
    if (royalFlush) return royalFlush;
    
    const straightFlush = checkStraightFlush(sorted);
    if (straightFlush) return straightFlush;
    
    const fourOfKind = checkFourOfKind(sorted);
    if (fourOfKind) return fourOfKind;
    
    const fullHouse = checkFullHouse(sorted);
    if (fullHouse) return fullHouse;
    
    const flush = checkFlush(sorted);
    if (flush) return flush;
    
    const straight = checkStraight(sorted);
    if (straight) return straight;
    
    const threeOfKind = checkThreeOfKind(sorted);
    if (threeOfKind) return threeOfKind;
    
    const twoPair = checkTwoPair(sorted);
    if (twoPair) return twoPair;
    
    const pair = checkPair(sorted);
    if (pair) return pair;
    
    // High card
    return {
        rank: 1,
        name: 'High Card',
        values: sorted.map(card => cardValue(card.rank))
    };
}

function checkRoyalFlush(hand) {
    // Check if straight flush AND high card is Ace
    const straightFlush = checkStraightFlush(hand);
    if (straightFlush && cardValue(hand[0].rank) === 14) {
        return {
            rank: 10,
            name: 'Royal Flush',
            values: [14]
        };
    }
    return null;
}

function checkStraightFlush(hand) {
    // Must be both straight AND flush
    const straight = checkStraight(hand);
    const flush = checkFlush(hand);
    
    if (straight && flush) {
        return {
            rank: 9,
            name: 'Straight Flush',
            values: [cardValue(hand[0].rank)]
        };
    }
    return null;
}

function checkFourOfKind(hand) {
    const counts = getCardCounts(hand);
    
    for (let rank in counts) {
        if (counts[rank] === 4) {
            const fourValue = cardValue(rank);
            const kicker = hand.find(card => cardValue(card.rank) !== fourValue);
            
            return {
                rank: 8,
                name: 'Four of a Kind',
                values: [fourValue, cardValue(kicker.rank)]
            };
        }
    }
    return null;
}

function checkFullHouse(hand) {
    const counts = getCardCounts(hand);
    let threeValue = null;
    let pairValue = null;
    
    for (let rank in counts) {
        if (counts[rank] === 3) {
            threeValue = cardValue(rank);
        }
        if (counts[rank] === 2) {
            pairValue = cardValue(rank);
        }
    }
    
    if (threeValue && pairValue) {
        return {
            rank: 7,
            name: 'Full House',
            values: [threeValue, pairValue]
        };
    }
    return null;
}

function checkFlush(hand) {
    // All same suit
    const firstSuit = hand[0].suit;
    const allSameSuit = hand.every(card => card.suit === firstSuit);
    
    if (allSameSuit) {
        return {
            rank: 6,
            name: 'Flush',
            values: hand.map(card => cardValue(card.rank))
        };
    }
    return null;
}

function checkStraight(hand) {
    const values = hand.map(card => cardValue(card.rank)).sort((a, b) => b - a);
    
    // Check normal straight
    let isStraight = true;
    for (let i = 0; i < values.length - 1; i++) {
        if (values[i] - values[i + 1] !== 1) {
            isStraight = false;
            break;
        }
    }
    
    if (isStraight) {
        return {
            rank: 5,
            name: 'Straight',
            values: [values[0]]
        };
    }
    
    // Check wheel straight (A-2-3-4-5)
    if (values[0] === 14 && values[1] === 5 && values[2] === 4 && 
        values[3] === 3 && values[4] === 2) {
        return {
            rank: 5,
            name: 'Straight',
            values: [5] // Wheel straight is "5 high"
        };
    }
    
    return null;
}

function checkThreeOfKind(hand) {
    const counts = getCardCounts(hand);
    
    for (let rank in counts) {
        if (counts[rank] === 3) {
            const threeValue = cardValue(rank);
            const kickers = hand
                .filter(card => cardValue(card.rank) !== threeValue)
                .map(card => cardValue(card.rank))
                .sort((a, b) => b - a);
            
            return {
                rank: 4,
                name: 'Three of a Kind',
                values: [threeValue, ...kickers]
            };
        }
    }
    return null;
}

function checkTwoPair(hand) {
    const counts = getCardCounts(hand);
    const pairs = [];
    
    for (let rank in counts) {
        if (counts[rank] === 2) {
            pairs.push(cardValue(rank));
        }
    }
    
    if (pairs.length === 2) {
        pairs.sort((a, b) => b - a); // High pair first
        const kicker = hand.find(card => {
            const val = cardValue(card.rank);
            return val !== pairs[0] && val !== pairs[1];
        });
        
        return {
            rank: 3,
            name: 'Two Pair',
            values: [pairs[0], pairs[1], cardValue(kicker.rank)]
        };
    }
    return null;
}

function checkPair(hand) {
    const counts = getCardCounts(hand);
    
    for (let rank in counts) {
        if (counts[rank] === 2) {
            const pairValue = cardValue(rank);
            const kickers = hand
                .filter(card => cardValue(card.rank) !== pairValue)
                .map(card => cardValue(card.rank))
                .sort((a, b) => b - a);
            
            return {
                rank: 2,
                name: 'Pair',
                values: [pairValue, ...kickers]
            };
        }
    }
    return null;
}

function getCardCounts(hand) {
    const counts = {};
    for (let card of hand) {
        const rank = card.rank;
        counts[rank] = (counts[rank] || 0) + 1;
    }
    return counts;
}

// ============================================
// PART 4: GAME FLOW FUNCTIONS
// ============================================

function startNewRound() {
    console.log('=== Starting New Round ===');
    
    // Reset round state
    gameState.pot = 0;
    gameState.playerHand = [];
    gameState.dealerHand = [];
    gameState.playerFolded = false;
    gameState.gamePhase = 'betting';
    
    // Check if player can afford ante
    if (gameState.playerChips < gameState.ante) {
        gameOver('You ran out of chips! Game over.');
        return;
    }
    
    // Place ante and deal cards
    placeAnte();
    dealInitialCards();
    updateDisplay();
}

function placeAnte() {
    console.log(`Placing ante: $${gameState.ante}`);
    
    // Deduct ante from both players
    gameState.playerChips -= gameState.ante;
    gameState.dealerChips -= gameState.ante;
    gameState.pot += gameState.ante * 2;
    
    console.log(`Pot is now: $${gameState.pot}`);
}

function dealInitialCards() {
    console.log('Dealing cards...');
    
    // Deal 5 cards to each player
    for (let i = 0; i < 5; i++) {
        gameState.playerHand.push(drawCard());
        gameState.dealerHand.push(drawCard());
    }
    
    console.log('Player hand:', gameState.playerHand);
    console.log('Dealer hand:', gameState.dealerHand);
}

function fold() {
    console.log('Player folds!');
    
    gameState.playerFolded = true;
    
    // Dealer wins pot
    gameState.dealerChips += gameState.pot;
    gameState.pot = 0;
    
    alert('You folded! Dealer wins.');
    
    updateDisplay();
    
    // Start new round after delay
    setTimeout(() => {
        startNewRound();
    }, 1500);
}

function call() {
    console.log('Player calls!');
    
    const callAmount = gameState.ante; // Match the ante
    
    // Check if player has enough chips
    if (gameState.playerChips < callAmount) {
        alert('Not enough chips to call!');
        return;
    }
    
    // Player pays call amount
    gameState.playerChips -= callAmount;
    gameState.pot += callAmount;
    
    console.log(`Player added $${callAmount} to pot`);
    
    // Dealer also calls
    gameState.dealerChips -= callAmount;
    gameState.pot += callAmount;
    
    console.log(`Dealer added $${callAmount} to pot`);
    console.log(`Pot is now: $${gameState.pot}`);
    
    // Go to showdown
    showdown();
}

function raise() {
    console.log('Player raises!');
    
    const raiseAmount = gameState.ante * 2; // Raise by 2x ante
    
    // Check if player has enough chips
    if (gameState.playerChips < raiseAmount) {
        alert('Not enough chips to raise!');
        return;
    }
    
    // Player pays raise amount
    gameState.playerChips -= raiseAmount;
    gameState.pot += raiseAmount;
    
    console.log(`Player added $${raiseAmount} to pot`);
    
    // Dealer decides whether to call or fold
    if (gameState.dealerChips >= raiseAmount) {
        // Dealer calls the raise
        gameState.dealerChips -= raiseAmount;
        gameState.pot += raiseAmount;
        
        console.log(`Dealer called the raise!`);
        console.log(`Pot is now: $${gameState.pot}`);
        
        // Go to showdown
        showdown();
    } else {
        // Dealer can't call - player wins
        console.log('Dealer cannot match raise!');
        
        gameState.playerChips += gameState.pot;
        gameState.pot = 0;
        
        alert('Dealer cannot match your raise! You win!');
        
        updateDisplay();
        
        setTimeout(() => {
            startNewRound();
        }, 1500);
    }
}

function showdown() {
    console.log('=== SHOWDOWN ===');
    
    // Change phase to showdown
    gameState.gamePhase = 'showdown';
    updateDisplay();
    
    // Evaluate both hands
    const playerEval = evaluateHand(gameState.playerHand);
    const dealerEval = evaluateHand(gameState.dealerHand);
    
    console.log('Player hand:', playerEval);
    console.log('Dealer hand:', dealerEval);
    
    // Determine winner
    const winner = determineWinner();
    
    console.log('Winner:', winner);
    
    // Award pot and show message
    let message = '';
    
    if (winner === 'player') {
        message = `You win with ${playerEval.name}!`;
        gameState.playerChips += gameState.pot;
    } else if (winner === 'dealer') {
        message = `Dealer wins with ${dealerEval.name}!`;
        gameState.dealerChips += gameState.pot;
    } else {
        message = `Push (tie)! Both have ${playerEval.name}.`;
        // Split pot
        gameState.playerChips += gameState.pot / 2;
        gameState.dealerChips += gameState.pot / 2;
    }
    
    gameState.pot = 0;
    
    alert(message);
    
    updateDisplay();
    
    // Start new round after delay
    setTimeout(() => {
        startNewRound();
    }, 3000);
}

function determineWinner() {
    const playerEval = evaluateHand(gameState.playerHand);
    const dealerEval = evaluateHand(gameState.dealerHand);
    
    // Compare ranks
    if (playerEval.rank > dealerEval.rank) {
        return 'player';
    } else if (dealerEval.rank > playerEval.rank) {
        return 'dealer';
    }
    
    // Same rank - compare values (tiebreaker)
    for (let i = 0; i < playerEval.values.length; i++) {
        if (playerEval.values[i] > dealerEval.values[i]) {
            return 'player';
        } else if (dealerEval.values[i] > playerEval.values[i]) {
            return 'dealer';
        }
    }
    
    // Perfect tie
    return 'tie';
}

function gameOver(message) {
    console.log('=== GAME OVER ===');
    console.log(message);
    
    gameState.gamePhase = 'gameOver';
    
    alert(message);
    
    // Ask to play again
    const playAgain = confirm('Play again?');
    
    if (playAgain) {
        // Reset game
        gameState.playerChips = 100;
        gameState.dealerChips = 100;
        startNewRound();
    }
}

// ============================================
// PART 5: DISPLAY FUNCTIONS
// ============================================

function updateDisplay() {
    updateChips();
    updatePot();
    updateHands();
    updateButtons();
}

function updateChips() {
    document.getElementById('player-chips').textContent = `$${gameState.playerChips}`;
    document.getElementById('dealer-chips').textContent = `$${gameState.dealerChips}`;
}

function updatePot() {
    document.getElementById('pot-amount').textContent = `Pot: $${gameState.pot}`;
}

function updateHands() {
    // Always show player's hand
    displayHand('player-hand', gameState.playerHand, false);
    
    // Only show dealer's hand during showdown
    if (gameState.gamePhase === 'showdown') {
        displayHand('dealer-hand', gameState.dealerHand, false);
    } else {
        displayHand('dealer-hand', gameState.dealerHand, true); // Face down
    }
}

function displayHand(containerId, hand, faceDown = false) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    for (let card of hand) {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        
        if (faceDown) {
            cardDiv.textContent = '🂠';
            cardDiv.style.color = '#333';
        } else {
            const color = (card.suit === '♥' || card.suit === '♦') ? 'red' : 'black';
            cardDiv.textContent = `${card.rank}${card.suit}`;
            cardDiv.style.color = color;
        }
        
        container.appendChild(cardDiv);
    }
}

function updateButtons() {
    const foldBtn = document.getElementById('fold-btn');
    const callBtn = document.getElementById('call-btn');
    const raiseBtn = document.getElementById('raise-btn');
    
    // Enable buttons only during betting phase
    const enabled = (gameState.gamePhase === 'betting' && !gameState.playerFolded);
    
    foldBtn.disabled = !enabled;
    callBtn.disabled = !enabled;
    raiseBtn.disabled = !enabled;
}

// ============================================
// PART 6: INITIALIZATION
// ============================================

function initGame() {
    console.log('=== Initializing Poker Game ===');
    
    // Create initial deck
    deck = createDeck();
    shuffleDeck(deck);
    
    // Set up button event listeners
    document.getElementById('fold-btn').addEventListener('click', fold);
    document.getElementById('call-btn').addEventListener('click', call);
    document.getElementById('raise-btn').addEventListener('click', raise);
    
    // Start first round
    startNewRound();
}

// Start game when page loads
window.addEventListener('load', initGame);
