# Exercise 3: Combining All Selectors

## 🎯 Goal
Build a complete webpage using element selectors, class selectors, and ID selectors together!

## 📋 Instructions

### Part 1: Create the HTML Structure
1. Create a file called `portfolio.html` in the `student-workspace` folder
2. Create this structure with the specified IDs and classes:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="portfolio.css">
</head>
<body>
    <!-- Header Section - ID -->
    <header id="main-header">
        <h1>Welcome to My Portfolio</h1>
        <p class="subtitle">Web Developer & Creative Thinker</p>
    </header>
    
    <!-- Navigation - ID -->
    <nav id="main-nav">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
    </nav>
    
    <!-- Main Content - ID -->
    <main id="content">
        <!-- About Section -->
        <section id="about" class="section">
            <h2>About Me</h2>
            <p>Hi! I'm learning web development and loving every minute of it!</p>
            <p class="highlight">I'm passionate about creating beautiful, functional websites.</p>
        </section>
        
        <!-- Projects Section -->
        <section id="projects" class="section">
            <h2>My Projects</h2>
            
            <div class="project-card">
                <h3>Project 1: HTML Website</h3>
                <p>My first website built with pure HTML.</p>
                <span class="tag tag-html">HTML</span>
            </div>
            
            <div class="project-card featured">
                <h3>Project 2: Styled Page</h3>
                <p>A beautiful page using CSS styling techniques!</p>
                <span class="tag tag-html">HTML</span>
                <span class="tag tag-css">CSS</span>
            </div>
            
            <div class="project-card">
                <h3>Project 3: Interactive Site</h3>
                <p>Coming soon with JavaScript interactivity!</p>
                <span class="tag tag-html">HTML</span>
                <span class="tag tag-css">CSS</span>
                <span class="tag tag-js">JavaScript</span>
            </div>
        </section>
        
        <!-- Skills Section -->
        <section id="skills" class="section">
            <h2>My Skills</h2>
            <ul class="skills-list">
                <li class="skill-item">HTML - Building web structure</li>
                <li class="skill-item">CSS - Styling and layout</li>
                <li class="skill-item">Problem Solving - Debugging and fixing issues</li>
                <li class="skill-item">Creativity - Designing unique pages</li>
            </ul>
        </section>
        
        <!-- Contact Section -->
        <section id="contact" class="section">
            <h2>Get In Touch</h2>
            <p>I'd love to hear from you!</p>
            <button class="btn btn-primary">Send Message</button>
            <button class="btn">View Resume</button>
        </section>
    </main>
    
    <!-- Footer - ID -->
    <footer id="main-footer">
        <p>&copy; 2025 My Portfolio. Built with HTML & CSS!</p>
    </footer>
</body>
</html>
```

### Part 2: Create the CSS File
3. Create `portfolio.css` in the same folder
4. Style using ALL three selector types:

**ELEMENT SELECTORS** (style all elements of these types):
```css
body {
    /* Your styles */
}

h1 {
    /* Your styles */
}

h2 {
    /* Your styles */
}

h3 {
    /* Your styles */
}

p {
    /* Your styles */
}

a {
    /* Style the navigation links */
}
```

**ID SELECTORS** (unique page sections):
```css
#main-header {
    /* Header styling - colorful background, centered text */
}

#main-nav {
    /* Navigation bar - horizontal links */
}

#content {
    /* Main content container - max-width, centered */
}

#about {
    /* Special styling for about section */
}

#projects {
    /* Projects section styles */
}

#skills {
    /* Skills section styles */
}

#contact {
    /* Contact section styles */
}

#main-footer {
    /* Footer - dark background, centered */
}
```

**CLASS SELECTORS** (reusable styles):
```css
.subtitle {
    /* Subtitle under h1 */
}

.section {
    /* Base styling for all sections */
}

.highlight {
    /* Highlighted paragraphs */
}

.project-card {
    /* Individual project cards */
}

.project-card.featured {
    /* Featured project (multiple classes!) */
}

.tag {
    /* Base tag styling */
}

.tag-html {
    /* HTML tag color */
}

.tag-css {
    /* CSS tag color */
}

.tag-js {
    /* JavaScript tag color */
}

.skills-list {
    /* Skills list container */
}

.skill-item {
    /* Individual skill items */
}

.btn {
    /* Base button style */
}

.btn-primary {
    /* Primary button color */
}
```

## ✅ Success Criteria
- [ ] Both files created and linked correctly
- [ ] Header (#main-header) has colorful background
- [ ] Navigation (#main-nav) has working anchor links
- [ ] All sections (.section) have consistent base styling
- [ ] Project cards (.project-card) are styled
- [ ] Featured project (.project-card.featured) stands out
- [ ] Tags (.tag) have different colors for HTML, CSS, JS
- [ ] Skills list is styled nicely
- [ ] Buttons have hover effects
- [ ] Footer is styled
- [ ] Page is responsive and looks professional

## 💡 Styling Suggestions

**Color Scheme Ideas:**
- Professional Blue: Header #2c3e50, Nav #34495e, Accent #3498db
- Creative Purple: Header #8e44ad, Nav #9b59b6, Accent #e74c3c
- Fresh Green: Header #27ae60, Nav #2ecc71, Accent #f39c12

**Layout Tips:**
- Use `max-width: 900px; margin: 0 auto;` on #content to center it
- Use `padding: 30px;` on sections for spacing
- Use `border-radius: 10px;` for rounded corners
- Use `box-shadow: 0 2px 5px rgba(0,0,0,0.1);` for depth

## 🌟 Bonus Challenge
- Add hover effects to navigation links (`:hover` pseudo-class)
- Make project cards have a hover effect that lifts them up
- Add a profile image placeholder in the about section
- Create a "scroll to top" button with its own ID
- Add gradient backgrounds using `linear-gradient()`
- Make the navigation sticky with `position: sticky; top: 0;`
- Add transition effects: `transition: all 0.3s ease;`

## 🎨 Advanced Styling
Try these advanced selectors:
```css
/* Style links inside navigation differently */
#main-nav a { }

/* Style h3 inside project cards */
.project-card h3 { }

/* Group selectors */
h1, h2, h3 { }

/* First and last child */
.skills-list li:first-child { }
.skills-list li:last-child { }
```

---

**Need help?** 
- Check all the examples to see different selector types
- Review the cheatsheet for syntax
- Start simple and add complexity gradually
- Test in browser frequently!

**Remember:** 
- IDs use `#` and must be unique
- Classes use `.` and can be reused
- Elements use no symbol
- You can combine them all in one project!
