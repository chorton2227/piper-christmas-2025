# Exercise 3 — Two-Page Website

## 🎯 Goal

Create your first multi-page website! You'll build two separate HTML pages and link them together so visitors can navigate between them.

**What you'll build:** A simple website with a home page and an about page, connected with links.

**Time:** 25-30 minutes

---

## 📋 Instructions

### Step 1: Create Your Home Page

Create a file called `welcome.html` in the `student-workspace` folder:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Welcome - My Website</title>
</head>
<body>
    <h1>Welcome to My Website!</h1>
    <p>Hi! I'm [Your Name] and this is my first multi-page website.</p>
    <p>I'm learning HTML and web development.</p>
</body>
</html>
```

**Replace `[Your Name]`** with your actual name!

### Step 2: Create Your About Page

Create a file called `about.html` in the same `student-workspace` folder:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>About Me - My Website</title>
</head>
<body>
    <h1>About Me</h1>
    <p>My name is [Your Name] and I'm learning web development.</p>
    
    <h2>My Interests</h2>
    <p>I enjoy [your hobbies here].</p>
    
    <h2>Why I'm Learning HTML</h2>
    <p>I want to learn HTML because [your reason].</p>
</body>
</html>
```

### Step 3: Add Navigation from Welcome to About

In `welcome.html`, add a link to the about page. Put this after your paragraphs:

```html
<p>Want to know more? <a href="about.html">Visit my About page</a>!</p>
```

**Breaking down the link:**
- `<a>` - Anchor tag (creates a link)
- `href="about.html"` - Where the link goes (the about page)
- `Visit my About page` - The clickable text

### Step 4: Add Navigation from About to Welcome

In `about.html`, add a link back to the home page. Put this at the end of the body:

```html
<p><a href="welcome.html">Return to Welcome page</a></p>
```

Now visitors can navigate back and forth!

### Step 5: Test Your Navigation

1. Open `welcome.html` in your browser
2. Click the link to the About page
3. You should see `about.html` load
4. Click the link back to Welcome
5. You should return to `welcome.html`

**Success:** You can click back and forth between pages!

---

## ✅ Success Check

Your website is complete when:

- [ ] You have TWO files: `welcome.html` and `about.html`
- [ ] Both files are in the same folder (`student-workspace`)
- [ ] Both pages have complete HTML structure (DOCTYPE, html, head, body)
- [ ] Both pages have unique, descriptive `<title>` tags
- [ ] `welcome.html` has at least one heading and two paragraphs
- [ ] `about.html` has multiple headings and paragraphs
- [ ] `welcome.html` has a link to `about.html`
- [ ] `about.html` has a link to `welcome.html`
- [ ] The link text is clear and descriptive (not just "click here")
- [ ] You can click between pages in your browser

**Test it:** 
- Open `welcome.html`
- Click the link to About — does it work?
- Click the link back to Welcome — does it work?
- Check the browser tab title changes on each page

---

## 🌟 Bonus Challenges

Want to take it further?

1. **Add a third page** - Create `contact.html` with placeholder contact info
2. **Create a navigation menu** - Add links to all pages at the top of every page
3. **Add more content** - Write more about yourself with additional sections
4. **Add images** - Include a photo on each page
5. **Link between more pages** - Connect all three pages in both directions

**Example navigation menu:**
```html
<nav>
    <a href="welcome.html">Home</a> |
    <a href="about.html">About</a> |
    <a href="contact.html">Contact</a>
</nav>
```

---

## 💭 Think About It

1. **What happens if you misspell the filename in the href?**
   - Try it: Change `href="about.html"` to `href="abut.html"` and click the link.

2. **Why must both files be in the same folder?**
   - Hint: The link says `about.html` with no path. Where does the browser look?

3. **Why is "Visit my About page" better link text than "click here"?**
   - Hint: Think about screen readers reading the page out loud.

4. **Could you link to pages on other websites?**
   - Hint: Try `href="https://www.example.com"`

5. **What if the files were in different folders?**
   - We'll learn about file paths in Lesson 1.4!

---

## 📖 Understanding Multi-Page Navigation

### How Internal Links Work

When you write `<a href="about.html">`, the browser:
1. Looks in the same folder as the current page
2. Finds `about.html`
3. Loads that page

This is called a **relative link** (relative to the current page).

### Good Link Text Examples:
✅ "Visit my About page"  
✅ "Read more about me"  
✅ "Return to Welcome page"  
✅ "Go to Contact page"

### Bad Link Text Examples:
❌ "Click here"  
❌ "Read more"  
❌ "This page"  
❌ "Link"

**Why?** Screen reader users often navigate by links only. "Click here" doesn't tell them where they're going!

---

## 🎉 Congratulations!

You've built your first multi-page website! This is a huge milestone. You now understand:
- How to create multiple HTML pages
- How to link pages together
- How navigation works on the web
- Why descriptive link text matters

**This is how every website works** - pages linked together!

**What you learned:**
- Creating multiple HTML files
- Linking pages with `<a href="...">`
- Internal navigation vs external links
- Importance of file organization
- Why link text matters for accessibility

**Next:** You're ready for Lesson 1.2 where you'll learn more about headings and paragraphs!

---

## 🆘 Troubleshooting

**Problem:** Link shows as text, not clickable
- **Solution:** Make sure you have both `<a href="...">` and `</a>` tags

**Problem:** Link is broken (404 error or "file not found")
- **Solution:** Check spelling! The filename in `href` must exactly match your actual filename
- Make sure both files are in the same folder
- Filenames are case-sensitive on some systems

**Problem:** Link goes to wrong page
- **Solution:** Double-check the `href` value matches the filename exactly

**Problem:** Both files show same content
- **Solution:** Make sure you edited and saved both files separately
- Check you're editing the correct file

**Problem:** Changes don't appear
- **Solution:** Save the file (`Ctrl + S`) then refresh the browser (`F5`)

**Problem:** Browser tab shows wrong title
- **Solution:** Check the `<title>` tag in the `<head>` section of each file
