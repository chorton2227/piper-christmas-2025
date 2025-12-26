
## Math Object Functions

### Rounding Functions
```javascript
Math.floor(4.7)    // 4  (rounds DOWN)
Math.ceil(4.2)     // 5  (rounds UP)
Math.round(4.5)    // 5  (rounds to nearest)
Math.round(4.4)    // 4
```

### Min, Max, and Absolute
```javascript
Math.min(5, 2, 8, 1)      // 1
Math.max(5, 2, 8, 1)      // 8
Math.abs(-5)              // 5  (absolute value)
Math.abs(5)               // 5
```

### Power and Square Root
```javascript
Math.pow(2, 3)     // 8   (2^3 = 2 × 2 × 2)
Math.pow(5, 2)     // 25  (5^2 = 5 × 5)
Math.sqrt(64)      // 8   (square root)
Math.sqrt(16)      // 4
```

### Constants
```javascript
Math.PI            // 3.14159... (pi)
Math.E             // 2.71828... (Euler's number)
```

## Random Number Generation

### Basic Random
```javascript
Math.random()      // Random decimal: 0 to 0.999...
```

### Random Integer Patterns

#### 0 to N-1
```javascript
Math.floor(Math.random() * 10)        // 0-9
Math.floor(Math.random() * 6)         // 0-5
```

#### 1 to N
```javascript
Math.floor(Math.random() * 6) + 1     // 1-6 (dice)
Math.floor(Math.random() * 100) + 1   // 1-100
```

#### Min to Max (inclusive)
```javascript
// Formula: Math.floor(Math.random() * (max - min + 1)) + min

Math.floor(Math.random() * 51) + 50   // 50-100
Math.floor(Math.random() * 10) + 20   // 20-29
```

## Random Selection from Arrays

### Pick One Random Item
```javascript
let colors = ['red', 'blue', 'green', 'yellow'];
let randomIndex = Math.floor(Math.random() * colors.length);
let picked = colors[randomIndex];
```

### Quick One-Liner
```javascript
let picked = colors[Math.floor(Math.random() * colors.length)];
```

## Shuffle Array (Fisher-Yates Algorithm)
```javascript
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        // Swap elements
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
```

## Percentage Chances

### 50% Chance (Coin Flip)
```javascript
if (Math.random() < 0.5) {
    // 50% chance this runs
}
```

### Custom Percentages
```javascript
// 25% chance
if (Math.random() < 0.25) {
    console.log('Rare event!');
}

// 80% chance
if (Math.random() < 0.8) {
    console.log('Common event!');
}
```

### Weighted Outcomes
```javascript
let random = Math.random();
if (random < 0.50) {
    // 50% - Common
} else if (random < 0.80) {
    // 30% - Uncommon (0.80 - 0.50)
} else if (random < 0.95) {
    // 15% - Rare (0.95 - 0.80)
} else {
    // 5% - Legendary (1.00 - 0.95)
}
```

## Common Use Cases

### Random Color (Hex)
```javascript
let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
```

### Random Color (RGB)
```javascript
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
let color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
```

### Random Password Characters
```javascript
let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let password = '';
for (let i = 0; i < 8; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
}
```

### True/False Random
```javascript
let randomBoolean = Math.random() < 0.5;  // true or false
```

### Random Sign (+1 or -1)
```javascript
let sign = Math.random() < 0.5 ? 1 : -1;
```

## Common Mistakes to Avoid

❌ **Don't forget to add 1 for 1-based ranges:**
```javascript
Math.floor(Math.random() * 6)      // Wrong for dice: 0-5
Math.floor(Math.random() * 6) + 1  // Correct for dice: 1-6
```

❌ **Don't forget Math.floor for integers:**
```javascript
Math.random() * 10           // Gives decimals!
Math.floor(Math.random() * 10)  // Correct: gives 0-9
```

❌ **Don't modify array length during selection:**
```javascript
// If you need to pick multiple without repeats,
// either copy the array first OR track used indices
```

## Quick Reference Table

| Need | Formula | Example |
|------|---------|---------|
| 0 to N-1 | `Math.floor(Math.random() * N)` | 0-9 |
| 1 to N | `Math.floor(Math.random() * N) + 1` | 1-100 |
| Min to Max | `Math.floor(Math.random() * (max-min+1)) + min` | 50-100 |
| Coin flip | `Math.random() < 0.5` | true/false |
| Array pick | `array[Math.floor(Math.random() * array.length)]` | Pick one |
| Round down | `Math.floor(num)` | 4.9 → 4 |
| Round up | `Math.ceil(num)` | 4.1 → 5 |
| Round nearest | `Math.round(num)` | 4.5 → 5 |

## Practice Tips

1. **Test your random ranges** - Use console.log to verify you're getting the numbers you expect
2. **Check edge cases** - Make sure both minimum AND maximum can occur
3. **Use descriptive variable names** - `diceRoll` is better than `x`
4. **Understand the formula** - Don't just copy/paste, know why it works!

Happy coding! 🎲