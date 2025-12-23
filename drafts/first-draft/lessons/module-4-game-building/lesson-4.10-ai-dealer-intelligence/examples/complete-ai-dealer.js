// ============================================
// COMPLETE AI DEALER - WORKING EXAMPLE
// ============================================
// This file contains a fully functional AI dealer
// with all features from Exercises 1, 2, and 3

// ============================================
// GAME STATE (from previous lessons)
// ============================================

const gameState = {
    // Player & Dealer
    playerChips: 1000,
    dealerChips: 1000,
    
    // Cards
    deck: [],
    playerHoleCards: [],
    dealerHoleCards: [],
    communityCards: [],
    
    // Betting
    pot: 0,
    currentBet: 0,
    playerBet: 0,
    dealerBet: 0,
    smallBlind: 10,
    bigBlind: 20,
    
    // Game Flow
    gamePhase: 'waiting', // waiting, pre-flop, flop, turn, river, showdown
    dealerButton: 'player', // player or dealer
    handNumber: 0,
    lastAction: null, // Track who did what last
    foldedPlayer: null, // Track who folded
    
    // AI Personality
    difficulty: 'medium',
    dealerPersonality: {
        bluffFrequency: 0.15,
        aggression: 0.5,
        callDownFrequency: 0.4,
        foldFrequency: 0.35,
        slowplayFrequency: 0.1,
        adaptability: 0.5
    },
    
    // Player Tracking
    playerStats: {
        handsPlayed: 0,
        totalBets: 0,
        totalRaises: 0,
        totalCalls: 0,
        totalFolds: 0,
        totalChecks: 0
    },
    
    // Player Model
    playerModel: {
        type: 'unknown',
        confidence: 0,
        tendencies: {
            aggressionFactor: 0,
            foldFrequency: 0,
            callFrequency: 0
        }
    }
};

// ============================================
// HELPER FUNCTIONS (from previous lessons)
// ============================================

function createDeck() {
    const deck = [];
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]; // 11=J, 12=Q, 13=K, 14=A
    
    for (let suit of suits) {
        for (let rank of ranks) {
            deck.push({ rank, suit });
        }
    }
    
    return shuffle(deck);
}

