# Exercise 3: Opponent Modeling & Adaptation

**Teach your AI to learn from your playing style and adapt its strategy**

**Estimated Time:** 90-120 minutes  
**Difficulty:** Expert Level

---

## 🎯 Objective

Create an adaptive AI that:
- Tracks your playing patterns
- Classifies your player type
- Adjusts strategy to exploit your weaknesses
- Gets smarter over time

---

## 📋 Step-by-Step Instructions

### Step 1: Add Player Tracking to Game State

```javascript
let gameState = {
    // ... existing properties ...
    
    // NEW: Player statistics
    playerStats: {
        handsPlayed: 0,
        totalBets: 0,
        totalRaises: 0,
        totalCalls: 0,
        totalFolds: 0,
        totalChecks: 0,
        
        // Calculated metrics
        aggressionFactor: 0,     // (bets + raises) / hands
        foldFrequency: 0,        // folds / hands
        callFrequency: 0,        // calls / hands
        
        // Bluff tracking
        bluffsCaught: 0,
        bluffsSucceeded: 0,
        
        // Showdown data
        showdowns: 0,
        showdownWins: 0
    },
    
    // Player model
    playerModel: {
        type: 'unknown',         // 'aggressive-loose', 'aggressive-tight', etc.
        confidence: 0,           // 0-1, how sure we are
        tendencies: {}
    }
};
```

### Step 2: Track Player Actions

```javascript
function trackPlayerAction(action, amount = 0) {
    const stats = gameState.playerStats;
    
    // Don't track blinds as voluntary actions
    if (gameState.bettingRound === 'pre-flop' && 
        gameState.playerBetThisRound === gameState.bigBlind &&
        action === 'call') {
        return; // This was just posting the blind
    }
    
    stats.handsPlayed++;
    
    console.log(`Tracking player action: ${action}`);
    
    switch(action) {
        case 'bet':
        case 'raise':
            stats.totalBets++;
            if (action === 'raise') stats.totalRaises++;
            break;
            
        case 'call':
            stats.totalCalls++;
            break;
            
        case 'fold':
            stats.totalFolds++;
            break;
            
        case 'check':
            stats.totalChecks++;
            break;
    }
    
    // Update calculated metrics
    updatePlayerMetrics();
    
    // Update player model
    if (stats.handsPlayed >= 5) {
        updatePlayerModel();
    }
}

function updatePlayerMetrics() {
    const stats = gameState.playerStats;
    
    if (stats.handsPlayed === 0) return;
    
    // Aggression = (bets + raises) / hands
    stats.aggressionFactor = (stats.totalBets + stats.totalRaises) / stats.handsPlayed;
    
    // Fold frequency
    stats.foldFrequency = stats.totalFolds / stats.handsPlayed;
    
    // Call frequency
    stats.callFrequency = stats.totalCalls / stats.handsPlayed;
    
    console.log('Updated metrics:', {
        aggression: stats.aggressionFactor.toFixed(2),
        foldFreq: stats.foldFrequency.toFixed(2),
        callFreq: stats.callFrequency.toFixed(2)
    });
}
```

### Step 3: Integrate Tracking into Game

```javascript
// Update your existing action functions:

function bet(amount) {
    // ... existing bet code ...
    
    // After bet is successful:
    trackPlayerAction('bet', amount);
    
    return true;
}

function call() {
    // ... existing call code ...
    
    trackPlayerAction('call', toCall);
    
    return true;
}

function raise(raiseAmount) {
    // ... existing raise code ...
    
    trackPlayerAction('raise', raiseAmount);
    
    return true;
}

function fold() {
    // ... existing fold code ...
    
    trackPlayerAction('fold');
}

function check() {
    // ... existing check code ...
    
    trackPlayerAction('check');
    
    return true;
}
```

### Step 4: Classify Player Type

