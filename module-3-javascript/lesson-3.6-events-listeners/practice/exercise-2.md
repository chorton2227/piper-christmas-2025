# Exercise 2: Text Analyzer 📝

## Objective
Create a text input application that provides real-time feedback as the user types. Practice using input events and displaying dynamic information.

## Requirements

### 1. HTML Structure
Create an HTML page with:
- A title "Text Analyzer"
- A large textarea for typing (at least 5 rows)
- Multiple stat displays showing text information
- Character limit warning system
- Word and sentence counters
- A "Clear" button to reset the textarea

### 2. Real-Time Statistics

You must display ALL of these stats that update as the user types:

#### Character Count
- Total number of characters typed
- Should update with every keystroke
- Example: "Characters: 45"

#### Character Limit Progress
- Set a maximum limit (e.g., 280 characters like Twitter)
- Show remaining characters
- Change color as user approaches limit:
  - Green: Below 80% of limit
  - Yellow/Orange: 80-100% of limit
  - Red: Over 100% of limit

#### Word Count
- Count the number of words
- Words are separated by spaces
- Handle multiple spaces correctly
- Example: "Words: 12"

#### Sentence Count
- Count sentences (separated by `.`, `!`, or `?`)
- Example: "Sentences: 3"

#### Average Word Length
- Calculate average length of words
- Show with 1 decimal place
- Example: "Avg Word Length: 5.2 letters"

#### Longest Word
- Display the longest word in the text
- If there are multiple, show any one
- Example: "Longest: \"beautiful\""

### 3. Visual Feedback System

#### Character Limit Warnings
- **0-80% of limit**: Green background, "You're good! ✅"
- **80-100% of limit**: Yellow background, "Getting close ⚠️"
- **Over 100%**: Red background, "Too many characters! ❌"

#### Progress Bar (Optional but Recommended)
- Visual bar showing how full the character limit is
- Changes color based on percentage
- Fills up as user types

### 4. Additional Features

#### Clear Button
- Clears the textarea
- Resets all counters to 0
- Shows confirmation (optional)

#### Typing Speed Indicator (Bonus)
- Show "Typing fast! ⚡" or "Typing slow 🐢"
- Based on time between keystrokes

#### Live Preview (Bonus)
- Show formatted version of text in a separate box
- Maintains formatting and styling

## Technical Requirements

### HTML Elements Needed
```html
<!-- Example structure -->
<textarea id="textInput"></textarea>

<div class="stats">
    <div id="charCount">Characters: 0</div>
    <div id="charRemaining">Remaining: 280</div>
    <div id="wordCount">Words: 0</div>
    <div id="sentenceCount">Sentences: 0</div>
    <div id="avgWordLength">Avg Word Length: 0</div>
    <div id="longestWord">Longest Word: -</div>
</div>

<div id="warningBox">Start typing...</div>

<button id="clearBtn">Clear</button>
```

### JavaScript Functions Needed
```javascript
// Main update function (called on every input event)
function analyzeText() {
    let text = textarea.value;
    
    updateCharCount(text);
    updateWordCount(text);
    updateSentenceCount(text);
    updateAvgWordLength(text);
    updateLongestWord(text);
    updateWarnings(text);
}

function updateCharCount(text) {
    // Count characters using text.length
}

function updateWordCount(text) {
    // Split by spaces and count
    // Hint: text.split(' ')
}

function updateSentenceCount(text) {
    // Count periods, exclamations, questions
}

function updateAvgWordLength(text) {
    // Calculate average word length
}

function updateLongestWord(text) {
    // Find longest word
}

function updateWarnings(text) {
    // Change warning display based on character count
}

function clearText() {
    // Reset textarea and all counters
}
```

### Event Listeners Needed
```javascript
// Listen for input event (fires on every keystroke)
textarea.addEventListener('input', analyzeText);

// Listen for clear button
clearButton.addEventListener('click', clearText);
```

### String Methods You'll Need
- `text.length` - Get character count
- `text.split(' ')` - Split into words
- `text.split('.')` - Split into sentences
- `text.trim()` - Remove extra spaces
- `text.toLowerCase()` - Convert to lowercase (for comparison)

