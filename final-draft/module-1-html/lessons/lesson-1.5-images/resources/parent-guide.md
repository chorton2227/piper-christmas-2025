# Parent Guide: Lesson 1.5 - Images

## 📚 Lesson Overview

Students learn to add images to web pages using the `<img>` tag. This lesson emphasizes accessibility through alt text, proper file organization, and combining images with links.

**Key Concepts:**
- The `<img>` tag (self-closing)
- `src` attribute for image location
- `alt` attribute for accessibility
- Sizing with width/height
- Image formats (JPG, PNG, GIF, SVG)
- Making images clickable

---

## 💡 Teaching Tips

### The Image Tag is Different
Unlike other HTML tags, `<img>` doesn't have a closing tag:
```html
<img src="cat.jpg" alt="Cat">  <!-- Self-closing! -->
```

**Analogy:** It's like a picture frame - the image IS the content, there's nothing "inside" the tag.

### Alt Text is Critical
Alt text isn't optional - it's essential for accessibility. 

**Explain it this way:** "If someone can't see the image, what would they need to know about it?"

Good: `alt="Golden retriever catching a frisbee"`  
Bad: `alt="dog"` or `alt="image"`

---

## 🔧 Common Challenges

### Challenge 1: "My image doesn't show!"

**Check these:**
1. Is the file path correct?
2. Are file and HTML in same folder?
3. Is the filename spelled exactly right?
4. Does the file extension match? (.jpg not .png)

**File paths are tricky!**
```
Same folder: src="cat.jpg"
In subfolder: src="images/cat.jpg"
```

### Challenge 2: "Image looks stretched/squashed!"

**Cause:** Wrong aspect ratio

**Solution:** Use only width OR only height, let browser calculate the other:
```html
<!-- ✅ Good - auto-calculates height -->
<img src="photo.jpg" alt="Photo" width="400">

<!-- ❌ Bad - wrong ratio -->
<img src="photo.jpg" alt="Photo" width="400" height="200">
```

---

## 🎯 Exercise Guidance

### Exercise 1: Image Page
Students practice basic image syntax with different sizes.

**Help them:**
- Use placehold.co for practice images
- Write specific alt text
- Organize with headings

### Exercise 2: Photo Gallery
Create clickable image thumbnails.

**Watch for:**
- Proper link/image nesting
- Descriptive alt text
- Consistent sizing

### Exercise 3: Profile Page
Combine all skills learned so far.

**Should include:**
- Profile picture
- Hobby images
- Clickable social icons
- Good organization

---

## 📋 Assessment Checklist

Your child has mastered images if they can:

- [ ] Add images with proper src and alt
- [ ] Write descriptive alt text
- [ ] Size images appropriately
- [ ] Make images clickable
- [ ] Understand different image formats
- [ ] Organize images in folders

---

**Great progress!** 🎉 Images make websites come alive!
