# Answer Key - Lesson 4.6: Displaying Cards (Advanced) 🎬

**Complete solutions and grading guide for all exercises**

---

## 📋 Table of Contents

1. [Exercise 1 Solutions](#exercise-1-solutions)
2. [Exercise 2 Solutions](#exercise-2-solutions)
3. [Exercise 3 Solutions](#exercise-3-solutions)
4. [Testing Guide](#testing-guide)
5. [Grading Rubric](#grading-rubric)
6. [Common Mistakes](#common-mistakes)
7. [Extra Credit](#extra-credit)

---

## Exercise 1 Solutions

### Complete Implementation Checklist

**Exercise 1: Add Animations to Poker Game**

✅ **Part 1: CSS Animations (Steps 1-2)**
- Added @keyframes dealCard, flipCard, highlight
- Animations work smoothly
- Timing feels natural

✅ **Part 2: Message Overlay (Step 3)**
- HTML structure added
- CSS styling complete
- JavaScript functions work
- Messages show/hide correctly

✅ **Part 3: Animated Display (Steps 4-5)**
- displayHandAnimated() works
- Cards deal one at a time
- Delay timing is appropriate
- displayDealerHandAnimatedHidden() shows face-down cards

✅ **Part 4: Card Flipping (Step 6)**
- flipCards() function works
- Cards flip smoothly
- Content updates at midpoint
- Rotation looks natural

✅ **Part 5: Highlighting (Step 7)**
- highlightWinningCards() works
- Pulse animation visible
- Gold border shows
- clearHighlights() removes effects

✅ **Part 6: Button Control (Step 8)**
- disableButtons() works
- enableButtons() works
- Buttons properly disabled during animations
- Visual feedback (opacity, cursor)

✅ **Part 7: Animated Game Flow (Steps 9-11)**
- startGame() is async
- Proper animation sequence
- Correct timing/delays
- revealAndCompare() animated
- All animations smooth

✅ **Part 8: Testing (Steps 12-13)**
- All 10 tests pass
- No console errors
- Timing feels right
- Game is playable

---

### Code Solutions

**All code is provided in:**
- `examples/animated-script.js` (complete working version)
- `answer-key/answer-key-script.js` (identical copy)

**Key functions implemented:**

1. **sleep()** - Promise-based delay utility
2. **displayHandAnimated()** - Staggered card dealing
3. **displayDealerHandAnimatedHidden()** - Face-down cards
4. **flipCards()** - Animated card reveal
5. **highlightWinningCards()** - Highlight specific cards
6. **clearHighlights()** - Remove highlighting
7. **showMessage() / hideMessage()** - Message overlay
8. **disableButtons() / enableButtons()** - Button control
9. **async startGame()** - Complete animated game start
10. **async revealAndCompare()** - Animated reveal sequence

---

## Exercise 2 Solutions

### Creative Challenges

**Exercise 2: Custom Animation Effects**

Each challenge is creative and has multiple valid solutions. Here are example approaches:

#### Challenge 1: Spin Deal Animation

```css
@keyframes spinDeal {
    0% {
        transform: translateY(-200px) rotateZ(0deg);
        opacity: 0;
    }
    100% {
        transform: translateY(0) rotateZ(720deg);
        opacity: 1;
    }
}

.card.spin-dealing {
    animation: spinDeal 0.8s ease-out;
}
```

**Grading:** Works = ✅, Spins at least 360° = ✅

---

#### Challenge 2: Bounce on Landing

```css
@keyframes bounceDeal {
    0% {
        transform: translateY(-200px);
        opacity: 0;
    }
    60% {
        transform: translateY(0);
        opacity: 1;
    }
    75% {
        transform: translateY(-20px);
    }
    90% {
        transform: translateY(-5px);
    }
    100% {
        transform: translateY(0);
    }
}
```

**Grading:** Bounces at least once = ✅, Looks natural = ✅

---

#### Challenge 3: Slide from Sides

```javascript
function displayHandAnimatedFromSide(hand, containerId, fromLeft = true) {
    let container = document.getElementById(containerId);
    container.innerHTML = '';
    
    hand.forEach((card, index) => {
        setTimeout(() => {
            let cardElement = createCardElement(card);
            cardElement.style.animationName = fromLeft ? 'slideFromLeft' : 'slideFromRight';
            cardElement.classList.add('sliding');
            container.appendChild(cardElement);
        }, index * 200);
    });
}
```

```css
@keyframes slideFromLeft {
    from { transform: translateX(-500px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}

@keyframes slideFromRight {
    from { transform: translateX(500px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}
```

**Grading:** Player slides from one side, dealer from other = ✅

---

#### Challenge 4: Screen Shake

```javascript
function shakeScreen() {
    let screen = document.getElementById('game-screen');
    screen.classList.add('shake');
    setTimeout(() => screen.classList.remove('shake'), 500);
}
```

```css
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
    20%, 40%, 60%, 80% { transform: translateX(10px); }
}

.shake {
    animation: shake 0.5s;
}
```

**Grading:** Screen shakes on lose = ✅, Stops after animation = ✅

---

#### Challenge 5: Confetti System

```javascript
function createConfetti() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
    
    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + 's';
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
    }
}
```

```css
.confetti {
    position: fixed;
    width: 10px;
    height: 10px;
    top: -10px;
    animation: fall 3s linear forwards;
    z-index: 9999;
}

@keyframes fall {
    to {
        transform: translateY(100vh) rotate(360deg);
    }
}
```

**Grading:** At least 20 particles = ✅, Falls and rotates = ✅, Auto-removes = ✅

---

#### Challenges 6-13

**Due to space, remaining challenges follow similar patterns:**

- Challenge 6: Fireworks (radial particle explosion)
- Challenge 7: Glowing borders (pulsing box-shadow)
- Challenge 8: Card fan (spread in arc with transform)
- Challenge 9: Animated counter (count up smoothly)
- Challenge 10: Selectable cards (click to toggle highlight)
- Challenge 11: Drag and drop (HTML5 draggable API)
- Challenge 12: Theme variations (custom color schemes)
- Challenge 13: 3D effects (perspective and rotateY)

**Grading Approach:**
- Did they attempt it? ✅
- Does it work? ✅
- Is it creative/unique? ✅ (bonus points)

---

## Exercise 3 Solutions

### Polish Features

**Exercise 3: Polish Game to Perfection**

#### Part 1: Loading Screen

```html
<div id="loading-screen">
    <div class="spinner"></div>
    <p>Loading game...</p>
</div>
```

```css
.spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}
```

**Grading:** Shows on page load = ✅, Hides when ready = ✅

---

#### Part 2: Sound Effects

```javascript
let soundEnabled = true;

function playSound(soundName) {
    if (!soundEnabled) return;
    
    let sounds = {
        'deal': new Audio('sounds/deal.mp3'),
        'flip': new Audio('sounds/flip.mp3'),
        'win': new Audio('sounds/win.mp3'),
        'lose': new Audio('sounds/lose.mp3')
    };
    
    if (sounds[soundName]) {
        sounds[soundName].play();
    }
}

function toggleSound() {
    soundEnabled = !soundEnabled;
    document.getElementById('sound-toggle').textContent = soundEnabled ? '🔊' : '🔇';
}
```

**Grading:** At least 2 sounds = ✅, Mute toggle works = ✅, Optional = not required

---

#### Part 3: Statistics Tracker

```javascript
let gameStats = {
    gamesPlayed: 0,
    wins: 0,
    losses: 0,
    ties: 0,
    biggestWin: 0
};

function loadStats() {
    let saved = localStorage.getItem('pokerStats');
    if (saved) {
        gameStats = JSON.parse(saved);
    }
    updateStatsDisplay();
}

function saveStats() {
    localStorage.setItem('pokerStats', JSON.stringify(gameStats));
}

function updateStatsDisplay() {
    document.getElementById('games-played').textContent = gameStats.gamesPlayed;
    document.getElementById('wins').textContent = gameStats.wins;
    document.getElementById('losses').textContent = gameStats.losses;
    let winRate = gameStats.gamesPlayed > 0 
        ? Math.round((gameStats.wins / gameStats.gamesPlayed) * 100) 
        : 0;
    document.getElementById('win-rate').textContent = winRate + '%';
}
```

**Grading:** Tracks wins/losses = ✅, Uses localStorage = ✅, Displays stats = ✅

---

#### Part 4: Settings Menu

```javascript
let gameSettings = {
    soundEnabled: true,
    animationSpeed: 1,
    startingChips: 1000
};

function openSettings() {
    document.getElementById('settings-overlay').classList.add('show');
    loadSettingsValues();
}

function saveSettings() {
    gameSettings.soundEnabled = document.getElementById('sound-setting').checked;
    gameSettings.animationSpeed = parseFloat(document.getElementById('speed-setting').value);
    gameSettings.startingChips = parseInt(document.getElementById('chips-setting').value);
    
    localStorage.setItem('gameSettings', JSON.stringify(gameSettings));
    applySettings();
    closeSettings();
}

function applySettings() {
    // Adjust animation speeds
    document.documentElement.style.setProperty('--animation-speed', gameSettings.animationSpeed);
}
```

**Grading:** At least 2 settings = ✅, Saves to localStorage = ✅, Settings apply = ✅

---

#### Part 5: Visual Polish

**Transition Effects:**
```css
.screen {
    transition: opacity 0.3s ease;
}

button {
    transition: all 0.2s ease;
}
```

**Button Ripples:**
```javascript
function createRipple(event) {
    let button = event.currentTarget;
    let ripple = document.createElement('span');
    ripple.className = 'ripple';
    let rect = button.getBoundingClientRect();
    ripple.style.left = (event.clientX - rect.left) + 'px';
    ripple.style.top = (event.clientY - rect.top) + 'px';
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
}
```

**Grading:** Smooth transitions = ✅, Interactive feedback = ✅, Responsive = ✅

---

## Testing Guide

### Comprehensive Testing Checklist

#### Visual Tests (10 points)

1. ✅ Cards deal one at a time with smooth animation
2. ✅ Dealer cards show face-down, then flip smoothly
3. ✅ Winning cards highlight with pulsing gold
4. ✅ Messages show and hide at correct times
5. ✅ Buttons disable/enable appropriately
6. ✅ Chip counts update correctly
7. ✅ All screens transition smoothly
8. ✅ No visual glitches or jumps
9. ✅ Animations complete before next action
10. ✅ Colors, borders, shadows all work

#### Functional Tests (10 points)

1. ✅ Start game button works
2. ✅ Call button works and shows correct behavior
3. ✅ Fold button works (dealer wins)
4. ✅ Raise button works (if enough chips)
5. ✅ Game determines winner correctly
6. ✅ Chips transfer correctly
7. ✅ Game over when out of chips
8. ✅ Play again button resets properly
9. ✅ Quit button returns to start
10. ✅ No JavaScript errors in console

#### Timing Tests (5 points)

1. ✅ Card dealing takes ~1-1.5 seconds
2. ✅ Messages show for 1-2 seconds
3. ✅ Flipping animation takes ~0.6 seconds per card
4. ✅ No race conditions (buttons disabled during animations)
5. ✅ Total game flow feels smooth, not too fast or slow

---

## Grading Rubric

### Exercise 1: Add Animations (50 points)

| Category | Points | Criteria |
|----------|--------|----------|
| CSS Animations | 10 | All keyframes defined correctly |
| Message Overlay | 10 | HTML/CSS/JS all working |
| Animated Display | 10 | Cards deal smoothly one at a time |
| Card Flipping | 10 | Flip animation smooth, content updates |
| Game Flow | 10 | Full animated sequence works |

**Grade Scale:**
- 45-50: Excellent (A)
- 40-44: Good (B)
- 35-39: Satisfactory (C)
- 30-34: Needs Improvement (D)
- <30: Incomplete (F)

---

### Exercise 2: Custom Effects (30 points)

| Category | Points | Criteria |
|----------|--------|----------|
| Attempted Challenges | 10 | At least 5 challenges attempted |
| Working Effects | 10 | At least 3 effects fully working |
| Creativity | 10 | Unique animations, personal style |

**Bonus Points (+5):**
- Exceptionally creative effect
- More than 8 challenges completed
- Original idea not in exercises

---

### Exercise 3: Polish (20 points)

| Category | Points | Criteria |
|----------|--------|----------|
| Loading/Stats/Settings | 10 | At least 2 of 3 features implemented |
| Visual Polish | 5 | Smooth transitions, good UI |
| Overall Quality | 5 | Game feels professional |

**Bonus Points (+5):**
- All features implemented
- Extra polish (tooltips, keyboard shortcuts)
- Easter egg working

---

### Total Possible: 100 points (+10 bonus)

**Final Grade Scale:**
- 90-110: A (Excellent - professional quality)
- 80-89: B (Good - solid implementation)
- 70-79: C (Satisfactory - meets requirements)
- 60-69: D (Needs work - missing features)
- <60: F (Incomplete)

---

## Common Mistakes

### Mistake 1: Forgetting async/await

**Problem:**
```javascript
function startGame() {  // Missing async
    showMessage('Dealing...');
    await sleep(1000);  // ❌ Won't work without async
}
```

**Solution:**
```javascript
async function startGame() {  // ✅ Add async
    showMessage('Dealing...');
    await sleep(1000);  // ✅ Now works
}
```

---

### Mistake 2: Not Removing Animation Classes

**Problem:**
```javascript
cardElement.classList.add('dealing');
// ❌ Never removed, can't animate again
```

**Solution:**
```javascript
cardElement.classList.add('dealing');
setTimeout(() => {
    cardElement.classList.remove('dealing');  // ✅ Clean up
}, 500);
```

---

### Mistake 3: Race Conditions (Buttons Active During Animations)

**Problem:**
```javascript
async function startGame() {
    // ❌ Buttons still enabled, player can click multiple times
    displayHandAnimated();
}
```

**Solution:**
```javascript
async function startGame() {
    disableButtons();  // ✅ Disable first
    displayHandAnimated();
    await sleep(1400);
    enableButtons();  // ✅ Re-enable when done
}
```

---

### Mistake 4: Wrong Timing Units

**Problem:**
```javascript
await sleep(1);  // ❌ Only 1 millisecond
setTimeout(() => {}, 1);  // ❌ Too fast to see
```

**Solution:**
```javascript
await sleep(1000);  // ✅ 1 second
setTimeout(() => {}, 200);  // ✅ 0.2 seconds
```

---

### Mistake 5: Forgetting to Update Card Content on Flip

**Problem:**
```javascript
function flipCards() {
    cardElement.classList.add('flipping');
    // ❌ Card still shows back when animation ends
}
```

**Solution:**
```javascript
function flipCards() {
    cardElement.classList.add('flipping');
    setTimeout(() => {
        // ✅ Update content at midpoint (when edge-on)
        cardElement.innerHTML = newCard.innerHTML;
    }, 300);
}
```

---

## Extra Credit

### Advanced Features (+5 points each)

1. **Particle Physics** - Make confetti affected by "gravity" and "wind"
2. **Card Shadows** - Dynamic shadows that follow card movement
3. **Poker Chip Stacks** - Animated chip stacks that grow/shrink
4. **Hand History** - Show last 5 hands played
5. **AI Difficulty** - Adjustable dealer intelligence
6. **Multiplayer** - Play against friend on same computer
7. **Progressive Jackpot** - Rare hand wins bonus chips
8. **Achievement System** - Unlock badges for milestones
9. **Replay System** - Rewatch last hand in slow motion
10. **Mobile Gestures** - Swipe to fold, tap to call, etc.

---

## Answer Key Files

**Complete working code provided in:**

- `answer-key-index.html` - Full HTML structure
- `answer-key-style.css` - All CSS including animations
- `answer-key-script.js` - Complete JavaScript with all features

**These files are fully functional and can be:**
- Tested by opening `answer-key-index.html` in browser
- Compared against student code
- Used as reference during grading
- Demonstrated to show expected behavior

---

## Notes for Teachers/Parents

### Grading Tips

1. **Test functionality first** - Does it work?
2. **Check timing** - Does it feel smooth?
3. **Look for creativity** - Did they make it their own?
4. **Value effort** - Animation is hard, reward attempts
5. **Celebrate polish** - Professional-looking games deserve recognition

### Common Questions

**Q: Student's animations are slower/faster than examples. Is this wrong?**  
A: No! Timing is subjective. As long as it feels smooth and intentional, it's fine.

**Q: Student used different approach than answer key. Is this wrong?**  
A: No! There are many ways to animate. Grade on results, not code similarity.

**Q: Student only completed 3 of Exercise 2 challenges. Pass/fail?**  
A: Pass if those 3 work well. Exercise 2 is about creativity, not completion.

**Q: Animations work but there are console warnings. Deduct points?**  
A: Minor. If game works, warnings are low priority. Encourage fixing but don't penalize heavily.

---

**End of Answer Key** ✅🎬
