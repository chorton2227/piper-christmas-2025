# Lesson 3.9: Timers and Intervals

## What You'll Learn
In this lesson, you'll learn how to make things happen after a delay or repeatedly over time! You'll create countdown timers, animations, digital clocks, and interactive games that change over time.

## Why Timers Matter
Timers let your code wait before doing something or do something repeatedly. This is how websites create animations, update clocks, create games with time limits, and make things appear or disappear after a delay!

## Real-World Examples
- **Digital Clocks** - Update every second to show current time
- **Countdown Timers** - Count down to zero for games or events
- **Animations** - Make things move smoothly across the screen
- **Auto-Save** - Save your work every few minutes automatically
- **Slideshow** - Change pictures every few seconds
- **Game Updates** - Check game state 60 times per second

---

## Part 1: setTimeout() - Do Something Once After a Delay

### What is setTimeout()?
`setTimeout()` waits for a certain amount of time, then runs your code once. Think of it like setting a kitchen timer!

### Basic Syntax
```javascript
setTimeout(function() {
    // Code to run after the delay
}, delayInMilliseconds);
```

### Understanding Milliseconds
- 1 second = 1000 milliseconds
- 2 seconds = 2000 milliseconds
- 0.5 seconds = 500 milliseconds
- 5 seconds = 5000 milliseconds

### Example: Simple Delayed Message
```javascript
console.log("Starting timer...");

setTimeout(function() {
    console.log("3 seconds have passed!");
}, 3000);

console.log("Timer set! Waiting...");
```

**Important**: The code after `setTimeout()` runs immediately! The timer just schedules something for later.

### Example: Delayed Button Click
```javascript
let button = document.getElementById('myButton');

button.addEventListener('click', function() {
    console.log("Button clicked!");
    console.log("Starting 2 second countdown...");
    
    setTimeout(function() {
        alert("Time's up!");
    }, 2000);
});
```

### Storing Timer IDs
When you create a timer, you get back an ID number. You can save this to cancel the timer later!

```javascript
let timerId = setTimeout(function() {
    console.log("This might not run!");
}, 5000);

// Save the ID so we can cancel it if needed
```

---

## Part 2: clearTimeout() - Cancel a Delayed Action

### Why Cancel Timers?
Sometimes you want to stop a timer before it runs:
- User clicked "Cancel"
- User left the page
- Conditions changed and you don't need the action anymore

### Syntax
```javascript
clearTimeout(timerId);
```

### Example: Cancelable Countdown
```javascript
let timerId;

// Start button
document.getElementById('start').addEventListener('click', function() {
    console.log("Bomb will explode in 5 seconds!");
    
    timerId = setTimeout(function() {
        alert("💣 BOOM!");
    }, 5000);
});

// Cancel button
document.getElementById('defuse').addEventListener('click', function() {
    clearTimeout(timerId);
    console.log("💪 Bomb defused! Crisis averted!");
});
```

---

## Part 3: setInterval() - Do Something Repeatedly

### What is setInterval()?
`setInterval()` runs your code over and over again with a delay between each run. Perfect for clocks, animations, and ongoing updates!

### Basic Syntax
```javascript
setInterval(function() {
    // Code to run repeatedly
}, delayInMilliseconds);
```

### Example: Counting Up
```javascript
let count = 0;

setInterval(function() {
    count++;
    console.log("Count: " + count);
}, 1000); // Every 1 second

// This will count forever: 1, 2, 3, 4, 5...
```

### Example: Digital Clock
```javascript
setInterval(function() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Add leading zeros if needed
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    
    let timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById('clock').textContent = timeString;
}, 1000); // Update every second
```

---

## Part 4: clearInterval() - Stop Repeating Actions

### Why Stop Intervals?
Unlike `setTimeout()` which runs once, intervals run forever unless you stop them! Always clean up intervals when you're done.

### Syntax
```javascript
clearInterval(intervalId);
```

### Example: Start/Stop Stopwatch
```javascript
let seconds = 0;
let intervalId = null;

// Start button
document.getElementById('start').addEventListener('click', function() {
    if (intervalId === null) { // Only start if not already running
        intervalId = setInterval(function() {
            seconds++;
            document.getElementById('display').textContent = seconds + " seconds";
        }, 1000);
    }
});

// Stop button
document.getElementById('stop').addEventListener('click', function() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null; // Mark as stopped
    }
});

// Reset button
document.getElementById('reset').addEventListener('click', function() {
    clearInterval(intervalId);
    intervalId = null;
    seconds = 0;
    document.getElementById('display').textContent = "0 seconds";
});
```

---

## Part 5: Creating Animations

### Simple Movement Animation
```javascript
let position = 0;

setInterval(function() {
    position += 5; // Move 5 pixels each time
    let box = document.getElementById('movingBox');
    box.style.left = position + 'px';
    
    // Stop when it reaches the edge
    if (position >= 500) {
        position = 0; // Reset to start
    }
}, 50); // Update 20 times per second (1000ms / 50ms = 20)
```

### Smooth Animation Pattern
For smooth animations, use small delays (16-50ms) and small movements!
- 16ms = ~60 updates per second (very smooth)
- 33ms = ~30 updates per second (smooth)
- 50ms = 20 updates per second (good for most things)

---

## Part 6: Countdown Timers