## Example Layout

```
┌──────────────────────────────────────────┐
│          Text Analyzer                   │
├──────────────────────────────────────────┤
│                                          │
│  ┌────────────────────────────────────┐ │
│  │                                    │ │
│  │  [Textarea for typing]             │ │
│  │                                    │ │
│  └────────────────────────────────────┘ │
│                                          │
│  ┌────────────────────────────────────┐ │
│  │  Characters: 45 / 280              │ │
│  │  Remaining: 235                     │ │
│  │  [████████░░░░░░░░] 16%            │ │
│  └────────────────────────────────────┘ │
│                                          │
│  Stats:                                  │
│  • Words: 8                              │
│  • Sentences: 2                          │
│  • Avg Word Length: 4.5                  │
│  • Longest Word: "analyzer"              │
│                                          │
│  ┌────────────────────────────────────┐ │
│  │  ✅ You're good!                   │ │
│  └────────────────────────────────────┘ │
│                                          │
│         [Clear Text]                     │
└──────────────────────────────────────────┘
```

## Styling Requirements

### CSS You Should Include
- Large, readable textarea:
  - Min height: 150px
  - Good padding
  - Clear border
  - Focus state highlight
- Stats display:
  - Grid or flex layout
  - Clear labels
  - Bold numbers
- Warning box:
  - Changes background based on status
  - Smooth transitions between colors
  - Padding and border radius
- Clear button:
  - Attractive styling
  - Hover effect

### Color Scheme
- Green zone: `#e8f5e9` background, `#2e7d32` text
- Warning zone: `#fff3e0` background, `#f57c00` text
- Danger zone: `#ffebee` background, `#c62828` text

## Testing Checklist

Before you finish, test:
- [ ] Character count updates with every keystroke
- [ ] Word count handles multiple spaces correctly
- [ ] Sentence count works with `.`, `!`, and `?`
- [ ] Average word length calculates correctly
- [ ] Longest word updates properly
- [ ] Warning colors change at correct thresholds
- [ ] Clear button resets everything
- [ ] Empty textarea shows 0 for all counts
- [ ] Typing over limit shows red warning
- [ ] No errors in console

## Calculation Examples

### Word Count
```javascript
// "Hello world" → 2 words
// "Hello   world" (extra spaces) → 2 words
// "" (empty) → 0 words

let text = "Hello world";
let words = text.trim().split(' ').filter(word => word.length > 0);
let wordCount = words.length; // 2
```

### Average Word Length
```javascript
// "cat dog bird" → (3 + 3 + 4) / 3 = 3.3

let words = ["cat", "dog", "bird"];
let totalLength = 0;
for (let i = 0; i < words.length; i++) {
    totalLength = totalLength + words[i].length;
}
let average = totalLength / words.length;
```

### Longest Word
```javascript
let words = ["cat", "dog", "elephant"];
let longest = "";

for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
        longest = words[i];
    }
}
// longest = "elephant"
```

## Bonus Challenges 🌟

If you finish early, try these:

1. **Uppercase/Lowercase Counter**: Count capital and lowercase letters
2. **Number Counter**: Count how many numbers are in the text
3. **Reading Time**: Estimate reading time (average 200 words/minute)
4. **Copy to Clipboard**: Button to copy text
5. **Save to LocalStorage**: Save text and restore on page reload
6. **Character Frequency**: Show most common letters

## Hints 💡

### Handling Empty Input
```javascript
if (text === '' || text.trim() === '') {
    // Show 0 for everything
    wordCount = 0;
    return;
}
```

### Filtering Empty Strings
```javascript
let words = text.split(' ').filter(function(word) {
    return word.length > 0;
});
```

### Percentage Calculation
```javascript
let limit = 280;
let current = text.length;
let percentage = (current / limit) * 100;

if (percentage > 100) {
    // Show danger warning
}
```

## What You'll Learn

- Using `input` events for real-time updates
- String manipulation methods (split, trim, length)
- Array operations (filter, forEach)
- Mathematical calculations with text data
- Conditional styling based on values
- Creating responsive, interactive forms

Good luck! Make your text analyzer informative and helpful! 📝