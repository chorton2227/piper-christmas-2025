# Lesson 2.2: CSS Selectors

## 🎯 Learning Objectives
By the end of this lesson, you will:
- Understand what CSS selectors are and why they're important
- Learn to use element selectors to style HTML tags
- Master class selectors to style specific groups of elements
- Use ID selectors for unique elements
- Know when to use each type of selector
- Combine multiple selectors for efficient styling

## 📚 What Are Selectors?

**Selectors** tell CSS **which elements** to style.

Think of it like this: Your webpage has lots of elements (headings, paragraphs, divs, etc.). Selectors are how you "point" to the elements you want to style.

```css
selector {
    /* styles go here */
}
```

There are three main types of selectors you'll use all the time!

---

## 1️⃣ Element Selectors

Element selectors target **all elements of a specific type**.

### Example:
```css
h1 {
    color: blue;
}

p {
    font-size: 16px;
}

div {
    background-color: lightgray;
}
```

This will style:
- **ALL** `<h1>` elements → blue
- **ALL** `<p>` elements → 16px font size
- **ALL** `<div>` elements → light gray background

### When to Use:
- When you want ALL elements of that type to look the same
- For general, site-wide styles
- For basic HTML tags (h1, p, ul, etc.)

---

## 2️⃣ Class Selectors ⭐

Class selectors target elements with a **specific class attribute**. Classes start with a **dot (.)** in CSS.

### HTML:
```html
<p class="highlight">This paragraph is special!</p>
<p>This paragraph is normal.</p>
<p class="highlight">This one is special too!</p>
```

### CSS:
```css
.highlight {
    background-color: yellow;
    font-weight: bold;
}
```

Result: Only the paragraphs with `class="highlight"` will have yellow background and bold text!

### Important Rules:
- In HTML: `class="highlight"` (no dot)
- In CSS: `.highlight { }` (with dot)
- Classes can be used on **multiple elements**
- Elements can have **multiple classes**: `class="highlight big blue"`

### When to Use:
- When you want to style **some** elements but not all
- For reusable styles (buttons, cards, alerts)
- Most common selector you'll use!

---

## 3️⃣ ID Selectors

ID selectors target **one specific element** with a unique ID. IDs start with a **hash (#)** in CSS.

### HTML:
```html
<div id="header">This is the header</div>
<div id="main">This is the main content</div>
```

### CSS:
```css
#header {
    background-color: navy;
    color: white;
}

#main {
    padding: 20px;
}
```

### Important Rules:
- In HTML: `id="header"` (no hash)
- In CSS: `#header { }` (with hash)
- IDs must be **unique** - only one element can have a specific ID
- IDs are more "powerful" than classes (but use classes more often!)

### When to Use:
- For unique page elements (header, footer, navigation)
- When you need to target one specific element
- Less common than classes - use sparingly!

---

## 🎯 Quick Comparison

| Selector Type | HTML | CSS | Used For | Can Repeat? |
|--------------|------|-----|----------|------------|
| **Element** | `<h1>` | `h1 { }` | All elements of that type | N/A |
| **Class** | `class="box"` | `.box { }` | Groups of elements | ✅ Yes |
| **ID** | `id="header"` | `#header { }` | One unique element | ❌ No |

---

## 🔄 Multiple Classes

You can add **multiple classes** to one element by separating them with spaces:

### HTML:
```html
<div class="card featured blue">Special Card</div>
```

### CSS:
```css
.card {
    padding: 20px;
    border: 1px solid gray;
}

.featured {
    border-width: 3px;
    font-weight: bold;
}

.blue {
    background-color: lightblue;
}
```

The div gets ALL THREE styles applied!

---

## 🎨 Grouping Selectors

You can style **multiple selectors at once** by separating them with commas:

```css
h1, h2, h3 {
    color: navy;
    font-family: Arial, sans-serif;
}

.highlight, .important, .featured {
    background-color: yellow;
}
```

This saves time and keeps your code DRY (Don't Repeat Yourself)!

---

## 🌟 Combining Selectors

You can get very specific with selectors:

```css
/* Element with class */
p.highlight {
    /* Only <p> elements with class="highlight" */
    color: red;
}

/* Descendant selector */
div p {
    /* All <p> inside any <div> */
    margin: 10px;
}

/* Multiple classes */
.card.featured {
    /* Elements with BOTH classes */
    border: 3px solid gold;
}
```

---

## 💡 Best Practices

### ✅ DO:
- Use **classes** for most styling (they're reusable!)
- Give classes **descriptive names**: `.button`, `.card`, `.navigation`
- Use **lowercase** with **hyphens**: `.main-header` not `.MainHeader`
- Keep class names **meaningful**: `.btn-primary` not `.blue-thing`

### ❌ DON'T:
- Use IDs for styling (save them for JavaScript)
- Use inline styles (unless absolutely necessary)
- Use generic names like `.box1`, `.box2` (use descriptive names!)
- Mix up the dot (.) and hash (#) symbols

---

## 🎮 Let's Practice!

Now that you understand selectors, it's time to practice! Head over to the `practice` folder to complete the exercises.

---

## 📂 What's Next?

In the next lesson (2.3), we'll dive deeper into **colors** - learning about hex codes, RGB values, and creating beautiful color schemes!

---

## 🌟 Key Takeaways

- **Selectors** tell CSS which elements to style
- **Element selectors** (`h1`) style all elements of that type
- **Class selectors** (`.highlight`) style elements with that class - most common!
- **ID selectors** (`#header`) style one unique element
- Classes can be reused; IDs must be unique
- Use classes for most styling - they're flexible and reusable!

---

**Parent Guide**: See [resources/parent-guide.md](resources/parent-guide.md) for detailed teaching tips.

**Cheat Sheet**: Check [resources/cheatsheet.md](resources/cheatsheet.md) for a quick selector reference.
