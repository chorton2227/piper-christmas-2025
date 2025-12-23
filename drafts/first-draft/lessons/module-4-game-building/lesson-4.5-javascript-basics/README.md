# Lesson 4.5: JavaScript Basics & Card System 🃏💻

**Make Your Poker Game Come Alive!**

---

## 📚 Lesson Overview

**Duration**: 2-3 hours

**Difficulty**: Intermediate

**Prerequisites**:
- ✅ Lesson 4.1 - Understand poker hands
- ✅ Lesson 4.2 - Planned your game
- ✅ Lesson 4.3 - Built HTML structure
- ✅ Lesson 4.4 - Styled with CSS

**What You'll Learn**:
- JavaScript fundamentals (variables, functions, arrays, objects)
- DOM manipulation (changing HTML with JavaScript)
- Event listeners (making buttons work)
- Creating a deck of 52 cards
- Shuffling algorithms (Fisher-Yates shuffle)
- Dealing cards to players
- Updating the screen with JavaScript

**What You'll Build**:
- Working "Start Game" button
- Complete 52-card deck system
- Shuffle function
- Deal cards function
- Display cards on screen
- Interactive betting buttons (connected but not fully functional yet)

---

## 🎯 Learning Objectives

By the end of this lesson, you will be able to:

1. **Write basic JavaScript** - Variables, functions, arrays, objects
2. **Manipulate the DOM** - Change HTML content with code
3. **Add event listeners** - Make buttons respond to clicks
4. **Create data structures** - Build a deck of 52 card objects
5. **Implement algorithms** - Fisher-Yates shuffle
6. **Manage game state** - Track dealer/player cards, chips, pot
7. **Debug JavaScript** - Use console.log() and browser DevTools
8. **Think programmatically** - Break problems into functions

---

## 📖 JavaScript Basics

### What is JavaScript?

**JavaScript** is a programming language that makes websites interactive. It's the "brain" of your game!

- **HTML** = Structure (bones)
- **CSS** = Style (skin)
- **JavaScript** = Behavior (brain) ← **We're here!**

### Where Does JavaScript Go?

**Method 1: External File (BEST)**
```html
<!-- In your HTML <head> or before </body> -->
<script src="script.js"></script>
```

**Method 2: Inline (for testing)**
```html
<script>
    console.log('Hello, World!');
</script>
```

**We'll use Method 1** - Create a `script.js` file.

---

## 🔤 JavaScript Fundamentals

### 1. Variables (Storing Data)

```javascript
// Variables hold information
let playerChips = 1000;      // Number
let playerName = "Piper";     // String (text)
let isGameActive = true;      // Boolean (true/false)
const STARTING_CHIPS = 1000;  // Constant (never changes)

// Change variable values
playerChips = 950;  // Subtract 50 for ante
```

**Rules:**
- Use `let` for variables that change
- Use `const` for variables that never change
- Variable names are camelCase: `playerChips`, `dealerHand`
- Constants are UPPER_CASE: `STARTING_CHIPS`, `ANTE_AMOUNT`

### 2. Arrays (Lists of Things)

```javascript
// Array holds multiple values
let suits = ['♠', '♥', '♦', '♣'];
let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

// Access items by index (starts at 0)
console.log(suits[0]);  // ♠
console.log(ranks[12]); // A

// Array properties
console.log(suits.length);  // 4

// Add items
suits.push('★');  // [♠, ♥, ♦, ♣, ★]

// Remove items
suits.pop();  // Removes ★
```

### 3. Objects (Things with Properties)

```javascript
// Object holds related data
let card = {
    rank: 'A',
    suit: '♥',
    value: 14,
    color: 'red'
};

// Access properties
console.log(card.rank);  // 'A'
console.log(card.suit);  // '♥'

// Change properties
card.value = 1;  // Ace can be 1 or 14
```

### 4. Functions (Reusable Code)

```javascript
// Function definition
function greet(name) {
    console.log('Hello, ' + name + '!');
}

// Function call
greet('Piper');  // Prints: Hello, Piper!

// Function with return value
function add(a, b) {
    return a + b;
}

let sum = add(5, 3);  // sum = 8
```

### 5. Conditionals (Making Decisions)

```javascript
let chips = 500;

if (chips > 1000) {
    console.log('You have lots of chips!');
} else if (chips > 100) {
    console.log('You have some chips.');
} else {
    console.log('You are running low!');
}
```

### 6. Loops (Repeating Actions)

