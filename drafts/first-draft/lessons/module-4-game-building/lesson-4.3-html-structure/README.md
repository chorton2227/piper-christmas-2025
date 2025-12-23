# Lesson 4.3: HTML Structure for Poker 🏗️

**Duration**: 60-90 minutes  
**Difficulty**: Beginner-Intermediate

---

## 🎯 Learning Objectives

By the end of this lesson, you will:
- Build complete HTML structure for poker game
- Create all 3 screens (start, game, end)
- Use semantic HTML elements
- Add IDs and classes for JavaScript/CSS
- Organize code with proper indentation
- Understand HTML5 best practices
- Prepare structure for CSS styling

---

## 📚 What is HTML Structure?

**HTML** = HyperText Markup Language (the skeleton of your website)

Think of building a house:
- **HTML** = Frame and structure (walls, rooms, doors)
- **CSS** = Paint and decoration (colors, styles)
- **JavaScript** = Electricity and plumbing (makes it work)

**Today we're building the frame!** It won't look pretty yet, but it will have all the right pieces in the right places.

---

## 🎮 Our HTML File Structure

We'll create **one HTML file** with **three screens**:

1. **Start Screen** - Welcome and start button
2. **Game Screen** - Poker table, cards, buttons
3. **End Screen** - Win/lose message, play again

**Only one screen shows at a time** (JavaScript will control which)

---

## 📝 Step 1: Create the File

### Instructions:

1. Open VS Code (or your code editor)
2. Create a new file: `index.html`
3. Save it in a new folder: `poker-game/`

**File location:**
```
poker-game/
  └── index.html
```

---

## 🏗️ Step 2: HTML Boilerplate

**Type this basic HTML structure:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Poker Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <!-- Our game will go here -->
    
    <script src="script.js"></script>
</body>
</html>
```

**What each part means:**

- `<!DOCTYPE html>` - Tells browser this is HTML5
- `<html lang="en">` - Root element, English language
- `<head>` - Metadata (not visible on page)
- `<meta charset="UTF-8">` - Character encoding (supports emojis, symbols)
- `<meta name="viewport"...>` - Makes it responsive on mobile
- `<title>` - Shows in browser tab
- `<link rel="stylesheet">` - Connects CSS file (we'll create later)
- `<body>` - Everything visible on page goes here
- `<script src="script.js">` - Connects JavaScript file (we'll create later)

---

## 🎬 Step 3: Start Screen

**Add this inside `<body>` tags:**

```html
<body>
    
    <!-- ========== START SCREEN ========== -->
    <div id="start-screen" class="screen">
        <h1 class="game-title">
            <span class="card-symbol">♠</span>
            Poker Showdown
            <span class="card-symbol">♥</span>
        </h1>
        
        <p class="tagline">Beat the Dealer, Win the Pot!</p>
        
        <div class="button-container">
            <button id="start-btn" class="btn btn-primary">Start Game</button>
            <button id="rules-btn" class="btn btn-secondary">How to Play</button>
        </div>
        
        <div class="high-score">
            <p>High Score: <span id="high-score-value">0</span> chips</p>
        </div>
        
        <footer class="credits">
            <p>Created by: <span id="creator-name">Your Name</span></p>
        </footer>
    </div>

    <script src="script.js"></script>
