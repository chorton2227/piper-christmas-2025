# Debugging Cheatsheet 🐛

Quick reference for debugging JavaScript code.

---

## Console Methods

### Basic Logging
```javascript
console.log("message");           // Standard output
console.error("error message");   // Red error message
console.warn("warning");          // Yellow warning
console.info("info");             // Blue info message
```

### Organized Logging
```javascript
console.table([{a:1}, {a:2}]);   // Display as table
console.group("Group Name");      // Start grouped output
console.groupEnd();               // End group
console.clear();                  // Clear console
```

### Performance & Counting
```javascript
console.time("label");            // Start timer
console.timeEnd("label");         // End timer, show duration
console.count("label");           // Count calls
console.countReset("label");      // Reset counter
```

### Advanced
```javascript
console.assert(test, "msg");      // Log if test is false
console.trace();                  // Show call stack
console.dir(object);              // Show object properties
```

---

## Types of Errors

### Syntax Errors
Happen before code runs - typos, missing brackets/commas/quotes
```javascript
// Wrong
functoin test() {      // Typo
    console.log"hi");  // Missing (

// Right
function test() {
    console.log("hi");
}
```

### Runtime Errors
Happen while code runs
```javascript
// ReferenceError - undefined variable
console.log(notDefined);

// TypeError - not a function
let x = 5;
x();

// TypeError - cannot read property
let obj = null;
obj.name;
```

### Logic Errors
Code runs but does wrong thing
```javascript
// Using = instead of ===
if (x = 5) { }        // Wrong (assignment)
if (x === 5) { }      // Right (comparison)

// Off-by-one error
for (let i = 1; i <= arr.length; i++) { }  // Wrong
for (let i = 0; i < arr.length; i++) { }   // Right

// Missing return
function add(a, b) {
    a + b;            // Wrong (no return)
}
```

---

## Debugging Strategies

### 1. Console Log Everything
```javascript
function calculate(x, y) {
    console.log("Input:", x, y);
    let result = x * 2 + y;
    console.log("Result:", result);
    return result;
}
```

### 2. Binary Search (Comment Out Code)
```javascript
// Comment half the code
// If error goes away, bug is in commented section
// If error stays, bug is in active section
// Repeat until found
```

### 3. Rubber Duck Debugging
Explain your code line-by-line to:
- A rubber duck
- A stuffed animal
- Your parent
- Your friend

### 4. Simplify the Problem
```javascript
// Complex (hard to debug)
let result = getData().filter(x => x.active).map(x => x.value)[0];

// Simple (easy to debug)
let data = getData();
console.log("data:", data);
let active = data.filter(x => x.active);
console.log("active:", active);
let values = active.map(x => x.value);
console.log("values:", values);
let result = values[0];
console.log("result:", result);
```

### 5. Check Your Assumptions
```javascript
// Don't assume - verify!
console.log(typeof myVar);        // Check type
console.log(myVar);                // Check value
console.log(myVar === undefined);  // Check if defined
console.log(Array.isArray(myVar)); // Check if array
```

### 6. Use the Debugger Statement
```javascript
function problematicFunction() {
    debugger;  // Code pauses here in DevTools
    // You can inspect variables, step through code
}
```

### 7. Test Edge Cases
```javascript
function divide(a, b) {
    // Test these cases:
    console.log(divide(10, 2));    // Normal: 5
    console.log(divide(10, 0));    // Division by zero
    console.log(divide(0, 10));    // Zero divided
    console.log(divide(-10, 2));   // Negative number
    console.log(divide("10", 2));  // String input
    console.log(divide(null, 2));  // Null input
}
```

### 8. Work Backwards
```javascript
// Error on line 50
// What called this function? Line 30
// What set this variable? Line 20
// Where did this data come from? Line 10
// Found the bug!
```

### 9. Compare Working Code
- Find similar code that works
- Compare line by line
- What's different?

---

## Browser DevTools

### Opening DevTools
- **Windows/Linux:** F12 or Ctrl+Shift+I
- **Mac:** Cmd+Option+I
- **Right-click** → Inspect

### Console Tab
- View all console output
- Type JavaScript directly
- Test code snippets

### Sources/Debugger Tab
- Set breakpoints (click line numbers)
- Step through code
- Watch variables
- View call stack

**Keyboard Shortcuts:**
- **F8** - Resume execution
- **F10** - Step over (next line)
- **F11** - Step into (enter function)
- **Shift+F11** - Step out (exit function)

