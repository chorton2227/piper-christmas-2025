# Lesson 4.10: AI Dealer Intelligence

**Making your poker dealer smart, challenging, and fun to play against!**

---

## 🎯 Learning Objectives

By the end of this lesson, you will be able to:
- Implement advanced dealer AI strategies
- Create multiple difficulty levels
- Add bluffing and semi-bluffing mechanics
- Implement hand reading and opponent modeling
- Make the dealer adapt to player behavior
- Balance challenge with fun gameplay

**Estimated Time:** 4-5 hours  
**Difficulty:** ★★★★☆ (Advanced)

---

## 📖 Overview

A great poker game needs a great opponent! In this lesson, you'll transform your basic dealer AI into an intelligent opponent that:

- **Evaluates situations** - Considers hand strength, pot odds, and position
- **Bluffs strategically** - Sometimes bets with weak hands to keep you guessing
- **Adapts to you** - Learns from your playing style and adjusts
- **Has personality** - Feels like playing against a real person
- **Varies by difficulty** - From beginner-friendly to expert challenge

---

## Part 1: Understanding Poker AI

### The Challenge

Good poker AI needs to balance:
- **Mathematical accuracy** - Make +EV (positive expected value) decisions
- **Unpredictability** - Don't be too robotic or readable
- **Fun factor** - Challenge players without frustrating them
- **Believability** - Feel like a human opponent

### Core AI Concepts

#### 1. Hand Strength Evaluation
```javascript
// Simple hand ranking (what we have now)
function simpleEvaluation(hand) {
    if (hasPair) return 2;
    if (hasHighCard) return 1;
    return 0;
}

// Advanced evaluation (what we'll build)
function advancedEvaluation(hand, communityCards, gameContext) {
    const handStrength = evaluateCurrentHand(hand, communityCards);
    const potential = evaluateDrawPotential(hand, communityCards);
    const position = gameContext.position;
    const potOdds = gameContext.potOdds;
    
    return {
        strength: handStrength,
        potential: potential,
        playability: calculatePlayability(handStrength, potential, position, potOdds)
    };
}
```

#### 2. Pot Odds & Expected Value
```javascript
// Should we call this bet?
function shouldCall(toCall, potSize, winProbability) {
    const potOdds = toCall / (potSize + toCall);
    const expectedValue = (potSize + toCall) * winProbability - toCall;
    
    // EV is positive? Call!
    return expectedValue > 0;
    
    // Or simpler: Win probability > pot odds?
    return winProbability > potOdds;
}
```

#### 3. Bluffing Theory
```javascript
// When should we bluff?
function shouldBluff(gameContext) {
    // Bluff more with:
    // - Scary board (possible straights/flushes)
    // - Tight player image
    // - Late position
    // - Small pot
    
    // Bluff less with:
    // - Weak board (unlikely to scare opponent)
    // - Already caught bluffing recently
    // - Out of position
    // - Large pot
    
    const bluffFrequency = calculateBluffFrequency(gameContext);
    return Math.random() < bluffFrequency;
}
```

---

## Part 2: Advanced Hand Evaluation

### Step 1: Enhanced Hand Strength

Let's improve our hand evaluation to consider more factors:

