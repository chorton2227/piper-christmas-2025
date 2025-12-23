# Exercise 2: Wireframe Workshop

**Time**: 30 minutes  
**Goal**: Create detailed wireframes (sketches) of all game screens

---

## 🎨 What Are Wireframes?

**Wireframes** are simple sketches that show:
- Where everything goes on screen
- Size and position of elements
- Layout structure
- NO fancy art (just boxes and labels!)

**Why make them?**
- Plan before coding
- Catch layout problems early
- Know exactly what HTML you need
- Guide your CSS styling

---

## 📐 Drawing Tips

### Materials Needed:
- Paper (blank or graph paper is great!)
- Pencil
- Ruler (optional, for straight lines)
- Eraser

### Wireframe Symbols:
```
┌─────┐   = Container/Box
│     │
└─────┘

[Button]  = Button

___Text___ = Text/Label

┌───┐
│IMG│     = Image/Card
└───┘

[input]   = Input field

☰         = Menu icon
```

---

## 🖼️ Screen 1: Start Screen

### Requirements:

**Must include:**
1. Game title (large, centered)
2. Start Game button (prominent, easy to click)
3. How to Play button
4. High score display (optional)
5. Your name as creator

### Example Wireframe:

```
┌────────────────────────────────────────┐
│                                        │
│                                        │
│         ♠♥ POKER SHOWDOWN ♦♣          │
│            (title logo)                │
│                                        │
│       ┌──────────────────┐             │
│       │   START GAME     │             │
│       └──────────────────┘             │
│                                        │
│       ┌──────────────────┐             │
│       │   HOW TO PLAY    │             │
│       └──────────────────┘             │
│                                        │
│     High Score: 2,500 chips            │
│                                        │
│       Made by: Your Name               │
│                                        │
└────────────────────────────────────────┘
```

### Your Turn: Draw Your Start Screen

**Use a full sheet of paper!**

**Checklist:**
- [ ] Title is large and clear
- [ ] Start button is obvious
- [ ] Secondary buttons are smaller
- [ ] High score is visible
- [ ] Your name is on it!
- [ ] Background style noted (color, pattern, etc.)

**Notes about your design:**
___________________________________________________________
___________________________________________________________

---

## 🎮 Screen 2: Game Screen (Most Complex!)

### Requirements:

**Dealer Area (Top):**
- Dealer name/label
- Dealer chip count (💰 1000)
- 5 card positions (face-down initially)

**Pot Area (Middle):**
- Pot amount display (large, center)
- Game message ("Your turn", "Dealer wins!", etc.)

**Player Area (Bottom):**
- Your name/label  
- Your chip count (💰 1000)
- 5 card positions (face-up)

**Control Panel (Below table):**
- Hand info ("You have: Pair of Kings")
- Fold button (red/gray)
- Call button (blue/yellow)
- Raise +10 button (green)
- Raise +25 button (green)
- Raise +50 button (green)
- Deal New Hand button (hidden until round ends)

### Example Wireframe:

```
┌──────────────────────────────────────────────────────┐
│  DEALER                          💰 Chips: 990       │
│  ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐                     │
│  │🂠 │ │🂠 │ │🂠 │ │🂠 │ │🂠 │  (face-down)        │
│  └───┘ └───┘ └───┘ └───┘ └───┘                     │
│                                                      │
│                  ┌────────────┐                      │
│                  │  POT: 20   │                      │
│                  └────────────┘                      │
│               "Place your bet..."                    │
│                                                      │
│  ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐                     │
│  │7♠ │ │7♥ │ │K♦ │ │9♣ │ │2♠ │  (face-up)         │
│  └───┘ └───┘ └───┘ └───┘ └───┘                     │
│  YOU                             💰 Chips: 990       │
│                                                      │
├──────────────────────────────────────────────────────┤
│                                                      │
│  Hand: Pair of Sevens                               │
│                                                      │
│  [Fold]  [Call]  [+10]  [+25]  [+50]               │
│                                                      │
│              [Deal New Hand]  (hidden)              │
│                                                      │
└──────────────────────────────────────────────────────┘
```

