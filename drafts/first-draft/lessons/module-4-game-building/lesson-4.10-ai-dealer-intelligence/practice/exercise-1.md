# Exercise 1: Enhanced Hand Evaluation

**Build a smart hand evaluation system that considers more than just hand rankings**

**Estimated Time:** 60-90 minutes  
**Difficulty:** Advanced

---

## 🎯 Objective

Upgrade your hand evaluation to analyze:
- Top pair and overpairs
- Drawing potential (flush draws, straight draws)
- Board texture (coordinated vs dry)
- Hand categories (monster, strong, made, weak)

---

## 📋 Step-by-Step Instructions

### Step 1: Add Enhanced Evaluation Properties

Update your hand evaluation to return more information:

```javascript
function evaluateHandStrength(holeCards, communityCards) {
    // Get basic hand
    const baseHand = getBestHand(holeCards, communityCards);
    
    // Enhanced evaluation
    const evaluation = {
        // Basic info
        rank: baseHand.rank,
        values: baseHand.values,
        name: baseHand.name,
        
        // NEW: Enhanced properties
        topPairOrBetter: hasTopPairOrBetter(holeCards, communityCards),
        overpair: hasOverpair(holeCards, communityCards),
        draws: evaluateDraws(holeCards, communityCards),
        boardTexture: analyzeBoardTexture(communityCards),
        handCategory: categorizeHand(baseHand)
    };
    
    return evaluation;
}
```

### Step 2: Implement Top Pair Detection

```javascript
function hasTopPairOrBetter(holeCards, communityCards) {
    if (communityCards.length === 0) {
        return false;
    }
    
    // Find the highest card on the board
    const boardRanks = communityCards.map(c => rankValue(c.rank));
    const topBoardCard = Math.max(...boardRanks);
    
    // Check if we have a card matching it
    const holeRanks = holeCards.map(c => rankValue(c.rank));
    
    return holeRanks.some(rank => rank === topBoardCard);
}

// Test this function
console.log('Testing top pair detection...');

// Example 1: You have A-K, board is K-7-2
const test1 = hasTopPairOrBetter(
    [{ rank: 'A', suit: '♠' }, { rank: 'K', suit: '♥' }],
    [{ rank: 'K', suit: '♦' }, { rank: '7', suit: '♣' }, { rank: '2', suit: '♠' }]
);
console.log('A-K on K-7-2:', test1); // Should be true

// Example 2: You have 8-9, board is K-7-2
const test2 = hasTopPairOrBetter(
    [{ rank: '8', suit: '♠' }, { rank: '9', suit: '♥' }],
    [{ rank: 'K', suit: '♦' }, { rank: '7', suit: '♣' }, { rank: '2', suit: '♠' }]
);
console.log('8-9 on K-7-2:', test2); // Should be false
```

### Step 3: Implement Overpair Detection

An overpair means you have a pocket pair higher than any card on the board:

```javascript
function hasOverpair(holeCards, communityCards) {
    if (communityCards.length === 0) {
        return false;
    }
    
    // Check if hole cards are a pair
    const holeRanks = holeCards.map(c => rankValue(c.rank));
    const isPair = holeRanks[0] === holeRanks[1];
    
    if (!isPair) {
        return false;
    }
    
    // Find highest board card
    const boardRanks = communityCards.map(c => rankValue(c.rank));
    const topBoardCard = Math.max(...boardRanks);
    
    // Is our pair higher?
    const pairValue = holeRanks[0];
    
    return pairValue > topBoardCard;
}

// Test this function
console.log('Testing overpair detection...');

// Example 1: You have Q-Q, board is J-8-3
const test3 = hasOverpair(
    [{ rank: 'Q', suit: '♠' }, { rank: 'Q', suit: '♥' }],
    [{ rank: 'J', suit: '♦' }, { rank: '8', suit: '♣' }, { rank: '3', suit: '♠' }]
);
console.log('Q-Q on J-8-3:', test3); // Should be true

// Example 2: You have 9-9, board is J-8-3
const test4 = hasOverpair(
    [{ rank: '9', suit: '♠' }, { rank: '9', suit: '♥' }],
    [{ rank: 'J', suit: '♦' }, { rank: '8', suit: '♣' }, { rank: '3', suit: '♠' }]
);
console.log('9-9 on J-8-3:', test4); // Should be false (J is higher)
```

### Step 4: Detect Drawing Hands

