# Answer Key: Hand Evaluation Logic ✅

**Complete solutions for all exercises with grading rubric**

---

## Exercise 1: Build Hand Evaluator (100 points)

### Helper Functions (20 points)

#### countRanks() - 5 points

**Expected Solution**:
```javascript
function countRanks(hand) {
    let rankCounts = {};
    for (let card of hand) {
        rankCounts[card.rank] = (rankCounts[card.rank] || 0) + 1;
    }
    return rankCounts;
}
```

**Grading**:
- ✅ 5 pts: Correct implementation
- ⚠️ 3 pts: Works but inefficient (nested loops)
- ⚠️ 2 pts: Works for some cases, not all
- ❌ 0 pts: Doesn't work

---

#### countSuits() - 5 points

**Expected Solution**:
```javascript
function countSuits(hand) {
    let suitCounts = {};
    for (let card of hand) {
        suitCounts[card.suit] = (suitCounts[card.suit] || 0) + 1;
    }
    return suitCounts;
}
```

**Grading**: Same as countRanks()

---

#### findMultiples() - 5 points

**Expected Solution**:
```javascript
function findMultiples(rankCounts) {
    let pairs = [], threeOfAKind = null, fourOfAKind = null;
    
    for (let rank in rankCounts) {
        if (rankCounts[rank] === 4) {
            fourOfAKind = rank;
        } else if (rankCounts[rank] === 3) {
            threeOfAKind = rank;
        } else if (rankCounts[rank] === 2) {
            pairs.push(rank);
        }
    }
    
    return { pairs, threeOfAKind, fourOfAKind };
}
```

**Grading**:
- ✅ 5 pts: Returns all three correctly (pairs as array!)
- ⚠️ 3 pts: Works but pairs is single value (not array)
- ⚠️ 2 pts: Finds some multiples, misses others
- ❌ 0 pts: Doesn't work

**Common Mistake**: Making `pairs` a single value instead of array. Must support TWO pairs!

---

#### sortHandByValue() - 5 points

**Expected Solution**:
```javascript
function sortHandByValue(hand) {
    return hand.slice().sort((a, b) => b.value - a.value);
}
```

**Grading**:
- ✅ 5 pts: Uses `.slice()` to avoid mutating original
- ⚠️ 3 pts: Sorts correctly but mutates original
- ⚠️ 2 pts: Sorts ascending instead of descending
- ❌ 0 pts: Doesn't work

**Critical**: Must use `.slice()` or `[...hand]` to create copy!

---

### Hand Detection Functions (60 points total)

#### isHighCard() - 3 points

**Expected Solution**:
```javascript
function isHighCard(hand) {
    let sorted = sortHandByValue(hand);
    return {
        name: 'High Card',
        rank: sorted[0].rank,
        value: 0,
        cards: [0],
        kickers: sorted.slice(1).map(card => card.rank)
    };
}
```

**Grading**:
- ✅ 3 pts: Correct return object with all fields
- ⚠️ 2 pts: Missing kickers or other field
- ⚠️ 1 pt: Returns name only
- ❌ 0 pts: Doesn't work

---

#### isPair() - 8 points

**Expected Solution**: See complete-hand-evaluator.js

**Grading**:
- ✅ 8 pts: Detects pair, returns indices, includes kickers, handles non-pairs
- ⚠️ 6 pts: Detects pair but missing kickers
- ⚠️ 4 pts: Detects pair but incorrect return format
- ⚠️ 2 pts: Sometimes works, sometimes doesn't
- ❌ 0 pts: Doesn't work

**Key Points**:
- Must return `null` if not a pair
- Must check `pairs.length === 1` AND `!threeOfAKind`
- Must find indices of pair cards
- Must sort kickers high to low

---

#### isTwoPair() - 8 points

**Expected Solution**: See complete-hand-evaluator.js

**Grading**:
- ✅ 8 pts: Detects two pair, sorts pairs correctly, finds kicker
- ⚠️ 6 pts: Detects but doesn't sort pairs
- ⚠️ 4 pts: Detects but incorrect format
- ⚠️ 2 pts: Sometimes works
- ❌ 0 pts: Doesn't work

