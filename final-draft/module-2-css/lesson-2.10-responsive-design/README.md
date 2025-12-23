# Lesson 2.10: Responsive Design 📱

## 🎯 Learning Objectives
- Understand responsive web design
- Use media queries for different screen sizes
- Create mobile-first layouts
- Make images responsive
- Build adaptive navigation

## 📱 What is Responsive Design?

Websites that adapt to different screen sizes:
- Desktop (1200px+)
- Tablet (768px-1199px)
- Mobile (< 768px)

---

## 🎨 Media Queries

Apply styles based on screen size:

### Basic Media Query
```css
/* Mobile first - styles for small screens */
.container {
    padding: 10px;
}

/* Tablet and up */
@media (min-width: 768px) {
    .container {
        padding: 20px;
    }
}

/* Desktop and up */
@media (min-width: 1200px) {
    .container {
        padding: 40px;
        max-width: 1200px;
        margin: 0 auto;
    }
}
```

### Common Breakpoints
```css
/* Small devices (phones, less than 768px) */
@media (max-width: 767px) { }

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { }

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { }

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { }
```

---

## 📐 Responsive Patterns

### Flexible Grid
```css
.grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.grid-item {
    flex: 1 1 300px;  /* Wraps on small screens */
}
```

### Responsive Navigation
```css
/* Mobile: vertical stack */
nav {
    display: flex;
    flex-direction: column;
}

/* Desktop: horizontal */
@media (min-width: 768px) {
    nav {
        flex-direction: row;
        justify-content: space-between;
    }
}
```

### Responsive Images
```css
img {
    max-width: 100%;
    height: auto;
}
```

### Hide/Show on Mobile
```css
.desktop-only {
    display: none;
}

@media (min-width: 768px) {
    .desktop-only {
        display: block;
    }
}
```

---

## 🎯 Mobile-First Approach

Start with mobile styles, add complexity for larger screens:

```css
/* Base: Mobile */
.container {
    width: 100%;
    padding: 15px;
}

.grid {
    display: flex;
    flex-direction: column;
}

/* Tablet */
@media (min-width: 768px) {
    .container {
        padding: 30px;
    }
    
    .grid {
        flex-direction: row;
        flex-wrap: wrap;
    }
}

/* Desktop */
@media (min-width: 1200px) {
    .container {
        max-width: 1200px;
        margin: 0 auto;
    }
}
```

---

## ✅ Best Practices

✅ Mobile-first approach  
✅ Flexible images (max-width: 100%)  
✅ Use relative units (%, rem, em)  
✅ Test on real devices  
✅ Don't forget viewport meta tag!  

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

**Cheat Sheet**: [resources/cheatsheet.md](resources/cheatsheet.md)
