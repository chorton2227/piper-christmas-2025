# Lesson 3.6: Events and Event Listeners - Quick Reference 🎯

## Event Listener Syntax

### Basic Format
```javascript
element.addEventListener('eventType', function() {
    // Code to run when event happens
});
```

### With Named Function
```javascript
function handleClick() {
    console.log('Clicked!');
}

button.addEventListener('click', handleClick);
```

### With Event Object
```javascript
button.addEventListener('click', function(event) {
    console.log('Event:', event);
    console.log('Target:', event.target);
});
```

## Common Event Types

### Mouse Events
| Event | When It Fires |
|-------|---------------|
| `click` | Element is clicked |
| `dblclick` | Element is double-clicked |
| `mouseenter` | Mouse enters element |
| `mouseleave` | Mouse leaves element |
| `mousemove` | Mouse moves over element |
| `mousedown` | Mouse button pressed |
| `mouseup` | Mouse button released |

### Keyboard Events
| Event | When It Fires |
|-------|---------------|
| `keydown` | Key is pressed down |
| `keyup` | Key is released |
| `keypress` | Key is pressed (deprecated) |

### Form/Input Events
| Event | When It Fires |
|-------|---------------|
| `input` | Input value changes (every keystroke) |
| `change` | Input value changes AND loses focus |
| `focus` | Element receives focus |
| `blur` | Element loses focus |
| `submit` | Form is submitted |

### Other Useful Events
| Event | When It Fires |
|-------|---------------|
| `scroll` | Element is scrolled |
| `resize` | Window is resized |
| `load` | Page/image finishes loading |

## Event Object Properties

```javascript
element.addEventListener('click', function(event) {
    event.target        // Element that triggered event
    event.type          // Type of event ('click', 'input', etc.)
    event.key           // Key pressed (keyboard events)
    event.keyCode       // Numeric code for key (older method)
    event.clientX       // Mouse X position
    event.clientY       // Mouse Y position
    event.preventDefault()   // Stop default behavior
    event.stopPropagation() // Stop event bubbling
});
```

## Common Keyboard Keys

### Special Keys
```javascript
event.key === 'Enter'      // Enter key
event.key === ' '          // Space bar
event.key === 'Escape'     // Escape key
event.key === 'Tab'        // Tab key
event.key === 'Backspace'  // Backspace
```

### Arrow Keys
```javascript
event.key === 'ArrowUp'
event.key === 'ArrowDown'
event.key === 'ArrowLeft'
event.key === 'ArrowRight'
```

### Modifier Keys
```javascript
event.ctrlKey   // True if Ctrl is held
event.shiftKey  // True if Shift is held
event.altKey    // True if Alt is held
event.metaKey   // True if Command/Windows key held
```

### Example: Ctrl + S
```javascript
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault(); // Stop browser save dialog
        console.log('Ctrl+S pressed!');
    }
});
```

## Preventing Default Behavior

```javascript
// Stop link from navigating
link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Link clicked but not navigating');
});

// Stop form from refreshing page
form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Form submitted but page not refreshing');
});

// Stop space from scrolling page
document.addEventListener('keydown', function(event) {
    if (event.key === ' ') {
        event.preventDefault();
    }
});
```

## Common Patterns

### Click Counter
```javascript
let count = 0;
button.addEventListener('click', function() {
    count = count + 1;
    display.textContent = count;
});
```

### Live Text Input
```javascript
input.addEventListener('input', function() {
    preview.textContent = input.value;
});
```

### Enter Key Submit
```javascript
input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        console.log('Submitted:', input.value);
    }
});
```

### Arrow Key Movement
```javascript
let x = 0;
let y = 0;

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') y = y - 10;
    if (event.key === 'ArrowDown') y = y + 10;
    if (event.key === 'ArrowLeft') x = x - 10;
    if (event.key === 'ArrowRight') x = x + 10;
    
    player.style.left = x + 'px';
    player.style.top = y + 'px';
});
```

### Toggle Visibility
```javascript
button.addEventListener('click', function() {
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
});
```

### Color Cycle
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

### Form Validation
```javascript
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let email = emailInput.value;
    
    if (!email.includes('@')) {
        alert('Please enter a valid email');
    } else {
        console.log('Form valid!');
    }
});
```