```javascript
function evaluateDraws(holeCards, communityCards) {
    const allCards = [...holeCards, ...communityCards];
    
    if (allCards.length < 4) {
        // Need at least 4 cards to have a draw
        return {
            flushDraw: false,
            straightDraw: false,
            comboDraw: false
        };
    }
    
    // Check for flush draw (4 of same suit, need 1 more)
    const suitCounts = {};
    for (let card of allCards) {
        suitCounts[card.suit] = (suitCounts[card.suit] || 0) + 1;
    }
    
    const flushDraw = Object.values(suitCounts).some(count => count === 4);
    
    // Check for straight draw (need 4 cards in sequence)
    const ranks = allCards.map(c => rankValue(c.rank));
    const uniqueRanks = [...new Set(ranks)].sort((a, b) => a - b);
    
    let straightDraw = false;
    
    // Check all possible 4-card sequences
    for (let i = 0; i <= uniqueRanks.length - 4; i++) {
        const subset = uniqueRanks.slice(i, i + 4);
        // Check if it spans exactly 4 ranks (like 5,6,7,8 or 5,6,7,9)
        if (subset[subset.length - 1] - subset[0] <= 4) {
            straightDraw = true;
            break;
        }
    }
    
    return {
        flushDraw: flushDraw,
        straightDraw: straightDraw,
        comboDraw: flushDraw && straightDraw
    };
}

// Test this function
console.log('Testing draw detection...');

// Example: You have A♠ K♠, board is Q♠ J♠ 3♥
const test5 = evaluateDraws(
    [{ rank: 'A', suit: '♠' }, { rank: 'K', suit: '♠' }],
    [{ rank: 'Q', suit: '♠' }, { rank: 'J', suit: '♠' }, { rank: '3', suit: '♥' }]
);
console.log('A♠K♠ on Q♠J♠3♥:', test5); 
// Should show flushDraw: true, straightDraw: true, comboDraw: true
```

### Step 5: Analyze Board Texture

```javascript
function analyzeBoardTexture(communityCards) {
    if (communityCards.length < 3) {
        return {
            texture: 'none',
            danger: 0,
            flushPossible: false,
            straightPossible: false,
            paired: false
        };
    }
    
    const suits = communityCards.map(c => c.suit);
    const ranks = communityCards.map(c => rankValue(c.rank)).sort((a, b) => a - b);
    
    // Check for flush possibility (3+ same suit)
    const suitCounts = {};
    for (let suit of suits) {
        suitCounts[suit] = (suitCounts[suit] || 0) + 1;
    }
    const maxSuitCount = Math.max(...Object.values(suitCounts));
    const flushPossible = maxSuitCount >= 3;
    
    // Check for straight possibility (connected cards)
    let straightPossible = false;
    for (let i = 0; i <= ranks.length - 3; i++) {
        // If 3 cards span 4 or less ranks, straight is possible
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
    const paired = Object.values(rankCounts).some(count => count >= 2);
    
    // Determine texture and danger level
    let texture = 'dry';
    let danger = 1;
    
    if (flushPossible && straightPossible) {
        texture = 'very-coordinated';
        danger = 5;
    } else if (flushPossible || straightPossible) {
        texture = 'coordinated';
        danger = 3;
    } else if (paired) {
        texture = 'paired';
        danger = 2;
    }
    
    return {
        texture: texture,
        danger: danger,
        flushPossible: flushPossible,
        straightPossible: straightPossible,
        paired: paired
    };
}

// Test this function
console.log('Testing board texture analysis...');

// Dry board: K♠ 7♥ 2♦
const test6 = analyzeBoardTexture([
    { rank: 'K', suit: '♠' },
    { rank: '7', suit: '♥' },
    { rank: '2', suit: '♦' }
]);
console.log('K-7-2 rainbow:', test6); // Should be dry, danger 1

// Scary board: J♠ 10♠ 9♥
const test7 = analyzeBoardTexture([
    { rank: 'J', suit: '♠' },
    { rank: '10', suit: '♠' },
    { rank: '9', suit: '♥' }
]);
console.log('J-10-9 two-tone:', test7); // Should be very-coordinated, danger 5
```

### Step 6: Categorize Hands

