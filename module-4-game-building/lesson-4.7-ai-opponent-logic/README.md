# Lesson 4.7: AI Opponent Logic 🤖

## 🎯 Lesson Objectives

By the end of this lesson, you will:
- Build AI players that can make betting decisions automatically
- Evaluate hand strength in different game situations
- Implement probability-based decision making
- Create different AI personalities (tight, loose, aggressive, passive)
- Add simple bluffing logic to make AI less predictable
- Balance AI difficulty to create engaging gameplay

## 📚 Introduction to AI for Card Games

### What Makes Good Game AI?

Good AI opponents should be:
- **Challenging but beatable** - Not too easy, not impossible
- **Varied** - Different playing styles keep it interesting
- **Fair** - Doesn't cheat or have perfect information
- **Believable** - Makes human-like decisions

Bad AI opponents:
- Always make optimal plays (boring, feels robotic)
- Make random decisions (frustrating, unpredictable)
- Cheat by "seeing" your cards
- Never make mistakes (impossible to beat)

### AI Complexity Levels

We'll build AI in layers:

**Level 1 (Easy):** Simple rules-based
- Fold bad hands, call medium hands, raise good hands
- No bluffing, very predictable

**Level 2 (Medium):** Probability-aware
- Considers pot odds and hand strength
- Occasionally bluffs
- Adjusts to betting patterns

**Level 3 (Hard):** Strategic
- Tracks opponent behavior
- Varies playstyle
- Position-aware
- Reads betting tells

## 🎴 Hand Strength Evaluation

### Pre-Flop Hand Rankings

Before the flop, we only have 2 cards. Some starting hands are much stronger than others:

**Premium Hands (Top 5%):**
- Pairs: AA, KK, QQ, JJ
- Suited: AKs (s = suited)

**Strong Hands (Top 15%):**
- Pairs: TT, 99
- High cards: AK, AQ, AJ, KQ

**Playable Hands (Top 30%):**
- Pairs: 88, 77, 66
- High cards: KJ, QJ, AT
- Suited connectors: JTs, T9s

**Weak Hands (Bottom 70%):**
- Low pairs: 55, 44, 33, 22
- Mismatched low cards: 72, 83, 94

### Pre-Flop Hand Strength Function

```javascript
function evaluatePreFlopHand(card1, card2) {
    const v1 = card1.value;
    const v2 = card2.value;
    const suited = card1.suit === card2.suit;
    
    const high = Math.max(v1, v2);
    const low = Math.min(v1, v2);
    const isPair = v1 === v2;
    
    // Premium pairs
    if (isPair && high >= 11) {  // JJ, QQ, KK, AA
        return { strength: 0.95, category: 'premium' };
    }
    
    // Premium non-pairs
    if (high === 14 && low >= 13) {  // AK, AQ
        return { strength: 0.90, category: 'premium' };
    }
    
    // Strong pairs
    if (isPair && high >= 9) {  // 99, TT
        return { strength: 0.80, category: 'strong' };
    }
    
    // Strong high cards
    if (high >= 13 && low >= 11 && suited) {  // KQs, KJs
        return { strength: 0.75, category: 'strong' };
    }
    
    // Medium pairs
    if (isPair && high >= 7) {  // 77, 88
        return { strength: 0.60, category: 'medium' };
    }
    
    // Medium suited connectors
    if (suited && high - low <= 2 && high >= 9) {  // T9s, J9s, etc.
        return { strength: 0.55, category: 'medium' };
    }
    
    // Playable high cards
    if (high >= 12 && low >= 9) {  // QT, KT, etc.
        return { strength: 0.50, category: 'medium' };
    }
    
    // Weak hands
    if (isPair || high >= 10) {
        return { strength: 0.30, category: 'weak' };
    }
    
    // Trash hands
    return { strength: 0.10, category: 'trash' };
}
```

**Example:**
```javascript
const aceKing = [
    { suit: 'hearts', rank: 'A', value: 14 },
    { suit: 'hearts', rank: 'K', value: 13 }
];

const result = evaluatePreFlopHand(aceKing[0], aceKing[1]);
// { strength: 0.90, category: 'premium' }
```

