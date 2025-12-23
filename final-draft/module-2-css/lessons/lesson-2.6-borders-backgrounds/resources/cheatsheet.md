# CSS Borders and Backgrounds Cheatsheet

## 🎨 Border Properties

### Basic Border Syntax
```css
border: width style color;
border: 2px solid blue;
```

### Border Width
```css
border-width: 1px;    /* Thin */
border-width: 3px;    /* Medium */
border-width: 5px;    /* Thick */
```

### Border Style
```css
border-style: solid;   /* ────── */
border-style: dashed;  /* - - - */
border-style: dotted;  /* ····· */
border-style: double;  /* ═══════ */
border-style: groove;  /* 3D carved */
border-style: ridge;   /* 3D raised */
border-style: none;    /* No border */
```

### Border Color
```css
border-color: red;
border-color: #3498db;
border-color: rgb(52, 152, 219);
border-color: rgba(52, 152, 219, 0.5);
```

### Individual Sides
```css
border-top: 3px solid red;
border-right: 1px dashed blue;
border-bottom: 2px dotted green;
border-left: 1px solid gray;

/* Or individually: */
border-top-width: 3px;
border-top-style: solid;
border-top-color: red;
```

---

## 🔄 Border-Radius (Rounded Corners)

### All Corners
```css
border-radius: 10px;      /* Slightly rounded */
border-radius: 50%;       /* Circle (on square elements) */
```

### Individual Corners
```css
border-radius: 10px 20px 30px 40px;
/* top-left, top-right, bottom-right, bottom-left */

/* Shorthand patterns: */
border-radius: 10px;          /* All same */
border-radius: 10px 20px;     /* TL/BR, TR/BL */
border-radius: 10px 20px 30px; /* TL, TR/BL, BR */
```

### Named Properties
```css
border-top-left-radius: 10px;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
border-bottom-left-radius: 10px;
```

### Common Patterns
```css
/* Pill shape */
border-radius: 50px;

/* Rounded top only */
border-radius: 15px 15px 0 0;

/* Diagonal corners */
border-radius: 0 50px 0 50px;
```

---

## 🌟 Box-Shadow

### Basic Syntax
```css
box-shadow: horizontal vertical blur spread color;
box-shadow: 2px 2px 5px gray;
```

### Common Shadows
```css
/* Subtle */
box-shadow: 0 2px 5px rgba(0,0,0,0.1);

/* Medium */
box-shadow: 0 4px 10px rgba(0,0,0,0.15);

/* Dramatic */
box-shadow: 0 10px 30px rgba(0,0,0,0.3);

/* All sides */
box-shadow: 0 0 20px rgba(0,0,0,0.2);
```

### Inset Shadows (Inner)
```css
box-shadow: inset 0 2px 5px rgba(0,0,0,0.3);
```

### Multiple Shadows
```css
box-shadow: 
    0 2px 5px rgba(0,0,0,0.1),
    0 10px 20px rgba(0,0,0,0.15);
```

### Colored Shadows
```css
box-shadow: 0 8px 20px rgba(52,152,219,0.4);
```

---

## 🎨 Background Color

### Solid Colors
```css
background-color: blue;
background-color: #3498db;
background-color: rgb(52, 152, 219);
background-color: rgba(52, 152, 219, 0.5);  /* Semi-transparent */
```

### Shorthand
```css
background: blue;  /* Same as background-color */
```

---

## 🌈 Gradients

### Linear Gradients
```css
/* Top to bottom (default) */
background: linear-gradient(blue, lightblue);

/* Directional */
background: linear-gradient(to right, blue, lightblue);
background: linear-gradient(to bottom right, blue, lightblue);

/* Angle */
background: linear-gradient(45deg, blue, lightblue);

/* Multiple colors */
background: linear-gradient(to right, red, yellow, green);

/* Color stops */
background: linear-gradient(to right, 
    red 0%, 
    yellow 50%, 
    green 100%
);
```

### Radial Gradients
```css
/* Center outward */
background: radial-gradient(blue, lightblue);

/* Circle */
background: radial-gradient(circle, blue, lightblue);

/* Positioned */
background: radial-gradient(circle at top left, blue, lightblue);
```

### Popular Gradient Combinations
```css
/* Purple to Pink */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Orange Sunset */
background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);

/* Ocean Blue */
background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);

/* Fresh Mint */
background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
```

---

## 🖼️ Background Images

### Basic Image
```css
background-image: url('path/to/image.jpg');
```

### Background Size
```css
background-size: cover;     /* Fill entire area, may crop */
background-size: contain;   /* Fit entire image, may show gaps */
background-size: 100% auto; /* Percentage */
background-size: 500px 300px; /* Specific size */
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
background-repeat: no-repeat;  /* Don't tile */
background-repeat: repeat;     /* Tile both directions */
background-repeat: repeat-x;   /* Horizontal only */
background-repeat: repeat-y;   /* Vertical only */
```

### Background Attachment
```css
background-attachment: scroll; /* Scroll with page (default) */
background-attachment: fixed;  /* Stay fixed (parallax) */
```

### Shorthand
```css
background: url('image.jpg') center / cover no-repeat fixed;
/* image position / size repeat attachment */
```

### Image with Overlay
```css
background: 
    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url('image.jpg');
background-size: cover;
background-position: center;
```

---

## 🎯 Common Patterns

### Modern Card
```css
.card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    padding: 24px;
    transition: all 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}
```

### Button with Shadow
```css
.button {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 8px;
    padding: 12px 24px;
    box-shadow: 0 4px 10px rgba(102,126,234,0.3);
}

.button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(102,126,234,0.4);
}
```

### Hero Section
```css
.hero {
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
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
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}
```

### Accent Border
```css
.section {
    border-top: 5px solid #3498db;
    padding-top: 30px;
}
```

---

## 💡 Quick Tips

### Shadows
- Use `rgba()` for transparent shadows
- Subtle is usually better than dramatic
- Layer multiple shadows for realistic depth
- Match shadow color to design colors

### Borders
- 1-3px is usually enough
- Use `border-radius` to soften sharp corners
- Individual borders great for accents
- Combine with shadows for depth

### Gradients
- Use CSS gradient generators for complex gradients
- 135deg angle is popular and looks great
- Limit to 2-3 colors for best results
- Use gradients sparingly - too many is overwhelming

### Background Images
- Always use `background-size: cover` for full-width sections
- Add dark overlay for text readability
- Optimize images (compress before using)
- Provide fallback background-color

---

## 🔧 Browser DevTools

**Inspect elements to see:**
- Computed border values
- Box shadow layers
- Background properties
- Try different values live!

**Right-click element → Inspect → Styles panel**

---

## ✅ Best Practices

**DO:**
- ✓ Use subtle shadows for depth
- ✓ Consistent border-radius values
- ✓ Semi-transparent shadows with rgba()
- ✓ background-size: cover for images
- ✓ Dark overlays for text over images

**DON'T:**
- ✗ Overuse heavy shadows
- ✗ Too many gradient directions
- ✗ Forget fallback colors
- ✗ Use huge, slow images
- ✗ Excessive border-attachment: fixed

---

**Remember:** Borders and backgrounds are decorative but powerful - they set the mood and style of your entire design!
