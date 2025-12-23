# HTML Cheatsheet — Lesson 1.1

Quick reference for HTML basics from Lesson 1.1

---

## 📄 Basic HTML Document Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Page Title</title>
</head>
<body>
    <!-- Your content here -->
</body>
</html>
```

**Every HTML page needs:**
1. `<!DOCTYPE html>` - Declares HTML5
2. `<html lang="en">` - Root element with language
3. `<head>` - Metadata (info about the page)
4. `<body>` - Visible content

---

## 🏷️ Essential Tags

### Document Structure
| Tag | Purpose | Example |
|-----|---------|---------|
| `<!DOCTYPE html>` | Declares HTML5 | Always first line |
| `<html>` | Root element | Wraps entire document |
| `<head>` | Metadata section | Contains title, charset, etc. |
| `<meta charset="UTF-8">` | Character encoding | Supports all languages & emoji |
| `<title>` | Page title | Shows in browser tab |
| `<body>` | Visible content | Everything users see |

### Content Tags
| Tag | Purpose | Example |
|-----|---------|---------|
| `<h1>` to `<h6>` | Headings | `<h1>Main Title</h1>` |
| `<p>` | Paragraph | `<p>Text here</p>` |
| `<a>` | Link | `<a href="url">Click me</a>` |
| `<img>` | Image | `<img src="file.jpg" alt="Description">` |
| `<br>` | Line break | `Line 1<br>Line 2` |
| `<!-- -->` | Comment | `<!-- Note to self -->` |

---

## 🔗 Links (Anchor Tags)

### Basic Link
```html
<a href="https://www.example.com">Visit Example</a>
```

### Link to Another Page (Same Site)
```html
<a href="about.html">About Page</a>
```

### Email Link
```html
<a href="mailto:email@example.com">Send Email</a>
```

**Remember:** Always use descriptive link text, not "click here"!

---

## 🖼️ Images

### Basic Image
```html
<img src="photo.jpg" alt="A sunset over the ocean">
```

### Image with Size
```html
<img src="photo.jpg" alt="Description" width="400" height="300">
```

### Placeholder Image (for testing)
```html
<img src="https://placehold.co/600x400" alt="Placeholder image">
```

**Always include `alt` text!** It describes the image for:
- People using screen readers
- When the image doesn't load
- Search engines

---

## 📝 Headings

There are 6 levels of headings:

```html
<h1>Biggest - Main Title (use only ONE per page)</h1>
<h2>Second Level - Major Section</h2>
<h3>Third Level - Sub-section</h3>
<h4>Fourth Level</h4>
<h5>Fifth Level</h5>
<h6>Smallest Heading</h6>
```

**Best Practices:**
- Use only ONE `<h1>` per page
- Don't skip levels (don't go from h1 to h3)
- Use headings for structure, not just to make text big

---

## ✅ Attributes

Attributes provide extra information about elements.

**Syntax:**
```html
<tagname attribute="value">Content</tagname>
```

**Common Attributes:**
| Attribute | Used With | Purpose | Example |
|-----------|-----------|---------|---------|
| `href` | `<a>` | Link destination | `href="page.html"` |
| `src` | `<img>` | Image source | `src="photo.jpg"` |
| `alt` | `<img>` | Alternative text | `alt="Description"` |
| `lang` | `<html>` | Language | `lang="en"` |
| `charset` | `<meta>` | Character set | `charset="UTF-8"` |
| `width` | `<img>` | Image width | `width="400"` |
| `height` | `<img>` | Image height | `height="300"` |

---

## 💡 Quick Tips

### Opening HTML Files
- **Method 1:** Double-click the `.html` file
- **Method 2:** In browser, press `Ctrl + O` and select file

### Refreshing Changes
- Save your HTML file (`Ctrl + S`)
- Refresh browser (`F5` or `Ctrl + R`)

### Comments (Invisible Notes)
```html
<!-- This is a comment - won't show on the page -->
<p>This will show</p>
```

### Proper Indentation
```html
<html>
  <head>
    <title>Indented</title>
  </head>
  <body>
    <h1>Clear Structure</h1>
  </body>
</html>
```

---

## ♿ Accessibility Reminders

- ✅ Always include `lang="en"` on `<html>`
- ✅ Always include `alt` text on images
- ✅ Use semantic tags (headings, paragraphs)
- ✅ Write descriptive link text
- ✅ Use only one `<h1>` per page
- ✅ Don't skip heading levels

---

## 🐛 Common Mistakes to Avoid

| ❌ Wrong | ✅ Right | Why |
|---------|----------|-----|
| `<p>Text` | `<p>Text</p>` | Need closing tag |
| `<img src="photo.jpg">` | `<img src="photo.jpg" alt="Description">` | Always include alt |
| `<a href="">click here</a>` | `<a href="">Download the guide</a>` | Descriptive link text |
| Missing `<!DOCTYPE html>` | Include `<!DOCTYPE html>` | Tells browser it's HTML5 |
| No `<title>` | Include `<title>` | Important for tabs and SEO |

---

## 📖 Tag Anatomy

```html
<tagname attribute="value">Content</tagname>
   ↑         ↑                ↑        ↑
Opening  Attribute        Content   Closing
  Tag                                 Tag
```

**Self-Closing Tags** (no closing tag needed):
- `<img>` - Image
- `<br>` - Line break
- `<hr>` - Horizontal rule
- `<meta>` - Metadata

---

## 🎯 Quick Reference Template

Copy this to start any HTML page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Page Title</title>
</head>
<body>
    <h1>Main Heading</h1>
    <p>Your content here...</p>
</body>
</html>
```

---

## 🔍 Need More Help?

- **Main Lesson:** See README.md for full explanations
- **Practice:** Complete exercises 1-3 in the practice folder
- **Examples:** Check the examples folder for working code
- **MDN Web Docs:** https://developer.mozilla.org/en-US/docs/Web/HTML
