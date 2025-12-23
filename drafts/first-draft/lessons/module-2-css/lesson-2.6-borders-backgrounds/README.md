# Lesson 2.6: Borders and Backgrounds

Welcome to one of the most fun CSS lessons! 🎨 This is where your designs start to look really polished and professional. We'll learn how to add beautiful borders, rounded corners, shadows, and stunning background colors and images.

## 🎯 What You'll Learn

By the end of this lesson, you'll be able to:
- Style borders with different widths, styles, and colors
- Create rounded corners with `border-radius`
- Add depth with `box-shadow`
- Apply background colors and gradients
- Use background images effectively
- Control background size, position, and repeat
- Combine borders and backgrounds for professional designs

---

## 📚 Why Borders and Backgrounds Matter

Borders and backgrounds are essential design tools:

- **Borders** define edges, separate sections, and add visual structure
- **Rounded corners** make designs feel modern and friendly
- **Shadows** create depth and make elements "pop" off the page
- **Backgrounds** set the mood, add visual interest, and reinforce branding
- **Background images** can create stunning hero sections and decorative elements

These properties transform basic HTML into visually appealing designs!

---

## 🖍️ Border Properties

### Basic Border Syntax

```css
border: width style color;
```

**Example:**
```css
.box {
    border: 2px solid blue;
}
```

### Border Width

```css
border-width: 1px;      /* Thin */
border-width: 3px;      /* Medium */
border-width: 5px;      /* Thick */
border-width: 10px;     /* Very thick */
```

### Border Style

```css
border-style: solid;    /* ────── Solid line */
border-style: dashed;   /* - - - Dashed line */
border-style: dotted;   /* ······ Dotted line */
border-style: double;   /* ══════ Double line */
border-style: groove;   /* Carved appearance */
border-style: ridge;    /* Raised appearance */
border-style: inset;    /* Inset appearance */
border-style: outset;   /* Outset appearance */
border-style: none;     /* No border */
```

### Border Color

```css
border-color: red;
border-color: #3498db;
border-color: rgb(52, 152, 219);
border-color: rgba(52, 152, 219, 0.5);  /* Semi-transparent */
```

### Individual Sides

```css
.box {
    border-top: 3px solid red;
    border-right: 1px dashed blue;
    border-bottom: 2px dotted green;
    border-left: 1px solid gray;
}
```

Or use individual properties:

```css
.box {
    border-top-width: 3px;
    border-top-style: solid;
    border-top-color: red;
}
```

---

## 🔄 Border-Radius (Rounded Corners)

`border-radius` creates rounded corners - one of the most popular CSS properties!

### All Corners the Same

```css
.box {
    border-radius: 10px;    /* Slightly rounded */
}

.circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;     /* Perfect circle! */
}
```

### Individual Corners

```css
.box {
    border-radius: 10px 20px 30px 40px;
    /* top-left, top-right, bottom-right, bottom-left */
}
```

Or:

```css
.box {
    border-top-left-radius: 10px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 40px;
}
```

### Common Patterns

```css
/* Pill shape */
.pill {
    border-radius: 50px;
}

/* Rounded top only */
.card {
    border-radius: 15px 15px 0 0;
}

/* One diagonal corner */
.diagonal {
    border-radius: 0 50px 0 50px;
}
```

---

## 🌟 Box-Shadow

`box-shadow` adds depth and dimension to elements!

### Basic Syntax

```css
box-shadow: horizontal-offset vertical-offset blur-radius color;
```

### Examples

```css
/* Simple shadow */
.box {
    box-shadow: 2px 2px 5px gray;
}

/* Larger, softer shadow */
.card {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Dramatic shadow */
.popup {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

/* Shadow on all sides */
.elevated {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}

/* Multiple shadows */
.fancy {
    box-shadow: 
        0 2px 5px rgba(0, 0, 0, 0.1),
        0 10px 20px rgba(0, 0, 0, 0.15);
}
```

### Inset Shadows

```css
/* Inner shadow (pressed effect) */
.pressed {
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.3);
}
```

---

## 🎨 Background Color

You already know basic background colors, but here are more techniques:

