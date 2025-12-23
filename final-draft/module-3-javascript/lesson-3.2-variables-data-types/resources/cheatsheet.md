
## Creating Variables

### Using `let` (for values that change)
```javascript
let score = 0;
let playerName = 'Alex';
let isPlaying = true;

// Can update later
score = 100;
playerName = 'Jordan';
```

### Using `const` (for values that stay the same)
```javascript
const MAX_PLAYERS = 4;
const GAME_NAME = 'Super Quiz';
const PI = 3.14159;

// Cannot update (will cause error)
// MAX_PLAYERS = 5;  ❌
```

---

## Data Types

### Numbers
```javascript
let age = 10;              // Whole number
let price = 19.99;         // Decimal
let temperature = -5;      // Negative
let big = 1000000;         // Large number
```

### Strings (Text)
```javascript
let name = 'Alex';         // Single quotes
let city = "Portland";     // Double quotes
let message = 'Hello!';    // Any text
let empty = '';            // Empty string
```

### Booleans (True/False)
```javascript
let isActive = true;
let gameOver = false;
let hasWon = true;
```

---

## Using Variables

### Reading Values
```javascript
let score = 100;
console.log(score);              // Prints: 100
console.log('Score:', score);    // Prints: Score: 100
```

### Updating Values (with `let`)
```javascript
let score = 0;
score = 10;        // Now score is 10
score = 20;        // Now score is 20
score = score + 5; // Now score is 25
```

### Cannot Update `const`
```javascript
const MAX = 10;
MAX = 20;  // ❌ ERROR!
```

---

## Math Operations

```javascript
let x = 10;
let y = 5;

let sum = x + y;           // 15 (addition)
let difference = x - y;    // 5 (subtraction)
let product = x * y;       // 50 (multiplication)
let quotient = x / y;      // 2 (division)
let remainder = x % y;     // 0 (modulo/remainder)
```

### Building on Results
```javascript
let score = 100;
score = score + 50;   // 150
score = score - 30;   // 120
score = score * 2;    // 240
```

---

## String Concatenation (Combining)

### Joining Strings
```javascript
let first = 'Hello';
let last = 'World';
let full = first + ' ' + last;  // "Hello World"
```

### Mixing Strings and Numbers
```javascript
let name = 'Alex';
let age = 10;
let message = name + ' is ' + age + ' years old';
// "Alex is 10 years old"
```

### Building Strings Gradually
```javascript
let story = '';
story = story + 'Once upon a time, ';
story = story + 'there was a hero. ';
story = story + 'The end.';
```

---

## The `typeof` Operator

Check what type a variable is:

```javascript
let num = 42;
let text = 'Hello';
let bool = true;

console.log(typeof num);    // "number"
console.log(typeof text);   // "string"
console.log(typeof bool);   // "boolean"
```

---

## Variable Naming Rules

### Must Follow ⚠️

1. **Start with letter, underscore, or $**
   ```javascript
   let name = 'Alex';    ✅
   let _temp = 5;        ✅
   let $price = 10;      ✅
   let 1name = 'Alex';   ❌ Can't start with number
   ```

2. **No spaces (use camelCase)**
   ```javascript
   let playerName = 'Alex';      ✅
   let player name = 'Alex';     ❌ No spaces
   ```

3. **Cannot use reserved words**
   ```javascript
   let name = 'Alex';     ✅
   let let = 5;           ❌ 'let' is reserved
   let const = 10;        ❌ 'const' is reserved
   ```

4. **Case sensitive**
   ```javascript
   let score = 100;
   let Score = 200;
   let SCORE = 300;
   // These are THREE DIFFERENT variables!
   ```

---

## Best Practices ✨

### 1. Use Descriptive Names
```javascript
let x = 100;              ❌ What is x?
let playerScore = 100;    ✅ Clear purpose!
```

### 2. Use camelCase
```javascript
let playerScore = 100;        ✅
let player_score = 100;       ❌ (use camelCase, not snake_case)
let playerscore = 100;        ❌ Hard to read
```

### 3. Use UPPERCASE for Constants
```javascript
const MAX_PLAYERS = 4;
const GAME_TITLE = 'Quiz Master';
```

### 4. Use Prefixes for Booleans
```javascript
let isActive = true;       ✅ Clear it's true/false
let hasWon = false;        ✅ Question format
let canEdit = true;        ✅ Permission check
```

### 5. Group Related Variables
```javascript
// Player stats
let health = 100;
let mana = 50;
let level = 1;

// Game settings
const MAX_LEVEL = 10;
const STARTING_LIVES = 3;
```

---

## Common Patterns

### Counter
```javascript
let count = 0;
count = count + 1;  // Increment
count = count + 1;  // Increment again
console.log(count); // 2
```

### Accumulator
```javascript
let total = 0;
total = total + 10;
total = total + 20;
total = total + 30;
console.log(total); // 60
```

### Swapping Values
```javascript
let a = 5;
let b = 10;
let temp = a;  // Store a temporarily
a = b;         // Put b into a
b = temp;      // Put original a into b
// Now: a = 10, b = 5
```

---

## Common Mistakes

### Mistake #1: Forgetting `let` or `const`
```javascript
score = 100;        ❌
let score = 100;    ✅
```

### Mistake #2: Using `const` for Changing Values
```javascript
const score = 0;
score = 10;  ❌ Error!

let score = 0;
score = 10;  ✅ Works!
```

### Mistake #3: Quotes on Numbers
```javascript
let age = '10';    ❌ This is a STRING
let age = 10;      ✅ This is a NUMBER
```

### Mistake #4: Case Sensitivity
```javascript
let playerName = 'Alex';
console.log(playername);  ❌ Wrong case
console.log(playerName);  ✅ Correct
```

---

## Quick Examples

### Example 1: Game Stats
```javascript
const GAME_NAME = 'Adventure Quest';
let score = 0;
let lives = 3;
let isPlaying = true;

console.log(GAME_NAME);
console.log('Score:', score);
console.log('Lives:', lives);
```

### Example 2: Shopping Cart
```javascript
const PRICE = 10;
let quantity = 3;
let total = PRICE * quantity;
console.log('Total: $' + total);
```

### Example 3: Profile Builder
```javascript
let firstName = 'Alex';
let lastName = 'Smith';
let age = 10;
let fullName = firstName + ' ' + lastName;

console.log(fullName + ' is ' + age + ' years old');
```

---

## Remember!

✅ Use `let` for values that **change**  
✅ Use `const` for values that **stay the same**  
✅ Numbers don't need quotes: `42`  
✅ Strings need quotes: `'Hello'`  
✅ Booleans are `true` or `false`  
✅ Use camelCase for variable names  
✅ Be descriptive with names  
✅ Use `typeof` to check data types  

---

## Need More Help?

- Review the lesson README
- Check the example files
- Look at the answer keys
- Ask a parent or teacher
- Practice, practice, practice!

