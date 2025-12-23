# 📚 Detailed Module Breakdown

This document provides comprehensive details for each module and lesson, including learning objectives, topics covered, activities, and practice exercises.

---

## 🏗️ Module 1: HTML Foundations

**Goal:** Master the building blocks of the web - HTML structure and semantics

**Duration:** 9 lessons + mini project  
**Prerequisites:** None - perfect for complete beginners  
**Outcome:** Build a complete multi-page website with proper HTML structure

---

### Lesson 1.1: What is HTML?
**Concept:** Understanding HTML and how browsers work

**Learning Objectives:**
- Understand what HTML stands for and its purpose
- Learn how browsers read and display HTML
- Identify the parts of an HTML element (tags, content, attributes)
- Write your first HTML code

**Topics Covered:**
- HTML = HyperText Markup Language
- HTML is the skeleton/structure of websites
- Tags, elements, and attributes
- Opening and closing tags
- Basic document structure (DOCTYPE, html, head, body)

**Activities:**
- View source code of a favorite website
- Inspect elements in browser dev tools
- Write first `<h1>Hello World!</h1>`

**Practice Exercises:**
- Exercise 1: Create "my-first-page.html" with a heading
- Exercise 2: Add multiple headings and explore tag nesting
- Exercise 3: Build a simple two-page site linked together

---

### Lesson 1.2: Headings & Paragraphs
**Concept:** Organizing and structuring text content

**Learning Objectives:**
- Use all six heading levels (h1-h6) correctly
- Understand heading hierarchy and when to use each level
- Write paragraphs and control text spacing
- Apply basic text formatting (bold, italic, emphasis)

**Topics Covered:**
- `<h1>` through `<h6>` - heading hierarchy
- One `<h1>` per page rule
- Don't skip heading levels
- `<p>` for paragraphs
- `<br>` for line breaks
- `<strong>` and `<em>` for emphasis
- `<hr>` for thematic breaks

**Activities:**
- Create a properly structured article outline
- Compare good vs bad heading hierarchy
- Format a story with headings and paragraphs

**Practice Exercises:**
- Exercise 1: Build a blog post with proper heading structure
- Exercise 2: Fix a page with incorrect heading hierarchy
- Exercise 3: Create "About Me" page with headings and text

---

### Lesson 1.3: Lists  
**Concept:** Organizing items in structured lists

**Learning Objectives:**
- Create unordered (bullet) lists with `<ul>`
- Create ordered (numbered) lists with `<ol>`
- Understand when to use each list type
- Nest lists inside other lists
- Use description lists for term/definition pairs

**Topics Covered:**
- `<ul>` - unordered list (bullets)
- `<ol>` - ordered list (numbers)
- `<li>` - list items
- Nesting lists for sub-items
- `<dl>`, `<dt>`, `<dd>` - description lists

**Activities:**
- Create a shopping list (unordered)
- Create recipe steps (ordered)
- Build a nested list of categories and items
- Make a glossary with description lists

**Practice Exercises:**
- Exercise 1: My favorite things (unordered and ordered lists)
- Exercise 2: Nested categories (hobbies with sub-items)
- Exercise 3: Build a glossary with description lists

---

### Lesson 1.4: Links
**Concept:** Connecting pages and creating navigation

**Learning Objectives:**
- Create external links to other websites
- Link between pages in your site (internal links)
- Use anchor links to jump within a page
- Create email and phone links
- Write accessible, descriptive link text
- Understand link attributes (href, target, rel)

**Topics Covered:**
- `<a>` tag with `href` attribute
- Absolute URLs (full web addresses)
- Relative URLs (links within your site)
- `target="_blank"` for new tabs (with `rel="noopener"`)
- Email links: `mailto:`
- Phone links: `tel:`
- Anchor links with `id` and `#`
- Skip links for accessibility
- Good vs bad link text

**Activities:**
- Create links to favorite websites
- Build multi-page navigation
- Add table of contents with anchor links
- Create contact page with email/phone links

**Practice Exercises:**
- Exercise 1: Build home and about pages with navigation
- Exercise 2: Add anchor links for in-page navigation
- Exercise 3: Create contact links (email and phone)

---

### Lesson 1.5: Images
**Concept:** Adding visual content to web pages

**Learning Objectives:**
- Add images with the `<img>` tag
- Write descriptive alt text for accessibility
- Control image size with width and height
- Understand different image formats (jpg, png, gif, svg)
- Use `<figure>` and `<figcaption>` for images with captions
- Link images and create image links

**Topics Covered:**
- `<img>` tag with `src` attribute
- `alt` text - why it matters and how to write it
- `width` and `height` attributes
- Image file formats and when to use each
- `<figure>` and `<figcaption>` for semantic images
- Responsive images basics
- Image accessibility best practices

