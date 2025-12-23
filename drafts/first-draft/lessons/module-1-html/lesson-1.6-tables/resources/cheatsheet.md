# HTML Tables Cheatsheet

## Basic Table Structure

```html
<table>
  <tr>
    <td>Cell content</td>
  </tr>
</table>
```

## Essential Tags

| Tag | Purpose | Example |
|-----|---------|---------|
| `<table>` | Container for entire table | `<table border="1">` |
| `<tr>` | Table Row | `<tr>...</tr>` |
| `<td>` | Table Data (regular cell) | `<td>Content</td>` |
| `<th>` | Table Header (bold cell) | `<th>Name</th>` |

## Table Sections

```html
<table>
  <thead>
    <!-- Header rows -->
  </thead>
  
  <tbody>
    <!-- Main data rows -->
  </tbody>
  
  <tfoot>
    <!-- Footer rows (totals, notes) -->
  </tfoot>
</table>
```

| Section | Purpose |
|---------|---------|
| `<thead>` | Table header section |
| `<tbody>` | Table body (main data) |
| `<tfoot>` | Table footer section |

## Complete Table Example

```html
<table border="1">
  <thead>
    <tr>
      <th>Product</th>
      <th>Price</th>
      <th>Stock</th>
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <td>Widget</td>
      <td>$9.99</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Gadget</td>
      <td>$14.99</td>
      <td>30</td>
    </tr>
  </tbody>
  
  <tfoot>
    <tr>
      <td>Total Items</td>
      <td colspan="2">80</td>
    </tr>
  </tfoot>
</table>
```

## Common Attributes

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `border` | Shows table borders | `<table border="1">` |
| `colspan` | Spans multiple columns | `<td colspan="2">Text</td>` |
| `rowspan` | Spans multiple rows | `<td rowspan="3">Text</td>` |

## Headers in Different Positions

### Column Headers (Top)
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
</table>
```

### Row Headers (Left Side)
```html
<table border="1">
  <tr>
    <th>Name</th>
    <td>Alex</td>
  </tr>
  <tr>
    <th>Age</th>
    <td>10</td>
  </tr>
</table>
```

### Both Directions
```html
<table border="1">
  <tr>
    <th></th>
    <th>Monday</th>
    <th>Tuesday</th>
  </tr>
  <tr>
    <th>Morning</th>
    <td>Math</td>
    <td>English</td>
  </tr>
</table>
```

## Quick Tips

### ✅ DO:
- Always use `<th>` for headers
- Keep tables simple and organized
- Use tables for data, not layout
- Add `border="1"` while learning
- Make sure all rows have same number of cells

### ❌ DON'T:
- Don't use tables for page layout
- Don't make tables too complex
- Don't forget closing tags
- Don't put multiple values in one cell

## Table Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Table</title>
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
        
        <tfoot>
            <tr>
                <td colspan="3">Footer note</td>
            </tr>
        </tfoot>
    </table>
</body>
</html>
```

## Common Patterns

### Schedule Table
```html
<table border="1">
  <tr>
    <th>Time</th>
    <th>Monday</th>
    <th>Tuesday</th>
  </tr>
  <tr>
    <th>9:00 AM</th>
    <td>Math</td>
    <td>Science</td>
  </tr>
</table>
```

### Scoreboard Table
```html
<table border="1">
  <thead>
    <tr>
      <th>Rank</th>
      <th>Player</th>
      <th>Score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1st</td>
      <td>Alex</td>
      <td>1500</td>
    </tr>
  </tbody>
</table>
```

### Comparison Table
```html
<table border="1">
  <tr>
    <th>Feature</th>
    <th>Product A</th>
    <th>Product B</th>
  </tr>
  <tr>
    <th>Price</th>
    <td>$299</td>
    <td>$399</td>
  </tr>
  <tr>
    <th>Storage</th>
    <td>500GB</td>
    <td>1TB</td>
  </tr>
</table>
```

## Remember!

- Tables organize **data**, not layouts
- Every table needs `<table>`, `<tr>`, and `<td>` or `<th>`
- Headers (`<th>`) are bold and important
- Sections (`<thead>`, `<tbody>`, `<tfoot>`) help organize large tables
- Keep it simple and readable!

---

**Pro Tip**: Later with CSS, we'll make tables look much better with colors, spacing, and styling. For now, focus on getting the structure right!
