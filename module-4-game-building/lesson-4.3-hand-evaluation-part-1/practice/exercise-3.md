# Exercise 3: Complete Hand Evaluator

## 🎯 Goal
Build a complete hand evaluator that determines the best hand from 7 cards.

## 📋 Requirements

1. Create an `evaluateHand(cards)` function
2. Check for all hand types (in order from strongest to weakest):
   - Four of a Kind
   - Three of a Kind
   - Two Pair
   - One Pair
   - High Card
3. Return the hand name and relevant values
4. Test with multiple different hands
5. Create a visual display showing the hand strength

## 💡 Algorithm

```
1. Count rank frequencies
2. Check for quads (4 of same rank)
3. Check for trips (3 of same rank)
4. Check for two pair (2 different pairs)
5. Check for one pair (2 of same rank)
6. Default to high card
```

## 🎴 Test Scenarios

Test with these hands:
1. Four Aces + random cards
2. Three Kings + random cards
3. Two pairs (Jacks and 7s) + random
4. Pair of Queens + random cards
5. All different ranks (high card)

## ✅ Success Criteria

Your evaluator should:
- Correctly identify all hand types
- Return appropriate hand rankings
- Display results clearly
- Work with any 5-7 card combination

Check `answer-key/exercise-3-solution.html` when complete!
