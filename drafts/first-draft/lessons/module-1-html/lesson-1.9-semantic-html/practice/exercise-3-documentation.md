# Exercise 3: Documentation Website

## 🎯 Objective
Create a technical documentation page with complex structure, code examples, and comprehensive use of semantic elements.

## 📋 Requirements

Build a documentation site for teaching HTML (meta, right?!) with:

### 1. Site Header
- Use `<header>` element
- Logo/Title: "HTML Documentation" (h1)
- Version number: "v5.0" using `<small>`
- Navigation with `<nav>`:
  - Getting Started
  - Elements
  - Attributes
  - Best Practices
  - Search

### 2. Main Documentation Area
Use `<main>` element containing:

#### Introduction Section
- Use `<section id="intro">`
- Heading: "Getting Started with HTML"
- Welcome paragraph using `<strong>` and `<em>`
- "What you'll learn" list
- Last updated: <time> element

#### Elements Reference Section
- Use `<section id="elements">`
- Heading: "HTML Elements"
- Multiple `<article>` elements, one for each HTML element documented

**Each Article Should Include**:
- Element name as heading (h3)
- Description paragraph
- Code example using `<code>` and `<pre>`
- When to use it
- Example output
- Attributes list (if applicable)
- Browser support info using `<small>`

**Document These Elements** (minimum 5):
1. `<header>` element
2. `<nav>` element
3. `<article>` element
4. `<section>` element
5. `<strong>` element
6. Bonus: `<time>`, `<code>`, `<mark>`, `<abbr>`

#### Best Practices Section
- Use `<section id="best-practices">`
- Heading: "Best Practices"
- Multiple subsections, each as `<section>`:
  - Accessibility Tips
  - SEO Guidelines
  - Code Organization
  - Common Mistakes

**Use These Elements**:
- `<strong>` for DO's
- `<mark>` to highlight important points
- `<code>` for code examples
- `<kbd>` for keyboard shortcuts
- `<blockquote>` for expert quotes

#### Examples Section
- Use `<section id="examples">`
- Heading: "Complete Examples"
- 2-3 `<article>` elements with full page examples
- Each example shows:
  - What it demonstrates
  - Full code using `<pre>` and `<code>`
  - Explanation of structure
  - Key takeaways using `<mark>`

### 3. Quick Reference Sidebar
- Use `<aside>` element
- Multiple helpful sections:

**Table of Contents**
- Auto-generated links to all sections
- Use nested lists for subsections

**Quick Tips**
- Section with useful tips
- Use `<mark>` for emphasis

**Keyboard Shortcuts**
- List of editor shortcuts using `<kbd>`
- Example: <kbd>Ctrl</kbd> + <kbd>S</kbd> to save

**Related Resources**
- External links
- Use `<cite>` for resource names

**Terminology**
- Common terms with `<abbr>` tags
- Hover to see full meaning

### 4. Page Footer
- Use `<footer>` element
- Documentation info:
  - Version and last updated date
  - Contributors
  - License information using `<small>`
  - Links to GitHub, feedback form
  - Copyright notice

## ✨ Bonus Challenges

1. **Advanced Code Examples**
   - Use `<pre>` for formatted code blocks
   - Show both HTML and expected output
   - Add line numbers using ordered lists

2. **Interactive Elements**
   - Add "Try it yourself" sections
   - Include forms for testing

3. **Comparison Tables**
   - Create tables comparing semantic vs non-semantic
   - Use `<thead>`, `<tbody>`, `<tfoot>`

4. **Nested Structures**
   - Show complex nesting examples
   - Article within section within main

5. **Comprehensive Text Semantics**
   - Use `<var>` for variables
   - Use `<samp>` for output
   - Use `<del>` and `<ins>` for changes
   - Use `<sub>` and `<sup>` where appropriate

## 📝 Code Example Format

Each element documentation should follow this structure:

```html
<article id="element-header">
    <header>
        <h3>&lt;header&gt; Element</h3>
        <p>Category: Sectioning | <abbr title="HyperText Markup Language">HTML</abbr>5</p>
    </header>
    
    <section>
        <h4>Description</h4>
        <p>
            The <code>&lt;header&gt;</code> element represents <strong>introductory content</strong>
            for its nearest ancestor sectioning content or sectioning root element.
        </p>
    </section>
    
    <section>
        <h4>Example</h4>
        <pre><code>&lt;header&gt;
    &lt;h1&gt;Site Title&lt;/h1&gt;
    &lt;nav&gt;...&lt;/nav&gt;
&lt;/header&gt;</code></pre>
    </section>
    
    <section>
        <h4>When to Use</h4>
        <ul>
            <li>Page headers with site title and navigation</li>
            <li>Article headers with title and metadata</li>
            <li>Section headers with introductory content</li>
        </ul>
    </section>
    
    <footer>
        <p><small>Supported in all modern browsers | Last updated: <time datetime="2025-01-15">Jan 15, 2025</time></small></p>
    </footer>
</article>
```

