# Exercise 2 — Adding Links & Images

## 🎯 Goal

Enhance your web page by adding links and images — two of the most important elements on the web!

**What you'll build:** An updated page with at least one link and one image with proper alt text.

**Time:** 20-25 minutes

---

## 📋 Instructions

### Step 1: Choose Your Starting Point

You have two options:

**Option A:** Add to your existing `my-first-page.html` from Exercise 1

**Option B:** Create a new file

If creating new, start with this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Links and Images</title>
</head>
<body>
    <h1>My Web Page with Links and Images</h1>
    <p>This page demonstrates links and images!</p>
</body>
</html>
```

### Step 2: Add a Link

Add a link to your favorite website. Put this after your paragraph:

```html
<p>Check out <a href="https://www.example.com">my favorite website</a>!</p>
```

**Customize it:**
- Replace `https://www.example.com` with a real website URL
- Replace `my favorite website` with a description of where it goes

**Examples of good links:**
```html
<p>I love learning at <a href="https://www.khanacademy.org">Khan Academy</a>.</p>

<p>Want to learn more? Visit <a href="https://developer.mozilla.org">MDN Web Docs</a>.</p>

<p>Search for anything on <a href="https://www.google.com">Google</a>!</p>
```

### Step 3: Find or Create an Image

You need an image file to display. You have options:

**Option A: Use a placeholder image (easiest)**
```html
<img src="https://placehold.co/400x300" alt="A placeholder image">
```

**Option B: Use your own image**
1. Find an image file (`.jpg`, `.png`, `.gif`)
2. Put it in the same folder as your HTML file
3. Remember the exact filename

### Step 4: Add the Image

Add an image tag with proper alt text:

```html
<img src="https://placehold.co/400x300" alt="A colorful placeholder image">
```

**If using your own image:**
```html
<img src="cat.jpg" alt="My fluffy orange cat sleeping on the couch">
```

**Important:** Replace `cat.jpg` with YOUR actual image filename!

### Step 5: Write Good Alt Text

Alt text describes the image for people who can't see it. Make it descriptive!

**Good alt text examples:**
```html
<img src="sunset.jpg" alt="Orange and pink sunset over the ocean">
<img src="pizza.jpg" alt="Pepperoni pizza with melted cheese">
<img src="dog.jpg" alt="Golden retriever playing with a ball in the park">
```

**Bad alt text examples:**
```html
<img src="photo.jpg" alt="photo">  ❌ Too vague
<img src="img1.jpg" alt="image">   ❌ Doesn't describe anything
<img src="pic.jpg" alt="">         ❌ Empty alt text
```

### Step 6: Save and Test

1. Save your file (`Ctrl + S`)
2. Open (or refresh) in your browser (`F5`)
3. Test your link — click it to make sure it works!
4. Check your image — does it display correctly?

---

## ✅ Success Check

Your page is complete when:

- [ ] You have at least ONE working link
- [ ] The link goes to a real website (starts with `https://`)
- [ ] The link text describes where it goes (not "click here")
- [ ] You have at least ONE image
- [ ] The image displays in the browser
- [ ] The image has alt text that describes what it shows
- [ ] Your alt text is descriptive and meaningful
- [ ] The page still has proper HTML structure

**Test it:**
- Click your link — does it take you to the right website?
- Look at your image — does it show up?
- If the image doesn't load, does the alt text appear?

---

## 🌟 Bonus Challenges

Want to do more?

1. **Add multiple links** - Link to 3-5 favorite websites
2. **Add multiple images** - Display 2-3 images with different alt text
3. **Make an image clickable** - Wrap an image in a link:
   ```html
   <a href="https://www.example.com">
       <img src="picture.jpg" alt="Description">
   </a>
   ```
4. **Add width and height** - Control image size:
   ```html
   <img src="picture.jpg" alt="Description" width="300" height="200">
   ```
5. **Create an image gallery** - Display multiple images with captions

---

## 💭 Think About It

1. **Why is alt text important?**
   - Hint: What if someone can't see the image? What if the image doesn't load?

2. **What's the difference between link text and alt text?**
   - Hint: One describes where you're going, one describes what you see.

3. **What happens if your image file is in a different folder?**
   - Hint: The `src` needs the correct path. We'll learn more about this in Lesson 1.4!

4. **Should you use "click here" as link text?**
   - Hint: Imagine a screen reader reading all links on the page.

5. **What if the image is just decorative (doesn't add meaning)?**
   - Hint: Use empty alt text: `alt=""` (we'll learn more about this later!)

---

## 📖 Understanding Links & Images

### Link Anatomy
```html
<a href="destination">clickable text</a>
```
- `<a>` - Anchor (link) tag
- `href` - Where the link goes
- `clickable text` - What users see and click

### Image Anatomy
```html
<img src="filename.jpg" alt="description">
```
- `<img>` - Image tag (self-closing!)
- `src` - Source (where to find the image)
- `alt` - Alternative text (describes the image)

### Good Link Text:
✅ "Visit the MDN HTML tutorial"  
✅ "Download the PDF guide"  
✅ "Learn more about accessibility"

### Bad Link Text:
❌ "Click here"  
❌ "Read more"  
❌ "This link"

---

## 🎉 Great Work!

You've now added two of the most important elements to your HTML toolbox: links and images!

**What you learned:**
- How to create links with the `<a>` tag
- How to add images with the `<img>` tag
- Why alt text is crucial for accessibility
- How to write good, descriptive link text

**Next:** Move on to Exercise 3 to create a multi-page website!

---

## 🆘 Troubleshooting

**Problem:** Link doesn't work (doesn't go anywhere)
- **Solution:** Make sure `href` starts with `https://` for external links
- Check for typos in the URL

**Problem:** Image doesn't show up
- **Solution:** Check the `src` — is the filename spelled correctly?
- Is the image in the same folder as your HTML file?
- For URLs, make sure the link works

**Problem:** Image shows up huge!
- **Solution:** Add `width` attribute: `<img src="..." alt="..." width="400">`

**Problem:** Alt text shows instead of image
- **Solution:** This means the image didn't load — check the `src` path

**Problem:** Link shows the URL instead of being clickable
- **Solution:** Make sure you have both `<a href="...">` and `</a>` tags
