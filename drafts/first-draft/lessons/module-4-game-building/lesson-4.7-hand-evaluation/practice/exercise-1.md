# Exercise 1: Implement Complete Hand Evaluation 🧮

**Goal**: Build a complete poker hand evaluation system from scratch

**Time**: 90-120 minutes

**Difficulty**: Intermediate-Advanced

---

## 🎯 What You'll Build

A complete `hand-evaluation.js` file with functions that can:
- Count ranks and suits
- Detect all 10 poker hands
- Return structured hand data
- Compare hands to find winners
- Handle edge cases (wheel straight, royal flush, tiebreakers)

---

## 📋 Step-by-Step Instructions

### Step 1: Create File and Test Hand (5 min)

1. Create a new file: `hand-evaluation.js`
2. Add this test hand at the top:

```javascript
// Test hand for development
let testHand = [
    { rank: 'K', suit: 'hearts', value: 13, color: 'red' },
    { rank: 'K', suit: 'diamonds', value: 13, color: 'red' },
    { rank: '7', suit: 'clubs', value: 7, color: 'black' },
    { rank: '3', suit: 'spades', value: 3, color: 'black' },
    { rank: '2', suit: 'hearts', value: 2, color: 'red' }
];

console.log('Test hand:', testHand);
```

3. Run in terminal: `node hand-evaluation.js`
4. Should see your test hand printed

**✅ Checkpoint**: File runs without errors

---

### Step 2: Helper Function - Count Ranks (10 min)

Add this function:

```javascript
/**
 * Counts how many cards of each rank
 * @param {Array} hand - Array of card objects
 * @returns {Object} - { 'K': 2, '7': 1, '3': 1, '2': 1 }
 */
function countRanks(hand) {
    let rankCounts = {};
    
    for (let card of hand) {
        // If rank doesn't exist, start at 0
        rankCounts[card.rank] = (rankCounts[card.rank] || 0) + 1;
    }
    
    return rankCounts;
}

// Test it
console.log('Rank counts:', countRanks(testHand));
// Expected: { K: 2, '7': 1, '3': 1, '2': 1 }
```

**✅ Checkpoint**: Should see rank counts in console

---

### Step 3: Helper Function - Count Suits (10 min)

Add this function:

```javascript
/**
 * Counts how many cards of each suit
 * @param {Array} hand - Array of card objects
 * @returns {Object} - { 'hearts': 2, 'diamonds': 1, ... }
 */
function countSuits(hand) {
    let suitCounts = {};
    
    for (let card of hand) {
        suitCounts[card.suit] = (suitCounts[card.suit] || 0) + 1;
    }
    
    return suitCounts;
}

// Test it
console.log('Suit counts:', countSuits(testHand));
// Expected: { hearts: 2, diamonds: 1, clubs: 1, spades: 1 }
```

**✅ Checkpoint**: Should see suit counts in console

---

### Step 4: Helper Function - Find Multiples (15 min)

Add this function to find pairs, three of a kind, four of a kind:

```javascript
/**
 * Finds pairs, three of a kind, four of a kind
 * @param {Object} rankCounts - Result from countRanks()
 * @returns {Object} - { pairs: [], threeOfAKind: null, fourOfAKind: null }
 */
function findMultiples(rankCounts) {
    let pairs = [];
    let threeOfAKind = null;
    let fourOfAKind = null;
    
    for (let rank in rankCounts) {
        let count = rankCounts[rank];
        
        if (count === 4) {
            fourOfAKind = rank;
        } else if (count === 3) {
            threeOfAKind = rank;
        } else if (count === 2) {
            pairs.push(rank);
        }
    }
    
    return { pairs, threeOfAKind, fourOfAKind };
}

// Test it
let rankCounts = countRanks(testHand);
let multiples = findMultiples(rankCounts);
console.log('Multiples:', multiples);
// Expected: { pairs: ['K'], threeOfAKind: null, fourOfAKind: null }
```

**✅ Checkpoint**: Should detect the pair of Kings

