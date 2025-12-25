# Lesson 3.6: Events and Event Listeners 🎯

## Learning Objectives 🎓

By the end of this lesson, you will be able to:

- Understand what events are and why they're important
- Use `addEventListener()` to respond to user actions
- Handle different types of events (click, input, keyboard, form)
- Access the event object to get information about what happened
- Use `preventDefault()` to control default behaviors
- Create interactive elements that respond to user actions

## What are Events? 🤔

Think of your webpage as a stage, and events are things that happen on that stage:

- Someone **clicks** a button → Click Event
- Someone **types** in an input → Input Event
- Someone **presses** a key → Keyboard Event
- Someone **submits** a form → Submit Event
- Someone **moves** the mouse → Mouse Event

**Events are actions or occurrences that happen in the browser**. They let us make our webpages interactive by responding to what the user does!

### The Party Analogy 🎉

Imagine you're hosting a party:

- **The Doorbell Rings** (Event) → You answer the door (Event Handler)
- **Someone Says "I'm hungry"** (Event) → You serve food (Event Handler)
- **Music Stops** (Event) → You start a new song (Event Handler)

In JavaScript:
- **User Clicks Button** (Event) → Your function runs (Event Handler)
- **User Types Text** (Event) → Your function updates the page (Event Handler)
- **User Presses Enter** (Event) → Your function submits the form (Event Handler)

## Adding Event Listeners 📻

An **event listener** is like setting up a guard who watches for specific things to happen. When that thing happens, the guard calls a function you provide.

### Basic Syntax

```javascript
element.addEventListener('eventType', functionToRun);
```

### Three Parts:

1. **Element** - What to watch (a button, input, etc.)
2. **Event Type** - What to watch for ('click', 'input', 'keydown', etc.)
3. **Function** - What to do when it happens

### Simple Example

```javascript
// Get the button
let myButton = document.getElementById('myButton');

// Create a function to run
function handleClick() {
    console.log('Button was clicked!');
}

// Add the event listener
myButton.addEventListener('click', handleClick);
```

## Common Event Types 🎯

### Click Events

Happens when someone clicks on an element.

```javascript
let button = document.getElementById('myButton');

button.addEventListener('click', function() {
    console.log('You clicked the button!');
});
```

**Common Uses:**
- Buttons
- Links
- Images
- Any clickable element

### Input Events

Happens when someone types in an input field.

```javascript
let input = document.getElementById('nameInput');

input.addEventListener('input', function() {
    console.log('You typed:', input.value);
});
```

**Common Uses:**
- Text inputs
- Search bars
- Text areas
- Any input field

### Change Events

Happens when an input value changes AND the user leaves the field.

```javascript
let select = document.getElementById('colorSelect');

select.addEventListener('change', function() {
    console.log('You selected:', select.value);
});
```

**Common Uses:**
- Dropdowns (select)
- Checkboxes
- Radio buttons
- File inputs

### Keyboard Events

Happens when someone presses, holds, or releases a key.

```javascript
let input = document.getElementById('searchBox');

input.addEventListener('keydown', function() {
    console.log('A key was pressed!');
});
```

**Three Types:**
- `keydown` - Key is pressed down
- `keypress` - Key is pressed (deprecated, use keydown)
- `keyup` - Key is released

### Form Submit Events

Happens when someone submits a form.

```javascript
let form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the page from refreshing!
    console.log('Form submitted!');
});
```

**Important:** Always use `event.preventDefault()` with forms to stop the page from refreshing!

### Mouse Events

Happens when someone moves or uses the mouse.

```javascript
let box = document.getElementById('hoverBox');

box.addEventListener('mouseenter', function() {
    console.log('Mouse entered the box!');
});

box.addEventListener('mouseleave', function() {
    console.log('Mouse left the box!');
});
```

**Common Mouse Events:**
- `click` - Mouse is clicked
- `dblclick` - Mouse is double-clicked
- `mouseenter` - Mouse enters element
- `mouseleave` - Mouse leaves element
- `mousemove` - Mouse moves over element
- `mousedown` - Mouse button pressed
- `mouseup` - Mouse button released

## The Event Object 📦

When an event happens, JavaScript creates an **event object** with information about what happened. You can access it by adding a parameter to your function:

```javascript
button.addEventListener('click', function(event) {
    console.log('Event object:', event);
});
```

### Common Event Object Properties

```javascript
input.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);        // Which key was pressed
    console.log('Key code:', event.keyCode);       // Numeric code for the key
    console.log('Target:', event.target);          // Element that triggered event
    console.log('Type:', event.type);              // Type of event ('keydown')
});
```

### Useful Properties:

- `event.target` - The element that triggered the event
- `event.type` - The type of event ('click', 'input', etc.)
- `event.key` - The key that was pressed (for keyboard events)
- `event.keyCode` - Numeric code for the key (older, use event.key instead)
- `event.preventDefault()` - Method to stop default behavior

## Preventing Default Behavior 🛑

Some HTML elements have default behaviors:

- **Links** → Navigate to another page
- **Forms** → Refresh the page when submitted
- **Right-click** → Show context menu

