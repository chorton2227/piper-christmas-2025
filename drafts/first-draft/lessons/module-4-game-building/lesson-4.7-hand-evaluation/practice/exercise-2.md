# Exercise 2: Test Edge Cases and Debug 🐛

**Goal**: Test your hand evaluator with tricky edge cases and fix bugs

**Time**: 45-60 minutes

**Difficulty**: Intermediate

---

## 🎯 What You'll Learn

- How to think of edge cases
- Testing strategies for algorithms
- Debugging techniques
- Handling unusual inputs
- Writing robust code

---

## 🧪 Part 1: Edge Case Testing (30 min)

### Test 1: Wheel Straight (A-2-3-4-5)

**The Challenge**: Ace can be low in this straight

```javascript
let wheelStraight = [
    { rank: 'A', suit: 'hearts', value: 14 },
    { rank: '5', suit: 'diamonds', value: 5 },
    { rank: '4', suit: 'clubs', value: 4 },
    { rank: '3', suit: 'spades', value: 3 },
    { rank: '2', suit: 'hearts', value: 2 }
];

let result = evaluateHand(wheelStraight);
console.log('Test 1 - Wheel Straight:');
console.log('Expected: Straight, 5 high');
console.log('Got:', result.name, result.rank);
console.log(result.name === 'Straight' && result.highCard === 5 ? '✅ PASS' : '❌ FAIL');
```

**Common Bug**: Algorithm treats it as high card because Ace (14) breaks the sequence

**Fix**: Check specifically for A-5-4-3-2 pattern

---

### Test 2: Royal Flush vs Regular Straight Flush

```javascript
// Royal Flush
let royal = [
    { rank: 'A', suit: 'hearts', value: 14 },
    { rank: 'K', suit: 'hearts', value: 13 },
    { rank: 'Q', suit: 'hearts', value: 12 },
    { rank: 'J', suit: 'hearts', value: 11 },
    { rank: '10', suit: 'hearts', value: 10 }
];

// Regular Straight Flush
let regularSF = [
    { rank: '9', suit: 'hearts', value: 9 },
    { rank: '8', suit: 'hearts', value: 8 },
    { rank: '7', suit: 'hearts', value: 7 },
    { rank: '6', suit: 'hearts', value: 6 },
    { rank: '5', suit: 'hearts', value: 5 }
];

console.log('\nTest 2 - Royal vs Straight Flush:');
let royalResult = evaluateHand(royal);
let sfResult = evaluateHand(regularSF);

console.log('Royal:', royalResult.name);
console.log('Regular SF:', sfResult.name);
console.log(royalResult.name === 'Royal Flush' ? '✅ Royal PASS' : '❌ Royal FAIL');
console.log(sfResult.name === 'Straight Flush' ? '✅ SF PASS' : '❌ SF FAIL');
```

**Common Bug**: Both detected as straight flush

**Fix**: Check if highest card is Ace AND next is King for royal flush

---

### Test 3: Full House vs Three of a Kind

```javascript
// Full House
let fullHouse = [
    { rank: 'K', suit: 'hearts', value: 13 },
    { rank: 'K', suit: 'diamonds', value: 13 },
    { rank: 'K', suit: 'clubs', value: 13 },
    { rank: '7', suit: 'spades', value: 7 },
    { rank: '7', suit: 'hearts', value: 7 }
];

// Three of a Kind (NOT full house)
let threeKind = [
    { rank: 'K', suit: 'hearts', value: 13 },
    { rank: 'K', suit: 'diamonds', value: 13 },
    { rank: 'K', suit: 'clubs', value: 13 },
    { rank: '9', suit: 'spades', value: 9 },
    { rank: '7', suit: 'hearts', value: 7 }
];

console.log('\nTest 3 - Full House vs Three of a Kind:');
let fhResult = evaluateHand(fullHouse);
let tkResult = evaluateHand(threeKind);

console.log('Full House:', fhResult.name);
console.log('Three of a Kind:', tkResult.name);
console.log(fhResult.name === 'Full House' ? '✅ FH PASS' : '❌ FH FAIL');
console.log(tkResult.name === 'Three of a Kind' ? '✅ 3K PASS' : '❌ 3K FAIL');
```