---

### Step 5: Helper Function - Sort by Value (10 min)

```javascript
/**
 * Sorts hand by card value (highest first)
 * @param {Array} hand - Array of card objects
 * @returns {Array} - Sorted copy of hand
 */
function sortHandByValue(hand) {
    return hand.slice().sort((a, b) => b.value - a.value);
}

// Test it
let sorted = sortHandByValue(testHand);
console.log('Sorted hand:', sorted.map(c => c.rank + c.suit[0]));
// Expected: ['K♥', 'K♦', '7♣', '3♠', '2♥'] (Kings first)
```

**✅ Checkpoint**: Hand sorted correctly

---

### Step 6: Detect High Card (10 min)

```javascript
/**
 * Returns high card (default/fallback)
 * @param {Array} hand - Array of card objects
 * @returns {Object} - Hand result object
 */
function isHighCard(hand) {
    let sorted = sortHandByValue(hand);
    
    return {
        name: 'High Card',
        rank: sorted[0].rank,
        value: 0,
        cards: [0],
        kickers: sorted.slice(1).map(c => c.rank)
    };
}

// Test it
console.log('High card:', isHighCard(testHand));
```

**✅ Checkpoint**: Returns high card info

---

### Step 7: Detect Pair (20 min)

```javascript
/**
 * Detects a pair (two cards same rank)
 * @param {Array} hand - Array of card objects
 * @returns {Object|null} - Hand result or null if not a pair
 */
function isPair(hand) {
    let rankCounts = countRanks(hand);
    let multiples = findMultiples(rankCounts);
    
    // Check for exactly one pair
    if (multiples.pairs.length === 1 && !multiples.threeOfAKind) {
        let pairRank = multiples.pairs[0];
        
        // Find indices of pair cards
        let pairIndices = [];
        hand.forEach((card, index) => {
            if (card.rank === pairRank) {
                pairIndices.push(index);
            }
        });
        
        // Find kickers (other cards)
        let kickers = hand
            .filter(card => card.rank !== pairRank)
            .sort((a, b) => b.value - a.value)
            .map(c => c.rank);
        
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

// Test it
console.log('Is pair?', isPair(testHand));
// Expected: { name: 'Pair', rank: 'K', value: 1, ... }
```

**✅ Checkpoint**: Detects pair of Kings

---

### Step 8: Detect Two Pair (20 min)

```javascript
/**
 * Detects two pair
 * @param {Array} hand - Array of card objects
 * @returns {Object|null} - Hand result or null
 */
function isTwoPair(hand) {
    let rankCounts = countRanks(hand);
    let multiples = findMultiples(rankCounts);
    
    // Check for exactly two pairs
    if (multiples.pairs.length === 2) {
        let pairs = multiples.pairs;
        
        // Sort pairs by value (higher pair first)
        pairs.sort((a, b) => {
            let cardA = hand.find(c => c.rank === a);
            let cardB = hand.find(c => c.rank === b);
            return cardB.value - cardA.value;
        });
        
        // Find indices of all pair cards
        let pairIndices = [];
        hand.forEach((card, index) => {
            if (pairs.includes(card.rank)) {
                pairIndices.push(index);
            }
        });
        
        // Find kicker
        let kicker = hand.find(card => !pairs.includes(card.rank));
        
        return {
            name: 'Two Pair',
            rank: `${pairs[0]}s and ${pairs[1]}s`,
            value: 2,
            cards: pairIndices,
            kickers: [kicker.rank]
        };
    }
    
    return null;
}

// Test with two pair hand
let twoPairHand = [
    { rank: 'K', suit: 'hearts', value: 13 },
    { rank: 'K', suit: 'diamonds', value: 13 },
    { rank: '7', suit: 'clubs', value: 7 },
    { rank: '7', suit: 'spades', value: 7 },
    { rank: '2', suit: 'hearts', value: 2 }
];
console.log('Two pair:', isTwoPair(twoPairHand));
```

**✅ Checkpoint**: Detects two pair correctly