Sometimes you want to **stop** these defaults and do your own thing:

```javascript
// Stop a link from navigating
let link = document.getElementById('myLink');
link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Link clicked, but not navigating!');
});

// Stop a form from refreshing the page
let form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Form submitted, but page not refreshing!');
    // Do your own form handling here
});
```

## Inline Functions vs Named Functions 📝

You can write event handlers two ways:

### Inline Function (Anonymous)

```javascript
button.addEventListener('click', function() {
    console.log('Button clicked!');
});
```

**Pros:**
- Quick and easy
- Good for simple, one-time-use code

**Cons:**
- Can't reuse the function
- Harder to remove the listener later

### Named Function

```javascript
function handleButtonClick() {
    console.log('Button clicked!');
}

button.addEventListener('click', handleButtonClick);
```

**Pros:**
- Can reuse the function
- Easier to remove listener: `button.removeEventListener('click', handleButtonClick)`
- Cleaner for complex functions

**Cons:**
- Slightly more code

## Common Patterns 🎨

### Pattern 1: Click Counter

```javascript
let count = 0;
let button = document.getElementById('counterButton');
let display = document.getElementById('countDisplay');

button.addEventListener('click', function() {
    count = count + 1;
    display.textContent = count;
});
```

### Pattern 2: Live Search/Filter

```javascript
let searchInput = document.getElementById('search');
let items = document.querySelectorAll('.item');

searchInput.addEventListener('input', function() {
    let searchTerm = searchInput.value.toLowerCase();
    
    items.forEach(function(item) {
        let text = item.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});
```

### Pattern 3: Enter Key Submit

```javascript
let input = document.getElementById('todoInput');

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        console.log('Enter pressed! Value:', input.value);
        // Add todo or submit form
    }
});
```

### Pattern 4: Form Validation

```javascript
let form = document.getElementById('signupForm');
let emailInput = document.getElementById('email');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop form from submitting
    
    let email = emailInput.value;
    
    if (email === '') {
        alert('Please enter an email!');
    } else if (!email.includes('@')) {
        alert('Please enter a valid email!');
    } else {
        console.log('Form is valid! Email:', email);
        // Submit form or do something else
    }
});
```

### Pattern 5: Toggle Visibility

```javascript
let toggleButton = document.getElementById('toggleButton');
let content = document.getElementById('content');

toggleButton.addEventListener('click', function() {
    if (content.style.display === 'none') {
        content.style.display = 'block';
        toggleButton.textContent = 'Hide';
    } else {
        content.style.display = 'none';
        toggleButton.textContent = 'Show';
    }
});
```

## Multiple Event Listeners 🎵

You can add multiple event listeners to the same element:

```javascript
let button = document.getElementById('multiButton');

button.addEventListener('click', function() {
    console.log('First listener!');
});

button.addEventListener('click', function() {
    console.log('Second listener!');
});

// Both will run when button is clicked!
```

You can also listen for different events:

```javascript
let input = document.getElementById('magicInput');

input.addEventListener('focus', function() {
    console.log('Input focused!');
});

input.addEventListener('blur', function() {
    console.log('Input lost focus!');
});

input.addEventListener('input', function() {
    console.log('User is typing!');
});
```

## Event Flow: Bubbling and Capturing 🎈

When an event happens on an element, it actually goes through THREE phases:

1. **Capturing Phase** - Event travels DOWN from window to target
2. **Target Phase** - Event reaches the actual element
3. **Bubbling Phase** - Event travels UP from target back to window

By default, event listeners run during the **bubbling phase**.

### Example:

```html
<div id="outer">
    <div id="inner">
        <button id="btn">Click Me</button>
    </div>
</div>
```

```javascript
document.getElementById('outer').addEventListener('click', function() {
    console.log('Outer div clicked!');
});

document.getElementById('inner').addEventListener('click', function() {
    console.log('Inner div clicked!');
});

document.getElementById('btn').addEventListener('click', function() {
    console.log('Button clicked!');
});

// When you click the button, you'll see:
// "Button clicked!"
// "Inner div clicked!"
// "Outer div clicked!"
```

The event **bubbles up** from the button to the parent divs!

### Stopping Event Propagation

```javascript
button.addEventListener('click', function(event) {
    event.stopPropagation(); // Stop event from bubbling up!
    console.log('Button clicked, but not bubbling!');
});
```

**When to use:**
- Usually you don't need to worry about bubbling
- Stop it when parent elements also have click handlers and you don't want them to run

## Removing Event Listeners 🗑️

You can remove event listeners using `removeEventListener()`:

```javascript
function handleClick() {
    console.log('Clicked!');
}

// Add listener
button.addEventListener('click', handleClick);

// Remove listener
button.removeEventListener('click', handleClick);
```

**Important:** You must use a **named function** to remove it. Anonymous functions can't be removed!

### One-Time Event

```javascript
button.addEventListener('click', function handleClick() {
    console.log('This will only run once!');
    button.removeEventListener('click', handleClick);
});
```

Or use the `once` option:

