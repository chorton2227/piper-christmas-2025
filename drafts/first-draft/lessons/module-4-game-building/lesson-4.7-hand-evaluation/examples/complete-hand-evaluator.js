// Complete Hand Evaluator - Working Example
// This is a fully functional poker hand evaluation system

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Count how many of each rank we have
 * @param {Array} hand - Array of 5 card objects
 * @returns {Object} - { 'K': 2, '7': 1, ... }
 */
function countRanks(hand) {
    let rankCounts = {};
    
    for (let card of hand) {
        if (rankCounts[card.rank]) {
            rankCounts[card.rank]++;
        } else {
            rankCounts[card.rank] = 1;
        }
    }
    
    return rankCounts;
}

/**
 * Count how many of each suit we have
 * @param {Array} hand - Array of 5 card objects
 * @returns {Object} - { 'hearts': 3, 'clubs': 2 }
 */
function countSuits(hand) {
    let suitCounts = {};
    
    for (let card of hand) {
        if (suitCounts[card.suit]) {
            suitCounts[card.suit]++;
        } else {
            suitCounts[card.suit] = 1;
        }
    }
    
    return suitCounts;
}

/**
 * Find pairs, three of a kind, and four of a kind
 * @param {Object} rankCounts - Result from countRanks()
 * @returns {Object} - { pairs: ['K', '7'], threeOfAKind: null, fourOfAKind: null }
 */
function findMultiples(rankCounts) {
    let pairs = [];
    let threeOfAKind = null;
    let fourOfAKind = null;
    
    for (let rank in rankCounts) {
        if (rankCounts[rank] === 4) {
            fourOfAKind = rank;
        } else if (rankCounts[rank] === 3) {
            threeOfAKind = rank;
        } else if (rankCounts[rank] === 2) {
            pairs.push(rank);
        }
    }
    
    return {
        pairs: pairs,
        threeOfAKind: threeOfAKind,
        fourOfAKind: fourOfAKind
    };
}

/**
 * Sort hand by card value (highest to lowest)
 * @param {Array} hand - Array of 5 card objects
 * @returns {Array} - Sorted copy of hand
 */
function sortHandByValue(hand) {
    // Create a copy so we don't modify original
    let handCopy = hand.slice();
    
    // Sort by value (highest first)
    handCopy.sort((a, b) => b.value - a.value);
    
    return handCopy;
}

/**
 * Get numeric value of a rank
 * @param {string} rank - Card rank ('2'-'10', 'J', 'Q', 'K', 'A')
 * @returns {number} - Numeric value (2-14)
 */
function getCardValue(rank) {
    const values = {
        '2': 2, '3': 3, '4': 4, '5': 5, '6': 6,
        '7': 7, '8': 8, '9': 9, '10': 10,
        'J': 11, 'Q': 12, 'K': 13, 'A': 14
    };
    return values[rank];
}

// ============================================
// HAND DETECTION FUNCTIONS
// ============================================

/**
 * Check for high card (always returns true - the default)
 * @param {Array} hand - Array of 5 card objects
 * @returns {Object} - Hand result object
 */
function isHighCard(hand) {
    let sorted = sortHandByValue(hand);
    
    return {
        name: 'High Card',
        rank: sorted[0].rank,
        value: 0,
        cards: [0],
        kickers: sorted.slice(1).map(card => card.rank)
    };
}

/**
 * Check for a pair (two cards of same rank)
 * @param {Array} hand - Array of 5 card objects
 * @returns {Object|null} - Hand result or null if not a pair
 */
function isPair(hand) {
    let rankCounts = countRanks(hand);
    let multiples = findMultiples(rankCounts);
    
    // Must have exactly 1 pair, no three of a kind
    if (multiples.pairs.length === 1 && !multiples.threeOfAKind) {
        let pairRank = multiples.pairs[0];
        
        // Find indices of the pair cards
        let pairIndices = [];
        for (let i = 0; i < hand.length; i++) {
            if (hand[i].rank === pairRank) {
                pairIndices.push(i);
            }
        }
        
        // Find kickers (cards that aren't in the pair)
        let kickers = hand
            .filter(card => card.rank !== pairRank)
            .sort((a, b) => b.value - a.value)
            .map(card => card.rank);
        
        return {
            name: 'Pair',
            rank: pairRank,
            value: 1,
            cards: pairIndices,
            kickers: kickers
        };
    }
    
    return null;
}

