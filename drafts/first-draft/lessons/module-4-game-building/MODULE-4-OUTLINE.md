# Module 4: Building a Poker Game 🃏

## Overview
Module 4 brings together all HTML, CSS, and JavaScript skills to build a complete, playable poker game. Students will learn card game mechanics, hand evaluation logic, computer AI, and create a polished gaming experience.

**Prerequisites**: Completion of Modules 1-3 (HTML, CSS, JavaScript fundamentals)

**Total Lessons**: 15 lessons
**Estimated Time**: 15-20 hours (2-3 weeks at 1-2 lessons per day)

---

## Learning Objectives

By the end of Module 4, students will be able to:
- Understand basic poker rules and hand rankings
- Build a complete card game with deck management
- Create card visuals with HTML/CSS
- Implement complex game logic (hand evaluation, betting)
- Build computer AI for dealer behavior
- Handle game state and player turns
- Create professional-looking game UI
- Add sound effects and animations
- Deploy a playable poker game online

---

## Module Structure

### 🎴 Phase 1: Understanding & Planning (Lessons 4.1-4.2)
Focus: Learn poker, design the game

### 🎨 Phase 2: Visual Foundation (Lessons 4.3-4.4)
Focus: HTML structure, CSS styling for poker table

### 🃏 Phase 3: Card System (Lessons 4.5-4.7)
Focus: Deck creation, dealing, hand evaluation

### 🎮 Phase 4: Game Mechanics (Lessons 4.8-4.11)
Focus: Game flow, betting, AI, win conditions

### ✨ Phase 5: Polish & Complete (Lessons 4.12-4.15)
Focus: Sounds, animations, instructions, testing

---

## What Type of Poker?

We'll build a **simplified Texas Hold'em style game**:
- Player vs Computer Dealer
- 5-card hands
- Betting with chips
- All standard poker hands (high card to royal flush)
- Simple dealer AI
- Professional poker table aesthetic

**Why This Game?**
- Teaches complex logic and algorithms
- Real-world card game mechanics
- Impressive portfolio piece
- Fun to play and share
- Challenging but achievable

---

## Detailed Lesson Breakdown

### Lesson 4.1: Understanding Poker
**Duration**: 45-60 minutes  
**Type**: Educational + Activity

**Learning Objectives**:
- Learn basic poker rules
- Understand card deck structure
- Memorize hand rankings
- Know poker terminology
- Understand game flow

**Key Concepts**:
- 52-card deck (4 suits × 13 ranks)
- Poker hand rankings (10 types from high card to royal flush)
- Game phases (deal, betting, showdown)
- Poker terms (ante, call, raise, fold, pot, etc.)

**Topics Covered**:

**Card Deck Basics:**
- 4 Suits: Hearts ♥, Diamonds ♦, Clubs ♣, Spades ♠
- 13 Ranks per suit: A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K
- Total: 52 cards

**Poker Hand Rankings (Lowest to Highest):**
1. **High Card** - No pairs, highest card wins
2. **One Pair** - Two cards of same rank
3. **Two Pair** - Two different pairs
4. **Three of a Kind** - Three cards of same rank
5. **Straight** - Five cards in sequence
6. **Flush** - Five cards of same suit
7. **Full House** - Three of a kind + one pair
8. **Four of a Kind** - Four cards of same rank
9. **Straight Flush** - Straight that's all same suit
10. **Royal Flush** - A-K-Q-J-10 all same suit (best hand!)

**Simplified Game Flow:**
1. Both players ante (starting bet)
2. Deal 5 cards to each player
3. Player sees their cards, dealer's cards hidden
4. Player can: Fold (quit), Call (match), Raise (bet more)
5. Dealer reveals cards
6. Compare hands, best hand wins pot
7. New round or game over

**Activities**:
1. Print/draw cards on paper
2. Practice identifying hands
3. Play a round manually with parent
4. Quiz on hand rankings
5. Discuss strategy basics

**Deliverables**:
- Hand ranking reference sheet
- Notes on poker rules
- Understanding of game flow
- Excitement to build it!

---

### Lesson 4.2: Planning the Poker Game
**Duration**: 60 minutes  
**Type**: Design and Planning

**Learning Objectives**:
- Define exact rules for our version
- Plan all required features
- Design UI layout
- List technical requirements
- Create development roadmap

**Game Specifications**:

