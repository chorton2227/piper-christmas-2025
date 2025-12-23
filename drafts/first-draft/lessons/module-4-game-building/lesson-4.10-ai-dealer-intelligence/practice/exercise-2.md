# Exercise 2: Difficulty Levels & Decision Making

**Create a complete AI decision-making system with multiple difficulty levels**

**Estimated Time:** 90-120 minutes  
**Difficulty:** Advanced

---

## 🎯 Objective

Build an intelligent dealer that:
- Makes decisions based on hand strength and game context
- Has 4 difficulty levels (Easy, Medium, Hard, Expert)
- Varies betting strategy by difficulty
- Feels challenging and fun to play against

---

## 📋 Step-by-Step Instructions

### Step 1: Add Difficulty to Game State

```javascript
let gameState = {
    // ... existing properties ...
    
    // NEW: AI Difficulty
    difficulty: 'medium',  // 'easy', 'medium', 'hard', 'expert'
    
    dealerPersonality: {
        bluffFrequency: 0.15,
        aggression: 0.5,
        callDownFrequency: 0.4,
        foldFrequency: 0.3,
        slowplayFrequency: 0.1
    }
};
```

### Step 2: Implement Difficulty Settings

```javascript
function setDifficulty(level) {
    gameState.difficulty = level;
    
    console.log(`Setting difficulty to: ${level}`);
    
    switch(level) {
        case 'easy':
            gameState.dealerPersonality = {
                bluffFrequency: 0.05,      // Bluffs 5% of time
                aggression: 0.3,            // Passive
                callDownFrequency: 0.6,     // Calls too much
                foldFrequency: 0.5,         // Folds too easily
                slowplayFrequency: 0.0      // Never slowplays
            };
            break;
            
        case 'medium':
            gameState.dealerPersonality = {
                bluffFrequency: 0.15,       // Bluffs 15% of time
                aggression: 0.5,            // Balanced
                callDownFrequency: 0.4,     // Reasonable
                foldFrequency: 0.3,         // Balanced
                slowplayFrequency: 0.1      // Occasional traps
            };
            break;
            
        case 'hard':
            gameState.dealerPersonality = {
                bluffFrequency: 0.25,       // Bluffs 25% of time
                aggression: 0.7,            // Aggressive
                callDownFrequency: 0.3,     // Good hand reading
                foldFrequency: 0.2,         // Hard to bluff
                slowplayFrequency: 0.2      // Sets traps
            };
            break;
            
        case 'expert':
            gameState.dealerPersonality = {
                bluffFrequency: 0.3,        // Bluffs 30% of time
                aggression: 0.8,            // Very aggressive
                callDownFrequency: 0.25,    // Excellent reads
                foldFrequency: 0.15,        // Very hard to bluff
                slowplayFrequency: 0.25     // Very trappy
            };
            break;
            
        default:
            setDifficulty('medium');
            return;
    }
    
    console.log('Personality set:', gameState.dealerPersonality);
    alert(`Difficulty set to ${level.toUpperCase()}!\nGood luck! 🍀`);
}

// Test it
setDifficulty('hard');
```

### Step 3: Gather Game Context

```javascript
function gatherGameContext() {
    const toCall = gameState.currentBet - gameState.dealerBetThisRound;
    const potSize = gameState.pot;
    
    return {
        // Betting info
        toCall: toCall,
        potSize: potSize,
        potOdds: toCall > 0 ? toCall / (potSize + toCall) : 0,
        
        // Chip stacks
        dealerChips: gameState.dealerChips,
        playerChips: gameState.playerChips,
        
        // Game state
        bettingRound: gameState.bettingRound,
        playerBet: gameState.playerBetThisRound,
        
        // Position
        dealerPosition: gameState.isPlayerDealer ? 'out-of-position' : 'in-position',
        
        // Hand number
        handNumber: gameState.handNumber
    };
}
```

### Step 4: Calculate Action Weights

This is the heart of the AI - it assigns probabilities to each action:

