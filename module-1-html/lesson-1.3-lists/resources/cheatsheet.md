# Lesson 1.3 Cheatsheet: Lists

Quick reference for creating all types of lists in HTML.

---

## 📋 List Types Overview

| List Type | Tag | Purpose | Example Use |
|-----------|-----|---------|-------------|
| **Unordered** | `<ul>` | Bullet points, order doesn't matter | Shopping list, features |
| **Ordered** | `<ol>` | Numbered, order matters | Steps, rankings |
| **Description** | `<dl>` | Terms and definitions | Glossary, FAQ |

---

## 📝 Unordered Lists (Bullets)

### Basic Syntax
```html
<ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>
```

### Tags
- **`<ul>`** = Unordered List (container)
- **`<li>`** = List Item

### When to Use
- Order doesn't matter
- Features or benefits
- Collections of items
- Shopping lists
- Navigation menus

---

## 🔢 Ordered Lists (Numbers)

### Basic Syntax
```html
<ol>
    <li>First step</li>
    <li>Second step</li>
    <li>Third step</li>
</ol>
```

### Tags
- **`<ol>`** = Ordered List (container)
- **`<li>`** = List Item (same as ul!)

### When to Use
- Order IS important
- Step-by-step instructions
- Rankings (Top 10, etc.)
- Recipes (steps)
- Directions

---

## 🪺 Nested Lists

### Syntax
```html
<ul>
    <li>Parent Item
        <ul>
            <li>Child Item</li>
            <li>Child Item</li>
        </ul>
    </li>
    <li>Another Parent</li>
</ul>
```

### Key Rules
1. Nested list goes **INSIDE** the `<li>` tag
2. Can mix `<ul>` and `<ol>`
3. Can nest multiple levels deep
4. Indent code for readability

### Example: Mixed Nesting
```html
<ol>
    <li>Main Step
        <ul>
            <li>Sub-item</li>
            <li>Sub-item</li>
        </ul>
    </li>
    <li>Next Step</li>
</ol>
```

---

## 📖 Description Lists

### Basic Syntax
```html
<dl>
    <dt>Term</dt>
    <dd>Definition of the term</dd>
    
    <dt>Another Term</dt>
    <dd>Another definition</dd>
</dl>
```

### Tags
- **`<dl>`** = Description List (container)
- **`<dt>`** = Description Term (word being defined)
- **`<dd>`** = Description Definition (the explanation)

### When to Use
- Glossaries
- FAQs (question + answer)
- Product specs (label + value)
- Contact info (label + detail)

---

## ✅ Good vs ❌ Bad

### List Structure

```html
<!-- ✅ GOOD: Proper structure -->
<ul>
    <li>Item</li>
    <li>Item</li>
</ul>

<!-- ❌ BAD: Missing container -->
<li>Item</li>
<li>Item</li>

<!-- ❌ BAD: Text not in li -->
<ul>
    Item
    Item
</ul>
```

### Nesting

```html
<!-- ✅ GOOD: Nested inside li -->
<ul>
    <li>Parent
        <ul>
            <li>Child</li>
        </ul>
    </li>
</ul>

<!-- ❌ BAD: Nested outside li -->
<ul>
    <li>Parent</li>
    <ul>
        <li>Child</li>
    </ul>
</ul>
```

---

## 🎨 Common Patterns

### Shopping List
```html
<h2>Grocery List</h2>
<ul>
    <li>Milk</li>
    <li>Eggs</li>
    <li>Bread</li>
</ul>
```

### Recipe Steps
```html
<h2>Instructions</h2>
<ol>
    <li>Preheat oven to 350°F</li>
    <li>Mix ingredients</li>
    <li>Bake for 30 minutes</li>
</ol>
```

### Categorized List
```html
<h2>School Subjects</h2>
<ul>
    <li>Math
        <ul>
            <li>Algebra</li>
            <li>Geometry</li>
        </ul>
    </li>
    <li>Science
        <ul>
            <li>Biology</li>
            <li>Chemistry</li>
        </ul>
    </li>
</ul>
```

### Glossary
```html
<h2>Terms</h2>
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
</dl>
```

---

## 💡 Quick Tips

1. **Every `<li>` needs a container** (`<ul>` or `<ol>`)
2. **Use ul when order doesn't matter**
3. **Use ol when order does matter**
4. **Nest lists INSIDE `<li>` tags**
5. **Indent your code** for readability
6. **Close all tags** properly
7. **Use dl for term/definition pairs**
8. **Can combine with formatting** (`<strong>`, `<em>`, etc.)

---

## 🚫 Common Mistakes

| Wrong | Right | Why |
|-------|-------|-----|
| `<ul>` without `<li>` | `<ul><li>Item</li></ul>` | Items must be in li tags |
| Nested list after `</li>` | Nested list before `</li>` | Must be inside the li |
| `<li>` without container | `<ul><li>Item</li></ul>` | li tags need ul or ol |
| Wrong closing order | Close inner before outer | Proper nesting structure |

---

## 📋 Complete Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Lists Example</title>
</head>
<body>
    <h1>My Lists Page</h1>
    
    <!-- Unordered List -->
    <h2>My Hobbies</h2>
    <ul>
        <li>Gaming</li>
        <li>Reading</li>
        <li>Coding</li>
    </ul>
    
    <hr>
    
    <!-- Ordered List -->
    <h2>Morning Routine</h2>
    <ol>
        <li>Wake up</li>
        <li>Brush teeth</li>
        <li>Eat breakfast</li>
    </ol>
    
    <hr>
    
    <!-- Nested List -->
    <h2>Favorite Foods</h2>
    <ul>
        <li>Fruits
            <ul>
                <li>Apples</li>
                <li>Oranges</li>
            </ul>
        </li>
        <li>Desserts
            <ul>
                <li>Ice cream</li>
                <li>Cookies</li>
            </ul>
        </li>
    </ul>
    
    <hr>
    
    <!-- Description List -->
    <h2>Web Terms</h2>
    <dl>
        <dt>HTML</dt>
        <dd>HyperText Markup Language</dd>
        
        <dt>Browser</dt>
        <dd>Software that displays web pages</dd>
    </dl>
</body>
</html>
```

---

## ✅ Checklist

When creating lists:
- [ ] Choose ul for unordered, ol for ordered
- [ ] Wrap all items in `<li>` tags
- [ ] Put nested lists INSIDE parent `<li>`
- [ ] Close tags in correct order
- [ ] Indent code for readability
- [ ] Use description lists for definitions
- [ ] Add headings above lists
- [ ] Test in browser

---

**Keep this handy while practicing!** 🌟
