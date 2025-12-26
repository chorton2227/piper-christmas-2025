# Lesson 1.5: Images

Welcome to Lesson 1.5! Images bring websites to life. Today you'll learn how to add pictures to your pages, make them look great, and even make them clickable!

---

## 🎯 What You'll Learn

By the end of this lesson, you'll be able to:
- Add images to web pages using the `<img>` tag
- Use the `src` attribute to specify image locations
- Write meaningful `alt` text for accessibility
- Control image size with `width` and `height` attributes
- Understand different image formats (JPG, PNG, GIF, SVG)
- Make images clickable by combining `<img>` and `<a>` tags
- Follow best practices for web images

---

## 🖼️ Understanding the Image Tag

Images are added using the `<img>` tag. Unlike most HTML tags, `<img>` is **self-closing** - it doesn't have a closing tag!

### Basic Image Syntax

```html
<img src="photo.jpg" alt="Description of photo">
```

### Breaking Down the Image Tag

```html
<img src="cat.jpg" alt="Orange tabby cat sleeping">
│    │           │
│    │           └─ alt: Description of the image
│    └─ src: Where to find the image file
└─ img tag (self-closing, no </img>!)
```

**Required Attributes:**
- **`src`** = Source (where the image file is located)
- **`alt`** = Alternative text (description for accessibility)

---

## 📸 The src Attribute - Image Sources

The `src` attribute tells the browser where to find your image file.

### Local Images (Same Folder)

If your image is in the same folder as your HTML file:

```html
<img src="photo.jpg" alt="My photo">
```

**File structure:**
```
my-folder/
├── index.html
└── photo.jpg  ← Same folder!
```

### Images in Subfolders

Organize images in an "images" folder:

```html
<img src="images/photo.jpg" alt="My photo">
```

**File structure:**
```
my-folder/
├── index.html
└── images/
    └── photo.jpg  ← In subfolder
```

### Images in Parent Folders

Use `..` to go up one folder level:

```html
<img src="../photo.jpg" alt="My photo">
```

**File structure:**
```
parent-folder/
├── photo.jpg  ← Parent folder
└── my-folder/
    └── index.html
```

### Online Images (URLs)

Use images from the internet with full URLs:

```html
<img src="https://www.example.com/images/photo.jpg" alt="Photo description">
```

**Important Notes:**
- Always check if you have permission to use online images
- Local images load faster and are more reliable
- Use placeholder services for practice (like placehold.co)

---

## 🏷️ The alt Attribute - Accessibility Matters!

The `alt` attribute provides a text description of the image. This is **critical** for accessibility!

### Why alt Text is Important

1. **Screen Readers** - Read alt text aloud to visually impaired users
2. **Broken Images** - Shows if the image doesn't load
3. **SEO** - Helps search engines understand your images
4. **Context** - Tells users what the image shows

### Writing Good Alt Text

```html
<!-- ✅ GOOD: Specific and descriptive -->
<img src="dog.jpg" alt="Golden retriever catching a frisbee in the park">
<img src="sunset.jpg" alt="Orange and purple sunset over calm ocean">
<img src="cake.jpg" alt="Three-layer chocolate birthday cake with candles">

<!-- ❌ BAD: Too vague or redundant -->
<img src="photo.jpg" alt="photo">
<img src="cat.jpg" alt="Image of a cat">
<img src="pic.jpg" alt="">  ← Only okay for decorative images!
```

### Alt Text Guidelines

**DO:**
- ✅ Be specific and descriptive
- ✅ Keep it concise (under 125 characters)
- ✅ Describe what's important in the image
- ✅ Include text that appears in the image
- ✅ Think: "If I couldn't see this, what would I need to know?"

**DON'T:**
- ❌ Start with "Image of..." or "Picture of..."
- ❌ Use generic text like "photo" or "image"
- ❌ Leave alt empty (except for purely decorative images)
- ❌ Stuff with keywords for SEO

### Examples by Image Type

```html
<!-- Product image -->
<img src="laptop.jpg" alt="Silver 15-inch laptop with open screen">

<!-- Person -->
<img src="headshot.jpg" alt="Headshot of Sarah Johnson, software developer">

<!-- Logo -->
<img src="logo.png" alt="Acme Company logo">

<!-- Chart/Graph -->
<img src="sales-chart.png" alt="Bar graph showing sales growth from 2020-2024">

<!-- Decorative image (empty alt is okay) -->
<img src="decorative-border.png" alt="">
```

---

## 📏 Sizing Images

Control how large images appear using `width` and `height` attributes.

### Setting Width and Height

```html
<img src="photo.jpg" alt="Beach sunset" width="400" height="300">
```

This makes the image 400 pixels wide and 300 pixels tall.

### Setting Only Width (Maintains Aspect Ratio)

```html
<!-- Browser automatically calculates height to keep proportions -->
<img src="photo.jpg" alt="Mountain landscape" width="600">
```

### Setting Only Height