**Key Points**:
- Check `pairs.length === 2`
- Sort pairs by value (highest first)
- Find the one kicker (not part of either pair)
- Format: "Ks and 7s"

---

#### isThreeOfAKind() - 6 points

**Grading**:
- ✅ 6 pts: Detects three of a kind, EXCLUDES full house
- ⚠️ 4 pts: Detects but also triggers on full house
- ⚠️ 2 pts: Sometimes works
- ❌ 0 pts: Doesn't work

**Critical**: Must check `multiples.pairs.length === 0` to exclude full house!

---

#### isStraight() - 10 points (most complex!)

**Expected Solution**: Must handle BOTH regular straight AND wheel

**Grading**:
- ✅ 10 pts: Detects regular straight AND wheel (A-2-3-4-5)
- ⚠️ 8 pts: Detects regular straight, but not wheel
- ⚠️ 6 pts: Detects straight but doesn't check all gaps
- ⚠️ 4 pts: Sometimes works
- ❌ 0 pts: Doesn't work

**Key Points**:
- Check each adjacent pair differs by exactly 1
- Special case: wheel (A-2-3-4-5) where values are [14,5,4,3,2]
- Wheel high card is 5, not 14!

**Common Mistake**: Forgetting wheel straight

---

#### isFlush() - 6 points

**Grading**:
- ✅ 6 pts: Detects flush, returns high cards
- ⚠️ 4 pts: Detects but doesn't return high cards
- ⚠️ 2 pts: Sometimes works
- ❌ 0 pts: Doesn't work

**Key Points**:
- Check if ANY suit has count of 5
- Return sorted card values for tiebreaker

---

#### isFullHouse() - 6 points

**Grading**:
- ✅ 6 pts: Detects full house correctly (3 of a kind + pair)
- ⚠️ 4 pts: Sometimes triggers on three of a kind
- ⚠️ 2 pts: Sometimes works
- ❌ 0 pts: Doesn't work

**Key Points**:
- Must have `threeOfAKind` AND `pairs.length === 1`
- Format: "Qs over 7s"

---

#### isFourOfAKind() - 4 points

**Grading**:
- ✅ 4 pts: Correct
- ⚠️ 2 pts: Sometimes works
- ❌ 0 pts: Doesn't work

---

#### isStraightFlush() - 6 points

**Grading**:
- ✅ 6 pts: Detects straight flush, EXCLUDES royal flush
- ⚠️ 4 pts: Detects but doesn't exclude royal
- ⚠️ 2 pts: Sometimes works
- ❌ 0 pts: Doesn't work

**Key Points**:
- Must check BOTH isStraight() and isFlush()
- Must return `null` if highest cards are A-K (royal flush)

---

#### isRoyalFlush() - 5 points

**Grading**:
- ✅ 5 pts: Detects only A-K-Q-J-10 same suit
- ⚠️ 3 pts: Detects but also triggers on other straight flushes
- ⚠️ 1 pt: Sometimes works
- ❌ 0 pts: Doesn't work

**Key Points**:
- Check if straight AND flush
- Check if highest card is Ace AND next is King

---

### Main Evaluation Function (10 points)

#### evaluateHand()

**Expected Solution**:
```javascript
function evaluateHand(hand) {
    let result;
    
    result = isRoyalFlush(hand);
    if (result) return result;
    
    result = isStraightFlush(hand);
    if (result) return result;
    
    result = isFourOfAKind(hand);
    if (result) return result;
    
    result = isFullHouse(hand);
    if (result) return result;
    
    result = isFlush(hand);
    if (result) return result;
    
    result = isStraight(hand);
    if (result) return result;
    
    result = isThreeOfAKind(hand);
    if (result) return result;
    
    result = isTwoPair(hand);
    if (result) return result;
    
    result = isPair(hand);
    if (result) return result;
    
    return isHighCard(hand);
}
```

