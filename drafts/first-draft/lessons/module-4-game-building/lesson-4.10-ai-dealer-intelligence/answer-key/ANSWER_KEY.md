# Answer Key - AI Dealer Intelligence

**Complete solutions with grading rubric**

---

## 📝 Exercise 1: Enhanced Hand Evaluation

### Solution

```javascript
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
                    gaps = 999;
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
        straightPossible = maxGap <= 4;
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
    
    if (rank >= 7) return 'monster';
    if (rank >= 4) return 'strong';
    if (rank >= 2) return 'made-hand';
    if (rank === 1 && handEvaluation.highCard >= 12) return 'high-card';
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
```

### Grading Rubric (200 points)

| Criteria | Points | Description |
|----------|--------|-------------|
| **hasTopPairOrBetter()** | 30 | |
| - Correct logic | 15 | Checks if hole card matches high board card |
| - Edge cases handled | 10 | Pre-flop, no cards, etc. |
| - Code quality | 5 | Clean, readable |
| **hasOverpair()** | 30 | |
| - Correct logic | 15 | Pocket pair beats high board card |
| - Edge cases handled | 10 | Not a pair, pre-flop, etc. |
| - Code quality | 5 | Clean, readable |
| **evaluateDraws()** | 50 | |
| - Flush draw detection | 15 | Exactly 4 cards of same suit |
| - Straight draw detection | 20 | Open-ended and gutshot |
| - Combo draw detection | 10 | Both flush and straight |
| - Code quality | 5 | Clean, readable |
| **analyzeBoardTexture()** | 50 | |
| - Flush possible | 10 | 3+ same suit |
| - Straight possible | 10 | Cards close enough |
| - Paired detection | 10 | Board has pair |
| - Texture classification | 15 | Correct texture type |
| - Danger level | 5 | Appropriate danger value |
| **categorizeHand()** | 20 | |
| - Correct categories | 15 | Proper rank ranges |
| - Code quality | 5 | Clean, readable |
| **evaluateHandStrength()** | 20 | |
| - Integration | 15 | Calls all helpers correctly |
| - Return format | 5 | Complete object |
| **TOTAL** | **200** | |

---

## 📝 Exercise 2: Difficulty Levels & Decision Making

### Solution

```javascript
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
        weights.check = 15;
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
        weights.bet = 15;
    } else { // weak
        weights.fold = 60;
        weights.check = 30;
        weights.call = 5;
        weights.bet = 5;
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
        weights.call *= 1.5;
    }
    
    // Can't do certain actions
    if (context.toCall === 0) {
        weights.call = 0;
        weights.fold = 0;
    } else {
        weights.check = 0;
        weights.bet = 0;
    }
    
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
    
    weights.bet *= (1 + p.aggression * 0.5);
    weights.raise *= (1 + p.aggression * 0.7);
    weights.call *= (1 - p.aggression * 0.3);
    weights.fold *= (1 + p.foldFrequency);
    
    if (handEval.handCategory === 'made-hand' || handEval.handCategory === 'high-card') {
        weights.call *= (1 + p.callDownFrequency * 0.5);
    }
    
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
        multiplier = Math.random() < 0.3 ? 0.3 : 0.9;
    } else if (handEval.handCategory === 'strong') {
        multiplier = 0.6 + Math.random() * 0.3;
    } else if (handEval.handCategory === 'made-hand') {
        multiplier = 0.4 + Math.random() * 0.3;
    } else {
        multiplier = 0.5 + Math.random() * 0.3;
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
        multiplier = 0.5 + Math.random() * 0.7;
    } else if (handEval.handCategory === 'strong') {
        multiplier = 0.6 + Math.random() * 0.4;
    } else {
        multiplier = 0.6 + Math.random() * 0.3;
    }
    
    let raiseAmount = toCall + Math.floor(potSize * multiplier);
    raiseAmount = Math.max(raiseAmount, toCall + gameState.bigBlind);
    raiseAmount = Math.min(raiseAmount, gameState.dealerChips);
    return raiseAmount;
}

function intelligentDealerAction() {
    const context = gatherGameContext();
    const handEval = evaluateHandStrength(gameState.dealerHoleCards, gameState.communityCards);
    let weights = calculateActionWeights(handEval, context);
    weights = adjustWeightsForDifficulty(weights, handEval);
    const action = selectWeightedAction(weights);
    executeAction(action, handEval, context);
}

function executeAction(action, handEval, context) {
    if (action === 'fold') dealerFold();
    else if (action === 'check') dealerCheck();
    else if (action === 'call') dealerCall();
    else if (action === 'bet') dealerBet(calculateBetSize(handEval, context));
    else if (action === 'raise') dealerRaise(calculateRaiseSize(handEval, context));
    else if (action === 'allIn') dealerAllIn();
}
```

