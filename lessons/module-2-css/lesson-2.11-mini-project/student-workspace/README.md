# Student Workspace - CSS Mini-Project

Welcome to your final CSS project! This is where you'll build your complete portfolio website. 🚀

## 📁 Recommended File Structure

Create your files like this:

```
student-workspace/
├── index.html          (Home page)
├── about.html          (About page)
├── projects.html       (Projects page)
├── contact.html        (Contact page)
├── styles.css          (Your CSS file)
└── images/            (Your images folder)
    ├── profile.jpg
    ├── project1.jpg
    ├── project2.jpg
    └── ...
```

## 🚀 Quick Start

### Option 1: Use the Template

1. Copy `template-index.html` from the examples folder
2. Rename it to `index.html`
3. Copy `template-styles.css` and rename to `styles.css`
4. Customize everything!

### Option 2: Start from Scratch

Use this basic structure for each page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name - Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Your content here -->
</body>
</html>
```

## 📋 Step-by-Step Checklist

### Phase 1: Setup ✓
- [ ] Create project folder
- [ ] Create all 4 HTML files
- [ ] Create styles.css
- [ ] Create images folder
- [ ] Add viewport meta tag to all pages
- [ ] Link CSS to all pages

### Phase 2: Navigation ✓
- [ ] Build navigation HTML
- [ ] Add navigation to all 4 pages
- [ ] Test all links work
- [ ] Style navigation
- [ ] Make responsive with hamburger menu
- [ ] Test on mobile and desktop

### Phase 3: Footer ✓
- [ ] Build footer HTML
- [ ] Add footer to all 4 pages
- [ ] Style footer
- [ ] Make responsive

### Phase 4: Home Page ✓
- [ ] Create hero section
- [ ] Add your name and tagline
- [ ] Add hero image or illustration
- [ ] Add CTA buttons
- [ ] Create introduction section
- [ ] Add features/services cards (3+)
- [ ] Style everything
- [ ] Make responsive

### Phase 5: About Page ✓
- [ ] Add your photo/avatar
- [ ] Write and add bio (2-3 paragraphs)
- [ ] Create skills section (6+ skills)
- [ ] Add interests/hobbies section
- [ ] Style everything
- [ ] Make responsive

### Phase 6: Projects Page ✓
- [ ] Create grid container
- [ ] Build project card component
- [ ] Add 6+ projects with:
  - [ ] Image
  - [ ] Title
  - [ ] Description
- [ ] Add hover effects
- [ ] Make grid responsive (1→2→3 columns)
- [ ] Test at all screen sizes

### Phase 7: Contact Page ✓
- [ ] Create form with:
  - [ ] Name input
  - [ ] Email input
  - [ ] Message textarea
  - [ ] Submit button
- [ ] Style form inputs
- [ ] Add focus states
- [ ] Add contact information section
- [ ] Make form responsive

### Phase 8: Polish & Perfect ✓
- [ ] Add transitions to interactive elements
- [ ] Check hover effects work everywhere
- [ ] Verify color scheme is consistent
- [ ] Check spacing throughout
- [ ] Ensure good contrast for readability
- [ ] Add any extra polish

### Phase 9: Testing ✓
- [ ] Test at 320px (small phone)
- [ ] Test at 375px (phone)
- [ ] Test at 768px (tablet)
- [ ] Test at 1024px (desktop)
- [ ] Test at 1440px (large desktop)
- [ ] Check all links work
- [ ] Verify navigation works on all pages
- [ ] Check for horizontal scrolling (should be none!)
- [ ] Test on actual mobile device if possible

### Phase 10: Final Review ✓
- [ ] Validate HTML (all pages)
- [ ] Validate CSS
- [ ] All images have alt text
- [ ] Proofread all content
- [ ] Check code comments
- [ ] Verify code is indented properly
- [ ] Take screenshots
- [ ] Celebrate! 🎉

## 🎨 Design Resources

### Color Schemes

Copy and paste into your CSS:

```css
/* Professional Blue */
:root {
    --primary: #2c3e50;
    --secondary: #3498db;
    --accent: #e74c3c;
    --light: #ecf0f1;
    --dark: #34495e;
}

/* Creative Purple */
:root {
    --primary: #667eea;
    --secondary: #764ba2;
    --accent: #f093fb;
    --light: #f8f9fa;
    --dark: #333333;
}

/* Modern Green */
:root {
    --primary: #43e97b;
    --secondary: #38f9d7;
    --accent: #fa709a;
    --light: #f0f2f5;
    --dark: #2c3e50;
}
```

### Google Fonts

Add to your `<head>`:

```html
<!-- Modern & Clean -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">

<!-- Professional -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">

<!-- Tech & Minimal -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
```

## 💡 Quick Code Snippets

### Responsive Container
```css
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
```

### Responsive Grid
```css
.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 25px;
}

