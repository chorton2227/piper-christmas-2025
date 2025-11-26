# Lesson 4.1: Planning Your Game 🎯

## Introduction

Welcome to the Game Building module! You've learned HTML, CSS, and JavaScript - now it's time to bring it all together to build a complete game from scratch.

But before we start coding, we need to **plan**. Just like you wouldn't start building a house without blueprints, you shouldn't start coding a game without a plan!

**Why Plan First?**
- Know what you're building before you code
- Avoid getting stuck or confused
- Save time by thinking through problems first
- Create better games with clear goals
- Know when you're actually "done"

**Lesson Goals:**
By the end of this lesson, you will:
- ✅ Understand the game design process
- ✅ Choose a game type that matches your skill level
- ✅ Write clear game rules
- ✅ Sketch your game layout
- ✅ List must-have vs nice-to-have features
- ✅ Create a complete game design document

**Time Needed:** 60 minutes

---

## Part 1: Understanding Game Design (10 minutes)

### What Makes a Game?

Every game has these core elements:

1. **Goal/Objective** 🎯
   - What is the player trying to do?
   - Example: "Collect 100 coins before time runs out"

2. **Rules** 📜
   - What can and can't the player do?
   - Example: "Click on green circles to earn points. Red circles lose points."

3. **Challenges** ⚡
   - What makes it difficult or interesting?
   - Example: "Circles appear randomly and disappear quickly"

4. **Feedback** 💫
   - How does the player know what's happening?
   - Example: "Score increases, sound plays, animations show"

5. **Win/Lose Conditions** 🏆
   - How does the game end?
   - Example: "Win if you reach 100 points. Lose if time runs out."

### Types of Games You Can Build

Here are some game types perfect for beginners:

#### 🖱️ Clicker/Idle Games
**What it is:** Click buttons to earn points and buy upgrades  
**Complexity:** ⭐ Easy  
**Skills Needed:** Variables, buttons, if statements  
**Examples:** Cookie Clicker, clicking for points  
**Good First Project:** Yes! Great for beginners.

#### ⚡ Reaction Games
**What it is:** Click targets as fast as you can  
**Complexity:** ⭐⭐ Medium  
**Skills Needed:** Timers, random positioning, click events  
**Examples:** Whack-a-mole, reflex tester, button masher  
**Good First Project:** Yes! Fun and achievable.

#### 🧩 Puzzle Games
**What it is:** Solve a challenge using logic  
**Complexity:** ⭐⭐⭐ Medium-Hard  
**Skills Needed:** Arrays, comparison logic, state tracking  
**Examples:** Memory match, tic-tac-toe, Simon says  
**Good First Project:** Memory match is good, others are harder.

#### 📖 Text Adventure Games
**What it is:** Make choices that affect the story  
**Complexity:** ⭐⭐ Medium  
**Skills Needed:** Objects, functions, screen switching  
**Examples:** Choose your own adventure, dungeon explorer  
**Good First Project:** Yes! Creative and doable.

#### 🎯 Collection Games
**What it is:** Catch falling objects or avoid obstacles  
**Complexity:** ⭐⭐⭐ Medium-Hard  
**Skills Needed:** Movement, collision detection, timers  
**Examples:** Catch apples, dodge obstacles, collecting coins  
**Good First Project:** Simple versions work well.

#### 🧠 Quiz/Trivia Games
**What it is:** Answer questions to earn points  
**Complexity:** ⭐ Easy-Medium  
**Skills Needed:** Arrays of questions, checking answers  
**Examples:** Trivia game, multiple choice quiz  
**Good First Project:** Yes! Great for learning arrays.

---

## Part 2: Brainstorming Your Game (15 minutes)

### Step 1: Generate Ideas (5 minutes)

Think about:
- **Games you like to play** - What's fun about them?
- **Your interests** - Sports? Animals? Space? Cooking?
- **What you want to learn** - Practice a specific skill?
- **Simplicity** - Can you explain it in one sentence?

**Brainstorming Exercise:**
Write down 3 game ideas. Don't judge them yet, just write!

1. _______________________________________________
2. _______________________________________________
3. _______________________________________________

### Step 2: Choose One Idea (5 minutes)

For each idea, ask:

✅ **Can I explain the goal in one sentence?**  
✅ **Do I know how the player will interact?** (click, keyboard, etc.)  
✅ **Can I describe 3-5 rules?**  
✅ **Will it be fun for me to build?**  
✅ **Is it achievable in a week or two?**

Choose the idea that gets the most ✅ checks!

**My chosen game idea:** _______________________________________________

### Step 3: Write Your Game in One Sentence (5 minutes)

This is your **game pitch** - a clear, simple description.

**Template:**  
"In [GAME NAME], you [ACTION] to [GOAL] while [CHALLENGE]."

**Examples:**
- "In Coin Catcher, you move a basket to catch falling coins while avoiding bombs."
- "In Cookie Clicker, you click a cookie to earn points and buy upgrades to click faster."
- "In Speed Math, you solve math problems to earn points before time runs out."

**My game pitch:**  
_______________________________________________

---

## Part 3: Writing Game Rules (10 minutes)

