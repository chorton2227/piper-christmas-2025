# CSS Quick Reference Cheatsheet 📋

**For Module 4 - Poker Game Styling**

---

## 🎨 CSS Basics

### How to Add CSS

```html
<!-- METHOD 1: External CSS (BEST) -->
<link rel="stylesheet" href="style.css">

<!-- METHOD 2: Internal CSS -->
<style>
    body { background: blue; }
</style>

<!-- METHOD 3: Inline CSS (avoid) -->
<div style="color: red;">Text</div>
```

### CSS Syntax

```css
selector {
    property: value;
    another-property: another-value;
}
```

---

## 🎯 Selectors

| Selector | Example | What it selects |
|----------|---------|-----------------|
| Element | `p { }` | All `<p>` elements |
| Class | `.btn { }` | All elements with `class="btn"` |
| ID | `#start-screen { }` | Element with `id="start-screen"` |
| Multiple | `h1, h2, p { }` | All h1, h2, and p elements |
| Descendant | `.table .card { }` | Cards inside tables |
| Child | `.table > .card { }` | Direct children only |
| Universal | `* { }` | Everything |
| Pseudo-class | `.btn:hover { }` | Button when mouse over |
| Pseudo-element | `.card::before { }` | Insert content before |

---

## 🌈 Colors

### Color Formats

```css
/* Named Colors */
color: red;
color: blue;
color: gold;

/* Hexadecimal (most common) */
color: #ff0000;  /* Red */
color: #3b82f6;  /* Blue */
color: #ffd700;  /* Gold */

/* RGB */
color: rgb(255, 0, 0);  /* Red */

/* RGBA (with transparency) */
color: rgba(255, 0, 0, 0.5);  /* 50% transparent red */

/* HSL */
color: hsl(0, 100%, 50%);  /* Red */
```

### Poker Game Colors

```css
/* Backgrounds */
--blue-gradient: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
--dark-gradient: linear-gradient(135deg, #2c3e50 0%, #000000 100%);

/* Poker Table */
--green-felt: #2d5016;
--wood-border: #8B4513;

/* Cards */
--card-red: #dc2626;
--card-black: #000000;

/* Buttons */
--purple: #7c3aed;
--green: #10b981;
--red: #ef4444;
--yellow: #f59e0b;
```

---

## 📐 Box Model

```
┌─────────────────────────────┐
│        MARGIN               │ ← Space outside
│  ┌──────────────────────┐   │
│  │     BORDER           │   │ ← Border line
│  │  ┌───────────────┐   │   │
│  │  │   PADDING     │   │   │ ← Space inside
│  │  │  ┌────────┐   │   │   │
│  │  │  │CONTENT │   │   │   │ ← Your element
│  │  │  └────────┘   │   │   │
│  │  └───────────────┘   │   │
│  └──────────────────────┘   │
└─────────────────────────────┘
```

```css
.card {
    width: 80px;           /* Content width */
    height: 112px;         /* Content height */
    padding: 10px;         /* Space inside */
    border: 2px solid black; /* Border */
    margin: 5px;           /* Space outside */
}

/* Shorthand */
padding: 10px;                    /* All sides */
padding: 10px 20px;               /* Top/bottom Left/right */
padding: 10px 20px 15px 25px;    /* Top Right Bottom Left */
```

---

## 📏 Size Units

| Unit | Example | Meaning |
|------|---------|---------|
| `px` | `16px` | Pixels (fixed size) |
| `%` | `50%` | Percent of parent |
| `em` | `1.5em` | Relative to parent font |
| `rem` | `2rem` | Relative to root font (16px default) |
| `vh` | `100vh` | 1% of viewport height |
| `vw` | `50vw` | 1% of viewport width |

**For this project:**
- Use `px` for borders, shadows
- Use `rem` for fonts, spacing
- Use `%` for widths
- Use `vh/vw` for full-screen elements

---

## 🎭 Display & Layout

### Display

```css
display: block;        /* Full width, stacks */
display: inline;       /* Flows with text */
display: inline-block; /* Flows but has width/height */
display: none;         /* Hidden completely */
display: flex;         /* Flexbox layout */
display: grid;         /* Grid layout */
```