```html
<!-- Browser automatically calculates width -->
<img src="photo.jpg" alt="Waterfall" height="400">
```

### Understanding Aspect Ratios

**Important:** Keep the original aspect ratio to avoid distortion!

```html
<!-- ✅ GOOD: Original is 800×600 (4:3 ratio) -->
<img src="photo.jpg" alt="Photo" width="400" height="300">  <!-- 4:3 ✓ -->
<img src="photo.jpg" alt="Photo" width="200" height="150">  <!-- 4:3 ✓ -->

<!-- ❌ BAD: Will look stretched/squashed -->
<img src="photo.jpg" alt="Photo" width="400" height="200">  <!-- Wrong ratio! -->
```

### Size Examples

```html
<!-- Small thumbnail -->
<img src="thumb.jpg" alt="Thumbnail" width="150">

<!-- Medium image -->
<img src="photo.jpg" alt="Photo" width="400">

<!-- Large image -->
<img src="banner.jpg" alt="Banner" width="800">

<!-- Specific dimensions -->
<img src="profile.jpg" alt="Profile picture" width="200" height="200">
```

---

## 🎨 Image Formats - Choosing the Right Type

Different image formats serve different purposes!

### Common Image Formats

| Format | Best For | Pros | Cons |
|--------|----------|------|------|
| **JPG/JPEG** | Photos, complex images | Small file size, millions of colors | No transparency, lossy compression |
| **PNG** | Graphics, logos, screenshots | Transparency support, lossless | Larger file size |
| **GIF** | Simple animations | Animation support | Only 256 colors |
| **WebP** | Modern web images | Best compression, transparency | Not supported in old browsers |
| **SVG** | Icons, logos, illustrations | Infinitely scalable, tiny file size | Not for photos |

### When to Use Each Format

```html
<!-- Photos and complex images: JPG -->
<img src="vacation-photo.jpg" alt="Family vacation at the beach">
<img src="landscape.jpg" alt="Mountain range at sunrise">

<!-- Logos and graphics with transparency: PNG -->
<img src="company-logo.png" alt="Acme Company logo">
<img src="screenshot.png" alt="Screenshot of the app interface">

<!-- Simple animations: GIF -->
<img src="loading-spinner.gif" alt="Loading animation">
<img src="celebration.gif" alt="Animated confetti">

<!-- Icons and graphics that scale: SVG -->
<img src="home-icon.svg" alt="Home icon">
<img src="checkmark.svg" alt="Checkmark">
```

### Quick Decision Guide

**Use JPG when:**
- Image is a photograph
- You don't need transparency
- File size matters

**Use PNG when:**
- You need transparency
- Image has text or sharp edges
- Quality is more important than file size

**Use GIF when:**
- You need simple animation
- Image uses few colors

**Use SVG when:**
- Image is an icon or simple graphic
- You need it to scale perfectly at any size
- File size needs to be tiny

---

## 🔗 Making Images Clickable

Combine `<a>` and `<img>` tags to make images into links!

### Basic Image Link

```html
<a href="https://www.example.com">
    <img src="logo.png" alt="Example Company logo">
</a>
```

**How it works:**
- The `<a>` tag wraps around the `<img>` tag
- Clicking the image follows the link
- Image becomes clickable (usually shows a hand cursor)

### Image Link to Another Page

```html
<a href="gallery.html">
    <img src="gallery-thumb.jpg" alt="View full photo gallery">
</a>
```

### Image Link Opening in New Tab

```html
<a href="https://www.youtube.com" target="_blank">
    <img src="youtube-banner.jpg" alt="Visit our YouTube channel">
</a>
```

### Thumbnail to Full-Size Image

```html
<a href="full-size-photo.jpg">
    <img src="thumbnail.jpg" alt="Click to view full-size photo" width="200">
</a>
```

### Multiple Image Links

```html
<h2>Social Media</h2>
<a href="https://github.com/username" target="_blank">
    <img src="github-icon.png" alt="Visit our GitHub" width="50">
</a>
<a href="https://twitter.com/username" target="_blank">
    <img src="twitter-icon.png" alt="Follow us on Twitter" width="50">
</a>
<a href="https://linkedin.com/company/name" target="_blank">
    <img src="linkedin-icon.png" alt="Connect on LinkedIn" width="50">
</a>
```

---

## ✅ Good Examples vs ❌ Bad Examples

### Example 1: Basic Image

```html
<!-- ✅ GOOD: Has src and descriptive alt -->
<img src="sunset.jpg" alt="Orange and pink sunset over the ocean">

<!-- ❌ BAD: Missing alt text -->
<img src="sunset.jpg">

<!-- ❌ BAD: Generic alt text -->
<img src="sunset.jpg" alt="image">
```

### Example 2: Sized Image

