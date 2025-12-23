# Forms and Inputs Cheat Sheet

## 🏗️ Basic Form Structure

```html
<form action="where-to-send-data" method="post">
  <!-- Form elements go here -->
</form>
```

## 📝 Common Input Types

### Text Inputs
```html
<!-- Regular text -->
<input type="text" name="username">

<!-- Email (validates format) -->
<input type="email" name="email">

<!-- Password (hidden characters) -->
<input type="password" name="password">

<!-- URL -->
<input type="url" name="website">

<!-- Phone -->
<input type="tel" name="phone">

<!-- Search -->
<input type="search" name="query">
```

### Number & Range
```html
<!-- Number with min/max -->
<input type="number" name="age" min="0" max="120">

<!-- Slider -->
<input type="range" name="volume" min="0" max="100">
```

### Date & Time
```html
<!-- Date picker -->
<input type="date" name="birthday">

<!-- Time picker -->
<input type="time" name="appointment">

<!-- Date and time -->
<input type="datetime-local" name="event">
```

### Other Inputs
```html
<!-- Color picker -->
<input type="color" name="theme-color">

<!-- File upload -->
<input type="file" name="document">

<!-- Hidden (not visible to user) -->
<input type="hidden" name="user-id" value="12345">
```

## ☑️ Checkboxes & Radio Buttons

### Checkboxes (multiple selections)
```html
<label>
  <input type="checkbox" name="hobbies" value="gaming">
  Gaming
</label>
<label>
  <input type="checkbox" name="hobbies" value="reading">
  Reading
</label>
```

### Radio Buttons (single selection)
```html
<label>
  <input type="radio" name="size" value="small">
  Small
</label>
<label>
  <input type="radio" name="size" value="medium">
  Medium
</label>
<label>
  <input type="radio" name="size" value="large">
  Large
</label>
```

**Key**: Radio buttons with the same `name` form a group!

## 📋 Dropdowns

```html
<select name="country">
  <option value="">Choose...</option>
  <option value="us">United States</option>
  <option value="uk">United Kingdom</option>
  <option value="ca">Canada</option>
</select>

<!-- Multiple selections allowed -->
<select name="toppings" multiple>
  <option value="cheese">Cheese</option>
  <option value="pepperoni">Pepperoni</option>
</select>
```

## 📄 Text Area

```html
<textarea name="message" rows="4" cols="50">
Default text here (optional)
</textarea>
```

## 🔘 Buttons

```html
<!-- Submit button -->
<button type="submit">Submit</button>

<!-- Regular button (for JavaScript) -->
<button type="button">Click Me</button>

<!-- Reset form -->
<button type="reset">Clear</button>

<!-- Alternative submit -->
<input type="submit" value="Send">
```

## 🏷️ Labels

### Method 1: Using for/id
```html
<label for="username">Username:</label>
<input type="text" id="username" name="username">
```

### Method 2: Wrapping
```html
<label>
  Username:
  <input type="text" name="username">
</label>
```

## 🔧 Important Attributes

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `name` | Identifies the data | `name="email"` |
| `id` | Unique identifier | `id="email-input"` |
| `value` | Default/preset value | `value="Hello"` |
| `placeholder` | Hint text | `placeholder="Enter email"` |
| `required` | Must be filled | `required` |
| `disabled` | Can't be used | `disabled` |
| `readonly` | Can't be changed | `readonly` |
| `min` | Minimum value | `min="0"` |
| `max` | Maximum value | `max="100"` |
| `minlength` | Min text length | `minlength="8"` |
| `maxlength` | Max text length | `maxlength="20"` |
| `pattern` | Regex validation | `pattern="[0-9]{3}"` |
| `autocomplete` | Browser autocomplete | `autocomplete="off"` |
| `checked` | Pre-selected | `checked` |
| `selected` | Pre-selected option | `selected` |

## 📦 Organizing Forms

### Using Divs
```html
<form>
  <div class="form-section">
    <h3>Personal Info</h3>
    
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name">
    </div>
    
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email">
    </div>
  </div>
</form>
```