```css
/* Solid color */
.box {
    background-color: #3498db;
}

/* Semi-transparent */
.overlay {
    background-color: rgba(0, 0, 0, 0.5);
}

/* Shorthand */
.box {
    background: blue;  /* Same as background-color */
}
```

---

## 🌈 Background Gradients

Gradients create smooth color transitions!

### Linear Gradients

```css
/* Top to bottom */
.box {
    background: linear-gradient(blue, lightblue);
}

/* Left to right */
.box {
    background: linear-gradient(to right, blue, lightblue);
}

/* Diagonal */
.box {
    background: linear-gradient(to bottom right, blue, lightblue);
}

/* Multiple colors */
.box {
    background: linear-gradient(to right, red, yellow, green);
}

/* Color stops */
.box {
    background: linear-gradient(to right, 
        red 0%, 
        yellow 50%, 
        green 100%
    );
}

/* Angle */
.box {
    background: linear-gradient(45deg, blue, lightblue);
}
```

### Radial Gradients

```css
/* Center outward */
.box {
    background: radial-gradient(blue, lightblue);
}

/* Circle */
.box {
    background: radial-gradient(circle, blue, lightblue);
}

/* Positioned */
.box {
    background: radial-gradient(circle at top left, blue, lightblue);
}
```

---

## 🖼️ Background Images

### Basic Background Image

```css
.hero {
    background-image: url('images/hero.jpg');
}
```

### Background Size

```css
/* Cover entire area (may crop) */
.hero {
    background-size: cover;
}

/* Contain entire image (may show gaps) */
.hero {
    background-size: contain;
}

/* Specific size */
.hero {
    background-size: 500px 300px;
}

/* Percentage */
.hero {
    background-size: 100% auto;
}
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
background-repeat: no-repeat;   /* Don't tile */
background-repeat: repeat;      /* Tile both directions */
background-repeat: repeat-x;    /* Tile horizontally */
background-repeat: repeat-y;    /* Tile vertically */
```

### Background Attachment

```css
/* Scroll with page */
background-attachment: scroll;

/* Stay fixed (parallax effect) */
background-attachment: fixed;
```

### Shorthand

```css
.hero {
    background: url('hero.jpg') center / cover no-repeat fixed;
    /* image position / size repeat attachment */
}
```

---

## 🎯 Combining Borders and Backgrounds

The magic happens when you combine these properties!

### Card with Border and Shadow

```css
.card {
    background-color: white;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
}
```

### Button with Gradient and Border

```css
.button {
    background: linear-gradient(to bottom, #4CAF50, #45a049);
    border: none;
    border-radius: 5px;
    color: white;
    padding: 12px 24px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.button:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}
```

### Image Overlay

```css
.hero {
    background-image: url('hero.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
}
```

---

## 💡 Best Practices

### ✅ DO:
- Use `border-radius` to soften sharp corners
- Add subtle `box-shadow` for depth
- Use `background-size: cover` for hero images
- Combine borders, backgrounds, and shadows for polished designs
- Use semi-transparent shadows: `rgba(0, 0, 0, 0.1)`
- Test background images with different screen sizes

### ❌ DON'T:
- Overuse heavy shadows (looks dated)
- Use `background-attachment: fixed` excessively (performance)
- Forget to provide fallback background colors
- Use low-quality or huge images
- Make borders too thick (usually 1-3px is enough)
- Use too many different border styles on one page

---

## 🎨 Common Design Patterns

### Modern Card

```css
.card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    padding: 24px;
    transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}
```

### Hero Section

```css
.hero {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                url('hero.jpg');
    background-size: cover;
    background-position: center;
    color: white;
    padding: 100px 20px;
    text-align: center;
}
```

### Profile Picture

```css
.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}
```

---

## 🔍 Browser DevTools Tips

**To experiment with borders and backgrounds:**
1. Right-click element → Inspect
2. In Styles panel, click on property values to edit
3. Try different colors, sizes, and values in real-time
4. Copy the CSS you like back to your file!

---

## 🚀 Ready to Practice?

Check out the examples and exercises to master borders and backgrounds! These properties are essential for creating modern, professional-looking websites.

**Next Lesson:** Layout with Flexbox - Learn the modern way to create flexible, responsive layouts!
