# Lesson 4.4: Hand Evaluation (Part 2) 🎯

## 🎯 Lesson Objectives

By the end of this lesson, you will:
- Detect Full House (three of a kind + pair)
- Implement straight detection (5 cards in sequence)
- Implement flush detection (5 cards of same suit)
- Detect Straight Flush and Royal Flush
- Complete a full poker hand evaluator
- Handle edge cases like Ace-low straights

## 📚 Review: What We've Covered

In Lesson 4.3, we learned to detect **frequency-based hands**:
- High Card, One Pair, Two Pair, Three of a Kind, Four of a Kind

In this lesson, we'll complete the evaluator with **combination hands**:
- Full House (trips + pair)
- Flush (all same suit)
- Straight (sequence)
- Straight Flush (sequence + same suit)
- Royal Flush (A-K-Q-J-10 all same suit)

## 🏠 Full House Detection

### What is a Full House?

A Full House is **three of a kind PLUS a pair**. Example: 7♥ 7♠ 7♦ K♣ K♠

### Detection Algorithm

```javascript
function hasFullHouse(cards) {
    const counts = countRanks(cards);
    let hasTrips = false;
    let hasPair = false;
    let tripsRank, pairRank;
    
    // Find trips and pair
    for (const rank in counts) {
        if (counts[rank] === 3) {
            hasTrips = true;
            tripsRank = rank;
        }
        if (counts[rank] === 2) {
            hasPair = true;
            pairRank = rank;
        }
    }
    
    if (hasTrips && hasPair) {
        return { hasFullHouse: true, trips: tripsRank, pair: pairRank };
    }
    
    return { hasFullHouse: false };
}
```

## 💧 Flush Detection

### What is a Flush?

A Flush is **5 cards of the same suit**. Example: A♠ K♠ 8♠ 5♠ 2♠ (all spades)

### Detection Algorithm

```javascript
function hasFlush(cards) {
    // Count cards by suit
    const suitCounts = {};
    
    for (const card of cards) {
        const suit = card.suit;
        suitCounts[suit] = (suitCounts[suit] || 0) + 1;
    }
    
    // Check if any suit has 5+ cards
    for (const suit in suitCounts) {
        if (suitCounts[suit] >= 5) {
            return { hasFlush: true, suit: suit };
        }
    }
    
    return { hasFlush: false };
}
```

**Note**: In Texas Hold'em with 7 total cards (2 hole + 5 community), you could have 6 or 7 of the same suit!

## 📈 Straight Detection

### What is a Straight?

A Straight is **5 cards in sequence**. Example: 9♥ 8♠ 7♦ 6♣ 5♠

### The Challenge: Aces

Aces can be **high** (A-K-Q-J-10) or **low** (5-4-3-2-A). We need to check both!

### Detection Algorithm

```javascript
function hasStraight(cards) {
    // Sort cards and remove duplicates
    const sorted = [...cards].sort((a, b) => b.value - a.value);
    const uniqueValues = [...new Set(sorted.map(c => c.value))];
    
    // Check for 5 consecutive values
    for (let i = 0; i <= uniqueValues.length - 5; i++) {
        if (uniqueValues[i] - uniqueValues[i+4] === 4) {
            return { hasStraight: true, highCard: uniqueValues[i] };
        }
    }
    
    // Check for Ace-low straight (5-4-3-2-A)
    if (uniqueValues.includes(14) && // Ace
        uniqueValues.includes(5) &&
        uniqueValues.includes(4) &&
        uniqueValues.includes(3) &&
        uniqueValues.includes(2)) {
        return { hasStraight: true, highCard: 5 };
    }
    
    return { hasStraight: false };
}
```

**Key Points**:
- Remove duplicate ranks first
- Check for consecutive values (difference of 4 across 5 cards)
- Special case for Ace-low (wheel): A-2-3-4-5

## 🌊 Straight Flush Detection

### What is a Straight Flush?

Both a **straight AND a flush** at the same time! Example: 9♠ 8♠ 7♠ 6♠ 5♠

### Detection Algorithm

```javascript
function hasStraightFlush(cards) {
    // Group cards by suit
    const bySuit = {};
    for (const card of cards) {
        if (!bySuit[card.suit]) {
            bySuit[card.suit] = [];
        }
        bySuit[card.suit].push(card);
    }
    
    // Check each suit for a straight
    for (const suit in bySuit) {
        if (bySuit[suit].length >= 5) {
            const straightCheck = hasStraight(bySuit[suit]);
            if (straightCheck.hasStraight) {
                return { 
                    hasStraightFlush: true, 
                    suit: suit, 
                    highCard: straightCheck.highCard 
                };
            }
        }
    }
    
    return { hasStraightFlush: false };
}
```

