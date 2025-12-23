# Lesson 2.3: Colors

## 🎯 Learning Objectives
By the end of this lesson, you will:
- Understand how to use colors in CSS
- Learn three ways to specify colors (names, hex codes, RGB)
- Apply colors to text and backgrounds
- Create harmonious color schemes
- Use opacity and transparency
- Understand color accessibility basics

## 🌈 Why Colors Matter

Colors are one of the most powerful tools in web design! They can:
- Make your website beautiful and engaging
- Create mood and emotion
- Guide user attention
- Establish brand identity
- Improve readability

## 🎨 Color Properties in CSS

There are two main color properties:

```css
.element {
    color: blue;              /* Text color */
    background-color: yellow; /* Background color */
}
```

- **`color`** - changes the text color
- **`background-color`** - changes the background color

## 🔤 Three Ways to Specify Colors

### 1️⃣ Color Names (Easiest!)

CSS has 140 named colors you can use by name:

```css
h1 {
    color: red;
    background-color: lightblue;
}

p {
    color: darkgreen;
}

.box {
    background-color: coral;
}
```

**Common color names:**
- Basic: `red`, `blue`, `green`, `yellow`, `purple`, `orange`, `pink`, `brown`
- Light: `lightblue`, `lightgreen`, `lightyellow`, `lightpink`
- Dark: `darkblue`, `darkgreen`, `darkorange`, `darkred`
- Neutral: `white`, `black`, `gray`, `silver`
- Special: `coral`, `teal`, `navy`, `olive`, `maroon`

**Pros:** Easy to remember and type  
**Cons:** Limited selection (only 140 colors)

---

### 2️⃣ Hex Codes (Most Popular! ⭐)

Hex codes give you access to **16.7 million colors**! They start with `#` followed by 6 characters.

```css
h1 {
    color: #FF0000;              /* Red */
    background-color: #3498db;   /* Blue */
}

p {
    color: #2ecc71;              /* Green */
}
```

**How hex codes work:**
- Start with `#`
- 6 characters: `#RRGGBB`
- RR = Red amount (00-FF)
- GG = Green amount (00-FF)
- BB = Blue amount (00-FF)

**Common hex colors:**
```css
#FF0000  /* Red */
#00FF00  /* Green */
#0000FF  /* Blue */
#FFFF00  /* Yellow */
#FF00FF  /* Magenta */
#00FFFF  /* Cyan */
#000000  /* Black */
#FFFFFF  /* White */
#808080  /* Gray */
```

**Shorthand:** If pairs match, you can abbreviate:
```css
#FFFFFF  =  #FFF  /* White */
#FF0000  =  #F00  /* Red */
#3333CC  =  #33C  /* Blue */
```

**Pros:** Huge color selection, professional standard  
**Cons:** Hard to remember specific codes

---

### 3️⃣ RGB Values

RGB uses red, green, and blue values from 0-255:

```css
h1 {
    color: rgb(255, 0, 0);        /* Red */
    background-color: rgb(52, 152, 219);  /* Blue */
}
```

**Format:** `rgb(red, green, blue)`
- Each value: 0-255
- `rgb(0, 0, 0)` = Black
- `rgb(255, 255, 255)` = White
- `rgb(255, 0, 0)` = Red

**RGBA - With Transparency! 🌟**

Add a fourth value (alpha) for transparency:

```css
.box {
    background-color: rgba(255, 0, 0, 0.5);  /* 50% transparent red */
}
```

- Alpha value: 0 to 1
- `0` = completely transparent
- `1` = completely opaque
- `0.5` = 50% transparent

**Pros:** Easy to understand, supports transparency  
**Cons:** Longer to type than hex

---

## 🎨 Choosing Colors

### Using Online Color Pickers

Great tools for finding colors:
- Google: Just search "color picker"
- Coolors.co - Generate color palettes
- Adobe Color - Create color schemes
- HTML Color Codes - Browse and copy codes

### Color Scheme Types

**Monochromatic** - Different shades of one color
```css
.light { color: #a8d8ea; }   /* Light blue */
.medium { color: #52b2cf; }  /* Medium blue */
.dark { color: #086788; }    /* Dark blue */
```

**Complementary** - Opposite colors (high contrast)
```css
.primary { color: #3498db; }   /* Blue */
.accent { color: #e74c3c; }    /* Red/Orange */
```

**Analogous** - Adjacent colors (harmonious)
```css
.color1 { color: #3498db; }  /* Blue */
.color2 { color: #9b59b6; }  /* Purple */
.color3 { color: #e74c3c; }  /* Red */
```

---

## 🎯 Color Best Practices

### ✅ DO:
- Use sufficient contrast between text and background
- Limit your palette to 2-4 main colors
- Test on different screens
- Consider accessibility (colorblind-friendly)
- Use consistent colors throughout your site

### ❌ DON'T:
- Use bright text on bright backgrounds (hard to read)
- Use too many competing colors
- Rely only on color to convey information
- Use pure black text on pure white (causes eye strain)

---

## 📖 Color Contrast for Readability

**Good contrast examples:**
```css
/* Dark text on light background */
.readable1 {
    color: #333333;              /* Dark gray */
    background-color: #f5f5f5;   /* Light gray */
}

/* Light text on dark background */
.readable2 {
    color: #ecf0f1;              /* Light gray */
    background-color: #2c3e50;   /* Dark blue */
}
```

**Poor contrast examples (avoid!):**
```css
/* Hard to read! */
.bad1 {
    color: yellow;
    background-color: white;
}

.bad2 {
    color: lightgray;
    background-color: white;
}
```

---

## 🌟 Opacity and Transparency

Beyond RGBA, you can control opacity:

```css
.transparent-box {
    background-color: blue;
    opacity: 0.5;  /* Makes entire element 50% transparent */
}
```

**Difference between RGBA and opacity:**
- **RGBA**: Only affects the specific color property
- **opacity**: Affects the entire element including text and children

---

## 💡 Quick Color Tips

1. **Start with a base color** you like, then build around it
2. **Use a color picker** to find exact shades
3. **Save your colors** in CSS variables (we'll learn this later!)
4. **Test accessibility** with contrast checkers
5. **Look at other websites** for inspiration

---

## 🎮 Let's Practice!

Now it's time to experiment with colors! Head to the `practice` folder to complete the exercises and create beautiful, colorful pages.

---

## 📂 What's Next?

In Lesson 2.4, we'll explore **Fonts and Text** - learning about typography, font sizes, and integrating Google Fonts to make your text look amazing!

---

## 🌟 Key Takeaways

- Use `color` for text, `background-color` for backgrounds
- **Three ways** to specify colors:
  - Names: `red`, `blue` (easy, limited)
  - Hex: `#FF0000` (professional, millions of colors)
  - RGB: `rgb(255, 0, 0)` (intuitive, supports transparency)
- RGBA adds transparency: `rgba(255, 0, 0, 0.5)`
- Always ensure good contrast for readability
- Limit your color palette for cohesive design
- Use color pickers to find perfect shades

---

**Parent Guide**: See `resources/parent-guide.md` for detailed teaching support.

**Cheat Sheet**: Check `resources/cheatsheet.md` for quick color reference.
