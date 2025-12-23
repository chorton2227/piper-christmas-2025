# CSS Positioning Cheat Sheet

## 🎯 Quick Reference

### Position Values

```css
.element {
    position: static;    /* Default - normal flow */
    position: relative;  /* Relative to original position */
    position: absolute;  /* Relative to positioned parent */
    position: fixed;     /* Relative to viewport */
    position: sticky;    /* Hybrid - sticks when scrolling */
}
```

---

## 📐 Positioning Properties

### top, right, bottom, left

```css
.element {
    position: relative; /* Must be positioned first! */
    top: 20px;         /* Move down 20px */
    right: 30px;       /* Move left 30px */
    bottom: 40px;      /* Move up 40px */
    left: 50px;        /* Move right 50px */
}
```

**Remember**: 
- `top: 20px` means "20px FROM the top" (moves DOWN)
- `left: 50px` means "50px FROM the left" (moves RIGHT)

---

## 1️⃣ Static (Default)

```css
.element {
    position: static;  /* This is the default */
}
```

- Normal document flow
- Cannot use top/right/bottom/left
- Cannot use z-index
- Most elements start as static

---

## 2️⃣ Relative

```css
.element {
    position: relative;
    top: 10px;   /* Moves down from original position */
    left: 20px;  /* Moves right from original position */
}
```

**Use cases:**
- Nudge elements slightly
- Create positioning context for absolute children
- Fine-tune layouts

**Key point**: Original space is still reserved!

---

## 3️⃣ Absolute

```css
.parent {
    position: relative;  /* Creates context */
}

.child {
    position: absolute;
    top: 10px;
    right: 10px;
}
```

**Use cases:**
- Badges/notifications
- Dropdown menus
- Tooltips
- Image overlays

**Key point**: Removed from normal flow!

---

## 4️⃣ Fixed

```css
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
}

body {
    padding-top: 60px;  /* Compensate for fixed navbar */
}
```

**Use cases:**
- Fixed navigation bars
- "Back to top" buttons
- Chat widgets
- Cookie banners

**Key point**: Stays in place when scrolling!

---

## 5️⃣ Sticky

```css
.header {
    position: sticky;
    top: 0;  /* Sticks when reaching top */
}
```

**Use cases:**
- Section headers
- Table headers
- Sidebars

**Key point**: Acts like relative until threshold, then fixed!

---

## 🎨 Z-Index (Layering)

```css
.modal {
    position: fixed;
    z-index: 1000;  /* High - appears on top */
}

.dropdown {
    position: absolute;
    z-index: 100;   /* Medium */
}

.card {
    position: relative;
    z-index: 1;     /* Low - appears behind */
}
```

**Rules:**
- Only works on positioned elements (not static)
- Higher numbers = in front
- Can be negative
- Default is auto (0)

---

## 🎯 Common Patterns

### Badge in Corner

```css
.container {
    position: relative;
}

.badge {
    position: absolute;
    top: 10px;
    right: 10px;
}
```

### Fixed Header

```css
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
}
```

### Centered Modal

```css
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
```

### Center with Transform

```css
.element {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

### Sticky Section Header

```css
.section-header {
    position: sticky;
    top: 60px;  /* Below fixed navbar */
    background: white;
    z-index: 10;
}
```

### Back to Top Button

```css
.back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 999;
}
```

### Tooltip

```css
.tooltip-container {
    position: relative;
}

.tooltip {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
}
```

---

## 📊 Quick Comparison

| Position | In Flow? | Scrolls? | Context |
|----------|----------|----------|---------|
| `static` | Yes | Yes | N/A |
| `relative` | Yes* | Yes | Original position |
| `absolute` | No | Yes | Positioned parent |
| `fixed` | No | No | Viewport |
| `sticky` | Yes* | Sticks | Parent |

*\*Keeps original space*

---

## ⚠️ Common Mistakes

### ❌ Absolute without relative parent

```css
.child {
    position: absolute;
    /* Without positioned parent, uses body! */
}
```

### ✅ Correct way

```css
.parent {
    position: relative;
}

.child {
    position: absolute;
    /* Now positioned within parent */
}
```

### ❌ Z-index on static element

```css
.element {
    z-index: 100;  /* Won't work! */
}
```

### ✅ Correct way

```css
.element {
    position: relative;
    z-index: 100;
}
```

### ❌ Forgetting to compensate for fixed element

```css
.navbar {
    position: fixed;
    height: 60px;
}
/* Content hidden under navbar! */
```

### ✅ Correct way

```css
.navbar {
    position: fixed;
    height: 60px;
}

body {
    padding-top: 60px;
}
```

---

## 💡 Pro Tips

1. **Use relative for positioning context** even if not moving the element
2. **Organize z-index values**: 1, 10, 100, 1000 (not 1, 2, 3, 4)
3. **Fixed elements**: Remember to add padding to body
4. **Sticky requirements**: Parent must have height, no overflow:hidden
5. **Center with transform**: More reliable than margins
6. **Absolute for overlays**: Great for badges, tooltips, dropdowns

---

## 🎨 Z-Index Scale

```
1000+ = Modals, alerts
100-999 = Dropdowns, tooltips
10-99 = Fixed headers
1-9 = Slight layering
0 = Default
-1 = Behind
```

---

## 🔍 Debugging Checklist

- [ ] Is the element positioned? (not static)
- [ ] Does absolute have a positioned parent?
- [ ] Is z-index high enough?
- [ ] Did you compensate for fixed elements?
- [ ] Does sticky have a threshold (top/bottom)?
- [ ] Is overflow:hidden blocking sticky?

---

## 📱 Responsive Positioning

```css
/* Desktop: fixed sidebar */
.sidebar {
    position: fixed;
    width: 250px;
}

/* Mobile: normal flow */
@media (max-width: 768px) {
    .sidebar {
        position: static;
        width: auto;
    }
}
```

---

## 🎯 When to Use

| Use Case | Position |
|----------|----------|
| Normal layout | static |
| Nudge slightly | relative |
| Badge on card | absolute |
| Dropdown menu | absolute |
| Fixed navbar | fixed |
| Back to top button | fixed |
| Section headers | sticky |
| Modal overlay | fixed |
| Tooltip | absolute |

---

## Remember! 🌟

- **Static** = Default
- **Relative** = Original position
- **Absolute** = Positioned parent
- **Fixed** = Viewport
- **Sticky** = Threshold

Happy positioning! 🚀
