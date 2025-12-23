# Exercise 1: Design Document Creation

**Time**: 45 minutes  
**Goal**: Create a complete game design document for your poker game

---

## 📋 Part 1: Game Overview

Write down the basics of your poker game:

### Game Title
**Official Name**: _______________________________________

**Alternate Names** (brainstorm 3):
1. _______________________________________
2. _______________________________________
3. _______________________________________

**Final Choice**: _______________________________________

### Game Description

**One-sentence pitch** (imagine telling a friend):
___________________________________________________________

**Full description** (2-3 sentences for back of game box):
___________________________________________________________
___________________________________________________________
___________________________________________________________

### Target Audience

**Who will play this game?**
- Age range: ___________
- Skill level: Beginner / Intermediate / Advanced
- Interests: _______________________________________

---

## 🎮 Part 2: Game Rules Document

### Starting Conditions

**Fill in your chosen values:**

| Setting | Value |
|---------|-------|
| Player starting chips | __________ |
| Dealer starting chips | __________ |
| Ante amount | __________ |
| Raise options | +____, +____, +____ |

**Why these values?**
___________________________________________________________
___________________________________________________________

### Win/Lose Conditions

**Player wins when**: 
___________________________________________________________

**Player loses when**: 
___________________________________________________________

**Optional additional goals** (e.g., reach 2000 chips):
___________________________________________________________

### Betting Rules

**Can player fold after ante?**: Yes / No

**Can player raise multiple times per hand?**: Yes / No

**Maximum raise allowed**: 
- [ ] Fixed amounts only (+10, +25, +50)
- [ ] All-in (all remaining chips)
- [ ] Custom limit: __________

**If dealer raises, can player re-raise?**: Yes / No

---

## ✨ Part 3: Feature List

### MVP Features (Must Have)

**Check each feature you'll include:**

**Core Mechanics:**
- [ ] 52-card deck
- [ ] Random shuffle
- [ ] Deal 5 cards each
- [ ] Hand evaluation (all 10 types)
- [ ] Hand comparison
- [ ] Winner determination

**Betting:**
- [ ] Ante system
- [ ] Fold button
- [ ] Call button
- [ ] Raise buttons (how many? _____)
- [ ] Pot tracking
- [ ] Chip management

**Screens:**
- [ ] Start screen
- [ ] Game screen
- [ ] Win screen
- [ ] Lose screen

**Visual Elements:**
- [ ] Poker table design
- [ ] Cards (front and back)
- [ ] Chip counters
- [ ] Buttons
- [ ] Message area

**AI:**
- [ ] Basic dealer logic
- [ ] Decision making (fold/call/raise)

**Total MVP Features**: _____ checked

---

### Nice-to-Have Features (Optional)

**Pick your TOP 5 to add after MVP:**

**Rank these 1-5 (1 = add first):**

Visual Polish:
- ___ Card dealing animation
- ___ Card flip animation (dealer reveal)
- ___ Chip sliding animation
- ___ Win celebration effect
- ___ Lose screen animation

Audio:
- ___ Card shuffle sound
- ___ Card deal sounds
- ___ Chip clink sounds
- ___ Win sound
- ___ Lose sound
- ___ Background music

Game Features:
- ___ Hand name display
- ___ Statistics tracking
- ___ High score system
- ___ Instructions overlay
- ___ Difficulty levels
- ___ Undo button
- ___ Keyboard shortcuts

Customization:
- ___ Multiple table themes
- ___ Different card backs
- ___ Name your character
- ___ Choose dealer character

**My Top 5 Post-MVP Features:**
1. ___________________________________________
2. ___________________________________________
3. ___________________________________________
4. ___________________________________________
5. ___________________________________________

---

## 🎨 Part 4: Visual Design

### Color Scheme

**Choose your colors:**

**Table Background**: 
- [ ] Classic green felt
- [ ] Blue felt
- [ ] Red felt
- [ ] Custom color: __________

