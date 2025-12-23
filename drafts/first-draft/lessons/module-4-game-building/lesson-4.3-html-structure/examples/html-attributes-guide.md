# HTML Attributes Reference 🏷️

**A guide to common HTML attributes used in the poker game**

---

## What are Attributes?

**Attributes** provide additional information about HTML elements. They appear inside the opening tag:

```html
<element attribute="value">Content</element>
       ↑         ↑
   Attribute   Value
```

---

## 📋 Essential Attributes

### 1. `id` - Unique Identifier

**Purpose:** Give an element a unique name for JavaScript targeting

**Syntax:**
```html
<div id="start-screen">
<button id="deal-btn">
<span id="pot-amount">0</span>
```

**Rules:**
- Each ID must be unique on the page (no duplicates!)
- Use kebab-case: `my-element-id`
- Should be descriptive: `player-chip-amount` not `span1`

**Used by JavaScript:**
```javascript
document.getElementById('start-btn')
```

**Example in Poker Game:**
```html
<!-- Each button needs unique ID -->
<button id="fold-btn">Fold</button>
<button id="call-btn">Call</button>
<button id="raise-10-btn">Raise +10</button>
```

---

### 2. `class` - Style Category

**Purpose:** Group elements for CSS styling or JavaScript selection

**Syntax:**
```html
<button class="btn btn-primary">
<div class="screen hidden">
```

**Rules:**
- Can be reused on multiple elements
- Can have multiple classes (space-separated)
- Use kebab-case: `my-class-name`

**Used by CSS:**
```css
.btn { /* Styles all buttons */ }
.btn-primary { /* Styles primary buttons */ }
```

**Example in Poker Game:**
```html
<!-- Multiple buttons share .btn class -->
<button class="btn btn-primary">Start</button>
<button class="btn btn-secondary">Rules</button>
<button class="btn btn-fold">Fold</button>
```

---

### 3. `aria-label` - Accessibility Label

**Purpose:** Provide text description for screen readers

**Syntax:**
```html
<button aria-label="Close instructions">×</button>
<button aria-label="Raise bet by 10 chips">+10</button>
```

**Why it matters:**
- Helps blind/visually impaired users
- Important for good web accessibility
- Doesn't change visual appearance

**Example in Poker Game:**
```html
<!-- × symbol isn't descriptive, aria-label helps -->
<button id="close-instructions" class="btn-close" aria-label="Close">
    ×
</button>
```

---

### 4. `data-*` - Custom Data Attributes

**Purpose:** Store custom data on elements

**Syntax:**
```html
<div data-suit="hearts" data-rank="A">
<button data-raise-amount="10">
```

**Why use them:**
- Store extra info without affecting display
- JavaScript can easily read these values
- Keep data organized with the element

**Example in Poker Game:**
```html
<!-- Card element with data about the card -->
<div class="card" data-suit="hearts" data-rank="K">
    K♥
</div>
```

**Access in JavaScript:**
```javascript
const card = document.querySelector('.card');
console.log(card.dataset.suit);  // "hearts"
console.log(card.dataset.rank);  // "K"
```

---

## 🎨 Visual Attributes

### 5. `style` - Inline Styles (Avoid When Possible)

**Purpose:** Add CSS directly to an element

**Syntax:**
```html
<div style="color: red; font-size: 20px;">
```

**⚠️ Warning:** Usually better to use CSS classes instead!

**When to use:**
- Dynamic styles from JavaScript
- Quick testing
- One-off special cases

**Example:**
```html
<!-- JavaScript might set this dynamically -->
<div id="pot-amount" style="color: gold;">500</div>
```

---

## 🔗 Link and Reference Attributes

### 6. `href` - Hyperlink Reference

**Purpose:** Specify the URL for links

**Syntax:**
```html
<a href="https://example.com">Link</a>
<a href="#start-screen">Jump to Start</a>
```

**Example:**
```html
<!-- Link to external resource -->
<a href="https://en.wikipedia.org/wiki/Poker">Learn More</a>

<!-- Link to section on same page -->
<a href="#instructions">View Rules</a>
```

---

### 7. `src` - Source File

**Purpose:** Specify the file for images, scripts, etc.

**Syntax:**
```html
<img src="card-back.png">
<script src="script.js">
```

**Example in Poker Game:**
```html
<!-- Link to JavaScript file -->
<script src="script.js"></script>

<!-- Card images (when we add them) -->
<img src="images/cards/ace-spades.png" alt="Ace of Spades">
```

---

### 8. `alt` - Alternative Text (for images)

**Purpose:** Describe image for screen readers and if image fails to load

**Syntax:**
```html
<img src="card.png" alt="Ace of Hearts">
```

**Always include for accessibility!**

---

## 📝 Form and Input Attributes

### 9. `type` - Input Type

**Purpose:** Specify what kind of input

**Syntax:**
```html
<input type="text">
<input type="number">
<input type="checkbox">
<button type="button">
```

**Example:**
```html
<!-- Text input for player name -->
<input type="text" id="player-name" placeholder="Your Name">

<!-- Number input for custom bet -->
<input type="number" id="custom-bet" min="10" max="100">
```

---

### 10. `placeholder` - Hint Text

**Purpose:** Show example text in input field

**Syntax:**
```html
<input type="text" placeholder="Enter your name">
```

**Example:**
```html
<input type="text" id="player-name" placeholder="Player 1">
```

---

### 11. `value` - Default Value

**Purpose:** Set initial value for input/button

**Syntax:**
```html
<input type="text" value="John">
<button value="fold">Fold</button>
```

---

### 12. `disabled` - Disable Element

**Purpose:** Make element unclickable/unusable

**Syntax:**
```html
<button disabled>Fold</button>
<input type="text" disabled>
```

