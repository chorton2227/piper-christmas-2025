# Exercise 1: Interactive Button Gallery 🎨

## Objective
Create an interactive button gallery where clicking buttons triggers various visual effects and updates. Practice using click events and manipulating the DOM.

## Requirements

### 1. HTML Structure
Create an HTML page with:
- A title "Interactive Button Gallery"
- A display area to show messages/effects
- At least 6 different interactive buttons
- A counter display showing total clicks
- A "Clear All" button to reset everything

### 2. Button Types (Create at least these 6)

#### Button 1: Color Changer
- When clicked, changes the background color of a display box
- Cycles through at least 5 different colors
- Shows which color is currently selected

#### Button 2: Text Updater
- When clicked, changes text in a display area
- Can cycle through different messages
- Example messages: "Hello!", "Welcome!", "Great job!", etc.

#### Button 3: Size Controller
- When clicked, makes an element bigger
- Each click increases font size or element size
- Has a maximum size limit

#### Button 4: Image/Emoji Rotator
- When clicked, changes an emoji or image
- Rotates through at least 5 different emojis
- Example: 😀 → 😎 → 🎉 → 🌟 → ❤️

#### Button 5: Counter
- Shows how many times it's been clicked
- Displays the count on the button itself
- Example: "Clicked 0 times" → "Clicked 1 times" → etc.

#### Button 6: Multi-Effect Button
- When clicked, triggers multiple effects at once
- Example: Changes color AND text AND plays an animation
- Should demonstrate multiple actions from one click

### 3. Features to Implement

#### Global Click Counter
- Track total clicks across ALL buttons
- Display at the top or bottom of page
- Update on every button click

#### Clear/Reset Button
- Resets all buttons to their original state
- Resets the global click counter
- Restores default colors, text, and sizes

#### Visual Feedback
- Buttons should have hover effects
- Buttons should have active (pressed) effects
- Display area should have smooth transitions

## Technical Requirements

### JavaScript Functions Needed
```javascript
// Example structure - create your own!

function changeColor() {
    // Change the color of an element
}

function updateText() {
    // Change text content
}

function increaseSize() {
    // Make element bigger
}

function rotateEmoji() {
    // Change to next emoji
}

function incrementCounter() {
    // Add 1 to counter
}

function triggerMultipleEffects() {
    // Do several things at once
}

function resetEverything() {
    // Reset all states to original
}

function updateGlobalCounter() {
    // Update total click count
}
```

### Event Listeners
- Use `addEventListener('click', functionName)` for all buttons
- Each button should have its own event listener
- The reset button should clear everything

### DOM Manipulation
- Use `textContent` to update text
- Use `style` property to change colors and sizes
- Use `classList` if you want to add/remove CSS classes
- Store state in variables (color index, current size, etc.)

## Styling Requirements

### CSS You Should Include
- Attractive button styling with:
  - Border radius for rounded corners
  - Padding for better click area
  - Hover effect (change color or scale)
  - Active effect (pressed appearance)
- Display area with:
  - Clear border or background
  - Padding for spacing
  - Smooth transitions for changes
- Color scheme that's visually appealing

### Bonus Styling
- Add animations (fadeIn, slideIn, etc.)
- Use gradients for backgrounds
- Add shadows to buttons
- Make it responsive (works on different screen sizes)

## Example Layout

```
┌─────────────────────────────────────┐
│   Interactive Button Gallery       │
│                                      │
│   Total Clicks: 0                   │
├─────────────────────────────────────┤
│                                      │
│     [Display Area Here]              │
│     (Shows current text/effects)     │
│                                      │
├─────────────────────────────────────┤
│  [Change Color]  [Update Text]      │
│  [Bigger Size]   [Rotate Emoji]     │
│  [Count: 0]      [Multi-Effect]     │
│                                      │
│         [🔄 Reset Everything]        │
└─────────────────────────────────────┘
```

## Testing Checklist

Before you finish, test:
- [ ] All 6 buttons respond to clicks
- [ ] Each button does what it's supposed to do
- [ ] Global counter increases with every button click
- [ ] Color changer cycles through colors properly
- [ ] Size controller has a maximum limit
- [ ] Emoji rotator cycles through all emojis
- [ ] Personal counter button shows accurate count
- [ ] Multi-effect button does multiple things
- [ ] Reset button clears everything
- [ ] No errors appear in the console
- [ ] Buttons have visual hover effects

## Bonus Challenges 🌟

If you finish early, try these:

1. **Keyboard Shortcuts**: Make buttons respond to number keys (1-6)
2. **Sound Effects**: Log different messages for different buttons
3. **Animation**: Add CSS animations when buttons are clicked
4. **History**: Show last 5 button clicks in a list
5. **Achievements**: Unlock messages at milestones (10 clicks, 50 clicks, etc.)

## Hints 💡

### Cycling Through Arrays
```javascript
let colors = ['red', 'blue', 'green', 'yellow', 'purple'];
let currentIndex = 0;

function getNextColor() {
    let color = colors[currentIndex];
    currentIndex = currentIndex + 1;
    if (currentIndex >= colors.length) {
        currentIndex = 0; // Loop back to start
    }
    return color;
}
```

### Checking Maximum Values
```javascript
let size = 16;
let maxSize = 72;

function increaseSize() {
    if (size < maxSize) {
        size = size + 4;
        element.style.fontSize = size + 'px';
    }
}
```

### Multiple Effects
```javascript
function doMultipleThings() {
    changeColor();      // Call first function
    updateText();       // Call second function
    increaseSize();     // Call third function
}
```

## What You'll Learn

- How to use `addEventListener()` for click events
- Managing state with variables (counters, indices, etc.)
- Updating the DOM with `textContent` and `style`
- Calling functions from event listeners
- Resetting application state
- Creating interactive user interfaces

Good luck! Have fun making your button gallery interactive! 🎉
