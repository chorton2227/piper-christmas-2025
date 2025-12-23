# Exercise 2: Button and Card Design

## 🎯 Goal
Use the box model to create professional-looking buttons and cards with proper spacing and sizing.

## 📝 Instructions

1. **Create a file** called `cards-and-buttons.html`

2. **Create three styled cards**, each containing:
   - A heading
   - A paragraph of text
   - A button

3. **Style the cards** using the box model:
   - Add **30px padding** inside each card
   - Add **20px margin** below each card
   - Add a **2px solid border**
   - Use **border-radius: 10px** for rounded corners
   - Add a **box-shadow** for depth

4. **Style the buttons**:
   - Add **12px top/bottom** and **24px left/right** padding
   - Make them look clickable (good size)
   - Add a border
   - Add **10px margin-top** to separate from text

5. **Use box-sizing: border-box** for easier sizing:
```css
* {
    box-sizing: border-box;
}
```

## 💡 Example Structure

```css
.card {
    padding: 30px;
    margin-bottom: 20px;
    border: 2px solid #3498db;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

button {
    padding: 12px 24px;
    border: 2px solid #3498db;
    background-color: #3498db;
    color: white;
    margin-top: 10px;
    cursor: pointer;
}
```

## ✅ Success Criteria

- [ ] Cards have comfortable inner spacing (padding)
- [ ] Cards have space between them (margin)
- [ ] Buttons are easy to click (good padding)
- [ ] Borders are visible and styled
- [ ] Box-sizing is set to border-box
- [ ] Layout looks professional and polished

## 🎨 Challenge

1. Make buttons grow on hover: `padding: 14px 28px;`
2. Add different colored borders to cards
3. Create a "featured" card with extra padding and a thicker border
4. Use negative margin to overlap elements slightly
