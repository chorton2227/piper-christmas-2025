# JavaScript Quick Reference Cheat Sheet 📝

**For Lesson 4.5 - JavaScript Basics**

---

## 🔤 Variables

```javascript
// Declare variables
let playerScore = 100;      // Can change
const MAX_CARDS = 52;       // Cannot change
var oldWay;                 // Don't use (old style)

// Naming rules
let myVariable;             // ✅ camelCase
let my_variable;            // ❌ Don't use underscores
let MyVariable;             // ❌ Don't capitalize first letter
```

---

## 📦 Arrays (Lists)

```javascript
// Create array
let cards = [];
let numbers = [1, 2, 3, 4, 5];

// Access elements (0-indexed)
numbers[0]                  // 1 (first)
numbers[4]                  // 5 (last)
numbers.length              // 5 (count)

// Add to end
cards.push(card);           // Add one
cards.push(card1, card2);   // Add multiple

// Remove from end
let lastCard = cards.pop(); // Remove and return last

// Remove from beginning
let firstCard = cards.shift();  // Remove and return first

// Add to beginning
cards.unshift(card);        // Add to front

// Loop through array
for (let i = 0; i < cards.length; i++) {
    console.log(cards[i]);
}

// Modern loop
for (let card of cards) {
    console.log(card);
}

// Array methods
cards.includes(card)        // Check if contains
cards.indexOf(card)         // Find position (-1 if not found)
cards.slice(0, 5)          // Copy portion (doesn't modify)
cards.splice(2, 1)         // Remove from middle (modifies)
cards.filter(c => c.value > 10)  // Get matching items
cards.map(c => c.rank)     // Transform each item
```

---

## 🎯 Objects

```javascript
// Create object
let card = {
    rank: 'A',
    suit: '♠',
    value: 14,
    color: 'black'
};

// Access properties
card.rank                   // 'A' (dot notation)
card['rank']               // 'A' (bracket notation)

// Change property
card.value = 11;

// Add new property
card.isWild = false;

// Check if property exists
'rank' in card             // true
card.hasOwnProperty('rank') // true

// Loop through properties
for (let key in card) {
    console.log(key, card[key]);
}

// Get keys/values
Object.keys(card)          // ['rank', 'suit', 'value', 'color']
Object.values(card)        // ['A', '♠', 14, 'black']
```

---

## 🔧 Functions

```javascript
// Function declaration
function dealCard(deck) {
    return deck.pop();
}

// Function with multiple parameters
function createCard(rank, suit, value) {
    return { rank, suit, value };
}

// Arrow function (modern)
const dealCard = (deck) => {
    return deck.pop();
};

// Short arrow function
const dealCard = (deck) => deck.pop();

// Call function
let card = dealCard(myDeck);
let newCard = createCard('K', '♥', 13);
```

---

## ❓ Conditionals

```javascript
// If statement
if (card.value > 10) {
    console.log('Face card');
}

// If-else
if (playerScore > dealerScore) {
    console.log('You win!');
} else {
    console.log('You lose');
}

// If-else if-else
if (score === 21) {
    console.log('Blackjack!');
} else if (score > 21) {
    console.log('Bust!');
} else {
    console.log('Keep playing');
}

// Comparison operators
===    // Equal (strict)
!==    // Not equal
>      // Greater than
<      // Less than
>=     // Greater than or equal
<=     // Less than or equal

// Logical operators
&&     // AND
||     // OR
!      // NOT

// Examples
if (card.value > 10 && card.color === 'red') { }
if (score === 21 || score === 20) { }
if (!gameActive) { }

// Ternary (short if)
let result = (score > 21) ? 'Bust' : 'Safe';
```

---

## 🔁 Loops

```javascript
// For loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// For...of loop (arrays)
for (let card of deck) {
    console.log(card.rank);
}

// For...in loop (objects)
for (let key in gameState) {
    console.log(key, gameState[key]);
}

// While loop
while (deck.length > 0) {
    let card = deck.pop();
}

// Break out of loop
for (let i = 0; i < 100; i++) {
    if (i === 5) break;
}

// Skip iteration
for (let i = 0; i < 10; i++) {
    if (i === 5) continue;
    console.log(i);  // Skips 5
}
```

---

## 🌐 DOM Manipulation

```javascript
// Select elements
document.getElementById('player-cards')
document.querySelector('.btn-primary')
document.querySelectorAll('.card')

// Change text
element.textContent = 'Hello';      // Plain text
element.innerHTML = '<b>Bold</b>';  // HTML

// Change styles
element.style.color = 'red';
element.style.display = 'none';

// Classes
element.classList.add('active');
element.classList.remove('active');
element.classList.toggle('active');
element.classList.contains('active');

// Create elements
let div = document.createElement('div');
div.className = 'card';
div.textContent = 'A♠';

// Add to page
parent.appendChild(div);
parent.removeChild(div);
parent.innerHTML = '';  // Clear all children

// Attributes
element.getAttribute('id');
element.setAttribute('data-value', '10');
element.removeAttribute('disabled');
```

---

## 🖱️ Event Listeners

```javascript
// Add click listener
element.addEventListener('click', function() {
    console.log('Clicked!');
});

// Arrow function
element.addEventListener('click', () => {
    console.log('Clicked!');
});

// Named function
function handleClick() {
    console.log('Clicked!');
}
element.addEventListener('click', handleClick);

// Common events
'click'         // Mouse click
'dblclick'      // Double click
'mouseenter'    // Mouse over
'mouseleave'    // Mouse out
'keydown'       // Key pressed
'keyup'         // Key released
'submit'        // Form submitted
'change'        // Input changed

// Wait for page load
document.addEventListener('DOMContentLoaded', () => {
    // Page ready
});

// Remove listener
element.removeEventListener('click', handleClick);
```

