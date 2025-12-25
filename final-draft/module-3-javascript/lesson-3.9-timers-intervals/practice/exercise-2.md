
**Difficulty:** ⭐⭐⭐  
**Concepts:** setInterval, clearInterval, countdown logic, state management

## What is Pomodoro?
The Pomodoro Technique is a time management method:
- Work for 25 minutes (focus time)
- Take a 5-minute break
- After 4 work sessions, take a longer 15-minute break
- Repeat!

## Your Mission
Build a Pomodoro timer that helps users manage their work and break times!

## Requirements

### Part 1: Basic Timer ✅
Create a countdown timer that:
- Starts at 25 minutes (1500 seconds)
- Counts down to 0
- Updates display every second
- Shows time in MM:SS format (25:00, 24:59, etc.)
- Stops at 0 and alerts user

### Part 2: Timer Controls ⏯️
Add buttons for:
- **Start**: Begin countdown
- **Pause**: Freeze the timer
- **Resume**: Continue from where paused
- **Reset**: Return to initial time
- **Add Time**: Add 1 or 5 minutes to current timer

### Part 3: Work/Break Modes 🔄
Implement two modes:
- **Work Mode**: 25 minutes (default)
- **Break Mode**: 5 minutes
- Button to switch between modes
- Different colors for each mode:
  - Work: Professional blue/purple
  - Break: Relaxing green
- Display current mode clearly

### Part 4: Session Counter 📊
Track statistics:
- Number of work sessions completed
- Number of breaks taken
- Total time worked today
- Display these stats on the page

## HTML Structure You'll Need
```html
<h1 id="mode">Work Time</h1>
<div id="timer-display">25:00</div>

<div class="controls">
    <button id="start">▶️ Start</button>
    <button id="pause">⏸️ Pause</button>
    <button id="reset">🔄 Reset</button>
    <button id="add-time">➕ Add 1 Min</button>
</div>

<div class="mode-switch">
    <button id="work-mode">💼 Work (25 min)</button>
    <button id="break-mode">☕ Break (5 min)</button>
</div>

<div class="stats">
    <h3>Today's Progress</h3>
    <p>Work Sessions: <span id="work-count">0</span></p>
    <p>Breaks Taken: <span id="break-count">0</span></p>
    <p>Total Time: <span id="total-time">0</span> minutes</p>
</div>
```

## JavaScript Logic

### Timer State Variables
```javascript
let timerInterval = null;
let timeLeft = 1500; // 25 minutes in seconds
let isWorkMode = true;
let isRunning = false;

// Stats
let workSessions = 0;
let breaksTaken = 0;
let totalMinutesWorked = 0;
```

### Countdown Function
```javascript
function countdown() {
    timeLeft--;
    updateDisplay();
    
    if (timeLeft <= 0) {
        timerFinished();
    }
}
```

### Formatting Time
```javascript
function formatTime(seconds) {
    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;
    
    // Add leading zeros
    mins = String(mins).padStart(2, '0');
    secs = String(secs).padStart(2, '0');
    
    return mins + ':' + secs;
}
```

### Handling Timer Completion
```javascript
function timerFinished() {
    stopTimer();
    
    if (isWorkMode) {
        alert("🎉 Great job! Time for a break!");
        workSessions++;
        totalMinutesWorked += 25;
    } else {
        alert("⏰ Break's over! Ready to work?");
        breaksTaken++;
    }
    
    updateStats();
}
```

## Tips & Hints 💡

1. **Always check if timer is running** before starting a new interval:
   ```javascript
   if (timerInterval === null) {
       timerInterval = setInterval(countdown, 1000);
   }
   ```

2. **Store state**: Keep track of whether you're in work or break mode

3. **Update display immediately**: Call updateDisplay() right when starting, not just in the interval

4. **Calculate stats**: When work timer finishes, add 25 to total minutes

5. **Visual feedback**: Change background colors based on mode and timer state

6. **Sound effects**: Consider playing a sound when timer finishes (optional)

## Bonus Challenges 🌟

### Bonus 1: Auto-Switch Modes
When work timer finishes, automatically switch to break mode (and vice versa)

### Bonus 2: Long Break
After 4 work sessions, automatically set break to 15 minutes instead of 5

### Bonus 3: Custom Durations
Let users set their own work and break durations:
```html
<input type="number" id="work-duration" value="25" min="1" max="60"> minutes
```

### Bonus 4: Progress Bar
Show visual progress bar that empties as time counts down

### Bonus 5: Save Progress
Use localStorage to save stats even if user closes the page:
```javascript
localStorage.setItem('workSessions', workSessions);
let saved = localStorage.getItem('workSessions');
```

### Bonus 6: Notification Sound
Play different sounds for:
- Work session complete
- Break complete  
- Last 10 seconds of timer

### Bonus 7: Browser Notifications
Use browser notifications to alert user even if tab isn't active:
```javascript
if (Notification.permission === "granted") {
    new Notification("Time's up!");
}
```

## What You'll Learn 📚
- Managing timer state (running, paused, mode)
- Countdown logic with intervals
- Formatting time displays
- Tracking and displaying statistics
- Mode switching and state management
- Starting, stopping, and resetting timers
- Adding time to active timer

## Testing Checklist ✅
- [ ] Timer counts down every second
- [ ] Start button begins countdown
- [ ] Pause button freezes timer
- [ ] Reset returns to initial time
- [ ] Timer stops at 0:00
- [ ] Alert shows when timer finishes
- [ ] Work mode sets 25 minutes
- [ ] Break mode sets 5 minutes
- [ ] Colors change between modes
- [ ] Session counter increments
- [ ] Stats display correctly
- [ ] Add time button works
- [ ] Can't start multiple intervals

## Design Tips 🎨

Make your timer visually appealing:
- Large, easy-to-read timer display (72px+)
- Different background colors for work/break
- Clear button states (disabled when not applicable)
- Visual indicator of current mode
- Smooth transitions between states

Good luck building your productivity tool! 🍅⏰