```javascript
function updatePlayerModel() {
    const stats = gameState.playerStats;
    const hands = stats.handsPlayed;
    
    if (hands < 5) {
        console.log('Not enough hands to model player yet');
        return;
    }
    
    const aggression = stats.aggressionFactor;
    const foldFreq = stats.foldFrequency;
    const callFreq = stats.callFrequency;
    
    console.log('\n=== Updating Player Model ===');
    console.log(`Hands played: ${hands}`);
    console.log(`Aggression: ${aggression.toFixed(2)}`);
    console.log(`Fold frequency: ${foldFreq.toFixed(2)}`);
    console.log(`Call frequency: ${callFreq.toFixed(2)}`);
    
    // Classify player type
    let playerType = 'unknown';
    let confidence = Math.min(hands / 20, 1.0); // More confident with more hands
    
    // High aggression (bets/raises often)
    if (aggression > 0.6) {
        if (foldFreq < 0.3) {
            playerType = 'aggressive-loose';  // LAG (Loose-Aggressive Gambler)
        } else {
            playerType = 'aggressive-tight';  // TAG (Tight-Aggressive)
        }
    }
    // Low aggression (passive)
    else if (aggression < 0.3) {
        if (callFreq > 0.4) {
            playerType = 'passive-loose';     // Calling station
        } else {
            playerType = 'passive-tight';     // Rock/Nit
        }
    }
    // Balanced
    else {
        playerType = 'balanced';
    }
    
    gameState.playerModel = {
        type: playerType,
        confidence: confidence,
        aggression: aggression,
        foldFrequency: foldFreq,
        callFrequency: callFreq,
        tendencies: getPlayerTendencies(playerType)
    };
    
    console.log(`Player classified as: ${playerType} (${(confidence * 100).toFixed(0)}% confident)`);
    console.log('Tendencies:', gameState.playerModel.tendencies);
    console.log('===========================\n');
}

function getPlayerTendencies(playerType) {
    switch(playerType) {
        case 'aggressive-loose':
            // LAG - bets/raises often, doesn't fold much
            return {
                bluffsOften: true,
                callsLight: true,
                respectsBets: false,
                easyToTrap: true,
                counterStrategy: 'trap with strong hands, call down more',
                description: 'Aggressive Loose (LAG) - Bets and raises frequently, plays many hands'
            };
            
        case 'aggressive-tight':
            // TAG - selective but aggressive
            return {
                selectiveAggression: true,
                respectsBets: true,
                hardToBluff: true,
                strongRange: true,
                counterStrategy: 'avoid confrontation without premium hands',
                description: 'Tight Aggressive (TAG) - Selective but aggressive, usually has it'
            };
            
        case 'passive-loose':
            // Calling station
            return {
                callsTooMuch: true,
                hardToBluffOut: true,
                rarelyRaises: true,
                weakRange: true,
                counterStrategy: 'value bet thin, avoid bluffs',
                description: 'Calling Station - Calls too much, rarely folds or raises'
            };
            
        case 'passive-tight':
            // Rock/Nit
            return {
                foldsOften: true,
                easyToBluff: true,
                onlyBetsNuts: true,
                veryTightRange: true,
                counterStrategy: 'bluff frequently, fold to their bets',
                description: 'Rock (Nit) - Folds too much, only bets with strong hands'
            };
            
        case 'balanced':
            return {
                balanced: true,
                difficultToExploit: true,
                counterStrategy: 'play solid poker',
                description: 'Balanced Player - Solid, well-rounded strategy'
            };
            
        default:
            return {
                unknown: true,
                counterStrategy: 'gather more data',
                description: 'Unknown - Need more hands to classify'
            };
    }
}
```

### Step 5: Adjust Strategy for Opponent

```javascript
function adjustStrategyForOpponent(weights, handEval, context) {
    const model = gameState.playerModel;
    
    // Need enough data to adapt
    if (!model || model.type === 'unknown' || model.confidence < 0.3) {
        console.log('Not enough data to adapt strategy');
        return weights;
    }
    
    const tendencies = model.tendencies;
    const adaptRate = model.confidence; // More confident = adapt more
    
    console.log(`Adapting strategy for ${model.type} player (${(adaptRate * 100).toFixed(0)}% confidence)`);
    
    // Adjust based on player type
    
    // Against AGGRESSIVE-LOOSE (LAG)
    if (tendencies.bluffsOften && tendencies.callsLight) {
        // They bluff often - call them down more
        weights.call *= (1 + adaptRate * 0.5);
        weights.fold *= (1 - adaptRate * 0.3);
        
        // They call light - value bet more, bluff less
        if (handEval.handCategory === 'made-hand' || handEval.handCategory === 'strong') {
            weights.bet *= (1 + adaptRate * 0.4);
            weights.raise *= (1 + adaptRate * 0.3);
        }
        
        // Trap them with strong hands
        if (handEval.handCategory === 'monster') {
            weights.check *= (1 + adaptRate * 0.5);  // Let them bet
            weights.call *= (1 + adaptRate * 0.3);
        }
        
        console.log('Adapting for LAG: calling down more, trapping with strong hands');
    }
    
    // Against AGGRESSIVE-TIGHT (TAG)
    else if (tendencies.selectiveAggression && tendencies.strongRange) {
        // They're selective - when they bet, they have it
        weights.fold *= (1 + adaptRate * 0.4);
        weights.call *= (1 - adaptRate * 0.3);
        
        // Don't bluff them
        if (handEval.handCategory === 'weak' || handEval.handCategory === 'high-card') {
            weights.bet *= (1 - adaptRate * 0.4);
            weights.raise *= (1 - adaptRate * 0.5);
        }
        
        // Steal pots when they check
        if (context.toCall === 0) {
            weights.bet *= (1 + adaptRate * 0.3);
        }
        
        console.log('Adapting for TAG: respecting their bets, stealing when weak');
    }
    
    // Against PASSIVE-LOOSE (Calling Station)
    else if (tendencies.callsTooMuch && tendencies.hardToBluffOut) {
        // Don't bluff - they call everything
        if (handEval.handCategory === 'weak' || handEval.handCategory === 'high-card') {
            weights.bet *= (1 - adaptRate * 0.6);
            weights.raise *= (1 - adaptRate * 0.7);
            weights.check *= (1 + adaptRate * 0.5);
        }
        
        // Value bet thin - they'll call with worse
        if (handEval.handCategory === 'made-hand') {
            weights.bet *= (1 + adaptRate * 0.5);
        }
        
        console.log('Adapting for Calling Station: value betting, never bluffing');
    }
    
    // Against PASSIVE-TIGHT (Rock)
    else if (tendencies.foldsOften && tendencies.easyToBluff) {
        // Bluff them frequently
        weights.bet *= (1 + adaptRate * 0.6);
        weights.raise *= (1 + adaptRate * 0.5);
        weights.fold *= (1 - adaptRate * 0.4);
        
        // When they bet, they have it - fold
        if (context.toCall > 0 && handEval.handCategory !== 'strong' && handEval.handCategory !== 'monster') {
            weights.fold *= (1 + adaptRate * 0.5);
            weights.call *= (1 - adaptRate * 0.4);
        }
        
        console.log('Adapting for Rock: bluffing frequently, folding to their bets');
    }
    
    return weights;
}
```

