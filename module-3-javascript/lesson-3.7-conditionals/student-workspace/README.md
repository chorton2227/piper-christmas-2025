# Student Workspace - Lesson 3.7: Conditionals 🎲

Welcome to your practice workspace! Here you'll find templates and helpful patterns to get you started on the exercises.

## 🚀 Quick Start Templates

### Exercise 1: Grade Calculator Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grade Calculator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .container {
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        
        input, button {
            width: 100%;
            padding: 12px;
            margin: 10px 0;
            border-radius: 8px;
            font-size: 16px;
        }
        
        button {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            cursor: pointer;
        }
        
        #result {
            margin-top: 20px;
            padding: 20px;
            border-radius: 8px;
            display: none;
        }
        
        .grade-a { background-color: #d4edda; color: #155724; }
        .grade-b { background-color: #d1f2eb; color: #0c5460; }
        .grade-c { background-color: #fff3cd; color: #856404; }
        .grade-d { background-color: #f8d7da; color: #721c24; }
        .grade-f { background-color: #f5c6cb; color: #721c24; }
    </style>
</head>
<body>
    <div class="container">
        <h1>📊 Grade Calculator</h1>
        
        <label for="score">Enter your score (0-100):</label>
        <input type="number" id="score" min="0" max="100" placeholder="85">
        
        <button onclick="calculateGrade()">Calculate Grade</button>
        
        <div id="result"></div>
    </div>

    <script>
        function calculateGrade() {
            // TODO: Get the score from input
            const score = parseInt(document.getElementById('score').value);
            const resultDiv = document.getElementById('result');
            
            // TODO: Validate input
            // Check if score is a valid number
            // Check if score is between 0 and 100
            
            // TODO: Calculate grade using if/else if/else
            // if (score >= 90) {
            //     grade = 'A';
            //     message = '...';
            //     className = 'grade-a';
            // } else if (...) {
            //     ...
            // }
            
            // TODO: Display result
            // resultDiv.className = className;
            // resultDiv.style.display = 'block';
            // resultDiv.innerHTML = ...;
        }
    </script>
</body>
</html>
```

### Exercise 2: Login System Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login System</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 400px;
            margin: 50px auto;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .login-container {
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        
        input {
            width: 100%;
            padding: 12px;
            margin: 10px 0;
            border: 2px solid #ddd;
            border-radius: 8px;
            box-sizing: border-box;
        }
        
        button {
            width: 100%;
            padding: 12px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
        }
        
        .message {
            margin-top: 15px;
            padding: 15px;
            border-radius: 8px;
            display: none;
        }
        
        .success { background-color: #d4edda; color: #155724; }
        .error { background-color: #f8d7da; color: #721c24; }
    </style>
</head>
<body>
    <div class="login-container">
        <h1>🔐 Login System</h1>
        
        <label for="username">Username:</label>
        <input type="text" id="username" placeholder="Enter username">
        
        <label for="password">Password:</label>
        <input type="password" id="password" placeholder="Enter password">
        
        <button onclick="attemptLogin()">Login</button>
        
        <div id="message" class="message"></div>
    </div>

    <script>
        // TODO: Create user database
        // const users = {
        //     'admin': 'admin123',
        //     'user': 'pass456'
        // };
        
        let failedAttempts = 0;
        const MAX_ATTEMPTS = 3;
        
        function attemptLogin() {
            // TODO: Get username and password
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const messageDiv = document.getElementById('message');
            
            // TODO: Check if account is locked
            // if (failedAttempts >= MAX_ATTEMPTS) { ... }
            
            // TODO: Validate inputs
            // if (username === '' || password === '') { ... }
            
            // TODO: Check username length
            // if (username.length < 3) { ... }
            
            // TODO: Check password length
            // if (password.length < 6) { ... }
            
            // TODO: Check if username exists AND password matches
            // if (users[username] && users[username] === password) {
            //     // Login successful
            // } else {
            //     // Login failed
            //     failedAttempts++;
            // }
        }
    </script>
</body>
</html>
```

### Exercise 3: Adventure Game Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text Adventure Game</title>
    <style>
        body {
            font-family: 'Courier New', monospace;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .game-container {
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        
        #story {
            font-size: 18px;
            line-height: 1.8;
            min-height: 150px;
            margin-bottom: 20px;
        }
        
        .choices {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        
        .choice-btn {
            padding: 15px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            font-family: 'Courier New', monospace;
        }
        
        #inventory {
            margin-top: 20px;
            padding: 15px;
            background-color: #f8f9fa;
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <div class="game-container">
        <h1>🗺️ Adventure Game</h1>
        
        <div id="story">Loading...</div>
        
        <div id="choices" class="choices"></div>
        
        <div id="inventory">
            <strong>Inventory:</strong> <span id="items">Nothing yet</span>
        </div>
    </div>

    <script>
        // TODO: Game state variables
        let currentScene = 'start';
        let inventory = [];
        
        // TODO: Start the game
        updateGame();
        
        function updateGame() {
            // TODO: Use switch to determine which scene to show
            switch (currentScene) {
                case 'start':
                    showStart();
                    break;
                case 'forest':
                    showForest();
                    break;
                // TODO: Add more scenes
                default:
                    showStart();
            }
            
            updateInventory();
        }
        
        function showStart() {
            const storyDiv = document.getElementById('story');
            const choicesDiv = document.getElementById('choices');
            
            storyDiv.innerHTML = `
                <p>You wake up in a mysterious forest...</p>
                <p>What do you do?</p>
            `;
            
            choicesDiv.innerHTML = `
                <button class="choice-btn" onclick="goTo('forest')">Explore the forest</button>
                <button class="choice-btn" onclick="goTo('cave')">Enter the dark cave</button>
                <button class="choice-btn" onclick="goTo('village')">Walk to the village</button>
            `;
        }
        
        function showForest() {
            // TODO: Implement forest scene
            // Check inventory for items
            // if (hasItem('map')) {
            //     // Show different options
            // }
        }
        
        function goTo(scene) {
            currentScene = scene;
            updateGame();
        }
        
        function addItem(item) {
            if (!inventory.includes(item)) {
                inventory.push(item);
                updateInventory();
            }
        }
        
        function hasItem(item) {
            return inventory.includes(item);
        }
        
        function updateInventory() {
            const itemsSpan = document.getElementById('items');
            if (inventory.length === 0) {
                itemsSpan.textContent = 'Nothing yet';
            } else {
                itemsSpan.textContent = inventory.join(', ');
            }
        }
    </script>
</body>
</html>
```

## 📚 Useful Code Patterns

### Pattern 1: Input Validation
```javascript
// Check if input is not empty
if (input === '' || input === null) {
    alert('Please enter a value!');
    return; // Stop function
}

// Check if input is a valid number
const num = parseInt(input);
if (isNaN(num)) {
    alert('Please enter a valid number!');
    return;
}

// Check if number is in range
if (num < 0 || num > 100) {
    alert('Number must be between 0 and 100!');
    return;
}
```

### Pattern 2: Grade Calculation
```javascript
let grade;
let message;

if (score >= 90) {
    grade = 'A';
    message = 'Excellent!';
} else if (score >= 80) {
    grade = 'B';
    message = 'Great job!';
} else if (score >= 70) {
    grade = 'C';
    message = 'Good work!';
} else if (score >= 60) {
    grade = 'D';
    message = 'You passed!';
} else {
    grade = 'F';
    message = 'Keep trying!';
}
```

### Pattern 3: Login Check
```javascript
// Check both username AND password
if (username === correctUsername && password === correctPassword) {
    // Login successful
    showSuccess('Welcome, ' + username + '!');
} else if (username !== correctUsername) {
    // Username wrong
    showError('Username not found!');
} else {
    // Password wrong
    showError('Incorrect password!');
}
```

### Pattern 4: Multiple Conditions with AND
```javascript
// All conditions must be true
if (age >= 18 && hasLicense && passedTest) {
    console.log('You can drive!');
}

// Nested version (same logic)
if (age >= 18) {
    if (hasLicense) {
        if (passedTest) {
            console.log('You can drive!');
        }
    }
}
```

### Pattern 5: Multiple Conditions with OR
```javascript
// At least one condition must be true
if (isStudent || isSenior || hasCoupon) {
    console.log('You get a discount!');
}

// Check which one is true
if (isStudent) {
    discount = 0.10; // 10%
} else if (isSenior) {
    discount = 0.15; // 15%
} else if (hasCoupon) {
    discount = 0.05; // 5%
}
```

### Pattern 6: Switch with Multiple Cases
```javascript
switch (month) {
    case 12:
    case 1:
    case 2:
        season = 'Winter';
        break;
    case 3:
    case 4:
    case 5:
        season = 'Spring';
        break;
    case 6:
    case 7:
    case 8:
        season = 'Summer';
        break;
    case 9:
    case 10:
    case 11:
        season = 'Fall';
        break;
    default:
        season = 'Unknown';
}
```

### Pattern 7: Nested Conditionals
```javascript
if (hasKey) {
    // Can try to unlock
    if (rightKey) {
        console.log('Door unlocked!');
    } else {
        console.log('Wrong key!');
    }
} else {
    console.log('You need a key first!');
}
```

### Pattern 8: Range Checking
```javascript
// Check if number is within a range
if (age >= 13 && age <= 19) {
    console.log('Teenager');
}

// Alternative way
if (age >= 13) {
    if (age <= 19) {
        console.log('Teenager');
    }
}
```

## 🐛 Debugging Checklist

When your conditionals aren't working:

### ✅ Check These First:
- [ ] Are you using `===` instead of `=`?
- [ ] Do all your if/else brackets `{}` match?
- [ ] Did you include `break` in switch cases?
- [ ] Are you checking the right variable names?
- [ ] Did you use `&&` when you meant `||` (or vice versa)?

### 🔍 Debugging Tips:
1. **Use console.log()** to check values:
```javascript
console.log('Score is:', score);
console.log('Is score >= 90?', score >= 90);
```

2. **Test one condition at a time**:
```javascript
// Instead of this complex condition:
if (age >= 18 && hasLicense && passedTest) {

// Test each part:
console.log('Age check:', age >= 18);
console.log('License check:', hasLicense);
console.log('Test check:', passedTest);
```

3. **Check your comparison operators**:
```javascript
// Wrong:
if (age = 18) { // This assigns 18 to age!

// Right:
if (age === 18) { // This compares age to 18
```

4. **Test with simple values first**:
```javascript
// Start with obvious values
// Instead of user input, test with:
const score = 95; // Should be an A
const score = 50; // Should be an F
```

## 📝 Progress Tracker

Keep track of your progress on the exercises:

### Exercise 1: Grade Calculator
- [ ] Input validation works
- [ ] All 5 grades (A-F) display correctly
- [ ] Appropriate colors for each grade
- [ ] Feedback messages show up
- [ ] Error messages for invalid input
- [ ] **Bonus:** Plus/minus grades
- [ ] **Bonus:** GPA calculation

### Exercise 2: Login System
- [ ] Username validation works
- [ ] Password validation works
- [ ] Correct credentials allow login
- [ ] Wrong credentials show error
- [ ] Failed attempts are tracked
- [ ] Account locks after 3 attempts
- [ ] Success message displays correctly
- [ ] **Bonus:** Password strength checker
- [ ] **Bonus:** "Remember me" feature

### Exercise 3: Adventure Game
- [ ] At least 5 different scenes
- [ ] Choices lead to different scenes
- [ ] Inventory system tracks items
- [ ] Some choices require items
- [ ] At least 3 different endings
- [ ] Switch statement used for scenes
- [ ] Nested conditionals for complex choices
- [ ] **Bonus:** Random events
- [ ] **Bonus:** Combat system

## 💡 Tips for Success

1. **Start Simple**: Get one condition working before adding more
2. **Test Often**: Run your code after each small change
3. **Use Console.log**: Print out values to see what's happening
4. **Draw It Out**: Sketch the decision tree on paper first
5. **Read Error Messages**: They tell you exactly what's wrong
6. **Ask for Help**: If stuck for more than 15 minutes, ask!
7. **Take Breaks**: Fresh eyes catch bugs faster
8. **Celebrate Progress**: Every working condition is an achievement!

## 🎯 Quick Reference

### Comparison Operators
- `===` exactly equal
- `!==` not equal
- `>` greater than
- `<` less than
- `>=` greater or equal
- `<=` less or equal

### Logical Operators
- `&&` both must be true
- `||` at least one must be true
- `!` flips true/false

### Common Conditions
```javascript
// Empty check
if (variable === '' || variable === null)

// Range check
if (number >= min && number <= max)

// Multiple options
if (choice === 'a' || choice === 'b' || choice === 'c')

// Not equal
if (password !== 'correct')

// Negation
if (!hasKey)  // same as: hasKey === false
```

Good luck with your exercises! Remember, every expert programmer started exactly where you are now. You've got this! 🚀