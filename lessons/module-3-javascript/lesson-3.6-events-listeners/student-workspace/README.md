# Student Workspace: Events and Event Listeners 🎯

Welcome to your workspace for practicing events! This folder is yours to experiment in.

## What You'll Practice

In this lesson, you're learning how to make your webpage respond to user actions:
- Button clicks
- Typing in text boxes
- Pressing keyboard keys
- And much more!

## Quick Start Templates

### Template 1: Basic Button Click

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Button Click Practice</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 40px;
            text-align: center;
        }
        
        button {
            padding: 15px 30px;
            font-size: 18px;
            background: #3498db;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
        }
        
        button:hover {
            background: #2980b9;
        }
        
        #output {
            margin-top: 20px;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <h1>Button Click Practice</h1>
    
    <button id="myButton">Click Me!</button>
    
    <div id="output">Click the button to see a message!</div>

    <script>
        console.log('Script loaded!');
        
        // Get the button
        let button = document.getElementById('myButton');
        let output = document.getElementById('output');
        
        // Add event listener
        button.addEventListener('click', function() {
            console.log('Button clicked!');
            output.textContent = '🎉 You clicked the button!';
        });
        
        console.log('Event listener added!');
    </script>
</body>
</html>
```

### Template 2: Text Input Event

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Input Practice</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 40px;
            max-width: 600px;
            margin: 0 auto;
        }
        
        input {
            width: 100%;
            padding: 12px;
            font-size: 16px;
            border: 2px solid #ddd;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        
        #preview {
            padding: 20px;
            background: #f0f0f0;
            border-radius: 5px;
            min-height: 50px;
        }
    </style>
</head>
<body>
    <h1>Text Input Practice</h1>
    
    <input type="text" id="textInput" placeholder="Type something...">
    
    <div id="preview">Your text will appear here!</div>

    <script>
        let input = document.getElementById('textInput');
        let preview = document.getElementById('preview');
        
        input.addEventListener('input', function() {
            let text = input.value;
            console.log('User typed:', text);
            
            if (text === '') {
                preview.textContent = 'Your text will appear here!';
            } else {
                preview.textContent = text;
            }
        });
    </script>
</body>
</html>
```

### Template 3: Keyboard Events

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Keyboard Practice</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 40px;
            text-align: center;
        }
        
        #keyDisplay {
            font-size: 48px;
            padding: 40px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-radius: 10px;
            margin: 20px 0;
        }
        
        #player {
            position: absolute;
            font-size: 40px;
        }
        
        #gameArea {
            position: relative;
            width: 600px;
            height: 400px;
            margin: 20px auto;
            background: #f0f0f0;
            border: 2px solid #333;
            border-radius: 10px;
        }
    </style>
</head>
<body>
    <h1>Keyboard Events Practice</h1>
    
    <p>Press any key to see it displayed:</p>
    <div id="keyDisplay">Press a key!</div>
    
    <p>Use arrow keys to move the emoji:</p>
    <div id="gameArea">
        <div id="player">🚀</div>
    </div>

    <script>
        let keyDisplay = document.getElementById('keyDisplay');
        let player = document.getElementById('player');
        
        let playerX = 50;
        let playerY = 50;
        
        // Update player position
        function updatePosition() {
            player.style.left = playerX + 'px';
            player.style.top = playerY + 'px';
        }
        
        updatePosition();
        
        // Listen for any key press
        document.addEventListener('keydown', function(event) {
            console.log('Key pressed:', event.key);
            keyDisplay.textContent = event.key;
            
            // Arrow key movement
            if (event.key === 'ArrowUp') {
                playerY = playerY - 10;
            } else if (event.key === 'ArrowDown') {
                playerY = playerY + 10;
            } else if (event.key === 'ArrowLeft') {
                playerX = playerX - 10;
            } else if (event.key === 'ArrowRight') {
                playerX = playerX + 10;
            }
            
            updatePosition();
        });
    </script>
</body>
</html>
```

## Event Listener Patterns

### Pattern 1: Counter
```javascript
let count = 0;

button.addEventListener('click', function() {
    count = count + 1;
    display.textContent = count;
});
```

### Pattern 2: Toggle
```javascript
button.addEventListener('click', function() {
    if (box.style.display === 'none') {
        box.style.display = 'block';
    } else {
        box.style.display = 'none';
    }
});
```

### Pattern 3: Color Changer
```javascript
let colors = ['red', 'blue', 'green', 'yellow'];
let index = 0;

