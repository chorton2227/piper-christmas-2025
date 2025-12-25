
Create your own debugging tools to help find bugs faster!

## Your Task

Create `debug-toolkit.html` with a collection of useful debugging utilities.

---

## Requirements

Build these debugging tools:

### Tool 1: Enhanced Console Logger
Create a better console.log that shows:
- Timestamp
- Variable name and value
- Data type
- Call location

```javascript
// Example usage:
debugLog("score", score);

// Output:
// [12:34:56] score = 42 (number) at line 15
```

### Tool 2: Variable Watcher
Track how a variable changes over time:

```javascript
// Example usage:
watch("playerHealth");
playerHealth = 100;  // Logged automatically
playerHealth -= 10;  // Logged automatically
unwatch("playerHealth");
```

### Tool 3: Function Timer
Measure how long functions take to run:

```javascript
// Example usage:
timed("calculateScore", function() {
    // Your code here
    return score * multiplier;
});

// Output: calculateScore took 0.042ms
```

### Tool 4: Error Boundary
Catch errors and show helpful messages:

```javascript
// Example usage:
safeCall(riskyFunction, arg1, arg2);

// If error occurs:
// ❌ Error in riskyFunction: Cannot read property 'x' of undefined
// 💡 Tip: Check if object exists before accessing properties
```

### Tool 5: State Inspector
Show current state of all variables:

```javascript
// Example usage:
inspectState();

// Output table showing all variables, types, and values
```

---

## Starter Code

