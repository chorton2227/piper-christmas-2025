
Find and fix all the bugs in broken code!

## Your Task

Create a file called `bug-hunt.html` with broken code that you need to fix.

---

## Part 1: Syntax Errors (5 bugs)

Copy this code and fix all syntax errors:

```javascript
// Broken Code - Fix the syntax errors!

functoin greet(name {
    console.log"Hello, " + name);
    return "Hi!;
}

let person = {
    name: "Alice"
    age: 25,
    city "Boston"
};

let numbers = [1, 2, 3, 4, 5;

for (let i = 0 i < 10; i++) {
    console.log(i);
}
```

**Bugs to find:**
1. Typo in keyword
2. Missing parenthesis
3. Missing parentheses around arguments
4. Missing closing quote
5. Missing comma in object
6. Missing colon in object
7. Missing closing bracket in array
8. Missing semicolon in for loop

---

## Part 2: Logic Errors (5 bugs)

Fix the logic errors (code runs but gives wrong results):

```javascript
// Calculate average of array
function calculateAverage(numbers) {
    let sum;  // BUG 1: Not initialized
    for (let i = 1; i < numbers.length; i++) {  // BUG 2: Starts at 1
        sum += numbers[i];
    }
    return sum / numbers.length;
}

// Check if number is even
function isEven(num) {
    if (num % 2 = 0) {  // BUG 3: Assignment instead of comparison
        return true;
    }
    return false;
}

// Double all numbers in array
function doubleNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] * 2;  // BUG 4: Not assigning result
    }
    return arr;
}

// Get user's full name
function getFullName(user) {
    return user.firstName + " " + user.lastName;  // BUG 5: No check if user exists
}

// Add numbers
function add(a, b) {
    a + b;  // BUG 6: No return statement
}
```

---

## Part 3: Runtime Errors (4 bugs)

Fix code that crashes when run:

```javascript
// Access undefined variable
function demo1() {
    console.log(myVariable);  // Variable doesn't exist!
}

// Call non-function
function demo2() {
    let num = 5;
    num();  // num is not a function!
}

// Access property of null
function demo3() {
    let person = null;
    console.log(person.name);  // Can't access property of null!
}

// Array index out of bounds
function demo4() {
    let arr = [1, 2, 3];
    for (let i = 0; i <= arr.length; i++) {  // Goes one past end!
        console.log(arr[i].toFixed(2));  // Crashes on undefined
    }
}
```

---

## Part 4: Create Bug Hunt Game

Create an interactive bug hunting game:

### Requirements:
- Display code with bugs
- User tries to find them
- Click on line to mark as buggy
- Show if they found all bugs
- Keep score

### Features to Include:
- 3 difficulty levels (Easy, Medium, Hard)
- Timer to track how long it takes
- Hints available
- Score based on time and hints used
- Show explanation of each bug

### Bonus Challenges:
- Multiple code samples to debug
- Leaderboard (use localStorage)
- Different bug types (syntax, logic, runtime)
- "Before and After" comparison
- Code playground to test fixes

---

## What You'll Learn

- Identifying syntax errors
- Finding logic errors
- Debugging runtime errors
- Reading error messages
- Using console for debugging

---

## Hints

### For Syntax Errors:
- Look for typos in keywords
- Check all brackets/parentheses match
- Verify all strings have closing quotes
- Check commas between items

### For Logic Errors:
- Add console.log to track values
- Check comparison vs assignment (= vs ===)
- Verify loops start/end correctly
- Make sure functions return values

### For Runtime Errors:
- Check variables exist before using
- Verify objects aren't null/undefined
- Check array bounds
- Make sure you're calling functions, not variables

---

## Testing Your Fixes

After fixing each bug, test the code:

```javascript
// Test calculateAverage
let nums = [10, 20, 30];
console.log(calculateAverage(nums));  // Should be 20

// Test isEven
console.log(isEven(4));   // Should be true
console.log(isEven(5));   // Should be false

// Test doubleNumbers
let arr = [1, 2, 3];
doubleNumbers(arr);
console.log(arr);  // Should be [2, 4, 6]

// Test getFullName
let user = { firstName: "Alice", lastName: "Smith" };
console.log(getFullName(user));  // Should be "Alice Smith"
console.log(getFullName(null));  // Should handle null gracefully

// Test add
console.log(add(5, 3));  // Should be 8
```

---

## Example Bug Hunt Game Structure

```html
<!DOCTYPE html>
<html>
<head>
    <title>Bug Hunt Game</title>
    <style>
        .code-line {
            padding: 5px;
            cursor: pointer;
        }
        .code-line:hover {
            background: #ffeb3b;
        }
        .marked-bug {
            background: #ff5252;
            color: white;
        }
        .correct-bug {
            background: #4caf50;
            color: white;
        }
    </style>
</head>
<body>
    <h1>🐛 Bug Hunt Challenge</h1>
    
    <div id="score">Score: 0 | Time: 0s</div>
    <div id="code-display"></div>
    <button onclick="checkAnswers()">Check My Answers</button>
    <button onclick="getHint()">Get Hint (-10 points)</button>
    
    <script>
        let buggyCode = [
            "functoin greet(name) {",  // Line 0 - BUG!
            "    console.log('Hello');",
            "    return name;",
            "}"
        ];
        
        let bugs = [0];  // Lines with bugs
        let marked = [];  // Lines user marked
        
        // Display code
        // Allow user to click lines
        // Check if they found all bugs
        // Calculate score
    </script>
</body>
</html>
```

---

Good luck bug hunting! 🐛🔍