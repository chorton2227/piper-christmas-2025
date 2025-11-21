# Exercise 1: Fixed Navigation Bar

## 🎯 Goal
Create a fixed navigation bar that stays at the top of the page when scrolling, with proper spacing so content doesn't hide behind it.

## 📋 Instructions

1. Create `fixed-nav.html` in your student workspace
2. Create `fixed-nav.css` in your student workspace
3. Follow the requirements below

## Requirements

### HTML Structure
- Create a `<nav>` with class `navbar`
  - Logo/brand name
  - Navigation menu with 4-5 links
  - Optional: Search box or button
- Create main content with multiple sections
  - At least 3-4 sections with headings and paragraphs
  - Enough content to require scrolling

### CSS Requirements

**Navigation Bar (`.navbar`)**
- Use `position: fixed`
- Set `top: 0`, `left: 0`, `right: 0`
- Add background color
- Add box-shadow for depth
- Use Flexbox for layout
- Add `z-index` to keep it on top

**Body/Content**
- Add `padding-top` equal to navbar height
- This prevents content from hiding under the navbar

**Styling**
- Make navbar look professional
- Add hover effects to links
- Ensure it's readable and accessible

## 💡 Hints

```css
/* Fixed navbar */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    z-index: 100;
    /* Add your flexbox layout */
}

/* Prevent content from hiding */
body {
    padding-top: 70px;  /* Height of navbar */
}
```

## 🎨 Bonus Challenges

1. Add a **subtle animation** when the page loads
2. Change navbar **background on scroll** (use JavaScript or CSS backdrop-filter)
3. Add a **mobile hamburger menu** with media queries
4. Make navbar **semi-transparent** with backdrop-filter
5. Add **smooth scroll** behavior for anchor links

## ✅ Success Criteria

Your navigation should:
- [ ] Stay at the top when scrolling
- [ ] Not cover content (proper spacing)
- [ ] Have a shadow or border for visibility
- [ ] Use Flexbox for layout
- [ ] Have proper z-index
- [ ] Look professional and polished
- [ ] Work on different screen sizes

## 📸 Expected Result

```
┌─────────────────────────────────┐
│ [Logo]  [Home][About][Contact]  │ ← Stays here while scrolling
├─────────────────────────────────┤
│                                 │
│  Section 1 Content              │
│                                 │
│  Section 2 Content              │
│                                 │
│  Section 3 Content              │
│                                 │
└─────────────────────────────────┘
```

Good luck! 🚀
