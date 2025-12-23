# Lesson 1.2 Cheatsheet

## 📐 Six Heading Levels

```html
<h1>Biggest - Main Title (use only once!)</h1>
<h2>Major Sections</h2>
<h3>Subsections</h3>
<h4>Sub-subsections</h4>
<h5>Minor headings</h5>
<h6>Smallest headings</h6>
```

### Heading Rules
1. ✅ One `<h1>` per page
2. ✅ Don't skip levels (h1 → h2 → h3)
3. ✅ Use for structure, not size

---

## 📝 Text Content Tags

### Paragraphs
```html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

### Bold/Important
```html
<strong>Important bold text</strong>
<b>Just bold text</b>
```
💡 Use `<strong>` (recommended)

### Italic/Emphasis
```html
<em>Emphasized italic text</em>
<i>Just italic text</i>
```
💡 Use `<em>` (recommended)

### Other Formatting
```html
<u>Underlined text</u>
<mark>Highlighted text</mark>
<small>Smaller text</small>
<del>Strikethrough text</del>
```

---

## 🔄 Line Breaks & Spacing

### Line Break
```html
<br>
```
- Creates a line break
- Self-closing (no `</br>` needed)
- Use for: addresses, poems, lyrics

### Horizontal Rule
```html
<hr>
```
- Creates a horizontal dividing line
- Self-closing (no `</hr>` needed)
- Use to: separate sections

---

## 🎨 Common Patterns

### Good Heading Structure
```html
<h1>Main Title</h1>

<h2>First Section</h2>
<p>Content...</p>

<h3>Subsection</h3>
<p>Content...</p>

<h2>Second Section</h2>
<p>Content...</p>
```

### Formatted Paragraph
```html
<p>
    This is <strong>important</strong> and this is 
    <em>emphasized</em>. You can <mark>highlight</mark> 
    and <u>underline</u> too!
</p>
```

### Address Format
```html
<p>
    John Doe<br>
    123 Main Street<br>
    City, State 12345
</p>
```

### Section Divider
```html
<h2>Section One</h2>
<p>Content here...</p>

<hr>

<h2>Section Two</h2>
<p>Content here...</p>
```

---

## ✅ Do's and Don'ts

### ✅ Do This
```html
<h1>Page Title</h1>
<h2>Section</h2>
<h3>Subsection</h3>
<p>Content with <strong>important</strong> text.</p>
```

### ❌ Don't Do This
```html
<h1>Page Title</h1>
<h1>Another Title</h1>  <!-- Don't use multiple h1! -->
<h4>Section</h4>        <!-- Don't skip levels! -->
<p><h2>Wrong</h2></p>   <!-- Don't put headings in paragraphs! -->
```

---

## 💡 Quick Tips

1. **One h1** - Every page gets exactly one
2. **Order matters** - h1 → h2 → h3 (don't skip!)
3. **Paragraphs auto-space** - No need for extra `<br>` between them
4. **Use strong/em** - Better than b/i for accessibility
5. **br is for breaks** - Not for spacing between sections
6. **hr is for dividers** - Use sparingly for visual separation
7. **Combine formats** - You can nest tags: `<strong><em>text</em></strong>`

---

## 🎯 Tag Summary

| Tag | Purpose | Self-Closing? |
|-----|---------|---------------|
| `<h1>` - `<h6>` | Headings | No |
| `<p>` | Paragraph | No |
| `<strong>` | Important/Bold | No |
| `<em>` | Emphasis/Italic | No |
| `<b>` | Bold | No |
| `<i>` | Italic | No |
| `<u>` | Underline | No |
| `<mark>` | Highlight | No |
| `<small>` | Smaller text | No |
| `<del>` | Strikethrough | No |
| `<br>` | Line break | Yes |
| `<hr>` | Horizontal rule | Yes |

---

## 🔗 Quick Links

- Previous: Lesson 1.1 - What is HTML?
- Next: Lesson 1.3 - Lists
- Practice: Complete all 3 exercises
- Examples: Try all 4 example files
