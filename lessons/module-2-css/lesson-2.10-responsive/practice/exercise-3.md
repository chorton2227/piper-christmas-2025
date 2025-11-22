# Exercise 3: Responsive Landing Page

## Goal
Create a complete responsive landing page that combines all responsive design concepts: navigation, hero section, features grid, and contact form.

## Requirements

### Page Sections
Your landing page should include:

1. **Header with Navigation**
   - Logo/brand name
   - Responsive navigation (hamburger on mobile, horizontal on desktop)
   - Sticky header that stays at top when scrolling

2. **Hero Section**
   - Large headline
   - Subtitle/description text
   - Call-to-action button(s)
   - Hero image or illustration
   - Layout: stacked on mobile, side-by-side on desktop

3. **Features Section**
   - Section title
   - At least 6 feature cards with:
     - Icon (emoji or SVG)
     - Heading
     - Description text
   - Grid that adapts: 1 column → 2 columns → 3 columns

4. **About/Content Section**
   - Image and text content
   - Side-by-side on larger screens
   - Stacked on mobile

5. **Contact Form**
   - Name, email, message fields
   - Submit button
   - Optional: contact information beside form on desktop

6. **Footer**
   - Multiple columns of links (stack on mobile)
   - Copyright text
   - Optional: social media links

### Responsive Breakpoints

#### Mobile (default)
- All sections stack vertically
- Full-width elements
- Padding: 20px
- Font sizes: smaller
- Hamburger navigation

#### Tablet (768px and up)
- Hero: side-by-side layout
- Features: 2 columns
- About: side-by-side
- Horizontal navigation
- Padding: 40px

#### Desktop (1024px and up)
- Features: 3 columns
- Larger font sizes
- More whitespace
- Maximum content width: 1200px
- Centered on page

#### Large Desktop (1440px and up)
- Even more spacious
- Larger hero text
- Optional: 4-column features

### Design Requirements
- **Color Scheme**: Choose a cohesive color palette (primary, secondary, accent)
- **Typography**: Use different font sizes for hierarchy
- **Spacing**: Consistent padding/margins that scale with screen size
- **Images**: Use `max-width: 100%` to keep images responsive
- **Buttons**: Minimum 44px tall for mobile touch targets
- **Hover Effects**: Subtle animations on interactive elements

### CSS Techniques to Use
- Mobile-first approach (start with mobile styles, add media queries)
- Flexbox for header and smaller layouts
- CSS Grid for feature cards and footer
- Transitions for smooth hover effects
- Relative units (rem, %, vw) instead of fixed pixels
- `clamp()` for responsive typography (bonus)

## Bonus Challenges
1. Add smooth scrolling when clicking navigation links
2. Include a statistics/counter section with large numbers
3. Add testimonials or reviews section with cards
4. Create an image gallery that changes columns based on screen size
5. Add a "back to top" button that appears when scrolling
6. Use CSS custom properties (variables) for colors and spacing
7. Include a dark mode toggle

## Testing Checklist
- [ ] Test at 375px (mobile phone)
- [ ] Test at 768px (tablet)
- [ ] Test at 1024px (desktop)
- [ ] Test at 1920px (large desktop)
- [ ] Navigation works at all sizes
- [ ] All text is readable
- [ ] All buttons are easy to click
- [ ] Forms are easy to fill out on mobile
- [ ] No horizontal scrolling at any size
- [ ] Images scale appropriately
- [ ] Page loads quickly on mobile

## Files to Create
- `landing-page.html`
- `landing-page.css`

## Success Criteria
Your landing page should:
- Look professional on all screen sizes
- Be easy to navigate on mobile
- Have clear visual hierarchy
- Use consistent spacing and colors
- Include smooth transitions and hover effects
- Be fully responsive without any breakage from 320px to 1920px wide

This is your chance to combine everything you've learned about responsive design into one complete project!
