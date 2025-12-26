# Lesson 1.4: Links

Welcome to Lesson 1.4! Links are what make the web a "web" - they connect pages together and let users navigate between sites and pages. Today you'll learn how to create all types of links!

---

## 🎯 What You'll Learn

By the end of this lesson, you'll be able to:
- Create links to external websites
- Link between pages in your own website
- Create anchor links that jump to different sections
- Make email and phone links
- Use link attributes like target and title
- Write accessible, user-friendly link text
- Build navigation menus

---

## 🔗 Understanding Links

Links (also called **hyperlinks**) are the connections that make the internet work. When you click a link, it takes you somewhere - another page, another website, or even another part of the same page!

### The Anchor Tag

All links use the `<a>` tag (short for **anchor**):

```html
<a href="https://www.google.com">Go to Google</a>
```

### Breaking Down the Link

Let's understand each part:

```html
<a href="https://www.google.com">Go to Google</a>
│  │                            │            │
│  │                            │            └─ Closing tag
│  │                            └─ Link text (what users click)
│  └─ href attribute (where it goes)
└─ Opening anchor tag
```

- **`<a>`** = Anchor tag (creates the link)
- **`href`** = **H**ypertext **Ref**erence (the destination URL)
- **Link text** = What users see and click
- **`</a>`** = Closing tag

---

## 🌐 External Links - Linking to Other Websites

External links take users to websites outside your own site.

### Basic External Link

```html
<a href="https://www.google.com">Google</a>
<a href="https://www.youtube.com">YouTube</a>
<a href="https://www.wikipedia.org">Wikipedia</a>
```

### Important Rules for External Links

1. **Always include the full URL** with `https://`:
```html
<!-- ✅ CORRECT -->
<a href="https://www.youtube.com">YouTube</a>

<!-- ❌ WRONG - Won't work! -->
<a href="www.youtube.com">YouTube</a>
<a href="youtube.com">YouTube</a>
```

2. **Use `https://` not `http://`** (more secure)

3. **Include the full domain name**

### Opening Links in a New Tab

Use `target="_blank"` to open links in a new tab:

```html
<a href="https://www.wikipedia.org" target="_blank">Wikipedia (Opens in new tab)</a>
```

