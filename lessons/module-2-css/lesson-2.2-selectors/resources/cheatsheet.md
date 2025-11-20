# CSS Selectors - Cheat Sheet

## 🎯 Three Main Selector Types

### 1️⃣ Element Selectors
Target **ALL** elements of a specific type.

**HTML:**
```html
<h1>Heading</h1>
<p>Paragraph</p>
```

**CSS:**
```css
h1 {
    color: blue;
}

p {
    font-size: 16px;
}
```

**Use when:** You want ALL elements of that type to look the same.

---

### 2️⃣ Class Selectors ⭐ (Most Common!)
Target elements with a specific class. Use **dot (.)** in CSS.

**HTML:**
```html
<p class="highlight">Special paragraph</p>
<div class="card">Card content</div>
```

**CSS:**
```css
.highlight {
    background-color: yellow;
}

.card {
    border: 2px solid gray;
    padding: 20px;
}
```

**Rules:**
- HTML: `class="name"` (no dot)
- CSS: `.name { }` (with dot)
- Can be used on MULTIPLE elements
- Elements can have MULTIPLE classes

**Use when:** You want to reuse styles on multiple elements.

---

### 3️⃣ ID Selectors
Target ONE specific element. Use **hash (#)** in CSS.

**HTML:**
```html
<header id="main-header">Header</header>
<nav id="main-nav">Navigation</nav>
```

**CSS:**
```css
#main-header {
    background-color: navy;
    color: white;
}

#main-nav {
    padding: 20px;
}
```

**Rules:**
- HTML: `id="name"` (no hash)
- CSS: `#name { }` (with hash)
- IDs must be UNIQUE (only one per page!)
- More "powerful" than classes

**Use when:** The element appears only once (header, footer, main nav).

---

## 📊 Quick Comparison

| Type | HTML | CSS | Repeatable? | Symbol |
|------|------|-----|------------|---------|
| **Element** | `<p>` | `p { }` | N/A | None |
| **Class** | `class="box"` | `.box { }` | ✅ Yes | `.` dot |
| **ID** | `id="header"` | `#header { }` | ❌ No | `#` hash |

---

## 🔄 Multiple Classes

You can add multiple classes to one element (space-separated):

**HTML:**
```html
<div class="card featured blue">Content</div>
<button class="btn btn-primary btn-large">Click</button>
```

**CSS:**
```css
.card { /* base styles */ }
.featured { /* featured styles */ }
.blue { /* blue color */ }

.btn { /* base button */ }
.btn-primary { /* primary color */ }
.btn-large { /* large size */ }
```

The element gets ALL styles from ALL its classes!

---

## 🎯 Grouping Selectors

Style multiple selectors at once with commas:

```css
h1, h2, h3 {
    font-family: Arial, sans-serif;
    color: navy;
}

.highlight, .important, .featured {
    background-color: yellow;
}
```

---

## 🌟 Advanced Selectors

### Element with Class
```css
p.highlight {
    /* Only <p> elements with class="highlight" */
    color: red;
}
```

### Descendant Selector
```css
div p {
    /* All <p> elements inside any <div> */
    color: blue;
}

.container .item {
    /* All .item elements inside .container */
    margin: 10px;
}
```

### Direct Child Selector
```css
.parent > p {
    /* Only direct children <p> of .parent */
    font-weight: bold;
}
```

### Pseudo-classes (Preview!)
```css
a:hover {
    /* When hovering over links */
    color: red;
}

li:first-child {
    /* First list item */
    font-weight: bold;
}

li:last-child {
    /* Last list item */
    color: blue;
}
```

---

## ✅ Selector Best Practices

### ✅ DO:
- Use **classes** for most styling
- Give classes descriptive names: `.button-primary`, `.card-featured`
- Use **lowercase-with-hyphens**: `.main-nav` not `.MainNav`
- Use **IDs** for unique page sections
- Group similar selectors together

### ❌ DON'T:
- Use IDs for styling (save for JavaScript)
- Use generic names like `.box1`, `.thing`
- Mix naming styles
- Overuse element selectors (they style EVERYTHING)

---

## 🎨 Common Naming Patterns

### Layout:
- `.container`, `.wrapper`
- `.header`, `.footer`
- `.sidebar`, `.main-content`
- `.section`, `.row`, `.column`

### Components:
- `.card`, `.card-header`, `.card-body`
- `.btn`, `.btn-primary`, `.btn-large`
- `.nav`, `.nav-link`
- `.alert`, `.alert-success`, `.alert-error`

### Utilities:
- `.text-center`, `.text-left`
- `.hidden`, `.visible`
- `.mb-20` (margin-bottom 20px)
- `.bg-blue` (background blue)

---

## 🐛 Common Mistakes

❌ **Forgetting the dot or hash:**
```css
/* WRONG */
card { }
header { }

/* CORRECT */
.card { }
#header { }
```

❌ **Using dot/hash in HTML:**
```html
<!-- WRONG -->
<div class=".card">

<!-- CORRECT -->
<div class="card">
```

❌ **Multiple IDs on one element:**
```html
<!-- WRONG - IDs must be unique -->
<div id="header footer">

<!-- CORRECT - Use classes -->
<div class="header footer">
```

❌ **Missing space between multiple classes:**
```html
<!-- WRONG -->
<div class="cardfeatured">

<!-- CORRECT -->
<div class="card featured">
```

---

## 💡 Quick Reference

```css
/* Elements - no symbol */
p { color: blue; }
h1 { font-size: 32px; }

/* Classes - dot (.) */
.highlight { background: yellow; }
.card { padding: 20px; }

/* IDs - hash (#) */
#header { background: navy; }
#main { max-width: 900px; }

/* Multiple classes */
.btn.primary { /* both classes */ }

/* Grouping */
h1, h2, h3 { color: navy; }

/* Descendant */
div p { margin: 10px; }

/* Direct child */
.parent > p { font-weight: bold; }

/* Pseudo-class */
a:hover { color: red; }
```

---

## 🎯 When to Use Which?

| Scenario | Use This |
|----------|----------|
| Style all paragraphs | Element: `p { }` |
| Reusable button style | Class: `.btn { }` |
| Unique header section | ID: `#main-header { }` |
| Multiple styles on one element | Multiple classes |
| Style only some paragraphs | Class: `.special-p { }` |
| All headings the same | Group: `h1, h2, h3 { }` |

---

**Remember:** 
- **Classes** are your best friend - use them most!
- **IDs** for unique elements only
- **Elements** for site-wide defaults
- Practice makes perfect! 🎨
