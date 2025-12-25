
**Difficulty:** ⭐⭐⭐⭐  
**Concepts:** setTimeout, setInterval, random delays, event timing, game logic

## Your Mission
Create a game that tests how fast players can react when a target appears on screen!

## How the Game Works
1. Player clicks "Start Game"
2. Screen shows "Wait for it..." message
3. After a **random delay** (1-5 seconds), target appears
4. Player clicks the target as fast as possible
5. Game measures reaction time in milliseconds
6. Show player's time and compare to previous attempts

## Requirements

### Part 1: Basic Game ✅
Create a reaction game with:
- Start button to begin
- Waiting screen with instructions
- Target that appears after random delay
- Click detection on target
- Display reaction time in milliseconds
- "Too early!" message if they click before target appears

### Part 2: Multiple Rounds 🔄
Implement:
- Play 5 rounds automatically
- Track time for each round
- Calculate average reaction time
- Show best (fastest) time
- Show worst (slowest) time
- Display all round times

### Part 3: Visual Feedback 🎯
Add engaging visuals:
- **Waiting state**: Gray screen with "Wait..." message
- **Ready state**: Green screen with target (or different color)
- **Clicked state**: Show result immediately
- **Too early state**: Red screen with "Too early!" message
- Countdown between rounds (3, 2, 1, Go!)

### Part 4: Leaderboard 🏆
Track and display:
- Top 5 fastest reaction times
- Average of last 10 attempts
- Total games played
- Rank player (Excellent, Good, Average, Slow)
  - Excellent: < 250ms
  - Good: 250-350ms
  - Average: 350-500ms
  - Slow: > 500ms

## HTML Structure You'll Need
```html
<div id="game-area">
    <h1>Reaction Time Game</h1>
    <p id="instructions">Click Start to begin!</p>
    <button id="start-button">Start Game</button>
    <div id="target" class="hidden">Click Me!</div>
    <div id="result"></div>
</div>

<div id="stats">
    <h2>Your Stats</h2>
    <p>Last Time: <span id="last-time">-</span> ms</p>
    <p>Best Time: <span id="best-time">-</span> ms</p>
    <p>Average: <span id="average-time">-</span> ms</p>
    <p>Rounds Played: <span id="rounds">0</span>/5</p>
</div>

<div id="leaderboard">
    <h2>🏆 Best Times</h2>
    <ol id="top-times"></ol>
</div>
```

## JavaScript Logic

### Game State Variables
```javascript
let gameActive = false;
let waitingForPlayer = false;
let startTime = 0;
let timeoutId = null;
let roundTimes = [];
let currentRound = 0;
let totalRounds = 5;
let allTimes = []; // For leaderboard
```

### Starting a Round
```javascript
function startRound() {
    gameActive = true;
    waitingForPlayer = false;
    currentRound++;
    
    // Show waiting screen
    showWaitingScreen();
    
    // Wait random time before showing target
    let delay = Math.random() * 4000 + 1000; // 1-5 seconds
    console.log("Target will appear in " + delay + "ms");
    
    timeoutId = setTimeout(showTarget, delay);
}
```

### Showing the Target
```javascript
function showTarget() {
    waitingForPlayer = true;
    startTime = Date.now(); // Record when target appeared
    
    // Change screen to green
    // Show target element
    // Change instructions
}
```

### Handling Click
```javascript
function handleClick() {
    if (!gameActive) {
        return; // Game not started
    }
    
    if (!waitingForPlayer) {
        // Clicked too early!
        tooEarly();
        return;
    }
    
    // Calculate reaction time
    let endTime = Date.now();
    let reactionTime = endTime - startTime;
    
    recordTime(reactionTime);
    showResult(reactionTime);
    
    // Start next round or end game
    if (currentRound < totalRounds) {
        setTimeout(startRound, 2000); // 2 second delay
    } else {
        endGame();
    }
}
```