**Grading**:
- ✅ 10 pts: Correct order, returns immediately when found
- ⚠️ 8 pts: Correct order but doesn't return early
- ⚠️ 6 pts: Wrong order (full house before four of a kind?)
- ⚠️ 4 pts: Some functions in wrong order
- ❌ 0 pts: Doesn't work

**Critical**: Order matters! Best to worst.

---

### Testing (10 points)

**Grading**:
- ✅ 10 pts: All 11 test cases pass
- ⚠️ 8 pts: 9-10 tests pass
- ⚠️ 6 pts: 7-8 tests pass
- ⚠️ 4 pts: 5-6 tests pass
- ⚠️ 2 pts: 3-4 tests pass
- ❌ 0 pts: Less than 3 pass

---

## Exercise 2: Edge Case Testing (30 points)

### Required Tests (24 points, 2 pts each)

1. ✅ Wheel straight detected correctly
2. ✅ Royal flush vs straight flush distinction
3. ✅ Full house vs three of a kind distinction
4. ✅ Two pair vs one pair distinction
5. ✅ Flush detected (all same suit)
6. ✅ Not flush (mixed suits)
7. ✅ Straight detected (consecutive)
8. ✅ Not straight (gap in sequence)
9. ✅ Unsorted cards handled
10. ✅ All same rank (edge case)
11. ✅ Automated test suite created
12. ✅ Test results documented

### Bug Fixes (6 points)

- ✅ 2 pts: Fixed at least 1 bug
- ✅ 4 pts: Fixed 2-3 bugs
- ✅ 6 pts: Fixed all bugs, code robust

---

## Exercise 3: Optimization (50 points)

### Comparison Logic (20 points)

**Expected**: compareHands() and resolveTiebreaker()

**Grading**:
- ✅ 20 pts: Compares hands correctly, handles all tiebreakers
- ⚠️ 15 pts: Compares but missing some tiebreaker cases
- ⚠️ 10 pts: Basic comparison works
- ⚠️ 5 pts: Partial implementation
- ❌ 0 pts: Not implemented

---

### Performance (10 points)

**Expected**: Caching, early exits, benchmarking

**Grading**:
- ✅ 10 pts: Measurable performance improvement
- ⚠️ 7 pts: Some optimization, not measured
- ⚠️ 4 pts: Attempted optimization
- ❌ 0 pts: No optimization

---

### Enhanced Features (20 points, 5 pts each)

1. **Hand descriptions** (5 pts)
   - Human-readable output

2. **Probability calculator** (5 pts)
   - Shows odds of each hand

3. **Multi-hand evaluation** (5 pts)
   - Finds best among 3+ hands

4. **Hand strength meter** (5 pts)
   - Rates hand 0-100

**Grading**: 5 pts for each feature fully implemented

---

## Total Scoring

### Exercise 1: 100 points
- Helper functions: 20 pts
- Hand detection: 60 pts
- Main function: 10 pts
- Testing: 10 pts

### Exercise 2: 30 points
- Edge case tests: 24 pts
- Bug fixes: 6 pts

### Exercise 3: 50 points
- Comparison logic: 20 pts
- Performance: 10 pts
- Enhanced features: 20 pts

### TOTAL: 180 points possible

---

## Grading Scale

| Points | Grade | Description |
|--------|-------|-------------|
| 162-180 | A+ | Outstanding work! Professional quality |
| 144-161 | A | Excellent! All major features working |
| 126-143 | B | Very good! Most features working |
| 108-125 | C | Good! Core features working |
| 90-107 | D | Passing, but needs more work |
| < 90 | F | Not complete, needs significant work |

---

## Common Mistakes and Fixes

### Mistake 1: Mutating Original Array
```javascript
// ❌ WRONG
function sortHand(hand) {
    hand.sort(...);  // Mutates original!
    return hand;
}

// ✅ RIGHT
function sortHand(hand) {
    return hand.slice().sort(...);  // Creates copy
}
```

---

