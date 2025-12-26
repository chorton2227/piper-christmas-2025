# Lesson 2.1: What is CSS?

## 🎯 Learning Objectives
By the end of this lesson, you will:
- Understand what CSS is and why we need it
- Know the difference between HTML (structure) and CSS (style)
- Learn three ways to add CSS to HTML
- Create and link your first external stylesheet
- Apply basic styles to HTML elements

## 📚 What is CSS?

**CSS stands for Cascading Style Sheets**

Think of it this way:
- **HTML** is like the skeleton of a person - it provides the structure
- **CSS** is like the clothes, hair, and makeup - it makes everything look good!

Without CSS, all websites would look plain and boring - just black text on white backgrounds. CSS is what makes websites colorful, beautiful, and fun to look at!

## 🎨 What Can CSS Do?

CSS controls the **appearance** of everything on your web page:
- **Colors** - text colors, background colors
- **Fonts** - which fonts to use, how big the text is
- **Layout** - where things are positioned on the page
- **Spacing** - gaps between elements
- **Borders** - outlines around elements
- **Animations** - things that move or change
- And much more!

## 📝 Three Ways to Add CSS

There are **three different ways** to add CSS to your HTML. Let's learn about each one!

### 1️⃣ Inline CSS

You can add styles directly to an HTML element using the `style` attribute:

```html
<h1 style="color: blue;">This heading is blue</h1>
<p style="color: red; font-size: 20px;">This paragraph is red and bigger</p>
```

**Pros**: Quick to test
**Cons**: Hard to manage, mixes HTML and CSS, not recommended for real projects

### 2️⃣ Internal CSS

You can put CSS in a `<style>` tag inside the `<head>` of your HTML:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
    <style>
        h1 {
            color: blue;
        }
        p {
            color: red;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <h1>This heading is blue</h1>
    <p>This paragraph is red and bigger</p>
</body>
</html>
```

**Pros**: All CSS in one place in the file
**Cons**: Only works for that one HTML page

### 3️⃣ External CSS (Best Practice! ⭐)

You create a separate `.css` file and link it to your HTML:

**style.css:**
```css
h1 {
    color: blue;
}

p {
    color: red;
    font-size: 20px;
}
```

**index.html:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>This heading is blue</h1>
    <p>This paragraph is red and bigger</p>
</body>
</html>
```

**Pros**: 
- Keeps HTML and CSS separate
- One stylesheet can be used for multiple pages
- Easier to maintain and organize
- This is how professional developers do it!

**Cons**: None really - this is the best way!

## 🔗 Linking an External Stylesheet

To link a CSS file to your HTML, put this line in the `<head>` section:

```html
<link rel="stylesheet" href="style.css">
```

Let's break it down:
- `<link>` - the tag for linking external files
- `rel="stylesheet"` - tells the browser this is a CSS file
- `href="style.css"` - the path to your CSS file (like `src` for images!)

## 📖 CSS Syntax (How to Write CSS)

CSS has a simple pattern:

```css
selector {
    property: value;
    property: value;
}
```

Example:
```css
h1 {
    color: purple;
    font-size: 36px;
}
```

- **Selector** (`h1`) - which HTML element to style
- **Property** (`color`, `font-size`) - what you want to change
- **Value** (`purple`, `36px`) - what you want to change it to
- **Curly braces** `{ }` - surround all the styles for that selector
- **Semicolon** `;` - ends each style rule (like a period in a sentence)

## 💡 Important CSS Rules

1. **CSS is not case-sensitive** - `Color`, `color`, and `COLOR` all work (but lowercase is standard)
2. **Spelling matters** - `color: blue;` works, but `colour: blue;` doesn't (use American spelling)
3. **Semicolons are important** - always end style rules with `;`
4. **Comments** - you can add notes with `/* comment here */`

## 🎮 Let's Practice!

Now that you understand the basics, it's time to practice! Head over to the `practice` folder to complete the exercises.

## 📂 What's Next?

In the next lesson, we'll learn about **CSS Selectors** - different ways to target specific elements to style. You'll learn about classes and IDs, which give you much more control over your styling!

## 🌟 Key Takeaways

- CSS stands for **Cascading Style Sheets**
- CSS controls the **appearance** of your web pages
- There are **three ways** to add CSS: inline, internal, and external
- **External CSS** is the best practice - keep it in a separate `.css` file
- CSS syntax: `selector { property: value; }`
- Always link your stylesheet in the `<head>` with `<link rel="stylesheet" href="style.css">`

---

**Parent Guide**: See [resources/parent-guide.md](resources/parent-guide.md) for tips on helping your child through this lesson.

**Cheat Sheet**: Check [resources/cheatsheet.md](resources/cheatsheet.md) for a quick reference guide.