### Flexbox (for centering & layout)

```css
.container {
    display: flex;
    justify-content: center;    /* Horizontal centering */
    align-items: center;        /* Vertical centering */
    flex-direction: row;        /* row or column */
    gap: 20px;                  /* Space between items */
}
```

**Common Flexbox Values:**
- `justify-content`: `flex-start`, `center`, `flex-end`, `space-between`, `space-around`
- `align-items`: `flex-start`, `center`, `flex-end`, `stretch`

### Grid (for layouts)

```css
.stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;  /* 3 equal columns */
    gap: 20px;
}
```

---

## 🎨 Backgrounds

### Solid Colors

```css
background: #1e3c72;
background-color: blue;
```

### Gradients

```css
/* Linear Gradient */
background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
background: linear-gradient(to right, red, blue);

/* Radial Gradient */
background: radial-gradient(circle at center, #2d5016 0%, #1a3009 100%);

/* Multiple Gradients */
background: 
    linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),
    url('image.jpg');
```

---

## ✏️ Text Styling

```css
/* Font */
font-family: 'Arial', sans-serif;
font-size: 2rem;
font-weight: bold;         /* or 100-900 */
font-style: italic;

/* Text */
color: white;
text-align: center;        /* left, center, right, justify */
text-transform: uppercase; /* uppercase, lowercase, capitalize */
letter-spacing: 2px;
line-height: 1.6;

/* Text Shadow */
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
text-shadow: 0 0 10px #3b82f6;  /* Glow effect */
```

---

## 🔲 Borders & Shadows

### Borders

```css
border: 2px solid black;
border-radius: 10px;          /* Rounded corners */
border-radius: 50%;           /* Circle */
border-radius: 200px / 100px; /* Ellipse */

/* Individual sides */
border-top: 1px solid red;
border-left: 2px dashed blue;
```

### Box Shadows

```css
/* Basic shadow */
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

/* Multiple shadows */
box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.3),
    0 1px 3px rgba(0, 0, 0, 0.2);

/* Inset shadow (inside) */
box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.5);

/* Glow effect */
box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
```

**Format:** `horizontal vertical blur spread color`

---

## 🎬 Transitions & Animations

### Transitions (smooth changes)

```css
.btn {
    background: purple;
    transition: all 0.3s ease;
}

.btn:hover {
    background: blue;
    transform: translateY(-3px);
}

/* Specific properties */
transition: background 0.3s ease, transform 0.2s ease;
```

**Timing functions:**
- `ease` - Slow start, fast middle, slow end
- `linear` - Constant speed
- `ease-in` - Slow start
- `ease-out` - Slow end
- `ease-in-out` - Slow start and end

### Animations (keyframes)

```css
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.element {
    animation: fadeIn 1s ease-in-out;
}

/* Full syntax */
animation: name duration timing-function delay iteration-count direction;
```

**Common animations:**

```css
/* Fade in */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* Slide up */
@keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

/* Float */
@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

/* Spin */
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

/* Pulse */
@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}
```

---

## 🔄 Transforms

```css
/* Move */
transform: translateX(10px);     /* Move right */
transform: translateY(-10px);    /* Move up */
transform: translate(10px, 20px); /* Move right & down */

/* Rotate */
transform: rotate(45deg);        /* Rotate 45° */

/* Scale */
transform: scale(1.2);           /* 120% size */
transform: scale(0.8);           /* 80% size */

/* Multiple transforms */
transform: translateY(-5px) scale(1.1) rotate(2deg);
```

---

## 👆 Pseudo-classes

```css
/* Hover (mouse over) */
.btn:hover {
    background: blue;
}

/* Active (clicking) */
.btn:active {
    transform: scale(0.95);
}

/* Focus (selected input) */
input:focus {
    border-color: blue;
}

/* First/Last child */
.card:first-child { margin-left: 0; }
.card:last-child { margin-right: 0; }

/* Nth child */
.card:nth-child(odd) { background: #f0f0f0; }
.card:nth-child(2) { color: red; }
```