**Card Style**:
- [ ] Classic design (simple)
- [ ] Modern design (stylized)
- [ ] Themed design (what theme? __________)

**Button Colors**:
- Fold button: __________ (usually red/gray)
- Call button: __________ (usually blue/yellow)
- Raise buttons: __________ (usually green/orange)

**Text Colors**:
- Main text: __________
- Chip counts: __________
- Messages: __________

**Accent Colors**:
- Pot display: __________
- Winner highlight: __________
- Borders: __________

### Visual Style

**Overall aesthetic** (circle one):
- Classic/Traditional
- Modern/Sleek
- Playful/Cartoonish
- Realistic/Photographic
- Minimalist/Simple
- Retro/Vintage

**Describe your vision**:
___________________________________________________________
___________________________________________________________
___________________________________________________________

---

## 📐 Part 5: Screen Layouts

### Screen 1: Start Screen

**Draw your start screen layout on paper or describe here:**

**Elements to include:**
- [ ] Game title/logo (where? __________)
- [ ] Start button (where? __________)
- [ ] How to Play button (where? __________)
- [ ] High score display (where? __________)
- [ ] Credits/your name (where? __________)
- [ ] Background image? (describe: __________)

**Special touches**:
___________________________________________________________

---

### Screen 2: Game Screen

**Main playing area - most important!**

**Dealer Area (top):**
- [ ] Dealer label
- [ ] Dealer chip count
- [ ] 5 card slots
- Position on screen: __________

**Pot Area (center):**
- [ ] Pot amount
- [ ] Game message
- Position on screen: __________

**Player Area (bottom):**
- [ ] Player label
- [ ] Player chip count
- [ ] 5 card slots
- Position on screen: __________

**Control Panel (below table):**
- [ ] Hand info display
- [ ] Fold button
- [ ] Call button
- [ ] Raise buttons (how many? _____)
- [ ] Deal New Hand button
- Layout: Horizontal / Vertical / Grid

**Additional UI:**
- [ ] Instructions button (corner: ________)
- [ ] Quit button (corner: ________)
- [ ] Sound toggle (corner: ________)

---

### Screen 3: End Screen

**Win Screen Elements:**
- [ ] "You Win!" title
- [ ] Victory message
- [ ] Final chip count
- [ ] Statistics (optional)
- [ ] Play Again button
- [ ] Quit button

**Lose Screen Elements:**
- [ ] "You Lose" title  
- [ ] Encouraging message
- [ ] Final chip count
- [ ] Statistics (optional)
- [ ] Play Again button
- [ ] Quit button

**Will win and lose screens look different?**: Yes / No

**If yes, how?**
___________________________________________________________

---

## 🧩 Part 6: Technical Planning

### Data You Need to Track

**List all game variables:**

1. ___________________________________________
2. ___________________________________________
3. ___________________________________________
4. ___________________________________________
5. ___________________________________________
6. ___________________________________________
7. ___________________________________________
8. ___________________________________________
9. ___________________________________________
10. ___________________________________________

**Example**:
- playerChips
- dealerChips
- pot
- playerHand (array)
- dealerHand (array)
- currentBet
- gamePhase
- etc.

---

### Functions You Need to Write

**List all functions your game will need:**

**Card Management:**
1. ___________________________________________
2. ___________________________________________
3. ___________________________________________

**Hand Evaluation:**
4. ___________________________________________
5. ___________________________________________

**Betting:**
6. ___________________________________________
7. ___________________________________________

**Game Flow:**
8. ___________________________________________
9. ___________________________________________
10. ___________________________________________

**AI:**
11. ___________________________________________

**UI Updates:**
12. ___________________________________________
13. ___________________________________________

**Example functions**:
- createDeck()
- shuffleDeck()
- dealCards()
- evaluateHand()
- compareHands()
- playerFolds()
- playerRaises(amount)
- dealerDecision()
- updateChipDisplay()
- showWinScreen()

