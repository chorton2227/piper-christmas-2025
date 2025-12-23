# Exercise 2: Number Guessing Game

Create a number guessing game where the computer picks a random number and gives hints!

## Your Task

Create a file called `guessing-game.html` that includes:

### Part 1: Basic Game
- Computer picks a random number between 1 and 100
- Player enters a guess
- Show if the guess is correct, too high, or too low
- Keep track of how many attempts it takes
- Show a success message when correct

### Part 2: Better Feedback
Give the player helpful hints:
- "Way too high!" if more than 20 away
- "Getting close!" if within 10
- "Very close!" if within 5
- "You got it!" when correct

### Part 3: Difficulty Levels
Add buttons to choose difficulty:
- **Easy**: 1-50 (smaller range)
- **Medium**: 1-100 (default)
- **Hard**: 1-500 (larger range)
- **Expert**: 1-1000 (huge range!)

### Part 4: Game Statistics
Track and display:
- Current number of attempts
- Best score (fewest attempts)
- Total games played
- Win rate percentage

### Bonus Challenges
- Add a "Give Up" button that reveals the number
- Show a list of previous guesses
- Add a hint system (costs extra attempts)
- Implement a scoring system (fewer guesses = higher score)
- Add sound effects or animations for wins
- Create a "streak" counter for consecutive wins

## What You'll Practice
- Generating random numbers with `Math.random()`
- Comparing numbers with conditionals
- Using `Math.abs()` to find distance between numbers
- Input validation
- Updating game state
- Calculating percentages and averages

## Hints
- Generate random number: `Math.floor(Math.random() * 100) + 1`
- Get distance: `Math.abs(guess - secretNumber)`
- Store the secret number in a variable at game start
- Reset the game by picking a new random number
- Use `parseInt()` to convert input text to a number

## Example Output
```
🔢 Guess the Number!

Difficulty: Medium (1-100)
Attempts: 3

Your guess: 50
📈 Too low! Try a higher number.

Your guess: 75
📉 Too high! Try a lower number.

Your guess: 62
🎯 Very close!

Your guess: 67
🎉 Correct! You got it in 4 attempts!

Best Score: 4 attempts
Games Played: 1
```

Good luck! 🎯
