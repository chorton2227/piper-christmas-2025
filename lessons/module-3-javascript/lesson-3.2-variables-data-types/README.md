# Lesson 3.2: Variables and Data Types 📦

## Overview
In this lesson, you'll learn how to store and work with data in JavaScript using **variables**. Variables are like labeled boxes that hold information you want to use later in your program. You'll also learn about different **data types** - the different kinds of information JavaScript can work with.

**Estimated Time:** 60-90 minutes

---

## What You'll Learn
- What variables are and why they're important
- How to create variables using `let` and `const`
- Different data types: numbers, strings, and booleans
- How to check data types with `typeof`
- How to update and use variables
- Best practices for naming variables

---

## What Are Variables?

### The Storage Box Analogy 📦
Think of variables like labeled storage boxes:
- The **label** is the variable name (e.g., `playerScore`)
- The **contents** are the value stored inside (e.g., `100`)
- You can **look inside** the box to see what's in it
- You can **replace** the contents with something new

### Why Variables Matter
Without variables, you'd have to write out every value every time:
```javascript
console.log('Score: ', 100);
console.log('New score: ', 100 + 10);
console.log('Final score: ', 100 + 10 + 5);
```

With variables, you can store and reuse values:
```javascript
let score = 100;
console.log('Score: ', score);
score = score + 10;
console.log('New score: ', score);
score = score + 5;
console.log('Final score: ', score);
```

---

## Creating Variables

### Using `let` (for values that can change)
```javascript
let playerName = 'Alex';
let score = 0;
let isPlaying = true;

// You can change these later
score = 100;
playerName = 'Jordan';
```

**Use `let` when:**
- The value might change later
- You need to update the value
- It's a counter or accumulator

### Using `const` (for values that stay the same)
```javascript
const MAX_PLAYERS = 4;
const GAME_NAME = 'Super Quiz';
const PI = 3.14159;

// You CANNOT change these
// MAX_PLAYERS = 5;  // ❌ Error!
```

**Use `const` when:**
- The value should never change
- It's a setting or configuration
- It's a constant value (like PI)

### Variable Declaration Syntax
```javascript
let variableName = value;
const CONSTANT_NAME = value;
```

Parts:
- **`let` or `const`** - keyword that creates the variable
- **`variableName`** - the name you choose
- **`=`** - assignment operator (puts value in the variable)
- **`value`** - the data you're storing
- **`;`** - semicolon (optional but recommended)

---

## Data Types

JavaScript has several data types, but we'll focus on three main ones:

### 1. Numbers 🔢
Numbers can be whole numbers or decimals:

```javascript
let age = 10;
let price = 19.99;
let temperature = -5;
let bigNumber = 1000000;
```

You can do math with numbers:
```javascript
let x = 10;
let y = 5;
let sum = x + y;        // 15
let difference = x - y;  // 5
let product = x * y;     // 50
let quotient = x / y;    // 2
let remainder = x % y;   // 0
```

### 2. Strings 📝
Strings are text - always in quotes:

```javascript
let firstName = 'Alex';
let lastName = "Smith";
let message = 'Hello, World!';
let emptyString = '';
```

You can combine strings:
```javascript
let firstName = 'Alex';
let lastName = 'Smith';
let fullName = firstName + ' ' + lastName;  // "Alex Smith"
```

**Single vs Double Quotes:**
Both work! Just be consistent and match them:
```javascript
let good1 = 'Hello';
let good2 = "Hello";
let bad = 'Hello";  // ❌ Error! Quotes don't match
```

**Using Quotes Inside Strings:**
```javascript
let quote1 = "It's a beautiful day!";  // Use double quotes outside
let quote2 = 'She said "Hello!"';      // Use single quotes outside
let quote3 = 'It\'s cool!';            // Or use backslash to escape
```

### 3. Booleans ✅❌
Booleans are `true` or `false` - that's it!

```javascript
let isLoggedIn = true;
let gameOver = false;
let hasWon = true;
```

Booleans are used for yes/no decisions:
```javascript
let isRaining = false;
let hasUmbrella = true;
```

---

## The `typeof` Operator

Use `typeof` to check what type of data you have:

```javascript
let age = 10;
console.log(typeof age);  // "number"

let name = 'Alex';
console.log(typeof name);  // "string"

let isActive = true;
console.log(typeof isActive);  // "boolean"
```

**Common Use:**
```javascript
let score = 100;
console.log(score, 'is a', typeof score);  // 100 is a number
```

---

## Working with Variables

### Reading Variables
```javascript
let playerName = 'Alex';
console.log(playerName);  // Prints: Alex
console.log('Hello, ' + playerName);  // Prints: Hello, Alex
```

### Updating Variables (with `let`)
```javascript
let score = 0;
console.log(score);  // 0

score = 10;
console.log(score);  // 10

score = score + 5;
console.log(score);  // 15
```

### You Cannot Update `const`
```javascript
const maxLives = 3;
console.log(maxLives);  // 3

maxLives = 5;  // ❌ ERROR! Cannot reassign a const
```

### Using Variables in Math
```javascript
let x = 10;
let y = 5;

let sum = x + y;
let difference = x - y;
let product = x * y;
let average = (x + y) / 2;

console.log('Sum:', sum);           // Sum: 15
console.log('Average:', average);   // Average: 7.5
```

### Using Variables with Strings
```javascript
let firstName = 'Alex';
let age = 10;

let greeting = 'Hello, my name is ' + firstName;
let info = firstName + ' is ' + age + ' years old';

console.log(greeting);  // Hello, my name is Alex
console.log(info);      // Alex is 10 years old
```

---

## Variable Naming Rules

### Must Follow Rules ⚠️
1. **Start with a letter, underscore, or $**
   ```javascript
   let name = 'Alex';      // ✅
   let _private = true;    // ✅
   let $price = 10;        // ✅
   let 1name = 'Alex';     // ❌ Can't start with number
   ```

2. **No spaces (use camelCase instead)**
   ```javascript
   let playerName = 'Alex';     // ✅ camelCase
   let player name = 'Alex';    // ❌ No spaces
   let player_name = 'Alex';    // ✅ Works, but camelCase is preferred
   ```

3. **Cannot use reserved words**
   ```javascript
   let let = 5;      // ❌ 'let' is a keyword
   let const = 10;   // ❌ 'const' is a keyword
   let function = 3; // ❌ 'function' is a keyword
   let name = 'Alex';    // ✅ Not a reserved word
   ```

4. **Case sensitive**
   ```javascript
   let score = 100;
   let Score = 200;
   let SCORE = 300;
   // These are THREE DIFFERENT variables!
   ```

### Best Practices ✨

1. **Use camelCase**
   ```javascript
   let playerScore = 100;        // ✅ First word lowercase, rest uppercase
   let numberOfLives = 3;        // ✅
   let isGameOver = false;       // ✅
   ```

2. **Use descriptive names**
   ```javascript
   let s = 100;              // ❌ What is 's'?
   let playerScore = 100;    // ✅ Clear and descriptive
   
   let x = 'Alex';           // ❌ Not clear
   let playerName = 'Alex';  // ✅ Clear purpose
   ```

3. **Use UPPERCASE for constants**
   ```javascript
   const MAX_PLAYERS = 4;
   const GAME_TITLE = 'Super Quiz';
   const PI = 3.14159;
   ```

4. **Use meaningful prefixes**
   ```javascript
   let isActive = true;      // Boolean - starts with 'is'
   let hasPermission = true; // Boolean - starts with 'has'
   let canEdit = true;       // Boolean - starts with 'can'
   let playerCount = 5;      // Number - ends with 'Count'
   ```

---

## Common Patterns

### Counters
```javascript
let count = 0;
count = count + 1;  // Increment by 1
count = count + 1;  // Increment again
console.log(count); // 2
```

### Accumulators
```javascript
let total = 0;
total = total + 10;
total = total + 20;
total = total + 30;
console.log('Total:', total);  // Total: 60
```

### Swapping Values
```javascript
let a = 5;
let b = 10;
let temp = a;  // Store a in temporary variable
a = b;         // Put b into a
b = temp;      // Put original a (stored in temp) into b
console.log('a:', a);  // a: 10
console.log('b:', b);  // b: 5
```

### Building Strings
```javascript
let message = '';
message = message + 'Hello ';
message = message + 'there ';
message = message + 'friend!';
console.log(message);  // Hello there friend!
```

