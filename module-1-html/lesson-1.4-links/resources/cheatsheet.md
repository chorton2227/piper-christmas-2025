# Lesson 1.4: Links - Quick Reference Cheatsheet

## 🔗 Link Basics

| Element | Purpose | Example |
|---------|---------|---------|
| `<a>` | Anchor tag - creates links | `<a href="...">Text</a>` |
| `href` | Where the link goes | `href="https://google.com"` |
| Link text | What users click | Between `<a>` and `</a>` |

---

## 🌐 External Links

### Basic External Link
```html
<a href="https://www.example.com">Website Name</a>
```

### External Link Opening in New Tab
```html
<a href="https://www.example.com" target="_blank">Website</a>
```

### Rules for External Links
- ✅ Always start with `https://` or `http://`
- ✅ Include the full domain (www.example.com)
- ✅ Use `target="_blank"` to open in new tab
- ✅ Tell users when links open in new tabs

**Good Examples:**
```html
<a href="https://www.youtube.com" target="_blank">YouTube (opens in new tab)</a>
<a href="https://www.wikipedia.org" target="_blank">Wikipedia</a>
```

**Bad Examples:**
```html
<!-- ❌ Missing https:// -->
<a href="www.youtube.com">YouTube</a>

<!-- ❌ Missing protocol -->
<a href="youtube.com">YouTube</a>

<!-- ❌ Doesn't tell user about new tab -->
<a href="https://example.com" target="_blank">Link</a>
```

---

## 📄 Internal Links (Same Website)

### Linking to Pages in Same Folder
```html
<a href="about.html">About Page</a>
<a href="contact.html">Contact</a>
<a href="index.html">Home</a>
```

### Linking to Pages in Subfolders
```html
<!-- File in subfolder -->
<a href="pages/about.html">About</a>
<a href="images/photo.html">Photo Page</a>

<!-- File in parent folder -->
<a href="../index.html">Home</a>

<!-- File in different subfolder -->
<a href="../projects/project1.html">Project 1</a>
```

### Path Reference Table

| Path | Meaning |
|------|---------|
| `file.html` | Same folder |
| `folder/file.html` | In subfolder |
| `../file.html` | One folder up |
| `../../file.html` | Two folders up |

**Navigation Menu Example:**
```html
<nav>
    <a href="index.html">Home</a> | 
    <a href="about.html">About</a> | 
    <a href="projects.html">Projects</a> | 
    <a href="contact.html">Contact</a>
</nav>
```

---

## 🔝 Anchor Links (Jump to Section)

### Step 1: Add ID to Target Section
```html
<h2 id="introduction">Introduction</h2>
<p>Content here...</p>

<h2 id="main-content">Main Content</h2>
<p>More content...</p>
```

### Step 2: Link to the ID
```html
<a href="#introduction">Jump to Introduction</a>
<a href="#main-content">Jump to Main Content</a>
```

### Table of Contents Example
```html
<h1 id="top">My Article</h1>

<nav>
    <h2>Table of Contents</h2>
    <ul>
        <li><a href="#chapter1">Chapter 1</a></li>
        <li><a href="#chapter2">Chapter 2</a></li>
        <li><a href="#chapter3">Chapter 3</a></li>
    </ul>
</nav>

<h2 id="chapter1">Chapter 1</h2>
<p>Content...</p>
<p><a href="#top">Back to Top</a></p>

<h2 id="chapter2">Chapter 2</h2>
<p>Content...</p>
<p><a href="#top">Back to Top</a></p>
```

**Anchor Link Rules:**
- ✅ Use `#` before the ID in href
- ✅ ID must match exactly (case-sensitive)
- ✅ IDs cannot have spaces (use hyphens)
- ✅ Each ID must be unique on the page

---

## 📧 Email & Phone Links

### Email Links
```html
<!-- Basic email link -->
<a href="mailto:name@example.com">Email Us</a>

<!-- With subject line -->
<a href="mailto:support@example.com?subject=Help Request">Get Help</a>

<!-- With subject and body -->
<a href="mailto:hello@example.com?subject=Hello&body=I wanted to say...">
    Send Feedback
</a>
```

### Phone Links
```html
<a href="tel:+15555551234">Call Us: (555) 555-1234</a>
<a href="tel:+18005551234">1-800-555-1234</a>
```

---

## 🎨 Link Attributes

### Common Attributes

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `href` | Destination URL (required) | `href="page.html"` |
| `target` | Where to open link | `target="_blank"` |
| `title` | Tooltip text on hover | `title="Click to learn more"` |

### Target Values

| Value | Effect |
|-------|--------|
| `_self` | Opens in same tab (default) |
| `_blank` | Opens in new tab |

### Examples with Attributes
```html
<!-- Link with tooltip -->
<a href="page.html" title="Learn more about our services">Services</a>

<!-- External link with new tab and tooltip -->
<a href="https://example.com" 
   target="_blank" 
   title="Visit our partner site">
    Partner Site
</a>

<!-- Multiple attributes -->
<a href="https://youtube.com" 
   target="_blank" 
   title="Watch tutorials on YouTube">
    YouTube Tutorials
</a>
```

---

## ✍️ Writing Good Link Text

### Good vs Bad Link Text

| ❌ Bad | ✅ Good |
|--------|---------|
| Click here | Read our HTML tutorial |
| Read more | View the complete documentation |
| This page | Learn about our services |
| Link | Download the annual report (PDF, 2MB) |

### Link Text Guidelines

**DO:**
- ✅ Be specific and descriptive
- ✅ Tell users where they're going
- ✅ Indicate file types (PDF, etc.)
- ✅ Mention if link opens in new tab
- ✅ Use action words

**DON'T:**
- ❌ Use "click here" or "read more"
- ❌ Use just URLs as link text
- ❌ Make entire sentences clickable
- ❌ Use vague text

