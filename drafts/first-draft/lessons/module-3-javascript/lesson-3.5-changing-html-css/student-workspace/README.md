# Student Workspace: Lesson 3.5

## 🎯 Welcome!

This is YOUR workspace for practicing changing HTML and CSS with JavaScript!

---

## 🚀 Quick Start Templates

### Template 1: Basic Text Changer
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Text Changer</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        #display {
            padding: 20px;
            background: #f0f0f0;
            border-radius: 8px;
            margin: 20px 0;
            font-size: 1.5em;
        }
        button {
            padding: 10px 20px;
            font-size: 1em;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Text Changer</h1>
    
    <div id="display">Original Text</div>
    
    <button onclick="changeText()">Change Text</button>
    
    <script>
        function changeText() {
            let display = document.getElementById('display');
            display.textContent = 'New Text!';
        }
    </script>
</body>
</html>
```

### Template 2: Style Changer
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Style Changer</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        #box {
            width: 200px;
            height: 200px;
            background: blue;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5em;
            border-radius: 10px;
            margin: 20px 0;
        }
        button {
            padding: 10px 20px;
            margin: 5px;
            font-size: 1em;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Style Changer</h1>
    
    <div id="box">Style Me!</div>
    
    <button onclick="changeColor()">Change Color</button>
    <button onclick="changeSize()">Change Size</button>
    
    <script>
        function changeColor() {
            let box = document.getElementById('box');
            box.style.backgroundColor = 'red';
        }
        
        function changeSize() {
            let box = document.getElementById('box');
            box.style.width = '300px';
            box.style.height = '300px';
        }
    </script>
</body>
</html>
```

### Template 3: Class Toggler
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Class Toggler</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        #box {
            padding: 30px;
            background: #f0f0f0;
            border-radius: 10px;
            margin: 20px 0;
            transition: all 0.3s;
        }
        #box.active {
            background: #2ecc71;
            color: white;
            transform: scale(1.1);
        }
        button {
            padding: 10px 20px;
            font-size: 1em;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Class Toggler</h1>
    
    <div id="box">Click to activate!</div>
    
    <button onclick="toggleActive()">Toggle Active</button>
    
    <script>
        function toggleActive() {
            let box = document.getElementById('box');
            box.classList.toggle('active');
        }
    </script>
</body>
</html>
```

---

## 🎨 Quick Reference

### Changing Text
```javascript
// Get element
let element = document.getElementById('myElement');

// Change text (SAFE - use this most of the time)
element.textContent = 'New text here';

// Get current text
let currentText = element.textContent;
```

### Changing Styles
```javascript
// Colors
element.style.color = 'red';
element.style.backgroundColor = '#3498db';

// Sizes (always include units!)
element.style.width = '200px';
element.style.height = '100px';
element.style.fontSize = '20px';

// Hide/Show
element.style.display = 'none';      // Hide
element.style.display = 'block';     // Show
```

### Using classList
```javascript
// Add a class
element.classList.add('active');

// Remove a class
element.classList.remove('active');

// Toggle a class (on/off)
element.classList.toggle('active');

// Check if has a class
if (element.classList.contains('active')) {
    console.log('Element is active!');
}
```

---

## 🐛 Debugging Checklist

When something doesn't work, check:

- [ ] Is the element ID spelled correctly?
- [ ] Did I include units for sizes? (`'100px'` not `100`)
- [ ] Are my CSS property names camelCase? (`backgroundColor` not `background-color`)
- [ ] Did I check if the element exists before changing it?
- [ ] Is my class name spelled the same as in CSS?
- [ ] Are my quotes correct? (`'red'` not `red`)
- [ ] Did I save the file?
- [ ] Did I refresh the browser?

---

## 💡 Common Patterns

### Pattern 1: Button Color Cycle
```javascript
let colors = ['red', 'blue', 'green', 'yellow', 'purple'];
let currentIndex = 0;

function nextColor() {
    let box = document.getElementById('box');
    box.style.backgroundColor = colors[currentIndex];
    
    currentIndex = currentIndex + 1;
    if (currentIndex >= colors.length) {
        currentIndex = 0;
    }
}
```

### Pattern 2: Show/Hide Toggle
```javascript
function toggleVisibility() {
    let element = document.getElementById('myElement');
    
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}
```

### Pattern 3: Theme Switcher
```javascript
function switchTheme(theme) {
    let body = document.body;
    
    // Remove all themes
    body.classList.remove('light', 'dark', 'blue');
    
    // Add selected theme
    body.classList.add(theme);
}
```

### Pattern 4: Counter with Color
```javascript
let count = 0;

function increment() {
    count = count + 1;
    
    let display = document.getElementById('count');
    display.textContent = count;
    
    // Change color based on count
    if (count < 5) {
        display.style.color = 'green';
    } else if (count < 10) {
        display.style.color = 'orange';
    } else {
        display.style.color = 'red';
    }
}
```

---

## 🎯 Exercise Hints

### Exercise 1: To-Do List

**Starting Point:**
1. Create HTML with input, button, and list container
2. Write `addTask()` function
3. Create task elements with `document.createElement()`
4. Add Complete and Delete buttons to each task

**Stuck?** Look at example-1-changing-text.html for text manipulation examples.

### Exercise 2: Character Customizer

**Starting Point:**
1. Create character HTML (head, body, arms, legs as divs)
2. Add color buttons for each part
3. Write functions to change `style.backgroundColor`
4. Add size controls with classList

**Stuck?** Look at example-2-changing-styles.html for style examples.

### Exercise 3: Theme Switcher

**Starting Point:**
1. Create dashboard HTML structure
2. Define theme classes in CSS
3. Write `switchTheme()` function using classList
4. Add theme buttons

**Stuck?** Look at example-3-using-classlist.html for classList examples.

---

## 📊 Progress Tracker

Mark off as you complete:

**Basics:**
- [ ] Changed text with textContent
- [ ] Changed one style property
- [ ] Added a class with classList.add()
- [ ] Removed a class with classList.remove()

**Intermediate:**
- [ ] Used classList.toggle() for show/hide
- [ ] Changed multiple styles at once
- [ ] Created a theme switcher
- [ ] Made a progress bar

**Advanced:**
- [ ] Completed Exercise 1 (To-Do List)
- [ ] Completed Exercise 2 (Character Customizer)
- [ ] Completed Exercise 3 (Theme Switcher)
- [ ] Created my own project combining techniques

---

## 🏆 Challenge Yourself

Once you've mastered the basics, try:

1. **Color Mixer**: Use sliders to mix RGB colors
2. **Animation Controller**: Start/stop/speed control
3. **Style Copier**: Copy styles from one element to another
4. **Live Preview**: Show changes before applying
5. **Your Idea**: Build something YOU want to create!

---

## 💻 Keyboard Shortcuts

While coding:
- `Ctrl + S`: Save file
- `F5`: Refresh browser
- `F12`: Open developer tools
- `Ctrl + Shift + I`: Open inspector
- `Ctrl + Shift + J`: Open console

---

## 📝 Notes Space

Use this space to write notes, ideas, or things you learn:

```
My Notes:
-
-
-
-
```

---

## 🎉 You've Got This!

Remember:
- **textContent** for text (safe!)
- **style** for dynamic values
- **classList** for predefined styles (best!)
- Always check if elements exist
- Include units for sizes
- Use camelCase for property names

**Happy coding!** 🚀
