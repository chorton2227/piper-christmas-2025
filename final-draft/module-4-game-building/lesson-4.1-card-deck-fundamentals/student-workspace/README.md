# Student Workspace - Lesson 4.1 🎴

Welcome to your practice workspace! Use this area to experiment with card deck code.

## 🎯 Your Mission

Create a working deck of cards, shuffle it, and deal hands to players.

---

## Starter Code

Copy this code into a new HTML file to get started:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Card Deck Practice</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        .container {
            background: rgba(255, 255, 255, 0.1);
            padding: 30px;
            border-radius: 15px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🃏 My Card Deck</h1>
        <p>Open the console (F12) to see your code in action!</p>
    </div>

    <script>
        console.log('=== MY CARD DECK PRACTICE ===\n');
        
        // TODO: Create a function to make a deck
        function createDeck() {
            // Your code here
            const deck = [];
            
            // Hint: Use nested loops to create all 52 cards
            
            return deck;
        }
        
        // TODO: Create a function to shuffle the deck
        function shuffleDeck(deck) {
            // Your code here
            // Hint: Use Fisher-Yates algorithm
        }
        
        // TODO: Create a function to deal cards
        function dealCard(deck) {
            // Your code here
            // Hint: Use pop() to remove and return last card
        }
        
        // TODO: Create a function to display a card
        function displayCard(card) {
            // Your code here
            // Hint: Use Unicode symbols ♠ ♥ ♦ ♣
        }
        
        // Test your code here!
        const myDeck = createDeck();
        console.log('Created deck with', myDeck.length, 'cards');
        
        shuffleDeck(myDeck);
        console.log('Deck shuffled!');
        
        const card = dealCard(myDeck);
        console.log('Dealt card:', displayCard(card));
        console.log('Cards remaining:', myDeck.length);
    </script>
</body>
</html>
```

---

## 📝 Practice Challenges

Try these in order:

### Challenge 1: Create Your First Card
```javascript
const myCard = {
    suit: 'hearts',
    rank: '7',
    value: 7
};

console.log(myCard);
```

### Challenge 2: Create a Small Deck
Make a deck with just the 4 Aces:
```javascript
const aces = [
    { suit: 'spades', rank: 'A', value: 14 },
    { suit: 'hearts', rank: 'A', value: 14 },
    // Add two more...
];
```

### Challenge 3: Use a Loop
Create all 13 hearts:
```javascript
const hearts = [];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

for (let i = 0; i < ranks.length; i++) {
    // Create and add cards here
}
```

### Challenge 4: Nested Loops
Create all 52 cards using two loops (one for suits, one for ranks).

### Challenge 5: Implement Shuffle
Code the Fisher-Yates shuffle algorithm from the lesson.

### Challenge 6: Deal Hands
Deal 5 cards to 4 players.

---

## 🔍 Debugging Tips

### Problem: "deck is not defined"
**Solution:** Make sure you called `createDeck()` and stored the result:
```javascript
const deck = createDeck();  // ✓ Correct
```

### Problem: "Cannot read property 'suit' of undefined"
**Solution:** Check if the deck is empty before dealing:
```javascript
if (deck.length > 0) {
    const card = dealCard(deck);
}
```

### Problem: "Deck only has 13 cards"
**Solution:** Check your loops - you need an outer loop for suits and inner loop for ranks.

### Problem: "Shuffle doesn't seem to work"
**Solution:** Make sure you're using Fisher-Yates, not `.sort()`:
```javascript
// ❌ Wrong
deck.sort(() => Math.random() - 0.5);

// ✓ Correct
for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
}
```

---

## 💡 Experimentation Ideas

Try changing these and see what happens:

1. **Change the values:**
   - Make Aces worth 1 instead of 14
   - Give face cards different values

2. **Add properties:**
   - Add a `color` property ('red' or 'black')
   - Add an `image` property with a file path

3. **Different display:**
   - Show cards as "7 of Hearts" instead of "7♥"
   - Add emojis to your display

4. **Deal differently:**
   - Deal from the top (`shift()`) instead of bottom (`pop()`)
   - Deal 2 cards at once to each player

---

## ✅ Self-Check

Before moving on, make sure you can:

- [ ] Create a single card object
- [ ] Create a complete 52-card deck
- [ ] Shuffle the deck using Fisher-Yates
- [ ] Deal individual cards
- [ ] Display cards with suit symbols
- [ ] Deal to multiple players
- [ ] Explain what an object is
- [ ] Explain what an array is
- [ ] Explain how Fisher-Yates works

---

## 🎉 When You're Done

1. Save your working code
2. Complete the practice exercises
3. Check your solutions against the answer key
4. Move on to Lesson 4.2: Displaying Cards Visually!

---

**Remember:** Coding is learned by DOING, not just reading. Type the code yourself, make mistakes, fix them, and experiment!

Good luck! 🍀
