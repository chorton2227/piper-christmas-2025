# Exercise 3: Build a "War" Card Game 🎮

## 🎯 Objective
Create a simple "War" card game to practice deck management, dealing, and comparison logic.

## 📖 Game Rules

**War** is a simple card game:
1. Deck is shuffled and split evenly between 2 players
2. Each player flips their top card
3. Higher card wins both cards
4. In case of a tie (war), each player plays 3 cards face-down, then 1 face-up
5. Higher face-up card wins all cards
6. Game continues until one player has all cards (or time limit)

For this exercise, we'll build a simplified version that plays 10 rounds.

## 📋 Instructions

### Part 1: Setup Functions

Write these functions:

**`createDeck()`** - Creates a standard 52-card deck

**`shuffleDeck(deck)`** - Shuffles the deck using Fisher-Yates

**`splitDeck(deck)`** - Splits deck into two equal hands  
Returns: `{ player1: [...], player2: [...] }`

### Part 2: Game Logic

**`compareCards(card1, card2)`**  
- Returns 1 if card1 wins
- Returns 2 if card2 wins
- Returns 0 if tie (war)

**`playRound(player1Hand, player2Hand)`**  
- Each player plays their top card (remove from hand)
- Compare the cards
- Winner gets both cards (adds to bottom of their hand)
- Return object with round results:
```javascript
{
    player1Card: card1,
    player2Card: card2,
    winner: 1 or 2 or 0,
    message: "Player 1 wins with K♠ vs 7♥"
}
```

### Part 3: Game Simulation

**`playWarGame(rounds)`**  
- Creates and shuffles deck
- Splits deck between players
- Plays specified number of rounds
- Tracks wins for each player
- Displays results after each round
- Shows final score

### Part 4: Display Functions

**`displayCard(card)`** - Returns formatted card string (e.g., "A♠")

**`displayRoundResult(result)`** - Prints round result to console

**`displayGameSummary(player1Wins, player2Wins, ties)`** - Shows final stats

## 💡 Example Output

```
=== WAR CARD GAME ===
Starting with 26 cards each

Round 1:
  Player 1 plays: 7♦
  Player 2 plays: K♠
  Player 2 wins!
  Score: P1: 25 cards | P2: 27 cards

Round 2:
  Player 1 plays: A♥
  Player 2 plays: 3♣
  Player 1 wins!
  Score: P1: 26 cards | P2: 26 cards

...

=== GAME OVER ===
Player 1 wins: 4
Player 2 wins: 5
Ties: 1
Final: P1: 24 cards | P2: 28 cards
```

## 💡 Hints

**Hint 1:** Split deck evenly:
```javascript
function splitDeck(deck) {
    const mid = Math.floor(deck.length / 2);
    return {
        player1: deck.slice(0, mid),
        player2: deck.slice(mid)
    };
}
```

**Hint 2:** Remove card from top, add to bottom:
```javascript
const card = hand.shift();  // Remove from top
hand.push(card1, card2);     // Add to bottom
```

**Hint 3:** Compare card values:
```javascript
if (card1.value > card2.value) {
    return 1;  // Player 1 wins
} else if (card2.value > card1.value) {
    return 2;  // Player 2 wins
} else {
    return 0;  // Tie
}
```

## ✅ Testing Your Code

```javascript
// Test individual functions
const deck = createDeck();
console.log('Deck size:', deck.length);  // Should be 52

shuffleDeck(deck);
const hands = splitDeck(deck);
console.log('Player 1 cards:', hands.player1.length);  // Should be 26
console.log('Player 2 cards:', hands.player2.length);  // Should be 26

// Play the game
playWarGame(10);
```

## 🎓 Bonus Challenges

1. **Handle True War:** When cards tie, implement the full war rules (3 down, 1 up)

2. **Play Until Winner:** Keep playing until one player has all 52 cards (add a maximum round limit to prevent infinite games)

3. **Animation Delay:** Use `setTimeout()` to add a delay between rounds (makes it more exciting to watch)

4. **Win Probability:** Before the game starts, show the probability of winning based on high cards in each hand

5. **Game Statistics:** Track additional stats like:
   - Longest winning streak
   - Highest card played
   - Number of wars (ties)
   - Average card value per player

6. **Interactive Version:** Let the user press a button to play each round instead of automatic play

## 📝 What You're Learning
- Managing game state
- Implementing game rules in code
- Working with queues (adding to end, removing from start)
- Comparison logic
- Game loop patterns
- Statistics and tracking
- User feedback and display formatting

This exercise brings together everything you've learned about card management!

Good luck! 🍀