```javascript
function evaluateHandStrength(holeCards, communityCards) {
    const allCards = [...holeCards, ...communityCards];
    
    // Get basic hand ranking
    const baseHand = getBestHand(holeCards, communityCards);
    
    // Enhance with additional factors
    const evaluation = {
        rank: baseHand.rank,
        values: baseHand.values,
        name: baseHand.name,
        
        // NEW: Additional metrics
        topPairOrBetter: hasTopPairOrBetter(holeCards, communityCards),
        overpair: hasOverpair(holeCards, communityCards),
        draws: evaluateDraws(holeCards, communityCards),
        boardTexture: analyzeBoardTexture(communityCards),
        handCategories: categorizeHand(baseHand)
    };
    
    return evaluation;
}

function hasTopPairOrBetter(holeCards, communityCards) {
    if (communityCards.length === 0) return false;
    
    const boardRanks = communityCards.map(c => rankValue(c.rank));
    const topBoardCard = Math.max(...boardRanks);
    const holeRanks = holeCards.map(c => rankValue(c.rank));
    
    // Do we have a card matching the top board card?
    return holeRanks.some(r => r === topBoardCard);
}

function hasOverpair(holeCards, communityCards) {
    if (communityCards.length === 0) return false;
    
    const boardRanks = communityCards.map(c => rankValue(c.rank));
    const topBoardCard = Math.max(...boardRanks);
    const holeRanks = holeCards.map(c => rankValue(c.rank));
    
    // Do we have a pocket pair higher than any board card?
    const isPair = holeRanks[0] === holeRanks[1];
    const pairValue = Math.min(...holeRanks);
    
    return isPair && pairValue > topBoardCard;
}

function evaluateDraws(holeCards, communityCards) {
    // Can we make a straight or flush?
    const allCards = [...holeCards, ...communityCards];
    
    if (allCards.length < 4) {
        return { flushDraw: false, straightDraw: false };
    }
    
    // Check for flush draw (4 of same suit, need 1 more)
    const suitCounts = {};
    for (let card of allCards) {
        suitCounts[card.suit] = (suitCounts[card.suit] || 0) + 1;
    }
    const flushDraw = Object.values(suitCounts).some(count => count === 4);
    
    // Check for straight draw (4 in sequence, need 1 more)
    const ranks = allCards.map(c => rankValue(c.rank)).sort((a, b) => a - b);
    let straightDraw = false;
    
    // Check for 4-card sequences
    for (let i = 0; i <= ranks.length - 4; i++) {
        const sequence = ranks.slice(i, i + 4);
        const isSequence = sequence[3] - sequence[0] === 3;
        if (isSequence) {
            straightDraw = true;
            break;
        }
    }
    
    return {
        flushDraw: flushDraw,
        straightDraw: straightDraw,
        comboDraws: flushDraw && straightDraw
    };
}

function analyzeBoardTexture(communityCards) {
    if (communityCards.length < 3) {
        return { texture: 'none', danger: 0 };
    }
    
    const suits = communityCards.map(c => c.suit);
    const ranks = communityCards.map(c => rankValue(c.rank)).sort((a, b) => a - b);
    
    // Check for coordinated board
    const suitCounts = {};
    for (let suit of suits) {
        suitCounts[suit] = (suitCounts[suit] || 0) + 1;
    }
    const maxSuitCount = Math.max(...Object.values(suitCounts));
    const flushPossible = maxSuitCount >= 3;
    
    // Check for connected ranks
    let straightPossible = false;
    for (let i = 0; i <= ranks.length - 3; i++) {
        if (ranks[i + 2] - ranks[i] <= 4) {
            straightPossible = true;
            break;
        }
    }
    
    // Check for paired board
    const rankCounts = {};
    for (let rank of ranks) {
        rankCounts[rank] = (rankCounts[rank] || 0) + 1;
    }
    const pairedBoard = Object.values(rankCounts).some(count => count >= 2);
    
    // Determine texture
    let texture = 'dry';
    let danger = 1;
    
    if (flushPossible && straightPossible) {
        texture = 'very-coordinated';
        danger = 5;
    } else if (flushPossible || straightPossible) {
        texture = 'coordinated';
        danger = 3;
    } else if (pairedBoard) {
        texture = 'paired';
        danger = 2;
    }
    
    return {
        texture: texture,
        danger: danger,
        flushPossible: flushPossible,
        straightPossible: straightPossible,
        paired: pairedBoard
    };
}

function categorizeHand(handEvaluation) {
    const rank = handEvaluation.rank;
    
    // Categorize into playable groups
    if (rank >= 7) return 'monster';      // Full house or better
    if (rank >= 4) return 'strong';       // Three of a kind or better
    if (rank >= 2) return 'made-hand';    // Pair or better
    if (rank >= 1) return 'high-card';    // High card
    return 'weak';
}
```

---

## Part 3: Decision Making System

### Step 2: Action Selection Algorithm

