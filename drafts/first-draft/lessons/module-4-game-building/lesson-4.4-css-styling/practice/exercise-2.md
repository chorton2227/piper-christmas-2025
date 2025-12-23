# Exercise 2: CSS Experiments & Customization 🧪

**Goal**: Experiment with CSS properties to understand how they work and customize your poker game design.

**Time**: 30-45 minutes

---

## 🎯 Your Mission

Make targeted changes to your CSS to see how different properties affect the design. Learn through experimentation!

---

## 🧪 Part 1: Color Experiments

### Experiment 1: Change Background Gradient

**Find this in your CSS:**
```css
body {
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
}
```

**Try these variations (one at a time):**

1. **Sunset theme:**
   ```css
   background: linear-gradient(135deg, #ff6b6b 0%, #feca57 100%);
   ```

2. **Dark mode:**
   ```css
   background: linear-gradient(135deg, #000000 0%, #434343 100%);
   ```

3. **Purple dreams:**
   ```css
   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
   ```

4. **Forest green:**
   ```css
   background: linear-gradient(135deg, #134e4a 0%, #064e3b 100%);
   ```

**Task:** Try all 4, pick your favorite, then create your own custom gradient!

**Your custom gradient colors:**
- Color 1: __________________
- Color 2: __________________

**Tip:** Use a color picker tool like https://coolors.co/ to find hex codes!

---

### Experiment 2: Change Poker Table Color

**Find this in your CSS:**
```css
.poker-table {
    background: radial-gradient(ellipse at center, #2d5016 0%, #1a3009 100%);
    border: 15px solid #8B4513;
}
```

**Try these:**

1. **Blue felt (casino style):**
   ```css
   background: radial-gradient(ellipse at center, #1e40af 0%, #1e3a8a 100%);
   border: 15px solid #78350f;
   ```

2. **Red felt:**
   ```css
   background: radial-gradient(ellipse at center, #991b1b 0%, #7f1d1d 100%);
   border: 15px solid #1c1917;
   ```

3. **Purple felt:**
   ```css
   background: radial-gradient(ellipse at center, #6b21a8 0%, #581c87 100%);
   border: 15px solid #57534e;
   ```

**Which do you prefer?** _________________

---

### Experiment 3: Button Color Schemes

**Find the button styles and try changing them:**

**Original fold button:**
```css
.btn-fold {
    background: linear-gradient(135deg, #ff6b6b 0%, #c92a2a 100%);
}
```

**Try:**
- Darker red: `#c92a2a` to `#862e2e`
- Orange: `#ff6b6b` to `#ff922b`
- Your choice: ________________

**Create a color scheme for all buttons that matches your theme!**

---

## 📏 Part 2: Size & Spacing Experiments

### Experiment 4: Title Size

**Find this:**
```css
.game-title {
    font-size: 4rem;
}
```

**Try these values:**
- `3rem` - Smaller
- `5rem` - Bigger
- `6rem` - Huge!
- `2rem` - Tiny

**What size do you like best?** _______

**Rule:** 1rem = 16px (usually). So 4rem = 64px!

---

### Experiment 5: Button Padding

**Find this:**
```css
.btn {
    padding: 15px 30px;
}
```

**Try:**
- `padding: 10px 20px;` - Smaller buttons
- `padding: 20px 40px;` - Bigger buttons
- `padding: 15px 50px;` - Wide buttons
- `padding: 25px 30px;` - Tall buttons

**Understanding:**
- First number = top/bottom padding
- Second number = left/right padding

**Your preferred padding:** _________________

---

### Experiment 6: Card Size

**Find this:**
```css
.card {
    width: 80px;
    height: 112px;
}
```

**Try:**
- Small: `width: 60px; height: 84px;`
- Large: `width: 100px; height: 140px;`
- Giant: `width: 120px; height: 168px;`

**Note:** Keep the 5:7 ratio! (width × 1.4 = height)

**Best size for your design:** _________________

---

## ✨ Part 3: Animation Experiments

### Experiment 7: Float Speed

**Find this:**
```css
.card-symbol {
    animation: float 3s ease-in-out infinite;
}
```

**Try:**
- Fast: `float 1s ease-in-out infinite;`
- Slow: `float 5s ease-in-out infinite;`
- Super slow: `float 10s ease-in-out infinite;`

**What speed feels best?** _________________

---

### Experiment 8: Hover Lift Amount

**Find this:**
```css
.btn:hover {
    transform: translateY(-2px);
}
```

**Try:**
- Subtle: `translateY(-1px);`
- Medium: `translateY(-4px);`
- Dramatic: `translateY(-8px);`

**Your preference:** _________________

---

### Experiment 9: Create Your Own Animation

**Add this new animation to your CSS:**

```css
@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.chip-icon:hover {
    animation: spin 1s ease infinite;
}
```

**Save and hover over chip icons!** They should spin! 🌀

**Now modify it:**
- Change `1s` to `0.5s` - What happens?
- Change `infinite` to `1` - What happens?
- Change `360deg` to `180deg` - What happens?

---

## 🎨 Part 4: Advanced Styling Challenges

### Challenge 1: Add a Shadow Effect

**Make your title glow!**

**Find this:**
```css
.game-title {
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
}
```

**Change to glowing effect:**
```css
text-shadow: 
    0 0 10px #ffd43b,
    0 0 20px #ffd43b,
    0 0 30px #ffd43b;
```

**Experiment with different colors and sizes!**

---

