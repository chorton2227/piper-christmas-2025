# Exercise 1: Dice Roller

Create an interactive dice roller that can roll different numbers and types of dice!

## Your Task

Create a file called `dice-roller.html` that includes:

### Part 1: Single Die Roller
- A button to roll a 6-sided die
- Display the result in large text
- Show what number was rolled (1-6)

### Part 2: Multiple Dice
- Buttons to roll different numbers of dice:
  - 2 dice (2d6)
  - 3 dice (3d6)
  - 5 dice (5d6)
- Display each die result separately
- Show the total of all dice

### Part 3: Different Die Types
- Add buttons for different die sizes:
  - d4 (4-sided die: 1-4)
  - d6 (6-sided die: 1-6)
  - d8 (8-sided die: 1-8)
  - d10 (10-sided die: 1-10)
  - d20 (20-sided die: 1-20)

### Part 4: Statistics Tracking
Keep track of:
- Total number of rolls made
- Highest roll ever
- Lowest roll ever
- Average roll

### Bonus Challenges
- Add visual dice faces (use emoji or CSS)
- Add a "roll animation" that shows "rolling..." before the result
- Create a "critical hit" message when rolling the maximum number
- Add a reset button to clear all statistics

## What You'll Practice
- `Math.random()` to generate random numbers
- `Math.floor()` to round down to integers
- Creating random numbers in different ranges
- Keeping track of multiple values in variables
- DOM manipulation to update displays
- Event handlers for buttons

## Hints
- To get a random number from 1 to 6: `Math.floor(Math.random() * 6) + 1`
- To roll multiple dice, use a loop
- Store dice results in an array
- Use `.reduce()` or a loop to sum the total
- Remember to update stats after each roll

## Example Output
```
🎲 Dice Roller

Roll: 2d6
Die 1: 4
Die 2: 6
Total: 10

Statistics:
Total Rolls: 15
Highest Roll: 12
Lowest Roll: 2
Average: 7.3
```

Good luck! 🎲