### Grading Rubric (250 points)

| Criteria | Points | Description |
|----------|--------|-------------|
| **setDifficulty()** | 40 | |
| - Four presets | 20 | Easy, medium, hard, expert |
| - Balanced values | 15 | Values make sense |
| - Code quality | 5 | Clean implementation |
| **gatherGameContext()** | 30 | |
| - All properties | 20 | toCall, pot, odds, chips, etc. |
| - Pot odds calculation | 5 | Correct formula |
| - Code quality | 5 | Clean, readable |
| **calculateActionWeights()** | 60 | |
| - Base weights | 20 | Correct for each category |
| - Draw adjustments | 10 | Increase call/bet weights |
| - Board adjustments | 10 | More cautious on danger |
| - Pot odds adjustments | 10 | Call more on good odds |
| - Action constraints | 10 | Can't call/fold on free |
| **adjustWeightsForDifficulty()** | 50 | |
| - Aggression | 15 | Increases bet/raise |
| - Fold frequency | 10 | Increases folds |
| - Call down | 10 | Calls more with made hands |
| - Slowplay | 10 | Traps with monsters |
| - Code quality | 5 | Clean implementation |
| **selectWeightedAction()** | 30 | |
| - Weighted random | 20 | Correct algorithm |
| - Edge cases | 5 | Total = 0 |
| - Code quality | 5 | Clean, readable |
| **Bet Sizing** | 40 | |
| - calculateBetSize() | 20 | Varies by hand strength |
| - calculateRaiseSize() | 20 | Appropriate sizing |
| **TOTAL** | **250** | |

---

## 📝 Exercise 3: Opponent Modeling & Adaptation

### Solution

```javascript
function trackPlayerAction(action, amount = 0) {
    const stats = gameState.playerStats;
    
    if (action === 'bet') stats.totalBets++;
    else if (action === 'raise') stats.totalRaises++;
    else if (action === 'call') stats.totalCalls++;
    else if (action === 'fold') stats.totalFolds++;
    else if (action === 'check') stats.totalChecks++;
}

function updatePlayerModel() {
    const stats = gameState.playerStats;
    const handsPlayed = stats.handsPlayed;
    
    if (handsPlayed < 5) {
        gameState.playerModel.type = 'unknown';
        gameState.playerModel.confidence = 0;
        return;
    }
    
    const aggressionFactor = (stats.totalBets + stats.totalRaises) / handsPlayed;
    const foldFrequency = stats.totalFolds / handsPlayed;
    const callFrequency = stats.totalCalls / handsPlayed;
    
    gameState.playerModel.tendencies = {
        aggressionFactor,
        foldFrequency,
        callFrequency
    };
    
    let playerType = 'balanced';
    
    if (aggressionFactor > 0.6 && foldFrequency < 0.3) {
        playerType = 'aggressive-loose';
    } else if (aggressionFactor > 0.6 && foldFrequency > 0.4) {
        playerType = 'aggressive-tight';
    } else if (aggressionFactor < 0.3 && callFrequency > 0.4) {
        playerType = 'passive-loose';
    } else if (aggressionFactor < 0.3 && foldFrequency > 0.4) {
        playerType = 'passive-tight';
    }
    
    gameState.playerModel.type = playerType;
    gameState.playerModel.confidence = Math.min(handsPlayed / 20, 1.0);
}

function adjustStrategyForOpponent(weights, handEval) {
    const model = gameState.playerModel;
    if (model.confidence < 0.2) return weights;
    
    const confidence = model.confidence;
    const type = model.type;
    
    if (type === 'aggressive-loose') {
        weights.call *= (1 + 0.5 * confidence);
        weights.fold *= (1 - 0.3 * confidence);
        
        if (handEval.handCategory === 'monster' || handEval.handCategory === 'strong') {
            weights.check *= (1 + 0.7 * confidence);
            weights.call *= (1 + 0.5 * confidence);
        }
    } else if (type === 'aggressive-tight') {
        weights.fold *= (1 + 0.4 * confidence);
        weights.call *= (1 - 0.3 * confidence);
        
        if (handEval.handCategory === 'weak' || handEval.handCategory === 'high-card') {
            weights.fold *= (1 + 0.5 * confidence);
        }
    } else if (type === 'passive-loose') {
        weights.bet *= (1 + 0.5 * confidence);
        weights.raise *= (1 + 0.3 * confidence);
        
        if (handEval.handCategory === 'weak' || handEval.handCategory === 'high-card') {
            weights.bet *= (1 - 0.6 * confidence);
            weights.fold *= (1 + 0.5 * confidence);
        }
    } else if (type === 'passive-tight') {
        weights.bet *= (1 + 0.6 * confidence);
        
        if (handEval.handCategory === 'weak' || handEval.handCategory === 'high-card') {
            weights.bet *= (1 + 0.8 * confidence);
        }
        
        if (gameState.currentBet > gameState.dealerBet) {
            weights.fold *= (1 + 0.5 * confidence);
        }
    }
    
    return weights;
}
```

