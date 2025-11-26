# Example 1: Completed Game Design Document - "Target Blast"

This is an example of a completed game design document for a reaction-based clicking game.

---

# 🎮 GAME DESIGN DOCUMENT

## Game Title
**Name:** Target Blast

**Tagline:** Click the targets before they disappear to score big points!

---

## Overview

**Genre:** Reaction Game / Clicker

**Platform:** Web Browser (HTML/CSS/JavaScript)

**Target Player:** Kids ages 8-12, families

**Play Time:** 60 seconds per round

---

## Game Objective

**What is the goal?**  
Click on as many targets as possible before time runs out. Different colored targets give different points. The faster you click, the higher your score!

**How do you win?**  
Score 500 points or more before the 60-second timer reaches zero.

**How do you lose?**  
Time runs out and you have less than 500 points.

---

## Gameplay

### Controls
- **Mouse:** Click on colored circles that appear on screen
- **No keyboard controls needed**

### Core Mechanics
Colored circles (targets) appear randomly on the game area every 1-2 seconds. Each target stays visible for 3 seconds, then disappears. Player must click targets before they disappear to earn points. Game lasts 60 seconds.

### Rules
1. Click on colored targets to earn points
2. Green targets = 10 points
3. Blue targets = 25 points
4. Gold targets = 50 points (rare)
5. Red targets = LOSE 20 points (avoid!)
6. Targets disappear after 3 seconds if not clicked
7. Game lasts 60 seconds
8. Win by scoring 500+ points

---

## Scoring System

**Points are earned by:**
- Clicking green targets: +10 points
- Clicking blue targets: +25 points
- Clicking gold targets: +50 points
- Combo bonus: Click 5 targets in a row for +50 bonus

**Points are lost by:**
- Clicking red targets: -20 points
- (Missing targets has no penalty)

---

## Game Elements

### Visual Elements
What will the player see?
- Colored circular targets (green, blue, gold, red)
- Game area with light background
- Animated effects when targets are clicked
- Timer counting down
- Score updating in real-time

### UI Elements
What information is displayed?
- **Score:** Large display at top showing current points
- **Timer:** Countdown from 60 seconds
- **Target Counter:** How many targets clicked (optional)
- **High Score:** Best score achieved (saved)

---

## Screens

### Start Screen
- [x] Game title "TARGET BLAST"
- [x] Brief instructions "Click targets to score points! Avoid red ones!"
- [x] Start button
- [x] High score display
- [x] Difficulty selector (Easy/Normal/Hard)

### Game Screen
- [x] Game area (800x600px rectangle)
- [x] Score display at top
- [x] Timer at top right
- [x] Targets appear randomly
- [x] Pause button in corner

### End Screen
- [x] "YOU WIN!" or "GAME OVER" message (based on score)
- [x] Final score displayed large
- [x] High score (with "NEW RECORD!" if beaten)
- [x] Accuracy percentage (hits / total spawned)
- [x] Play again button

---

## Features

### Must-Have (MVP)
1. Start button begins game
2. Targets spawn randomly every 1-2 seconds
3. Clicking targets adds points to score
4. Timer counts down from 60 seconds
5. Game ends when timer reaches 0
6. End screen shows final score
7. Restart button allows playing again

### Nice-to-Have (Stretch Goals)
1. High score saved to localStorage
2. Sound effects when clicking targets
3. Visual particle effects on click
4. Difficulty levels (Easy: slower, Hard: faster)
5. Combo multiplier for consecutive hits
6. Achievement badges (score milestones)
7. Background music with mute button

---

## Visual Style

