// ===== AI MODULE =====
// Handles AI decision making for computer opponents
const AIModule = (function() {
    'use strict';
    
    /**
     * Calculates hand strength for a player (0-1 scale)
     * @param {Object} player - Player object with cards
     * @param {Array} communityCards - Community cards on the table
     * @returns {number} Hand strength between 0 and 1
     */
    function getHandStrength(player, communityCards) {
        if (player.cards.length === 0) return 0;
        
        const allCards = [...player.cards, ...communityCards];
        if (allCards.length < 2) return 0;
        
        const evaluation = allCards.length >= 5 ? 
            HandEvaluator.findBestHand(allCards) : 
            HandEvaluator.evaluateHand(allCards);
        
        // Convert hand rank to strength (0-1)
        return evaluation.rank / 10;
    }
    
    /**
     * Makes an AI decision based on hand strength and game state
     * @param {Object} player - The AI player making the decision
     * @param {Object} gameState - Current game state
     * @param {Object} config - Game configuration
     * @returns {Object} Decision object with action and optional amount
     */
    function makeAIDecision(player, gameState, config) {
        const strength = getHandStrength(player, gameState.communityCards);
        const potOdds = gameState.currentBet / (gameState.pot + gameState.currentBet);
        const toCall = gameState.currentBet - player.currentBet;
        
        // If player has no chips, they can't act
        if (player.chips === 0) {
            return { action: 'check' };
        }
        
        // Difficulty adjustments
        let aggression = 0.5;
        let bluffChance = 0.1;
        
        if (config.aiDifficulty === 'easy') {
            aggression = 0.3;
            bluffChance = 0.05;
        } else if (config.aiDifficulty === 'hard') {
            aggression = 0.7;
            bluffChance = 0.2;
        }
        
        // Bluff occasionally
        const isBluffing = Math.random() < bluffChance;
        const effectiveStrength = isBluffing ? strength + 0.3 : strength;
        
        // Decision making
        if (toCall === 0) {
            // Can check
            if (effectiveStrength > 0.4 || Math.random() < aggression) {
                // Raise
                const raiseAmount = Math.floor(gameState.pot * (0.3 + Math.random() * 0.5));
                return { action: 'raise', amount: Math.min(raiseAmount, player.chips) };
            } else {
                return { action: 'check' };
            }
        } else {
            // Need to call
            if (effectiveStrength > potOdds + 0.2) {
                if (effectiveStrength > 0.7 && Math.random() < aggression) {
                    // Raise
                    const raiseAmount = Math.floor(toCall * (1.5 + Math.random() * 2));
                    return { action: 'raise', amount: Math.min(raiseAmount, player.chips) };
                } else {
                    // Call
                    return { action: 'call' };
                }
            } else if (effectiveStrength > potOdds - 0.1) {
                // Marginal call
                return Math.random() < 0.5 ? { action: 'call' } : { action: 'fold' };
            } else {
                // Fold
                return { action: 'fold' };
            }
        }
    }
    
    // Public API
    return {
        getHandStrength: getHandStrength,
        makeAIDecision: makeAIDecision
    };
})();