### Elements Tab
- Inspect HTML
- View CSS styles
- Edit live

### Network Tab
- See file requests
- Check load times
- Debug API calls

### Application Tab
- View localStorage
- Check cookies
- See cached data

---

## Common Bugs & Fixes

### 1. Undefined Variable
```javascript
// Wrong
console.log(score);  // ReferenceError

// Right
let score = 0;
console.log(score);
```

### 2. Not a Function
```javascript
// Wrong
let myFunc = 5;
myFunc();  // TypeError

// Right
let myFunc = function() { };
myFunc();
```

### 3. Cannot Read Property
```javascript
// Wrong
let user = null;
console.log(user.name);  // TypeError

// Right
if (user) {
    console.log(user.name);
}
// Or use optional chaining
console.log(user?.name);
```

### 4. Assignment vs Comparison
```javascript
// Wrong
if (x = 5) { }  // Assigns 5 to x

// Right
if (x === 5) { }  // Compares x to 5
```

### 5. Array Index Out of Bounds
```javascript
// Wrong
let arr = [1, 2, 3];
console.log(arr[5]);  // undefined

// Right
if (index < arr.length) {
    console.log(arr[index]);
}
```

### 6. Missing Return
```javascript
// Wrong
function add(a, b) {
    a + b;  // Doesn't return anything
}

// Right
function add(a, b) {
    return a + b;
}
```

### 7. Infinite Loop
```javascript
// Wrong
let i = 0;
while (i < 10) {
    console.log(i);
    // Forgot to increment!
}

// Right
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
```

---

## Bug Prevention

### 1. Use Descriptive Names
```javascript
// Bad
let x = 10;
function f(a) { }

// Good
let playerScore = 10;
function calculateTotal(items) { }
```

### 2. Add Comments
```javascript
// Calculate final price with tax and discount
let finalPrice = price * (1 + taxRate) * (1 - discount);
```

### 3. Check Input
```javascript
function divide(a, b) {
    if (b === 0) {
        console.error("Cannot divide by zero!");
        return null;
    }
    return a / b;
}
```

### 4. Initialize Variables
```javascript
// Wrong
let sum;
sum += 10;  // NaN (undefined + 10)

// Right
let sum = 0;
sum += 10;  // 10
```

### 5. Use Strict Equality
```javascript
// Loose (can cause bugs)
if (x == "5") { }  // true if x is 5 or "5"

// Strict (safer)
if (x === "5") { }  // only true if x is "5"
```

### 6. Test As You Code
```javascript
// Write function
function multiply(a, b) {
    return a * b;
}

// Test immediately
console.log(multiply(3, 4));  // 12
console.log(multiply(0, 5));  // 0
console.log(multiply(-2, 3)); // -6
```

### 7. Use Try-Catch for Risky Code
```javascript
try {
    // Code that might error
    let data = JSON.parse(userInput);
} catch (error) {
    console.error("Invalid JSON:", error.message);
}
```

---

## Debugging Checklist

When you encounter a bug:

- [ ] Read the error message carefully
- [ ] Note which line the error is on
- [ ] Check the error type (Syntax/Runtime/Logic)
- [ ] Add console.log before the error
- [ ] Check variable types and values
- [ ] Verify function is being called
- [ ] Check for typos
- [ ] Look for missing brackets/quotes/commas
- [ ] Test with simple inputs first
- [ ] Use debugger statement if needed
- [ ] Search error message online
- [ ] Take a break and come back fresh
- [ ] Ask for help if stuck

---

## Quick Tips

💡 **Console.log is your best friend!**
Add it everywhere to track what's happening.

💡 **Read error messages!**
They tell you exactly what's wrong and where.

💡 **Test one thing at a time**
Don't change multiple things then test.

💡 **Use the browser console**
Type code directly to test quickly.

💡 **Take breaks**
Sometimes you need fresh eyes.

💡 **Google is OK!**
Searching for error messages is what pros do!

💡 **Every bug is a lesson**
You learn more from fixing bugs than from code that works first try.

---

## Resources

- [Chrome DevTools Documentation](https://developer.chrome.com/docs/devtools/)
- [MDN: Debugging JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong)
- [JavaScript Error Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)

---

**Remember:** Every programmer spends more time debugging than writing new code. Getting good at debugging makes you a better programmer! 🚀