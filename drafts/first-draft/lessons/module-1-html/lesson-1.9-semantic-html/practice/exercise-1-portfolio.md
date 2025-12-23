# Exercise 1: Personal Portfolio Page

## 🎯 Objective
Create a personal portfolio page using proper semantic HTML structure.

## 📋 Requirements

Build a single-page portfolio with the following sections:

### 1. Header Section
- Site header with your name as `<h1>`
- Navigation menu with links to:
  - About
  - Projects
  - Skills
  - Contact
- Use `<header>` and `<nav>` elements

### 2. Main Content
Wrap all main content in a `<main>` element, containing:

#### About Section
- Use `<section>` element with id="about"
- Section heading: "About Me"
- Paragraph introducing yourself
- Use `<strong>` and `<em>` for emphasis where appropriate

#### Projects Section
- Use `<section>` element with id="projects"
- Section heading: "My Projects"
- Create 3 project cards, each as an `<article>`:
  - Project name (h3)
  - Brief description
  - Technologies used (use `<code>` tags)
  - Completion date (use `<time>` element)

#### Skills Section
- Use `<section>` element with id="skills"
- Section heading: "Skills"
- List of skills you're learning or want to learn
- Use `<strong>` to highlight proficiency levels

#### Contact Section
- Use `<section>` element with id="contact"
- Section heading: "Get in Touch"
- Email address (use `<a href="mailto:...">`)
- Social media links (if desired)

### 3. Aside (Optional Sidebar)
- Use `<aside>` element
- Add "Fun Facts" about yourself
- Add "Currently Learning" section
- Add "Favorite Quote" using `<blockquote>`

### 4. Footer Section
- Use `<footer>` element
- Copyright notice with current year
- "Made with ❤️ and HTML" message

## ✨ Bonus Challenges

1. Add `<mark>` to highlight important information
2. Use `<kbd>` to show keyboard shortcuts you use
3. Add `<abbr>` for any abbreviations (HTML, CSS, etc.)
4. Include a `<time>` element for when the page was last updated
5. Use proper heading hierarchy (h1 → h2 → h3)
6. Add meaningful IDs to sections for navigation

## 💡 Tips

- Start with the overall structure (header, main, footer)
- Build each section one at a time
- Use semantic elements even if you don't see visual differences yet
- Think about what each part *means*, not just how it looks
- Proper structure helps with accessibility and SEO

## 📦 Starter Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name - Portfolio</title>
</head>
<body>
    <!-- Header with navigation -->
    
    <!-- Main content -->
    
    <!-- Optional sidebar -->
    
    <!-- Footer -->
</body>
</html>
```

## 🎨 Content Suggestions

If you need ideas for content:

**About**: Talk about your interests, why you're learning web development, what you enjoy doing.

**Projects**: 
1. "HTML Practice Site" - Learning HTML fundamentals
2. "Game List Page" - Favorite games with tables
3. "Recipe Collection" - Family recipes with semantic structure

**Skills**:
- HTML (Learning)
- CSS (Coming soon)
- JavaScript (Future goal)
- Gaming (Expert! 🎮)

**Fun Facts**:
- Favorite game
- Favorite food
- Dream job
- Superpower you wish you had

## ✅ Checklist

Before you finish, make sure:
- [ ] Used `<header>` for page header
- [ ] Used `<nav>` for navigation
- [ ] Used `<main>` for main content (only once!)
- [ ] Used `<section>` for each major section
- [ ] Used `<article>` for project cards
- [ ] Used `<aside>` for sidebar (if included)
- [ ] Used `<footer>` for page footer
- [ ] Used `<strong>` and `<em>` appropriately
- [ ] Used `<time>` for dates
- [ ] Used `<code>` for technology names
- [ ] All sections have appropriate headings
- [ ] Navigation links work (use #id)

Good luck! Make it about YOU! 🌟
