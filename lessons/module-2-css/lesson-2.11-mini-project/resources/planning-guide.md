# CSS Mini-Project Planning Guide

## 📋 Pre-Project Planning

Before you write a single line of code, plan your project! This will save you hours of work.

### 1. Content Planning (30 minutes)

#### About You
Write down:
- [ ] Your name/nickname
- [ ] Your tagline (one sentence that describes you)
- [ ] Your bio (2-3 paragraphs about yourself)
- [ ] Your skills (at least 6)
- [ ] Your interests/hobbies
- [ ] Contact information you're comfortable sharing

#### Your Projects
List at least 6 projects you've worked on (from this course or elsewhere):
1. **Project name:**
   - Description:
   - What you learned:
   - Screenshot/image idea:

2. **Project name:**
   - Description:
   - What you learned:
   - Screenshot/image idea:

(Continue for all 6+)

### 2. Design Planning (30 minutes)

#### Color Scheme
Choose one of these or create your own:

**Option 1: Professional Blue**
- Primary: #2c3e50 (Dark Blue)
- Secondary: #3498db (Bright Blue)
- Accent: #e74c3c (Red)

**Option 2: Creative Purple**
- Primary: #667eea (Purple)
- Secondary: #764ba2 (Deep Purple)
- Accent: #f093fb (Pink)

**Option 3: Modern Green**
- Primary: #43e97b (Green)
- Secondary: #38f9d7 (Cyan)
- Accent: #fa709a (Pink)

**My Choice:**
- Primary: 
- Secondary: 
- Accent: 

#### Typography
Choose your font pairing:

**Option 1:**
- Headings: Poppins
- Body: Inter

**Option 2:**
- Headings: Montserrat
- Body: Open Sans

**Option 3:**
- Headings: Playfair Display
- Body: Roboto

**My Choice:**
- Headings: 
- Body: 

### 3. Page Sketches

Draw rough sketches of each page on paper. Include:

#### Home Page Sketch
- [ ] Hero section layout
- [ ] Introduction section
- [ ] Features/services
- [ ] Call-to-action

#### About Page Sketch
- [ ] Personal photo placement
- [ ] Bio section layout
- [ ] Skills section
- [ ] Interests section

#### Projects Page Sketch
- [ ] How many columns? (mobile/tablet/desktop)
- [ ] Card layout
- [ ] Hover effects planned

#### Contact Page Sketch
- [ ] Form placement
- [ ] Contact info placement
- [ ] Any other elements?

---

## 🎯 Day-by-Day Work Plan

### Day 1: Setup & Structure (2-3 hours)

**Morning Session**
- [ ] Create project folder
- [ ] Create all 4 HTML files
- [ ] Create styles.css
- [ ] Create images folder
- [ ] Set up basic HTML structure for all pages
- [ ] Add viewport meta tag to all pages
- [ ] Link CSS to all pages

**Afternoon Session**
- [ ] Build navigation component
- [ ] Add navigation to all 4 pages
- [ ] Test that links work between pages
- [ ] Build footer component
- [ ] Add footer to all 4 pages

**End of Day 1 Goals:**
- ✅ All files created
- ✅ Basic HTML structure on all pages
- ✅ Navigation and footer on all pages
- ✅ All pages link to each other

---

### Day 2: Home Page (2-3 hours)

**Morning Session**
- [ ] Style the navigation (colors, fonts)
- [ ] Make navigation responsive
- [ ] Add hamburger menu for mobile
- [ ] Test navigation on different screen sizes

**Afternoon Session**
- [ ] Build hero section
- [ ] Style hero section
- [ ] Make hero responsive
- [ ] Add introduction section
- [ ] Add features/services cards
- [ ] Add call-to-action section

**End of Day 2 Goals:**
- ✅ Home page complete
- ✅ Responsive navigation working
- ✅ Hero section looks great
- ✅ All sections styled

---

### Day 3: About & Projects Pages (2-3 hours)

**Morning Session - About Page**
- [ ] Add your photo/avatar
- [ ] Write and add your bio
- [ ] Create skills section
- [ ] Style everything
- [ ] Make it responsive

**Afternoon Session - Projects Page**
- [ ] Create project grid layout
- [ ] Build first project card
- [ ] Copy and customize for all projects
- [ ] Add hover effects
- [ ] Make grid responsive

**End of Day 3 Goals:**
- ✅ About page complete
- ✅ Projects page complete with 6+ projects
- ✅ Both pages responsive
- ✅ Hover effects working

---

### Day 4: Contact Page & Polish (2-3 hours)

**Morning Session**
- [ ] Build contact form
- [ ] Style form inputs
- [ ] Add focus states
- [ ] Add contact information section
- [ ] Make form responsive

**Afternoon Session - Polish Everything**
- [ ] Add transitions to all interactive elements
- [ ] Check spacing throughout site
- [ ] Adjust colors if needed
- [ ] Fix any layout issues
- [ ] Test on different screen sizes

**End of Day 4 Goals:**
- ✅ Contact page complete
- ✅ All 4 pages polished
- ✅ Everything responsive
- ✅ Smooth transitions everywhere