**Common Bug**: Both detected as three of a kind

**Fix**: Check for BOTH three of a kind AND exactly one pair

---

### Test 4: Two Pair vs Pair

```javascript
// Two Pair
let twoPair = [
    { rank: 'K', suit: 'hearts', value: 13 },
    { rank: 'K', suit: 'diamonds', value: 13 },
    { rank: '7', suit: 'clubs', value: 7 },
    { rank: '7', suit: 'spades', value: 7 },
    { rank: '2', suit: 'hearts', value: 2 }
];

// Just a Pair
let onePair = [
    { rank: 'K', suit: 'hearts', value: 13 },
    { rank: 'K', suit: 'diamonds', value: 13 },
    { rank: '9', suit: 'clubs', value: 9 },
    { rank: '7', suit: 'spades', value: 7 },
    { rank: '2', suit: 'hearts', value: 2 }
];

console.log('\nTest 4 - Two Pair vs One Pair:');
let tpResult = evaluateHand(twoPair);
let opResult = evaluateHand(onePair);

console.log('Two Pair:', tpResult.name);
console.log('One Pair:', opResult.name);
console.log(tpResult.name === 'Two Pair' ? '✅ 2P PASS' : '❌ 2P FAIL');
console.log(opResult.name === 'Pair' ? '✅ 1P PASS' : '❌ 1P FAIL');
```

**Common Bug**: Two pair detected as one pair

**Fix**: Check `pairs.length === 2` for two pair

---

### Test 5: Flush vs High Card (Same Suit, No Sequence)

```javascript
// Flush (all same suit)
let flush = [
    { rank: 'K', suit: 'hearts', value: 13 },
    { rank: '9', suit: 'hearts', value: 9 },
    { rank: '7', suit: 'hearts', value: 7 },
    { rank: '5', suit: 'hearts', value: 5 },
    { rank: '2', suit: 'hearts', value: 2 }
];

// Not a flush (mixed suits)
let notFlush = [
    { rank: 'K', suit: 'hearts', value: 13 },
    { rank: '9', suit: 'diamonds', value: 9 },
    { rank: '7', suit: 'clubs', value: 7 },
    { rank: '5', suit: 'spades', value: 5 },
    { rank: '2', suit: 'hearts', value: 2 }
];

console.log('\nTest 5 - Flush Detection:');
let flushResult = evaluateHand(flush);
let noFlushResult = evaluateHand(notFlush);

console.log('All same suit:', flushResult.name);
console.log('Mixed suits:', noFlushResult.name);
console.log(flushResult.name === 'Flush' ? '✅ Flush PASS' : '❌ Flush FAIL');
console.log(noFlushResult.name === 'High Card' ? '✅ No Flush PASS' : '❌ No Flush FAIL');
```

**Common Bug**: Any cards with hearts detected as flush

**Fix**: Check ALL 5 cards are same suit

---

### Test 6: Straight vs Almost Straight

```javascript
// Valid Straight
let straight = [
    { rank: '9', suit: 'hearts', value: 9 },
    { rank: '8', suit: 'diamonds', value: 8 },
    { rank: '7', suit: 'clubs', value: 7 },
    { rank: '6', suit: 'spades', value: 6 },
    { rank: '5', suit: 'hearts', value: 5 }
];

// Almost straight (one gap)
let almostStraight = [
    { rank: '9', suit: 'hearts', value: 9 },
    { rank: '8', suit: 'diamonds', value: 8 },
    { rank: '7', suit: 'clubs', value: 7 },
    { rank: '6', suit: 'spades', value: 6 },
    { rank: '4', suit: 'hearts', value: 4 }  // Gap! Should be 5
];

console.log('\nTest 6 - Straight vs Almost:');
let strResult = evaluateHand(straight);
let almostResult = evaluateHand(almostStraight);

console.log('Valid straight:', strResult.name);
console.log('Gap in sequence:', almostResult.name);
console.log(strResult.name === 'Straight' ? '✅ Straight PASS' : '❌ Straight FAIL');
console.log(almostResult.name === 'High Card' ? '✅ Not Straight PASS' : '❌ FAIL');
```

