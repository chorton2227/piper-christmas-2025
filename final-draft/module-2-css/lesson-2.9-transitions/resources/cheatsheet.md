# CSS Transitions - Cheat Sheet

## ✨ What are Transitions?
**Transitions** animate changes in CSS properties smoothly over time, making interfaces feel polished and responsive.

---

## 🎯 Basic Syntax

```css
.element {
    transition: property duration timing-function delay;
}
```

### Individual Properties:
```css
.element {
    transition-property: background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-delay: 0s;
}
```

---

## 🔑 Transition Properties

### transition-property
**What to animate**
```css
transition-property: background-color;  /* One property */
transition-property: all;                /* All properties */
transition-property: width, height;      /* Multiple properties */
```

### transition-duration
**How long**
```css
transition-duration: 0.3s;   /* 300 milliseconds */
transition-duration: 1s;     /* 1 second */
transition-duration: 500ms;  /* 500 milliseconds */
```

### transition-timing-function
**Speed curve**
```css
transition-timing-function: ease;        /* Default: slow-fast-slow */
transition-timing-function: linear;      /* Constant speed */
transition-timing-function: ease-in;     /* Slow start */
transition-timing-function: ease-out;    /* Slow end */
transition-timing-function: ease-in-out; /* Slow start and end */
```

### transition-delay
**Wait before starting**
```css
transition-delay: 0s;    /* Start immediately */
transition-delay: 0.5s;  /* Wait 0.5 seconds */
transition-delay: 200ms; /* Wait 200 milliseconds */
```

---

## 🎨 Common Patterns

### Hover Color Change
```css
.button {
    background-color: blue;
    transition: background-color 0.3s;
}
.button:hover {
    background-color: red;
}
```

### Smooth Size Change
```css
.box {
    width: 100px;
    transition: width 0.5s ease;
}
.box:hover {
    width: 200px;
}
```

### Multiple Properties
```css
.card {
    transition: transform 0.3s, box-shadow 0.3s;
}
.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}
```

### All Properties
```css
.element {
    transition: all 0.3s ease;
}
```

---

## 🚀 Popular Hover Effects

### Button Hover
```css
.btn {
    background-color: #3498db;
    color: white;
    padding: 15px 30px;
    transition: all 0.3s;
}
.btn:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}
```

### Card Lift
```css
.card {
    transition: all 0.3s ease;
}
.card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 15px 40px rgba(0,0,0,0.2);
}
```

### Link Underline Grow
```css
.link {
    position: relative;
    text-decoration: none;
}
.link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: blue;
    transition: width 0.3s;
}
.link:hover::after {
    width: 100%;
}
```

### Image Zoom
```css
.image-container {
    overflow: hidden;
}
.image {
    transition: transform 0.5s;
}
.image:hover {
    transform: scale(1.1);
}
```

### Smooth Opacity
```css
.element {
    opacity: 0.7;
    transition: opacity 0.3s;
}
.element:hover {
    opacity: 1;
}
```

---

## 📋 Transitionable Properties

### ✅ Can Transition:
- `color`, `background-color`
- `width`, `height`
- `margin`, `padding`
- `border-width`, `border-color`
- `opacity`
- `transform` (scale, rotate, translate)
- `box-shadow`
- `font-size`

### ❌ Cannot Transition:
- `display` (use opacity instead)
- `font-family`
- `position`

---

## ⚡ Transform + Transition

Combining transforms with transitions:

```css
.box {
    transition: transform 0.3s;
}

/* Move */
.box:hover {
    transform: translateX(50px);
}

/* Scale */
.box:hover {
    transform: scale(1.2);
}

/* Rotate */
.box:hover {
    transform: rotate(45deg);
}

/* Combine Multiple */
.box:hover {
    transform: translateY(-10px) scale(1.05) rotate(2deg);
}
```

---

## 🎯 Timing Functions Visual

```
linear:      ————————————————  (constant speed)
ease:        ╱——————————╲      (slow-fast-slow)
ease-in:     ╱——————————       (slow start)
ease-out:    ——————————╲       (slow end)
ease-in-out: ╱————————╲        (slow start & end)
```

---

## 💡 Pro Tips

1. **Keep Durations Short:**
   - Buttons: 0.2-0.3s
   - Cards: 0.3-0.4s
   - Large elements: 0.4-0.5s
   - Longer than 0.5s feels slow

2. **Use 'all' Sparingly:**
   ```css
   /* Better performance */
   transition: background-color 0.3s, transform 0.3s;
   
   /* Less specific, can be slower */
   transition: all 0.3s;
   ```

3. **Smooth Easing:**
   - `ease` or `ease-in-out` feel most natural
   - `linear` feels robotic
   - `ease-out` is great for entrances

4. **Different Durations:**
   ```css
   transition: transform 0.3s, box-shadow 0.5s;
   /* Transform finishes before shadow */
   ```

5. **Add to Original State:**
   ```css
   /* Put transition on original element, not :hover */
   .button {
       transition: all 0.3s;  /* ✅ Correct */
   }
   .button:hover {
       /* Don't put transition here */
   }
   ```

---

## 🚨 Common Mistakes

❌ **Transition on :hover**
```css
.button:hover {
    transition: all 0.3s;  /* Only works one way! */
}
```

✅ **Transition on original element**
```css
.button {
    transition: all 0.3s;  /* Works both ways */
}
```

❌ **Too long duration**
```css
transition: all 2s;  /* Feels sluggish */
```

✅ **Snappy and responsive**
```css
transition: all 0.3s;  /* Feels polished */
```

---

## 🎨 Real-World Examples

### Professional Button
```css
.btn {
    background: #3498db;
    color: white;
    padding: 12px 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
}
.btn:hover {
    background: #2980b9;
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(52, 152, 219, 0.4);
}
.btn:active {
    transform: translateY(-1px);
    box-shadow: 0 3px 10px rgba(52, 152, 219, 0.4);
}
```

### Smooth Navigation
```css
.nav-link {
    color: #333;
    padding: 10px 20px;
    transition: color 0.3s, background-color 0.3s;
}
.nav-link:hover {
    color: #fff;
    background-color: #3498db;
}
```

---

## ⏱️ Recommended Durations

- **Micro-interactions:** 100-200ms (very quick feedback)
- **Buttons:** 200-300ms (hover effects)
- **Cards/Components:** 300-400ms (noticeable but smooth)
- **Page transitions:** 400-500ms (max before feeling slow)
- **Never exceed:** 1000ms (1 second feels broken)

---

Remember: Transitions should enhance the user experience, not distract from it. When in doubt, keep them subtle and quick! ✨
