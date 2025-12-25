# Card Styling & Display Cheatsheet

## 🎴 Card HTML Structure

```html
<div class="card hearts">
    <div class="card-rank">A</div>
    <div class="card-suit">♥</div>
</div>
```

## 🎨 Basic Card CSS

```css
.card {
    width: 80px;
    height: 112px;
    background: white;
    border: 2px solid #333;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
```

## ♠♥♦♣ Unicode Suit Symbols

| Suit | Symbol | HTML Entity | Unicode |
|------|--------|-------------|---------|
| Spades | ♠ | `&spades;` | `U+2660` |
| Hearts | ♥ | `&hearts;` | `U+2665` |
| Diamonds | ♦ | `&diams;` | `U+2666` |
| Clubs | ♣ | `&clubs;` | `U+2663` |

## 🎨 Color Coding

```css
/* Red suits */
.hearts, .diamonds {
    color: #d32f2f;
}

/* Black suits */
.spades, .clubs {
    color: #333;
}
```

## 🔄 Common Animations

### Hover Lift
```css
.card {
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-10px);
}
```

### Flip Animation
```css
.card {
    transition: transform 0.6s;
    transform-style: preserve-3d;
}

.card:hover {
    transform: rotateY(180deg);
}
```

### Deal Animation
```css
@keyframes deal {
    0% {
        transform: translateX(-200px) rotate(-45deg);
        opacity: 0;
    }
    100% {
        transform: translateX(0) rotate(0);
        opacity: 1;
    }
}

.card {
    animation: deal 0.8s ease-out;
}
```

## 🎲 Poker Table Layout

```css
.poker-table {
    background: radial-gradient(ellipse, #2d5016, #1a3010);
    border: 20px solid #8b4513;
    border-radius: 200px;
    padding: 60px;
}

.game-area {
    display: grid;
    grid-template-areas:
        "opp1 opp2 opp3"
        "community community community"
        "pot pot pot"
        "player player player";
    gap: 30px;
}
```

## 🃏 Face-Down Card

```css
.card.face-down {
    background: linear-gradient(135deg, #1e3799, #0c2461);
}

.card.face-down::before {
    content: '🂠';
    font-size: 40px;
    color: white;
}
```

## 📏 Responsive Design

```css
@media (max-width: 768px) {
    .card {
        width: 60px;
        height: 84px;
    }
    
    .card-rank {
        font-size: 20px;
    }
    
    .card-suit {
        font-size: 28px;
    }
}
```

## 💡 Pro Tips

1. **Maintain Aspect Ratio**: Cards should be roughly 5:7 ratio (width:height)
2. **Use Flexbox**: Center content easily with flex
3. **Add Transitions**: Smooth animations make cards feel responsive
4. **Layer Shadows**: Multiple box-shadows create depth
5. **Corner Decorations**: Use `::before` and `::after` for small suit indicators
6. **Accessibility**: Ensure sufficient color contrast
7. **Performance**: Use CSS transforms instead of position changes
