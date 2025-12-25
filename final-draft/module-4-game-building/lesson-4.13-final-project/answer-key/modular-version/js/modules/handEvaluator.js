// ===== HAND EVALUATOR MODULE =====
// Evaluates poker hands and compares them to determine winners
const HandEvaluator = (function() {
    'use strict';
    
    /**
     * Evaluates a 5-card poker hand
     * @param {Array} cards - Array of 5 card objects
     * @returns {Object} Hand evaluation with rank, name, and high cards
     */
    function evaluateHand(cards) {
        if (cards.length < 5) return { rank: 0, name: 'No hand' };
        
        const sorted = [...cards].sort((a, b) => b.value - a.value);
        
        // Check for flush
        const isFlush = cards.every(card => card.suit === cards[0].suit);
        
        // Check for straight
        const values = sorted.map(c => c.value);
        let isStraight = true;
        for (let i = 0; i < values.length - 1; i++) {
            if (values[i] - values[i + 1] !== 1) {
                isStraight = false;
                break;
            }
        }
        
        // Check for A-2-3-4-5 straight (wheel)
        if (!isStraight && values[0] === 14) {
            const wheelValues = [14, 5, 4, 3, 2];
            if (JSON.stringify(values.slice().sort((a, b) => b - a)) === JSON.stringify(wheelValues)) {
                isStraight = true;
            }
        }
        
        // Count ranks
        const rankCounts = {};
        for (let card of cards) {
            rankCounts[card.value] = (rankCounts[card.value] || 0) + 1;
        }
        
        const counts = Object.values(rankCounts).sort((a, b) => b - a);
        const uniqueRanks = Object.keys(rankCounts).map(Number).sort((a, b) => b - a);
        
        // Royal Flush
        if (isFlush && isStraight && values[0] === 14 && values[4] === 10) {
            return { rank: 10, name: 'Royal Flush', high: values };
        }
        
        // Straight Flush
        if (isFlush && isStraight) {
            return { rank: 9, name: 'Straight Flush', high: values };
        }
        
        // Four of a Kind
        if (counts[0] === 4) {
            return { rank: 8, name: 'Four of a Kind', high: uniqueRanks };
        }
        
        // Full House
        if (counts[0] === 3 && counts[1] === 2) {
            return { rank: 7, name: 'Full House', high: uniqueRanks };
        }
        
        // Flush
        if (isFlush) {
            return { rank: 6, name: 'Flush', high: values };
        }
        
        // Straight
        if (isStraight) {
            return { rank: 5, name: 'Straight', high: values };
        }
        
        // Three of a Kind
        if (counts[0] === 3) {
            return { rank: 4, name: 'Three of a Kind', high: uniqueRanks };
        }
        
        // Two Pair
        if (counts[0] === 2 && counts[1] === 2) {
            return { rank: 3, name: 'Two Pair', high: uniqueRanks };
        }
        
        // One Pair
        if (counts[0] === 2) {
            return { rank: 2, name: 'One Pair', high: uniqueRanks };
        }
        
        // High Card
        return { rank: 1, name: 'High Card', high: values };
    }
    
    /**
     * Finds the best 5-card hand from 7 cards
     * @param {Array} sevenCards - Array of 7 card objects
     * @returns {Object} Best hand evaluation
     */
    function findBestHand(sevenCards) {
        if (sevenCards.length < 7) return evaluateHand(sevenCards);
        
        let bestHand = { rank: 0 };
        
        // Generate all 5-card combinations
        for (let i = 0; i < sevenCards.length - 4; i++) {
            for (let j = i + 1; j < sevenCards.length - 3; j++) {
                for (let k = j + 1; k < sevenCards.length - 2; k++) {
                    for (let l = k + 1; l < sevenCards.length - 1; l++) {
                        for (let m = l + 1; m < sevenCards.length; m++) {
                            const hand = [sevenCards[i], sevenCards[j], sevenCards[k], sevenCards[l], sevenCards[m]];
                            const evaluation = evaluateHand(hand);
                            
                            if (evaluation.rank > bestHand.rank) {
                                bestHand = evaluation;
                            }
                        }
                    }
                }
            }
        }
        
        return bestHand;
    }
    
    /**
     * Compares two poker hands
     * @param {Object} hand1 - First hand evaluation
     * @param {Object} hand2 - Second hand evaluation
     * @returns {number} Positive if hand1 wins, negative if hand2 wins, 0 for tie
     */
    function compareHands(hand1, hand2) {
        if (hand1.rank !== hand2.rank) {
            return hand1.rank - hand2.rank;
        }
        
        // Same rank, compare high cards
        for (let i = 0; i < Math.min(hand1.high.length, hand2.high.length); i++) {
            if (hand1.high[i] !== hand2.high[i]) {
                return hand1.high[i] - hand2.high[i];
            }
        }
        
        return 0; // Exact tie
    }
    
    // Public API
    return {
        evaluateHand: evaluateHand,
        findBestHand: findBestHand,
        compareHands: compareHands
    };
})();
