# Exercise 1: Build Your HTML Foundation 🏗️

**Goal**: Create the complete HTML structure for your poker game, understanding each element's purpose.

**Time**: 45-60 minutes

---

## 🎯 Your Mission

Build the `index.html` file for your poker game with all three screens:
1. Start Screen
2. Game Screen  
3. End Screen

**Important**: Follow the instructions EXACTLY. HTML is very particular about spelling and syntax!

---

## 📝 Step-by-Step Instructions

### Part 1: Setup (5 minutes)

1. **Create a new folder** called `poker-game` on your computer
2. **Open VS Code** (or your code editor)
3. **Create a new file** called `index.html` inside the `poker-game` folder
4. **Save the file** (even though it's empty)

**✅ Checkpoint**: You have an empty `index.html` file in a `poker-game` folder

---

### Part 2: HTML Boilerplate (10 minutes)

**Type this exactly** (or copy from lesson README):

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Poker Showdown - Beat the Dealer!</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <!-- Your game code will go here -->
    
    <script src="script.js"></script>
</body>
</html>
```

**Customize it:**
- Change the `<title>` to your game's name
- Keep everything else the same!

**Test it:**
1. Save the file
2. Double-click `index.html` to open in browser
3. Check the browser tab shows your title

**✅ Checkpoint**: Browser tab shows your custom title

---

### Part 3: Start Screen (15 minutes)

**Add this inside the `<body>` tag** (between `<body>` and the comment):

```html
<!-- ========== START SCREEN ========== -->
<div id="start-screen" class="screen">
    <h1 class="game-title">
        <span class="card-symbol">♠</span>
        [YOUR GAME NAME HERE]
        <span class="card-symbol">♥</span>
    </h1>
    
    <p class="tagline">[Your catchy tagline here!]</p>
    
    <div class="button-container">
        <button id="start-btn" class="btn btn-primary">Start Game</button>
        <button id="rules-btn" class="btn btn-secondary">How to Play</button>
    </div>
    
    <div class="high-score">
        <p>High Score: <span id="high-score-value">0</span> chips</p>
    </div>
    
    <footer class="credits">
        <p>Created by: <span id="creator-name">[Your Name]</span></p>
    </footer>
</div>
```

**Personalize it:**
- Replace `[YOUR GAME NAME HERE]` with your game name
- Replace `[Your catchy tagline here!]` with your tagline
- Replace `[Your Name]` with your actual name

**Challenge**: Try different card symbols:
- ♠ (spade) = `&spades;` or `♠`
- ♥ (heart) = `&hearts;` or `♥`
- ♦ (diamond) = `&diams;` or `♦`
- ♣ (club) = `&clubs;` or `♣`

**Test it:**
- Save and refresh browser
- You should see your title, tagline, buttons, and name

**✅ Checkpoint**: Start screen displays with your custom text

---

### Part 4: Game Screen (20 minutes)

**Add this after the start screen:**

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

**Customization options:**
- Change starting chip amounts (both players start at `1000`)
- Change raise button amounts (currently +10, +25, +50)
- Change the chip icon emoji 💰 (try: 🪙 💵 💎)
- Change "You" to your name or nickname

**Test it:**
- Save and refresh browser
- You should see game controls, chip counts, and buttons
- Everything will be in a list (no styling yet!)

**✅ Checkpoint**: Game screen displays with all sections

---

### Part 5: End Screen (15 minutes)

**Add this after the game screen:**

```html
<!-- ========== END SCREEN ========== -->
<div id="end-screen" class="screen hidden">
    
    <div class="end-content">
        
        <!-- End Title (JavaScript will change this) -->
        <h1 id="end-title" class="end-title">Game Over</h1>
        
        <!-- End Message (JavaScript will set this) -->
        <p id="end-message" class="end-message">
            Thanks for playing!
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
            <button id="quit-btn" class="btn btn-secondary">Quit to Menu</button>
        </div>
        
    </div>
    
</div>
```

**Optional additions:**
- Add more stats (Biggest Win, Longest Streak, etc.)
- Change button text
- Add emoji to titles

**Test it:**
- Save and refresh browser
- Scroll down to see end screen
- All stats show "0" (JavaScript will update these)

**✅ Checkpoint**: End screen displays with statistics and buttons

---

### Part 6: Instructions Overlay (BONUS - 10 minutes)

**Add this before the closing `</body>` tag:**

```html
<!-- ========== INSTRUCTIONS OVERLAY ========== -->
<div id="instructions-overlay" class="overlay hidden">
    <div class="overlay-content">
        
        <button id="close-instructions" class="btn-close" aria-label="Close">×</button>
        
        <h2>How to Play</h2>
        
        <div class="instructions">
            
            <section class="instruction-section">
                <h3>🎯 Objective</h3>
                <p>Win all the dealer's chips! Beat the dealer's hand to win the pot.</p>
            </section>
            
            <section class="instruction-section">
                <h3>🎮 Game Flow</h3>
                <ol>
                    <li>Both players ante 10 chips to the pot</li>
                    <li>You receive 5 cards (dealer's cards stay hidden)</li>
                    <li>Choose your action: Fold, Call, or Raise</li>
                    <li>Dealer responds to your bet</li>
                    <li>Cards are revealed - best hand wins!</li>
                </ol>
            </section>
            
            <section class="instruction-section">
                <h3>🃏 Hand Rankings (Best to Worst)</h3>
                <ol class="hand-rankings">
                    <li><strong>Royal Flush</strong> - A♠ K♠ Q♠ J♠ 10♠ (same suit)</li>
                    <li><strong>Straight Flush</strong> - 5 cards in a row, same suit</li>
                    <li><strong>Four of a Kind</strong> - 4 cards of same rank</li>
                    <li><strong>Full House</strong> - 3 of a kind + a pair</li>
                    <li><strong>Flush</strong> - 5 cards of same suit</li>
                    <li><strong>Straight</strong> - 5 cards in a row (any suit)</li>
                    <li><strong>Three of a Kind</strong> - 3 cards of same rank</li>
                    <li><strong>Two Pair</strong> - 2 different pairs</li>
                    <li><strong>One Pair</strong> - 2 cards of same rank</li>
                    <li><strong>High Card</strong> - When nothing else matches</li>
                </ol>
            </section>
            
            <section class="instruction-section">
                <h3>💰 Betting Options</h3>
                <ul>
                    <li><strong>Fold:</strong> Give up this hand (lose your ante)</li>
                    <li><strong>Call:</strong> Match the current bet and see cards</li>
                    <li><strong>Raise:</strong> Bet more chips (+10, +25, or +50)</li>
                </ul>
            </section>
            
        </div>
        
    </div>
</div>
```

**Customization:**
- Change emoji in section titles
- Edit game flow steps to match your rules
- Add or remove betting options

**✅ Checkpoint**: Instructions overlay added

---

## 🔍 Final Validation

### Check Your Work:

1. **Open in browser** - Does everything display?
2. **Scroll through page** - Do you see all 3 screens + instructions?
3. **Check the code** - Any red squiggly lines in VS Code?

### Use HTML Validator:

1. Go to: https://validator.w3.org/#validate_by_input
2. Copy ALL your HTML code
3. Paste it in the validator
4. Click "Check"
5. Fix any errors shown

**Common errors:**
- Missing closing tags (every `<div>` needs `</div>`)
- Typos in attribute names (`id=` not `idd=`)
- Missing quotes around attribute values (`id="start-btn"` not `id=start-btn`)
- Duplicate IDs (each ID must be unique!)

---

## ✅ Completion Checklist

**Before you move on, verify:**

- [ ] `index.html` file created and saved
- [ ] HTML5 boilerplate added (DOCTYPE, head, body)
- [ ] Start screen complete with personalized content
- [ ] Game screen complete (dealer, pot, player sections)
- [ ] All betting buttons added
- [ ] End screen complete with stats
- [ ] Instructions overlay added (bonus)
- [ ] All IDs are unique (no duplicates)
- [ ] Proper indentation (code is readable)
- [ ] HTML validates with no errors
- [ ] File opens in browser successfully
- [ ] All three screens visible (even if unstyled)

---

## 🎯 Challenge Extensions

**If you finish early, try these:**

### Challenge 1: Add More Stats
Add these to the end screen:
- Biggest pot won
- Longest winning streak
- Total chips earned
- Best hand achieved

### Challenge 2: Add Sound Controls
Add these buttons to start screen:
```html
<div class="sound-controls">
    <button id="sound-toggle" class="btn btn-icon">🔊</button>
    <button id="music-toggle" class="btn btn-icon">🎵</button>
</div>
```

### Challenge 3: Add Difficulty Selection
Add this to start screen:
```html
<div class="difficulty-selection">
    <label for="difficulty">Difficulty:</label>
    <select id="difficulty" name="difficulty">
        <option value="easy">Easy (Dealer plays safe)</option>
        <option value="medium" selected>Medium (Balanced)</option>
        <option value="hard">Hard (Dealer is aggressive)</option>
    </select>
</div>
```

### Challenge 4: Add Profile Section
Create a mini "player profile" on start screen:
```html
<div class="player-profile">
    <label for="player-name">Enter Your Name:</label>
    <input type="text" id="player-name-input" placeholder="Player Name">
    <label for="avatar-select">Choose Avatar:</label>
    <select id="avatar-select">
        <option value="🤠">🤠 Cowboy</option>
        <option value="🎩">🎩 Gentleman</option>
        <option value="👑">👑 Royalty</option>
        <option value="🦈">🦈 Card Shark</option>
    </select>
</div>
```

---

## 📸 Screenshot Your Progress

**Take a screenshot of:**
1. Your HTML code in VS Code (showing structure)
2. Your browser showing all visible elements

**Share with your teacher/parent to show completion!**

---

## 💭 Reflection Questions

**Answer these in your notebook:**

1. What's the difference between an `id` and a `class`?
2. Why do we use semantic HTML like `<section>` instead of just `<div>`?
3. Which screen was hardest to build? Why?
4. What elements will JavaScript need to update dynamically?
5. What are you most excited to style with CSS?

---

## 🎉 Congratulations!

You've built the complete HTML structure for a poker game! 

**What you've learned:**
✅ HTML5 boilerplate structure  
✅ Semantic HTML elements  
✅ IDs vs classes  
✅ Forms and buttons  
✅ Comments and code organization  
✅ HTML validation  

**Next up:** Lesson 4.4 - CSS Styling! Time to make it look AMAZING! 🎨✨

---

**Teacher/Parent Sign-Off:**

Student completed exercise: _________________ Date: _______

Notes: _________________________________________________
