# Lesson 1.6: Tables

## 🎯 Learning Objectives

By the end of this lesson, you will be able to:
- Understand when and why to use HTML tables
- Create basic tables with rows and columns
- Add table headers to organize data
- Use table sections (thead, tbody, tfoot) for better structure
- Build practical tables like schedules, scoreboards, and comparison charts

## 📚 What Are Tables?

Tables are used to display **organized data in rows and columns**, like a spreadsheet or chart. They're perfect for:
- Class schedules
- Game scoreboards
- Comparison charts
- Data lists (prices, stats, etc.)
- Calendar layouts

**Important**: Tables should only be used for **data**, not for page layout! We'll learn better layout methods with CSS later.

## 🏗️ Table Structure

Every table has these basic parts:

```html
<table>
  <tr>
    <td>Data goes here</td>
  </tr>
</table>
```

### Key Tags:
- `<table>` - The container for the entire table
- `<tr>` - Table Row (each row of data)
- `<td>` - Table Data (each cell in a row)
- `<th>` - Table Header (bold headers for columns/rows)

## 📝 Basic Table Example

```html
<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Favorite Game</th>
  </tr>
  <tr>
    <td>Alex</td>
    <td>10</td>
    <td>Minecraft</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>11</td>
    <td>Roblox</td>
  </tr>
  <tr>
    <td>Sam</td>
    <td>10</td>
    <td>Fortnite</td>
  </tr>
</table>
```

**Result**: A 4-row table with 3 columns showing names, ages, and favorite games.

## 🎨 Table Sections

For larger tables, we can organize them into sections:

```html
<table border="1">
  <thead>
    <!-- Header section -->
    <tr>
      <th>Player</th>
      <th>Score</th>
    </tr>
  </thead>
  
  <tbody>
    <!-- Main data section -->
    <tr>
      <td>Player 1</td>
      <td>1500</td>
    </tr>
    <tr>
      <td>Player 2</td>
      <td>1200</td>
    </tr>
  </tbody>
  
  <tfoot>
    <!-- Footer section (totals, notes) -->
    <tr>
      <td>Total Players</td>
      <td>2</td>
    </tr>
  </tfoot>
</table>
```

### Why Use Sections?
- **`<thead>`** - Headers that might repeat on printed pages
- **`<tbody>`** - Main data (can have multiple tbody sections)
- **`<tfoot>`** - Summary or totals (appears at the bottom)
- Better for screen readers and accessibility
- Easier to style with CSS later

## 🔢 Headers in Rows and Columns

Headers can go across the top OR down the side:

```html
<table border="1">
  <tr>
    <th>Day</th>
    <th>Breakfast</th>
    <th>Lunch</th>
  </tr>
  <tr>
    <th>Monday</th>
    <td>Cereal</td>
    <td>Pizza</td>
  </tr>
  <tr>
    <th>Tuesday</th>
    <td>Toast</td>
    <td>Sandwich</td>
  </tr>
</table>
```

Notice: First column uses `<th>` for day names!

## 🎯 When to Use Tables

### ✅ Good Uses:
- Schedules and calendars
- Sports scores and statistics
- Product comparison charts
- Data reports
- Price lists

### ❌ Bad Uses:
- Page layout (use CSS instead!)
- Creating columns of text
- Positioning images
- Navigation menus

## 💡 Table Tips

1. **Always use headers** - Makes tables easier to understand
2. **Border attribute** - `border="1"` shows table lines (we'll style better with CSS later)
3. **Keep it simple** - Don't make tables too complex
4. **One fact per cell** - Each `<td>` should have one piece of information
5. **Consistent columns** - Every row should have the same number of cells

## 🎮 Try It Yourself

Look at the example files to see different table layouts in action!

## 📚 Quick Reference

| Tag | Purpose | Example |
|-----|---------|---------|
| `<table>` | Container for table | `<table border="1">` |
| `<tr>` | Table row | `<tr>...</tr>` |
| `<td>` | Table data cell | `<td>Alex</td>` |
| `<th>` | Table header cell | `<th>Name</th>` |
| `<thead>` | Header section | `<thead>...</thead>` |
| `<tbody>` | Body section | `<tbody>...</tbody>` |
| `<tfoot>` | Footer section | `<tfoot>...</tfoot>` |

## 🚀 What's Next?

After completing the exercises, you'll be ready to:
- Use tables in your projects
- Display organized data clearly
- Build schedules and scoreboards
- Combine tables with other HTML elements

Ready to build some tables? Check out the examples folder!
