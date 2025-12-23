# Lesson 1.5: Images

## 🎯 What You'll Learn
- How to add images to web pages
- Image attributes (src, alt, width, height)
- Image formats and when to use them
- Making images into clickable links
- Best practices for using images

---

## 🖼️ What Are Images?

Images make websites come alive! They can be photos, illustrations, icons, logos, and more. Images are added using the `<img>` tag.

### The Image Tag

Unlike most HTML tags, `<img>` is **self-closing** (no closing tag needed):

```html
<img src="photo.jpg" alt="Description of photo">
```

**Breaking it down:**
- `<img>` = The image tag
- `src` = Source (the image file path)
- `alt` = Alternative text (description)
- No `</img>` closing tag!

---

## 📸 The src Attribute

The `src` (source) tells the browser **where** to find the image.

### Local Images (On Your Computer)

If the image is in the **same folder** as your HTML file:

```html
<img src="cat.jpg" alt="My cat">
```

If the image is in a **subfolder**:

```html
<img src="images/cat.jpg" alt="My cat">
```

If the image is in a **parent folder**:

```html
<img src="../cat.jpg" alt="My cat">
```

### Online Images (URLs)

You can use images from the internet with full URLs:

```html
<img src="https://www.example.com/photo.jpg" alt="Photo description">
```

**Note:** Always check if you have permission to use online images!

---

## 🏷️ The alt Attribute (Very Important!)

The `alt` attribute provides a **text description** of the image.

### Why alt is Important:

1. **Accessibility** - Screen readers read alt text to visually impaired users
2. **SEO** - Search engines use alt text to understand images
3. **Broken Images** - Alt text displays if the image doesn't load
4. **Understanding** - Describes what the image shows

### Good Alt Text Examples:

```html
<!-- ✅ Good - describes the image -->
<img src="dog.jpg" alt="Golden retriever playing fetch in the park">

<!-- ✅ Good - specific description -->
<img src="sunset.jpg" alt="Orange and purple sunset over the ocean">

<!-- ❌ Bad - too vague -->
<img src="photo.jpg" alt="photo">

<!-- ❌ Bad - redundant -->
<img src="cat.jpg" alt="Image of a cat">

<!-- ❌ Bad - empty (but okay for decorative images) -->
<img src="decorative.jpg" alt="">
```

### Writing Good Alt Text:

- Be **specific** and **descriptive**
- Keep it **concise** (usually under 125 characters)
- Don't start with "Image of" or "Picture of"
- For decorative images, use empty alt: `alt=""`
- Include important text that appears in the image

---

## 📏 Sizing Images

Control image size with `width` and `height` attributes.

### Using Pixels

```html
<img src="photo.jpg" alt="Beach sunset" width="400" height="300">
```

This makes the image 400 pixels wide and 300 pixels tall.

### Using Just Width or Height

When you specify only one dimension, the browser maintains the aspect ratio:

```html
<!-- Image scales proportionally -->
<img src="photo.jpg" alt="Mountain view" width="500">
```

### Important Notes:

