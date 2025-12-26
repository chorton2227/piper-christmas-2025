# CSS Mini Project - Cheat Sheet

## 🎨 Essential CSS Patterns

### Header (Fixed Positioning)
```css
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #2c3e50;
    padding: 15px 0;
    z-index: 1000;
}
```

### Navigation (Flexbox)
```css
.nav {
    display: flex;
    gap: 20px;
    align-items: center;
}

.nav-link {
    text-decoration: none;
    color: white;
    transition: color 0.3s ease;
}

.nav-link:hover {
    color: #3498db;
}
```

### Hero Section (Gradient Background)
```css
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}
```

### Buttons (Hover Effects)
```css
.btn {
    padding: 15px 40px;
    border-radius: 8px;
    background-color: #3498db;
    color: white;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}
```

### Card Grid (Flexbox)
```css
.card-grid {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
}

.card {
    flex: 1;
    min-width: 280px;
    padding: 30px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-10px);
}
```

### Card Grid (CSS Grid Alternative)
```css
.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
}
```

### Section Spacing
```css
.section {
    padding: 80px 20px;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
```

### Responsive Design
```css
/* Tablet */
@media (max-width: 768px) {
    .hero-title {
        font-size: 36px;
    }
    
    .nav {
        flex-direction: column;
    }
}

/* Mobile */
@media (max-width: 480px) {
    .hero-title {
        font-size: 28px;
    }
    
    .card-grid {
        grid-template-columns: 1fr;
    }
}
```

## 🎨 Color Palettes

### Purple & Blue
```css
--primary: #667eea;
--secondary: #764ba2;
--accent: #3498db;
--light: #f5f7fa;
--dark: #2c3e50;
```

### Pink & Orange
```css
--primary: #f093fb;
--secondary: #f5576c;
--accent: #fee140;
--light: #fff5f7;
--dark: #2c3e50;
```

### Green & Teal
```css
--primary: #43e97b;
--secondary: #38f9d7;
--accent: #4facfe;
--light: #f0fff4;
--dark: #2c3e50;
```

## 📏 Spacing Scale

```css
/* Consistent spacing */
--space-xs: 8px;
--space-sm: 16px;
--space-md: 24px;
--space-lg: 32px;
--space-xl: 48px;
--space-2xl: 64px;
```

## 🔤 Typography Scale

```css
/* Font sizes */
--text-xs: 14px;
--text-sm: 16px;
--text-base: 18px;
--text-lg: 20px;
--text-xl: 24px;
--text-2xl: 32px;
--text-3xl: 42px;
--text-4xl: 56px;

/* Heading hierarchy */
h1 { font-size: 56px; font-weight: bold; }
h2 { font-size: 42px; font-weight: bold; }
h3 { font-size: 32px; font-weight: 600; }
h4 { font-size: 24px; font-weight: 600; }
p  { font-size: 18px; line-height: 1.6; }
```

## 🎭 Common Effects

### Lift on Hover
```css
.element:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.15);
}
```

### Scale on Hover
```css
.element:hover {
    transform: scale(1.05);
}
```

### Rotate on Hover
```css
.element:hover {
    transform: rotate(5deg);
}
```

### Fade In
```css
.element {
    opacity: 0.8;
    transition: opacity 0.3s ease;
}

.element:hover {
    opacity: 1;
}
```

### Border Glow
```css
.element {
    border: 2px solid transparent;
    transition: border-color 0.3s ease;
}

.element:hover {
    border-color: #3498db;
}
```

## 💡 Pro Tips

1. **Use box-sizing: border-box** on everything
   ```css
   * { box-sizing: border-box; }
   ```

2. **Reset margins and padding**
   ```css
   * { margin: 0; padding: 0; }
   ```

3. **Set a base font size and line-height**
   ```css
   body {
       font-size: 16px;
       line-height: 1.6;
   }
   ```

4. **Use transitions on interactive elements**
   ```css
   button, a, .card {
       transition: all 0.3s ease;
   }
   ```

5. **Add cursor: pointer to clickable items**
   ```css
   button, a, .clickable {
       cursor: pointer;
   }
   ```

6. **Use max-width for responsive containers**
   ```css
   .container {
       max-width: 1200px;
       margin: 0 auto;
   }
   ```

7. **Add z-index to fixed/sticky elements**
   ```css
   .header {
       position: fixed;
       z-index: 1000;
   }
   ```

## 🐛 Common Issues & Fixes

### Fixed Header Covering Content
```css
/* Add margin-top to first section */
.hero {
    margin-top: 60px; /* Height of fixed header */
}
```

### Images Too Large
```css
img {
    max-width: 100%;
    height: auto;
}
```

### Flexbox Items Not Equal Width
```css
.flex-item {
    flex: 1; /* Equal width */
}
```

### Text Too Close to Edges on Mobile
```css
.container {
    padding: 0 20px; /* Add horizontal padding */
}
```

### Hover Effects Jumpy
```css
/* Set dimensions before adding transform */
.element {
    transition: transform 0.3s ease;
}
```

## ✅ Quick Checklist

- [ ] Reset CSS applied
- [ ] Container max-width set
- [ ] Fixed header with z-index
- [ ] Flexbox for navigation
- [ ] Gradients for backgrounds
- [ ] Border-radius on cards/buttons
- [ ] Box-shadows for depth
- [ ] Hover effects with transitions
- [ ] Responsive media queries
- [ ] Consistent spacing scale
- [ ] Typography hierarchy
- [ ] Good color contrast
