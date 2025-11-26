# Example 3: Completed Game Design Document - "Memory Master"

This is an example of a completed game design document for a puzzle/memory game.

---

# 🎮 GAME DESIGN DOCUMENT

## Game Title
**Name:** Memory Master

**Tagline:** Match the pairs and master your memory!

---

## Overview

**Genre:** Puzzle / Memory Game

**Platform:** Web Browser (HTML/CSS/JavaScript)

**Target Player:** Kids ages 6-12, families

**Play Time:** 2-5 minutes per round

---

## Game Objective

**What is the goal?**  
Flip over cards to find matching pairs. Match all pairs in the fewest moves and fastest time possible!

**How do you win?**  
Find all matching pairs before time runs out (3 minutes).

**How do you lose?**  
Time runs out before all pairs are found.

---

## Gameplay

### Controls
- **Mouse:** Click cards to flip them over
- **No keyboard controls needed**

### Core Mechanics
12 cards (6 pairs) are laid face-down in a 4x3 grid. Player clicks a card to flip it over, revealing an image/emoji. Then clicks another card. If the two cards match, they stay flipped. If they don't match, both flip back face-down after 1 second. Continue until all pairs are matched or time runs out.

### Rules
1. Game board has 12 cards (6 pairs)
2. All cards start face-down
3. Click a card to flip it over
4. Click a second card to flip it over
5. If cards match: both stay face-up, earn points
6. If cards don't match: both flip back face-down after 1 second
7. Can only flip 2 cards at a time (can't flip while checking match)
8. Timer counts down from 3 minutes (180 seconds)
9. Win by matching all pairs before time runs out
10. Score based on: matches + time remaining + move efficiency

---

## Scoring System

**Points are earned by:**
- Each match found: +100 points
- Time bonus: Remaining seconds × 10 points
- Move efficiency: If matched in under 20 moves, +500 bonus
- Perfect game (no mismatches): +1000 bonus

**Final Score Formula:**
```
Score = (Matches × 100) + (Time Remaining × 10) + Efficiency Bonus + Perfect Bonus
```

**Example:**
- 6 matches = 600 points
- 45 seconds left = 450 points  
- 18 moves (efficient!) = 500 bonus
- No perfect (had 3 mismatches) = 0 bonus
- **Total: 1,550 points**

---

## Game Elements

### Visual Elements
- 12 cards arranged in 4x3 grid
- Cards have front (face-down, all identical) and back (unique emoji/image)
- Flip animation when clicking card
- Glow/highlight effect on matched pairs
- Timer showing countdown
- Move counter showing attempts

### Card Pairs (6 pairs, 12 cards total)
1. 🍎 Apple (2 cards)
2. 🍌 Banana (2 cards)
3. 🍇 Grapes (2 cards)
4. 🍓 Strawberry (2 cards)
5. 🍉 Watermelon (2 cards)
6. 🍊 Orange (2 cards)

### UI Elements
- **Timer:** Countdown from 3:00 to 0:00
- **Moves:** Count of card pairs flipped
- **Matches:** X/6 pairs found
- **Score:** Current points (updates live)
- **High Score:** Best score achieved

---

## Screens

### Start Screen
- [x] Game title "MEMORY MASTER"
- [x] Instructions: "Match all pairs!"
- [x] Difficulty selector (Easy 12 cards / Medium 16 cards / Hard 20 cards)
- [x] Start Game button
- [x] High score display

### Game Screen
- [x] 4×3 grid of cards (12 total)
- [x] Timer at top (counting down)
- [x] Move counter
- [x] Matches counter (X/6)
- [x] Score display
- [x] Pause button (optional)

### End Screen
- [x] Win message: "🎉 MEMORY MASTER! 🎉" or "⏰ TIME'S UP!"
- [x] Final score (large)
- [x] Stats: Time taken, Moves used, Efficiency rating
- [x] High score comparison
- [x] Play Again button
- [x] Change Difficulty button

---

## Features

### Must-Have (MVP)
1. 12 cards displayed in grid
2. Cards flip when clicked
3. Two cards can be selected before checking match
4. Matching cards stay flipped and highlighted
5. Non-matching cards flip back face-down
6. Timer counts down from 3 minutes
7. Game ends when all pairs matched OR time runs out
8. End screen shows results
9. Restart button resets game

### Nice-to-Have (Stretch Goals)
1. High score saved to localStorage
2. Multiple difficulty levels (more cards)
3. Sound effects (flip, match, win)
4. Card flip animation (3D effect)
5. Particle effects when match found
6. Move efficiency rating (Excellent/Good/Fair)
7. Hint button (reveal random unmatched pair briefly)
8. Different card themes (animals, sports, etc.)
9. Star rating based on performance (1-3 stars)
10. Stats tracking (best time, fewest moves, etc.)

---

## Visual Style

**Color Scheme:**
- Primary Color: Purple (#9b59b6) - mystery/memory theme
- Secondary Color: Soft White (#ecf0f1) - clean cards
- Accent Color: Gold (#f1c40f) - matched pairs
- Card Back: Gradient purple with question mark icon
- Card Front: White with colorful emoji

**Style/Theme:**
Clean and colorful puzzle aesthetic. Cards have subtle shadow for depth. Smooth 3D flip animation makes matching satisfying. Matched cards glow gold. Background is calming gradient. Font is playful but readable.

---

## Technical Notes

**Variables Needed:**
- `cards` - Array of card objects with id, emoji, matched status
- `flippedCards` - Array of currently flipped cards (max 2)
- `matches` - Count of pairs matched (0-6)
- `moves` - Count of flip attempts
- `timeRemaining` - Seconds left (starts at 180)
- `score` - Current points
- `highScore` - Best score from localStorage
- `isChecking` - Boolean, are we comparing cards?
- `gameActive` - Boolean, is game running?

**Card Object Structure:**
```javascript
{
  id: 'card-1',
  emoji: '🍎',
  pairId: 'apple', // Both apple cards share this
  isFlipped: false,
  isMatched: false,
  element: <div> // Reference to DOM element
}
```

**Functions Needed:**
- `initGame()` - Create and shuffle cards, start timer
- `shuffleCards()` - Randomize card positions
- `flipCard(card)` - Show card face, add to flippedCards
- `checkMatch()` - Compare two flipped cards
- `handleMatch()` - Keep cards flipped, add points, check win
- `handleMismatch()` - Flip cards back face-down after delay
- `updateTimer()` - Countdown and check for time-out
- `calculateScore()` - Compute final score with bonuses
- `endGame(reason)` - Stop game, show results
- `resetGame()` - Clear board and restart

**Challenges to Solve:**
- Shuffling cards randomly without duplicates
- Preventing 3rd card flip while checking match
- Adding delay before flipping mismatched cards back
- Creating smooth flip animation with CSS
- Preventing clicking same card twice

---

## Difficulty Levels

### Easy (Default)
- 12 cards (6 pairs)
- 3 minutes to complete
- 4×3 grid

### Medium
- 16 cards (8 pairs)
- 4 minutes to complete
- 4×4 grid
- Faster scoring multiplier

### Hard
- 20 cards (10 pairs)
- 5 minutes to complete
- 4×5 grid
- Higher scoring multiplier
- Fewer hints available

---

## Schedule

**Day 1-2:** HTML Structure (Lesson 4.2)  
- Create screens, card grid, UI displays

**Day 3-4:** CSS Styling (Lesson 4.3)  
- Style cards, create flip animation, design grid

**Day 5-6:** Game Variables & Setup (Lessons 4.4-4.5)  
- Set up card array, shuffle function, event listeners

**Day 7-8:** Core Game Logic (Lesson 4.6)  
- Implement card flipping, matching logic, timer

**Day 9:** Win/Lose Conditions (Lesson 4.7)  
- Add end game logic, calculate score, show stats

**Day 10:** Polish & Testing (Lessons 4.8-4.9)  
- Add animations, sounds, test edge cases

**Day 11:** Final Presentation (Lesson 4.10)  
- Present game, reflect on process

---

**Document Created:** November 22, 2025  
**Last Updated:** November 22, 2025  
**Status:** Planning Complete! Ready to build! 🚀

---

## Wireframe Sketches

### Start Screen Wireframe
```
┌─────────────────────────────────────────────┐
│                                             │
│        🧠 MEMORY MASTER 🧠                  │
│                                             │
│     Match all the pairs to win!             │
│                                             │
│   Difficulty:                               │
│   ○ Easy (12 cards)                         │
│   ⦿ Medium (16 cards)                       │
│   ○ Hard (20 cards)                         │
│                                             │
│        [ START GAME ]                       │
│                                             │
│   High Score: 2,340 points                  │
│                                             │
└─────────────────────────────────────────────┘
```

### Game Screen Wireframe (Easy Mode - 4×3 Grid)
```
┌─────────────────────────────────────────────────┐
│  Time: 2:45    Moves: 8    Matches: 3/6       │
│                Score: 450                       │
├─────────────────────────────────────────────────┤
│                                                 │
│    ┌────┐  ┌────┐  ┌────┐  ┌────┐            │
│    │ ?? │  │ 🍎 │  │ ?? │  │ ?? │            │
│    └────┘  └────┘  └────┘  └────┘            │
│                                                 │
│    ┌────┐  ┌────┐  ┌────┐  ┌────┐            │
│    │ ?? │  │ ?? │  │ 🍎 │  │ ?? │            │
│    └────┘  └────┘  └────┘  └────┘            │
│              (matched!)                         │
│                                                 │
│    ┌────┐  ┌────┐  ┌────┐  ┌────┐            │
│    │ ?? │  │ ?? │  │ ?? │  │ ?? │            │
│    └────┘  └────┘  └────┘  └────┘            │
│                                                 │
│  (?? = face down, 🍎 = flipped/matched)        │
│                                                 │
│            [Pause Game]                         │
└─────────────────────────────────────────────────┘
```

### End Screen Wireframe (Win)
```
┌─────────────────────────────────────────────┐
│                                             │
│        🎉 MEMORY MASTER! 🎉                 │
│                                             │
│         Final Score: 2,150                  │
│       ★ New High Score! ★                   │
│                                             │
│   Time: 1:23  |  Moves: 15                  │
│   Efficiency: ⭐⭐⭐ EXCELLENT!              │
│                                             │
│   All 6 pairs matched!                      │
│   Time Bonus: +770 points                   │
│   Move Bonus: +500 points                   │
│                                             │
│        [ PLAY AGAIN ]                       │
│     [ CHANGE DIFFICULTY ]                   │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Notes & Ideas

**Why this game will be fun:**
- Classic game everyone knows how to play
- Exercises memory in fun way
- Quick rounds keep you wanting to retry
- Satisfying when you remember where cards are
- Trying to beat your own time/moves is addictive
- Visual and audio feedback feels good

**What makes it challenging but fair:**
- Time pressure adds excitement
- Need to remember multiple card locations
- Balancing speed vs accuracy
- Harder difficulties add more pairs
- Random shuffle each game keeps it fresh

**Potential expansions:**
- Multiplayer mode (take turns)
- Different card themes (animals, flags, math problems)
- Special power-up cards (freeze time, reveal pair)
- Tournament mode (3 rounds, best average score)
- Custom card sets (upload your own images)
- Leaderboard for fastest times

**Teaching opportunities:**
- Memory and concentration skills
- Pattern recognition
- Strategic thinking (which cards to flip first)
- Time management under pressure

---

**This is a great first game!**  
Memory match is perfect for beginners because:
- Logic is straightforward (compare two things)
- No complex physics or collision detection
- Familiar gameplay - everyone knows memory games
- Easy to expand with more features
- Teaches important programming concepts (arrays, state management, timeouts)
