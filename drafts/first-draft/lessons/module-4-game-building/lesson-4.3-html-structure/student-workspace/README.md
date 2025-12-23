# Student Workspace - Lesson 4.3: HTML Structure 📝

**Your HTML coding workspace and progress tracker**

---

## 🎯 Lesson Goal

Build the complete HTML structure for your poker game with all three screens:
- Start Screen
- Game Screen  
- End Screen

---

## 📁 Files to Create

Create these files in a new `poker-game` folder:

- [ ] `index.html` - Your main HTML file (the game structure)

**Files for later lessons:**
- [ ] `style.css` - CSS styling (Lesson 4.4)
- [ ] `script.js` - JavaScript code (Lesson 4.5+)

---

## ✅ HTML Structure Checklist

### Part 1: HTML Boilerplate
- [ ] `<!DOCTYPE html>` declaration
- [ ] `<html lang="en">` tag
- [ ] `<head>` section with:
  - [ ] Character encoding (`<meta charset="UTF-8">`)
  - [ ] Viewport meta tag
  - [ ] Custom `<title>` tag
  - [ ] CSS link (`<link rel="stylesheet" href="style.css">`)
- [ ] `<body>` tag
- [ ] JavaScript link at bottom (`<script src="script.js"></script>`)

### Part 2: Start Screen
- [ ] Container div with `id="start-screen"`
- [ ] Game title `<h1>` with card symbols
- [ ] Tagline/subtitle
- [ ] Button container with:
  - [ ] Start button (`id="start-btn"`)
  - [ ] Rules/How to Play button (`id="rules-btn"`)
- [ ] High score display
- [ ] Credits/creator footer

### Part 3: Game Screen
- [ ] Container div with `id="game-screen"` and `class="hidden"`
- [ ] Poker table container
- [ ] Dealer section with:
  - [ ] Label
  - [ ] Chip count display (`id="dealer-chip-amount"`)
  - [ ] Card hand container (`id="dealer-hand"`)
- [ ] Pot section with:
  - [ ] Pot display (`id="pot-amount"`)
  - [ ] Game message area (`id="game-message"`)
- [ ] Player section with:
  - [ ] Card hand container (`id="player-hand"`)
  - [ ] Chip count display (`id="player-chip-amount"`)
  - [ ] Label
- [ ] Game controls with:
  - [ ] Hand info display (`id="hand-info"`)
  - [ ] Betting buttons (fold, call, raise x3)
  - [ ] Deal hand button (`id="deal-btn"`)

### Part 4: End Screen
- [ ] Container div with `id="end-screen"` and `class="hidden"`
- [ ] End title (`id="end-title"`)
- [ ] End message (`id="end-message"`)
- [ ] Statistics section with:
  - [ ] Final chips (`id="final-chips"`)
  - [ ] Hands played (`id="hands-played"`)
  - [ ] Hands won (`id="hands-won"`)
  - [ ] Win rate (`id="win-rate"`)
- [ ] Action buttons (play again, quit)

### Part 5: Instructions Overlay (Bonus)
- [ ] Overlay container (`id="instructions-overlay"`)
- [ ] Close button
- [ ] Instructions content with:
  - [ ] Objective section
  - [ ] Game flow section
  - [ ] Hand rankings section
  - [ ] Betting options section

