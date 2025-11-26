# Arrays and Loops - Quick Reference Cheatsheet

## Array Creation

```javascript
// Array literal (most common)
let fruits = ['apple', 'banana', 'orange'];

// Array constructor
let numbers = new Array(1, 2, 3);

// Empty array
let empty = [];

// Mixed types
let mixed = ['text', 42, true, null];
```

## Accessing Elements

```javascript
let colors = ['red', 'green', 'blue'];

colors[0]           // 'red' (first item)
colors[1]           // 'green' (second item)
colors[2]           // 'blue' (third item)
colors.length       // 3 (number of items)
colors[colors.length - 1]  // 'blue' (last item)
```

**Remember:** Arrays are zero-indexed! First item is at index 0.

## Adding Items

| Method | What It Does | Returns | Example |
|--------|--------------|---------|---------|
| `push(item)` | Add to end | New length | `arr.push('new')` |
| `unshift(item)` | Add to beginning | New length | `arr.unshift('first')` |
| `splice(index, 0, item)` | Add at position | Removed items | `arr.splice(1, 0, 'middle')` |

```javascript
let arr = ['a', 'b'];
arr.push('c');       // ['a', 'b', 'c']
arr.unshift('z');    // ['z', 'a', 'b', 'c']
```

## Removing Items

| Method | What It Does | Returns | Example |
|--------|--------------|---------|---------|
| `pop()` | Remove from end | Removed item | `arr.pop()` |
| `shift()` | Remove from beginning | Removed item | `arr.shift()` |
| `splice(index, count)` | Remove from position | Removed items | `arr.splice(1, 2)` |

```javascript
let arr = ['a', 'b', 'c', 'd'];
arr.pop();          // Returns 'd', arr is ['a', 'b', 'c']
arr.shift();        // Returns 'a', arr is ['b', 'c']
arr.splice(1, 1);   // Removes at index 1, arr is ['b']
```

## Finding Items

```javascript
let numbers = [10, 20, 30, 20];

// indexOf - find first occurrence (returns -1 if not found)
numbers.indexOf(20);        // 1

// includes - check if exists (returns true/false)
numbers.includes(30);       // true
numbers.includes(99);       // false

// find - get first item matching condition
let found = numbers.find(num => num > 15);  // 20
```

## Array Methods

### slice() - Copy portion (doesn't modify original)
```javascript
let arr = [1, 2, 3, 4, 5];
let part = arr.slice(1, 4);   // [2, 3, 4]
// arr is still [1, 2, 3, 4, 5]
```

### splice() - Modify array (removes/adds items)
```javascript
let arr = ['a', 'b', 'c', 'd'];
arr.splice(1, 2, 'x', 'y');   // Removes 'b', 'c' and adds 'x', 'y'
// arr is now ['a', 'x', 'y', 'd']
```

### join() - Array to string
```javascript
let words = ['Hello', 'World'];
words.join(' ');    // 'Hello World'
words.join('-');    // 'Hello-World'
```

### concat() - Combine arrays
```javascript
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);  // [1, 2, 3, 4]
```

### reverse() - Reverse order (modifies original)
```javascript
let arr = [1, 2, 3];
arr.reverse();     // [3, 2, 1]
```

### sort() - Sort elements (modifies original)
```javascript
let letters = ['c', 'a', 'b'];
letters.sort();    // ['a', 'b', 'c']

// Sort numbers
let nums = [3, 1, 2];
nums.sort((a, b) => a - b);  // [1, 2, 3]
```

## For Loop

```javascript
// Basic structure
for (initialization; condition; update) {
    // code to repeat
}

// Count 0 to 4
for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}

// Loop through array
let fruits = ['apple', 'banana', 'orange'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Count backwards
for (let i = 10; i >= 0; i--) {
    console.log(i);  // 10, 9, 8, ..., 0
}
```

## While Loop

```javascript
// Runs while condition is true
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// Do-while (runs at least once)
let num = 10;
do {
    console.log(num);
    num++;
} while (num < 5);  // Runs once even though condition is false
```

## forEach Method

