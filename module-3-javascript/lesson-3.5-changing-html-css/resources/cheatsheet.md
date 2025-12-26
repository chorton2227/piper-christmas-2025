# Changing HTML & CSS Cheatsheet 🎭

## 📝 Changing Text

### textContent - Safe for user input
```javascript
element.textContent = 'New text';           // ✅ Safe - treats as plain text
let text = element.textContent;             // Get text content
```

### innerHTML - Use with caution
```javascript
element.innerHTML = '<p>HTML here</p>';     // ⚠️ Only with trusted content
let html = element.innerHTML;               // Get HTML content
```

**When to use:**
- **textContent**: 95% of the time, especially with user input
- **innerHTML**: Only when YOU write the HTML content

---

## 🎨 Changing Styles

### Direct Style Property
```javascript
// Basic syntax
element.style.property = 'value';

// Colors
element.style.color = 'red';
element.style.backgroundColor = '#3498db';
element.style.borderColor = 'rgb(255,0,0)';

// Sizes (always include units!)
element.style.width = '200px';
element.style.height = '100px';
element.style.fontSize = '18px';
element.style.padding = '20px';
element.style.margin = '10px';

// Borders
element.style.border = '2px solid black';
element.style.borderRadius = '10px';

// Display
element.style.display = 'none';              // Hide completely
element.style.display = 'block';             // Show as block
element.style.visibility = 'hidden';         // Hide but keep space
element.style.opacity = '0.5';               // 50% transparent

// Transform
element.style.transform = 'rotate(45deg)';
element.style.transform = 'scale(1.5)';

// Position
element.style.position = 'absolute';
element.style.top = '50px';
element.style.left = '100px';
```

### CSS Property Name Conversion
```javascript
// CSS with dashes → JavaScript camelCase
background-color  → backgroundColor
font-size         → fontSize
border-radius     → borderRadius
text-decoration   → textDecoration
margin-top        → marginTop
```

---

## 🏷️ Using classList (Better Way!)

### add() - Add Classes
```javascript
element.classList.add('active');                    // Add one
element.classList.add('active', 'highlighted');     // Add multiple
```

### remove() - Remove Classes
```javascript
element.classList.remove('active');                 // Remove one
element.classList.remove('active', 'highlighted');  // Remove multiple
```

### toggle() - Switch On/Off
```javascript
element.classList.toggle('active');     // If has class, remove. If not, add.

// Returns true if added, false if removed
let wasAdded = element.classList.toggle('active');
```

### contains() - Check If Has Class
```javascript
if (element.classList.contains('active')) {
    console.log('Element is active!');
}
```

### replace() - Swap Classes
```javascript
element.classList.replace('old-class', 'new-class');
```

---

## 🎯 Common Patterns

### Hide/Show Element
```javascript
// Method 1: display property
element.style.display = 'none';      // Hide
element.style.display = 'block';     // Show

// Method 2: classList (better!)
element.classList.add('hidden');     // Hide
element.classList.remove('hidden');  // Show
```

### Toggle Visibility
```javascript
// Toggle with classList
element.classList.toggle('visible');

// Toggle with style
if (element.style.display === 'none') {
    element.style.display = 'block';
} else {
    element.style.display = 'none';
}
```

### Change Theme
```javascript
function switchTheme(theme) {
    document.body.classList.remove('light', 'dark', 'blue');
    document.body.classList.add(theme);
}
```

### Update Progress Bar
```javascript
function updateProgress(percentage) {
    let bar = document.getElementById('progressBar');
    bar.style.width = percentage + '%';
    bar.textContent = percentage + '%';
    
    // Change color based on progress
    if (percentage < 30) {
        bar.style.backgroundColor = 'red';
    } else if (percentage < 70) {
        bar.style.backgroundColor = 'orange';
    } else {
        bar.style.backgroundColor = 'green';
    }
}
```

### Highlight Element
```javascript
function highlightElement(element) {
    element.classList.add('highlighted');
    
    // Remove after 2 seconds
    setTimeout(function() {
        element.classList.remove('highlighted');
    }, 2000);
}
```

---

## ⚠️ Important Rules

### 1. textContent vs innerHTML
```javascript
// ✅ SAFE - Use with user input
userElement.textContent = userInput;

// ❌ DANGEROUS - Never with user input
userElement.innerHTML = userInput;  // Can execute malicious code!
```

### 2. Always Include Units
```javascript
// ✅ Correct
element.style.width = '100px';
element.style.fontSize = '16px';

// ❌ Wrong
element.style.width = 100;        // Won't work!
element.style.fontSize = 16;      // Won't work!
```

### 3. camelCase for Properties
```javascript
// ✅ Correct
element.style.backgroundColor = 'blue';
element.style.fontSize = '20px';

// ❌ Wrong
element.style['background-color'] = 'blue';  // Awkward
```

### 4. Check Element Exists
```javascript
// ✅ Safe
let element = document.getElementById('myElement');
if (element) {
    element.style.color = 'red';
}

// ❌ Risky
document.getElementById('myElement').style.color = 'red';  // Crashes if null!
```

### 5. classList is Better Than style
```javascript
// ❌ Harder to maintain
element.style.color = 'red';
element.style.backgroundColor = 'yellow';
element.style.padding = '10px';

// ✅ Better - Define in CSS, toggle with JS
element.classList.add('highlighted');
```

---

## 🚀 Quick Reference

| Task | Method | Example |
|------|--------|---------|
| Change text | `textContent` | `el.textContent = 'Hi'` |
| Change color | `style.color` | `el.style.color = 'red'` |
| Change size | `style.fontSize` | `el.style.fontSize = '20px'` |
| Add class | `classList.add()` | `el.classList.add('active')` |
| Remove class | `classList.remove()` | `el.classList.remove('active')` |
| Toggle class | `classList.toggle()` | `el.classList.toggle('active')` |
| Check class | `classList.contains()` | `el.classList.contains('active')` |
| Hide element | `style.display` | `el.style.display = 'none'` |
| Show element | `style.display` | `el.style.display = 'block'` |

---

## 💡 Pro Tips

1. **Use CSS classes** instead of direct styles when possible
2. **Use textContent** by default - only use innerHTML when necessary
3. **Check for null** before changing elements
4. **Use transitions** in CSS for smooth changes
5. **Combine methods** - classList for structure, style for dynamic values
6. **Console.log** changes to debug

---

## 🎯 Remember

- `textContent` = SAFE, plain text only
- `innerHTML` = POWERFUL but DANGEROUS with user input
- `style` = Good for dynamic values (positions, sizes from calculations)
- `classList` = BEST for predefined styles in CSS

Good luck! 🚀