---

## Examples in Action

### Example 1: Player Profile
```javascript
// Create player information
let playerName = 'Alex';
let playerLevel = 5;
let playerScore = 1250;
let isOnline = true;

// Display profile
console.log('=== PLAYER PROFILE ===');
console.log('Name:', playerName);
console.log('Level:', playerLevel);
console.log('Score:', playerScore);
console.log('Online:', isOnline);
```

### Example 2: Shopping Cart
```javascript
// Item prices
const SHIRT_PRICE = 20;
const PANTS_PRICE = 35;
const SHOES_PRICE = 60;

// Quantities
let shirtQty = 2;
let pantsQty = 1;
let shoesQty = 1;

// Calculate total
let total = (SHIRT_PRICE * shirtQty) + (PANTS_PRICE * pantsQty) + (SHOES_PRICE * shoesQty);

console.log('Shopping Cart Total: $' + total);  // $135
```

### Example 3: Temperature Converter
```javascript
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;

console.log(celsius + '°C = ' + fahrenheit + '°F');
```

---

## Common Mistakes

### Mistake #1: Forgetting `let` or `const`
```javascript
score = 100;  // ❌ Should use let or const
let score = 100;  // ✅ Correct
```

### Mistake #2: Using `const` for changing values
```javascript
const score = 0;
score = 10;  // ❌ Error! Can't change const
```
**Fix:** Use `let` if the value needs to change.

### Mistake #3: Quotes on Numbers
```javascript
let age = '10';  // ❌ This is a STRING, not a number
let age = 10;    // ✅ This is a number
```

### Mistake #4: Case sensitivity
```javascript
let playerName = 'Alex';
console.log(playername);  // ❌ Error! Wrong case
console.log(playerName);  // ✅ Correct
```

### Mistake #5: Trying to use before declaring
```javascript
console.log(score);  // ❌ Error! score doesn't exist yet
let score = 100;
```
**Fix:** Declare variables before using them.

---

## Quick Reference

### Creating Variables
```javascript
let variableName = value;      // Can change
const CONSTANT_NAME = value;   // Cannot change
```

### Data Types
```javascript
let number = 42;              // Number
let text = 'Hello';           // String
let isTrue = true;            // Boolean
```

### Checking Types
```javascript
console.log(typeof value);    // Shows the data type
```

### Using Variables
```javascript
let x = 10;
let y = x + 5;               // Use in expressions
console.log(x);              // Print to console
x = 20;                      // Update (if using let)
```

---

## Key Concepts Checklist

By the end of this lesson, you should be able to:
- [ ] Explain what variables are and why they're useful
- [ ] Create variables using `let` and `const`
- [ ] Know when to use `let` vs `const`
- [ ] Understand the three main data types (number, string, boolean)
- [ ] Use `typeof` to check data types
- [ ] Update variables (with `let`)
- [ ] Follow variable naming rules and best practices
- [ ] Use variables in calculations and string building
- [ ] Debug common variable-related errors

---

## Practice Time! 🎯

Now it's your turn! Head over to the `practice/` folder and complete the three exercises:

1. **Exercise 1: Character Creator** - Create variables for a game character
2. **Exercise 2: Math with Variables** - Solve problems using variables
3. **Exercise 3: Story Generator** - Build a story with variables

Check the `examples/` folder for working code examples, and use the `answer-key/` folder if you get stuck!

---

## Parent Guide

**For Parents/Teachers:**
This lesson introduces a fundamental programming concept - storing data in variables. Your child is learning:
- **Abstract thinking** - understanding variables as containers for data
- **Memory concepts** - how computers store information
- **Data organization** - keeping track of multiple pieces of information
- **Type systems** - different kinds of data and their properties

**Support your child by:**
- Using real-world analogies (labeled boxes, sticky notes with names)
- Helping them choose descriptive variable names
- Encouraging them to use console.log() to see what's in variables
- Reminding them about `let` vs `const` (does it change or stay the same?)

---

## What's Next?

In **Lesson 3.3**, you'll learn about **Functions** - reusable blocks of code that can take variables as input and produce results. Functions are like mini-programs within your program!

Keep up the great work! 🚀
