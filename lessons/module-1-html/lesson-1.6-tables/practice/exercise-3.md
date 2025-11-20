# Exercise 3: Sports Stats Dashboard

## 📝 Instructions

Create an HTML page called `sports-stats.html` with multiple tables showing statistics for your favorite sport or game.

## Requirements

Create **THREE separate tables** on one page:

### Table 1: Player Statistics
Show individual player stats with columns like:
- Player Name
- Position/Role
- Points/Score
- Games Played
- Average

Include at least **6 players**

### Table 2: Team Standings
Show team rankings with columns like:
- Rank
- Team Name
- Wins
- Losses
- Points

Include at least **5 teams**
Use `<thead>`, `<tbody>`, and `<tfoot>` sections

### Table 3: Season Schedule
Show upcoming or past games with columns like:
- Date
- Home Team
- Away Team
- Score/Time
- Location

Include at least **4 games**

## Example Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sports Stats Dashboard</title>
</head>
<body>
    <h1>2025 Basketball Season Stats</h1>
    
    <h2>Player Statistics</h2>
    <table border="1">
        <thead>
            <tr>
                <th>Player</th>
                <th>Position</th>
                <th>Points</th>
                <th>Games</th>
                <th>Average</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Jordan Smith</td>
                <td>Forward</td>
                <td>342</td>
                <td>18</td>
                <td>19.0</td>
            </tr>
            <!-- Add more players -->
        </tbody>
    </table>
    
    <h2>Team Standings</h2>
    <!-- Add second table here -->
    
    <h2>Game Schedule</h2>
    <!-- Add third table here -->
</body>
</html>
```

## Sport/Game Ideas

Choose any of these (or make up your own):
- **Basketball** - points, rebounds, assists
- **Soccer/Football** - goals, assists, saves
- **Baseball** - hits, runs, home runs
- **Esports** - kills, deaths, K/D ratio
- **Racing** - lap times, position, points
- **Any sport you follow!**

## 🎯 Challenge

- Add a 4th table showing "All-Time Records"
- Use creative headers and organized data
- Add totals in the footer of the standings table
- Include dates and realistic numbers
- Add a paragraph description between tables

## 💡 Tips

- Make up realistic-sounding names and numbers
- Keep data consistent (wins + losses should make sense)
- Use `<h2>` headings to separate each table
- Make sure each table has clear column headers

## ✅ When You're Done

Verify that:
- [ ] All three tables are complete and visible
- [ ] Each table has appropriate headers
- [ ] Player stats table has at least 6 players
- [ ] Team standings uses thead, tbody, tfoot
- [ ] Schedule table shows multiple games
- [ ] Data looks realistic and organized
- [ ] Page has a main title and section headings