button.addEventListener('click', function() {
    box.style.backgroundColor = colors[index];
    index = index + 1;
    if (index >= colors.length) {
        index = 0;
    }
});
```

### Pattern 4: Character Counter
```javascript
textarea.addEventListener('input', function() {
    let length = textarea.value.length;
    counter.textContent = length + ' characters';
});
```

### Pattern 5: Enter Key Submit
```javascript
input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        console.log('Submitted:', input.value);
        // Do something with the input
    }
});
```

## Common Event Types Reference

### Mouse Events
```javascript
element.addEventListener('click', function() { });
element.addEventListener('dblclick', function() { });
element.addEventListener('mouseenter', function() { });
element.addEventListener('mouseleave', function() { });
```

### Input Events
```javascript
input.addEventListener('input', function() { });   // Every keystroke
input.addEventListener('change', function() { });  // After leaving field
input.addEventListener('focus', function() { });   // Field selected
input.addEventListener('blur', function() { });    // Field deselected
```

### Keyboard Events
```javascript
document.addEventListener('keydown', function(event) {
    console.log(event.key);  // Which key was pressed
});
```

### Form Events
```javascript
form.addEventListener('submit', function(event) {
    event.preventDefault();  // IMPORTANT: Stop page refresh!
    // Handle form here
});
```

## Debugging Checklist

If your event listener doesn't work, check:

1. **Is the element found?**
   ```javascript
   let button = document.getElementById('myButton');
   console.log('Button:', button);  // Should not be null
   ```

2. **Did you add the listener correctly?**
   ```javascript
   // ❌ Wrong - calls function immediately
   button.addEventListener('click', myFunction());
   
   // ✅ Correct - passes function
   button.addEventListener('click', myFunction);
   ```

3. **Is the event name spelled correctly?**
   ```javascript
   // ❌ Wrong
   button.addEventListener('clik', function() { });
   
   // ✅ Correct
   button.addEventListener('click', function() { });
   ```

4. **For keyboard events - is preventDefault needed?**
   ```javascript
   document.addEventListener('keydown', function(event) {
       if (event.key === ' ') {
           event.preventDefault();  // Stop page from scrolling
       }
   });
   ```

## Exercise Progress Tracker

Track your progress through the exercises:

### Exercise 1: Interactive Button Gallery
- [ ] Created HTML structure
- [ ] Added 6 different buttons
- [ ] Each button has event listener
- [ ] Global click counter works
- [ ] Reset button clears everything
- [ ] Styling looks good
- [ ] **COMPLETE!** ✅

### Exercise 2: Character Counter
- [ ] Created textarea
- [ ] Character count updates live
- [ ] Word count works
- [ ] Sentence count works
- [ ] Warning colors change correctly
- [ ] Clear button works
- [ ] **COMPLETE!** ✅

### Exercise 3: Keyboard Game
- [ ] Created game area
- [ ] Player character displays
- [ ] Arrow keys move player
- [ ] Player stays in boundaries
- [ ] Items can be collected
- [ ] Score increases correctly
- [ ] Pause and reset work
- [ ] **COMPLETE!** ✅

## Tips for Success

### Start Simple
- Get one button working before adding more
- Test frequently in the browser
- Use console.log to see what's happening

### Build Step by Step
1. Create HTML elements
2. Get elements with JavaScript
3. Add one event listener
4. Test it works
5. Add functionality
6. Test again
7. Repeat for other elements

### Use the Console
```javascript
console.log('Script started');
console.log('Button:', button);
console.log('Event fired!');
console.log('Value:', input.value);
```

### Test Frequently
- After each change, refresh browser
- Check console for errors
- Click/type/press keys to test

## Common Mistakes to Avoid

1. **Calling function in addEventListener**
   ```javascript
   // ❌ WRONG
   button.addEventListener('click', handleClick());
   
   // ✅ CORRECT
   button.addEventListener('click', handleClick);
   ```

2. **Forgetting preventDefault on forms**
   ```javascript
   form.addEventListener('submit', function(event) {
       event.preventDefault();  // Don't forget this!
   });
   ```

3. **Not checking if element exists**
   ```javascript
   let button = document.getElementById('myButton');
   if (button) {  // Always check!
       button.addEventListener('click', handleClick);
   }
   ```

## Getting Help

### If You're Stuck:
1. Check the examples folder - see how similar things are done
2. Review the cheatsheet for syntax
3. Ask your parent/teacher to look at the parent guide
4. Check the console for error messages
5. Try adding console.log to see what's happening

### Remember:
- Events can be tricky - that's normal!
- Everyone struggles with debugging at first
- Trial and error is part of learning
- Small wins add up to big projects!

## Your First Steps

1. **Try Template 1** - Get a button click working
2. **Try Template 2** - See text update as you type
3. **Try Template 3** - Move something with arrow keys
4. **Start Exercise 1** - Build your own interactive gallery!

Good luck! Have fun making your webpage interactive! 🚀

---

**Remember:** Save your work frequently and test often! You've got this! 💪