```javascript
// For loop
for (let i = 0; i < 5; i++) {
    console.log('Count: ' + i);
}
// Prints: Count: 0, Count: 1, ... Count: 4

// For...of loop (iterate array)
let suits = ['♠', '♥', '♦', '♣'];
for (let suit of suits) {
    console.log(suit);
}
```

---

## 🌐 DOM Manipulation

### What is the DOM?

**DOM** (Document Object Model) = Your HTML as JavaScript sees it.

JavaScript can:
- Read HTML content
- Change HTML content
- Add/remove HTML elements
- Change CSS styles
- Respond to user actions (clicks, typing, etc.)

### Selecting Elements

```javascript
// Select by ID
let title = document.getElementById('game-title');

// Select by class (returns first match)
let button = document.querySelector('.btn-primary');

// Select all by class (returns array)
let allButtons = document.querySelectorAll('.btn');
```

### Changing Content

```javascript
// Change text
document.getElementById('player-chips').textContent = '950';

// Change HTML
document.getElementById('player-cards').innerHTML = '<div class="card">A♥</div>';

// Change style
document.getElementById('game-title').style.color = 'red';

// Add/remove classes
document.getElementById('start-screen').classList.add('active');
document.getElementById('game-screen').classList.remove('active');
```

### Event Listeners (Responding to Clicks)

```javascript
// Add click listener to button
let startButton = document.getElementById('start-btn');
startButton.addEventListener('click', function() {
    console.log('Button clicked!');
    startGame();
});

// Shorter syntax
document.getElementById('fold-btn').addEventListener('click', () => {
    console.log('Player folded');
    fold();
});
```

---

## 🃏 Building the Card Deck

### Step 1: Create Card Object

```javascript
// Card object structure
let aceOfSpades = {
    rank: 'A',
    suit: '♠',
    value: 14,
    color: 'black'
};
```

### Step 2: Create Full Deck

```javascript
// Create all 52 cards
function createDeck() {
    const suits = ['♠', '♥', '♦', '♣'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    
    let deck = [];
    
    for (let suit of suits) {
        for (let i = 0; i < ranks.length; i++) {
            let card = {
                rank: ranks[i],
                suit: suit,
                value: values[i],
                color: (suit === '♥' || suit === '♦') ? 'red' : 'black'
            };
            deck.push(card);
        }
    }
    
    return deck;  // Returns array of 52 card objects
}

// Create the deck
let deck = createDeck();
console.log(deck.length);  // 52
console.log(deck[0]);      // {rank: '2', suit: '♠', value: 2, color: 'black'}
```

### Step 3: Shuffle the Deck

**Fisher-Yates Shuffle Algorithm** (industry standard):

```javascript
function shuffleDeck(deck) {
    // Start from the end and swap with random earlier position
    for (let i = deck.length - 1; i > 0; i--) {
        // Pick random index from 0 to i
        let j = Math.floor(Math.random() * (i + 1));
        
        // Swap deck[i] and deck[j]
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    
    return deck;
}

// Use it
let deck = createDeck();
deck = shuffleDeck(deck);
console.log(deck[0]);  // Random card!
```

**How Fisher-Yates Works:**
1. Start at end of deck (index 51)
2. Pick random card from 0-51, swap with position 51
3. Move to position 50
4. Pick random card from 0-50, swap with position 50
5. Repeat until you reach position 0
6. Result: Perfectly shuffled deck!

### Step 4: Deal Cards

```javascript
function dealCard(deck) {
    // Remove and return last card from deck
    return deck.pop();
}

function dealHand(deck, numberOfCards) {
    let hand = [];
    for (let i = 0; i < numberOfCards; i++) {
        hand.push(dealCard(deck));
    }
    return hand;
}

// Deal 5 cards to player
let playerHand = dealHand(deck, 5);
console.log(playerHand);  // Array of 5 card objects
```

---

## 🎮 Game State Management

### Create Game State Object

```javascript
// Store all game information in one object
let gameState = {
    deck: [],
    playerHand: [],
    dealerHand: [],
    playerChips: 1000,
    dealerChips: 1000,
    pot: 0,
    currentBet: 0,
    ante: 10,
    gameActive: false
};

// Access/modify game state
gameState.playerChips -= 10;  // Subtract ante
gameState.pot += 10;           // Add to pot
gameState.gameActive = true;   // Start game
```

---

## 🖥️ Displaying Cards on Screen

### Create Card HTML Elements

