# Exercise 3: Google Fonts Blog Post

## 🎯 Goal
Create a beautiful blog post using Google Fonts and advanced typography.

## 📝 Instructions

1. **Choose your fonts** from Google Fonts:
   - Visit https://fonts.google.com
   - Pick ONE font for headings (bold, attention-grabbing)
   - Pick ONE font for body text (readable, clean)
   - Popular combos: Montserrat + Open Sans, Playfair Display + Roboto

2. **Create `blog-post.html`** with:
   - A hero section with a catchy title
   - Author name and date
   - 3-4 paragraphs of blog content (write about anything!)
   - At least 2 subheadings (h2 or h3)
   - A quote or callout box
   - A conclusion paragraph

3. **Typography requirements**:
   - Use Google Fonts (add the `<link>` in your HTML head)
   - Heading font should be **bold** and **larger** (32-48px)
   - Body text should be **16-18px** with **1.6-1.8 line-height**
   - Add **letter-spacing** to headings for elegance
   - Use **text-align** appropriately
   - Style the quote differently (italic, different color, border)

4. **Make it beautiful**:
   - Use colors that complement the fonts
   - Add padding and spacing for readability
   - Center the hero title
   - Keep paragraph width reasonable (not too wide)

## 💡 Example Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Blog Post</title>
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans&display=swap" rel="stylesheet">
    
    <style>
        body {
            font-family: 'Open Sans', sans-serif;
            max-width: 800px;
            margin: 0 auto;
            line-height: 1.8;
        }
        
        h1, h2 {
            font-family: 'Montserrat', sans-serif;
        }
    </style>
</head>
<body>
    <header>
        <h1>Your Amazing Title</h1>
        <p class="meta">By Your Name | December 2024</p>
    </header>
    
    <article>
        <p>First paragraph...</p>
        <!-- More content -->
    </article>
</body>
</html>
```

## ✅ Success Criteria

- [ ] Two Google Fonts successfully imported and used
- [ ] Heading font is distinct from body font
- [ ] Typography is professional and easy to read
- [ ] Line height makes content comfortable to scan
- [ ] Letter spacing enhances headings
- [ ] Quote/callout is visually distinct
- [ ] Overall design looks like a real blog post

## 🎨 Challenge Ideas

1. **Add a table of contents** with styled links
2. **Create a "Read More" button** with custom styling
3. **Add a sidebar** with different font styling
4. **Include dropcaps** (large first letter) using `::first-letter`
5. **Make it responsive** - adjust font sizes for mobile

## 🔧 Recommended Google Fonts

**For Headings:**
- Montserrat (modern, bold)
- Playfair Display (elegant, serif)
- Poppins (playful, geometric)
- Bebas Neue (bold, condensed)

**For Body:**
- Open Sans (friendly, readable)
- Roboto (clean, modern)
- Lato (professional)
- Merriweather (serif, traditional)

## 💭 Think About

- Does the font choice match your content's mood?
- Is the text easy to read at different sizes?
- Do the two fonts complement each other?
- Would you want to read a long article in these fonts?

Take your time and create something you're proud of! 📝✨
