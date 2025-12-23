# Exercise 2: Responsive Card Grid

## 🎯 Goal
Create a responsive card grid that automatically wraps and adjusts to different screen sizes using `flex-wrap`.

## 📋 Instructions

1. Create a new file called `card-grid.html` in your student workspace
2. Create a new file called `card-grid.css` in your student workspace
3. Follow the requirements below

## Requirements

### HTML Structure
Create a card grid with:
- A container `<div>` with class `card-container`
- At least 6 cards inside, each with class `card`
- Each card should have:
  - An icon or emoji (class `card-icon`)
  - A title (class `card-title`)
  - A description paragraph (class `card-description`)
  - A "Learn More" link or button (class `card-link`)

**Card Ideas:**
- Features (⚡ Fast, 🔒 Secure, 📱 Responsive, etc.)
- Products (📚 Books, 🎮 Games, 🎧 Music, etc.)
- Services (💼 Consulting, 🎨 Design, 💻 Development, etc.)

### CSS Requirements

**Container (`.card-container`)**
- Use `display: flex`
- Enable wrapping with `flex-wrap: wrap`
- Add gap between cards
- Center the grid on the page

**Cards (`.card`)**
- Use `flex: 1 1 250px` to make them flexible
  - `1` = can grow
  - `1` = can shrink
  - `250px` = minimum width before wrapping
- Add padding, border, and border-radius
- Add a background color
- Make them look like cards with shadow
- Add hover effects

**Card Content**
- Center-align text
- Style the icon/emoji to be large
- Make the title bold
- Add appropriate spacing
- Style the link/button

## 💡 Hints

```css
/* Flexible card grid */
.card-container {
    display: flex;
    flex-wrap: wrap;  /* Allow cards to wrap to new lines */
    gap: 20px;        /* Space between cards */
}

.card {
    flex: 1 1 250px;  /* Grow, shrink, min-width */
    /* This means: cards will be at least 250px wide,
       but will grow to fill space and wrap when needed */
}
```

## 🎨 Bonus Challenges

1. Add different **colors** for each card
2. Make cards **flip** or **lift** on hover
3. Add a **"Featured" badge** to one card
4. Make cards **animate in** when the page loads
5. Add a **max-width** so cards don't get too big on large screens

## ✅ Success Criteria

Your card grid should:
- [ ] Display cards in a grid that wraps automatically
- [ ] Have at least 6 cards with icons, titles, and descriptions
- [ ] Look good on desktop (multiple columns)
- [ ] Wrap to fewer columns on smaller screens
- [ ] Have smooth hover effects
- [ ] Use proper spacing with `gap`

## 📸 What It Should Look Like

**Desktop (3 columns):**
```
[Card 1]  [Card 2]  [Card 3]
[Card 4]  [Card 5]  [Card 6]
```

**Tablet (2 columns):**
```
[Card 1]  [Card 2]
[Card 3]  [Card 4]
[Card 5]  [Card 6]
```

**Mobile (1 column):**
```
[Card 1]
[Card 2]
[Card 3]
[Card 4]
[Card 5]
[Card 6]
```

This happens automatically with `flex-wrap`! 🎉

Good luck! 🚀