```javascript
function categorizeHand(handEvaluation) {
    const rank = handEvaluation.rank;
    
    // Group hands into strategic categories
    if (rank >= 7) {
        return 'monster';      // Full house, quads, straight flush
    } else if (rank >= 4) {
        return 'strong';       // Three of a kind, straight, flush
    } else if (rank >= 2) {
        return 'made-hand';    // Pair or two pair
    } else if (rank >= 1) {
        return 'high-card';    // High card only
    } else {
        return 'weak';         // Very weak
    }
}
```

### Step 7: Integrate Everything

```javascript
function testEnhancedEvaluation() {
    console.log('=== Testing Enhanced Evaluation ===\n');
    
    // Test Case 1: Strong hand on coordinated board
    const hand1 = [
        { rank: 'A', suit: '♠' },
        { rank: 'K', suit: '♠' }
    ];
    const board1 = [
        { rank: 'Q', suit: '♠' },
        { rank: 'J', suit: '♠' },
        { rank: '10', suit: '♥' }
    ];
    
    const eval1 = evaluateHandStrength(hand1, board1);
    console.log('Test 1: A♠K♠ on Q♠J♠10♥');
    console.log('Hand:', eval1.name);
    console.log('Category:', eval1.handCategory);
    console.log('Top pair?', eval1.topPairOrBetter);
    console.log('Draws:', eval1.draws);
    console.log('Board:', eval1.boardTexture.texture);
    console.log('');
    
    // Test Case 2: Overpair on dry board
    const hand2 = [
        { rank: 'Q', suit: '♥' },
        { rank: 'Q', suit: '♦' }
    ];
    const board2 = [
        { rank: '8', suit: '♠' },
        { rank: '5', suit: '♣' },
        { rank: '2', suit: '♥' }
    ];
    
    const eval2 = evaluateHandStrength(hand2, board2);
    console.log('Test 2: Q♥Q♦ on 8♠5♣2♥');
    console.log('Hand:', eval2.name);
    console.log('Category:', eval2.handCategory);
    console.log('Overpair?', eval2.overpair);
    console.log('Board:', eval2.boardTexture.texture);
    console.log('');
}

// Run tests
testEnhancedEvaluation();
```

---

## 🎯 Your Tasks

1. **Implement all 6 helper functions:**
   - [ ] `hasTopPairOrBetter()`
   - [ ] `hasOverpair()`
   - [ ] `evaluateDraws()`
   - [ ] `analyzeBoardTexture()`
   - [ ] `categorizeHand()`
   - [ ] Enhanced `evaluateHandStrength()`

2. **Test each function individually**
   - [ ] Use the test cases provided
   - [ ] Add your own test cases
   - [ ] Verify outputs are correct

3. **Update your existing code**
   - [ ] Replace old `evaluateHand()` calls
   - [ ] Use new evaluation throughout

4. **Display enhanced information**
   - [ ] Show board texture in UI
   - [ ] Indicate if you have draws
   - [ ] Show hand category

---

## 🐛 Common Issues

### Issue: "Cannot read property 'rank' of undefined"
**Solution:** Check that you have cards before evaluating. Add guards:
```javascript
if (holeCards.length === 0 || communityCards.length === 0) {
    return defaultEvaluation;
}
```

### Issue: Flush draw detected when only 3 of same suit
**Solution:** Make sure you're counting 4 of the same suit:
```javascript
const flushDraw = Object.values(suitCounts).some(count => count === 4);
// NOT >= 3
```

### Issue: Board texture always "dry"
**Solution:** Check your logic for flush/straight detection. Use console.log to debug:
```javascript
console.log('Suit counts:', suitCounts);
console.log('Max suit count:', maxSuitCount);
```

---

## 🏆 Success Criteria

Your enhanced evaluation should:
- ✅ Correctly identify top pair
- ✅ Correctly identify overpairs
- ✅ Detect flush and straight draws
- ✅ Analyze board texture accurately
- ✅ Categorize hands into strategic groups
- ✅ Work with 0-7 cards
- ✅ Pass all test cases

---

## 💡 Enhancement Ideas

Once basic implementation works:

1. **Nut Hand Detection**
   - Determine if you have the best possible hand
   - Important for betting decisions

2. **Backdoor Draws**
   - Detect draws that need 2 cards
   - Useful on the flop

3. **Draw Strength**
   - Rate draws (nut draw vs weak draw)
   - Consider blockers

4. **Hand Visualization**
   - Show draw outs visually
   - Highlight connected cards

---

**Time Estimate:** 60-90 minutes

**Next:** Exercise 2 - Difficulty Levels & Decision Making
