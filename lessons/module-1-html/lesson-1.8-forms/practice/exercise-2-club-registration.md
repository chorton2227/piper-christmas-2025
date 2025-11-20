# Exercise 2: School Club Registration

## 🎯 Objective
Create a registration form for students to sign up for after-school clubs.

## 📋 Requirements

Your form should include:

### 1. Student Information
- First name (text, required)
- Last name (text, required)
- Student ID (text, required, placeholder: "e.g., S12345")
- Grade level (dropdown: 6th, 7th, 8th, 9th, 10th, 11th, 12th)
- Email (email input)
- Parent/Guardian email (email input, required)

### 2. Club Selection
**Primary Club** (radio buttons, required):
- 🎨 Art Club
- 🎮 Gaming Club
- 🎭 Drama Club
- 🎵 Music Club
- 🏃 Sports Club
- 🤖 Robotics Club
- 📚 Book Club
- 💻 Coding Club

**Alternate Clubs** (checkboxes - in case primary is full):
- Same options as above
- Student can select multiple alternates

### 3. Availability
**Which days are you available?** (checkboxes, at least one required):
- Monday
- Tuesday
- Wednesday
- Thursday
- Friday

**Preferred time:** (radio buttons)
- Right after school (3:00-4:30 PM)
- Late afternoon (4:30-6:00 PM)
- Either time works

### 4. Experience & Interests
- Have you participated in this club before? (radio: Yes/No)
- Skill level (dropdown: Beginner, Intermediate, Advanced)
- What do you hope to learn? (textarea, 3 rows)

### 5. Emergency Contact
- Emergency contact name (text, required)
- Emergency contact phone (tel, required)
- Relationship (text, e.g., "Mother", "Father")

### 6. Transportation
- How will you get home? (radio buttons)
  - Parent pickup
  - School bus
  - Walk
  - Other

- If other, please specify: (text input)

### 7. Medical Information
- Any allergies we should know about? (textarea, 2 rows)
- Any special accommodations needed? (textarea, 2 rows)

### 8. Agreement
- Checkbox: "I commit to attending club meetings regularly"
- Checkbox: "Parent/Guardian has approved this registration"
- Checkbox: "I have read the club rules and agree to follow them"

### 9. Buttons
- Submit button: "Register for Club"
- Reset button

## ✨ Bonus Challenges

1. Add a date input for "Registration Date"
2. Add number inputs for:
   - Years at this school (0-8)
   - How many club meetings can you attend per month? (1-8)
3. Add a color picker for "Choose your club t-shirt color"
4. Use divs to organize sections clearly
5. Add helpful descriptions under each section

## 💡 Tips

- Use proper labels for accessibility
- Make sure critical fields are marked `required`
- Use appropriate input types for each field
- Add placeholder text where helpful
- Group related fields together

## 📦 Starter Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Club Registration</title>
</head>
<body>
    <h1>After-School Club Registration</h1>
    <p>Sign up for an exciting club! Forms are due by [date].</p>
    
    <form>
        <!-- Build your form here! -->
        
        
    </form>
</body>
</html>
```

## 🎨 Think About Organization

This form has MANY fields! Think about:
- Using clear section headings (`<h2>`)
- Wrapping each section in a `<div class="section">`
- Adding space between different parts
- Making the flow logical (personal info → club choice → details)

Good luck! 📝
