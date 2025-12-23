# Semantic HTML Cheat Sheet

## 🏗️ Page Structure Elements

### `<header>`
**Purpose**: Introductory content, logos, navigation
```html
<header>
  <h1>Site Title</h1>
  <nav>...</nav>
</header>
```
**Use for**: Page headers, article headers, section headers

### `<nav>`
**Purpose**: Navigation menus and links
```html
<nav>
  <a href="#home">Home</a>
  <a href="#about">About</a>
</nav>
```
**Use for**: Main navigation, footer navigation, breadcrumbs

### `<main>`
**Purpose**: Primary content of the page
```html
<main>
  <!-- Main content here -->
</main>
```
**Important**: Only ONE per page!

### `<section>`
**Purpose**: Thematic grouping of content
```html
<section>
  <h2>Section Title</h2>
  <p>Content...</p>
</section>
```
**Use for**: Chapters, tabbed content, themed areas

### `<article>`
**Purpose**: Independent, self-contained content
```html
<article>
  <h2>Article Title</h2>
  <p>Content...</p>
</article>
```
**Use for**: Blog posts, news articles, forum posts, product cards

### `<aside>`
**Purpose**: Tangentially related content
```html
<aside>
  <h3>Related Links</h3>
  <ul>...</ul>
</aside>
```
**Use for**: Sidebars, related links, pull quotes, ads

### `<footer>`
**Purpose**: Footer information
```html
<footer>
  <p>&copy; 2025 My Site</p>
</footer>
```
**Use for**: Page footers, article footers, section footers

## 📝 Text-Level Semantic Elements

### Emphasis Elements

```html
<!-- Important (semantic) -->
<strong>Very important!</strong>

<!-- Bold (visual only) -->
<b>Just bold</b>

<!-- Emphasized (semantic) -->
<em>Really mean it</em>

<!-- Italic (visual only) -->
<i>Just italic</i>

<!-- Highlighted/Marked -->
<mark>Highlighted text</mark>
```

### Code & Computer Elements

```html
<!-- Code snippet -->
<code>&lt;header&gt;</code>

<!-- Keyboard input -->
<kbd>Ctrl</kbd> + <kbd>S</kbd>

<!-- Sample output -->
<samp>Hello, World!</samp>

<!-- Variable -->
<var>x</var> = 5

<!-- Multi-line code -->
<pre><code>
function hello() {
  console.log("Hello!");
}
</code></pre>
```

### Date & Time

```html
<!-- Date -->
<time datetime="2025-01-15">January 15, 2025</time>

<!-- Date and time -->
<time datetime="2025-01-15T19:00">7 PM, Jan 15</time>

<!-- Just time -->
<time datetime="19:00">7:00 PM</time>
```

### Abbreviations

```html
<abbr title="HyperText Markup Language">HTML</abbr>
<abbr title="Cascading Style Sheets">CSS</abbr>
<abbr title="In my opinion">IMO</abbr>
```

### Quotes

```html
<!-- Inline quote -->
<p>He said, <q>Hello there!</q></p>

<!-- Block quote -->
<blockquote>
  <p>Quote text here...</p>
  <footer>— Author, <cite>Source</cite></footer>
</blockquote>

<!-- Citation -->
<cite>Book Title</cite>
```

### Other Text Elements

```html
<!-- Deleted text -->
<del>Old price: $99</del>

<!-- Inserted text -->
<ins>New price: $79</ins>

<!-- Subscript -->
H<sub>2</sub>O

<!-- Superscript -->
E = mc<sup>2</sup>

<!-- Small text / Fine print -->
<small>Terms and conditions apply</small>
```

## 🎯 Complete Page Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Page Title</title>
</head>
<body>
  <!-- Page Header -->
  <header>
    <h1>Site Name</h1>
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
    </nav>
  </header>
  
  <!-- Main Content -->
  <main>
    <!-- Section -->
    <section>
      <h2>Section Title</h2>
      
      <!-- Article -->
      <article>
        <header>
          <h3>Article Title</h3>
          <p>By Author | <time>Date</time></p>
        </header>
        
        <p>Article content...</p>
        
        <footer>
          <p>Tags: ...</p>
        </footer>
      </article>
    </section>
  </main>
  
  <!-- Sidebar -->
  <aside>
    <h3>Sidebar</h3>
    <p>Related content...</p>
  </aside>
  
  <!-- Page Footer -->
  <footer>
    <p>&copy; 2025 Site Name</p>
  </footer>
