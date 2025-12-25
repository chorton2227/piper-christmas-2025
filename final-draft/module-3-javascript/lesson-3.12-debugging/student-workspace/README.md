
Welcome to your debugging workspace! This is where you'll practice finding and fixing bugs.

---

## 🎯 Your Mission

Become a master debugger! Learn to find bugs quickly and fix them confidently.

---

## 📚 What You Learned

In Lesson 3.12, you learned:

✅ Types of errors (syntax, runtime, logic)  
✅ Console methods (log, error, warn, table, time)  
✅ Debugging strategies (console.log, binary search, rubber duck)  
✅ Browser DevTools (Console, Sources, Elements, Network)  
✅ Common bugs and how to fix them  
✅ How to prevent bugs in the first place

---

## 🏆 Practice Challenges

### Challenge 1: Error Detective 🔍

Find and fix the bug in each code snippet:

**Bug 1:**
```javascript
function greet(name) {
    console.log("Hello " name);
}
greet("Alice");
```

<details>
<summary>Hint</summary>
Missing + operator to concatenate strings
</details>

<details>
<summary>Solution</summary>

```javascript
function greet(name) {
    console.log("Hello " + name);
}
greet("Alice");
```
</details>

---

**Bug 2:**
```javascript
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i <= numbers.length; i++) {
    console.log(numbers[i]);
}
```

<details>
<summary>Hint</summary>
Array index goes out of bounds
</details>

<details>
<summary>Solution</summary>

```javascript
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {  // < instead of <=
    console.log(numbers[i]);
}
```
</details>

---

**Bug 3:**
```javascript
function isEven(number) {
    if (number % 2 = 0) {
        return true;
    }
    return false;
}
```

<details>
<summary>Hint</summary>
Using assignment instead of comparison
</details>

<details>
<summary>Solution</summary>

```javascript
function isEven(number) {
    if (number % 2 === 0) {  // === instead of =
        return true;
    }
    return false;
}
```
</details>

---

**Bug 4:**
```javascript
function calculateTotal(items) {
    let total;
    for (let item of items) {
        total += item.price;
    }
    return total;
}
```

<details>
<summary>Hint</summary>
Variable not initialized
</details>

<details>
<summary>Solution</summary>

```javascript
function calculateTotal(items) {
    let total = 0;  // Initialize to 0
    for (let item of items) {
        total += item.price;
    }
    return total;
}
```
</details>

---

**Bug 5:**
```javascript
function getUserName(user) {
    return user.name.toUpperCase();
}

let result = getUserName(null);
console.log(result);
```

<details>
<summary>Hint</summary>
No null check before accessing property
</details>

<details>
<summary>Solution</summary>

```javascript
function getUserName(user) {
    if (!user) {
        return "Unknown";
    }
    return user.name.toUpperCase();
}

let result = getUserName(null);
console.log(result);  // "Unknown"
```
</details>

---

### Challenge 2: Debug the Calculator 🧮

This calculator has bugs. Find and fix them all!

```html
<!DOCTYPE html>
<html>
<head>
    <title>Buggy Calculator</title>
</head>
<body>
    <h1>Calculator</h1>
    <input type="number" id="num1" placeholder="Number 1">
    <input type="number" id="num2" placeholder="Number 2">
    <button onclick="add()">Add</button>
    <button onclick="subtract()">Subtract</button>
    <div id="result"></div>

    <script>
        function add() {
            let num1 = document.getElementById("num1").value;
            let num2 = document.getElementById("num2").value;
            let result = num1 + num2;
            document.getElementById("result").textContent = result;
        }
        
        function subtract() {
            let num1 = document.getElementById("num1").value;
            let num2 = document.getElementById("num2").value;
            let result = num1 - num2;
            document.getElementById("result").textContent = result;
        }
    </script>
</body>
</html>
```

**Bugs to find:**
1. Addition gives wrong result (concatenates instead of adding)
2. Subtraction works but addition doesn't - why?

