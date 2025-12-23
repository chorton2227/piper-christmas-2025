# Lesson 1.9: Semantic HTML

## 🎯 Learning Objectives

By the end of this lesson, you will be able to:
- Understand what semantic HTML means
- Use semantic elements to structure pages properly
- Create accessible, meaningful page layouts
- Know when to use semantic elements vs divs
- Build professional page structures
- Understand SEO and accessibility benefits

## 📚 What is Semantic HTML?

**Semantic HTML** means using HTML elements that describe their **meaning and purpose**, not just how they look.

### Non-Semantic (Bad)
```html
<div class="header">...</div>
<div class="nav">...</div>
<div class="main">...</div>
<div class="footer">...</div>
```

### Semantic (Good!)
```html
<header>...</header>
<nav>...</nav>
<main>...</main>
<footer>...</footer>
```

Both might look the same on screen, but the second version is **meaningful** to:
- Search engines (SEO)
- Screen readers (accessibility)
- Other developers (clarity)
- You (when you return to your code later!)

## 🏗️ Page Structure Elements

### `<header>` - Page or Section Header
Contains introductory content, logos, navigation, headings.

```html
<header>
  <h1>My Awesome Website</h1>
  <p>Welcome to my site!</p>
</header>
```

### `<nav>` - Navigation Links
Contains navigation menus and links.

```html
<nav>
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
</nav>
```

### `<main>` - Main Content
The primary content of the page. **Only one per page!**

```html
<main>
  <h1>Main Content Area</h1>
  <p>This is the main focus of the page.</p>
</main>
```

### `<footer>` - Page or Section Footer
Contains footer information, copyright, contact info.

```html
<footer>
  <p>&copy; 2025 My Website. All rights reserved.</p>
</footer>
```

## 📦 Content Sectioning Elements

### `<article>` - Independent Content
Content that could stand alone (blog post, news article, product card).

```html
<article>
  <h2>My First Blog Post</h2>
  <p>Published on January 1, 2025</p>
  <p>This is the content of my blog post...</p>
</article>
```

### `<section>` - Thematic Grouping
Groups related content together by theme.

```html
<section>
  <h2>Our Services</h2>
  <p>We offer the following services...</p>
</section>
```

### `<aside>` - Tangentially Related Content
Sidebars, pull quotes, related links, ads.

```html
<aside>
  <h3>Related Articles</h3>
  <ul>
    <li><a href="#">Article 1</a></li>
    <li><a href="#">Article 2</a></li>
  </ul>
</aside>
```

## 🎯 Typical Page Structure

Here's how these elements work together:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Site</title>
</head>
<body>
  <header>
    <h1>Site Title</h1>
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
    </nav>
  </header>
  
  <main>
    <section>
      <h2>Section Title</h2>
      <article>
        <h3>Article Title</h3>
        <p>Article content...</p>
      </article>
    </section>
    
    <aside>
      <h3>Sidebar</h3>
      <p>Related content...</p>
    </aside>
  </main>
  
  <footer>
    <p>&copy; 2025 My Site</p>
  </footer>
</body>
</html>
```

## 🔤 Text-Level Semantic Elements

### `<strong>` vs `<b>`
- `<strong>` - **Important** text (semantic)
- `<b>` - **Bold** text (visual only)

```html
<p>This is <strong>very important</strong>!</p>
<p>This is <b>just bold</b>.</p>
```

### `<em>` vs `<i>`
- `<em>` - **Emphasized** text (semantic)
- `<i>` - *Italic* text (visual only)

```html
<p>I <em>really</em> mean it!</p>
<p>The book <i>Harry Potter</i> is great.</p>
```

### `<mark>` - Highlighted Text
Text that's highlighted or marked for reference.

```html
<p>Search results for <mark>HTML</mark> in documentation.</p>
```

### `<time>` - Date/Time
Represents dates and times in a machine-readable way.

```html
<p>Published on <time datetime="2025-01-15">January 15, 2025</time></p>
```

### `<code>` - Code Snippet
Represents computer code.

```html
<p>Use the <code>&lt;header&gt;</code> element for page headers.</p>
```

### `<kbd>` - Keyboard Input
Represents user keyboard input.

```html
<p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.</p>
```

### `<samp>` - Sample Output
Represents sample output from a program.

```html
<p>The program will output: <samp>Hello, World!</samp></p>
```

### `<var>` - Variable
Represents a variable in programming or math.

```html
<p>The equation is <var>x</var> = <var>y</var> + 5</p>
```

### `<abbr>` - Abbreviation
Represents an abbreviation or acronym.

```html
<p>I love <abbr title="HyperText Markup Language">HTML</abbr>!</p>
```

## 🎮 Complete Example: Gaming Blog

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Gaming News Blog</title>
</head>
<body>
  <header>
    <h1>🎮 Pro Gamer News</h1>
    <nav>
      <a href="#home">Home</a>
      <a href="#reviews">Reviews</a>
      <a href="#news">News</a>
      <a href="#about">About</a>
    </nav>
  </header>
  
  <main>
    <section>
      <h2>Latest Gaming News</h2>
      
      <article>
        <header>
          <h3>New Game Release: Space Adventure 2025</h3>
          <p>Posted on <time datetime="2025-01-15">January 15, 2025</time> by Alex</p>
        </header>
        
        <p>
          <strong>Breaking news!</strong> The highly anticipated 
          <em>Space Adventure 2025</em> launches next week.
        </p>
        
        <p>
          Players will explore over <mark>100 planets</mark> in this 
          massive open-world game.
        </p>
        
        <footer>
          <p>Tags: Space, Adventure, Open World</p>
        </footer>
      </article>
      
      <article>
        <header>
          <h3>Tournament Results: Champions Crowned</h3>
          <p>Posted on <time datetime="2025-01-14">January 14, 2025</time> by Jamie</p>
        </header>
        
        <p>
          The <abbr title="Electronic Sports">eSports</abbr> championship 
          concluded with an amazing final match!
        </p>
        
        <footer>
          <p>Tags: eSports, Tournament, Competition</p>
        </footer>
      </article>
    </section>
    
    <aside>
      <h3>Popular Articles</h3>
      <ul>
        <li><a href="#">Top 10 Games of 2025</a></li>
        <li><a href="#">Gaming Setup Guide</a></li>
        <li><a href="#">How to Go Pro</a></li>
      </ul>
      
      <h3>Quick Tip</h3>
      <p>Press <kbd>F11</kbd> for fullscreen mode in most games!</p>
    </aside>
  </main>
  
  <footer>
    <p>&copy; 2025 Pro Gamer News. All rights reserved.</p>
    <p>Contact: <a href="mailto:info@progamer.com">info@progamer.com</a></p>
  </footer>
</body>
</html>
```