```html
<!DOCTYPE html>
<html>
<head>
    <title>Debugging Toolkit</title>
    <style>
        body {
            font-family: 'Courier New', monospace;
            padding: 20px;
            background: #1e1e1e;
            color: #d4d4d4;
        }
        
        h1, h2 {
            color: #4ec9b0;
        }
        
        button {
            background: #0e639c;
            color: white;
            border: none;
            padding: 10px 20px;
            margin: 5px;
            cursor: pointer;
            font-family: 'Courier New';
        }
        
        button:hover {
            background: #1177bb;
        }
        
        .console {
            background: #1e1e1e;
            border: 2px solid #3c3c3c;
            padding: 15px;
            margin: 15px 0;
            max-height: 400px;
            overflow-y: auto;
            font-size: 14px;
        }
        
        .log-entry {
            margin: 5px 0;
            padding: 5px;
            border-left: 3px solid #4ec9b0;
        }
        
        .log-error {
            border-left-color: #f48771;
            color: #f48771;
        }
        
        .log-warning {
            border-left-color: #dcdcaa;
            color: #dcdcaa;
        }
        
        .log-info {
            border-left-color: #569cd6;
            color: #569cd6;
        }
        
        .timestamp {
            color: #858585;
        }
        
        .variable-name {
            color: #9cdcfe;
            font-weight: bold;
        }
        
        .data-type {
            color: #4ec9b0;
            font-style: italic;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 10px 0;
        }
        
        th, td {
            border: 1px solid #3c3c3c;
            padding: 8px;
            text-align: left;
        }
        
        th {
            background: #2d2d30;
            color: #4ec9b0;
        }
        
        .tip {
            background: #1e3a5f;
            border-left: 4px solid #569cd6;
            padding: 10px;
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <h1>🛠️ JavaScript Debugging Toolkit</h1>
    
    <div id="output" class="console"></div>
    
    <h2>Tool Tests</h2>
    
    <button onclick="testDebugLog()">Test Debug Logger</button>
    <button onclick="testWatcher()">Test Variable Watcher</button>
    <button onclick="testTimer()">Test Function Timer</button>
    <button onclick="testErrorBoundary()">Test Error Boundary</button>
    <button onclick="testStateInspector()">Test State Inspector</button>
    <button onclick="clearOutput()">Clear Console</button>

    <script>
        // Output helper
        function output(message, type = 'log') {
            let outputDiv = document.getElementById("output");
            let entry = document.createElement("div");
            entry.className = "log-entry log-" + type;
            entry.innerHTML = message;
            outputDiv.appendChild(entry);
            outputDiv.scrollTop = outputDiv.scrollHeight;
        }
        
        function clearOutput() {
            document.getElementById("output").innerHTML = "";
        }
        
        // ==============================================
        // TOOL 1: ENHANCED CONSOLE LOGGER
        // ==============================================
        // TODO: Create debugLog function
        // Should show: timestamp, variable name, value, type
        // Example: [12:34:56] score = 42 (number)
        
        function debugLog(name, value) {
            // Get current time
            // TODO: Format time as HH:MM:SS
            
            // Get data type
            // TODO: Use typeof or better detection
            
            // TODO: Format and output the log message
        }
        
        // ==============================================
        // TOOL 2: VARIABLE WATCHER
        // ==============================================
        // TODO: Create watch and unwatch functions
        // Hint: Store watched variables in an object
        // Hint: Use Object.defineProperty to intercept changes
        
        let watchers = {};
        
        function watch(name) {
            // TODO: Implement variable watching
            // Log whenever variable changes
        }
        
        function unwatch(name) {
            // TODO: Stop watching variable
        }
        
        // ==============================================
        // TOOL 3: FUNCTION TIMER
        // ==============================================
        // TODO: Create timed function
        // Should measure execution time in milliseconds
        
        function timed(name, func, ...args) {
            // TODO: Get start time
            // TODO: Run function
            // TODO: Get end time
            // TODO: Calculate and log duration
        }
        
        // ==============================================
        // TOOL 4: ERROR BOUNDARY
        // ==============================================
        // TODO: Create safeCall function
        // Should catch errors and show helpful messages
        
        let errorTips = {
            "undefined": "💡 Check if variable is defined before using it",
            "null": "💡 Check if object exists before accessing properties",
            "not a function": "💡 Make sure you're calling a function, not a variable",
            "Cannot read": "💡 Object might be null or undefined",
            "is not defined": "💡 Check variable name spelling and scope"
        };
        
        function safeCall(func, ...args) {
            // TODO: Use try-catch
            // TODO: Show error message
            // TODO: Show helpful tip based on error
        }
        
        function getErrorTip(errorMessage) {
            // TODO: Check error message and return helpful tip
        }
        
        // ==============================================
        // TOOL 5: STATE INSPECTOR
        // ==============================================
        // TODO: Create inspectState function
        // Should show all variables in a table
        
        function inspectState() {
            // TODO: Get all global variables
            // TODO: Create HTML table
            // TODO: Show name, type, value for each
        }
        
        function getType(value) {
            // TODO: Better type detection than typeof
            // Handle: null, array, object, etc.
        }
        
        function formatValue(value) {
            // TODO: Format value for display
            // Shorten long strings, show array length, etc.
        }
        
        // ==============================================
        // TEST FUNCTIONS
        // ==============================================
        
        function testDebugLog() {
            output("<strong>Testing Debug Logger:</strong>");
            let score = 42;
            let name = "Alice";
            let items = ["sword", "shield"];
            
            // TODO: Use your debugLog function
            // debugLog("score", score);
            // debugLog("name", name);
            // debugLog("items", items);
        }
        
        function testWatcher() {
            output("<strong>Testing Variable Watcher:</strong>");
            
            // TODO: Create a variable to watch
            // TODO: Use watch() function
            // TODO: Change variable several times
            // TODO: Use unwatch() function
        }
        
        function testTimer() {
            output("<strong>Testing Function Timer:</strong>");
            
            // Test fast function
            timed("fastFunction", function() {
                let sum = 0;
                for (let i = 0; i < 100; i++) {
                    sum += i;
                }
                return sum;
            });
            
            // Test slow function
            timed("slowFunction", function() {
                let sum = 0;
                for (let i = 0; i < 1000000; i++) {
                    sum += i;
                }
                return sum;
            });
        }
        
        function testErrorBoundary() {
            output("<strong>Testing Error Boundary:</strong>");
            
            // Test 1: Undefined variable
            safeCall(function() {
                console.log(nonExistentVariable);
            });
            
            // Test 2: Calling non-function
            safeCall(function() {
                let notAFunction = 42;
                notAFunction();
            });
            
            // Test 3: Null property access
            safeCall(function() {
                let obj = null;
                console.log(obj.property);
            });
            
            // Test 4: Working function
            safeCall(function() {
                output("✅ This function works fine!", "info");
            });
        }
        
        function testStateInspector() {
            output("<strong>Testing State Inspector:</strong>");
            
            // Create some test variables
            window.testScore = 100;
            window.testName = "Bob";
            window.testActive = true;
            window.testItems = ["potion", "key"];
            
            inspectState();
        }
    </script>
</body>
</html>
```

---

## Implementation Guide

### Tool 1: Enhanced Console Logger

```javascript
function debugLog(name, value) {
    // 1. Get current time
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    let timestamp = `${hours}:${minutes}:${seconds}`;
    
    // 2. Get type
    let type = typeof value;
    // Better type detection for arrays
    if (Array.isArray(value)) type = 'array';
    if (value === null) type = 'null';
    
    // 3. Format value
    let displayValue = value;
    if (type === 'array' || type === 'object') {
        displayValue = JSON.stringify(value);
    }
    
    // 4. Output formatted message
    output(
        `<span class="timestamp">[${timestamp}]</span> ` +
        `<span class="variable-name">${name}</span> = ${displayValue} ` +
        `<span class="data-type">(${type})</span>`
    );
}
```

### Tool 2: Variable Watcher

This is advanced! You'll need to learn about:
- Object.defineProperty
- Getters and setters
- Closures