## 🎯 Semantic Element Goals

This exercise should use **EVERY semantic element learned**:

### Structure Elements
- [ ] `<header>` (multiple: page, articles, sections)
- [ ] `<nav>` (multiple: main, footer, sidebar)
- [ ] `<main>` (once)
- [ ] `<section>` (many: major sections and subsections)
- [ ] `<article>` (many: each element documentation)
- [ ] `<aside>` (sidebar)
- [ ] `<footer>` (multiple: page, articles)

### Text-Level Elements
- [ ] `<strong>` (important information)
- [ ] `<em>` (emphasized text)
- [ ] `<mark>` (highlighted key points)
- [ ] `<code>` (element names, code examples)
- [ ] `<pre>` (code blocks)
- [ ] `<kbd>` (keyboard shortcuts)
- [ ] `<samp>` (sample output)
- [ ] `<var>` (variables)
- [ ] `<time>` (dates)
- [ ] `<abbr>` (abbreviations)
- [ ] `<blockquote>` (quotes)
- [ ] `<cite>` (citations)
- [ ] `<small>` (fine print)

## 💡 Content Suggestions

### Introduction Content:
- What is HTML?
- Why semantic HTML matters
- What you'll learn
- Prerequisites (none!)

### Best Practices Subsections:

**Accessibility**
- Always use labels with forms
- Provide alt text for images
- Use proper heading hierarchy
- Semantic elements help screen readers

**SEO**
- Proper heading structure
- Meaningful content hierarchy
- Semantic elements improve indexing
- Use time elements for dates

**Code Organization**
- Consistent indentation
- Meaningful element choices
- Comments for complex sections
- Proper nesting

**Common Mistakes**
- Using div for everything
- Missing labels on forms
- Multiple main elements
- Wrong heading order

### Expert Quotes:
```html
<blockquote>
    <p>
        "Semantic HTML is the foundation of accessible and 
        maintainable web development."
    </p>
    <footer>— <cite>Web Development Best Practices</cite></footer>
</blockquote>
```

## 📦 Starter Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Documentation</title>
</head>
<body>
    <header>
        <!-- Site header with nav -->
    </header>
    
    <main>
        <section id="intro">
            <!-- Introduction -->
        </section>
        
        <section id="elements">
            <!-- Element documentation articles -->
        </section>
        
        <section id="best-practices">
            <!-- Best practices subsections -->
        </section>
        
        <section id="examples">
            <!-- Complete examples -->
        </section>
    </main>
    
    <aside>
        <!-- Sidebar with TOC and quick reference -->
    </aside>
    
    <footer>
        <!-- Page footer -->
    </footer>
</body>
</html>
```

## ✅ Quality Checklist

### Structure
- [ ] Proper nesting throughout
- [ ] Clear semantic hierarchy
- [ ] Articles have headers and footers
- [ ] Sections have clear headings
- [ ] Only one `<main>` element
- [ ] Multiple `<nav>` used appropriately

### Text Semantics
- [ ] `<code>` used for all HTML element names
- [ ] `<kbd>` used for keyboard shortcuts
- [ ] `<time>` used with datetime attributes
- [ ] `<abbr>` used with title attributes
- [ ] `<strong>` and `<em>` used meaningfully
- [ ] `<mark>` highlights important points

### Code Examples
- [ ] All code is in `<code>` tags
- [ ] Multi-line code uses `<pre><code>`
- [ ] Code is properly escaped (&lt; &gt;)
- [ ] Examples are complete and correct

### Content Quality
- [ ] Each element documented thoroughly
- [ ] Examples are clear and helpful
- [ ] Best practices are actionable
- [ ] Navigation links work
- [ ] Content is well-organized

## 🎨 This is the ULTIMATE Test!

This exercise combines:
- Complex structure (nested sections, articles)
- Every semantic element
- Proper code examples
- Real documentation patterns
- Comprehensive content

If you can complete this exercise well, you've **mastered semantic HTML**! 🎉

Take your time, build section by section, and test frequently.

Good luck! 📚✨
