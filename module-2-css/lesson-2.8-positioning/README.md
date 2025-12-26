# Lesson 2.8: Positioning 🎯

## 🎯 Learning Objectives
- Understand static, relative, absolute, fixed, and sticky positioning
- Use top, right, bottom, left properties
- Create overlays and modals
- Build fixed headers and navigation
- Control stacking with z-index

## 📍 Position Property

### static (Default)
```css
position: static;  /* Normal flow, default */
```

### relative
Position relative to normal position:
```css
position: relative;
top: 20px;     /* Move down 20px from normal position */
left: 10px;    /* Move right 10px */
```

### absolute
Position relative to nearest positioned ancestor:
```css
position: absolute;
top: 0;
right: 0;      /* Top-right corner of parent */
```

### fixed
Position relative to viewport (stays on scroll):
```css
position: fixed;
top: 0;
left: 0;       /* Fixed to top-left of screen */
```

### sticky
Switches between relative and fixed:
```css
position: sticky;
top: 0;        /* Sticks to top when scrolling */
```

---

## 🎨 Common Patterns

### Fixed Header
```css
header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: white;
    z-index: 100;
}
```

### Centered Overlay
```css
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    display: flex;
    justify-content: center;
    align-items: center;
}
```

### Badge on Card
```css
.card {
    position: relative;
}

.badge {
    position: absolute;
    top: 10px;
    right: 10px;
}
```

---

## 🎮 Practice

Build fixed headers, overlays, and positioned elements!

**Cheat Sheet**: [resources/cheatsheet.md](resources/cheatsheet.md)