## 📊 When to Use What?

| Element | Use When... |
|---------|-------------|
| `<header>` | Creating site/section headers with title, logo, nav |
| `<nav>` | Building navigation menus |
| `<main>` | Marking the primary content (once per page) |
| `<section>` | Grouping related content by theme |
| `<article>` | Content could stand alone (blog post, news item) |
| `<aside>` | Adding sidebars, related links, or tangential info |
| `<footer>` | Creating site/section footers with copyright, links |
| `<div>` | Styling or layout with no semantic meaning |
| `<span>` | Inline styling with no semantic meaning |

## ✅ Semantic HTML vs Divs

### When to Use Semantic Elements
```html
<!-- Good: Semantic structure -->
<article>
  <header>
    <h2>Article Title</h2>
  </header>
  <section>
    <p>Content...</p>
  </section>
  <footer>
    <p>Author info</p>
  </footer>
</article>
```

### When Divs Are Fine
```html
<!-- Good: Divs for pure layout/styling -->
<div class="card-container">
  <div class="card">
    <article>
      <h3>Actual content</h3>
    </article>
  </div>
</div>
```

**Rule of Thumb**: Use semantic elements for **content structure**, divs for **visual layout**.

## 🌟 Benefits of Semantic HTML

### 1. **Accessibility** ♿
Screen readers can navigate semantic elements:
- Jump to `<nav>` for navigation
- Skip to `<main>` for content
- Read `<article>` as independent items

### 2. **SEO** 🔍
Search engines understand page structure:
- `<header>` contains important page info
- `<article>` contains main content
- `<nav>` contains site navigation
- Better ranking in search results!

### 3. **Maintainability** 🔧
Code is easier to read and update:
```html
<!-- Clear what this is -->
<nav>...</nav>

<!-- What is this for? -->
<div class="navigation-menu">...</div>
```

### 4. **Team Collaboration** 👥
Other developers instantly understand your structure.

## 🎨 Visual Layout vs Semantic Structure

Remember: Semantic elements don't change how things **look**, they change what things **mean**.

```html
<!-- These look the same by default -->
<div>This is a div</div>
<section>This is a section</section>
<article>This is an article</article>

<!-- BUT they have different meanings! -->
```

**CSS** (Module 2) makes them look different!

## 📝 Article vs Section - The Confusion

### Use `<article>` when:
- Content could be distributed independently
- Could be syndicated (RSS feed)
- Self-contained unit
- Examples: Blog post, news article, product card, forum post

### Use `<section>` when:
- Grouping related content
- Thematic break in document
- Generic content grouping
- Examples: Chapter, tabbed content, themed area

### Can nest them!
```html
<article>
  <h2>Blog Post Title</h2>
  
  <section>
    <h3>Introduction</h3>
    <p>...</p>
  </section>
  
  <section>
    <h3>Main Points</h3>
    <p>...</p>
  </section>
  
  <section>
    <h3>Conclusion</h3>
    <p>...</p>
  </section>
</article>
```

## 🔧 Practical Guidelines

### DO:
- ✅ Use one `<main>` per page
- ✅ Use `<header>` and `<footer>` in pages AND articles
- ✅ Put navigation in `<nav>` elements
- ✅ Use `<article>` for independent content
- ✅ Use `<section>` to group related content
- ✅ Use semantic text elements (`<strong>`, `<em>`)
- ✅ Add `<aside>` for supplementary content

### DON'T:
- ❌ Use semantic elements just for styling
- ❌ Put `<main>` inside `<article>` (wrong order)
- ❌ Use multiple `<main>` elements
- ❌ Skip semantic elements when they apply
- ❌ Worry too much - divs are still okay for layout!

## 🎯 Quick Reference

### Page Structure
```html
<body>
  <header>Site header + nav</header>
  <main>
    Main content
    <section>Thematic grouping</section>
    <article>Independent content</article>
    <aside>Sidebar/related</aside>
  </main>
  <footer>Site footer</footer>
</body>
```

### Text Elements
```html
<strong>Important</strong>
<em>Emphasized</em>
<mark>Highlighted</mark>
<code>Code</code>
<time>Date/time</time>
<abbr>Abbreviation</abbr>
<kbd>Keyboard</kbd>
```

## 🚀 What's Next?

After semantic HTML, you'll:
- Complete the HTML Mini-Project (Lesson 1.10)
- Build a complete multi-page website
- Use everything you've learned
- Move to CSS for styling (Module 2)

Semantic HTML is the **professional way** to structure websites. Master it and your code will be cleaner, more accessible, and easier to maintain!

---

**Remember**: Good HTML structure is like organizing a book with chapters, sections, and clear labels. It helps everyone understand and use your content better! 📚✨