### Step 6: Integrate Adaptation into AI

Update your main AI function:

```javascript
function intelligentDealerAction() {
    console.log('\n=== Intelligent Dealer Decision ===');
    
    const context = gatherGameContext();
    const handEval = evaluateHandStrength(gameState.dealerHand, gameState.communityCards);
    
    console.log(`Hand: ${handEval.name} (${handEval.handCategory})`);
    console.log(`Board: ${handEval.boardTexture.texture}`);
    
    // Calculate base weights
    let weights = calculateActionWeights(handEval, context);
    
    // Adjust for difficulty
    weights = adjustWeightsForDifficulty(weights, handEval, context);
    
    // NEW: Adjust for opponent model (if difficulty allows)
    if (gameState.dealerPersonality.adaptability > 0) {
        weights = adjustStrategyForOpponent(weights, handEval, context);
    }
    
    // Select and execute action
    const action = selectWeightedAction(weights, context);
    console.log(`\nFinal decision: ${action.toUpperCase()}\n`);
    
    executeAction(action, context, handEval);
}
```

### Step 7: Add Adaptability to Difficulty Settings

Update your difficulty settings to include adaptability:

```javascript
function setDifficulty(level) {
    gameState.difficulty = level;
    
    switch(level) {
        case 'easy':
            gameState.dealerPersonality = {
                // ... existing properties ...
                adaptability: 0.0  // No adaptation
            };
            break;
            
        case 'medium':
            gameState.dealerPersonality = {
                // ... existing properties ...
                adaptability: 0.3  // Some adaptation
            };
            break;
            
        case 'hard':
            gameState.dealerPersonality = {
                // ... existing properties ...
                adaptability: 0.6  // Good adaptation
            };
            break;
            
        case 'expert':
            gameState.dealerPersonality = {
                // ... existing properties ...
                adaptability: 1.0  // Full adaptation
            };
            break;
    }
    
    console.log('Personality set:', gameState.dealerPersonality);
}
```

### Step 8: Display Player Model (Optional)

Add UI to show what the AI thinks of you:

```html
<!-- Add to HTML -->
<div id="player-model-display" style="display: none;">
    <h3>🤖 AI Analysis</h3>
    <p id="player-type">Player Type: <strong>Unknown</strong></p>
    <p id="player-confidence">Confidence: <strong>0%</strong></p>
    <p id="player-description"></p>
    <p id="counter-strategy"></p>
</div>

<button onclick="togglePlayerModel()">Show AI Analysis</button>
```

