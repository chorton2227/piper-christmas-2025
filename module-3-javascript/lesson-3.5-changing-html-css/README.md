# Lesson 3.5: Changing HTML and CSS with JavaScript

## 🎭 The Puppet Master

Imagine you're a puppet master controlling a theater show. The stage (HTML) is already set up, the puppets (elements) are in place, and the scenery (CSS) is painted. But nothing is moving yet!

As the puppet master (JavaScript), you can:
- **Make puppets talk** - Change what text appears
- **Change their costumes** - Modify their colors, sizes, and styles
- **Move them around** - Change their positions and appearance
- **Swap their outfits** - Add or remove CSS classes

In the last lesson, you learned how to **find** your puppets using `getElementById`, `querySelector`, and `querySelectorAll`. Now you'll learn how to **control** them!

---

## 🎯 Learning Objectives

By the end of this lesson, you will be able to:

1. **Change text content** in elements using `textContent` and `innerHTML`
2. **Modify CSS styles** directly using the `style` property
3. **Add and remove CSS classes** using `classList`
4. **Change element attributes** like `src`, `href`, and custom data attributes
5. **Understand security** - Why `innerHTML` can be dangerous with user input
6. **Build interactive pages** that respond to changes

---

## 📚 Part 1: Changing Text Content

### Three Ways to Change Text

JavaScript gives you three ways to change the text inside an element:

#### 1. `textContent` - The Safe Choice ✅

```javascript
let heading = document.getElementById('title');
heading.textContent = 'New Title Here';
```

**What it does:**
- Changes ONLY the text inside an element
- Treats everything as plain text (safe!)
- Removes any HTML tags you try to add
- Best for displaying user input or dynamic text

**Example:**
```javascript
let message = document.getElementById('message');
message.textContent = 'Score: 100';  // ✓ Shows: Score: 100

// Even if you try to add HTML, it shows as text:
message.textContent = '<strong>Bold?</strong>';  // Shows: <strong>Bold?</strong>
```

#### 2. `innerHTML` - The Powerful but Dangerous Choice ⚠️

```javascript
let container = document.getElementById('container');
container.innerHTML = '<p>New paragraph</p>';
```

**What it does:**
- Changes BOTH text AND HTML inside an element
- Can create new HTML elements
- Can run scripts if not careful (DANGEROUS!)
- Use ONLY with trusted content (content you wrote yourself)

**Example:**
```javascript
let box = document.getElementById('box');
box.innerHTML = '<h2>Hello</h2><p>World</p>';  // Creates new elements!
```

**⚠️ Security Warning:**
```javascript
// NEVER do this with user input!
let userInput = prompt('Enter your name:');
element.innerHTML = userInput;  // ❌ DANGEROUS! User could type malicious code!

// Instead, use textContent for user input:
element.textContent = userInput;  // ✓ SAFE! Treats everything as text
```

#### 3. `innerText` - The Visual Choice 👁️

```javascript
let element = document.getElementById('myElement');
element.innerText = 'Visible text';
```

**What it does:**
- Similar to `textContent`, but respects CSS visibility
- Only shows text that's actually visible on screen
- Slower than `textContent`
- Rarely needed for beginners

**When to Use Which:**
- ✅ **Use `textContent`** for 95% of cases (especially user input)
- ⚠️ **Use `innerHTML`** only when you need to create HTML structure (and you wrote the content yourself)
- 🤷 **Use `innerText`** rarely (only if you care about CSS visibility)

---

## 🎨 Part 2: Changing CSS Styles

### The `style` Property

Every element has a `style` property that lets you change its CSS directly from JavaScript!

#### Basic Syntax

```javascript
element.style.propertyName = 'value';
```

**Important Rules:**
1. **CSS properties with dashes become camelCase:**
   - CSS: `background-color` → JavaScript: `backgroundColor`
   - CSS: `font-size` → JavaScript: `fontSize`
   - CSS: `border-radius` → JavaScript: `borderRadius`