---

## 🎲 Random Numbers

```javascript
// Random decimal 0 to 1
Math.random()                    // 0.847362...

// Random integer 0 to 9
Math.floor(Math.random() * 10)

// Random integer 1 to 10
Math.floor(Math.random() * 10) + 1

// Random integer in range [min, max]
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Shuffle array (Fisher-Yates)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
```

---

## 🔢 Math Operations

```javascript
// Basic math
5 + 3           // 8 (add)
5 - 3           // 2 (subtract)
5 * 3           // 15 (multiply)
10 / 2          // 5 (divide)
10 % 3          // 1 (remainder/modulo)
2 ** 3          // 8 (exponent: 2³)

// Increment/decrement
let x = 5;
x++             // x = 6 (add 1)
x--             // x = 5 (subtract 1)
x += 10         // x = 15 (add 10)
x -= 5          // x = 10 (subtract 5)
x *= 2          // x = 20 (multiply by 2)

// Math functions
Math.floor(3.7)    // 3 (round down)
Math.ceil(3.2)     // 4 (round up)
Math.round(3.5)    // 4 (round nearest)
Math.abs(-5)       // 5 (absolute value)
Math.min(2, 5, 1)  // 1 (smallest)
Math.max(2, 5, 1)  // 5 (largest)
Math.pow(2, 3)     // 8 (2³)
Math.sqrt(16)      // 4 (square root)
```

---

## 📝 Strings

```javascript
// Create strings
let name = 'Alice';
let greeting = "Hello";
let message = `Hello, ${name}!`;  // Template literal

// Combine strings
'Hello' + ' ' + 'World'           // 'Hello World'
`${rank}${suit}`                  // Combine variables

// String properties/methods
text.length                       // Length
text.toUpperCase()               // 'HELLO'
text.toLowerCase()               // 'hello'
text.includes('world')           // Check if contains
text.startsWith('Hello')         // Check start
text.endsWith('!')               // Check end
text.slice(0, 5)                 // Get portion
text.split(' ')                  // Split into array
text.trim()                      // Remove whitespace
text.replace('old', 'new')       // Replace text

// Convert types
String(42)                       // '42'
Number('42')                     // 42
parseInt('42')                   // 42
parseFloat('3.14')              // 3.14
```

---

## 🐛 Console & Debugging

```javascript
// Print to console
console.log('Message');
console.log('Score:', score);
console.log(card);              // Print object
console.log(deck);              // Print array

// Different log types
console.error('Error message'); // Red
console.warn('Warning');        // Yellow
console.info('Info');          // Blue

// Print table
console.table(deck);           // Nice table format

// Clear console
console.clear();

// Debugger breakpoint
debugger;  // Pauses execution

// Check type
typeof variable                // 'number', 'string', 'object', etc.

// Check if defined
if (variable !== undefined) { }
if (variable === null) { }
```

---

## ⚡ Common Patterns for Card Games

### Create 52-Card Deck
```javascript
function createDeck() {
    const suits = ['♠', '♥', '♦', '♣'];
    const ranks = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    const values = [2,3,4,5,6,7,8,9,10,11,12,13,14];
    
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
```

### Shuffle Deck (Fisher-Yates)
```javascript
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}
```

### Deal Cards
```javascript
function dealCard(deck) {
    return deck.pop();
}

function dealHand(deck, count) {
    let hand = [];
    for (let i = 0; i < count; i++) {
        hand.push(dealCard(deck));
    }
    return hand;
}
```

### Display Card
```javascript
function createCardElement(card) {
    let cardDiv = document.createElement('div');
    cardDiv.className = `card ${card.color}`;
    cardDiv.textContent = `${card.rank}${card.suit}`;
    return cardDiv;
}

function displayHand(hand, containerId) {
    let container = document.getElementById(containerId);
    container.innerHTML = '';
    for (let card of hand) {
        container.appendChild(createCardElement(card));
    }
}
```

### Game State Pattern
```javascript
let gameState = {
    deck: [],
    playerHand: [],
    dealerHand: [],
    playerChips: 1000,
    pot: 0,
    gameActive: false
};
```

### Show/Hide Screens
```javascript
function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show selected screen
    document.getElementById(screenId).classList.add('active');
}
```

---

## ⌨️ Keyboard Shortcuts for DevTools

- **F12** - Open DevTools
- **Ctrl + Shift + J** - Open Console
- **Ctrl + Shift + I** - Open Inspector
- **F5** - Refresh page
- **Ctrl + Shift + R** - Hard refresh (clear cache)

---

## 📚 Common Errors & Fixes

| Error | Cause | Fix |
|-------|-------|-----|
| `Uncaught ReferenceError: x is not defined` | Variable doesn't exist | Check spelling, declare variable |
| `Uncaught TypeError: Cannot read property 'x' of null` | Element not found | Check getElementById spelling |
| `Uncaught TypeError: x is not a function` | Calling non-function | Check function name spelling |
| `Uncaught SyntaxError: Unexpected token` | Missing bracket/quote | Check all `{`, `}`, `(`, `)`, `'`, `"` |
| Nothing happens | Script not linked | Check `<script src="script.js">` |
| `NaN` (Not a Number) | Math on non-number | Use `Number()` or `parseInt()` |

---

## 💡 Best Practices

✅ **DO:**
- Use `const` for values that don't change
- Use `let` for values that do change
- Use meaningful variable names
- Add comments to explain complex code
- Console.log to debug
- Test frequently

❌ **DON'T:**
- Use `var` (outdated)
- Use single-letter variables (except loop counters)
- Forget semicolons
- Nest too many levels deep
- Copy/paste without understanding

---

**Keep this cheat sheet handy while coding!** 🚀
