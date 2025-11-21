# Exercise 3: Modal Dialog

## 🎯 Goal
Create a modal dialog that appears centered on the screen with a semi-transparent overlay behind it, using fixed positioning.

## 📋 Instructions

1. Create `modal-dialog.html` in your student workspace
2. Create `modal-dialog.css` in your student workspace
3. Follow the requirements below

## Requirements

### HTML Structure
- Button to open the modal
- Modal overlay `<div>` with class `modal-overlay`
  - Modal content `<div>` with class `modal-content`
    - Close button (X)
    - Modal title
    - Modal body text
    - Action buttons (OK, Cancel)

**JavaScript (simple):**
```html
<script>
function openModal() {
    document.getElementById('modal').style.display = 'flex';
}
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
</script>
```

### CSS Requirements

**Modal Overlay (`.modal-overlay`)**
- Use `position: fixed`
- Cover entire viewport: `top: 0`, `left: 0`, `right: 0`, `bottom: 0`
- Semi-transparent background: `rgba(0, 0, 0, 0.5)`
- Initially hidden: `display: none`
- Use Flexbox to center content
- High `z-index` (1000+)

**Modal Content (`.modal-content`)**
- Use `position: relative`
- White background
- Max-width for readability
- Border-radius for rounded corners
- Box-shadow for depth
- Higher `z-index` than overlay

**Centering**
```css
.modal-overlay {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

## 💡 Hints

```css
/* Overlay covers everything */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: none;  /* Hidden by default */
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

/* Modal content */
.modal-content {
    position: relative;
    background: white;
    padding: 30px;
    border-radius: 10px;
    max-width: 500px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.3);
}

/* Close button */
.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
}
```

## 🎨 Bonus Challenges

1. Add **fade-in animation** when modal opens
2. Make modal **close when clicking overlay** (not just X button)
3. Add **slide-down animation** for modal content
4. Create **different modal sizes** (small, medium, large)
5. Add **focus trap** so keyboard navigation stays in modal
6. Create a **confirmation modal** with Yes/No buttons
7. Add **Escape key** to close modal

## ✅ Success Criteria

Your modal should:
- [ ] Be hidden by default
- [ ] Open when button is clicked
- [ ] Be centered on screen
- [ ] Have semi-transparent overlay
- [ ] Overlay covers entire viewport
- [ ] Have close button that works
- [ ] Use proper z-index values
- [ ] Look professional and polished
- [ ] Have proper spacing and typography

## 📸 Expected Result

**Before clicking:**
```
┌─────────────────────────┐
│  Page Content           │
│                         │
│  [Open Modal Button]    │
│                         │
└─────────────────────────┘
```

**After clicking:**
```
┌─────────────────────────┐
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│ ← Semi-transparent overlay
│▓▓▓┌─────────────┐▓▓▓▓▓▓▓│
│▓▓▓│ Modal Title │[X]▓▓▓▓│
│▓▓▓├─────────────┤▓▓▓▓▓▓▓│
│▓▓▓│   Content   │▓▓▓▓▓▓▓│
│▓▓▓│             │▓▓▓▓▓▓▓│
│▓▓▓│ [OK][Cancel]│▓▓▓▓▓▓▓│
│▓▓▓└─────────────┘▓▓▓▓▓▓▓│
└─────────────────────────┘
```

## 🔧 Testing Checklist

- [ ] Modal opens when button clicked
- [ ] Modal closes when X clicked
- [ ] Modal is perfectly centered
- [ ] Overlay covers entire screen
- [ ] Can't interact with content behind modal
- [ ] Modal looks good on different screen sizes
- [ ] Close button is easy to find

Good luck! 🎭
