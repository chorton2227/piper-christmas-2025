# Exercise 1: Responsive Card Grid

## Goal
Create a responsive product card grid that adjusts from 1 column on mobile to 4 columns on large desktops.

## Requirements

### HTML Structure
Create a page with:
- A header with title "Product Gallery"
- A container for product cards
- At least 8 product cards, each containing:
  - Product image (you can use a colored div with SVG or placeholder)
  - Product name
  - Product price
  - "Add to Cart" button

### CSS Requirements

#### Mobile (default)
- Cards stack in 1 column
- Full width cards with padding
- Card spacing: 20px gap
- Cards have:
  - White background
  - Rounded corners (12px)
  - Shadow effect
  - Padding: 20px

#### Tablet (768px and up)
- 2 columns of cards
- Cards maintain aspect ratio
- Gap between cards: 25px
- Hover effect: cards lift slightly

#### Desktop (1024px and up)
- 3 columns of cards
- Gap: 30px
- Larger padding in cards (25px)
- Enhanced hover effects

#### Large Desktop (1440px and up)
- 4 columns of cards
- Maximum container width: 1400px
- Centered on page

### Visual Requirements
- Use CSS Grid for the layout
- Add smooth transitions on hover
- Make sure text is readable
- Buttons should be prominent and easy to click (minimum 44px height)
- Images should maintain aspect ratio

## Bonus Challenges
1. Add a filter/sort bar that stacks on mobile but goes horizontal on desktop
2. Make the "Add to Cart" buttons change color on hover
3. Add a loading skeleton effect for images
4. Include a price badge that positions differently on mobile vs desktop

## Testing
Test your page at these widths:
- 375px (mobile)
- 768px (tablet)
- 1024px (desktop)
- 1440px (large desktop)

Make sure cards look good and are easy to interact with at all sizes!

## Files to Create
- `responsive-cards.html`
- `responsive-cards.css`
