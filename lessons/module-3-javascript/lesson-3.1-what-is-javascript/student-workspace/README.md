# Student Workspace - Lesson 3.1: What is JavaScript? 💻

Welcome to your JavaScript workspace! This is where you'll write your first JavaScript programs!

---

## 🎯 Your Mission

Complete the three practice exercises in this lesson:
1. **Exercise 1**: About Me
2. **Exercise 2**: Math Quiz
3. **Exercise 3**: External JavaScript Adventure

---

## 📁 How to Use This Workspace

### Step 1: Create Your Files Here
This folder is YOUR workspace. Create all your exercise files right here in this folder:

```
student-workspace/
├── about-me.html          (Exercise 1)
├── math-quiz.html         (Exercise 2)
├── adventure.html         (Exercise 3)
└── adventure.js           (Exercise 3)
```

### Step 2: Follow the Instructions
Each exercise has detailed instructions in the `practice/` folder:
- Read `practice/exercise-1.md` for Exercise 1
- Read `practice/exercise-2.md` for Exercise 2
- Read `practice/exercise-3.md` for Exercise 3

### Step 3: Check Your Work
After completing each exercise, you can compare your solution to the answer keys in the `answer-key/` folder. But try to complete the exercises on your own first!

---

## 🚀 Getting Started Checklist

Before you start coding, make sure you have:
- [ ] A web browser (Chrome, Firefox, or Edge)
- [ ] A text editor (VS Code or similar)
- [ ] Read the lesson README in the main lesson folder
- [ ] Looked at the example files to see how things work
- [ ] Know how to open the console (F12 or Ctrl+Shift+J)

---

## 💡 Quick Reference

### Basic HTML Template
Every exercise needs basic HTML structure. Here's a starter template:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My JavaScript Project</title>
</head>
<body>
    <h1>My Project Title</h1>
    <p>Open the console to see JavaScript output!</p>

    <!-- Your JavaScript goes here, at the END of the body -->
    <script>
        console.log('Hello, JavaScript!');
    </script>
</body>
</html>
```

### Using console.log()
```javascript
// Print text (use quotes!)
console.log('Hello, World!');

// Print numbers (no quotes!)
console.log(42);

// Print multiple things
console.log('I am', 10, 'years old');

// Do math
console.log('2 + 2 =', 2 + 2);

// Add spacing
console.log('');  // Empty line
```

### External JavaScript Template
For Exercise 3, you'll need TWO files:

**adventure.html:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Adventure</title>
</head>
<body>
    <h1>My JavaScript Adventure</h1>
    <p>Open the console to see the adventure!</p>

    <!-- Link to external JavaScript file -->
    <script src="adventure.js"></script>
</body>
</html>
```

**adventure.js:**
```javascript
// Your JavaScript code goes here
console.log('Adventure begins!');
```

---

## 🐛 Debugging Tips

### Problem: Nothing shows in the console
**Solution:**
- Make sure you pressed F12 or Ctrl+Shift+J
- Click the "Console" tab if it's not selected
- Check that your code is inside `<script>` tags

### Problem: Error message appears
**Common causes:**
- Forgot quotes around text: `console.log('Hello')` not `console.log(Hello)`
- Mismatched quotes: `console.log('Hello')` not `console.log('Hello")`
- Missing parentheses: `console.log()` not `console.log`
- Typo: `console.log` not `consol.log`

### Problem: External JavaScript not working
**Solution:**
- Make sure HTML and JS files are in the SAME folder
- Check the filename in `<script src="">` matches exactly
- Make sure script tag is at the END of the body

---

## ✅ Exercise Checklists

### Exercise 1: About Me
- [ ] Created `about-me.html`
- [ ] Added basic HTML structure
- [ ] Added script tag at end of body
- [ ] Used console.log() at least 6 times
- [ ] Included at least one math calculation
- [ ] Added comments to explain code
- [ ] Tested in browser with console open
- [ ] Code works with no errors!

