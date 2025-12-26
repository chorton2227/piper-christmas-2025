
## What You'll Learn
In this lesson, you'll learn how to work with numbers, use JavaScript's Math object for calculations, and add randomness to your programs! You'll create dice games, number guessing games, and programs that pick random items.

## Why Random and Math Matter
Random numbers make programs unpredictable and fun! Math operations help with calculations. Together they power:
- **Games** - Dice rolls, card shuffles, random enemy spawns
- **Randomizers** - Pick a random winner, random quote generator
- **Simulations** - Weather effects, probability calculators
- **Calculations** - Scores, distances, percentages

---

## Part 1: The Math Object

JavaScript has a built-in `Math` object with lots of useful functions!

### Common Math Functions

#### Math.random() - Random Number Between 0 and 1
```javascript
let randomNum = Math.random();
console.log(randomNum); // Example: 0.7392847362
```

**Important:** `Math.random()` gives you a decimal number between 0 (inclusive) and 1 (exclusive)
- Never exactly 0
- Never exactly 1
- Always between: 0.000000... to 0.999999...

#### Math.floor() - Round Down
```javascript
let num = 4.7;
let result = Math.floor(num);
console.log(result); // 4

console.log(Math.floor(8.9)); // 8
console.log(Math.floor(2.1)); // 2
```

#### Math.ceil() - Round Up
```javascript
let num = 4.1;
let result = Math.ceil(num);
console.log(result); // 5

console.log(Math.ceil(8.1)); // 9
console.log(Math.ceil(2.9)); // 3
```

#### Math.round() - Round to Nearest
```javascript
console.log(Math.round(4.4)); // 4
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.6)); // 5
```

#### Math.abs() - Absolute Value (Remove Negative)
```javascript
console.log(Math.abs(-10));  // 10
console.log(Math.abs(10));   // 10
console.log(Math.abs(-5.5)); // 5.5
```

#### Math.max() and Math.min() - Find Largest/Smallest
```javascript
console.log(Math.max(10, 5, 8, 20, 3)); // 20
console.log(Math.min(10, 5, 8, 20, 3)); // 3

// With an array
let numbers = [10, 5, 8, 20, 3];
console.log(Math.max(...numbers)); // 20 (using spread operator)
```

#### Math.pow() - Power (Exponent)
```javascript
console.log(Math.pow(2, 3)); // 8 (2 * 2 * 2)
console.log(Math.pow(5, 2)); // 25 (5 * 5)

// Or use ** operator
console.log(2 ** 3); // 8
```

#### Math.sqrt() - Square Root
```javascript
console.log(Math.sqrt(16)); // 4
console.log(Math.sqrt(9));  // 3
console.log(Math.sqrt(2));  // 1.4142135623730951
```

---

## Part 2: Random Number Patterns

### Random Integer from 0 to N
```javascript
// Random number from 0 to 9
let random = Math.floor(Math.random() * 10);
```

**How it works:**
1. `Math.random()` gives 0.0 to 0.999...
2. Multiply by 10: 0.0 to 9.999...
3. `Math.floor()` rounds down: 0, 1, 2, 3, 4, 5, 6, 7, 8, or 9

### Random Integer from 1 to N
```javascript
// Random number from 1 to 10
let random = Math.floor(Math.random() * 10) + 1;
```

**How it works:**
1. `Math.random() * 10` gives 0 to 9.999...
2. `Math.floor()` gives 0 to 9
3. Add 1: gives 1 to 10

### Random Integer from Min to Max
```javascript
// Random number between min and max (inclusive)
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomInt(5, 10));  // 5, 6, 7, 8, 9, or 10
console.log(randomInt(20, 25)); // 20, 21, 22, 23, 24, or 25
```

### Simulate Dice Roll
```javascript
// Roll a 6-sided die
function rollDice() {
    return Math.floor(Math.random() * 6) + 1; // 1 to 6
}

console.log("You rolled: " + rollDice());
```

### Flip a Coin
```javascript
function flipCoin() {
    if (Math.random() < 0.5) {
        return "Heads";
    } else {
        return "Tails";
    }
}

console.log(flipCoin()); // "Heads" or "Tails"
```

---

## Part 3: Random Selection from Arrays

### Pick a Random Item
```javascript
let colors = ["red", "blue", "green", "yellow", "purple"];

// Get random index
let randomIndex = Math.floor(Math.random() * colors.length);

// Get the item at that index
let randomColor = colors[randomIndex];
console.log("Random color: " + randomColor);
```

### Helper Function
```javascript
function randomItem(array) {
    let index = Math.floor(Math.random() * array.length);
    return array[index];
}

let fruits = ["apple", "banana", "orange", "grape"];
console.log(randomItem(fruits)); // Random fruit each time
```

### Shuffle an Array
```javascript
function shuffle(array) {
    let shuffled = array.slice(); // Make a copy
    
    for (let i = shuffled.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        
        // Swap elements
        let temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }
    
    return shuffled;
}

let deck = ["A", "2", "3", "4", "5"];
console.log(shuffle(deck)); // Randomized order
```

---

## Part 4: Percentage Chances

### 50% Chance
```javascript
if (Math.random() < 0.5) {
    console.log("50% chance - this happened!");
}
```

