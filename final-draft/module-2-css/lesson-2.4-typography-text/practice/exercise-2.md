# Exercise 2: Text Properties Practice

## 🎯 Objective
Master text styling properties including size, weight, alignment, and decorations.

## 📝 Instructions

Create a styled article page that uses various text properties.

### Step 1: Create the HTML

Create `text-properties.html` with:
- A main heading "My Article"
- A subtitle (h2) "Understanding Text Properties"
- An author byline in a paragraph
- Three article paragraphs with different alignments
- A quote section
- A conclusion paragraph

### Step 2: Style the Heading

Style the main heading with:
```css
h1 {
    font-size: 48px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 3px;
}
```

### Step 3: Style Different Elements

Create CSS styles for:

**Subtitle (h2)**
- font-size: 28px
- font-weight: 600
- text-align: center
- color of your choice

**Author byline**
- font-style: italic
- text-align: center
- font-size: 14px
- color: gray

**Article paragraphs**
- First paragraph: left-aligned
- Second paragraph: justified
- Third paragraph: right-aligned
- All should have line-height: 1.6

**Quote section**
- font-style: italic
- font-size: 20px
- text-align: center
- Add border-left and padding
- Different background color

**Conclusion**
- font-weight: bold
- Larger font-size (18px)

### Step 4: Add Text Decorations

Add at least:
- One underlined text
- One strikethrough text (for corrections)
- Styled links (remove underline, add on hover)

## ✅ Success Criteria

Your article should:
- [ ] Use at least 5 different font sizes
- [ ] Include 3 different text alignments
- [ ] Have varied font weights
- [ ] Include italic styling
- [ ] Have proper line-height for readability
- [ ] Include text decorations
- [ ] Use text-transform appropriately

## 🎨 Bonus Challenges

1. Create a "fancy first letter" effect for the first paragraph
2. Add letter-spacing to the heading
3. Create a pull quote with special styling
4. Add a "highlight" effect using background-color and padding
5. Style a list of key points with custom bullets

## 💡 Hints

- **font-size**: Use px for precise control (16px-18px for body)
- **line-height**: 1.4-1.6 is ideal for readability
- **text-align: justify**: Works best with longer paragraphs
- **font-weight**: 400 = normal, 700 = bold
- Use **text-decoration: none** to remove link underlines

## 📚 Key Concepts to Remember

- **font-size**: Controls text size
- **font-weight**: Controls boldness (100-900)
- **font-style**: italic or normal
- **text-align**: left, center, right, justify
- **line-height**: Space between lines
- **text-decoration**: underline, line-through, none
- **text-transform**: uppercase, lowercase, capitalize
- **letter-spacing**: Space between characters
