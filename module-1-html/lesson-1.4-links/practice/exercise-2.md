# Exercise 2: Build a Multi-Page Website

## 🎯 Goal

Create a complete multi-page website with navigation menus that connect all pages together. Learn how internal links work and practice building consistent navigation.

**What you'll build:** A personal website with at least 3 interconnected pages (Home, About, Contact).

---

## 📋 Instructions

### Step 1: Plan Your Website

You'll create **at least 3 HTML files:**
- `index.html` - Home page (main landing page)
- `about.html` - About page (information about you)
- `contact.html` - Contact page (how to reach you)

**Optional additional pages:**
- `hobbies.html` - Your hobbies and interests
- `projects.html` - Things you've made or worked on
- `resources.html` - Favorite links and resources

### Step 2: Create the Home Page (index.html)

1. Create `index.html` in the `student-workspace` folder
2. Add the basic HTML structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Website - Home</title>
</head>
<body>
    <header>
        <h1>Welcome to My Website!</h1>
    </header>
    
    <nav>
        <h2>Navigation</h2>
        <a href="index.html">Home</a> | 
        <a href="about.html">About</a> | 
        <a href="contact.html">Contact</a>
    </nav>
    
    <hr>
    
    <main>
        <h2>Hello!</h2>
        <p>Welcome to my personal website. Here you can learn more about me,
           see what I'm interested in, and find out how to get in touch!</p>
        
        <p>Check out the <a href="about.html">About page</a> to learn more,
           or <a href="contact.html">contact me</a> if you have questions.</p>
    </main>
    
    <hr>
    
    <footer>
        <p>© 2025 My Website</p>
    </footer>
</body>
</html>
```

### Step 3: Create the About Page (about.html)

1. Create `about.html` in the same folder
2. **Copy the navigation from index.html** so it's identical
3. Change the title and main content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Website - About Me</title>
</head>
<body>
    <header>
        <h1>About Me</h1>
    </header>
    
    <!-- Copy the same navigation from index.html -->
    <nav>
        <h2>Navigation</h2>
        <a href="index.html">Home</a> | 
        <a href="about.html">About</a> | 
        <a href="contact.html">Contact</a>
    </nav>
    
    <hr>
    
    <main>
        <h2>Who Am I?</h2>
        <p>Hi! My name is [Your Name] and I'm learning HTML!</p>
        
        <h2>My Interests</h2>
        <ul>
            <li>Learning to code</li>
            <li>Reading</li>
            <li>Your hobby here</li>
        </ul>
        
        <h2>Why I'm Learning HTML</h2>
        <p>Write a few sentences about your goals...</p>
        
        <p><a href="index.html">← Back to Home</a></p>
    </main>
    
    <hr>
    
    <footer>
        <p>© 2025 My Website</p>
    </footer>
</body>
</html>
```

### Step 4: Create the Contact Page (contact.html)

1. Create `contact.html` in the same folder
2. Include the same navigation
3. Add contact information:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Website - Contact</title>
</head>
<body>
    <header>
        <h1>Contact Me</h1>
    </header>
    
    <!-- Copy the same navigation -->
    <nav>
        <h2>Navigation</h2>
        <a href="index.html">Home</a> | 
        <a href="about.html">About</a> | 
        <a href="contact.html">Contact</a>
    </nav>
    
    <hr>
    
    <main>
        <h2>Get In Touch</h2>
        <p>Want to connect? Here's how to reach me:</p>
        
        <h3>Email</h3>
        <p><a href="mailto:yourname@example.com">yourname@example.com</a></p>
        
        <h3>Social Media</h3>
        <ul>
            <li><a href="https://github.com/yourusername" target="_blank">GitHub</a></li>
            <li><a href="https://twitter.com/yourusername" target="_blank">Twitter</a></li>
        </ul>
        
        <p><a href="index.html">← Back to Home</a></p>
    </main>
    
    <hr>
    
    <footer>
        <p>© 2025 My Website</p>
    </footer>
