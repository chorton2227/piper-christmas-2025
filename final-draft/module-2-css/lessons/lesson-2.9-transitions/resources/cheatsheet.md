# Lesson 2.9: Hover Effects & Transitions - Cheatsheet

Quick reference guide for CSS transitions, transforms, and interactive effects.

---

## 🎯 Pseudo-Classes

```css
:hover        /* Mouse over element */
:active       /* Being clicked */
:focus        /* Has keyboard focus */
:visited      /* Link has been visited */
:link         /* Unvisited link */
:first-child  /* First child element */
:last-child   /* Last child element */
:nth-child(n) /* Nth child element */
```

### Common Usage

```css
button:hover { background: blue; }
button:active { transform: scale(0.95); }
input:focus { border-color: blue; }
a:visited { color: purple; }
```

---

## 🎬 CSS Transitions

### Basic Syntax

```css
transition: property duration timing-function delay;
```

### Properties

```css
transition-property: background;        /* What to animate */
transition-duration: 0.3s;              /* How long */
transition-timing-function: ease;       /* How it moves */
transition-delay: 0.1s;                 /* Wait before start */
```

### Shorthand Examples

```css
transition: all 0.3s;
transition: background 0.3s ease;
transition: transform 0.5s ease-in-out 0.1s;
transition: opacity 0.3s, transform 0.3s;
```

### Timing Functions

```css
ease          /* Slow start & end (default) */
linear        /* Constant speed */
ease-in       /* Slow start */
ease-out      /* Slow end */
ease-in-out   /* Slow start & end (pronounced) */
cubic-bezier(0.68, -0.55, 0.265, 1.55)  /* Custom */
```

### What to Transition

**✅ Fast (GPU-accelerated):**
- `transform` (translate, rotate, scale)
- `opacity`

**❌ Slow (causes reflow):**
- `width`, `height`
- `top`, `left`, `right`, `bottom`
- `margin`, `padding`

---

## 🔄 CSS Transforms

### Translate (Move)

```css
transform: translateX(50px);           /* Move right */
transform: translateY(-20px);          /* Move up */
transform: translate(50px, -20px);     /* Both directions */
```

### Scale (Resize)

```css
transform: scale(1.2);                 /* Grow 20% */
transform: scale(0.8);                 /* Shrink 20% */
transform: scaleX(1.5);                /* Stretch width */
transform: scaleY(1.5);                /* Stretch height */
transform: scale(1.5, 0.8);            /* Width & height */
```

### Rotate

```css
transform: rotate(45deg);              /* Clockwise */
transform: rotate(-90deg);             /* Counter-clockwise */
```

### Skew

```css
transform: skewX(20deg);               /* Slant horizontal */
transform: skewY(10deg);               /* Slant vertical */
transform: skew(20deg, 10deg);         /* Both */
```

### Combining Transforms

```css
transform: translate(50px, 0) rotate(45deg) scale(1.2);
/* Order matters! */
```

### Transform Origin

```css
transform-origin: center center;       /* Default */
transform-origin: top left;            /* Corner pivot */
transform-origin: 50% 50%;             /* Percentages */
transform-origin: 100px 50px;          /* Pixels */
```

---

## 🎨 Common Patterns

### Button Hover

```css
.button {
    transition: all 0.3s ease;
}

.button:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
```

### Card Lift

```css
.card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}
```

### Image Zoom

```css
.image-container {
    overflow: hidden;
}

.image-container img {
    transition: transform 0.5s ease;
}

.image-container:hover img {
    transform: scale(1.2);
}
```

### Smooth Color Change

```css
.element {
    background: red;
    transition: background 0.3s ease;
}

.element:hover {
    background: blue;
}
```

### Underline Animation

```css
.link {
    position: relative;
}

.link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: blue;
    transition: width 0.3s ease;
}

.link:hover::after {
    width: 100%;
}
```

### Ripple Effect

```css
.button {
    position: relative;
    overflow: hidden;
}

.button::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255,255,255,0.5);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.button:hover::after {
    width: 300px;
    height: 300px;
}
```

### Rotate Icon

```css
.icon {
    display: inline-block;
    transition: transform 0.5s ease;
}

.button:hover .icon {
    transform: rotate(360deg);
}
```

### Slide Background

```css
.button {
    position: relative;
    overflow: hidden;
}

.button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: blue;
    transition: left 0.3s ease;
    z-index: -1;
}

.button:hover::before {
    left: 0;
}
```

---

## 📏 Recommended Durations

| Effect Type | Duration |
|------------|----------|
| Small movements | 0.2s - 0.3s |
| Color changes | 0.3s - 0.4s |
| Scale/rotate | 0.3s - 0.5s |
| Slide in/out | 0.4s - 0.6s |
| Complex animations | 0.5s - 0.8s |

---

## 🎯 Best Practices

1. **Keep it subtle** - Less is more
2. **Use ease-out** - Most natural for UI
3. **Provide feedback** - Show elements are interactive
4. **Don't overdo it** - Not everything needs animation
5. **Test performance** - Ensure smooth on all devices
6. **Accessibility first** - Respect reduced motion preferences

### Accessibility

```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation: none !important;
        transition: none !important;
    }
}
```

---

## 🐛 Debugging Tips

**Choppy animations?**
- Use `transform` and `opacity` only
- Avoid animating `width`, `height`, `margin`
- Check for too many simultaneous animations

**Not working?**
- Check transition is on the element, not the :hover state
- Verify property values are different in normal and hover states
- Ensure element has a display value other than inline (for some properties)

**Unexpected behavior?**
- Transform order matters: `translate` then `rotate` ≠ `rotate` then `translate`
- Check `overflow: hidden` on parent for zoom effects
- Verify z-index layering for overlays

---

## ⚡ Quick Templates

### Interactive Button
```css
.btn {
    padding: 12px 30px;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn:hover {
    background: #764ba2;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

.btn:active {
    transform: translateY(-1px);
}
```

### Hover Card
```css
.card {
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}
```

### Nav Link
```css
.nav-link {
    position: relative;
    text-decoration: none;
    color: #333;
    transition: color 0.3s ease;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #667eea;
    transition: width 0.3s ease;
}

.nav-link:hover {
    color: #667eea;
}

.nav-link:hover::after {
    width: 100%;
}
```

---

Keep this cheatsheet handy when building interactive UI elements! 🎨✨
