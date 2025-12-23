# Lesson 1.9: Semantic HTML

Welcome to Lesson 1.9! Learn to use meaningful HTML tags that describe your content.

---

## \ud83c\udfaf What You'll Learn

- Understand semantic HTML
- Use `<header>`, `<nav>`, `<main>`, `<footer>`
- Use `<article>`, `<section>`, `<aside>`
- Build accessible, meaningful pages
- Understand why semantics matter

---

## \ud83e\udde0 What is Semantic HTML?

**Semantic** = Meaningful

Semantic tags describe what content IS, not just how it looks.

### Generic vs Semantic

```html
<!-- \u274c Generic (unclear) -->
<div id="header">...</div>
<div id="nav">...</div>
<div id="main">...</div>

<!-- \u2705 Semantic (clear meaning) -->
<header>...</header>
<nav>...</nav>
<main>...</main>
```

---

## \ud83c\udfd7\ufe0f Main Semantic Tags

| Tag | Purpose |
|-----|---------|
| `<header>` | Top section, logo, title |
| `<nav>` | Navigation links |
| `<main>` | Main content |
| `<article>` | Self-contained content |
| `<section>` | Thematic grouping |
| `<aside>` | Sidebar content |
| `<footer>` | Bottom section |

---

## \ud83c\udfdb\ufe0f Page Structure

```html
<!DOCTYPE html>
<html>
<head>
  <title>Semantic Page</title>
</head>
<body>
  <header>
    <h1>My Website</h1>
  </header>
  
  <nav>
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
  </nav>
  
  <main>
    <article>
      <h2>Article Title</h2>
      <p>Content...</p>
    </article>
  </main>
  
  <footer>
    <p>&copy; 2025</p>
  </footer>
</body>
</html>
```

---

## \ud83c\udd7e\ufe0f Why Use Semantic HTML?

1. **Accessibility** - Screen readers understand structure
2. **SEO** - Search engines understand content better
3. **Maintainability** - Code is easier to read
4. **Best Practice** - Professional standard

---

## \u2705 Success Checklist

- [ ] Use semantic tags instead of divs
- [ ] Understand each tag's purpose
- [ ] Build accessible page structures
- [ ] Know when to use each semantic element

---

## \ud83d\udcdd Practice Exercises

**Exercise 1:** Convert divs to semantic tags  
**Exercise 2:** Build semantic blog page  
**Exercise 3:** Create complete semantic website

---

**Outstanding!** \ud83c\udf89 You're writing professional, accessible HTML!