```javascript
let watchers = {};

function watch(name) {
    // Store original value
    let value = window[name];
    
    // Log initial value
    debugLog(name, value);
    output(`👁️ Now watching: ${name}`, 'info');
    
    // Create getter/setter to intercept changes
    Object.defineProperty(window, name, {
        get: function() {
            return value;
        },
        set: function(newValue) {
            debugLog(name, newValue);
            value = newValue;
        }
    });
    
    watchers[name] = true;
}
```

### Tool 3: Function Timer

```javascript
function timed(name, func, ...args) {
    // Get start time
    let start = performance.now();
    
    // Run function
    let result = func(...args);
    
    // Get end time
    let end = performance.now();
    
    // Calculate duration
    let duration = (end - start).toFixed(3);
    
    // Output result
    output(`⏱️ ${name} took ${duration}ms`, 'info');
    
    return result;
}
```

### Tool 4: Error Boundary

```javascript
function safeCall(func, ...args) {
    try {
        return func(...args);
    } catch (error) {
        // Show error
        output(`❌ Error: ${error.message}`, 'error');
        
        // Show helpful tip
        let tip = getErrorTip(error.message);
        if (tip) {
            output(`<div class="tip">${tip}</div>`);
        }
    }
}

function getErrorTip(errorMessage) {
    for (let key in errorTips) {
        if (errorMessage.includes(key)) {
            return errorTips[key];
        }
    }
    return null;
}
```

### Tool 5: State Inspector

```javascript
function inspectState() {
    // Create table HTML
    let html = '<table><tr><th>Variable</th><th>Type</th><th>Value</th></tr>';
    
    // Get all global variables
    for (let key in window) {
        // Skip built-in properties
        if (key.startsWith('test') || key === 'score' || key === 'name') {
            let value = window[key];
            let type = getType(value);
            let displayValue = formatValue(value);
            
            html += `<tr>
                <td class="variable-name">${key}</td>
                <td class="data-type">${type}</td>
                <td>${displayValue}</td>
            </tr>`;
        }
    }
    
    html += '</table>';
    output(html);
}
```

---

## Testing Checklist

- [ ] Debug logger shows timestamp
- [ ] Debug logger shows variable name
- [ ] Debug logger shows value
- [ ] Debug logger shows data type
- [ ] Variable watcher logs changes
- [ ] Variable watcher can be turned off
- [ ] Function timer measures execution time
- [ ] Function timer works with fast and slow functions
- [ ] Error boundary catches errors
- [ ] Error boundary shows helpful tips
- [ ] State inspector shows all variables
- [ ] State inspector formats values nicely

---

## Bonus Challenges

### Easy:
- Add color coding for different value types
- Add copy-to-clipboard button for logs
- Add filter to show only errors/warnings
- Add export logs to file

### Medium:
- Add call stack tracing
- Add memory usage monitoring
- Add network request logging
- Create visual timeline of function calls

### Hard:
- Add breakpoint simulator
- Create visual debugger with step through
- Add code coverage analyzer
- Create performance profiler

---

## Real-World Applications

Professional developers use similar tools:
- **Chrome DevTools** - Built-in browser debugger
- **Sentry** - Error tracking service
- **LogRocket** - Session replay and logging
- **New Relic** - Performance monitoring
- **Console.log alternatives** - Debug, Winston, Pino

Your toolkit is a mini version of these professional tools!

---

## Learning Objectives

By completing this exercise, you'll learn:
- Creating reusable debugging utilities
- Working with timers and performance
- Error handling with try-catch
- Property interception with getters/setters
- Formatting data for display
- Building developer tools

---

## Hints

<details>
<summary>Hint 1: Getting Current Time</summary>

```javascript
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
```

Use `.padStart(2, '0')` to add leading zeros!
</details>

<details>
<summary>Hint 2: Measuring Time</summary>

```javascript
let start = performance.now();
// ... code to measure ...
let end = performance.now();
let duration = end - start;
```
</details>

<details>
<summary>Hint 3: Try-Catch</summary>

```javascript
try {
    // Code that might error
} catch (error) {
    // Handle the error
    console.log(error.message);
}
```
</details>

<details>
<summary>Hint 4: Better Type Detection</summary>

```javascript
function getType(value) {
    if (value === null) return 'null';
    if (Array.isArray(value)) return 'array';
    if (value instanceof Date) return 'date';
    return typeof value;
}
```
</details>

<details>
<summary>Hint 5: Formatting Long Values</summary>

```javascript
function formatValue(value) {
    let str = String(value);
    if (str.length > 50) {
        return str.substring(0, 50) + '...';
    }
    return str;
}
```
</details>

---

Good luck building your debugging toolkit! 🛠️

**Remember:** The best debugger is the one you build yourself!