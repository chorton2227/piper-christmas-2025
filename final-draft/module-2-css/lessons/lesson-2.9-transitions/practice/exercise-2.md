# Exercise 2: Animated Card Gallery

Create an interactive card gallery where each card has hover effects using transitions and transforms.

## 🎯 Goal

Build a responsive gallery of cards (at least 4) with different hover animations that make them feel interactive and engaging.

## 📋 Requirements

### HTML Structure
- Create a page titled "Animated Card Gallery"
- Add at least 4 cards in a grid layout
- Each card should have:
  - An image placeholder (use a colored div or SVG)
  - A heading
  - A short description
  - Optional: a button or link

### CSS Requirements

**Card 1: Lift and Shadow**
- Lifts up on hover
- Shadow grows larger
- Use `transform: translateY()` and `box-shadow`

**Card 2: Image Zoom**
- Card stays still
- Image inside zooms in on hover
- Use `overflow: hidden` on image container
- Use `transform: scale()` on the image

**Card 3: Tilt Effect**
- Card tilts slightly when hovered
- Use `transform: rotate()` combined with `translateY()`

**Card 4: Overlay Reveal**
- Shows a colored overlay with extra content on hover
- Use positioned overlay with `opacity` transition
- Or use `transform: translateY()` to slide overlay up

### Layout Requirements
- Use CSS Grid or Flexbox for card layout
- Cards should be responsive (stack on mobile)
- Equal spacing between cards
- Cards should have a minimum width

### Styling Guidelines
- Give cards rounded corners
- Add subtle shadows to cards
- Use smooth transitions (0.3s - 0.5s)
- Choose a nice color scheme
- Ensure images/placeholders look good
- Add proper padding inside cards

## 💡 Hints

```css
/* Grid layout for cards */
.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}
```

```css
/* Image zoom effect */
.card-image {
    overflow: hidden;
}

.card-image img {
    transition: transform 0.5s ease;
}

.card:hover .card-image img {
    transform: scale(1.2);
}
```

```css
/* Overlay reveal */
.card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(102, 126, 234, 0.9);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.card:hover .card-overlay {
    opacity: 1;
}
```

## 🎨 Bonus Challenges

1. **Border Animation**: Add animated borders that draw around the card
2. **Staggered Content**: Make card title and text animate separately
3. **Flip Card**: Create a card that flips to show content on the back
4. **Perspective Effect**: Add 3D rotation with perspective
5. **Hover Glow**: Add a glowing effect around the card
6. **Multiple Cards**: Create 6 or more cards with varied effects

## ✅ Success Criteria

- [ ] At least 4 cards in a grid layout
- [ ] Each card has a different hover effect
- [ ] At least one card lifts up with growing shadow
- [ ] At least one card has image zoom effect
- [ ] At least one card uses rotation
- [ ] Smooth transitions on all effects
- [ ] Responsive layout (cards stack on mobile)
- [ ] Visually appealing design with good spacing
- [ ] Cards have proper structure (image, title, description)

## 🎓 What You're Learning

- Creating card-based layouts
- Combining multiple transform properties
- Working with positioned overlays
- Managing overflow for effects
- Building responsive grids
- Creating professional UI interactions
- Layering effects for rich experiences

Save your files as `card-gallery.html` and `card-gallery.css` in the student-workspace folder!