```javascript
function dealerDecideAction() {
    console.log('=== Dealer Decision Making ===');
    
    // Gather all relevant information
    const context = gatherGameContext();
    
    // Evaluate hand
    const handEval = evaluateHandStrength(
        gameState.dealerHand, 
        gameState.communityCards
    );
    
    console.log(`Hand: ${handEval.name} (${handEval.rank}/10)`);
    console.log(`Category: ${handEval.handCategories}`);
    console.log(`Board: ${handEval.boardTexture.texture}`);
    
    // Calculate action probabilities
    const actionWeights = calculateActionWeights(handEval, context);
    
    // Select action based on weights and difficulty
    const action = selectWeightedAction(actionWeights, gameState.difficulty);
    
    console.log(`Decision: ${action}`);
    
    return action;
}

function gatherGameContext() {
    const toCall = gameState.currentBet - gameState.dealerBetThisRound;
    const potSize = gameState.pot;
    const potOdds = toCall > 0 ? toCall / (potSize + toCall) : 0;
    
    return {
        toCall: toCall,
        potSize: potSize,
        potOdds: potOdds,
        dealerChips: gameState.dealerChips,
        playerChips: gameState.playerChips,
        bettingRound: gameState.bettingRound,
        playerBet: gameState.playerBetThisRound,
        dealerPosition: gameState.isPlayerDealer ? 'out-of-position' : 'in-position',
        handNumber: gameState.handNumber
    };
}

function calculateActionWeights(handEval, context) {
    const weights = {
        fold: 0,
        check: 0,
        call: 0,
        bet: 0,
        raise: 0,
        allIn: 0
    };
    
    const handStrength = handEval.rank;
    const category = handEval.handCategories;
    const toCall = context.toCall;
    
    // MONSTER HANDS (7-10) - Full house or better
    if (category === 'monster') {
        weights.fold = 0;
        weights.check = 5;   // Slowplay sometimes
        weights.call = 10;
        weights.bet = 30;
        weights.raise = 40;
        weights.allIn = 15;
    }
    
    // STRONG HANDS (4-6) - Three of a kind, straight, flush
    else if (category === 'strong') {
        weights.fold = 0;
        weights.check = 10;
        weights.call = 25;
        weights.bet = 35;
        weights.raise = 25;
        weights.allIn = 5;
    }
    
    // MADE HANDS (2-3) - Pair or two pair
    else if (category === 'made-hand') {
        if (toCall === 0) {
            // No bet facing us
            weights.check = 40;
            weights.bet = 60;
        } else if (toCall <= context.potSize * 0.3) {
            // Small bet
            weights.fold = 10;
            weights.call = 60;
            weights.raise = 30;
        } else {
            // Large bet
            weights.fold = 40;
            weights.call = 50;
            weights.raise = 10;
        }
    }
    
    // HIGH CARD / WEAK (0-1)
    else {
        if (toCall === 0) {
            // Consider bluffing
            weights.check = 70;
            weights.bet = 30;  // Bluff frequency
        } else if (toCall <= context.potSize * 0.2) {
            // Cheap to call - maybe we can outdraw
            const draws = handEval.draws;
            if (draws.flushDraw || draws.straightDraw) {
                weights.fold = 20;
                weights.call = 60;
                weights.raise = 20;  // Semi-bluff
            } else {
                weights.fold = 70;
                weights.call = 20;
                weights.raise = 10;  // Pure bluff
            }
        } else {
            // Too expensive
            weights.fold = 90;
            weights.call = 5;
            weights.raise = 5;  // Rare bluff
        }
    }
    
    // Adjust for board texture
    if (handEval.boardTexture.danger >= 4) {
        // Scary board - bet/raise less, call more
        weights.bet *= 0.7;
        weights.raise *= 0.6;
        weights.call *= 1.2;
    }
    
    // Adjust for stack sizes
    if (context.dealerChips < context.potSize * 2) {
        // Short stack - play more aggressively
        weights.allIn *= 2;
        weights.raise *= 1.5;
    }
    
    return weights;
}

function selectWeightedAction(weights, difficulty) {
    // Remove impossible actions
    const context = gatherGameContext();
    
    if (context.toCall > gameState.dealerChips) {
        // Can't call or raise - only fold or all-in
        weights.call = 0;
        weights.raise = 0;
        weights.bet = 0;
    }
    
    if (context.toCall === 0) {
        // No bet - can't call or fold
        weights.call = 0;
        weights.fold = 0;
    }
    
    if (context.toCall > 0) {
        // There's a bet - can't check or bet
        weights.check = 0;
        weights.bet = 0;
    }
    
    // Calculate total weight
    const totalWeight = Object.values(weights).reduce((sum, w) => sum + w, 0);
    
    if (totalWeight === 0) {
        // No valid action? This shouldn't happen, but default to fold/check
        return context.toCall > 0 ? 'fold' : 'check';
    }
    
    // Select action based on weighted random
    let random = Math.random() * totalWeight;
    
    for (let action in weights) {
        random -= weights[action];
        if (random <= 0) {
            return action;
        }
    }
    
    // Fallback
    return context.toCall > 0 ? 'call' : 'check';
}
```