</body>
```

**Understanding the structure:**

- `<div id="start-screen">` - Container for entire start screen
- `<h1 class="game-title">` - Main title (largest heading)
- `<span class="card-symbol">` - Decorative card symbols
- `<button id="start-btn">` - Primary action button
- `<span id="high-score-value">` - JavaScript will update this
- `id=""` - Unique identifier (for JavaScript)
- `class=""` - Style identifier (for CSS, can be reused)

---

## 🎮 Step 4: Game Screen

**Add this after start screen:**

```html
    <!-- ========== GAME SCREEN ========== -->
    <div id="game-screen" class="screen hidden">
        
        <!-- Poker Table -->
        <div class="poker-table">
            
            <!-- Dealer Section -->
            <section class="dealer-section">
                <h2 class="player-label">Dealer</h2>
                <div class="chip-count dealer-chips">
                    <span class="chip-icon">💰</span>
                    <span id="dealer-chip-amount">1000</span>
                </div>
                <div id="dealer-hand" class="card-hand">
                    <!-- Cards will be added by JavaScript -->
                </div>
            </section>
            
            <!-- Pot Section -->
            <section class="pot-section">
                <div class="pot-display">
                    <span class="pot-label">POT</span>
                    <span id="pot-amount">0</span>
                </div>
                <div id="game-message" class="message">
                    Welcome! Click "Deal Hand" to start.
                </div>
            </section>
            
            <!-- Player Section -->
            <section class="player-section">
                <div id="player-hand" class="card-hand">
                    <!-- Cards will be added by JavaScript -->
                </div>
                <div class="chip-count player-chips">
                    <span class="chip-icon">💰</span>
                    <span id="player-chip-amount">1000</span>
                </div>
                <h2 class="player-label">You</h2>
            </section>
            
        </div>
        
        <!-- Game Controls -->
        <div class="game-controls">
            
            <!-- Hand Info Display -->
            <div id="hand-info" class="hand-info">
                <p>Your hand: <span id="hand-name">-</span></p>
            </div>
            
            <!-- Betting Buttons -->
            <div id="betting-controls" class="betting-controls">
                <button id="fold-btn" class="btn btn-fold">Fold</button>
                <button id="call-btn" class="btn btn-call">Call</button>
                <button id="raise-10-btn" class="btn btn-raise">Raise +10</button>
                <button id="raise-25-btn" class="btn btn-raise">Raise +25</button>
                <button id="raise-50-btn" class="btn btn-raise">Raise +50</button>
            </div>
            
            <!-- Deal New Hand Button -->
            <div class="deal-controls">
                <button id="deal-btn" class="btn btn-primary">Deal Hand</button>
            </div>
            
        </div>
        
    </div>
```

**Key elements:**

- `<section>` - Semantic HTML for major sections
- `<div class="poker-table">` - Visual container for table
- `<div id="dealer-hand">` - Empty container (JavaScript fills it)
- `<span id="pot-amount">` - Dynamic value
- `<button id="fold-btn">` - Each button has unique ID
- `.hidden` class - Will hide screen initially (CSS)

---

## 🏆 Step 5: End Screen

**Add this after game screen:**

```html
    <!-- ========== END SCREEN ========== -->
    <div id="end-screen" class="screen hidden">
        
        <div class="end-content">
            
            <!-- End Title (changes based on win/lose) -->
            <h1 id="end-title" class="end-title">Game Over</h1>
            
            <!-- End Message -->
            <p id="end-message" class="end-message">
                <!-- JavaScript will set this -->
            </p>
            
            <!-- Statistics -->
            <div class="end-stats">
                <div class="stat-item">
                    <span class="stat-label">Final Chips:</span>
                    <span id="final-chips" class="stat-value">0</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Hands Played:</span>
                    <span id="hands-played" class="stat-value">0</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Hands Won:</span>
                    <span id="hands-won" class="stat-value">0</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Win Rate:</span>
                    <span id="win-rate" class="stat-value">0%</span>
                </div>
            </div>
            
            <!-- Action Buttons -->
            <div class="end-buttons">
                <button id="play-again-btn" class="btn btn-primary">Play Again</button>
                <button id="quit-btn" class="btn btn-secondary">Quit</button>
            </div>
            
        </div>
        
    </div>