- **Don't distort!** If you set both width and height, use the correct ratio
- Original image size: 800×600? Use ratio 4:3 (like 400×300, 200×150)
- You can also use CSS for more flexible sizing (you'll learn this later!)

---

## 🎨 Image Formats

Different formats for different purposes!

### Common Image Formats:

| Format | Best For | Features |
|--------|----------|----------|
| **JPG/JPEG** | Photos, complex images | Small file size, no transparency |
| **PNG** | Graphics, logos, icons | Transparency support, sharp edges |
| **GIF** | Simple animations, icons | Animations, limited colors |
| **WebP** | Modern web images | Best compression, modern format |
| **SVG** | Logos, icons, graphics | Scalable, stays sharp at any size |

### When to Use What:

```html
<!-- Photos: Use JPG -->
<img src="vacation.jpg" alt="Family vacation photo">

<!-- Logo with transparency: Use PNG -->
<img src="logo.png" alt="Company logo">

<!-- Animated image: Use GIF -->
<img src="loading.gif" alt="Loading animation">

<!-- Icons that need to scale: Use SVG -->
<img src="icon.svg" alt="Home icon">
```

---

## 🔗 Images as Links

Make images clickable by wrapping them in `<a>` tags!

### Basic Image Link

```html
<a href="https://www.example.com">
    <img src="logo.png" alt="Example Company">
</a>
```

Click the image to go to the link!

### Image Link to Another Page

```html
<a href="gallery.html">
    <img src="thumbnail.jpg" alt="View full gallery">
</a>
```

### Image Link Opening in New Tab

```html
<a href="https://www.example.com" target="_blank">
    <img src="banner.jpg" alt="Visit Example.com">
</a>
```

### Styled Image Links

You can add title attributes for tooltips:

```html
<a href="about.html" title="Learn more about us">
    <img src="team-photo.jpg" alt="Our team" width="300">
</a>
```

---

## 📂 Organizing Images

Keep your projects organized!

### Recommended Folder Structure:

```
my-website/
├── index.html
├── about.html
└── images/
    ├── logo.png
    ├── photo1.jpg
    ├── photo2.jpg
    └── icons/
        ├── home.svg
        └── menu.svg
```

### Using Images from Folders:

```html
<!-- Image in images folder -->
<img src="images/logo.png" alt="Logo">

<!-- Image in subfolder -->
<img src="images/icons/home.svg" alt="Home icon">
```

---

## 🎯 Image Best Practices

### 1. Always Include Alt Text

```html
<!-- ✅ Always do this -->
<img src="photo.jpg" alt="Description">

<!-- ❌ Never do this -->
<img src="photo.jpg">
```

### 2. Optimize File Sizes

- Large images slow down your website
- Resize images before adding them
- Compress images to reduce file size
- **Tip:** Aim for under 200KB per image when possible

### 3. Use Descriptive File Names

```html
<!-- ✅ Good - descriptive -->
<img src="golden-retriever-playing-fetch.jpg" alt="Golden retriever playing fetch">

<!-- ❌ Bad - not descriptive -->
<img src="IMG_1234.jpg" alt="Dog playing">
```

### 4. Consider Mobile Users

- Images should look good on small screens
- Don't use huge images if not necessary
- Test on different screen sizes

### 5. Respect Copyright

- Only use images you have permission to use
- Free image sites: Unsplash, Pexels, Pixabay
- Give credit when required
- Never hotlink (use others' bandwidth without permission)

---

## 🌟 Common Image Patterns

### Image with Caption

```html
<figure>
    <img src="sunset.jpg" alt="Sunset over the ocean" width="500">
    <figcaption>Beautiful sunset at the beach, Summer 2025</figcaption>
</figure>
```

The `<figure>` and `<figcaption>` tags group images with their captions!

### Multiple Images

```html
<h2>Photo Gallery</h2>

<img src="photo1.jpg" alt="Mountain landscape" width="300">
<img src="photo2.jpg" alt="Beach sunset" width="300">
<img src="photo3.jpg" alt="City skyline" width="300">
```

### Thumbnail Gallery

```html
<h2>Click to View Full Size</h2>

<a href="large-photo1.jpg">
    <img src="thumb1.jpg" alt="Mountain view" width="150">
</a>

<a href="large-photo2.jpg">
    <img src="thumb2.jpg" alt="Beach sunset" width="150">
</a>
```

### Profile Image

```html
<h1>About Me</h1>
<img src="profile.jpg" alt="Photo of Jane Smith" width="200">
<p>Hi! I'm Jane, a web developer...</p>
```

---

## 🐛 Troubleshooting Images

### Image Doesn't Show?

**Check:**
1. Is the file path correct?
2. Is the image in the right folder?
3. Is the filename spelled correctly? (case-sensitive!)
4. Is the file extension correct? (.jpg not .jpeg?)
5. Does the image file actually exist?

### Broken Image Icon Appears?

This means the browser can't find the image. Double-check your `src` path!

### Image is Stretched or Squished?

You set width and height that don't match the image's aspect ratio. Fix:
- Only set width OR height (not both)
- Use the correct ratio
- Check the original image dimensions

---

## 💡 Key Concepts to Remember

1. Use `<img>` tag (self-closing)
2. `src` = where the image is
3. `alt` = description (always include!)
4. `width` and `height` control size
5. Images can be clickable links
6. Keep images in an organized folder
7. Optimize file sizes for faster loading
8. Use proper image format for the job
9. Always respect copyright
10. Test images on different devices

---

## 🎮 Practice Time!

Ready to add images to your web pages? Head to the exercises!

---

## 🚀 What's Next?

In the next lesson, you'll learn about tables - organizing data in rows and columns!

---

## 📚 Quick Reference

### Basic Image
```html
<img src="image.jpg" alt="Description">
```

### Image with Size
```html
<img src="image.jpg" alt="Description" width="400" height="300">
```

### Image in Folder
```html
<img src="images/photo.jpg" alt="Description">
```

### Online Image
```html
<img src="https://example.com/image.jpg" alt="Description">
```

### Clickable Image
```html
<a href="page.html">
    <img src="image.jpg" alt="Description">
</a>
```

### Image with Caption
```html
<figure>
    <img src="image.jpg" alt="Description">
    <figcaption>Caption text here</figcaption>
</figure>
```

---

## 🎨 Free Image Resources

When you need images for practice:

- **Unsplash** - High-quality free photos
- **Pexels** - Free stock photos and videos
- **Pixabay** - Free images and illustrations
- **Placeholder.com** - Generate placeholder images for testing

**For testing, you can also use:**
```html
<img src="https://placehold.co/300" alt="Placeholder image">
```

This creates a 300×300 placeholder image perfect for practice!
