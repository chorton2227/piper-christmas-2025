# Exercise 3: Build a Mini Portfolio

## 🎯 Goal
Combine everything you've learned about selectors to build a styled portfolio page!

## 📋 What You'll Build
A personal portfolio page with:
- A header section
- An about me section
- A projects section with multiple project cards
- A skills section
- A contact section
- Proper use of element, class, and ID selectors!

## 🛠️ Instructions

### Step 1: Create Your Files
1. In the `student-workspace` folder, create:
   - `portfolio.html`
   - `portfolio.css`

### Step 2: HTML Structure

Build your page with these sections (use the selectors indicated):

#### Header Section (use ID)
```html
<div id="header">
    <h1>Your Name</h1>
    <p>Your tagline or title (Web Developer, Student, etc.)</p>
</div>
```

#### Navigation (use ID)
```html
<div id="navigation">
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#skills">Skills</a>
    <a href="#contact">Contact</a>
</div>
```

#### About Section (use ID)
```html
<div id="about">
    <h2>About Me</h2>
    <p>Write a few paragraphs about yourself...</p>
    <p class="highlight">Highlight an important fact about you!</p>
</div>
```

#### Projects Section (use classes!)
```html
<div id="projects">
    <h2>My Projects</h2>
    
    <div class="project-card">
        <h3>Project 1 Name</h3>
        <p>Description of your project...</p>
    </div>
    
    <div class="project-card featured">
        <h3>Project 2 Name</h3>
        <p>Description... This one is featured!</p>
    </div>
    
    <div class="project-card">
        <h3>Project 3 Name</h3>
        <p>Description...</p>
    </div>
</div>
```

#### Skills Section (use classes)
```html
<div id="skills">
    <h2>My Skills</h2>
    <div class="skill-badge">HTML</div>
    <div class="skill-badge">CSS</div>
    <div class="skill-badge">JavaScript</div>
    <!-- Add more skills! -->
</div>
```

#### Contact Section (use ID and classes)
```html
<div id="contact">
    <h2>Contact Me</h2>
    <p>Interested in working together? Reach out!</p>
    <button class="btn btn-primary">Send Message</button>
    <button class="btn">View Resume</button>
</div>
```

### Step 3: CSS Styling

Now style your portfolio! Use a mix of selectors:

#### Element Selectors
```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
}

h1 {
    /* Your h1 styles */
}

h2 {
    /* Your h2 styles */
}

p {
    /* Your paragraph styles */
}
```

#### ID Selectors (for unique page sections)
```css
#header {
    /* Unique header styling */
    /* Suggestion: gradient background, centered text, padding */
}

#navigation {
    /* Navigation bar styling */
    /* Suggestion: different background, centered links */
}

#about {
    /* About section styling */
}

#projects {
    /* Projects section styling */
}

#skills {
    /* Skills section styling */
}

#contact {
    /* Contact section styling */
}
```

#### Class Selectors (for reusable styles)
```css
.project-card {
    /* Base card styling */
    /* Suggestion: white background, padding, border-radius, shadow */
}

.project-card.featured {
    /* Featured project styling */
    /* Suggestion: special border, different background */
}

.skill-badge {
    /* Skill badge styling */
    /* Suggestion: inline-block, padding, background color, border-radius */
}

.highlight {
    /* Highlighted text */
}

.btn {
    /* Base button styling */
}

.btn-primary {
    /* Primary button color */
}
```

### Step 4: Make It Your Own!
- Choose your own colors
- Add your real information (or make it up!)
- Add more sections if you want
- Get creative with styling!

## ✅ Requirements Checklist
- [ ] Used **at least 5 ID selectors** (#header, #navigation, etc.)
- [ ] Used **at least 5 class selectors** (.project-card, .skill-badge, etc.)
- [ ] Used **element selectors** (body, h1, h2, p, etc.)
- [ ] At least one element has **multiple classes**
- [ ] All sections are properly styled
- [ ] Used proper HTML structure
- [ ] CSS file is linked correctly
- [ ] Page looks good in browser

## 🌟 Bonus Challenges

### Level 1:
- Add hover effects to links and buttons
- Add a footer section with ID
- Create a `.container` class to center and max-width your content

### Level 2:
- Add a profile image with a `.profile-img` class
- Create different colored skill badges (`.skill-badge.html`, `.skill-badge.css`, etc.)
- Add social media icons/links

### Level 3:
- Make the navigation sticky (stays at top when scrolling)
- Add smooth transitions to hover effects
- Create a dark mode toggle option with different classes

## 💡 Style Suggestions

### Color Scheme Ideas:
- **Professional:** Navy blue, white, light gray, orange accent
- **Creative:** Purple gradient, pink, white, gold accent
- **Nature:** Forest green, cream, brown, yellow accent
- **Tech:** Dark gray, electric blue, white, cyan accent

### Layout Tips:
- Use `max-width` on content sections (600px - 800px)
- Use `margin: 0 auto` to center sections
- Add padding to all sections (20px - 40px)
- Use consistent spacing with margins

## 🎯 Learning Goals
After this project, you should understand:
- When to use IDs vs classes
- How to combine multiple selectors
- How to create reusable styles with classes
- How to structure a complete webpage
- How CSS selectors work together

## 📸 Example Structure:
```
Header (ID) - Gradient background, centered text
└─ Navigation (ID) - Links to sections
   └─ About (ID) - Text content with highlighted paragraph
      └─ Projects (ID)
         └─ Project Card (class) - Repeatable card style
         └─ Project Card featured (classes) - Special style
         └─ Project Card (class)
      └─ Skills (ID)
         └─ Skill Badge (class) x multiple
      └─ Contact (ID)
         └─ Buttons (classes)
```

## ❓ Reflection Questions
1. Why did you use IDs for major page sections?
2. Why did you use classes for project cards and skill badges?
3. Which selector type did you use most? Why?
4. How did combining classes help you avoid repetitive CSS?

---

**Have fun building! This is YOUR portfolio - make it unique! 🚀**

Need help? Check [examples/example-4-combining-selectors.html](../examples/example-4-combining-selectors.html) for inspiration!