### Using Fieldset & Legend
```html
<form>
  <fieldset>
    <legend>Personal Information</legend>
    <label for="name">Name:</label>
    <input type="text" id="name">
  </fieldset>
</form>
```

## ✅ Best Practices

### DO:
- ✅ Always use labels
- ✅ Use appropriate input types
- ✅ Add placeholders for hints
- ✅ Mark required fields
- ✅ Group related inputs
- ✅ Use clear button text
- ✅ Validate important fields

### DON'T:
- ❌ Skip labels (bad for accessibility)
- ❌ Use only `type="text"` for everything
- ❌ Make forms unnecessarily long
- ❌ Forget to include a submit button
- ❌ Use confusing field names
- ❌ Create forms without organization

## 🎯 Common Form Patterns

### Login Form
```html
<form>
  <h2>Login</h2>
  <div>
    <label for="user">Username:</label>
    <input type="text" id="user" name="username" required>
  </div>
  <div>
    <label for="pass">Password:</label>
    <input type="password" id="pass" name="password" required>
  </div>
  <button type="submit">Log In</button>
</form>
```

### Contact Form
```html
<form>
  <h2>Contact Us</h2>
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" required>
  </div>
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" required>
  </div>
  <div>
    <label for="msg">Message:</label>
    <textarea id="msg" rows="5" required></textarea>
  </div>
  <button type="submit">Send</button>
</form>
```

### Survey/Quiz
```html
<form>
  <h2>Quick Survey</h2>
  
  <!-- Radio question -->
  <p>How often do you game?</p>
  <label><input type="radio" name="freq" value="daily"> Daily</label>
  <label><input type="radio" name="freq" value="weekly"> Weekly</label>
  <label><input type="radio" name="freq" value="monthly"> Monthly</label>
  
  <!-- Checkbox question -->
  <p>What genres do you like? (Select all)</p>
  <label><input type="checkbox" name="genre" value="rpg"> RPG</label>
  <label><input type="checkbox" name="genre" value="fps"> FPS</label>
  <label><input type="checkbox" name="genre" value="sports"> Sports</label>
  
  <button type="submit">Submit Survey</button>
</form>
```

## 🔍 Input Validation

### HTML5 Built-in Validation
```html
<!-- Required field -->
<input type="text" required>

<!-- Email format -->
<input type="email" required>

<!-- Number range -->
<input type="number" min="1" max="10" required>

<!-- Text length -->
<input type="text" minlength="3" maxlength="20">

<!-- Pattern matching -->
<input type="text" pattern="[A-Za-z]{3}" 
       title="Three letter code">
```

## 🎨 Form States

```html
<!-- Disabled (grayed out, can't interact) -->
<input type="text" disabled>

<!-- Readonly (can see, can't change) -->
<input type="text" readonly value="Fixed value">

<!-- Autofocus (cursor here on page load) -->
<input type="text" autofocus>

<!-- Pre-filled value -->
<input type="text" value="Default text">

<!-- Pre-checked -->
<input type="checkbox" checked>

<!-- Pre-selected option -->
<select>
  <option value="1">Option 1</option>
  <option value="2" selected>Option 2</option>
</select>
```

## 💡 Pro Tips

1. **Use semantic HTML**: Right input type = better UX
2. **Mobile-friendly**: Different types show different keyboards on mobile
3. **Accessibility**: Labels help screen readers
4. **Validation**: Use HTML5 validation before JavaScript
5. **Clear feedback**: Help users understand errors
6. **Group logically**: Related fields should be together
7. **Test thoroughly**: Try filling out your own forms

## 🚀 Next Steps

- Module 2: Style forms with CSS (colors, spacing, layout)
- Module 3: Handle form submission with JavaScript
- Module 4: Validate and process form data
- Module 5: Send form data to servers

---

**Remember**: Forms are how websites talk to users. Make them clear, accessible, and easy to use!
