# Student Workspace - Lesson 1.7: Divs and Spans

Welcome to your practice workspace! This is where you'll practice organizing content with divs and spans.

## 📁 Your Files

Create your exercise files here:
- `about-me.html` - Exercise 1: Organized About Me page
- `game-cards.html` - Exercise 2: Game card collection
- `blog-post.html` - Exercise 3: Complete blog post structure

## 🚀 Getting Started

1. Create a new file in this folder
2. Start with the basic HTML structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Page</title>
</head>
<body>
    <div class="section">
        <h2>Section Title</h2>
        <p>Content here</p>
    </div>
</body>
</html>
```

## 💡 Quick Tips

### Understanding Divs
- Divs create **sections** on your page
- They start on a **new line**
- They take up the **full width**
- Use them to **group related content**

### Understanding Spans
- Spans target **specific words** or values
- They stay on the **same line**
- They only take up **needed space**
- Use them to **highlight** or **label** text

### Naming Classes
✅ Good names:
- `game-card`
- `user-profile`
- `post-header`
- `highlight`

❌ Bad names:
- `div1`
- `box`
- `thing`
- `section123`

## 📊 Div vs Span Quick Reference

```html
<!-- DIV: Creates sections (block) -->
<div class="game-info">
  <h3>Minecraft</h3>
  <p>Sandbox game</p>
</div>

<div class="game-info">
  <h3>Fortnite</h3>
  <p>Battle Royale</p>
</div>

<!-- SPAN: Highlights words (inline) -->
<p>
  My score is <span class="score">9850</span> points!
  Status: <span class="status">Online</span>
</p>
```

## 🔧 Basic Templates

### Simple Section Template
```html
<div class="section">
    <h2>Section Title</h2>
    <p>Content goes here</p>
</div>
```

### Card Template
```html
<div class="card">
    <div class="card-header">
        <h3>Card Title</h3>
    </div>
    
    <div class="card-body">
        <p>Card content</p>
    </div>
    
    <div class="card-footer">
        <p>Footer info</p>
    </div>
</div>
```

### Labeled Data Template
```html
<p>
    <span class="label">Name:</span> 
    <span class="value">Player123</span>
</p>
<p>
    <span class="label">Score:</span> 
    <span class="value">9850</span>
</p>
```

## 🎯 Exercise Quick Reference

### Exercise 1: About Me
- **File**: `about-me.html`
- **Goal**: 4 sections (Introduction, Hobbies, Favorites, Goals)
- **Tip**: Each section gets its own div with a class name

### Exercise 2: Game Cards
- **File**: `game-cards.html`
- **Goal**: 3+ game cards with consistent structure
- **Tip**: Copy the first card structure, then change the content

### Exercise 3: Blog Post
- **File**: `blog-post.html`
- **Goal**: Complete blog structure with header, post, sidebar, footer
- **Tip**: Work section by section - don't try to do it all at once!

## 🐛 Common Mistakes to Avoid

### ❌ Forgetting Closing Tags
```html
<!-- WRONG -->
<div class="section">
  <p>Content</p>
<!-- Missing </div> -->

<!-- CORRECT -->
<div class="section">
  <p>Content</p>
</div>
```

### ❌ Too Many Unnecessary Divs
```html
<!-- WRONG -->
<div>
  <div>
    <div>
      <p>Just one paragraph</p>
    </div>
  </div>
</div>

<!-- CORRECT -->
<div class="content">
  <p>Just one paragraph</p>
</div>
```

### ❌ Using Div When Span is Better
```html
<!-- WRONG -->
<p>
  My favorite color is <div>blue</div>
</p>

<!-- CORRECT -->
<p>
  My favorite color is <span class="favorite">blue</span>
</p>
```

### ❌ Poor Indentation
```html
<!-- WRONG - Hard to read -->
<div><div><p>Text</p></div></div>

<!-- CORRECT - Easy to read -->
<div>
  <div>
    <p>Text</p>
  </div>
</div>
```

## 🎨 Making Divs Visible (Optional)

Right now, divs are invisible. To see them while you work, you can add temporary borders:

```html
<div style="border: 2px solid blue; padding: 10px; margin: 10px;">
  <h2>Now I can see this div!</h2>
  <p>This makes it easier to understand structure</p>
</div>
```

Remove these styles when done - we'll learn CSS properly in Module 2!

## ✅ Testing Your Work

### Check Your Structure:
1. Open file in browser
2. Content should be organized and readable
3. All sections should appear (even if divs are invisible)
4. No broken layout

### Check Your Code:
- [ ] All divs have closing tags
- [ ] Class names are descriptive
- [ ] Indentation shows structure clearly
- [ ] Divs group related content
- [ ] Spans are used for inline text only

## 💭 Remember

**Why am I using divs if they're invisible?**
- They organize your content logically
- They prepare your page for CSS styling
- They make your code easier to understand
- Professional websites use them everywhere!

**When should I use a div?**
- To group related content into sections
- To create repeating patterns (like cards)
- To organize major page areas (header, content, footer)

**When should I use a span?**
- To highlight specific words
- To label data values
- To target small parts of text for styling

## 🚀 You've Got This!

Divs and spans might seem pointless now, but they're the foundation for beautiful web pages. In Module 2, we'll use CSS to make these containers look amazing with colors, spacing, and layouts. For now, focus on creating good, clean structure!

Happy coding! 🎉
