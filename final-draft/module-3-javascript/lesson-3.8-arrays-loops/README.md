
## Introduction

Welcome to one of the most powerful lessons in JavaScript! Today, you'll learn about **arrays** (containers that hold multiple items) and **loops** (code that repeats). These are essential tools that you'll use in almost every program you write.

Think of arrays like a backpack that can hold multiple items, and loops like walking through each item in that backpack one by one.

## What are Arrays?

An **array** is a special container that holds multiple values in a single variable. Instead of creating separate variables for each item, you can store them all in one array!

### Real-World Analogy

Imagine you're going grocery shopping:

**Without arrays:**
```javascript
let item1 = 'apples';
let item2 = 'bread';
let item3 = 'milk';
let item4 = 'eggs';
// This gets messy quickly!
```

**With arrays:**
```javascript
let groceries = ['apples', 'bread', 'milk', 'eggs'];
// Much cleaner and easier to manage!
```

### Creating Arrays

There are two ways to create arrays:

```javascript
// Method 1: Array literal (most common)
let fruits = ['apple', 'banana', 'orange'];

// Method 2: Array constructor
let vegetables = new Array('carrot', 'broccoli', 'spinach');

// Empty array
let emptyList = [];

// Arrays can hold different types
let mixed = ['text', 42, true, null];
```

### Accessing Array Elements

Arrays use **index numbers** to access items. The first item is at index 0!

```javascript
let colors = ['red', 'green', 'blue', 'yellow'];

console.log(colors[0]);  // 'red' (first item)
console.log(colors[1]);  // 'green' (second item)
console.log(colors[3]);  // 'yellow' (fourth item)

// Get the last item
let lastColor = colors[colors.length - 1];  // 'yellow'
```

**Important:** Arrays are **zero-indexed**, meaning counting starts at 0, not 1!

### Array Length

Every array has a `.length` property that tells you how many items it contains:

```javascript
let animals = ['cat', 'dog', 'bird'];
console.log(animals.length);  // 3

// Empty array has length 0
let empty = [];
console.log(empty.length);  // 0
```

## Array Methods

JavaScript provides many built-in methods to work with arrays:

### Adding Items

```javascript
let numbers = [1, 2, 3];

// push() - Add to the end
numbers.push(4);
console.log(numbers);  // [1, 2, 3, 4]

// unshift() - Add to the beginning
numbers.unshift(0);
console.log(numbers);  // [0, 1, 2, 3, 4]
```

### Removing Items

```javascript
let fruits = ['apple', 'banana', 'orange', 'grape'];

// pop() - Remove from the end (returns removed item)
let lastFruit = fruits.pop();
console.log(lastFruit);  // 'grape'
console.log(fruits);     // ['apple', 'banana', 'orange']

// shift() - Remove from the beginning
let firstFruit = fruits.shift();
console.log(firstFruit);  // 'apple'
console.log(fruits);      // ['banana', 'orange']
```

### Finding Items

```javascript
let colors = ['red', 'green', 'blue', 'red'];

// indexOf() - Find position of item (returns -1 if not found)
console.log(colors.indexOf('blue'));    // 2
console.log(colors.indexOf('yellow'));  // -1 (not found)

// includes() - Check if item exists
console.log(colors.includes('green'));  // true
console.log(colors.includes('purple')); // false
```

### Modifying Arrays

```javascript
let letters = ['a', 'b', 'c', 'd', 'e'];

// splice(startIndex, deleteCount, itemsToAdd...)
// Remove 2 items starting at index 1
letters.splice(1, 2);
console.log(letters);  // ['a', 'd', 'e']

// Add items at index 1
letters.splice(1, 0, 'x', 'y');
console.log(letters);  // ['a', 'x', 'y', 'd', 'e']

// slice(start, end) - Copy part of array (doesn't modify original)
let numbers = [1, 2, 3, 4, 5];
let middle = numbers.slice(1, 4);
console.log(middle);   // [2, 3, 4]
console.log(numbers);  // [1, 2, 3, 4, 5] (unchanged)
```

### Joining and Splitting

```javascript
// join() - Convert array to string
let words = ['Hello', 'World'];
let sentence = words.join(' ');
console.log(sentence);  // 'Hello World'

// split() - Convert string to array
let text = 'apple,banana,orange';
let fruits = text.split(',');
console.log(fruits);  // ['apple', 'banana', 'orange']
```

## Loops

**Loops** let you repeat code multiple times. This is incredibly useful when working with arrays!

### For Loop

The **for loop** is the most common loop. It has three parts:

```javascript
for (initialization; condition; update) {
    // Code to repeat
}
```

**Example:**
```javascript
// Count from 0 to 4
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Output: 0, 1, 2, 3, 4
```

**Breaking it down:**
- `let i = 0` - Start at 0
- `i < 5` - Keep going while i is less than 5
- `i++` - Add 1 to i after each loop
- The loop runs 5 times (i = 0, 1, 2, 3, 4)

### Looping Through Arrays

This is where loops really shine!

```javascript
let fruits = ['apple', 'banana', 'orange'];

// Loop through array using index
for (let i = 0; i < fruits.length; i++) {
    console.log('Fruit #' + (i + 1) + ': ' + fruits[i]);
}
// Output:
// Fruit #1: apple
// Fruit #2: banana
// Fruit #3: orange
```

