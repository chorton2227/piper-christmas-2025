# Functions Cheatsheet 🎯

Quick reference guide for JavaScript functions

---

## Creating Functions

### Basic Function
```javascript
function functionName() {
    // Code to run
    console.log('Hello!');
}

// Call it
functionName();
```

### Function with Parameters
```javascript
function greet(name) {
    console.log('Hello, ' + name + '!');
}

greet('Alex');  // Hello, Alex!
```

### Function with Multiple Parameters
```javascript
function add(a, b) {
    return a + b;
}

let sum = add(5, 3);  // 8
```

---

## Function Syntax

```javascript
function functionName(parameter1, parameter2) {
    // Code goes here
    return result;
}
```

**Parts:**
- `function` - keyword to create function
- `functionName` - what you call it (use camelCase)
- `()` - holds parameters (inputs)
- `{}` - contains the function body
- `return` - sends a value back (optional)

---

## Parameters vs Arguments

```javascript
function multiply(x, y) {    // x and y are PARAMETERS
    return x * y;
}

multiply(5, 3);              // 5 and 3 are ARGUMENTS
```

- **Parameters** = Variable names in function definition
- **Arguments** = Actual values passed when calling

---

## Return Values

### With Return
```javascript
function calculateArea(width, height) {
    return width * height;
}

let area = calculateArea(10, 5);  // area is 50
```

### Without Return (undefined)
```javascript
function sayHi() {
    console.log('Hi!');
    // No return
}

let result = sayHi();  // result is undefined
```

### Return Stops Function
```javascript
function checkAge(age) {
    if (age >= 18) {
        return 'Adult';
        // Code after return never runs
    }
    return 'Child';
}
```

---

## Function Patterns

### 1. Do Something (No Return)
```javascript
function displayMessage(text) {
    console.log('Message: ' + text);
}

displayMessage('Hello');
```

### 2. Calculate and Return
```javascript
function calculateTip(bill, percent) {
    return bill * (percent / 100);
}

let tip = calculateTip(50, 20);  // 10
```

### 3. Check and Return Boolean
```javascript
function isAdult(age) {
    return age >= 18;
}

if (isAdult(20)) {
    console.log('Can vote');
}
```

### 4. Get Information
```javascript
function getGreeting(hour) {
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
}
```

---

## Scope

### Global Variables
```javascript
let score = 0;  // Global - accessible everywhere

function addPoints(points) {
    score = score + points;  // Can access global
}
```

### Local Variables
```javascript
function calculate() {
    let result = 10 * 5;  // Local - only exists in function
    return result;
}

// console.log(result);  // ERROR! result doesn't exist here
```

### Parameters Are Local
```javascript
function greet(name) {  // name is local
    console.log('Hi, ' + name);
}

// console.log(name);  // ERROR! name doesn't exist here
```

---

## Naming Conventions

### Good Function Names (Use Verbs)

✅ **Calculation functions:**
- `calculateTotal()`
- `computeAverage()`
- `getSum()`

✅ **Display functions:**
- `displayMessage()`
- `showResult()`
- `printInfo()`

✅ **Check functions (boolean):**
- `isValid()`
- `hasPermission()`
- `canAfford()`

✅ **Action functions:**
- `updateScore()`
- `resetGame()`
- `startTimer()`

❌ **Bad function names:**
- `doStuff()`
- `func1()`
- `process()`
- `x()`

---

## Common Patterns

### Math Helper
```javascript
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}
```

### Status Checker
```javascript
function isAlive(health) {
    return health > 0;
}

function canAfford(price, money) {
    return money >= price;
}
```

### Data Formatter
```javascript
function formatMoney(amount) {
    return '$' + amount.toFixed(2);
}

function formatPercentage(value, total) {
    return ((value / total) * 100).toFixed(1) + '%';
}
```

### Display Helper
```javascript
function displayBox(message) {
    console.log('╔════════════╗');
    console.log('║ ' + message + ' ║');
    console.log('╚════════════╝');
}
```

---

## Best Practices

### 1. One Job Per Function
```javascript
// ✅ Good - each function does one thing
function calculateTax(price, rate) {
    return price * rate;
}

function calculateTotal(price, tax) {
    return price + tax;
}

// ❌ Bad - doing too much
function doEverything(price, rate, name) {
    // Calculates, displays, validates, etc.
}
```

### 2. Clear Parameter Names
```javascript
// ✅ Good
function createUser(firstName, lastName, email) { }

// ❌ Bad
function createUser(fn, ln, e) { }
```

### 3. Keep Functions Short
```javascript
// ✅ Good - short and focused
function isTeenager(age) {
    return age >= 13 && age <= 19;
}

// Better to break long functions into smaller ones
```

### 4. Use Descriptive Names
```javascript
// ✅ Good - name describes what it does
function calculateMonthlyPayment() { }

// ❌ Bad - name doesn't help
function calc() { }
```

---

## Common Mistakes

### Mistake 1: Forgetting to Call Function
```javascript
function sayHi() {
    console.log('Hi!');
}

sayHi;     // ❌ Wrong - missing ()
sayHi();   // ✅ Correct
```

### Mistake 2: Forgetting Return
```javascript
function add(a, b) {
    a + b;           // ❌ Wrong - no return
}

function add(a, b) {
    return a + b;    // ✅ Correct
}
```

### Mistake 3: Wrong Number of Arguments
```javascript
function greet(name, age) {
    console.log(name + ' is ' + age);
}

greet('Alex');           // ❌ Missing age (undefined)
greet('Alex', 10);       // ✅ Correct
greet('Alex', 10, 'Hi'); // ⚠️ Extra argument ignored
```

### Mistake 4: Using Variable That Doesn't Exist
```javascript
function calculate(width, height) {
    return length * width;  // ❌ Error! 'length' doesn't exist
}

function calculate(width, height) {
    return width * height;  // ✅ Correct
}
```

---

## Quick Examples

### Example 1: Game Helper
```javascript
function calculateDamage(attack, defense) {
    let damage = attack - defense;
    if (damage < 0) damage = 0;
    return damage;
}

let damage = calculateDamage(30, 10);  // 20
```

### Example 2: String Helper
```javascript
function makeGreeting(name, time) {
    return 'Good ' + time + ', ' + name + '!';
}

console.log(makeGreeting('Alex', 'morning'));
// Good morning, Alex!
```

### Example 3: Validation
```javascript
function isValidPassword(password) {
    return password.length >= 8;
}

if (isValidPassword('abc123')) {
    console.log('Valid');
} else {
    console.log('Too short');
}
```

### Example 4: Multiple Functions Together
```javascript
function calculateSubtotal(price, quantity) {
    return price * quantity;
}

function calculateTax(subtotal, rate) {
    return subtotal * rate;
}

function calculateTotal(price, quantity, taxRate) {
    let subtotal = calculateSubtotal(price, quantity);
    let tax = calculateTax(subtotal, taxRate);
    return subtotal + tax;
}

let total = calculateTotal(20, 3, 0.08);  // 64.80
```

---

## Remember

✓ Functions are reusable blocks of code
✓ Use descriptive names with verbs
✓ Parameters pass data IN
✓ Return sends data OUT
✓ Call functions with `functionName()`
✓ Keep functions short and focused
✓ One job per function
✓ Test each function as you write it

---

## Need Help?

- **Forgot how to call a function?** `functionName()`
- **Function not working?** Check you used `return` if needed
- **Getting undefined?** Function might not be returning a value
- **Wrong result?** Check parameter order matches your call
- **Can't access variable?** Check if it's local or global scope

Good luck coding with functions! 🚀
