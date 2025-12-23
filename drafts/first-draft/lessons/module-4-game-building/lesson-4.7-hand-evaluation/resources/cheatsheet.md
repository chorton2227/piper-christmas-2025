# Hand Evaluation Cheat Sheet 🎯

Quick reference for poker hand detection algorithms

---

## 📊 Hand Rankings (0-9)

| Rank | Hand | Value | Probability |
|------|------|-------|-------------|
| 1st | Royal Flush | 9 | 0.000154% |
| 2nd | Straight Flush | 8 | 0.00139% |
| 3rd | Four of a Kind | 7 | 0.0240% |
| 4th | Full House | 6 | 0.144% |
| 5th | Flush | 5 | 0.197% |
| 6th | Straight | 4 | 0.392% |
| 7th | Three of a Kind | 3 | 2.11% |
| 8th | Two Pair | 2 | 4.75% |
| 9th | Pair | 1 | 42.3% |
| 10th | High Card | 0 | 50.1% |

---

## 🔧 Essential Helper Functions

### Count Ranks
```javascript
function countRanks(hand) {
    let counts = {};
    hand.forEach(card => {
        counts[card.rank] = (counts[card.rank] || 0) + 1;
    });
    return counts;
}
```

### Count Suits
```javascript
function countSuits(hand) {
    let counts = {};
    hand.forEach(card => {
        counts[card.suit] = (counts[card.suit] || 0) + 1;
    });
    return counts;
}
```

### Find Multiples
```javascript
function findMultiples(rankCounts) {
    let pairs = [], threeOfAKind = null, fourOfAKind = null;
    for (let rank in rankCounts) {
        if (rankCounts[rank] === 4) fourOfAKind = rank;
        else if (rankCounts[rank] === 3) threeOfAKind = rank;
        else if (rankCounts[rank] === 2) pairs.push(rank);
    }
    return { pairs, threeOfAKind, fourOfAKind };
}
```

### Sort by Value
```javascript
function sortHandByValue(hand) {
    return hand.slice().sort((a, b) => b.value - a.value);
}
```

---

## 🎴 Hand Detection Algorithms

### High Card (Value: 0)
```javascript
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
```

### Pair (Value: 1)
```javascript
function isPair(hand) {
    let multiples = findMultiples(countRanks(hand));
    if (multiples.pairs.length === 1 && !multiples.threeOfAKind) {
        let pairRank = multiples.pairs[0];
        let pairIndices = hand.map((c, i) => c.rank === pairRank ? i : -1)
                              .filter(i => i !== -1);
        let kickers = hand.filter(c => c.rank !== pairRank)
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
```

### Two Pair (Value: 2)
```javascript
function isTwoPair(hand) {
    let multiples = findMultiples(countRanks(hand));
    if (multiples.pairs.length === 2) {
        let sorted = multiples.pairs.sort((a, b) => 
            getCardValue(b) - getCardValue(a)
        );
        let kicker = hand.find(c => 
            !sorted.includes(c.rank)
        ).rank;
        return {
            name: 'Two Pair',
            rank: `${sorted[0]}s and ${sorted[1]}s`,
            value: 2,
            kickers: [kicker]
        };
    }
    return null;
}
```

### Three of a Kind (Value: 3)
```javascript
function isThreeOfAKind(hand) {
    let multiples = findMultiples(countRanks(hand));
    if (multiples.threeOfAKind && multiples.pairs.length === 0) {
        return {
            name: 'Three of a Kind',
            rank: multiples.threeOfAKind,
            value: 3
        };
    }
    return null;
}
```

### Straight (Value: 4)
```javascript
function isStraight(hand) {
    let sorted = sortHandByValue(hand);
    let values = sorted.map(c => c.value);
    
    // Check regular straight
    let isStraight = true;
    for (let i = 0; i < values.length - 1; i++) {
        if (values[i] - values[i + 1] !== 1) {
            isStraight = false;
            break;
        }
    }
    
    if (isStraight) {
        return {
            name: 'Straight',
            rank: `${sorted[0].rank} high`,
            value: 4,
            highCard: sorted[0].value
        };
    }
    
    // Check wheel (A-2-3-4-5)
    if (values[0] === 14 && values[1] === 5 && 
        values[2] === 4 && values[3] === 3 && values[4] === 2) {
        return {
            name: 'Straight',
            rank: '5 high (wheel)',
            value: 4,
            highCard: 5
        };
    }
    
    return null;
}
```

### Flush (Value: 5)
```javascript
function isFlush(hand) {
    let suitCounts = countSuits(hand);
    let flushSuit = Object.keys(suitCounts).find(
        suit => suitCounts[suit] === 5
    );
    
    if (flushSuit) {
        let sorted = sortHandByValue(hand);
        return {
            name: 'Flush',
            rank: `all ${flushSuit}`,
            value: 5,
            highCards: sorted.map(c => c.value)
        };
    }
    return null;
}
```