---

### Step 9: Detect Three of a Kind (15 min)

```javascript
/**
 * Detects three of a kind
 * @param {Array} hand - Array of card objects
 * @returns {Object|null} - Hand result or null
 */
function isThreeOfAKind(hand) {
    let rankCounts = countRanks(hand);
    let multiples = findMultiples(rankCounts);
    
    // Check for three of a kind (but not full house)
    if (multiples.threeOfAKind && multiples.pairs.length === 0) {
        let rank = multiples.threeOfAKind;
        
        // Find indices
        let indices = [];
        hand.forEach((card, index) => {
            if (card.rank === rank) {
                indices.push(index);
            }
        });
        
        // Find kickers
        let kickers = hand
            .filter(card => card.rank !== rank)
            .sort((a, b) => b.value - a.value)
            .map(c => c.rank);
        
        return {
            name: 'Three of a Kind',
            rank: rank,
            value: 3,
            cards: indices,
            kickers: kickers
        };
    }
    
    return null;
}
```

**✅ Checkpoint**: Test with three of a kind hand

---

### Step 10: Detect Straight (25 min)

**This is tricky because of the Ace!**

```javascript
/**
 * Detects a straight (5 cards in sequence)
 * @param {Array} hand - Array of card objects
 * @returns {Object|null} - Hand result or null
 */
function isStraight(hand) {
    let values = hand.map(c => c.value).sort((a, b) => b - a);
    
    // Check normal consecutive straight
    let consecutive = true;
    for (let i = 0; i < values.length - 1; i++) {
        if (values[i] - values[i + 1] !== 1) {
            consecutive = false;
            break;
        }
    }
    
    if (consecutive) {
        return {
            name: 'Straight',
            rank: hand.find(c => c.value === values[0]).rank + ' high',
            value: 4,
            cards: [0, 1, 2, 3, 4],
            highCard: values[0]
        };
    }
    
    // Check wheel straight (A-2-3-4-5)
    // Ace (14), 5, 4, 3, 2
    if (values[0] === 14 && values[1] === 5 && values[2] === 4 && 
        values[3] === 3 && values[4] === 2) {
        return {
            name: 'Straight',
            rank: '5 high (wheel)',
            value: 4,
            cards: [0, 1, 2, 3, 4],
            highCard: 5  // 5 is high in wheel
        };
    }
    
    return null;
}

// Test with normal straight
let straightHand = [
    { rank: '9', suit: 'hearts', value: 9 },
    { rank: '8', suit: 'diamonds', value: 8 },
    { rank: '7', suit: 'clubs', value: 7 },
    { rank: '6', suit: 'spades', value: 6 },
    { rank: '5', suit: 'hearts', value: 5 }
];
console.log('Straight:', isStraight(straightHand));

// Test with wheel straight
let wheelHand = [
    { rank: 'A', suit: 'hearts', value: 14 },
    { rank: '5', suit: 'diamonds', value: 5 },
    { rank: '4', suit: 'clubs', value: 4 },
    { rank: '3', suit: 'spades', value: 3 },
    { rank: '2', suit: 'hearts', value: 2 }
];
console.log('Wheel:', isStraight(wheelHand));
```

**✅ Checkpoint**: Both straights detected correctly

---

### Step 11: Detect Flush (15 min)

```javascript
/**
 * Detects a flush (all same suit)
 * @param {Array} hand - Array of card objects
 * @returns {Object|null} - Hand result or null
 */
function isFlush(hand) {
    let suitCounts = countSuits(hand);
    
    // Check if any suit appears 5 times
    for (let suit in suitCounts) {
        if (suitCounts[suit] === 5) {
            let sorted = sortHandByValue(hand);
            
            return {
                name: 'Flush',
                rank: sorted[0].rank + ' high',
                value: 5,
                cards: [0, 1, 2, 3, 4],
                highCards: sorted.map(c => c.value)
            };
        }
    }
    
    return null;
}

// Test with flush
let flushHand = [
    { rank: 'K', suit: 'hearts', value: 13 },
    { rank: '9', suit: 'hearts', value: 9 },
    { rank: '7', suit: 'hearts', value: 7 },
    { rank: '5', suit: 'hearts', value: 5 },
    { rank: '2', suit: 'hearts', value: 2 }
];
console.log('Flush:', isFlush(flushHand));
```