### Post-Flop Hand Strength

After the flop, evaluate using the hand evaluator from Lessons 4.3 and 4.4:

```javascript
function evaluatePostFlopHand(holeCards, communityCards) {
    const allCards = [...holeCards, ...communityCards];
    const handResult = evaluateHand(allCards);
    
    // Map hand rank to strength (0-1)
    const strengthMap = {
        1: 0.20,   // High card
        2: 0.40,   // One pair
        3: 0.55,   // Two pair
        4: 0.70,   // Three of a kind
        5: 0.80,   // Straight
        6: 0.85,   // Flush
        7: 0.90,   // Full house
        8: 0.95,   // Four of a kind
        9: 0.98,   // Straight flush
        10: 1.00   // Royal flush
    };
    
    return {
        strength: strengthMap[handResult.rank],
        handType: handResult.name,
        details: handResult.details
    };
}
```

## 🎲 AI Decision Making

### Basic Decision Tree

```javascript
function makeAIDecision(gameState, playerId) {
    const player = getPlayerById(gameState, playerId);
    const toCall = gameState.currentBet - player.bet;
    
    // Evaluate hand strength
    let handStrength;
    if (gameState.communityCards.length === 0) {
        // Pre-flop
        handStrength = evaluatePreFlopHand(player.hand[0], player.hand[1]);
    } else {
        // Post-flop
        handStrength = evaluatePostFlopHand(player.hand, gameState.communityCards);
    }
    
    // Calculate pot odds
    const potOdds = toCall / (gameState.pot + toCall);
    
    // Make decision based on hand strength
    if (handStrength.strength < 0.30) {
        // Weak hand
        if (toCall === 0) {
            return 'check';
        } else if (toCall < gameState.bigBlind) {
            return 'call';  // Cheap to see next card
        } else {
            return 'fold';
        }
    } else if (handStrength.strength < 0.60) {
        // Medium hand
        if (toCall === 0) {
            return Math.random() < 0.3 ? 'raise' : 'check';
        } else if (potOdds < 0.25) {  // Good pot odds
            return 'call';
        } else {
            return 'fold';
        }
    } else {
        // Strong hand
        if (toCall === 0) {
            return 'raise';
        } else if (toCall < player.chips * 0.5) {
            return Math.random() < 0.7 ? 'raise' : 'call';
        } else {
            return 'call';
        }
    }
}
```

### Pot Odds Calculation

Pot odds help AI decide if calling is profitable:

```javascript
function calculatePotOdds(pot, amountToCall) {
    // Pot odds = amount to call / (pot + amount to call)
    // Lower is better (you're risking less for a bigger pot)
    return amountToCall / (pot + amountToCall);
}
```

**Example:**
- Pot is $100
- Cost to call is $20
- Pot odds = $20 / ($100 + $20) = 16.7%

If your hand has a 20% chance of winning, calling is profitable!

### Implementing the Decision

```javascript
function executeAIAction(gameState, playerId) {
    const decision = makeAIDecision(gameState, playerId);
    const player = getPlayerById(gameState, playerId);
    
    let result;
    switch (decision) {
        case 'fold':
            result = fold(gameState, playerId);
            break;
        case 'check':
            result = check(gameState, playerId);
            break;
        case 'call':
            result = call(gameState, playerId);
            break;
        case 'raise':
            // Determine raise amount
            const raiseAmount = calculateRaiseAmount(gameState, player);
            result = raise(gameState, playerId, raiseAmount);
            break;
        case 'all-in':
            result = allIn(gameState, playerId);
            break;
    }
    
    return result;
}
```

## 🎭 AI Personalities

### Defining Personality Types

Different players have different styles:

```javascript
const AI_PERSONALITIES = {
    TIGHT_PASSIVE: {
        name: 'Conservative',
        playHandThreshold: 0.60,  // Only plays strong hands
        raiseFrequency: 0.20,     // Rarely raises
        bluffFrequency: 0.05,     // Almost never bluffs
        aggression: 0.30
    },
    
    TIGHT_AGGRESSIVE: {
        name: 'Strategic',
        playHandThreshold: 0.55,  // Plays decent hands
        raiseFrequency: 0.60,     // Often raises with good hands
        bluffFrequency: 0.15,     // Occasional bluffs
        aggression: 0.70
    },
    
    LOOSE_PASSIVE: {
        name: 'Calling Station',
        playHandThreshold: 0.30,  // Plays many hands
        raiseFrequency: 0.15,     // Rarely raises
        bluffFrequency: 0.05,     // Rarely bluffs
        aggression: 0.20
    },
    
    LOOSE_AGGRESSIVE: {
        name: 'Maniac',
        playHandThreshold: 0.35,  // Plays many hands
        raiseFrequency: 0.70,     // Often raises
        bluffFrequency: 0.30,     // Frequent bluffs
        aggression: 0.85
    }
};
```

### Assigning Personalities to AI

```javascript
function assignPersonalities(gameState) {
    const personalities = Object.values(AI_PERSONALITIES);
    
    gameState.players.forEach(player => {
        if (player.isAI) {
            // Randomly assign a personality
            player.personality = personalities[Math.floor(Math.random() * personalities.length)];
        }
    });
}
```

### Personality-Based Decisions

```javascript
function makeAIDecisionWithPersonality(gameState, playerId) {
    const player = getPlayerById(gameState, playerId);
    const personality = player.personality || AI_PERSONALITIES.TIGHT_PASSIVE;
    const toCall = gameState.currentBet - player.bet;
    
    // Evaluate hand
    let handStrength;
    if (gameState.communityCards.length === 0) {
        handStrength = evaluatePreFlopHand(player.hand[0], player.hand[1]);
    } else {
        handStrength = evaluatePostFlopHand(player.hand, gameState.communityCards);
    }
    
    // Decide whether to play this hand
    if (handStrength.strength < personality.playHandThreshold) {
        // Hand too weak for this personality
        return toCall === 0 ? 'check' : 'fold';
    }
    
    // Decide aggression level
    const shouldRaise = Math.random() < personality.raiseFrequency;
    const shouldBluff = Math.random() < personality.bluffFrequency;
    
    // Make decision
    if (toCall === 0) {
        // No bet to call
        if (shouldBluff || (shouldRaise && handStrength.strength > 0.50)) {
            return 'raise';
        } else {
            return 'check';
        }
    } else {
        // There's a bet to call
        if (handStrength.strength > 0.70) {
            // Strong hand - raise if aggressive
            return shouldRaise ? 'raise' : 'call';
        } else if (handStrength.strength > 0.40) {
            // Medium hand - call or fold based on pot odds
            const potOdds = calculatePotOdds(gameState.pot, toCall);
            return potOdds < 0.30 ? 'call' : 'fold';
        } else {
            // Weak hand - fold unless bluffing
            return shouldBluff ? 'call' : 'fold';
        }
    }
}
```

## 💡 Calculating Raise Amounts

### Personality-Based Raise Sizing

```javascript
function calculateRaiseAmount(gameState, player) {
    const personality = player.personality || AI_PERSONALITIES.TIGHT_PASSIVE;
    const pot = gameState.pot;
    const currentBet = gameState.currentBet;
    
    // Base raise on pot size and aggression
    let raiseMultiplier;
    if (personality.aggression > 0.70) {
        // Aggressive: 0.75x to 1.5x pot
        raiseMultiplier = 0.75 + Math.random() * 0.75;
    } else if (personality.aggression > 0.40) {
        // Moderate: 0.5x to 1x pot
        raiseMultiplier = 0.5 + Math.random() * 0.5;
    } else {
        // Passive: 0.25x to 0.5x pot
        raiseMultiplier = 0.25 + Math.random() * 0.25;
    }
    
    const raiseAmount = Math.floor(pot * raiseMultiplier);
    const minRaise = calculateMinRaise(gameState);
    
    // Ensure it's at least the minimum raise
    return Math.max(raiseAmount, minRaise);
}
```

## 🃏 Bluffing Logic

### When to Bluff

