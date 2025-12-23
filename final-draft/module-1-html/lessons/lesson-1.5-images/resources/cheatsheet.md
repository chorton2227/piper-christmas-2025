# Lesson 1.5: Images - Quick Reference Cheatsheet

## 🖼️ Image Tag Basics

### Basic Syntax
```html
<img src="image.jpg" alt="Description">
```

**Key Points:**
- `<img>` is self-closing (no `</img>`)
- `src` = source (where image is located)
- `alt` = alternative text (description)
- Both attributes are required!

---

## 📸 Image Sources (src)

| Location | Syntax | Example |
|----------|--------|---------|
| Same folder | `src="filename.jpg"` | `<img src="cat.jpg" alt="Cat">` |
| Subfolder | `src="folder/filename.jpg"` | `<img src="images/cat.jpg" alt="Cat">` |
| Parent folder | `src="../filename.jpg"` | `<img src="../cat.jpg" alt="Cat">` |
| Online | `src="https://..."` | `<img src="https://example.com/cat.jpg" alt="Cat">` |

---

## 🏷️ Alt Text Guidelines

### Good Alt Text
```html
<!-- ✅ Descriptive and specific -->
<img src="dog.jpg" alt="Golden retriever playing fetch in park">
<img src="sunset.jpg" alt="Orange and purple sunset over ocean">
<img src="code.png" alt="JavaScript code showing a function">
```

### Bad Alt Text
```html
<!-- ❌ Too vague or redundant -->
<img src="photo.jpg" alt="photo">
<img src="img.jpg" alt="image of something">
<img src="pic.jpg" alt="">  <!-- Only okay for decorative -->
```

### Rules
- ✅ Be specific (describe what you see)
- ✅ Keep under 125 characters
- ✅ Don't start with "Image of..."
- ✅ Empty `alt=""` only for decorative images

---

## 📏 Sizing Images

### Width and Height
```html
<!-- Both dimensions -->
<img src="photo.jpg" alt="Photo" width="400" height="300">

<!-- Width only (auto-height) -->
<img src="photo.jpg" alt="Photo" width="600">

<!-- Height only (auto-width) -->
<img src="photo.jpg" alt="Photo" height="400">
```

### Size Examples
```html
<!-- Small thumbnail -->
<img src="thumb.jpg" alt="Thumbnail" width="150">

<!-- Medium image -->
<img src="photo.jpg" alt="Photo" width="400">

<!-- Large banner -->
<img src="banner.jpg" alt="Banner" width="800">

<!-- Square profile pic -->
<img src="profile.jpg" alt="Profile" width="200" height="200">
```

**Remember:** Maintain aspect ratio to avoid distortion!

---

## 🎨 Image Formats

| Format | Best For | Pros | Cons |
|--------|----------|------|------|
| **JPG** | Photos | Small size, millions of colors | No transparency |
| **PNG** | Logos, graphics | Transparency, lossless | Larger files |
| **GIF** | Animations | Simple animations | Only 256 colors |
| **SVG** | Icons, logos | Scales perfectly, tiny size | Not for photos |

### When to Use What
```html
<!-- Photos → JPG -->
<img src="vacation.jpg" alt="Beach vacation">

<!-- Logo with transparency → PNG -->
<img src="logo.png" alt="Company logo">

<!-- Animation → GIF -->
<img src="loading.gif" alt="Loading spinner">

<!-- Scalable icon → SVG -->
<img src="icon.svg" alt="Home icon">
```

---

## 🔗 Clickable Images

### Basic Image Link
```html
<a href="destination.html">
    <img src="image.jpg" alt="Description">
</a>
```

### Examples
```html
<!-- Link to another page -->
<a href="gallery.html">
    <img src="thumb.jpg" alt="View gallery" width="200">
</a>

<!-- Link to external site (new tab) -->
<a href="https://example.com" target="_blank">
    <img src="logo.png" alt="Visit Example.com">
</a>

<!-- Thumbnail to full image -->
<a href="full-size.jpg">
    <img src="thumbnail.jpg" alt="Click for full size" width="150">
</a>

<!-- Social media icons -->
<a href="https://github.com/user" target="_blank">
    <img src="github-icon.png" alt="GitHub" width="40">
</a>
```