### What Are Game Rules?

Rules tell the player:
- What they CAN do
- What they CAN'T do
- What happens when they do things
- How they win or lose

### Rule Writing Template

**Controls:**
- [How does the player interact with the game?]
- Example: "Click on targets with your mouse"

**Actions:**
- [What can the player do?]
- Example: "Move left/right with arrow keys, jump with spacebar"

**Scoring:**
- [How do you earn points?]
- Example: "Green targets = +10 points, Gold targets = +50 points"

**Obstacles/Penalties:**
- [What should the player avoid?]
- Example: "Red targets = -20 points, Missing a target = no penalty"

**Time Limit:** (if applicable)
- [How long does the game last?]
- Example: "60 seconds per round"

**Lives/Health:** (if applicable)
- [Can the player fail before time runs out?]
- Example: "Start with 3 lives. Lose a life when you hit an obstacle."

**Win Condition:**
- [How do you win?]
- Example: "Score 500 points before time runs out"

**Lose Condition:**
- [How do you lose?]
- Example: "Time runs out before reaching 500 points"

### Practice: Write Your Game Rules

Write 5-7 clear rules for your game:

1. _______________________________________________
2. _______________________________________________
3. _______________________________________________
4. _______________________________________________
5. _______________________________________________
6. _______________________________________________ (optional)
7. _______________________________________________ (optional)

---

## Part 4: Sketching Your Game (15 minutes)

### Why Sketch First?

- See what your game will look like
- Plan where everything goes
- Avoid redesigning while coding
- Communicate your vision

### What to Sketch

You need to draw **3 screens**:

#### Screen 1: Start Screen
What the player sees when they first open the game.

**Include:**
- Game title
- Instructions (brief)
- Start button
- High score (optional)

#### Screen 2: Game Screen
What the player sees while playing.

**Include:**
- Game area (where gameplay happens)
- Score display
- Timer (if your game has one)
- Lives/health (if your game has them)
- Controls hint (arrows, click, etc.)
- Pause button (optional)

#### Screen 3: End Screen
What the player sees when the game ends.

**Include:**
- "You Win!" or "Game Over" message
- Final score
- High score
- Play Again button
- Maybe a fun message

### Sketching Tips

- Use paper and pencil (or digital drawing app)
- Don't worry about art skills - boxes and labels are fine!
- Label everything clearly
- Show approximate sizes (big button, small text, etc.)
- Use arrows to show what happens when buttons are clicked
- Add notes about colors or styles if you want

### Example Sketch Structure

```
┌─────────────────────────────────────┐
│         START SCREEN                │
│                                     │
│   ╔═══════════════════════════╗    │
│   ║    COOKIE CLICKER 🍪      ║    │
│   ╚═══════════════════════════╝    │
│                                     │
│   Click the cookie to earn points!  │
│   Buy upgrades to click faster!     │
│                                     │
│     [    START GAME    ]            │
│                                     │
│   High Score: 1,234                 │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│         GAME SCREEN                 │
│                                     │
│  Score: 0        Clicks: 0          │
│  ┌──────────────────────────────┐  │
│  │                              │  │
│  │                              │  │
│  │        🍪                    │  │
│  │    [CLICK ME!]               │  │
│  │                              │  │
│  │                              │  │
│  └──────────────────────────────┘  │
│                                     │
│  Upgrades:                          │
│  [ Auto-Clicker - 100 cookies ]     │
│  [ Double Points - 250 cookies ]    │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│         END SCREEN                  │
│                                     │
│   ╔═══════════════════════════╗    │
│   ║      🎉 GAME OVER! 🎉     ║    │
│   ╚═══════════════════════════╝    │
│                                     │
│   Final Score: 1,456                │
│   High Score:  1,234  🔥NEW!        │
│                                     │
│   Total Clicks: 234                 │
│   Time Played: 5:23                 │
│                                     │
│     [    PLAY AGAIN    ]            │
└─────────────────────────────────────┘
```

**Your Turn:** Sketch your 3 screens on paper or in the digital template provided.

---

## Part 5: Feature Planning (10 minutes)

### Must-Have vs Nice-to-Have

When building a game, you need to prioritize features. Start with the **minimum playable game**, then add extras if you have time.

#### Must-Have Features (MVP - Minimum Viable Product)
These are the **essential** features your game needs to be playable.

**Examples:**
- ✅ Start button to begin game
- ✅ Basic gameplay mechanics (click, move, etc.)
- ✅ Score tracking
- ✅ Win or lose condition
- ✅ End screen showing results
- ✅ Restart button

#### Nice-to-Have Features (Stretch Goals)
These make your game **better** but aren't required for it to work.

**Examples:**
- 🌟 High score saving
- 🌟 Sound effects
- 🌟 Multiple levels or difficulty
- 🌟 Power-ups or upgrades
- 🌟 Animations and polish
- 🌟 Instructions screen
- 🌟 Pause button
- 🌟 Background music
- 🌟 Achievements

### Your Feature List

**Must-Have Features (5 minimum):**
1. _______________________________________________
2. _______________________________________________
3. _______________________________________________
4. _______________________________________________
5. _______________________________________________

