# Lesson 2.4: Typography & Text 📝

## 🎯 Learning Objectives
By the end of this lesson, you will:
- Master font properties (family, size, weight, style)
- Control text alignment and spacing
- Use Google Fonts for beautiful typography
- Style text decorations and transformations
- Create professional, readable text layouts
- Understand web-safe fonts vs custom fonts

## 📚 Why Typography Matters

Typography is the art and technique of arranging type. Good typography can:
- Make your content easy to read
- Establish visual hierarchy
- Create mood and personality
- Improve user experience
- Make your site look professional

The right font choices can transform a plain webpage into something stunning!

---

## 🔤 Font Properties

### 1. font-family - Choosing Your Font

The `font-family` property controls which typeface is used.

```css
h1 {
    font-family: Arial;
}

p {
    font-family: 'Times New Roman';
}
```

**Web-Safe Fonts** (available on all devices):
- **Arial** - Clean, modern, sans-serif
- **Helvetica** - Similar to Arial, widely loved
- **Times New Roman** - Traditional, formal, serif
- **Georgia** - Elegant serif font
- **Courier New** - Monospace (typewriter style)
- **Verdana** - Highly readable on screens
- **Comic Sans MS** - Casual (use sparingly!)

**Font Stacks** (provide fallbacks):
```css
body {
    font-family: Arial, Helvetica, sans-serif;
}
```
Translation: "Use Arial. If not available, try Helvetica. If that fails, use any sans-serif font."

**Generic Font Families:**
- `serif` - Fonts with decorative strokes (Times New Roman)
- `sans-serif` - Clean fonts without strokes (Arial)
- `monospace` - Fixed-width fonts (Courier)
- `cursive` - Handwriting-style fonts
- `fantasy` - Decorative fonts

---

### 2. font-size - Text Size

```css
h1 {
    font-size: 48px;  /* Large heading */
}

p {
    font-size: 16px;  /* Normal paragraph */
}

.small-print {
    font-size: 12px;  /* Fine print */
}
```

