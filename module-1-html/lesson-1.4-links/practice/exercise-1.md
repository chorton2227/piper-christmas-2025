# Exercise 1: Create Your Links Page

## 🎯 Goal

Practice creating different types of links by building a personal links page with external links, email links, and link attributes.

**What you'll build:** `my-links.html` - A page showcasing your favorite websites, learning resources, and contact information.

---

## 📋 Instructions

### Step 1: Set Up Your File

1. In the `student-workspace` folder, create a new file called `my-links.html`
2. Add the basic HTML structure:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>My Favorite Links</title>
   </head>
   <body>
       
   </body>
   </html>
   ```

### Step 2: Add a Main Heading

```html
<h1>My Favorite Links</h1>
<p>A collection of websites I find useful and interesting!</p>
```

### Step 3: Create a "Favorite Websites" Section

1. Add a level 2 heading: `<h2>Favorite Websites</h2>`
2. Create an unordered list
3. Add **at least 5 external links** to websites you like
4. Use `target="_blank"` on **at least 3 of them**
5. Add the `title` attribute to **at least 2 links** with helpful tooltips

Example:
```html
<h2>Favorite Websites</h2>
<ul>
    <li>
        <a href="https://www.youtube.com" 
           target="_blank" 
           title="Watch videos and tutorials">
            YouTube
        </a> - My favorite video site
    </li>
    <!-- Add more links here -->
</ul>
```

### Step 4: Add a "Learning Resources" Section

1. Add heading: `<h2>Learning Resources</h2>`
2. Create a list of educational websites
3. Include links to coding sites, tutorials, or learning platforms
4. Use `target="_blank"` on all these links
5. Add descriptions after each link

Example:
```html
<h2>Learning Resources</h2>
<ul>
    <li>
        <a href="https://www.freecodecamp.org" target="_blank">freeCodeCamp</a> 
        - Free coding courses and tutorials
    </li>
</ul>
```

### Step 5: Add Contact Information

1. Add heading: `<h2>Contact Me</h2>`
2. Create an email link using `mailto:`
3. Add a paragraph explaining how to reach you

Example:
```html
<h2>Contact Me</h2>
<p>Have questions or want to connect? 
   <a href="mailto:yourname@example.com">Send me an email!</a>
</p>
```

### Step 6: Add Optional Social Media Section

```html
<h2>Find Me Online</h2>
<p>Connect with me on social media:</p>
<ul>
    <li><a href="https://github.com/yourusername" target="_blank">GitHub</a></li>
    <li><a href="https://twitter.com/yourusername" target="_blank">Twitter</a></li>
</ul>
```

**Note:** Use real links if you have accounts, or use placeholder links!

---

## ✅ Success Check

Before you submit, make sure you have:

- [ ] A main heading (`<h1>`)
- [ ] At least **5 external links** with full URLs (starting with `https://`)
- [ ] At least **3 links** with `target="_blank"` to open in new tabs
- [ ] At least **2 links** with the `title` attribute for tooltips
- [ ] At least **1 email link** using `mailto:`
- [ ] Links organized into sections with `<h2>` headings
- [ ] Links organized in unordered lists
- [ ] Descriptions or explanations for most links
- [ ] Proper HTML structure with all tags closed
- [ ] All links tested and working

---

## 🌟 Bonus Challenges

Want to go further? Try these:

1. **Add More Sections**
   - Gaming sites
   - News sites
   - Entertainment sites
   - Tools you use

2. **Use Horizontal Rules**
   ```html
   <hr>
   ```
   Add these between major sections for visual separation

3. **Format Link Text**
   ```html
   <a href="https://example.com"><strong>Important Site</strong></a>
   <a href="https://example.com"><em>Recommended Resource</em></a>
   ```

4. **Create a Quick Links Section**
   Add a section at the top with your most important links:
   ```html
   <h2>⭐ Quick Links</h2>
   <p>
       <a href="https://google.com" target="_blank">Google</a> | 
       <a href="https://youtube.com" target="_blank">YouTube</a> | 
       <a href="mailto:you@example.com">Email</a>
   </p>
   ```

5. **Add Link Descriptions**
   Write 1-2 sentences explaining why each link is useful

6. **Create 10+ Total Links**
   Challenge yourself to find and organize many useful links!

7. **Phone Link**
   Add a clickable phone number:
   ```html
   <a href="tel:+15555551234">Call me: (555) 555-1234</a>
   ```

---

## 🆘 Troubleshooting

### Links Don't Work
- ✅ Check that you included `https://` at the start
- ✅ Make sure the URL is spelled correctly
- ✅ Verify the closing `</a>` tag is present

### Link Opens But Goes to Wrong Place
- ✅ Copy/paste the URL directly from your browser
- ✅ Don't add spaces in the URL
- ✅ Check for typos in the href attribute

### Title Tooltip Doesn't Appear
- ✅ Make sure you spelled `title` correctly
- ✅ Use quotes around the tooltip text
- ✅ Hover your mouse over the link and wait a moment

### Email Link Opens Wrong Program
- ✅ This is normal - it opens your default email program
- ✅ Make sure you used `mailto:` before the email address
- ✅ Some computers may not have email programs set up

---

## 💭 Think About It

1. **Why use `target="_blank"` for some links but not others?**
   - When do you want users to stay on your page?
   - When is it okay for them to leave?

2. **What makes link text good?**
   - Compare "Click here" vs "Visit YouTube"
   - Which is more helpful? Why?

3. **How do tooltips improve user experience?**
   - When are they most useful?
   - What information should they include?

---

## 📚 What You Learned

In this exercise, you practiced:
- ✅ Creating external links with full URLs
- ✅ Using `target="_blank"` to open links in new tabs
- ✅ Adding tooltips with the `title` attribute
- ✅ Creating email links with `mailto:`
- ✅ Organizing links in lists and sections
- ✅ Writing descriptive link text
- ✅ Testing and debugging links

---

## 🎯 Example Output

Your page might look like this when complete:

```
My Favorite Links
A collection of websites I find useful and interesting!

Favorite Websites
• YouTube - My favorite video site
• Wikipedia - Look up anything
• Reddit - Community discussions
• Spotify - Music streaming
• Netflix - Movies and shows

Learning Resources
• freeCodeCamp - Free coding courses and tutorials
• Khan Academy - Math, science, and more
• Duolingo - Language learning

Contact Me
Have questions or want to connect? Send me an email!

Find Me Online
• GitHub
• Twitter
```

---

**Great work!** 🎉 When you're ready, move on to Exercise 2 to build a multi-page website!