```javascript
function shouldBluff(gameState, player, handStrength) {
    const personality = player.personality;
    
    // Don't bluff if hand is already strong
    if (handStrength.strength > 0.60) {
        return false;
    }
    
    // Check bluff frequency for personality
    if (Math.random() > personality.bluffFrequency) {
        return false;
    }
    
    // More likely to bluff on later streets
    const streetMultiplier = {
        'pre-flop': 0.5,
        'flop': 1.0,
        'turn': 1.2,
        'river': 1.5
    };
    const multiplier = streetMultiplier[gameState.bettingRound] || 1.0;
    
    // Bluff if few opponents
    const activePlayers = gameState.players.filter(p => !p.folded);
    if (activePlayers.length <= 2 && Math.random() < personality.bluffFrequency * multiplier) {
        return true;
    }
    
    return false;
}
```

### Semi-Bluffing

A "semi-bluff" is betting with a hand that isn't strong yet but has potential:

```javascript
function hasSemiBluffPotential(holeCards, communityCards) {
    // Check for flush draws (4 cards of same suit)
    const allCards = [...holeCards, ...communityCards];
    const suitCounts = countSuits(allCards);
    const hasFlushDraw = Object.values(suitCounts).some(count => count === 4);
    
    // Check for straight draws (open-ended or gutshot)
    const values = allCards.map(c => c.value).sort((a, b) => b - a);
    const hasStraightDraw = checkForStraightDraw(values);
    
    return hasFlushDraw || hasStraightDraw;
}
```

## 🎯 Position Awareness

### Understanding Position

In poker, **position** matters:
- **Early position** (left of dealer) - Acts first, disadvantage
- **Middle position** - Neutral
- **Late position** (dealer button) - Acts last, advantage

### Position-Aware Decisions

```javascript
function getPosition(gameState, playerId) {
    const playerIndex = gameState.players.findIndex(p => p.id === playerId);
    const dealerIndex = gameState.dealerPosition;
    const playerCount = gameState.players.length;
    
    // Calculate seats from dealer
    const seatsFromDealer = (playerIndex - dealerIndex + playerCount) % playerCount;
    
    if (seatsFromDealer <= playerCount / 3) {
        return 'early';
    } else if (seatsFromDealer <= 2 * playerCount / 3) {
        return 'middle';
    } else {
        return 'late';
    }
}

function adjustForPosition(handStrength, position) {
    // Play tighter in early position
    if (position === 'early') {
        return handStrength * 0.85;  // Require stronger hands
    } else if (position === 'late') {
        return handStrength * 1.15;  // Can play weaker hands
    }
    return handStrength;
}
```

## 🧠 Advanced AI: Opponent Modeling

### Tracking Opponent Behavior

```javascript
function initializeOpponentModel(playerId) {
    return {
        playerId: playerId,
        handsPlayed: 0,
        handsSeen: 0,
        vpip: 0,  // Voluntarily Put money In Pot percentage
        pfr: 0,   // Pre-Flop Raise percentage
        aggression: 0,
        lastActions: []
    };
}

function updateOpponentModel(model, action, voluntarily) {
    model.lastActions.push(action);
    if (model.lastActions.length > 10) {
        model.lastActions.shift();  // Keep last 10 actions
    }
    
    if (voluntarily && (action === 'call' || action === 'raise')) {
        model.handsPlayed++;
    }
    
    model.handsSeen++;
    model.vpip = model.handsPlayed / model.handsSeen;
    
    // Calculate aggression (raises / total actions)
    const raises = model.lastActions.filter(a => a === 'raise').length;
    model.aggression = raises / model.lastActions.length;
}
```

## 🔧 Difficulty Levels

### Implementing Three Difficulty Levels

