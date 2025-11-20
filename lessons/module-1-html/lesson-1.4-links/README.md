# Lesson 1.4: Links

## 🎯 What You'll Learn
- How to create links to other websites
- How to link between your own pages
- Different types of links (external, internal, email)
- Link attributes (target, title)
- Best practices for links

---

## 🔗 What Are Links?

Links (also called **hyperlinks**) are what make the web "web-like"! They connect pages together and let users navigate between different websites and pages.

### The Anchor Tag

Links use the `<a>` tag (short for **anchor**):

```html
<a href="https://www.google.com">Go to Google</a>
```

**Breaking it down:**
- `<a>` = The anchor tag (creates a link)
- `href` = The destination (where the link goes)
- `Go to Google` = The clickable text
- `</a>` = Closing tag

---

## 🌐 External Links

External links go to other websites (outside your site).

### Basic External Link

```html
<a href="https://www.google.com">Google</a>
```

This creates a clickable link that says "Google" and goes to google.com when clicked.

### Important: Use Full URLs

For external links, always include the full URL with `https://`:

```html
<!-- ✅ Right -->
<a href="https://www.youtube.com">YouTube</a>

<!-- ❌ Wrong - won't work! -->
<a href="www.youtube.com">YouTube</a>
```

### Opening in a New Tab

Use `target="_blank"` to open links in a new tab:

```html
<a href="https://www.wikipedia.org" target="_blank">Wikipedia</a>
```

**When to use `target="_blank"`:**
- Links to external websites
- Downloads
- When you don't want users to leave your site

---

## 📄 Internal Links

Internal links connect pages within your own website.

### Linking to Another Page

If you have multiple HTML files in the same folder:

```html
<a href="about.html">About Me</a>
<a href="contact.html">Contact</a>
<a href="projects.html">My Projects</a>
```

### Example: Simple Navigation

```html
<h1>My Website</h1>
<nav>
    <a href="index.html">Home</a> | 
    <a href="about.html">About</a> | 
    <a href="contact.html">Contact</a>
</nav>
```

### Linking to Files in Folders

If your files are organized in folders:

```html
<!-- Link to file in a subfolder -->
<a href="pages/about.html">About</a>

<!-- Link to file in parent folder -->
<a href="../index.html">Home</a>
```

---

## 🔝 Anchor Links (Jump to Section)

You can create links that jump to different parts of the same page!

### Step 1: Add an ID to the Target

```html
<h2 id="section1">Section 1</h2>
<p>Content for section 1...</p>

<h2 id="section2">Section 2</h2>
<p>Content for section 2...</p>
```

### Step 2: Create Links to Those IDs

```html
<nav>
    <a href="#section1">Jump to Section 1</a>
    <a href="#section2">Jump to Section 2</a>
</nav>
```

**Note:** Use `#` before the ID name!

### Back to Top Link

```html
<h1 id="top">My Page</h1>

<!-- Content here -->

<a href="#top">Back to Top</a>
```

---

## 📧 Email Links

Create links that open the user's email program:

```html
<a href="mailto:hello@example.com">Send us an email</a>
```

### Email with Subject Line

```html
<a href="mailto:hello@example.com?subject=Hello!">Email us</a>
```

---

## 🎨 Link Attributes

### The `title` Attribute

Add a tooltip that shows when you hover over a link:

```html
<a href="https://www.google.com" title="Search the web">Google</a>
```

When you hover over the link, you'll see "Search the web" appear!

### Combining Attributes

You can use multiple attributes together:

```html
<a href="https://www.youtube.com" target="_blank" title="Watch videos">
    YouTube
</a>
```

---

## 🖼️ Links Around Other Elements

You can make images, buttons, or whole sections clickable!

### Link Around Text with Formatting

```html
<a href="page.html">
    <strong>Click this bold text!</strong>
</a>
```

### Link Around Multiple Elements

```html
<a href="products.html">
    <h3>Our Products</h3>
    <p>Click here to see all our amazing products!</p>
</a>
```

**Note:** You'll learn about linking images in the next lesson!

---

## ✅ Link Best Practices

### 1. Use Descriptive Text

```html
<!-- ✅ Good - tells you where it goes -->
<a href="about.html">Read more about our company</a>

<!-- ❌ Bad - not descriptive -->
<a href="about.html">Click here</a>
```

### 2. Make Links Obvious

Users should know something is a link. Links are usually:
- Underlined
- A different color (often blue)
- Change when you hover over them

### 3. Test Your Links

Always click your links to make sure they work!

### 4. Use External Links Carefully

```html
<!-- ✅ Good - opens in new tab, doesn't lose your page -->
<a href="https://example.com" target="_blank">External Site</a>

<!-- ⚠️ Be careful - user leaves your site -->
<a href="https://example.com">External Site</a>
```

---

## 🎯 Common Link Patterns

### Navigation Menu

```html
<nav>
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="services.html">Services</a>
    <a href="contact.html">Contact</a>
</nav>
```

### Social Media Links

```html
<h3>Follow Us</h3>
<a href="https://twitter.com/username" target="_blank">Twitter</a>
<a href="https://instagram.com/username" target="_blank">Instagram</a>
<a href="https://facebook.com/username" target="_blank">Facebook</a>
```

### Table of Contents

```html
<h2>Table of Contents</h2>
<ul>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#chapter1">Chapter 1</a></li>
    <li><a href="#chapter2">Chapter 2</a></li>
    <li><a href="#conclusion">Conclusion</a></li>
</ul>
```

### Contact Information

```html
<h3>Get in Touch</h3>
<p>Email: <a href="mailto:hello@example.com">hello@example.com</a></p>
<p>Website: <a href="https://www.example.com" target="_blank">www.example.com</a></p>
```

---

## 💡 Key Concepts to Remember

1. **`<a>`** = Anchor tag for links
2. **`href`** = Where the link goes (required!)
3. **External links** need full URL with `https://`
4. **Internal links** use file names: `page.html`
5. **`target="_blank"`** = Open in new tab
6. **`#id`** = Jump to section on same page
7. **`mailto:`** = Email links
8. **`title`** = Hover tooltip
9. Use **descriptive link text**
10. Always **test your links**!

---

## 🎮 Practice Time!

Ready to create links? Head to the exercises!

---

## 🚀 What's Next?

In the next lesson, you'll learn about images - how to add pictures to your web pages!

---

## 📚 Quick Reference

### External Link
```html
<a href="https://www.example.com">Link Text</a>
```

### Internal Link
```html
<a href="page.html">Link Text</a>
```

### New Tab
```html
<a href="https://www.example.com" target="_blank">Link Text</a>
```

### Email Link
```html
<a href="mailto:email@example.com">Link Text</a>
```

### Jump to Section
```html
<a href="#section-id">Link Text</a>
```

### With Tooltip
```html
<a href="page.html" title="Tooltip text">Link Text</a>
```
