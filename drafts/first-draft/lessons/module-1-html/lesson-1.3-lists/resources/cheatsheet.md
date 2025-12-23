# Lesson 1.3 Cheatsheet

## 📋 List Types

### Unordered List (Bullets)
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```
**Use when:** Order doesn't matter

### Ordered List (Numbers)
```html
<ol>
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
</ol>
```
**Use when:** Order is important (steps, rankings)

### Description List (Terms & Definitions)
```html
<dl>
    <dt>Term</dt>
    <dd>Definition of the term</dd>
    
    <dt>Another Term</dt>
    <dd>Another definition</dd>
</dl>
```
**Use when:** Defining terms, FAQs, glossaries

---

## 🪺 Nested Lists

### Unordered Inside Unordered
```html
<ul>
    <li>Parent Item
        <ul>
            <li>Child Item 1</li>
            <li>Child Item 2</li>
        </ul>
    </li>
</ul>
```

### Ordered Inside Ordered
```html
<ol>
    <li>Step 1
        <ol>
            <li>Sub-step A</li>
            <li>Sub-step B</li>
        </ol>
    </li>
</ol>
```

### Mixed Nesting
```html
<ol>
    <li>Numbered Item
        <ul>
            <li>Bullet point</li>
            <li>Another bullet</li>
        </ul>
    </li>
</ol>
```

---

## 🎯 Tag Reference

| Tag | Purpose | Container? |
|-----|---------|------------|
| `<ul>` | Unordered list | Yes |
| `<ol>` | Ordered list | Yes |
| `<li>` | List item | No (goes inside ul/ol) |
| `<dl>` | Description list | Yes |
| `<dt>` | Description term | No (goes inside dl) |
| `<dd>` | Description definition | No (goes inside dl) |

---

## ✅ Best Practices

### Do This ✅
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
```

### Don't Do This ❌
```html
<ul>
    Item 1
    Item 2
</ul>
<!-- Missing <li> tags! -->
```

---

### Do This ✅
```html
<ul>
    <li>Parent
        <ul>
            <li>Child</li>
        </ul>
    </li>
</ul>
```

### Don't Do This ❌
```html
<ul>
    <li>Parent</li>
    <ul>
        <li>Child</li>
    </ul>
</ul>
<!-- Nested ul should be INSIDE the li! -->
```

---

## 🎨 Common Patterns

### Feature List
```html
<h2>Features</h2>
<ul>
    <li>Fast and reliable</li>
    <li>Easy to use</li>
    <li>Great support</li>
</ul>
```

### Instructions
```html
<h2>Instructions</h2>
<ol>
    <li>First, do this</li>
    <li>Then, do that</li>
    <li>Finally, finish</li>
</ol>
```

### Categories with Items
```html
<h2>Categories</h2>
<ul>
    <li>Category 1
        <ul>
            <li>Item A</li>
            <li>Item B</li>
        </ul>
    </li>
    <li>Category 2
        <ul>
            <li>Item C</li>
            <li>Item D</li>
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

1. **Always use `<li>`** - Every list item needs the tag
2. **Nest inside `<li>`** - Put nested lists inside a list item
3. **Close all tags** - Don't forget `</ul>`, `</ol>`, `</li>`
4. **Indent your code** - Makes nesting much clearer
5. **Use right list type** - ul for no order, ol for order
6. **Format inside lists** - You can use `<strong>`, `<em>`, etc. in list items
7. **Headings before lists** - Always introduce your lists with headings

---

## 🔍 When to Use Which List

| Situation | Use This |
|-----------|----------|
| Shopping list | `<ul>` |
| Recipe steps | `<ol>` |
| Top 10 favorites | `<ol>` |
| Features list | `<ul>` |
| Navigation menu | `<ul>` |
| Glossary/definitions | `<dl>` |
| FAQs | `<dl>` |
| Organized categories | Nested `<ul>` |
| Multi-step process | Nested `<ol>` |

---

## 🐛 Common Mistakes

### Mistake 1: Forgetting `<li>`
```html
<!-- ❌ Wrong -->
<ul>
    Item 1
    Item 2
</ul>

<!-- ✅ Right -->
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
```

### Mistake 2: Wrong Nesting
```html
<!-- ❌ Wrong -->
<ul>
    <li>Item</li>
    <ul>
        <li>Nested</li>
    </ul>
</ul>

<!-- ✅ Right -->
<ul>
    <li>Item
        <ul>
            <li>Nested</li>
        </ul>
    </li>
</ul>
```

### Mistake 3: Not Closing Tags
```html
<!-- ❌ Wrong -->
<ul>
    <li>Item 1
    <li>Item 2
</ul>

<!-- ✅ Right -->
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
```

---

## 🔗 Quick Links

- Previous: Lesson 1.2 - Headings and Paragraphs
- Next: Lesson 1.4 - Links
- Practice: Complete all 3 exercises
- Examples: Try all 5 example files
