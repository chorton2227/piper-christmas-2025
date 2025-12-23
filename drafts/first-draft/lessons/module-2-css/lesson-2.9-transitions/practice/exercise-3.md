# Exercise 3: Animated Navigation Menu

Create an interactive navigation menu with smooth hover effects and transitions.

## 🎯 Goal

Build a professional navigation menu where menu items respond smoothly to hover and active states using CSS transitions and transforms.

## 📋 Requirements

### HTML Structure
- Create a navigation bar with a logo/title
- Add at least 5 navigation links (Home, About, Services, Portfolio, Contact)
- Use semantic HTML (`<nav>`, `<ul>`, `<li>`, `<a>`)
- Add a special button (like "Sign Up" or "Get Started")

### CSS Requirements

**Navigation Bar**
- Fixed or sticky positioning (optional but recommended)
- Flexbox layout for items
- Background color with slight transparency or solid
- Padding and proper spacing
- Shadow for depth

**Link Hover Effects - Choose at least 3 different styles:**

**Option 1: Underline Animation**
- Animated underline that grows from center or left
- Use `::after` pseudo-element
- Transition the `width` or `transform: scaleX()`

**Option 2: Background Slide**
- Background color slides in from a direction
- Use `::before` with position and transition

**Option 3: Lift Effect**
- Link moves up slightly
- Use `transform: translateY()`

**Option 4: Color Shift**
- Text color changes smoothly
- Background color changes
- Use `transition` on color properties

**Option 5: Border Bracket**
- Brackets or lines appear on sides
- Use `::before` and `::after`

### Special Button
- Different styling from regular links
- Prominent hover effect
- Could include:
  - Color change
  - Shadow growth
  - Scale transform
  - Background animation

### Active/Current Page Indicator
- Show which page is currently active
- Use a class like `.active`
- Could use colored underline, different background, or bold text

## 💡 Hints

```css
/* Basic nav structure */
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5%;
}

nav ul {
    display: flex;
    gap: 2rem;
    list-style: none;
}
```

```css
/* Underline animation */
.nav-link {
    position: relative;
    text-decoration: none;
    transition: color 0.3s ease;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: currentColor;
    transition: width 0.3s ease;
}

.nav-link:hover::after {
    width: 100%;
}
```

```css
/* Background slide effect */
.nav-link {
    position: relative;
    padding: 0.5rem 1rem;
}

.nav-link::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: rgba(102, 126, 234, 0.1);
    transition: width 0.3s ease;
    z-index: -1;
}

.nav-link:hover::before {
    width: 100%;
}
```

```css
/* Special button */
.cta-button {
    padding: 0.75rem 1.5rem;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border-radius: 25px;
    transition: all 0.3s ease;
}

.cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}
```

## 🎨 Bonus Challenges

1. **Mobile Menu**: Add a hamburger menu for mobile (use media queries)
2. **Dropdown Menu**: Create a dropdown submenu on hover
3. **Icon Animation**: Add icons that rotate or move on hover
4. **Sticky Nav**: Make navigation sticky with a color change on scroll (requires JavaScript)
5. **Staggered Animation**: Different links animate in with delays on page load
6. **Logo Hover**: Add a subtle effect to the logo
7. **Search Bar**: Include an animated search input
8. **Active Indicator Animation**: Animate the active page indicator

## ✅ Success Criteria

- [ ] Navigation bar with proper HTML structure
- [ ] At least 5 navigation links
- [ ] At least 3 different hover effects on links
- [ ] One special call-to-action button with hover effect
- [ ] Active/current page indicator
- [ ] Smooth transitions on all effects (0.3s recommended)
- [ ] Clean, professional appearance
- [ ] Proper spacing and alignment
- [ ] Good color scheme and contrast
- [ ] Links have `cursor: pointer` implicitly via `<a>` tags

## 🎓 What You're Learning

- Creating navigation with semantic HTML
- Using Flexbox for navigation layout
- Applying pseudo-elements (::before, ::after) for effects
- Combining transitions with pseudo-classes
- Building professional UI patterns
- Understanding z-index layering
- Creating call-to-action elements
- Responsive navigation concepts

Save your files as `animated-nav.html` and `animated-nav.css` in the student-workspace folder!