### Part 6: Quality Checks
- [ ] All opening tags have closing tags
- [ ] All IDs are unique (no duplicates!)
- [ ] All attribute values in quotes
- [ ] Code properly indented
- [ ] Comments added for clarity
- [ ] HTML validates with no errors (https://validator.w3.org/)

---

## 📊 Your Customizations

**Document the changes you made to personalize your game:**

### Game Title
**Your game name:** _________________________________

**Your tagline:** _________________________________

### Starting Values
**Starting chips (both players):** _________________________________

**Ante amount:** _________________________________

**Raise amounts:** _________________________________

### Card Symbols Used
**Symbols:** _________________________________

### Theme/Style
**Theme description:** _________________________________

**Creator name in footer:** _________________________________

---

## 🐛 Debugging Log

**Track errors you encountered and how you fixed them:**

### Error 1
**What happened:** _________________________________

**Error message:** _________________________________

**How I fixed it:** _________________________________

### Error 2
**What happened:** _________________________________

**Error message:** _________________________________

**How I fixed it:** _________________________________

### Error 3
**What happened:** _________________________________

**Error message:** _________________________________

**How I fixed it:** _________________________________

---

## 🎓 Knowledge Check

**Answer these to test your understanding:**

### Question 1: What is HTML?
**Your answer:** _________________________________

### Question 2: What's the difference between an ID and a class?
**Your answer:** _________________________________

### Question 3: Why do we use semantic HTML tags like `<section>`?
**Your answer:** _________________________________

### Question 4: What are the three main screens in your poker game?
**Your answer:** _________________________________

### Question 5: Which elements will JavaScript need to update?
**Your answer (list at least 5):**
1. _________________________________
2. _________________________________
3. _________________________________
4. _________________________________
5. _________________________________

---

## 📸 Progress Screenshots

**Take screenshots at these milestones:**

- [ ] After completing HTML boilerplate
- [ ] After completing start screen
- [ ] After completing game screen
- [ ] After completing end screen
- [ ] After HTML validates successfully
- [ ] Final complete HTML in browser

**Save these in a `screenshots` folder for your portfolio!**

---

## 🎯 Session Notes

### Session 1: ____/____/____

**What I worked on:**
_________________________________

**What I completed:**
_________________________________

**Challenges I faced:**
_________________________________

**Questions I still have:**
_________________________________

### Session 2: ____/____/____

**What I worked on:**
_________________________________

**What I completed:**
_________________________________

**Challenges I faced:**
_________________________________

**Questions I still have:**
_________________________________

### Session 3: ____/____/____

**What I worked on:**
_________________________________

**What I completed:**
_________________________________

**Challenges I faced:**
_________________________________

**Questions I still have:**
_________________________________

---

## 💭 Reflection

### What was the most challenging part of this lesson?
_________________________________
_________________________________

### What surprised you about HTML structure?
_________________________________
_________________________________

### What are you most excited to add in the CSS lesson?
_________________________________
_________________________________

### What would you do differently next time?
_________________________________
_________________________________

### What did you learn about problem-solving?
_________________________________
_________________________________

---

## 🏆 Achievements Unlocked

Check off achievements as you earn them:

- [ ] **HTML Novice** - Created first HTML file
- [ ] **Structure Master** - Built all three screens
- [ ] **Validator Champion** - HTML validates with zero errors
- [ ] **Customizer** - Personalized game with own text/theme
- [ ] **Bug Hunter** - Found and fixed at least 3 errors
- [ ] **Semantic Scholar** - Used semantic HTML throughout
- [ ] **ID Expert** - All IDs are unique and purposeful
- [ ] **Comment King/Queen** - Added helpful comments
- [ ] **Extra Mile** - Completed all 3 exercises
- [ ] **Creative Coder** - Built game variation (Exercise 3)

---

## 🔜 Next Steps

**After completing this lesson:**

1. ✅ Complete HTML structure checklist
2. ✅ Validate HTML (zero errors)
3. ✅ Test in browser (all elements visible)
4. ✅ Complete at least Exercise 1 and 2
5. ✅ Get parent/teacher sign-off

**Then move to:**
- **Lesson 4.4: CSS Styling for Poker** - Make it look amazing!

---

## 📚 Quick Reference

### Most Used IDs in Your Game
```
Screens:
- #start-screen
- #game-screen
- #end-screen

Buttons:
- #start-btn
- #deal-btn
- #fold-btn
- #call-btn
- #raise-10-btn, #raise-25-btn, #raise-50-btn

Dynamic Content:
- #player-chip-amount
- #dealer-chip-amount
- #pot-amount
- #game-message
- #hand-name
```

### Most Used Classes in Your Game
```
Styling:
- .screen (all 3 main screens)
- .btn (all buttons)
- .btn-primary (main action buttons)
- .btn-secondary (secondary buttons)

Structure:
- .card-hand (dealer and player)
- .chip-count (both players)
- .stat-item (end screen stats)
```

---

## ✍️ Teacher/Parent Sign-Off

**Student has successfully completed Lesson 4.3: HTML Structure**

Student Name: _________________________

Date Completed: ____________

**Verification:**
- [ ] HTML file created and opens in browser
- [ ] All three screens present
- [ ] HTML validates with no errors
- [ ] Student can explain structure

Teacher/Parent Signature: _________________________

**Comments:**
_________________________________________________
_________________________________________________

---

## 🎉 Congratulations!

You've built the complete HTML structure for a poker game!

**What you've mastered:**
✅ HTML5 document structure  
✅ Semantic HTML elements  
✅ IDs and classes  
✅ Multi-screen layouts  
✅ HTML validation and debugging  

**You're ready for CSS styling!** 🎨

---

**Keep this document - it's your coding journey record!** 📚✨
