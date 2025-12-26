# Exercise 3: RGBA Transparency Project

## 🎯 Goal
Master RGB/RGBA colors and create a modern page with transparency effects!

## 📋 Instructions

### Step 1: Create Your Files
In `student-workspace`, create:
- `rgba-project.html`
- `rgba-project.css`

### Step 2: Build an Image Overlay Page
Create a page that demonstrates RGBA transparency:

**Required Elements:**
- Hero section with background (can be gradient) and dark overlay
- Alert boxes (success, warning, error) using RGBA backgrounds
- Frosted glass effect card
- Buttons with hover transparency effects

### Step 3: Use RGBA for Transparency

**Example Structures:**

**Hero with Overlay:**
```css
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    position: relative;
    height: 300px;
}

.hero-overlay {
    background-color: rgba(0, 0, 0, 0.5);  /* 50% black overlay */
    color: white;
}
```

**Alert Boxes:**
```css
.alert-success {
    background-color: rgba(46, 204, 113, 0.2);  /* 20% green */
    border-left: 4px solid rgb(46, 204, 113);
    color: rgb(22, 160, 133);
}

.alert-error {
    background-color: rgba(231, 76, 60, 0.2);   /* 20% red */
    border-left: 4px solid rgb(231, 76, 60);
    color: rgb(192, 57, 43);
}
```

**Glass Effect:**
```css
.glass-card {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}
```

### Step 4: Create Interactive Elements
Add buttons with transparency effects:

```css
.btn {
    background-color: rgb(52, 152, 219);
}

.btn:hover {
    background-color: rgba(52, 152, 219, 0.8);  /* Slightly transparent on hover */
}
```

## 💡 RGBA Guidelines

**Transparency Levels:**
- `0.1` - Very transparent (subtle tint)
- `0.2-0.3` - Light overlay (alert backgrounds)
- `0.5` - Half transparent
- `0.7-0.8` - Mostly opaque
- `1.0` - Completely solid

**When to Use RGBA vs RGB:**
- **RGB:** Solid colors, no transparency needed
- **RGBA:** Overlays, glass effects, subtle backgrounds, hover states

## ✅ Success Checklist
- [ ] Used both RGB and RGBA
- [ ] Created at least 3 different transparency levels
- [ ] Hero section has dark overlay
- [ ] Alert boxes use RGBA backgrounds
- [ ] Buttons have hover transparency effects
- [ ] Glass/frosted effect implemented
- [ ] Text is still readable on all backgrounds

## 🌟 Bonus Challenges
1. Create a modal/popup with RGBA backdrop
2. Make a navigation bar that becomes more opaque on scroll (you'll need JavaScript!)
3. Layer multiple RGBA colors to create depth
4. Create a "frosted glass" navigation menu
5. Add transition effects when transparency changes
6. Compare RGBA background vs opacity property side-by-side

## 🎨 Suggested Color Values

**Overlays:**
```css
rgba(0, 0, 0, 0.3)      /* Light dark overlay */
rgba(0, 0, 0, 0.5)      /* Medium dark overlay */
rgba(0, 0, 0, 0.7)      /* Heavy dark overlay */
rgba(255, 255, 255, 0.3) /* Light white overlay */
```

**Alert Backgrounds:**
```css
rgba(46, 204, 113, 0.15)   /* Success (green) */
rgba(241, 196, 15, 0.15)    /* Warning (yellow) */
rgba(231, 76, 60, 0.15)     /* Error (red) */
rgba(52, 152, 219, 0.15)    /* Info (blue) */
```

---

**Reference:** [answer-key/rgba-project.html](../answer-key/rgba-project.html)