</body>
</html>
```

### Step 5: Test Your Website

1. Open `index.html` in your browser
2. Click every link to make sure they all work
3. Verify you can navigate to every page from every page
4. Check that the navigation looks the same on all pages

---

## ✅ Success Check

Before you submit, verify:

- [ ] You have **at least 3 HTML files** (index.html, about.html, contact.html)
- [ ] Every page has the **same navigation menu**
- [ ] All internal links work correctly (you can visit every page)
- [ ] Each page has **unique content** appropriate to its purpose
- [ ] The home page includes an introduction and links to other pages
- [ ] The about page includes information about you
- [ ] The contact page includes at least one **email link** (`mailto:`)
- [ ] The contact page includes at least 2-3 **external links** (social media)
- [ ] External links use `target="_blank"`
- [ ] You can navigate from any page to any other page
- [ ] All pages have proper HTML structure
- [ ] Page titles are different for each page

---

## 🌟 Bonus Challenges

### 1. Add More Pages

Create additional pages like:
```html
<!-- hobbies.html -->
<h1>My Hobbies</h1>
<p>Things I enjoy doing...</p>

<!-- projects.html -->
<h1>My Projects</h1>
<p>Things I've built or worked on...</p>
```

Don't forget to add them to your navigation!

### 2. Improve Your Navigation

Try a list-based navigation:
```html
<nav>
    <h2>Site Navigation</h2>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a href="hobbies.html">Hobbies</a></li>
    </ul>
</nav>
```

### 3. Add Jump Links on Long Pages

If your about page is long:
```html
<nav>
    <h3>On This Page:</h3>
    <a href="#intro">Introduction</a> | 
    <a href="#interests">Interests</a> | 
    <a href="#goals">Goals</a>
</nav>

<h2 id="intro">Introduction</h2>
<!-- content -->

<h2 id="interests">My Interests</h2>
<!-- content -->

<h2 id="goals">My Goals</h2>
<!-- content -->
```

### 4. Add "Previous/Next" Navigation

At the bottom of each page:
```html
<nav>
    <p>
        <a href="index.html">← Previous: Home</a> | 
        <a href="contact.html">Next: Contact →</a>
    </p>
</nav>
```

### 5. Create Consistent Headers and Footers

Make sure every page has:
- The same header with your site name
- The same navigation menu
- The same footer with copyright info

### 6. Add a "Current Page" Indicator

On each page, show which page you're on:
```html
<!-- On about.html -->
<nav>
    <a href="index.html">Home</a> | 
    <strong>About</strong> | 
    <a href="contact.html">Contact</a>
</nav>
```

---

## 🆘 Troubleshooting

### Clicking a Link Shows "File Not Found"
- ✅ Check that the filename matches exactly (including .html)
- ✅ Make sure all files are in the same folder
- ✅ Check for typos in the `href` attribute
- ✅ Filenames are case-sensitive! (about.html ≠ About.html)

### Links Work from One Page but Not Another
- ✅ Make sure the navigation is exactly the same on every page
- ✅ Use just the filename (`about.html`) not a full path
- ✅ All files must be in the same folder for simple links to work

### Navigation Looks Different on Each Page
- ✅ Copy and paste the navigation to keep it consistent
- ✅ Check for typos or missing tags
- ✅ Make sure the HTML structure is the same

### External Links Don't Open in New Tab
- ✅ Add `target="_blank"` to external links
- ✅ Check spelling of the attribute
- ✅ Make sure quotes are around "_blank"

---

## 💭 Think About It

1. **Why keep navigation consistent across all pages?**
   - What happens if each page has different navigation?
   - How does consistency help users?

2. **When to use internal vs external links?**
   - How do you know which to use?
   - Why not use `target="_blank"` for internal links?

3. **How does your file structure affect your links?**
   - What if you put some pages in a subfolder?
   - How would your links need to change?

---

## 📚 What You Learned

In this exercise, you practiced:
- ✅ Creating multiple connected HTML pages
- ✅ Building consistent navigation menus
- ✅ Using internal links to connect pages
- ✅ Organizing a multi-file website
- ✅ Testing and debugging navigation
- ✅ Creating a cohesive user experience
- ✅ Combining internal and external links

---

## 📁 Your File Structure

When complete, you should have:
```
student-workspace/
├── index.html
├── about.html
└── contact.html
```

Or with bonus pages:
```
student-workspace/
├── index.html
├── about.html
├── contact.html
├── hobbies.html
└── projects.html
```

---

## 🎯 Example Site Map

```
Home (index.html)
├── About (about.html)
│   └── Back to Home
├── Contact (contact.html)
│   └── Back to Home
└── Navigation menu on all pages
```

---

**Excellent work!** 🎉 You've built a real multi-page website! When you're ready, move on to Exercise 3 to create an advanced resource guide.
