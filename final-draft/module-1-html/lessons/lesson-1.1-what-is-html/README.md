# Lesson 1.1 — What Is HTML?

Welcome to your first coding lesson! You're about to learn the language that builds every website you've ever visited. Let's dive in!

---

## 🎯 What You'll Learn

By the end of this lesson, you'll be able to:
- Explain what HTML is and what it does
- Understand how browsers read HTML to display web pages
- Identify the parts of an HTML element (tags, content, attributes)
- Write your first HTML code and see it in a browser
- Build a simple web page with proper structure

**Time:** 45-60 minutes  
**Prerequisites:** None - this is the very beginning!

---

## 📖 What Is HTML?

### What Does HTML Stand For?

**HTML** = **H**yper**T**ext **M**arkup **L**anguage

Let's break that down:
- **HyperText** - Text with links (like clicking from one page to another)
- **Markup** - Special codes that tell the browser how to display things
- **Language** - A way to communicate (you're learning to talk to browsers!)

### What Does HTML Do?

Think of a website like a house:
- **HTML** is the structure (walls, floors, rooms, doors)
- CSS is the decoration (paint, furniture, style) — you'll learn this in Module 2
- JavaScript is the functionality (lights that turn on, doors that open) — you'll learn this in Module 3

HTML is the **skeleton** of every website. It tells the browser:
- "This is a heading"
- "This is a paragraph"
- "This is a link to another page"
- "This is an image"

### How Do Browsers Work?

When you visit a website:
1. Your browser (Chrome, Firefox, Edge, Safari) downloads the HTML file
2. The browser **reads** the HTML code
3. The browser **displays** what the HTML describes

It's like following a recipe — the HTML is the recipe, and the browser is the chef that creates the final dish!

---

## 🏷️ Understanding Tags and Elements

### What's a Tag?

Tags are the special codes in HTML. They look like this:

```html
<p>This is a paragraph</p>
```

- `<p>` is the **opening tag**
- `</p>` is the **closing tag** (notice the `/`)
- Everything between them is the **content**

### Anatomy of an HTML Element

```html
<tagname>Content goes here</tagname>
```

- **Opening Tag:** `<tagname>` - Starts the element
- **Content:** The stuff inside (text, images, other elements)
- **Closing Tag:** `</tagname>` - Ends the element

The whole thing together (opening tag + content + closing tag) is called an **element**.

### Self-Closing Tags

Some tags don't have content, so they don't need a closing tag:

```html
<img src="picture.jpg" alt="A beautiful sunset">
<br>
<hr>
```

These are called **self-closing** or **void** tags.

---

## 🏗️ Basic HTML Document Structure

Every HTML page needs this basic structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My First Web Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my first web page!</p>
</body>
</html>
```

Let's break it down:

### 1. `<!DOCTYPE html>`
- Tells the browser "This is an HTML5 document"
- Always goes at the very top
- Not technically a tag, just a declaration

### 2. `<html lang="en">`
- The root element that wraps everything
- `lang="en"` tells screen readers the language is English
- Accessibility tip: Always include the `lang` attribute!

### 3. `<head>`
- Contains information **about** the page (metadata)
- Doesn't show up on the actual page
- Includes things like the title, character set, and links to CSS files

### 4. `<meta charset="UTF-8">`
- Tells the browser which character set to use
- UTF-8 supports all languages and emoji 😊
- Always include this!

### 5. `<title>`
- The text that appears in the browser tab
- Shows in search results
- Important for accessibility and SEO (Search Engine Optimization)

### 6. `<body>`
- Contains everything that **shows on the page**
- All your visible content goes here
- Headings, paragraphs, images, links, etc.

---

## 🎨 Your First HTML Elements

### Headings

There are 6 levels of headings, from biggest to smallest:

```html
<h1>Biggest Heading</h1>
<h2>Second Biggest</h2>
<h3>Third Biggest</h3>
<h4>Fourth</h4>
<h5>Fifth</h5>
<h6>Smallest Heading</h6>
```

**Rule:** Use only ONE `<h1>` per page (it's the main title)

### Paragraphs

```html
<p>This is a paragraph. Paragraphs are for regular text content.</p>
<p>Each paragraph tag creates a new block of text.</p>
```

### Links

```html
<a href="https://www.example.com">Click here to visit Example.com</a>
```

- `<a>` = **a**nchor (link)
- `href` = where the link goes (the destination)
- The text between the tags is what you click

### Images

```html
<img src="cat.jpg" alt="A fluffy orange cat sleeping">
```

- `src` = **s**ou**rc**e (the image file location)
- `alt` = **alt**ernative text (describes the image for accessibility)
- Always include `alt` text!

---

## ✅ Good Examples

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>About Me</title>
</head>
<body>
    <h1>Welcome to My Page</h1>
    <p>Hi! My name is Alex and I love coding.</p>
    <p>I'm learning HTML and it's really fun!</p>
</body>
</html>
```

**Why this is good:**
- ✅ Proper document structure
- ✅ Meaningful title
- ✅ One `<h1>` for the main heading
- ✅ Paragraphs for text content
- ✅ Clear and organized

---

## ❌ Common Mistakes

```html
<html>
<head>
<title>My Page
<body>
<h1>Hello World
<p>This is missing closing tags and structure
```

**Why this is bad:**
- ❌ Missing `<!DOCTYPE html>`
- ❌ No closing tags (`</title>`, `</h1>`, `</p>`)
- ❌ Missing `<meta charset="UTF-8">`
- ❌ No `lang` attribute
- ❌ Poor formatting (hard to read)

**Always:**
- Include the full document structure
- Close every tag you open
- Indent your code to show nesting
- Use meaningful titles

---

## 💡 Understanding Attributes

Attributes give extra information about elements. They go in the opening tag:

```html
<tagname attribute="value">Content</tagname>
```

Common attributes:

```html
<!-- href tells a link where to go -->
<a href="https://www.example.com">Visit Example</a>

<!-- src tells an image where to find the file -->
<img src="photo.jpg" alt="Description">

<!-- lang tells the language -->
<html lang="en">

<!-- id gives a unique identifier -->
<div id="header">

<!-- class groups elements for styling -->
<p class="important">
```

---

## 🔍 How to View Your HTML Files

You have **two ways** to open HTML files:

### Method 1: Double-Click (Quick)
1. Find your HTML file in File Explorer
2. Double-click it
3. It opens in your default browser

### Method 2: Browser Menu (Reliable)
1. Open your browser (Chrome, Firefox, Edge)
2. Press `Ctrl + O` (or go to File → Open File)
3. Navigate to your HTML file
4. Click "Open"

**Pro Tip:** Keep your HTML file and browser window side-by-side. When you save changes to your HTML file, refresh the browser (`F5` or `Ctrl + R`) to see the updates!

---

## 💭 Think About It

Before you start coding, consider these questions:

1. **Why do you think every website uses HTML?**
   - Hint: What would happen if browsers didn't have a standard language?

2. **What's the difference between `<head>` and `<body>`?**
   - Hint: One is for information *about* the page, one is *on* the page

3. **Why is alt text important for images?**
   - Hint: Not everyone can see images

4. **What makes a good page title?**
   - Hint: It shows in browser tabs and search results

---

## 🎨 Try It Out

Ready to write some code? Check out the examples:

### Example 1: Simple Heading
**File:** `examples/example-1-simple-heading.html`

The simplest possible HTML page — just one heading!

### Example 2: Multiple Headings
**File:** `examples/example-2-multiple-headings.html`

See all six heading levels and how they look different.

### Example 3: Headings and Paragraphs
**File:** `examples/example-3-headings-and-paragraphs.html`

A complete page with headings and paragraphs working together.

**How to view:** See `examples/HOW-TO-VIEW.md` for detailed instructions on opening HTML files in your browser.

---

## 📝 Practice Exercises

Time to build your own pages! Complete these exercises in order:

### Exercise 1: My First Page
**File:** `practice/exercise-1.md`

Create your very first web page with a heading and a paragraph about yourself.

### Exercise 2: Adding Elements
**File:** `practice/exercise-2.md`

Enhance your page by adding multiple headings and paragraphs.

### Exercise 3: Two-Page Site
**File:** `practice/exercise-3.md`

Build two pages and link them together — your first multi-page website!

---

## 📚 Quick Reference

### Essential HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Page Title Here</title>
</head>
<body>
    <!-- Your content here -->
</body>
</html>
```

### Common Tags
- `<h1>` to `<h6>` - Headings (biggest to smallest)
- `<p>` - Paragraph
- `<a href="url">` - Link
- `<img src="file" alt="description">` - Image
- `<br>` - Line break
- `<!-- comment -->` - Comment (invisible notes in your code)

For a complete reference, see `resources/cheatsheet.md`

---

## 🎯 Success Checklist

Before moving to the next lesson, make sure you can:

- [ ] Explain what HTML stands for
- [ ] Describe what HTML does (structures content)
- [ ] Identify opening tags, closing tags, and content
- [ ] Write the basic HTML document structure from memory
- [ ] Create a simple web page and view it in a browser
- [ ] Use headings and paragraphs
- [ ] Understand why alt text matters

---

## ♿ Accessibility Tips

Good HTML is accessible HTML. From day one, build these habits:

- **Use semantic elements** - `<h1>` instead of `<div>` styled to look big
- **Include `lang` attribute** - Helps screen readers pronounce words correctly
- **Write meaningful titles** - Helps users know what page they're on
- **Add `alt` text to images** - Describes images for people who can't see them
- **Use proper heading hierarchy** - Don't skip from `<h1>` to `<h4>`

---

## 🎓 For Parents & Mentors

**See:** `resources/parent-guide.md` for detailed guidance on helping your student.

**Key concepts to reinforce:**
- HTML is just text with special codes (tags) that browsers understand
- Tags come in pairs (opening and closing) most of the time
- Indentation makes code easier to read (like outlining an essay)
- Mistakes are normal — browsers are forgiving and will still try to display the page
- Viewing source code on real websites is a great way to learn

**Encourage:**
- Experimenting and breaking things (you can't break the computer!)
- Looking at the HTML of their favorite websites (right-click → View Page Source)
- Asking "What does this tag do?" and testing it out

---

## 🚀 Next Steps

Great job! You've learned the foundation of the web.

**Next Lesson:** [Lesson 1.2 — Headings & Paragraphs](../lesson-1.2-headings-paragraphs/README.md)

Learn how to structure text content for readability and accessibility.

---

## 📖 Additional Resources

- [MDN Web Docs - HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [W3C HTML Validator](https://validator.w3.org/) - Check if your HTML is correct
- [WebAIM - Semantic Structure](https://webaim.org/articles/semanticstructure/)

---

**Remember:** Every website you've ever visited started with someone typing HTML tags. Now you're doing the same thing. Welcome to web development! 🎉
