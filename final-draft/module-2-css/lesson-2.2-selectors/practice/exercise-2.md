# Exercise 2: Class Selectors Practice

## 🎯 Goal
Learn to use class selectors to style specific groups of elements differently!

## 📋 Instructions

### Step 1: Create Your Files
1. In the `student-workspace` folder, create two new files:
   - `class-practice.html`
   - `class-practice.css`

### Step 2: HTML Structure with Classes
Create an HTML file with these elements (add classes as indicated):

**Message Boxes Section:**
```html
<h2>Message Boxes</h2>
<div class="message success">
    <p>Success message here!</p>
</div>

<div class="message warning">
    <p>Warning message here!</p>
</div>

<div class="message error">
    <p>Error message here!</p>
</div>

<div class="message info">
    <p>Information message here!</p>
</div>
```

**Highlighted Text Section:**
- Add some normal paragraphs
- Add some paragraphs with `class="highlight"`
- Add a paragraph with `class="important"`
- Add a paragraph with `class="highlight important"` (two classes!)

**Button Section:**
```html
<h2>Buttons</h2>
<button class="btn">Normal Button</button>
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-success">Success Button</button>
<button class="btn btn-danger">Danger Button</button>
```

### Step 3: CSS Styling
Create styles for all your classes:

**Required styles:**

1. **.message** (base style for all message boxes)
   - Padding: 20px
   - Margin: 15px 0
   - Border-radius: 8px
   - Border-left: 5px solid (color TBD per type)

2. **.success**
   - Background: light green color
   - Border-left-color: green
   - Text color: dark green

3. **.warning**
   - Background: light yellow/orange
   - Border-left-color: orange
   - Text color: dark orange/brown

4. **.error**
   - Background: light red/pink
   - Border-left-color: red
   - Text color: dark red

5. **.info**
   - Background: light blue
   - Border-left-color: blue
   - Text color: dark blue

6. **.highlight**
   - Background-color: yellow
   - Padding: 10px
   - Border-left: 4px solid orange

7. **.important**
   - Color: red
   - Font-size: 18px
   - Font-weight: bold
   - Border: 2px dashed red
   - Padding: 15px

8. **.btn** (base button style)
   - Padding: 12px 24px
   - Border: none
   - Border-radius: 5px
   - Font-size: 16px
   - Cursor: pointer
   - Background-color: gray
   - Color: white

9. **.btn-primary**
   - Background-color: blue

10. **.btn-success**
    - Background-color: green

11. **.btn-danger**
    - Background-color: red

### Step 4: Test Multiple Classes
Make sure your element with **both** `highlight` and `important` classes gets styles from BOTH!

### Step 5: Browser Test
1. Open your HTML file
2. All message boxes should have the base .message style
3. Each type (success, warning, error, info) should have its own colors
4. Highlighted and important text should stand out
5. Buttons should have different colors but same size/shape

## ✅ Checklist
- [ ] Created both HTML and CSS files
- [ ] Linked CSS file correctly
- [ ] Created all required message box types
- [ ] Created highlight and important text
- [ ] Created all button types
- [ ] Used class selectors in CSS (with dots!)
- [ ] Used class attributes in HTML (without dots!)
- [ ] Tested multiple classes on one element
- [ ] Opened in browser and verified all styles work

## 🌟 Bonus Challenges
1. Add more button types: `.btn-info`, `.btn-warning`
2. Create a `.featured` class that adds a box shadow and makes things slightly bigger
3. Create a `.card` class for styled content boxes
4. Add `:hover` effects to buttons (button changes color when you hover over it!)
   ```css
   .btn:hover {
       background-color: darkgray;
   }
   ```

## 💡 Key Concepts
- Classes can be reused! Multiple elements can have `class="message"`
- Elements can have multiple classes: `class="message success"`
- In HTML: `class="highlight"` (no dot)
- In CSS: `.highlight { }` (with dot)
- Classes are the most common selector you'll use!

## 🎯 Understanding Check
After completing this exercise, you should be able to answer:
1. What's the difference between element selectors and class selectors?
2. When would you use a class instead of an element selector?
3. How do you add multiple classes to one element?
4. Why are classes better than inline styles?

---

**Need help?** Check the [resources/cheatsheet.md](../resources/cheatsheet.md) or examples folder!