```

**Statistics structure:**

- Each stat is a `<div class="stat-item">`
- Label and value separated
- JavaScript will update all `<span>` values

---

## 📋 Step 6: Instructions Overlay (Optional)

**Add this before closing `</body>` tag:**

```html
    <!-- ========== INSTRUCTIONS OVERLAY ========== -->
    <div id="instructions-overlay" class="overlay hidden">
        <div class="overlay-content">
            
            <button id="close-instructions" class="btn-close" aria-label="Close">×</button>
            
            <h2>How to Play</h2>
            
            <div class="instructions">
                
                <section class="instruction-section">
                    <h3>Objective</h3>
                    <p>Win all the dealer's chips! Beat the dealer's hand to win the pot.</p>
                </section>
                
                <section class="instruction-section">
                    <h3>Game Flow</h3>
                    <ol>
                        <li>Both players ante 10 chips</li>
                        <li>You receive 5 cards (dealer's cards hidden)</li>
                        <li>Choose: Fold, Call, or Raise</li>
                        <li>Dealer responds</li>
                        <li>Best hand wins the pot!</li>
                    </ol>
                </section>
                
                <section class="instruction-section">
                    <h3>Hand Rankings</h3>
                    <ol class="hand-rankings">
                        <li><strong>Royal Flush</strong> - A-K-Q-J-10 same suit (best!)</li>
                        <li><strong>Straight Flush</strong> - 5 in a row, same suit</li>
                        <li><strong>Four of a Kind</strong> - 4 cards same rank</li>
                        <li><strong>Full House</strong> - 3 of a kind + pair</li>
                        <li><strong>Flush</strong> - 5 cards same suit</li>
                        <li><strong>Straight</strong> - 5 cards in a row</li>
                        <li><strong>Three of a Kind</strong> - 3 cards same rank</li>
                        <li><strong>Two Pair</strong> - 2 different pairs</li>
                        <li><strong>One Pair</strong> - 2 cards same rank</li>
                        <li><strong>High Card</strong> - Highest card wins (worst)</li>
                    </ol>
                </section>
                
                <section class="instruction-section">
                    <h3>Betting</h3>
                    <ul>
                        <li><strong>Fold:</strong> Give up, lose your ante</li>
                        <li><strong>Call:</strong> Match current bet, go to showdown</li>
                        <li><strong>Raise:</strong> Bet more (+10, +25, or +50 chips)</li>
                    </ul>
                </section>
                
            </div>
            
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

**Overlay features:**

- `<div class="overlay">` - Covers entire screen
- `<button class="btn-close">` - × symbol to close
- `<ol>` and `<ul>` - Ordered and unordered lists
- `aria-label` - Accessibility for screen readers

---

## ✅ Step 7: Validate Your HTML

**Check your HTML structure:**

### Use HTML Validator:
1. Go to: https://validator.w3.org/#validate_by_input
2. Copy your HTML
3. Paste and click "Check"
4. Fix any errors

### Common mistakes to check:
- [ ] All opening tags have closing tags
- [ ] Quotes around all attribute values
- [ ] Proper nesting (tags close in reverse order)
- [ ] Unique IDs (no duplicates)
- [ ] Proper indentation (easier to read)

---

## 🎨 Step 8: Add Visual Comments

**Make your code readable with comments:**

```html
<!-- ========================================
     START SCREEN
     ======================================== -->
<div id="start-screen" class="screen">
    <!-- Game Title -->
    <h1 class="game-title">...</h1>
    
    <!-- Action Buttons -->
    <div class="button-container">...</div>
</div>

<!-- ========================================
     GAME SCREEN - Main Poker Table
     ======================================== -->
<div id="game-screen" class="screen hidden">
    <!-- Dealer Cards and Info -->
    <section class="dealer-section">...</section>
    
    <!-- Pot and Messages -->
    <section class="pot-section">...</section>
    
    <!-- Player Cards and Info -->
    <section class="player-section">...</section>
</div>
```

**Why comments matter:**
- Future you will thank you
- Easier to find sections
- Helps others understand your code
- Professional practice

---

## 📊 Complete HTML Structure Overview

```
index.html
├── <head>
│   ├── Meta tags
│   ├── Title
│   └── CSS link
│
├── <body>
│   ├── START SCREEN
│   │   ├── Title
│   │   ├── Buttons (start, rules)
│   │   ├── High score
│   │   └── Credits
│   │
│   ├── GAME SCREEN
│   │   ├── Poker Table
│   │   │   ├── Dealer Section
│   │   │   ├── Pot Section
│   │   │   └── Player Section
│   │   └── Game Controls
│   │       ├── Hand Info
│   │       ├── Betting Buttons
│   │       └── Deal Button
│   │
│   ├── END SCREEN
│   │   ├── Title
│   │   ├── Message
│   │   ├── Statistics
│   │   └── Buttons (play again, quit)
│   │
│   ├── INSTRUCTIONS OVERLAY
│   │   ├── Close button
│   │   ├── How to play
│   │   ├── Hand rankings
│   │   └── Betting rules
│   │
│   └── JavaScript link
```

---

## 🏷️ ID vs Class Reference

### IDs (Unique, for JavaScript):
- `#start-screen`, `#game-screen`, `#end-screen`
- `#start-btn`, `#fold-btn`, `#call-btn`
- `#dealer-hand`, `#player-hand`
- `#pot-amount`, `#player-chip-amount`
- `#game-message`, `#hand-name`

### Classes (Reusable, for CSS):
- `.screen` - All three main screens
- `.btn` - All buttons
- `.btn-primary`, `.btn-secondary` - Button styles
- `.card-hand` - Both player and dealer hands
- `.chip-count` - Both chip displays
- `.hidden` - Hide elements

---

## 🎯 Testing Your HTML

**Open your file in a browser:**

1. Right-click `index.html`
2. Choose "Open with Browser" or double-click
3. You should see plain text (no styling yet!)

**What you should see:**
- Start screen with title and buttons
- Game screen with labels (no poker table look yet)
- End screen with stats
- Everything is visible (we'll hide screens with CSS)

**What you should NOT see:**
- Pretty colors (CSS adds those)
- Poker table (CSS creates that)
- Cards (JavaScript creates those)
- Working buttons (JavaScript handles that)

**This is normal!** HTML is just the skeleton. CSS will make it pretty!

---

## ✅ Lesson Checklist

**Before moving to Lesson 4.4, verify:**

- [ ] Created `index.html` file
- [ ] HTML5 boilerplate added
- [ ] Start screen complete
- [ ] Game screen complete (dealer, pot, player sections)
- [ ] End screen complete
- [ ] Instructions overlay added
- [ ] All IDs are unique
- [ ] Proper indentation throughout
- [ ] Comments added for clarity
- [ ] HTML validates (no errors)
- [ ] File opens in browser (even if ugly!)
- [ ] All elements visible (even if unstyled)

---

## 🎓 Key Takeaways

1. **HTML is structure** - It defines what elements exist
2. **Semantic HTML** - Use `<section>`, `<header>`, etc. (meaningful tags)
3. **IDs are unique** - Each element gets one ID max
4. **Classes are reusable** - Multiple elements can share classes
5. **Comments are essential** - Help organize and explain code
6. **Validation matters** - Catch errors early
7. **Separation of concerns** - HTML (structure), CSS (style), JS (behavior)

---

## 🚀 What's Next?

**Lesson 4.4: CSS Styling for Poker**

Now that you have the structure, you'll:
- Create a beautiful green poker table
- Style all buttons and text
- Design realistic playing cards
- Add colors and spacing
- Make it look professional!

**Get excited!** Your poker game is about to look AMAZING! 🎨✨

---

## 💡 Pro Tips

**From Professional Developers:**

1. **"Indent consistently!"** - Makes code readable (2 or 4 spaces)
2. **"Use semantic HTML!"** - `<section>` is better than `<div>` when it's a section
3. **"ID for JavaScript, Class for CSS!"** - General rule
4. **"Validate often!"** - Catch mistakes early
5. **"Comment generously!"** - Future you will be grateful

**Remember:** Good HTML makes CSS and JavaScript easier! Time spent organizing now pays off later. 🏗️🃏
