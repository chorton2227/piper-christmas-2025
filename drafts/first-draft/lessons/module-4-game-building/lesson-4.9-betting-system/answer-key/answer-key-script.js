// Complete Betting System Example
// This is a fully working poker betting system with all features

// Game State
let gameState = {
    // Chips
    playerChips: 1000,
    dealerChips: 1000,
    pot: 0,
    
    // Betting
    currentBet: 0,
    minimumBet: 10,
    playerBetThisRound: 0,
    dealerBetThisRound: 0,
    playerTotalBet: 0,
    dealerTotalBet: 0,
    
    // Blinds
    smallBlind: 5,
    bigBlind: 10,
    isPlayerDealer: false,
    
    // Cards
    deck: [],
    playerHand: [],
    dealerHand: [],
    communityCards: [],
    
    // Rounds
    bettingRound: 'pre-flop',
    gamePhase: 'betting',
    handNumber: 1,
    
    // All-in
    playerIsAllIn: false,
    dealerIsAllIn: false,
    pots: []
};

// Card Creation
function createDeck() {
    const suits = ['♠', '♥', '♦', '♣'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const deck = [];
    
    for (let suit of suits) {
        for (let rank of ranks) {
            deck.push({ rank, suit });
        }
    }
    
    return deck;
}

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

function rankValue(rank) {
    const values = {
        '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8,
        '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14
    };
    return values[rank];
}

// Betting Actions
function check() {
    const toCall = gameState.currentBet - gameState.playerBetThisRound;
    
    if (toCall > 0) {
        alert(`You cannot check. There is a bet of $${toCall} to call.`);
        return false;
    }
    
    console.log('Player checks');
    alert('You check');
    
    updateDisplay();
    
    // Dealer's turn
    setTimeout(() => dealerAction(), 500);
    
    return true;
}

function bet(amount) {
    if (amount === undefined) {
        promptBet('bet');
        return;
    }
    
    amount = parseInt(amount);
    
    // Validation
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid bet amount');
        return false;
    }
    
    if (amount < gameState.minimumBet) {
        alert(`Minimum bet is $${gameState.minimumBet}`);
        return false;
    }
    
    if (amount > gameState.playerChips) {
        alert(`You only have $${gameState.playerChips}. Use All-In instead.`);
        return false;
    }
    
    // Make bet
    gameState.playerChips -= amount;
    gameState.playerBetThisRound += amount;
    gameState.pot += amount;
    gameState.currentBet = gameState.playerBetThisRound;
    
    console.log(`Player bets $${amount}`);
    alert(`You bet $${amount}`);
    
    updateDisplay();
    
    // Dealer's turn
    setTimeout(() => dealerAction(), 500);
    
    return true;
}

function call() {
    const toCall = gameState.currentBet - gameState.playerBetThisRound;
    
    if (toCall <= 0) {
        alert('There is no bet to call. Use Check instead.');
        return false;
    }
    
    if (toCall > gameState.playerChips) {
        alert(`You need $${toCall} to call but only have $${gameState.playerChips}. Use All-In instead.`);
        return false;
    }
    
    // Call the bet
    gameState.playerChips -= toCall;
    gameState.playerBetThisRound += toCall;
    gameState.pot += toCall;
    
    console.log(`Player calls $${toCall}`);
    alert(`You call $${toCall}`);
    
    updateDisplay();
    
    // Check if round complete
    if (!checkBettingRoundComplete()) {
        setTimeout(() => dealerAction(), 500);
    }
    
    return true;
}

function raise(raiseAmount) {
    if (raiseAmount === undefined) {
        promptBet('raise');
        return;
    }
    
    raiseAmount = parseInt(raiseAmount);
    
    const toCall = gameState.currentBet - gameState.playerBetThisRound;
    const totalCost = toCall + raiseAmount;
    
    // Validation
    if (isNaN(raiseAmount) || raiseAmount <= 0) {
        alert('Please enter a valid raise amount');
        return false;
    }
    
    if (raiseAmount < gameState.minimumBet) {
        alert(`Minimum raise is $${gameState.minimumBet}`);
        return false;
    }
    
    if (totalCost > gameState.playerChips) {
        alert(`You need $${totalCost} (call $${toCall} + raise $${raiseAmount}) but only have $${gameState.playerChips}`);
        return false;
    }
    
    // Make raise
    gameState.playerChips -= totalCost;
    gameState.playerBetThisRound += totalCost;
    gameState.pot += totalCost;
    gameState.currentBet = gameState.playerBetThisRound;
    
    console.log(`Player raises $${raiseAmount} (total bet: $${gameState.playerBetThisRound})`);
    alert(`You raise $${raiseAmount}!`);
    
    updateDisplay();
    
    // Dealer's turn
    setTimeout(() => dealerAction(), 500);
    
    return true;
}

