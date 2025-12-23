# Lesson 1.7: Divs and Spans

Welcome to Lesson 1.7! Learn about container elements that help organize and group content.

---

## \ud83c\udfaf What You'll Learn

- Use `<div>` to group block-level content
- Use `<span>` to group inline content  
- Understand block vs inline elements
- Organize page sections with divs
- Apply classes and IDs to containers

---

## \ud83d\udce6 What Are Containers?

**Containers** group related content together. They don't change how content looks by themselves, but they're essential for organization and styling (with CSS later).

### The Two Main Containers

| Element | Type | Use For |
|---------|------|---------|
| `<div>` | Block | Sections, groups of elements |
| `<span>` | Inline | Small parts of text |

---

## \ud83d\udcca The `<div>` Element

**Div** = Division (a section or group)

```html
<div>
  <h2>About Me</h2>
  <p>This is the about section...</p>
</div>

<div>
  <h2>My Projects</h2>
  <p>Check out what I've built...</p>
</div>
```

**Key Points:**
- Block-level element (takes full width)
- Groups related content
- Can contain any other elements
- Used for page sections

---

## \u2728 The `<span>` Element

**Span** = A small inline container

```html
<p>I love <span>HTML</span> and <span>CSS</span>!</p>
<p>My favorite color is <span>blue</span>.</p>
```

**Key Points:**
- Inline element (doesn't break lines)
- For small portions of text
- Often used with CSS for styling
- Doesn't change appearance alone

---

## \ud83c\udd94 Using IDs and Classes

Add `id` and `class` attributes to identify containers:

### IDs (Unique)
```html
<div id="header">
  <h1>My Website</h1>
</div>

<div id="main-content">
  <p>Main content here...</p>
</div>
```

### Classes (Reusable)
```html
<div class="section">
  <h2>Section 1</h2>
</div>

<div class="section">
  <h2>Section 2</h2>
</div>
```

---

## \ud83c\udfe0 Organizing a Page

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <div id="header">
    <h1>Welcome</h1>
  </div>
  
  <div id="nav">
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
  </div>
  
  <div id="content">
    <div class="post">
      <h2>Blog Post 1</h2>
      <p>Content...</p>
    </div>
    <div class="post">
      <h2>Blog Post 2</h2>
      <p>Content...</p>
    </div>
  </div>
  
  <div id="footer">
    <p>&copy; 2025 My Site</p>
  </div>
</body>
</html>
```

---

## \u2705 Success Checklist

- [ ] Use divs to group sections
- [ ] Use spans for inline text
- [ ] Add IDs to unique elements
- [ ] Add classes to repeating elements
- [ ] Understand block vs inline

---

## \ud83d\udcdd Practice Exercises

**Exercise 1:** Organize a page with div sections  
**Exercise 2:** Use spans to highlight text  
**Exercise 3:** Build a complete organized page

---

## \ud83d\ude80 What's Next?

Lesson 1.8: Forms - Learn to collect user input!

---

**Great work!** \ud83c\udf89 You're organizing content like a pro!
