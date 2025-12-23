# HTML Structure Cheat Sheet 🏗️

**Quick reference for building your poker game HTML**

---

## 📋 HTML5 Boilerplate

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Game Title</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <!-- Your content here -->
    
    <script src="script.js"></script>
</body>
</html>
```

---

## 🏷️ Common HTML Tags

### Structure Tags
```html
<div>          <!-- Generic container -->
<section>      <!-- Thematic grouping of content -->
<header>       <!-- Introductory content -->
<footer>       <!-- Footer content -->
<main>         <!-- Main content -->
<article>      <!-- Self-contained content -->
<nav>          <!-- Navigation links -->
```

### Text Tags
```html
<h1> to <h6>   <!-- Headings (h1 largest) -->
<p>            <!-- Paragraph -->
<span>         <!-- Inline container -->
<strong>       <!-- Bold/important -->
<em>           <!-- Italic/emphasis -->
<br>           <!-- Line break (self-closing) -->
```

### Interactive Tags
```html
<button>       <!-- Clickable button -->
<input>        <!-- User input field -->
<select>       <!-- Dropdown menu -->
<option>       <!-- Option in dropdown -->
<label>        <!-- Label for input -->
<form>         <!-- Form container -->
```

### List Tags
```html
<ul>           <!-- Unordered list (bullets) -->
<ol>           <!-- Ordered list (numbers) -->
<li>           <!-- List item -->
```

---

## 🎯 IDs vs Classes

### When to use ID
```html
<!-- ✅ Unique elements JavaScript needs to access -->
<div id="start-screen">
<button id="start-btn">
<span id="player-chip-amount">1000</span>
```

**Rules:**
- Each ID must be unique on the page
- Use for JavaScript targeting: `document.getElementById('start-btn')`
- Format: kebab-case (`my-element-id`)

### When to use Class
```html
<!-- ✅ Styling multiple similar elements -->
<button class="btn btn-primary">
<div class="card-hand">
<span class="chip-icon">💰</span>
```

**Rules:**
- Can be reused on multiple elements
- Use for CSS styling: `.btn { ... }`
- Can have multiple classes: `class="btn btn-primary"`
- Format: kebab-case (`my-class-name`)

---

## 🎮 Poker Game Structure

### Three Main Screens
```html
<!-- Start Screen (visible by default) -->
<div id="start-screen" class="screen">
    <!-- Title, buttons, high score -->
</div>

<!-- Game Screen (hidden by default) -->
<div id="game-screen" class="screen hidden">
    <!-- Poker table, cards, betting controls -->
</div>

<!-- End Screen (hidden by default) -->
<div id="end-screen" class="screen hidden">
    <!-- Results, stats, play again button -->
</div>
```

---

## 🃏 Card Hand Container

```html
<!-- Empty container - JavaScript will fill with cards -->
<div id="player-hand" class="card-hand">
    <!-- JavaScript adds: <div class="card">...</div> -->
</div>
```

**JavaScript will create cards like:**
```html
<div class="card" data-suit="hearts" data-rank="A">
    <div class="card-front">
        <span class="rank">A</span>
        <span class="suit">♥</span>
    </div>
</div>
```

---

## 💰 Dynamic Content Elements

**Elements that JavaScript will update:**

```html
<!-- Chip counts -->
<span id="player-chip-amount">1000</span>
<span id="dealer-chip-amount">1000</span>

<!-- Pot amount -->
<span id="pot-amount">0</span>

<!-- Messages -->
<div id="game-message">Welcome!</div>
<div id="hand-info">Your hand: <span id="hand-name">-</span></div>

<!-- End screen stats -->
<span id="final-chips">0</span>
<span id="hands-played">0</span>
<span id="hands-won">0</span>
<span id="win-rate">0%</span>
```

**Pattern:** Container has descriptive ID, JavaScript updates `textContent` or `innerHTML`

---

## 🎨 Button Reference

### All Buttons in Poker Game

```html
<!-- Start Screen -->
<button id="start-btn" class="btn btn-primary">Start Game</button>
<button id="rules-btn" class="btn btn-secondary">How to Play</button>

<!-- Game Screen - Betting -->
<button id="fold-btn" class="btn btn-fold">Fold</button>
<button id="call-btn" class="btn btn-call">Call</button>
<button id="raise-10-btn" class="btn btn-raise">Raise +10</button>
<button id="raise-25-btn" class="btn btn-raise">Raise +25</button>
<button id="raise-50-btn" class="btn btn-raise">Raise +50</button>

<!-- Game Screen - Dealing -->
<button id="deal-btn" class="btn btn-primary">Deal Hand</button>

<!-- End Screen -->
<button id="play-again-btn" class="btn btn-primary">Play Again</button>
<button id="quit-btn" class="btn btn-secondary">Quit</button>

<!-- Instructions Overlay -->
<button id="close-instructions" class="btn-close">×</button>
```

---

## 🎲 Common Attributes

### Essential Attributes
```html
<!-- ID (unique identifier) -->
<div id="my-element">

<!-- Class (styling/grouping) -->
<div class="my-class another-class">

<!-- Data attributes (custom data) -->
<div data-suit="hearts" data-rank="A">

<!-- Aria labels (accessibility) -->
<button aria-label="Close dialog">×</button>

<!-- Type (for inputs) -->
<input type="text">
<input type="number">
<button type="button">
```

---

## 📐 Semantic HTML Examples

### ✅ Good (Semantic)
```html
<section class="player-section">
    <header>
        <h2>Player</h2>
    </header>
    <div class="chip-count">...</div>
