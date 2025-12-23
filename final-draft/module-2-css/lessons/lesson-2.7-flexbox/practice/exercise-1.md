# Exercise 1: Navigation Bar

## 🎯 Goal
Create a navigation bar using Flexbox with a logo on the left, menu items in the center, and a button on the right.

## 📋 Instructions

1. Create a new file called `navbar.html` in your student workspace
2. Create a new file called `navbar.css` in your student workspace
3. Follow the requirements below

## Requirements

### HTML Structure
Create a navigation bar with:
- A `<nav>` element with class `navbar`
- A logo (text or emoji) with class `logo`
- A menu with 4 links inside a `<ul>` with class `nav-menu`
  - Home
  - About
  - Services
  - Contact
- A "Get Started" button with class `cta-button`

### CSS Requirements
Style your navigation bar:

**Container (`.navbar`)**
- Use Flexbox to layout items horizontally
- Add space between items using `gap`
- Vertically center all items
- Add padding and a background color
- Make it look like a header bar

**Logo (`.logo`)**
- Make it bold and larger
- Give it a distinct color

**Menu (`.nav-menu`)**
- Display links horizontally using Flexbox
- Remove bullet points
- Add space between links
- **IMPORTANT**: Use `margin: 0 auto` to push the menu to the center!

**Links**
- Remove underlines
- Add padding and hover effects
- Make them interactive with transitions

**Button (`.cta-button`)**
- Style it to stand out
- Add hover effects
- Make it rounded

## 💡 Hints

```css
/* To center an element with Flexbox: */
.nav-menu {
    margin: 0 auto;  /* This pushes siblings to the edges! */
}

/* Container setup */
.navbar {
    display: flex;
    align-items: center;  /* Vertical alignment */
    gap: 20px;            /* Space between items */
}
```

## 🎨 Bonus Challenges

1. Make it **responsive**: On mobile screens, stack items vertically
2. Add a **search icon** before the button
3. Add **active state** styling for the current page link
4. Make the navbar **sticky** at the top (use `position: sticky`)

## ✅ Success Criteria

Your navigation bar should:
- [ ] Display logo, menu, and button on one line
- [ ] Have the menu centered between logo and button
- [ ] Look professional with good spacing
- [ ] Have smooth hover effects
- [ ] Work well on different screen sizes

## 📸 What It Should Look Like

```
[🚀 Logo]        [Home] [About] [Services] [Contact]        [Get Started]
    ↑                           ↑                                  ↑
  Left                       Center                             Right
```

Good luck! 🎉