### Your Turn: Draw Your Game Screen

**Use a FULL sheet of paper - this is the most important screen!**

**Design Decisions:**

1. **Table shape**: Rectangular / Oval / Rounded rectangle?
   ___________________________________________

2. **Card spacing**: Close together / Spread out / Overlapping?
   ___________________________________________

3. **Button layout**: Horizontal row / Vertical column / Grid?
   ___________________________________________

4. **Pot position**: Center / Top-center / Floating?
   ___________________________________________

5. **Message position**: Above pot / Below pot / Side?
   ___________________________________________

**Checklist:**
- [ ] All 10 card positions shown (5 dealer + 5 player)
- [ ] Both chip counters visible
- [ ] Pot display prominent
- [ ] All betting buttons accessible
- [ ] Message area clear
- [ ] Hand info display included
- [ ] Proper spacing (not cramped)
- [ ] Visual hierarchy (important things bigger)

**Measurements (approximate):**
- Card size: _____ pixels wide × _____ tall
- Button size: _____ × _____
- Table size: _____ × _____
- Screen size: _____ × _____

---

## 🏆 Screen 3: End Screen (Win Version)

### Requirements:

**Must include:**
1. "YOU WIN!" title (big, celebratory)
2. Victory message
3. Final chip count
4. Statistics (optional: hands won, biggest pot)
5. Play Again button (prominent)
6. Quit/Menu button

### Example Wireframe:

```
┌────────────────────────────────────────┐
│                                        │
│          🎉 YOU WIN! 🎉               │
│                                        │
│   The dealer ran out of chips!         │
│                                        │
│   ┌────────────────────┐               │
│   │  Final Chips: 1850 │               │
│   └────────────────────┘               │
│                                        │
│        Hands Won: 15                   │
│        Biggest Pot: 150                │
│        Win Rate: 60%                   │
│                                        │
│       ┌──────────────────┐             │
│       │   PLAY AGAIN     │             │
│       └──────────────────┘             │
│                                        │
│       ┌──────────────────┐             │
│       │      QUIT        │             │
│       └──────────────────┘             │
│                                        │
└────────────────────────────────────────┘
```

### Your Turn: Draw Win Screen

**Checklist:**
- [ ] Clear "WIN" message
- [ ] Final stats displayed
- [ ] Play Again button obvious
- [ ] Positive/encouraging tone
- [ ] Visual celebration (emojis, colors, etc.)

---

## 💔 Screen 3B: End Screen (Lose Version)

### Requirements:

**Must include:**
1. "Game Over" or "You Lose" title
2. Encouraging message (not too harsh!)
3. Final chip count
4. Statistics (optional)
5. Play Again button (prominent)
6. Quit/Menu button

### Example Wireframe:

```
┌────────────────────────────────────────┐
│                                        │
│          💸 OUT OF CHIPS 💸           │
│                                        │
│      The dealer won this time!         │
│        Better luck next game!          │
│                                        │
│   ┌────────────────────┐               │
│   │  Final Chips: 0    │               │
│   └────────────────────┘               │
│                                        │
│        Hands Won: 8                    │
│        You did your best!              │
│                                        │
│       ┌──────────────────┐             │
│       │   TRY AGAIN      │             │
│       └──────────────────┘             │
│                                        │
│       ┌──────────────────┐             │
│       │      QUIT        │             │
│       └──────────────────┘             │
│                                        │
└────────────────────────────────────────┘
```

### Your Turn: Draw Lose Screen

**Checklist:**
- [ ] Clear "lose" message (not mean!)
- [ ] Encouraging/motivating message
- [ ] Final stats displayed
- [ ] Play Again button prominent
- [ ] Option to quit

**Design choice**: Will lose screen look different from win screen?
- [ ] Yes - different colors, different layout
- [ ] No - same layout, just different text

---

## 📱 Screen 4: Instructions Overlay (Optional)