**When to open in a new tab:**
- ✅ External websites (so users don't leave your site)
- ✅ PDFs or downloadable files
- ✅ Reference materials while filling out forms
- ❌ Internal navigation (keep users on same tab)

**Accessibility Note:** Always tell users when a link opens in a new tab!

```html
<a href="https://example.com" target="_blank">
    External Site (opens in new tab)
</a>
```

---

## 📄 Internal Links - Connecting Your Own Pages

Internal links connect pages within your website. These are crucial for navigation!

### Basic Internal Links

If you have files in the same folder:

```html
<a href="index.html">Home</a>
<a href="about.html">About Me</a>
<a href="contact.html">Contact</a>
<a href="projects.html">My Projects</a>
```

### Example: Simple Navigation

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>My Website - Home</title>
</head>
<body>
    <h1>Welcome to My Website</h1>
    
    <nav>
        <a href="index.html">Home</a> | 
        <a href="about.html">About</a> | 
        <a href="projects.html">Projects</a> | 
        <a href="contact.html">Contact</a>
    </nav>
    
    <p>This is the home page content...</p>
</body>
</html>
```

### Working with File Paths

When files are in different folders:

```html
<!-- Link to file in a subfolder -->
<a href="pages/about.html">About</a>
<a href="images/photo.jpg">View Photo</a>

<!-- Link to file in parent folder -->
<a href="../index.html">Back to Home</a>

<!-- Link to file in different subfolder -->
<a href="../projects/project1.html">Project 1</a>
```

**Understanding Paths:**
- `about.html` = Same folder
- `pages/about.html` = In a "pages" subfolder
- `../index.html` = One folder up
- `../../index.html` = Two folders up

---

## 🔝 Anchor Links - Jump to Page Sections

Anchor links let you jump to different parts of the same page - perfect for long pages!

### Step 1: Add IDs to Target Sections

```html
<h2 id="introduction">Introduction</h2>
<p>This is the introduction section...</p>

<h2 id="main-content">Main Content</h2>
<p>This is the main section...</p>

<h2 id="conclusion">Conclusion</h2>
<p>This is the conclusion...</p>
```

### Step 2: Create Links to Those IDs

```html
<nav>
    <a href="#introduction">Jump to Introduction</a> | 
    <a href="#main-content">Jump to Main Content</a> | 
    <a href="#conclusion">Jump to Conclusion</a>
</nav>
```

**Note:** Use `#` before the ID name in your href!

### Table of Contents Example

```html
<h1>Complete Guide to HTML</h1>

<!-- Table of Contents -->
<h2>Table of Contents</h2>
<ul>
    <li><a href="#chapter1">Chapter 1: Getting Started</a></li>
    <li><a href="#chapter2">Chapter 2: Tags and Elements</a></li>
    <li><a href="#chapter3">Chapter 3: Attributes</a></li>
</ul>

<hr>

<!-- Chapter 1 -->
<h2 id="chapter1">Chapter 1: Getting Started</h2>
<p>Content for chapter 1...</p>

<!-- Chapter 2 -->
<h2 id="chapter2">Chapter 2: Tags and Elements</h2>
<p>Content for chapter 2...</p>

<!-- Chapter 3 -->
<h2 id="chapter3">Chapter 3: Attributes</h2>
<p>Content for chapter 3...</p>
```

### Back to Top Link

```html
<h1 id="top">My Long Article</h1>

<!-- Lots of content here -->

<a href="#top">⬆️ Back to Top</a>
```

---

## 📧 Email and Phone Links

### Email Links

Create links that open the user's email program:

```html
<a href="mailto:hello@example.com">Email Us</a>
```

**With Subject Line:**
```html
<a href="mailto:support@example.com?subject=Help Request">Get Support</a>
```

**With Subject and Body:**
```html
<a href="mailto:hello@example.com?subject=Hello&body=I wanted to say...">
    Send Feedback
</a>
```

### Phone Links

Create clickable phone numbers (especially useful on mobile):

```html
<a href="tel:+15555551234">Call Us: (555) 555-1234</a>
```

**Why use `tel:` links?**
- On mobile devices, it opens the phone app
- On desktop, it may open Skype or similar apps
- Makes phone numbers one-tap callable

---

## 🎨 Link Attributes

### The `title` Attribute

Add tooltips that appear when users hover over links:

```html
<a href="https://www.google.com" title="Search the web with Google">Google</a>
```

When you hover, you'll see "Search the web with Google" appear!

### The `target` Attribute

Control where links open:

```html
<!-- Opens in same tab (default) -->
<a href="page.html">Link</a>

<!-- Opens in new tab -->
<a href="external.html" target="_blank">Link</a>

<!-- Opens in new window (rarely used) -->
<a href="page.html" target="_blank">Link</a>
```

### Combining Attributes

```html
<a href="https://www.youtube.com" 
   target="_blank" 
   title="Watch videos on YouTube">
    YouTube
</a>
```

---

## ✍️ Writing Good Link Text

The text of your link matters! It should tell users where they're going.

### Good vs Bad Link Text

```html
<!-- ❌ BAD: Not descriptive -->
<a href="article.html">Click here</a>
<a href="page.html">Read more</a>
<a href="info.html">This page</a>

<!-- ✅ GOOD: Descriptive and clear -->
<a href="article.html">Read our beginner's guide to HTML</a>
<a href="tutorial.html">View the complete tutorial</a>
<a href="about.html">Learn about our company</a>
```

### Why Good Link Text Matters

1. **Screen readers** read link text out loud - "click here" isn't helpful!
2. **Search engines** use link text to understand your content
3. **Users** scan link text to decide what to click

### Link Text Guidelines

```html
<!-- ✅ GOOD: Specific and descriptive -->
<a href="download.pdf">Download the 2025 Annual Report (PDF, 2MB)</a>

<!-- ❌ BAD: Generic -->
<a href="download.pdf">Click here</a>

<!-- ✅ GOOD: Action-oriented -->
<a href="signup.html">Create your free account</a>

<!-- ❌ BAD: Vague -->
<a href="signup.html">Sign up</a>
```

---

## 🖼️ Links Around Other Elements

You can wrap links around images, formatted text, or multiple elements!

### Link Around Formatted Text

```html
<a href="important.html">
    <strong>This is really important!</strong>
</a>

<a href="emphasized.html">
    <em>Read this emphasized article</em>
</a>
```

### Link Around Multiple Elements

```html
<a href="article.html">
    <h3>Article Title</h3>
    <p>Click anywhere in this section to read the full article...</p>
</a>
```

**Note:** You'll learn about linking images in the next lesson!

---

## ✅ Good Examples vs ❌ Bad Examples

### Example 1: External Links

```html
<!-- ✅ GOOD -->
<a href="https://www.github.com" target="_blank">
    GitHub (opens in new tab)
</a>

<!-- ❌ BAD: Missing https://, no indication of new tab -->
<a href="github.com" target="_blank">GitHub</a>
```

### Example 2: Navigation Menu

```html
<!-- ✅ GOOD: Clear, organized -->
<nav>
    <a href="index.html">Home</a> | 
    <a href="about.html">About Us</a> | 
    <a href="services.html">Our Services</a> | 
    <a href="contact.html">Contact</a>
</nav>

<!-- ❌ BAD: Unclear link text -->
<nav>
    <a href="index.html">Click</a> | 
    <a href="about.html">Here</a> | 
    <a href="services.html">Page</a>
</nav>
```

### Example 3: Email Links

```html
<!-- ✅ GOOD: Clear purpose -->
<p>Questions? <a href="mailto:support@example.com">Email our support team</a></p>

<!-- ❌ BAD: Just the email address as text -->
<p>Questions? support@example.com</p>
```

---

## 🎯 Building a Navigation Menu

Here's a complete example of a good navigation system:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Portfolio - Home</title>
</head>
<body>
    <header>
        <h1>John's Portfolio</h1>
        
        <nav>
            <strong>Navigation:</strong>
            <a href="index.html">Home</a> | 
            <a href="about.html">About Me</a> | 
            <a href="projects.html">My Projects</a> | 
            <a href="contact.html">Contact</a>
        </nav>
    </header>
    
    <hr>
    
    <main>
        <h2>Welcome!</h2>
        <p>Check out <a href="projects.html">my projects</a> or 
           <a href="about.html">learn more about me</a>.</p>
        
        <p>Want to work together? 
           <a href="contact.html">Get in touch!</a></p>
    </main>
    
    <hr>
    
    <footer>
        <p>Connect with me:</p>
        <a href="https://github.com/johndoe" target="_blank">GitHub</a> | 
        <a href="https://linkedin.com/in/johndoe" target="_blank">LinkedIn</a> | 
        <a href="mailto:john@example.com">Email</a>
    </footer>
</body>
</html>
```

---

## 💭 Think About It

Before moving on, consider:

1. **Browse a website you like.** How do they use links? What link text do they use?

2. **Think about accessibility.** How would someone using a screen reader know where your links go?

3. **Internal vs External:** When might you want a link to open in the same tab vs a new tab?

4. **Link text:** Why is "click here" bad link text? What makes link text good?

---

## 🎯 Success Checklist

By the end of this lesson, you should be able to:
- [ ] Create external links with full URLs
- [ ] Link between pages in your website
- [ ] Use `target="_blank"` to open links in new tabs
- [ ] Create anchor links that jump to page sections
- [ ] Make email and phone links
- [ ] Write descriptive, accessible link text
- [ ] Use the title attribute for tooltips
- [ ] Build a simple navigation menu
- [ ] Understand relative vs absolute paths
- [ ] Explain why good link text matters

---

## ♿ Accessibility Reminder

Links are critical for accessibility:
- **Use descriptive link text** - not "click here"
- **Indicate new tabs** - tell users when links open in new windows
- **Make links obvious** - users should know what's clickable
- **Don't use URLs as link text** - use descriptive text instead

Screen reader users often navigate by links, so good link text is essential!

---

## 📝 Practice Exercises

Ready to practice? Head to the practice exercises!

**Exercise 1:** Create a page with external links  
**Exercise 2:** Build a multi-page website with navigation  
**Exercise 3:** Create a resource page with all link types

---

## 🚀 What's Next?

In Lesson 1.5, you'll learn about **images** - how to add pictures to your pages, including images as links!

---

## 📚 Quick Reference

### External Link
```html
<a href="https://www.example.com">Example Site</a>
<a href="https://www.example.com" target="_blank">External Site (new tab)</a>
```

### Internal Link
```html
<a href="about.html">About Page</a>
<a href="pages/about.html">About (in subfolder)</a>
```

### Anchor Link
```html
<a href="#section1">Jump to Section 1</a>
<h2 id="section1">Section 1</h2>
```

### Email & Phone
```html
<a href="mailto:hello@example.com">Email Us</a>
<a href="tel:+15555551234">Call Us</a>
```

### With Attributes
```html
<a href="page.html" title="Tooltip text" target="_blank">Link</a>
```

### Key Points
- Always use `https://` for external links
- Use descriptive link text, not "click here"
- Tell users when links open in new tabs
- Use anchor links for long pages
- `href` is required for all links
- Close all anchor tags!

---

**Great job learning about links!** 🎉 You can now connect pages and build navigation - you're building real websites!
