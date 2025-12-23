# Lesson 4.4: CSS Styling for Poker 🎨

**Duration**: 90-120 minutes  
**Difficulty**: Beginner-Intermediate

---

## 🎯 Learning Objectives

By the end of this lesson, you will:
- Transform plain HTML into a beautiful poker game
- Create a realistic poker table design
- Style playing cards with front and back
- Add colors, spacing, and layout
- Use CSS Flexbox for positioning
- Create hover effects and animations
- Make the game responsive (mobile-friendly)
- Understand CSS best practices

---

## 📚 What is CSS?

**CSS** = Cascading Style Sheets (the "paint and decoration" of your website)

### The House Building Analogy:
- **HTML** = Frame and walls (structure)
- **CSS** = Paint, furniture, decorations (appearance)
- **JavaScript** = Electricity and plumbing (functionality)

**Today we're decorating the house!** Your HTML structure is ready - now let's make it look like a professional poker game.

---

## 🎨 CSS Basics

### Anatomy of a CSS Rule:

```css
selector {
    property: value;
    another-property: another-value;
}
```

**Example:**
```css
.btn {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
}
```

### Three Ways to Add CSS:

1. **External CSS File** (BEST - we'll use this!)
   ```html
   <link rel="stylesheet" href="style.css">
   ```

2. **Internal CSS** (in `<head>`)
   ```html
   <style>
       .btn { color: blue; }
   </style>
   ```

3. **Inline CSS** (avoid when possible)
   ```html
   <button style="color: blue;">Click</button>
   ```

---

## 📝 Step 1: Create CSS File

### Instructions:

1. In your `poker-game` folder, create a new file: `style.css`
2. Your folder should now look like:
   ```
   poker-game/
   ├── index.html  ✅ (already created)
   └── style.css   ✅ (new file)
   ```

3. Open `style.css` in your code editor

---

## 🎨 Step 2: CSS Reset and Base Styles

**Add this at the top of `style.css`:**

```css
/* ==========================================
   CSS RESET & BASE STYLES
   ========================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', 'Helvetica', sans-serif;
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
    color: #ffffff;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
```

**What this does:**
- `* { margin: 0; padding: 0; }` - Removes default browser spacing
- `box-sizing: border-box` - Makes sizing calculations easier
- `font-family` - Sets default font for all text
- `background: linear-gradient(...)` - Blue gradient background
- `min-height: 100vh` - Full viewport height
- `display: flex` - Centers content on screen

**Save and refresh browser!** You should see the blue background!

---

## 🃏 Step 3: Screen System

**Add this to `style.css`:**

```css
/* ==========================================
   SCREEN SYSTEM
   ========================================== */

.screen {
    width: 100%;
    max-width: 1200px;
    padding: 20px;
    display: block;
}

.screen.hidden {
    display: none;
}

/* Center content in screens */
.screen {
    text-align: center;
}
```

**What this does:**
- `.screen` - Base styles for all screens
- `.hidden` - Hides screens (JavaScript will toggle this)
- `max-width: 1200px` - Prevents content from getting too wide
- `text-align: center` - Centers text

**Save and refresh!** Content should now be centered.

---

## 🎮 Step 4: Start Screen Styling

**Add this to `style.css`:**

```css
/* ==========================================
   START SCREEN
   ========================================== */

#start-screen {
    animation: fadeIn 1s ease-in;
}

.game-title {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 20px;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
    letter-spacing: 3px;
}

.card-symbol {
    font-size: 3.5rem;
    margin: 0 15px;
    display: inline-block;
    animation: float 3s ease-in-out infinite;
}

.tagline {
    font-size: 1.5rem;
    margin-bottom: 40px;
    opacity: 0.9;
    font-style: italic;
}

.button-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    margin-bottom: 40px;
}

.high-score {
    font-size: 1.2rem;
    margin-bottom: 20px;
    padding: 15px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    backdrop-filter: blur(10px);
}

.credits {
    margin-top: 40px;
    font-size: 0.9rem;
    opacity: 0.7;
}

/* Fade in animation */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Floating animation */
@keyframes float {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}
```

**Key concepts:**
- `font-size: 4rem` - Large title (rem = relative units)
- `text-shadow` - Adds depth to text
- `animation` - Makes elements move
- `rgba(255, 255, 255, 0.1)` - White with 10% opacity
- `backdrop-filter: blur(10px)` - Frosted glass effect
- `@keyframes` - Defines custom animations

**Save and refresh!** Your start screen should look much better!

---

## 🔘 Step 5: Button Styles

**Add this to `style.css`:**

```css
/* ==========================================
   BUTTONS
   ========================================== */

.btn {
    font-size: 1.1rem;
    padding: 15px 30px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    min-width: 200px;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
}

.btn:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.btn-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.btn-primary:hover {
    background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
}

.btn-secondary {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    color: white;
}

.btn-fold {
    background: linear-gradient(135deg, #ff6b6b 0%, #c92a2a 100%);
    color: white;
}

.btn-call {
    background: linear-gradient(135deg, #51cf66 0%, #37b24d 100%);
    color: white;
}

.btn-raise {
    background: linear-gradient(135deg, #ffd43b 0%, #fab005 100%);
    color: #333;
}

.btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
}

.btn-close {
    position: absolute;
    top: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    font-size: 2rem;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    color: white;
    transition: all 0.3s ease;
}

.btn-close:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: rotate(90deg);
}
```

**Key concepts:**
- `cursor: pointer` - Shows hand cursor on hover
- `transition: all 0.3s ease` - Smooth animations
- `transform: translateY(-2px)` - Moves button up on hover
- `linear-gradient(...)` - Color gradients
- `:hover`, `:active`, `:disabled` - Pseudo-classes for states
- `box-shadow` - Adds depth

**Save and refresh!** Buttons should now look awesome!

---

## 🎰 Step 6: Poker Table Styling

**Add this to `style.css`:**

```css
/* ==========================================
   POKER TABLE
   ========================================== */

#game-screen {
    max-width: 1400px;
}

.poker-table {
    background: radial-gradient(ellipse at center, #2d5016 0%, #1a3009 100%);
    border: 15px solid #8B4513;
    border-radius: 200px / 100px;
    padding: 40px 20px;
    box-shadow: 
        inset 0 0 50px rgba(0, 0, 0, 0.5),
        0 10px 30px rgba(0, 0, 0, 0.5);
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 30px;
}

/* Felt texture overlay (optional) */
.poker-table::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
        repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            rgba(0, 0, 0, 0.02) 2px,
            rgba(0, 0, 0, 0.02) 4px
        );
    border-radius: 200px / 100px;
    pointer-events: none;
}

.dealer-section,
.pot-section,
.player-section {
    position: relative;
    z-index: 1;
}

.player-label {
    font-size: 1.5rem;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.chip-count {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(0, 0, 0, 0.3);
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 15px;
}

.chip-icon {
    font-size: 1.5rem;
}

.pot-display {
    background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
    color: #333;
    padding: 20px 40px;
    border-radius: 15px;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    display: inline-block;
}

.pot-label {
    font-size: 1rem;
    letter-spacing: 2px;
}

.message {
    font-size: 1.1rem;
    padding: 12px 24px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    backdrop-filter: blur(5px);
}
```

**What this creates:**
- **Green felt table** - Radial gradient (dark green center, darker edges)
- **Wood border** - Brown `#8B4513` border, rounded oval shape
- **Inset shadow** - Makes table look indented
- **Felt texture** - Subtle diagonal lines using `::before` pseudo-element
- **Golden pot** - Shiny yellow gradient
- **Frosted glass effects** - Using `backdrop-filter`

**Save and refresh!** Now you have a poker table! 🎰

---

## 🃏 Step 7: Card Styling

**Add this to `style.css`:**

```css
/* ==========================================
   PLAYING CARDS
   ========================================== */

.card-hand {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    min-height: 140px;
    align-items: center;
}

.card {
    width: 80px;
    height: 112px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 8px;
    font-size: 1.5rem;
    font-weight: bold;
    position: relative;
    transition: transform 0.3s ease;
    cursor: pointer;
}

.card:hover {
    transform: translateY(-10px) scale(1.05);
}

/* Card back (face down) */
.card.face-down {
    background: linear-gradient(135deg, #c92a2a 0%, #a61e1e 100%);
    color: white;
}

.card.face-down::before {
    content: '🂠';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    opacity: 0.3;
}

/* Card suits colors */
.card[data-suit="hearts"],
.card[data-suit="diamonds"] {
    color: #e03131;
}

.card[data-suit="spades"],
.card[data-suit="clubs"] {
    color: #212529;
}

/* Card layout */
.card-rank {
    font-size: 1.5rem;
    line-height: 1;
}

.card-suit {
    font-size: 2rem;
    line-height: 1;
}

.card-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2.5rem;
}

/* Card dealing animation */
@keyframes dealCard {
    from {
        opacity: 0;
        transform: translateY(-100px) rotate(-10deg);
    }
    to {
        opacity: 1;
        transform: translateY(0) rotate(0);
    }
}

.card {
    animation: dealCard 0.5s ease-out;
}
```

**Card styling breakdown:**
- **Standard card size** - 80×112px (poker card ratio)
- **White background** - Real card look
- **Red/black suits** - Using `data-suit` attribute
- **Card back** - Red gradient for face-down cards
- **Hover effect** - Cards lift up when you hover
- **Deal animation** - Cards fly in when dealt

---

## 🎮 Step 8: Game Controls

**Add this to `style.css`:**

```css
/* ==========================================
   GAME CONTROLS
   ========================================== */

.game-controls {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    padding: 20px;
    backdrop-filter: blur(10px);
}

.hand-info {
    font-size: 1.3rem;
    margin-bottom: 20px;
    padding: 15px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
}

#hand-name {
    color: #ffd43b;
    font-weight: bold;
}

.betting-controls {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

.betting-controls .btn {
    min-width: 120px;
    font-size: 0.9rem;
    padding: 12px 20px;
}

.deal-controls {
    display: flex;
    justify-content: center;
}
```

---

## 🏆 Step 9: End Screen Styling

**Add this to `style.css`:**

```css
/* ==========================================
   END SCREEN
   ========================================== */

#end-screen {
    animation: fadeIn 0.5s ease-in;
}

.end-content {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    padding: 40px;
    backdrop-filter: blur(15px);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}

.end-title {
    font-size: 3.5rem;
    margin-bottom: 20px;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
}

.end-title.win {
    color: #51cf66;
    text-shadow: 0 0 20px #51cf66;
}

.end-title.lose {
    color: #ff6b6b;
    text-shadow: 0 0 20px #ff6b6b;
}

.end-message {
    font-size: 1.5rem;
    margin-bottom: 30px;
    opacity: 0.9;
}

.end-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
}

.stat-item {
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 10px;
    transition: transform 0.3s ease;
}

.stat-item:hover {
    transform: scale(1.05);
    background: rgba(255, 255, 255, 0.15);
}

.stat-label {
    display: block;
    font-size: 0.9rem;
    opacity: 0.8;
    margin-bottom: 8px;
}

.stat-value {
    display: block;
    font-size: 2rem;
    font-weight: bold;
    color: #ffd43b;
}

.end-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}
```

---

## 📋 Step 10: Instructions Overlay

**Add this to `style.css`:**

```css
/* ==========================================
   INSTRUCTIONS OVERLAY
   ========================================== */

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    animation: fadeIn 0.3s ease;
}

.overlay.hidden {
    display: none;
}

.overlay-content {
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
    border-radius: 20px;
    padding: 40px;
    max-width: 700px;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.overlay-content h2 {
    font-size: 2.5rem;
    margin-bottom: 30px;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.instruction-section {
    margin-bottom: 30px;
    text-align: left;
}

.instruction-section h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #ffd43b;
}

.instruction-section p,
.instruction-section li {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 10px;
}

.instruction-section ol,
.instruction-section ul {
    margin-left: 20px;
}

.hand-rankings {
    background: rgba(0, 0, 0, 0.3);
    padding: 20px;
    border-radius: 10px;
}

.hand-rankings li {
    margin-bottom: 12px;
    padding: 8px;
    border-left: 3px solid #ffd43b;
    padding-left: 15px;
}

/* Scrollbar styling */
.overlay-content::-webkit-scrollbar {
    width: 10px;
}

.overlay-content::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
}

.overlay-content::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
}

.overlay-content::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
}
```

---

## 📱 Step 11: Responsive Design

**Add this to `style.css`:**

```css
/* ==========================================
   RESPONSIVE DESIGN (Mobile & Tablet)
   ========================================== */

@media (max-width: 768px) {
    .game-title {
        font-size: 2.5rem;
    }
    
    .tagline {
        font-size: 1.2rem;
    }
    
    .poker-table {
        border-width: 10px;
        padding: 20px 10px;
    }
    
    .card {
        width: 60px;
        height: 84px;
        font-size: 1rem;
    }
    
    .card-center {
        font-size: 1.8rem;
    }
    
    .betting-controls {
        flex-direction: column;
        align-items: stretch;
    }
    
    .betting-controls .btn {
        min-width: 100%;
    }
    
    .end-stats {
        grid-template-columns: 1fr;
    }
    
    .overlay-content {
        padding: 20px;
        margin: 20px;
    }
}

@media (max-width: 480px) {
    .game-title {
        font-size: 2rem;
    }
    
    .card {
        width: 50px;
        height: 70px;
    }
    
    .btn {
        font-size: 0.9rem;
        padding: 12px 20px;
        min-width: 150px;
    }
}
```

**What this does:**
- **@media queries** - Apply different styles at different screen sizes
- **768px breakpoint** - Tablet size
- **480px breakpoint** - Phone size
- **Smaller fonts** - Readable on small screens
- **Stacked buttons** - Easier to tap on mobile
- **Smaller cards** - Fit more cards on screen

---

## ✨ Step 12: Final Touches

**Add this to `style.css`:**

```css
/* ==========================================
   UTILITY CLASSES
   ========================================== */

.text-center {
    text-align: center;
}

.mt-20 {
    margin-top: 20px;
}

.mb-20 {
    margin-bottom: 20px;
}

/* Glowing effect */
.glow {
    animation: glow 2s ease-in-out infinite;
}

@keyframes glow {
    0%, 100% {
        text-shadow: 0 0 10px #ffd43b, 0 0 20px #ffd43b;
    }
    50% {
        text-shadow: 0 0 20px #ffd43b, 0 0 30px #ffd43b;
    }
}

/* Shake animation (for errors) */
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
}

.shake {
    animation: shake 0.5s ease;
}

/* Pulse animation */
@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

.pulse {
    animation: pulse 1s ease infinite;
}
```

---

## 🎯 Testing Your CSS

**Open `index.html` in your browser. You should see:**

✅ Blue gradient background  
✅ Centered, styled content  
✅ Beautiful title with floating card symbols  
✅ Colorful gradient buttons with hover effects  
✅ Green poker table with wood border  
✅ Professional card styling  
✅ Frosted glass effects  
✅ Smooth animations everywhere  

**If something looks wrong:**
1. Check console for errors (F12 → Console)
2. Verify `style.css` is linked in HTML
3. Make sure file is saved
4. Hard refresh browser (Ctrl+Shift+R)

---

## ✅ Lesson Checklist

**Before moving to Lesson 4.5, verify:**

- [ ] `style.css` file created
- [ ] CSS linked in HTML (`<link rel="stylesheet" href="style.css">`)
- [ ] CSS reset and base styles added
- [ ] Start screen styled (title, buttons, layout)
- [ ] Button styles with hover effects
- [ ] Poker table styled (green felt, wood border)
- [ ] Card styles added (front and back)
- [ ] Game controls styled
- [ ] End screen styled
- [ ] Instructions overlay styled
- [ ] Responsive design added (mobile-friendly)
- [ ] Animations working (float, fade, deal, etc.)
- [ ] File opens in browser and looks professional

---

## 🎓 Key Takeaways

1. **CSS transforms HTML** - Same structure, completely different look
2. **Flexbox is powerful** - Easy centering and layouts
3. **Gradients add depth** - Better than flat colors
4. **Animations enhance UX** - Subtle movements feel professional
5. **Hover states matter** - Give users feedback
6. **Responsive design is essential** - Works on all devices
7. **Box shadow creates depth** - Makes elements pop
8. **Transparency is elegant** - rgba() and backdrop-filter

---

## 🚀 What's Next?

**Lesson 4.5: JavaScript Basics & Card System**

Now that your game looks amazing, you'll:
- Make buttons actually work
- Create a deck of 52 cards
- Shuffle the deck
- Deal cards to players
- Display cards on screen
- Add click handlers

**Get excited!** Your game is about to come to life! ⚡🃏

---

## 💡 Pro Tips

**From Professional Developers:**

1. **"Use CSS variables for colors!"** - Makes theming easy
2. **"Mobile-first design!"** - Start with mobile, scale up
3. **"Less is more!"** - Don't over-animate
4. **"Test in multiple browsers!"** - Chrome, Firefox, Safari
5. **"Use dev tools!"** - Inspect elements to debug CSS

**Remember:** Great design is invisible - users shouldn't notice the CSS, they should just enjoy the experience! 🎨✨