---

## Part 4: Difficulty Levels

### Step 3: Implementing AI Difficulty

```javascript
// Add to game state
let gameState = {
    // ... existing properties ...
    difficulty: 'medium',  // 'easy', 'medium', 'hard', 'expert'
    dealerPersonality: {},
    playerStats: {
        handsPlayed: 0,
        aggressionFactor: 1.0,
        bluffCaught: 0,
        foldToBet: 0,
        totalBets: 0
    }
};

function setDifficulty(level) {
    gameState.difficulty = level;
    
    switch(level) {
        case 'easy':
            gameState.dealerPersonality = {
                bluffFrequency: 0.05,      // 5% bluff rate
                aggression: 0.3,            // Passive
                callDownFrequency: 0.6,     // Calls too much
                foldFrequency: 0.5,         // Folds too much
                slowplayFrequency: 0.0,     // Never slowplays
                adaptability: 0.0           // Doesn't adapt
            };
            break;
            
        case 'medium':
            gameState.dealerPersonality = {
                bluffFrequency: 0.15,       // 15% bluff rate
                aggression: 0.5,            // Balanced
                callDownFrequency: 0.4,     // Sometimes calls light
                foldFrequency: 0.3,         // Reasonable folds
                slowplayFrequency: 0.1,     // Occasional slowplay
                adaptability: 0.3           // Some adaptation
            };
            break;
            
        case 'hard':
            gameState.dealerPersonality = {
                bluffFrequency: 0.25,       // 25% bluff rate
                aggression: 0.7,            // Aggressive
                callDownFrequency: 0.3,     // Good hand reading
                foldFrequency: 0.2,         // Tough to bluff
                slowplayFrequency: 0.2,     // Trappy
                adaptability: 0.6           // Adapts well
            };
            break;
            
        case 'expert':
            gameState.dealerPersonality = {
                bluffFrequency: 0.3,        // 30% bluff rate
                aggression: 0.8,            // Very aggressive
                callDownFrequency: 0.25,    // Excellent hand reading
                foldFrequency: 0.15,        // Hard to bluff
                slowplayFrequency: 0.25,    // Very trappy
                adaptability: 1.0           // Fully adaptive
            };
            break;
    }
    
    console.log(`Difficulty set to: ${level}`);
    console.log('Dealer personality:', gameState.dealerPersonality);
}

function adjustActionWeightsForDifficulty(weights) {
    const personality = gameState.dealerPersonality;
    
    // Apply aggression modifier
    weights.raise *= (1 + personality.aggression);
    weights.bet *= (1 + personality.aggression);
    weights.call *= (1 - personality.aggression * 0.3);
    weights.check *= (1 - personality.aggression * 0.2);
    
    // Apply bluff frequency
    if (weights.bet > 0 || weights.raise > 0) {
        const handEval = evaluateHandStrength(gameState.dealerHand, gameState.communityCards);
        if (handEval.handCategories === 'weak' || handEval.handCategories === 'high-card') {
            // This would be a bluff
            const bluffMultiplier = personality.bluffFrequency / 0.15; // Normalized to medium
            weights.bet *= bluffMultiplier;
            weights.raise *= bluffMultiplier;
        }
    }
    
    // Apply fold tendency
    weights.fold *= (1 + personality.foldFrequency);
    
    return weights;
}
```

---

## Part 5: Bluffing System

### Step 4: Strategic Bluffing