## 👑 Royal Flush Detection

### What is a Royal Flush?

The **best possible hand**: A-K-Q-J-10 all of the same suit!

### Detection Algorithm

```javascript
function hasRoyalFlush(cards) {
    const straightFlush = hasStraightFlush(cards);
    
    // Royal flush is a straight flush with Ace high
    if (straightFlush.hasStraightFlush && straightFlush.highCard === 14) {
        return { hasRoyalFlush: true, suit: straightFlush.suit };
    }
    
    return { hasRoyalFlush: false };
}
```

## 🏆 Complete Hand Evaluator

Now we combine everything:

```javascript
function evaluateHand(cards) {
    // Check from strongest to weakest
    
    // Royal Flush
    const royalFlush = hasRoyalFlush(cards);
    if (royalFlush.hasRoyalFlush) {
        return { rank: 0, name: 'Royal Flush', suit: royalFlush.suit };
    }
    
    // Straight Flush
    const straightFlush = hasStraightFlush(cards);
    if (straightFlush.hasStraightFlush) {
        return { rank: 1, name: 'Straight Flush', highCard: straightFlush.highCard };
    }
    
    // Four of a Kind
    const quads = hasFourOfAKind(cards);
    if (quads.hasQuads) {
        return { rank: 2, name: 'Four of a Kind', value: quads.rank };
    }
    
    // Full House
    const fullHouse = hasFullHouse(cards);
    if (fullHouse.hasFullHouse) {
        return { rank: 3, name: 'Full House', trips: fullHouse.trips, pair: fullHouse.pair };
    }
    
    // Flush
    const flush = hasFlush(cards);
    if (flush.hasFlush) {
        return { rank: 5, name: 'Flush', suit: flush.suit };
    }
    
    // Straight
    const straight = hasStraight(cards);
    if (straight.hasStraight) {
        return { rank: 6, name: 'Straight', highCard: straight.highCard };
    }
    
    // Three of a Kind
    const trips = hasThreeOfAKind(cards);
    if (trips.hasTrips) {
        return { rank: 7, name: 'Three of a Kind', value: trips.rank };
    }
    
    // Two Pair
    const twoPair = hasTwoPair(cards);
    if (twoPair.hasTwoPair) {
        return { rank: 8, name: 'Two Pair', values: twoPair.ranks };
    }
    
    // One Pair
    const pair = hasPair(cards);
    if (pair.hasPair) {
        return { rank: 9, name: 'One Pair', value: pair.rank };
    }
    
    // High Card
    const sorted = [...cards].sort((a, b) => b.value - a.value);
    return { rank: 10, name: 'High Card', value: sorted[0].rank };
}
```

## 🎯 Complete Ranking System

| Rank | Hand Name | Example |
|------|-----------|---------|
| 0 | Royal Flush | A♠ K♠ Q♠ J♠ 10♠ |
| 1 | Straight Flush | 9♥ 8♥ 7♥ 6♥ 5♥ |
| 2 | Four of a Kind | Q♦ Q♠ Q♥ Q♣ 5♠ |
| 3 | Full House | 7♥ 7♠ 7♦ K♣ K♠ |
| 5 | Flush | A♠ K♠ 8♠ 5♠ 2♠ |
| 6 | Straight | 9♥ 8♠ 7♦ 6♣ 5♠ |
| 7 | Three of a Kind | 7♠ 7♥ 7♦ A♣ K♠ |
| 8 | Two Pair | K♠ K♥ 7♦ 7♣ 3♠ |
| 9 | One Pair | A♠ A♥ K♦ 7♣ 3♠ |
| 10 | High Card | A♠ K♦ Q♣ 9♥ 5♠ |

## 🎯 Practice

Complete the exercises in the `practice/` folder to:
1. Detect flushes and straights
2. Build the complete evaluator
3. Handle edge cases
4. Test with thousands of random hands

Check your work against the `answer-key/` solutions!

## 🚀 Next Steps

Congratulations! You now have a complete poker hand evaluator. In **Lesson 4.5**, we'll use this evaluator in a real game by managing game state!
