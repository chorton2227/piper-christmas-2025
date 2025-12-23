# Exercise 1: Element Selectors Practice

## 🎯 Goal
Practice using element selectors to style all elements of a specific type.

## 📋 Instructions

### Part 1: Create the HTML File
1. Create a new file called `element-practice.html` in the `student-workspace` folder
2. Add this HTML structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Element Selectors Practice</title>
    <link rel="stylesheet" href="element-practice.css">
</head>
<body>
    <h1>My Favorite Things</h1>
    
    <h2>Favorite Foods</h2>
    <p>Pizza is amazing! I could eat it every day.</p>
    <p>Ice cream is the perfect dessert.</p>
    
    <h2>Favorite Activities</h2>
    <p>I love playing video games with friends.</p>
    <p>Reading books takes me to new worlds.</p>
    
    <h2>Favorite Colors</h2>
    <ul>
        <li>Blue</li>
        <li>Purple</li>
        <li>Green</li>
    </ul>
    
    <h2>My Goals</h2>
    <ol>
        <li>Learn web development</li>
        <li>Build my own website</li>
        <li>Create cool projects</li>
    </ol>
</body>
</html>
```

### Part 2: Create the CSS File
3. Create a new file called `element-practice.css` in the SAME folder
4. Use **element selectors** to style:

**Body:**
- Set a background color (any light color you like)
- Set font-family to Arial or your choice
- Add 20px padding

**H1:**
- Make it a bold color
- Center the text
- Make font size 42px
- Add a bottom border (3px solid)

**H2:**
- Choose a different color than h1
- Set font size to 28px
- Add left border (5px solid) with padding-left: 15px

**Paragraphs (p):**
- Set text color to dark gray (#333 or similar)
- Set font size to 18px
- Set line-height to 1.6
- Add margin: 15px 0

**Unordered Lists (ul):**
- Set background color to a light shade
- Add padding: 20px
- Add border-radius: 8px

**Ordered Lists (ol):**
- Set background color to a different light shade than ul
- Add padding: 20px
- Add border-radius: 8px

**List Items (li):**
- Set font size to 16px
- Add margin: 10px 0

## ✅ Success Criteria
- [ ] Two files created: `.html` and `.css`
- [ ] CSS file is linked correctly in HTML
- [ ] Body has background color and padding
- [ ] H1 is styled (color, centered, large, border)
- [ ] H2 is styled (different color, left border)
- [ ] Paragraphs are styled (color, size, spacing)
- [ ] Both list types are styled
- [ ] List items are styled
- [ ] Page looks cohesive and colorful

## 💡 Tips
- Element selectors don't use dots or hashes - just the element name
- All elements of that type will get the same styling
- Test in browser frequently to see your changes
- Try different color combinations!

## 🌟 Bonus Challenge
- Add styling for `<strong>` and `<em>` tags
- Style `<a>` tags if you add any links
- Add a `text-shadow` to your h1: `text-shadow: 2px 2px 4px rgba(0,0,0,0.2);`
- Experiment with `border-left` vs `border-right` vs `border-top`
- Add `margin: 30px 0;` to h2 elements for more spacing

---

**Need help?** Check `example-1-element-selectors.html` to see element selectors in action!