**Common Units:**
- **px** (pixels) - Exact size, most common
- **em** - Relative to parent element (1em = parent's font-size)
- **rem** - Relative to root element (more predictable)
- **%** - Percentage of parent size

**Typical Sizes:**
```css
h1 { font-size: 32px - 48px; }
h2 { font-size: 24px - 32px; }
h3 { font-size: 20px - 24px; }
p  { font-size: 14px - 18px; }
```

---

### 3. font-weight - Boldness

```css
h1 {
    font-weight: bold;  /* Or 700 */
}

p {
    font-weight: normal;  /* Or 400 */
}

.thin {
    font-weight: 300;
}
```

**Values:**
- **100-900**: Numeric scale (100 = thinnest, 900 = boldest)
- **normal**: Same as 400
- **bold**: Same as 700
- **lighter/bolder**: Relative to parent

**Common Weights:**
- 100-200: Thin/Extra Light
- 300: Light
- 400: Normal/Regular
- 500: Medium
- 600: Semi-Bold
- 700: Bold
- 800-900: Extra Bold/Black

---

### 4. font-style - Italic or Not

```css
em {
    font-style: italic;
}

.quote {
    font-style: italic;
}

.normal {
    font-style: normal;
}
```

**Values:**
- `normal` - Regular upright text
- `italic` - Slanted cursive version
- `oblique` - Slanted version (less common)

---

## 📏 Text Properties

### 5. text-align - Horizontal Alignment

```css
h1 {
    text-align: center;
}

p {
    text-align: left;  /* Default */
}

.signature {
    text-align: right;
}

.article {
    text-align: justify;  /* Spreads to fill width */
}
```

**Values:**
- `left` - Default alignment
- `center` - Centered text
- `right` - Right-aligned
- `justify` - Spreads text to fill width (both edges align)

---

### 6. line-height - Spacing Between Lines

```css
p {
    line-height: 1.6;  /* 1.6 × font size */
}

h1 {
    line-height: 1.2;  /* Tighter for headings */
}
```

**Guidelines:**
- **1.0** - Cramped, hard to read
- **1.4-1.6** - Good for body text (readable!)
- **1.2-1.3** - Good for headings
- **2.0+** - Very spacious

**Pro tip:** Use unitless numbers (1.6) rather than px or em for better scaling!

---

### 7. letter-spacing - Space Between Characters

```css
h1 {
    letter-spacing: 2px;  /* Spread out */
}

.tight {
    letter-spacing: -1px;  /* Closer together */
}
```

---

### 8. text-decoration - Underlines, Strikethrough

```css
a {
    text-decoration: none;  /* Remove underline from links */
}

.underline {
    text-decoration: underline;
}

.strikethrough {
    text-decoration: line-through;
}
```

**Values:**
- `none` - No decoration
- `underline` - Line under text
- `line-through` - Strike through text
- `overline` - Line above text

---

### 9. text-transform - Change Case

```css
h1 {
    text-transform: uppercase;  /* ALL CAPS */
}

.lowercase {
    text-transform: lowercase;  /* all lowercase */
}

.capitalize {
    text-transform: capitalize;  /* First Letter Of Each Word */
}
```

---

## 🌐 Google Fonts - Beautiful Web Fonts!

Google Fonts provides 1000+ free fonts you can use on your website!

### How to Use Google Fonts:

**Step 1: Choose a font** at [fonts.google.com](https://fonts.google.com)

**Step 2: Add to HTML `<head>`:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```

**Step 3: Use in CSS:**
```css
body {
    font-family: 'Roboto', sans-serif;
}
```

**Popular Google Fonts:**
- **Roboto** - Modern, clean
- **Open Sans** - Highly readable
- **Lato** - Friendly, professional
- **Montserrat** - Bold, geometric
- **Poppins** - Rounded, modern
- **Playfair Display** - Elegant serif

---

## 💡 Typography Best Practices

### ✅ DO:
- Limit to 2-3 fonts maximum per site
- Use high contrast between text and background
- Set line-height to 1.4-1.6 for readability
- Choose font sizes that scale well (16px+ for body text)
- Pair serif headings with sans-serif body (or vice versa)

### ❌ DON'T:
- Use more than 3 different fonts
- Use tiny font sizes (under 14px for body text)
- Use line-height under 1.2 for paragraphs
- Use Comic Sans for professional sites
- Make text too wide (keep lines under 75 characters)

---

## 🎨 Font Pairing Examples

### Classic Professional
```css
h1, h2, h3 {
    font-family: 'Georgia', serif;  /* Serif headings */
}
body {
    font-family: 'Arial', sans-serif;  /* Sans-serif body */
}
```

### Modern Clean
```css
h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
}
body {
    font-family: 'Open Sans', sans-serif;
}
```

### Elegant
```css
h1, h2, h3 {
    font-family: 'Playfair Display', serif;
}
body {
    font-family: 'Lato', sans-serif;
}
```

---

## 🎯 Complete Typography Example

```css
body {
    font-family: 'Open Sans', Arial, sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: #333;
}

h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 48px;
    font-weight: 700;
    line-height: 1.2;
    text-align: center;
    color: #2c3e50;
}

h2 {
    font-size: 32px;
    font-weight: 600;
    margin-top: 40px;
}

p {
    margin: 15px 0;
}

a {
    color: #3498db;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

.emphasis {
    font-weight: bold;
    color: #e74c3c;
}

.quote {
    font-style: italic;
    font-size: 18px;
    border-left: 4px solid #3498db;
    padding-left: 20px;
}
```

---

## 🎮 Let's Practice!

Head to the `practice` folder to complete exercises and create beautifully styled text!

---

## 📂 What's Next?

In **Lesson 2.5**, we'll explore the **Box Model** - understanding padding, margin, and borders to control spacing and layout!

---

## 🌟 Key Takeaways

- **font-family** - Choose typefaces (Arial, Georgia, Google Fonts)
- **font-size** - Control text size (16px for body, 32-48px for headings)
- **font-weight** - Make text bold (400 = normal, 700 = bold)
- **line-height** - Space between lines (1.4-1.6 for readability)
- **text-align** - Align text (left, center, right, justify)
- **Google Fonts** - Free beautiful fonts for your site
- **Limit fonts** - 2-3 maximum for cohesive design
- **Readability first** - Good contrast, proper sizing, adequate spacing

---

**Parent Guide**: [resources/parent-guide.md](resources/parent-guide.md)  
**Cheat Sheet**: [resources/cheatsheet.md](resources/cheatsheet.md)