```javascript
function calculateActionWeights(handEval, context) {
    console.log('Calculating action weights...');
    
    const weights = {
        fold: 0,
        check: 0,
        call: 0,
        bet: 0,
        raise: 0,
        allIn: 0
    };
    
    const category = handEval.handCategory;
    const toCall = context.toCall;
    
    console.log(`Hand category: ${category}`);
    console.log(`To call: $${toCall}`);
    
    // MONSTER HANDS (Full house or better)
    if (category === 'monster') {
        weights.fold = 0;
        weights.check = 5;    // Slowplay occasionally
        weights.call = 10;
        weights.bet = 30;
        weights.raise = 40;
        weights.allIn = 15;
    }
    
    // STRONG HANDS (Three of a kind, straight, flush)
    else if (category === 'strong') {
        weights.fold = 0;
        weights.check = 10;
        weights.call = 25;
        weights.bet = 35;
        weights.raise = 25;
        weights.allIn = 5;
    }
    
    // MADE HANDS (Pair or two pair)
    else if (category === 'made-hand') {
        if (toCall === 0) {
            // No bet facing us
            weights.check = 40;
            weights.bet = 60;
        } else if (toCall <= context.potSize * 0.3) {
            // Small bet (less than 1/3 pot)
            weights.fold = 10;
            weights.call = 60;
            weights.raise = 30;
        } else if (toCall <= context.potSize * 0.7) {
            // Medium bet
            weights.fold = 30;
            weights.call = 55;
            weights.raise = 15;
        } else {
            // Large bet (over 2/3 pot)
            weights.fold = 50;
            weights.call = 40;
            weights.raise = 10;
        }
    }
    
    // HIGH CARD / WEAK HANDS
    else {
        if (toCall === 0) {
            // No bet - consider bluffing
            weights.check = 70;
            weights.bet = 30;   // Potential bluff
        } else if (toCall <= context.potSize * 0.2) {
            // Cheap call - maybe we have a draw
            const hasDraws = handEval.draws.flushDraw || handEval.draws.straightDraw;
            
            if (hasDraws) {
                weights.fold = 20;
                weights.call = 60;
                weights.raise = 20;  // Semi-bluff with draw
            } else {
                weights.fold = 70;
                weights.call = 20;
                weights.raise = 10;  // Pure bluff
            }
        } else {
            // Too expensive - fold most of the time
            weights.fold = 90;
            weights.call = 5;
            weights.raise = 5;
        }
    }
    
    // Adjust for board texture
    const boardDanger = handEval.boardTexture.danger;
    if (boardDanger >= 4) {
        // Very coordinated board - be more cautious
        weights.bet *= 0.7;
        weights.raise *= 0.6;
        weights.call *= 1.2;
        weights.fold *= 1.1;
        console.log('Scary board - playing more cautiously');
    }
    
    // Adjust for stack size
    const stackToPot = context.dealerChips / context.potSize;
    if (stackToPot < 3) {
        // Short stack - more aggressive
        weights.allIn *= 2;
        weights.raise *= 1.5;
        console.log('Short stack - playing more aggressively');
    }
    
    console.log('Base weights:', weights);
    
    return weights;
}
```

### Step 5: Adjust Weights for Difficulty

```javascript
function adjustWeightsForDifficulty(weights, handEval, context) {
    const personality = gameState.dealerPersonality;
    
    console.log('Adjusting for difficulty...');
    
    // Apply aggression modifier
    const aggressionMultiplier = 1 + personality.aggression;
    weights.raise *= aggressionMultiplier;
    weights.bet *= aggressionMultiplier;
    weights.allIn *= aggressionMultiplier;
    
    // Reduce passive actions
    weights.call *= (1 - personality.aggression * 0.3);
    weights.check *= (1 - personality.aggression * 0.2);
    
    // Apply fold tendency
    weights.fold *= (1 + personality.foldFrequency);
    
    // Apply slowplay tendency (check with monster)
    if (handEval.handCategory === 'monster' || handEval.handCategory === 'strong') {
        weights.check *= (1 + personality.slowplayFrequency * 3);
    }
    
    console.log('After difficulty adjustment:', weights);
    
    return weights;
}
```

### Step 6: Select Weighted Action