/**
 * Check for two pair (two different pairs)
 * @param {Array} hand - Array of 5 card objects
 * @returns {Object|null} - Hand result or null if not two pair
 */
function isTwoPair(hand) {
    let rankCounts = countRanks(hand);
    let multiples = findMultiples(rankCounts);
    
    // Must have exactly 2 pairs
    if (multiples.pairs.length === 2) {
        // Sort pairs by value (highest first)
        let sortedPairs = multiples.pairs.sort((a, b) => {
            return getCardValue(b) - getCardValue(a);
        });
        
        // Find the kicker (the card that's not part of either pair)
        let kicker = hand.find(card => {
            return !sortedPairs.includes(card.rank);
        });
        
        return {
            name: 'Two Pair',
            rank: `${sortedPairs[0]}s and ${sortedPairs[1]}s`,
            value: 2,
            kickers: [kicker.rank]
        };
    }
    
    return null;
}

/**
 * Check for three of a kind (three cards of same rank, no pair)
 * @param {Array} hand - Array of 5 card objects
 * @returns {Object|null} - Hand result or null if not three of a kind
 */
function isThreeOfAKind(hand) {
    let rankCounts = countRanks(hand);
    let multiples = findMultiples(rankCounts);
    
    // Must have three of a kind but NO pairs (that would be full house)
    if (multiples.threeOfAKind && multiples.pairs.length === 0) {
        return {
            name: 'Three of a Kind',
            rank: multiples.threeOfAKind,
            value: 3
        };
    }
    
    return null;
}

/**
 * Check for a straight (5 consecutive cards)
 * @param {Array} hand - Array of 5 card objects
 * @returns {Object|null} - Hand result or null if not a straight
 */
function isStraight(hand) {
    let sorted = sortHandByValue(hand);
    let values = sorted.map(card => card.value);
    
    // Check for regular straight (each card is 1 less than previous)
    let isStraight = true;
    for (let i = 0; i < values.length - 1; i++) {
        if (values[i] - values[i + 1] !== 1) {
            isStraight = false;
            break;
        }
    }
    
    if (isStraight) {
        return {
            name: 'Straight',
            rank: `${sorted[0].rank} high`,
            value: 4,
            highCard: sorted[0].value
        };
    }
    
    // Check for wheel straight (A-2-3-4-5)
    // Ace can be low in this case
    if (values[0] === 14 && values[1] === 5 && 
        values[2] === 4 && values[3] === 3 && values[4] === 2) {
        return {
            name: 'Straight',
            rank: '5 high (wheel)',
            value: 4,
            highCard: 5
        };
    }
    
    return null;
}

/**
 * Check for a flush (all 5 cards same suit)
 * @param {Array} hand - Array of 5 card objects
 * @returns {Object|null} - Hand result or null if not a flush
 */
function isFlush(hand) {
    let suitCounts = countSuits(hand);
    
    // Find if any suit has all 5 cards
    for (let suit in suitCounts) {
        if (suitCounts[suit] === 5) {
            let sorted = sortHandByValue(hand);
            
            return {
                name: 'Flush',
                rank: `all ${suit}`,
                value: 5,
                highCards: sorted.map(card => card.value)
            };
        }
    }
    
    return null;
}

/**
 * Check for a full house (three of a kind + pair)
 * @param {Array} hand - Array of 5 card objects
 * @returns {Object|null} - Hand result or null if not a full house
 */
function isFullHouse(hand) {
    let rankCounts = countRanks(hand);
    let multiples = findMultiples(rankCounts);
    
    // Must have three of a kind AND exactly one pair
    if (multiples.threeOfAKind && multiples.pairs.length === 1) {
        return {
            name: 'Full House',
            rank: `${multiples.threeOfAKind}s over ${multiples.pairs[0]}s`,
            value: 6
        };
    }
    
    return null;
}

