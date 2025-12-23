# Exercise 2: HTML Scavenger Hunt 🔍

**Goal**: Learn to navigate and understand HTML structure by finding specific elements and understanding their purpose.

**Time**: 20-30 minutes

---

## 🎯 Your Mission

Use your completed `index.html` file to answer questions about HTML structure. This will help you understand how all the pieces fit together!

---

## 📋 Part 1: Element Identification

**Find and answer these questions about YOUR HTML file:**

### Question 1: DOCTYPE and Structure
**Look at the very first line of your HTML:**
- What is the DOCTYPE declaration?
- Why is it important?

**Answer:**
```
DOCTYPE: ___________________
Purpose: ___________________
```

---

### Question 2: Meta Tags
**Find the `<meta>` tags in the `<head>` section:**

How many `<meta>` tags do you have? _______

List them and explain what each one does:

1. `<meta charset="...">` - What does this do?
   **Answer:** ___________________________________

2. `<meta name="viewport"...>` - What does this do?
   **Answer:** ___________________________________

---

### Question 3: External Files
**Find the links to external files:**

What CSS file is linked?
**Answer:** ___________________

What JavaScript file is linked?
**Answer:** ___________________

Where is the JavaScript file linked? (in `<head>` or before `</body>`?)
**Answer:** ___________________

Why is JavaScript linked at that location?
**Answer:** ___________________________________

---

### Question 4: Screen Structure
**Count the main screens in your HTML:**

How many `<div class="screen">` elements do you have? _______

List their IDs:
1. ___________________
2. ___________________
3. ___________________

Which screens have the class `hidden`? ___________________

Why do some screens start hidden?
**Answer:** ___________________________________

---

### Question 5: Button Hunt
**Find ALL the buttons in your HTML:**

How many `<button>` elements do you have in total? _______

List 5 button IDs and what they do:

1. ID: _______________ Purpose: ___________________
2. ID: _______________ Purpose: ___________________
3. ID: _______________ Purpose: ___________________
4. ID: _______________ Purpose: ___________________
5. ID: _______________ Purpose: ___________________

---

### Question 6: Dynamic Content
**Find elements that JavaScript will update:**

List 5 `<span>` elements with IDs (these hold dynamic values):

1. `<span id="___________">` - What value will this show?
2. `<span id="___________">` - What value will this show?
3. `<span id="___________">` - What value will this show?
4. `<span id="___________">` - What value will this show?
5. `<span id="___________">` - What value will this show?

---

### Question 7: Semantic HTML
**Find examples of semantic HTML elements:**

How many `<section>` tags do you have? _______

What are they used for?
1. ___________________
2. ___________________
3. ___________________

Do you have a `<footer>` tag? _______ What's in it?
**Answer:** ___________________________________

Do you have a `<header>` tag? _______ (Optional - you might not!)

---

### Question 8: Lists
**Find the list elements:**

In the instructions overlay, find:
- How many `<ol>` (ordered lists) do you have? _______
- How many `<ul>` (unordered lists) do you have? _______

What's the difference between `<ol>` and `<ul>`?
**Answer:** ___________________________________

---

### Question 9: Classes for Styling
**Identify classes used for styling:**

Find 3 elements that have multiple classes:

1. `<_______ class="_______ _______">`
2. `<_______ class="_______ _______">`
3. `<_______ class="_______ _______">`

Why would an element have multiple classes?
**Answer:** ___________________________________

---

### Question 10: Card Containers
**Find where cards will be displayed:**

What are the IDs of the two card containers?
1. ___________________
2. ___________________

What HTML element are they? (`<div>`, `<span>`, etc.)
**Answer:** ___________________

What's inside them right now?
**Answer:** ___________________________________

---

## 🔧 Part 2: Hands-On Modifications

**Make these changes to your HTML to understand structure:**

### Modification 1: Add a New Stat
**Add this stat to your end screen:**

```html
<div class="stat-item">
    <span class="stat-label">Biggest Pot Won:</span>
    <span id="biggest-pot" class="stat-value">0</span>
</div>
```

**Where did you add it?**
**Answer:** ___________________________________

**Save and refresh browser. Do you see the new stat?** _______

---

### Modification 2: Change Button Text
**Find the "Deal Hand" button and change it to "Deal Cards"**

**What line number was it on?** _______

**Save and refresh. Did it change?** _______

---

### Modification 3: Add a New Button
**Add this button to the start screen button container:**

```html
<button id="settings-btn" class="btn btn-secondary">Settings</button>
```

**Save and refresh. Where does it appear?**
**Answer:** ___________________________________

---

### Modification 4: Change Starting Chips
**Find the dealer and player chip amounts. Change them to 500.**

**What IDs did you find?**
1. ___________________
2. ___________________