```javascript
function selectWeightedAction(weights, context) {
    console.log('Selecting action from weights...');
    
    // Remove impossible actions
    if (context.toCall > gameState.dealerChips) {
        // Can't call or raise - only fold or all-in
        weights.call = 0;
        weights.raise = 0;
        weights.bet = 0;
    }
    
    if (context.toCall === 0) {
        // No bet to call or fold
        weights.call = 0;
        weights.fold = 0;
    } else {
        // There's a bet - can't check or bet
        weights.check = 0;
        weights.bet = 0;
    }
    
    // Calculate total weight
    const totalWeight = Object.values(weights).reduce((sum, w) => sum + w, 0);
    
    if (totalWeight === 0) {
        console.log('No valid actions! Defaulting...');
        return context.toCall > 0 ? 'fold' : 'check';
    }
    
    // Weighted random selection
    let random = Math.random() * totalWeight;
    
    console.log(`Random selection: ${random.toFixed(2)} / ${totalWeight.toFixed(2)}`);
    
    for (let action in weights) {
        random -= weights[action];
        if (random <= 0) {
            console.log(`Selected action: ${action}`);
            return action;
        }
    }
    
    // Fallback (should never reach here)
    return context.toCall > 0 ? 'call' : 'check';
}
```

### Step 7: Main AI Decision Function

```javascript
function intelligentDealerAction() {
    console.log('\n=== Intelligent Dealer Decision ===');
    
    // Gather all context
    const context = gatherGameContext();
    console.log('Context:', context);
    
    // Evaluate hand
    const handEval = evaluateHandStrength(
        gameState.dealerHand,
        gameState.communityCards
    );
    console.log(`Hand: ${handEval.name} (${handEval.handCategory})`);
    console.log(`Board: ${handEval.boardTexture.texture}`);
    
    // Calculate base weights
    let weights = calculateActionWeights(handEval, context);
    
    // Adjust for difficulty
    weights = adjustWeightsForDifficulty(weights, handEval, context);
    
    // Select action
    const action = selectWeightedAction(weights, context);
    
    console.log(`\nFinal decision: ${action.toUpperCase()}\n`);
    
    // Execute the action
    executeAction(action, context, handEval);
}
```

### Step 8: Execute Selected Action

```javascript
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
            console.log('Unknown action, defaulting to check');
            dealerCheck();
    }
}

function calculateBetSize(context, handEval) {
    const category = handEval.handCategory;
    let betSize;
    
    // Base bet size depends on hand strength
    if (category === 'monster') {
        // Vary between small and large to keep opponent guessing
        betSize = context.potSize * (Math.random() < 0.5 ? 0.5 : 0.9);
    } else if (category === 'strong') {
        // Standard value bet
        betSize = context.potSize * (0.6 + Math.random() * 0.3);
    } else {
        // Smaller bet (or bluff)
        betSize = context.potSize * (0.4 + Math.random() * 0.3);
    }
    
    // Round to nearest big blind
    betSize = Math.round(betSize / gameState.bigBlind) * gameState.bigBlind;
    
    // Minimum bet
    betSize = Math.max(gameState.minimumBet, betSize);
    
    // Can't bet more than we have
    betSize = Math.min(betSize, gameState.dealerChips);
    
    return betSize;
}

function calculateRaiseSize(context, handEval) {
    const toCall = context.toCall;
    const category = handEval.handCategory;
    
    let raiseAmount;
    
    if (category === 'monster') {
        // Big raise
        raiseAmount = context.potSize * (0.8 + Math.random() * 0.4);
    } else if (category === 'strong') {
        // Medium raise
        raiseAmount = context.potSize * (0.5 + Math.random() * 0.3);
    } else {
        // Small raise (bluff or semi-bluff)
        raiseAmount = context.potSize * (0.3 + Math.random() * 0.2);
    }
    
    raiseAmount = Math.max(gameState.minimumBet, raiseAmount);
    raiseAmount = Math.min(raiseAmount, gameState.dealerChips - toCall);
    
    return Math.round(raiseAmount / gameState.bigBlind) * gameState.bigBlind;
}
```

### Step 9: Replace Old AI

```javascript
// REPLACE your old dealerAction() function with:

function dealerAction() {
    // Add a small delay so it doesn't feel instant
    setTimeout(() => {
        intelligentDealerAction();
    }, 500);
}
```

### Step 10: Add Difficulty Selection UI

