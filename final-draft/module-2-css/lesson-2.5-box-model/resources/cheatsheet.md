# Box Model Cheat Sheet 📦

## The Four Parts

```
┌─────────────────────────────┐
│   MARGIN (transparent)      │
│  ┌─────────────────────┐    │
│  │  BORDER (visible)   │    │
│  │ ┌──────────────┐    │    │
│  │ │  PADDING     │    │    │
│  │ │ ┌──────────┐ │    │    │
│  │ │ │ CONTENT  │ │    │    │
│  │ │ └──────────┘ │    │    │
│  │ └──────────────┘    │    │
│  └─────────────────────┘    │
└─────────────────────────────┘
```

---

## Padding (Space Inside)

```css
/* All sides */
padding: 20px;

/* Vertical | Horizontal */
padding: 20px 40px;

/* Top | Right | Bottom | Left */
padding: 10px 20px 30px 40px;

/* Individual sides */
padding-top: 10px;
padding-right: 20px;
padding-bottom: 30px;
padding-left: 40px;
```

---

## Margin (Space Outside)

```css
/* All sides */
margin: 20px;

/* Vertical | Horizontal */
margin: 20px 40px;

/* Top | Right | Bottom | Left */
margin: 10px 20px 30px 40px;

/* Individual sides */
margin-top: 10px;
margin-right: 20px;
margin-bottom: 30px;
margin-left: 40px;

/* Center horizontally */
margin: 0 auto;

/* No margin */
margin: 0;

/* Negative margin (overlap) */
margin-top: -10px;
```

---

## Borders

```css
/* Shorthand */
border: 3px solid #3498db;
/*      ↑    ↑      ↑
     width style color */

/* Individual properties */
border-width: 3px;
border-style: solid;
border-color: #3498db;

/* Individual sides */
border-top: 2px solid red;
border-right: 2px dashed blue;
border-bottom: 2px dotted green;
border-left: 2px double yellow;

/* Border styles */
border-style: solid;
border-style: dashed;
border-style: dotted;
border-style: double;
border-style: none;

/* Rounded corners */
border-radius: 10px;
border-radius: 50%;  /* Circle */
```

---

## Width & Height

```css
/* Fixed size */
width: 300px;
height: 200px;

/* Percentage */
width: 50%;
height: 100%;

/* Maximum/Minimum */
max-width: 1200px;
min-width: 300px;
max-height: 500px;
min-height: 200px;

/* Full width */
width: 100%;
```

---

## Box-Sizing 🌟

```css
/* Default (NOT recommended) */
box-sizing: content-box;
/* width applies to content only */
/* Total width = width + padding + border */

/* RECOMMENDED */
box-sizing: border-box;
/* width applies to entire box */
/* Total width = width (includes padding + border) */

/* Best practice - apply to everything */
* {
    box-sizing: border-box;
}
```

### Example:
```css
/* With content-box (default) */
.box {
    width: 300px;
    padding: 20px;
    border: 5px solid black;
}
/* Total width = 300 + 40 + 10 = 350px */

/* With border-box (better!) */
.box {
    box-sizing: border-box;
    width: 300px;
    padding: 20px;
    border: 5px solid black;
}
/* Total width = 300px (includes everything!) */
```

---

## Common Patterns

### Centered Container
```css
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}
```

### Card
```css
.card {
    padding: 25px;
    margin: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background: white;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
```

### Button
```css
button {
    padding: 12px 24px;
    border: 2px solid #3498db;
    border-radius: 5px;
    background: #3498db;
    color: white;
}
```

### Section Spacing
```css
section {
    padding: 60px 20px;
    margin-bottom: 40px;
}
```

---

## Quick Reference

| Property | Purpose | Example |
|----------|---------|---------|
| `padding` | Space inside | `padding: 20px;` |
| `margin` | Space outside | `margin: 20px;` |
| `border` | Line around element | `border: 2px solid black;` |
| `width` | Element width | `width: 300px;` |
| `height` | Element height | `height: 200px;` |
| `box-sizing` | How size is calculated | `box-sizing: border-box;` |
| `border-radius` | Rounded corners | `border-radius: 10px;` |

---

## Shorthand Order

**Remember: Clockwise from Top!**
```css
/* 4 values: Top, Right, Bottom, Left */
padding: 10px 20px 30px 40px;
/*       ↑    ↑    ↑     ↑
      top  right bottom left */

/* 3 values: Top, Horizontal, Bottom */
padding: 10px 20px 30px;
/*       ↑     ↑    ↑
      top  left/  bottom
           right        */

/* 2 values: Vertical, Horizontal */
padding: 20px 40px;
/*       ↑     ↑
      top/  left/
      bottom right */

/* 1 value: All sides */
padding: 20px;
```

---

## Best Practices

✅ **DO:**
- Use `box-sizing: border-box` on all elements
- Use margin for space between elements
- Use padding for space inside elements
- Use consistent spacing values (10px, 20px, 40px)
- Center containers with `margin: 0 auto`

❌ **DON'T:**
- Mix padding and margin randomly
- Forget box-sizing (sizes get confusing!)
- Use excessive padding/margin
- Forget width when using margin: 0 auto

---

## Common Values

**Spacing Scale:**
- xs: 5px
- sm: 10px
- md: 20px
- lg: 40px
- xl: 60px
- xxl: 80px

**Border Widths:**
- Thin: 1px
- Normal: 2-3px
- Thick: 4-5px

**Border Radius:**
- Subtle: 3-5px
- Medium: 8-10px
- Round: 15-20px
- Circle: 50%
