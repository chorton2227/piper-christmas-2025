# Lesson 1.8: Forms

Welcome to Lesson 1.8! Forms collect information from users - essential for interactive websites.

---

## \ud83c\udfaf What You'll Learn

- Create forms with `<form>` tag
- Add text inputs, textareas, and buttons
- Use labels for accessibility
- Create different input types
- Build practical forms

---

## \ud83d\udccb What Are Forms?

Forms collect user input: names, emails, messages, choices, etc.

**Common uses:**
- Contact forms
- Login pages
- Search bars
- Surveys
- Registration

---

## \ud83d\udcd d Basic Form Structure

```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  
  <button type="submit">Submit</button>
</form>
```

---

## \ud83d\udcdd Input Types

```html
<!-- Text input -->
<input type="text" name="username">

<!-- Email input -->
<input type="email" name="email">

<!-- Password input -->
<input type="password" name="password">

<!-- Number input -->
<input type="number" name="age">

<!-- Checkbox -->
<input type="checkbox" name="agree">

<!-- Radio buttons -->
<input type="radio" name="color" value="red">
<input type="radio" name="color" value="blue">
```

---

## \ud83c\udff7\ufe0f Labels for Accessibility

Always use labels with inputs:

```html
<label for="email">Email:</label>
<input type="email" id="email" name="email">
```

---

## \ud83d\udcac Textarea for Long Text

```html
<label for="message">Message:</label>
<textarea id="message" name="message" rows="5"></textarea>
```

---

## \u2705 Complete Contact Form

```html
<form>
  <h2>Contact Us</h2>
  
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <label for="message">Message:</label>
  <textarea id="message" name="message" rows="5"></textarea>
  
  <button type="submit">Send Message</button>
</form>
```

---

## \u2705 Success Checklist

- [ ] Create forms with form tag
- [ ] Add various input types
- [ ] Use labels for all inputs
- [ ] Add submit buttons
- [ ] Build complete contact form

---

## \ud83d\udcdd Practice Exercises

**Exercise 1:** Build a contact form  
**Exercise 2:** Create a survey form  
**Exercise 3:** Make a registration form

---

**Excellent work!** \ud83c\udf89 You can now collect user input!
