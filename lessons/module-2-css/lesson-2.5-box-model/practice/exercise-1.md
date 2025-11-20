# Exercise 1: Padding and Margin Practice

## 🎯 Goal
Practice using padding and margin to create proper spacing in a simple page layout.

## 📝 Instructions

1. **Create a new file** called `spacing-practice.html` in your student workspace

2. **Build a page with these elements**:
   - A header with a title
   - Three content boxes (use `<div>` with class="box")
   - Each box should have a heading and a paragraph
   - A footer

3. **Apply spacing using the box model**:
   - Give the header **40px padding** on all sides
   - Give each box **25px padding** inside
   - Add **20px margin** below each box
   - Give the footer **30px padding** on top and bottom, **20px** on sides
   - Add a **1px solid border** to each box

4. **Style for readability**:
   - Use background colors to see the spacing clearly
   - Make the header background a different color
   - Give boxes a light background color
   - Center the content with max-width and auto margins

## 💡 Hints

```css
.box {
    padding: 25px;              /* Space inside */
    margin-bottom: 20px;        /* Space below */
    border: 1px solid #ddd;     /* Border around */
    background-color: #f8f9fa;  /* Light background */
}

.container {
    max-width: 800px;
    margin: 0 auto;             /* Center horizontally */
    padding: 20px;              /* Padding on sides */
}
```

## ✅ Success Criteria

- [ ] Header has padding and looks spacious
- [ ] Boxes have inner padding (content not touching edges)
- [ ] Boxes have space between them (margin)
- [ ] Footer has comfortable padding
- [ ] Page looks organized and well-spaced
- [ ] Content is centered on the page

## 🎨 Challenge

1. Try the shorthand: `padding: 20px 40px;` (top/bottom left/right)
2. Use `margin: 0 auto;` to center a container
3. Add more padding on hover to make boxes interactive
