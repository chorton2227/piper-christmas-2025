# Exercise 2: Hex Code Colors

## 🎯 Goal
Learn to use hex codes to create a professional-looking color palette for your webpage.

## 📋 Instructions

### Step 1: Create Your Files
In `student-workspace`, create:
- `hex-colors.html`
- `hex-colors.css`

### Step 2: Choose Your Color Palette
Use an online tool to pick colors:
- Google: Search "color picker"
- Coolors.co
- Adobe Color
- HTML Color Codes

Pick **3-4 colors** that look good together!

### Step 3: Build a Card Layout
Create HTML with:
- Header section
- 3-4 card divs (like project cards or product cards)
- Each card should have a heading and paragraph
- Buttons inside cards

### Step 4: Style with Hex Codes
Use your chosen hex colors:

**Example:**
```css
:root {
    --primary: #3498db;    /* Your main color */
    --secondary: #2ecc71;  /* Accent color */
    --dark: #2c3e50;       /* Dark text/headers */
    --light: #ecf0f1;      /* Light backgrounds */
}

body {
    background-color: #f5f5f5;
}

.header {
    background-color: #2c3e50;
    color: #ffffff;
}

.card {
    background-color: #ffffff;
    border-left: 4px solid #3498db;
}

.card.featured {
    background-color: #e3f2fd;
    border-left-color: #2ecc71;
}
```

## 💡 Tips for Choosing Colors

**Professional Palettes:**
- Blue scheme: `#3498db`, `#2c3e50`, `#ecf0f1`
- Green scheme: `#27ae60`, `#16a085`, `#f4f6f7`
- Purple scheme: `#9b59b6`, `#8e44ad`, `#f5f0ff`

**How to Build a Palette:**
1. Choose one main color you love
2. Pick a darker version for text/headers
3. Pick a lighter version for backgrounds
4. Add one accent color for buttons/highlights

## ✅ Success Checklist
- [ ] Used 3-4 different hex codes
- [ ] All colors use `#RRGGBB` format
- [ ] Created a cohesive color scheme
- [ ] Good contrast between text and backgrounds
- [ ] Cards or sections have different styling
- [ ] Looks professional!

## 🌟 Bonus Challenges
1. Use shorthand hex where possible (`#FFF` instead of `#FFFFFF`)
2. Create a gradient background using two hex colors
3. Add hover effects that change hex colors
4. Make a dark mode version with different hex codes
5. Copy a color scheme from a website you like!

## 🎨 Inspiration

**Tech/Professional:**
- `#2c3e50` (dark blue-gray)
- `#3498db` (bright blue)
- `#ecf0f1` (light gray)

**Nature/Fresh:**
- `#27ae60` (green)
- `#f39c12` (orange)
- `#ffffff` (white)

**Creative/Fun:**
- `#e74c3c` (red)
- `#9b59b6` (purple)
- `#f1c40f` (yellow)

---

**Compare with:** [answer-key/hex-colors.html](../answer-key/hex-colors.html) when done!