**Nice-to-Have Features (3-5):**
1. _______________________________________________
2. _______________________________________________
3. _______________________________________________
4. _______________________________________________ (optional)
5. _______________________________________________ (optional)

**Strategy:** Build all must-have features first. Only add nice-to-have features after the basic game works!

---

## Part 6: Complete Game Design Document (10 minutes)

### Your Official Game Design Document

Now put it all together! Fill out this template:

---

# 🎮 GAME DESIGN DOCUMENT

## Game Title
**Name:** _______________________________________________

**Tagline:** _______________________________________________  
(One sentence that describes your game)

---

## Overview

**Genre:** _______________________________________________ (clicker, reaction, puzzle, etc.)

**Platform:** Web Browser (HTML/CSS/JavaScript)

**Target Player:** Kids and families

**Play Time:** _______________ minutes per round

---

## Game Objective

**What is the goal?**  
_______________________________________________
_______________________________________________

**How do you win?**  
_______________________________________________

**How do you lose?**  
_______________________________________________

---

## Gameplay

### Controls
_______________________________________________
_______________________________________________

### Core Mechanics
Describe what the player does moment-to-moment:
_______________________________________________
_______________________________________________
_______________________________________________

### Rules
1. _______________________________________________
2. _______________________________________________
3. _______________________________________________
4. _______________________________________________
5. _______________________________________________

---

## Scoring System

**Points are earned by:**
- _______________________________________________
- _______________________________________________

**Points are lost by:**
- _______________________________________________
- _______________________________________________

---

## Game Elements

### Visual Elements
What will the player see?
- _______________________________________________
- _______________________________________________
- _______________________________________________

### UI Elements
What information is displayed?
- Score: _______________________________________________
- Timer: _______________________________________________
- Lives: _______________________________________________
- Other: _______________________________________________

---

## Screens

### Start Screen
- [ ] Game title
- [ ] Brief instructions
- [ ] Start button
- [ ] Other: _______________________________________________

### Game Screen
- [ ] Game area
- [ ] Score display
- [ ] Timer/Lives
- [ ] Other: _______________________________________________

### End Screen
- [ ] Win/Lose message
- [ ] Final score
- [ ] Play again button
- [ ] Other: _______________________________________________

---

## Features

### Must-Have (MVP)
1. _______________________________________________
2. _______________________________________________
3. _______________________________________________
4. _______________________________________________
5. _______________________________________________

### Nice-to-Have (Stretch Goals)
1. _______________________________________________
2. _______________________________________________
3. _______________________________________________

---

## Visual Style

**Color Scheme:**
- Primary Color: _______________________________________________
- Secondary Color: _______________________________________________
- Accent Color: _______________________________________________

**Style/Theme:**
_______________________________________________
(Example: "Bright and colorful, cartoon style" or "Dark space theme with neon accents")

---

## Technical Notes

**Variables Needed:**
- _______________________________________________
- _______________________________________________
- _______________________________________________

**Functions Needed:**
- _______________________________________________
- _______________________________________________
- _______________________________________________

**Challenges to Solve:**
- _______________________________________________
- _______________________________________________

---

## Schedule

**Day 1-2:** HTML Structure (Lesson 4.2)  
**Day 3-4:** CSS Styling (Lesson 4.3)  
**Day 5-6:** Game Variables & Setup (Lessons 4.4-4.5)  
**Day 7-8:** Core Game Logic (Lesson 4.6)  
**Day 9:** Win/Lose Conditions (Lesson 4.7)  
**Day 10:** Polish & Testing (Lessons 4.8-4.9)  
**Day 11:** Final Presentation (Lesson 4.10)

---

**Document Created:** _______________  
**Last Updated:** _______________  
**Status:** Planning Complete! Ready to build! 🚀

---

## Summary

Congratulations! You now have a complete plan for your game. Here's what you accomplished:

✅ **Chose a game type** that matches your skill level  
✅ **Wrote a clear objective** in one sentence  
✅ **Defined 5-7 rules** for how the game works  
✅ **Sketched 3 screens** showing the layout  
✅ **Listed must-have features** for the MVP  
✅ **Listed nice-to-have features** as stretch goals  
✅ **Created a complete design document**

### Why This Matters

With this plan, you can:
- Start coding with confidence
- Know exactly what to build
- Avoid getting stuck or confused
- Explain your game to others
- Track your progress
- Know when you're done

### What's Next?

In **Lesson 4.2**, you'll start building! You'll create the HTML structure for your game, setting up all three screens and the basic layout.

**Before moving on:**
- [ ] Share your plan with a parent or friend
- [ ] Get feedback on your idea
- [ ] Make any adjustments to your plan
- [ ] Save your sketches and design document
- [ ] Get excited to start coding!

---

## Reflection Questions

1. **What excites you most about your game?**  
   _______________________________________________

2. **What part seems most challenging?**  
   _______________________________________________

3. **Who will you have playtest your game?**  
   _______________________________________________

4. **What will make your game fun?**  
   _______________________________________________

---

**Great job planning! Now let's build it! 🎮✨**
