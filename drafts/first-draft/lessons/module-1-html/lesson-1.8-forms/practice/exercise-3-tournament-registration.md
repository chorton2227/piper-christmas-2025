# Exercise 3: Game Tournament Registration

## 🎯 Objective
Create a registration form for an online gaming tournament with team formation.

## 📋 Requirements

Your form should include:

### 1. Player Information
- Gamer tag (text, required, placeholder: "Your in-game name")
- Real name (text, required)
- Email (email, required)
- Discord username (text, placeholder: "username#1234")
- Age (number, 13-99, required)
- Country (dropdown with at least 5 countries)

### 2. Game Selection
**Choose your game** (radio buttons, required):
- 🎮 Fortnite
- ⚔️ Valorant
- 🏀 Rocket League
- 🎯 Apex Legends
- 🗺️ League of Legends
- 🔫 Call of Duty
- Other

If "Other", specify: (text input)

### 3. Experience Level
- Rank/Division (text input, e.g., "Gold 3", "Diamond", "Challenger")
- Hours played (number, 0-10000)
- Years playing (number, 0-20)
- Tournament experience (radio buttons):
  - This is my first tournament
  - 1-3 tournaments
  - 4-10 tournaments
  - 10+ tournaments (Pro level)

### 4. Team Information
**Team status:** (radio buttons, required)
- I have a team (need to register team)
- I need teammates (looking for team)
- I'll play solo

**If you have a team:**
- Team name (text)
- Team captain email (email)
- Number of team members (number, 2-5)

**If looking for a team:**
- Preferred role (dropdown): Tank, Support, DPS, Flex, Any
- Communication style (checkboxes):
  - Voice chat friendly
  - Strategic caller
  - Supportive teammate
  - Competitive but friendly

### 5. Availability
**Tournament dates:** (checkboxes, required - select all available)
- Saturday, January 15 (9 AM - 3 PM)
- Sunday, January 16 (9 AM - 3 PM)
- Saturday, January 22 (9 AM - 3 PM)
- Sunday, January 23 (Finals - 12 PM - 6 PM)

**Time zone:** (dropdown)
- EST (Eastern)
- CST (Central)
- MST (Mountain)
- PST (Pacific)
- Other

### 6. Platform & Setup
- Gaming platform (checkboxes - select all that apply):
  - PC
  - PlayStation 5
  - PlayStation 4
  - Xbox Series X/S
  - Xbox One
  - Nintendo Switch

- Internet speed (number input in Mbps, required)
- Do you use a wired connection? (radio: Yes/No/Sometimes)
- Microphone quality (dropdown: Professional, Good, Decent, Phone)

### 7. Streaming & Content
- Will you stream your matches? (radio: Yes/No/Maybe)
- Twitch username (text, optional)
- YouTube channel (url input, optional)
- Can we feature your gameplay? (radio: Yes/No)

### 8. Emergency Contact
- Contact name (text, required)
- Contact phone (tel, required)
- Relationship (text)

### 9. Rules & Prize
**Prize preference if you win:** (radio buttons)
- Cash prize ($500)
- Gaming setup upgrade ($500 value)
- Tournament entry to nationals
- Custom team jerseys + trophy

**Additional options:** (checkboxes)
- Subscribe to tournament newsletter
- Join practice Discord server
- Receive coaching tips via email
- Allow contact from potential sponsors

### 10. Agreement & Signature
- Checkbox: "I have read the tournament rules" (required)
- Checkbox: "I agree to good sportsmanship and fair play" (required)
- Checkbox: "I understand that cheating will result in disqualification" (required)
- Checkbox: "Parent/Guardian approval (if under 18)" (required for under 18)

**Digital signature:** (text input, "Type your full name")
**Date:** (date input)

### 11. Optional Feedback
- How did you hear about this tournament? (dropdown)
  - Social media
  - Friend referral
  - Gaming forum
  - YouTube
  - Twitch
  - Other

- Additional comments or questions: (textarea, 4 rows)

### 12. Buttons
- Submit button: "Register for Tournament"
- Reset button: "Clear Form"

## ✨ Bonus Challenges

1. Add a range slider for "Skill Level (1-10)"
2. Add a color picker for "Preferred team color"
3. Add time inputs for "Available start time" and "Available end time"
4. Create very clear section divisions with headers
5. Add helpful hint text using `<p>` or `<small>` tags
6. Add a "Save Draft" button (type="button")

## 💡 Tips

- This is a LARGE form - organization is key!
- Use `<h2>` for major sections
- Use `<h3>` for subsections if needed
- Wrap sections in `<div class="section">`
- Consider using `<fieldset>` and `<legend>` for groups
- Add `required` to critical fields
- Use appropriate input types for validation

## 📦 Starter Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tournament Registration</title>
</head>
<body>
    <h1>🏆 Epic Gaming Tournament 2025</h1>
    <p>Register now for the biggest gaming event of the year!</p>
    <p><strong>Prize Pool: $10,000 | Dates: January 15-23, 2025</strong></p>
    
    <form>
        <!-- Your comprehensive form goes here! -->
        
        
    </form>
    
    <p><em>Questions? Email: tournament@epicgaming.com</em></p>
</body>
</html>
```

## 🎨 Organization Matters!

This is the most complex form yet. Think carefully about:
- Logical flow of information
- Clear section breaks
- Helpful labels and descriptions
- Making it easy to fill out despite being long
- Which fields are truly required vs optional

You've got this! 🎮🏆
