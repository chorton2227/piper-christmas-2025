# Student Workspace - Lesson 2.5: The Box Model

Welcome to your workspace for practicing the box model! 🎨

## 📁 What to Do Here

This is your practice area. You can create files here to complete the exercises without affecting the examples or answer keys.

### Getting Started

1. **For Exercise 1:** Create a file called `spacing-practice.html`
2. **For Exercise 2:** Create `cards-and-buttons.html` and `cards-and-buttons-styles.css`
3. **For Exercise 3:** Create `my-layout.html` and `my-layout-styles.css`

## 🔧 Tips for Success

### Use box-sizing!
Always start your CSS with:
```css
* {
    box-sizing: border-box;
}
```

### Debug with borders
If spacing looks weird, add temporary borders to see the box:
```css
border: 2px solid red;  /* Helps you see what's happening! */
```

### Use DevTools
Right-click → Inspect → Computed tab to see the box model diagram!

### Start simple
Begin with one element, get the spacing right, then add more.

## 📏 Spacing Scale to Use

Professional designers use consistent spacing. Try these values:
- **Small gap:** 10px
- **Medium gap:** 20px
- **Large gap:** 30px or 40px
- **Button padding:** 12px 24px (vertical horizontal)
- **Card padding:** 20px to 30px

## ✅ Before Checking the Answer Key

Ask yourself:
- Does my page have clear spacing between sections?
- Is the padding inside elements making content readable?
- Are margins keeping elements properly separated?
- Does everything look organized and professional?
- Does it work on mobile (check with browser DevTools device emulation)?

## 🚀 Challenge Yourself

Once you finish the exercises:
1. Experiment with different padding values
2. Try negative margins (pulls elements closer)
3. Use `margin: 0 auto` to center containers
4. Add hover effects that change padding
5. Create your own unique layout!

## 💡 Common Issues

**Problem:** "My width is bigger than I set!"
- **Solution:** Use `box-sizing: border-box`

**Problem:** "Space between boxes is weird!"
- **Solution:** That's margin collapse - use padding on the parent instead

**Problem:** "I don't know if I'm using padding or margin!"
- **Solution:** Add a border - padding is inside, margin is outside

**Problem:** "Everything is touching!"
- **Solution:** Add padding for space inside, margin for space outside

## 🎨 Need Inspiration?

Look at real websites and use browser DevTools to see their spacing:
1. Right-click any element
2. Click "Inspect"
3. Look at the "Computed" tab
4. See exactly what padding and margin they used!

---

**Remember:** The box model is fundamental to CSS layout. Every element is a box with content, padding, border, and margin. Master this, and you'll be able to create any layout you imagine!

Happy coding! 🚀
