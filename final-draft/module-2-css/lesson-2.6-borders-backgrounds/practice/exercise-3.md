# Exercise 3: Complete Visual Design

## 🎯 Objective
Create a polished webpage combining borders, backgrounds, gradients, and shadows.

## 📝 Instructions

Build a complete landing page using all visual techniques learned.

### Required Elements:

1. **Header**
   - Gradient background
   - Border-bottom
   - Padding and centered content

2. **Hero Section**
   - Large gradient background
   - Centered text (white)
   - Padding: 120px vertical

3. **Feature Cards** (3 cards)
   - White background
   - Border and border-radius
   - Box-shadow for depth
   - Hover effect (change shadow/border)

4. **Call-to-Action**
   - Different gradient
   - Rounded button with border
   - Centered content

5. **Footer**
   - Solid background color
   - Border-top
   - Padding

### Design Requirements:
- Consistent border-radius (8-10px)
- Cohesive color scheme
- Good contrast (readable text)
- Professional spacing
- Subtle shadows

### Example CSS Patterns:
```css
.header {
    background: linear-gradient(to right, #2c3e50, #3498db);
    border-bottom: 3px solid #2980b9;
    padding: 20px 0;
}

.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 120px 20px;
    text-align: center;
    color: white;
}

.card {
    background: white;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    transition: all 0.3s;
}

.card:hover {
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    border-color: #3498db;
}

.btn {
    background: linear-gradient(to bottom, #5dade2, #3498db);
    border: 2px solid #2980b9;
    border-radius: 25px;
    padding: 15px 40px;
    color: white;
}
```

## ✅ Success Criteria
- [ ] Multiple gradient backgrounds
- [ ] Borders with border-radius
- [ ] Box-shadows for depth
- [ ] Hover effects on cards
- [ ] Professional, cohesive design
- [ ] Good color contrast
- [ ] Consistent spacing

## 🎨 Bonus Challenges
1. Add parallax effect with fixed background
2. Use multiple backgrounds (pattern + gradient)
3. Create dark overlay over background image
4. Add gradient borders
5. Include icon cards with circular borders
