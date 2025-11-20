# Exercise 3: Complete Design with Backgrounds

## 🎯 Objective
Build a complete, professional-looking webpage using borders, shadows, and backgrounds (colors, gradients, and images).

## 📝 Instructions

Create `my-portfolio.html` and `my-portfolio-styles.css` in your student workspace. Build a personal portfolio page or landing page that showcases all your border and background skills!

## 🎨 Required Sections

### 1. Hero Section with Gradient Background
- Full-width hero section
- Gradient background (choose 2-3 colors)
- Large heading with your name or site title
- Subtitle or tagline
- Optional: Call-to-action button
- Text should be white with text-shadow for readability
- Minimum height: 400px
- Center-aligned content

**Gradient ideas:**
- Purple to pink: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- Orange sunset: `linear-gradient(135deg, #fa709a 0%, #fee140 100%)`
- Ocean blue: `linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)`
- Your own color combination!

### 2. About Section with Background Color
- Solid background color (different from white)
- Centered content with max-width
- Heading and 2-3 paragraphs about yourself or the project
- Generous padding (60px vertical, 20px horizontal)
- Consider: light gray, soft blue, cream, etc.

### 3. Skills/Features Cards with Shadows
Create at least 3 cards displaying skills, features, or services:
- White background
- Box shadow for depth
- Border-radius for rounded corners
- Padding for content spacing
- Icons or emojis at the top
- Heading and description
- Hover effect that lifts card and increases shadow
- Grid or flexbox layout with gaps

**Card requirements:**
- `box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1)`
- `border-radius: 10px` or more
- Hover: `transform: translateY(-5px)` and stronger shadow
- Smooth transition: `transition: all 0.3s ease`

### 4. Image/Background Section
Create one of these options:

**Option A: Background Image with Overlay**
- Section with background gradient used as placeholder for image
- Dark overlay using `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))`
- `background-size: cover`
- `background-position: center`
- White text that's readable over the background
- Minimum height: 300px
- Centered content

**Option B: Cards with Gradient Backgrounds**
- 3 cards with different gradient backgrounds
- White text with subtle shadow
- Border-radius and box-shadow
- Heading and description in each
- Hover effects

### 5. Contact/CTA Section with Border Accent
- Solid background color
- Top border accent: `border-top: 5px solid [color]`
- Centered content
- Heading and contact information or call-to-action
- Optional: Button with gradient background
- Padding for spacing

### 6. Footer with Dark Background
- Dark background color (#2c3e50 or similar)
- White text
- Copyright text or links
- Padding for spacing
- Optional: Top border or shadow for separation

## 📐 Layout Requirements

- **Container:** Use max-width (1200px) for main content, centered with `margin: 0 auto`
- **Responsive:** Should look good on mobile (use media queries for screens under 768px)
- **Spacing:** Consistent padding and margins throughout
- **Typography:** Use nice font-family and good font sizes

## 🎯 CSS Properties to Use

Make sure you use ALL of these:
- ✅ `background-color`
- ✅ `background: linear-gradient()`
- ✅ `border` (at least one place)
- ✅ `border-radius` (on cards/buttons)
- ✅ `border-top` or similar (for accent borders)
- ✅ `box-shadow` (multiple places)
- ✅ Hover effects with transitions
- ✅ `background-size: cover` (if using background images/gradients)

## 💡 Design Tips

1. **Color Harmony:** Choose a color scheme and stick to it
   - Use a gradient generator or color palette tool
   - Limit to 2-3 main colors plus neutrals (white, gray, dark)

2. **Shadows:** Start subtle and add more as needed
   - Subtle: `0 2px 5px rgba(0,0,0,0.1)`
   - Medium: `0 4px 10px rgba(0,0,0,0.15)`
   - Strong: `0 8px 20px rgba(0,0,0,0.2)`

3. **Border Radius:** Consistency matters
   - Pick one value (like 10px) and use it throughout
   - Buttons can be more rounded (20-30px)

4. **Spacing:** Use a scale
   - Small: 10px
   - Medium: 20px
   - Large: 40px
   - Extra large: 60px

5. **Contrast:** Ensure text is readable
   - Dark text on light backgrounds
   - Light text on dark backgrounds
   - Use overlays for text over images

## ✅ Success Criteria

Your portfolio page must have:
- [ ] Hero section with gradient background
- [ ] At least 3 feature/skill cards with shadows and hover effects
- [ ] One section with background image techniques or gradient backgrounds
- [ ] Border accents somewhere (top border, card borders, etc.)
- [ ] Consistent border-radius values
- [ ] Professional color scheme
- [ ] Smooth transitions on interactive elements
- [ ] Responsive design (works on mobile)
- [ ] Clean, organized code with comments
- [ ] Good spacing and typography throughout

## 🎨 Bonus Challenges

1. **Advanced Gradients:** Use radial-gradient or multiple color stops
2. **Animated Gradient:** Create a subtle gradient animation
3. **Neumorphism:** Create soft, embossed-looking cards with subtle shadows
4. **Glass Effect:** Semi-transparent backgrounds with backdrop-blur
5. **Pattern Background:** Use CSS to create a subtle pattern
6. **Multiple Shadows:** Layer 2-3 shadows for ultra-realistic depth
7. **Colored Shadows:** Match shadow color to your gradient colors
8. **Profile Image:** Circular image with border and shadow

## 🔍 Code Structure Example

```css
/* Global Styles */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #2c3e50;
}

/* Hero Section */
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* Your styles here */
}

/* About Section */
.about {
    background-color: #f8f9fa;
    /* Your styles here */
}

/* Skills Cards */
.skills-grid {
    /* Grid or flexbox layout */
}

.skill-card {
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
}

.skill-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}

/* And so on... */
```

## 📱 Mobile Responsive Requirements

At screen width 768px or less:
- Stack cards vertically (one column)
- Reduce padding (40px → 20px)
- Reduce font sizes
- Full-width buttons
- Adjust hero height if needed

---

**This is your chance to be creative!** Make a design you're proud of. Think about what makes websites look professional and modern, then apply those techniques here.

**Time estimate:** 1-2 hours for a solid implementation, more if you do bonus challenges!