```javascript
function createCardElement(card) {
    // Create div
    let cardDiv = document.createElement('div');
    
    // Add classes
    cardDiv.classList.add('card');
    cardDiv.classList.add(card.color === 'red' ? 'hearts' : 'spades');
    
    // Add content
    cardDiv.innerHTML = `
        <span>${card.rank}</span>
        <span>${card.suit}</span>
    `;
    
    return cardDiv;
}

// Use it
let card = {rank: 'A', suit: '♥', value: 14, color: 'red'};
let cardElement = createCardElement(card);
document.getElementById('player-cards').appendChild(cardElement);
```

### Display Full Hand

```javascript
function displayHand(hand, containerId) {
    // Get container
    let container = document.getElementById(containerId);
    
    // Clear existing cards
    container.innerHTML = '';
    
    // Add each card
    for (let card of hand) {
        let cardElement = createCardElement(card);
        container.appendChild(cardElement);
    }
}

// Use it
displayHand(playerHand, 'player-cards');
displayHand(dealerHand, 'dealer-cards');
```

### Display Face-Down Cards

```javascript
function createFaceDownCard() {
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'face-down');
    return cardDiv;
}

function displayDealerHandHidden(hand) {
    let container = document.getElementById('dealer-cards');
    container.innerHTML = '';
    
    for (let card of hand) {
        let cardElement = createFaceDownCard();
        container.appendChild(cardElement);
    }
}
```

---

## 🎬 Putting It All Together

### Complete Game Flow

```javascript
// ============================================
//  POKER GAME - JAVASCRIPT
// ============================================

// Game state
let gameState = {
    deck: [],
    playerHand: [],
    dealerHand: [],
    playerChips: 1000,
    dealerChips: 1000,
    pot: 0,
    currentBet: 20,
    ante: 10,
    gameActive: false
};

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Game loaded!');
    setupEventListeners();
    updateChipDisplay();
});

// Set up button click listeners
function setupEventListeners() {
    document.getElementById('start-btn').addEventListener('click', startGame);
    document.getElementById('fold-btn').addEventListener('click', fold);
    document.getElementById('call-btn').addEventListener('click', call);
    document.getElementById('raise-btn').addEventListener('click', raise);
}

// Start new game
function startGame() {
    console.log('Starting new game...');
    
    // Reset game state
    gameState.deck = createDeck();
    gameState.deck = shuffleDeck(gameState.deck);
    gameState.playerHand = [];
    gameState.dealerHand = [];
    gameState.pot = 0;
    gameState.currentBet = 20;
    gameState.gameActive = true;
    
    // Take ante from both players
    gameState.playerChips -= gameState.ante;
    gameState.dealerChips -= gameState.ante;
    gameState.pot = gameState.ante * 2;
    
    // Deal cards
    gameState.playerHand = dealHand(gameState.deck, 5);
    gameState.dealerHand = dealHand(gameState.deck, 5);
    
    // Update display
    showGameScreen();
    displayHand(gameState.playerHand, 'player-cards');
    displayDealerHandHidden(gameState.dealerHand);
    updateChipDisplay();
    updatePotDisplay();
    
    console.log('Game started!');
    console.log('Player hand:', gameState.playerHand);
}

// Show/hide screens
function showGameScreen() {
    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('game-screen').classList.add('active');
    document.getElementById('end-screen').classList.remove('active');
}

function showStartScreen() {
    document.getElementById('start-screen').classList.add('active');
    document.getElementById('game-screen').classList.remove('active');
    document.getElementById('end-screen').classList.remove('active');
}

function showEndScreen() {
    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('game-screen').classList.remove('active');
    document.getElementById('end-screen').classList.add('active');
}

// Update displays
function updateChipDisplay() {
    document.getElementById('player-chips').textContent = gameState.playerChips;
}

function updatePotDisplay() {
    document.getElementById('pot-amount').textContent = gameState.pot;
}

// Betting functions (placeholder for now)
function fold() {
    console.log('Player folded');
    // TODO: Implement fold logic in Lesson 4.9
}

function call() {
    console.log('Player called');
    // TODO: Implement call logic in Lesson 4.9
}

function raise() {
    console.log('Player raised');
    // TODO: Implement raise logic in Lesson 4.9
}

// Card deck functions
function createDeck() {
    const suits = ['♠', '♥', '♦', '♣'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    
    let deck = [];
    
    for (let suit of suits) {
        for (let i = 0; i < ranks.length; i++) {
            deck.push({
                rank: ranks[i],
                suit: suit,
                value: values[i],
                color: (suit === '♥' || suit === '♦') ? 'red' : 'black'
            });
        }
    }
    
    return deck;
}

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

function dealCard(deck) {
    return deck.pop();
}

function dealHand(deck, numberOfCards) {
    let hand = [];
    for (let i = 0; i < numberOfCards; i++) {
        hand.push(dealCard(deck));
    }
    return hand;
}

// Display functions
function createCardElement(card) {
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    
    if (card.suit === '♥' || card.suit === '♦') {
        cardDiv.classList.add('hearts');
    } else {
        cardDiv.classList.add('spades');
    }
    
    cardDiv.innerHTML = `
        <span>${card.rank}</span>
        <span>${card.suit}</span>
    `;
    
    return cardDiv;
}

function createFaceDownCard() {
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'face-down');
    return cardDiv;
}

function displayHand(hand, containerId) {
    let container = document.getElementById(containerId);
    container.innerHTML = '';
    
    for (let card of hand) {
        let cardElement = createCardElement(card);
        container.appendChild(cardElement);
    }
}

function displayDealerHandHidden(hand) {
    let container = document.getElementById('dealer-cards');
    container.innerHTML = '';
    
    for (let card of hand) {
        let cardElement = createFaceDownCard();
        container.appendChild(cardElement);
    }
}
```

