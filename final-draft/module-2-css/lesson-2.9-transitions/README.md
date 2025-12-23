# Lesson 2.9: Transitions & Hover Effects ✨

## 🎯 Learning Objectives
- Add smooth transitions to properties
- Create hover effects
- Control transition timing and duration
- Build interactive buttons and cards

## ⏱️ Transitions

Make changes smooth instead of instant!

### Basic Transition
```css
.button {
    background: blue;
    transition: background 0.3s;
}

.button:hover {
    background: darkblue;  /* Smooth color change! */
}
```

### Transition Properties
```css
transition-property: background-color;
transition-duration: 0.3s;
transition-timing-function: ease;
transition-delay: 0.1s;

/* Shorthand */
transition: background-color 0.3s ease 0.1s;
/*          property        duration timing delay */
```

### Multiple Transitions
```css
transition: background 0.3s, transform 0.2s, box-shadow 0.3s;
```

### All Properties
```css
transition: all 0.3s ease;  /* Transition everything */
```

---

## 🎨 Timing Functions

```css
transition-timing-function: ease;        /* Slow start, fast, slow end */
transition-timing-function: linear;      /* Constant speed */
transition-timing-function: ease-in;     /* Slow start */
transition-timing-function: ease-out;    /* Slow end */
transition-timing-function: ease-in-out; /* Slow start and end */
```

---

## 🖱️ Hover Effects

### Button Hover
```css
button {
    background: #3498db;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 5px;
    transition: all 0.3s;
}

button:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}
```

### Card Hover
```css
.card {
    border: 1px solid #ddd;
    transition: all 0.3s;
}

.card:hover {
    border-color: #3498db;
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    transform: scale(1.02);
}
```

### Link Hover
```css
a {
    color: #3498db;
    text-decoration: none;
    transition: color 0.2s;
}

a:hover {
    color: #2980b9;
    text-decoration: underline;
}
```

---

## 🎯 Common Transforms

```css
transform: scale(1.1);           /* Grow 10% */
transform: rotate(45deg);        /* Rotate */
transform: translateY(-5px);     /* Move up */
transform: translateX(10px);     /* Move right */
```

---

## ✅ Best Practices

✅ Use 0.2s-0.3s for most transitions  
✅ Transition specific properties when possible  
✅ Use transform for smooth animations  
✅ Don't overdo it - subtle is better!  

---

**Cheat Sheet**: [resources/cheatsheet.md](resources/cheatsheet.md)