**✅ Checkpoint**: Flush detected

---

### Step 12: Detect Full House (15 min)

```javascript
/**
 * Detects full house (three of a kind + pair)
 * @param {Array} hand - Array of card objects
 * @returns {Object|null} - Hand result or null
 */
function isFullHouse(hand) {
    let rankCounts = countRanks(hand);
    let multiples = findMultiples(rankCounts);
    
    // Check for three of a kind AND one pair
    if (multiples.threeOfAKind && multiples.pairs.length === 1) {
        let threeRank = multiples.threeOfAKind;
        let pairRank = multiples.pairs[0];
        
        return {
            name: 'Full House',
            rank: `${threeRank}s full of ${pairRank}s`,
            value: 6,
            cards: [0, 1, 2, 3, 4],
            threeOfAKind: threeRank,
            pair: pairRank
        };
    }
    
    return null;
}
```

**✅ Checkpoint**: Test with full house hand

---

### Step 13: Detect Four of a Kind (10 min)

```javascript
/**
 * Detects four of a kind
 * @param {Array} hand - Array of card objects
 * @returns {Object|null} - Hand result or null
 */
function isFourOfAKind(hand) {
    let rankCounts = countRanks(hand);
    let multiples = findMultiples(rankCounts);
    
    if (multiples.fourOfAKind) {
        let rank = multiples.fourOfAKind;
        
        // Find indices
        let indices = [];
        hand.forEach((card, index) => {
            if (card.rank === rank) {
                indices.push(index);
            }
        });
        
        // Find kicker
        let kicker = hand.find(card => card.rank !== rank);
        
        return {
            name: 'Four of a Kind',
            rank: rank,
            value: 7,
            cards: indices,
            kickers: [kicker.rank]
        };
    }
    
    return null;
}
```

**✅ Checkpoint**: Test with four of a kind

---

### Step 14: Detect Straight Flush (10 min)

```javascript
/**
 * Detects straight flush (straight AND flush)
 * @param {Array} hand - Array of card objects
 * @returns {Object|null} - Hand result or null
 */
function isStraightFlush(hand) {
    let straightResult = isStraight(hand);
    let flushResult = isFlush(hand);
    
    // Must be both straight AND flush
    if (straightResult && flushResult) {
        return {
            name: 'Straight Flush',
            rank: straightResult.rank,
            value: 8,
            cards: [0, 1, 2, 3, 4],
            highCard: straightResult.highCard
        };
    }
    
    return null;
}
```

**✅ Checkpoint**: Test with straight flush

---

### Step 15: Detect Royal Flush (10 min)

```javascript
/**
 * Detects royal flush (A-K-Q-J-10 all same suit)
 * @param {Array} hand - Array of card objects
 * @returns {Object|null} - Hand result or null
 */
function isRoyalFlush(hand) {
    let straightFlush = isStraightFlush(hand);
    
    if (straightFlush) {
        // Check if highest card is Ace
        let sorted = sortHandByValue(hand);
        if (sorted[0].value === 14 && sorted[1].value === 13) {
            return {
                name: 'Royal Flush',
                rank: hand[0].suit,
                value: 9,
                cards: [0, 1, 2, 3, 4]
            };
        }
    }
    
    return null;
}
```

**✅ Checkpoint**: Test with royal flush

---

### Step 16: Main Evaluation Function (15 min)

**This ties everything together!**

