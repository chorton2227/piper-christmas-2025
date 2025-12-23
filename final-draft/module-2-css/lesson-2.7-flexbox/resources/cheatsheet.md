# Flexbox - Cheat Sheet

## 🎯 What is Flexbox?
**Flexbox = Flexible Box Layout**
- Modern layout system for arranging items
- Makes it easy to align and distribute space
- Responsive by design

---

## 🔑 Key Concepts

### Container (Parent)
The element with `display: flex`

### Items (Children)
The elements inside the flex container

---

## 📦 Flex Container Properties

### display: flex
```css
.container {
    display: flex;
}
```
Turns the element into a flex container

### flex-direction
```css
flex-direction: row;          /* Default: left to right */
flex-direction: column;        /* Top to bottom */
flex-direction: row-reverse;   /* Right to left */
flex-direction: column-reverse;/* Bottom to top */
```

### justify-content (main axis)
```css
justify-content: flex-start;   /* Default: left */
justify-content: center;       /* Center */
justify-content: flex-end;     /* Right */
justify-content: space-between;/* Equal space between items */
justify-content: space-around; /* Equal space around items */
justify-content: space-evenly; /* Equal space everywhere */
```

### align-items (cross axis)
```css
align-items: stretch;    /* Default: fill container */
align-items: flex-start; /* Top */
align-items: center;     /* Middle */
align-items: flex-end;   /* Bottom */
align-items: baseline;   /* Align text baselines */
```

### flex-wrap
```css
flex-wrap: nowrap;  /* Default: all items on one line */
flex-wrap: wrap;    /* Items wrap to next line */
flex-wrap: wrap-reverse;
```

### gap
```css
gap: 20px;           /* Space between items */
row-gap: 20px;       /* Space between rows */
column-gap: 20px;    /* Space between columns */
```

---

## 🎯 Flex Item Properties

### flex-grow
```css
.item {
    flex-grow: 1;  /* Item can grow to fill space */
}
```

### flex-shrink
```css
.item {
    flex-shrink: 1;  /* Item can shrink if needed */
}
```

### flex-basis
```css
.item {
    flex-basis: 200px;  /* Starting size before growing/shrinking */
}
```

### flex (shorthand)
```css
.item {
    flex: 1;  /* Shorthand for grow, shrink, basis */
    /* Same as: flex: 1 1 0; */
}
```

### align-self
```css
.item {
    align-self: center;  /* Override container's align-items */
}
```

### order
```css
.item {
    order: 2;  /* Change display order (default is 0) */
}
```

---

## 💡 Common Patterns

### Centered Content
```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

### Navigation Bar
```css
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

### Equal Width Columns
```css
.container {
    display: flex;
}
.item {
    flex: 1;  /* All items same width */
}
```

### Card Grid
```css
.container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
.card {
    flex: 1 1 300px;  /* Grow, shrink, min 300px */
}
```

---

## 🎨 Quick Examples

### Horizontal Navigation
```css
nav {
    display: flex;
    gap: 20px;
}
```

### Vertical Stack
```css
.container {
    display: flex;
    flex-direction: column;
    gap: 15px;
}
```

### Space Between Items
```css
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

---

## 🚀 Pro Tips

1. **Start Simple**: Begin with `display: flex` and `gap`
2. **Main vs Cross**: justify-content = main axis, align-items = cross axis
3. **Mobile First**: Use `flex-wrap: wrap` for responsive layouts
4. **Debug**: Add borders to see flex container and items
5. **Centering**: `justify-content: center` + `align-items: center` = perfect center

---

## ⚠️ Remember

- Flexbox works on ONE dimension (row OR column)
- For two-dimensional layouts (rows AND columns), use Grid
- `gap` is the modern way to add spacing (better than margin)
- Items are flexible by default (they shrink and grow)
