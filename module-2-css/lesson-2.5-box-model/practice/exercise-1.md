# Exercise 1: Box Model Basics

## 🎯 Objective
Practice using padding, margin, and borders to create well-spaced layouts.

## 📝 Instructions

Create a page with different boxes demonstrating the box model.

### Step 1: Create HTML Structure

Create `box-model-practice.html` with:
- A main heading "Box Model Practice"
- 4 different `<div>` elements, each with a unique class:
  - `.box-1` - Only padding
  - `.box-2` - Padding and border
  - `.box-3` - Padding, border, and margin
  - `.box-4` - Different padding on each side

Each box should contain some text describing what it demonstrates.

### Step 2: Style with CSS

Create `box-model-styles.css`:

**Box 1 (.box-1):**
- `padding: 20px`
- `background-color` of your choice
- Width: 300px

**Box 2 (.box-2):**
- `padding: 25px`
- `border: 3px solid #3498db`
- `background-color` of your choice
- Width: 300px

**Box 3 (.box-3):**
- `padding: 20px`
- `border: 2px solid #e74c3c`
- `margin: 30px` (creates space from other elements)
- `background-color` of your choice
- Width: 300px

**Box 4 (.box-4):**
- `padding-top: 10px`
- `padding-right: 20px`
- `padding-bottom: 30px`
- `padding-left: 40px`
- `border: 2px dashed #27ae60`
- `background-color` of your choice

### Step 3: Add Box-Sizing

At the top of your CSS, add:
```css
* {
    box-sizing: border-box;
}
```

This makes your sizing more predictable!

## ✅ Success Criteria

- [ ] 4 different boxes showing box model concepts
- [ ] Proper use of padding, margin, and border
- [ ] Different padding values on box-4
- [ ] box-sizing: border-box applied
- [ ] Visible spacing differences between boxes

## 🎨 Bonus Challenges

1. Add `border-radius` to make rounded corners
2. Create a card with perfect spacing (padding + border + margin)
3. Make a button with comfortable padding
4. Center a box using `margin: 0 auto`

## 💡 Hints

- **Padding** adds space INSIDE the element
- **Margin** adds space OUTSIDE the element
- **Border** creates a visible line around the element
- Use different background colors to see padding clearly
- Remember the clockwise rule for 4-value shorthand: top, right, bottom, left
