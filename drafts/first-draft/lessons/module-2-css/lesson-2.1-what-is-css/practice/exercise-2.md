# Exercise 2: Internal CSS

## 🎯 Goal
Learn to organize your CSS in a `<style>` tag instead of adding it to every element individually.

## 📋 Instructions

### Part 1: Create the HTML Structure
1. Create a new file called `favorite-things.html` in the `student-workspace` folder
2. Add this HTML structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Favorite Things</title>
    <style>
        /* Your CSS goes here! */
    </style>
</head>
<body>
    <h1>My Favorite Things</h1>
    
    <h2>Favorite Foods</h2>
    <p>I love pizza, ice cream, and tacos!</p>
    
    <h2>Favorite Games</h2>
    <p>Minecraft, Roblox, and Animal Crossing are the best!</p>
    
    <h2>Favorite Colors</h2>
    <p>Blue, purple, and green are awesome colors.</p>
</body>
</html>
```

### Part 2: Add Internal CSS
3. Inside the `<style>` tag in the head, add styles for:
   - `body` - set a background color (try lightblue, lightpink, or lightyellow)
   - `h1` - make it a fun color, center it, and make it bigger
   - `h2` - give it a different color and add a bottom border
   - `p` - change the font size to make it easier to read

Example CSS structure (fill in your own values):
```css
body {
    background-color: /* your color */;
}

h1 {
    color: /* your color */;
    text-align: center;
    font-size: /* your size */;
}
```

### Part 3: Customize Your Content
4. Change the content to YOUR actual favorite things
5. Add more sections if you want (favorite movies, books, activities, etc.)

## ✅ Success Criteria
- [ ] File is named `favorite-things.html`
- [ ] Has a `<style>` tag in the `<head>` section
- [ ] Body has a background color
- [ ] All headings (h1, h2) are styled
- [ ] Paragraphs have custom styling
- [ ] Content is personalized with your favorites
- [ ] Page looks colorful and fun in the browser

## 💡 Tips
- CSS goes BETWEEN the `<style>` and `</style>` tags
- Don't use quotes around property values in CSS (unlike inline styles!)
- The selector comes first, then curly braces `{ }`, then your styles
- End each style line with a semicolon `;`
- Comments in CSS use `/* comment */`

## 🌟 Bonus Challenge
- Add `font-family: Arial, sans-serif;` to change the font
- Use `padding: 20px;` on the body to add space around the edges
- Add a `margin: 20px;` to your headings to create more space
- Try `border-bottom: 3px solid blue;` on your h2 elements

---

**Need help?** Look at `example-2-internal-styles.html` to see how internal CSS works!