<details>
<summary>Hint</summary>
Input values are strings, not numbers. Use parseInt() or parseFloat()
</details>

<details>
<summary>Solution</summary>

```javascript
function add() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 + num2;
    document.getElementById("result").textContent = result;
}

function subtract() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 - num2;
    document.getElementById("result").textContent = result;
}
```
</details>

---

### Challenge 3: Mystery Output 🎭

Predict what each code will log, then run it to check:

**Mystery 1:**
```javascript
let x = "5";
let y = 5;
console.log(x == y);
console.log(x === y);
```

<details>
<summary>Answer</summary>
true (loose equality)  
false (strict equality - different types)
</details>

---

**Mystery 2:**
```javascript
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}
```

<details>
<summary>Answer</summary>
Logs: 3, 3, 3 (or 0, 1, 2 if using let - which we are!)  
With let, it logs: 0, 1, 2 (each i is scoped to iteration)
</details>

---

**Mystery 3:**
```javascript
function test() {
    console.log(x);
    let x = 5;
}
test();
```

<details>
<summary>Answer</summary>
ReferenceError: Cannot access 'x' before initialization (temporal dead zone)
</details>

---

### Challenge 4: Build a Bug Finder Tool 🛠️

Create a simple HTML page that helps find bugs:

**Requirements:**
- Input box for code
- Button to "Check for Bugs"
- Show common issues:
  - Counts opening/closing brackets
  - Checks for common typos (functoin, cosole, etc.)
  - Warns about = in if statements
  - Suggests missing semicolons

**Starter code:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Bug Finder</title>
</head>
<body>
    <h1>Bug Finder</h1>
    <textarea id="code" rows="10" cols="50"></textarea>
    <button onclick="checkCode()">Find Bugs</button>
    <div id="results"></div>

    <script>
        function checkCode() {
            let code = document.getElementById("code").value;
            let issues = [];
            
            // TODO: Check for common bugs
            // Hint: Use .includes() to find typos
            // Hint: Count { and } to check brackets
            
            document.getElementById("results").innerHTML = issues.join("<br>");
        }
    </script>
</body>
</html>
```

---

### Challenge 5: Console Method Master 📊

Practice all console methods:

```javascript
// TODO: Use each console method at least once

// 1. Log a welcome message

// 2. Log an error about missing data

// 3. Log a warning about old browser

// 4. Create a table of students with name and age

// 5. Time how long it takes to count to 1000000

// 6. Count how many times a function is called

// 7. Group console messages

// 8. Use assert to check if a number is positive

// 9. Trace the call stack of nested functions

// 10. Clear the console
```

<details>
<summary>Solution</summary>

```javascript
// 1. Log a welcome message
console.log("Welcome to Console Method Practice!");

// 2. Log an error about missing data
console.error("Error: User data not found");

// 3. Log a warning about old browser
console.warn("Warning: This feature may not work in old browsers");

// 4. Create a table of students
let students = [
    { name: "Alice", age: 10 },
    { name: "Bob", age: 11 },
    { name: "Charlie", age: 10 }
];
console.table(students);

// 5. Time how long it takes to count to 1000000
console.time("counting");
for (let i = 0; i < 1000000; i++) {
    // Counting...
}
console.timeEnd("counting");

// 6. Count how many times a function is called
function doSomething() {
    console.count("doSomething called");
}
doSomething();
doSomething();
doSomething();

// 7. Group console messages
console.group("User Information");
console.log("Name: Alice");
console.log("Age: 10");
console.log("Grade: 5th");
console.groupEnd();

// 8. Use assert to check if a number is positive
let num = 5;
console.assert(num > 0, "Number should be positive");

// 9. Trace the call stack
function first() { second(); }
function second() { third(); }
function third() { console.trace(); }
first();