### Requirements:

**If you want an instructions screen:**
- Appears on top of game (overlay/popup)
- Shows poker rules
- Shows hand rankings
- Close button (X in corner)
- Semi-transparent background behind it

### Example Wireframe:

```
     ┌─────────────────────────────────┐
     │  HOW TO PLAY                [X] │
     ├─────────────────────────────────┤
     │                                 │
     │  HAND RANKINGS:                 │
     │  1. High Card (worst)           │
     │  2. One Pair                    │
     │  3. Two Pair                    │
     │  ... (continue list)            │
     │                                 │
     │  HOW TO BET:                    │
     │  - Fold: Give up                │
     │  - Call: Match bet              │
     │  - Raise: Bet more              │
     │                                 │
     │  ┌────────────┐                 │
     │  │    CLOSE   │                 │
     │  └────────────┘                 │
     │                                 │
     └─────────────────────────────────┘
```

### Your Turn: Draw Instructions Screen (Optional)

**If including instructions:**
- [ ] Clear title
- [ ] Easy-to-read rules
- [ ] Hand rankings visible
- [ ] Close button obvious
- [ ] Doesn't block entire game

---

## 🔄 Screen Transitions

### Map out how screens connect:

```
START SCREEN
     |
     | [Click "Start Game"]
     |
     v
GAME SCREEN
     |
     | [Player/Dealer runs out of chips]
     |
     v
END SCREEN (Win or Lose)
     |
     | [Click "Play Again"]
     |
     v
GAME SCREEN (resets)
     |
     | [Click "Quit"]
     |
     v
START SCREEN
```

**Draw arrows showing how YOUR screens connect:**

___________________________________________________________
___________________________________________________________
___________________________________________________________

---

## 📏 Responsive Design Notes

### Will your game work on different screen sizes?

**Target screen size**: _____ pixels wide × _____ tall

**Minimum screen size**: _____ × _____

**Mobile-friendly?**: Yes / No / Maybe later

**If yes, how will layout change?**
___________________________________________________________
___________________________________________________________

---

## 🎨 Annotation Guide

**On your wireframes, add notes about:**

1. **Colors**: "This button is green"
2. **Sizes**: "This text is 24px"
3. **Behaviors**: "This hides until hand ends"
4. **Animations**: "Cards slide in from here"
5. **Hover effects**: "Button glows on hover"

**Example annotated element:**
```
┌──────────────┐
│  START GAME  │  ← Green button, 200px × 60px
└──────────────┘  ← White text, 20px bold
                  ← Glows on hover
                  ← Plays click sound
```

---

## ✅ Wireframe Checklist

**Before finishing, verify:**

- [ ] Drew all screens (start, game, end)
- [ ] All required elements included
- [ ] Measurements/sizes noted
- [ ] Colors indicated
- [ ] Button labels clear
- [ ] Layout makes sense
- [ ] Not too cramped
- [ ] Not too empty
- [ ] User flow is logical
- [ ] Got feedback from someone else

---

## 🖼️ Submit Your Wireframes

**What to turn in:**
1. Photo or scan of hand-drawn wireframes
2. OR digital wireframes (if you used drawing software)
3. Written notes explaining design choices
4. Measurements and specifications

**Review with parent/teacher:**
- Show your wireframes
- Explain each screen
- Get feedback
- Make adjustments if needed

---

## 💡 Pro Tips from Designers

**"Keep it simple!"** - Don't cram too much on one screen

**"White space is good!"** - Leave breathing room

**"Make buttons BIG!"** - Easy to click = better UX

**"Test your layout!"** - Imagine using it - is it clear?

**"Iterate!"** - First draft is rarely perfect

---

## 🚀 Ready for HTML!

Once your wireframes are approved, you're ready to:
- Turn them into HTML structure (Lesson 4.3)
- Style them with CSS (Lesson 4.4)
- Bring them to life with JavaScript (Lessons 4.5+)

**Your wireframes are your blueprint!** Keep them handy while coding. 🎨✨
