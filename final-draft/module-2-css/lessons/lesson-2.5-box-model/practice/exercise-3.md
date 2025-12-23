# Exercise 3: Complete Page Layout

## 🎯 Goal
Build a complete webpage using the box model to control all spacing and sizing.

## 📝 Instructions

1. **Create `my-layout.html`** with a complete page structure:
   - A header section with navigation
   - A hero/welcome section
   - Three feature cards in a row
   - A footer

2. **Use box-sizing for the entire page**:
```css
* {
    box-sizing: border-box;
}
```

3. **Apply the box model to each section**:

   **Header:**
   - 50px padding on all sides
   - Background color
   - Centered content

   **Hero Section:**
   - 80px padding top and bottom
   - 20px padding left and right
   - Background color or gradient
   - 40px margin-bottom

   **Feature Cards:**
   - 30px padding inside each
   - 20px margin on sides and bottom
   - Borders and rounded corners
   - Box shadows

   **Footer:**
   - 40px padding all around
   - Background color
   - 50px margin-top

4. **Create a centered container**:
```css
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
```

5. **Make it responsive** - adjust padding/margins for mobile:
```css
@media (max-width: 768px) {
    .hero {
        padding: 40px 20px;  /* Less padding on mobile */
    }
}
```

## 💡 Layout Tips

- Use `display: flex` or `grid` for the feature cards
- Keep padding consistent across similar elements
- Use margin to create vertical rhythm
- Test different screen sizes

## ✅ Success Criteria

- [ ] Box-sizing: border-box is applied globally
- [ ] Header has proper padding and spacing
- [ ] Hero section is spacious and inviting
- [ ] Feature cards have consistent padding and margins
- [ ] Footer has comfortable spacing
- [ ] Content is centered with max-width container
- [ ] Spacing creates clear visual hierarchy
- [ ] Page works on different screen sizes

## 🎨 Challenge

1. **Add a sticky header** with different padding when scrolled
2. **Create alternating section backgrounds** with proper padding
3. **Add a sidebar** with appropriate margins
4. **Use negative margins** creatively to overlap sections
5. **Create a "full-bleed" section** (extends to edges) with inner padding

## 🔧 Pro Tips

- Use DevTools to inspect the box model of each element
- Keep spacing consistent (use variables or consistent values)
- More padding = more spacious feel
- Vertical rhythm: consistent spacing between sections
- Test on mobile - reduce padding/margins for smaller screens

## 📐 Spacing Scale Suggestion

Create consistent spacing using a scale:
```css
/* Spacing scale */
--spacing-xs: 5px;
--spacing-sm: 10px;
--spacing-md: 20px;
--spacing-lg: 40px;
--spacing-xl: 80px;
```

Use these values consistently for padding and margins!