function fold() {
    console.log('Player folds');
    
    alert('You fold. Dealer wins the pot.');
    
    // Dealer wins
    gameState.dealerChips += gameState.pot;
    gameState.pot = 0;
    gameState.gamePhase = 'game-over';
    
    updateDisplay();
    
    setTimeout(() => {
        startNewRound();
    }, 2000);
}

function allIn() {
    const allInAmount = gameState.playerChips;
    
    if (allInAmount === 0) {
        alert('You have no chips left!');
        return false;
    }
    
    console.log(`Player goes ALL-IN for $${allInAmount}!`);
    
    // Bet all chips
    gameState.playerChips = 0;
    gameState.playerBetThisRound += allInAmount;
    gameState.pot += allInAmount;
    gameState.playerIsAllIn = true;
    
    // Update current bet if this is higher
    if (gameState.playerBetThisRound > gameState.currentBet) {
        gameState.currentBet = gameState.playerBetThisRound;
    }
    
    alert(`You go ALL-IN for $${allInAmount}! 🔥`);
    
    updateDisplay();
    
    // Dealer must respond
    setTimeout(() => dealerAction(), 500);
    
    return true;
}

// Dealer Actions
function dealerCheck() {
    console.log('Dealer checks');
    alert('Dealer checks');
    
    updateDisplay();
    
    checkBettingRoundComplete();
}

function dealerBet(amount) {
    console.log(`Dealer bets $${amount}`);
    
    gameState.dealerChips -= amount;
    gameState.dealerBetThisRound += amount;
    gameState.pot += amount;
    gameState.currentBet = gameState.dealerBetThisRound;
    
    alert(`Dealer bets $${amount}`);
    
    updateDisplay();
}

function dealerCall() {
    const toCall = gameState.currentBet - gameState.dealerBetThisRound;
    
    console.log(`Dealer calls $${toCall}`);
    
    gameState.dealerChips -= toCall;
    gameState.dealerBetThisRound += toCall;
    gameState.pot += toCall;
    
    alert(`Dealer calls $${toCall}`);
    
    updateDisplay();
    
    checkBettingRoundComplete();
}

function dealerRaise(raiseAmount) {
    const toCall = gameState.currentBet - gameState.dealerBetThisRound;
    const totalCost = toCall + raiseAmount;
    
    console.log(`Dealer raises $${raiseAmount}`);
    
    gameState.dealerChips -= totalCost;
    gameState.dealerBetThisRound += totalCost;
    gameState.pot += totalCost;
    gameState.currentBet = gameState.dealerBetThisRound;
    
    alert(`Dealer raises $${raiseAmount}!`);
    
    updateDisplay();
}

function dealerFold() {
    console.log('Dealer folds');
    
    alert('Dealer folds. You win the pot!');
    
    // Player wins
    gameState.playerChips += gameState.pot;
    gameState.pot = 0;
    gameState.gamePhase = 'game-over';
    
    updateDisplay();
    
    setTimeout(() => {
        startNewRound();
    }, 2000);
}

function dealerAllIn() {
    const allInAmount = gameState.dealerChips;
    
    console.log(`Dealer goes ALL-IN for $${allInAmount}!`);
    
    gameState.dealerChips = 0;
    gameState.dealerBetThisRound += allInAmount;
    gameState.pot += allInAmount;
    gameState.dealerIsAllIn = true;
    
    if (gameState.dealerBetThisRound > gameState.currentBet) {
        gameState.currentBet = gameState.dealerBetThisRound;
    }
    
    alert(`Dealer goes ALL-IN for $${allInAmount}! 💥`);
    
    updateDisplay();
    
    // Check if both all-in
    if (gameState.playerIsAllIn && gameState.dealerIsAllIn) {
        runOutCards();
    } else if (gameState.playerIsAllIn) {
        checkBettingRoundComplete();
    }
}

