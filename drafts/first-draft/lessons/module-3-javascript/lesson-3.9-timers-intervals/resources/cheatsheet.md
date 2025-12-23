# Timers and Intervals - Quick Reference Cheatsheet

## setTimeout() - Do Something Once After a Delay

### Basic Syntax
```javascript
setTimeout(function, delayInMilliseconds);
```

### Examples
```javascript
// Simple delay
setTimeout(function() {
    console.log("Hello after 2 seconds!");
}, 2000);

// With function reference
function sayHello() {
    console.log("Hello!");
}
setTimeout(sayHello, 1000);

// Store the ID to cancel later
let timerId = setTimeout(function() {
    alert("Time's up!");
}, 5000);
```

---

## clearTimeout() - Cancel a Delayed Action

### Syntax
```javascript
clearTimeout(timerID);
```

### Example
```javascript
let timerId = setTimeout(function() {
    alert("This won't show!");
}, 5000);

// Cancel it before it runs
clearTimeout(timerId);
```

---

## setInterval() - Do Something Repeatedly

### Basic Syntax
```javascript
setInterval(function, delayInMilliseconds);
```

### Examples
```javascript
// Count every second
let count = 0;
setInterval(function() {
    count++;
    console.log(count);
}, 1000);

// Update clock
setInterval(function() {
    let now = new Date();
    let time = now.getHours() + ":" + now.getMinutes();
    document.getElementById('clock').textContent = time;
}, 1000);

// Store the ID
let intervalId = setInterval(updateDisplay, 500);
```

---

## clearInterval() - Stop Repeating Actions

### Syntax
```javascript
clearInterval(intervalID);
```

### Example
```javascript
let count = 0;
let intervalId = setInterval(function() {
    count++;
    console.log(count);
    
    if (count >= 10) {
        clearInterval(intervalId); // Stop at 10
    }
}, 1000);
```

---

## Common Patterns

### Start/Stop Pattern
```javascript
let intervalId = null;

function start() {
    if (intervalId === null) {
        intervalId = setInterval(update, 1000);
    }
}

function stop() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

function update() {
    // Your code here
}
```

### Countdown Timer
```javascript
let timeLeft = 60;

let countdown = setInterval(function() {
    timeLeft--;
    console.log(timeLeft);
    
    if (timeLeft <= 0) {
        clearInterval(countdown);
        alert("Time's up!");
    }
}, 1000);
```

### Digital Clock
```javascript
function updateClock() {
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
    
    let timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);
```

---

## Working with Time

### Milliseconds Conversions
```javascript
1000;      // 1 second
2000;      // 2 seconds
500;       // 0.5 seconds (half second)
100;       // 0.1 seconds
60000;     // 1 minute (60 seconds)
3600000;   // 1 hour (60 minutes)
```

### Format Time (MM:SS)
```javascript
function formatTime(seconds) {
    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;
    
    // Add leading zeros
    mins = String(mins).padStart(2, '0');
    secs = String(secs).padStart(2, '0');
    
    return mins + ":" + secs;
}

console.log(formatTime(125)); // "02:05"
```

### Get Current Time
```javascript
let now = new Date();
let hours = now.getHours();      // 0-23
let minutes = now.getMinutes();  // 0-59
let seconds = now.getSeconds();  // 0-59
```

### Measure Elapsed Time
```javascript
let startTime = Date.now();

// ... do something ...

let endTime = Date.now();
let elapsed = endTime - startTime; // milliseconds
console.log("Took " + elapsed + "ms");
```

---

## Animation Frame Rates

### Common Intervals for Smooth Animation
```javascript
16;    // ~60 FPS (frames per second) - very smooth
33;    // ~30 FPS - smooth
50;    // 20 FPS - good for most animations
100;   // 10 FPS - slower updates
```

### Moving Animation Example
```javascript
let position = 0;

setInterval(function() {
    position += 5; // Move 5px each frame
    element.style.left = position + 'px';
    
    if (position >= 500) {
        position = 0; // Reset to start
    }
}, 50); // 20 FPS
```

---

## Common Mistakes to Avoid

### ❌ Calling Function Instead of Passing It
```javascript
// WRONG - function runs immediately!
setTimeout(myFunction(), 1000);

// RIGHT - pass function reference
setTimeout(myFunction, 1000);

// OR use anonymous function
setTimeout(function() {
    myFunction();
}, 1000);
```

### ❌ Not Storing Timer ID
```javascript
// WRONG - can't cancel this!
setTimeout(function() {
    console.log("Can't stop me!");
}, 5000);

// RIGHT - store the ID
let timerId = setTimeout(function() {
    console.log("Can be cancelled");
}, 5000);
```

### ❌ Not Cleaning Up Intervals
```javascript
// WRONG - runs forever!
setInterval(function() {
    console.log("I'll slow down your page!");
}, 1000);

// RIGHT - provide way to stop
let intervalId = setInterval(function() {
    console.log("Running...");
}, 1000);

// Stop when done
stopButton.addEventListener('click', function() {
    clearInterval(intervalId);
});
```

### ❌ Starting Multiple Intervals
```javascript
// WRONG - starts multiple intervals!
button.addEventListener('click', function() {
    setInterval(update, 1000); // Creates new interval each click!
});

// RIGHT - check if already running
let intervalId = null;

button.addEventListener('click', function() {
    if (intervalId === null) {
        intervalId = setInterval(update, 1000);
    }
});
```

---

## setTimeout vs setInterval

| Feature | setTimeout() | setInterval() |
|---------|-------------|---------------|
| **Runs** | Once | Repeatedly |
| **Use For** | Delays, one-time actions | Clocks, counters, animations |
| **Cancel With** | clearTimeout() | clearInterval() |
| **Risk** | Low | Can run forever if not stopped |
| **Example** | Show message after 3 seconds | Update clock every second |

---

## Best Practices

### 1. Always Store Timer IDs
```javascript
let timerId = setTimeout(...);
let intervalId = setInterval(...);
```

### 2. Check Before Starting
```javascript
if (intervalId === null) {
    intervalId = setInterval(update, 1000);
}
```

### 3. Always Clean Up
```javascript
// When done or component unmounts
if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
}
```

### 4. Use Named Functions for Clarity
```javascript
function updateDisplay() {
    // Complex update logic
}

setInterval(updateDisplay, 1000);
```

### 5. Handle Edge Cases
```javascript
// Stop when condition met
if (timeLeft <= 0) {
    clearInterval(countdownInterval);
    alert("Done!");
}
```

---

## Quick Tips 💡

1. **Time is in milliseconds**: Remember 1000ms = 1 second
2. **Store IDs**: Always save timer IDs so you can cancel them
3. **Check before starting**: Prevent multiple timers from running
4. **Clean up**: Always stop intervals when done
5. **Update immediately**: Call your update function once before starting interval
6. **Use appropriate delays**: 16-50ms for animations, 1000ms for clocks
7. **Test your logic**: Make sure timers stop when they should

---

## Debugging Tips

### Check if Timer is Running
```javascript
if (intervalId === null) {
    console.log("Timer is NOT running");
} else {
    console.log("Timer IS running, ID:", intervalId);
}
```

### Log Timer Events
```javascript
setInterval(function() {
    console.log("Update at:", new Date().getTime());
}, 1000);
```

### Count Interval Executions
```javascript
let count = 0;
setInterval(function() {
    count++;
    console.log("Interval executed", count, "times");
}, 1000);
```

---

Happy timing! ⏰
