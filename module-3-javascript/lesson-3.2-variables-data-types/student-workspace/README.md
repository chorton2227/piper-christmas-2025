# Student Workspace - Lesson 3.2: Variables and Data Types 💻

Welcome to your variables workspace! This is where you'll create programs that store and use data!

---

## 🎯 Your Mission

Complete the three practice exercises:
1. **Exercise 1**: Character Creator - Build a game character with variables
2. **Exercise 2**: Variable Calculator - Solve real-world math problems
3. **Exercise 3**: Story Variables - Write an interactive adventure story

---

## 📁 How to Use This Workspace

### Create Your Files Here
All your exercise files should go in this folder:

```
student-workspace/
├── character-creator.html      (Exercise 1)
├── variable-calculator.html    (Exercise 2)
└── story-variables.html        (Exercise 3)
```

### Follow These Steps
1. Read the exercise instructions in `practice/` folder
2. Create your HTML file here in student-workspace
3. Write your code
4. Test in browser (F12 for console!)
5. Compare with answer key if needed

---

## 🚀 Getting Started Checklist

Before you begin, make sure you:
- [ ] Read the main lesson README
- [ ] Reviewed all 4 example files
- [ ] Understand `let` vs `const`
- [ ] Know the three data types (number, string, boolean)
- [ ] Can use `typeof` to check types
- [ ] Have a browser and text editor open

---

## 💡 Quick Reference

### Basic HTML Template
Every exercise needs this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Variables Project</title>
</head>
<body>
    <h1>My Project</h1>
    <p>Open the console (F12) to see the output!</p>

    <script>
        // Your JavaScript code goes here
        
        // Create variables
        const GAME_NAME = 'My Game';
        let score = 0;
        let playerName = 'Alex';
        let isPlaying = true;
        
        // Use variables
        console.log('Game:', GAME_NAME);
        console.log('Player:', playerName);
        console.log('Score:', score);
    </script>
</body>
</html>
```

### Creating Variables

```javascript
// Use const for values that don't change
const MAX_HEALTH = 100;
const GAME_TITLE = 'Adventure';

// Use let for values that do change
let currentHealth = 100;
let playerLevel = 1;
let score = 0;

// Booleans (true/false)
let isAlive = true;
let hasWeapon = false;
```

### Data Types

```javascript
// Numbers (no quotes)
let age = 10;
let price = 19.99;
let temperature = -5;

// Strings (text in quotes)
let name = 'Alex';
let city = "Portland";
let message = 'Hello!';

// Booleans (true or false)
let isActive = true;
let gameOver = false;
```

### Using Variables

```javascript
// Read (print) a variable
console.log(score);
console.log('Score:', score);

// Update a variable (if using let)
score = 100;
score = score + 50;

// Combine strings
let firstName = 'Alex';
let lastName = 'Smith';
let fullName = firstName + ' ' + lastName;
```

### Checking Types

```javascript
let myNumber = 42;
let myString = 'Hello';
let myBoolean = true;

console.log(typeof myNumber);    // "number"
console.log(typeof myString);    // "string"
console.log(typeof myBoolean);   // "boolean"
```

---

## 📝 Exercise Summaries

### Exercise 1: Character Creator 🎮
**What You'll Do:**
- Create constants for character basics
- Create variables for stats that change
- Use booleans for status flags
- Simulate battles and level ups
- Display character information

**Key Concepts:**
- Organizing variables by purpose
- Using const vs let appropriately
- Updating variables over time
- Calculating derived stats

**Tips:**
- Plan your character before coding
- Use descriptive names
- Group related variables together
- Show before and after for changes

### Exercise 2: Variable Calculator 🧮
**What You'll Do:**
- Create constants for prices and rates
- Calculate order totals step by step
- Track savings account transactions
- Calculate grade averages

**Key Concepts:**
- Using variables in calculations
- Storing intermediate results
- Building on previous values
- Real-world math applications

**Tips:**
- Show your work clearly
- Label each section
- Store calculations in variables
- Format output for readability

### Exercise 3: Story Variables 📖
**What You'll Do:**
- Create story constants (title, setting, etc.)
- Create character variables
- Track progress with numbers
- Use booleans for status
- Write a multi-chapter adventure

**Key Concepts:**
- Using variables to make stories dynamic
- Updating variables to show progress
- Combining strings creatively
- Building complex narratives

**Tips:**
- Outline your story first
- Update variables as story progresses
- Show stats at key moments
- Be creative and have fun!

---

## ✅ Exercise Checklists

### Exercise 1: Character Creator
- [ ] Created `character-creator.html`
- [ ] At least 4 constants defined
- [ ] At least 4 let variables defined
- [ ] At least 2 boolean variables
- [ ] Character info displayed clearly
- [ ] At least 3 simulated actions
- [ ] Stats updated after each action
- [ ] Good variable names used
- [ ] Code is organized with comments

### Exercise 2: Variable Calculator
- [ ] Created `variable-calculator.html`
- [ ] At least 5 constants defined
- [ ] Order calculator complete (5 calculations)
- [ ] Savings tracker with transactions
- [ ] Grade calculator with average
- [ ] All calculations shown clearly
- [ ] Descriptive variable names
- [ ] Well-organized output

### Exercise 3: Story Variables
- [ ] Created `story-variables.html`
- [ ] At least 5 constants defined
- [ ] At least 8 let variables defined
- [ ] At least 3 boolean variables
- [ ] Story has 5+ chapters
- [ ] Variables updated throughout
- [ ] Stats shown at key moments
- [ ] All variables used in story
- [ ] Creative and engaging narrative

---

## 🐛 Debugging Checklist

If something isn't working:

- [ ] Did you save the file?
- [ ] Is the console open? (Press F12)
- [ ] Are you in the "Console" tab?
- [ ] Did you refresh the page? (F5)
- [ ] Are quotes matched? `'text'` not `'text"`
- [ ] Did you use `let` or `const` to create variables?
- [ ] Are variable names spelled consistently?
- [ ] Did you try to change a `const`? (use `let` instead)
- [ ] Are numbers without quotes? `42` not `'42'`
- [ ] Did you check for error messages in console?

