# Exercise 1: Font Families Practice

## 🎯 Objective
Practice using different font families and understanding web-safe fonts.

## 📝 Instructions

Create a page that demonstrates various font families. You'll create an HTML file and a CSS file.

### Step 1: Create the HTML Structure

Create a file called `font-families.html` with:
- A main heading "Font Family Showcase"
- 5 different paragraphs, each demonstrating a different font:
  1. A paragraph using Arial
  2. A paragraph using Times New Roman
  3. A paragraph using Georgia
  4. A paragraph using Courier New
  5. A paragraph using Verdana

Each paragraph should:
- Have a class name matching the font (e.g., class="arial")
- Contain text describing the font
- Include the sentence: "The quick brown fox jumps over the lazy dog 1234567890"

### Step 2: Create the CSS

Create a file called `font-families-styles.css` that:
- Gives each class the appropriate font-family
- Sets a readable font-size (16px-18px)
- Adds padding and margin for spacing
- Adds a border or background color to make each section distinct

### Step 3: Add a Font Stack

Add one more paragraph with a font stack:
```css
.my-stack {
    font-family: Arial, Helvetica, sans-serif;
}
```

## ✅ Success Criteria

Your page should:
- [ ] Display 5 different fonts clearly
- [ ] Each font should be visually distinct
- [ ] Include proper class names
- [ ] Have a font stack example
- [ ] Be well-spaced and easy to read

## 🎨 Bonus Challenges

1. Add a generic font family example (serif, sans-serif, monospace)
2. Create a comparison section showing serif vs sans-serif
3. Add descriptions explaining when each font is best used
4. Style the headings with different fonts than the body text

## 💡 Hints

- Use quotes for font names with spaces: `font-family: 'Times New Roman';`
- Web-safe fonts are guaranteed to work on all computers
- Always include a fallback font in your font stack
- Monospace fonts (like Courier) are great for displaying code

## 📚 Key Concepts to Remember

- **font-family**: Property that sets the typeface
- **Web-safe fonts**: Fonts available on all computers
- **Font stacks**: List of fonts with fallbacks
- **Generic families**: serif, sans-serif, monospace, cursive, fantasy