2. **Values must be strings (in quotes):**
   ```javascript
   element.style.color = 'red';           // ✓ Correct
   element.style.fontSize = '20px';       // ✓ Correct
   element.style.width = '100px';         // ✓ Correct
   
   element.style.color = red;             // ❌ Wrong! Missing quotes
   element.style.fontSize = 20;           // ❌ Wrong! Missing 'px'
   ```

3. **Units are required for sizes:**
   ```javascript
   element.style.width = '50px';      // ✓ With pixels
   element.style.width = '50%';       // ✓ With percentage
   element.style.width = '50';        // ❌ Missing unit!
   ```

#### Common Style Properties

```javascript
let box = document.getElementById('box');

// Colors
box.style.color = 'blue';                    // Text color
box.style.backgroundColor = 'yellow';        // Background color
box.style.borderColor = 'red';               // Border color

// Sizes
box.style.width = '200px';                   // Width
box.style.height = '100px';                  // Height
box.style.fontSize = '18px';                 // Text size
box.style.padding = '20px';                  // Inner spacing
box.style.margin = '10px';                   // Outer spacing

// Borders
box.style.border = '2px solid black';        // Border shorthand
box.style.borderRadius = '10px';             // Rounded corners

// Positioning
box.style.position = 'absolute';             // Position type
box.style.top = '50px';                      // Distance from top
box.style.left = '100px';                    // Distance from left

// Display
box.style.display = 'none';                  // Hide element
box.style.display = 'block';                 // Show as block
box.style.visibility = 'hidden';             // Hide but keep space

// Text
box.style.fontWeight = 'bold';               // Bold text
box.style.textAlign = 'center';              // Center text
box.style.textDecoration = 'underline';      // Underline text

// Transform
box.style.transform = 'rotate(45deg)';       // Rotate element
box.style.opacity = '0.5';                   // 50% transparent
```

#### Changing Multiple Styles

```javascript
let button = document.getElementById('myButton');

// Method 1: One at a time
button.style.backgroundColor = 'blue';
button.style.color = 'white';
button.style.padding = '10px 20px';
button.style.borderRadius = '5px';

// Method 2: Using cssText (overwrites all styles!)
button.style.cssText = 'background-color: blue; color: white; padding: 10px 20px;';
```

#### Reading Current Styles

```javascript
let box = document.getElementById('box');

// Read a style you set with JavaScript
console.log(box.style.color);  // Shows color if you set it via style property

// To read styles from CSS, use getComputedStyle:
let styles = window.getComputedStyle(box);
console.log(styles.color);           // Shows actual color from CSS
console.log(styles.fontSize);        // Shows actual font size
```

---

## 🎨 Part 3: Using CSS Classes (The Better Way!)

### Why Classes Are Better Than Direct Styles

Instead of changing individual style properties, it's usually better to:
1. Define CSS classes in your stylesheet
2. Add/remove those classes with JavaScript

**Why?**
- ✅ Keeps styling in CSS where it belongs
- ✅ Easier to maintain and update
- ✅ Can change multiple styles at once
- ✅ More organized and professional

### The `classList` Property

Every element has a `classList` property with helpful methods:

#### `classList.add()` - Add a Class

```javascript
let box = document.getElementById('box');
box.classList.add('highlighted');  // Adds the 'highlighted' class
```

```css
/* In your CSS */
.highlighted {
    background-color: yellow;
    border: 2px solid orange;
    font-weight: bold;
}
```

**Adding Multiple Classes:**
```javascript
box.classList.add('highlighted', 'large', 'animated');
```

#### `classList.remove()` - Remove a Class

```javascript
box.classList.remove('highlighted');  // Removes the 'highlighted' class
```

**Removing Multiple Classes:**
```javascript
box.classList.remove('highlighted', 'large');
```