---

## 🐛 Debugging Tips

### Use console.log()

```javascript
// Print to browser console
console.log('Hello!');
console.log('Player chips:', gameState.playerChips);
console.log('Deck length:', deck.length);
console.log('Player hand:', gameState.playerHand);
```

### Open Browser Console

- **Chrome/Edge**: Press `F12` or `Ctrl+Shift+J`
- **Firefox**: Press `F12` or `Ctrl+Shift+K`
- **Safari**: `Cmd+Option+C`

### Common Errors

**1. "Cannot read property of null"**
- Element ID doesn't exist in HTML
- Check spelling of IDs

**2. "deck.push is not a function"**
- `deck` is not an array
- Check variable initialization

**3. "Unexpected token"**
- Syntax error (missing bracket, quote, semicolon)
- Use code editor highlighting

---

## ✅ Lesson Checklist

By the end of this lesson, you should have:

- [ ] `script.js` file created and linked to HTML
- [ ] Understand variables, arrays, objects, functions
- [ ] Understand DOM manipulation
- [ ] Understand event listeners
- [ ] `createDeck()` function working (52 cards)
- [ ] `shuffleDeck()` function working (Fisher-Yates)
- [ ] `dealCard()` and `dealHand()` functions working
- [ ] `startGame()` function working
- [ ] Cards displaying on screen
- [ ] Chip count updating
- [ ] Pot amount updating
- [ ] Start button working
- [ ] Betting buttons connected (even if not fully functional yet)
- [ ] Console.log() messages showing game flow
- [ ] No errors in browser console

---

## 🎯 Key Takeaways

1. **JavaScript makes HTML interactive** - It's the "brain" of your game
2. **Variables store data** - Use `let` for changing values, `const` for constants
3. **Functions are reusable code** - Write once, use many times
4. **DOM manipulation changes HTML** - `getElementById()`, `textContent`, `classList`
5. **Event listeners respond to clicks** - `addEventListener('click', function)`
6. **Arrays hold lists** - Perfect for deck of cards
7. **Objects group related data** - Card has rank, suit, value, color
8. **Fisher-Yates shuffles perfectly** - Industry standard algorithm
9. **Game state tracks everything** - One object holds all game data
10. **Console is your best friend** - Use `console.log()` to debug

---

## 🚀 What's Next?

**Lesson 4.6 - Displaying Cards**:
- Add deal animation
- Flip cards face-up
- Highlight winning cards
- Show hand rankings
- Add sound effects

**Lesson 4.7 - Hand Evaluation Logic**:
- Detect all 10 poker hands
- Compare two hands algorithmically
- Determine winner
- Handle tiebreakers

---

## 💡 Pro Tips

1. **Test as you code** - Don't write everything at once
2. **Use console.log() liberally** - See what's happening
3. **Name variables clearly** - `playerHand` not `ph`
4. **One function, one job** - Keep functions small and focused
5. **Comment your code** - Explain tricky parts
6. **Break problems down** - Solve small pieces first
7. **Google is your friend** - "JavaScript how to..." is valid!
8. **Experiment!** - Change values, see what happens

---

**Ready to make your game interactive? Let's go!** 🎮✨

**Next file**: `practice/exercise-1.md` - Build Your JavaScript Step-by-Step