### Creating a Countdown
```javascript
let timeLeft = 10; // Start at 10 seconds

let countdownInterval = setInterval(function() {
    timeLeft--;
    document.getElementById('timer').textContent = timeLeft + " seconds";
    
    if (timeLeft <= 0) {
        clearInterval(countdownInterval); // Stop when done!
        document.getElementById('timer').textContent = "Time's up!";
        alert("⏰ Timer finished!");
    }
}, 1000);
```

### Formatting Time (MM:SS)
```javascript
function formatTime(totalSeconds) {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    
    // Add leading zeros
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    
    return minutes + ":" + seconds;
}

let timeLeft = 125; // 2 minutes 5 seconds
console.log(formatTime(timeLeft)); // "02:05"
```

---

## Common Patterns and Best Practices

### 1. Always Store Timer IDs
```javascript
// ❌ BAD - Can't cancel this timer!
setTimeout(function() {
    console.log("Can't stop me!");
}, 5000);

// ✅ GOOD - Can cancel if needed
let timerId = setTimeout(function() {
    console.log("Can be cancelled");
}, 5000);
```

### 2. Check Before Clearing
```javascript
let intervalId = null;

function startTimer() {
    // Only start if not already running
    if (intervalId === null) {
        intervalId = setInterval(doSomething, 1000);
    }
}

function stopTimer() {
    // Only stop if running
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
}
```

### 3. Always Clean Up Intervals
```javascript
// ❌ BAD - Interval runs forever!
setInterval(function() {
    console.log("I'll run forever and slow down the page!");
}, 1000);

// ✅ GOOD - Save ID and provide way to stop
let intervalId = setInterval(function() {
    console.log("Running...");
}, 1000);

// Stop it when done
document.getElementById('stopButton').addEventListener('click', function() {
    clearInterval(intervalId);
});
```

### 4. Use Named Functions for Clarity
```javascript
// Instead of anonymous functions
setInterval(function() {
    updateClock();
    checkAlarms();
    saveData();
}, 1000);

// Use a named function
function everySecond() {
    updateClock();
    checkAlarms();
    saveData();
}

setInterval(everySecond, 1000);
```

---

## Debugging Timer Issues

### Problem: Timer Not Working
```javascript
// ❌ Common mistake - function runs immediately!
setTimeout(myFunction(), 1000); // Wrong!

// ✅ Correct - pass the function itself
setTimeout(myFunction, 1000); // Right!

// OR use anonymous function
setTimeout(function() {
    myFunction();
}, 1000);
```

### Problem: Multiple Timers Running
```javascript
// Always check if already running before starting
if (timerId === null) {
    timerId = setInterval(doSomething, 1000);
}
```

### Problem: Timer Doesn't Stop
```javascript
// Make sure you're clearing the right timer ID!
let correctId = setInterval(doSomething, 1000);
clearInterval(correctId); // Must use the same ID
```

---

## Quick Reference

### setTimeout() vs setInterval()
| Feature | setTimeout() | setInterval() |
|---------|-------------|---------------|
| **Runs** | Once | Repeatedly |
| **Use for** | Delays, one-time actions | Clocks, animations, polling |
| **Cancel with** | clearTimeout() | clearInterval() |
| **Danger** | Less risky | Can slow page if not stopped |

### Common Time Values
```javascript
50;     // 0.05 seconds - smooth animation
100;    // 0.1 seconds - fast updates
250;    // 0.25 seconds - quarter second
500;    // 0.5 seconds - half second
1000;   // 1 second - one second
2000;   // 2 seconds
5000;   // 5 seconds
10000;  // 10 seconds
60000;  // 1 minute (60 seconds)
```

### Timer Template
```javascript
let timerId = null; // Store the ID

function start() {
    if (timerId === null) {
        timerId = setInterval(update, 1000);
    }
}

function stop() {
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
    }
}

function update() {
    // Your repeating code here
}
```

---

## Try the Examples!
Open the example HTML files to see timers in action:
1. `example-1-settimeout.html` - Delayed actions and messages
2. `example-2-setinterval.html` - Repeating updates and counters
3. `example-3-clock-timer.html` - Digital clock and countdown timer
4. `example-4-animations.html` - Moving elements and visual effects

---

## Practice Exercises
After understanding the examples, try these challenges:
1. **Exercise 1**: Digital Clock - Display current time updating every second
2. **Exercise 2**: Pomodoro Timer - 25-minute work timer with start/stop/reset
3. **Exercise 3**: Reaction Game - Test how fast users can click after a random delay

Each exercise has detailed requirements in the `practice/` folder!

---

## Key Takeaways
✅ `setTimeout()` runs code once after a delay  
✅ `clearTimeout()` cancels a scheduled timeout  
✅ `setInterval()` runs code repeatedly with delays between runs  
✅ `clearInterval()` stops a repeating interval  
✅ Always store timer IDs so you can cancel them  
✅ Always clean up intervals when done  
✅ Time is measured in milliseconds (1000 = 1 second)  
✅ Small delays (16-50ms) make smooth animations  
✅ Check if timer is running before starting a new one  

---

## Parent Note
Timers introduce asynchronous programming - code that doesn't run immediately but is scheduled for later. This is a big concept! Use physical timers and countdown examples to make it concrete. The clock and animation examples are especially engaging for visual learners. Watch for the common mistake of calling functions immediately: `setTimeout(func(), 1000)` vs `setTimeout(func, 1000)`.

Happy timing! 🕐⏰
