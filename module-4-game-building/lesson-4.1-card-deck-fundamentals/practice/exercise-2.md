# Exercise 2: Shuffle and Deal to Players 🎲

## 🎯 Objective
Implement the Fisher-Yates shuffle algorithm and deal cards to multiple players.

## 📋 Instructions

### Part 1: Implement Fisher-Yates Shuffle
Write a function called `shuffleDeck(deck)` that:
1. Takes a deck array as a parameter
2. Shuffles it using the Fisher-Yates algorithm
3. Modifies the original array (in-place shuffle)
4. Does NOT return anything (void function)

**Algorithm Steps:**
1. Start at the last card (index = deck.length - 1)
2. Pick a random index from 0 to current position
3. Swap the current card with the random card
4. Move to the previous position
5. Repeat until you reach the first card

### Part 2: Deal Cards to Players
Write a function called `dealToPlayers(deck, numPlayers, cardsPerPlayer)` that:
1. Creates an array of player objects
2. Each player has a `name` and `hand` (array of cards)
3. Deals cards one at a time to each player (like real poker)
4. Returns the array of players

Example player structure:
```javascript
{
    name: "Player 1",
    hand: [card1, card2]
}
```

### Part 3: Display Player Hands
Write a function called `displayHands(players)` that:
1. Takes the players array
2. Displays each player's hand in a readable format
3. Uses card symbols (♠ ♥ ♦ ♣)

Expected output:
```
Player 1: 7♠ K♥
Player 2: 3♦ A♣
Player 3: 9♥ 2♠
Player 4: Q♦ 5♣
```

### Part 4: Simulate a Poker Deal
Write a complete simulation that:
1. Creates a deck
2. Shuffles it
3. Deals 2 cards to 6 players
4. Displays all hands
5. Shows how many cards remain in the deck

## 💡 Hints

**Hint 1:** Fisher-Yates swap using array destructuring:
```javascript
[deck[i], deck[j]] = [deck[j], deck[i]];
```

**Hint 2:** Random number from 0 to i (inclusive):
```javascript
const j = Math.floor(Math.random() * (i + 1));
```

**Hint 3:** Deal one at a time to simulate real dealing:
```javascript
for (let round = 0; round < cardsPerPlayer; round++) {
    for (let playerNum = 0; playerNum < numPlayers; playerNum++) {
        // Deal one card to this player
    }
}
```

**Hint 4:** Create a helper function to display a card:
```javascript
function displayCard(card) {
    const symbols = { 'spades': '♠', 'hearts': '♥', 'diamonds': '♦', 'clubs': '♣' };
    return card.rank + symbols[card.suit];
}
```

## ✅ Testing Your Code

Test with this code:
```javascript
const deck = createDeck();
console.log('Original first 3 cards:', deck.slice(0, 3));

shuffleDeck(deck);
console.log('After shuffle first 3 cards:', deck.slice(0, 3));

const players = dealToPlayers(deck, 6, 2);
displayHands(players);
console.log('Cards remaining:', deck.length);
```

Expected results:
- Cards should be in different order after shuffle
- 6 players each with 2 cards
- 40 cards remaining (52 - 12 = 40)

## 🎓 Bonus Challenges

1. **Verify Shuffle:** Shuffle the same deck multiple times and verify you get different arrangements each time

2. **Dealer Button:** Modify `dealToPlayers` to accept a `dealerPosition` parameter and mark which player is the dealer

3. **Custom Dealing Patterns:** Write a function that deals in different patterns (e.g., 2 cards at once to each player, or all cards to player 1 then player 2, etc.)

4. **Burn Cards:** Modify your poker simulation to "burn" (discard) a card before dealing the flop, turn, and river

5. **Safety Check:** Add validation to prevent dealing more cards than available in the deck

## 📝 What You're Learning
- Implementing classic algorithms (Fisher-Yates)
- Array manipulation and mutation
- Nested loops for complex dealing patterns
- Object creation and management
- Random number generation
- Simulating real-world processes in code

Good luck! 🍀