```javascript
/**
 * Evaluates a 5-card poker hand
 * @param {Array} hand - Array of 5 card objects
 * @returns {Object} - Hand result with name, rank, value, etc.
 */
function evaluateHand(hand) {
    // Check from best to worst
    
    let result;
    
    // Check Royal Flush (best possible)
    result = isRoyalFlush(hand);
    if (result) return result;
    
    // Check Straight Flush
    result = isStraightFlush(hand);
    if (result) return result;
    
    // Check Four of a Kind
    result = isFourOfAKind(hand);
    if (result) return result;
    
    // Check Full House
    result = isFullHouse(hand);
    if (result) return result;
    
    // Check Flush
    result = isFlush(hand);
    if (result) return result;
    
    // Check Straight
    result = isStraight(hand);
    if (result) return result;
    
    // Check Three of a Kind
    result = isThreeOfAKind(hand);
    if (result) return result;
    
    // Check Two Pair
    result = isTwoPair(hand);
    if (result) return result;
    
    // Check Pair
    result = isPair(hand);
    if (result) return result;
    
    // Default: High Card
    return isHighCard(hand);
}

// Test with original test hand
console.log('\n=== EVALUATING TEST HAND ===');
console.log(evaluateHand(testHand));
// Expected: { name: 'Pair', rank: 'K', value: 1, ... }
```

**✅ Checkpoint**: Correctly evaluates test hand as pair of Kings

---

### Step 17: Comprehensive Testing (20 min)

Add all test cases at the end of your file:

```javascript
console.log('\n=== RUNNING ALL TESTS ===\n');

// Test 1: Royal Flush
console.log('Test 1: Royal Flush');
let royal = evaluateHand([
    { rank: 'A', suit: 'hearts', value: 14 },
    { rank: 'K', suit: 'hearts', value: 13 },
    { rank: 'Q', suit: 'hearts', value: 12 },
    { rank: 'J', suit: 'hearts', value: 11 },
    { rank: '10', suit: 'hearts', value: 10 }
]);
console.log(royal.name === 'Royal Flush' ? '✅ PASS' : '❌ FAIL');

// Test 2: Straight Flush
console.log('\nTest 2: Straight Flush');
let sf = evaluateHand([
    { rank: '9', suit: 'clubs', value: 9 },
    { rank: '8', suit: 'clubs', value: 8 },
    { rank: '7', suit: 'clubs', value: 7 },
    { rank: '6', suit: 'clubs', value: 6 },
    { rank: '5', suit: 'clubs', value: 5 }
]);
console.log(sf.name === 'Straight Flush' ? '✅ PASS' : '❌ FAIL');

// Test 3: Four of a Kind
console.log('\nTest 3: Four of a Kind');
let four = evaluateHand([
    { rank: 'K', suit: 'hearts', value: 13 },
    { rank: 'K', suit: 'diamonds', value: 13 },
    { rank: 'K', suit: 'clubs', value: 13 },
    { rank: 'K', suit: 'spades', value: 13 },
    { rank: '2', suit: 'hearts', value: 2 }
]);
console.log(four.name === 'Four of a Kind' ? '✅ PASS' : '❌ FAIL');

// Continue with all 11 hand types...
// (Add tests for Full House, Flush, Straight, Three of a Kind, 
//  Two Pair, Pair, High Card, and Wheel Straight)

console.log('\n=== TESTING COMPLETE ===');
```

**✅ Checkpoint**: All tests pass!

---

## 🎉 Congratulations!

You've built a complete poker hand evaluation system!

### What You Accomplished:

✅ Counting functions for ranks and suits  
✅ Detection for all 10 poker hands  
✅ Edge case handling (wheel, royal flush)  
✅ Structured data return  
✅ Comprehensive testing  

### Next Steps:

1. Save your work
2. Test with random hands
3. Integrate into your poker game
4. Try Exercise 2 for advanced testing

---

## 📝 Reflection Questions

1. Which hand was hardest to detect? Why?

_____________________________________________________

2. How does the algorithm determine hand priority?

_____________________________________________________

3. What would break your code? (edge cases you didn't test)

_____________________________________________________

4. How could you make the code faster?

_____________________________________________________

---

**You're now a poker algorithm expert!** 🧮✨