**Common Bug**: Doesn't check ALL gaps, misses one

**Fix**: Check EVERY pair of adjacent cards differs by exactly 1

---

### Test 7: Cards in Random Order

**Real hands won't be sorted!**

```javascript
// Pair of Kings (cards NOT sorted)
let unsortedPair = [
    { rank: '3', suit: 'spades', value: 3 },
    { rank: 'K', suit: 'hearts', value: 13 },
    { rank: '7', suit: 'clubs', value: 7 },
    { rank: 'K', suit: 'diamonds', value: 13 },
    { rank: '2', suit: 'hearts', value: 2 }
];

console.log('\nTest 7 - Unsorted Cards:');
let unsortedResult = evaluateHand(unsortedPair);
console.log('Unsorted pair:', unsortedResult.name, unsortedResult.rank);
console.log(unsortedResult.name === 'Pair' && unsortedResult.rank === 'K' ? '✅ PASS' : '❌ FAIL');
```

**Common Bug**: Algorithm assumes cards are sorted

**Fix**: Always sort when needed, don't assume order

---

### Test 8: All Same Rank (Impossible in Real Game)

```javascript
// Edge case: What if all 5 cards were Kings? (can't happen in real deck)
let allSame = [
    { rank: 'K', suit: 'hearts', value: 13 },
    { rank: 'K', suit: 'diamonds', value: 13 },
    { rank: 'K', suit: 'clubs', value: 13 },
    { rank: 'K', suit: 'spades', value: 13 },
    { rank: 'K', suit: 'hearts', value: 13 }  // Duplicate!
];

console.log('\nTest 8 - Edge Case (All Same):');
let allSameResult = evaluateHand(allSame);
console.log('Result:', allSameResult.name);
// Should be Four of a Kind (can't be 5 of a kind in standard poker)
```

**What should happen?** Four of a kind

---

## 🐛 Part 2: Common Bugs and Fixes (15 min)

### Bug 1: Wrong Hand Priority

**Symptom**: Full house detected as three of a kind

**Cause**: Checking three of a kind before full house

**Fix**: Check hands in correct order (best to worst):
```javascript
function evaluateHand(hand) {
    // Must check in this order!
    let result;
    
    result = isRoyalFlush(hand);
    if (result) return result;
    
    result = isStraightFlush(hand);
    if (result) return result;
    
    result = isFourOfAKind(hand);
    if (result) return result;
    
    result = isFullHouse(hand);  // BEFORE three of a kind!
    if (result) return result;
    
    // ... rest of checks
}
```

---

### Bug 2: Not Handling Ties in Counting

**Symptom**: Two pair not detected

**Cause**: Counter doesn't track multiple pairs

**Fix**:
```javascript
function findMultiples(rankCounts) {
    let pairs = [];  // Array, not single value!
    
    for (let rank in rankCounts) {
        if (rankCounts[rank] === 2) {
            pairs.push(rank);  // Add to array
        }
    }
    
    return { pairs, ... };
}
```

---

### Bug 3: Modifying Original Hand

**Symptom**: Hand changes after evaluation

**Cause**: Sorting original array

**Fix**:
```javascript
function sortHandByValue(hand) {
    return hand.slice().sort(...);  // .slice() creates copy!
}
```

---

### Bug 4: Comparing Strings Instead of Numbers

**Symptom**: '9' > '10' returns true

**Cause**: Comparing rank strings

**Fix**:
```javascript
// WRONG
if (card.rank > otherCard.rank) { ... }  // Compares strings!

// RIGHT
if (card.value > otherCard.value) { ... }  // Compares numbers!
```

---

## 📊 Part 3: Automated Test Suite (15 min)

Create a comprehensive test function:

