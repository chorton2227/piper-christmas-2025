# Exercise 3: Complete Page Layout

## 🎯 Objective
Build a complete webpage using all box model concepts to create professional spacing and layout.

## 📝 Instructions

Create a full landing page with header, content sections, and footer - all with perfect spacing!

### Required Sections:

#### 1. Header
- Full-width background color
- Centered content with max-width: 1200px
- Padding: 20px
- Contains site title

#### 2. Hero Section
- Large padding (60px vertical, 20px horizontal)
- Centered text
- Background color
- Max-width: 1200px, centered with margin: 0 auto

#### 3. Features Section
- 3 feature cards side-by-side
- Each card:
  - Padding: 30px
  - Border and border-radius
  - Margin between cards
  - Box-shadow for depth

#### 4. Call-to-Action Section
- Padding: 80px 20px
- Background color (different from hero)
- Centered content
- Button with proper padding

#### 5. Footer
- Padding: 30px
- Background color
- Centered text
- Border-top

### CSS Requirements:

**Global Reset:**
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
}
```

**Container Pattern:**
```css
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
```

**Spacing System:**
Use consistent values:
- Small spacing: 10px, 15px
- Medium spacing: 20px, 30px
- Large spacing: 40px, 60px, 80px

### Layout Structure:

```html
<header>
    <div class="container">
        <h1>My Landing Page</h1>
    </div>
</header>

<section class="hero">
    <div class="container">
        <h2>Welcome Message</h2>
        <p>Description</p>
    </div>
</section>

<section class="features">
    <div class="container">
        <div class="feature-card">...</div>
        <div class="feature-card">...</div>
        <div class="feature-card">...</div>
    </div>
</section>

<section class="cta">
    <div class="container">
        <h2>Call to Action</h2>
        <button>Get Started</button>
    </div>
</section>

<footer>
    <div class="container">
        <p>© 2024 Your Name</p>
    </div>
</footer>
```

## ✅ Success Criteria

- [ ] All sections have proper padding
- [ ] Content is centered with max-width containers
- [ ] Consistent spacing throughout
- [ ] Feature cards have margins between them
- [ ] Buttons have comfortable padding
- [ ] Border-radius used for rounded corners
- [ ] Box-shadows add depth
- [ ] Page looks professional and polished
- [ ] No elements touching edges
- [ ] Clear visual separation between sections

## 🎨 Bonus Challenges

1. **Responsive Design**: Adjust padding/margins for mobile
2. **Hover Effects**: Add transitions on hover
3. **Navigation Menu**: Add nav with proper spacing
4. **Icon Cards**: Include icons with appropriate spacing
5. **Testimonials**: Add testimonial cards with quotes
6. **Image Gallery**: Create gallery with proper margins
7. **Form Section**: Build contact form with spacing
8. **Animation**: Subtle animations on scroll

## 💡 Design Tips

**Spacing Hierarchy:**
- Sections: 60-80px padding vertically
- Cards: 25-30px padding
- Buttons: 12-15px vertical, 20-30px horizontal
- Text elements: 15-20px margins

**Visual Depth:**
```css
box-shadow: 0 2px 5px rgba(0,0,0,0.1);  /* Subtle */
box-shadow: 0 4px 10px rgba(0,0,0,0.15); /* Medium */
box-shadow: 0 8px 20px rgba(0,0,0,0.2);  /* Strong */
```

**Border Radius:**
- Buttons: 5px
- Cards: 8-10px
- Images: 10-15px

**Color Scheme Suggestion:**
- Header: #2c3e50
- Hero: #3498db
- Features: White cards on light background
- CTA: #e74c3c or #27ae60
- Footer: #34495e

## 📚 Key Concepts

- **max-width + margin: 0 auto** = Centered content
- **Consistent padding** = Professional look
- **Margin-bottom on sections** = Clear separation
- **Box-shadow** = Depth and hierarchy
- **Border-radius** = Modern, friendly feel
- **box-sizing: border-box** = Predictable sizing

## 🎯 Example Spacing:

```css
/* Header */
header {
    padding: 20px 0;
    background: #2c3e50;
}

/* Hero */
.hero {
    padding: 60px 20px;
    text-align: center;
}

.hero h2 {
    margin-bottom: 20px;
}

/* Feature Cards */
.feature-card {
    padding: 30px;
    margin: 15px;
    border: 1px solid #ddd;
    border-radius: 10px;
}

/* Buttons */
button {
    padding: 15px 30px;
    margin-top: 20px;
    border-radius: 5px;
}

/* Footer */
footer {
    padding: 30px 0;
    margin-top: 60px;
    border-top: 2px solid #ddd;
}
```

Good luck creating your professional landing page! 🚀
