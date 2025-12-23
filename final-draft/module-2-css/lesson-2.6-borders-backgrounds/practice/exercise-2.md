# Exercise 2: Background Colors & Gradients

## 🎯 Objective
Create beautiful backgrounds using colors and gradients.

## 📝 Instructions

Build a page with sections demonstrating different background techniques.

### Required Sections:

1. **Solid Color Background**
   - Background color of your choice
   - White text on colored background

2. **Linear Gradient**
   - Two colors blending horizontally
   - Example: `linear-gradient(to right, #3498db, #9b59b6)`

3. **Diagonal Gradient**
   - 45-degree angle gradient
   - Three colors

4. **Radial Gradient**
   - Center-outward gradient
   - Circle shape

5. **Hero Section**
   - Full-width gradient background
   - Centered white text
   - Padding: 100px

### CSS Structure:
```css
.solid-bg {
    background-color: #3498db;
    padding: 50px;
    color: white;
}

.linear-bg {
    background: linear-gradient(to right, #3498db, #9b59b6);
    padding: 50px;
}

.diagonal-bg {
    background: linear-gradient(45deg, #f12711, #f5af19, #ffd700);
    padding: 50px;
}

.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 100px 20px;
    text-align: center;
    color: white;
}
```

## ✅ Success Criteria
- [ ] 5 different background demonstrations
- [ ] At least 2 linear gradients
- [ ] 1 radial gradient
- [ ] Proper text contrast over backgrounds
- [ ] Hero section with gradient

## 🎨 Bonus: Try popular gradient combinations (sunset, ocean, fire)!
