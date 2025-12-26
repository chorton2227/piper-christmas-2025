# Typography & Text Cheat Sheet 📝

## Font Properties

### font-family
```css
/* Single font */
h1 { font-family: Arial; }

/* Font with spaces (use quotes) */
p { font-family: 'Times New Roman'; }

/* Font stack (with fallbacks) */
body { font-family: Arial, Helvetica, sans-serif; }

/* Generic families */
.serif { font-family: serif; }
.sans { font-family: sans-serif; }
.mono { font-family: monospace; }
```

**Web-Safe Fonts:**
- Arial, Helvetica, Verdana (sans-serif)
- Times New Roman, Georgia (serif)
- Courier New (monospace)

---

### font-size
```css
h1 { font-size: 48px; }     /* Pixels (most common) */
p { font-size: 1.5em; }     /* Relative to parent */
body { font-size: 100%; }   /* Percentage */
```

**Typical Sizes:**
- H1: 32px-48px
- H2: 24px-32px
- Body: 16px-18px
- Small: 12px-14px

---

### font-weight
```css
p { font-weight: normal; }   /* = 400 */
h1 { font-weight: bold; }    /* = 700 */
.thin { font-weight: 300; }  /* Numeric 100-900 */
```

**Common Weights:**
- 300: Light
- 400: Normal/Regular
- 600: Semi-Bold
- 700: Bold
- 900: Black/Extra Bold

---

### font-style
```css
em { font-style: italic; }
.normal { font-style: normal; }
.oblique { font-style: oblique; }
```

---

## Text Properties

### text-align
```css
h1 { text-align: center; }
p { text-align: left; }      /* Default */
.right { text-align: right; }
.full { text-align: justify; }
```

---

### line-height
```css
p { line-height: 1.6; }      /* Unitless (recommended) */
h1 { line-height: 1.2; }     /* Tighter for headings */
.spacious { line-height: 2.0; }
```

**Guidelines:**
- Body text: 1.4-1.6
- Headings: 1.2-1.3
- Avoid under 1.2

---

### letter-spacing
```css
h1 { letter-spacing: 2px; }  /* More space */
.tight { letter-spacing: -1px; }
```

---

### word-spacing
```css
p { word-spacing: 5px; }
```

---

### text-decoration
```css
a { text-decoration: none; }       /* Remove underline */
.underline { text-decoration: underline; }
.strike { text-decoration: line-through; }
.overline { text-decoration: overline; }
```

---

### text-transform
```css
h1 { text-transform: uppercase; }  /* ALL CAPS */
.lower { text-transform: lowercase; }
.cap { text-transform: capitalize; } /* First Letter */
.none { text-transform: none; }
```

---

## Google Fonts

### Step 1: Add to HTML `<head>`
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```

### Step 2: Use in CSS
```css
body {
    font-family: 'Roboto', sans-serif;
}
```

### Popular Google Fonts
- **Roboto** - Modern, clean
- **Open Sans** - Highly readable
- **Lato** - Professional
- **Montserrat** - Bold, geometric
- **Playfair Display** - Elegant serif
- **Poppins** - Rounded, friendly

---

## Complete Example

```css
/* Body text */
body {
    font-family: 'Open Sans', Arial, sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: #333;
}

/* Main heading */
h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 48px;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 3px;
    line-height: 1.2;
}

/* Subheading */
h2 {
    font-size: 32px;
    font-weight: 600;
    margin-top: 30px;
}

/* Links */
a {
    color: #3498db;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

/* Quote */
.quote {
    font-style: italic;
    font-size: 20px;
    text-align: center;
    border-left: 4px solid #3498db;
    padding-left: 20px;
}

/* Emphasis */
.highlight {
    font-weight: bold;
    color: #e74c3c;
}
```

---

## Typography Best Practices

### ✅ DO:
- Use 2-3 fonts maximum
- Set line-height: 1.4-1.6 for body text
- Use 16px+ for body text
- Pair serif headings with sans-serif body (or vice versa)
- Provide font fallbacks
- Use high contrast (dark on light)

### ❌ DON'T:
- Use more than 3 different fonts
- Make body text smaller than 14px
- Use line-height under 1.2 for paragraphs
- Make lines too wide (keep under 75 characters)
- Use Comic Sans for professional sites

---

## Font Pairing Examples

```css
/* Classic Professional */
h1, h2 { font-family: Georgia, serif; }
body { font-family: Arial, sans-serif; }

/* Modern Clean */
h1, h2 { font-family: 'Montserrat', sans-serif; }
body { font-family: 'Open Sans', sans-serif; }

/* Elegant */
h1, h2 { font-family: 'Playfair Display', serif; }
body { font-family: 'Lato', sans-serif; }
```

---

## Quick Reference

| Property | Values | Example |
|----------|--------|---------|
| font-family | Font name, generic | `Arial, sans-serif` |
| font-size | px, em, rem, % | `16px` |
| font-weight | 100-900, normal, bold | `700` |
| font-style | normal, italic, oblique | `italic` |
| text-align | left, center, right, justify | `center` |
| line-height | Number, px, % | `1.6` |
| letter-spacing | px | `2px` |
| text-decoration | none, underline, line-through | `none` |
| text-transform | uppercase, lowercase, capitalize | `uppercase` |

---

## Remember!

🎯 **Typography creates hierarchy** - Use different sizes/weights to show importance

📖 **Readability is key** - Good spacing and sizing makes content comfortable to read

🎨 **Less is more** - Stick to 2-3 fonts for a cohesive design

🌐 **Always provide fallbacks** - Include generic font families in your font stacks
