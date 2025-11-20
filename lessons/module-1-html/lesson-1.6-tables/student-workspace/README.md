# Student Workspace - Lesson 1.6: Tables

Welcome to your practice workspace! This is where you'll create your table exercises.

## 📁 Your Files

Create your exercise files here:
- `game-collection.html` - Exercise 1: Video game table
- `my-schedule.html` - Exercise 2: Weekly schedule
- `sports-stats.html` - Exercise 3: Sports statistics dashboard

## 🚀 Getting Started

1. Create a new file in this folder
2. Start with the basic HTML structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Table</title>
</head>
<body>
    <h1>My Table Title</h1>
    
    <table border="1">
        <!-- Your table rows go here -->
    </table>
</body>
</html>
```

## 💡 Quick Tips

- **Start simple**: Get a basic 2x2 table working first
- **Add border="1"**: Makes the table visible while you're learning
- **Use headers**: `<th>` tags make your table clearer
- **Stay organized**: Close each `</tr>` tag before starting the next row
- **Test often**: Open your file in a browser after each row you add

## 📊 Table Building Checklist

For each table you create:
- [ ] Complete HTML structure (DOCTYPE, html, head, body)
- [ ] Table has `border="1"` attribute
- [ ] First row uses `<th>` for headers
- [ ] All rows have the same number of cells
- [ ] All tags are properly closed
- [ ] Data is organized and makes sense

## 🎯 Exercise Quick Reference

### Exercise 1: Game Collection
- **File**: `game-collection.html`
- **Columns**: Game Title, Platform, Genre, Rating
- **Rows**: 5+ games

### Exercise 2: Weekly Schedule
- **File**: `my-schedule.html`
- **Structure**: Time periods × Days of week
- **Tip**: Use `<th>` for both the top row AND first column

### Exercise 3: Sports Stats
- **File**: `sports-stats.html`
- **Tables**: Three separate tables on one page
- **Sections**: Use `<thead>`, `<tbody>`, `<tfoot>`

## 🐛 Common Mistakes to Avoid

```html
<!-- ❌ WRONG: Missing closing tags -->
<tr>
  <td>Data
  <td>More

<!-- ✅ CORRECT: All tags closed -->
<tr>
  <td>Data</td>
  <td>More</td>
</tr>
```

```html
<!-- ❌ WRONG: Uneven columns -->
<tr>
  <td>A</td>
  <td>B</td>
</tr>
<tr>
  <td>C</td>
</tr>

<!-- ✅ CORRECT: Same number of cells -->
<tr>
  <td>A</td>
  <td>B</td>
</tr>
<tr>
  <td>C</td>
  <td>D</td>
</tr>
```

## 🎨 Table Template

Copy this template to start any exercise:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Table Exercise</title>
</head>
<body>
    <h1>Table Title</h1>
    
    <table border="1">
        <thead>
            <tr>
                <th>Header 1</th>
                <th>Header 2</th>
                <th>Header 3</th>
            </tr>
        </thead>
        
        <tbody>
            <tr>
                <td>Data 1</td>
                <td>Data 2</td>
                <td>Data 3</td>
            </tr>
            <tr>
                <td>Data 4</td>
                <td>Data 5</td>
                <td>Data 6</td>
            </tr>
        </tbody>
    </table>
</body>
</html>
```

## ✅ Testing Your Tables

Open your HTML file in a browser and check:
- Can you see clear table borders?
- Are headers bold and easy to read?
- Is all data visible and organized?
- Do columns line up properly?

## 🚀 You've Got This!

Tables might seem repetitive, but they're super useful for organizing data. Take your time, work row by row, and test frequently. Before you know it, you'll be building awesome tables!

Happy coding! 🎉