### Grading Rubric (150 points)

| Criteria | Points | Description |
|----------|--------|-------------|
| **trackPlayerAction()** | 30 | |
| - All actions tracked | 20 | Bet, raise, call, fold, check |
| - Integration | 5 | Called from betting functions |
| - Code quality | 5 | Clean implementation |
| **updatePlayerModel()** | 60 | |
| - Metrics calculation | 20 | Aggression, fold %, call % |
| - Player type classification | 25 | All 5 types correct |
| - Confidence building | 10 | 0 to 1.0 over 20 hands |
| - Code quality | 5 | Clean, readable |
| **adjustStrategyForOpponent()** | 60 | |
| - Confidence check | 10 | Return early if low |
| - LAG counter-strategy | 12 | Call down, trap |
| - TAG counter-strategy | 12 | Respect, fold more |
| - Calling station counter | 12 | Value bet, no bluffs |
| - Rock counter-strategy | 12 | Bluff more, fold to bets |
| - Code quality | 2 | Clean implementation |
| **TOTAL** | **150** | |

---

## 🎯 Overall Assessment

### Total Points: 600

- **Exercise 1:** 200 points
- **Exercise 2:** 250 points
- **Exercise 3:** 150 points

### Grade Scale

| Grade | Points | Description |
|-------|--------|-------------|
| **A+** | 570-600 | Exceptional - Perfect implementation |
| **A** | 540-569 | Excellent - Minor issues only |
| **A-** | 510-539 | Very good - Some improvements needed |
| **B+** | 480-509 | Good - Several issues to address |
| **B** | 450-479 | Satisfactory - Works but needs polish |
| **B-** | 420-449 | Adequate - Significant improvements needed |
| **C** | 360-419 | Needs work - Major issues |
| **Below C** | <360 | Incomplete - Retry lesson |

---

## 🔍 Common Mistakes

### Exercise 1

1. **Not checking array lengths**
   - Causes crashes on pre-flop
   - Always check `length > 0` first

2. **Wrong straight draw logic**
   - Missing gutshot draws
   - Not handling wheel (A-2-3-4-5)

3. **Board texture too simple**
   - Not considering paired boards
   - Danger levels not calibrated

### Exercise 2

4. **Weights don't make sense**
   - Betting with weak hands too much
   - Folding with monsters

5. **Difficulty levels too similar**
   - Easy mode still too hard
   - Expert not challenging enough

6. **Bet sizing too static**
   - Same size every time
   - Not adjusting for hand strength

### Exercise 3

7. **Not tracking actions**
   - Forgot to call `trackPlayerAction()`
   - Stats never update

8. **Classification thresholds wrong**
   - Everyone becomes "balanced"
   - Not enough differentiation

9. **Counter-strategies too aggressive**
   - Weight multipliers too high (5.0 instead of 1.5)
   - AI becomes erratic

---

## ✅ Testing Checklist

### Functionality
- [ ] All helper functions work correctly
- [ ] Four difficulty levels feel different
- [ ] AI makes logical decisions
- [ ] Adaptation is noticeable
- [ ] No crashes or errors

### Balance
- [ ] Easy mode loses most of time
- [ ] Medium mode is competitive
- [ ] Hard mode is challenging
- [ ] Expert mode is very difficult

### Code Quality
- [ ] Functions have clear names
- [ ] Comments explain complex logic
- [ ] No magic numbers
- [ ] Error handling present
- [ ] Consistent style

---

## 🚀 Extensions

If students want to go further:

1. **Add more personality presets**
   - Maniac (bluffs 50%)
   - Nit (folds 70%)
   - Custom difficulty creator

2. **Track more statistics**
   - Average bet size
   - Showdown win rate
   - Continuation bet frequency

3. **More sophisticated classification**
   - Consider bet sizing patterns
   - Track position-based tendencies
   - Detect specific moves (check-raise, etc.)

4. **Visual feedback**
   - Display player type classification
   - Show confidence meter
   - Highlight adapted strategies

5. **Machine learning**
   - Save player models between sessions
   - Learn optimal counter-strategies
   - A/B test different approaches

---

**Great work completing the most advanced lesson in the module!** 🏆
