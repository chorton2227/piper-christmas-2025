# Exercise 1 — My First Web Page

## 🎯 Goal

Create your very first web page from scratch! You'll write HTML code and see it come to life in your browser.

**What you'll build:** A simple web page about yourself with a heading and a paragraph.

**Time:** 15-20 minutes

---

## 📋 Instructions

### Step 1: Create Your File
1. Open your code editor (VS Code or Notepad)
2. Create a new file
3. Save it as `my-first-page.html` in the `student-workspace` folder

**Tip:** Make sure it ends with `.html` — that's how the browser knows it's a web page!

### Step 2: Add the HTML Structure

Type this code exactly as shown:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My First Web Page</title>
</head>
<body>
    
</body>
</html>
```

**What this does:**
- `<!DOCTYPE html>` - Tells the browser this is HTML5
- `<html lang="en">` - Wraps everything, sets language to English
- `<head>` - Information about the page
- `<title>` - What shows in the browser tab
- `<body>` - Where your visible content goes

### Step 3: Add a Heading

Inside the `<body>` tags, add a main heading about yourself:

```html
<h1>Welcome to [Your Name]'s Page!</h1>
```

Replace `[Your Name]` with your actual name!

### Step 4: Add a Paragraph

Below the heading, add a paragraph introducing yourself:

```html
<p>Hi! I'm learning HTML and this is my first web page. I'm excited to become a web developer!</p>
```

Feel free to write whatever you want — it's your page!

### Step 5: Save Your File

- Press `Ctrl + S` (Windows) or `Cmd + S` (Mac)
- Make sure it's saved as `my-first-page.html`

### Step 6: Open in Your Browser

**Method 1:**
1. Find `my-first-page.html` in File Explorer
2. Double-click it

**Method 2:**
1. Open your browser (Chrome, Firefox, Edge)
2. Press `Ctrl + O`
3. Navigate to your file and click "Open"

**You should see your heading and paragraph displayed in the browser!**

---

## ✅ Success Check

Your page is complete when:

- [ ] The file is named `my-first-page.html`
- [ ] It has the complete HTML structure (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`)
- [ ] The `<title>` shows something meaningful in the browser tab
- [ ] You have ONE `<h1>` heading
- [ ] You have at least ONE `<p>` paragraph
- [ ] The page opens in your browser without errors
- [ ] You can read your heading and paragraph on the page

**Test it:** The browser tab should show your title, and the page should display your heading and paragraph.

---

## 🌟 Bonus Challenges

Already done? Try these extras:

1. **Add more paragraphs** - Write 2-3 paragraphs about your interests or hobbies
2. **Experiment with headings** - Try adding an `<h2>` or `<h3>` for sub-sections
3. **Add a comment** - Use `<!-- This is a comment -->` to leave notes in your code
4. **Change the title** - Make your title more descriptive
5. **View the source** - Right-click on your page and select "View Page Source" to see your code

---

## 💭 Think About It

1. **What happens if you forget the closing `</p>` tag?**
   - Try it and see! Then fix it.

2. **Why do we need both a `<title>` and an `<h1>`?**
   - Hint: One shows in the browser tab, one shows on the page.

3. **What would happen if you put the `<h1>` inside the `<head>` instead of the `<body>`?**
   - Experiment and find out!

4. **Can you have more than one `<h1>` on a page?**
   - Technically yes, but should you? (We'll learn more about this in the next lesson!)

---

## 🎉 You Did It!

Congratulations! You just created your first web page from scratch. You're officially a web developer now!

**Next:** Move on to Exercise 2 to add links and images to your page.

---

## 🆘 Troubleshooting

**Problem:** Page shows HTML code instead of formatted text
- **Solution:** Make sure your file ends with `.html` not `.txt`

**Problem:** Can't find my file
- **Solution:** Check that you saved it in the `student-workspace` folder

**Problem:** Nothing shows up in the browser
- **Solution:** Make sure your content is inside the `<body>` tags

**Problem:** Browser tab says "Untitled"
- **Solution:** Check that you have a `<title>` tag in the `<head>` section