**Examples:**
```html
<!-- ✅ GOOD -->
<a href="guide.pdf">Download the beginner's guide (PDF, 1.5MB)</a>
<a href="tutorial.html">View the complete HTML tutorial</a>
<a href="https://github.com" target="_blank">Visit GitHub (opens in new tab)</a>

<!-- ❌ BAD -->
<a href="guide.pdf">Click here</a>
<a href="tutorial.html">Read more</a>
<a href="https://github.com">https://github.com</a>
```

---

## 🖼️ Links Around Other Elements

### Link Around Formatted Text
```html
<a href="important.html"><strong>This is important!</strong></a>
<a href="emphasis.html"><em>Check this out</em></a>
```

### Link Around Multiple Elements
```html
<a href="article.html">
    <h3>Article Title</h3>
    <p>Click anywhere in this section to read more...</p>
</a>
```

**Note:** You can wrap images in links too (covered in next lesson!)

---

## 🎯 Complete Link Examples

### Simple Navigation
```html
<nav>
    <a href="index.html">Home</a> | 
    <a href="about.html">About</a> | 
    <a href="contact.html">Contact</a>
</nav>
```

### Navigation with Lists
```html
<nav>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</nav>
```

### Footer Links
```html
<footer>
    <p>Connect with us:</p>
    <a href="https://github.com/username" target="_blank">GitHub</a> | 
    <a href="https://twitter.com/username" target="_blank">Twitter</a> | 
    <a href="mailto:contact@example.com">Email</a> | 
    <a href="tel:+15555551234">Call Us</a>
</footer>
```

### Resource List
```html
<h2>Learning Resources</h2>
<ul>
    <li>
        <a href="https://www.freecodecamp.org" 
           target="_blank" 
           title="Free coding courses">
            freeCodeCamp
        </a> - Free coding education
    </li>
    <li>
        <a href="https://developer.mozilla.org" 
           target="_blank"
           title="Web development documentation">
            MDN Web Docs
        </a> - Complete reference
    </li>
</ul>
```

---

## 🚨 Common Mistakes

### 1. Forgetting https://
```html
<!-- ❌ WRONG -->
<a href="www.google.com">Google</a>

<!-- ✅ CORRECT -->
<a href="https://www.google.com">Google</a>
```

### 2. Not Closing the Anchor Tag
```html
<!-- ❌ WRONG -->
<a href="page.html">Click here

<!-- ✅ CORRECT -->
<a href="page.html">Click here</a>
```

### 3. Forgetting # for Anchor Links
```html
<!-- ❌ WRONG -->
<a href="section1">Jump to Section 1</a>

<!-- ✅ CORRECT -->
<a href="#section1">Jump to Section 1</a>
```

### 4. Mismatched IDs and hrefs
```html
<!-- ❌ WRONG - Doesn't match -->
<a href="#intro">Introduction</a>
<h2 id="introduction">Introduction</h2>

<!-- ✅ CORRECT - Perfect match -->
<a href="#intro">Introduction</a>
<h2 id="intro">Introduction</h2>
```

### 5. Spaces in IDs
```html
<!-- ❌ WRONG -->
<h2 id="my section">My Section</h2>

<!-- ✅ CORRECT -->
<h2 id="my-section">My Section</h2>
```

### 6. Using target="_blank" on Internal Links
```html
<!-- ❌ WRONG - Don't use for internal pages -->
<a href="about.html" target="_blank">About</a>

<!-- ✅ CORRECT - No target needed -->
<a href="about.html">About</a>
```

---

## 📋 Link Checklist

Before considering a link complete, verify:
- [ ] `href` attribute is present
- [ ] Link text is descriptive
- [ ] External links use full URL with `https://`
- [ ] External links use `target="_blank"`
- [ ] Users are told when links open in new tabs
- [ ] Anchor links use `#` before ID
- [ ] IDs match hrefs exactly
- [ ] All links tested and working
- [ ] Closing `</a>` tag is present

---

## 🎨 Link Template Patterns

### Basic External Link Pattern
```html
<a href="https://www.example.com" target="_blank">
    Site Name (opens in new tab)
</a>
```

### Internal Navigation Pattern
```html
<nav>
    <a href="index.html">Home</a> | 
    <a href="about.html">About</a> | 
    <a href="contact.html">Contact</a>
</nav>
```

### Anchor Link Pattern
```html
<!-- Link -->
<a href="#section-name">Jump to Section</a>

<!-- Target -->
<h2 id="section-name">Section Title</h2>
```

### Contact Link Pattern
```html
<p>Contact us: 
   <a href="mailto:email@example.com">email@example.com</a> or 
   <a href="tel:+15555551234">(555) 555-1234</a>
</p>
```

---

## 💡 Quick Tips

1. **Test all links** - Click them to make sure they work
2. **Be descriptive** - Link text should explain where you're going
3. **Use https://** - Always use secure protocol
4. **Be consistent** - Keep navigation menus the same on all pages
5. **Think mobile** - Phone links are great for mobile users
6. **Accessibility** - Good link text helps screen reader users
7. **IDs are unique** - Each ID can only be used once per page
8. **No spaces in IDs** - Use hyphens instead

---

## 🔍 Testing Your Links

### Questions to Ask:
1. Does the link go to the right place?
2. Is the link text descriptive?
3. Do external links open in new tabs?
4. Are anchor links jumping correctly?
5. Do email links open email programs?
6. Do tooltips appear on hover?
7. Is the HTML valid (all tags closed)?

### Test Every Link:
- Click it
- Verify it goes to the right place
- Check that it looks right
- Hover to see if tooltips work

---

**Remember:** Links are what make the web a "web"! Master them and you can connect any content together. 🕸️
