# Responsive Design Cheatsheet

## Essential Meta Tag
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
**Always include this in your `<head>`!**

## Media Queries Syntax

### Basic Structure
```css
@media (min-width: 768px) {
    /* Styles for screens 768px and wider */
}
```

### Common Breakpoints
```css
/* Mobile First Approach */
/* Mobile (default): 0-767px */

/* Tablet */
@media (min-width: 768px) { }

/* Desktop */
@media (min-width: 1024px) { }

/* Large Desktop */
@media (min-width: 1440px) { }
```

### Media Query Types
```css
/* Width-based */
@media (min-width: 768px) { }
@media (max-width: 767px) { }
@media (min-width: 768px) and (max-width: 1023px) { }

/* Orientation */
@media (orientation: portrait) { }
@media (orientation: landscape) { }

/* Print */
@media print { }
```

## Responsive Units

### Relative Units
```css
/* Percentages - relative to parent */
width: 50%;

/* rem - relative to root font size (usually 16px) */
font-size: 1.5rem;  /* 24px if root is 16px */
padding: 2rem;      /* 32px if root is 16px */

/* em - relative to parent font size */
padding: 1em;       /* If parent is 20px, this is 20px */

/* Viewport units */
width: 100vw;       /* 100% of viewport width */
height: 100vh;      /* 100% of viewport height */
font-size: 5vw;     /* 5% of viewport width */
```

### When to Use What
- **Percentages**: Layout widths, flexible sizing
- **rem**: Font sizes, consistent spacing
- **em**: Component-specific spacing
- **vw/vh**: Full-screen sections, hero areas
- **px**: Borders, small fixed values

## Flexible Images
```css
img {
    max-width: 100%;
    height: auto;
}
```

## Responsive Typography
```css
/* Basic Scaling */
body {
    font-size: 16px;
}

@media (min-width: 768px) {
    body {
        font-size: 18px;
    }
}

/* Modern: Using clamp() */
h1 {
    font-size: clamp(2rem, 5vw, 4rem);
    /* min: 2rem, preferred: 5vw, max: 4rem */
}
```

## Responsive Layouts

### Flexbox
```css
.container {
    display: flex;
    flex-direction: column;  /* Stack on mobile */
    gap: 20px;
}

@media (min-width: 768px) {
    .container {
        flex-direction: row;  /* Side-by-side on tablet+ */
    }
}
```

### CSS Grid
```css
.grid {
    display: grid;
    grid-template-columns: 1fr;  /* 1 column on mobile */
    gap: 20px;
}

@media (min-width: 768px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);  /* 2 columns */
    }
}

@media (min-width: 1024px) {
    .grid {
        grid-template-columns: repeat(3, 1fr);  /* 3 columns */
    }
}
```

### Auto-Responsive Grid
```css
.auto-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}
/* Automatically adjusts columns based on space! */
```

## Common Patterns

### Hide/Show Elements
```css
/* Hide on mobile */
.desktop-only {
    display: none;
}

@media (min-width: 768px) {
    .desktop-only {
        display: block;
    }
}

/* Hide on desktop */
.mobile-only {
    display: block;
}

@media (min-width: 768px) {
    .mobile-only {
        display: none;
    }
}
```

### Responsive Spacing
```css
.section {
    padding: 20px;  /* Mobile */
}

@media (min-width: 768px) {
    .section {
        padding: 40px;  /* Tablet */
    }
}

@media (min-width: 1024px) {
    .section {
        padding: 60px;  /* Desktop */
    }
}
```

### Container Width
```css
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
```

### Stack to Row
```css
.layout {
    display: flex;
    flex-direction: column;
}

@media (min-width: 768px) {
    .layout {
        flex-direction: row;
    }
}
```

## Hamburger Menu (No JavaScript!)
```html
<input type="checkbox" id="menu-toggle" class="menu-toggle">
<label for="menu-toggle" class="hamburger">
    <span></span>
    <span></span>
    <span></span>
</label>
<nav class="menu">
    <!-- Nav links -->
</nav>
```

```css
.menu-toggle {
    display: none;
}

.menu {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
}

.menu-toggle:checked ~ .menu {
    max-height: 500px;
}
```

## Touch Targets
```css
/* Minimum 44x44px for mobile touch targets */
.button {
    min-height: 44px;
    min-width: 44px;
    padding: 12px 24px;
}
```

## Testing Sizes
- **320px** - Small phone
- **375px** - iPhone SE, standard phone
- **768px** - Tablet portrait
- **1024px** - Tablet landscape, small laptop
- **1440px** - Desktop
- **1920px** - Large desktop

## Quick Debugging
```css
/* See all element boundaries */
* {
    outline: 1px solid red;
}
```

## Performance Tips
- Use `transform` and `opacity` for animations (GPU-accelerated)
- Avoid animating `width`, `height`, or `margin`
- Load appropriate image sizes for each breakpoint
- Consider `lazy loading` for images

## Accessibility
```css
/* Respect user's motion preferences */
@media (prefers-reduced-motion: reduce) {
    * {
        animation: none !important;
        transition: none !important;
    }
}
```

## Common Mistakes to Avoid
❌ Fixed pixel widths everywhere
❌ Forgetting viewport meta tag
❌ Testing only in browser resize (test on real devices!)
❌ Not considering touch targets on mobile
❌ Horizontal scrolling on small screens
❌ Text too small on mobile (minimum 16px)

✅ Mobile-first approach
✅ Relative units (%, rem, em)
✅ Flexible images
✅ Test on actual devices
✅ Minimum 44px touch targets
✅ Readable text at all sizes
