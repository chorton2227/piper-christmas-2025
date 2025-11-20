# Exercise 2: Hex Codes & RGB Colors

## 🎯 Goal
Learn to use hex codes and RGB values to create custom colors.

## 📝 Instructions

1. **Create a new file** called `color-palette.html` in your student workspace

2. **Build a color palette page** with:
   - A header: "My Color Palette"
   - At least 6 colored boxes (use `<div>` elements)
   - Each box should display its color code
   - A footer with your name

3. **Use different color formats**:
   - Make 3 boxes using hex colors (like `#3498db`)
   - Make 3 boxes using RGB colors (like `rgb(52, 152, 219)`)
   - Make each box a different color

4. **Style your boxes**:
   - Give each box padding and margin
   - Make them tall enough to see the color clearly (at least 100px)
   - Center the text inside each box
   - Make the text white or black (whichever is more readable)

## 💡 Hints

**Hex Color Tips:**
- Format: `#RRGGBB` (6 characters)
- `#FF0000` = red, `#00FF00` = green, `#0000FF` = blue
- `#000000` = black, `#FFFFFF` = white
- Try colors like `#3498db` (blue), `#e74c3c` (red), `#2ecc71` (green)

**RGB Color Tips:**
- Format: `rgb(red, green, blue)` where each is 0-255
- `rgb(255, 0, 0)` = red
- `rgb(52, 152, 219)` = a nice blue
- `rgb(46, 204, 113)` = a nice green

**CSS Structure:**
```css
.color-box {
    padding: 40px;
    margin: 10px;
    text-align: center;
}
```

## ✅ Success Criteria

- [ ] At least 6 colored boxes displayed
- [ ] 3 boxes use hex colors
- [ ] 3 boxes use RGB colors
- [ ] Each box shows its color code inside
- [ ] Colors are clearly visible and different from each other
- [ ] Text is readable on all backgrounds

## 🎨 Challenge

1. Create a monochromatic section using different shades of one color
2. Try using RGBA with transparency: `rgba(52, 152, 219, 0.5)`
3. Make one box with a gradient background (research CSS gradients!)

## 🔧 Tools to Help

- **Color Picker**: Use Google's color picker (search "color picker")
- **Copy hex/RGB values** from the picker
- **Test readability**: Make sure text can be seen on backgrounds