### Full House (Value: 6)
```javascript
function isFullHouse(hand) {
    let multiples = findMultiples(countRanks(hand));
    if (multiples.threeOfAKind && multiples.pairs.length === 1) {
        return {
            name: 'Full House',
            rank: `${multiples.threeOfAKind}s over ${multiples.pairs[0]}s`,
            value: 6
        };
    }
    return null;
}
```

### Four of a Kind (Value: 7)
```javascript
function isFourOfAKind(hand) {
    let multiples = findMultiples(countRanks(hand));
    if (multiples.fourOfAKind) {
        return {
            name: 'Four of a Kind',
            rank: multiples.fourOfAKind,
            value: 7
        };
    }
    return null;
}
```

### Straight Flush (Value: 8)
```javascript
function isStraightFlush(hand) {
    let straightResult = isStraight(hand);
    let flushResult = isFlush(hand);
    
    if (straightResult && flushResult) {
        // Check if it's royal flush (A-K-Q-J-10)
        let sorted = sortHandByValue(hand);
        if (sorted[0].rank === 'A' && sorted[1].rank === 'K') {
            return null; // Let isRoyalFlush handle this
        }
        
        return {
            name: 'Straight Flush',
            rank: straightResult.rank,
            value: 8,
            highCard: straightResult.highCard
        };
    }
    return null;
}
```

### Royal Flush (Value: 9)
```javascript
function isRoyalFlush(hand) {
    let straightResult = isStraight(hand);
    let flushResult = isFlush(hand);
    
    if (straightResult && flushResult) {
        let sorted = sortHandByValue(hand);
        if (sorted[0].rank === 'A' && sorted[1].rank === 'K') {
            return {
                name: 'Royal Flush',
                rank: flushResult.rank,
                value: 9
            };
        }
    }
    return null;
}
```

---

## 🎯 Main Evaluation Function

```javascript
function evaluateHand(hand) {
    let result;
    
    // Check from best to worst
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

---

## ⚠️ Common Edge Cases

### 1. Wheel Straight (A-2-3-4-5)
- Ace acts as LOW card (value 1)
- Special case to check
- High card is 5, not Ace

### 2. Royal Flush vs Straight Flush
- Royal: A-K-Q-J-10 (same suit)
- Check rank of highest 2 cards

### 3. Full House vs Three of a Kind
- Full House: 3 of a kind + pair
- Must check for BOTH

### 4. Two Pair vs One Pair
- Check `pairs.length === 2`
- Sort pairs by value

### 5. Unsorted Input
- NEVER assume cards are sorted
- Always sort when needed
- Use `.slice()` to avoid mutating original

---

## 🐛 Common Bugs

| Bug | Symptom | Fix |
|-----|---------|-----|
| Wrong order | Wrong hand detected | Check best to worst |
| String comparison | '9' > '10' = true | Use `.value` not `.rank` |
| Mutating array | Original hand changes | Use `.slice()` before sort |
| Missing edge case | Wheel not detected | Add special case check |
| Wrong counting | Pairs missed | Use array, not single value |

---

## ⚡ Performance Tips

1. **Calculate once**: Store `countRanks()`, `countSuits()` results
2. **Early exit**: Return as soon as hand found
3. **Avoid recalculation**: Pass data between functions
4. **Optimize checks**: Check common hands first (for average case)

---

## 🧪 Testing Checklist

✅ Royal Flush (A-K-Q-J-10 same suit)  
✅ Straight Flush (any consecutive same suit)  
✅ Four of a Kind (4 same rank)  
✅ Full House (3 of a kind + pair)  
✅ Flush (5 same suit)  
✅ Straight (5 consecutive)  
✅ Wheel Straight (A-2-3-4-5)  
✅ Three of a Kind (3 same, no pair)  
✅ Two Pair (2 pairs)  
✅ One Pair (1 pair)  
✅ High Card (nothing)  
✅ Unsorted input  
✅ Random card order  

---

## 📏 Return Object Format

All functions return:
```javascript
{
    name: 'Hand Name',      // String: 'Pair', 'Flush', etc.
    rank: 'K',              // String: specific ranks
    value: 1,               // Number: 0-9
    cards: [0, 1],          // Array: indices of key cards
    kickers: ['A', '9'],    // Array: tiebreaker cards
    highCard: 13            // Number: for straights/flushes
}
```

---

## 🎓 Study Tips

1. **Start with counting**: Master helper functions first
2. **Test each function**: Verify before moving on
3. **Understand priority**: Why check royal before straight?
4. **Practice edge cases**: Wheel, royal, ties
5. **Debug systematically**: Log counts, multiples, results

---

**Keep this cheat sheet handy while coding!** 📚✨