### Exercise 2: Math Quiz
- [ ] Created `math-quiz.html`
- [ ] Added HTML structure and optional styling
- [ ] Created Easy, Medium, and Word Problem sections
- [ ] Included at least 10 total math problems
- [ ] Showed both problems AND answers
- [ ] Used nice formatting with headers and spacing
- [ ] Added comments explaining code
- [ ] Tested in browser with console open
- [ ] Code works with no errors!

### Exercise 3: External JavaScript
- [ ] Created `adventure.html`
- [ ] Created `adventure.js`
- [ ] Both files in the same folder
- [ ] HTML links to JS file with `<script src="adventure.js"></script>`
- [ ] Script tag at END of body
- [ ] JS file has at least 15 console.log() statements
- [ ] Included at least 3 math calculations
- [ ] Content is organized with headers/sections
- [ ] Both files have comments
- [ ] Tested in browser with console open
- [ ] Code works with no errors!

---

## 🎨 Make It Your Own!

Don't just copy the examples - add your own creativity!

### Ideas to Personalize Your Projects
- Use your own facts and interests
- Create stories about topics you love
- Add fun calculations (How many days until summer? How many hours until your birthday?)
- Use emojis in your console messages! 🚀✨🎮
- Create ASCII art borders and designs
- Make up your own word problems
- Write jokes or riddles
- Build a guide for your favorite game
- Calculate sports statistics

---

## 📊 Track Your Progress

As you complete each exercise, mark it off:

- [ ] Exercise 1: About Me - COMPLETE
- [ ] Exercise 2: Math Quiz - COMPLETE
- [ ] Exercise 3: External JavaScript - COMPLETE

When all three are done, you've mastered Lesson 3.1! 🎉

---

## 🌟 Challenge Yourself

Finished early? Try these bonus challenges:

### Extra Practice Ideas
1. **Combine exercises**: Use math from Exercise 2 in your Exercise 3 story
2. **Create a game character** with stats (health, strength, etc.) and show calculations
3. **Make a countdown** to an important date using math
4. **Build a recipe converter** that doubles or triples ingredient amounts
5. **Create a gaming stats tracker** showing scores, levels, and achievements

### Go Beyond
- Add CSS styling to make your pages look amazing
- Create multiple JavaScript files and link them all
- Make longer, more complex stories with many chapters
- Create tables of data using console.log() and spaces
- Use special characters to create drawings in the console

---

## 📚 Need Help?

### Resources in This Lesson
1. **README.md** (main lesson folder) - Complete lesson explanation
2. **examples/** - Four example files showing how things work
3. **practice/** - Detailed instructions for each exercise
4. **resources/cheatsheet.md** - Quick reference guide
5. **resources/parent-guide.md** - Guide for parent/teacher
6. **answer-key/** - Solutions to check after you finish

### Stuck on Something?
1. Review the lesson README
2. Look at the example files
3. Check the cheatsheet
4. Ask a parent or teacher
5. Take a break and come back with fresh eyes!

---

## 🎓 Learning Goals

By the end of this lesson, you should be able to:
- [ ] Explain what JavaScript does
- [ ] Open the browser console
- [ ] Write console.log() statements correctly
- [ ] Use quotes around text (strings)
- [ ] Do math in JavaScript (+, -, *, /, %)
- [ ] Combine text and numbers
- [ ] Add comments to your code
- [ ] Link external JavaScript files
- [ ] Debug simple errors

---

## 🎉 Celebrate Your Success!

Every line of code you write makes you a better programmer!
- Take screenshots of your creative console outputs
- Show your projects to family and friends
- Be proud of what you've created
- Keep learning and experimenting!

**Remember**: All great programmers started exactly where you are now. You've got this! 💪

---

## Ready to Start?

1. Read the instructions for Exercise 1
2. Create your `about-me.html` file right here in this folder
3. Start coding!
4. Have fun! 🚀

Happy Coding! ✨
