# Exercise 1: Interactive Button Collection

Create a collection of interactive buttons with different hover effects using transitions and transforms.

## 🎯 Goal

Build a button showcase page with at least 6 different button styles, each with unique hover effects.

## 📋 Requirements

### HTML Structure
- Create a page with a heading "Interactive Button Collection"
- Add 6 or more buttons with different styles
- Give each button a descriptive class name
- Add text labels to describe each effect

### CSS Requirements

**Button 1: Lift Effect**
- Moves up when hovered
- Adds a shadow that grows
- Use `transform: translateY()` and `box-shadow`

**Button 2: Grow Effect**
- Scales up smoothly on hover
- Use `transform: scale()`

**Button 3: Color Shift**
- Background color changes smoothly
- Text color changes too
- Use `transition` on both properties

**Button 4: Border Animation**
- Border grows or changes on hover
- Could use `border-width` or `border-color`

**Button 5: Rotate Icon**
- Button contains an icon (emoji or symbol)
- Icon rotates on hover
- Use `transform: rotate()` on the icon

**Button 6: Ripple Effect**
- Creates a ripple/wave effect on hover
- Use `::before` or `::after` pseudo-element
- Expand it with `transform: scale()`

### Styling Guidelines
- Use smooth transitions (0.3s is a good default)
- Add appropriate timing functions (ease, ease-out, etc.)
- Make buttons visually appealing with:
  - Rounded corners
  - Padding
  - Nice colors (gradients are a plus!)
  - Good spacing
- Ensure all buttons have `cursor: pointer`

## 💡 Hints

```css
/* Example structure for a lift button */
.btn-lift {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.btn-lift:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
}
```

```css
/* Example for rotating an icon inside a button */
.btn-icon span {
    display: inline-block;
    transition: transform 0.5s ease;
}

.btn-icon:hover span {
    transform: rotate(360deg);
}
```

## 🎨 Bonus Challenges

1. **Add Active State**: Include `:active` styles that make buttons feel pressed
2. **Stagger Effects**: Create a button where multiple effects happen in sequence
3. **Gradient Animation**: Make a gradient background shift position on hover
4. **3D Button**: Create a button with `box-shadow` that looks 3D and presses down
5. **Pulse Animation**: Add a continuous pulse effect using `@keyframes`
6. **Focus State**: Add `:focus` styles for keyboard accessibility

## ✅ Success Criteria

- [ ] 6 or more buttons with distinct hover effects
- [ ] Smooth transitions on all effects
- [ ] At least one button uses `transform: translateY()`
- [ ] At least one button uses `transform: scale()`
- [ ] At least one button uses `transform: rotate()`
- [ ] At least one button changes colors smoothly
- [ ] All buttons have proper cursor styling
- [ ] Page is well-organized and visually appealing

## 🎓 What You're Learning

- Using `:hover` pseudo-class
- Applying CSS transitions
- Using CSS transforms (translate, scale, rotate)
- Combining multiple properties in transitions
- Creating engaging user interfaces
- Understanding timing functions

Save your files as `button-collection.html` and `button-collection.css` in the student-workspace folder!