### While Loop

A **while loop** keeps running as long as a condition is true:

```javascript
let count = 0;

while (count < 5) {
    console.log('Count: ' + count);
    count++;
}
// Output: Count: 0, Count: 1, Count: 2, Count: 3, Count: 4
```

**Warning:** Make sure the condition eventually becomes false, or you'll create an infinite loop!

```javascript
// BAD - Infinite loop!
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     // Forgot to increment i! Loop never ends!
// }
```

### Do-While Loop

Similar to while, but runs at least once:

```javascript
let num = 10;

do {
    console.log(num);
    num++;
} while (num < 5);

// Output: 10
// Runs once even though condition is false!
```

### forEach Method

The **forEach** method is a modern way to loop through arrays:

```javascript
let colors = ['red', 'green', 'blue'];

colors.forEach(function(color, index) {
    console.log(index + ': ' + color);
});
// Output:
// 0: red
// 1: green
// 2: blue

// Shorter arrow function version
colors.forEach((color) => {
    console.log(color);
});
```

### Break and Continue

You can control loop flow with special keywords:

```javascript
// break - Exit the loop completely
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;  // Stop when i is 5
    }
    console.log(i);
}
// Output: 0, 1, 2, 3, 4

// continue - Skip to next iteration
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;  // Skip when i is 2
    }
    console.log(i);
}
// Output: 0, 1, 3, 4 (skips 2)
```

## Nested Loops

You can put loops inside loops! This is useful for working with grids or complex data.

```javascript
// Create a multiplication table
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(i + ' × ' + j + ' = ' + (i * j));
    }
    console.log('---');
}
// Output:
// 1 × 1 = 1
// 1 × 2 = 2
// 1 × 3 = 3
// ---
// 2 × 1 = 2
// 2 × 2 = 4
// 2 × 3 = 6
// ---
// etc.
```

## Common Array Patterns

### Sum All Numbers

```javascript
let numbers = [10, 20, 30, 40];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log('Total: ' + sum);  // 100
```

### Find Maximum Value

```javascript
let scores = [85, 92, 78, 95, 88];
let highest = scores[0];

for (let i = 1; i < scores.length; i++) {
    if (scores[i] > highest) {
        highest = scores[i];
    }
}

console.log('Highest score: ' + highest);  // 95
```

### Filter Array (Get Items That Match Condition)

```javascript
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    }
}

console.log(evenNumbers);  // [2, 4, 6, 8, 10]
```

### Reverse Array

```javascript
let original = [1, 2, 3, 4, 5];
let reversed = [];

for (let i = original.length - 1; i >= 0; i--) {
    reversed.push(original[i]);
}

console.log(reversed);  // [5, 4, 3, 2, 1]

// Or use built-in method
original.reverse();
console.log(original);  // [5, 4, 3, 2, 1]
```

## Performance Tips

1. **Store array length in a variable:**
```javascript
// Instead of this:
for (let i = 0; i < myArray.length; i++) {
    // .length is calculated every time
}

// Do this:
let len = myArray.length;
for (let i = 0; i < len; i++) {
    // Slightly faster!
}
```

2. **Use forEach when you don't need the index:**
```javascript
// Cleaner and easier to read
items.forEach(item => {
    console.log(item);
});
```

3. **Avoid modifying arrays while looping:**
```javascript
// BAD - Can cause issues
for (let i = 0; i < arr.length; i++) {
    arr.push('new');  // Array keeps growing!
}

// GOOD - Store length first
let len = arr.length;
for (let i = 0; i < len; i++) {
    arr.push('new');  // Only loops original length
}
```

## When to Use What

- **for loop**: When you need the index or want precise control
- **while loop**: When you don't know how many times to loop
- **forEach**: When you want to do something with each item (modern and clean)
- **Array methods**: When you need to transform data (map, filter, reduce)

## Practice Challenges

Try these on your own before looking at the exercises!

1. Create an array of your five favorite foods and log each one
2. Write a loop that counts from 10 down to 1
3. Create an array of numbers and calculate the average
4. Loop through an array and find all items longer than 5 characters
5. Create a simple times table (1-10) using nested loops

## Next Steps

Now that you understand arrays and loops, you're ready to tackle the exercises! You'll build:

1. **Shopping Cart System** - Add/remove items, calculate totals
2. **High Score Tracker** - Manage scores, find top scores, sort
3. **Todo List Manager** - Add tasks, mark complete, filter

These exercises will give you real-world practice with arrays and loops!

## Key Takeaways

✅ Arrays hold multiple values in a single variable  
✅ Arrays use zero-based indexing (first item is at index 0)  
✅ Use `.push()` and `.pop()` for end operations  
✅ Use `.unshift()` and `.shift()` for beginning operations  
✅ For loops are perfect for arrays: `for (let i = 0; i < arr.length; i++)`  
✅ While loops run until a condition is false  
✅ forEach is a modern way to iterate arrays  
✅ Break exits a loop, continue skips to the next iteration  
✅ Always make sure loops have a way to end!

Happy coding! 🚀