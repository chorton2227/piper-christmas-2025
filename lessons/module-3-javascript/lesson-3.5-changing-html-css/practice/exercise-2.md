# Exercise 2: Character Customizer

## 🎯 Objective
Create an interactive character customizer where users can:
- Change character colors (skin, hair, clothes)
- Change character size
- Change character accessories
- Preview changes in real-time

This exercise practices:
- Using `style` property for colors and sizes
- Using `classList` for different character states
- Combining multiple DOM manipulation techniques

---

## 📋 Requirements

### Part 1: HTML Structure
Create:
- A character display area (div with character parts)
- Color picker controls for:
  - Skin tone
  - Hair color
  - Shirt color
  - Pants color
- Size controls (small, medium, large buttons)
- Accessory toggles (hat, glasses, cape, etc.)
- A "Random" button to randomize everything
- A "Reset" button to restore defaults

### Part 2: JavaScript Tasks

#### Task 1: Color Changing
Create functions to change colors:

```javascript
function changeSkinColor(color) {
    // Change the skin element's background color
}

function changeHairColor(color) {
    // Change the hair element's background color
}

function changeShirtColor(color) {
    // Change the shirt element's background color
}

function changePantsColor(color) {
    // Change the pants element's background color
}
```

**What you'll practice:**
- `style.backgroundColor` property
- `style.color` property

#### Task 2: Size Control
Create a function to change character size:

```javascript
function changeSize(size) {
    let character = document.getElementById('character');
    
    // Remove all size classes
    character.classList.remove('small', 'medium', 'large');
    
    // Add new size class
    character.classList.add(size);
}
```

**What you'll practice:**
- `classList.remove()` to clear old classes
- `classList.add()` to add new classes

#### Task 3: Accessory Toggles
Create a function to toggle accessories:

```javascript
function toggleAccessory(accessoryName) {
    let accessory = document.getElementById(accessoryName);
    
    // Toggle visibility
    if (accessory.style.display === 'none') {
        accessory.style.display = 'block';
    } else {
        accessory.style.display = 'none';
    }
    
    // Or use classList:
    // accessory.classList.toggle('hidden');
}
```

**What you'll practice:**
- `style.display` property
- `classList.toggle()` method
- Conditional statements

#### Task 4: Random Character
Create a function that randomizes everything:

```javascript
function randomizeCharacter() {
    // Random skin color
    let skinColors = ['#ffdbac', '#f1c27d', '#e0ac69', '#c68642', '#8d5524'];
    let randomSkin = skinColors[Math.floor(Math.random() * skinColors.length)];
    changeSkinColor(randomSkin);
    
    // Random hair color
    // YOUR CODE HERE
    
    // Random clothes colors
    // YOUR CODE HERE
    
    // Random size
    // YOUR CODE HERE
    
    // Random accessories (50% chance each)
    // YOUR CODE HERE
}
```

**What you'll practice:**
- `Math.random()` for random selection
- Arrays to store color options
- Combining all previous functions

#### Task 5: Reset to Defaults
Create a function to reset everything:

```javascript
function resetCharacter() {
    // Reset all colors to default
    changeSkinColor('#ffdbac');
    changeHairColor('#8B4513');
    changeShirtColor('#3498db');
    changePantsColor('#2c3e50');
    
    // Reset size to medium
    changeSize('medium');
    
    // Hide all accessories
    // YOUR CODE HERE
}
```

---

## 🎨 CSS Requirements

### Character Structure:
```css
.character {
    position: relative;
    width: 200px;
    height: 300px;
    margin: 0 auto;
    transition: all 0.3s;
}

.character.small {
    transform: scale(0.7);
}

.character.medium {
    transform: scale(1);
}

.character.large {
    transform: scale(1.3);
}

.head {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #ffdbac;
    margin: 0 auto;
    position: relative;
}

.hair {
    width: 100px;
    height: 40px;
    background: #8B4513;
    border-radius: 50px 50px 0 0;
    position: absolute;
    top: 0;
}

/* Add more parts: eyes, nose, body, arms, legs, etc. */
```

### Accessories:
```css
.hat {
    width: 80px;
    height: 40px;
    background: #e74c3c;
    position: absolute;
    top: -30px;
    left: 10px;
    border-radius: 20px 20px 0 0;
}

.glasses {
    width: 60px;
    height: 20px;
    border: 3px solid #333;
    position: absolute;
    top: 40px;
    left: 20px;
    border-radius: 10px;
}

/* Add more accessories */
```

---

## 💡 Hints

### Setting Up Color Pickers:
```html
<div class="color-picker">
    <label>Skin Tone:</label>
    <button onclick="changeSkinColor('#ffdbac')" style="background: #ffdbac;"></button>
    <button onclick="changeSkinColor('#f1c27d')" style="background: #f1c27d;"></button>
    <button onclick="changeSkinColor('#e0ac69')" style="background: #e0ac69;"></button>
    <!-- More color options -->
</div>
```

### Changing Multiple Styles at Once:
```javascript
function applyCharacterStyle(element, styles) {
    element.style.backgroundColor = styles.bg;
    element.style.borderColor = styles.border;
    element.style.color = styles.text;
}
```

### Making Accessories Toggle:
```javascript
function toggleAccessory(id) {
    let accessory = document.getElementById(id);
    if (accessory) {
        accessory.classList.toggle('hidden');
        
        // Update button to show state
        let button = document.querySelector('[data-accessory="' + id + '"]');
        if (button) {
            if (accessory.classList.contains('hidden')) {
                button.textContent = 'Show ' + id;
            } else {
                button.textContent = 'Hide ' + id;
            }
        }
    }
}
```

---

## 🏆 Bonus Challenges

1. **Save/Load Characters**: Store character settings and load them later
2. **Animation**: Add animations when changing size or accessories
3. **Expression Changer**: Change facial expressions (happy, sad, angry)
4. **Pose Options**: Different standing/sitting/action poses
5. **Background Selector**: Change background scene
6. **Export Image**: Generate a downloadable image of the character
7. **Character Names**: Let users name their character
8. **Multiple Characters**: Create and switch between multiple characters

---

## ✅ Testing Checklist

- [ ] All color pickers work for each body part
- [ ] Size buttons change character size smoothly
- [ ] Accessories can be toggled on/off
- [ ] Random button creates different combinations
- [ ] Reset button returns to default state
- [ ] All changes are smooth (transitions work)
- [ ] Character looks good at all sizes
- [ ] No console errors

---

## 📝 Expected Output

Your character customizer should:
1. Display a simple character made of HTML/CSS shapes
2. Update colors instantly when color buttons are clicked
3. Scale character size when size buttons are clicked
4. Show/hide accessories when toggled
5. Create random unique characters with the Random button
6. Return to default with the Reset button

---

## 🎯 Key Learning Points

This exercise teaches you:
- ✅ How to use `style` property for dynamic colors
- ✅ How to use `classList` for state management
- ✅ How to coordinate multiple DOM manipulations
- ✅ How to create complex interactive interfaces
- ✅ How to make smooth, professional-feeling UIs

Have fun creating unique characters! 🎨👤
