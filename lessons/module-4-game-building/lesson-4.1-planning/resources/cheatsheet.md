# Game Planning Cheatsheet 📋

Quick reference for planning your game!

---

## The One-Sentence Pitch

**Template:**  
"In [GAME NAME], you [ACTION] to [GOAL] while [CHALLENGE]."

**Examples:**
- "In Cookie Clicker, you click cookies to earn points and buy upgrades to click faster."
- "In Target Blast, you click targets to score points while avoiding red bombs."
- "In Memory Master, you match card pairs to win while racing against the timer."

---

## Game Types for Beginners

| Type | Difficulty | Best For | Example |
|------|-----------|----------|---------|
| Clicker/Idle | ⭐ Easy | Learning loops, upgrades | Cookie Clicker |
| Reaction | ⭐⭐ Medium | Timers, random events | Whack-a-mole |
| Puzzle | ⭐⭐⭐ Hard | Logic, state management | Memory Match |
| Quiz | ⭐ Easy | Arrays, conditionals | Trivia Game |
| Collection | ⭐⭐⭐ Hard | Movement, collision | Catch Items |
| Adventure | ⭐⭐ Medium | Functions, screens | Choose Your Story |

---

## Essential Game Elements

Every game needs:

1. **Goal** - What is the player trying to do?
2. **Rules** - What can and can't happen?
3. **Challenge** - What makes it difficult?
4. **Feedback** - How does the player know what's happening?
5. **End** - How does the game conclude (win/lose)?

---

## Three-Screen Structure

### Screen 1: Start Screen
**Must Have:**
- Game title
- Start button
- Brief instructions (1-2 sentences)

**Nice to Have:**
- High score display
- Difficulty selector
- Settings (sound on/off)

### Screen 2: Game Screen
**Must Have:**
- Game area (where gameplay happens)
- Score display
- Core game elements

**Nice to Have:**
- Timer
- Lives/health
- Pause button
- Combo meter

### Screen 3: End Screen
**Must Have:**
- Win/lose message
- Final score
- Play again button

**Nice to Have:**
- High score comparison
- Stats (accuracy, time, etc.)
- Achievements unlocked
- Share button

---

## Writing Good Game Rules

**Template:**
1. **Controls** - How do you interact?
2. **Actions** - What can you do?
3. **Scoring** - How do you earn points?
4. **Penalties** - What costs points or lives?
5. **Time** - Is there a time limit?
6. **Lives** - Can you fail before time runs out?
7. **Win** - How do you succeed?
8. **Lose** - How do you fail?

**Example (Target Game):**
1. Click on targets with your mouse
2. Targets appear randomly every 2 seconds
3. Green targets = +10 points
4. Red targets = -20 points
5. 60 seconds per round
6. No lives (play until time runs out)
7. Win by scoring 500+ points
8. Lose if time runs out with less than 500 points

---

## Feature Prioritization

### Must-Have (MVP - Minimum Viable Product)
The bare minimum for your game to be playable:
- ✅ Start button
- ✅ Core gameplay mechanic
- ✅ Score tracking
- ✅ Win or lose condition
- ✅ End screen
- ✅ Restart button

### Nice-to-Have (Stretch Goals)
Features that improve the game but aren't essential:
- 🌟 High score saving
- 🌟 Sound effects
- 🌟 Animations
- 🌟 Multiple levels/difficulties
- 🌟 Power-ups
- 🌟 Instructions screen
- 🌟 Achievements

**Strategy:** Build MVP first, then add nice-to-haves only if time allows!

---

## Scoring System Formulas

### Simple Scoring
```
Score = Points Earned - Points Lost
```

### Time Bonus
```
Final Score = Base Score + (Seconds Remaining × 10)
```

### Accuracy Bonus
```
Final Score = Base Score × Accuracy Percentage
Example: 1000 × 0.85 = 1,150
```

### Combo Multiplier
```
Points = Base Points × Combo Count
Example: 10 × 5 = 50 points
```

### Complete Formula
```
Final Score = (Base Points + Time Bonus) × Accuracy + Special Bonuses
```

---

## Win & Lose Conditions by Game Type

