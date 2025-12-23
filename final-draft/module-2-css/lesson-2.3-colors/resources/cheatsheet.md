# CSS Colors Cheat Sheet

## 🎨 Two Main Color Properties

```css
.element {
    color: red;              /* TEXT color */
    background-color: blue;   /* BACKGROUND color */
}
```

---

## 🔤 Three Ways to Specify Colors

### 1️⃣ Color Names (140 available)
```css
color: red;
color: lightblue;
color: darkgreen;
background-color: coral;
```

**Common Names:**
red, blue, green, yellow, orange, purple, pink, white, black  
lightblue, lightgreen, darkblue, darkgreen  
coral, teal, navy, crimson, gold, silver

**Pros:** Easy, quick  
**Cons:** Limited options

---

### 2️⃣ Hex Codes (16.7 million colors)
```css
color: #FF0000;         /* Red */
color: #3498db;         /* Blue */
background-color: #2ecc71;  /* Green */
```

**Format:** `#RRGGBB` (00-FF for each)

**Common Hex:**
```css
#FF0000  /* Red */
#00FF00  /* Green */
#0000FF  /* Blue */
#000000  /* Black */
#FFFFFF  /* White */
#333333  /* Dark gray (text) */
#F5F5F5  /* Light gray (background) */
```

**Shorthand:**
```css
#FFF = #FFFFFF  /* White */
#F00 = #FF0000  /* Red */
```

**Pros:** Professional, precise  
**Cons:** Hard to remember

---

### 3️⃣ RGB / RGBA
```css
color: rgb(255, 0, 0);           /* Red */
color: rgb(52, 152, 219);        /* Blue */
background-color: rgba(255, 0, 0, 0.5);  /* 50% transparent red */
```

**Format:**
- RGB: `rgb(red, green, blue)` - values 0-255
- RGBA: `rgba(red, green, blue, alpha)` - alpha 0-1

**Alpha (Transparency):**
- `0` = completely transparent
- `0.5` = 50% transparent
- `1` = completely opaque

**Pros:** Supports transparency, intuitive  
**Cons:** Longer to type

---

## 🎯 Quick Comparison

| Method | Example | Transparency? | Use When |
|--------|---------|---------------|----------|
| **Name** | `red` | ❌ | Quick/learning |
| **Hex** | `#FF0000` | ❌ | Professional |
| **RGB** | `rgb(255,0,0)` | ❌ | Intuitive |
| **RGBA** | `rgba(255,0,0,0.5)` | ✅ | Need transparency |

---

## 🌈 Common Color Palettes

### Professional Blue
```css
#3498db  /* Primary blue */
#2c3e50  /* Dark blue-gray */
#ecf0f1  /* Light gray */
```

### Nature Green
```css
#27ae60  /* Green */
#16a085  /* Teal */
#f39c12  /* Orange */
```

### Creative Purple
```css
#9b59b6  /* Purple */
#e74c3c  /* Red */
#f1c40f  /* Yellow */
```

---

## 💡 Best Practices

### ✅ DO:
- Use good contrast (dark text on light background or vice versa)
- Limit palette to 2-4 colors
- Test accessibility
- Be consistent

### ❌ DON'T:
- Bright on bright (yellow on white)
- Too many colors
- Pure black on pure white (#333 on #FFF better)

---

## 🎨 Useful Patterns

### Text Colors
```css
.dark-text { color: #333; }
.light-text { color: #ecf0f1; }
.muted-text { color: #95a5a6; }
```

### Backgrounds
```css
.bg-primary { background-color: #3498db; }
.bg-success { background-color: #2ecc71; }
.bg-warning { background-color: #f39c12; }
.bg-danger { background-color: #e74c3c; }
```

### Transparency
```css
.overlay { background-color: rgba(0, 0, 0, 0.5); }
.glass { background-color: rgba(255, 255, 255, 0.2); }
```

---

## 🛠️ Color Tools

- **Google Color Picker** - Search "color picker"
- **Coolors.co** - Generate palettes
- **Adobe Color** - Color wheel tool
- **WebAIM Contrast Checker** - Test accessibility

---

## 🚀 Quick Reference

### Syntax
```css
/* Color names */
color: red;

/* Hex */
color: #FF0000;

/* RGB */
color: rgb(255, 0, 0);

/* RGBA (with transparency) */
background-color: rgba(255, 0, 0, 0.5);
```

### Common Use Cases
```css
/* Header */
background-color: #2c3e50;
color: white;

/* Button */
background-color: #3498db;
color: white;

/* Alert */
background-color: rgba(46, 204, 113, 0.2);
border-left: 4px solid #2ecc71;

/* Overlay */
background-color: rgba(0, 0, 0, 0.7);
```

---

**Remember:**
- `color` = text color
- `background-color` = background color
- RGBA for transparency
- Limit your palette
- Test contrast!