@media (min-width: 768px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .grid {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

### Hamburger Menu
```html
<input type="checkbox" id="menu-toggle" class="menu-toggle">
<label for="menu-toggle" class="hamburger">
    <span></span>
    <span></span>
    <span></span>
</label>
<nav class="menu">
    <!-- Links here -->
</nav>
```

```css
.menu-toggle { display: none; }

.menu {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
}

.menu-toggle:checked ~ .menu {
    max-height: 500px;
}

@media (min-width: 768px) {
    .hamburger { display: none; }
    .menu { max-height: none; display: flex; }
}
```

### Smooth Hover Effect
```css
.card {
    transition: all 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}
```

## 🐛 Troubleshooting

### Problem: Menu won't open on mobile
**Check:**
1. Is `id="menu-toggle"` on the checkbox?
2. Is `for="menu-toggle"` on the label?
3. Do they match exactly?

### Problem: Horizontal scrolling
**Check:**
1. Do any elements have fixed widths?
2. Are images using `max-width: 100%`?
3. Is anything overflowing its container?

### Problem: Layout breaks at certain size
**Try:**
1. Add another breakpoint
2. Use `min-width` and `max-width` together
3. Check for fixed pixel values

### Problem: Text too small on mobile
**Fix:**
1. Use at least 16px for body text
2. Scale up font sizes in media queries
3. Use `rem` units instead of `px`

## 📱 Testing Tools

### Browser DevTools (F12)
1. Press F12 to open DevTools
2. Click device icon (Ctrl+Shift+M)
3. Select device or enter custom size
4. Test your site!

### Common Test Sizes
- **320px** - Small phone (iPhone SE)
- **375px** - Standard phone (iPhone 12)
- **414px** - Large phone (iPhone 12 Pro Max)
- **768px** - Tablet (iPad)
- **1024px** - Small laptop
- **1440px** - Desktop
- **1920px** - Large desktop

## 📊 Self-Check Before Submitting

### Technical ✓
- [ ] All 4 HTML files created
- [ ] All pages link to each other
- [ ] CSS file linked to all pages
- [ ] Viewport meta tag on all pages
- [ ] HTML validates (no errors)
- [ ] CSS validates (no errors)

### Design ✓
- [ ] Colors are consistent
- [ ] Fonts look good together
- [ ] Good contrast for reading
- [ ] Professional appearance
- [ ] Images scale properly

### Responsive ✓
- [ ] Works on mobile (320px+)
- [ ] Works on tablet (768px+)
- [ ] Works on desktop (1024px+)
- [ ] No horizontal scrolling
- [ ] Hamburger menu on mobile
- [ ] Text is readable everywhere

### Interactivity ✓
- [ ] Links have hover effects
- [ ] Buttons have hover effects
- [ ] Form inputs have focus states
- [ ] Smooth transitions (0.3s)
- [ ] Everything feels polished

### Content ✓
- [ ] All text proofread
- [ ] 6+ projects showcased
- [ ] Bio is complete
- [ ] Contact info added
- [ ] All images have alt text

## 🌟 Going Above & Beyond

Want extra credit? Try these:

- **Smooth Scrolling** - Add `scroll-behavior: smooth;` to `html`
- **Active Nav State** - Highlight current page in navigation
- **Loading Animation** - Create a simple loading spinner
- **Dark Mode** - Use `prefers-color-scheme` media query
- **Print Styles** - Make it look good when printed
- **Back to Top Button** - Fixed button to scroll to top
- **Entrance Animations** - Elements fade in as you scroll
- **Skills Progress Bars** - Animated progress indicators

## 📝 Getting Feedback

Before final submission:

1. **Self-review** - Check against the rubric
2. **Peer review** - Ask a classmate to test it
3. **Parent review** - Show your parent on their phone
4. **Teacher review** - Ask for feedback if stuck

## 💬 Need Help?

If you're stuck:

1. **Check the examples** - Look at template files
2. **Review lessons** - Go back to relevant lessons
3. **Ask for help** - After trying for 30 minutes
4. **Take a break** - Fresh eyes find solutions

## 🎉 When You're Done

1. **Test everything one more time**
2. **Take screenshots** (mobile and desktop views)
3. **Validate your code** (HTML and CSS validators)
4. **Zip your project folder** or commit to git
5. **Submit according to instructions**
6. **Celebrate!** You built a complete website! 🎊

---

## 📚 Files in This Lesson

- **README.md** - Main lesson overview
- **examples/template-index.html** - HTML template to customize
- **examples/template-styles.css** - CSS template to customize
- **resources/planning-guide.md** - Step-by-step planning guide
- **resources/parent-guide.md** - Guide for parents
- **resources/grading-rubric.md** - How you'll be graded
- **student-workspace/** - Where YOU work! (this folder)

---

**Remember:** Your first portfolio doesn't have to be perfect. Professional developers iterate and improve their sites over time. Focus on completing all requirements, then polish what you can. You've got this! 💪🚀
