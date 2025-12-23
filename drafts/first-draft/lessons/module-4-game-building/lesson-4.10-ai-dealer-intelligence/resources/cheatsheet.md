# AI Dealer Intelligence - Quick Reference

**Fast lookup for all AI concepts and functions**

---

## 🎯 Core AI Functions

### Enhanced Hand Evaluation
```javascript
// Returns comprehensive hand analysis
evaluateHandStrength(holeCards, communityCards)
// Returns: { rank, name, topPairOrBetter, overpair, 
//            draws, boardTexture, handCategory }

hasTopPairOrBetter(holeCards, communityCards)
// Returns: boolean

hasOverpair(holeCards, communityCards)
// Returns: boolean

evaluateDraws(holeCards, communityCards)
// Returns: { flushDraw, straightDraw, comboDraw }

analyzeBoardTexture(communityCards)
// Returns: { texture, danger, flushPossible, 
//            straightPossible, paired }

categorizeHand(handEvaluation)
// Returns: 'monster', 'strong', 'made-hand', 'high-card', 'weak'
```

---

## 🎮 Difficulty System

### Difficulty Levels
```javascript
setDifficulty('easy')     // 😊 Passive, predictable
setDifficulty('medium')   // 😐 Balanced
setDifficulty('hard')     // 😤 Aggressive, smart
setDifficulty('expert')   // 😈 Master level
```

### Personality Properties
```javascript
dealerPersonality: {
    bluffFrequency: 0.0-0.3,      // How often to bluff
    aggression: 0.0-1.0,           // Bet/raise tendency
    callDownFrequency: 0.2-0.6,    // Call light tendency
    foldFrequency: 0.15-0.5,       // Fold tendency
    slowplayFrequency: 0.0-0.25,   // Trap frequency
    adaptability: 0.0-1.0          // Learning rate
}
```

---

## 🧠 Decision Making

### Main AI Flow
```javascript
intelligentDealerAction()
  → gatherGameContext()
  → evaluateHandStrength()
  → calculateActionWeights()
  → adjustWeightsForDifficulty()
  → adjustStrategyForOpponent()
  → selectWeightedAction()
  → executeAction()
```

### Context Gathering
```javascript
gatherGameContext()
// Returns: {
//   toCall, potSize, potOdds,
//   dealerChips, playerChips,
//   bettingRound, playerBet,
//   dealerPosition, handNumber
// }
```

### Action Weights
```javascript
calculateActionWeights(handEval, context)
// Returns: {
//   fold: 0-100,
//   check: 0-100,
//   call: 0-100,
//   bet: 0-100,
//   raise: 0-100,
//   allIn: 0-100
// }
```

---

## 📊 Hand Categories

| Category | Rank | Examples | Strategy |
|----------|------|----------|----------|
| **Monster** | 7-10 | Full house, quads, straight flush | Bet big or slowplay |
| **Strong** | 4-6 | Trips, straight, flush | Value bet |
| **Made Hand** | 2-3 | Pair, two pair | Bet cautiously |
| **High Card** | 1 | Ace high | Check or bluff |
| **Weak** | 0 | Nothing | Usually fold |

---

## 🎲 Board Textures

| Texture | Danger | Description | Strategy |
|---------|--------|-------------|----------|
| **Dry** | 1 | Rainbow, unconnected | Easier to bluff |
| **Paired** | 2 | Board has pair | Watch for trips |
| **Coordinated** | 3 | Flush OR straight possible | More cautious |
| **Very Coordinated** | 5 | Both flush AND straight | Very cautious |

---

## 👤 Player Types

### Aggressive-Loose (LAG)
- **Plays:** Many hands, bets often
- **Weaknesses:** Bluffs too much, calls light
- **Counter:** Call down, trap with monsters
```javascript
if (playerType === 'aggressive-loose') {
    weights.call *= 1.5;    // Call them down
    weights.fold *= 0.7;    // Don't fold as much
}
```

### Aggressive-Tight (TAG)
- **Plays:** Selective, but aggressive
- **Strengths:** Usually has strong hands
- **Counter:** Respect bets, avoid confrontation
```javascript
if (playerType === 'aggressive-tight') {
    weights.fold *= 1.4;    // Fold to their bets
    weights.call *= 0.7;    // Don't call light
}
```

### Passive-Loose (Calling Station)
- **Plays:** Calls too much, rarely folds
- **Weaknesses:** Can't fold, weak range
- **Counter:** Value bet, never bluff
```javascript
if (playerType === 'passive-loose') {
    weights.bet *= 1.5;     // Value bet more
    if (weak_hand) {
        weights.bet *= 0.4; // Don't bluff
    }
}
```

### Passive-Tight (Rock)
- **Plays:** Folds often, only bets nuts
- **Weaknesses:** Too tight, easy to bluff
- **Counter:** Bluff frequently, fold to bets
```javascript
if (playerType === 'passive-tight') {
    weights.bet *= 1.6;     // Bluff more
    weights.fold *= 1.5;    // Fold to their bets
}
```

