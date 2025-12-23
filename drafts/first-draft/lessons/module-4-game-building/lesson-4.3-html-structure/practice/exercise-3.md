# Exercise 3: Build Your Own Variation 🎨

**Goal**: Apply HTML structure knowledge by creating a variation of the poker game or building a different card game.

**Time**: 60-90 minutes

---

## 🎯 Your Mission

Choose ONE of these challenges:

**Option A**: Create a variation of the poker game (different rules, theme, or features)

**Option B**: Build a different card game (Blackjack, Go Fish, War, etc.)

**Option C**: Create a non-card game with similar structure (dice game, number guessing, etc.)

---

## 🎮 Option A: Poker Variation

**Modify your poker game to create a unique version!**

### Variation Ideas:

#### 1. **Wild Card Poker**
- Add a "wild card" section
- One random card becomes wild each round
- Update HTML to display the wild card

**HTML additions needed:**
```html
<div class="wild-card-display">
    <h3>Wild Card This Round:</h3>
    <div id="wild-card" class="card">
        <!-- JavaScript will fill this -->
    </div>
</div>
```

#### 2. **Tournament Mode**
- Add tournament bracket display
- Track multiple rounds
- Show opponent progression

**HTML additions needed:**
```html
<section class="tournament-bracket">
    <h2>Tournament Progress</h2>
    <div class="bracket">
        <div class="round" id="round-1">Round 1</div>
        <div class="round" id="round-2">Round 2</div>
        <div class="round" id="finals">Finals</div>
    </div>
</section>
```

#### 3. **Themed Poker (e.g., Space Poker, Pirate Poker)**
- Change all text to match theme
- Add theme-specific elements
- Use themed emoji/symbols

**Example: Space Poker**
```html
<h1 class="game-title">
    🚀 Galactic Poker 🛸
</h1>
<p class="tagline">Bet Your Space Credits!</p>

<div class="chip-count">
    <span class="chip-icon">🌟</span>
    <span id="player-chip-amount">1000</span>
    <span class="chip-label">Star Credits</span>
</div>
```

---

### 📝 Your Plan: Poker Variation

**Fill this out if you chose Option A:**

**My variation name:** ___________________________________

**Theme/concept:** ___________________________________

**What makes it different from regular poker?**
1. ___________________________________
2. ___________________________________
3. ___________________________________

**New HTML elements I need to add:**
1. ___________________________________
2. ___________________________________
3. ___________________________________

**Elements I need to modify:**
1. ___________________________________
2. ___________________________________
3. ___________________________________

**Sketch your new layout:**
```
[Draw a simple wireframe here]
```

---

## 🃏 Option B: Different Card Game

**Build HTML structure for a completely different card game!**

### Game Suggestions:

#### 1. **Blackjack (21)**

**Screens needed:**
- Start screen
- Game screen (dealer vs player)
- End screen

**Key elements:**
```html
<!-- Dealer Section -->
<section class="dealer-section">
    <h2>Dealer</h2>
    <div id="dealer-score" class="score">Score: <span id="dealer-score-value">0</span></div>
    <div id="dealer-hand" class="card-hand"></div>
</section>

<!-- Player Section -->
<section class="player-section">
    <h2>Player</h2>
    <div id="player-score" class="score">Score: <span id="player-score-value">0</span></div>
    <div id="player-hand" class="card-hand"></div>
</section>

<!-- Controls -->
<div class="game-controls">
    <button id="hit-btn" class="btn">Hit</button>
    <button id="stand-btn" class="btn">Stand</button>
    <button id="double-btn" class="btn">Double Down</button>
</div>
```

#### 2. **Go Fish**

