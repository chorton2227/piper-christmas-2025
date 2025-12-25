# Exercise 2: Detect Pairs and Trips

## 🎯 Goal
Build functions to detect pairs, two pair, three of a kind, and four of a kind.

## 📋 Requirements

1. Implement `hasPair(cards)` function
2. Implement `hasTwoPair(cards)` function
3. Implement `hasThreeOfAKind(cards)` function
4. Implement `hasFourOfAKind(cards)` function
5. Test each function with appropriate hands

## 💡 Hints

- Use the `countRanks()` function from the lesson
- Loop through the counts object
- Check if any rank has count === 2, 3, or 4
- Return an object with results

## 🎴 Test Hands

Create hands to test:
- A hand with a pair
- A hand with two pair
- A hand with three of a kind
- A hand with four of a kind
- A hand with nothing (high card)

## ✅ Success Criteria

Your functions should:
- Correctly detect pairs
- Correctly detect two pair
- Correctly detect trips
- Correctly detect quads
- Return false when not found

Check `answer-key/exercise-2-solution.html` when complete!
