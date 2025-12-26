# Lesson 2.7: Flexbox Layout 📐

## 🎯 Learning Objectives
- Understand flex container and flex items
- Use flex-direction to control layout direction
- Master justify-content for horizontal alignment
- Use align-items for vertical alignment
- Control spacing with gap
- Make responsive layouts with flex-wrap
- Build modern, flexible layouts

## 🎨 What is Flexbox?

Flexbox is a **layout system** that makes it easy to:
- Arrange elements in rows or columns
- Align elements horizontally and vertically
- Distribute space evenly
- Create responsive designs
- Build navigation menus, cards, galleries

---

## 🔧 Flex Container & Items

### Enable Flexbox
```css
.container {
    display: flex;  /* Turns element into flex container */
}
```

Now all direct children become **flex items**!

---

## 📏 Flex Direction

Controls the main axis (direction items flow):

```css
flex-direction: row;          /* Left to right (default) → */
flex-direction: row-reverse;  /* Right to left ← */
flex-direction: column;        /* Top to bottom ↓ */
flex-direction: column-reverse; /* Bottom to top ↑ */
```

---

## ⚖️ Justify-Content (Main Axis Alignment)

Aligns items along the main axis:

```css
justify-content: flex-start;    /* Start (default) |■■■    | */
justify-content: flex-end;      /* End              |    ■■■| */
justify-content: center;        /* Center           |  ■■■  | */
justify-content: space-between; /* Space between    |■   ■   ■| */
justify-content: space-around;  /* Space around     | ■  ■  ■ | */
justify-content: space-evenly;  /* Even space       | ■ ■ ■ | */
```

---

## ⬍ Align-Items (Cross Axis Alignment)

Aligns items along the cross axis:

```css
align-items: stretch;      /* Stretch to fill (default) */
align-items: flex-start;   /* Top */
align-items: flex-end;     /* Bottom */
align-items: center;       /* Middle (vertical centering!) */
align-items: baseline;     /* Align baselines of text */
```

---

## 📐 Gap

Adds space between flex items:

```css
gap: 20px;              /* Same gap all around */
gap: 20px 40px;         /* Row gap | Column gap */
row-gap: 20px;          /* Vertical gap only */
column-gap: 40px;       /* Horizontal gap only */
```

---

## 🔄 Flex-Wrap

Controls whether items wrap to new lines:

```css
flex-wrap: nowrap;     /* All items on one line (default) */
flex-wrap: wrap;       /* Wrap to multiple lines */
flex-wrap: wrap-reverse; /* Wrap in reverse order */
```

---

## 💪 Flex Items Properties

### flex-grow
How much an item should grow:
```css
.item {
    flex-grow: 1;  /* Grow to fill available space */
}
```

### flex-shrink
How much an item should shrink:
```css
.item {
    flex-shrink: 1;  /* Can shrink if needed (default) */
}
```

### flex-basis
Initial size before growing/shrinking:
```css
.item {
    flex-basis: 200px;  /* Start at 200px */
}
```

### flex shorthand
```css
.item {
    flex: 1;  /* flex-grow: 1, flex-shrink: 1, flex-basis: 0 */
    flex: 1 1 200px;  /* grow shrink basis */
}
```

---

## 🎯 Common Patterns

### Centered Content (Holy Grail!)
```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
```

### Navigation Menu
```css
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}
```

### Card Grid
```css
.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    flex: 1 1 300px;  /* Grow, shrink, min 300px */
}
```

### Equal-Width Columns
```css
.columns {
    display: flex;
    gap: 20px;
}

.column {
    flex: 1;  /* Equal width */
}
```

---

## ✅ Best Practices

✅ Use gap instead of margins for spacing  
✅ Start with flex-direction and justify-content  
✅ Use align-items: center for vertical centering  
✅ flex-wrap: wrap for responsive designs  
✅ Use flex: 1 for equal-width items  

---

## 🎮 Practice

Exercises in `/practice` folder!

---

## 🌟 Key Takeaways

- **display: flex** creates flex container
- **flex-direction** controls row/column layout
- **justify-content** aligns on main axis
- **align-items** aligns on cross axis  
- **gap** adds spacing between items
- **flex-wrap** enables multi-line layouts
- Perfect for navigation, cards, galleries!

---

**Cheat Sheet**: [resources/cheatsheet.md](resources/cheatsheet.md)
