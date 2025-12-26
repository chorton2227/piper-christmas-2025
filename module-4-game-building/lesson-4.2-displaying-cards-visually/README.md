# Lesson 4.2: Displaying Cards Visually 🎨

## 🎯 Lesson Objectives

By the end of this lesson, you will:
- Create beautiful playing card graphics using HTML and CSS
- Use Unicode symbols for card suits (♠ ♥ ♦ ♣)
- Style cards with CSS (colors, borders, shadows, gradients)
- Implement card flip animations and hover effects
- Position cards on a virtual poker table
- Make cards responsive to different screen sizes

## 📚 Introduction

Now that we can create and manage a deck of cards in JavaScript, it's time to make them LOOK like real cards! In this lesson, we'll use HTML and CSS to create visually appealing playing cards that could appear in a professional card game.

### Why Visual Design Matters

In Module 3, we focused on **functionality** - making things work. Now we're adding **polish** - making things look great! Players judge games by:
- **First impressions** - Does it look professional?
- **Clarity** - Can I easily see what's happening?
- **Feel** - Does it feel smooth and responsive?

Good visual design makes your game enjoyable to play!

## 🎴 Basic Card HTML Structure

### The Card Element

A playing card needs several parts:
- **Container** - Holds everything together
- **Face** - The front showing suit and rank
- **Back** - The card back pattern
- **Content** - The rank and suit symbols

```html
<div class="card">
    <div class="card-face">
        <div class="card-rank">7</div>
        <div class="card-suit">♥</div>
    </div>
</div>
```

### Semantic Structure

We use `<div>` elements because cards are generic containers. The classes tell us what each part represents.

## 🎨 CSS Styling Basics

### Card Container

```css
.card {
    width: 100px;
    height: 140px;
    background: white;
    border: 2px solid #333;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    font-family: Arial, sans-serif;
    position: relative;
}
```

**Style Breakdown:**
- `width/height` - Card dimensions (typical playing card ratio is 5:7)
- `background` - White card face
- `border` - Dark edge around card
- `border-radius` - Rounded corners (10px looks good)
- `box-shadow` - 3D depth effect
- `flexbox` - Centers content easily
- `position: relative` - For absolute positioning of child elements

### Color-Coded Suits

Red suits (hearts ♥, diamonds ♦) and black suits (spades ♠, clubs ♣):

```css
.card.hearts .card-suit,
.card.diamonds .card-suit {
    color: #e74c3c;  /* Red */
}

.card.spades .card-suit,
.card.clubs .card-suit {
    color: #2c3e50;  /* Black */
}
```

### Typography

```css
.card-rank {
    font-size: 32px;
    font-weight: bold;
}

.card-suit {
    font-size: 48px;
    line-height: 1;
}
```

Large, clear fonts make cards easy to read from a distance.

## ♠♥♦♣ Unicode Card Symbols

### The Four Suits

Unicode provides beautiful built-in card symbols:

```javascript
const suitSymbols = {
    spades: '♠',      // Unicode: \u2660
    hearts: '♥',      // Unicode: \u2665
    diamonds: '♦',    // Unicode: \u2666
    clubs: '♣'        // Unicode: \u2663
};
```

### Using in HTML

```html
<div class="card-suit">♥</div>
```

Or in JavaScript:
```javascript
element.textContent = '♥';
```

### Why Unicode?

✅ **No images needed** - Works immediately  
✅ **Scalable** - Looks sharp at any size  
✅ **Fast** - No file loading  
✅ **Accessible** - Screen readers can describe them  

## 🎭 Card States

### Face-Up vs Face-Down

Cards have two states:

```css
/* Face-up (default) */
.card-face {
    display: block;
}

.card-back {
    display: none;
}

/* Face-down */
.card.face-down .card-face {
    display: none;
}

.card.face-down .card-back {
    display: block;
}
```

### Card Back Design

```css
.card-back {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card-back::before {
    content: '';
    width: 80%;
    height: 80%;
    border: 3px solid white;
    border-radius: 8px;
}
```

This creates a gradient back with a white border pattern.

## ✨ Hover Effects

### Interactive Feedback

When the user hovers over a card, give visual feedback:

```css
.card {
    transition: transform 0.2s, box-shadow 0.2s;
    cursor: pointer;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}
```

**What happens:**
- Card rises 10px
- Shadow gets bigger (appears to lift off table)
- Smooth transition over 0.2 seconds
- Cursor changes to pointer (hand icon)

### Selected State

```css
.card.selected {
    transform: translateY(-20px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
    border: 3px solid #f39c12;
}
```

Selected cards are higher and have a gold border.

## 🔄 Animations

### Card Flip Animation

```css
.card {
    transition: transform 0.6s;
    transform-style: preserve-3d;
}

.card.flipping {
    transform: rotateY(180deg);
}

.card-face {
    backface-visibility: hidden;
}

.card-back {
    backface-visibility: hidden;
    transform: rotateY(180deg);
}
```

**How it works:**
1. `preserve-3d` - Enables 3D transformations
2. `rotateY(180deg)` - Flips card along Y-axis
3. `backface-visibility: hidden` - Hide the back side when facing away
4. Card back is pre-rotated 180° so it appears when card flips

### Deal Animation

Simulate dealing from a deck:

```css
@keyframes deal {
    from {
        opacity: 0;
        transform: translateX(-200px) rotate(-20deg);
    }
    to {
        opacity: 1;
        transform: translateX(0) rotate(0);
    }
}

.card.dealing {
    animation: deal 0.5s ease-out;
}
```

