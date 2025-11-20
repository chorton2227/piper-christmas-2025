# Lesson 1.2: Headings and Paragraphs

## 🎯 What You'll Learn
- How to use all six heading levels (h1-h6)
- When to use each heading level
- How to write paragraphs
- Text formatting basics (bold, italic, etc.)
- Line breaks and spacing

---

## 📐 The Six Heading Levels

HTML has **six levels** of headings, from biggest to smallest:

### Heading Hierarchy

```html
<h1>Heading Level 1 - Biggest!</h1>
<h2>Heading Level 2</h2>
<h3>Heading Level 3</h3>
<h4>Heading Level 4</h4>
<h5>Heading Level 5</h5>
<h6>Heading Level 6 - Smallest!</h6>
```

**Think of it like an outline:**
- `<h1>` = Book title (only one per page!)
- `<h2>` = Chapter titles
- `<h3>` = Section titles
- `<h4>` = Sub-sections
- `<h5>` = Minor headings
- `<h6>` = Tiny headings (rarely used)

---

## 📚 Heading Best Practices

### Rule 1: One H1 Per Page
Every page should have exactly **one** `<h1>` tag - it's the main title!

```html
<!-- ✅ Good -->
<h1>My Portfolio</h1>
<h2>About Me</h2>
<h2>My Projects</h2>

<!-- ❌ Bad -->
<h1>My Portfolio</h1>
<h1>About Me</h1>  <!-- Don't use multiple h1 tags! -->
```

### Rule 2: Don't Skip Levels
Go in order: h1 → h2 → h3, not h1 → h4

```html
<!-- ✅ Good -->
<h1>Main Title</h1>
<h2>Section</h2>
<h3>Subsection</h3>

<!-- ❌ Bad -->
<h1>Main Title</h1>
<h4>Wait, where's h2 and h3?</h4>
```

### Rule 3: Use Headings for Structure, Not Size
Don't pick a heading just because you like the size. Use CSS for styling (we'll learn that later!)

```html
<!-- ❌ Bad - using h6 just because you want small text -->
<h6>This is just small text, not really a heading</h6>

<!-- ✅ Good - use the right heading level -->
<h3>This is a proper subsection</h3>
```

---

## 📝 Paragraphs

The `<p>` tag is for regular text content.

### Basic Paragraphs

```html
<p>This is a paragraph. It can be as long or short as you want.</p>

<p>This is another paragraph. Paragraphs are separated from each other automatically with space.</p>
```

### Multiple Paragraphs

```html
<p>First paragraph about something interesting.</p>
<p>Second paragraph with more details.</p>
<p>Third paragraph to wrap things up.</p>
```

Each `<p>` tag automatically adds space before and after, so your paragraphs are nicely separated!

---

## ✏️ Text Formatting

Make your text stand out with these formatting tags:

### Bold Text

```html
<strong>This text is bold and important!</strong>
<b>This text is also bold.</b>
```

**When to use:**
- `<strong>` = Important text (recommended)
- `<b>` = Bold text without extra importance

**Example:**
```html
<p>Warning: <strong>Do not touch the hot stove!</strong></p>
```

### Italic Text

```html
<em>This text is emphasized (italic).</em>
<i>This text is also italic.</i>
```

**When to use:**
- `<em>` = Emphasized text (recommended)
- `<i>` = Italic text without extra emphasis

**Example:**
```html
<p>My favorite book is <em>Harry Potter</em>.</p>
```

### Other Formatting

```html
<u>Underlined text</u>
<mark>Highlighted text</mark>
<small>Smaller text</small>
<del>Deleted/strikethrough text</del>
```

### Combining Formats

You can combine formatting tags!

```html
<p>This is <strong><em>bold AND italic</em></strong>!</p>
<p>You can <mark><strong>highlight and bold</strong></mark> at the same time!</p>
```

---

## 🔄 Line Breaks and Spacing

### Line Breaks

Use `<br>` to create a line break without starting a new paragraph:

```html
<p>
    First line<br>
    Second line<br>
    Third line
</p>
```

**Note:** `<br>` is a **self-closing tag** - it doesn't need `</br>`!

**When to use `<br>`:**
- Addresses
- Poems
- Song lyrics
- When you need a line break but not a full paragraph break

### Example: Addresses

```html
<p>
    John Smith<br>
    123 Main Street<br>
    Anytown, USA 12345
</p>
```

### Horizontal Rules

Use `<hr>` to create a horizontal line (divider):

```html
<p>Section one content here.</p>
<hr>
<p>Section two content here.</p>
```

**Note:** `<hr>` is also self-closing!

---

## 🎨 Putting It All Together

Here's a complete page using everything you've learned:

```html
<!DOCTYPE html>
<html>
<head>
    <title>All About Me</title>
</head>
<body>
    <h1>Welcome to My Page!</h1>
    
    <h2>About Me</h2>
    <p>Hi! My name is <strong>Piper</strong> and I'm learning HTML.</p>
    <p>I love <em>coding</em>, playing games, and hanging out with friends.</p>
    
    <hr>
    
    <h2>My Favorite Quote</h2>
    <p>
        <em>"The only way to do great work<br>
        is to love what you do."</em><br>
        - Steve Jobs
    </p>
    
    <hr>
    
    <h2>Fun Facts</h2>
    <p>Here are some <strong>fun facts</strong> about me:</p>
    <p><mark>I can whistle and hum at the same time!</mark></p>
    <p>I once read <em>5 books in one week</em>.</p>
    
    <h2>Contact</h2>
    <p>
        Email: piper@example.com<br>
        Location: My House<br>
        Website: This one!
    </p>
</body>
</html>
```

---

## 💡 Key Concepts to Remember

1. **Six heading levels**: h1 (biggest) through h6 (smallest)
2. **One h1 per page** - it's your main title
3. **Don't skip heading levels** - go in order
4. **Paragraphs** (`<p>`) for regular text content
5. **`<strong>`** for important/bold text
6. **`<em>`** for emphasized/italic text
7. **`<br>`** for line breaks (self-closing)
8. **`<hr>`** for horizontal dividers (self-closing)

---

## 🎯 Typography Tips

### Good Content Structure

```html
<h1>Main Page Title</h1>

<h2>First Major Section</h2>
<p>Content for this section...</p>

<h3>Subsection</h3>
<p>More detailed content...</p>

<h2>Second Major Section</h2>
<p>Content for this section...</p>
```

This creates a clear hierarchy that's easy to read and navigate!

---

## 🎮 Practice Time!

Ready to practice headings and paragraphs? Head to the exercises!

---

## 🚀 What's Next?

In the next lesson, you'll learn about lists - both ordered (numbered) and unordered (bullet points)!

---

## 📚 Quick Reference

### Heading Tags
```html
<h1>Biggest</h1>
<h2>Second</h2>
<h3>Third</h3>
<h4>Fourth</h4>
<h5>Fifth</h5>
<h6>Smallest</h6>
```

### Text Tags
```html
<p>Paragraph</p>
<strong>Bold/Important</strong>
<em>Italic/Emphasized</em>
<u>Underlined</u>
<mark>Highlighted</mark>
<small>Smaller</small>
<del>Strikethrough</del>
```

### Special Tags
```html
<br>  <!-- Line break -->
<hr>  <!-- Horizontal rule -->
```
