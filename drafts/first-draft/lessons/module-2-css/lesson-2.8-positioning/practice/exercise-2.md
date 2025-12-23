# Exercise 2: Product Card with Badge

## 🎯 Goal
Create a product card with an absolutely positioned badge in the corner (like "New!", "Sale!", or "50% Off").

## 📋 Instructions

1. Create `product-card.html` in your student workspace
2. Create `product-card.css` in your student workspace
3. Follow the requirements below

## Requirements

### HTML Structure
Create 3-4 product cards, each containing:
- Container `<div>` with class `product-card`
- Badge `<div>` with class `badge` (positioned absolutely)
- Product image or placeholder
- Product title
- Price
- "Add to Cart" button

**Badge variations:**
- Card 1: "New!" badge
- Card 2: "Sale!" badge
- Card 3: "50% Off" badge
- Card 4: "Best Seller" badge

### CSS Requirements

**Product Card (`.product-card`)**
- Use `position: relative` (creates positioning context)
- Add border, border-radius, padding
- Add shadow for depth
- Use Flexbox or Grid for internal layout

**Badge (`.badge`)**
- Use `position: absolute`
- Position in top-right corner (or your choice)
- Use `top` and `right` properties
- Make it visually distinct (bright color, bold text)
- Add border-radius for rounded corners

**Layout**
- Display cards in a grid or flex layout
- Add spacing between cards
- Make cards look professional

## 💡 Hints

```css
/* Create positioning context */
.product-card {
    position: relative;  /* IMPORTANT! */
    /* other styles... */
}

/* Position badge absolutely */
.badge {
    position: absolute;
    top: 10px;
    right: 10px;
    background: red;
    color: white;
    padding: 5px 12px;
    border-radius: 5px;
    font-weight: bold;
    z-index: 1;
}
```

## 🎨 Bonus Challenges

1. Create **different badge styles** for different types (New, Sale, etc.)
2. Position some badges in **different corners** (top-left, bottom-right)
3. Add **ribbon-style badges** that wrap around the corner
4. Make badges **animate** on hover (pulse, rotate, etc.)
5. Add a **"Sold Out" overlay** that covers the whole card

## ✅ Success Criteria

Your product cards should:
- [ ] Have badges positioned in corners
- [ ] Use relative/absolute positioning correctly
- [ ] Have badges that don't break the card layout
- [ ] Look professional and polished
- [ ] Have proper spacing and styling
- [ ] Show at least 3-4 cards with different badges
- [ ] Have hover effects on cards

## 📸 Expected Result

```
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│ [New!]      │  │       [Sale]│  │ [50% OFF!]  │
│             │  │             │  │             │
│   [Image]   │  │   [Image]   │  │   [Image]   │
│             │  │             │  │             │
│ Product Name│  │ Product Name│  │ Product Name│
│ $99.99      │  │ $49.99      │  │ $24.99      │
│ [Add Cart]  │  │ [Add Cart]  │  │ [Add Cart]  │
└─────────────┘  └─────────────┘  └─────────────┘
```

Tip: The badge should be positioned OVER the card content, in the corner!

Good luck! 🛍️