---

## 🎯 Success Criteria

You're ready to move on when you can:
- [ ] Explain the difference between `let` and `const`
- [ ] Create variables of all three data types
- [ ] Update variables when needed
- [ ] Use `typeof` to check data types
- [ ] Combine strings with `+`
- [ ] Choose descriptive variable names
- [ ] Use camelCase naming
- [ ] Complete all three exercises
- [ ] Understand your own code well enough to explain it

---

## 💪 Challenge Yourself

Already finished? Try these extras:

### Additional Features for Exercise 1
- Add more stats (strength, defense, speed)
- Calculate a power level
- Create an inventory system
- Add equipment bonuses
- Show health percentage

### Additional Features for Exercise 2
- Add a discount calculator
- Calculate percentages
- Create a currency converter
- Add more unit conversions
- Calculate compound interest

### Additional Features for Exercise 3
- Add more characters
- Track multiple items separately
- Add dialog between characters
- Create branching paths
- Calculate time/days passed

---

## 📚 Resources

### In This Lesson
- **README.md** - Complete lesson explanation
- **examples/** - 4 working examples to study
- **practice/** - Detailed exercise instructions
- **answer-key/** - Solutions to check (try first!)
- **resources/cheatsheet.md** - Quick reference
- **resources/parent-guide.md** - For parent/teacher

### Online Help
- [MDN: Variables](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)
- [MDN: Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

---

## 🎨 Make It Your Own!

Don't just copy - customize!

### Personalization Ideas
- Use your own name and interests
- Create characters you'd want to play
- Write stories about topics you love
- Calculate things that matter to you
- Add your own creative touches
- Use emojis to make output fun! 🎮✨🚀

---

## 🏆 Bonus Projects

Want even more practice?

### Project Ideas
1. **Personal Profile** - All about you with 10+ variables
2. **Dream Game Stats** - Design your dream game character
3. **Family Calculator** - Track everyone's ages, heights, etc.
4. **Sports Stats** - Track your favorite team or player
5. **Pet Simulator** - Virtual pet with stats
6. **Recipe Scaler** - Double/triple recipe ingredients
7. **Allowance Tracker** - Track money over time
8. **Study Time Calculator** - Plan homework schedule

---

## 💬 Remember

### Variable Success Tips
1. **Name variables clearly** - `playerScore` not `x`
2. **Use const when you can** - prevents accidental changes
3. **Group related variables** - keeps code organized
4. **Test often** - Check console after each section
5. **Comment your code** - explain what you're doing
6. **Be consistent** - always use camelCase
7. **Start simple** - then add complexity
8. **Have fun!** - Be creative!

### Getting Help
If you're stuck:
1. Read the error message carefully
2. Check the examples
3. Review the cheatsheet
4. Look at the answer key
5. Ask a parent or teacher
6. Take a break and come back

---

## 🌟 You've Got This!

Variables are one of the MOST IMPORTANT concepts in programming. Once you understand variables, you can:
- Store any kind of information
- Make programs that remember things
- Create interactive experiences
- Build games and apps
- Learn any programming language!

Every programmer started by learning variables, just like you're doing now. Take your time, experiment, and enjoy the process!

**Ready to become a variables master?** Let's go! 🚀

---

## 📊 Track Your Progress

Mark off each step as you complete it:

- [ ] Read main lesson README
- [ ] Studied all 4 examples
- [ ] Started Exercise 1
- [ ] Completed Exercise 1
- [ ] Started Exercise 2
- [ ] Completed Exercise 2
- [ ] Started Exercise 3
- [ ] Completed Exercise 3
- [ ] Tried bonus challenges
- [ ] Can explain variables to someone else

**When all boxes are checked, you're ready for Lesson 3.3: Functions!** 🎉