```javascript
function shouldDealerBluff(context, handEval) {
    const personality = gameState.dealerPersonality;
    
    // Base bluff frequency from difficulty
    let bluffChance = personality.bluffFrequency;
    
    // Adjust based on board texture
    const board = handEval.boardTexture;
    if (board.danger >= 4) {
        // Scary board - easier to bluff
        bluffChance *= 1.5;
    } else if (board.danger <= 2) {
        // Dry board - harder to represent strong hand
        bluffChance *= 0.6;
    }
    
    // Adjust based on position
    if (context.dealerPosition === 'in-position') {
        // More effective to bluff in position
        bluffChance *= 1.3;
    }
    
    // Adjust based on pot size
    if (context.potSize < gameState.bigBlind * 5) {
        // Small pot - more likely to bluff
        bluffChance *= 1.2;
    } else if (context.potSize > gameState.bigBlind * 20) {
        // Large pot - less likely to bluff
        bluffChance *= 0.7;
    }
    
    // Adjust based on recent history
    if (gameState.dealerStats && gameState.dealerStats.recentBluffsCaught > 2) {
        // Been caught bluffing recently - slow down
        bluffChance *= 0.5;
    }
    
    // Adjust based on opponent tendency
    if (gameState.playerStats.foldToBet / gameState.playerStats.handsPlayed > 0.6) {
        // Player folds a lot - bluff more
        bluffChance *= 1.4;
    }
    
    console.log(`Bluff chance: ${(bluffChance * 100).toFixed(1)}%`);
    
    return Math.random() < bluffChance;
}

function calculateBluffSize(context) {
    const personality = gameState.dealerPersonality;
    
    // Base bluff size: 50-75% of pot
    let bluffSize = context.potSize * (0.5 + Math.random() * 0.25);
    
    // Adjust for aggression
    bluffSize *= (1 + personality.aggression * 0.3);
    
    // Adjust for stack size
    const stackToPot = gameState.dealerChips / context.potSize;
    if (stackToPot < 3) {
        // Short stack - bigger bluffs (all-in threat)
        bluffSize *= 1.3;
    }
    
    // Round to nearest big blind
    bluffSize = Math.round(bluffSize / gameState.bigBlind) * gameState.bigBlind;
    
    // Cap at dealer's stack
    bluffSize = Math.min(bluffSize, gameState.dealerChips);
    
    return bluffSize;
}

function isSemiBluff(handEval) {
    // Semi-bluff = betting with a draw (some chance to improve)
    const draws = handEval.draws;
    return draws.flushDraw || draws.straightDraw;
}
```

---

## Part 6: Opponent Modeling

### Step 5: Tracking Player Behavior

```javascript
function trackPlayerAction(action, amount) {
    const stats = gameState.playerStats;
    
    stats.handsPlayed++;
    
    if (action === 'bet' || action === 'raise') {
        stats.totalBets++;
        stats.aggressionFactor = stats.totalBets / stats.handsPlayed;
    }
    
    if (action === 'fold') {
        stats.foldToBet++;
    }
    
    // Update real-time
    updatePlayerModel();
}

function updatePlayerModel() {
    const stats = gameState.playerStats;
    const hands = stats.handsPlayed;
    
    if (hands < 5) {
        // Not enough data yet
        gameState.playerModel = {
            type: 'unknown',
            tendencies: {}
        };
        return;
    }
    
    const aggression = stats.aggressionFactor;
    const foldFrequency = stats.foldToBet / hands;
    
    // Classify player type
    let playerType = 'unknown';
    
    if (aggression > 0.6 && foldFrequency < 0.3) {
        playerType = 'aggressive-loose';  // LAG (Loose-Aggressive)
    } else if (aggression > 0.5 && foldFrequency > 0.4) {
        playerType = 'aggressive-tight';  // TAG (Tight-Aggressive)
    } else if (aggression < 0.3 && foldFrequency < 0.4) {
        playerType = 'passive-loose';     // Calling station
    } else if (aggression < 0.3 && foldFrequency > 0.5) {
        playerType = 'passive-tight';     // Rock/Nit
    } else {
        playerType = 'balanced';          // Solid player
    }
    
    gameState.playerModel = {
        type: playerType,
        aggression: aggression,
        foldFrequency: foldFrequency,
        tendencies: classifyTendencies(playerType)
    };
    
    console.log(`Player model updated: ${playerType}`);
}

function classifyTendencies(playerType) {
    switch(playerType) {
        case 'aggressive-loose':
            return {
                bluffFrequent: true,
                callsLight: true,
                respectsBets: false,
                counterStrategy: 'trap and call down'
            };
            
        case 'aggressive-tight':
            return {
                selectiveAggression: true,
                respectsBets: true,
                hardToBluff: true,
                counterStrategy: 'avoid confrontation without strong hand'
            };
            
        case 'passive-loose':
            return {
                callsTooMuch: true,
                hardToBluffOut: true,
                rarelyRaises: true,
                counterStrategy: 'value bet thin, avoid bluffs'
            };
            
        case 'passive-tight':
            return {
                foldsOften: true,
                easyToBluff: true,
                onlyBetsNuts: true,
                counterStrategy: 'bluff frequently, fold to their bets'
            };
            
        default:
            return {
                balanced: true,
                counterStrategy: 'play solid poker'
            };
    }
}

function adjustStrategyForOpponent(weights, context) {
    const model = gameState.playerModel;
    
    if (!model || model.type === 'unknown') {
        return weights;
    }
    
    const tendencies = model.tendencies;
    
    // Adjust bluffing
    if (tendencies.easyToBluff) {
        weights.bet *= 1.5;
        weights.raise *= 1.3;
    } else if (tendencies.hardToBluffOut || tendencies.callsTooMuch) {
        weights.bet *= 0.7;
        weights.raise *= 0.8;
    }
    
    // Adjust calling
    if (tendencies.bluffFrequent) {
        weights.call *= 1.3;  // Call them down more
        weights.fold *= 0.7;
    } else if (tendencies.onlyBetsNuts) {
        weights.fold *= 1.4;  // Fold to their bets
        weights.call *= 0.6;
    }
    
    return weights;
}
```

