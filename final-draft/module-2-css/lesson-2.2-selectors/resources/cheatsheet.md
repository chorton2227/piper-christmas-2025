# CSS Selectors Cheat Sheet

## 🎯 The Three Main Selectors

### 1. Element Selector
**Targets:** ALL elements of that type  
**Syntax:** Just the element name

```css
h1 { }        /* All <h1> elements */
p { }         /* All <p> elements */
div { }       /* All <div> elements */
button { }    /* All <button> elements */
```

**In HTML:** Just use the regular tag
```html
<h1>This heading will be styled</h1>
<p>This paragraph will be styled</p>
```

---

### 2. Class Selector ⭐ Most Common!
**Targets:** Elements with specific class  
**Syntax:** Dot (.) followed by class name

```css
.highlight { }      /* Elements with class="highlight" */
.btn { }           /* Elements with class="btn" */
.card { }          /* Elements with class="card" */
```

**In HTML:** Use class attribute (NO DOT!)
```html
<p class="highlight">Highlighted paragraph</p>
<button class="btn">Click Me</button>
```

**Multiple Classes:**
```html
<div class="card featured blue">Multiple classes!</div>
```

```css
.card { }           /* Base styling */
.featured { }       /* Additional styling */
.blue { }          /* More styling */
```

---

### 3. ID Selector
**Targets:** ONE unique element  
**Syntax:** Hash (#) followed by ID name

```css
#header { }        /* Element with id="header" */
#main { }          /* Element with id="main" */
#footer { }        /* Element with id="footer" */
```

**In HTML:** Use id attribute (NO HASH!)
```html
<div id="header">Header content</div>
<div id="main">Main content</div>
```

**⚠️ Important:** Each ID can only be used ONCE per page!

---

## 🎨 Quick Comparison

| Type | HTML | CSS | Reusable? | Used For |
|------|------|-----|-----------|----------|
| **Element** | `<p>` | `p { }` | N/A | All elements of that type |
| **Class** | `class="box"` | `.box { }` | ✅ Yes | Groups of elements |
| **ID** | `id="header"` | `#header { }` | ❌ No | One unique element |

---

## 🔄 Combining Selectors

### Grouping (Same Styles for Multiple Selectors)
```css
h1, h2, h3 {
    color: navy;
    font-family: Arial;
}

.btn, .button, .click-me {
    padding: 10px 20px;
}
```

### Element with Class
```css
p.highlight {
    /* Only <p> elements with class="highlight" */
    background-color: yellow;
}

div.container {
    /* Only <div> elements with class="container" */
    max-width: 800px;
}
```

### Multiple Classes (AND)
```css
.card.featured {
    /* Elements with BOTH classes */
    border: 3px solid gold;
}
```

```html
<div class="card featured">Has both classes!</div>
```

### Descendant Selector (Space)
```css
div p {
    /* All <p> inside any <div> */
    color: blue;
}

.container h2 {
    /* All <h2> inside .container */
    color: red;
}
```

```html
<div class="container">
    <h2>This h2 will be red!</h2>
    <p>This paragraph will be blue!</p>
</div>
```

---

## 💡 Common Patterns

### Button System
```css
/* Base button */
.btn {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
}

/* Button variations */
.btn-primary { background-color: blue; }
.btn-success { background-color: green; }
.btn-danger { background-color: red; }
```

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-success">Success</button>
```

### Card System
```css
/* Base card */
.card {
    background: white;
    padding: 20px;
    border-radius: 8px;
}

/* Card variations */
.card.featured { border: 3px solid gold; }
.card.dark { background: #333; color: white; }
```

### Message Boxes
```css
.message {
    padding: 15px;
    border-radius: 5px;
    border-left: 5px solid;
}

.message.success {
    background: lightgreen;
    border-left-color: green;
}

.message.error {
    background: lightpink;
    border-left-color: red;
}
```

---

## 🎯 When to Use What?

### Use Element Selectors When:
- Styling ALL elements of that type
- Setting site-wide defaults
- Basic HTML tags (h1, p, body, etc.)

**Example:**
```css
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
}

h1 { font-size: 32px; }
p { margin: 15px 0; }
```

### Use Class Selectors When: ⭐
- Styling SOME elements
- Creating reusable styles
- Most of your styling!

**Example:**
```css
.highlight { background: yellow; }
.btn { padding: 10px 20px; }
.card { background: white; padding: 20px; }
```

### Use ID Selectors When:
- Styling unique page sections
- Targeting with JavaScript
- Page structure (header, footer, navigation)

**Example:**
```css
#header { background: navy; color: white; }
#main { max-width: 800px; margin: 0 auto; }
#footer { background: gray; }
```

---

## ✅ Best Practices

### DO:
- ✅ Use **classes** for most styling
- ✅ Use **descriptive names** (`.primary-button` not `.blue-btn`)
- ✅ Use **lowercase-with-hyphens** (`.main-header` not `.MainHeader`)
- ✅ Keep selectors **simple**
- ✅ Group **similar styles**

### DON'T:
- ❌ Use IDs for styling (save for JavaScript)
- ❌ Use inline styles
- ❌ Use generic names (`.box1`, `.thing`)
- ❌ Over-complicate selectors
- ❌ Mix naming conventions

---

## 🔧 Common Selectors Reference

### Element Selectors
```css
h1, h2, h3, h4, h5, h6  /* Headings */
p                        /* Paragraphs */
div                      /* Divisions */
span                     /* Inline container */
a                        /* Links */
img                      /* Images */
ul, ol, li              /* Lists */
button                   /* Buttons */
input                    /* Form inputs */
```

### Useful Class Patterns
```css
.container              /* Wrapper/container */
.btn, .button          /* Buttons */
.card                  /* Card component */
.header, .footer       /* Page sections */
.highlight             /* Highlighted text */
.hidden                /* Hide element */
.text-center           /* Center text */
.mt-20                 /* Margin top 20px */
```

### Common ID Uses
```css
#header                /* Page header */
#navigation, #nav      /* Navigation bar */
#main, #content        /* Main content */
#sidebar               /* Sidebar */
#footer                /* Page footer */
```

---

## 🎨 Selector Specificity (Priority)

When multiple selectors target the same element:

**Order from MOST to LEAST specific:**
1. Inline styles (in HTML - avoid!)
2. IDs (#header)
3. Classes (.highlight)
4. Elements (p)

**Example:**
```css
p { color: black; }           /* Specificity: 1 */
.highlight { color: yellow; } /* Specificity: 10 */
#main { color: blue; }        /* Specificity: 100 */
```

If an element has all three, the ID wins!

---

## 🚀 Quick Examples

### Basic Page Structure
```css
/* Element selectors for defaults */
body { font-family: Arial; background: #f5f5f5; }
h1 { color: navy; }
p { line-height: 1.6; }

/* ID selectors for unique sections */
#header { background: navy; color: white; padding: 40px; }
#main { max-width: 800px; margin: 0 auto; }

/* Class selectors for components */
.btn { padding: 10px 20px; border-radius: 5px; }
.card { background: white; padding: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
```

### Component with Variations
```html
<div class="alert">Basic alert</div>
<div class="alert alert-success">Success alert</div>
<div class="alert alert-danger">Danger alert</div>
```

```css
.alert {
    padding: 15px;
    border-radius: 5px;
    margin: 10px 0;
}

.alert-success { background: lightgreen; }
.alert-danger { background: lightpink; }
```

---

## 📝 Practice Template

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Element: Will be styled by element selector -->
    <h1>Main Title</h1>
    
    <!-- Class: Will be styled by class selector -->
    <p class="highlight">Important paragraph</p>
    
    <!-- ID: Will be styled by ID selector -->
    <div id="special-section">Unique section</div>
    
    <!-- Multiple classes -->
    <button class="btn btn-primary">Click Me</button>
</body>
</html>
```

```css
/* Element selector */
h1 {
    color: navy;
}

/* Class selector */
.highlight {
    background-color: yellow;
}

/* ID selector */
#special-section {
    background-color: lightblue;
    padding: 20px;
}

/* Multiple class system */
.btn {
    padding: 10px 20px;
}

.btn-primary {
    background-color: blue;
    color: white;
}
```

---

## 🎯 Remember:
- **Element selectors** = ALL of that type
- **Class selectors** = Groups (reusable!)
- **ID selectors** = One unique element
- **Classes are your friend** - use them most!
- In HTML: `class="name"` (no dot)
- In CSS: `.name { }` (with dot)
- In HTML: `id="name"` (no hash)
- In CSS: `#name { }` (with hash)

**Practice makes perfect! Try the exercises to master selectors! 🚀**