**Activities:**
- Add images to existing pages
- Write alt text for different image types
- Create a photo gallery with captions
- Make clickable image links

**Practice Exercises:**
- Exercise 1: Add images with proper alt text
- Exercise 2: Build a photo gallery with figures and captions
- Exercise 3: Create an image-based navigation menu

---

### Lesson 1.6: Tables
**Concept:** Organizing data in rows and columns

**Learning Objectives:**
- Build data tables with proper structure
- Use table headers for accessibility
- Organize tables with thead, tbody, and tfoot
- Span columns and rows when needed
- Understand when to use tables (data, not layout!)

**Topics Covered:**
- `<table>` - table container
- `<tr>` - table row
- `<th>` - table header cell
- `<td>` - table data cell
- `<thead>`, `<tbody>`, `<tfoot>` - table sections
- `colspan` and `rowspan` attributes
- `<caption>` for table titles
- Table accessibility with scope attribute

**Activities:**
- Create a class schedule table
- Build a game statistics table
- Make a comparison table

**Practice Exercises:**
- Exercise 1: Build a weekly schedule
- Exercise 2: Create a product comparison table
- Exercise 3: Make a scoreboard with proper headers

---

### Lesson 1.7: Divs & Spans
**Concept:** Grouping and organizing content for structure and styling

**Learning Objectives:**
- Use `<div>` for block-level organization
- Use `<span>` for inline organization
- Understand when to use divs vs semantic elements
- Prepare content structure for CSS styling
- Organize page sections logically

**Topics Covered:**
- `<div>` - block-level container
- `<span>` - inline container
- The difference between block and inline
- When divs are appropriate vs semantic HTML
- Using classes and IDs for organization
- Preparing structure for CSS

**Activities:**
- Organize existing pages with divs
- Group related content into sections
- Add classes to plan styling

**Practice Exercises:**
- Exercise 1: Organize "About Me" page with divs
- Exercise 2: Group content by theme
- Exercise 3: Prepare page structure for future styling

---

### Lesson 1.8: Forms
**Concept:** Getting input from users

**Learning Objectives:**
- Build forms with proper structure
- Use all common input types
- Label inputs for accessibility
- Group related fields with fieldset and legend
- Understand form attributes (action, method)
- Create buttons and submit controls

**Topics Covered:**
- `<form>` element and attributes
- `<input>` types: text, email, number, password, checkbox, radio, date, file
- `<label>` for accessibility
- `<textarea>` for multi-line text
- `<select>` and `<option>` for dropdowns
- `<button>` element
- `<fieldset>` and `<legend>` for grouping
- Required fields and basic validation attributes

**Activities:**
- Build a contact form
- Create a survey form
- Make a simple registration form
- Add form validation attributes

**Practice Exercises:**
- Exercise 1: Contact form with name, email, message
- Exercise 2: Survey with different input types
- Exercise 3: Registration form with validation

---

### Lesson 1.9: Semantic HTML
**Concept:** Using meaningful HTML for better structure and accessibility

**Learning Objectives:**
- Understand what semantic HTML means
- Use structural elements (header, nav, main, footer)
- Use content elements (article, section, aside)
- Understand the benefits of semantic markup
- Convert generic divs to semantic elements

**Topics Covered:**
- What "semantic" means in HTML
- `<header>` - page or section header
- `<nav>` - navigation links
- `<main>` - main page content
- `<footer>` - page or section footer
- `<article>` - self-contained content
- `<section>` - thematic grouping
- `<aside>` - tangential content
- Why semantic HTML matters for accessibility and SEO

**Activities:**
- Identify semantic structure in real websites
- Convert div-based layout to semantic HTML
- Build a blog post with proper semantic structure

**Practice Exercises:**
- Exercise 1: Mark up a blog post with semantic tags
- Exercise 2: Convert a div-based page to semantic HTML
- Exercise 3: Build a complete page with all semantic elements

---

### 🎨 Mini Project: Multi-Page Website
**Concept:** Combine all HTML skills into a complete project

**Requirements:**
- At least 3 pages (Home, About, Contact) with working navigation
- Proper heading hierarchy on all pages
- Multiple types of lists
- Internal and external links
- At least 3 images with alt text
- At least one table
- A contact form with multiple input types
- Semantic HTML structure throughout
- Clean, well-organized code

**Bonus Challenges:**
- Add a fourth page (Projects, Blog, Gallery, etc.)
- Include anchor navigation on longer pages
- Use figures with captions for images
- Add a favicon
- Validate HTML with W3C validator

**Assessment Criteria:**
- Correct HTML syntax (no errors)
- Proper semantic structure
- Accessible (alt text, labels, headings)
- Working links and navigation
- Clean, organized code
- Creativity and polish

---

## 🎨 Module 2: CSS Essentials

**Goal:** Transform HTML structure into beautiful visual designs