```html
<!-- Add to your HTML -->
<div id="difficulty-selector">
    <h3>Select Difficulty</h3>
    <button onclick="setDifficulty('easy')" class="diff-btn">
        😊 Easy<br>
        <small>Passive, predictable</small>
    </button>
    <button onclick="setDifficulty('medium')" class="diff-btn">
        😐 Medium<br>
        <small>Balanced play</small>
    </button>
    <button onclick="setDifficulty('hard')" class="diff-btn">
        😤 Hard<br>
        <small>Aggressive, smart</small>
    </button>
    <button onclick="setDifficulty('expert')" class="diff-btn">
        😈 Expert<br>
        <small>Master level AI</small>
    </button>
</div>
```

```css
/* Add to your CSS */
#difficulty-selector {
    display: flex;
    gap: 10px;
    margin: 20px 0;
}

.diff-btn {
    flex: 1;
    padding: 15px;
    font-size: 1em;
}

.diff-btn small {
    display: block;
    font-size: 0.8em;
    margin-top: 5px;
}
```

---

## 🎯 Your Tasks

1. **Implement Difficulty System:**
   - [ ] Add difficulty to game state
   - [ ] Implement `setDifficulty()`
   - [ ] Create 4 personality presets
   - [ ] Add difficulty selector UI

2. **Implement Decision Making:**
   - [ ] Implement `gatherGameContext()`
   - [ ] Implement `calculateActionWeights()`
   - [ ] Implement `adjustWeightsForDifficulty()`
   - [ ] Implement `selectWeightedAction()`

3. **Implement Main AI:**
   - [ ] Implement `intelligentDealerAction()`
   - [ ] Implement `executeAction()`
   - [ ] Implement `calculateBetSize()`
   - [ ] Implement `calculateRaiseSize()`
   - [ ] Replace old `dealerAction()`

4. **Test Each Difficulty:**
   - [ ] Play 10 hands on Easy
   - [ ] Play 10 hands on Medium
   - [ ] Play 10 hands on Hard
   - [ ] Play 10 hands on Expert
   - [ ] Verify behavior feels different

---

## 🐛 Testing Scenarios

### Easy Mode Testing
- Dealer should fold often
- Rarely bluffs
- Calls with weak hands
- Predictable betting

### Medium Mode Testing
- Balanced decisions
- Occasional bluffs
- Makes sense most of the time
- Fun to play against

### Hard Mode Testing
- Aggressive betting
- Frequent bluffs
- Hard to predict
- Challenging opponent

### Expert Mode Testing
- Very aggressive
- Bluffs often
- Hard to play against
- Feels like a pro

---

## 🏆 Success Criteria

Your AI should:
- ✅ Make logical decisions based on hand strength
- ✅ Consider pot odds and bet sizes
- ✅ Feel different on each difficulty
- ✅ Be challenging without being frustrating
- ✅ Vary betting patterns
- ✅ Use console logs to explain decisions

---

## 💡 Common Issues

### Issue: AI always makes same decision
**Solution:** Check that weights are being calculated. Add console.logs:
```javascript
console.log('Weights before selection:', weights);
```

### Issue: AI folds too much on Easy
**Solution:** Lower the fold weight multiplier:
```javascript
weights.fold *= (1 + personality.foldFrequency * 0.5); // Not full multiplier
```

### Issue: Expert doesn't feel harder than Hard
**Solution:** Increase aggression and bluff frequency more dramatically:
```javascript
case 'expert':
    gameState.dealerPersonality = {
        bluffFrequency: 0.35,  // Even higher
        aggression: 0.9,       // Max aggression
        // ...
    };
```

---

## 🎓 Advanced Enhancements

1. **Named Personalities**
   - "The Rock" (tight passive)
   - "The Maniac" (loose aggressive)
   - "The Professor" (tight aggressive)

2. **Dynamic Difficulty**
   - AI gets harder as you win
   - Gets easier as you lose
   - Keeps challenge balanced

3. **Personality Display**
   - Show dealer's "mood"
   - "Dealer is playing aggressively!"
   - "Dealer is on tilt!"

4. **AI Stats**
   - Track bluff success rate
   - Show win rate by difficulty
   - Compare your performance

---

**Time Estimate:** 90-120 minutes

**Next:** Exercise 3 - Opponent Modeling & Adaptation