---

## 📁 File Organization

### Recommended Structure
```
my-website/
├── index.html
├── about.html
└── images/
    ├── logo.png
    ├── banner.jpg
    ├── profile.jpg
    └── gallery/
        ├── photo1.jpg
        ├── photo2.jpg
        └── photo3.jpg
```

### Using Organized Images
```html
<!-- Image in images folder -->
<img src="images/logo.png" alt="Logo">

<!-- Image in subfolder -->
<img src="images/gallery/photo1.jpg" alt="Photo 1">
```

---

## ✅ Complete Examples

### Profile Picture
```html
<img src="images/profile.jpg" 
     alt="Headshot of Jane Smith" 
     width="200" 
     height="200">
```

### Photo Gallery Thumbnail
```html
<a href="full-gallery.html">
    <img src="images/gallery-thumb.jpg" 
         alt="View complete photo gallery" 
         width="300" 
         height="200">
</a>
<p>Click to view all photos</p>
```

### Logo in Header
```html
<header>
    <a href="index.html">
        <img src="images/logo.png" 
             alt="Acme Company - Home" 
             width="150">
    </a>
</header>
```

### Social Media Icons
```html
<footer>
    <p>Follow us:</p>
    <a href="https://twitter.com/username" target="_blank">
        <img src="images/twitter-icon.png" 
             alt="Twitter" 
             width="30" 
             height="30">
    </a>
    <a href="https://github.com/username" target="_blank">
        <img src="images/github-icon.png" 
             alt="GitHub" 
             width="30" 
             height="30">
    </a>
</footer>
```

---

## 🚨 Common Mistakes

### 1. Missing Alt Text
```html
<!-- ❌ WRONG -->
<img src="photo.jpg">

<!-- ✅ CORRECT -->
<img src="photo.jpg" alt="Description">
```

### 2. Forgetting Closing Tag on Link
```html
<!-- ❌ WRONG -->
<a href="page.html">
    <img src="image.jpg" alt="Link">

<!-- ✅ CORRECT -->
<a href="page.html">
    <img src="image.jpg" alt="Link">
</a>
```

### 3. Wrong File Path
```html
<!-- ❌ WRONG - image in images/ folder -->
<img src="photo.jpg" alt="Photo">

<!-- ✅ CORRECT -->
<img src="images/photo.jpg" alt="Photo">
```

### 4. Distorted Aspect Ratio
```html
<!-- ❌ WRONG - original is 800×600 -->
<img src="photo.jpg" alt="Photo" width="400" height="200">

<!-- ✅ CORRECT - maintains 4:3 ratio -->
<img src="photo.jpg" alt="Photo" width="400" height="300">
```

---

## 💡 Quick Tips

1. **Always use alt text** - Required for accessibility
2. **Organize images** - Keep in an images/ folder
3. **Optimize file size** - Compress images before using
4. **Use right format** - JPG for photos, PNG for graphics
5. **Test paths** - Make sure images load correctly
6. **Maintain ratios** - Don't distort images
7. **Descriptive names** - Use clear filenames: `beach-sunset.jpg` not `img1.jpg`

---

## 🔍 Troubleshooting

### Image Doesn't Show
- ✅ Check file path is correct
- ✅ Verify file is in the right folder
- ✅ Check filename spelling (case-sensitive!)
- ✅ Make sure file extension matches (.jpg vs .png)

### Image is Distorted
- ✅ Check aspect ratio is correct
- ✅ Use only width OR only height (auto-calculate other)
- ✅ Verify original image dimensions

### Alt Text Not Working
- ✅ Refresh page after adding alt
- ✅ Check quotation marks around alt value
- ✅ View page source to verify alt is there

---

## 📚 Templates

### Basic Image
```html
<img src="filename.jpg" alt="Description">
```

### Sized Image
```html
<img src="filename.jpg" alt="Description" width="400">
```

### Image Link
```html
<a href="destination.html">
    <img src="filename.jpg" alt="Description">
</a>
```

### Gallery Thumbnail
```html
<a href="full-image.jpg">
    <img src="thumb.jpg" alt="Click for full size" width="200">
</a>
```

---

**Remember:** Images make websites beautiful, but alt text makes them accessible! 📸✨
