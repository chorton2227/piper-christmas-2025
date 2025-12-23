# Exercise 2: Class Selectors Practice

## 🎯 Goal
Learn to create and use classes to style specific elements differently.

## 📋 Instructions

### Part 1: Create the HTML File
1. Create a new file called `class-practice.html` in the `student-workspace` folder
2. Add this HTML structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Class Selectors Practice</title>
    <link rel="stylesheet" href="class-practice.css">
</head>
<body>
    <h1>Message Board</h1>
    
    <div class="message">
        <h3>Regular Message</h3>
        <p>This is a normal message on the board.</p>
    </div>
    
    <div class="message success">
        <h3>Success!</h3>
        <p>Your profile was updated successfully!</p>
    </div>
    
    <div class="message">
        <h3>Another Regular Message</h3>
        <p>Just sharing some information.</p>
    </div>
    
    <div class="message warning">
        <h3>Warning</h3>
        <p>Please update your password soon.</p>
    </div>
    
    <div class="message error">
        <h3>Error</h3>
        <p>Unable to save changes. Please try again.</p>
    </div>
    
    <div class="message info">
        <h3>Info</h3>
        <p>New features are now available!</p>
    </div>
    
    <hr>
    
    <h2>Button Examples</h2>
    <button class="btn">Default Button</button>
    <button class="btn btn-primary">Primary Action</button>
    <button class="btn btn-success">Save Changes</button>
    <button class="btn btn-danger">Delete</button>
    <button class="btn btn-large">Large Button</button>
</body>
</html>
```

### Part 2: Create the CSS File
3. Create a new file called `class-practice.css` in the SAME folder
4. Style the following classes:

**Base Styles:**
```css
body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    padding: 20px;
}

h1 {
    text-align: center;
    color: #333;
}
```

**Now create these classes:**

**.message** (base class for all messages):
- Add white background
- Add padding: 20px
- Add margin: 15px 0
- Add border-radius: 8px
- Add border: 2px solid #ddd
- Add box-shadow: 0 2px 4px rgba(0,0,0,0.1)

**.message h3**:
- Remove top margin (margin-top: 0)
- Set font-size to 20px

**.success** (green theme):
- Border color: #28a745
- Background color: #d4edda
- Text color: #155724

**.warning** (yellow theme):
- Border color: #ffc107
- Background color: #fff3cd
- Text color: #856404

**.error** (red theme):
- Border color: #dc3545
- Background color: #f8d7da
- Text color: #721c24

**.info** (blue theme):
- Border color: #17a2b8
- Background color: #d1ecf1
- Text color: #0c5460

**.btn** (base button class):
- Padding: 12px 24px
- Border: none
- Border-radius: 5px
- Font-size: 16px
- Cursor: pointer
- Margin: 5px
- Background-color: #6c757d
- Color: white

**.btn-primary**:
- Background-color: #007bff

**.btn-success**:
- Background-color: #28a745

**.btn-danger**:
- Background-color: #dc3545

**.btn-large**:
- Font-size: 20px
- Padding: 16px 32px

## ✅ Success Criteria
- [ ] Both HTML and CSS files created
- [ ] All message boxes have base .message styling
- [ ] Success messages are green themed
- [ ] Warning messages are yellow themed
- [ ] Error messages are red themed
- [ ] Info messages are blue themed
- [ ] All buttons have base .btn styling
- [ ] Different button types have different colors
- [ ] Large button is bigger
- [ ] Page is visually organized and colorful

## 💡 Tips
- Classes in HTML: `class="classname"` (no dot)
- Classes in CSS: `.classname { }` (with dot)
- Multiple classes: `class="message success"` (space-separated)
- The element gets ALL styles from ALL its classes!

## 🌟 Bonus Challenge
- Add a `.message.featured` class that combines with message for extra special styling
- Create `.btn-small` class for smaller buttons
- Add `:hover` effects to buttons: `.btn:hover { opacity: 0.9; }`
- Create a `.text-center` utility class that centers text
- Add a `.highlight` class that you can use on paragraphs to highlight text
- Create border-left styles instead of full borders for messages

---

**Need help?** Check `example-2-class-selectors.html` to see classes in action!
