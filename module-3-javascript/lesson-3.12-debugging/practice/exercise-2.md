
A game was working perfectly, but now it's full of bugs! Debug it and make it work again.

## Your Task

Create `broken-game.html` and fix all the bugs to make the game playable.

---

## The Broken Game Code

```html
<!DOCTYPE html>
<html>
<head>
    <title>Broken Clicker Game</title>
    <style>
        body {
            font-family: Arial;
            text-align: center;
            padding: 50px;
        }
        
        button {
            padding: 20px 40px;
            font-size: 20px;
            margin: 10px;
            cursor: pointer;
        }
        
        #score {
            font-size: 48px;
            margin: 20px;
        }
        
        .upgrade {
            padding: 10px 20px;
            margin: 5px;
        }
    </style>
</head>
<body>
    <h1>🎮 Clicker Game</h1>
    
    <div id="score">Score: 0</div>
    
    <button id="clickBtn">Click Me!</button>
    
    <div>
        <h2>Upgrades</h2>
        <button class="upgrade" onclick="buyMultiplier()">
            2x Multiplier (Cost: 50)
        </button>
        <button class="upgrade" onclick="buyAutoClicker()">
            Auto Clicker (Cost: 100)
        </button>
    </div>
    
    <div id="status"></div>

    <script>
        // BUG 1: Variable not initialized
        let score;
        let clickValue = 1;
        let multiplier = 1;
        let autoClickerActive = false;
        
        // BUG 2: Typo in function name
        functoin updateDisplay() {
            document.getElementById("score").textContent = "Score: " + score;
        }
        
        // BUG 3: Missing parameter
        function handleClick {
            // BUG 4: Assignment instead of addition
            score = clickValue * multiplier;
            updateDisplay();
        }
        
        // BUG 5: Wrong comparison operator
        function buyMultiplier() {
            if (score = 50) {
                score -= 50;
                // BUG 6: No assignment
                multiplier * 2;
                showStatus("Multiplier purchased!");
                updateDisplay();
            } else {
                showStatus("Not enough score!");
            }
        }
        
        function buyAutoClicker() {
            if (score >= 100) {
                score -= 100;
                autoClickerActive = true;
                // BUG 7: Wrong interval time (too fast)
                setInterval(autoClick, 1);
                showStatus("Auto clicker activated!");
                updateDisplay();
            } else {
                showStatus("Not enough score!");
            }
        }
        
        function autoClick() {
            // BUG 8: Using wrong function
            handleClick;
        }
        
        // BUG 9: Missing parameter
        function showStatus() {
            let statusDiv = document.getElementById("status");
            // BUG 10: Using undefined variable
            statusDiv.textContent = message;
            // BUG 11: Timer never clears message
            setTimeout(function() {
                statusDiv.textContent = "";
            }, 2000);
        }
        
        // BUG 12: Event listener syntax wrong
        document.getElementById("clickBtn").addEventListener("click", handleClick());
        
        // BUG 13: Function not called on load
        updateDisplay;
    </script>
</body>
</html>
```

---

## Bugs to Find and Fix

### Syntax Errors (3 bugs)
1. **Line ?:** Typo in function keyword
2. **Line ?:** Missing parentheses in function declaration
3. **Line ?:** Event listener calls function instead of passing reference

### Logic Errors (6 bugs)
4. **Line ?:** score not initialized to 0
5. **Line ?:** Using = instead of += (replaces score instead of adding)
6. **Line ?:** Using = instead of >= for comparison
7. **Line ?:** multiplier calculation not assigned back
8. **Line ?:** updateDisplay not called on page load
9. **Line ?:** autoClick doesn't call handleClick properly
10. **Line ?:** setInterval time too short (causes lag)

### Runtime Errors (3 bugs)
11. **Line ?:** showStatus missing parameter
12. **Line ?:** Using undefined variable 'message'
13. **Line ?:** Multiple intervals created (no check for existing)

---

## How the Game Should Work

### Correct Behavior:
1. Start with score of 0
2. Click button to increase score by clickValue × multiplier
3. Buy 2x multiplier for 50 points
4. Buy auto-clicker for 100 points
5. Auto-clicker clicks once per second
6. Status messages show and disappear after 2 seconds

---

## Debugging Strategy

### Step 1: Find Syntax Errors
1. Open browser console (F12)
2. Look for red error messages
3. Fix each syntax error before moving on
4. Refresh page after each fix

### Step 2: Test Basic Functionality
```javascript
// Add these console.logs to debug:
function handleClick() {
    console.log("Click! Current score:", score);
    console.log("Click value:", clickValue);
    console.log("Multiplier:", multiplier);
    // ... rest of function
}
```

### Step 3: Test Upgrades
```javascript
function buyMultiplier() {
    console.log("Trying to buy multiplier");
    console.log("Current score:", score);
    console.log("Can afford?", score >= 50);
    // ... rest of function
}
```

### Step 4: Test Auto-Clicker
```javascript
function buyAutoClicker() {
    console.log("Buying auto clicker");
    console.log("Already active?", autoClickerActive);
    // ... rest of function
}
```

---

## Testing Checklist

After fixing bugs, verify:

- [ ] Page loads without errors
- [ ] Score displays correctly
- [ ] Clicking button increases score
- [ ] Can't buy upgrades without enough score
- [ ] Multiplier doubles click value
- [ ] Auto-clicker works at reasonable speed
- [ ] Status messages appear and disappear
- [ ] Can't buy auto-clicker twice
- [ ] Game continues to work after multiple clicks
- [ ] No console errors appear

---

## Bonus Challenges

After fixing all bugs, add these features:

### Easy:
- Display current multiplier value
- Show auto-clicker status (On/Off)
- Add sound effects
- Add click animation

### Medium:
- Save game to localStorage
- Add more upgrade types
- Add prestige system (reset for bonus)
- Add achievements

### Hard:
- Add offline progress
- Add multiple auto-clicker tiers
- Create upgrade tree
- Add visual effects for milestones

---

## Hints

<details>
<summary>Hint 1: Syntax Errors</summary>
Look for:
- Misspelled keywords (functoin → function)
- Missing () in function declarations
- Wrong addEventListener syntax (don't call the function!)
</details>

<details>
<summary>Hint 2: Score Not Increasing</summary>
Check:
- Is score initialized to 0?
- Are you using += or just =?
- Is handleClick actually being called?
</details>

<details>
<summary>Hint 3: Multiplier Not Working</summary>
Check:
- Is the calculation being assigned back? (multiplier = multiplier * 2)
- Or use multiplier *= 2
</details>

<details>
<summary>Hint 4: Auto-Clicker Issues</summary>
Check:
- Is handleClick being called or just referenced?
- Is the interval time reasonable? (1000ms = 1 second)
- Are you preventing multiple intervals?
</details>

<details>
<summary>Hint 5: Status Messages</summary>
Check:
- Does showStatus have a parameter?
- Is the parameter being used correctly?
- Is the variable name correct?
</details>

---

## Solution Approach

1. **Start with console errors** - Fix red errors first
2. **Test each feature individually** - Don't test everything at once
3. **Add console.log everywhere** - Track what's happening
4. **Check your assumptions** - Is score really what you think it is?
5. **Read error messages carefully** - They tell you exactly what's wrong!

---

## Learning Objectives

By completing this exercise, you'll learn:
- How to systematically debug broken code
- Reading and understanding error messages
- Testing code incrementally
- Using console.log effectively
- Common JavaScript mistakes and how to fix them

---

Good luck fixing the game! 🎮🔧

**Remember:** Every bug you fix makes you a better programmer!