```javascript
button.addEventListener('click', function() {
    console.log('This will only run once!');
}, { once: true });
```

## Best Practices 🌟

### 1. Always Check for null

```javascript
let button = document.getElementById('myButton');

if (button) {
    button.addEventListener('click', function() {
        console.log('Clicked!');
    });
} else {
    console.log('Button not found!');
}
```

### 2. Use preventDefault() for Forms

```javascript
form.addEventListener('submit', function(event) {
    event.preventDefault(); // ALWAYS do this for forms!
    // Your code here
});
```

### 3. Use Named Functions for Complex Logic

```javascript
// ✅ Good - named function
function handleFormSubmit(event) {
    event.preventDefault();
    // Complex validation logic here
}
form.addEventListener('submit', handleFormSubmit);

// ❌ Avoid - too much code inline
form.addEventListener('submit', function(event) {
    // 50 lines of code here...
});
```

### 4. Clean Up Event Listeners

If you're done with an element, remove its listeners to save memory:

```javascript
button.removeEventListener('click', handleClick);
```

### 5. Don't Add Listeners in Loops Without Care

```javascript
// ❌ Bad - creates many functions
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        console.log('Button clicked!');
    });
}

// ✅ Better - one function for all
function handleButtonClick() {
    console.log('Button clicked!');
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleButtonClick);
}
```

## Common Mistakes to Avoid ⚠️

### Mistake 1: Calling the Function Instead of Passing It

```javascript
// ❌ Wrong - calls function immediately!
button.addEventListener('click', handleClick());

// ✅ Correct - passes function to be called later
button.addEventListener('click', handleClick);
```

### Mistake 2: Forgetting preventDefault()

```javascript
// ❌ Wrong - form will refresh page!
form.addEventListener('submit', function(event) {
    console.log('Submitted!');
});

// ✅ Correct
form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Submitted!');
});
```

### Mistake 3: Not Checking if Element Exists

```javascript
// ❌ Wrong - crashes if element doesn't exist!
let button = document.getElementById('myButton');
button.addEventListener('click', handleClick);

// ✅ Correct
let button = document.getElementById('myButton');
if (button) {
    button.addEventListener('click', handleClick);
}
```

### Mistake 4: Using the Wrong Event Type

```javascript
// ❌ Wrong - 'click' doesn't work well for typing
input.addEventListener('click', function() {
    console.log(input.value);
});

// ✅ Correct - use 'input' for typing
input.addEventListener('input', function() {
    console.log(input.value);
});
```

## Quick Reference Card 🎴

### Event Listener Syntax

```javascript
element.addEventListener('eventType', function(event) {
    // Your code here
});
```

### Common Events

| Event | When It Happens | Common Uses |
|-------|----------------|-------------|
| `click` | Element is clicked | Buttons, links, images |
| `input` | User types in input | Search, live validation |
| `change` | Input value changes (and loses focus) | Dropdowns, checkboxes |
| `submit` | Form is submitted | Form handling |
| `keydown` | Key is pressed | Keyboard shortcuts |
| `keyup` | Key is released | Keyboard shortcuts |
| `focus` | Element receives focus | Input highlighting |
| `blur` | Element loses focus | Validation |
| `mouseenter` | Mouse enters element | Hover effects |
| `mouseleave` | Mouse leaves element | Hover effects |

### Event Object Properties

```javascript
button.addEventListener('click', function(event) {
    event.target;              // Element that triggered event
    event.type;                // Type of event ('click')
    event.preventDefault();    // Stop default behavior
    event.stopPropagation();  // Stop event bubbling
});

input.addEventListener('keydown', function(event) {
    event.key;      // Key that was pressed ('a', 'Enter', etc.)
    event.keyCode;  // Numeric code (older, use event.key)
});
```

## Practice Exercises 💪

Now it's time to practice! Check the `practice` folder for exercises:

1. **Exercise 1: Interactive Button Gallery** - Click events and style changes
2. **Exercise 2: Live Character Counter** - Input events and text updates
3. **Exercise 3: Keyboard Piano** - Keyboard events and sound (visual representation)

Each exercise has detailed instructions and hints. Try them in order!

## Key Takeaways 🎯

1. **Events** are actions that happen in the browser (clicks, typing, etc.)
2. **addEventListener()** lets you respond to events with functions
3. Common events: `click`, `input`, `change`, `submit`, `keydown`
4. The **event object** contains information about what happened
5. Use **preventDefault()** to stop default behaviors (especially for forms!)
6. Check if elements exist before adding listeners
7. Use named functions for complex logic and when you need to remove listeners

## What's Next? 🚀

In the next lesson, we'll learn about **conditionals** (if/else statements), which will let us make decisions in our code based on events and user input!

Great job learning about events! They're the foundation of interactive webpages. Now you can make your pages respond to user actions! 🎉

---

**Need Help?** Check the `resources` folder for:
- Quick reference cheatsheet
- Parent guide with teaching tips
- Student workspace with starter templates

**Remember:** Events are what make websites interactive! Practice adding listeners to different elements and see what happens. The more you experiment, the better you'll understand! 🌟