# Exercise 2: Mobile Navigation Menu

## Goal
Build a responsive navigation system that uses a hamburger menu on mobile and expands to a full horizontal menu on larger screens.

## Requirements

### HTML Structure
Create a page with:
- A header with:
  - Logo or site name
  - Hamburger menu icon (3 lines)
  - Navigation menu with at least 5 links
  - Optional: Call-to-action button
- A main content area with some sample text/sections
- A footer

### CSS Requirements

#### Mobile (default)
- Logo on left, hamburger icon on right
- Navigation hidden by default
- When hamburger is clicked:
  - Menu slides in or fades in
  - Takes up full width
  - Links stack vertically
  - Links are large and easy to tap (44px minimum)
- Hamburger animates to X when open

#### Tablet (768px and up)
- Hamburger menu disappears
- Navigation displays horizontally
- Links appear inline in header
- Hover effects on navigation links

#### Desktop (1024px and up)
- Full horizontal navigation
- More spacing between links
- Enhanced hover effects (underlines, background changes, etc.)
- CTA button more prominent

### Technical Requirements
- Use the **checkbox hack** (no JavaScript needed!)
  ```html
  <input type="checkbox" id="menu-toggle">
  <label for="menu-toggle">☰</label>
  ```
- Use CSS transitions for smooth animations
- Navigation should be fixed/sticky (stays visible when scrolling)
- Mobile menu should overlay content, not push it down

### Visual Requirements
- Choose a color scheme (header background, link colors)
- Add smooth transitions (0.3s ease)
- Hamburger icon should be 3 spans that animate:
  - Top line rotates down
  - Middle line fades out
  - Bottom line rotates up
  - Forms an X shape when menu is open

## Bonus Challenges
1. Add a dark overlay behind mobile menu that dims the page content
2. Make the header shrink/change background when scrolling (sticky with class change effect)
3. Add dropdown submenus that work on both mobile and desktop
4. Include social media icons that appear in mobile menu but not desktop header

## Testing
Test your navigation at:
- 375px (mobile) - Can you easily tap all links?
- 768px (tablet) - Does it transition smoothly to horizontal?
- 1024px (desktop) - Are hover effects working?

Make sure the hamburger animation is smooth and the menu is easy to use!

## Files to Create
- `mobile-nav.html`
- `mobile-nav.css`