**Our Version Rules:**
- Player starts with 1000 chips
- Ante: 10 chips per hand
- Dealer starts with 1000 chips
- 5-card hands (no draws/discards for simplicity)
- Betting: Call, Raise (+10, +25, +50), Fold
- Dealer AI: Simple logic based on hand strength
- Win condition: Dealer runs out of chips (< 10)
- Lose condition: Player runs out of chips (< 10)

**Required Features (MVP):**
1. 52-card deck with shuffle
2. Deal 5 cards to player and dealer
3. Display player's cards (face up)
4. Hide dealer's cards until showdown
5. Betting buttons (call, raise, fold)
6. Hand evaluation for both players
7. Determine winner, award chips
8. New hand button
9. Chip counter display
10. Win/lose game over screens

**Nice-to-Have Features:**
1. Sound effects (card deal, chips, win/lose)
2. Card dealing animation
3. Card flip animation for dealer reveal
4. Chip stack visuals
5. Hand name display ("You have a Flush!")
6. Dealer thinking delay (feels more real)
7. Statistics (hands won, biggest win)
8. Instructions/rules overlay
9. Difficulty levels (dealer AI skill)
10. High score (most chips earned)

**UI Elements Needed:**

**Start Screen:**
- Game title "Texas Hold'em Poker"
- Start Game button
- Instructions button
- High score display

**Game Screen:**
- Poker table (green felt)
- Dealer's card area (top)
- Player's card area (bottom)
- Community pot display (center)
- Player chip count
- Dealer chip count
- Current bet display
- Betting buttons (call, raise amounts, fold)
- Deal new hand button
- Message area (game status)

**End Screen:**
- Win/Lose message
- Final chip count
- Hands won
- Play again button

**Activities**:
1. Write complete game rules document
2. Sketch UI on paper (start, game, end screens)
3. List all data/variables needed
4. List all functions needed
5. Create feature priority list
6. Get parent feedback on plan

**Deliverables**:
- Complete game design document
- UI wireframes (3 screens)
- Technical requirements list
- Feature roadmap

---

### Lesson 4.3: HTML Structure for Poker
**Duration**: 60 minutes  
**Type**: HTML Development

**Learning Objectives**:
- Build complete HTML structure
- Create semantic markup for poker table
- Set up all game screens
- Add IDs and classes for JavaScript

**HTML Structure:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Texas Hold'em Poker</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Start Screen -->
    <div id="start-screen" class="screen">
        <h1>♠ Texas Hold'em Poker ♥</h1>
        <p>Player vs Dealer</p>
        <button id="start-btn" class="btn-large">Start Game</button>
        <button id="rules-btn" class="btn-small">How to Play</button>
        <p>High Score: <span id="high-score">0</span> chips</p>
    </div>

    <!-- Game Screen -->
    <div id="game-screen" class="screen hidden">
        <!-- Poker Table -->
        <div class="poker-table">
            <!-- Dealer Area -->
            <div class="dealer-area">
                <h2>Dealer</h2>
                <div id="dealer-chips" class="chip-count">💰 1000</div>
                <div id="dealer-hand" class="card-hand"></div>
            </div>

            <!-- Pot Area -->
            <div class="pot-area">
                <div id="pot-amount" class="pot">Pot: 0</div>
                <div id="game-message" class="message">Place your bet</div>
            </div>

            <!-- Player Area -->
            <div class="player-area">
                <div id="player-hand" class="card-hand"></div>
                <div id="player-chips" class="chip-count">💰 1000</div>
                <h2>You</h2>
            </div>
        </div>

        <!-- Controls -->
        <div class="controls">
            <div id="hand-info" class="hand-info"></div>
            <div class="betting-controls">
                <button id="fold-btn" class="btn">Fold</button>
                <button id="call-btn" class="btn">Call</button>
                <button id="raise-10-btn" class="btn">Raise +10</button>
                <button id="raise-25-btn" class="btn">Raise +25</button>
                <button id="raise-50-btn" class="btn">Raise +50</button>
            </div>
            <button id="deal-btn" class="btn-large hidden">Deal New Hand</button>
        </div>
    </div>

    <!-- End Screen -->
    <div id="end-screen" class="screen hidden">
        <h1 id="end-title">Game Over</h1>
        <p id="end-message"></p>
        <div class="stats">
            <p>Final Chips: <span id="final-chips">0</span></p>
            <p>Hands Won: <span id="hands-won">0</span></p>
        </div>
        <button id="play-again-btn" class="btn-large">Play Again</button>
    </div>

    <!-- Instructions Overlay -->
    <div id="instructions-overlay" class="overlay hidden">
        <div class="overlay-content">
            <h2>How to Play</h2>
            <button id="close-instructions" class="btn-close">×</button>
            <div class="instructions">
                <!-- Will add detailed instructions here -->
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

