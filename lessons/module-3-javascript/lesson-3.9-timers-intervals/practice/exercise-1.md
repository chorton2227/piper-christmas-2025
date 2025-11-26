# Exercise 1: Digital Clock Display ⏰

**Difficulty:** ⭐⭐  
**Concepts:** setInterval, Date object, time formatting, DOM manipulation

## Your Mission
Create a live digital clock that displays the current time and updates every second!

## Requirements

### Part 1: Basic Clock ✅
Create a digital clock that shows:
- Current hours, minutes, and seconds
- Updates every second automatically
- Uses leading zeros (show "09:05:03" not "9:5:3")
- Displays in large, easy-to-read text

### Part 2: Date Display 📅
Add a date display that shows:
- Day of the week (Monday, Tuesday, etc.)
- Month name (January, February, etc.)
- Day number (1-31)
- Full year (2025)
- Example: "Monday, December 25, 2025"

### Part 3: 12/24 Hour Format 🔄
Add a button to toggle between:
- **24-hour format**: 13:45:30
- **12-hour format**: 1:45:30 PM
- Save user preference
- Show AM/PM indicator in 12-hour mode

### Part 4: Start/Stop Control ⏯️
Add buttons to:
- **Start**: Begin updating the clock
- **Stop**: Pause the clock updates
- **Resume**: Continue from where it stopped
- Show status indicator (Running/Stopped)

## HTML Structure You'll Need
```html
<div id="clock-display">00:00:00</div>
<div id="date-display">Loading...</div>
<button id="toggle-format">Switch to 12-Hour</button>
<button id="start-clock">Start Clock</button>
<button id="stop-clock">Stop Clock</button>
<div id="status">Status: Stopped</div>
```

## JavaScript You'll Need

### Getting Current Time
```javascript
let now = new Date();
let hours = now.getHours();      // 0-23
let minutes = now.getMinutes();  // 0-59
let seconds = now.getSeconds();  // 0-59
```

### Getting Date Information
```javascript
let dayOfWeek = now.getDay();     // 0-6 (Sunday-Saturday)
let date = now.getDate();         // 1-31
let month = now.getMonth();       // 0-11 (January-December)
let year = now.getFullYear();     // 2025
```

### Adding Leading Zeros
```javascript
// If number is less than 10, add a zero in front
if (hours < 10) {
    hours = "0" + hours;
}

// Or use padStart (easier way!)
hours = String(hours).padStart(2, '0');
```

### Converting to 12-Hour Format
```javascript
let period = 'AM';
let displayHours = hours;

if (hours >= 12) {
    period = 'PM';
}

if (hours > 12) {
    displayHours = hours - 12;
}

if (hours === 0) {
    displayHours = 12; // Midnight is 12 AM
}
```

## Tips & Hints 💡

1. **Start simple**: Get a basic clock working first, then add features!

2. **Update function**: Create a function that gets the time and updates the display
   ```javascript
   function updateClock() {
       // Get current time
       // Format it
       // Update the HTML
   }
   ```

3. **Store the interval ID**: Save it so you can stop the clock later
   ```javascript
   let clockInterval = setInterval(updateClock, 1000);
   ```

4. **Arrays for names**: Use arrays to convert numbers to names
   ```javascript
   let days = ['Sunday', 'Monday', 'Tuesday', ...];
   let dayName = days[now.getDay()];
   ```

5. **Test your formatting**: Make sure times like 3:05:02 show correctly!

## Bonus Challenges 🌟

### Bonus 1: Time Zone Display
Show multiple time zones:
- Local time
- UTC/GMT time
- Another timezone of choice

### Bonus 2: Color Themes
Change clock colors based on time of day:
- 🌅 Morning (6am-12pm): Bright yellow/orange
- ☀️ Afternoon (12pm-6pm): Bright blue
- 🌆 Evening (6pm-9pm): Purple/pink
- 🌙 Night (9pm-6am): Dark blue/black

### Bonus 3: Sound on the Hour
Play a sound effect every hour on the hour!

### Bonus 4: Alarm Feature
Let users set an alarm time. When the clock reaches that time, show an alert!

## What You'll Learn 📚
- Using `setInterval()` for repeated updates
- Working with the Date object
- Time formatting and string manipulation
- Converting between 12/24 hour formats
- Controlling intervals (start/stop)
- Arrays for day and month names

## Testing Checklist ✅
- [ ] Clock displays current time
- [ ] Updates every second
- [ ] Shows leading zeros (09:05:03)
- [ ] Date displays correctly
- [ ] Toggle button switches formats
- [ ] 12-hour shows AM/PM correctly
- [ ] Start button works
- [ ] Stop button freezes clock
- [ ] Can resume after stopping
- [ ] Status indicator updates

Good luck! Time to make a clock! 🕐