function shuffle(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function dealCard() {
    return gameState.deck.pop();
}

function rankToString(rank) {
    if (rank === 14) return 'A';
    if (rank === 13) return 'K';
    if (rank === 12) return 'Q';
    if (rank === 11) return 'J';
    return rank.toString();
}

function cardToString(card) {
    return rankToString(card.rank) + card.suit[0].toUpperCase();
}

// ============================================
// BASIC HAND EVALUATION (from lesson 4.2)
// ============================================

function evaluateHand(cards) {
    if (cards.length < 5) return { rank: 0, name: 'No hand yet' };
    
    const sortedCards = [...cards].sort((a, b) => b.rank - a.rank);
    
    // Check for flush
    const suitCounts = {};
    for (let card of cards) {
        suitCounts[card.suit] = (suitCounts[card.suit] || 0) + 1;
        if (suitCounts[card.suit] >= 5) {
            // Has flush, check for straight flush
            const flushCards = cards.filter(c => c.suit === card.suit);
            const straightFlush = checkStraight(flushCards);
            if (straightFlush) {
                return { rank: 9, name: 'Straight Flush', highCard: straightFlush.highCard };
            }
            return { rank: 6, name: 'Flush', highCard: sortedCards[0].rank };
        }
    }
    
    // Count ranks
    const rankCounts = {};
    for (let card of cards) {
        rankCounts[card.rank] = (rankCounts[card.rank] || 0) + 1;
    }
    
    const counts = Object.entries(rankCounts).sort((a, b) => {
        if (b[1] !== a[1]) return b[1] - a[1];
        return b[0] - a[0];
    });
    
    const [rank1, count1] = counts[0];
    const [rank2, count2] = counts[1] || [0, 0];
    
    // Four of a kind
    if (count1 === 4) {
        return { rank: 8, name: 'Four of a Kind', highCard: parseInt(rank1) };
    }
    
    // Full house
    if (count1 === 3 && count2 >= 2) {
        return { rank: 7, name: 'Full House', highCard: parseInt(rank1) };
    }
    
    // Check for straight
    const straight = checkStraight(cards);
    if (straight) {
        return { rank: 5, name: 'Straight', highCard: straight.highCard };
    }
    
    // Three of a kind
    if (count1 === 3) {
        return { rank: 4, name: 'Three of a Kind', highCard: parseInt(rank1) };
    }
    
    // Two pair
    if (count1 === 2 && count2 === 2) {
        return { rank: 3, name: 'Two Pair', highCard: Math.max(parseInt(rank1), parseInt(rank2)) };
    }
    
    // One pair
    if (count1 === 2) {
        return { rank: 2, name: 'Pair', highCard: parseInt(rank1) };
    }
    
    // High card
    return { rank: 1, name: 'High Card', highCard: sortedCards[0].rank };
}

function checkStraight(cards) {
    const uniqueRanks = [...new Set(cards.map(c => c.rank))].sort((a, b) => b - a);
    
    // Check regular straight
    for (let i = 0; i <= uniqueRanks.length - 5; i++) {
        let consecutive = true;
        for (let j = 0; j < 4; j++) {
            if (uniqueRanks[i + j] - uniqueRanks[i + j + 1] !== 1) {
                consecutive = false;
                break;
            }
        }
        if (consecutive) {
            return { highCard: uniqueRanks[i] };
        }
    }
    
    // Check wheel (A-2-3-4-5)
    if (uniqueRanks.includes(14) && uniqueRanks.includes(5) && 
        uniqueRanks.includes(4) && uniqueRanks.includes(3) && uniqueRanks.includes(2)) {
        return { highCard: 5 };
    }
    
    return null;
}

// ============================================
// EXERCISE 1: ENHANCED HAND EVALUATION
// ============================================

function hasTopPairOrBetter(holeCards, communityCards) {
    if (communityCards.length === 0) return false;
    if (holeCards.length < 2) return false;
    
    // Find highest community card rank
    const highBoardCard = Math.max(...communityCards.map(c => c.rank));
    
    // Check if either hole card matches
    for (let card of holeCards) {
        if (card.rank === highBoardCard) {
            return true;
        }
    }
    
    // Check for overpair
    return hasOverpair(holeCards, communityCards);
}

function hasOverpair(holeCards, communityCards) {
    if (communityCards.length === 0) return false;
    if (holeCards.length < 2) return false;
    
    // Check if we have a pocket pair
    if (holeCards[0].rank !== holeCards[1].rank) return false;
    
    const pairRank = holeCards[0].rank;
    const highBoardCard = Math.max(...communityCards.map(c => c.rank));
    
    return pairRank > highBoardCard;
}

function evaluateDraws(holeCards, communityCards) {
    const allCards = [...holeCards, ...communityCards];
    
    // Flush draw
    const suitCounts = {};
    for (let card of allCards) {
        suitCounts[card.suit] = (suitCounts[card.suit] || 0) + 1;
    }
    
    let flushDraw = false;
    for (let suit in suitCounts) {
        if (suitCounts[suit] === 4) {
            flushDraw = true;
            break;
        }
    }
    
    // Straight draw
    const uniqueRanks = [...new Set(allCards.map(c => c.rank))].sort((a, b) => b - a);
    let straightDraw = false;
    
    // Open-ended straight draw (4 consecutive cards)
    for (let i = 0; i <= uniqueRanks.length - 4; i++) {
        let consecutive = true;
        for (let j = 0; j < 3; j++) {
            if (uniqueRanks[i + j] - uniqueRanks[i + j + 1] !== 1) {
                consecutive = false;
                break;
            }
        }
        if (consecutive) {
            straightDraw = true;
            break;
        }
    }
    
    // Gutshot (need one card to complete straight)
    if (!straightDraw) {
        for (let i = 0; i <= uniqueRanks.length - 4; i++) {
            let gaps = 0;
            for (let j = 0; j < 3; j++) {
                const diff = uniqueRanks[i + j] - uniqueRanks[i + j + 1];
                if (diff === 2) gaps++;
                else if (diff !== 1) {
                    gaps = 999; // Not close to straight
                    break;
                }
            }
            if (gaps === 1) {
                straightDraw = true;
                break;
            }
        }
    }
    
    return {
        flushDraw,
        straightDraw,
        comboDraw: flushDraw && straightDraw
    };
}

function analyzeBoardTexture(communityCards) {
    if (communityCards.length < 3) {
        return { texture: 'none', danger: 0, flushPossible: false, straightPossible: false, paired: false };
    }
    
    // Check for flush possibility
    const suitCounts = {};
    for (let card of communityCards) {
        suitCounts[card.suit] = (suitCounts[card.suit] || 0) + 1;
    }
    const maxSuitCount = Math.max(...Object.values(suitCounts));
    const flushPossible = maxSuitCount >= 3;
    
    // Check for straight possibility
    const uniqueRanks = [...new Set(communityCards.map(c => c.rank))].sort((a, b) => b - a);
    let straightPossible = false;
    
    if (uniqueRanks.length >= 3) {
        const maxGap = Math.max(...uniqueRanks.slice(0, -1).map((r, i) => r - uniqueRanks[i + 1]));
        straightPossible = maxGap <= 4; // Cards close enough for straight
    }
    
    // Check for paired board
    const rankCounts = {};
    for (let card of communityCards) {
        rankCounts[card.rank] = (rankCounts[card.rank] || 0) + 1;
    }
    const paired = Object.values(rankCounts).some(count => count >= 2);
    
    // Determine texture
    let texture = 'dry';
    let danger = 1;
    
    if (paired) {
        texture = 'paired';
        danger = 2;
    }
    
    if (flushPossible && straightPossible) {
        texture = 'very-coordinated';
        danger = 5;
    } else if (flushPossible || straightPossible) {
        texture = 'coordinated';
        danger = 3;
    }
    
    return { texture, danger, flushPossible, straightPossible, paired };
}

function categorizeHand(handEvaluation) {
    const rank = handEvaluation.rank;
    
    // Monster hands (full house+)
    if (rank >= 7) return 'monster';
    
    // Strong hands (trips, straight, flush)
    if (rank >= 4) return 'strong';
    
    // Made hands (pair, two pair)
    if (rank >= 2) return 'made-hand';
    
    // High card
    if (rank === 1 && handEvaluation.highCard >= 12) return 'high-card';
    
    // Weak
    return 'weak';
}

function evaluateHandStrength(holeCards, communityCards) {
    const allCards = [...holeCards, ...communityCards];
    const basicEval = evaluateHand(allCards);
    
    const topPairOrBetter = hasTopPairOrBetter(holeCards, communityCards);
    const overpair = hasOverpair(holeCards, communityCards);
    const draws = evaluateDraws(holeCards, communityCards);
    const boardTexture = analyzeBoardTexture(communityCards);
    const handCategory = categorizeHand(basicEval);
    
    return {
        ...basicEval,
        topPairOrBetter,
        overpair,
        draws,
        boardTexture,
        handCategory
    };
}

// ============================================
// EXERCISE 2: DIFFICULTY LEVELS & DECISIONS
// ============================================

function setDifficulty(level) {
    gameState.difficulty = level;
    
    const presets = {
        easy: {
            bluffFrequency: 0.05,
            aggression: 0.3,
            callDownFrequency: 0.3,
            foldFrequency: 0.5,
            slowplayFrequency: 0.0,
            adaptability: 0.2
        },
        medium: {
            bluffFrequency: 0.15,
            aggression: 0.5,
            callDownFrequency: 0.4,
            foldFrequency: 0.35,
            slowplayFrequency: 0.1,
            adaptability: 0.5
        },
        hard: {
            bluffFrequency: 0.22,
            aggression: 0.65,
            callDownFrequency: 0.5,
            foldFrequency: 0.25,
            slowplayFrequency: 0.18,
            adaptability: 0.75
        },
        expert: {
            bluffFrequency: 0.30,
            aggression: 0.8,
            callDownFrequency: 0.6,
            foldFrequency: 0.15,
            slowplayFrequency: 0.25,
            adaptability: 1.0
        }
    };
    
    gameState.dealerPersonality = presets[level];
    console.log(`Difficulty set to: ${level}`);
}

function gatherGameContext() {
    const toCall = gameState.currentBet - gameState.dealerBet;
    const potSize = gameState.pot;
    const potOdds = toCall > 0 ? toCall / (potSize + toCall) : 0;
    
    return {
        toCall,
        potSize,
        potOdds,
        dealerChips: gameState.dealerChips,
        playerChips: gameState.playerChips,
        bettingRound: gameState.gamePhase,
        playerBet: gameState.playerBet,
        dealerPosition: gameState.dealerButton === 'dealer' ? 'button' : 'out-of-position',
        handNumber: gameState.handNumber
    };
}

function calculateActionWeights(handEval, context) {
    const weights = { fold: 0, check: 0, call: 0, bet: 0, raise: 0, allIn: 0 };
    const category = handEval.handCategory;
    
    // Base weights by hand category
    if (category === 'monster') {
        weights.check = 15;  // Slowplay
        weights.bet = 40;
        weights.raise = 35;
        weights.allIn = 10;
    } else if (category === 'strong') {
        weights.check = 10;
        weights.call = 20;
        weights.bet = 45;
        weights.raise = 25;
    } else if (category === 'made-hand') {
        weights.fold = 10;
        weights.check = 25;
        weights.call = 35;
        weights.bet = 25;
        weights.raise = 5;
    } else if (category === 'high-card') {
        weights.fold = 30;
        weights.check = 40;
        weights.call = 15;
        weights.bet = 15;  // Bluff
    } else { // weak
        weights.fold = 60;
        weights.check = 30;
        weights.call = 5;
        weights.bet = 5;   // Bluff
    }
    
    // Adjust for draws
    if (handEval.draws.comboDraw) {
        weights.call *= 2;
        weights.bet *= 1.5;
    } else if (handEval.draws.flushDraw || handEval.draws.straightDraw) {
        weights.call *= 1.5;
        weights.bet *= 1.2;
    }
    
    // Adjust for board texture
    if (handEval.boardTexture.danger >= 4 && category !== 'monster') {
        weights.fold *= 1.3;
        weights.bet *= 0.7;
    }
    
    // Adjust for pot odds
    if (context.toCall > 0 && context.potOdds < 0.3) {
        weights.call *= 1.5; // Good odds
    }
    
    // Can't do certain actions
    if (context.toCall === 0) {
        weights.call = 0;
        weights.fold = 0;
    } else {
        weights.check = 0;
        weights.bet = 0;
    }
    
    // Can't bet/raise if no chips
    if (context.dealerChips <= context.toCall) {
        weights.bet = 0;
        weights.raise = 0;
        if (weights.call > 0) {
            weights.allIn = weights.call * 0.3;
        }
    }
    
    return weights;
}

function adjustWeightsForDifficulty(weights, handEval) {
    const p = gameState.dealerPersonality;
    
    // Apply aggression
    weights.bet *= (1 + p.aggression * 0.5);
    weights.raise *= (1 + p.aggression * 0.7);
    weights.call *= (1 - p.aggression * 0.3);
    
    // Apply fold frequency
    weights.fold *= (1 + p.foldFrequency);
    
    // Apply call down frequency
    if (handEval.handCategory === 'made-hand' || handEval.handCategory === 'high-card') {
        weights.call *= (1 + p.callDownFrequency * 0.5);
    }
    
    // Apply slowplay frequency
    if (handEval.handCategory === 'monster') {
        const shouldSlowplay = Math.random() < p.slowplayFrequency;
        if (shouldSlowplay) {
            weights.check *= 3;
            weights.call *= 3;
            weights.bet *= 0.3;
            weights.raise *= 0.2;
        }
    }
    
    return weights;
}

function selectWeightedAction(weights) {
    const total = Object.values(weights).reduce((sum, w) => sum + w, 0);
    
    if (total === 0) return 'fold';
    
    let random = Math.random() * total;
    
    for (let action in weights) {
        random -= weights[action];
        if (random <= 0) return action;
    }
    
    return 'fold';
}

function calculateBetSize(handEval, context) {
    const potSize = context.potSize;
    let multiplier = 0.5;
    
    if (handEval.handCategory === 'monster') {
        multiplier = Math.random() < 0.3 ? 0.3 : 0.9; // Small or big
    } else if (handEval.handCategory === 'strong') {
        multiplier = 0.6 + Math.random() * 0.3; // 0.6-0.9
    } else if (handEval.handCategory === 'made-hand') {
        multiplier = 0.4 + Math.random() * 0.3; // 0.4-0.7
    } else {
        // Bluff
        multiplier = 0.5 + Math.random() * 0.3; // 0.5-0.8
    }
    
    let betAmount = Math.floor(potSize * multiplier);
    betAmount = Math.max(betAmount, gameState.bigBlind);
    betAmount = Math.min(betAmount, gameState.dealerChips);
    
    return betAmount;
}

function calculateRaiseSize(handEval, context) {
    const potSize = context.potSize;
    const toCall = context.toCall;
    let multiplier = 0.7;
    
    if (handEval.handCategory === 'monster') {
        multiplier = 0.5 + Math.random() * 0.7; // 0.5-1.2
    } else if (handEval.handCategory === 'strong') {
        multiplier = 0.6 + Math.random() * 0.4; // 0.6-1.0
    } else {
        // Bluff raise
        multiplier = 0.6 + Math.random() * 0.3; // 0.6-0.9
    }
    
    let raiseAmount = toCall + Math.floor(potSize * multiplier);
    raiseAmount = Math.max(raiseAmount, toCall + gameState.bigBlind);
    raiseAmount = Math.min(raiseAmount, gameState.dealerChips);
    
    return raiseAmount;
}

// ============================================
// EXERCISE 3: OPPONENT MODELING
// ============================================

function trackPlayerAction(action, amount = 0) {
    const stats = gameState.playerStats;
    
    if (action === 'bet') {
        stats.totalBets++;
    } else if (action === 'raise') {
        stats.totalRaises++;
    } else if (action === 'call') {
        stats.totalCalls++;
    } else if (action === 'fold') {
        stats.totalFolds++;
    } else if (action === 'check') {
        stats.totalChecks++;
    }
    
    // Update at end of hand
}

function updatePlayerModel() {
    const stats = gameState.playerStats;
    const handsPlayed = stats.handsPlayed;
    
    if (handsPlayed < 5) {
        gameState.playerModel.type = 'unknown';
        gameState.playerModel.confidence = 0;
        return;
    }
    
    // Calculate metrics
    const aggressionFactor = (stats.totalBets + stats.totalRaises) / handsPlayed;
    const foldFrequency = stats.totalFolds / handsPlayed;
    const callFrequency = stats.totalCalls / handsPlayed;
    
    gameState.playerModel.tendencies = {
        aggressionFactor,
        foldFrequency,
        callFrequency
    };
    
    // Classify player type
    let playerType = 'balanced';
    
    if (aggressionFactor > 0.6 && foldFrequency < 0.3) {
        playerType = 'aggressive-loose'; // LAG
    } else if (aggressionFactor > 0.6 && foldFrequency > 0.4) {
        playerType = 'aggressive-tight'; // TAG
    } else if (aggressionFactor < 0.3 && callFrequency > 0.4) {
        playerType = 'passive-loose'; // Calling station
    } else if (aggressionFactor < 0.3 && foldFrequency > 0.4) {
        playerType = 'passive-tight'; // Rock
    }
    
    gameState.playerModel.type = playerType;
    gameState.playerModel.confidence = Math.min(handsPlayed / 20, 1.0);
    
    console.log(`Player classified as: ${playerType} (confidence: ${(gameState.playerModel.confidence * 100).toFixed(0)}%)`);
}

function adjustStrategyForOpponent(weights, handEval) {
    const model = gameState.playerModel;
    
    if (model.confidence < 0.2) return weights; // Not enough data
    
    const confidence = model.confidence;
    const type = model.type;
    
    if (type === 'aggressive-loose') {
        // Player bluffs and calls too much
        // Counter: Call them down, trap with monsters
        weights.call *= (1 + 0.5 * confidence);
        weights.fold *= (1 - 0.3 * confidence);
        
        if (handEval.handCategory === 'monster' || handEval.handCategory === 'strong') {
            weights.check *= (1 + 0.7 * confidence); // Let them bet
            weights.call *= (1 + 0.5 * confidence);
        }
    } else if (type === 'aggressive-tight') {
        // Player is selective but aggressive
        // Counter: Respect their bets, avoid confrontation
        weights.fold *= (1 + 0.4 * confidence);
        weights.call *= (1 - 0.3 * confidence);
        
        if (handEval.handCategory === 'weak' || handEval.handCategory === 'high-card') {
            weights.fold *= (1 + 0.5 * confidence);
        }
    } else if (type === 'passive-loose') {
        // Calling station - calls too much
        // Counter: Value bet more, never bluff
        weights.bet *= (1 + 0.5 * confidence);
        weights.raise *= (1 + 0.3 * confidence);
        
        if (handEval.handCategory === 'weak' || handEval.handCategory === 'high-card') {
            weights.bet *= (1 - 0.6 * confidence); // Don't bluff
            weights.fold *= (1 + 0.5 * confidence);
        }
    } else if (type === 'passive-tight') {
        // Rock - folds too much
        // Counter: Bluff more, fold to their bets
        weights.bet *= (1 + 0.6 * confidence);
        
        if (handEval.handCategory === 'weak' || handEval.handCategory === 'high-card') {
            weights.bet *= (1 + 0.8 * confidence); // Bluff more
        }
        
        // But fold to their bets (they only bet strong hands)
        if (gameState.currentBet > gameState.dealerBet) {
            weights.fold *= (1 + 0.5 * confidence);
        }
    }
    
    return weights;
}

// ============================================
// MAIN AI DECISION FUNCTION
// ============================================

function intelligentDealerAction() {
    console.log('\n=== DEALER AI DECISION ===');
    
    // 1. Gather context
    const context = gatherGameContext();
    console.log('Context:', context);
    
    // 2. Evaluate hand
    const handEval = evaluateHandStrength(gameState.dealerHoleCards, gameState.communityCards);
    console.log('Hand Evaluation:', handEval);
    
    // 3. Calculate base action weights
    let weights = calculateActionWeights(handEval, context);
    console.log('Base Weights:', weights);
    
    // 4. Adjust for difficulty
    weights = adjustWeightsForDifficulty(weights, handEval);
    console.log('After Difficulty:', weights);
    
    // 5. Adjust for opponent (if enough data)
    if (gameState.dealerPersonality.adaptability > 0) {
        weights = adjustStrategyForOpponent(weights, handEval);
        console.log('After Adaptation:', weights);
    }
    
    // 6. Select action
    const action = selectWeightedAction(weights);
    console.log('Selected Action:', action);
    
    // 7. Execute action
    executeAction(action, handEval, context);
    
    console.log('=== END DEALER DECISION ===\n');
}

function executeAction(action, handEval, context) {
    if (action === 'fold') {
        dealerFold();
    } else if (action === 'check') {
        dealerCheck();
    } else if (action === 'call') {
        dealerCall();
    } else if (action === 'bet') {
        const betAmount = calculateBetSize(handEval, context);
        dealerBet(betAmount);
    } else if (action === 'raise') {
        const raiseAmount = calculateRaiseSize(handEval, context);
        dealerRaise(raiseAmount);
    } else if (action === 'allIn') {
        dealerAllIn();
    }
}

// ============================================
// BETTING ACTIONS (from lesson 4.9)
// ============================================

function dealerFold() {
    console.log('Dealer folds');
    gameState.gamePhase = 'showdown';
    gameState.foldedPlayer = 'dealer';
}

function dealerCheck() {
    console.log('Dealer checks');
}

function dealerCall() {
    const toCall = gameState.currentBet - gameState.dealerBet;
    if (toCall > gameState.dealerChips) {
        dealerAllIn();
        return;
    }
    
    gameState.dealerChips -= toCall;
    gameState.dealerBet = gameState.currentBet;
    gameState.pot += toCall;
    
    console.log(`Dealer calls ${toCall}`);
}

function dealerBet(amount) {
    if (amount > gameState.dealerChips) {
        dealerAllIn();
        return;
    }
    
    gameState.dealerChips -= amount;
    gameState.dealerBet += amount;
    gameState.currentBet = gameState.dealerBet;
    gameState.pot += amount;
    
    console.log(`Dealer bets ${amount}`);
}

function dealerRaise(amount) {
    const toCall = gameState.currentBet - gameState.dealerBet;
    const totalCost = toCall + amount;
    
    if (totalCost > gameState.dealerChips) {
        dealerAllIn();
        return;
    }
    
    gameState.dealerChips -= totalCost;
    gameState.dealerBet += totalCost;
    gameState.currentBet = gameState.dealerBet;
    gameState.pot += totalCost;
    
    console.log(`Dealer raises to ${gameState.currentBet} (cost: ${totalCost})`);
}

function dealerAllIn() {
    const amount = gameState.dealerChips;
    gameState.dealerChips = 0;
    gameState.dealerBet += amount;
    
    if (gameState.dealerBet > gameState.currentBet) {
        gameState.currentBet = gameState.dealerBet;
    }
    
    gameState.pot += amount;
    gameState.dealerAllIn = true; // Set flag for all-in
    console.log(`Dealer goes ALL IN for ${amount}!`);
}

// Player actions (with tracking)
function playerBet(amount) {
    if (amount > gameState.playerChips) amount = gameState.playerChips;
    
    gameState.playerChips -= amount;
    gameState.playerBet += amount;
    gameState.currentBet = gameState.playerBet;
    gameState.pot += amount;
    
    trackPlayerAction('bet', amount);
    console.log(`Player bets ${amount}`);
}

function playerRaise(amount) {
    const toCall = gameState.currentBet - gameState.playerBet;
    const totalCost = toCall + amount;
    
    if (totalCost > gameState.playerChips) {
        playerAllIn();
        return;
    }
    
    gameState.playerChips -= totalCost;
    gameState.playerBet += totalCost;
    gameState.currentBet = gameState.playerBet;
    gameState.pot += totalCost;
    
    trackPlayerAction('raise', totalCost);
    console.log(`Player raises to ${gameState.currentBet}`);
}

function playerCall() {
    const toCall = gameState.currentBet - gameState.playerBet;
    
    if (toCall > gameState.playerChips) {
        playerAllIn();
        return;
    }
    
    gameState.playerChips -= toCall;
    gameState.playerBet = gameState.currentBet;
    gameState.pot += toCall;
    
    trackPlayerAction('call', toCall);
    console.log(`Player calls ${toCall}`);
}

function playerFold() {
    trackPlayerAction('fold');
    console.log('Player folds');
    gameState.gamePhase = 'showdown';
    gameState.foldedPlayer = 'player';
}

function playerCheck() {
    trackPlayerAction('check');
    console.log('Player checks');
}

function playerAllIn() {
    const amount = gameState.playerChips;
    gameState.playerChips = 0;
    gameState.playerBet += amount;
    
    if (gameState.playerBet > gameState.currentBet) {
        gameState.currentBet = gameState.playerBet;
    }
    
    gameState.pot += amount;
    trackPlayerAction('bet', amount); // Count as bet
    console.log(`Player goes ALL IN for ${amount}!`);
}

// ============================================
// GAME FLOW
// ============================================

function startNewHand() {
    // Reset for new hand
    gameState.deck = createDeck();
    gameState.playerHoleCards = [];
    gameState.dealerHoleCards = [];
    gameState.communityCards = [];
    gameState.pot = 0;
    gameState.currentBet = 0;
    gameState.playerBet = 0;
    gameState.dealerBet = 0;
    gameState.handNumber++;
    gameState.foldedPlayer = null; // Reset fold tracker
    gameState.playerAllIn = false; // Reset all-in flags
    gameState.dealerAllIn = false; // Reset all-in flags
    
    console.log(`\n========== HAND #${gameState.handNumber} ==========`);
    
    // Post blinds
    postBlinds();
    
    // Deal hole cards
    gameState.playerHoleCards = [dealCard(), dealCard()];
    gameState.dealerHoleCards = [dealCard(), dealCard()];
    
    console.log('Your cards:', gameState.playerHoleCards.map(cardToString).join(', '));
    console.log('Dealer cards: [hidden]');
    
    gameState.gamePhase = 'pre-flop';
    
    // Update player model periodically
    if (gameState.handNumber % 5 === 0 && gameState.playerStats.handsPlayed >= 5) {
        updatePlayerModel();
    }
}

function postBlinds() {
    // Alternate who posts what
    if (gameState.dealerButton === 'player') {
        // Player is button, posts small blind
        const sbAmount = Math.min(gameState.smallBlind, gameState.playerChips);
        gameState.playerChips -= sbAmount;
        gameState.playerBet = sbAmount;
        gameState.pot += sbAmount;
        
        const bbAmount = Math.min(gameState.bigBlind, gameState.dealerChips);
        gameState.dealerChips -= bbAmount;
        gameState.dealerBet = bbAmount;
        gameState.currentBet = bbAmount;
        gameState.pot += bbAmount;
        
        console.log(`Blinds: You (${sbAmount}), Dealer (${bbAmount})`);
        gameState.dealerButton = 'dealer'; // Switch for next hand
    } else {
        // Dealer is button, posts small blind
        const sbAmount = Math.min(gameState.smallBlind, gameState.dealerChips);
        gameState.dealerChips -= sbAmount;
        gameState.dealerBet = sbAmount;
        gameState.pot += sbAmount;
        
        const bbAmount = Math.min(gameState.bigBlind, gameState.playerChips);
        gameState.playerChips -= bbAmount;
        gameState.playerBet = bbAmount;
        gameState.currentBet = bbAmount;
        gameState.pot += bbAmount;
        
        console.log(`Blinds: Dealer (${sbAmount}), You (${bbAmount})`);
        gameState.dealerButton = 'player'; // Switch for next hand
    }
}

function dealFlop() {
    gameState.communityCards = [dealCard(), dealCard(), dealCard()];
    gameState.gamePhase = 'flop';
    gameState.playerBet = 0;
    gameState.dealerBet = 0;
    gameState.currentBet = 0;
    
    console.log('\n--- FLOP ---');
    console.log('Board:', gameState.communityCards.map(cardToString).join(', '));
}

function dealTurn() {
    gameState.communityCards.push(dealCard());
    gameState.gamePhase = 'turn';
    gameState.playerBet = 0;
    gameState.dealerBet = 0;
    gameState.currentBet = 0;
    
    console.log('\n--- TURN ---');
    console.log('Board:', gameState.communityCards.map(cardToString).join(', '));
}

function dealRiver() {
    gameState.communityCards.push(dealCard());
    gameState.gamePhase = 'river';
    gameState.playerBet = 0;
    gameState.dealerBet = 0;
    gameState.currentBet = 0;
    
    console.log('\n--- RIVER ---');
    console.log('Board:', gameState.communityCards.map(cardToString).join(', '));
}

function showdown() {
    console.log('\n=== SHOWDOWN ===');
    console.log('Your cards:', gameState.playerHoleCards.map(cardToString).join(', '));
    console.log('Dealer cards:', gameState.dealerHoleCards.map(cardToString).join(', '));
    console.log('Board:', gameState.communityCards.map(cardToString).join(', '));
    
    const playerHand = evaluateHand([...gameState.playerHoleCards, ...gameState.communityCards]);
    const dealerHand = evaluateHand([...gameState.dealerHoleCards, ...gameState.communityCards]);
    
    console.log(`You have: ${playerHand.name}`);
    console.log(`Dealer has: ${dealerHand.name}`);
    
    if (playerHand.rank > dealerHand.rank) {
        endHand('player');
    } else if (dealerHand.rank > playerHand.rank) {
        endHand('dealer');
    } else {
        // Same rank, compare high cards
        if (playerHand.highCard > dealerHand.highCard) {
            endHand('player');
        } else if (dealerHand.highCard > playerHand.highCard) {
            endHand('dealer');
        } else {
            endHand('tie');
        }
    }
}

function endHand(winner) {
    gameState.playerStats.handsPlayed++;
    
    if (winner === 'player') {
        console.log(`\n🎉 YOU WIN ${gameState.pot} chips!`);
        gameState.playerChips += gameState.pot;
    } else if (winner === 'dealer') {
        console.log(`\n😞 DEALER WINS ${gameState.pot} chips`);
        gameState.dealerChips += gameState.pot;
    } else {
        console.log(`\n🤝 TIE - Pot split`);
        const half = Math.floor(gameState.pot / 2);
        gameState.playerChips += half;
        gameState.dealerChips += (gameState.pot - half);
    }
    
    console.log(`Your chips: ${gameState.playerChips}`);
    console.log(`Dealer chips: ${gameState.dealerChips}`);
    
    // Check for game over
    if (gameState.playerChips <= 0) {
        console.log('\n💔 GAME OVER - You are out of chips!');
        return false;
    }
    if (gameState.dealerChips <= 0) {
        console.log('\n🏆 YOU WIN THE GAME - Dealer is out of chips!');
        return false;
    }
    
    return true;
}

// ============================================
// EXAMPLE GAME SIMULATION
// ============================================

function simulateGame() {
    console.log('='.repeat(50));
    console.log('POKER AI - COMPLETE EXAMPLE');
    console.log('='.repeat(50));
    
    // Set difficulty
    setDifficulty('medium'); // Try: easy, medium, hard, expert
    
    // Play a few hands
    for (let i = 0; i < 5; i++) {
        startNewHand();
        
        // Pre-flop
        console.log('\n[Your turn...]');
        playerCall(); // Example: player calls
        
        if (gameState.gamePhase === 'showdown') {
            // Player folded, award to dealer
            if (gameState.foldedPlayer === 'player') endHand('dealer');
            else endHand('player');
            continue;
        }
        
        intelligentDealerAction();
        
        if (gameState.gamePhase === 'showdown') {
            // Dealer folded, award to player
            if (gameState.foldedPlayer === 'dealer') endHand('player');
            else endHand('dealer');
            continue;
        }
        
        // Flop
        dealFlop();
        console.log('\n[Your turn...]');
        playerCheck(); // Example: player checks
        
        if (gameState.gamePhase === 'showdown') {
            if (gameState.foldedPlayer === 'player') endHand('dealer');
            else endHand('player');
            continue;
        }
        
        intelligentDealerAction();
        
        if (gameState.gamePhase === 'showdown') {
            if (gameState.foldedPlayer === 'dealer') endHand('player');
            else endHand('dealer');
            continue;
        }
        
        // Turn
        dealTurn();
        console.log('\n[Your turn...]');
        playerCheck();
        
        if (gameState.gamePhase === 'showdown') {
            if (gameState.foldedPlayer === 'player') endHand('dealer');
            else endHand('player');
            continue;
        }
        
        intelligentDealerAction();
        
        if (gameState.gamePhase === 'showdown') {
            if (gameState.foldedPlayer === 'dealer') endHand('player');
            else endHand('dealer');
            continue;
        }
        
        // River
        dealRiver();
        console.log('\n[Your turn...]');
        playerCheck();
        
        if (gameState.gamePhase === 'showdown') {
            if (gameState.foldedPlayer === 'player') endHand('dealer');
            else endHand('player');
            continue;
        }
        
        intelligentDealerAction();
        
        if (gameState.gamePhase === 'showdown') {
            if (gameState.foldedPlayer === 'dealer') endHand('player');
            else endHand('dealer');
            continue;
        }
        
        // Showdown - compare hands
        showdown();
        
        // Check if game is over
        if (gameState.playerChips <= 0 || gameState.dealerChips <= 0) {
            break;
        }
    }
    
    console.log('\n' + '='.repeat(50));
    console.log('GAME SIMULATION COMPLETE');
    console.log('='.repeat(50));
}

// Run simulation (comment out for HTML usage)
// simulateGame();
