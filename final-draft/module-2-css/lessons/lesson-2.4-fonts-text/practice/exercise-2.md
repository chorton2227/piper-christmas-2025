# Exercise 2: Web-Safe Fonts

## 🎯 Goal
Experiment with different web-safe font families and learn which fonts work best for different purposes.

## 📝 Instructions

1. **Create a file** called `font-explorer.html`

2. **Create a showcase page** with sections for different font families:
   - Arial section
   - Georgia section
   - Times New Roman section
   - Courier New section
   - Verdana section

3. **For each section**:
   - Add a heading with the font name
   - Add a paragraph explaining what the font is good for
   - Display "The quick brown fox jumps over the lazy dog" in that font
   - Style each section differently using the appropriate font

4. **Add variety**:
   - Use different font sizes for headings vs body text
   - Try different font weights (normal, bold)
   - Mix fonts (one for headings, another for body)

## 💡 Font Stack Example

```css
body {
    font-family: Arial, Helvetica, sans-serif;
}

.serif-section {
    font-family: Georgia, 'Times New Roman', serif;
}

.mono-section {
    font-family: 'Courier New', Courier, monospace;
}
```

## ✅ Success Criteria

- [ ] At least 5 different font families displayed
- [ ] Each font has a descriptive heading
- [ ] Sample text ("quick brown fox...") shown in each font
- [ ] Font stacks used (fallback fonts included)
- [ ] Clear visual difference between sections
- [ ] Page explains when to use each font

## 🎨 Challenge

1. Create a "font pairing" section showing two fonts that work well together
2. Add a comparison: serif vs sans-serif
3. Style a "warning" message in Courier New to make it look like code
