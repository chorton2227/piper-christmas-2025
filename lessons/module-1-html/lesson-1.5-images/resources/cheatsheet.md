# Lesson 1.5 Cheatsheet

## 🖼️ Image Basics

### Basic Image Tag
```html
<img src="image.jpg" alt="Description">
```

**Remember:** 
- `<img>` is **self-closing** (no `</img>`)
- `src` = where the image is (required)
- `alt` = description (required)

---

## 📁 Image Paths

### Same Folder
```html
<img src="photo.jpg" alt="Description">
```

### Subfolder
```html
<img src="images/photo.jpg" alt="Description">
```

### Parent Folder
```html
<img src="../photo.jpg" alt="Description">
```

### Online Image (URL)
```html
<img src="https://example.com/photo.jpg" alt="Description">
```

---

## 📏 Sizing Images

### With Width and Height
```html
<img src="photo.jpg" alt="Description" width="400" height="300">
```

### Width Only (Maintains Ratio)
```html
<img src="photo.jpg" alt="Description" width="500">
```

### Height Only (Maintains Ratio)
```html
<img src="photo.jpg" alt="Description" height="300">
```

---

## 🏷️ Alt Text

### Good Alt Text ✅
```html
<img src="dog.jpg" alt="Golden retriever playing fetch in park">
<img src="sunset.jpg" alt="Orange and purple sunset over ocean">
<img src="logo.png" alt="Company Name logo">
```

### Bad Alt Text ❌
```html
<img src="photo.jpg" alt="photo">
<img src="image.jpg" alt="Image of a dog">
<img src="pic.jpg" alt="">  <!-- Only okay if purely decorative -->
```

### Alt Text Rules:
- Be **specific** and **descriptive**
- Keep it **concise** (under 125 characters)
- Don't say "image of" or "picture of"
- Empty alt (`alt=""`) okay for decorative images only

---

## 🖼️ Image with Caption

### Using Figure and Figcaption
```html
<figure>
    <img src="photo.jpg" alt="Description" width="400">
    <figcaption>Photo caption goes here</figcaption>
</figure>
```

### Caption with Formatting
```html
<figure>
    <img src="photo.jpg" alt="Beach sunset" width="500">
    <figcaption>
        <strong>Beach Sunset</strong>
        <br>
        <em>Malibu, California • Summer 2025</em>
    </figcaption>
</figure>
```

---

## 🔗 Clickable Images

### Basic Image Link
```html
<a href="page.html">
    <img src="button.jpg" alt="Click here">
</a>
```

### Image Link to External Site
```html
<a href="https://example.com" target="_blank">
    <img src="banner.jpg" alt="Visit Example.com">
</a>
```

### Image Link with Tooltip
```html
<a href="gallery.html" title="View full gallery">
    <img src="thumbnail.jpg" alt="Photo gallery" width="200">
</a>
```

### Clickable Thumbnail
```html
<a href="large-photo.jpg" target="_blank">
    <img src="thumbnail.jpg" alt="Click to enlarge" width="150">
</a>
```

---

## 🎨 Image Formats

| Format | Use For | Has Transparency? |
|--------|---------|-------------------|
| **JPG** | Photos | ❌ No |
| **PNG** | Logos, graphics | ✅ Yes |
| **GIF** | Animations | ✅ Yes (limited) |
| **WebP** | Modern web | ✅ Yes |
| **SVG** | Icons, scalable graphics | ✅ Yes |

---

## 💡 Common Patterns

### Profile Image
```html
<img src="profile.jpg" alt="Photo of Jane Smith" width="200">
```

### Logo (Clickable to Home)
```html
<a href="index.html">
    <img src="logo.png" alt="Company Name">
</a>
```

### Gallery of Thumbnails
```html
<a href="photo1-full.jpg" target="_blank">
    <img src="photo1-thumb.jpg" alt="Photo 1" width="150">
</a>
<a href="photo2-full.jpg" target="_blank">
    <img src="photo2-thumb.jpg" alt="Photo 2" width="150">
</a>
<a href="photo3-full.jpg" target="_blank">
    <img src="photo3-thumb.jpg" alt="Photo 3" width="150">
</a>
```

### Social Media Icons
```html
<a href="https://twitter.com" target="_blank" title="Follow on Twitter">
    <img src="twitter-icon.png" alt="Twitter" width="40">
</a>
<a href="https://instagram.com" target="_blank" title="Follow on Instagram">
    <img src="instagram-icon.png" alt="Instagram" width="40">
</a>
```

### Hero/Banner Image
```html
<img src="hero.jpg" alt="Welcome banner" width="100%">
```

### Image with Text Beside It
```html
<img src="product.jpg" alt="Product name" width="300">
<p>Description of the product goes here...</p>
```

---

## ✅ Best Practices

### Always Do:
```html
<!-- ✅ Include alt text -->
<img src="photo.jpg" alt="Description">

<!-- ✅ Use descriptive file names -->
<img src="golden-retriever-playing.jpg" alt="Golden retriever playing fetch">

<!-- ✅ Maintain aspect ratio -->
<img src="photo.jpg" alt="Description" width="400">  <!-- Height auto-calculated -->
```

### Never Do:
```html
<!-- ❌ No alt attribute -->
<img src="photo.jpg">

<!-- ❌ Distorted image -->
<img src="800x600-photo.jpg" alt="Description" width="400" height="200">  <!-- Wrong ratio! -->

<!-- ❌ Bad file name -->
<img src="IMG_1234.jpg" alt="Description">
```

---

## 🐛 Troubleshooting

### Image Doesn't Show?
- Check file path (case-sensitive!)
- Verify file exists
- Check spelling of filename
- Make sure file extension is correct

### Image is Stretched?
- Don't set both width AND height
- Or use correct aspect ratio
- Let browser calculate one dimension

### Broken Image Icon?
- File path is wrong
- File doesn't exist
- Wrong file extension

---

## 🔧 Testing Placeholders

### Simple Placeholder
```html
<img src="https://placehold.co/400x300" alt="Placeholder">
```

### Colored Placeholder with Text
```html
<img src="https://placehold.co/400x300/4A90E2/FFFFFF?text=My+Image" alt="Placeholder">
```

Format: `width x height` / `background-color` / `text-color` ? text=`Your+Text`

---

## 📊 Quick Reference

### Minimum Required
```html
<img src="path/to/image.jpg" alt="Description">
```

### With All Common Attributes
```html
<img src="images/photo.jpg" 
     alt="Detailed description" 
     width="500" 
     height="375"
     title="Hover tooltip">
```

### Inside Link
```html
<a href="destination.html" title="Tooltip">
    <img src="image.jpg" alt="Description" width="300">
</a>
```

### With Caption
```html
<figure>
    <img src="image.jpg" alt="Description" width="400">
    <figcaption>Caption text</figcaption>
</figure>
```

---

## 🎯 Remember

1. **Always** include alt text
2. **Never** forget the src attribute
3. **Keep** file sizes small (optimize!)
4. **Use** descriptive file names
5. **Test** images work in browser
6. **Maintain** aspect ratio when resizing
7. **Organize** images in folders
8. **Respect** copyright and licensing
