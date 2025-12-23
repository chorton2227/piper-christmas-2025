# Lesson 2.4: Fonts and Text 📝

## Welcome!

Typography is the art of making text look beautiful! The right fonts can make your website look professional, fun, playful, or serious. In this lesson, you'll learn how to control every aspect of text styling with CSS.

---

## What You'll Learn

- How to change fonts with `font-family`
- How to control text size with `font-size`
- How to make text bold, italic, or underlined
- How to align text (left, center, right)
- How to adjust spacing between lines and letters
- How to use Google Fonts for beautiful typography
- How to style links and special text

---

## Font Properties

### 1. **font-family** - Choosing Your Font

The `font-family` property lets you choose which font to use.

```css
h1 {
    font-family: Arial;
}

p {
    font-family: 'Times New Roman';
}
```

**Web-Safe Fonts** (work on all computers):
- `Arial` - clean and modern
- `Helvetica` - similar to Arial
- `Times New Roman` - traditional and formal
- `Georgia` - elegant serif font
- `Courier New` - typewriter style (monospace)
- `Verdana` - easy to read on screens
- `Comic Sans MS` - casual and playful

**Font Stacks** (fallbacks if first font isn't available):
```css
body {
    font-family: Arial, Helvetica, sans-serif;
}
```
This says: "Use Arial. If Arial isn't available, use Helvetica. If that's not available, use any sans-serif font."

### 2. **font-size** - Making Text Bigger or Smaller

```css
h1 {
    font-size: 48px;  /* Big heading! */
}

p {
    font-size: 16px;  /* Normal paragraph text */
}

.small-text {
    font-size: 12px;  /* Small print */
}
```

**Common units:**
- `px` (pixels) - exact size (most common)
- `em` - relative to parent element
- `rem` - relative to root element
- `%` - percentage of parent size

### 3. **font-weight** - How Bold or Light

```css
h1 {
    font-weight: bold;  /* Or use 700 */
}

p {
    font-weight: normal;  /* Or use 400 */
}

.light-text {
    font-weight: 300;  /* Thin and light */
}
```

**Values:**
- `normal` or `400` - regular text
- `bold` or `700` - bold text
- `100` - thinnest
- `900` - thickest

### 4. **font-style** - Italic or Normal

```css
em {
    font-style: italic;  /* Slanted text */
}

.quote {
    font-style: italic;
}

.normal {
    font-style: normal;  /* Not italic */
}
```

---

## Text Properties

### 5. **text-align** - Where Text Lines Up

```css
h1 {
    text-align: center;  /* Centered */
}

p {
    text-align: left;    /* Default - left aligned */
}

.right-side {
    text-align: right;   /* Right aligned */
}

.spread-out {
    text-align: justify; /* Spreads to fill width */
}
```

### 6. **line-height** - Space Between Lines

```css
p {
    line-height: 1.6;  /* 1.6 times the font size */
}

.cramped {
    line-height: 1.0;  /* Tight spacing */
}

.spacious {
    line-height: 2.0;  /* Lots of space */
}
```

💡 **Tip:** `1.5` to `1.8` is usually easiest to read!

### 7. **letter-spacing** - Space Between Letters

```css
h1 {
    letter-spacing: 2px;  /* Spread out letters */
}

.tight {
    letter-spacing: -1px;  /* Closer together */
}
```

### 8. **text-decoration** - Underlines and Strikethroughs

```css
a {
    text-decoration: underline;  /* Underlined */
}

.no-underline {
    text-decoration: none;  /* Remove underline */
}

.strikethrough {
    text-decoration: line-through;  /* Strike through */
}
```

### 9. **text-transform** - Changing Case

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

### 10. **color** - Text Color (Review!)

```css
h1 {
    color: #3498db;  /* Blue text */
}

p {
    color: rgb(44, 62, 80);  /* Dark gray text */
}
```

---

## Using Google Fonts 🌟

Google Fonts gives you access to hundreds of beautiful free fonts!

### Step 1: Choose a Font
1. Go to **https://fonts.google.com**
2. Browse fonts and click one you like
3. Click "Get Font" then "Get embed code"

### Step 2: Add to Your HTML
```html
<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
</head>
```

### Step 3: Use in Your CSS
```css
body {
    font-family: 'Roboto', sans-serif;
}
```

**Popular Google Fonts:**
- **Roboto** - modern and clean
- **Open Sans** - friendly and easy to read
- **Lato** - professional
- **Montserrat** - bold and contemporary
- **Poppins** - geometric and modern
- **Playfair Display** - elegant for headings

---

## Combining Properties

You can use multiple font properties together!

```css
h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 48px;
    font-weight: bold;
    color: #2c3e50;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
}
```

---

## Font Shorthand Property

You can combine some font properties in one line:

```css
/* Long way */
p {
    font-style: italic;
    font-weight: bold;
    font-size: 16px;
    line-height: 1.6;
    font-family: Arial, sans-serif;
}

/* Shorthand way */
p {
    font: italic bold 16px/1.6 Arial, sans-serif;
}
```

Format: `font: [style] [weight] size/line-height family;`

---

## Typography Best Practices

### ✅ DO:
- Use **2-3 fonts maximum** on a page
- Pair fonts thoughtfully (one for headings, one for body text)
- Keep body text **16px or larger** for readability
- Use sufficient **line-height** (1.5-1.8 is ideal)
- Ensure good **contrast** between text and background

### ❌ DON'T:
- Use too many different fonts (looks messy)
- Make text too small (hard to read)
- Use line-height less than 1.2 (cramped)
- Use similar-looking fonts together (confusing)
- Use decorative fonts for body text (hard to read)

---

## Font Pairing Ideas

### Classic Combinations:

**1. Serif Heading + Sans-Serif Body**
```css
h1, h2, h3 {
    font-family: 'Playfair Display', serif;
}

body {
    font-family: 'Roboto', sans-serif;
}
```

**2. Modern Sans-Serif Combo**
```css
h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
}

body {
    font-family: 'Open Sans', sans-serif;
}
```

**3. Playful and Fun**
```css
h1, h2, h3 {
    font-family: 'Fredoka One', cursive;
}

body {
    font-family: 'Poppins', sans-serif;
}
```

---

## Text Accessibility

Making text readable for everyone:

1. **Sufficient contrast** - dark text on light backgrounds
2. **Readable size** - at least 16px for body text
3. **Clear fonts** - avoid overly decorative fonts for body
4. **Line length** - keep lines 50-75 characters wide
5. **Line spacing** - 1.5-1.8 line-height

---

## Practice Time!

Now it's time to practice what you've learned! Check out the **examples** folder to see these concepts in action, then try the **practice exercises** to build your own typography-rich pages.

---

## Key Takeaways

- `font-family` chooses your font
- `font-size` controls text size
- `font-weight` makes text bold or light
- `text-align` controls alignment (left, center, right)
- `line-height` adjusts spacing between lines
- Google Fonts provides beautiful free fonts
- Good typography makes content easier and more enjoyable to read!

---

## What's Next?

After completing this lesson, you'll move on to **Lesson 2.5: The Box Model**, where you'll learn about padding, margins, and borders - the foundation of layout!

Happy typography! ✨
