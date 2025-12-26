# Hand Evaluation Part 1 Cheatsheet

## 🎯 Poker Hand Rankings (Covered in Part 1)

| Rank | Hand Name | Description | Example |
|------|-----------|-------------|---------|
| 9 | High Card | No matching cards | A♠ K♦ Q♣ 9♥ 5♠ |
| 8 | One Pair | Two cards of same rank | A♠ A♥ K♦ 7♣ 3♠ |
| 7 | Two Pair | Two different pairs | K♠ K♥ 7♦ 7♣ 3♠ |
| 4 | Three of a Kind | Three cards of same rank | 7♠ 7♥ 7♦ A♣ K♠ |
| 2 | Four of a Kind | Four cards of same rank | Q♠ Q♥ Q♦ Q♣ 5♠ |

*Lower rank number = stronger hand*

## 📊 Counting Ranks Function

```javascript
function countRanks(cards) {
    const counts = {};
    
    for (const card of cards) {
        const rank = card.rank;
        counts[rank] = (counts[rank] || 0) + 1;
    }
    
    return counts;
}
```

**Output Example:**
```javascript
// Input: [7♥, A♠, 7♦, K♣, 7♣]
// Output: { '7': 3, 'A': 1, 'K': 1 }
```

## 🔍 Detection Functions

### Pair Detection
```javascript
function hasPair(cards) {
    const counts = countRanks(cards);
    
    for (const rank in counts) {
        if (counts[rank] === 2) {
            return { hasPair: true, rank: rank };
        }
    }
    
    return { hasPair: false };
}
```

### Two Pair Detection
```javascript
function hasTwoPair(cards) {
    const counts = countRanks(cards);
    const pairs = [];
    
    for (const rank in counts) {
        if (counts[rank] === 2) {
            pairs.push(rank);
        }
    }
    
    if (pairs.length >= 2) {
        return { hasTwoPair: true, ranks: pairs };
    }
    
    return { hasTwoPair: false };
}
```

### Three of a Kind Detection
```javascript
function hasThreeOfAKind(cards) {
    const counts = countRanks(cards);
    
    for (const rank in counts) {
        if (counts[rank] === 3) {
            return { hasTrips: true, rank: rank };
        }
    }
    
    return { hasTrips: false };
}
```

### Four of a Kind Detection
```javascript
function hasFourOfAKind(cards) {
    const counts = countRanks(cards);
    
    for (const rank in counts) {
        if (counts[rank] === 4) {
            return { hasQuads: true, rank: rank };
        }
    }
    
    return { hasQuads: false };
}
```

## 🎴 Sorting Cards

```javascript
function sortCards(cards) {
    // Sort descending (highest first)
    return cards.sort((a, b) => b.value - a.value);
}
```

## 🏆 Complete Evaluation Function

```javascript
function evaluateHand(cards) {
    const sorted = sortCards([...cards]);
    
    // Check in order from strongest to weakest
    const quads = hasFourOfAKind(sorted);
    if (quads.hasQuads) {
        return { rank: 2, name: 'Four of a Kind', value: quads.rank };
    }
    
    const trips = hasThreeOfAKind(sorted);
    if (trips.hasTrips) {
        return { rank: 4, name: 'Three of a Kind', value: trips.rank };
    }
    
    const twoPair = hasTwoPair(sorted);
    if (twoPair.hasTwoPair) {
        return { rank: 7, name: 'Two Pair', values: twoPair.ranks };
    }
    
    const pair = hasPair(sorted);
    if (pair.hasPair) {
        return { rank: 8, name: 'One Pair', value: pair.rank };
    }
    
    return { rank: 9, name: 'High Card', value: sorted[0].rank };
}
```

## 💡 Pro Tips

1. **Always sort first** - Makes evaluation easier
2. **Count frequencies** - Core technique for detecting patterns
3. **Check strongest first** - Prevents false positives
4. **Return early** - As soon as you find a hand, return it
5. **Use descriptive names** - `hasTrips` is clearer than `check3`

## 🐛 Common Mistakes

| Mistake | Fix |
|---------|-----|
| Not initializing counts | Use `counts[rank] || 0` |
| Checking weakest hand first | Check strongest to weakest |
| Modifying original array | Use spread operator `[...cards]` |
| Comparing rank strings incorrectly | Use the `value` property instead |

## 🚀 What's Next?

In **Lesson 4.4**, you'll learn to detect:
- Full House (trips + pair)
- Flush (all same suit)
- Straight (sequence)
- Straight Flush
- Royal Flush
