# Exercise 2: Plan a Reaction/Speed Game

## Goal
Create a complete game design document for a reaction-based game where players need quick reflexes.

## Instructions

You're going to plan a game that tests player speed and reactions! This could be clicking targets, pressing buttons quickly, or dodging obstacles.

### Step 1: Choose Your Game Type (5 minutes)

Pick one of these reaction game types:

**Option A: Target Clicking**  
Targets appear on screen, player clicks them before they disappear

**Option B: Button Mashing**  
Player clicks a button as many times as possible within a time limit

**Option C: Dodge Game**  
Player moves left/right to avoid falling objects

**Option D: Simon Says**  
Game shows a sequence, player repeats it (gets faster)

**Option E: Your Own Idea!**  
Describe your reaction game idea

**My choice:** _______________________________________

### Step 2: Define the Challenge (10 minutes)

**What does the player do?**  
Be specific about the action:  
_______________________________________

**What makes it challenging?**  
Examples: "Targets appear randomly", "Speed increases over time", "Limited time"  
_______________________________________

**How does difficulty increase?**  
_______________________________________

**Time limit or endless?**  
Circle one: **60 seconds** / **90 seconds** / **Endless (with increasing difficulty)**

### Step 3: Design Your Scoring System (15 minutes)

**How do players earn points?**

| Action | Points Earned |
|--------|---------------|
| Example: Click green target | +10 |
| | |
| | |
| | |

**Are there bonuses?**
Examples: "Combo bonus for consecutive hits", "Speed bonus for fast reactions"
- Bonus 1: _______________________________________
- Bonus 2: _______________________________________

**Are there penalties?**
Examples: "Lose points for clicking wrong target", "Lose life for missing target"
- Penalty 1: _______________________________________
- Penalty 2: _______________________________________

### Step 4: Set Win and Lose Conditions (10 minutes)

**How do you win?**  
_______________________________________

Examples:
- "Score 500 points before time runs out"
- "Survive for 60 seconds without losing all lives"
- "Click 50 targets successfully"

**How do you lose?**  
_______________________________________

Examples:
- "Time runs out with score below 500"
- "Lose all 3 lives"
- "Miss 5 targets in a row"

**Does the player have lives?**  
Circle: **Yes** / **No**  
If yes, how many? _____ lives

### Step 5: Plan Your Game Elements (15 minutes)

**What appears on screen during gameplay?**

Check all that apply and describe:
- [ ] Targets/objects - What do they look like? _______________________________________
- [ ] Player character - Describe: _______________________________________
- [ ] Obstacles - Describe: _______________________________________
- [ ] Power-ups - Describe: _______________________________________
- [ ] Other: _______________________________________

**How do elements behave?**
- Spawn rate: Every _____ seconds
- Disappear after: _____ seconds
- Movement speed: _______________________________________
- Random or pattern: _______________________________________

### Step 6: Design Your UI (10 minutes)

**What information does the player need to see?**

Required:
- [ ] Score: Current points
- [ ] Timer: Countdown or count-up
- [ ] Lives (if applicable)

Optional:
- [ ] High score
- [ ] Combo meter
- [ ] Accuracy percentage
- [ ] Level/difficulty indicator
- [ ] Other: _______________________________________

**Sketch your game screen:**

```
┌─────────────────────────────────────────────┐
│  Score: _____  Time: ___  Lives: ♥♥♥        │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │                                       │ │
│  │     (GAME AREA)                       │ │
│  │                                       │ │
│  │  [Draw your game elements here]       │ │
│  │                                       │ │
│  │                                       │ │
│  └───────────────────────────────────────┘ │
│                                             │
│  Controls: _____________________________    │
└─────────────────────────────────────────────┘
```

### Step 7: Define Controls (5 minutes)

**What buttons/keys does the player use?**

- Primary action: _______________________________________
- Secondary action (if any): _______________________________________
- Pause: _______________________________________

**Are controls:**
- [ ] Mouse only (clicking)
- [ ] Keyboard only (arrow keys, spacebar)
- [ ] Both mouse and keyboard

### Step 8: Add Polish Ideas (10 minutes)

**What will make your game feel satisfying?**

**Visual Feedback:**
- [ ] Screen shake when hit
- [ ] Particle effects when clicking
- [ ] Color flash on successful action
- [ ] Animations (describe): _______________________________________

**Sound Effects:**
- [ ] Click sound
- [ ] Success sound (ding!)
- [ ] Miss sound (buzz)
- [ ] Background music
- [ ] Other: _______________________________________

**Difficulty Progression:**
How does the game get harder over time?
_______________________________________

### Step 9: Write Your Game Rules (10 minutes)

Write 6-8 clear rules explaining how to play:

1. _______________________________________
2. _______________________________________
3. _______________________________________
4. _______________________________________
5. _______________________________________
6. _______________________________________
7. _______________________________________ (optional)
8. _______________________________________ (optional)

### Step 10: Feature Checklist (5 minutes)

**Must-Have Features (Minimum Viable Product):**
1. _______________________________________
2. _______________________________________
3. _______________________________________
4. _______________________________________
5. _______________________________________

**Nice-to-Have Features (Polish):**
1. _______________________________________
2. _______________________________________
3. _______________________________________

---

## Success Criteria

You've completed this exercise when you have:

- ✅ Chosen your reaction game type
- ✅ Defined the core challenge and player action
- ✅ Created a scoring system with bonuses/penalties
- ✅ Set clear win and lose conditions
- ✅ Planned game elements (targets, obstacles, etc.)
- ✅ Designed your UI layout
- ✅ Defined controls
- ✅ Listed polish features (effects, sounds)
- ✅ Written 6-8 game rules
- ✅ Created must-have and nice-to-have feature lists

---

## Playtest Questions

Before you build it, imagine playing your game:

1. **Is the goal clear?** Can you explain it in one sentence?  
   _______________________________________

2. **Is it challenging but fair?** Not too easy, not impossible?  
   Yes / No - If no, what needs adjusting? _______________________________________

3. **Will it be fun to play multiple times?** What keeps it interesting?  
   _______________________________________

4. **Can you build this with your current skills?** Any concerns?  
   _______________________________________

---

## Example: Balloon Pop

Here's a quick example:

**Game Type:** Target Clicking  
**Action:** Click balloons before they float off screen  
**Challenge:** Balloons float upward at random speeds  

**Scoring:**
- Red balloon: +10
- Blue balloon: +25
- Golden balloon: +50
- Bomb (don't click!): -20

**Win:** Score 500 points in 60 seconds  
**Lose:** Time runs out with less than 500  

**Game Elements:**
- Balloons spawn at bottom every 2 seconds
- Float upward at varying speeds
- Disappear at top if not clicked
- Occasional bomb appears (avoid!)

**UI:** Score top left, timer top right, game area is full screen

**Controls:** Mouse clicking only

**Rules:**
1. Click balloons to pop them and earn points
2. Different colors = different points
3. Avoid clicking bombs (-20 points)
4. Balloons float upward and disappear at top
5. Reach 500 points in 60 seconds to win
6. Golden balloons are rare and worth the most!

---

**Now design YOUR reaction game!** ⚡