**Example in Poker Game:**
```html
<!-- Disable raise buttons if player has no chips -->
<button id="raise-btn" disabled>Raise +10</button>
```

**JavaScript can toggle:**
```javascript
document.getElementById('raise-btn').disabled = false;
```

---

## 🎮 Semantic Attributes

### 13. `lang` - Language

**Purpose:** Specify document or element language

**Syntax:**
```html
<html lang="en">
<span lang="es">Hola</span>
```

---

### 14. `title` - Tooltip Text

**Purpose:** Show text when hovering

**Syntax:**
```html
<button title="This will fold your hand">Fold</button>
```

**Example:**
```html
<span title="Money left to bet with">💰 1000</span>
```

---

## 📊 Attribute Combinations

**Common patterns in the poker game:**

### Pattern 1: Button with Multiple Attributes
```html
<button 
    id="start-btn" 
    class="btn btn-primary" 
    aria-label="Start new poker game"
    title="Click to begin playing">
    Start Game
</button>
```

### Pattern 2: Dynamic Content Container
```html
<span 
    id="player-chip-amount" 
    class="chip-value" 
    data-initial-value="1000">
    1000
</span>
```

### Pattern 3: Screen with State
```html
<div 
    id="game-screen" 
    class="screen hidden" 
    data-screen-name="game">
    <!-- Game content -->
</div>
```

### Pattern 4: Input with Validation
```html
<input 
    type="number" 
    id="custom-bet" 
    class="bet-input"
    min="10" 
    max="100" 
    value="10"
    placeholder="Bet amount">
```

---

## ✅ Best Practices

### DO:
✅ Use `id` for JavaScript targets  
✅ Use `class` for styling groups  
✅ Use semantic attributes (`aria-label`, `alt`)  
✅ Use descriptive names (`player-chips` not `div1`)  
✅ Keep values lowercase with dashes  
✅ Always quote attribute values  

### DON'T:
❌ Duplicate IDs (each must be unique!)  
❌ Use inline `style` for everything (use CSS classes)  
❌ Forget `alt` text on images  
❌ Use generic names (`button1`, `div2`)  
❌ Mix naming conventions (stick to kebab-case)  
❌ Leave out quotes on values  

---

## 🐛 Common Mistakes

### Mistake 1: Duplicate IDs
```html
<!-- ❌ WRONG - Two elements with same ID -->
<button id="btn">Fold</button>
<button id="btn">Call</button>

<!-- ✅ CORRECT - Unique IDs -->
<button id="fold-btn">Fold</button>
<button id="call-btn">Call</button>
```

### Mistake 2: Missing Quotes
```html
<!-- ❌ WRONG - No quotes -->
<div id=start-screen class=screen>

<!-- ✅ CORRECT - Quoted values -->
<div id="start-screen" class="screen">
```

### Mistake 3: Space in ID/Class
```html
<!-- ❌ WRONG - Spaces in ID -->
<div id="start screen">

<!-- ✅ CORRECT - Use dash or camelCase -->
<div id="start-screen">
```

### Mistake 4: Using ID for Styling
```html
<!-- ❌ LESS GOOD - Styling with ID -->
<style>
#start-btn { color: blue; }
</style>

<!-- ✅ BETTER - Styling with class -->
<style>
.btn-primary { color: blue; }
</style>
```

---

## 🎯 Poker Game Attribute Reference

### All Button IDs:
```html
<!-- Start Screen -->
id="start-btn"
id="rules-btn"

<!-- Game Screen -->
id="deal-btn"
id="fold-btn"
id="call-btn"
id="raise-10-btn"
id="raise-25-btn"
id="raise-50-btn"

<!-- End Screen -->
id="play-again-btn"
id="quit-btn"

<!-- Overlay -->
id="close-instructions"
```

### All Screen IDs:
```html
id="start-screen"
id="game-screen"
id="end-screen"
id="instructions-overlay"
```

### All Dynamic Content IDs:
```html
<!-- Chips and Money -->
id="player-chip-amount"
id="dealer-chip-amount"
id="pot-amount"
id="high-score-value"

<!-- Messages and Info -->
id="game-message"
id="hand-name"
id="end-title"
id="end-message"

<!-- Statistics -->
id="final-chips"
id="hands-played"
id="hands-won"
id="win-rate"

<!-- Card Containers -->
id="player-hand"
id="dealer-hand"
```

### Common Classes:
```html
<!-- Structure -->
class="screen"
class="hidden"
class="overlay"

<!-- Buttons -->
class="btn"
class="btn-primary"
class="btn-secondary"
class="btn-fold"
class="btn-call"
class="btn-raise"

<!-- Game Elements -->
class="card"
class="card-hand"
class="chip-count"
class="chip-icon"
class="stat-item"
class="stat-label"
class="stat-value"
```

---

## 🎓 Quick Quiz

**Test your attribute knowledge:**

### Question 1:
What's wrong with this code?
```html
<button id="btn">Fold</button>
<button id="btn">Call</button>
```
**Answer:** Duplicate IDs - each ID must be unique

### Question 2:
What attribute helps screen readers understand a button?
```html
<button aria-label="Close dialog">×</button>
```
**Answer:** `aria-label`

### Question 3:
How do you add multiple classes?
```html
<div class="screen hidden">
```
**Answer:** Space-separated in the `class` attribute

### Question 4:
What's the difference between `id` and `class`?
**Answer:** 
- `id` = Unique identifier (only one per page)
- `class` = Reusable category (many elements can share)

---

## 📚 Resources

- **MDN Attribute Reference**: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
- **ARIA Labels Guide**: https://www.w3.org/WAI/ARIA/
- **Data Attributes**: https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes

---

**Remember:** Attributes add power and meaning to your HTML elements! Use them wisely. 🚀