**Color Scheme:**
- Primary Color: Deep Blue (#2c3e50)
- Secondary Color: Light Gray (#ecf0f1)
- Accent Color: Gold (#f39c12)
- Target Colors: Green (#27ae60), Blue (#3498db), Gold (#f1c40f), Red (#e74c3c)

**Style/Theme:**
Clean and modern with bright, poppy colors for targets. Game area has subtle gradient. Smooth animations when targets appear and get clicked. Font is bold and easy to read.

---

## Technical Notes

**Variables Needed:**
- `score` - Current points
- `timeRemaining` - Seconds left (starts at 60)
- `highScore` - Best score (from localStorage)
- `targetsClicked` - Count of successful clicks
- `targetsSpawned` - Total targets that appeared
- `gameActive` - Boolean, is game running?
- `targets` - Array of active target objects
- `difficulty` - String: 'easy', 'normal', or 'hard'

**Functions Needed:**
- `startGame()` - Initialize and begin gameplay
- `spawnTarget()` - Create new target at random position
- `clickTarget(target)` - Handle target click, update score
- `updateTimer()` - Countdown and check for game end
- `endGame()` - Stop game, calculate stats, show end screen
- `resetGame()` - Clear all targets and reset variables
- `saveHighScore()` - Store high score in localStorage
- `loadHighScore()` - Retrieve high score on page load

**Challenges to Solve:**
- Prevent targets from overlapping when spawning
- Make targets disappear after 3 seconds automatically
- Calculate accurate click position on game area
- Ensure smooth animation when removing targets

---

## Schedule

**Day 1-2:** HTML Structure (Lesson 4.2)  
- Create 3 screens, game area, score/timer displays

**Day 3-4:** CSS Styling (Lesson 4.3)  
- Style screens, create target styles, add gradients

**Day 5-6:** Game Variables & Setup (Lessons 4.4-4.5)  
- Set up game object, initialize functions, event listeners

**Day 7-8:** Core Game Logic (Lesson 4.6)  
- Implement target spawning, clicking, timer, score updating

**Day 9:** Win/Lose Conditions (Lesson 4.7)  
- Add end game logic, calculate stats, show results

**Day 10:** Polish & Testing (Lessons 4.8-4.9)  
- Add sound effects, animations, test thoroughly

**Day 11:** Final Presentation (Lesson 4.10)  
- Present game, reflect on process

---

**Document Created:** November 20, 2025  
**Last Updated:** November 20, 2025  
**Status:** Planning Complete! Ready to build! 🚀

---

## Wireframe Sketches

### Start Screen Wireframe
```
┌─────────────────────────────────────────────┐
│                                             │
│         🎯 TARGET BLAST 🎯                  │
│                                             │
│   Click targets to score points!            │
│   Avoid the red ones!                       │
│                                             │
│   ┌─────────────────────────────────┐      │
│   │  Difficulty: ○ Easy  ⦿ Normal   │      │
│   │              ○ Hard              │      │
│   └─────────────────────────────────┘      │
│                                             │
│          [ START GAME ]                     │
│                                             │
│   High Score: 1,250                         │
│                                             │
└─────────────────────────────────────────────┘
```

### Game Screen Wireframe
```
┌─────────────────────────────────────────────┐
│  Score: 340         Time: 42s      [Pause] │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │                                       │ │
│  │    🟢                                 │ │
│  │            🔵                         │ │
│  │                      🟡               │ │
│  │                                  🔴   │ │
│  │         🟢                            │ │
│  │                                       │ │
│  │  (targets appear randomly)            │ │
│  │                                       │ │
│  └───────────────────────────────────────┘ │
│                                             │
│  Targets Hit: 34                            │
└─────────────────────────────────────────────┘
```

### End Screen Wireframe
```
┌─────────────────────────────────────────────┐
│                                             │
│            🎉 YOU WIN! 🎉                   │
│                                             │
│           Final Score: 675                  │
│        ★ High Score: 675 NEW! ★            │
│                                             │
│          Accuracy: 89%                      │
│        Targets Hit: 45/51                   │
│                                             │
│       Time: 60 seconds                      │
│                                             │
│          [ PLAY AGAIN ]                     │
│          [ CHANGE DIFFICULTY ]              │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Notes & Ideas

**Why this game will be fun:**
- Fast-paced action keeps player engaged
- Risk/reward with red targets adds excitement
- Trying to beat high score is addictive
- Simple to learn, challenging to master
- Visual and audio feedback feels satisfying

**Potential expansions:**
- Multiple rounds with increasing difficulty
- Power-ups (freeze time, double points)
- Different target shapes (stars, triangles)
- Leaderboard for multiple players
- Boss targets worth lots of points

---

**This is what a complete game plan looks like!**  
Notice how every question is answered and every decision is made BEFORE coding begins. This makes building the game much easier!