Cards slide in from the left with a rotation.

### Pulse Effect

Draw attention to important cards:

```css
@keyframes pulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
}

.card.highlight {
    animation: pulse 1s infinite;
}
```

## 📐 Table Layout

### Poker Table Structure

```html
<div class="poker-table">
    <div class="community-cards">
        <!-- Flop, turn, river -->
    </div>
    
    <div class="player-positions">
        <div class="player player-1">
            <div class="player-hand"></div>
            <div class="player-info">Player 1</div>
        </div>
        <!-- More players... -->
    </div>
    
    <div class="pot">
        <div class="pot-amount">$100</div>
    </div>
</div>
```

### Table Styling

```css
.poker-table {
    width: 900px;
    height: 600px;
    background: radial-gradient(ellipse at center, #27ae60 0%, #229954 100%);
    border: 20px solid #8b4513;
    border-radius: 300px / 200px;  /* Ellipse shape */
    position: relative;
    box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.3);
}
```

Creates an oval green felt table with wood border.

### Positioning Players

```css
.player {
    position: absolute;
}

.player-1 {
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
}

.player-2 {
    top: 20px;
    left: 20%;
}

.player-3 {
    top: 20px;
    right: 20%;
}
```

Use absolute positioning to place players around the table.

## 📱 Responsive Design

### Media Queries

Make cards scale on smaller screens:

```css
/* Desktop */
.card {
    width: 100px;
    height: 140px;
}

/* Tablet */
@media (max-width: 768px) {
    .card {
        width: 80px;
        height: 112px;
        font-size: 0.9em;
    }
    
    .poker-table {
        width: 700px;
        height: 500px;
    }
}

/* Mobile */
@media (max-width: 480px) {
    .card {
        width: 60px;
        height: 84px;
        font-size: 0.7em;
    }
    
    .poker-table {
        width: 100%;
        height: 400px;
    }
}
```

### Flexible Sizing

Use `rem` and `em` units for scalability:

```css
.card-rank {
    font-size: 2em;  /* Relative to card's font-size */
}

.card-suit {
    font-size: 3em;
}
```

## 🎯 Combining HTML, CSS, and JavaScript

### Creating Cards Dynamically

```javascript
function createCardElement(card) {
    const cardDiv = document.createElement('div');
    cardDiv.className = `card ${card.suit}`;
    
    cardDiv.innerHTML = `
        <div class="card-face">
            <div class="card-rank">${card.rank}</div>
            <div class="card-suit">${getSuitSymbol(card.suit)}</div>
        </div>
        <div class="card-back"></div>
    `;
    
    return cardDiv;
}

function getSuitSymbol(suit) {
    const symbols = {
        spades: '♠',
        hearts: '♥',
        diamonds: '♦',
        clubs: '♣'
    };
    return symbols[suit];
}
```

### Adding Cards to DOM

```javascript
const hand = [
    { suit: 'hearts', rank: '7', value: 7 },
    { suit: 'spades', rank: 'A', value: 14 }
];

const handContainer = document.querySelector('.player-hand');

hand.forEach(card => {
    const cardElement = createCardElement(card);
    handContainer.appendChild(cardElement);
});
```

### Card Interactions

```javascript
// Add click handler
cardDiv.addEventListener('click', () => {
    cardDiv.classList.toggle('selected');
});

// Flip card
function flipCard(cardElement) {
    cardElement.classList.add('flipping');
    
    setTimeout(() => {
        cardElement.classList.toggle('face-down');
        cardElement.classList.remove('flipping');
    }, 300);
}

// Deal animation
function dealCard(cardElement, delay) {
    setTimeout(() => {
        cardElement.classList.add('dealing');
    }, delay);
}
```

## 💡 Best Practices

### 1. Use CSS Variables

Define colors once, use everywhere:

```css
:root {
    --card-red: #e74c3c;
    --card-black: #2c3e50;
    --card-bg: white;
    --table-green: #27ae60;
}

.card.hearts .card-suit {
    color: var(--card-red);
}
```

### 2. Accessibility

Add ARIA labels:

```html
<div class="card hearts" role="img" aria-label="Seven of Hearts">
    <div class="card-rank">7</div>
    <div class="card-suit">♥</div>
</div>
```

### 3. Performance

- Use `transform` instead of `left/top` for animations (GPU accelerated)
- Limit the number of animated elements
- Use `will-change` for elements that will animate:

```css
.card {
    will-change: transform;
}
```

### 4. Organization

Separate concerns:
- `cards.css` - Card styling
- `table.css` - Table layout
- `animations.css` - All animations
- `responsive.css` - Media queries

## 🏆 Key Takeaways

- **Unicode symbols** (♠♥♦♣) create professional-looking cards without images
- **Flexbox** makes centering and layout easy
- **CSS transitions** create smooth interactions
- **Transform** is better than position for animations
- **Media queries** make designs responsive
- **Classes** control card states (face-up, selected, etc.)

## 📝 Practice Challenges

Ready to practice? Check the `practice/` folder for exercises:

1. **Exercise 1:** Style a complete playing card
2. **Exercise 2:** Create card flip and hover animations
3. **Exercise 3:** Build a poker table layout with player positions

## 🎯 What's Next?

In **Lesson 4.3**, we'll learn how to **evaluate poker hands** - detecting pairs, three of a kind, straights, and flushes!

---

**Great job! 🎉 Your cards now look professional and interactive!**