**Duration:** 10 lessons + mini project  
**Prerequisites:** Module 1 - HTML Foundations  
**Outcome:** Fully styled, responsive website with custom theme

### Lesson Outline:
- 2.1 What is CSS? - Syntax, selectors, how CSS works with HTML
- 2.2 CSS Selectors - Element, class, ID, combinators, specificity
- 2.3 Colors & Backgrounds - Color formats, gradients, background images
- 2.4 Typography & Text - Fonts, sizes, spacing, web fonts
- 2.5 The Box Model - Padding, margin, border, sizing
- 2.6 Flexbox Layouts - Flexible box layouts, alignment, distribution
- 2.7 Grid Layouts - Two-dimensional layouts, areas, templates
- 2.8 Responsive Design - Media queries, mobile-first, breakpoints
- 2.9 Transitions & Animations - Smooth interactions, reduced motion
- 2.10 CSS Variables & Theming - Custom properties, theme switching

**Mini Project:** Style Module 1 website with responsive design and dark mode toggle

**Assessment:** Design rubric + accessibility audit

---

## ⚡ Module 3: JavaScript Fundamentals

**Goal:** Add interactivity and dynamic behavior to websites

**Duration:** 10 lessons + mini project  
**Prerequisites:** Modules 1-2  
**Outcome:** Interactive website with dynamic features

### Lesson Outline:
- 3.1 JavaScript Basics - What is JS, where it runs, first script
- 3.2 Variables & Data Types - let, const, strings, numbers, booleans
- 3.3 Functions - Declarations, expressions, arrow functions, parameters
- 3.4 Control Flow - if/else, switch, ternary operator
- 3.5 Arrays & Objects - Creating, accessing, modifying, methods
- 3.6 DOM Manipulation - Selecting elements, changing content/styles
- 3.7 Events & Listeners - Click, input, keyboard, mouse events
- 3.8 Forms & Validation - Reading form data, custom validation
- 3.9 Local Storage - Saving data in the browser
- 3.10 Async & Fetch - Loading data, promises, async/await

**Mini Project:** Add interactive features (form validation, FAQ accordion, gallery)

**Assessment:** Code review + functionality demo

---

## 🎮 Module 4: Game Building

**Goal:** Create interactive browser-based games

**Duration:** 7 lessons + capstone game  
**Prerequisites:** Modules 1-3  
**Outcome:** Playable web game with sound and animations

### Lesson Outline:
- 4.1 Game Loop & State - Update/render cycles, game state management
- 4.2 Rendering & Animations - Drawing to canvas, smooth animations
- 4.3 Input Handling - Keyboard, mouse, touch controls
- 4.4 Assets & Audio - Loading images/sounds, audio playback
- 4.5 Accessibility in Games - Reduced motion, captions, keyboard-only
- 4.6 Testing & Debugging - Testing strategies, common bugs
- 4.7 Final Integration & Polish - Putting it all together

**Capstone:** Complete playable game with all features

**Assessment:** Playtest + technical review + reflection

---

## 🚀 Module 5: Web Fundamentals Plus

**Goal:** Professional workflows and deployment

**Duration:** 6 lessons + portfolio  
**Prerequisites:** Modules 1-4  
**Outcome:** Live portfolio with deployed projects

### Lesson Outline:
- 5.1 Project Setup & Tooling - Code editors, linters, formatters
- 5.2 Git & GitHub - Version control basics, commits, repos
- 5.3 Publishing & Hosting - GitHub Pages, Netlify, custom domains
- 5.4 Performance & Assets - Optimizing images, caching, minification
- 5.5 Accessibility Auditing - Testing tools, WCAG guidelines
- 5.6 Documentation & Portfolios - READMEs, project showcases

**Capstone:** Published portfolio site with your best work

**Assessment:** Live site review + documentation quality

---

## 🎯 Cross-Cutting Practices

Throughout all modules, emphasis on:
- **Accessibility:** Semantic HTML, ARIA when needed, keyboard navigation, reduced motion
- **Best Practices:** Clean code, proper indentation, meaningful names
- **Documentation:** Comments, READMEs, clear explanations
- **Testing:** Validation, cross-browser testing, user testing
- **Consistency:** Shared styles, reusable components, design systems

---

## 📖 Resources

Each lesson includes:
- **README.md** - Comprehensive lesson content with examples
- **examples/** - Working code samples to study
- **practice/** - Hands-on exercises with success criteria
- **resources/cheatsheet.md** - Quick reference guide
- **resources/parent-guide.md** - Supporting adults/mentors
- **answer-key/** - Solution files for practice exercises
- **student-workspace/** - Starter files and workspace

---

## 📝 Notes

- Refer to `drafts/first-draft` for legacy examples to adapt, not copy
- All lessons emphasize accessibility and best practices
- Projects build on each other - each module enhances the previous work
- Code examples are progressively complex but always clearly explained