---

## 📈 Player Tracking

### Track Actions
```javascript
trackPlayerAction('bet', amount)
trackPlayerAction('call', amount)
trackPlayerAction('raise', amount)
trackPlayerAction('fold')
trackPlayerAction('check')
```

### Metrics
```javascript
aggressionFactor = (totalBets + totalRaises) / handsPlayed
foldFrequency = totalFolds / handsPlayed
callFrequency = totalCalls / handsPlayed
```

### Update Model
```javascript
updatePlayerModel()  // Call after 5+ hands
// Sets: playerModel.type, confidence, tendencies
```

---

## 🎯 Bet Sizing

### Value Betting
```javascript
// Monster hands (trap or build pot)
betSize = potSize * (0.5 or 0.9)  // Vary

// Strong hands
betSize = potSize * (0.6 to 0.9)

// Made hands
betSize = potSize * (0.4 to 0.7)
```

### Bluff Sizing
```javascript
// Standard bluff
bluffSize = potSize * (0.5 to 0.75)

// Adjusted for aggression
bluffSize *= (1 + personality.aggression * 0.3)

// Adjusted for stack
if (stackToPot < 3) {
    bluffSize *= 1.3  // Bigger with short stack
}
```

---

## 🔧 Common Patterns

### Bluff Decision
```javascript
function shouldBluff(context, handEval) {
    let bluffChance = personality.bluffFrequency;
    
    // Scary board = easier to bluff
    if (boardDanger >= 4) bluffChance *= 1.5;
    
    // In position = more effective
    if (inPosition) bluffChance *= 1.3;
    
    // Small pot = bluff more
    if (smallPot) bluffChance *= 1.2;
    
    // Player folds often = bluff more
    if (playerFoldsOften) bluffChance *= 1.4;
    
    return Math.random() < bluffChance;
}
```

### Adaptation
```javascript
function checkAdaptation() {
    if (handNumber % 5 === 0 && handsPlayed >= 5) {
        updatePlayerModel();
    }
}
```

### Weighted Selection
```javascript
function selectWeightedAction(weights) {
    const total = sum(Object.values(weights));
    let random = Math.random() * total;
    
    for (let action in weights) {
        random -= weights[action];
        if (random <= 0) return action;
    }
}
```

---

## 🐛 Debugging

### Enable AI Logging
```javascript
console.log('=== Dealer Decision ===');
console.log('Hand:', handEval);
console.log('Context:', context);
console.log('Weights:', weights);
console.log('Decision:', action);
```

### Test Specific Scenario
```javascript
// Force specific difficulty
setDifficulty('expert');

// Force specific player type
gameState.playerModel.type = 'aggressive-loose';
gameState.playerModel.confidence = 1.0;

// Test decision
intelligentDealerAction();
```

### Verify Adaptation
```javascript
// Check player stats
console.log(gameState.playerStats);

// Check player model
console.log(gameState.playerModel);

// Check if AI is adapting
console.log('Adaptability:', gameState.dealerPersonality.adaptability);
```

---

## 💡 Quick Tips

### Making AI Smarter
1. **Increase danger threshold** for coordinated boards
2. **Add more bluff scenarios** (position, pot size)
3. **Track more stats** (bet sizing, showdown hands)
4. **Faster adaptation** (lower hand threshold)

### Making AI More Fun
1. **Add personality messages** ("Nice bluff!", "You got me!")
2. **Vary bet sizes** more (less predictable)
3. **Occasional "mistakes"** on easy mode
4. **Visual tells** (thinking animation)

### Balancing Difficulty
- **Easy:** Should lose 70% of time
- **Medium:** Should lose 50% of time
- **Hard:** Should win 50% of time
- **Expert:** Should win 60%+ of time

---

## 📚 Formula Reference

### Pot Odds
```javascript
potOdds = toCall / (pot + toCall)
// Example: $10 to call, $50 pot
// potOdds = 10 / 60 = 0.167 (16.7%)
```

### Expected Value
```javascript
EV = (potAfterCall * winProbability) - toCall
// Positive EV = good call
```

### Stack-to-Pot Ratio
```javascript
SPR = effectiveStack / pot
// SPR < 3 = commit or fold
// SPR 3-10 = normal play
// SPR > 10 = deep stack
```

---

## 🎮 Testing Checklist

### Basic AI
- [ ] Makes logical decisions
- [ ] Uses console logs
- [ ] Doesn't crash
- [ ] Feels fun to play

### Difficulty Levels
- [ ] Easy folds often
- [ ] Medium is balanced
- [ ] Hard is challenging
- [ ] Expert is very tough

### Adaptation
- [ ] Tracks player actions
- [ ] Classifies player type
- [ ] Adjusts strategy
- [ ] Gets smarter over time

### Edge Cases
- [ ] All-in situations
- [ ] Zero chips
- [ ] First hand (no data)
- [ ] Switching difficulties

---

**Keep this cheatsheet handy while coding!** 🚀
