# CSS Positioning - Cheat Sheet

## 📍 What is Positioning?
Controls **where** elements appear on the page and **how** they interact with other elements.

---

## 🔑 Five Position Types

### 1. static (default)
```css
position: static;
```
- **Normal document flow**
- Top, right, bottom, left properties don't work
- Default for all elements

### 2. relative
```css
position: relative;
top: 20px;
left: 30px;
```
- **Positioned relative to its normal position**
- Original space is preserved (other elements don't move)
- Can use top, right, bottom, left to offset

**Use When:**
- You want to nudge an element slightly
- Creating a container for absolute positioning

### 3. absolute
```css
position: absolute;
top: 10px;
right: 10px;
```
- **Positioned relative to nearest positioned ancestor**
- Removed from normal flow (doesn't take up space)
- If no positioned ancestor, uses document body

**Use When:**
- Placing badges or labels on cards
- Creating tooltips
- Overlaying elements
- Making dropdown menus

### 4. fixed
```css
position: fixed;
top: 0;
left: 0;
```
- **Fixed relative to the viewport**
- Stays in place when scrolling
- Removed from normal flow

**Use When:**
- Sticky navigation headers
- Back-to-top buttons
- Chat widgets
- Cookie notices

### 5. sticky
```css
position: sticky;
top: 0;
```
- **Hybrid of relative and fixed**
- Acts relative until scroll threshold, then becomes fixed
- Stays within parent container

**Use When:**
- Section headers that stick while scrolling
- Sticky table headers
- Floating navigation

---

## 🎯 Positioning Properties

### Offset Properties
```css
top: 10px;      /* Distance from top */
right: 20px;    /* Distance from right */
bottom: 30px;   /* Distance from bottom */
left: 40px;     /* Distance from left */
```
- Only work with positioned elements (not static)
- Can use negative values
- Common units: px, %, em, rem

### z-index
```css
z-index: 10;
```
- Controls stacking order (which element is on top)
- Higher number = on top
- Only works with positioned elements
- Can be negative

---

## 💡 Common Patterns

### Fixed Header
```css
header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
}
```

### Absolute Positioning in Container
```css
.container {
    position: relative;  /* Creates positioning context */
}
.badge {
    position: absolute;
    top: -10px;
    right: -10px;
}
```

### Centered with Absolute
```css
.modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

### Sticky Section Header
```css
h2 {
    position: sticky;
    top: 0;
    background-color: white;
}
```

### Back to Top Button
```css
.back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999;
}
```

---

## 🎨 Quick Reference

| Position | In Flow? | Scrolls? | Offset Works? | Use For |
|----------|----------|----------|---------------|---------|
| static   | ✅ Yes   | ✅ Yes   | ❌ No         | Default |
| relative | ✅ Yes   | ✅ Yes   | ✅ Yes        | Small shifts, containers |
| absolute | ❌ No    | ✅ Yes   | ✅ Yes        | Overlays, badges |
| fixed    | ❌ No    | ❌ No    | ✅ Yes        | Sticky nav, buttons |
| sticky   | ✅ Yes*  | 🟡 Mixed | ✅ Yes        | Section headers |

*Sticky is in flow until it becomes fixed

---

## 🚀 Pro Tips

1. **Relative Container Pattern:**
   ```css
   .parent {
       position: relative;  /* Makes this the reference point */
   }
   .child {
       position: absolute;  /* Now positioned relative to parent */
   }
   ```

2. **Don't Forget z-index:**
   - Fixed elements often need high z-index
   - Modals typically use z-index: 1000+
   - Regular content usually 1-10

3. **Offset Values:**
   - `top: 0` sticks to top
   - `top: auto` resets offset
   - Can combine: `top: 0; left: 0;` (top-left corner)

4. **Centering with Absolute:**
   ```css
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   ```

5. **Sticky Needs:**
   - Must specify at least one offset (usually `top`)
   - Parent must have height/space to scroll
   - Won't work if parent has `overflow: hidden`

---

## ⚠️ Common Mistakes

❌ **Forgetting position: relative on parent**
```css
.parent { }  /* No position! */
.child { position: absolute; }  /* Will position relative to body */
```

✅ **Correct:**
```css
.parent { position: relative; }
.child { position: absolute; }
```

❌ **Using too many absolute/fixed elements**
- Makes layouts brittle and hard to maintain

✅ **Use Flexbox or Grid for layouts, positioning for special cases**

---

## 🎯 When to Use Each

- **static:** Default, don't need to specify
- **relative:** Container for absolute elements, small position adjustments
- **absolute:** Badges, tooltips, overlays, decorative elements
- **fixed:** Navigation bars, back-to-top buttons, chat widgets
- **sticky:** Section headers, table headers, floating navigation

---

## 📏 Layout Best Practices

1. **Use Flexbox/Grid for main layout** (not positioning)
2. **Positioning for special cases** (overlays, sticky elements, etc.)
3. **Always set z-index** for fixed/absolute elements
4. **Test on different screen sizes** (positioning can break responsive designs)
5. **Remember accessibility** (fixed elements can hide content)
