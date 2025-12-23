# Exercise 1: Build Your CSS Styling 🎨

**Goal**: Create the complete CSS file to transform your poker game from plain HTML to a beautiful, professional design.

**Time**: 60-90 minutes

---

## 🎯 Your Mission

Build the complete `style.css` file step-by-step, testing after each section to see your game transform!

---

## 📝 Step-by-Step Instructions

### Part 1: Setup (5 minutes)

1. **Open your `poker-game` folder**
2. **Create a new file** called `style.css`
3. **Verify HTML link** - Open `index.html` and confirm you have:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
4. **Save both files**

**✅ Checkpoint**: You have empty `style.css` file in same folder as `index.html`

---

### Part 2: CSS Reset & Body (10 minutes)

**Type this into `style.css`:**

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

**Test it:**
1. Save `style.css`
2. Refresh browser
3. Background should now be blue gradient!

**Understanding the code:**
- `* { }` - Selects ALL elements
- `margin: 0` - Removes default spacing
- `box-sizing: border-box` - Makes sizing predictable
- `linear-gradient(...)` - Creates smooth color transition
- `min-height: 100vh` - 100% of viewport height
- `display: flex` - Enables flexible layout
- `justify-content: center` - Centers horizontally
- `align-items: center` - Centers vertically

**✅ Checkpoint**: Blue gradient background visible

---

### Part 3: Screen System (10 minutes)

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
    text-align: center;
}

.screen.hidden {
    display: none;
}
```

**Test it:**
- Save and refresh
- Content should now be centered on screen

**Understanding:**
- `.screen` - Class selector (starts with `.`)
- `max-width: 1200px` - Won't get wider than 1200px
- `.screen.hidden` - When element has BOTH classes
- `display: none` - Completely hides element

**✅ Checkpoint**: Content centered, constrained width

---

### Part 4: Start Screen Styling (20 minutes)

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

/* Animations */
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

@keyframes float {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}
```

**Test it:**
- Save and refresh
- Title should be HUGE
- Card symbols should float up and down
- Page should fade in on load

**New concepts:**
- `#start-screen` - ID selector (starts with `#`)
- `rem` - Relative units (1rem = default font size, usually 16px)
- `rgba(255, 255, 255, 0.1)` - White with 10% opacity
- `backdrop-filter: blur(10px)` - Frosted glass effect
- `@keyframes` - Define custom animations
- `animation: float 3s ease-in-out infinite` - Apply animation

**✅ Checkpoint**: Start screen looks polished and animated

---

### Part 5: Button Styles (20 minutes)

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
```

**Test it:**
- Save and refresh
- Hover over buttons - they should lift up!
- Click buttons - they should press down!
- Different button types have different colors

**New concepts:**
- `:hover` - Style when mouse is over element
- `:active` - Style when element is being clicked
- `:disabled` - Style when button is disabled
- `cursor: pointer` - Shows hand cursor
- `transform: translateY(-2px)` - Moves element up 2px
- `transition: all 0.3s ease` - Smooth animations for ALL properties

**✅ Checkpoint**: Buttons look amazing with interactive hover effects

---

### Part 6: Poker Table (25 minutes)

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

**Test it:**
- Save and refresh
- Click "Start Game" in your mind (buttons don't work yet!)
- You should see a beautiful green poker table!

**Advanced concepts:**
- `radial-gradient(...)` - Circular gradient (center lighter, edges darker)
- `border-radius: 200px / 100px` - Elliptical corners (oval shape)
- `box-shadow: inset ...` - Shadow INSIDE element
- `::before` - Pseudo-element (creates extra element in CSS)
- `pointer-events: none` - Element doesn't block clicks
- `z-index: 1` - Controls stacking order (higher = on top)

**✅ Checkpoint**: Beautiful green felt poker table with wood border!

---

### Part 7: Card Styling (20 minutes)

**Add this to your `style.css`:**

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

.card[data-suit="hearts"],
.card[data-suit="diamonds"] {
    color: #e03131;
}

.card[data-suit="spades"],
.card[data-suit="clubs"] {
    color: #212529;
}

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

**Test it:**
- Save and refresh
- Cards containers should now have space for cards
- When JavaScript adds cards later, they'll look perfect!

**Card magic:**
- Standard poker card size ratio (5:7)
- White background for face-up cards
- Red gradient for face-down cards
- Red color for hearts/diamonds
- Black color for spades/clubs
- Cards fly in when dealt (animation)
- Cards lift up on hover

**✅ Checkpoint**: Card styling ready for JavaScript!

---

### Part 8: Game Controls & End Screen (15 minutes)

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

/* ==========================================
   END SCREEN
   ========================================== */

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
```

