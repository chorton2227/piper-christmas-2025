# Lesson 1.6: Tables

Welcome to Lesson 1.6! Tables let you organize data in rows and columns - perfect for schedules, scoreboards, and comparison charts.

---

## 🎯 What You'll Learn

By the end of this lesson, you'll be able to:
- Create tables with rows and columns
- Add table headers for organization
- Use table sections (the

ad, tbody, tfoot)
- Build practical tables like schedules and charts
- Understand when to use tables vs other elements

---

## 📊 What Are Tables?

Tables display **organized data in rows and columns** - like a spreadsheet.

**Great uses for tables:**
- ✅ Class schedules
- ✅ Game scoreboards
- ✅ Price comparisons
- ✅ Data lists
- ✅ Statistics

**Don't use tables for:**
- ❌ Page layout (use CSS instead)
- ❌ Navigation menus
- ❌ Positioning elements

---

## 🏗️ Table Structure

### Basic Tags

| Tag | Purpose | Description |
|-----|---------|-------------|
| `<table>` | Container | Wraps entire table |
| `<tr>` | Table Row | Each row of data |
| `<td>` | Table Data | Each cell in a row |
| `<th>` | Table Header | Bold header cells |

### Basic Table

```html
<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Alex</td>
    <td>10</td>
  </tr>
  <tr>
    <td>Jamie</td>
    <td>11</td>
  </tr>
</table>
```

**Result:**
```
| Name  | Age |
|-------|-----|
| Alex  | 10  |
| Jamie | 11  |
```

---

## 📝 Creating Your First Table

### Step-by-Step

```html
<!-- 1. Start with table tag -->
<table border="1">
  
  <!-- 2. Create header row -->
  <tr>
    <th>Subject</th>
    <th>Grade</th>
  </tr>
  
  <!-- 3. Add data rows -->
  <tr>
    <td>Math</td>
    <td>A</td>
  </tr>
  
  <tr>
    <td>Science</td>
    <td>B+</td>
  </tr>
  
</table>
```

**Key Points:**
- `border="1"` adds visible borders (temporary - use CSS later)
- Each `<tr>` is a new row
- Each `<td>` or `<th>` is a cell in that row
- All rows should have same number of cells

---

## 🎨 Table Sections

For better organization, use `<thead>`, `<tbody>`, and `<tfoot>`:

```html
<table border="1">
  <!-- Header section -->
  <thead>
    <tr>
      <th>Player</th>
      <th>Score</th>
    </tr>
  </thead>
  
  <!-- Main data -->
  <tbody>
    <tr>
      <td>Player 1</td>
      <td>1500</td>
    </tr>
    <tr>
      <td>Player 2</td>
      <td>1200</td>
    </tr>
  </tbody>
  
  <!-- Footer (totals, notes) -->
  <tfoot>
    <tr>
      <td>Total</td>
      <td>2700</td>
    </tr>
  </tfoot>
</table>
```

**Benefits:**
- Better organization
- Easier to style with CSS later
- Screen readers understand structure better

---

## 📅 Practical Example: Class Schedule

```html
<h2>My Class Schedule</h2>
<table border="1">
  <thead>
    <tr>
      <th>Time</th>
      <th>Monday</th>
      <th>Tuesday</th>
      <th>Wednesday</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>9:00 AM</td>
      <td>Math</td>
      <td>Science</td>
      <td>Math</td>
    </tr>
    <tr>
      <td>10:00 AM</td>
      <td>English</td>
      <td>Math</td>
      <td>Art</td>
    </tr>
    <tr>
      <td>11:00 AM</td>
      <td>Science</td>
      <td>PE</td>
      <td>Music</td>
    </tr>
  </tbody>
</table>
```

---

## 🏆 Example: Gaming Leaderboard

```html
<h2>Gaming Leaderboard</h2>
<table border="1">
  <thead>
    <tr>
      <th>Rank</th>
      <th>Player</th>
      <th>Score</th>
      <th>Level</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>ProGamer123</td>
      <td>15,000</td>
      <td>50</td>
    </tr>
    <tr>
      <td>2</td>
      <td>CoolPlayer456</td>
      <td>12,500</td>
      <td>45</td>
    </tr>
    <tr>
      <td>3</td>
      <td>AwesomeUser789</td>
      <td>10,200</td>
      <td>42</td>
    </tr>
  </tbody>
</table>
```

---

## ✅ Good Examples vs ❌ Bad Examples

### Example 1: Table Structure

```html
<!-- ✅ GOOD: Organized with headers -->
<table border="1">
  <thead>
    <tr>
      <th>Product</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Laptop</td>
      <td>$899</td>
    </tr>
  </tbody>
</table>

<!-- ❌ BAD: No headers, unclear -->
<table border="1">
  <tr>
    <td>Laptop</td>
    <td>$899</td>
  </tr>
</table>
```

### Example 2: Consistent Columns

```html
<!-- ✅ GOOD: Same cells per row -->
<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Alex</td>
    <td>10</td>
  </tr>
</table>

<!-- ❌ BAD: Different number of cells -->
<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Alex</td>
  </tr>
</table>
```

---

## 💭 Think About It

1. **When would you use a table vs a list?**
2. **What tables do you see in everyday life?**
3. **How can tables make data easier to understand?**

---

## 🎯 Success Checklist

- [ ] Create tables with `<table>`, `<tr>`, `<td>`, `<th>`
- [ ] Add table headers with `<th>`
- [ ] Use thead, tbody, tfoot for organization
- [ ] Build practical tables (schedules, scoreboards)
- [ ] Understand when to use tables

---

## 📝 Practice Exercises

**Exercise 1:** Create a weekly schedule  
**Exercise 2:** Build a comparison chart  
**Exercise 3:** Make a complete data table with all sections

---

## 🚀 What's Next?

Lesson 1.7: Divs & Spans - Learn about container elements for organizing content!

---

## 📚 Quick Reference

### Basic Table
```html
<table border="1">
  <tr>
    <th>Header</th>
  </tr>
  <tr>
    <td>Data</td>
  </tr>
</table>
```

### With Sections
```html
<table border="1">
  <thead>
    <tr><th>Header</th></tr>
  </thead>
  <tbody>
    <tr><td>Data</td></tr>
  </tbody>
  <tfoot>
    <tr><td>Footer</td></tr>
  </tfoot>
</table>
```

---

**Great work learning tables!** 🎉 You can now organize data like a pro!