---

## Part 7: Adaptive AI

### Step 6: Learning and Adapting

```javascript
function adaptDealerStrategy() {
    if (gameState.dealerPersonality.adaptability === 0) {
        return; // No adaptation on easy mode
    }
    
    const adaptRate = gameState.dealerPersonality.adaptability;
    const model = gameState.playerModel;
    
    if (!model || model.type === 'unknown') {
        return;
    }
    
    console.log(`Adapting to ${model.type} player...`);
    
    // Gradually shift personality to counter player type
    const targetPersonality = getCounterPersonality(model.type);
    
    // Blend current with target based on adapt rate
    for (let key in targetPersonality) {
        const current = gameState.dealerPersonality[key];
        const target = targetPersonality[key];
        const delta = (target - current) * adaptRate * 0.1; // Slow adaptation
        
        gameState.dealerPersonality[key] = current + delta;
    }
}

function getCounterPersonality(playerType) {
    switch(playerType) {
        case 'aggressive-loose':
            // Counter LAG with tight-aggressive play
            return {
                bluffFrequency: 0.1,
                aggression: 0.6,
                callDownFrequency: 0.5,
                foldFrequency: 0.3,
                slowplayFrequency: 0.3
            };
            
        case 'aggressive-tight':
            // Counter TAG with solid play, avoid marginal spots
            return {
                bluffFrequency: 0.15,
                aggression: 0.5,
                callDownFrequency: 0.3,
                foldFrequency: 0.4,
                slowplayFrequency: 0.2
            };
            
        case 'passive-loose':
            // Counter calling station with value betting
            return {
                bluffFrequency: 0.05,
                aggression: 0.7,
                callDownFrequency: 0.2,
                foldFrequency: 0.2,
                slowplayFrequency: 0.1
            };
            
        case 'passive-tight':
            // Counter rock with frequent bluffs
            return {
                bluffFrequency: 0.4,
                aggression: 0.8,
                callDownFrequency: 0.2,
                foldFrequency: 0.5,
                slowplayFrequency: 0.0
            };
            
        default:
            // Balanced opponent - play solid
            return {
                bluffFrequency: 0.2,
                aggression: 0.6,
                callDownFrequency: 0.35,
                foldFrequency: 0.3,
                slowplayFrequency: 0.15
            };
    }
}

// Call this periodically (every 5-10 hands)
function periodicAdaptation() {
    if (gameState.handNumber % 7 === 0) {
        adaptDealerStrategy();
    }
}
```

---

## Part 8: Integration

### Step 7: Complete AI System