### Clicker Games
- **Win:** Reach point threshold (e.g., 1,000,000 cookies)
- **Lose:** (Usually don't lose, just progress forever)

### Reaction Games
- **Win:** Score above threshold in time limit
- **Lose:** Time runs out OR all lives lost

### Puzzle Games
- **Win:** Complete puzzle correctly
- **Lose:** Run out of moves OR time expires

### Collection Games
- **Win:** Collect X items OR reach high score
- **Lose:** Lives depleted OR time runs out

### Quiz Games
- **Win:** Answer X questions correctly
- **Lose:** Too many wrong answers OR time expires

---

## Upgrade Pricing Guide (for Clicker Games)

**Formula:** Each upgrade costs 3-5× the previous one

**Example Progression:**
1. First upgrade: 50-100 points
2. Second upgrade: 250-500 points
3. Third upgrade: 1,000-2,500 points
4. Fourth upgrade: 5,000-12,500 points
5. Fifth upgrade: 25,000-62,500 points

**Tip:** Make sure first upgrade is affordable within 1-2 minutes of play!

---

## Color Scheme Selection

### High Energy Games (reaction, action)
- Primary: Bright colors (red, orange, yellow)
- Secondary: Contrasting bright colors
- Accent: White or neon

### Calm/Puzzle Games
- Primary: Cool colors (blue, purple, green)
- Secondary: Soft neutrals (cream, light gray)
- Accent: Gold or subtle highlights

### Retro/Fun Games
- Primary: Bold saturated colors
- Secondary: Complementary bright colors
- Accent: White or black for contrast

**Pro Tip:** Use only 3-5 colors total. Too many colors = visual chaos!

---

## Difficulty Progression Ideas

### Speed Increases
- Targets appear faster
- Objects move faster
- Less time to react

### Quantity Increases
- More obstacles
- More enemies
- More items to track

### Complexity Increases
- New mechanics introduced
- Patterns become harder
- More rules to remember

### Resource Reduction
- Less time
- Fewer lives
- Smaller margins for error

---

## Technical Planning Shortcuts

### Variables You'll Probably Need
```javascript
score
highScore
timeRemaining
lives
isPlaying
level
```

### Functions You'll Probably Need
```javascript
startGame()
updateGame()
endGame()
resetGame()
updateDisplay()
checkWinCondition()
checkLoseCondition()
```

### Event Listeners You'll Need
```javascript
Start button click
Play Again button click
Game area clicks
Keyboard input (optional)
```

---

## Common Planning Mistakes to Avoid

❌ **Scope Too Large**  
Making game too complex for skill level  
✅ Start simple, add features later

❌ **Unclear Goal**  
Player doesn't know what they're trying to do  
✅ State objective in one clear sentence

❌ **No Win Condition**  
Game never ends, no sense of achievement  
✅ Always have a clear winning goal

❌ **Unfair Difficulty**  
Game is too hard or impossible  
✅ Make sure game is beatable with practice

❌ **Missing Feedback**  
Player can't tell what's happening  
✅ Show score changes, animations, sounds

❌ **Skipping Planning**  
Jumping straight to coding  
✅ Plan first, code second!

---

## Quick Planning Process (30 minutes)

**5 min:** Choose game type and theme  
**5 min:** Write one-sentence pitch  
**5 min:** List 5-7 rules  
**10 min:** Sketch three screens  
**5 min:** List must-have features  

**Done! You're ready to build!**

---

## Validation Checklist

Before you start coding, check:

- [ ] Can explain game in one sentence
- [ ] Rules are clear and simple
- [ ] Goal is obvious
- [ ] Win and lose conditions defined
- [ ] Sketched all three screens
- [ ] Listed required variables
- [ ] Listed required functions
- [ ] Got feedback from someone
- [ ] Know how to build this
- [ ] Excited to start!

---

## When You Get Stuck

1. **Look at your plan** - Did you skip planning something?
2. **Check examples** - How did example games solve this?
3. **Break it down** - Can you solve a smaller piece first?
4. **Draw it** - Can you sketch how it should work?
5. **Ask for help** - Explain the problem to someone
6. **Take a break** - Fresh eyes find solutions!

---

## Remember

📝 **Plan before you code**  
🎯 **Start with MVP, add polish later**  
🎮 **Make games YOU want to play**  
✨ **Small and polished beats large and broken**  
🚀 **You can always make version 2!**

---

**Keep this cheatsheet handy while planning your game!** 🎮
