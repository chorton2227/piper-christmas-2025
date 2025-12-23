# Answer Key - Lesson 1.6: Tables

This folder contains the solution files for the Lesson 1.6 practice exercises.

## Exercise Solutions

### Exercise 1: game-collection.html
A video game collection table with 8 games across 5 columns.

**Key Features:**
- Complete HTML document structure
- Table with 5 columns: Game Title, Platform, Genre, Rating, Release Year
- 8 games included (meets challenge requirement of 5+)
- Clear column headers using `<th>`
- Border="1" for visibility
- Additional paragraph explaining favorite game (challenge completed)
- Mix of different platforms (PC, Switch, PlayStation, etc.)
- Variety of genres represented

**Teaching Points:**
- Demonstrates basic table structure
- Shows how to organize collection/catalog data
- Practice with multiple data types (text, numbers, ratings)

### Exercise 2: my-schedule.html
A weekly schedule showing time periods across all 7 days, plus a summary table.

**Key Features:**
- Uses `<thead>` and `<tbody>` for proper structure
- Headers in both top row (days) AND first column (time periods)
- All 7 days of the week included
- 4 time periods (Morning, Afternoon, Evening, Night)
- Emojis used for visual appeal (challenge element)
- Bonus: Second table showing weekly activity summary
- Realistic schedule with school, activities, homework, free time

**Teaching Points:**
- Demonstrates headers in multiple directions (`<th>` in rows and columns)
- Shows practical use of table sections
- Real-world application of scheduling data
- Good example of when tables are appropriate

### Exercise 3: sports-stats.html
Complete basketball stats dashboard with 4 tables showing different data types.

**Key Features:**
- **Player Statistics Table**: 6 players with position, points, games, averages
- **Team Standings Table**: 6 teams with wins/losses/points
  - Uses `<thead>`, `<tbody>`, `<tfoot>` (as required)
  - Footer row shows totals
  - Rank column with medal emojis
- **Game Schedule Table**: 4 upcoming games with dates, teams, times, locations
- **Season Highlights Table**: Records and achievements (bonus 4th table)
- Proper page structure with `<h1>` main title and `<h2>` section headings
- Descriptive paragraph between tables
- All tables properly formatted with borders

**Teaching Points:**
- Multiple tables on one page working together
- Correct use of table sections (thead, tbody, tfoot)
- Mix of different data types and purposes
- Shows how tables can create a complete dashboard
- Demonstrates organization with headings and descriptions

## Common Student Mistakes to Watch For

1. **Missing Border Attribute**
   - Tables are invisible without `border="1"` in basic HTML
   - Remind students we'll style better with CSS later

2. **Inconsistent Columns**
   - Some rows have different numbers of cells
   - Check that header count matches data cell count

3. **Forgetting `<th>` for Headers**
   - Using `<td>` for everything makes tables hard to read
   - Headers should always be `<th>` tags

4. **Not Closing Tags**
   - Missing `</tr>`, `</td>`, or `</table>` breaks layout
   - Encourage working row-by-row and testing frequently

5. **Confusing Table Sections**
   - Putting `<thead>` inside `<tbody>` or wrong order
   - Remember: thead → tbody → tfoot

6. **Too Complex Too Fast**
   - Starting with merged cells or nested tables
   - Keep it simple: focus on basic structure first

## Extension Ideas

If students finish early or want more challenge:

1. **Add More Tables**
   - Create related tables (e.g., game DLC, monthly schedule, tournament brackets)

2. **More Complex Data**
   - Add calculated columns (averages, totals, percentages)
   - Include more detailed statistics

3. **Enhanced Presentation**
   - Add more descriptive paragraphs
   - Use better organization with sections
   - Add related images (from previous lesson)

4. **Real Data**
   - Use actual sports stats from favorite teams
   - Real game collection from Steam/console libraries
   - Actual schedule from their school/activities

5. **Combination Projects**
   - Create multi-page site with navigation (from Lesson 1.4)
   - Add images to tables (from Lesson 1.5)
   - Combine lists and tables for comprehensive pages

## Grading Criteria

### Exercise 1 (Basic)
- ✅ Table has 4+ columns
- ✅ At least 5 games included
- ✅ Headers use `<th>` tag
- ✅ Border visible
- ✅ Complete HTML structure

### Exercise 2 (Intermediate)
- ✅ All 7 days included
- ✅ 3+ time periods
- ✅ Headers in both directions
- ✅ Uses `<thead>` and `<tbody>`
- ✅ Realistic schedule data

### Exercise 3 (Advanced)
- ✅ Three complete tables
- ✅ Player stats table (6+ players)
- ✅ Team standings uses thead/tbody/tfoot
- ✅ Schedule table (4+ games)
- ✅ Proper page structure with headings
- ✅ Tables are related and make sense together

## Teaching Notes

**Time Estimates:**
- Exercise 1: 10-15 minutes
- Exercise 2: 15-20 minutes
- Exercise 3: 25-35 minutes

**Difficulty Progression:**
- Exercise 1 focuses on basic table structure
- Exercise 2 introduces headers in multiple directions
- Exercise 3 combines multiple tables and proper sections

**Best Practices Demonstrated:**
- Always use semantic headers (`<th>`)
- Organize with table sections when appropriate
- Keep data consistent and realistic
- Use proper document structure
- Test frequently while building

## Connection to Future Lessons

- **Lesson 1.7 (Divs/Spans)**: Can wrap tables in divs for layout
- **Module 2 (CSS)**: Will style tables with colors, spacing, hover effects
- **Module 3 (JavaScript)**: Will make tables sortable and interactive
- **Module 4 (Game Building)**: Scoreboards and leaderboards use tables

---

**Note for Parents**: These solutions show comprehensive examples, but student solutions may vary. Focus on correct structure and organization rather than identical content. Encourage creativity in choosing games, activities, or sports to feature!