**Save and refresh. Do both players now start with 500 chips?** _______

---

### Modification 5: Add a Subtitle
**Add a subtitle to your start screen (after the tagline):**

```html
<p class="subtitle">A game of luck, skill, and strategy!</p>
```

**Where did you place it?**
**Answer:** ___________________________________

---

## 🧩 Part 3: Structure Challenge

**Answer these conceptual questions:**

### Question 1: Parent-Child Relationships
The `<div id="start-screen">` contains many child elements.

List 3 direct children of the start screen:
1. ___________________
2. ___________________
3. ___________________

Is `<span id="high-score-value">` a direct child of start screen? _______

If no, what's its parent? ___________________

---

### Question 2: Nesting Depth
**Find the deepest nested element in your game screen.**

How many levels deep is it?
**Answer:** _______ levels

**Write the path from `<body>` to that element:**
```
<body> → <div id="..."> → <div class="..."> → ... → [deepest element]
```

**Your path:**
___________________________________

---

### Question 3: Sibling Elements
**Siblings are elements at the same level with the same parent.**

In the betting controls, list all the button siblings:
1. ___________________
2. ___________________
3. ___________________
4. ___________________
5. ___________________

---

### Question 4: ID Uniqueness Test
**Run this test in your browser console:**

1. Right-click your page → "Inspect" → "Console" tab
2. Type: `document.querySelectorAll('[id]').length`
3. Press Enter

**How many elements with IDs?** _______

Now type: `new Set([...document.querySelectorAll('[id]')].map(el => el.id)).size`

**Result:** _______

**Are these numbers the same?** _______ (If yes, all IDs are unique! ✅)

---

### Question 5: Class Reusability Test
**Find a class that's used on multiple elements:**

**Class name:** ___________________

**How many elements use this class?** _______

**List 3 elements that use it:**
1. ___________________
2. ___________________
3. ___________________

---

## 🎨 Part 4: Visual Structure Mapping

**Draw a simple diagram of your HTML structure:**

```
index.html
│
├── <head>
│   ├── [What's here?]
│   └── [What's here?]
│
└── <body>
    ├── Start Screen
    │   ├── [What's inside?]
    │   └── [What's inside?]
    │
    ├── Game Screen
    │   ├── [What's inside?]
    │   └── [What's inside?]
    │
    ├── End Screen
    │   └── [What's inside?]
    │
    └── [What else?]
```

**Fill in the diagram above with actual elements!**

---

## ✅ Completion Checklist

**Check off each part as you complete it:**

### Part 1: Element Identification
- [ ] Questions 1-10 answered
- [ ] All IDs and classes identified
- [ ] Purpose of elements understood

### Part 2: Hands-On Modifications
- [ ] Modification 1 complete (new stat added)
- [ ] Modification 2 complete (button text changed)
- [ ] Modification 3 complete (new button added)
- [ ] Modification 4 complete (starting chips changed)
- [ ] Modification 5 complete (subtitle added)

### Part 3: Structure Challenge
- [ ] Parent-child relationships identified
- [ ] Nesting depth calculated
- [ ] Sibling elements listed
- [ ] ID uniqueness verified
- [ ] Class reusability demonstrated

### Part 4: Visual Structure Mapping
- [ ] Diagram completed
- [ ] All major sections included
- [ ] Relationship between elements shown

---

## 🎯 Reflection Questions

**Write your answers:**

1. **What surprised you most about HTML structure?**
   ___________________________________

2. **What was the hardest part of this scavenger hunt?**
   ___________________________________

3. **How does understanding structure help you code better?**
   ___________________________________

4. **What element or concept do you still have questions about?**
   ___________________________________

---

## 🏆 Bonus Challenge

**Create a "cheat sheet" document listing:**

1. All your button IDs and what they do
2. All your dynamic content spans (JavaScript will update these)
3. All your main containers and their purpose

**Format:**
```
BUTTONS:
- #start-btn → Starts the game
- #fold-btn → Player folds hand
... (continue)

DYNAMIC CONTENT:
- #pot-amount → Shows current pot value
- #player-chip-amount → Shows player's chips
... (continue)

MAIN CONTAINERS:
- #start-screen → Welcome screen
- #game-screen → Main poker table
... (continue)
```

**This will be super helpful when you start JavaScript in Lesson 4.5!**

---

## 🎉 Great Job!

You've thoroughly explored your HTML structure!

**What you've learned:**
✅ How to navigate HTML documents  
✅ Parent-child-sibling relationships  
✅ Purpose of IDs vs classes  
✅ Semantic HTML structure  
✅ How to modify HTML elements  

**This deep understanding will make CSS and JavaScript MUCH easier!** 🚀

---

**Teacher/Parent Sign-Off:**

Student completed exercise: _________________ Date: _______

Notes: _________________________________________________