#### `classList.toggle()` - Switch a Class On/Off

This is super useful! If the class exists, it removes it. If it doesn't exist, it adds it.

```javascript
let button = document.getElementById('menuBtn');
let menu = document.getElementById('menu');

// Click to show/hide menu
button.addEventListener('click', function() {
    menu.classList.toggle('visible');  // Switches between visible and hidden
});
```

```css
.menu {
    display: none;  /* Hidden by default */
}

.menu.visible {
    display: block;  /* Shown when 'visible' class is added */
}
```

#### `classList.contains()` - Check If Class Exists

```javascript
if (box.classList.contains('highlighted')) {
    console.log('Box is highlighted!');
} else {
    console.log('Box is not highlighted');
}
```

#### `classList.replace()` - Swap One Class for Another

```javascript
// Replace 'old-theme' with 'new-theme'
body.classList.replace('old-theme', 'new-theme');
```

### Real-World Example: Theme Switcher

```javascript
let themeBtn = document.getElementById('themeBtn');
let body = document.body;

themeBtn.addEventListener('click', function() {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeBtn.textContent = '🌙 Dark Mode';
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeBtn.textContent = '☀️ Light Mode';
    }
});
```

---

## 🏷️ Part 4: Changing Attributes

### What Are Attributes?

Attributes are properties defined in HTML tags:
- `<img src="image.jpg">` - `src` is an attribute
- `<a href="page.html">` - `href` is an attribute
- `<input type="text">` - `type` is an attribute

### Getting and Setting Attributes

#### `setAttribute()` - Set an Attribute

```javascript
let img = document.getElementById('myImage');
img.setAttribute('src', 'new-image.jpg');  // Change image source

let link = document.getElementById('myLink');
link.setAttribute('href', 'https://google.com');  // Change link destination

let input = document.getElementById('myInput');
input.setAttribute('placeholder', 'Enter your name');  // Change placeholder
```

#### `getAttribute()` - Get an Attribute

```javascript
let img = document.getElementById('myImage');
let currentSrc = img.getAttribute('src');
console.log('Current image:', currentSrc);
```

#### `removeAttribute()` - Remove an Attribute

```javascript
let button = document.getElementById('submitBtn');
button.removeAttribute('disabled');  // Enable a disabled button
```

### Direct Property Access (Shortcut)

For common attributes, you can access them directly as properties:

```javascript
let img = document.getElementById('myImage');

// Using setAttribute
img.setAttribute('src', 'photo.jpg');

// Direct property (easier!)
img.src = 'photo.jpg';

// Other examples:
link.href = 'page.html';
input.value = 'Default text';
input.disabled = true;
button.disabled = false;
```

### Custom Data Attributes

You can create custom attributes starting with `data-`:

**HTML:**
```html
<div id="player" data-health="100" data-level="5" data-name="Hero">
    Player Stats
</div>
```

**JavaScript:**
```javascript
let player = document.getElementById('player');

// Access using dataset
console.log(player.dataset.health);  // "100"
console.log(player.dataset.level);   // "5"
console.log(player.dataset.name);    // "Hero"

// Change values
player.dataset.health = '75';
player.dataset.level = '6';
```

---

## 🎮 Practical Example: Health Bar

Let's combine everything to create a working health bar!

**HTML:**
```html
<div class="health-container">
    <div id="healthBar" class="health-bar"></div>
</div>
<p id="healthText">Health: 100%</p>
<button id="damageBtn">Take Damage</button>
<button id="healBtn">Heal</button>
```

**CSS:**
```css
.health-container {
    width: 300px;
    height: 30px;
    background-color: #ddd;
    border: 2px solid #333;
    border-radius: 5px;
}

.health-bar {
    height: 100%;
    width: 100%;
    background-color: #4CAF50;
    transition: width 0.3s;
}

.health-bar.low {
    background-color: #ff9800;
}

.health-bar.critical {
    background-color: #f44336;
}
```

