# Exercise 3: Random Quiz Generator

Create a quiz that randomly selects questions and answers from a question bank!

## Your Task

Create a file called `quiz-generator.html` that includes:

### Part 1: Question Bank
Create arrays with at least 10 questions:
- Store questions in an array
- Store corresponding answers in another array
- Include different subjects (math, science, history, etc.)

### Part 2: Random Question Selection
- Display a random question from your question bank
- Show multiple choice answers (one correct, three wrong)
- Shuffle the answer choices so they appear in random order
- Check if the player selected the correct answer

### Part 3: Quiz Game
Build a complete quiz:
- Ask 5 random questions (no repeats)
- Keep track of correct/incorrect answers
- Show score at the end
- Display which questions were missed

### Part 4: Feedback System
Give immediate feedback:
- Green "Correct!" for right answers
- Red "Wrong!" for incorrect answers
- Show the correct answer if wrong
- Display running score (e.g., "3/5")

### Bonus Challenges
- Add a timer for each question
- Create different difficulty levels
- Add categories (player chooses category)
- Include a "50/50" power-up that removes two wrong answers
- Save high scores to show best performances
- Add fun facts after each question
- Create a "sudden death" mode (one wrong answer ends game)

## What You'll Practice
- Storing data in arrays
- Random selection from arrays
- Preventing duplicate selections
- Shuffling arrays
- Comparing user input to correct answers
- Tracking game state across multiple questions

## Hints
- Pick random question: `questions[Math.floor(Math.random() * questions.length)]`
- To prevent duplicates, remove selected questions from array
- Or track used indices in a separate array
- Shuffle array using Fisher-Yates algorithm
- Store correct answer index before shuffling

## Example Question Bank Structure
```javascript
let questions = [
    "What is 7 × 8?",
    "What is the capital of France?",
    "How many planets are in our solar system?"
];

let correctAnswers = [
    "56",
    "Paris",
    "8"
];

let wrongAnswers = [
    ["42", "54", "63"],
    ["London", "Berlin", "Madrid"],
    ["7", "9", "10"]
];
```

## Example Output
```
🧠 Random Quiz

Question 1 of 5:
What is 7 × 8?

A) 42
B) 54
C) 56 ✓
D) 63

✅ Correct! Great job!
Score: 1/1

[Next Question]

---

Final Results:
🎉 You scored 4 out of 5!

Questions Missed:
❌ Question 3: "What is the capital of France?"
   Your answer: London
   Correct answer: Paris
```

Good luck! 🧠