### Recording and Ranking Time
```javascript
function recordTime(time) {
    roundTimes.push(time);
    allTimes.push(time);
    
    // Keep leaderboard sorted
    allTimes.sort(function(a, b) {
        return a - b; // Smallest (fastest) first
    });
    
    // Keep only top 10
    if (allTimes.length > 10) {
        allTimes = allTimes.slice(0, 10);
    }
}

function getRank(time) {
    if (time < 250) return "🏆 Excellent!";
    if (time < 350) return "🥈 Good!";
    if (time < 500) return "🥉 Average";
    return "🐢 Keep practicing!";
}
```

### Calculating Statistics
```javascript
function calculateStats() {
    if (roundTimes.length === 0) return;
    
    let best = Math.min(...roundTimes);
    let worst = Math.max(...roundTimes);
    let sum = roundTimes.reduce((a, b) => a + b, 0);
    let average = Math.round(sum / roundTimes.length);
    
    return { best, worst, average };
}
```

## Tips & Hints 💡

1. **Use Date.now()** to get current time in milliseconds:
   ```javascript
   let startTime = Date.now();
   let endTime = Date.now();
   let difference = endTime - startTime; // milliseconds
   ```

2. **Random delays**: Use Math.random() to vary wait time:
   ```javascript
   let delay = Math.random() * 4000 + 1000; // 1000-5000ms
   ```

3. **Clear timeouts**: If player clicks too early, cancel the scheduled target:
   ```javascript
   clearTimeout(timeoutId);
   ```

4. **Prevent multiple clicks**: Disable clicking after first click until next round

5. **Hide/show elements**: Use classes or style.display:
   ```javascript
   target.classList.add('hidden');
   target.classList.remove('hidden');
   ```

## Bonus Challenges 🌟

### Bonus 1: Moving Target
Make the target appear at random positions on the screen:
```javascript
let x = Math.random() * (windowWidth - targetWidth);
let y = Math.random() * (windowHeight - targetHeight);
target.style.left = x + 'px';
target.style.top = y + 'px';
```

### Bonus 2: Difficulty Levels
- **Easy**: Large target, 1-3 second delay
- **Medium**: Medium target, 1-5 second delay
- **Hard**: Small target, 1-7 second delay, moves after appearing

### Bonus 3: Countdown Timer
Show a countdown timer (3, 2, 1) before each round starts

### Bonus 4: Sound Effects
- Play a sound when target appears
- Different sound for correct click vs too early
- Victory sound at end of game

### Bonus 5: Color Variation
Instead of clicking when green appears, wait for a specific color:
- Red: Don't click!
- Green: Click!
- Blue: Don't click!
Makes game more challenging!

### Bonus 6: Share Results
Create a share button that copies your score to clipboard:
```javascript
navigator.clipboard.writeText("My reaction time: " + average + "ms!");
```

### Bonus 7: Animations
- Animate target appearing (fade in, scale up)
- Show confetti when achieving new best time
- Shake screen on "too early" click

## What You'll Learn 📚
- Using setTimeout for random delays
- Measuring time differences in milliseconds
- Game state management
- Detecting premature actions
- Calculating statistics (min, max, average)
- Sorting and ranking scores
- Managing multiple game rounds
- Creating engaging user feedback

## Testing Checklist ✅
- [ ] Start button begins game
- [ ] Random delay before target (1-5 seconds)
- [ ] Target appears clearly
- [ ] Clicking target records time
- [ ] Clicking early shows "Too early!"
- [ ] Time displays in milliseconds
- [ ] Plays 5 rounds total
- [ ] Shows best, worst, average times
- [ ] Leaderboard updates correctly
- [ ] Rank displays based on time
- [ ] Can restart after game ends
- [ ] No errors if clicking multiple times

## CSS Tips 🎨

Make it look great:
```css
.waiting {
    background: #aaa;
}

.ready {
    background: #4CAF50;
}

.too-early {
    background: #f44336;
    animation: shake 0.5s;
}

#target {
    width: 200px;
    height: 200px;
    background: yellow;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.2s;
}

#target:hover {
    transform: scale(1.1);
}
```

Good luck creating an addictive reaction game! 🎮⚡