**Screens needed:**
- Start screen (choose # of players)
- Game screen (your hand + opponents)
- End screen (who has most pairs)

**Key elements:**
```html
<!-- Player Hand -->
<section class="player-hand-section">
    <h2>Your Hand</h2>
    <div id="player-hand" class="card-hand"></div>
    <p>Pairs collected: <span id="player-pairs">0</span></p>
</section>

<!-- Opponent Hands -->
<section class="opponents-section">
    <div class="opponent" id="opponent-1">
        <h3>Opponent 1</h3>
        <p>Cards: <span id="opponent-1-cards">5</span></p>
        <p>Pairs: <span id="opponent-1-pairs">0</span></p>
    </div>
    <!-- More opponents... -->
</section>

<!-- Ask Controls -->
<div class="ask-controls">
    <label for="card-select">Ask for rank:</label>
    <select id="card-select">
        <option value="A">Ace</option>
        <option value="2">2</option>
        <!-- ... all ranks ... -->
    </select>
    <button id="ask-btn" class="btn">Ask!</button>
</div>
```

#### 3. **War (Card Battle)**

**Screens needed:**
- Start screen
- Battle screen (cards face off)
- End screen (winner declared)

**Key elements:**
```html
<!-- Battle Area -->
<div class="battle-area">
    <div class="player-1-side">
        <h2>Player 1</h2>
        <div id="player-1-card" class="battle-card"></div>
        <p>Cards left: <span id="player-1-deck">26</span></p>
    </div>
    
    <div class="vs-section">
        <h1>VS</h1>
        <div id="battle-message">Click "Battle!" to start</div>
    </div>
    
    <div class="player-2-side">
        <h2>Player 2</h2>
        <div id="player-2-card" class="battle-card"></div>
        <p>Cards left: <span id="player-2-deck">26</span></p>
    </div>
</div>

<!-- Controls -->
<button id="battle-btn" class="btn btn-primary">Battle!</button>
```

---

### 📝 Your Plan: Different Card Game

**Fill this out if you chose Option B:**

**Game I'm building:** ___________________________________

**Number of screens:** _______
1. ___________________________________
2. ___________________________________
3. ___________________________________

**Key game elements:**
1. ___________________________________
2. ___________________________________
3. ___________________________________

**Buttons I need:**
1. ___________________________________
2. ___________________________________
3. ___________________________________

**Dynamic values (JavaScript will update):**
1. ___________________________________
2. ___________________________________
3. ___________________________________

**Sketch your layout:**
```
[Draw a simple wireframe here]
```

---

## 🎲 Option C: Non-Card Game

**Build HTML for a different type of game!**

### Game Suggestions:

#### 1. **Dice Roller Game**
- Roll dice, try to get certain combinations
- Similar to Yahtzee

**Key elements:**
```html
<div class="dice-container">
    <div class="die" id="die-1">
        <span id="die-1-value">?</span>
    </div>
    <!-- 5 dice total -->
</div>

<div class="scorecard">
    <div class="score-row">
        <span class="score-label">Three of a Kind:</span>
        <span id="three-kind-score">0</span>
    </div>
    <!-- More scoring categories -->
</div>
```

#### 2. **Number Guessing Game**
- Guess a number between 1-100
- Get hints (higher/lower)

**Key elements:**
```html
<div class="guess-area">
    <h2>Guess a number between 1 and 100</h2>
    <input type="number" id="guess-input" min="1" max="100">
    <button id="guess-btn" class="btn">Submit Guess</button>
</div>

<div class="feedback">
    <p id="hint-message">Make your first guess!</p>
    <p>Guesses remaining: <span id="guesses-left">10</span></p>
</div>

<div class="guess-history">
    <h3>Previous Guesses:</h3>
    <ul id="guess-list"></ul>
</div>
```

#### 3. **Rock Paper Scissors (Best of 5)**
- Player vs Computer
- Track wins across multiple rounds

**Key elements:**
```html
<div class="choice-section">
    <button id="rock-btn" class="choice-btn">✊ Rock</button>
    <button id="paper-btn" class="choice-btn">✋ Paper</button>
    <button id="scissors-btn" class="choice-btn">✌️ Scissors</button>
</div>

<div class="match-display">
    <div class="player-choice">
        <h3>You chose:</h3>
        <div id="player-choice-display">?</div>
    </div>
    <div class="vs">VS</div>
    <div class="computer-choice">
        <h3>Computer chose:</h3>
        <div id="computer-choice-display">?</div>
    </div>
</div>

<div class="score-tracker">
    <p>You: <span id="player-wins">0</span></p>
    <p>Computer: <span id="computer-wins">0</span></p>
    <p>Round: <span id="current-round">1</span> / 5</p>
</div>
```

---

### 📝 Your Plan: Non-Card Game

**Fill this out if you chose Option C:**

**Game I'm building:** ___________________________________

**Game rules (briefly):** 
___________________________________
___________________________________

**Number of screens:** _______
1. ___________________________________
2. ___________________________________
3. ___________________________________

**Main game elements:**
1. ___________________________________
2. ___________________________________
3. ___________________________________

**User inputs/controls:**
1. ___________________________________
2. ___________________________________
3. ___________________________________

**Sketch your layout:**
```
[Draw a simple wireframe here]
```

---

## 🛠️ Building Your Variation

### Step 1: Plan Your Structure

**Before you code, answer these:**

1. What screens do I need?
2. What elements are on each screen?
3. What IDs and classes will I need?
4. What values will JavaScript update?

### Step 2: Create the File

1. Create a new folder: `[your-game-name]`
2. Create `index.html` inside it
3. Start with HTML5 boilerplate

### Step 3: Build Screen by Screen

**For each screen:**
- Add main container `<div>`
- Add sections for logical groups
- Add all elements (buttons, displays, etc.)
- Add IDs for JavaScript access
- Add classes for CSS styling

### Step 4: Test As You Go

- Save after each screen
- Refresh browser to check
- Verify all elements appear
- Check for typos

### Step 5: Validate Your HTML

- Use https://validator.w3.org/
- Fix any errors
- Make sure all tags close properly

---

## ✅ Completion Checklist

**Before you submit, verify:**

- [ ] Planning document filled out completely
- [ ] `index.html` file created with proper boilerplate
- [ ] All screens created and structured
- [ ] All buttons have unique IDs
- [ ] All dynamic values have IDs
- [ ] Semantic HTML used where appropriate (`<section>`, `<header>`, etc.)
- [ ] Comments added to explain sections
- [ ] Code properly indented
- [ ] HTML validates with no errors
- [ ] File opens in browser successfully
- [ ] All elements visible (even if unstyled)

---

## 🎨 Documentation

**Create a simple README.md file for your game:**

```markdown
# [Your Game Name]

## Description
[What is your game? How do you play?]

## Features
- Feature 1
- Feature 2
- Feature 3

## HTML Structure
- **Start Screen**: [What's on it?]
- **Game Screen**: [What's on it?]
- **End Screen**: [What's on it?]

## IDs Reference
| ID | Element | Purpose |
|----|---------|---------|
| #start-btn | Button | Starts the game |
| #... | ... | ... |

## Next Steps
- [ ] Add CSS styling (Lesson 4.4)
- [ ] Add JavaScript functionality (Lesson 4.5+)
- [ ] Test with friends/family
- [ ] Deploy online

## Creator
Created by: [Your Name]
Date: [Today's Date]
```

---

## 🌟 Challenge Extensions

**If you finish early:**

### Extension 1: Accessibility
Add `aria-label` attributes to all buttons:
```html
<button id="start-btn" class="btn" aria-label="Start new game">
    Start Game
</button>
```

### Extension 2: Multiple Themes
Create different "skins" with different content:
```html
<!-- Classic Theme -->
<div id="game-screen" class="screen theme-classic">
    ...
</div>

<!-- Space Theme -->
<div id="game-screen" class="screen theme-space">
    ...
</div>
```

### Extension 3: Mobile Optimization
Add these meta tags:
```html
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
```

---

## 🎯 Reflection Questions

1. **What was the most challenging part of creating your variation?**
   ___________________________________

2. **How is your game structure different from the poker game?**
   ___________________________________

3. **What elements did you reuse? What did you create new?**
   ___________________________________

4. **What are you most excited to style with CSS?**
   ___________________________________

5. **What JavaScript features will your game need?**
   ___________________________________

---

## 📸 Show Off Your Work!

**Take screenshots of:**
1. Your HTML code (showing structure)
2. Your browser preview (all screens)
3. Your planning document

**Share with classmates for inspiration!**

---

## 🎉 Fantastic Work!

You've applied HTML structure knowledge to create something unique!

**What you've learned:**
✅ How to plan HTML structure from scratch  
✅ Adapting existing patterns to new use cases  
✅ Making structural decisions independently  
✅ Documenting your code  
✅ Creative problem-solving with HTML  

**This is the foundation for your complete game!** 🚀🎮

---

**Teacher/Parent Sign-Off:**

Student completed exercise: _________________ Date: _______

Game created: ___________________________________________

Notes: _________________________________________________
