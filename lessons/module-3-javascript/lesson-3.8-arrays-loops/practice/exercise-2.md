# Exercise 2: High Score Tracker

## Objective
Build a high score tracking system for a game. Users can add scores, see the top scores, find their ranking, and view statistics. This exercise focuses on array methods, sorting, and finding values.

## What You'll Build
A high score board that:
- Accepts new scores with player names
- Displays all scores sorted from highest to lowest
- Shows top 5 scores
- Calculates and displays statistics (average, highest, lowest)
- Finds a player's ranking
- Shows score distribution

## Requirements

### 1. HTML Structure
Create an interface with:
- Input for player name
- Input for score
- "Add Score" button
- Display area for all scores (sorted)
- "Top 5" showcase section
- Statistics panel (average, highest, lowest)
- Search box to find player's rank

### 2. Data Structure
Use an array of objects to store scores:
```javascript
let scores = [
    { name: 'Alice', score: 950 },
    { name: 'Bob', score: 1200 },
    { name: 'Charlie', score: 875 }
];
```

### 3. Core Functions

#### addScore(name, score)
- Validate name is not empty
- Validate score is a number
- Validate score is between 0-1000 (or your max)
- Create score object
- Push to scores array
- Sort array by score (highest first)
- Update all displays

#### sortScores()
- Use `.sort()` method
- Sort by score descending (highest to lowest)
```javascript
scores.sort((a, b) => b.score - a.score);
```

#### displayAllScores()
- Loop through entire scores array
- Show rank number (1st, 2nd, 3rd, etc.)
- Display name and score
- Add medal/trophy for top 3
- Use different colors for rank tiers

#### displayTop5()
- Use `.slice(0, 5)` to get first 5 items
- Display in special "Top 5" section
- Show rank, name, and score
- Add special styling (gold, silver, bronze)

#### calculateStats()
- **Highest:** Find max score
- **Lowest:** Find min score  
- **Average:** Sum all scores ÷ count
- **Total Players:** Array length
- Display all statistics nicely

#### findRank(playerName)
- Search through scores array
- Find index of player
- Rank = index + 1 (since arrays start at 0)
- Display: "Alice is ranked #3 with 950 points"
- If not found: "Player not found"

#### clearScores()
- Confirm with user first!
- Reset scores array to `[]`
- Update all displays

### 4. Display Features
- Rank badges (🥇🥈🥉 for top 3)
- Color coding: Gold (#FFD700), Silver (#C0C0C0), Bronze (#CD7F32)
- Score bars (visual representation of score)
- Total player count
- Statistics in a grid layout

### 5. Input Validation
Check for:
- Empty name → "Please enter player name"
- Empty score → "Please enter a score"
- Score not a number → "Score must be a number"
- Score out of range → "Score must be between 0 and 1000"
- Duplicate entry → Optional: ask if they want to update

## Bonus Challenges

### Challenge 1: Score Distribution Chart
- Count how many scores in each range:
  - 0-200
  - 201-400
  - 401-600
  - 601-800
  - 801-1000
- Display as simple bar chart using divs

### Challenge 2: Filter by Score Range
- Add min/max filter inputs
- Button to "Show Scores Between X and Y"
- Loop through array, only display matching scores
- Still show total count

### Challenge 3: Remove Individual Scores
- Add "Remove" button next to each score
- Confirm before removing
- Update all displays and statistics

### Challenge 4: Percentage Ranking
- Show percentage (e.g., "Top 15%")
- Calculate: (rank / total players) × 100

### Challenge 5: Score History
- Track when scores were added (timestamp)
- Show date/time with each score
- Sort by date or score
- Filter to "Today's Scores" or "This Week"

## Example Output
```
━━━━━━ TOP 5 ━━━━━━
🥇 1. Bob - 1200 pts
🥈 2. Alice - 950 pts
🥉 3. Charlie - 875 pts
   4. Diana - 820 pts
   5. Eve - 750 pts

━━━━━━ STATISTICS ━━━━━━
Highest Score: 1200
Lowest Score: 480
Average Score: 857.5
Total Players: 8

━━━━━━ ALL SCORES ━━━━━━
1. Bob - 1200 ██████████
2. Alice - 950 ████████
3. Charlie - 875 ███████
[... more scores ...]
```

## Tips

### Sorting Arrays
```javascript
// Sort highest to lowest
scores.sort((a, b) => b.score - a.score);

// Sort lowest to highest
scores.sort((a, b) => a.score - b.score);

// Sort alphabetically by name
scores.sort((a, b) => a.name.localeCompare(b.name));
```

### Finding Maximum
```javascript
// Method 1: Loop
let highest = scores[0].score;
for (let i = 1; i < scores.length; i++) {
    if (scores[i].score > highest) {
        highest = scores[i].score;
    }
}

// Method 2: Modern approach
let highest = Math.max(...scores.map(s => s.score));
```

### Calculating Average
```javascript
let sum = 0;
for (let i = 0; i < scores.length; i++) {
    sum += scores[i].score;
}
let average = sum / scores.length;
```

### Finding Player
```javascript
for (let i = 0; i < scores.length; i++) {
    if (scores[i].name === playerName) {
        let rank = i + 1;
        console.log(playerName, 'is rank', rank);
        break;
    }
}
```

### Slice for Top N
```javascript
let top5 = scores.slice(0, 5);  // Get first 5 items
```

## Testing Checklist
- [ ] Can add scores
- [ ] Scores sort correctly (highest first)
- [ ] Top 5 displays correctly
- [ ] Statistics calculate accurately
- [ ] Can find player's rank
- [ ] Can clear all scores (with confirmation)
- [ ] Medals show for top 3
- [ ] Input validation works
- [ ] Empty scoreboard shows helpful message
- [ ] Duplicate names handled (optional)

## Common Mistakes to Avoid
1. **Forgetting to sort** after adding new score
2. **Not converting score to number** → Use `parseInt()` or `parseFloat()`
3. **Off-by-one error** in ranking (remember arrays start at 0)
4. **Not handling empty array** → Check `scores.length === 0`
5. **Incorrect average calculation** → Divide by length, not hard-coded number

## Estimated Time
45-60 minutes for basic version
+20-30 minutes for each bonus challenge

## What You'll Learn
- Sorting arrays with custom comparisons
- Finding maximum and minimum values
- Calculating averages and statistics
- Searching arrays for specific values
- Using `slice()` to get portion of array
- Working with array of objects
- Ranking and ordering data

Ready to build? Start in your `student-workspace` folder! 🏆