## Multiple Event Listeners

### Same Element, Same Event
```javascript
button.addEventListener('click', function() {
    console.log('First listener');
});

button.addEventListener('click', function() {
    console.log('Second listener');
});

// Both will run when clicked!
```

### Same Element, Different Events
```javascript
input.addEventListener('focus', function() {
    console.log('Input focused');
});

input.addEventListener('blur', function() {
    console.log('Input lost focus');
});

input.addEventListener('input', function() {
    console.log('User is typing');
});
```

## Removing Event Listeners

```javascript
function handleClick() {
    console.log('Clicked!');
}

// Add listener
button.addEventListener('click', handleClick);

// Remove listener (must use same function reference!)
button.removeEventListener('click', handleClick);
```

### One-Time Event
```javascript
button.addEventListener('click', function() {
    console.log('This runs once!');
}, { once: true });
```

## Best Practices ✅

### ✅ DO:
```javascript
// Check if element exists
let button = document.getElementById('myButton');
if (button) {
    button.addEventListener('click', handleClick);
}

// Use preventDefault() for forms
form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle form
});

// Use named functions for complex logic
function handleComplexClick() {
    // 20 lines of code here
}
button.addEventListener('click', handleComplexClick);
```

### ❌ DON'T:
```javascript
// Don't call the function (missing parentheses)
button.addEventListener('click', handleClick());  // ❌ Wrong!
button.addEventListener('click', handleClick);    // ✅ Correct!

// Don't forget to check for null
document.getElementById('btn').addEventListener(...);  // ❌ Might crash!

// Don't forget preventDefault on forms
form.addEventListener('submit', function(event) {
    console.log('Submitting...');  // ❌ Page will refresh!
});
```

## Quick Debugging

### Check if listener is attached
```javascript
button.addEventListener('click', function() {
    console.log('✅ Button listener is working!');
});
```

### Check event details
```javascript
button.addEventListener('click', function(event) {
    console.log('Event type:', event.type);
    console.log('Target:', event.target);
    console.log('Event object:', event);
});
```

### Check element selection
```javascript
let button = document.getElementById('myButton');
console.log('Button found:', button);  // Should not be null
```

## Common Mistakes to Avoid ⚠️

1. **Calling function instead of passing it**
   ```javascript
   // ❌ Wrong - calls function immediately
   button.addEventListener('click', myFunction());
   
   // ✅ Correct - passes function to be called later
   button.addEventListener('click', myFunction);
   ```

2. **Forgetting preventDefault() on forms**
   ```javascript
   // ❌ Page will refresh
   form.addEventListener('submit', function() { });
   
   // ✅ Page won't refresh
   form.addEventListener('submit', function(event) {
       event.preventDefault();
   });
   ```

3. **Not checking if element exists**
   ```javascript
   // ❌ Crashes if element doesn't exist
   document.getElementById('btn').addEventListener('click', ...);
   
   // ✅ Safe
   let btn = document.getElementById('btn');
   if (btn) {
       btn.addEventListener('click', ...);
   }
   ```

4. **Using wrong event type**
   ```javascript
   // ❌ 'click' doesn't work well for text input
   input.addEventListener('click', function() { });
   
   // ✅ Use 'input' for typing
   input.addEventListener('input', function() { });
   ```

## Event Flow

When an event happens on an element:
1. **Capturing Phase** - Event travels DOWN from window to target
2. **Target Phase** - Event reaches the element
3. **Bubbling Phase** - Event travels UP from target back to window

By default, listeners run during bubbling phase.

## Quick Reference Card 🎴

### Adding Listeners
```javascript
element.addEventListener('event', function)
```

### Common Events
- `click`, `input`, `change`, `submit`
- `keydown`, `keyup`
- `focus`, `blur`
- `mouseenter`, `mouseleave`

### Event Object
- `event.target` - element that triggered event
- `event.key` - keyboard key pressed
- `event.preventDefault()` - stop default action

### Best Practices
1. Always check if element exists
2. Use `preventDefault()` for forms
3. Use named functions for complex code
4. Test in console to debug

---

**Remember:** Events make your webpage interactive! Practice adding different listeners and see what happens! 🚀