```javascript
function enhancedDealerAction() {
    console.log('\n=== Enhanced Dealer AI ===');
    
    // Gather context
    const context = gatherGameContext();
    
    // Evaluate hand
    const handEval = evaluateHandStrength(
        gameState.dealerHand,
        gameState.communityCards
    );
    
    console.log(`Hand: ${handEval.name} (${handEval.handCategories})`);
    console.log(`Board: ${handEval.boardTexture.texture} (danger: ${handEval.boardTexture.danger})`);
    
    // Calculate base action weights
    let weights = calculateActionWeights(handEval, context);
    
    // Adjust for difficulty
    weights = adjustActionWeightsForDifficulty(weights);
    
    // Adjust for opponent model
    weights = adjustStrategyForOpponent(weights, context);
    
    // Periodically adapt
    periodicAdaptation();
    
    // Select action
    const action = selectWeightedAction(weights, gameState.difficulty);
    
    console.log(`Decision: ${action}`);
    console.log('Weights:', weights);
    
    // Execute action
    executeAction(action, context, handEval);
}

function executeAction(action, context, handEval) {
    switch(action) {
        case 'fold':
            dealerFold();
            break;
            
        case 'check':
            dealerCheck();
            break;
            
        case 'call':
            dealerCall();
            break;
            
        case 'bet':
            const betAmount = calculateBetSize(context, handEval);
            dealerBet(betAmount);
            break;
            
        case 'raise':
            const raiseAmount = calculateRaiseSize(context, handEval);
            dealerRaise(raiseAmount);
            break;
            
        case 'allIn':
            dealerAllIn();
            break;
            
        default:
            dealerCheck();
    }
}

function calculateBetSize(context, handEval) {
    const category = handEval.handCategories;
    
    // Check if this is a bluff
    if ((category === 'weak' || category === 'high-card') && 
        shouldDealerBluff(context, handEval)) {
        return calculateBluffSize(context);
    }
    
    // Value betting
    let betSize;
    
    if (category === 'monster') {
        // Small bet to get called (or big to build pot)
        betSize = context.potSize * (Math.random() < 0.5 ? 0.5 : 0.9);
    } else if (category === 'strong') {
        // Standard value bet
        betSize = context.potSize * (0.6 + Math.random() * 0.3);
    } else {
        // Made hand - smaller bet
        betSize = context.potSize * (0.4 + Math.random() * 0.3);
    }
    
    // Round and cap
    betSize = Math.round(betSize / gameState.bigBlind) * gameState.bigBlind;
    betSize = Math.max(gameState.minimumBet, betSize);
    betSize = Math.min(betSize, gameState.dealerChips);
    
    return betSize;
}

function calculateRaiseSize(context, handEval) {
    const toCall = context.toCall;
    const category = handEval.handCategories;
    
    // Check if this is a bluff
    if ((category === 'weak' || category === 'high-card') && 
        shouldDealerBluff(context, handEval)) {
        const bluffSize = calculateBluffSize(context);
        return Math.max(gameState.minimumBet, bluffSize - toCall);
    }
    
    // Value raising
    let raiseAmount;
    
    if (category === 'monster') {
        // Big raise
        raiseAmount = context.potSize * (0.8 + Math.random() * 0.4);
    } else if (category === 'strong') {
        // Medium raise
        raiseAmount = context.potSize * (0.5 + Math.random() * 0.3);
    } else {
        // Small raise (semi-bluff?)
        raiseAmount = context.potSize * (0.3 + Math.random() * 0.2);
    }
    
    raiseAmount = Math.max(gameState.minimumBet, raiseAmount);
    raiseAmount = Math.min(raiseAmount, gameState.dealerChips - toCall);
    
    return Math.round(raiseAmount / gameState.bigBlind) * gameState.bigBlind;
}
```

---

## Part 9: UI for Difficulty Selection

### Step 8: Difficulty Menu

```html
<!-- Add to HTML -->
<div id="difficulty-menu" style="display: none;">
    <h2>Select Difficulty</h2>
    
    <div class="difficulty-option" onclick="selectDifficulty('easy')">
        <h3>😊 Easy</h3>
        <p>Perfect for learning. Dealer plays passively and predictably.</p>
        <ul>
            <li>Rare bluffs (5%)</li>
            <li>Calls too much</li>
            <li>Doesn't adapt</li>
        </ul>
    </div>
    
    <div class="difficulty-option" onclick="selectDifficulty('medium')">
        <h3>😐 Medium</h3>
        <p>Balanced opponent. Good for practice.</p>
        <ul>
            <li>Moderate bluffs (15%)</li>
            <li>Solid decisions</li>
            <li>Some adaptation</li>
        </ul>
    </div>
    
    <div class="difficulty-option" onclick="selectDifficulty('hard')">
        <h3>😤 Hard</h3>
        <p>Challenging opponent. Tests your skills!</p>
        <ul>
            <li>Frequent bluffs (25%)</li>
            <li>Aggressive play</li>
            <li>Adapts to your style</li>
        </ul>
    </div>
    
    <div class="difficulty-option" onclick="selectDifficulty('expert')">
        <h3>😈 Expert</h3>
        <p>Master level AI. Can you beat it?</p>
        <ul>
            <li>Very frequent bluffs (30%)</li>
            <li>Highly aggressive</li>
            <li>Fully adaptive</li>
            <li>Advanced hand reading</li>
        </ul>
    </div>
</div>
```

