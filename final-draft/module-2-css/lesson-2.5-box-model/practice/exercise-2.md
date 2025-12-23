# Exercise 2: Card Layout

## 🎯 Objective
Create a professional card layout using the box model.

## 📝 Instructions

Build a page with multiple content cards using proper spacing.

### Step 1: HTML Structure

Create `card-layout.html` with:
- A container div (class="container")
- 3 card divs inside the container (class="card")
- Each card should have:
  - A heading (h3)
  - A paragraph
  - A button

### Step 2: Container Styling

Style `.container`:
```css
.container {
    max-width: 1200px;
    margin: 0 auto;      /* Centers the container */
    padding: 40px 20px;
}
```

### Step 3: Card Styling

Style `.card`:
- `padding: 30px`
- `margin-bottom: 25px`
- `border: 1px solid #ddd`
- `border-radius: 10px`
- `background-color: white`
- `box-shadow: 0 2px 5px rgba(0,0,0,0.1)` (subtle shadow)

### Step 4: Card Content

Style card headings and paragraphs:
```css
.card h3 {
    margin-top: 0;
    margin-bottom: 15px;
}

.card p {
    margin-bottom: 20px;
    line-height: 1.6;
}
```

### Step 5: Button Styling

Create a `.btn` class:
- `padding: 12px 24px`
- `border: 2px solid #3498db`
- `background-color: #3498db`
- `color: white`
- `border-radius: 5px`

## ✅ Success Criteria

- [ ] 3 well-spaced cards
- [ ] Container centered on page
- [ ] Cards have proper padding, borders, and margins
- [ ] Buttons have comfortable click areas
- [ ] Professional, clean appearance
- [ ] Consistent spacing throughout

## 🎨 Bonus Challenges

1. Add hover effects (border color change, shadow increase)
2. Make cards display side-by-side using flexbox
3. Add an image to each card with proper spacing
4. Create different card styles (success, warning, error)
5. Add a footer section with margin-top

## 💡 Hints

- `margin: 0 auto` centers block elements horizontally
- `max-width` prevents containers from getting too wide
- Consistent spacing (like 20px, 30px, 40px) looks professional
- `box-shadow` adds depth to cards
- `border-radius` softens hard edges