```javascript
function createAI(difficulty) {
    switch (difficulty) {
        case 'easy':
            return {
                usePotOdds: false,
                usePosition: false,
                bluffFrequency: 0.05,
                personality: AI_PERSONALITIES.TIGHT_PASSIVE,
                handThreshold: 0.60,
                thinkingTime: 1000  // 1 second
            };
            
        case 'medium':
            return {
                usePotOdds: true,
                usePosition: true,
                bluffFrequency: 0.15,
                personality: AI_PERSONALITIES.TIGHT_AGGRESSIVE,
                handThreshold: 0.50,
                thinkingTime: 2000  // 2 seconds
            };
            
        case 'hard':
            return {
                usePotOdds: true,
                usePosition: true,
                useOpponentModeling: true,
                bluffFrequency: 0.25,
                personality: AI_PERSONALITIES.LOOSE_AGGRESSIVE,
                handThreshold: 0.40,
                thinkingTime: 3000  // 3 seconds
            };
    }
}
```

## ⏱️ Adding Realistic Timing

### AI "Thinking" Time

```javascript
function aiTakeTurn(gameState, playerId) {
    const player = getPlayerById(gameState, playerId);
    const thinkingTime = player.aiConfig.thinkingTime;
    
    // Add random variation (±30%)
    const actualTime = thinkingTime * (0.7 + Math.random() * 0.6);
    
    // Show "thinking" indicator
    showAIThinking(player.name);
    
    // Delay decision to seem more human
    setTimeout(() => {
        const decision = makeAIDecisionWithPersonality(gameState, playerId);
        executeAIAction(gameState, playerId);
        hideAIThinking();
    }, actualTime);
}
```

## 💡 Best Practices

### 1. Don't Make AI Perfect

```javascript
// ❌ BAD: AI always makes optimal play
if (expectedValue > 0) {
    return 'call';
}

// ✅ GOOD: AI makes good but not perfect decisions
if (handStrength > threshold && Math.random() > 0.2) {
    return 'call';  // Sometimes folds good hands
}
```

### 2. Add Personality Variety

```javascript
// ✅ Create different opponents
const players = [
    createAI('tight-passive'),
    createAI('loose-aggressive'),
    createAI('balanced')
];
```

### 3. Make AI Observable

```javascript
// Show AI reasoning (in dev mode)
console.log(`${player.name} thinks:
    Hand strength: ${handStrength}
    Pot odds: ${potOdds}
    Decision: ${decision}
`);
```

## 🔍 Common Mistakes to Avoid

### Mistake 1: AI Cheating

```javascript
// ❌ BAD: AI "sees" your cards
if (humanPlayer.hand.includes(ace)) {
    return 'fold';
}

// ✅ GOOD: AI only knows its own cards
const myHand = evaluateHand(player.hand, communityCards);
```

### Mistake 2: Too Predictable

```javascript
// ❌ BAD: Always same pattern
if (handStrength > 0.8) {
    return 'raise';
}

// ✅ GOOD: Add randomness
if (handStrength > 0.8 && Math.random() > 0.2) {
    return 'raise';
} else {
    return 'call';  // Sometimes slow-plays
}
```

### Mistake 3: Instant Decisions

```javascript
// ❌ BAD: AI acts instantly
executeAIAction(gameState, playerId);

// ✅ GOOD: Delay to seem human
setTimeout(() => {
    executeAIAction(gameState, playerId);
}, 1000 + Math.random() * 2000);
```

## 🏆 Key Takeaways

- **Hand strength evaluation** differs pre-flop vs post-flop
- **Pot odds** help AI make mathematically sound calls
- **Personalities** make AI opponents diverse and interesting
- **Bluffing** makes AI less predictable
- **Position awareness** improves AI decision quality
- **Difficulty levels** balance challenge and fun
- **Realistic timing** makes AI feel more human
- **No cheating** - AI should only use available information

## 📝 Practice Challenges

Ready to practice? Check the `practice/` folder for exercises:

1. **Exercise 1:** Build a simple AI that folds weak hands, calls medium, raises strong
2. **Exercise 2:** Create three AI personalities with different styles
3. **Exercise 3:** Implement pot odds calculation and usage
4. **Exercise 4:** Add bluffing logic to an AI opponent

## 🎯 What's Next?

In **Lesson 4.8**, we'll implement **Game Flow & Dealing** - the complete sequence of dealing hole cards, flop, turn, and river with animations!

---

**Incredible! 🎉 You can now create AI opponents that play poker intelligently. This makes your game feel alive!**