---

## 📅 Part 7: Development Timeline

### Your Schedule

**When will you work on this?**

**Days available per week**: __________

**Time per session**: __________ minutes

**Total weeks to complete**: __________

### Milestone Dates

**Set target dates for each phase:**

| Phase | Target Date | Estimated Hours |
|-------|-------------|-----------------|
| HTML Structure (4.3) | __________ | __________ |
| CSS Styling (4.4) | __________ | __________ |
| Card System (4.5-4.6) | __________ | __________ |
| Hand Evaluation (4.7) | __________ | __________ |
| Game Logic (4.8-4.9) | __________ | __________ |
| Dealer AI (4.10) | __________ | __________ |
| Win/Lose (4.11) | __________ | __________ |
| Polish (4.12-4.13) | __________ | __________ |
| Testing (4.14) | __________ | __________ |
| Complete! (4.15) | __________ | __________ |

**Celebration plan when finished**:
___________________________________________________________

---

## 🎯 Part 8: Success Criteria

### How will you know your game is good?

**MVP Success Criteria:**
- [ ] Game runs without errors
- [ ] All hand types detected correctly
- [ ] Winner determined correctly every time
- [ ] Chips tracked accurately
- [ ] Can play multiple hands
- [ ] Win/lose conditions work
- [ ] User interface is clear
- [ ] Controls are responsive

**Quality Goals:**
- [ ] Game is fun to play
- [ ] Easy to understand
- [ ] Looks professional
- [ ] No confusing bugs
- [ ] Runs smoothly (no lag)

**Personal Goals:**
- [ ] _______________________________________
- [ ] _______________________________________
- [ ] _______________________________________

---

## 🔍 Part 9: Risk Assessment

### What could go wrong?

**Identify potential challenges:**

**Technical Challenges:**
1. What scares you most about coding this?
   ___________________________________________

2. What part will be hardest?
   ___________________________________________

3. What algorithms are you unsure about?
   ___________________________________________

**Solutions/Resources:**
- Where will you get help? ___________________________________________
- Backup plan if stuck? ___________________________________________

**Time Challenges:**
1. Will you have enough time? ___________________________________________
2. What might cause delays? ___________________________________________
3. Contingency plan? ___________________________________________

---

## ✅ Completion Checklist

**Before submitting, make sure you have:**

- [ ] Game title chosen
- [ ] Complete game description written
- [ ] All rules defined clearly
- [ ] MVP features listed
- [ ] Top 5 post-MVP features ranked
- [ ] Color scheme decided
- [ ] All 3 screens sketched
- [ ] Data structures listed
- [ ] Functions listed
- [ ] Timeline created with dates
- [ ] Success criteria defined
- [ ] Risks identified
- [ ] Document reviewed by parent/teacher

---

## 📄 Final Design Document Template

**Create a clean version of your design doc:**

Use this structure:
```
MY POKER GAME DESIGN DOCUMENT

Game Title: ___________
Created by: ___________
Date: ___________

1. Game Overview
   - Description
   - Target audience
   - Unique features

2. Game Rules
   - Starting conditions
   - Win/lose conditions
   - Betting rules

3. Features
   - MVP features (must have)
   - Post-MVP features (nice to have)

4. Visual Design
   - Color scheme
   - Art style
   - Screen layouts

5. Technical Requirements
   - Data structures
   - Functions needed
   - Algorithms required

6. Development Plan
   - Timeline
   - Milestones
   - Success criteria

7. Notes
   - Challenges anticipated
   - Resources needed
   - Questions to resolve
```

**Type or write this cleanly - you'll reference it constantly!**

---

## 🎉 Congratulations!

You've created a professional game design document! This is what real game developers do before coding anything.

**Keep this document safe!** You'll need it for every remaining lesson in Module 4.

**Show it to someone and explain your vision!** Teaching others helps solidify your plan.

**Ready to start coding!** 🚀🃏
