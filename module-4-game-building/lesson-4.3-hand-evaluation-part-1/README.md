# Lesson 4.3: Hand Evaluation (Part 1) 🎯

## 🎯 Lesson Objectives

By the end of this lesson, you will:
- Understand all poker hand rankings from high card to straight flush
- Sort cards by rank and suit for evaluation
- Count card frequencies to detect pairs, trips, and quads
- Implement functions to detect pairs, two pair, three of a kind, and four of a kind
- Compare hands to determine which is stronger
- Build the foundation for a complete hand evaluator

## 📚 Introduction to Poker Hand Rankings

### Understanding Hand Strength

In Texas Hold'em, you make the best 5-card hand from:
- Your 2 hole cards (private)
- The 5 community cards (shared)

Hands are ranked from **strongest to weakest**:

1. **Royal Flush** - A, K, Q, J, 10, all same suit
2. **Straight Flush** - Five cards in sequence, all same suit
3. **Four of a Kind** - Four cards of the same rank
4. **Full House** - Three of a kind + a pair
5. **Flush** - Five cards of the same suit
6. **Straight** - Five cards in sequence
7. **Three of a Kind** - Three cards of the same rank
8. **Two Pair** - Two different pairs
9. **One Pair** - Two cards of the same rank
10. **High Card** - Nothing, highest card wins

### This Lesson's Focus

In this lesson, we'll focus on detecting **frequency-based hands**:
- High Card
- One Pair
- Two Pair
- Three of a Kind
- Four of a Kind

In **Lesson 4.4**, we'll handle **sequence and suit-based hands** (straights and flushes).

## 🎴 Card Representation Review

Remember from Lesson 4.1, cards are objects:

```javascript
{
    suit: 'hearts',    // 'hearts', 'diamonds', 'clubs', 'spades'
    rank: 'A',         // 'A', '2', '3', ... 'J', 'Q', 'K'
    value: 14          // 2-14 (where A=14, K=13, Q=12, J=11)
}
```

The `value` property makes sorting and comparing easier!

## 📊 Step 1: Sorting Cards

### Why Sort?

Sorting cards by value helps us:
- Find sequences (straights)
- Group same ranks together
- Compare hands easily

### Sorting Function

```javascript
function sortCards(cards) {
    return cards.sort((a, b) => b.value - a.value);
}
```

This sorts cards **descending** (highest first).

Example:
```javascript
// Before: [7♥, A♠, 3♦, K♣, 7♣]
// After:  [A♠, K♣, 7♥, 7♣, 3♦]
```

## 📈 Step 2: Counting Card Frequencies

### The Frequency Map

To detect pairs, trips, quads, we need to count how many cards have each rank:

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

Example:
```javascript
// Cards: [7♥, A♠, 7♦, K♣, 7♣]
// Result: { '7': 3, 'A': 1, 'K': 1 }
```

This shows we have **three 7's** and **one each** of Ace and King.

## 🎯 Step 3: Detecting Pairs

### One Pair

A pair is exactly 2 cards of the same rank.

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

Example:
```javascript
// Hand: [A♠, A♥, K♦, 7♣, 3♠]
// Result: { hasPair: true, rank: 'A' }
```

### Two Pair

Two different pairs in the same hand.

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

Example:
```javascript
// Hand: [K♠, K♥, 7♦, 7♣, 3♠]
// Result: { hasTwoPair: true, ranks: ['K', '7'] }
```

## 🎲 Step 4: Three and Four of a Kind

### Three of a Kind (Trips)

Three cards of the same rank.

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

### Four of a Kind (Quads)

Four cards of the same rank (very strong!).

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

## 🏆 Step 5: Evaluating the Best Hand

### The Evaluation Function

We check from strongest to weakest:

```javascript
function evaluateHand(cards) {
    // Sort cards first
    const sorted = sortCards(cards);
    
    // Check for four of a kind
    const quads = hasFourOfAKind(sorted);
    if (quads.hasQuads) {
        return { rank: 2, name: 'Four of a Kind', value: quads.rank };
    }
    
    // Check for three of a kind
    const trips = hasThreeOfAKind(sorted);
    if (trips.hasTrips) {
        return { rank: 4, name: 'Three of a Kind', value: trips.rank };
    }
    
    // Check for two pair
    const twoPair = hasTwoPair(sorted);
    if (twoPair.hasTwoPair) {
        return { rank: 7, name: 'Two Pair', values: twoPair.ranks };
    }
    
    // Check for one pair
    const pair = hasPair(sorted);
    if (pair.hasPair) {
        return { rank: 8, name: 'One Pair', value: pair.rank };
    }
    
    // High card
    return { rank: 9, name: 'High Card', value: sorted[0].rank };
}
```

**Note**: Lower rank numbers = stronger hands (Royal Flush = 0)

## ⚖️ Step 6: Comparing Hands

### Determining the Winner

```javascript
function compareHands(hand1, hand2) {
    const eval1 = evaluateHand(hand1);
    const eval2 = evaluateHand(hand2);
    
    // Lower rank number wins
    if (eval1.rank < eval2.rank) {
        return 1; // Hand 1 wins
    } else if (eval2.rank < eval1.rank) {
        return 2; // Hand 2 wins
    } else {
        // Same hand rank - compare high cards
        return compareHighCards(hand1, hand2);
    }
}
```

## 📝 Algorithm Summary

**To evaluate a poker hand:**

1. ✅ **Sort** cards by value (descending)
2. ✅ **Count** frequencies of each rank
3. ✅ **Check** for four of a kind (4 same rank)
4. ✅ **Check** for three of a kind (3 same rank)
5. ✅ **Check** for two pair (2 different pairs)
6. ✅ **Check** for one pair (2 same rank)
7. ✅ **Default** to high card if nothing else

## 🎯 Practice

Complete the exercises in the `practice/` folder to:
1. Sort and display cards
2. Count rank frequencies
3. Detect pairs and sets
4. Compare hands to find winners

Check your work against the `answer-key/` solutions!

## 🚀 Next Steps

In **Lesson 4.4**, we'll complete hand evaluation by adding:
- Full House detection
- Straight detection (sequences)
- Flush detection (all same suit)
- Straight Flush and Royal Flush

Together, Lessons 4.3 and 4.4 form a complete poker hand evaluator!
