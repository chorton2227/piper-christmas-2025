# Lesson 1.6: Tables - Cheatsheet

## \ud83d\udcca Basic Table Tags

| Tag | Purpose |
|-----|---------|
| `<table>` | Container for entire table |
| `<tr>` | Table row |
| `<td>` | Table data (cell) |
| `<th>` | Table header (bold) |
| `<thead>` | Header section |
| `<tbody>` | Body section |
| `<tfoot>` | Footer section |

## \ud83d\udcdd Basic Table
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

## \ud83c\udfaf Complete Table
```html
<table border="1">
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>Value</td>
    </tr>
  </tfoot>
</table>
```

**Remember:** Each row needs same number of cells! \ud83d\udca1
