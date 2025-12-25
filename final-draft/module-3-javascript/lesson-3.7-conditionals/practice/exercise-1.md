# Exercise 1: Adventure Game 🎲

## 🎯 Objective
Build a grade calculator that takes a numerical score and converts it to a letter grade with feedback. Practice using **if/else if/else chains** and **comparison operators**.

## 📋 Requirements

### Basic Requirements
1. **Input Field**: Text input for entering a score (0-100)
2. **Calculate Button**: Triggers the grade calculation
3. **Result Display**: Shows the letter grade and feedback message

### Grading Scale
- **A**: 90-100 points
- **B**: 80-89 points
- **C**: 70-79 points
- **D**: 60-69 points
- **F**: Below 60 points

### Features to Implement

#### 1. **Input Validation**
- Check if the input is a valid number
- Check if the score is between 0 and 100
- Display error message for invalid input

#### 2. **Letter Grade Calculation**
- Use if/else if/else chain to determine letter grade
- Use comparison operators (>=, <)
- Display the letter grade prominently

#### 3. **Feedback Messages**
Each grade should have a custom feedback message:
- **A**: "Excellent work! Outstanding performance!"
- **B**: "Great job! Keep up the good work!"
- **C**: "Good effort! You're passing!"
- **D**: "You passed, but there's room for improvement."
- **F**: "Don't give up! Keep studying and try again!"

#### 4. **Visual Styling**
- Different colors for each grade level:
  - A: Green background
  - B: Light green background
  - C: Yellow background
  - D: Orange background
  - F: Red background
- Display an appropriate emoji for each grade

#### 5. **Additional Information**
Show the following details:
- The numerical score entered
- The letter grade
- Points needed to reach the next grade (if applicable)
- Percentage score

## 🌟 Bonus Challenges

### Plus/Minus Grades (Advanced)
Add support for + and - modifiers:
- **A+**: 97-100
- **A**: 93-96
- **A-**: 90-92
- **B+**: 87-89
- **B**: 83-86
- **B-**: 80-82
- And so on...

### GPA Calculator
- Convert letter grade to GPA points (A=4.0, B=3.0, etc.)
- Display the GPA equivalent

### Multiple Subjects
- Allow entering scores for multiple subjects
- Calculate overall average
- Show individual grades and overall grade

### Grade History
- Keep track of previous grades
- Display them in a list
- Calculate average of all entered grades

## 💡 Hints

### If/Else If Chain Structure
```javascript
if (score >= 90) {
    grade = 'A';
    // ... more code
} else if (score >= 80) {
    grade = 'B';
    // ... more code
} else if (score >= 70) {
    grade = 'C';
    // ... more code
}
```

### Calculating Points to Next Grade
```javascript
let pointsNeeded;
if (score < 60) {
    pointsNeeded = 60 - score;
    nextGrade = 'D';
} else if (score < 70) {
    pointsNeeded = 70 - score;
    nextGrade = 'C';
}
// ... and so on
```

### Input Validation Pattern
```javascript
const score = parseInt(inputElement.value);

if (isNaN(score)) {
    // Show error: not a number
} else if (score < 0 || score > 100) {
    // Show error: out of range
} else {
    // Valid input, calculate grade
}
```

## 🎨 Styling Tips
- Use a gradient background for the page
- Make the result box stand out with large font and clear colors
- Add hover effects to the button
- Use smooth transitions for the result appearing
- Add emojis to make it more fun: 🌟 ⭐ ✅ ⚠️ ❌

## 🧪 Test Cases
Test your calculator with these scores:
- 95 → Should show "A" with excellent feedback
- 85 → Should show "B" with great feedback
- 75 → Should show "C" with good feedback
- 65 → Should show "D" with improvement feedback
- 45 → Should show "F" with encouragement
- -10 → Should show error message
- 150 → Should show error message
- "abc" → Should show error message

## 📝 What You'll Learn
- Using if/else if/else chains
- Comparison operators (>=, <, ===)
- Input validation techniques
- Nested conditionals
- DOM manipulation for displaying results
- CSS styling based on conditions

Good luck! Remember to test your code with various inputs to make sure it handles all cases correctly! 🎓