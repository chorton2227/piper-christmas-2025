# Lesson 1.4 Cheatsheet

## 🔗 Link Basics

### Anchor Tag Structure
```html
<a href="destination">Link Text</a>
```

- `<a>` = Anchor tag
- `href` = Where the link goes (required!)
- `Link Text` = Clickable text
- `</a>` = Closing tag

---

## 🌐 Link Types

### External Link (Other Websites)
```html
<a href="https://www.google.com">Google</a>
```
**Use full URL with `https://`**

### Internal Link (Your Own Pages)
```html
<a href="about.html">About Page</a>
```
**Use just the filename**

### Email Link
```html
<a href="mailto:email@example.com">Send Email</a>
```

### Email with Subject
```html
<a href="mailto:email@example.com?subject=Hello">Email with Subject</a>
```

### Anchor Link (Jump to Section)
```html
<!-- The target -->
<h2 id="section1">Section 1</h2>

<!-- The link -->
<a href="#section1">Jump to Section 1</a>
```

---

## 🎯 Link Attributes

### Open in New Tab
```html
<a href="https://www.example.com" target="_blank">Opens in New Tab</a>
```

### Add Tooltip
```html
<a href="page.html" title="Tooltip text">Hover to see tooltip</a>
```

### Multiple Attributes
```html
<a href="https://www.example.com" target="_blank" title="External site">
    Link Text
</a>
```

---

## 📁 File Path Examples

### Same Folder
```html
<a href="page.html">Page in same folder</a>
```

### Subfolder
```html
<a href="pages/about.html">Page in subfolder</a>
```

### Parent Folder
```html
<a href="../index.html">Page in parent folder</a>
```

---

## 🎨 Common Patterns

### Navigation Menu
```html
<nav>
    <a href="index.html">Home</a> | 
    <a href="about.html">About</a> | 
    <a href="contact.html">Contact</a>
</nav>
```

### Navigation List
```html
<nav>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</nav>
```

### Table of Contents
```html
<h2>Table of Contents</h2>
<ul>
    <li><a href="#section1">Section 1</a></li>
    <li><a href="#section2">Section 2</a></li>
    <li><a href="#section3">Section 3</a></li>
</ul>
```

### Social Links
```html
<h3>Follow Us</h3>
<a href="https://twitter.com/user" target="_blank">Twitter</a>
<a href="https://instagram.com/user" target="_blank">Instagram</a>
```

### Back to Top
```html
<a href="#">Back to Top</a>
```

---

## ✅ Best Practices

### Good Link Text ✅
```html
<a href="products.html">View our products</a>
<a href="download.pdf">Download the PDF guide</a>
```

### Bad Link Text ❌
```html
<a href="products.html">Click here</a>
<a href="download.pdf">Here</a>
```

### External Links ✅
```html
<!-- Opens in new tab, has tooltip -->
<a href="https://www.example.com" target="_blank" title="External site">
    Example Site
</a>
```

---

## 🐛 Common Mistakes

### Missing https://
```html
<!-- ❌ Won't work -->
<a href="www.google.com">Google</a>

<!-- ✅ Works -->
<a href="https://www.google.com">Google</a>
```

### Wrong File Extension
```html
<!-- ❌ Wrong -->
<a href="page.txt">Page</a>

<!-- ✅ Right -->
<a href="page.html">Page</a>
```

### Forgetting #
```html
<!-- ❌ Won't jump -->
<a href="section1">Jump</a>

<!-- ✅ Jumps to section -->
<a href="#section1">Jump</a>
```

### No Closing Tag
```html
<!-- ❌ Wrong -->
<a href="page.html">Link

<!-- ✅ Right -->
<a href="page.html">Link</a>
```

---

## 💡 Quick Tips

1. **Always include href** - Links need a destination
2. **Test all links** - Click them to make sure they work
3. **Use descriptive text** - Tell users where the link goes
4. **External = new tab** - Use `target="_blank"` for external sites
5. **Anchor links need IDs** - Target element must have matching ID
6. **Full URLs for external** - Include `https://`
7. **Relative paths for internal** - Just use filename
8. **Add tooltips** - Use `title` for extra information

---

## 🎯 When to Use What

| Situation | Use This |
|-----------|----------|
| Link to Google | External link with `https://` |
| Link to your About page | Internal link `about.html` |
| Link to email | `mailto:email@example.com` |
| Jump to section | Anchor link `#section-id` |
| Open in new tab | Add `target="_blank"` |
| Add hover text | Add `title="text"` |
| Back to top | `href="#"` or `href="#top"` |

---

## 📚 Attributes Reference

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `href` | Destination (required) | `href="page.html"` |
| `target` | Where to open | `target="_blank"` |
| `title` | Tooltip text | `title="Info"` |

---

## 🔗 Quick Links

- Previous: Lesson 1.3 - Lists
- Next: Lesson 1.5 - Images
- Practice: Complete all 3 exercises
- Examples: Try all example files
