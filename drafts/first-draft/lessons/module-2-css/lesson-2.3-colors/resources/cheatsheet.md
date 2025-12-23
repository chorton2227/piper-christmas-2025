# CSS Colors Cheatsheet 🎨

## Quick Reference for Working with Colors

### Color Properties

```css
/* Text color */
color: red;

/* Background color */
background-color: lightblue;

/* Border color */
border-color: #3498db;
```

---

## 1. Color Names (140+ Available!)

### Basic Colors
```css
color: red;
color: blue;
color: green;
color: yellow;
color: orange;
color: purple;
color: pink;
color: brown;
color: black;
color: white;
color: gray;
```

### Light Variations
```css
color: lightblue;
color: lightgreen;
color: lightpink;
color: lightcoral;
color: lightyellow;
color: lightgray;
```

### Dark Variations
```css
color: darkblue;
color: darkgreen;
color: darkred;
color: darkorange;
color: darkviolet;
color: darkgray;
```

### Special Colors
```css
color: coral;
color: teal;
color: turquoise;
color: salmon;
color: crimson;
color: orchid;
color: thistle;
color: khaki;
color: navy;
color: maroon;
color: olive;
color: aqua;
```

---

## 2. Hex Colors

### Format
```css
color: #RRGGBB;  /* Red, Green, Blue (00-FF each) */
```

### Common Hex Colors
```css
/* Primary Colors */
color: #FF0000;  /* Red */
color: #00FF00;  /* Green */
color: #0000FF;  /* Blue */

/* Grayscale */
color: #000000;  /* Black */
color: #FFFFFF;  /* White */
color: #808080;  /* Gray */
color: #CCCCCC;  /* Light Gray */

/* Popular UI Colors */
color: #3498DB;  /* Blue */
color: #2ECC71;  /* Green */
color: #E74C3C;  /* Red */
color: #F1C40F;  /* Yellow */
color: #9B59B6;  /* Purple */
color: #E67E22;  /* Orange */
```

### Shorthand
```css
color: #FFF;     /* Same as #FFFFFF */
color: #000;     /* Same as #000000 */
color: #F00;     /* Same as #FF0000 */
```

---

## 3. RGB Colors

### Format
```css
color: rgb(red, green, blue);  /* 0-255 for each */
```

### Examples
```css
/* Primary Colors */
color: rgb(255, 0, 0);      /* Red */
color: rgb(0, 255, 0);      /* Green */
color: rgb(0, 0, 255);      /* Blue */

/* Mixed Colors */
color: rgb(255, 255, 0);    /* Yellow */
color: rgb(255, 0, 255);    /* Magenta */
color: rgb(0, 255, 255);    /* Cyan */

/* Grayscale */
color: rgb(0, 0, 0);        /* Black */
color: rgb(255, 255, 255);  /* White */
color: rgb(128, 128, 128);  /* Gray */

/* Popular Colors */
color: rgb(52, 152, 219);   /* Blue */
color: rgb(46, 204, 113);   /* Green */
color: rgb(231, 76, 60);    /* Red */
```

---

## 4. RGBA Colors (With Transparency!)

### Format
```css
color: rgba(red, green, blue, alpha);  /* alpha: 0.0 to 1.0 */
```

### Transparency Levels
```css
background-color: rgba(52, 152, 219, 1.0);   /* 100% opaque */
background-color: rgba(52, 152, 219, 0.75);  /* 75% opaque */
background-color: rgba(52, 152, 219, 0.5);   /* 50% opaque */
background-color: rgba(52, 152, 219, 0.25);  /* 25% opaque */
background-color: rgba(52, 152, 219, 0.0);   /* Transparent */
```

### Common Uses
```css
/* Semi-transparent backgrounds */
background-color: rgba(0, 0, 0, 0.5);     /* 50% black overlay */
background-color: rgba(255, 255, 255, 0.9); /* 90% white */

/* Hover effects */
.card:hover {
    background-color: rgba(52, 152, 219, 0.1);  /* Subtle highlight */
}
```

---

## 5. Color Schemes

### Monochromatic (One Color Family)
```css
/* Different shades of blue */
.lightest { background-color: #E8F4F8; }  /* 60% */
.light    { background-color: #B3E0F2; }  /* 30% */
.base     { background-color: #3498DB; }  /* 10% accent */
.dark     { background-color: #2574A9; }
.darkest  { background-color: #1B4F72; }
```

### Complementary (Opposite Colors)
```css
/* Red and Green */
.primary    { background-color: #E74C3C; }
.complement { background-color: #2ECC71; }
```

### Analogous (Adjacent Colors)
```css
/* Purple, Pink, Orange */
.color1 { background-color: #9B59B6; }  /* Purple */
.color2 { background-color: #E91E63; }  /* Pink */
.color3 { background-color: #E67E22; }  /* Orange */
```

### Triadic (Evenly Spaced)
```css
/* Primary Colors */
.red    { background-color: #E74C3C; }
.yellow { background-color: #F1C40F; }
.blue   { background-color: #3498DB; }
```

---

## 6. The 60-30-10 Rule

```css
/* 60% - Dominant color (backgrounds) */
body {
    background-color: #E8F4F8;
}

/* 30% - Secondary color (sections, cards) */
.card {
    background-color: #B3E0F2;
}

/* 10% - Accent color (buttons, highlights) */
button {
    background-color: #3498DB;
}
```

---

## 7. Contrast Tips

### Good Contrast (Readable)
```css
/* Dark text on light background */
.good1 {
    background-color: white;
    color: #2c3e50;  /* Dark gray/blue */
}

/* Light text on dark background */
.good2 {
    background-color: #2c3e50;
    color: white;
}
```

### Poor Contrast (Avoid!)
```css
/* Hard to read! */
.bad1 {
    background-color: yellow;
    color: white;  /* Too similar */
}

.bad2 {
    background-color: red;
    color: blue;   /* Vibrating colors */
}
```

---

## 8. Quick Conversions

| Color Name | Hex     | RGB              |
|-----------|---------|------------------|
| Red       | #FF0000 | rgb(255, 0, 0)   |
| Green     | #00FF00 | rgb(0, 255, 0)   |
| Blue      | #0000FF | rgb(0, 0, 255)   |
| Black     | #000000 | rgb(0, 0, 0)     |
| White     | #FFFFFF | rgb(255, 255, 255)|
| Yellow    | #FFFF00 | rgb(255, 255, 0) |
| Cyan      | #00FFFF | rgb(0, 255, 255) |
| Magenta   | #FF00FF | rgb(255, 0, 255) |

---

## 9. Useful Tools

- **Google Color Picker** - Search "color picker" in Google
- **Coolors.co** - Generate beautiful color schemes
- **Adobe Color** - Explore color wheels and schemes
- **Contrast Checker** - Test readability
- **HTML Color Codes** - Browse all color names

---

## 10. Pro Tips

✅ **DO:**
- Use color names for quick prototypes
- Use hex for production websites
- Use RGB/RGBA when you need transparency
- Test colors on different screens
- Check contrast for accessibility

❌ **DON'T:**
- Use too many bright colors together
- Forget about color-blind users
- Use colors that vibrate (red + blue text)
- Forget to test on mobile devices

---

## Quick Template

```css
/* Clean, professional color scheme */
body {
    background-color: #f8f9fa;
    color: #2c3e50;
}

header {
    background-color: #3498db;
    color: white;
}

button {
    background-color: #2ecc71;
    color: white;
}

button:hover {
    background-color: #27ae60;
}
```

**Remember:** Colors create mood and emotion - choose wisely! 🎨