```html
<!-- ✅ GOOD: Proper aspect ratio maintained -->
<img src="photo.jpg" alt="Mountain view" width="600" height="400">

<!-- ✅ GOOD: Width only, auto-height -->
<img src="photo.jpg" alt="Mountain view" width="600">

<!-- ❌ BAD: Distorted aspect ratio -->
<img src="photo.jpg" alt="Mountain view" width="600" height="200">
```

### Example 3: Image Link

```html
<!-- ✅ GOOD: Clear purpose and alt text -->
<a href="portfolio.html">
    <img src="portfolio-thumb.jpg" alt="View my portfolio">
</a>

<!-- ❌ BAD: Poor alt text, no context -->
<a href="page.html">
    <img src="image.jpg" alt="click here">
</a>
```

---

## 🎯 Complete Image Examples

### Photo Gallery Preview

```html
<h1>My Photo Gallery</h1>

<h2>Nature Photos</h2>
<a href="nature-gallery.html">
    <img src="nature-thumb.jpg" alt="View nature photo gallery" width="300">
</a>

<h2>City Photos</h2>
<a href="city-gallery.html">
    <img src="city-thumb.jpg" alt="View city photo gallery" width="300">
</a>

<h2>Portrait Photos</h2>
<a href="portrait-gallery.html">
    <img src="portrait-thumb.jpg" alt="View portrait photo gallery" width="300">
</a>
```

### Profile Page with Images

```html
<h1>About Me</h1>

<img src="profile-pic.jpg" alt="Headshot of Jane Smith" width="200" height="200">

<h2>My Hobbies</h2>
<h3>Photography</h3>
<img src="camera.jpg" alt="My camera setup" width="400">

<h3>Hiking</h3>
<img src="hiking.jpg" alt="Hiking trail through the forest" width="400">

<h3>Coding</h3>
<img src="code-screen.png" alt="Code editor showing HTML" width="400">
```

### Product Showcase

```html
<h1>Our Products</h1>

<h2>Laptop</h2>
<a href="laptop-details.html">
    <img src="laptop.jpg" alt="Silver laptop with 15-inch screen" width="300">
</a>
<p>Click to see full specifications</p>

<h2>Tablet</h2>
<a href="tablet-details.html">
    <img src="tablet.jpg" alt="10-inch tablet with stylus" width="300">
</a>
<p>Click to see full specifications</p>
```

---

## 💭 Think About It

Before moving on, consider:

1. **Browse your favorite websites.** How do they use images? What sizes? What formats?

2. **Accessibility matters.** How would someone using a screen reader understand your images?

3. **File organization.** Would it help to keep all images in an "images" folder?

4. **Performance.** Should you use a huge 5MB image or optimize it first?

---

## 🎯 Success Checklist

By the end of this lesson, you should be able to:
- [ ] Add images using the `<img>` tag
- [ ] Use the `src` attribute for local and online images
- [ ] Write descriptive, meaningful alt text
- [ ] Control image size with width and height
- [ ] Understand when to use JPG, PNG, GIF, and SVG
- [ ] Make images clickable with anchor tags
- [ ] Maintain proper aspect ratios
- [ ] Organize images in folders
- [ ] Explain why alt text is important
- [ ] Choose appropriate image formats

---

## ♿ Accessibility Reminder

Images must be accessible to all users:
- **Always include alt text** - describes image for screen readers
- **Make alt text meaningful** - not just "image" or "photo"
- **Decorative images can have empty alt** - `alt=""`
- **Don't rely only on images** - important info should also be in text
- **Consider color blindness** - don't rely only on color in images

---

## 📝 Practice Exercises

Ready to practice? Head to the practice exercises!

**Exercise 1:** Add images to a page with proper alt text and sizing  
**Exercise 2:** Create a photo gallery with clickable thumbnails  
**Exercise 3:** Build a complete profile page with multiple image types

---

## 🚀 What's Next?

In Lesson 1.6, you'll learn about **tables** - how to organize data in rows and columns!

---

## 📚 Quick Reference

### Basic Image
```html
<img src="photo.jpg" alt="Description">
```

### Sized Image
```html
<img src="photo.jpg" alt="Description" width="400" height="300">
<img src="photo.jpg" alt="Description" width="500">  <!-- Auto-height -->
```

### Image in Subfolder
```html
<img src="images/photo.jpg" alt="Description">
```

### Online Image
```html
<img src="https://example.com/photo.jpg" alt="Description">
```

### Clickable Image
```html
<a href="page.html">
    <img src="photo.jpg" alt="Description">
</a>
```

### Image Link (New Tab)
```html
<a href="https://example.com" target="_blank">
    <img src="logo.png" alt="Company logo">
</a>
```

### Key Points
- `<img>` is self-closing (no `</img>`)
- Always include `alt` text for accessibility
- Use descriptive alt text, not "image" or "photo"
- Maintain aspect ratio when sizing
- JPG for photos, PNG for logos/graphics, SVG for scalable icons
- Wrap in `<a>` tags to make images clickable
- Keep images organized in an images/ folder

---

**Excellent work learning about images!** 🎉 You can now make your websites visual and engaging!