// Dealer AI
function dealerAction() {
    if (gameState.gamePhase !== 'betting') return;
    
    const toCall = gameState.currentBet - gameState.dealerBetThisRound;
    const handValue = evaluateDealerHand();
    
    console.log(`Dealer deciding... Hand strength: ${handValue.rank}, To call: $${toCall}`);
    
    // Very strong hand (pair or better) - raise
    if (handValue.rank >= 2) {
        const raiseAmount = gameState.bigBlind * Math.floor(Math.random() * 3 + 1);
        
        if (toCall + raiseAmount <= gameState.dealerChips) {
            dealerRaise(raiseAmount);
        } else if (toCall <= gameState.dealerChips) {
            dealerCall();
        } else {
            dealerAllIn();
        }
    }
    // No bet to call - check or small bet
    else if (toCall === 0) {
        if (Math.random() < 0.3 && handValue.rank >= 1) {
            // 30% chance to bet with decent hand
            const betAmount = gameState.bigBlind;
            if (betAmount <= gameState.dealerChips) {
                dealerBet(betAmount);
            } else {
                dealerCheck();
            }
        } else {
            dealerCheck();
        }
    }
    // Small bet and decent hand - call
    else if (toCall <= gameState.bigBlind && handValue.rank >= 1) {
        if (toCall <= gameState.dealerChips) {
            dealerCall();
        } else {
            dealerAllIn();
        }
    }
    // Larger bet - fold unless good hand
    else {
        if (handValue.rank >= 2 && toCall <= gameState.dealerChips) {
            dealerCall();
        } else if (handValue.rank >= 2) {
            dealerAllIn();
        } else {
            dealerFold();
        }
    }
}

function evaluateDealerHand() {
    const allCards = [...gameState.dealerHand, ...gameState.communityCards];
    
    if (allCards.length >= 2) {
        return getBestHand(gameState.dealerHand, gameState.communityCards);
    }
    
    // Pre-flop - just evaluate hole cards
    const ranks = gameState.dealerHand.map(c => rankValue(c.rank));
    const hasPair = ranks[0] === ranks[1];
    const highCard = Math.max(...ranks);
    
    return {
        rank: hasPair ? 2 : (highCard >= 11 ? 1 : 0),
        values: [Math.max(...ranks)],
        name: hasPair ? 'Pair' : 'High Card'
    };
}

// Betting Rounds
function postBlinds() {
    console.log('Posting blinds...');
    
    // Small blind (dealer/button)
    if (gameState.isPlayerDealer) {
        gameState.playerChips -= gameState.smallBlind;
        gameState.playerBetThisRound = gameState.smallBlind;
        gameState.pot += gameState.smallBlind;
        console.log('Player posts small blind');
    } else {
        gameState.dealerChips -= gameState.smallBlind;
        gameState.dealerBetThisRound = gameState.smallBlind;
        gameState.pot += gameState.smallBlind;
        console.log('Dealer posts small blind');
    }
    
    // Big blind
    if (gameState.isPlayerDealer) {
        gameState.dealerChips -= gameState.bigBlind;
        gameState.dealerBetThisRound = gameState.bigBlind;
        gameState.pot += gameState.bigBlind;
        console.log('Dealer posts big blind');
    } else {
        gameState.playerChips -= gameState.bigBlind;
        gameState.playerBetThisRound = gameState.bigBlind;
        gameState.pot += gameState.bigBlind;
        console.log('Player posts big blind');
    }
    
    gameState.currentBet = gameState.bigBlind;
    
    updateDisplay();
}