// 10. Clear the console
console.clear();
```
</details>

---

## 🎮 Debugging Games

### Game 1: Bug Race
- Set a timer for 5 minutes
- How many bugs can you find and fix?
- Keep score!

### Game 2: Bug Bingo
Create a bingo card with bugs:
- Typo in function name
- Missing comma
- = instead of ===
- Undefined variable
- Missing return statement

### Game 3: Debug Duel
- Two players
- Same buggy code
- First to fix all bugs wins!

---

## 📈 Progress Tracker

Track your debugging journey:

### Week 1: Syntax Errors
- [ ] Find 10 typos
- [ ] Fix 5 missing bracket errors
- [ ] Identify 3 missing comma errors

### Week 2: Runtime Errors
- [ ] Fix 5 undefined variable errors
- [ ] Handle 3 null/undefined property accesses
- [ ] Fix 2 "not a function" errors

### Week 3: Logic Errors
- [ ] Fix 3 = vs === bugs
- [ ] Correct 2 off-by-one loop errors
- [ ] Find 2 missing return statements

### Week 4: DevTools Master
- [ ] Use Console tab 20 times
- [ ] Set 5 breakpoints in Sources tab
- [ ] Inspect 10 elements in Elements tab
- [ ] Check 3 network requests

### Week 5: Advanced Debugging
- [ ] Use debugger statement 5 times
- [ ] Create custom debugging function
- [ ] Help someone else debug
- [ ] Debug without console.log

---

## 🌟 Achievement Badges

Earn these badges as you progress:

🐛 **Bug Spotter** - Find your first bug  
🔍 **Detective** - Find 10 bugs  
🛠️ **Fixer** - Fix 25 bugs  
🏆 **Bug Master** - Complete all challenges  
💡 **Console Pro** - Use all console methods  
⚡ **Speed Debugger** - Fix 5 bugs in 5 minutes  
🎓 **DevTools Expert** - Master all DevTools tabs  
👨‍🏫 **Debugging Teacher** - Help someone else debug  

---

## 💭 Reflection Questions

After each debugging session, think about:

1. **What was the bug?**
   - Syntax, runtime, or logic error?

2. **How did you find it?**
   - Error message?
   - Console.log?
   - Testing?

3. **How did you fix it?**
   - What was the solution?

4. **What did you learn?**
   - Will you recognize this bug faster next time?

5. **How can you prevent it?**
   - Better naming?
   - More testing?
   - Comments?

---

## 🚀 Next Steps

After mastering debugging:

1. **Apply to all your code**
   - Add console.logs while coding
   - Test as you write
   - Use DevTools regularly

2. **Help others debug**
   - Teach family members
   - Debug friends' code
   - Explain what you find

3. **Build debugging tools**
   - Create helpful utilities
   - Make debugging faster
   - Share with others

4. **Keep learning**
   - Advanced DevTools features
   - Browser extensions
   - Professional tools

---

## 📚 Quick Reference

### Common Error Messages

| Error | Meaning | Fix |
|-------|---------|-----|
| ReferenceError: x is not defined | Variable doesn't exist | Check spelling, define variable |
| TypeError: x is not a function | Calling non-function | Check if it's actually a function |
| TypeError: Cannot read property 'x' of undefined | Accessing property of undefined | Check if object exists first |
| SyntaxError: Unexpected token | Typo or missing bracket | Check syntax carefully |

### Debugging Shortcuts

| Action | Shortcut |
|--------|----------|
| Open DevTools | F12 |
| Open Console | Ctrl+Shift+J |
| Resume execution | F8 |
| Step over | F10 |
| Step into | F11 |
| Step out | Shift+F11 |

---

## 🎯 Final Challenge: The Ultimate Debugger

Create a comprehensive debugging project:

**Build a "Debugging Dashboard" that includes:**
1. Error logger with categories
2. Variable watcher
3. Performance timer
4. Code validator
5. Bug statistics
6. Learning journal

This combines everything you've learned!

---

Remember: Every bug you fix makes you a better programmer! 🐛→🦋
