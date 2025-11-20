# CSS Basics - Cheat Sheet

## 🎨 What is CSS?
**CSS = Cascading Style Sheets**
- Controls the appearance/style of web pages
- HTML = structure, CSS = style

---

## 📝 Three Ways to Add CSS

### 1. Inline CSS (inside HTML elements)
```html
<h1 style="color: blue; font-size: 24px;">Hello</h1>
```
- ✅ Quick for testing
- ❌ Hard to maintain, don't use for real projects

### 2. Internal CSS (in the `<head>`)
```html
<head>
    <style>
        h1 {
            color: blue;
            font-size: 24px;
        }
    </style>
</head>
```
- ✅ Keeps CSS in one place
- ❌ Only works for one HTML page

### 3. External CSS (separate .css file) ⭐ BEST!
**HTML file:**
```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```

**style.css file:**
```css
h1 {
    color: blue;
    font-size: 24px;
}
```
- ✅ Professional approach
- ✅ One file can style multiple pages
- ✅ Clean and organized

---

## 🎯 CSS Syntax

```css
selector {
    property: value;
    property: value;
}
```

**Example:**
```css
h1 {
    color: purple;
    font-size: 36px;
    text-align: center;
}
```

- **Selector** = which element to style
- **Property** = what to change
- **Value** = what to change it to
- **{ }** = curly braces surround the styles
- **;** = semicolon ends each style line

---

## 🌈 Common Color Properties

```css
/* Text color */
color: red;
color: #FF0000;
color: rgb(255, 0, 0);

/* Background color */
background-color: lightblue;
background-color: #E3F2FD;
background-color: rgb(227, 242, 253);
```

---

## 📏 Common Text Properties

```css
/* Font size */
font-size: 16px;
font-size: 24px;
font-size: 1.5em;

/* Font family */
font-family: Arial, sans-serif;
font-family: 'Times New Roman', serif;

/* Text alignment */
text-align: left;
text-align: center;
text-align: right;

/* Font weight */
font-weight: normal;
font-weight: bold;
font-weight: 700;

/* Text decoration */
text-decoration: none;
text-decoration: underline;
```

---

## 📦 Common Box Properties

```css
/* Padding (space inside) */
padding: 10px;
padding: 20px 10px; /* top/bottom left/right */

/* Margin (space outside) */
margin: 10px;
margin: 20px 0; /* top/bottom left/right */

/* Border */
border: 2px solid black;
border-bottom: 3px solid blue;
border-radius: 10px; /* rounded corners */
```

---

## 🎨 Background Properties

```css
/* Solid color */
background-color: lightblue;

/* Gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Image */
background-image: url('image.jpg');
background-size: cover;
background-position: center;
```

---

## 💡 Quick Tips

1. **End every line with a semicolon `;`**
2. **Use lowercase for properties** (color not Color)
3. **Use American spelling** (color not colour)
4. **Comments**: `/* This is a comment */`
5. **Colors can be**:
   - Names: `red`, `blue`, `lightgreen`
   - Hex: `#FF0000`, `#0000FF`
   - RGB: `rgb(255, 0, 0)`

---

## 🔗 Linking External CSS

**In your HTML `<head>`:**
```html
<link rel="stylesheet" href="style.css">
```

**Important**: 
- HTML and CSS files must be in the same folder (or use correct path)
- Filename in `href=""` must match exactly
- CSS file should have `.css` extension
- Don't put HTML tags in your CSS file!

---

## ✅ Checklist for External CSS

- [ ] Created `.css` file in same folder as HTML
- [ ] Added `<link>` tag in HTML `<head>` section
- [ ] CSS file has NO HTML tags, only CSS rules
- [ ] Used correct selector names
- [ ] Ended each line with semicolon `;`
- [ ] Saved both files
- [ ] Refreshed browser to see changes

---

## 🌟 Common Mistakes to Avoid

❌ Forgetting semicolons
```css
h1 {
    color: blue
    font-size: 24px
}
```

✅ Always use semicolons
```css
h1 {
    color: blue;
    font-size: 24px;
}
```

❌ Wrong quotes in CSS (don't use quotes for values)
```css
h1 {
    color: "blue";  /* Wrong! */
}
```

✅ No quotes for most values
```css
h1 {
    color: blue;  /* Correct! */
}
```

❌ Missing curly braces
```css
h1
    color: blue;
```

✅ Always use curly braces
```css
h1 {
    color: blue;
}
```

---

**Need More Help?** 
- Check the examples folder
- Ask your parent/teacher
- Look at the parent guide
- Experiment and have fun! 🎨