/**
 * Check for four of a kind (four cards of same rank)
 * @param {Array} hand - Array of 5 card objects
 * @returns {Object|null} - Hand result or null if not four of a kind
 */
function isFourOfAKind(hand) {
    let rankCounts = countRanks(hand);
    let multiples = findMultiples(rankCounts);
    
    if (multiples.fourOfAKind) {
        return {
            name: 'Four of a Kind',
            rank: multiples.fourOfAKind,
            value: 7
        };
    }
    
    return null;
}

/**
 * Check for a straight flush (straight AND flush, but not royal)
 * @param {Array} hand - Array of 5 card objects
 * @returns {Object|null} - Hand result or null if not a straight flush
 */
function isStraightFlush(hand) {
    let straightResult = isStraight(hand);
    let flushResult = isFlush(hand);
    
    // Must be both straight and flush
    if (straightResult && flushResult) {
        // Check if it's a royal flush (A-K-Q-J-10)
        let sorted = sortHandByValue(hand);
        if (sorted[0].rank === 'A' && sorted[1].rank === 'K') {
            return null; // Let isRoyalFlush() handle this
        }
        
        return {
            name: 'Straight Flush',
            rank: straightResult.rank,
            value: 8,
            highCard: straightResult.highCard
        };
    }
    
    return null;
}

/**
 * Check for a royal flush (A-K-Q-J-10 all same suit)
 * @param {Array} hand - Array of 5 card objects
 * @returns {Object|null} - Hand result or null if not a royal flush
 */
function isRoyalFlush(hand) {
    let straightResult = isStraight(hand);
    let flushResult = isFlush(hand);
    
    // Must be both straight and flush
    if (straightResult && flushResult) {
        let sorted = sortHandByValue(hand);
        
        // Check if highest card is Ace and next is King
        if (sorted[0].rank === 'A' && sorted[1].rank === 'K') {
            return {
                name: 'Royal Flush',
                rank: flushResult.rank,
                value: 9
            };
        }
    }
    
    return null;
}

// ============================================
// MAIN EVALUATION FUNCTION
// ============================================

/**
 * Evaluate a poker hand and return the best hand
 * @param {Array} hand - Array of 5 card objects
 * @returns {Object} - Hand result with name, rank, value, etc.
 */
function evaluateHand(hand) {
    // Check hands from best to worst
    // Return as soon as we find a match
    
    let result;
    
    result = isRoyalFlush(hand);
    if (result) return result;
    
    result = isStraightFlush(hand);
    if (result) return result;
    
    result = isFourOfAKind(hand);
    if (result) return result;
    
    result = isFullHouse(hand);
    if (result) return result;
    
    result = isFlush(hand);
    if (result) return result;
    
    result = isStraight(hand);
    if (result) return result;
    
    result = isThreeOfAKind(hand);
    if (result) return result;
    
    result = isTwoPair(hand);
    if (result) return result;
    
    result = isPair(hand);
    if (result) return result;
    
    // If nothing else matches, it's high card
    return isHighCard(hand);
}

// ============================================
// TEST CASES
// ============================================

console.log('=== POKER HAND EVALUATOR TEST SUITE ===\n');

// Test 1: Royal Flush
let royalFlush = [
    { rank: 'A', suit: 'hearts', value: 14 },
    { rank: 'K', suit: 'hearts', value: 13 },
    { rank: 'Q', suit: 'hearts', value: 12 },
    { rank: 'J', suit: 'hearts', value: 11 },
    { rank: '10', suit: 'hearts', value: 10 }
];
console.log('Test 1 - Royal Flush:', evaluateHand(royalFlush));

// Test 2: Straight Flush
let straightFlush = [
    { rank: '9', suit: 'clubs', value: 9 },
    { rank: '8', suit: 'clubs', value: 8 },
    { rank: '7', suit: 'clubs', value: 7 },
    { rank: '6', suit: 'clubs', value: 6 },
    { rank: '5', suit: 'clubs', value: 5 }
];
console.log('\nTest 2 - Straight Flush:', evaluateHand(straightFlush));

