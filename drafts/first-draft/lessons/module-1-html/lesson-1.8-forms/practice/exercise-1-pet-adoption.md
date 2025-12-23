# Exercise 1: Pet Adoption Form

## 🎯 Objective
Create a form for a pet adoption website where people can apply to adopt a pet.

## 📋 Requirements

Your form should include:

### 1. Personal Information
- Full name (text input, required)
- Email (email input, required)
- Phone number (tel input)
- Age (number input, 18-100)

### 2. Home Information
- Housing type (dropdown: Apartment, House, Condo, Farm, Other)
- Do you own or rent? (radio buttons)
- Do you have a yard? (radio buttons: Yes/No)
- Number of people in household (number input)

### 3. Pet Preferences
- What type of pet? (radio buttons: Dog, Cat, Rabbit, Bird, Other)
- Age preference (dropdown: Puppy/Kitten, Young, Adult, Senior, No Preference)
- Size preference for dogs (checkboxes: Small, Medium, Large)
- Gender preference (radio buttons: Male, Female, No Preference)

### 4. Experience
- Have you owned pets before? (radio buttons: Yes/No)
- If yes, which types? (checkboxes: Dogs, Cats, Birds, Reptiles, Other)
- Years of pet ownership experience (number input, 0-50)

### 5. Additional Information
- Why do you want to adopt? (textarea, 4 rows)
- Anything else we should know? (textarea, 4 rows)

### 6. Agreement
- Checkbox: "I understand that pet ownership is a long-term commitment"
- Checkbox: "I agree to provide proper care, food, and veterinary attention"

### 7. Submit Button
- "Submit Application" button

## ✨ Bonus Challenges

1. Add placeholder text to guide users
2. Make all critical fields `required`
3. Add appropriate `min` and `max` values to number inputs
4. Use a `<h1>` for the title and `<h2>` for sections
5. Use divs with class="section" to organize form sections
6. Add a reset button

## 💡 Tips

- Use `<label>` tags for every input
- Connect labels using `for` and `id` attributes
- Group related inputs with divs
- Use descriptive `name` attributes
- Add helpful instruction text with `<p>` tags

## 📦 Starter Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pet Adoption Form</title>
</head>
<body>
    <h1>🐾 Pet Adoption Application</h1>
    <p>Thank you for your interest in adopting! Please fill out this form completely.</p>
    
    <form>
        <!-- Your form content goes here! -->
        
        
    </form>
</body>
</html>
```

## 🎨 Example Layout

```
Pet Adoption Application
Thank you for your interest...

Personal Information
  Name: [_______________]
  Email: [_______________]
  ...

Home Information
  Housing Type: [dropdown]
  ...

[Submit Application]
```

Good luck! 🐶🐱
