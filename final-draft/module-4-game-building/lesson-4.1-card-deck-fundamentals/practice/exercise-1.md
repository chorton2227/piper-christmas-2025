# Exercise 1: Create and Display a Full Deck 🎴

## 🎯 Objective
Create a complete 52-card deck and display it in an organized way.

## 📋 Instructions

### Part 1: Create the Deck
Write a function called `createDeck()` that:
1. Creates an empty array called `deck`
2. Uses nested loops to create all 52 cards
3. Each card should be an object with `suit`, `rank`, and `value` properties
4. Returns the complete deck array

**Suits:** spades, hearts, diamonds, clubs  
**Ranks:** 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A  
**Values:** 2-10 for number cards, 11 for J, 12 for Q, 13 for K, 14 for A

### Part 2: Display the Deck
Write a function called `displayDeck(deck)` that:
1. Groups cards by suit
2. Displays each suit on its own line
3. Uses Unicode symbols: ♠ ♥ ♦ ♣

Expected output format:
```
♠ SPADES: 2 3 4 5 6 7 8 9 10 J Q K A
♥ HEARTS: 2 3 4 5 6 7 8 9 10 J Q K A
♦ DIAMONDS: 2 3 4 5 6 7 8 9 10 J Q K A
♣ CLUBS: 2 3 4 5 6 7 8 9 10 J Q K A
```

### Part 3: Verify the Deck
Write a function called `verifyDeck(deck)` that checks:
1. Total number of cards is 52
2. Each suit has exactly 13 cards
3. No duplicate cards exist
4. Prints verification results to console

## 💡 Hints

**Hint 1:** Use a nested loop structure:
```javascript
for (let suit of suits) {
    for (let i = 0; i < ranks.length; i++) {
        // Create card here
    }
}
```

**Hint 2:** To group by suit, use `filter()`:
```javascript
const spades = deck.filter(card => card.suit === 'spades');
```

**Hint 3:** To check for duplicates, create unique identifiers:
```javascript
const cardStrings = deck.map(card => `${card.rank}-${card.suit}`);
const uniqueCards = new Set(cardStrings);
```

## ✅ Testing Your Code

Create an HTML file and test your functions:
```javascript
const deck = createDeck();
console.log('Created deck with', deck.length, 'cards');
displayDeck(deck);
verifyDeck(deck);
```

Expected console output:
- "Created deck with 52 cards"
- Deck displayed by suit
- "✓ Deck verified: 52 cards, 4 suits, no duplicates"

## 🎓 Bonus Challenges

1. **Add Color Property:** Modify your createDeck function to add a `color` property ('red' for hearts/diamonds, 'black' for spades/clubs)

2. **Find Specific Cards:** Write a function `findCard(deck, rank, suit)` that finds and returns a specific card

3. **Get High Cards:** Write a function that returns all cards with value ≥ 10

4. **Deck Statistics:** Write a function that calculates:
   - Average card value
   - Highest value card(s)
   - Number of face cards

## 📝 What You're Learning
- Creating objects with properties
- Using nested loops
- Array manipulation with `filter()`, `map()`
- Data verification and validation
- Working with Sets to find duplicates

Good luck! 🍀
