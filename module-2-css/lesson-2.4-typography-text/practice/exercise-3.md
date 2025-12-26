# Exercise 3: Google Fonts Project

## 🎯 Objective
Create a beautiful webpage using Google Fonts and professional typography.

## 📝 Instructions

Build a complete "About Me" or "Portfolio" page using Google Fonts and combining all typography skills.

### Step 1: Choose Your Fonts

Visit [fonts.google.com](https://fonts.google.com) and select:
1. **One serif font** for headings (e.g., Playfair Display, Merriweather, Lora)
2. **One sans-serif font** for body text (e.g., Open Sans, Roboto, Lato)

Select multiple weights for each font (e.g., 400, 600, 700).

### Step 2: Add Google Fonts to HTML

In your HTML `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT_HERE&display=swap" rel="stylesheet">
```

### Step 3: Create Page Structure

Create `google-fonts-project.html` with:
- A hero section with:
  - Large main heading (your name or page title)
  - Subtitle/tagline
- An "About" section with:
  - Section heading (h2)
  - 2-3 paragraphs about yourself or your project
- A "Skills" or "Interests" section with:
  - Section heading
  - List of items
- A "Contact" or "Quote" section with:
  - Styled text
  
### Step 4: Apply Typography Styles

Create `google-fonts-styles.css` with:

**Main Heading**
- Your chosen serif font
- Very large size (48px-64px)
- Bold weight (700)
- Centered
- Letter-spacing for elegance

**Body Text**
- Your chosen sans-serif font
- Comfortable reading size (16px-18px)
- Line-height: 1.6
- Normal weight (400)

**Section Headings**
- Serif font
- Larger size (32px-36px)
- Semi-bold or bold
- Appropriate spacing

**Accent Text (quotes, highlights)**
- Italic style
- Different color
- Larger size
- Special border or background

### Step 5: Create Visual Hierarchy

Use different font sizes and weights to create clear hierarchy:
- **H1**: Largest and boldest
- **H2**: Noticeably smaller than H1
- **Body**: Comfortable reading size
- **Captions/Small text**: Smaller, lighter weight

## ✅ Success Criteria

Your project should:
- [ ] Use 2 Google Fonts (serif + sans-serif)
- [ ] Include properly linked font files in HTML
- [ ] Have clear visual hierarchy
- [ ] Use multiple font weights
- [ ] Include proper line-height (1.4-1.6)
- [ ] Have centered and aligned sections
- [ ] Use text-transform where appropriate
- [ ] Include decorative typography elements
- [ ] Be visually appealing and professional
- [ ] Have good contrast and readability

## 🎨 Bonus Challenges

1. **Font Pairing**: Research and use a classic font pairing
2. **Responsive Typography**: Use different font sizes for different sections
3. **Text Effects**: Add subtle text-shadow or color gradients
4. **Quote Styling**: Create a beautifully styled pull quote
5. **Navigation**: Style a navigation menu with uppercase letters and spacing
6. **Hover Effects**: Add hover effects to links with transition
7. **Color Palette**: Create a cohesive color scheme for all text

## 💡 Design Tips

**Great Font Pairings:**
- Playfair Display (headings) + Lato (body)
- Montserrat (headings) + Open Sans (body)
- Merriweather (headings) + Roboto (body)
- Raleway (headings) + Lora (body)

**Typography Best Practices:**
- Maximum 2-3 fonts per site
- Body text: 16px minimum
- Line length: 50-75 characters for comfortable reading
- High contrast: dark text on light background
- Headings: 1.5-2.5× body text size
- Line-height: 1.4-1.6 for body, 1.2 for headings

**Creating Hierarchy:**
```css
h1 { font-size: 48px; font-weight: 700; }
h2 { font-size: 32px; font-weight: 600; }
h3 { font-size: 24px; font-weight: 600; }
p  { font-size: 16px; font-weight: 400; }
```

## 📚 Key Concepts to Remember

- **Google Fonts**: Free, beautiful fonts for web
- **Font Pairing**: Combining serif + sans-serif
- **Visual Hierarchy**: Using size and weight to show importance
- **Readability**: Line-height, spacing, and sizing for comfort
- **Web Performance**: Only load the weights you need
- **Font Fallbacks**: Always include generic family as backup

## 🎯 Example Structure

```css
/* Headings - Serif Font */
h1, h2, h3 {
    font-family: 'Playfair Display', serif;
}

h1 {
    font-size: 64px;
    font-weight: 700;
    text-align: center;
    letter-spacing: 2px;
}

h2 {
    font-size: 36px;
    font-weight: 600;
    margin-top: 40px;
}

/* Body - Sans-Serif Font */
body {
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: #333;
}

p {
    margin: 15px 0;
}

/* Special Elements */
.quote {
    font-style: italic;
    font-size: 20px;
    text-align: center;
    padding: 20px;
    border-left: 4px solid #3498db;
}
```

Good luck creating your beautiful typography project! 🎨✨