```javascript
function selectDifficulty(level) {
    setDifficulty(level);
    document.getElementById('difficulty-menu').style.display = 'none';
    alert(`Difficulty set to ${level.toUpperCase()}!\nGood luck! 🍀`);
    updateDisplay();
}

function showDifficultyMenu() {
    document.getElementById('difficulty-menu').style.display = 'block';
}

// Add button to main game
// <button onclick="showDifficultyMenu()">Change Difficulty</button>
```

---

## 🎯 Your Tasks

### Implementation Checklist

**Part 1: Enhanced Evaluation**
- [ ] Implement `evaluateHandStrength()`
- [ ] Implement `hasTopPairOrBetter()`
- [ ] Implement `hasOverpair()`
- [ ] Implement `evaluateDraws()`
- [ ] Implement `analyzeBoardTexture()`
- [ ] Implement `categorizeHand()`

**Part 2: Decision Making**
- [ ] Implement `dealerDecideAction()`
- [ ] Implement `gatherGameContext()`
- [ ] Implement `calculateActionWeights()`
- [ ] Implement `selectWeightedAction()`

**Part 3: Difficulty System**
- [ ] Add difficulty property to game state
- [ ] Implement `setDifficulty()`
- [ ] Implement `adjustActionWeightsForDifficulty()`
- [ ] Create difficulty selection UI

**Part 4: Bluffing**
- [ ] Implement `shouldDealerBluff()`
- [ ] Implement `calculateBluffSize()`
- [ ] Implement `isSemiBluff()`
- [ ] Integrate bluffing into decision making

**Part 5: Opponent Modeling**
- [ ] Add player stats tracking
- [ ] Implement `trackPlayerAction()`
- [ ] Implement `updatePlayerModel()`
- [ ] Implement `classifyTendencies()`
- [ ] Implement `adjustStrategyForOpponent()`

**Part 6: Adaptation**
- [ ] Implement `adaptDealerStrategy()`
- [ ] Implement `getCounterPersonality()`
- [ ] Implement `periodicAdaptation()`

**Part 7: Integration**
- [ ] Implement `enhancedDealerAction()`
- [ ] Implement `executeAction()`
- [ ] Implement `calculateBetSize()`
- [ ] Implement `calculateRaiseSize()`
- [ ] Replace old `dealerAction()` with new system

**Part 8: Testing**
- [ ] Test all difficulty levels
- [ ] Verify bluffing frequency
- [ ] Test adaptation over multiple hands
- [ ] Verify opponent modeling accuracy

---

## 🐛 Testing Scenarios

1. **Easy Mode**
   - Dealer should fold often
   - Rare bluffs
   - Calls with weak hands

2. **Medium Mode**
   - Balanced play
   - Occasional bluffs
   - Some adaptation

3. **Hard Mode**
   - Aggressive betting
   - Frequent bluffs
   - Adapts to your style

4. **Expert Mode**
   - Very aggressive
   - High bluff frequency
   - Exploits your weaknesses

5. **Opponent Modeling**
   - Play tight - dealer should bluff more
   - Play loose - dealer should value bet more
   - Play aggressive - dealer should trap more

---

## 🏆 Success Criteria

Your AI should:
- ✅ Make logical decisions based on hand strength
- ✅ Consider pot odds and expected value
- ✅ Bluff strategically (not randomly)
- ✅ Adapt to opponent over time
- ✅ Feel different on each difficulty
- ✅ Be fun and challenging to play against

---

## 💡 Advanced Enhancements

Once complete, try adding:

1. **Range-Based Thinking**
   - Assign ranges of hands to player
   - Narrow range as hand progresses

2. **Bet Sizing Tells**
   - Track player's bet sizes
   - Detect patterns (big bets = bluff?)

3. **Multi-Street Planning**
   - Plan betting for future streets
   - Set up river bluffs

4. **ICM Awareness** (Tournament mode)
   - Consider chip values
   - Avoid marginal all-ins

5. **Speech/Taunts**
   - Add personality with messages
   - "Nice bluff!" when you fold
   - "I knew you had it!" when they fold

---

**Estimated Time:** 4-5 hours  
**Difficulty:** ★★★★☆ (Advanced)

**Congratulations!** You're building professional-level poker AI! This is exactly how real poker bots think!

**Next:** Lesson 4.11 - Win/Lose Conditions & Game Over
