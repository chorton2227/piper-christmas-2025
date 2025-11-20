# Exercise 3: Create a Complete Resource Guide

## 🎯 Goal
Build a comprehensive resource page using all types of links and advanced techniques.

## 📋 Instructions

1. Create a file called `resources.html`
2. Build a resource guide with:
   - Table of contents with anchor links
   - Multiple sections with IDs
   - External links to useful websites
   - Email links for support/questions
   - "Back to top" links throughout
   - Links with tooltips
   - Formatted link text

### Required Elements:
- [ ] Table of Contents at the top (with anchor links)
- [ ] At least 4 main sections with IDs
- [ ] At least 10 external links
- [ ] At least 5 links with tooltips
- [ ] At least 3 email links
- [ ] "Back to Top" links after each section
- [ ] Links organized in lists
- [ ] Formatted link text (bold, italic, etc.)

## ✅ Success Check

Your guide must have:
- [ ] Functional table of contents (anchor links work)
- [ ] At least 4 sections with unique IDs
- [ ] 10+ external links to real sites
- [ ] All external links open in new tabs
- [ ] 5+ links with helpful tooltip text
- [ ] 3+ email links (real or example)
- [ ] "Back to Top" functionality
- [ ] Well-organized with headings
- [ ] Links grouped in lists
- [ ] Mix of formatted link text
- [ ] Horizontal rules between sections

## 🌟 Bonus Challenge

- Create 6+ sections
- Include 20+ total links
- Add a "Quick Links" sidebar with main resources
- Create "Previous Section / Next Section" navigation
- Include links with icons (using emojis)
- Add a footer with summary links
- Include nested lists of links
- Add multiple levels of anchor links

## 💡 Resource Guide Ideas

Pick a topic you know well:
- **Tech Resources** - Coding sites, tools, tutorials
- **Learning Resources** - Educational sites, courses, books
- **Gaming Resources** - Game sites, wikis, communities
- **Creative Resources** - Art sites, music, design tools
- **Hobby Resources** - Sites related to your hobbies
- **Study Resources** - Subject-specific learning sites

---

## 🎯 Example Structure

```html
<h1>My Resource Guide</h1>

<!-- Table of Contents -->
<nav>
    <h2>Table of Contents</h2>
    <ul>
        <li><a href="#intro">Introduction</a></li>
        <li><a href="#beginner">Beginner Resources</a></li>
        <li><a href="#advanced">Advanced Resources</a></li>
        <li><a href="#tools">Useful Tools</a></li>
        <li><a href="#contact">Contact & Support</a></li>
    </ul>
</nav>

<hr>

<!-- Introduction Section -->
<section id="intro">
    <h2>Introduction</h2>
    <p>Welcome to my resource guide...</p>
    <p><a href="#">Back to Top</a></p>
</section>

<hr>

<!-- Beginner Section -->
<section id="beginner">
    <h2>Beginner Resources</h2>
    <h3>Learning Platforms</h3>
    <ul>
        <li><a href="https://www.example.com" target="_blank" title="Great for beginners">
            <strong>Example Site</strong></a> - Description here
        </li>
    </ul>
    <p><a href="#">Back to Top</a></p>
</section>

<!-- More sections... -->
```

---

## 📊 Quality Checklist

Before submitting, verify:

**Navigation:**
- [ ] Table of contents works (all links jump correctly)
- [ ] "Back to Top" links function on all sections
- [ ] All external links open in new tabs

**Content:**
- [ ] Each section has unique, useful content
- [ ] Links are organized logically
- [ ] Descriptions help explain each link
- [ ] All links are tested and working

**Structure:**
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Section IDs match anchor link hrefs
- [ ] Good use of lists for organization
- [ ] Clear visual separation between sections

**Details:**
- [ ] Tooltips provide helpful information
- [ ] Email links are formatted correctly
- [ ] Link text is descriptive
- [ ] Formatting enhances important links

---

## 💡 Pro Tips

1. **IDs can't have spaces** - Use hyphens: `id="my-section"` not `id="my section"`
2. **Test anchor links** - Click them to make sure they jump correctly
3. **Descriptive tooltips** - Make them helpful, not redundant
4. **Organized lists** - Group related links together
5. **Real resources** - Link to sites you actually find useful!

---

## 🎨 Advanced Techniques to Try

```html
<!-- Link with formatted text -->
<a href="site.com"><strong>Important Resource</strong></a>

<!-- Link around multiple elements -->
<a href="site.com">
    <h3>Site Name</h3>
    <p>Description of what this site offers</p>
</a>

<!-- Email with subject -->
<a href="mailto:help@example.com?subject=Question about Resources">
    Ask a Question
</a>

<!-- Link with emoji and tooltip -->
<a href="site.com" target="_blank" title="Click to learn more">
    🎓 Learning Platform
</a>
```