### Mistake 2: Not Checking Full House Correctly
```javascript
// ❌ WRONG
if (multiples.threeOfAKind) {
    return fullHouse;  // Could be just three of a kind!
}

// ✅ RIGHT
if (multiples.threeOfAKind && multiples.pairs.length === 1) {
    return fullHouse;  // Must have BOTH
}
```

---

### Mistake 3: Pairs Not an Array
```javascript
// ❌ WRONG
let pairs = null;  // Can't store TWO pairs!

// ✅ RIGHT
let pairs = [];  // Array can hold multiple pairs
```

---

### Mistake 4: Comparing Strings Instead of Values
```javascript
// ❌ WRONG
if (card.rank > otherCard.rank) {  // '9' > '10' = true!
    
// ✅ RIGHT
if (card.value > otherCard.value) {  // 9 > 10 = false
```

---

### Mistake 5: Wrong Order in evaluateHand()
```javascript
// ❌ WRONG
result = isThreeOfAKind(hand);
if (result) return result;

result = isFullHouse(hand);  // Never reached!
if (result) return result;

// ✅ RIGHT
result = isFullHouse(hand);  // Check FIRST
if (result) return result;

result = isThreeOfAKind(hand);  // Then check this
if (result) return result;
```

---

### Mistake 6: Forgetting Wheel Straight
```javascript
// ❌ WRONG
function isStraight(hand) {
    // Only checks regular straight
    // Forgets A-2-3-4-5
}

// ✅ RIGHT
function isStraight(hand) {
    // Check regular straight
    if (isStraight) return result;
    
    // Check wheel (A-2-3-4-5)
    if (isWheel) return wheelResult;
}
```

---

## Testing Checklist

Use this to verify solutions:

### All Hand Types ✅
- [ ] Royal Flush (A-K-Q-J-10 same suit)
- [ ] Straight Flush (consecutive same suit)
- [ ] Four of a Kind (4 same rank)
- [ ] Full House (3 of a kind + pair)
- [ ] Flush (5 same suit)
- [ ] Straight (5 consecutive)
- [ ] Three of a Kind (3 same rank, no pair)
- [ ] Two Pair (2 different pairs)
- [ ] Pair (2 same rank)
- [ ] High Card (nothing)

### Edge Cases ✅
- [ ] Wheel straight (A-2-3-4-5)
- [ ] Royal vs regular straight flush
- [ ] Full house vs three of a kind
- [ ] Two pair vs one pair
- [ ] Unsorted input

### Code Quality ✅
- [ ] No mutations of original data
- [ ] Correct priority order
- [ ] Returns null appropriately
- [ ] Consistent return format
- [ ] Good variable names
- [ ] Comments explaining logic

---

## Performance Benchmarks

**Expected performance** (10,000 evaluations):

- High Card: ~50ms
- Pair: ~60ms
- Royal Flush: ~100ms (checks many conditions)

**If slower**: Look for:
- Repeated calculations (count ranks multiple times?)
- Not returning early (checking all hands even after finding one?)
- Inefficient loops

---

## Extra Credit Ideas (+10 points)

1. **Visual Hand Display** (+3 pts)
   - Show cards graphically with results

2. **Probability Simulation** (+4 pts)
   - Monte Carlo simulation to verify probabilities

3. **Multi-Player Tournament** (+5 pts)
   - Evaluate 5+ hands, rank them all

4. **AI Suggestion** (+5 pts)
   - Given 4 cards, suggest best 5th card

5. **Web Interface** (+5 pts)
   - HTML/CSS interface for testing

---

## Need Help?

**If student is stuck**:

1. ✅ Review the README tutorial
2. ✅ Check the cheatsheet
3. ✅ Look at complete-hand-evaluator.js example
4. ✅ Use console.log to debug
5. ✅ Test one function at a time
6. ✅ Ask parent for help (see parent guide)

**If bugs persist**:
- Compare to example code line by line
- Check return format matches expected
- Verify test cases are correct
- Use debugger to step through

---

**Remember**: This is HARD material. Getting 70%+ is success! 🎉
