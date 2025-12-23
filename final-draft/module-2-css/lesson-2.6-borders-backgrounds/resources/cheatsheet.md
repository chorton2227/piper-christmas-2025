# Borders & Backgrounds Cheat Sheet 🎨

## Borders

### Basic Border
```css
border: 3px solid #3498db;
/*      ↑    ↑      ↑
     width style color */
```

### Border Styles
```css
border-style: solid;   /* ──── */
border-style: dashed;  /* ─ ─  */
border-style: dotted;  /* ···· */
border-style: double;  /* ==== */
border-style: none;    /* No border */
```

### Individual Sides
```css
border-top: 3px solid red;
border-right: 2px dashed blue;
border-bottom: 5px double green;
border-left: 1px dotted yellow;
```

### Border Radius (Rounded Corners)
```css
border-radius: 10px;      /* All corners */
border-radius: 50%;       /* Circle */
border-radius: 10px 20px; /* Top-left/bottom-right | top-right/bottom-left */
border-radius: 10px 20px 30px 40px; /* TL TR BR BL (clockwise) */
```

---

## Background Colors

```css
background-color: #3498db;
background-color: rgb(52, 152, 219);
background-color: rgba(52, 152, 219, 0.5);  /* With transparency */
background-color: lightblue;
```

---

## Gradients

### Linear Gradients
```css
background: linear-gradient(#3498db, #2c3e50);
background: linear-gradient(to right, #3498db, #2c3e50);
background: linear-gradient(45deg, #3498db, #2c3e50);
background: linear-gradient(to right, red, yellow, green);
```

### Radial Gradients
```css
background: radial-gradient(#3498db, #2c3e50);
background: radial-gradient(circle, #3498db, #2c3e50);
```

### Popular Gradients
```css
/* Sunset */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Ocean */
background: linear-gradient(to bottom, #4facfe 0%, #00f2fe 100%);

/* Fire */
background: linear-gradient(45deg, #f12711 0%, #f5af19 100%);
```

---

## Background Images

```css
background-image: url('image.jpg');
background-size: cover;        /* Fill entire area */
background-size: contain;      /* Fit inside */
background-position: center;
background-position: top right;
background-repeat: no-repeat;
background-repeat: repeat;
background-attachment: fixed;  /* Parallax effect */
```

### Shorthand
```css
background: #3498db url('bg.jpg') no-repeat center / cover;
/*          ↑       ↑              ↑          ↑       ↑
         color   image          repeat    position size */
```

---

## Common Patterns

### Card with Border & Shadow
```css
.card {
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}
```

### Button with Gradient
```css
button {
    background: linear-gradient(to bottom, #5dade2, #3498db);
    border: 2px solid #2980b9;
    border-radius: 8px;
    padding: 12px 24px;
}
```

### Hero with Background Image
```css
.hero {
    background-image: url('hero.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 500px;
}
```

### Text Over Image (with overlay)
```css
.hero {
    background-image: 
        linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
        url('bg.jpg');
    background-size: cover;
}
```

---

## Quick Reference

| Property | Purpose | Example |
|----------|---------|---------|
| `border` | Add border | `border: 3px solid black;` |
| `border-radius` | Round corners | `border-radius: 10px;` |
| `background-color` | Solid color | `background-color: blue;` |
| `background-image` | Image background | `background-image: url('bg.jpg');` |
| `background-size` | Image size | `background-size: cover;` |
| `background-position` | Image position | `background-position: center;` |
| `linear-gradient` | Color gradient | `linear-gradient(red, blue);` |

---

## Remember!
- **border-radius: 50%** makes circles
- **background-size: cover** fills entire area
- **Gradients** don't need quotes or url()
- **rgba()** adds transparency to colors
- Combine techniques for polished designs!