```javascript
function runAllEdgeCaseTests() {
    console.log('=== EDGE CASE TEST SUITE ===\n');
    
    let testCases = [
        {
            name: 'Wheel Straight',
            hand: wheelStraight,
            expectedName: 'Straight',
            expectedHigh: 5
        },
        {
            name: 'Royal Flush',
            hand: royal,
            expectedName: 'Royal Flush'
        },
        {
            name: 'Straight Flush (not royal)',
            hand: regularSF,
            expectedName: 'Straight Flush'
        },
        {
            name: 'Full House',
            hand: fullHouse,
            expectedName: 'Full House'
        },
        {
            name: 'Three of a Kind (not full house)',
            hand: threeKind,
            expectedName: 'Three of a Kind'
        },
        {
            name: 'Two Pair',
            hand: twoPair,
            expectedName: 'Two Pair'
        },
        {
            name: 'One Pair',
            hand: onePair,
            expectedName: 'Pair'
        },
        {
            name: 'Flush',
            hand: flush,
            expectedName: 'Flush'
        },
        {
            name: 'Not a Flush',
            hand: notFlush,
            expectedName: 'High Card'
        },
        {
            name: 'Valid Straight',
            hand: straight,
            expectedName: 'Straight'
        },
        {
            name: 'Almost Straight (should fail)',
            hand: almostStraight,
            expectedName: 'High Card'
        },
        {
            name: 'Unsorted Pair',
            hand: unsortedPair,
            expectedName: 'Pair'
        }
    ];
    
    let passed = 0;
    let failed = 0;
    
    testCases.forEach((test, index) => {
        let result = evaluateHand(test.hand);
        let pass = result.name === test.expectedName;
        
        if (test.expectedHigh) {
            pass = pass && result.highCard === test.expectedHigh;
        }
        
        if (pass) {
            console.log(`✅ Test ${index + 1}: ${test.name} - PASS`);
            passed++;
        } else {
            console.log(`❌ Test ${index + 1}: ${test.name} - FAIL`);
            console.log(`   Expected: ${test.expectedName}`);
            console.log(`   Got: ${result.name}`);
            failed++;
        }
    });
    
    console.log(`\n📊 Results: ${passed}/${testCases.length} passed`);
    console.log(failed === 0 ? '🎉 All tests passed!' : `⚠️  ${failed} tests failed`);
    
    return failed === 0;
}

// Run the test suite
runAllEdgeCaseTests();
```

---

## 🎯 Challenge: Find Your Own Edge Cases

Think of 3 more edge cases to test:

1. **Your Edge Case 1**:

_____________________________________________________

What makes it tricky?

_____________________________________________________

2. **Your Edge Case 2**:

_____________________________________________________

What makes it tricky?

_____________________________________________________

3. **Your Edge Case 3**:

_____________________________________________________

What makes it tricky?

_____________________________________________________

---

## 🏆 Success Criteria

✅ All 12 edge case tests pass  
✅ No false positives (wrong hand detected)  
✅ No false negatives (hand not detected)  
✅ Code handles unsorted cards  
✅ Code handles unusual inputs gracefully  
✅ Automated test suite runs successfully  

---

## 💡 Debugging Tips

### When a Test Fails:

1. **Log the input**:
   ```javascript
   console.log('Input hand:', hand);
   ```

2. **Log the counts**:
   ```javascript
   console.log('Rank counts:', countRanks(hand));
   console.log('Suit counts:', countSuits(hand));
   ```

3. **Log the detection**:
   ```javascript
   console.log('Is pair?', isPair(hand));
   console.log('Is two pair?', isTwoPair(hand));
   ```

4. **Check the order**:
   ```javascript
   console.log('Sorted values:', hand.map(c => c.value).sort((a,b) => b-a));
   ```

5. **Isolate the function**:
   - Test just that one function
   - Create minimal test case
   - Check assumptions

---

## 📝 Reflection

After completing all tests:

1. **How many tests passed on first try?** _______

2. **Which bug was hardest to find?**

_____________________________________________________

3. **What surprised you about edge cases?**

_____________________________________________________

4. **How confident are you in your code now?**

⭐ ⭐ ⭐ ⭐ ⭐ (circle your rating)

---

**Your hand evaluator is now bulletproof!** 🐛✅