**✅ Checkpoint**: Controls and end screen styled!

---

### Part 9: Instructions Overlay (15 minutes)

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
}
```

**✅ Checkpoint**: Instructions overlay styled!

---

### Part 10: Responsive Design (10 minutes)

**Add this to the END of `style.css`:**

```css
/* ==========================================
   RESPONSIVE DESIGN
   ========================================== */

@media (max-width: 768px) {
    .game-title {
        font-size: 2.5rem;
    }
    
    .poker-table {
        border-width: 10px;
        padding: 20px 10px;
    }
    
    .card {
        width: 60px;
        height: 84px;
    }
    
    .betting-controls {
        flex-direction: column;
    }
    
    .betting-controls .btn {
        width: 100%;
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
}
```

**Test it:**
- Resize browser window to be narrow
- Elements should adapt to smaller screen!

**✅ Checkpoint**: Responsive on all devices!

---

## ✅ Final Validation

### Visual Checklist:

Open your game in browser. You should see:

- [ ] Blue gradient background
- [ ] Large, styled title with floating card symbols
- [ ] Colorful gradient buttons that lift on hover
- [ ] Green poker table with brown wood border
- [ ] Sections for dealer, pot, and player
- [ ] Golden pot display
- [ ] Space for cards with proper layout
- [ ] Styled game controls
- [ ] Professional overall appearance

### Test Hover Effects:

- [ ] Buttons lift up when you hover
- [ ] Buttons press down when you click
- [ ] Close button rotates on hover (in overlay)

### Test Responsive Design:

- [ ] Resize browser window - layout adapts
- [ ] Try it on your phone - looks good!

---

## 🎯 Completion Checklist

**Before moving on, verify:**

- [ ] `style.css` file created and saved
- [ ] CSS linked in HTML
- [ ] All sections of CSS added (10 parts)
- [ ] Blue gradient background visible
- [ ] Start screen looks polished
- [ ] Buttons have gradient colors and hover effects
- [ ] Poker table has green felt and wood border
- [ ] All animations working (float, fade, etc.)
- [ ] Responsive design working (resize browser)
- [ ] No CSS errors in browser console (F12)

---

## 📸 Screenshot Your Progress

**Take screenshots of:**
1. Start screen (show off that title!)
2. Hover over a button (capture the lift effect)
3. Poker table (green felt glory)
4. Mobile view (resize browser narrow)

**Compare to your unstyled HTML!** What a transformation! 🎨✨

---

## 💭 Reflection Questions

**Answer these in your notebook:**

1. What's the difference between `margin` and `padding`?
2. How does Flexbox help with layout?
3. Why do we use `rem` instead of `px` for font sizes?
4. What does `transition: all 0.3s ease` do?
5. How do pseudo-classes like `:hover` work?
6. What's the purpose of `@media` queries?

---

## 🎉 Congratulations!

You've transformed plain HTML into a beautiful poker game!

**What you've learned:**
✅ CSS syntax and selectors  
✅ Colors, gradients, and shadows  
✅ Flexbox layout system  
✅ Animations and transitions  
✅ Hover effects and interactions  
✅ Responsive design  
✅ Professional styling techniques  

**Next up:** Lesson 4.5 - JavaScript! Time to make it WORK! ⚡

---

**Teacher/Parent Sign-Off:**

Student completed exercise: _________________ Date: _______

Notes: _________________________________________________
