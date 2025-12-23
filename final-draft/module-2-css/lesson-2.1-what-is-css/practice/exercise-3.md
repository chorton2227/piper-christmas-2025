# Exercise 3: External CSS - The Professional Way!

## 🎯 Goal
Create a web page with an external CSS file - the way real web developers do it!

## 📋 Instructions

### Part 1: Create the HTML File
1. Create a new file called `about-me.html` in the `student-workspace` folder
2. Add this HTML structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>About Me</title>
    <link rel="stylesheet" href="about-me-styles.css">
</head>
<body>
    <header>
        <h1>All About Me!</h1>
        <p>Welcome to my awesome webpage</p>
    </header>
    
    <main>
        <section class="intro">
            <h2>Introduction</h2>
            <p>Hi! My name is [Your Name]. I'm learning web development and it's so cool!</p>
        </section>
        
        <section class="hobbies">
            <h2>My Hobbies</h2>
            <ul>
                <li>Playing video games</li>
                <li>Drawing and art</li>
                <li>Reading books</li>
                <li>Coding!</li>
            </ul>
        </section>
        
        <section class="fun-facts">
            <h2>Fun Facts About Me</h2>
            <p>I can [do something cool]. My favorite subject is [subject]. 
               When I grow up, I want to [future goal].</p>
        </section>
    </main>
    
    <footer>
        <p>Thanks for visiting my page! 🌟</p>
    </footer>
</body>
</html>
```

### Part 2: Create the CSS File
3. Create a **new file** called `about-me-styles.css` in the SAME folder
4. In the CSS file, add styles for these elements:

```css
/* Body styles */
body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: /* choose a light color */;
}

/* Header styles */
header {
    background-color: /* choose a bold color */;
    color: white;
    padding: 30px;
    text-align: center;
}

header h1 {
    margin: 0;
    font-size: 42px;
}

header p {
    margin: 10px 0 0 0;
    font-size: 18px;
}

/* Main content */
main {
    max-width: 800px;
    margin: 30px auto;
    padding: 20px;
}

section {
    background-color: white;
    margin: 20px 0;
    padding: 25px;
    border-radius: 8px;
}

h2 {
    color: /* choose a color that matches your header */;
    border-bottom: 2px solid /* same or similar color */;
    padding-bottom: 10px;
}

/* Footer styles */
footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 20px;
    margin-top: 30px;
}
```

### Part 3: Customize and Personalize
5. Fill in all the `/* comments */` with your own style choices
6. Update the content in the HTML with your actual information
7. Add any additional styles you want!

## ✅ Success Criteria
- [ ] Two files created: `about-me.html` and `about-me-styles.css`
- [ ] HTML file has `<link rel="stylesheet" href="about-me-styles.css">` in the head
- [ ] CSS file has styles for body, header, main, section, h2, and footer
- [ ] Colors are customized (not left as comments)
- [ ] Content is personalized with your information
- [ ] Both files are in the same folder
- [ ] Page opens in browser and is fully styled

## 💡 Tips
- The CSS file should NOT have any HTML tags - just CSS!
- The HTML file and CSS file MUST be in the same folder
- If styles don't show up, check that the filename in `href=""` matches exactly
- Use right-click → "Open with" to open HTML in your browser
- Refresh the browser (F5) if you make changes to see them

## 🌟 Bonus Challenge
- Add more sections (favorites, goals, achievements)
- Use Google to find and add a `box-shadow` to your sections
- Try adding `hover` effects: `section:hover { transform: scale(1.02); }`
- Experiment with different `border-radius` values for rounded corners
- Add `line-height: 1.6;` to paragraphs for better readability

## 🎨 Color Scheme Ideas
- Ocean: Blue header (#2c3e50), light blue background (#ecf0f1)
- Forest: Green header (#27ae60), light green background (#e8f5e9)
- Sunset: Orange header (#e67e22), light peach background (#fef5e7)
- Galaxy: Purple header (#8e44ad), light purple background (#f4ecf7)

---

**Need help?** Check out `example-3-external-styles.html` and `example-3-styles.css` to see how they work together!
