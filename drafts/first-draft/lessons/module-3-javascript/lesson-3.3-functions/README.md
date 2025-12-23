# Lesson 3.3: Functions 🎯

Welcome to functions! Functions are one of the most powerful tools in programming. Think of them as your own custom commands that you can use over and over again!

---

## 🎯 What You'll Learn

By the end of this lesson, you'll be able to:
- Understand what functions are and why they're useful
- Create your own functions
- Pass information into functions (parameters)
- Get results back from functions (return values)
- Call functions whenever you need them
- Understand basic scope (what variables functions can see)

---

## 🤔 What is a Function?

### The Recipe Analogy

Think of a function like a **recipe**:

```javascript
// Recipe: Make a Sandwich
function makeSandwich() {
    console.log('Get two slices of bread');
    console.log('Add peanut butter');
    console.log('Add jelly');
    console.log('Put slices together');
    console.log('Sandwich complete! 🥪');
}

// Use the recipe (call the function)
makeSandwich();
// Output: All the steps above!
```

**Just like a recipe:**
- You write it once
- You can use it many times
- It follows the same steps each time
- It produces a result

### Why Use Functions?

**1. Avoid Repetition (DRY - Don't Repeat Yourself)**

Without functions:
```javascript
console.log('==========');
console.log('Welcome!');
console.log('==========');

console.log('==========');
console.log('Hello!');
console.log('==========');

console.log('==========');
console.log('Goodbye!');
console.log('==========');
```

With functions:
```javascript
function printBanner(message) {
    console.log('==========');
    console.log(message);
    console.log('==========');
}

printBanner('Welcome!');
printBanner('Hello!');
printBanner('Goodbye!');
```

**2. Organize Your Code**

Functions help break big problems into smaller pieces:
```javascript
function startGame() {
    showWelcomeMessage();
    setupPlayer();
    loadLevel();
    beginPlay();
}
```

**3. Make Code Reusable**

Write once, use everywhere:
```javascript
function calculateArea(width, height) {
    return width * height;
}

let roomArea = calculateArea(10, 12);      // 120
let posterArea = calculateArea(2, 3);       // 6
let screenArea = calculateArea(16, 9);      // 144
```

---

## 📦 Creating Functions

### Basic Function Syntax

```javascript
function functionName() {
    // Code to run when function is called
    console.log('This is the function body');
}
```

**Parts of a Function:**
1. `function` keyword - tells JavaScript you're making a function
2. Function name - what you'll call it (use camelCase)
3. `()` parentheses - for parameters (we'll add those soon)
4. `{}` curly braces - contain the code to run
5. Function body - the code inside the braces

### Example: Simple Functions

```javascript
function sayHello() {
    console.log('Hello, world!');
}

function celebrate() {
    console.log('🎉 Congratulations! 🎉');
    console.log('You did it!');
    console.log('⭐⭐⭐⭐⭐');
}

function showMenu() {
    console.log('=== GAME MENU ===');
    console.log('1. Start Game');
    console.log('2. Options');
    console.log('3. Quit');
}

// Call the functions
sayHello();      // Outputs: Hello, world!
celebrate();     // Outputs: All three celebration lines
showMenu();      // Outputs: The menu
```

**Important:** Functions don't run automatically! You must **call** them using `functionName()`.

---

## 📥 Parameters - Giving Functions Information

Parameters let you pass information INTO a function.

### Single Parameter

```javascript
function greet(name) {
    console.log('Hello, ' + name + '!');
}

greet('Alex');      // Hello, Alex!
greet('Jordan');    // Hello, Jordan!
greet('Sam');       // Hello, Sam!
```

The parameter `name` is like a variable that gets its value when you call the function.

### Multiple Parameters

```javascript
function introduce(name, age, city) {
    console.log('My name is ' + name);
    console.log('I am ' + age + ' years old');
    console.log('I live in ' + city);
}

introduce('Alex', 10, 'Portland');
// My name is Alex
// I am 10 years old
// I live in Portland

introduce('Sam', 11, 'Seattle');
// My name is Sam
// I am 11 years old
// I live in Seattle
```

**Order matters!** Parameters are matched in order:
```javascript
function displayStats(health, mana, level) {
    console.log('Health: ' + health);
    console.log('Mana: ' + mana);
    console.log('Level: ' + level);
}

displayStats(100, 50, 5);
// Health: 100, Mana: 50, Level: 5

displayStats(50, 100, 5);
// Health: 50, Mana: 100, Level: 5  (different!)
```

### Parameters vs Arguments

**Parameter** = The variable name in the function definition
**Argument** = The actual value you pass when calling

```javascript
function add(a, b) {           // a and b are PARAMETERS
    console.log(a + b);
}

add(5, 3);                     // 5 and 3 are ARGUMENTS
```

---

## 📤 Return Values - Getting Information Back

Functions can send information back using `return`.

### Basic Return

```javascript
function add(a, b) {
    return a + b;              // Send the result back
}

let sum = add(5, 3);           // sum is now 8
console.log(sum);              // 8

let total = add(10, 20);       // total is now 30
console.log(total);            // 30
```

### Using Returned Values

```javascript
function multiply(x, y) {
    return x * y;
}

// Use return value directly
console.log(multiply(4, 5));         // 20

// Store return value in variable
let product = multiply(7, 6);
console.log(product);                // 42

// Use return value in calculations
let result = multiply(3, 4) + 10;
console.log(result);                 // 22 (12 + 10)
```

### Return Stops the Function

Once a function hits `return`, it stops immediately:

```javascript
function checkAge(age) {
    if (age >= 13) {
        return 'Teenager or older';
        console.log('This never runs!');
    }
    return 'Child';
}

console.log(checkAge(15));     // 'Teenager or older'
console.log(checkAge(10));     // 'Child'
```

### Functions Without Return

If a function doesn't return anything, it returns `undefined`:

```javascript
function sayHi() {
    console.log('Hi!');
    // No return statement
}

let result = sayHi();
// Outputs: Hi!
console.log(result);           // undefined
```

---

## 🎮 Real-World Function Examples

### Game Functions

```javascript
function calculateDamage(attackPower, defense) {
    let damage = attackPower - defense;
    if (damage < 0) {
        damage = 0;
    }
    return damage;
}

function healPlayer(currentHealth, healAmount, maxHealth) {
    let newHealth = currentHealth + healAmount;
    if (newHealth > maxHealth) {
        newHealth = maxHealth;
    }
    return newHealth;
}

function getLevelName(level) {
    if (level === 1) return 'Beginner';
    if (level === 2) return 'Novice';
    if (level === 3) return 'Apprentice';
    if (level === 4) return 'Warrior';
    if (level === 5) return 'Master';
    return 'Legend';
}

// Use the functions
let damage = calculateDamage(25, 10);       // 15
console.log('Damage dealt: ' + damage);

let newHealth = healPlayer(50, 30, 100);    // 80
console.log('Health after healing: ' + newHealth);

let title = getLevelName(3);                // 'Apprentice'
console.log('Your title: ' + title);
```

### Math Functions

```javascript
function calculateAverage(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    let average = sum / 3;
    return average;
}

function convertToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function calculateCircleArea(radius) {
    return 3.14159 * radius * radius;
}

// Use the functions
let avgScore = calculateAverage(85, 92, 88);
console.log('Average: ' + avgScore);        // 88.33...

let temp = convertToFahrenheit(25);
console.log(temp + '°F');                   // 77°F

let area = calculateCircleArea(5);
console.log('Area: ' + area);               // 78.54...
```

### String Functions

```javascript
function createGreeting(name, timeOfDay) {
    return 'Good ' + timeOfDay + ', ' + name + '!';
}

function makeUppercase(text) {
    return text.toUpperCase();
}

function repeatText(text, times) {
    let result = '';
    for (let i = 0; i < times; i++) {
        result = result + text;
    }
    return result;
}

console.log(createGreeting('Alex', 'morning'));
// Good morning, Alex!

console.log(makeUppercase('hello'));
// HELLO

console.log(repeatText('Ha', 5));
// HaHaHaHaHa
```

---

## 🔍 Scope - What Can Functions See?

**Scope** determines which variables a function can access.

### Global Scope

Variables declared outside functions are **global** - everyone can see them:

```javascript
let playerName = 'Alex';          // Global variable
let score = 0;                    // Global variable

function showName() {
    console.log(playerName);      // Can see global variable
}

function addPoints(points) {
    score = score + points;       // Can modify global variable
    console.log('Score: ' + score);
}

showName();                       // Alex
addPoints(10);                    // Score: 10
addPoints(5);                     // Score: 15
```

### Local Scope

Variables declared inside functions are **local** - only that function can see them:

```javascript
function calculateTotal() {
    let price = 20;               // Local variable
    let tax = 2;                  // Local variable
    let total = price + tax;      // Local variable
    return total;
}

let result = calculateTotal();
console.log(result);              // 22
console.log(price);               // ERROR! price doesn't exist here
```

### Parameters Are Local

```javascript
function greet(name) {            // name is local to this function
    console.log('Hello, ' + name);
}

greet('Alex');                    // Works fine
console.log(name);                // ERROR! name only exists inside greet
```

### Shadowing (Same Name, Different Variables)

```javascript
let message = 'Global message';

function showMessage() {
    let message = 'Local message';     // Different variable!
    console.log(message);              // Local message
}

showMessage();                         // Local message
console.log(message);                  // Global message
```

**Best Practice:** Avoid having global and local variables with the same name - it's confusing!

---

## 📊 Function Patterns

### 1. Do Something (No Return)

Functions that perform actions but don't return values:

```javascript
function displayWelcome() {
    console.log('╔═══════════════════╗');
    console.log('║   WELCOME HERO!   ║');
    console.log('╚═══════════════════╝');
}

function playSound(soundName) {
    console.log('🔊 Playing sound: ' + soundName);
}
```

### 2. Calculate and Return

Functions that compute values and return them:

```javascript
function calculateTip(billAmount, tipPercent) {
    return billAmount * (tipPercent / 100);
}

function getPowerLevel(strength, speed) {
    return strength * 2 + speed;
}
```

### 3. Check and Return Boolean

Functions that check conditions and return true/false:

```javascript
function isAdult(age) {
    return age >= 18;
}

function hasEnoughMoney(cost, money) {
    return money >= cost;
}

function isValidPassword(password) {
    return password.length >= 8;
}

// Usage
if (isAdult(15)) {
    console.log('Adult');
} else {
    console.log('Child');
}
```

### 4. Get Information

Functions that retrieve or generate information:

```javascript
function getGreeting(hour) {
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
}

function getRank(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
}
```

---

## ✅ Function Best Practices

### 1. Good Function Names

Functions should describe what they **do** (use verbs):

✅ **Good Names:**
```javascript
function calculateTotal() { }
function showMessage() { }
function getUserInput() { }
function isGameOver() { }
function hasPermission() { }
function updateScore() { }
```

❌ **Bad Names:**
```javascript
function doStuff() { }
function x() { }
function thing() { }
function func1() { }
```

### 2. One Job Per Function

Each function should do ONE thing well:

✅ **Good (Each function has one job):**
```javascript
function calculateDiscount(price, percent) {
    return price * (percent / 100);
}

function calculateTax(price, rate) {
    return price * rate;
}

function calculateFinalPrice(price, discountPercent, taxRate) {
    let discount = calculateDiscount(price, discountPercent);
    let priceAfterDiscount = price - discount;
    let tax = calculateTax(priceAfterDiscount, taxRate);
    return priceAfterDiscount + tax;
}
```

❌ **Bad (Doing too much):**
```javascript
function doEverything(price, discountPercent, taxRate, userName, age) {
    // Calculates price, validates user, updates database, sends email...
    // Too many responsibilities!
}
```

### 3. Keep Functions Short

If a function is too long, break it into smaller functions:

✅ **Good:**
```javascript
function startNewGame() {
    resetPlayer();
    loadLevel();
    showInstructions();
    beginCountdown();
}
```

❌ **Bad:**
```javascript
function startNewGame() {
    // 200 lines of code doing everything...
}
```

### 4. Use Clear Parameter Names

```javascript
// ✅ Good
function createCharacter(name, health, strength) { }

// ❌ Bad
function createCharacter(n, h, s) { }
```

### 5. Add Comments for Complex Functions

```javascript
// Calculate final price after applying discount and tax
// Returns the total amount to charge the customer
function calculateFinalPrice(basePrice, discountPercent, taxRate) {
    let discount = basePrice * (discountPercent / 100);
    let priceAfterDiscount = basePrice - discount;
    let tax = priceAfterDiscount * taxRate;
    return priceAfterDiscount + tax;
}
```

---

## 🎯 Common Mistakes and How to Fix Them

### Mistake 1: Forgetting to Call the Function

```javascript
// ❌ Wrong - Just defines the function, doesn't run it
function sayHello() {
    console.log('Hello!');
}
sayHello;              // Missing ()!

// ✅ Correct - Calls the function
sayHello();            // Hello!
```

### Mistake 2: Using Return Value When There Isn't One

```javascript
// ❌ Wrong
function greet(name) {
    console.log('Hello, ' + name);
    // No return!
}

let message = greet('Alex');       // message is undefined
console.log(message.length);       // ERROR!

// ✅ Correct
function greet(name) {
    return 'Hello, ' + name;       // Return the string
}

let message = greet('Alex');
console.log(message.length);       // 11
```

### Mistake 3: Wrong Number of Arguments

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(5));               // NaN (Not a Number) - b is undefined
console.log(add(5, 3, 7));         // 8 - extra argument ignored
console.log(add(5, 3));            // 8 - correct!
```

### Mistake 4: Forgetting Return

```javascript
// ❌ Wrong
function multiply(x, y) {
    x * y;                         // Forgot return!
}

let result = multiply(5, 3);
console.log(result);               // undefined

// ✅ Correct
function multiply(x, y) {
    return x * y;                  // Return the result
}

let result = multiply(5, 3);
console.log(result);               // 15
```

### Mistake 5: Using Wrong Variable Names

```javascript
function calculateArea(width, height) {
    return length * width;         // ERROR! 'length' doesn't exist
}

// Should be:
function calculateArea(width, height) {
    return width * height;
}
```

---

## 🎮 Putting It All Together

Here's a complete example using multiple functions:

```javascript
// === CHARACTER SYSTEM ===

// Calculate stats
function calculatePowerLevel(strength, speed) {
    return strength * 2 + speed;
}

function calculateHealthMax(level) {
    return 100 + (level * 20);
}

// Display functions
function displayCharacterCard(name, level, health, power) {
    console.log('╔═══════════════════╗');
    console.log('║  CHARACTER CARD   ║');
    console.log('╠═══════════════════╣');
    console.log('║ Name: ' + name);
    console.log('║ Level: ' + level);
    console.log('║ Health: ' + health);
    console.log('║ Power: ' + power);
    console.log('╚═══════════════════╝');
}

// Game logic
function levelUp(currentLevel) {
    return currentLevel + 1;
}

function isLevelUpReady(experience) {
    return experience >= 100;
}

// === USE THE FUNCTIONS ===

// Create character
const characterName = 'Thunder Knight';
let level = 1;
let strength = 50;
let speed = 30;
let experience = 0;

// Calculate initial stats
let maxHealth = calculateHealthMax(level);
let powerLevel = calculatePowerLevel(strength, speed);

// Show character
displayCharacterCard(characterName, level, maxHealth, powerLevel);

// Gain experience
experience = experience + 120;
console.log('Gained experience! Total: ' + experience);

// Check for level up
if (isLevelUpReady(experience)) {
    level = levelUp(level);
    strength = strength + 10;
    speed = speed + 5;
    
    // Recalculate stats
    maxHealth = calculateHealthMax(level);
    powerLevel = calculatePowerLevel(strength, speed);
    
    console.log('⭐ LEVEL UP! ⭐');
    displayCharacterCard(characterName, level, maxHealth, powerLevel);
}
```

---

## 📚 Key Takeaways

1. **Functions are reusable blocks of code** - Write once, use many times
2. **Use `function functionName() { }` to create** - Don't forget the parentheses and braces
3. **Call functions with `functionName()`** - Functions don't run automatically
4. **Parameters let you pass data IN** - Like variables that get values when called
5. **Return lets you send data OUT** - Use `return` to give back a result
6. **Order matters with parameters** - First argument → first parameter, etc.
7. **Scope determines what variables functions can see** - Global vs local
8. **Name functions with verbs** - Describe what they do (calculateTotal, showMessage)
9. **Keep functions focused** - One job per function
10. **Always test your functions** - Make sure they work as expected

---

## 🚀 Ready to Practice?

Now you'll create your own functions! In the practice exercises, you'll:
- Build a collection of useful helper functions
- Create a game system with multiple functions working together
- Make a calculator that uses functions for all operations

Functions are the building blocks of complex programs. Master them, and you can build anything!

**Let's start coding!** 💪
