# CSS Fonts & Text Cheatsheet 📝

## Quick Reference for Typography

### Font Properties

```css
/* Font Family (Typeface) */
font-family: Arial, Helvetica, sans-serif;
font-family: Georgia, 'Times New Roman', serif;
font-family: 'Courier New', monospace;

/* Font Size */
font-size: 16px;    /* Pixels (most common) */
font-size: 1.5em;   /* Relative to parent */
font-size: 1.5rem;  /* Relative to root */

/* Font Weight (Boldness) */
font-weight: normal;  /* or 400 */
font-weight: bold;    /* or 700 */
font-weight: 300;     /* Light */
font-weight: 600;     /* Semibold */
font-weight: 900;     /* Black/Heavy */

/* Font Style */
font-style: normal;
font-style: italic;
font-style: oblique;
```

### Text Properties

```css
/* Text Alignment */
text-align: left;      /* Default */
text-align: center;
text-align: right;
text-align: justify;   /* Spreads to fill width */

/* Line Height (Space Between Lines) */
line-height: 1.5;      /* 1.5x font size */
line-height: 24px;     /* Fixed height */
line-height: 150%;     /* Percentage */

/* Letter Spacing */
letter-spacing: 1px;   /* Add space */
letter-spacing: -1px;  /* Remove space */
letter-spacing: 0.1em; /* Relative spacing */

/* Text Decoration */
text-decoration: none;          /* No decoration */
text-decoration: underline;     /* Underline */
text-decoration: line-through;  /* Strikethrough */
text-decoration: overline;      /* Line above */

/* Text Transform */
text-transform: none;       /* Leave as-is */
text-transform: uppercase;  /* ALL CAPS */
text-transform: lowercase;  /* all lowercase */
text-transform: capitalize; /* First Letter Each Word */

/* Text Color */
color: #2c3e50;
color: rgb(44, 62, 80);
color: blue;
```

---

## Web-Safe Fonts

### Sans-Serif (Modern, Clean)
```css
font-family: Arial, sans-serif;
font-family: Helvetica, sans-serif;
font-family: Verdana, sans-serif;
font-family: 'Trebuchet MS', sans-serif;
```

### Serif (Traditional, Elegant)
```css
font-family: Georgia, serif;
font-family: 'Times New Roman', serif;
font-family: 'Palatino Linotype', serif;
```

### Monospace (Code, Technical)
```css
font-family: 'Courier New', monospace;
font-family: Monaco, monospace;
font-family: Consolas, monospace;
```

### Cursive (Decorative, Playful)
```css
font-family: 'Comic Sans MS', cursive;
font-family: 'Brush Script MT', cursive;
```

---

## Google Fonts

### Step 1: Add to HTML `<head>`
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```

### Step 2: Use in CSS
```css
body {
    font-family: 'Roboto', sans-serif;
}
```

### Popular Google Fonts

**For Headings:**
```css
font-family: 'Montserrat', sans-serif;      /* Modern, bold */
font-family: 'Playfair Display', serif;     /* Elegant */
font-family: 'Poppins', sans-serif;         /* Playful */
font-family: 'Bebas Neue', sans-serif;      /* Bold, condensed */
```

**For Body Text:**
```css
font-family: 'Open Sans', sans-serif;       /* Friendly */
font-family: 'Roboto', sans-serif;          /* Clean */
font-family: 'Lato', sans-serif;            /* Professional */
font-family: 'Merriweather', serif;         /* Traditional */
```

---

## Font Pairing Formulas

### Classic Pairing
```css
h1, h2, h3 {
    font-family: 'Playfair Display', serif;  /* Heading */
}

body {
    font-family: 'Open Sans', sans-serif;    /* Body */
}
```

### Modern Pairing
```css
h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;   /* Heading */
}

body {
    font-family: 'Roboto', sans-serif;       /* Body */
}
```

### Same Family Pairing
```css
h1, h2, h3 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;                        /* Bold heading */
}

body {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;                        /* Regular body */
}
```

---

## Font Shorthand

Combine font properties in one line:

```css
/* Long way */
p {
    font-style: italic;
    font-weight: bold;
    font-size: 16px;
    line-height: 1.6;
    font-family: Arial, sans-serif;
}

/* Shorthand */
p {
    font: italic bold 16px/1.6 Arial, sans-serif;
}
```

**Format:** `font: [style] [weight] size/line-height family;`

---

## Typography Best Practices

### Readable Sizes
```css
body {
    font-size: 16px;        /* Minimum for body text */
}

h1 { font-size: 48px; }     /* 3x body size */
h2 { font-size: 36px; }     /* 2.25x */
h3 { font-size: 28px; }     /* 1.75x */
small { font-size: 14px; }  /* 0.875x */
```

### Comfortable Line Height
```css
body {
    line-height: 1.6;       /* Body text: 1.5-1.8 */
}

h1, h2, h3 {
    line-height: 1.2;       /* Headings: 1.1-1.3 */
}
```

### Professional Letter Spacing
```css
h1 {
    letter-spacing: 2px;    /* Headings: add space */
}

body {
    letter-spacing: 0.5px;  /* Body: slight space or none */
}
```

---

## Common Patterns

### Centered Hero Title
```css
.hero-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 48px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: #2c3e50;
}
```

### Readable Paragraph
```css
p {
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    line-height: 1.8;
    color: #2c3e50;
    max-width: 700px;      /* Limit line length */
}
```

### Stylized Quote
```css
.quote {
    font-family: Georgia, serif;
    font-size: 24px;
    font-style: italic;
    line-height: 1.6;
    color: #7f8c8d;
    text-align: center;
    border-left: 4px solid #3498db;
    padding-left: 30px;
}
```

### Code Block
```css
code {
    font-family: 'Courier New', monospace;
    font-size: 14px;
    background-color: #f4f4f4;
    padding: 4px 8px;
    border-radius: 4px;
    color: #e74c3c;
}
```

---

## Quick Tips

✅ **DO:**
- Use 16px minimum for body text
- Maintain 1.5-1.8 line-height for paragraphs
- Limit to 2-3 fonts per page
- Use font stacks with fallbacks
- Test readability on different screens

❌ **DON'T:**
- Use too many different fonts (looks messy)
- Make text too small (<14px)
- Use decorative fonts for body text
- Forget fallback fonts
- Use Comic Sans for professional sites (unless appropriate)

---

## Font Loading Example

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
    
    <style>
        body {
            font-family: 'Open Sans', Arial, sans-serif;
            font-size: 16px;
            line-height: 1.6;
            color: #2c3e50;
        }
        
        h1, h2, h3 {
            font-family: 'Montserrat', sans-serif;
            font-weight: 700;
            line-height: 1.2;
        }
    </style>
</head>
<body>
    <h1>Beautiful Typography</h1>
    <p>Easy to read content!</p>
</body>
</html>
```

---

**Remember:** Good typography makes content easy and enjoyable to read! 📖✨