### 25% Chance
```javascript
if (Math.random() < 0.25) {
    console.log("25% chance - rare event!");
}
```

### Different Outcomes with Different Chances
```javascript
let random = Math.random();

if (random < 0.5) {
    console.log("Common (50%)");
} else if (random < 0.8) {
    console.log("Uncommon (30%)");
} else if (random < 0.95) {
    console.log("Rare (15%)");
} else {
    console.log("Legendary (5%)");
}
```

---

## Part 5: Number Formatting and Calculations

### Round to Decimal Places
```javascript
let num = 3.14159265;

// Round to 2 decimal places
let rounded = Math.round(num * 100) / 100;
console.log(rounded); // 3.14

// Or use toFixed()
console.log(num.toFixed(2)); // "3.14" (returns string)
console.log(Number(num.toFixed(2))); // 3.14 (convert back to number)
```

### Calculate Percentage
```javascript
function percentage(value, total) {
    return (value / total) * 100;
}

console.log(percentage(25, 100)); // 25%
console.log(percentage(3, 4));    // 75%
```

### Distance Between Points
```javascript
function distance(x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}

console.log(distance(0, 0, 3, 4)); // 5
```

---

## Part 6: Practical Examples

### Random Color Generator
```javascript
function randomColor() {
    let r = Math.floor(Math.random() * 256); // 0-255
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

console.log(randomColor()); // Example: "rgb(142, 68, 201)"
```

### Random Name Generator
```javascript
let firstNames = ["Alex", "Sam", "Jordan", "Taylor"];
let lastNames = ["Smith", "Johnson", "Brown", "Davis"];

function randomName() {
    let first = firstNames[Math.floor(Math.random() * firstNames.length)];
    let last = lastNames[Math.floor(Math.random() * lastNames.length)];
    return first + " " + last;
}

console.log(randomName()); // Example: "Jordan Smith"
```

### Random Password Generator
```javascript
function randomPassword(length) {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";
    
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    
    return password;
}

console.log(randomPassword(8)); // Example: "aB3kL9mX"
```

---

## Common Patterns

### Pattern 1: Random Number in Range
```javascript
// Template for any range
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

### Pattern 2: Random True/False
```javascript
function randomBoolean() {
    return Math.random() < 0.5;
}
```

### Pattern 3: Random from Array
```javascript
function pickRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}
```

### Pattern 4: Random Multiple Items (No Duplicates)
```javascript
function pickMultiple(array, count) {
    let shuffled = array.slice(); // Copy array
    
    // Shuffle
    for (let i = shuffled.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    // Return first 'count' items
    return shuffled.slice(0, count);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(pickMultiple(numbers, 3)); // 3 random numbers
```

---

## Quick Reference Table

| Need | Formula | Example |
|------|---------|---------|
| 0 to N-1 | `Math.floor(Math.random() * N)` | `Math.floor(Math.random() * 10)` = 0-9 |
| 1 to N | `Math.floor(Math.random() * N) + 1` | `Math.floor(Math.random() * 6) + 1` = 1-6 |
| Min to Max | `Math.floor(Math.random() * (max - min + 1)) + min` | Between 5 and 10 |
| Random item | `array[Math.floor(Math.random() * array.length)]` | Pick from array |
| 50% chance | `Math.random() < 0.5` | Coin flip |
| X% chance | `Math.random() < (X/100)` | 25% = 0.25 |
| Round down | `Math.floor(num)` | 4.9 → 4 |
| Round up | `Math.ceil(num)` | 4.1 → 5 |
| Round nearest | `Math.round(num)` | 4.5 → 5 |

---

## Try the Examples!
Open the example HTML files to see random numbers and math in action:
1. `example-1-math-basics.html` - Math functions and calculations
2. `example-2-random-numbers.html` - Random number generation patterns
3. `example-3-random-selection.html` - Picking random items from arrays
4. `example-4-games.html` - Dice games, coin flips, and random events

---

## Practice Exercises
After understanding the examples, try these challenges:
1. **Exercise 1**: Dice Roller - Roll multiple dice and calculate totals
2. **Exercise 2**: Number Guessing Game - Player guesses a random number
3. **Exercise 3**: Random Quiz Generator - Generate random quiz questions

Each exercise has detailed requirements in the `practice/` folder!

---

## Key Takeaways
✅ `Math.random()` generates random numbers from 0 to 0.999...  
✅ `Math.floor()` rounds down, `Math.ceil()` rounds up, `Math.round()` rounds to nearest  
✅ Multiply and add to get random integers in a range  
✅ Use `array[Math.floor(Math.random() * array.length)]` for random items  
✅ Percentages: `Math.random() < 0.25` for 25% chance  
✅ Math object has many useful functions (min, max, pow, sqrt, abs)  
✅ Always use `Math.floor()` with `Math.random()` for whole numbers  

---

## Parent Note
Random numbers introduce probability and range calculations - important math concepts! The formula `Math.floor(Math.random() * N)` can be confusing at first. Use physical dice and cards to make it concrete. The dice roller and guessing game exercises are especially engaging. Help your child understand why we multiply and add to get different ranges.

Happy randomizing! 🎲✨