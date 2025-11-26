# Student Workspace: Arrays and Loops

Welcome to your workspace for Lesson 3.8! This is where you'll complete your exercises and experiments with arrays and loops.

---

## 📁 How to Use This Folder

This folder is **your coding workspace**! Save all your exercise files here:

- `shopping-cart.html` - Exercise 1: Shopping Cart Manager
- `high-score-tracker.html` - Exercise 2: High Score Tracker  
- `todo-list.html` - Exercise 3: Todo List Manager
- Any extra experiments or practice files!

---

## 🎯 Your Exercises

### Exercise 1: Shopping Cart Manager ⭐⭐
**File:** `shopping-cart.html`

Build a shopping cart where you can:
- Add items with name and price
- Display all items in the cart
- Calculate the total price
- Remove individual items
- Clear the entire cart

**Core skills:** Arrays, objects, push(), splice(), loops, calculations

---

### Exercise 2: High Score Tracker ⭐⭐⭐
**File:** `high-score-tracker.html`

Create a high score system that can:
- Add player scores
- Display top 5 scores
- Sort scores highest to lowest
- Calculate statistics (highest, lowest, average)
- Search for a player's rank

**Core skills:** Array sorting, finding min/max, slice(), calculations, search

---

### Exercise 3: Todo List Manager ⭐⭐⭐⭐
**File:** `todo-list.html`

Build a full todo list with:
- Add tasks with priority levels
- Mark tasks as complete
- Filter by status (all/active/completed)
- Show completion progress bar
- Edit and delete tasks
- Statistics and counts

**Core skills:** Complete array manipulation, filtering, CRUD operations, state management

---

## 💡 Quick Reference

### Arrays

**Create array:**
```javascript
let items = ['apple', 'banana', 'orange'];
```

**Access items:**
```javascript
console.log(items[0]);  // 'apple' (first item)
console.log(items[2]);  // 'orange' (third item)
```

**Array length:**
```javascript
console.log(items.length);  // 3
```

**Add to end:**
```javascript
items.push('grape');  // Add to end
```

**Remove from end:**
```javascript
items.pop();  // Remove last item
```

**Add to beginning:**
```javascript
items.unshift('pear');  // Add to start
```

**Remove from beginning:**
```javascript
items.shift();  // Remove first item
```

**Remove specific item:**
```javascript
items.splice(1, 1);  // Remove 1 item at index 1
```

### Loops

**For loop (count):**
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}
```

**Loop through array:**
```javascript
for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
}
```

**While loop:**
```javascript
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}
```

**forEach (modern):**
```javascript
items.forEach(function(item) {
    console.log(item);
});
```

### Common Patterns

**Calculate total:**
```javascript
let numbers = [10, 20, 30];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);  // 60
```

**Find largest:**
```javascript
let numbers = [23, 67, 12, 89, 45];
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log(largest);  // 89
```

**Count matches:**
```javascript
let scores = [85, 92, 78, 95, 88];
let count = 0;
for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 90) {
        count++;
    }
}
console.log(count);  // 2 scores >= 90
```

**Build HTML:**
```javascript
let html = '';
for (let i = 0; i < items.length; i++) {
    html += '<div>' + items[i] + '</div>';
}
document.getElementById('output').innerHTML = html;
```

---

## 🐛 Common Mistakes to Avoid

### Mistake 1: Off-by-One Errors
```javascript
// WRONG - goes too far!
for (let i = 0; i <= items.length; i++) { }

// RIGHT
for (let i = 0; i < items.length; i++) { }
```

### Mistake 2: Forgetting to Increment
```javascript
// INFINITE LOOP!
let i = 0;
while (i < 10) {
    console.log(i);
    // Forgot i++!
}

// Fixed
let i = 0;
while (i < 10) {
    console.log(i);
    i++;  // Must have this!
}
```

### Mistake 3: Hard-Coding Array Length
```javascript
// BAD - what if array changes?
for (let i = 0; i < 5; i++) { }

// GOOD - works with any size
for (let i = 0; i < items.length; i++) { }
```

### Mistake 4: Accessing Invalid Index
```javascript
let arr = [1, 2, 3];
console.log(arr[5]);  // undefined - doesn't exist!
```

### Mistake 5: Modifying Array While Looping
```javascript
// DANGEROUS
for (let i = 0; i < arr.length; i++) {
    arr.push('new');  // Length keeps growing!
}

// SAFE
let len = arr.length;  // Store length first
for (let i = 0; i < len; i++) {
    // Now safe to modify
}
```

---

## 🎮 Practice Challenges

Try these mini-challenges to practice:

### Challenge 1: Reverse Array
```javascript
let original = [1, 2, 3, 4, 5];
let reversed = [];

// TODO: Loop backwards and push to reversed
// Result should be [5, 4, 3, 2, 1]
```

### Challenge 2: Remove Duplicates
```javascript
let numbers = [1, 2, 2, 3, 4, 4, 5];
let unique = [];

// TODO: Only add number if not already in unique
// Result should be [1, 2, 3, 4, 5]
```

### Challenge 3: Filter by Condition
```javascript
let ages = [12, 18, 25, 16, 30, 14];
let adults = [];

// TODO: Only keep ages >= 18
// Result should be [18, 25, 30]
```

### Challenge 4: Find Index
```javascript
let names = ['Alice', 'Bob', 'Charlie', 'David'];
let searchName = 'Charlie';
let foundIndex = -1;

// TODO: Find index of searchName
// foundIndex should be 2
```

---

## 🌟 Tips for Success

1. **Console.log Everything**
   - Log array after each modification
   - Log `i` inside loops to track progress
   - Log intermediate values in calculations

2. **Start Simple**
   - Get basic add/remove working first
   - Then add display functionality
   - Finally add advanced features

3. **Test Edge Cases**
   - What happens with empty array?
   - What if you remove the last item?
   - What if the same item is added twice?

4. **Use Array Methods**
   - `push()` and `pop()` are your friends
   - `splice()` for removing specific items
   - `.length` for array size

5. **Take Breaks**
   - Loops can be confusing at first
   - Step away and come back with fresh eyes
   - Draw diagrams of what each loop does

---

## 📊 Progress Tracker

Mark off each exercise as you complete it:

- [ ] Exercise 1: Shopping Cart Manager
  - [ ] Add items to cart
  - [ ] Display all items
  - [ ] Calculate total
  - [ ] Remove items
  - [ ] Clear cart

- [ ] Exercise 2: High Score Tracker
  - [ ] Add scores
  - [ ] Sort scores
  - [ ] Display top 5
  - [ ] Calculate statistics
  - [ ] Search functionality

- [ ] Exercise 3: Todo List Manager
  - [ ] Add tasks
  - [ ] Mark complete
  - [ ] Filter tasks
  - [ ] Progress bar
  - [ ] Edit/delete tasks

---

## 🎉 You've Got This!

Arrays and loops are **fundamental programming concepts**. Once you master them, you can build almost anything!

Remember:
- Arrays store multiple values
- Loops repeat code efficiently
- Together they're incredibly powerful
- Real apps use these concepts everywhere

**Take your time, experiment, and have fun!** 🚀

---

## 🆘 Need Help?

**Check:**
1. The lesson README examples
2. The cheatsheet in resources/
3. The parent guide (ask your parent!)
4. The answer keys (after trying yourself!)

**Remember:** Struggling is part of learning. Keep trying! 💪
