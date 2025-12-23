# Lesson 2.6: Borders & Backgrounds 🎨

## 🎯 Learning Objectives
By the end of this lesson, you will:
- Master all border properties and styles
- Create rounded corners with border-radius
- Apply solid colors and gradients as backgrounds
- Use background images effectively
- Control background positioning and sizing
- Combine multiple background techniques
- Create visually polished designs

## 🎨 Border Properties

### Basic Border Syntax
```css
/* Shorthand - all at once */
border: 3px solid #3498db;
/*      ↑    ↑      ↑
     width style  color */

/* Individual properties */
border-width: 3px;
border-style: solid;
border-color: #3498db;
```

### Border Styles
```css
border-style: solid;    /* ──────── */
border-style: dashed;   /* ─ ─ ─ ─ */
border-style: dotted;   /* ········ */
border-style: double;   /* ════════ */
border-style: groove;   /* 3D grooved */
border-style: ridge;    /* 3D ridged */
border-style: inset;    /* 3D inset */
border-style: outset;   /* 3D outset */
border-style: none;     /* No border */
```

### Individual Sides
```css
/* Different border on each side */
border-top: 3px solid red;
border-right: 2px dashed blue;
border-bottom: 5px double green;
border-left: 1px dotted yellow;

/* Or use individual properties */
border-top-width: 5px;
border-top-style: solid;
border-top-color: #e74c3c;
```

---

## 🔘 Border Radius - Rounded Corners

Border-radius creates rounded corners!

```css
/* All corners the same */
border-radius: 10px;

/* Perfect circle (on square elements) */
border-radius: 50%;

/* Horizontal and vertical radius */
border-radius: 20px / 10px;

/* Each corner individually (clockwise from top-left) */
border-radius: 10px 20px 30px 40px;

/* Top-left and bottom-right | Top-right and bottom-left */
border-radius: 10px 30px;
```

### Practical Examples:
```css
/* Subtle rounding */
.card {
    border-radius: 8px;
}

/* Pill-shaped button */
button {
    border-radius: 25px;
}

/* Circle avatar */
.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

/* Fancy shapes */
.speech-bubble {
    border-radius: 20px 20px 20px 0;
}
```

---

## 🎨 Background Colors

### Solid Colors
```css
background-color: #3498db;
background-color: rgb(52, 152, 219);
background-color: rgba(52, 152, 219, 0.5);  /* With transparency */
background-color: lightblue;
```

---

## 🌈 Gradient Backgrounds

Gradients transition between colors smoothly!

### Linear Gradients
```css
/* Top to bottom (default) */
background: linear-gradient(#3498db, #2c3e50);

/* Left to right */
background: linear-gradient(to right, #3498db, #2c3e50);

/* Diagonal */
background: linear-gradient(to bottom right, #3498db, #2c3e50);

/* With angle */
background: linear-gradient(45deg, #3498db, #2c3e50);

/* Multiple colors */
background: linear-gradient(to right, red, yellow, green, blue);

/* Color stops (control where colors transition) */
background: linear-gradient(to right, #3498db 0%, #2c3e50 100%);
```

### Radial Gradients
```css
/* Center outward */
background: radial-gradient(#3498db, #2c3e50);

/* Ellipse or circle */
background: radial-gradient(circle, #3498db, #2c3e50);

/* Positioned */
background: radial-gradient(circle at top left, #3498db, #2c3e50);
```

### Popular Gradient Patterns
```css
/* Sunset */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Ocean */
background: linear-gradient(to bottom, #4facfe 0%, #00f2fe 100%);

/* Fire */
background: linear-gradient(45deg, #f12711 0%, #f5af19 100%);

/* Mint */
background: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
```

---

## 🖼️ Background Images

### Basic Background Image
```css
background-image: url('image.jpg');
```

### Background Size
```css
/* Cover entire area */
background-size: cover;

/* Fit inside area */
background-size: contain;

/* Specific dimensions */
background-size: 200px 150px;

/* Percentage */
background-size: 100% 100%;
```

### Background Position
```css
background-position: center;
background-position: top right;
background-position: 50% 50%;
background-position: 100px 50px;
```

### Background Repeat
```css
background-repeat: no-repeat;    /* Don't repeat */
background-repeat: repeat;       /* Repeat (default) */
background-repeat: repeat-x;     /* Horizontal only */
background-repeat: repeat-y;     /* Vertical only */
```

### Background Attachment
```css
background-attachment: scroll;   /* Scrolls with page (default) */
background-attachment: fixed;    /* Stays fixed (parallax effect!) */
```

---

## 🎯 Background Shorthand

Combine all background properties:
```css
background: #3498db url('bg.jpg') no-repeat center / cover;
/*          ↑       ↑              ↑          ↑       ↑
         color   image          repeat    position size */
```

---

## 💡 Practical Examples

### Hero Section with Background Image
```css
.hero {
    background-image: url('hero-bg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 500px;
    color: white;
}
```

### Card with Gradient Background
```css
.card {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 15px;
    padding: 30px;
    color: white;
}
```

### Button with Border and Gradient
```css
button {
    border: 2px solid #3498db;
    background: linear-gradient(to bottom, #5dade2, #3498db);
    border-radius: 8px;
    padding: 12px 24px;
    color: white;
}
```

### Image with Border
```css
img {
    border: 5px solid white;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}
```

---

## 🌟 Advanced Techniques

### Multiple Backgrounds
```css
background:
    url('pattern.png') repeat,
    linear-gradient(to bottom, #3498db, #2c3e50);
/* Pattern on top, gradient behind */
```

### Text Over Image (with overlay)
```css
.hero {
    background-image: 
        linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
        url('bg.jpg');
    background-size: cover;
}
/* Dark overlay makes text readable */
```

### Parallax Effect
```css
.parallax {
    background-image: url('bg.jpg');
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
}
```

---

## ✅ Best Practices

**Borders:**
- Use consistent border widths (1px, 2px, 3px)
- Match border colors to your color scheme
- Use border-radius for modern, friendly designs
- Don't overuse fancy border styles (groove, ridge, etc.)

**Backgrounds:**
- Optimize images for web (compress them!)
- Use `background-size: cover` for full-width backgrounds
- Ensure text is readable over background images
- Use subtle gradients for professional look
- Consider accessibility (color contrast!)

**Performance:**
- Compress background images
- Use CSS gradients instead of gradient images when possible
- Lazy load large background images
- Use appropriate image formats (JPG for photos, PNG for graphics)

---

## 🎮 Let's Practice!

Head to the `practice` folder to create beautiful borders and backgrounds!

---

## 📂 What's Next?

In **Lesson 2.7**, we'll learn **Flexbox** - a powerful layout system for creating flexible, responsive designs!

---

## 🌟 Key Takeaways

- **Borders** have width, style, and color
- **border-radius** creates rounded corners (50% = circle)
- **Background colors** can be solid or transparent (rgba)
- **Gradients** blend colors smoothly (linear and radial)
- **Background images** need size, position, and repeat properties
- **background: cover** fills the entire area
- **Combine techniques** for polished designs
- **Dark overlays** make text readable over images
- **Fixed backgrounds** create parallax effects

---

**Parent Guide**: [resources/parent-guide.md](resources/parent-guide.md)  
**Cheat Sheet**: [resources/cheatsheet.md](resources/cheatsheet.md)