```javascript
function togglePlayerModel() {
    const display = document.getElementById('player-model-display');
    const isVisible = display.style.display !== 'none';
    
    if (isVisible) {
        display.style.display = 'none';
    } else {
        updatePlayerModelDisplay();
        display.style.display = 'block';
    }
}

function updatePlayerModelDisplay() {
    const model = gameState.playerModel;
    const stats = gameState.playerStats;
    
    document.getElementById('player-type').innerHTML = 
        `Player Type: <strong>${model.type}</strong>`;
    
    document.getElementById('player-confidence').innerHTML = 
        `Confidence: <strong>${(model.confidence * 100).toFixed(0)}%</strong> (${stats.handsPlayed} hands)`;
    
    if (model.tendencies.description) {
        document.getElementById('player-description').textContent = 
            model.tendencies.description;
        
        document.getElementById('counter-strategy').textContent = 
            `Counter-strategy: ${model.tendencies.counterStrategy}`;
    }
}
```

### Step 9: Periodic Adaptation Check

Add this to run every few hands:

```javascript
function checkAdaptation() {
    // Run every 5 hands
    if (gameState.handNumber % 5 === 0 && gameState.playerStats.handsPlayed >= 5) {
        console.log('\n🔄 Periodic adaptation check...');
        updatePlayerModel();
    }
}

// Call this in your startNewRound() function:
function startNewRound() {
    // ... existing code ...
    
    checkAdaptation();
    
    // ... rest of code ...
}
```

---

## 🎯 Your Tasks

1. **Implement Player Tracking:**
   - [ ] Add playerStats to game state
   - [ ] Implement `trackPlayerAction()`
   - [ ] Implement `updatePlayerMetrics()`
   - [ ] Integrate tracking into all action functions

2. **Implement Player Modeling:**
   - [ ] Implement `updatePlayerModel()`
   - [ ] Implement `getPlayerTendencies()`
   - [ ] Test with different play styles

3. **Implement Adaptation:**
   - [ ] Implement `adjustStrategyForOpponent()`
   - [ ] Add adaptability to difficulty settings
   - [ ] Integrate into main AI function
   - [ ] Implement `checkAdaptation()`

4. **Add UI (Optional):**
   - [ ] Create player model display
   - [ ] Implement `togglePlayerModel()`
   - [ ] Implement `updatePlayerModelDisplay()`

5. **Test Adaptation:**
   - [ ] Play tight - AI should bluff more
   - [ ] Play loose - AI should value bet more
   - [ ] Play aggressive - AI should trap more
   - [ ] Play passive - AI should bluff more

---

## 🐛 Testing Scenarios

### Test 1: Play Tight/Passive
- Fold most hands
- Only bet with strong hands
- AI should classify you as "passive-tight"
- AI should bluff you more
- AI should fold to your bets

### Test 2: Play Loose/Aggressive
- Play many hands
- Bet and raise frequently
- AI should classify you as "aggressive-loose"
- AI should call you down more
- AI should trap with strong hands

### Test 3: Play Balanced
- Mix of actions
- AI should classify as "balanced"
- AI should play solid poker

### Test 4: Adaptation Over Time
- Start tight, then switch to loose
- AI should adapt after 10-15 hands
- Check console logs for reclassification

---

## 🏆 Success Criteria

Your adaptive AI should:
- ✅ Track all player actions accurately
- ✅ Calculate aggression and fold frequency correctly
- ✅ Classify player type after 5-10 hands
- ✅ Adjust strategy based on player type
- ✅ Get more confident with more hands
- ✅ Respond appropriately to different play styles
- ✅ Log its reasoning in console

---

## 💡 Advanced Enhancements

1. **Detailed Stat Tracking**
   - Track by betting round (pre-flop, post-flop)
   - Track by position
   - Track bet sizing patterns

2. **Bluff Detection**
   - Track when player shows weak hands
   - Adjust bluff calling frequency
   - Remember specific situations

3. **Session Memory**
   - Save player model to localStorage
   - Remember player across games
   - Long-term adaptation

4. **Multiple Strategies**
   - Random strategy switching
   - Prevent player from reading AI
   - Add unpredictability

5. **Exploitability Meter**
   - Show how exploitable player is
   - Suggest adjustments
   - Educational tool

---

## 🎓 Real Poker Concepts

Your AI now implements real poker theory:

**Player Types:**
- **LAG** (Loose-Aggressive Gambler) - Plays many hands aggressively
- **TAG** (Tight-Aggressive) - Selective but aggressive when playing
- **Calling Station** - Calls too much, hard to bluff
- **Rock/Nit** - Too tight, easy to exploit

**Counter-Strategies:**
- Against LAG: Call down, trap with monsters
- Against TAG: Avoid confrontation, respect bets
- Against Station: Value bet, never bluff
- Against Rock: Bluff frequently, fold to bets

**Adaptation:**
- Good players adjust to opponents
- Exploiting weaknesses wins money
- Balance between exploiting and being exploited

---

**Time Estimate:** 90-120 minutes

**Congratulations!** You've built professional-level adaptive poker AI! This is exactly how real poker bots work!

**Next:** Complete resources, examples, and answer key files!
