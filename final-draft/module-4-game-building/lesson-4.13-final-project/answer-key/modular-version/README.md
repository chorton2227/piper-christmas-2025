# Modular Texas Hold'em Poker Game

This is a fully modularized version of the complete Texas Hold'em poker game. The code has been extracted from a single HTML file into separate, focused modules using the IIFE (Immediately Invoked Function Expression) pattern.

## File Structure

```
modular-version/
├── index.html              # Main HTML structure
├── css/
│   └── styles.css         # All game styling
├── js/
│   ├── game.js           # Main game logic and flow
│   └── modules/
│       ├── deck.js       # Deck management (create, shuffle, suit symbols)
│       ├── handEvaluator.js  # Hand evaluation and comparison
│       ├── ai.js         # AI opponent decision making
│       └── ui.js         # User interface updates
└── sounds/               # Sound effects directory (empty, ready for audio)
```

## Module Architecture

### 1. **deck.js** - Deck Module
Handles all card deck operations:
- `createDeck()` - Creates a standard 52-card deck
- `shuffleDeck(deck)` - Shuffles deck using Fisher-Yates algorithm
- `getSuitSymbol(suit)` - Returns Unicode suit symbols (♥♦♣♠)

**Public API:** `DeckModule`

### 2. **handEvaluator.js** - Hand Evaluator Module
Evaluates and compares poker hands:
- `evaluateHand(cards)` - Evaluates a 5-card hand
- `findBestHand(sevenCards)` - Finds best 5-card combo from 7 cards
- `compareHands(hand1, hand2)` - Compares two hands

**Evaluates all poker hands:**
- Royal Flush, Straight Flush, Four of a Kind
- Full House, Flush, Straight
- Three of a Kind, Two Pair, One Pair, High Card

**Public API:** `HandEvaluator`

### 3. **ai.js** - AI Module
Manages AI opponent decision making:
- `getHandStrength(player, communityCards)` - Calculates hand strength (0-1)
- `makeAIDecision(player, gameState, config)` - Returns AI action

**Features:**
- Difficulty levels (easy, medium, hard)
- Pot odds calculation
- Bluffing behavior
- Position-aware betting

**Public API:** `AIModule`

### 4. **ui.js** - UI Module
Handles all user interface updates:
- `updateUI(gameState)` - Updates entire UI
- `toggleRaiseControls(gameState)` - Shows/hides raise controls
- `announceWinner(player, handName, isSplit)` - Winner animation
- `showSettings()` / `hideSettings()` - Settings modal

**Public API:** `UIModule`

### 5. **game.js** - Main Game Logic
Core game state and flow management:
- Game initialization and hand setup
- Betting round management
- Phase advancement (pre-flop → flop → turn → river → showdown)
- Player action handling
- Win condition checking

**Global functions for HTML onclick handlers:**
- `playerAction(action)`
- `toggleRaiseControls()`
- `showSettings()`
- `startNewGame()`

## Module Dependencies

The modules must be loaded in this specific order (as shown in index.html):

```html
<script src="js/modules/deck.js"></script>           <!-- No dependencies -->
<script src="js/modules/handEvaluator.js"></script>  <!-- No dependencies -->
<script src="js/modules/ai.js"></script>             <!-- Depends on: HandEvaluator -->
<script src="js/modules/ui.js"></script>             <!-- Depends on: DeckModule -->
<script src="js/game.js"></script>                   <!-- Depends on: All modules -->
```

## IIFE Module Pattern

All modules use the IIFE pattern for encapsulation:

```javascript
const ModuleName = (function() {
    'use strict';
    
    // Private variables and functions
    function privateFunction() { ... }
    
    // Public API
    return {
        publicFunction: publicFunction,
        anotherPublic: anotherPublic
    };
})();
```

**Benefits:**
- Encapsulation - private implementation details
- No global namespace pollution
- Clear public API
- Immediately executed and ready to use

## All Features Preserved

This modular version maintains 100% functionality from the original:

✅ **Complete Deck Management** (Lessons 4.1-4.2)
- 52-card deck creation and shuffling
- Card display with suit symbols

✅ **Hand Evaluation** (Lessons 4.3-4.4)
- All 10 poker hand rankings
- Best 5-card hand from 7 cards
- Proper hand comparison

✅ **Game State** (Lesson 4.5)
- Multi-player state tracking
- Pot management
- Phase progression

✅ **Betting System** (Lesson 4.6)
- Blinds (small/big)
- Call, raise, fold, check, all-in
- Bet tracking per player

✅ **AI Opponents** (Lesson 4.7)
- 3 difficulty levels
- Pot odds calculation
- Strategic bluffing

✅ **Game Flow** (Lesson 4.8)
- Pre-flop → Flop → Turn → River → Showdown
- Automatic phase advancement
- Multi-hand support

✅ **UI Controls** (Lesson 4.9)
- Interactive buttons
- Raise amount input
- Action log

✅ **Showdown Logic** (Lesson 4.10)
- Winner determination
- Split pot handling
- Hand revelation

✅ **Settings** (Lesson 4.11)
- Player count (2-5 AI opponents)
- Starting chips ($500-$5000)
- Blind levels ($5-$50)
- AI difficulty

✅ **Polish** (Lesson 4.12)
- Animations (card dealing, winner announcement)
- Professional poker table design
- Dealer button
- Visual feedback

✅ **Bug Fixes** (All 3 critical bugs fixed)
- #1: All-in logic with proper bet tracking
- #2: Betting round completion detection
- #3: New hand initialization and dealer rotation

## How to Use

1. **Open `index.html`** in a web browser
2. **Configure settings** (players, chips, blinds, difficulty)
3. **Play** using the action buttons
4. **Test** all features work identically to the original

## Code Quality

- **Modular:** Each module has a single, well-defined responsibility
- **Documented:** JSDoc comments on all public functions
- **Maintainable:** Easy to find and modify specific features
- **Testable:** Modules can be tested independently
- **No errors:** All files pass syntax validation

## Learning Outcomes

Students using this modular version learn:

1. **Module patterns** - IIFE for encapsulation
2. **Separation of concerns** - Each module has one job
3. **Dependency management** - Loading order matters
4. **Public vs private** - API design
5. **Code organization** - File structure for larger projects
6. **Refactoring** - How to extract modules from monolithic code

## Extension Ideas

- Convert to ES6 modules (`import`/`export`)
- Add TypeScript type definitions
- Implement proper event system (pub/sub)
- Add unit tests for each module
- Create a build process (webpack/rollup)
- Add sound effects in the sounds/ directory
- Implement server-side multiplayer

---

**Created:** December 25, 2025  
**Original:** complete-poker-game.html  
**Module Pattern:** IIFE (Immediately Invoked Function Expression)  
**Total Lines:** ~1300 (original) → ~1200 (modular, with better organization)