---

## 🎯 Pseudo-elements

```css
/* Insert content before */
.chip-icon::before {
    content: '🪙';
    margin-right: 5px;
}

/* Insert content after */
.quote::after {
    content: '"';
}

/* Overlay effect */
.poker-table::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.1);
    pointer-events: none;
}
```

---

## 📱 Responsive Design

### Media Queries

```css
/* Desktop (default) */
.title {
    font-size: 4rem;
}

/* Tablet (768px and below) */
@media (max-width: 768px) {
    .title {
        font-size: 3rem;
    }
}

/* Phone (480px and below) */
@media (max-width: 480px) {
    .title {
        font-size: 2rem;
    }
}
```

### Breakpoints

```css
/* Common breakpoints */
@media (max-width: 1200px) { } /* Large screens */
@media (max-width: 992px) { }  /* Desktops */
@media (max-width: 768px) { }  /* Tablets */
@media (max-width: 576px) { }  /* Phones */
@media (max-width: 480px) { }  /* Small phones */
```

---

## 🎲 Position

```css
position: static;     /* Default, normal flow */
position: relative;   /* Relative to normal position */
position: absolute;   /* Relative to parent */
position: fixed;      /* Relative to viewport */
position: sticky;     /* Hybrid relative/fixed */

/* Positioning properties */
top: 10px;
right: 20px;
bottom: 10px;
left: 20px;

/* Z-index (stacking) */
z-index: 10;  /* Higher = on top */
```

---

## 🎨 Common Patterns

### Center Everything

```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
```

### Overlay

```css
.overlay {
    position: fixed;
    inset: 0;  /* Same as: top: 0; right: 0; bottom: 0; left: 0; */
    background: rgba(0, 0, 0, 0.7);
    z-index: 100;
}
```

### Frosted Glass

```css
.glass {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### Button Hover Effect

```css
.btn {
    transition: all 0.3s ease;
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.btn:active {
    transform: translateY(-1px);
}
```

### Card Flip

```css
.card-container {
    perspective: 1000px;
}

.card {
    transform-style: preserve-3d;
    transition: transform 0.6s;
}

.card.flipped {
    transform: rotateY(180deg);
}
```

---

## 🚀 Poker Game Specifics

### Hide/Show Screens

```css
.screen {
    display: none;
}

.screen.active {
    display: flex;
}
```

### Poker Table

```css
.poker-table {
    background: radial-gradient(ellipse at center, #2d5016 0%, #1a3009 100%);
    border: 15px solid #8B4513;
    border-radius: 200px / 100px;
    padding: 40px;
    box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.5);
}
```

### Playing Cards

```css
.card {
    width: 80px;
    height: 112px;  /* 5:7 ratio */
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-10px);
}
```

---

## 🐛 Debugging Tips

### See All Elements

```css
* {
    border: 1px solid red !important;
}
```

### Check Box Model

In browser DevTools: Right-click → Inspect → See box model diagram

### Common Fixes

```css
/* Fix: Element not centered */
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Fix: Element too small */
.element {
    box-sizing: border-box;  /* Include padding in width */
}

/* Fix: Text overflowing */
.text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
```

---

## 💡 Quick Tips

1. **Always use `box-sizing: border-box;`** - Makes sizing predictable
2. **Use rem for fonts** - Scales better on different screens
3. **Mobile-first** - Design for phone first, then add media queries
4. **Consistent spacing** - Use multiples of 4 or 8 (4px, 8px, 16px, 24px)
5. **Limit colors** - 3-5 colors max for cohesive design
6. **Test hover states** - Make sure all buttons have hover effects
7. **Use transitions** - Smooth changes look professional
8. **Comment your CSS** - Future you will thank present you!

---

## 📚 Resources

- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS-Tricks](https://css-tricks.com/)
- [Can I Use](https://caniuse.com/) - Browser compatibility
- [Google Fonts](https://fonts.google.com/)
- [Coolors.co](https://coolors.co/) - Color palette generator
- [Gradient Generator](https://cssgradient.io/)

---

**Print this out and keep it next to your computer!** 🖨️✨
