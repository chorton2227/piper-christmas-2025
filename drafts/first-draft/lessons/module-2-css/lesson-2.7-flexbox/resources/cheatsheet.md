# Flexbox Cheat Sheet

## 🎯 Quick Reference

### Container Properties (Parent)

#### display
```css
.container {
    display: flex;        /* Creates flex container */
}
```

#### flex-direction
```css
.container {
    flex-direction: row;           /* → (default) */
    flex-direction: row-reverse;   /* ← */
    flex-direction: column;        /* ↓ */
    flex-direction: column-reverse; /* ↑ */
}
```

#### justify-content (Main Axis)
```css
.container {
    justify-content: flex-start;    /* ╠═══ */
    justify-content: center;        /* ══╬══ */
    justify-content: flex-end;      /* ═══╣ */
    justify-content: space-between; /* ╠═╬═╣ */
    justify-content: space-around;  /* ═╬═╬═ */
    justify-content: space-evenly;  /* ═╬═╬═ */
}
```

#### align-items (Cross Axis)
```css
.container {
    align-items: stretch;    /* Default - fills container */
    align-items: flex-start; /* Top/Left */
    align-items: center;     /* Middle */
    align-items: flex-end;   /* Bottom/Right */
    align-items: baseline;   /* Align text baselines */
}
```

#### flex-wrap
```css
.container {
    flex-wrap: nowrap;      /* All on one line (default) */
    flex-wrap: wrap;        /* Wrap to multiple lines */
    flex-wrap: wrap-reverse; /* Wrap in reverse order */
}
```

#### gap
```css
.container {
    gap: 20px;           /* Gap between all items */
    gap: 20px 10px;      /* row-gap column-gap */
    row-gap: 20px;       /* Gap between rows */
    column-gap: 10px;    /* Gap between columns */
}
```

---

### Item Properties (Children)

#### flex-grow
```css
.item {
    flex-grow: 0;  /* Don't grow (default) */
    flex-grow: 1;  /* Grow to fill space */
    flex-grow: 2;  /* Grow twice as much */
}
```

#### flex-shrink
```css
.item {
    flex-shrink: 1;  /* Can shrink (default) */
    flex-shrink: 0;  /* Don't shrink */
}
```

#### flex-basis
```css
.item {
    flex-basis: auto;   /* Use content size (default) */
    flex-basis: 0;      /* Start from zero */
    flex-basis: 200px;  /* Start at 200px */
    flex-basis: 50%;    /* Start at 50% */
}
```

#### flex (Shorthand)
```css
.item {
    flex: 1;          /* Same as: 1 1 0 */
    flex: auto;       /* Same as: 1 1 auto */
    flex: none;       /* Same as: 0 0 auto */
    flex: 2;          /* Same as: 2 1 0 */
    flex: 0 1 200px;  /* grow shrink basis */
}
```

#### align-self
```css
.item {
    align-self: auto;       /* Inherit from parent */
    align-self: flex-start; /* Align to start */
    align-self: center;     /* Center this item */
    align-self: flex-end;   /* Align to end */
    align-self: stretch;    /* Stretch this item */
}
```

#### order
```css
.item {
    order: 0;   /* Default order */
    order: 1;   /* Show later */
    order: -1;  /* Show earlier */
}
```

---

## 🎨 Common Patterns

### Perfect Centering
```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
```

### Navigation Bar
```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}

.nav-menu {
    display: flex;
    gap: 20px;
    margin: 0 auto; /* Center the menu */
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
    flex: 1 1 250px; /* Responsive cards */
}
```

### Sidebar Layout
```css
.layout {
    display: flex;
    gap: 20px;
}

.sidebar {
    flex: none;
    width: 250px;
}

.main {
    flex: 1;
}
```

### Holy Grail Layout
```css
.page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.content {
    display: flex;
    flex: 1;
}

.sidebar {
    flex: none;
    width: 200px;
}

.main {
    flex: 1;
}
```

---

## 🔑 Key Concepts

### Main Axis vs Cross Axis
- **row**: Main = horizontal →, Cross = vertical ↓
- **column**: Main = vertical ↓, Cross = horizontal →

### Axes Change with flex-direction!
```
flex-direction: row          flex-direction: column
     ↕ Cross                      ← Cross →
Main →→→→→→→                     Main ↓
                                     ↓
                                     ↓
```

### Growth and Shrinking
- `flex-grow`: How items grow when there's extra space
- `flex-shrink`: How items shrink when space is tight
- `flex-basis`: Starting size before growing/shrinking

---

## 💡 Pro Tips

1. **Use `gap` instead of margins** - cleaner and easier!

2. **`flex: 1` is your friend** - makes items equal and flexible

3. **`flex: none` for fixed elements** - like sidebars and buttons

4. **Center with 3 lines**:
   ```css
   display: flex;
   justify-content: center;
   align-items: center;
   ```

5. **Responsive without media queries**:
   ```css
   flex: 1 1 250px;  /* Auto-wrapping cards! */
   ```

6. **Full-height layouts**:
   ```css
   min-height: 100vh;
   flex-direction: column;
   ```

---

## 🐛 Common Mistakes

❌ **Forgetting `display: flex`**
```css
.container {
    justify-content: center; /* Won't work without display: flex! */
}
```

❌ **Using width on flex items**
```css
.item {
    width: 200px; /* Use flex-basis instead */
}
```

✅ **Correct way**:
```css
.item {
    flex-basis: 200px;
}
```

❌ **Not understanding main/cross axis**
- `justify-content` controls MAIN axis
- `align-items` controls CROSS axis
- They switch with `flex-direction`!

---

## 📱 Responsive Pattern

```css
/* Desktop: horizontal layout */
.container {
    display: flex;
    gap: 20px;
}

/* Mobile: vertical stack */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }
}
```

---

## 🎓 Remember

- **Container properties** go on the PARENT
- **Item properties** go on the CHILDREN
- **Flexbox is one-dimensional** (row OR column)
- **For grids, consider CSS Grid** (two-dimensional)

Happy Flexing! 💪