// Test 3: Four of a Kind
let fourOfAKind = [
    { rank: 'K', suit: 'hearts', value: 13 },
    { rank: 'K', suit: 'diamonds', value: 13 },
    { rank: 'K', suit: 'clubs', value: 13 },
    { rank: 'K', suit: 'spades', value: 13 },
    { rank: '2', suit: 'hearts', value: 2 }
];
console.log('\nTest 3 - Four of a Kind:', evaluateHand(fourOfAKind));

// Test 4: Full House
let fullHouse = [
    { rank: 'Q', suit: 'hearts', value: 12 },
    { rank: 'Q', suit: 'diamonds', value: 12 },
    { rank: 'Q', suit: 'clubs', value: 12 },
    { rank: '7', suit: 'spades', value: 7 },
    { rank: '7', suit: 'hearts', value: 7 }
];
console.log('\nTest 4 - Full House:', evaluateHand(fullHouse));

// Test 5: Flush
let flush = [
    { rank: 'K', suit: 'diamonds', value: 13 },
    { rank: '10', suit: 'diamonds', value: 10 },
    { rank: '7', suit: 'diamonds', value: 7 },
    { rank: '5', suit: 'diamonds', value: 5 },
    { rank: '2', suit: 'diamonds', value: 2 }
];
console.log('\nTest 5 - Flush:', evaluateHand(flush));

// Test 6: Straight
let straight = [
    { rank: '10', suit: 'hearts', value: 10 },
    { rank: '9', suit: 'diamonds', value: 9 },
    { rank: '8', suit: 'clubs', value: 8 },
    { rank: '7', suit: 'spades', value: 7 },
    { rank: '6', suit: 'hearts', value: 6 }
];
console.log('\nTest 6 - Straight:', evaluateHand(straight));

// Test 7: Wheel Straight (A-2-3-4-5)
let wheelStraight = [
    { rank: 'A', suit: 'hearts', value: 14 },
    { rank: '5', suit: 'diamonds', value: 5 },
    { rank: '4', suit: 'clubs', value: 4 },
    { rank: '3', suit: 'spades', value: 3 },
    { rank: '2', suit: 'hearts', value: 2 }
];
console.log('\nTest 7 - Wheel Straight:', evaluateHand(wheelStraight));

// Test 8: Three of a Kind
let threeOfAKind = [
    { rank: 'J', suit: 'hearts', value: 11 },
    { rank: 'J', suit: 'diamonds', value: 11 },
    { rank: 'J', suit: 'clubs', value: 11 },
    { rank: '9', suit: 'spades', value: 9 },
    { rank: '3', suit: 'hearts', value: 3 }
];
console.log('\nTest 8 - Three of a Kind:', evaluateHand(threeOfAKind));

// Test 9: Two Pair
let twoPair = [
    { rank: 'A', suit: 'hearts', value: 14 },
    { rank: 'A', suit: 'diamonds', value: 14 },
    { rank: '8', suit: 'clubs', value: 8 },
    { rank: '8', suit: 'spades', value: 8 },
    { rank: '4', suit: 'hearts', value: 4 }
];
console.log('\nTest 9 - Two Pair:', evaluateHand(twoPair));

// Test 10: Pair
let pair = [
    { rank: 'K', suit: 'hearts', value: 13 },
    { rank: 'K', suit: 'diamonds', value: 13 },
    { rank: '10', suit: 'clubs', value: 10 },
    { rank: '7', suit: 'spades', value: 7 },
    { rank: '3', suit: 'hearts', value: 3 }
];
console.log('\nTest 10 - Pair:', evaluateHand(pair));

// Test 11: High Card
let highCard = [
    { rank: 'A', suit: 'hearts', value: 14 },
    { rank: 'J', suit: 'diamonds', value: 11 },
    { rank: '9', suit: 'clubs', value: 9 },
    { rank: '6', suit: 'spades', value: 6 },
    { rank: '2', suit: 'hearts', value: 2 }
];
console.log('\nTest 11 - High Card:', evaluateHand(highCard));

console.log('\n✅ All test cases completed!');
