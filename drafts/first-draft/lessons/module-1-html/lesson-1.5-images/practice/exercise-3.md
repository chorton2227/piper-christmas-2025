# Exercise 3: Build a Complete Website with Images

## 🎯 Goal
Create a multi-page website that uses images throughout, including clickable image links and a comprehensive gallery.

## 📋 Instructions

1. Create **at least 4 HTML files**:
   - `index.html` (Homepage with featured images)
   - `gallery.html` (Full photo gallery)
   - `about.html` (About page with profile image)
   - `contact.html` (Contact page with social icons)

2. Each page should include:
   - Navigation menu (same on all pages)
   - Multiple images
   - Proper use of alt text
   - Professional appearance

### Specific Requirements:

**Homepage (`index.html`):**
- Header with logo image (can be placeholder)
- At least 3 featured images
- Welcome message
- Links to other pages
- Call-to-action with image link

**Gallery Page (`gallery.html`):**
- At least 10 images organized by category
- Figure and figcaption for each image
- Table of contents with anchor links
- Clickable thumbnails that link to full-size images
- Multiple sections

**About Page (`about.html`):**
- Profile image or photo
- Bio/description
- Maybe additional images
- Links to gallery and other pages

**Contact Page (`contact.html`):**
- Social media icon images (as links)
- Contact information
- Optional: form or email link
- Links back to other pages

## ✅ Success Check

Your website should have:
- [ ] 4+ complete HTML pages
- [ ] Navigation on every page
- [ ] 15+ total images across all pages
- [ ] Figure/figcaption used in gallery
- [ ] Clickable image links
- [ ] Profile/logo images
- [ ] Social media image links
- [ ] All images have alt text
- [ ] Anchor links work in gallery
- [ ] Can navigate between all pages
- [ ] Consistent design across pages
- [ ] Professional appearance

## 🌟 Bonus Challenge

- Create 6+ pages total
- Add 25+ total images
- Include image hover tooltips (title attribute)
- Create a dedicated "Portfolio" page
- Add a "Blog" page with image headers
- Include breadcrumb navigation
- Add footer with images on every page
- Create themed sections (e.g., seasons, projects)
- Build a "Services" page with icons
- Add testimonials with profile images
- Include before/after comparison images
- Create a "Press" page with logos

## 💡 Tips

- Plan your site structure first
- Keep navigation consistent
- Use meaningful file names
- Organize images by theme
- Test all links on all pages
- Consider your target audience
- Make it personal and unique!
- Use placeholders initially, can add real images later

---

## 🎨 Example Homepage Structure

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Website - Home</title>
</head>
<body>
    <!-- Header with Logo -->
    <header>
        <a href="index.html">
            <img src="https://placehold.co/200x60?text=My+Logo" alt="My Website Logo">
        </a>
    </header>
    
    <!-- Navigation -->
    <nav>
        <a href="index.html">Home</a> |
        <a href="gallery.html">Gallery</a> |
        <a href="about.html">About</a> |
        <a href="contact.html">Contact</a>
    </nav>
    
    <hr>
    
    <!-- Main Content -->
    <h1>Welcome to My Website!</h1>
    
    <img src="https://placehold.co/800x400" alt="Hero image" width="800">
    
    <h2>Featured Content</h2>
    
    <figure>
        <a href="gallery.html">
            <img src="https://placehold.co/350x250" alt="Gallery preview" width="350">
        </a>
        <figcaption>
            <strong>View My Gallery</strong>
            <br>
            Click to see my latest photos
        </figcaption>
    </figure>
    
    <!-- More content... -->
    
    <footer>
        <p><small>© 2025 My Website</small></p>
    </footer>
</body>
</html>
```

---

## 🏗️ Website Theme Ideas

Choose a theme for your website:

**Personal:**
- Personal portfolio
- Photography portfolio
- Travel blog
- Hobby showcase
- Pet website

**Business/Professional:**
- Restaurant website
- Bakery/cafe site
- Photographer portfolio
- Artist portfolio
- Design showcase

**Creative:**
- Gaming community
- Fan page (movie, show, game)
- Recipe collection
- Craft/DIY projects
- Book reviews with cover images

**Educational:**
- Tutorial site
- Study guide
- Resource library
- How-to guides
- Learning journal

---

## 📁 Recommended File Structure

```
my-website/
├── index.html
├── gallery.html
├── about.html
├── contact.html
└── images/
    ├── logo.png
    ├── profile.jpg
    ├── gallery/
    │   ├── photo1.jpg
    │   ├── photo2.jpg
    │   └── photo3.jpg
    └── icons/
        ├── email.png
        ├── twitter.png
        └── instagram.png
```

You can use placeholders initially and the folder structure is optional!

---

## 🎯 Development Steps

1. **Plan** - Sketch your site structure
2. **Create Files** - Make all HTML files
3. **Add Navigation** - Copy nav to all pages
4. **Homepage** - Build homepage with featured images
5. **Gallery** - Create comprehensive gallery
6. **About** - Add profile and bio
7. **Contact** - Add social links and contact info
8. **Test** - Click every link, view every image
9. **Polish** - Improve captions, descriptions, layout
10. **Review** - Check against requirements

---

## ✨ Quality Checklist

Before submitting, verify:

**Images:**
- [ ] All images display correctly
- [ ] Every image has descriptive alt text
- [ ] Images are appropriate sizes
- [ ] Captions are meaningful
- [ ] Clickable images work as links

**Navigation:**
- [ ] Navigation exists on all pages
- [ ] All internal links work
- [ ] External links open correctly
- [ ] Anchor links jump properly
- [ ] "Back to top" links function

**Content:**
- [ ] Headings organize content
- [ ] Text is readable and clear
- [ ] Consistent style across pages
- [ ] No spelling errors
- [ ] Professional appearance

**Structure:**
- [ ] Proper HTML document structure
- [ ] Semantic HTML used appropriately
- [ ] Figure/figcaption used correctly
- [ ] Code is organized and readable