---

### Day 5: Testing & Final Touches (1-2 hours)

**Testing Checklist**
- [ ] Test all navigation links
- [ ] Test responsive design at:
  - [ ] 320px (small phone)
  - [ ] 375px (phone)
  - [ ] 768px (tablet)
  - [ ] 1024px (desktop)
  - [ ] 1440px (large desktop)
- [ ] Check all hover effects work
- [ ] Check form input focus states
- [ ] Check for horizontal scrolling (should be none!)
- [ ] Test on actual mobile device if possible

**Final Polish**
- [ ] Validate HTML (all 4 pages)
- [ ] Validate CSS
- [ ] Check all images have alt text
- [ ] Proofread all content
- [ ] Take screenshots of all pages
- [ ] Celebrate! 🎉

---

## 💡 Troubleshooting Guide

### Problem: Navigation menu won't open on mobile
**Solutions to try:**
1. Check that checkbox `id` matches label `for` attribute
2. Verify CSS selector `.nav-toggle:checked ~ .main-nav`
3. Make sure checkbox isn't set to `display: none` in mobile view
4. Check `max-height` transition on `.main-nav`

### Problem: Layout breaks at certain screen sizes
**Solutions to try:**
1. Test at exact breakpoint (768px, 1024px)
2. Add intermediate breakpoint if needed
3. Check for fixed widths (use max-width instead)
4. Verify media query syntax

### Problem: Images too big on mobile
**Solutions to try:**
1. Add `max-width: 100%` to images
2. Add `height: auto` to maintain aspect ratio
3. Use container with max-width
4. Consider using smaller image for mobile

### Problem: Text too small on mobile
**Solutions to try:**
1. Increase base font-size for mobile
2. Check font-size is at least 16px for body text
3. Use `rem` units instead of `px`
4. Test on actual device

### Problem: Buttons hard to tap on mobile
**Solutions to try:**
1. Ensure `min-height: 44px` on all buttons
2. Add more padding
3. Increase spacing between buttons
4. Test on actual touch device

---

## ✅ Final Submission Checklist

### Content ✓
- [ ] All personal information added
- [ ] At least 6 projects showcased
- [ ] Bio written and added
- [ ] Contact information added
- [ ] All text proofread

### Technical ✓
- [ ] 4 HTML pages created
- [ ] All pages linked via navigation
- [ ] Semantic HTML used
- [ ] Viewport meta tag on all pages
- [ ] CSS file linked to all pages
- [ ] All images have alt text

### Design ✓
- [ ] Consistent color scheme
- [ ] Two font families used
- [ ] Good contrast for readability
- [ ] Professional appearance
- [ ] Cohesive design across all pages

### Layout ✓
- [ ] Flexbox used in at least 2 places
- [ ] CSS Grid used in at least 1 place
- [ ] Sections well-spaced
- [ ] Content not cramped
- [ ] Good use of whitespace

### Responsive ✓
- [ ] Works on mobile (320px+)
- [ ] Works on tablet (768px+)
- [ ] Works on desktop (1024px+)
- [ ] Hamburger menu on mobile
- [ ] No horizontal scrolling
- [ ] Images scale properly
- [ ] Text readable at all sizes

### Interactivity ✓
- [ ] Links have hover effects
- [ ] Buttons have hover effects
- [ ] Cards/projects have hover effects
- [ ] Form inputs have focus states
- [ ] Smooth transitions (0.3s)
- [ ] Active state for current page in nav

### Code Quality ✓
- [ ] HTML validated (no errors)
- [ ] CSS validated (no errors)
- [ ] Code organized with comments
- [ ] Consistent naming conventions
- [ ] No duplicate code
- [ ] Proper indentation

### Testing ✓
- [ ] Tested at multiple screen sizes
- [ ] All links work
- [ ] Navigation works on all pages
- [ ] Tested on at least one mobile device
- [ ] Checked in multiple browsers if possible

---

## 🎉 You're Done!

When you've checked everything off:

1. **Take screenshots** of all 4 pages (mobile and desktop)
2. **Show someone** - get their feedback
3. **Save everything** - zip folder or commit to git
4. **Celebrate** - you built a complete website! 🚀

---

## 📝 Self-Evaluation

Rate yourself (1-5) on each skill:

- **HTML Structure:** ___/5
- **CSS Styling:** ___/5
- **Responsive Design:** ___/5
- **Layout (Flexbox/Grid):** ___/5
- **Design Choices:** ___/5
- **Code Organization:** ___/5

**What I'm most proud of:**


**What I found most challenging:**


**What I learned:**


**What I want to improve next time:**


---

## 🌟 Optional Enhancements

If you finish early or want to add more:

- [ ] Add smooth scrolling
- [ ] Add dark mode toggle
- [ ] Add entrance animations
- [ ] Add a blog page
- [ ] Add testimonials section
- [ ] Add downloadable resume
- [ ] Add image gallery
- [ ] Add back-to-top button
- [ ] Add loading animation
- [ ] Add custom 404 page

Remember: Done is better than perfect! Ship your project, then iterate and improve. 🚢
