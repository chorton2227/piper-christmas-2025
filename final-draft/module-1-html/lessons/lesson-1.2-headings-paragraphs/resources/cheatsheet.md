# Lesson 1.2 Cheatsheet: Headings & Paragraphs

Quick reference for headings, paragraphs, and text formatting in HTML.

---

## 📐 Heading Tags

### The Six Levels
```html
<h1>Main Title - Use Only Once Per Page!</h1>
<h2>Major Section Heading</h2>
<h3>Subsection Heading</h3>
<h4>Sub-subsection Heading</h4>
<h5>Smaller Heading</h5>
<h6>Smallest Heading</h6>
```

### Heading Hierarchy Rules
| Rule | Description | Example |
|------|-------------|---------|
| **One H1 Only** | Each page should have exactly one `<h1>` | `<h1>My Page Title</h1>` |
| **Don't Skip Levels** | Go in order: h1 → h2 → h3 | ✅ h1 → h2 → h3 <br> ❌ h1 → h4 |
| **Use for Structure** | Choose heading level based on content hierarchy, not size | Use h2 for sections, not because you like the size |

---

## 📝 Paragraph and Content Tags

### Basic Text
```html
<p>This is a paragraph. Use for regular text content.</p>

<br>  <!-- Line break (self-closing) -->

<hr>  <!-- Horizontal rule/divider (self-closing) -->
```

---

## ✏️ Text Formatting Tags

### Bold Text
| Tag | Use | Example |
|-----|-----|---------|
| `<strong>` | Important text (recommended) | `<strong>Warning!</strong>` |
| `<b>` | Bold text (visual only) | `<b>Bold text</b>` |

### Italic Text
| Tag | Use | Example |
|-----|-----|---------|
| `<em>` | Emphasized text (recommended) | `<em>Really important</em>` |
| `<i>` | Italic text (visual only) | `<i>Italic text</i>` |

### Other Formatting
```html
<u>Underlined text</u>
<mark>Highlighted text</mark>
<small>Smaller text</small>
<del>Deleted/strikethrough text</del>
```

---

## 🎨 Complete Examples

### Good Heading Structure
```html
<h1>My Website</h1>

<h2>About Me</h2>
<p>I'm a web developer...</p>

<h2>My Projects</h2>
<p>Here are some things I've built...</p>

<h3>Project 1: My Blog</h3>
<p>This is a blog about...</p>

<h3>Project 2: My Game</h3>
<p>I created a game that...</p>
```

### Formatted Paragraph
```html
<p>
    Today I learned about <strong>HTML formatting</strong>. 
    My favorite book is <em>Harry Potter</em>, and I 
    <mark>highly recommend</mark> it!
</p>
```

### Using Line Breaks
```html
<p>
    John Smith<br>
    123 Main Street<br>
    Anytown, USA 12345
</p>

<p>
    "Roses are red,<br>
    Violets are blue,<br>
    HTML is awesome,<br>
    And so are you!"
</p>
```

### Using Horizontal Rules
```html
<h2>Section One</h2>
<p>Content here...</p>

<hr>

<h2>Section Two</h2>
<p>More content...</p>
```

---

## 🚫 Common Mistakes

| Wrong | Right | Why |
|-------|-------|-----|
| `<h1>Title</h1>` <br> `<h1>Another</h1>` | `<h1>Title</h1>` <br> `<h2>Section</h2>` | Only one h1 per page |
| `<h1>Title</h1>` <br> `<h4>Section</h4>` | `<h1>Title</h1>` <br> `<h2>Section</h2>` | Don't skip heading levels |
| `<p>Line 1<p>Line 2` | `<p>Line 1<br>Line 2</p>` | Use `<br>` for line breaks within paragraphs |
| `<br></br>` | `<br>` | `<br>` is self-closing |
| `<hr></hr>` | `<hr>` | `<hr>` is self-closing |
| `<strong><strong>Text</strong></strong>` | `<strong>Text</strong>` | Don't nest the same tag multiple times |

---

## 🎯 Quick Tips

1. **Headings are for structure, not size** - Don't pick a heading because of how it looks!
2. **One h1 per page** - It's your main title
3. **Go in order** - h1 → h2 → h3 → h4
4. **Use semantic tags** - Prefer `<strong>` and `<em>` over `<b>` and `<i>`
5. **Don't over-format** - Too much formatting is distracting
6. **Each idea = new paragraph** - Break up your text for readability
7. **Use `<br>` sparingly** - Usually paragraphs are better than line breaks
8. **Self-closing tags** - `<br>` and `<hr>` don't need closing tags

---

## 📋 Template for Blog Post

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Blog: My Topic</title>
</head>
<body>
    <h1>Main Blog Post Title</h1>
    
    <p><em>By: Your Name | Date: Today's Date</em></p>
    
    <h2>Introduction</h2>
    <p>Opening paragraph...</p>
    <p>More introduction...</p>
    
    <hr>
    
    <h2>Main Section</h2>
    <p>Content with <strong>important words</strong> and <em>emphasis</em>.</p>
    
    <h3>Subsection</h3>
    <p>More detailed information...</p>
    
    <h3>Another Subsection</h3>
    <p>Additional details...</p>
    
    <hr>
    
    <h2>Conclusion</h2>
    <p>Wrap up your thoughts...</p>
    <p>Final paragraph with <mark>key takeaway</mark>.</p>
</body>
</html>
```

---

## ✅ Success Checklist

When writing HTML with headings and paragraphs:
- [ ] Use exactly one `<h1>` for the main title
- [ ] Use `<h2>` for major sections
- [ ] Use `<h3>` for subsections (when needed)
- [ ] Don't skip heading levels
- [ ] Put text content in `<p>` tags
- [ ] Use `<strong>` for important text
- [ ] Use `<em>` for emphasis
- [ ] Use `<br>` only when appropriate (addresses, poems)
- [ ] Use `<hr>` to separate major sections
- [ ] Keep formatting purposeful, not random

---

## 💡 Remember

**Headings create structure and meaning** - They help:
- Screen readers navigate your page
- Search engines understand your content
- Visitors quickly scan and find information

Always use headings semantically (for meaning), not for appearance!

---

**Keep this cheatsheet handy while you practice!** 🌟