</section>
```

### ❌ Less Good (Non-semantic)
```html
<div class="player-section">
    <div>
        <div class="title">Player</div>
    </div>
    <div class="chip-count">...</div>
</div>
```

**Why semantic is better:**
- Screen readers understand structure
- Search engines index better
- Easier for developers to read
- Better accessibility

---

## 🎨 Special Characters

### Card Symbols
```html
♠  &spades;   (spade)
♥  &hearts;   (heart)
♦  &diams;    (diamond)
♣  &clubs;    (club)
```

### Useful Symbols
```html
×  &times;    (close button)
💰  &#128176; (money bag emoji)
🃏  &#127183; (joker card emoji)
🎰  &#127920; (slot machine emoji)
```

### Other Entities
```html
&nbsp;   <!-- Non-breaking space -->
&lt;     <!-- Less than < -->
&gt;     <!-- Greater than > -->
&amp;    <!-- Ampersand & -->
&quot;   <!-- Quote " -->
```

---

## 📝 Comments Best Practices

```html
<!-- ========================================
     MAJOR SECTION DIVIDER
     ======================================== -->

<!-- Subsection title -->

<!-- 
    Multi-line comment
    for detailed explanations
-->

<!-- TODO: Add feature here later -->
```

---

## ✅ HTML Validation Checklist

**Before moving to CSS, check:**

- [ ] All tags properly closed (`<div>` has `</div>`)
- [ ] Self-closing tags correct (`<br>`, `<input>`, not `<br></br>`)
- [ ] Proper nesting (tags close in reverse order opened)
- [ ] All attribute values in quotes (`id="value"`)
- [ ] All IDs are unique (no duplicates)
- [ ] Proper indentation (consistent spaces/tabs)
- [ ] DOCTYPE declaration present (`<!DOCTYPE html>`)
- [ ] `<head>` and `<body>` tags present
- [ ] Character encoding specified (`<meta charset="UTF-8">`)

---

## 🔍 Common HTML Mistakes

### Mistake 1: Forgetting Closing Tags
```html
<!-- ❌ Wrong -->
<div id="container">
    <p>Text

<!-- ✅ Correct -->
<div id="container">
    <p>Text</p>
</div>
```

### Mistake 2: Duplicate IDs
```html
<!-- ❌ Wrong -->
<button id="my-btn">Button 1</button>
<button id="my-btn">Button 2</button>

<!-- ✅ Correct -->
<button id="btn-1">Button 1</button>
<button id="btn-2">Button 2</button>
```

### Mistake 3: Missing Quotes
```html
<!-- ❌ Wrong -->
<div id=container class=screen>

<!-- ✅ Correct -->
<div id="container" class="screen">
```

### Mistake 4: Wrong Nesting
```html
<!-- ❌ Wrong -->
<div>
    <p>Text
</div>
    </p>

<!-- ✅ Correct -->
<div>
    <p>Text</p>
</div>
```

---

## 🚀 Quick Testing

### Test in Browser
```
1. Save HTML file
2. Right-click → Open with → Browser
3. Check all elements visible
4. Check browser console for errors (F12)
```

### Validate HTML
```
1. Go to: https://validator.w3.org/
2. Choose "Validate by Direct Input"
3. Copy/paste your HTML
4. Click "Check"
5. Fix any errors shown
```

### Browser Dev Tools
```
F12 or Right-click → Inspect

- Elements tab: See HTML structure
- Console tab: Check for errors
- Sources tab: View your files
```

---

## 📊 File Organization

```
poker-game/
├── index.html       ← Your main HTML file
├── style.css        ← CSS (create in Lesson 4.4)
├── script.js        ← JavaScript (create in Lesson 4.5+)
├── images/          ← Images folder (optional)
│   ├── cards/
│   └── backgrounds/
└── README.md        ← Project documentation
```

---

## 🎯 JavaScript Targets Reference

**Common getElementById() targets:**

```javascript
// Screens
document.getElementById('start-screen')
document.getElementById('game-screen')
document.getElementById('end-screen')

// Buttons
document.getElementById('start-btn')
document.getElementById('deal-btn')
document.getElementById('fold-btn')

// Dynamic content
document.getElementById('player-chip-amount')
document.getElementById('pot-amount')
document.getElementById('game-message')

// Containers
document.getElementById('player-hand')
document.getElementById('dealer-hand')
```

---

## 💡 Pro Tips

1. **Indent consistently** - Use 2 or 4 spaces (not tabs)
2. **Comment your sections** - Future you will thank you
3. **Use semantic HTML** - `<section>` not just `<div>`
4. **Validate often** - Catch errors early
5. **Test as you build** - Don't wait until the end
6. **ID for JavaScript, class for CSS** - General rule
7. **Keep it readable** - Break long lines, add whitespace
8. **Be consistent** - Pick naming conventions and stick to them

---

## 🔗 Helpful Resources

- **HTML Validator**: https://validator.w3.org/
- **HTML Reference**: https://developer.mozilla.org/en-US/docs/Web/HTML
- **Can I Use**: https://caniuse.com/ (browser support)
- **HTML Entities**: https://www.w3schools.com/html/html_entities.asp

---

## 🎓 Next Steps

**After completing HTML structure:**
- **Lesson 4.4**: CSS Styling (make it pretty!)
- **Lesson 4.5**: JavaScript Basics (make it interactive!)
- **Lesson 4.6**: Card System (create and display cards)

**You've built the foundation - now let's make it amazing!** 🚀✨