**Activities**:
1. Create index.html with full structure
2. Add all containers and elements
3. Test that all IDs are unique
4. Ensure proper nesting
5. Add comments for clarity
6. Validate HTML

**Deliverables**:
- Complete HTML file
- All game screens included
- Proper semantic structure
- Ready for CSS styling

---

### Lesson 4.4: CSS Styling for Poker
**Duration**: 90-120 minutes  
**Type**: CSS Development

**Learning Objectives**:
- Create professional poker table design
- Style cards to look realistic
- Design responsive layout
- Add hover effects
- Create polished UI

**CSS Topics**:

**1. Poker Table Design**
```css
.poker-table {
    background: linear-gradient(135deg, #0a4d0a 0%, #1a7a1a 100%);
    border: 20px solid #8b4513;
    border-radius: 200px;
    padding: 40px;
    box-shadow: inset 0 0 50px rgba(0,0,0,0.5);
}
```

**2. Card Design**
```css
.card {
    width: 80px;
    height: 120px;
    background: white;
    border-radius: 8px;
    border: 2px solid #333;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 8px;
}

.card.face-down {
    background: linear-gradient(45deg, #1a1a2e, #16213e);
    /* Pattern or image for card back */
}

.card .rank {
    font-size: 24px;
    font-weight: bold;
}

.card .suit {
    font-size: 32px;
}

.card.hearts, .card.diamonds {
    color: #d50000; /* Red suits */
}

.card.clubs, .card.spades {
    color: #000; /* Black suits */
}
```

**3. Button Styling**
```css
.btn {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

.btn:active {
    transform: translateY(0);
}
```

**4. Animations**
```css
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

@keyframes flipCard {
    0% { transform: rotateY(0deg); }
    50% { transform: rotateY(90deg); }
    100% { transform: rotateY(0deg); }
}

.card.flipping {
    animation: flipCard 0.6s;
}
```

**Activities**:
1. Create style.css with all styles
2. Design poker table layout
3. Create card component styles
4. Style all buttons
5. Add hover effects
6. Create animations
7. Test responsive design

**Deliverables**:
- Complete CSS file
- Professional poker aesthetic
- Responsive layout
- Smooth animations

---

### Lessons 4.5-4.15 will continue with:
- Card deck creation and shuffling
- Dealing cards and displaying them
- Hand evaluation algorithms
- Game flow and betting logic
- Computer dealer AI
- Win/lose conditions
- Sound effects and polish
- Instructions screen
- Testing and debugging
- Final game completion

---

## Key Programming Concepts Learned

**Arrays and Objects:**
- Deck as array of card objects
- Hand as array of 5 cards
- Game state object

**Algorithms:**
- Fisher-Yates shuffle
- Hand ranking detection
- Comparison logic

**Functions:**
- Pure functions for hand evaluation
- Game flow control functions
- UI update functions

**Game AI:**
- Decision-making logic
- Probability-based choices
- Strategy implementation

**DOM Manipulation:**
- Dynamic card creation
- Screen transitions
- Real-time updates

---

## Module 4 Outcomes

**Technical Skills:**
- ✅ Complex JavaScript logic
- ✅ Algorithm implementation
- ✅ Game state management
- ✅ AI programming basics
- ✅ Professional UI design
- ✅ Animation and audio integration

**Soft Skills:**
- ✅ Problem decomposition
- ✅ Logical thinking
- ✅ Testing and debugging
- ✅ Patience and persistence
- ✅ Attention to detail

**Portfolio Piece:**
A complete, playable poker game that demonstrates:
- Advanced programming skills
- Game development capability
- Professional presentation
- Impressive final project

---

## What's Next: Module 5

After completing your poker game, Module 5 will teach you how to:
- Deploy your game to the internet
- Share it with friends and family
- Create a portfolio website
- Show off your game development skills!

---

**Let's build an awesome poker game!** 🃏✨
