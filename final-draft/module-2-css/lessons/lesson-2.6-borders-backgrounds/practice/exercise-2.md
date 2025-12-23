# Exercise 2: Shadow Magic

## 🎯 Objective
Master the `box-shadow` property to add depth and dimension to your designs.

## 📝 Instructions

Create a file called `shadow-gallery.html` in your student workspace. Build a showcase of different shadow effects.

### Part 1: Basic Shadows (4 cards)

Create 4 cards, each with a different shadow effect:

1. **Subtle Shadow Card**
   - Very light shadow: `0 2px 5px rgba(0, 0, 0, 0.1)`
   - White background
   - 30px padding
   - 10px border-radius
   - Contains a heading and short paragraph

2. **Medium Shadow Card**
   - Medium shadow: `0 4px 10px rgba(0, 0, 0, 0.15)`
   - White background
   - 30px padding
   - 10px border-radius
   - Contains a heading and short paragraph

3. **Dramatic Shadow Card**
   - Heavy shadow: `0 10px 30px rgba(0, 0, 0, 0.3)`
   - White background
   - 30px padding
   - 10px border-radius
   - Contains a heading and short paragraph

4. **Colored Shadow Card**
   - Colored shadow: `0 8px 20px rgba(52, 152, 219, 0.4)`
   - White background
   - 2px solid blue border
   - 30px padding
   - 10px border-radius
   - Contains a heading and short paragraph

### Part 2: Inset Shadows (3 elements)

Create 3 elements with inset (inner) shadows:

1. **Pressed Button**
   - Inset shadow: `inset 0 2px 5px rgba(0, 0, 0, 0.3)`
   - Light gray background
   - 12px vertical, 30px horizontal padding
   - Button text inside

2. **Input Field Style**
   - Inset shadow: `inset 0 1px 3px rgba(0, 0, 0, 0.2)`
   - White background
   - 1px solid light gray border
   - 10px padding
   - Placeholder or sample text

3. **Deep Well Effect**
   - Inset shadow: `inset 0 4px 10px rgba(0, 0, 0, 0.4)`
   - Dark gray background
   - 40px padding
   - Text or content inside

### Part 3: Interactive Shadows (3 cards)

Create 3 cards that change their shadows on hover:

1. **Lift on Hover**
   - Initial: `0 2px 5px rgba(0, 0, 0, 0.1)`
   - Hover: `0 12px 30px rgba(0, 0, 0, 0.2)` + move up 5px
   - Use `transition: all 0.3s ease`
   - White background, padding, border-radius

2. **Press on Hover**
   - Initial: `0 4px 10px rgba(0, 0, 0, 0.15)`
   - Hover: `0 2px 5px rgba(0, 0, 0, 0.1)` + move down 2px
   - Use `transition: all 0.3s ease`
   - White background, padding, border-radius

3. **Glow on Hover**
   - Initial: `0 4px 10px rgba(0, 0, 0, 0.1)`
   - Hover: `0 0 30px rgba(52, 152, 219, 0.6)`
   - Add blue border on hover
   - Use `transition: all 0.3s ease`
   - White background, padding, border-radius

### Part 4: Layered Shadows (2 cards)

Create 2 cards with multiple shadow layers:

1. **Double Layer Shadow**
   - Two shadows:
     - `0 2px 5px rgba(0, 0, 0, 0.1)`
     - `0 10px 20px rgba(0, 0, 0, 0.15)`
   - Separate with comma
   - White background, padding, border-radius

2. **Triple Layer Shadow**
   - Three shadows:
     - `0 1px 3px rgba(0, 0, 0, 0.12)`
     - `0 4px 8px rgba(0, 0, 0, 0.12)`
     - `0 10px 20px rgba(0, 0, 0, 0.12)`
   - Creates very realistic depth
   - White background, padding, border-radius

## 💡 Tips

- Use a light gray or gradient background so shadows are visible
- Space cards out with margin (20-30px gaps)
- Use a grid layout for organization
- Add labels or headings to identify each shadow type
- Include descriptive text in each card
- Use `cursor: pointer` on interactive cards

## ✅ Success Criteria

Your shadow gallery should have:
- All 12 elements with correct shadow properties
- Clear visual differences between shadow types
- Smooth transitions on hover effects
- Organized, professional layout
- Descriptive labels for each shadow style

## 🎨 Bonus Challenges

1. Create a button with both outer shadow and inset shadow
2. Make a "floating card" that moves up significantly on hover with expanding shadow
3. Create text shadow effects (use `text-shadow` property)
4. Design a "neumorphism" style card (soft, subtle shadows with inset shadow)
5. Add an animated shadow that pulses or grows/shrinks

## 🔍 Shadow Syntax Reminder

```css
box-shadow: horizontal vertical blur spread color;

/* Examples: */
box-shadow: 2px 2px 5px gray;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
box-shadow: inset 0 2px 5px black;

/* Multiple shadows: */
box-shadow: 
    0 2px 5px rgba(0, 0, 0, 0.1),
    0 10px 20px rgba(0, 0, 0, 0.15);
```

---

**Pro tip:** Use `rgba()` colors for shadows instead of solid colors - partial transparency creates more realistic shadow effects!
