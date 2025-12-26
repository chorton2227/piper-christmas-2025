# JavaScript Basics - Quick Reference Cheatsheet 📝

## What is JavaScript?
JavaScript is a programming language that makes websites interactive and dynamic. It's the "behavior" layer of web development:
- **HTML** = Structure (the skeleton)
- **CSS** = Style (the appearance)
- **JavaScript** = Behavior (the actions)

---

## Three Ways to Add JavaScript to HTML

### 1. Inline (Not Recommended)
```html
<button onclick="console.log('Clicked!')">Click Me</button>
```
❌ Don't use this - it mixes HTML and JavaScript

### 2. Internal (Good for Learning)
```html
<script>
    console.log('Hello from internal JavaScript!');
</script>
```
✓ Place at the END of the `<body>` tag

### 3. External (Best Practice)
```html
<script src="script.js"></script>
```
✓ Organized, reusable, and professional

---

## The Console

### Opening the Console
| Action | Windows/Linux | Mac |
|--------|---------------|-----|
| Open DevTools | `F12` or `Ctrl+Shift+J` | `Cmd+Option+J` |
| Close DevTools | `F12` | `Cmd+Option+J` |

### What is the Console?
- A place where JavaScript can print messages
- Shows errors and warnings
- A place to test JavaScript code
- Your debugging best friend!

---

## console.log() - Your First JavaScript Command

### Basic Syntax
```javascript
console.log('Hello, World!');
```
- **console** = the console object
- **.log()** = a method that prints to console
- **Inside the ()** = what you want to print
- **;** = semicolon ends the statement (optional but recommended)

### Printing Text (Strings)
```javascript
console.log('Single quotes work');
console.log("Double quotes work too");
console.log('You can use apostrophes: it\'s fun!'); // Use \ to escape
```

### Printing Numbers
```javascript
console.log(42);
console.log(3.14);
console.log(-10);
```

### Printing Multiple Things
```javascript
console.log('I am', 10, 'years old');
console.log('Score:', 100, '/', 200);
```

### Empty Lines for Spacing
```javascript
console.log('First line');
console.log('');  // Empty line
console.log('Third line');
```

---

## Math Operations

### Basic Operators
| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `+` | Addition | `5 + 3` | `8` |
| `-` | Subtraction | `10 - 4` | `6` |
| `*` | Multiplication | `6 * 7` | `42` |
| `/` | Division | `20 / 4` | `5` |
| `%` | Modulo (remainder) | `10 % 3` | `1` |

### Math Examples
```javascript
console.log(2 + 2);           // 4
console.log(10 - 3);          // 7
console.log(5 * 6);           // 30
console.log(20 / 4);          // 5
console.log(17 % 5);          // 2 (remainder when 17 is divided by 5)
```

### Order of Operations (PEMDAS)
1. **P**arentheses
2. **E**xponents (not covered yet)
3. **M**ultiplication and **D**ivision (left to right)
4. **A**ddition and **S**ubtraction (left to right)

```javascript
console.log(2 + 3 * 4);      // 14 (multiply first: 3*4=12, then 2+12=14)
console.log((2 + 3) * 4);    // 20 (parentheses first: 2+3=5, then 5*4=20)
```

---

## String Concatenation (Joining Text)

### Using the + Operator
```javascript
console.log('Hello' + ' ' + 'World');           // Hello World
console.log('I am ' + 10 + ' years old');       // I am 10 years old
console.log('Score: ' + 5 * 10);                 // Score: 50
```

### Combining Strings and Numbers
```javascript
console.log('2 + 2 = ' + (2 + 2));              // 2 + 2 = 4
console.log('I have ' + 5 + ' apples');         // I have 5 apples
```

---

## Comments

### Single-Line Comments
```javascript
// This is a comment - JavaScript ignores it
console.log('Hello'); // You can put comments at the end of lines
```

### Multi-Line Comments
```javascript
/*
   This is a multi-line comment.
   It can span multiple lines.
   Use it to explain complex code.
*/
console.log('Hello');
```

### When to Use Comments
- Explain WHAT the code does
- Explain WHY you did something
- Label sections of code
- Leave notes for yourself or others
- Temporarily "turn off" code

---

## Common Mistakes & How to Fix Them

### Mistake #1: Forgetting Quotes Around Text
```javascript
❌ console.log(Hello);      // Error! JavaScript thinks Hello is a variable
✅ console.log('Hello');    // Correct!
```

### Mistake #2: Mixing Quote Types
```javascript
❌ console.log('Hello");    // Error! Mismatched quotes
✅ console.log('Hello');    // Correct!
✅ console.log("Hello");    // Also correct!
```

### Mistake #3: Forgetting Parentheses
```javascript
❌ console.log 'Hello';     // Error! Missing parentheses
✅ console.log('Hello');    // Correct!
```

### Mistake #4: Order of Operations
```javascript
console.log(2 + 3 * 4);       // 14 (not 20!)
console.log((2 + 3) * 4);     // 20 (use parentheses to change order)
```

---

## Quick Tips

### ✨ Best Practices
1. Always put strings in quotes: `'text'` or `"text"`
2. Use comments to explain your code
3. Use console.log() to test and debug
4. Put script tags at the END of the body
5. Use external .js files for real projects

### 🎯 Testing Your Code
1. Write your JavaScript
2. Save the file
3. Open HTML file in browser
4. Press F12 to open console
5. Check for messages and errors

### 🐛 Debugging Tips
- Read error messages carefully (they tell you what's wrong!)
- Check for typos in your code
- Make sure quotes and parentheses match
- Use console.log() to see what's happening
- Test one thing at a time

---

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Open Console | `F12` or `Ctrl+Shift+J` (Windows) |
| Reload Page | `Ctrl+R` or `F5` |
| Hard Reload | `Ctrl+Shift+R` or `Ctrl+F5` |
| Clear Console | `Ctrl+L` (in console) |

---

## Next Steps

After mastering these basics, you'll learn:
- **Variables** - storing values for later use
- **Functions** - reusable blocks of code
- **DOM Manipulation** - changing HTML with JavaScript
- **Events** - responding to user actions
- **Conditionals** - making decisions in code
- **Loops** - repeating actions
- And much more! 🚀

---

## Quick Examples to Try

### Example 1: Personal Calculator
```javascript
console.log('=== MY CALCULATOR ===');
console.log('10 + 5 =', 10 + 5);
console.log('10 - 5 =', 10 - 5);
console.log('10 * 5 =', 10 * 5);
console.log('10 / 5 =', 10 / 5);
```

### Example 2: Story with Math
```javascript
console.log('I have 3 friends');
console.log('Each friend has 5 candies');
console.log('Total candies:', 3 * 5);
```

### Example 3: Formatted Output
```javascript
console.log('==========');
console.log('MY PROFILE');
console.log('==========');
console.log('Name: Alex');
console.log('Age:', 10);
console.log('Favorite Number:', 7);
```

---

## Resources

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- Practice makes perfect! Keep coding! 💻✨