**JavaScript:**
```javascript
let healthBar = document.getElementById('healthBar');
let healthText = document.getElementById('healthText');
let damageBtn = document.getElementById('damageBtn');
let healBtn = document.getElementById('healBtn');

let currentHealth = 100;

damageBtn.addEventListener('click', function() {
    currentHealth = currentHealth - 20;
    if (currentHealth < 0) currentHealth = 0;
    updateHealth();
});

healBtn.addEventListener('click', function() {
    currentHealth = currentHealth + 20;
    if (currentHealth > 100) currentHealth = 100;
    updateHealth();
});

function updateHealth() {
    // Change the width
    healthBar.style.width = currentHealth + '%';
    
    // Update text
    healthText.textContent = 'Health: ' + currentHealth + '%';
    
    // Change color class based on health
    healthBar.classList.remove('low', 'critical');
    
    if (currentHealth <= 25) {
        healthBar.classList.add('critical');
    } else if (currentHealth <= 50) {
        healthBar.classList.add('low');
    }
}
```

---

## 🎯 When to Use What?

### For Text Changes:
- **Use `textContent`** when displaying any text, especially user input (safe!)
- **Use `innerHTML`** only when you need to create HTML structure with content YOU wrote

### For Style Changes:
- **Use `classList`** when you have predefined styles in CSS (best practice!)
- **Use `style` property** for dynamic values (like positions, sizes based on calculations)

### For Attributes:
- **Use direct properties** (`img.src`, `link.href`) when available (easier!)
- **Use `setAttribute/getAttribute`** for custom attributes or when needed

---

## 🚀 Quick Reference

```javascript
// CHANGING TEXT
element.textContent = 'New text';           // Safe, plain text only
element.innerHTML = '<p>HTML</p>';          // Allows HTML (use carefully!)

// CHANGING STYLES
element.style.color = 'red';                // Direct style change
element.style.backgroundColor = 'blue';     // camelCase for dashed properties
element.style.fontSize = '20px';            // Include units!

// USING CLASSES (BETTER!)
element.classList.add('active');            // Add class
element.classList.remove('active');         // Remove class
element.classList.toggle('active');         // Switch on/off
element.classList.contains('active');       // Check if has class

// CHANGING ATTRIBUTES
element.setAttribute('src', 'image.jpg');   // Set attribute
let value = element.getAttribute('src');    // Get attribute
element.removeAttribute('disabled');        // Remove attribute

// SHORTCUTS
img.src = 'photo.jpg';                      // Direct property
link.href = 'page.html';                    // Direct property
input.value = 'text';                       // Direct property
```

---

## 💡 Key Concepts to Remember

1. **`textContent` is safer than `innerHTML`** - Always use `textContent` for user input
2. **CSS classes are better than direct styles** - Keep your styling organized
3. **camelCase for CSS properties** - `background-color` becomes `backgroundColor`
4. **Include units for sizes** - Use `'100px'` not `100`
5. **classList is powerful** - Use `add`, `remove`, `toggle`, and `contains`
6. **Check elements exist** - Always verify elements before changing them

---

## 🎯 What's Next?

Now that you know how to:
- ✅ Find elements (Lesson 3.4)
- ✅ Change elements (This lesson!)

In the **next lesson** (Events and Event Listeners), you'll learn how to make your pages **respond** to user actions like:
- Clicks
- Keyboard presses
- Mouse movements
- Form submissions

This is where your pages become truly **interactive**! 🎮

---

## 🏆 Practice Exercises

Ready to practice? Head to the `practice/` folder to try:

1. **Exercise 1: Text Changer** - Practice changing text content dynamically
2. **Exercise 2: Style Master** - Change colors, sizes, and positions
3. **Exercise 3: Theme Switcher** - Build a working light/dark theme toggle

Good luck, and have fun making your pages come alive! 🎨✨