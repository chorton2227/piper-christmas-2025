# Exercise 2: News/Blog Website

## 🎯 Objective
Create a multi-article news or blog page with proper semantic structure and multiple content types.

## 📋 Requirements

Build a blog/news page with the following structure:

### 1. Site Header
- Use `<header>` element
- Site name/logo (h1): Choose a blog name (Gaming News, Tech Today, etc.)
- Tagline/description
- Navigation menu using `<nav>` with links:
  - Home
  - Latest
  - Categories
  - About
  - Contact

### 2. Main Content Area
Wrap in `<main>` element with:

#### Featured Article Section
- Use `<section id="featured">`
- Section heading: "Featured Story"
- One `<article>` element containing:
  - Article header with title (h2), author, and date
  - Multiple paragraphs of content
  - Use `<strong>`, `<em>`, and `<mark>` for emphasis
  - Article footer with tags/categories

#### Recent Articles Section
- Use `<section id="recent">`
- Section heading: "Recent Articles"
- 4 article cards, each as an `<article>`:
  - Article title (h3)
  - Publication date using `<time datetime="...">`
  - Author name using `<strong>`
  - Brief excerpt (1-2 paragraphs)
  - Footer with metadata (tags, comment count, etc.)

#### Categories Section
- Use `<section id="categories">`
- Section heading: "Browse by Category"
- List of categories as links
- Use `<strong>` to show post counts

### 3. Sidebar (Aside)
- Use `<aside>` element
- Multiple sections within aside:

**Popular Posts**
- Section with h3 heading
- Ordered list of top 5 posts

**About This Blog**
- Section with h3 heading
- Short description
- Use `<abbr>` for any abbreviations

**Newsletter Signup**
- Section with h3 heading
- Description of newsletter
- Simple form (name, email, submit button)

**Quick Tip**
- Section with h3 heading
- Helpful tip using `<mark>` to highlight

### 4. Site Footer
- Use `<footer>` element
- Three columns of information:
  - About section
  - Quick links (using `<nav>`)
  - Social media links
- Copyright notice
- Last updated date using `<time>`

## ✨ Bonus Challenges

1. Add `<code>` examples if writing about tech
2. Use `<kbd>` to show keyboard shortcuts
3. Add `<blockquote>` for quotes within articles
4. Use `<cite>` for source citations
5. Add `<small>` for fine print
6. Use nested `<section>` elements within articles
7. Add proper `datetime` attributes to all `<time>` elements
8. Create article headers and footers using `<header>` and `<footer>` within articles

## 💡 Content Ideas

### Article Topics:
1. **Featured**: "The Evolution of Open-World Games"
2. **Recent**:
   - "Top 5 Indie Games of 2025"
   - "Gaming Setup on a Budget"
   - "How to Improve Your Gaming Skills"
   - "The Future of Virtual Reality Gaming"

### Categories:
- Reviews (42 posts)
- Tutorials (31 posts)
- News (89 posts)
- Opinions (27 posts)
- Guides (54 posts)

### Sidebar Content:
- Popular posts
- About the blogger
- Newsletter signup
- Quick tips
- Tag cloud

## 📝 Article Structure Template

Each article should follow this structure:

```html
<article>
    <header>
        <h3>Article Title</h3>
        <p>
            By <strong>Author Name</strong> | 
            <time datetime="2025-01-15">January 15, 2025</time>
        </p>
    </header>
    
    <p>Article content goes here...</p>
    
    <footer>
        <p>Tags: Gaming, Reviews, 2025</p>
    </footer>
</article>
```

## 🎯 Semantic Element Goals

This exercise should use:
- [ ] 1 `<header>` (page header)
- [ ] 1 `<nav>` (main navigation)
- [ ] 1 `<main>` (main content)
- [ ] 3+ `<section>` elements
- [ ] 5+ `<article>` elements (1 featured + 4 recent)
- [ ] Multiple `<header>` and `<footer>` within articles
- [ ] 1 `<aside>` (sidebar)
- [ ] 1 `<footer>` (page footer)
- [ ] Multiple `<strong>`, `<em>`, `<mark>` uses
- [ ] Multiple `<time>` elements with datetime attributes
- [ ] At least one `<abbr>`
- [ ] Proper heading hierarchy (h1 → h2 → h3)

## 📦 Starter Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Blog Name</title>
</head>
<body>
    <header>
        <!-- Site header and navigation -->
    </header>
    
    <main>
        <section id="featured">
            <!-- Featured article -->
        </section>
        
        <section id="recent">
            <!-- Recent articles -->
        </section>
        
        <section id="categories">
            <!-- Categories -->
        </section>
    </main>
    
    <aside>
        <!-- Sidebar content -->
    </aside>
    
    <footer>
        <!-- Page footer -->
    </footer>
</body>
</html>
```

## ✅ Quality Checklist

- [ ] Proper semantic structure throughout
- [ ] All articles have header and footer
- [ ] Dates use `<time>` with datetime attribute
- [ ] Emphasis elements used meaningfully (not just styling)
- [ ] Navigation is in `<nav>` elements
- [ ] Sidebar uses `<aside>`
- [ ] Each section has a clear heading
- [ ] Content is realistic and complete
- [ ] IDs match navigation links
- [ ] No divs used where semantic elements fit
- [ ] Proper nesting (articles can have headers/footers/sections)

## 🎨 Think About

- How would a screen reader navigate this?
- What would Google understand about this content?
- Is it clear what each part means?
- Could another developer understand this structure?

Good luck creating your blog! 📝✨