function checkBettingRoundComplete() {
    console.log('Checking if betting round complete...');
    console.log(`Player bet: $${gameState.playerBetThisRound}, Dealer bet: $${gameState.dealerBetThisRound}`);
    
    // Both all-in - run out cards
    if (gameState.playerIsAllIn && gameState.dealerIsAllIn) {
        console.log('Both all-in - running out cards');
        runOutCards();
        return true;
    }
    
    // One all-in, other has matched
    if ((gameState.playerIsAllIn || gameState.dealerIsAllIn) && 
        gameState.playerBetThisRound === gameState.dealerBetThisRound) {
        if (gameState.bettingRound === 'river') {
            showdown();
        } else {
            advanceBettingRound();
        }
        return true;
    }
    
    // Normal case - bets equal
    const betsEqual = (gameState.playerBetThisRound === gameState.dealerBetThisRound);
    
    if (betsEqual && gameState.currentBet >= 0) {
        console.log('Bets equal - advancing');
        if (gameState.bettingRound === 'river') {
            showdown();
        } else {
            advanceBettingRound();
        }
        return true;
    }
    
    return false;
}

function advanceBettingRound() {
    console.log(`Advancing from ${gameState.bettingRound}...`);
    
    // Save bets to total
    gameState.playerTotalBet += gameState.playerBetThisRound;
    gameState.dealerTotalBet += gameState.dealerBetThisRound;
    
    // Reset round bets
    gameState.playerBetThisRound = 0;
    gameState.dealerBetThisRound = 0;
    gameState.currentBet = 0;
    
    // Advance to next round
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

function dealFlop() {
    console.log('Dealing flop...');
    
    // Burn card
    gameState.deck.shift();
    
    // Deal 3 community cards
    for (let i = 0; i < 3; i++) {
        gameState.communityCards.push(gameState.deck.shift());
    }
    
    alert('Flop dealt! 3 community cards revealed.');
    
    updateDisplay();
    
    // First player acts (non-dealer)
    if (!gameState.isPlayerDealer) {
        // Player acts first
        updateButtonStates();
    } else {
        // Dealer acts first
        setTimeout(() => dealerAction(), 500);
    }
}

function dealTurn() {
    console.log('Dealing turn...');
    
    // Burn card
    gameState.deck.shift();
    
    // Deal 4th community card
    gameState.communityCards.push(gameState.deck.shift());
    
    alert('Turn dealt! 4th community card revealed.');
    
    updateDisplay();
    
    // First player acts
    if (!gameState.isPlayerDealer) {
        updateButtonStates();
    } else {
        setTimeout(() => dealerAction(), 500);
    }
}

function dealRiver() {
    console.log('Dealing river...');
    
    // Burn card
    gameState.deck.shift();
    
    // Deal 5th community card
    gameState.communityCards.push(gameState.deck.shift());
    
    alert('River dealt! Final community card revealed.');
    
    updateDisplay();
    
    // First player acts
    if (!gameState.isPlayerDealer) {
        updateButtonStates();
    } else {
        setTimeout(() => dealerAction(), 500);
    }
}

function runOutCards() {
    console.log('Both all-in - running out remaining cards...');
    
    alert('Both all-in! Dealing remaining cards... 🔥');
    
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

// Side Pots
function calculateSidePots() {
    console.log('=== Calculating Side Pots ===');
    
    const playerTotal = gameState.playerTotalBet + gameState.playerBetThisRound;
    const dealerTotal = gameState.dealerTotalBet + gameState.dealerBetThisRound;
    
    console.log(`Player total bet: $${playerTotal}`);
    console.log(`Dealer total bet: $${dealerTotal}`);
    
    gameState.pots = [];
    
    // Equal bets - single main pot
    if (playerTotal === dealerTotal) {
        gameState.pots.push({
            amount: gameState.pot,
            eligiblePlayers: ['player', 'dealer'],
            type: 'main'
        });
        console.log(`Main pot: $${gameState.pot} (both eligible)`);
        return;
    }
    
    // Unequal bets - main pot + side pot
    const minBet = Math.min(playerTotal, dealerTotal);
    const maxBet = Math.max(playerTotal, dealerTotal);
    
    // Main pot
    const mainPot = minBet * 2;
    gameState.pots.push({
        amount: mainPot,
        eligiblePlayers: ['player', 'dealer'],
        type: 'main'
    });
    console.log(`Main pot: $${mainPot} (both eligible)`);
    
    // Side pot
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

function awardSidePots() {
    console.log('=== Awarding Pots ===');
    
    calculateSidePots();
    
    const playerHand = getBestHand(gameState.playerHand, gameState.communityCards);
    const dealerHand = getBestHand(gameState.dealerHand, gameState.communityCards);
    
    let messages = [];
    
    for (let pot of gameState.pots) {
        console.log(`\nAwarding ${pot.type} pot: $${pot.amount}`);
        console.log(`Eligible: ${pot.eligiblePlayers.join(', ')}`);
        
        // Only one eligible - auto win
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
        
        // Compare hands
        const winner = compareHandsForPot(playerHand, dealerHand, pot.eligiblePlayers);
        
        if (winner === 'player') {
            gameState.playerChips += pot.amount;
            messages.push(`You win ${pot.type} pot: $${pot.amount} with ${playerHand.name}!`);
        } else if (winner === 'dealer') {
            gameState.dealerChips += pot.amount;
            messages.push(`Dealer wins ${pot.type} pot: $${pot.amount} with ${dealerHand.name}`);
        } else {
            // Tie - split
            const split = pot.amount / 2;
            gameState.playerChips += split;
            gameState.dealerChips += split;
            messages.push(`${pot.type} pot split: $${split} each (tie)`);
        }
    }
    
    gameState.pot = 0;
    
    return messages;
}

function compareHandsForPot(playerHand, dealerHand, eligiblePlayers) {
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

// Showdown
function showdown() {
    console.log('=== SHOWDOWN ===');
    
    gameState.gamePhase = 'showdown';
    
    updateDisplay();
    
    // Check if side pots needed
    if (gameState.playerIsAllIn || gameState.dealerIsAllIn) {
        const messages = awardSidePots();
        
        setTimeout(() => {
            alert('Showdown!\n\n' + messages.join('\n'));
            updateDisplay();
            
            setTimeout(() => {
                if (gameState.playerChips <= 0 || gameState.dealerChips <= 0) {
                    gameOver();
                } else {
                    startNewRound();
                }
            }, 2000);
        }, 1000);
    } else {
        // Regular showdown
        const playerHand = getBestHand(gameState.playerHand, gameState.communityCards);
        const dealerHand = getBestHand(gameState.dealerHand, gameState.communityCards);
        
        const winner = compareHandsForPot(playerHand, dealerHand, ['player', 'dealer']);
        
        let message = '';
        if (winner === 'player') {
            message = `You win with ${playerHand.name}!\nDealer had ${dealerHand.name}`;
            gameState.playerChips += gameState.pot;
        } else if (winner === 'dealer') {
            message = `Dealer wins with ${dealerHand.name}\nYou had ${playerHand.name}`;
            gameState.dealerChips += gameState.pot;
        } else {
            message = `Push! Both have ${playerHand.name}`;
            gameState.playerChips += gameState.pot / 2;
            gameState.dealerChips += gameState.pot / 2;
        }
        
        gameState.pot = 0;
        
        setTimeout(() => {
            alert(message);
            updateDisplay();
            
            setTimeout(() => {
                if (gameState.playerChips <= 0 || gameState.dealerChips <= 0) {
                    gameOver();
                } else {
                    startNewRound();
                }
            }, 2000);
        }, 1000);
    }
}

// Hand Evaluation
function getBestHand(holeCards, communityCards) {
    const allCards = [...holeCards, ...communityCards];
    
    if (allCards.length < 5) {
        // Pre-flop or early - just evaluate what we have
        const ranks = allCards.map(c => rankValue(c.rank));
        const hasPair = ranks.length !== new Set(ranks).size;
        const highCard = Math.max(...ranks);
        
        return {
            rank: hasPair ? 2 : 1,
            values: [highCard],
            name: hasPair ? 'Pair' : 'High Card'
        };
    }
    
    // Full evaluation with 5+ cards
    const ranks = allCards.map(c => rankValue(c.rank));
    const suits = allCards.map(c => c.suit);
    
    // Count ranks
    const rankCounts = {};
    for (let rank of ranks) {
        rankCounts[rank] = (rankCounts[rank] || 0) + 1;
    }
    
    const counts = Object.values(rankCounts).sort((a, b) => b - a);
    const ranksSorted = Object.keys(rankCounts)
        .map(r => parseInt(r))
        .sort((a, b) => rankCounts[b] - rankCounts[a] || b - a);
    
    // Check for pairs, trips, etc.
    const hasPair = counts[0] === 2;
    const hasTwoPair = counts[0] === 2 && counts[1] === 2;
    const hasTrips = counts[0] === 3;
    const hasQuads = counts[0] === 4;
    const hasFullHouse = counts[0] === 3 && counts[1] === 2;
    
    // Check for flush
    const suitCounts = {};
    for (let suit of suits) {
        suitCounts[suit] = (suitCounts[suit] || 0) + 1;
    }
    const hasFlush = Object.values(suitCounts).some(count => count >= 5);
    
    // Check for straight
    const uniqueRanks = [...new Set(ranks)].sort((a, b) => b - a);
    let hasStraight = false;
    for (let i = 0; i <= uniqueRanks.length - 5; i++) {
        if (uniqueRanks[i] - uniqueRanks[i + 4] === 4) {
            hasStraight = true;
            break;
        }
    }
    
    // Determine hand rank
    if (hasStraight && hasFlush) {
        return { rank: 9, values: ranksSorted, name: 'Straight Flush' };
    } else if (hasQuads) {
        return { rank: 8, values: ranksSorted, name: 'Four of a Kind' };
    } else if (hasFullHouse) {
        return { rank: 7, values: ranksSorted, name: 'Full House' };
    } else if (hasFlush) {
        return { rank: 6, values: ranksSorted, name: 'Flush' };
    } else if (hasStraight) {
        return { rank: 5, values: ranksSorted, name: 'Straight' };
    } else if (hasTrips) {
        return { rank: 4, values: ranksSorted, name: 'Three of a Kind' };
    } else if (hasTwoPair) {
        return { rank: 3, values: ranksSorted, name: 'Two Pair' };
    } else if (hasPair) {
        return { rank: 2, values: ranksSorted, name: 'Pair' };
    } else {
        return { rank: 1, values: ranksSorted, name: 'High Card' };
    }
}

// Game Flow
function startNewRound() {
    console.log('=== Starting New Round ===');
    
    // Rotate button
    gameState.isPlayerDealer = !gameState.isPlayerDealer;
    gameState.handNumber++;
    
    // Reset game state
    gameState.pot = 0;
    gameState.currentBet = 0;
    gameState.playerBetThisRound = 0;
    gameState.dealerBetThisRound = 0;
    gameState.playerTotalBet = 0;
    gameState.dealerTotalBet = 0;
    gameState.playerHand = [];
    gameState.dealerHand = [];
    gameState.communityCards = [];
    gameState.bettingRound = 'pre-flop';
    gameState.gamePhase = 'betting';
    gameState.playerIsAllIn = false;
    gameState.dealerIsAllIn = false;
    gameState.pots = [];
    
    // New deck
    gameState.deck = shuffleDeck(createDeck());
    
    // Post blinds
    postBlinds();
    
    // Deal hole cards
    gameState.playerHand = [gameState.deck.shift(), gameState.deck.shift()];
    gameState.dealerHand = [gameState.deck.shift(), gameState.deck.shift()];
    
    alert(`Hand #${gameState.handNumber}\nBlinds posted. Cards dealt!`);
    
    updateDisplay();
    
    // First player acts (left of big blind)
    if (gameState.isPlayerDealer) {
        // Player is dealer/small blind, dealer is big blind, player acts first
        updateButtonStates();
    } else {
        // Dealer is dealer/small blind, player is big blind, dealer acts first
        setTimeout(() => dealerAction(), 500);
    }
}

function gameOver() {
    if (gameState.playerChips <= 0) {
        alert('Game Over! You ran out of chips. Dealer wins!');
    } else {
        alert('Game Over! Dealer ran out of chips. You win!');
    }
    
    const playAgain = confirm('Play again?');
    if (playAgain) {
        initGame();
    }
}

// UI Functions
function promptBet(action) {
    const modal = document.getElementById('bet-modal');
    const input = document.getElementById('bet-input');
    const confirmBtn = document.getElementById('confirm-bet');
    const cancelBtn = document.getElementById('cancel-bet');
    
    document.getElementById('modal-title').textContent = 
        action === 'bet' ? 'Enter Bet Amount' : 'Enter Raise Amount';
    
    modal.style.display = 'flex';
    input.value = gameState.minimumBet;
    input.focus();
    input.select();
    
    confirmBtn.onclick = () => {
        const amount = parseInt(input.value);
        modal.style.display = 'none';
        
        if (action === 'bet') {
            bet(amount);
        } else {
            raise(amount);
        }
    };
    
    cancelBtn.onclick = () => {
        modal.style.display = 'none';
    };
    
    input.onkeypress = (e) => {
        if (e.key === 'Enter') {
            confirmBtn.click();
        }
    };
}

function updateDisplay() {
    // Chips
    document.getElementById('player-chips').textContent = `$${gameState.playerChips}`;
    document.getElementById('dealer-chips').textContent = `$${gameState.dealerChips}`;
    
    // Pot
    document.getElementById('pot').textContent = `Pot: $${gameState.pot}`;
    
    // Bets
    document.getElementById('player-bet').textContent = `Bet: $${gameState.playerBetThisRound}`;
    document.getElementById('dealer-bet').textContent = `Bet: $${gameState.dealerBetThisRound}`;
    
    // Round info
    document.getElementById('round-info').textContent = 
        `Hand #${gameState.handNumber} | ${gameState.bettingRound} | ${gameState.gamePhase}`;
    
    // Button indicator
    document.getElementById('player-button').style.display = 
        gameState.isPlayerDealer ? 'inline' : 'none';
    document.getElementById('dealer-button').style.display = 
        !gameState.isPlayerDealer ? 'inline' : 'none';
    
    // All-in indicators
    document.getElementById('player-all-in').style.display = 
        gameState.playerIsAllIn ? 'block' : 'none';
    document.getElementById('dealer-all-in').style.display = 
        gameState.dealerIsAllIn ? 'block' : 'none';
    
    // Cards
    displayCards();
    
    // Side pots
    displaySidePots();
    
    // Buttons
    updateButtonStates();
}

function displayCards() {
    // Player hand
    const playerHandDiv = document.getElementById('player-hand');
    playerHandDiv.innerHTML = '';
    for (let card of gameState.playerHand) {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.textContent = `${card.rank}${card.suit}`;
        if (card.suit === '♥' || card.suit === '♦') {
            cardDiv.style.color = 'red';
        }
        playerHandDiv.appendChild(cardDiv);
    }
    
    // Dealer hand
    const dealerHandDiv = document.getElementById('dealer-hand');
    dealerHandDiv.innerHTML = '';
    for (let card of gameState.dealerHand) {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        if (gameState.gamePhase === 'showdown') {
            cardDiv.textContent = `${card.rank}${card.suit}`;
            if (card.suit === '♥' || card.suit === '♦') {
                cardDiv.style.color = 'red';
            }
        } else {
            cardDiv.textContent = '🂠';
            cardDiv.classList.add('face-down');
        }
        dealerHandDiv.appendChild(cardDiv);
    }
    
    // Community cards
    const communityDiv = document.getElementById('community-cards');
    communityDiv.innerHTML = '';
    for (let card of gameState.communityCards) {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.textContent = `${card.rank}${card.suit}`;
        if (card.suit === '♥' || card.suit === '♦') {
            cardDiv.style.color = 'red';
        }
        communityDiv.appendChild(cardDiv);
    }
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
    const toCall = gameState.currentBet - gameState.playerBetThisRound;
    const canAct = gameState.gamePhase === 'betting' && !gameState.playerIsAllIn;
    
    // Check
    document.getElementById('check-btn').disabled = !canAct || toCall > 0;
    
    // Bet
    document.getElementById('bet-btn').disabled = 
        !canAct || gameState.currentBet > 0 || gameState.playerChips < gameState.minimumBet;
    
    // Call
    document.getElementById('call-btn').disabled = 
        !canAct || toCall <= 0 || gameState.playerChips < toCall;
    
    // Raise
    document.getElementById('raise-btn').disabled = 
        !canAct || gameState.playerChips < (toCall + gameState.minimumBet);
    
    // Fold
    document.getElementById('fold-btn').disabled = !canAct;
    
    // All-in
    document.getElementById('all-in-btn').disabled = 
        !canAct || gameState.playerChips === 0;
}

// Initialize
function initGame() {
    gameState.playerChips = 1000;
    gameState.dealerChips = 1000;
    gameState.handNumber = 0;
    gameState.isPlayerDealer = Math.random() < 0.5;
    
    startNewRound();
}

// Start game when page loads
window.onload = initGame;