</body>
</html>
```

## 📊 Quick Decision Guide

### When to use what?

| Element | Use When... |
|---------|-------------|
| `<header>` | Creating headers for page/article/section |
| `<nav>` | Building navigation menus |
| `<main>` | Marking the primary content (once!) |
| `<section>` | Grouping content by theme |
| `<article>` | Content could stand alone |
| `<aside>` | Adding supplementary content |
| `<footer>` | Creating footers for page/article/section |
| `<div>` | Pure layout with no semantic meaning |
| `<span>` | Inline styling with no semantic meaning |

### Text elements:

| Element | Use When... |
|---------|-------------|
| `<strong>` | Text is **important** (semantic) |
| `<b>` | Text is **bold** (visual only) |
| `<em>` | Text is *emphasized* (semantic) |
| `<i>` | Text is *italic* (visual only) |
| `<mark>` | Highlighting/marking text |
| `<code>` | Showing code |
| `<kbd>` | Showing keyboard input |
| `<time>` | Marking dates/times |
| `<abbr>` | Abbreviations/acronyms |

## ✅ Best Practices

### DO:
- ✅ Use one `<main>` per page
- ✅ Use semantic elements when content has meaning
- ✅ Nest elements properly
- ✅ Use `<header>` and `<footer>` in pages AND articles
- ✅ Add `datetime` attribute to `<time>`
- ✅ Add `title` attribute to `<abbr>`
- ✅ Think about meaning, not just appearance

### DON'T:
- ❌ Use multiple `<main>` elements
- ❌ Use semantic elements only for styling
- ❌ Skip semantic elements when they fit
- ❌ Use `<b>` and `<i>` when `<strong>` and `<em>` are better
- ❌ Put `<main>` inside `<article>`
- ❌ Worry too much - divs are okay for layout!

## 🎨 Article vs Section

**Confused between `<article>` and `<section>`?**

### Use `<article>` when:
- ✅ Content could be syndicated (RSS)
- ✅ Self-contained and independent
- ✅ Would make sense on its own
- Examples: Blog post, news article, product card

### Use `<section>` when:
- ✅ Grouping related content
- ✅ Thematic chapter/area
- ✅ Part of a larger whole
- Examples: Chapter sections, tabbed content, themed areas

### Can nest them!
```html
<article>
  <section>Part 1</section>
  <section>Part 2</section>
</article>

<!-- OR -->

<section>
  <article>Post 1</article>
  <article>Post 2</article>
</section>
```

## 🌟 Why Use Semantic HTML?

### 1. Accessibility ♿
- Screen readers understand structure
- Users can navigate easily
- Jump to specific sections
- Better experience for everyone

### 2. SEO 🔍
- Search engines understand content
- Better indexing
- Improved rankings
- More visitors

### 3. Maintainability 🔧
- Code is self-documenting
- Purpose is clear
- Easier to update
- Team collaboration

### 4. Future-Proof 🚀
- Works with new technologies
- Standards-compliant
- Browser-friendly
- Professional quality

## 📚 Quick Reference

### Common Patterns

**Blog Post**
```html
<article>
  <header>
    <h2>Title</h2>
    <p><time>Date</time> by <strong>Author</strong></p>
  </header>
  <p>Content...</p>
  <footer>
    <p>Tags: ...</p>
  </footer>
</article>
```

**Product Card**
```html
<article>
  <header>
    <h3>Product Name</h3>
    <p><strong>$99.99</strong></p>
  </header>
  <p>Description...</p>
  <footer>
    <button>Add to Cart</button>
  </footer>
</article>
```

**Navigation**
```html
<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
```

**Sidebar**
```html
<aside>
  <section>
    <h3>Popular Posts</h3>
    <ul>...</ul>
  </section>
  
  <section>
    <h3>Categories</h3>
    <ul>...</ul>
  </section>
</aside>
```

## 💡 Pro Tips

1. **Start with structure first** - Plan your page layout before writing HTML
2. **Think meaning, not style** - Choose elements based on what they mean
3. **Nest appropriately** - Articles can have headers, sections can have articles
4. **Use IDs for navigation** - Link to specific sections
5. **Test with a screen reader** - Understand how accessible your page is
6. **Validate your HTML** - Use W3C validator
7. **Keep divs for layout** - Pure styling containers are fine

## 🚀 Next Steps

After mastering semantic HTML:
- Module 2: Style your semantic elements with CSS
- Module 3: Add interactivity with JavaScript
- Module 4: Build complete projects
- Module 5: Deploy your websites

---

**Remember**: Semantic HTML is about **meaning**, not **appearance**. CSS handles how things look. HTML handles what things mean! 🎯✨