```javascript
let colors = ['red', 'green', 'blue'];

// With function
colors.forEach(function(color, index) {
    console.log(index + ': ' + color);
});

// With arrow function (shorter)
colors.forEach((color, index) => {
    console.log(index + ': ' + color);
});

// Just value, no index
colors.forEach(color => {
    console.log(color);
});
```

## Break and Continue

```javascript
// break - exit loop
for (let i = 0; i < 10; i++) {
    if (i === 5) break;  // Stop at 5
    console.log(i);      // 0, 1, 2, 3, 4
}

// continue - skip to next iteration
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;  // Skip 2
    console.log(i);         // 0, 1, 3, 4
}
```

## Nested Loops

```javascript
// Loop inside loop
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(i + ' × ' + j + ' = ' + (i * j));
    }
}

// Creates:
// 1 × 1 = 1
// 1 × 2 = 2
// 1 × 3 = 3
// 2 × 1 = 2
// ...and so on
```

## Common Patterns

### Sum all numbers
```javascript
let numbers = [10, 20, 30];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);  // 60
```

### Find maximum
```javascript
let scores = [85, 92, 78, 95];
let highest = scores[0];
for (let i = 1; i < scores.length; i++) {
    if (scores[i] > highest) {
        highest = scores[i];
    }
}
console.log(highest);  // 95
```

### Filter array
```javascript
let numbers = [1, 2, 3, 4, 5, 6];
let evens = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evens.push(numbers[i]);
    }
}
console.log(evens);  // [2, 4, 6]
```

### Count occurrences
```javascript
let items = ['apple', 'banana', 'apple', 'orange', 'apple'];
let count = 0;
for (let i = 0; i < items.length; i++) {
    if (items[i] === 'apple') {
        count++;
    }
}
console.log(count);  // 3
```

### Reverse array
```javascript
let original = [1, 2, 3, 4, 5];
let reversed = [];
for (let i = original.length - 1; i >= 0; i--) {
    reversed.push(original[i]);
}
console.log(reversed);  // [5, 4, 3, 2, 1]
```

## Loop Comparison

| Feature | For Loop | While Loop | forEach |
|---------|----------|------------|---------|
| **Best for** | Known iterations | Unknown iterations | Array iteration |
| **Access index** | ✅ Yes | ⚠️ Manual | ✅ Yes (2nd param) |
| **Can break** | ✅ Yes | ✅ Yes | ❌ No |
| **Can continue** | ✅ Yes | ✅ Yes | ❌ No (use return) |
| **Readability** | Medium | Medium | High |

## Common Mistakes

❌ **Forgetting to increment in while loop**
```javascript
let i = 0;
while (i < 5) {
    console.log(i);
    // Forgot i++! Infinite loop!
}
```

❌ **Off-by-one errors**
```javascript
// Wrong - goes past end of array
for (let i = 0; i <= arr.length; i++) { }

// Right - stops before length
for (let i = 0; i < arr.length; i++) { }
```

❌ **Modifying array while looping**
```javascript
// Dangerous!
for (let i = 0; i < arr.length; i++) {
    arr.push('new');  // Array keeps growing!
}
```

✅ **Store length first**
```javascript
let len = arr.length;
for (let i = 0; i < len; i++) {
    arr.push('new');  // Safe - loops original length
}
```

## Quick Tips

💡 **Use `.length` for loops**
```javascript
for (let i = 0; i < arr.length; i++) { }
```

💡 **Check if array is empty**
```javascript
if (arr.length === 0) {
    console.log('Array is empty');
}
```

💡 **Get last item**
```javascript
let last = arr[arr.length - 1];
```

💡 **Clone an array**
```javascript
let copy = [...arr];  // Spread operator
let copy2 = arr.slice();  // Or slice method
```

## Practice Challenges

Try coding these without looking at answers!

1. Create an array of 5 numbers and calculate the average
2. Loop from 1 to 100, but only log even numbers
3. Create an array of names and find the longest name
4. Reverse an array without using `.reverse()`
5. Remove all duplicates from an array

---

**Remember:** Arrays and loops are fundamental! Practice these patterns until they become second nature. 🚀