### Challenge 2: Gradient Borders

**Try this on buttons:**

```css
.btn-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: 3px solid transparent;
    background-clip: padding-box;
    position: relative;
}

.btn-primary::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    background: linear-gradient(135deg, #ffd43b, #ff6b6b);
    border-radius: 8px;
    z-index: -1;
}
```

**This creates an animated border! Advanced! 🔥**

---

### Challenge 3: Pulsing Pot

**Make the pot display pulse:**

```css
@keyframes pulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
}

.pot-display {
    animation: pulse 2s ease-in-out infinite;
}
```

**Cool effect for drawing attention to the pot!**

---

### Challenge 4: Card Fan Effect

**Spread cards like a hand:**

```css
.card-hand {
    display: flex;
    justify-content: center;
    gap: 10px;
}

.card:nth-child(1) { transform: rotate(-8deg); }
.card:nth-child(2) { transform: rotate(-4deg); }
.card:nth-child(3) { transform: rotate(0deg); }
.card:nth-child(4) { transform: rotate(4deg); }
.card:nth-child(5) { transform: rotate(8deg); }
```

**This spreads cards in a fan shape! 🃏**

---

## 🎭 Part 5: Theme Creation Challenge

**Create a complete theme! Choose one:**

### Option A: Casino Royale (Elegant)
- Background: Black and gold gradient
- Table: Deep red felt, gold border
- Buttons: Gold and black color scheme
- Text: Elegant serif font

### Option B: Neon Nights (Cyberpunk)
- Background: Dark with neon accents
- Table: Black felt, neon blue border
- Buttons: Bright neon colors (pink, blue, green)
- Text: Futuristic font, glowing effects

### Option C: Forest Retreat (Natural)
- Background: Forest green gradient
- Table: Darker green, wooden border
- Buttons: Earth tones (browns, greens)
- Text: Natural, organic feel

### Option D: Ocean Depths (Underwater)
- Background: Deep blue gradient
- Table: Teal/turquoise felt
- Buttons: Ocean colors (blues, teals)
- Text: Flowing, water-themed

**I'm creating:** _________________

**Document your theme:**
- Background colors: _________________
- Table colors: _________________
- Button colors: _________________
- Accent colors: _________________

---

## 🔍 Part 6: CSS Detective

**Answer these questions by inspecting your CSS:**

### Question 1: What happens if you remove `box-sizing: border-box;`?
**Try it and describe:** _________________

### Question 2: What's the difference between `display: flex` and `display: block`?
**Experiment and explain:** _________________

### Question 3: What does `backdrop-filter: blur(10px)` do?
**Remove it and observe:** _________________

### Question 4: Why do we use `rem` instead of `px`?
**Research and explain:** _________________

### Question 5: What's the difference between `opacity: 0.5` and `rgba(255, 255, 255, 0.5)`?
**Test and describe:** _________________

---

## 📊 CSS Property Reference

**Quick lookup for experiments:**

### Colors
- Hex: `#ff6b6b`
- RGB: `rgb(255, 107, 107)`
- RGBA: `rgba(255, 107, 107, 0.5)` (last number = transparency)
- Named: `red`, `blue`, `darkgreen`

### Sizes
- Pixels: `16px` (fixed)
- Rem: `1rem` (relative to root font size)
- Percent: `50%` (relative to parent)
- Viewport: `100vw` (viewport width), `100vh` (viewport height)

### Shadows
- Box: `box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);`
  - X-offset Y-offset Blur Color
- Text: `text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);`

### Transitions
- `transition: all 0.3s ease;`
  - Property Duration Timing-function

---

## ✅ Completion Checklist

- [ ] Tried at least 3 different background gradients
- [ ] Experimented with poker table colors
- [ ] Changed button colors
- [ ] Adjusted title size
- [ ] Modified button padding
- [ ] Tested different card sizes
- [ ] Tried different animation speeds
- [ ] Created at least one custom animation
- [ ] Attempted at least 2 advanced challenges
- [ ] Created a complete theme OR
- [ ] Answered all CSS Detective questions

---

## 🎨 Theme Showcase

**Document your final design choices:**

### Colors
- Background gradient: _________________
- Poker table: _________________
- Primary button: _________________
- Secondary button: _________________

### Typography
- Title size: _________________
- Body text size: _________________

### Effects
- Favorite animation: _________________
- Custom effect you created: _________________

### Overall Theme Name
**My theme is called:** _________________

---

## 💡 Bonus Experiments

**If you finish early, try these:**

1. **Add a pattern background:**
   ```css
   body {
       background-image: url('data:image/svg+xml,...'); /* Pattern SVG */
   }
   ```

2. **Create a rainbow button:**
   ```css
   .btn-rainbow {
       background: linear-gradient(90deg, 
           red, orange, yellow, green, blue, indigo, violet);
   }
   ```

3. **Add a starry background:**
   Use CSS to create random dots as stars!

4. **Parallax effect:**
   Make backgrounds move at different speeds when scrolling!

---

## 🎓 What You've Learned

✅ How colors work in CSS  
✅ Impact of size and spacing  
✅ How animations bring life to designs  
✅ Advanced effects (shadows, gradients, filters)  
✅ Creating cohesive themes  
✅ CSS experimentation and debugging  

**Remember:** The best way to learn CSS is to experiment! 🧪✨

---

**Teacher/Parent Sign-Off:**

Student completed exercise: _________________ Date: _______

Theme created: ________________________________________

Notes: _________________________________________________
