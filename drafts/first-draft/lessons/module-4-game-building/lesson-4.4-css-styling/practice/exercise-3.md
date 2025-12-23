# Exercise 3: Build a Custom Card Game Style 🎴

**Goal**: Apply your CSS knowledge to style a completely different card game or create a unique themed version.

**Time**: 60-90 minutes

---

## 🎯 Your Mission

Choose ONE of these options:

**Option A**: Style the Blackjack game from HTML Lesson 4.3  
**Option B**: Create a unique themed poker variant (space, medieval, underwater, etc.)  
**Option C**: Style a completely different card game  

---

## 🃏 Option A: Blackjack Styling

### Step 1: Plan Your Design

**Sketch or describe:**
- Background: _________________
- Table color: _________________
- Card design: _________________
- Button colors: _________________

### Step 2: Create style.css for Blackjack

**Base structure:**

```css
/* BLACKJACK THEME: Casino Classic */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Georgia', serif;
    background: radial-gradient(circle at center, #1a1a1a 0%, #000000 100%);
    color: #ffd700;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* START SCREEN */
#start-screen {
    text-align: center;
}

.game-title {
    font-size: 5rem;
    font-weight: bold;
    text-shadow: 
        0 0 20px #ffd700,
        0 0 40px #ffd700;
    letter-spacing: 8px;
}

/* GAME TABLE */
.game-table {
    background: linear-gradient(135deg, #0f5132 0%, #0a3622 100%);
    border: 20px solid #8B4513;
    border-radius: 30px;
    padding: 40px;
    box-shadow: 
        inset 0 0 30px rgba(0, 0, 0, 0.6),
        0 15px 40px rgba(0, 0, 0, 0.8);
}

/* DEALER SECTION */
.dealer-section {
    margin-bottom: 40px;
}

.dealer-section h2 {
    font-size: 1.8rem;
    margin-bottom: 15px;
}

/* SCORE DISPLAYS */
.score {
    font-size: 1.5rem;
    padding: 10px 20px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    display: inline-block;
    margin-bottom: 20px;
}

/* CARDS */
.card {
    width: 90px;
    height: 126px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    margin: 0 5px;
    display: inline-block;
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-15px) rotate(2deg);
}

/* BUTTONS */
.btn {
    font-family: 'Georgia', serif;
    font-size: 1.2rem;
    padding: 15px 35px;
    margin: 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
}

.btn-hit {
    background: linear-gradient(135deg, #51cf66 0%, #37b24d 100%);
    color: white;
}

.btn-stand {
    background: linear-gradient(135deg, #ffd43b 0%, #fab005 100%);
    color: #333;
}

.btn-double {
    background: linear-gradient(135deg, #ff6b6b 0%, #c92a2a 100%);
    color: white;
}

/* MESSAGES */
.message {
    font-size: 1.4rem;
    padding: 15px;
    background: rgba(255, 215, 0, 0.2);
    border-radius: 10px;
    margin: 20px 0;
}
```

**Your task:**
1. Copy this base to your Blackjack `style.css`
2. Customize colors to match your vision
3. Add your own animations
4. Create unique card styling

---

## 🚀 Option B: Themed Poker Variant

### Theme Ideas:

#### 1. **Space Poker** 🚀🌌
```css
body {
    background: 
        url('data:image/svg+xml,...') repeat, /* Stars pattern */
        radial-gradient(circle at center, #0a0e27 0%, #000000 100%);
}

.poker-table {
    background: radial-gradient(ellipse at center, #1e3a8a 0%, #1e293b 100%);
    border: 15px solid #334155;
    box-shadow: 
        inset 0 0 50px rgba(59, 130, 246, 0.3),
        0 0 30px rgba(59, 130, 246, 0.2);
}

.game-title {
    font-family: 'Courier New', monospace;
    color: #60a5fa;
    text-shadow: 
        0 0 10px #3b82f6,
        0 0 20px #3b82f6,
        0 0 30px #3b82f6;
}

.chip-icon::before {
    content: '⭐';
}

.pot-display {
    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
}
```

#### 2. **Medieval Poker** ⚔️🏰
```css
body {
    background: 
        linear-gradient(135deg, #422006 0%, #1a0c02 100%);
}

.poker-table {
    background: radial-gradient(ellipse at center, #7c2d12 0%, #431407 100%);
    border: 20px solid #57534e;
    position: relative;
}

.poker-table::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(
        90deg,
        transparent 0,
        rgba(0, 0, 0, 0.1) 2px,
        transparent 4px
    );
    pointer-events: none;
}

.game-title {
    font-family: 'Times New Roman', serif;
    color: #fbbf24;
    text-shadow: 2px 2px 0 #78350f;
}

.chip-icon::before {
    content: '👑';
}

.btn {
    font-family: 'Times New Roman', serif;
    border: 2px solid #78350f;
}
```

#### 3. **Underwater Poker** 🐠🌊
```css
body {
    background: 
        linear-gradient(180deg, 
            #0c4a6e 0%, 
            #075985 50%,
            #0369a1 100%);
    animation: waves 20s ease-in-out infinite;
}

@keyframes waves {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

.poker-table {
    background: radial-gradient(ellipse at center, #065f46 0%, #064e3b 100%);
    border: 15px solid #0891b2;
    box-shadow: 
        inset 0 0 50px rgba(6, 182, 212, 0.3),
        0 20px 40px rgba(0, 0, 0, 0.5);
}

.game-title {
    color: #67e8f9;
    text-shadow: 
        0 0 20px rgba(103, 232, 249, 0.6),
        0 5px 10px rgba(0, 0, 0, 0.5);
}

.chip-icon::before {
    content: '🐚';
}

.card {
    background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
    box-shadow: 0 5px 15px rgba(6, 182, 212, 0.4);
}

/* Floating bubble effect */
@keyframes float-bubble {
    0% {
        transform: translateY(100vh) scale(0);
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        transform: translateY(-100vh) scale(1);
        opacity: 0;
    }
}

body::after {
    content: '○';
    position: fixed;
    bottom: -50px;
    left: 50%;
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.3);
    animation: float-bubble 10s infinite;
}
```

**Your Task:**
1. Choose a theme (or create your own!)
2. Create a complete `style.css`
3. Apply theme consistently across all elements
4. Add unique animations

---

## 🎮 Option C: Different Card Game

### Style a Different Game:

#### War (Card Battle)
```css
/* BATTLE THEME: Red vs Blue */

.battle-area {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 40px;
    align-items: center;
}

.player-1-side {
    background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
    padding: 30px;
    border-radius: 20px;
}

.player-2-side {
    background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
    padding: 30px;
    border-radius: 20px;
}

.vs-section {
    font-size: 4rem;
    font-weight: bold;
    color: #ffd700;
    text-shadow: 
        0 0 20px #ffd700,
        3px 3px 10px rgba(0, 0, 0, 0.5);
    animation: pulse 1.5s ease-in-out infinite;
}

.battle-card {
    width: 120px;
    height: 168px;
    margin: 20px auto;
    transition: transform 0.3s ease;
}

.battle-card:hover {
    transform: scale(1.1) rotate(5deg);
}
```

#### Go Fish
```css
/* UNDERWATER/FISHING THEME */

body {
    background: 
        linear-gradient(180deg, #38bdf8 0%, #0284c7 50%, #0c4a6e 100%);
}

.pond {
    background: radial-gradient(ellipse at center, 
        rgba(14, 165, 233, 0.3) 0%, 
        rgba(3, 105, 161, 0.5) 100%);
    border: 10px solid #0369a1;
    border-radius: 50%;
    padding: 40px;
}

.fish-icon {
    font-size: 2rem;
    animation: swim 3s ease-in-out infinite;
}

@keyframes swim {
    0%, 100% {
        transform: translateX(0) rotateY(0);
    }
    50% {
        transform: translateX(20px) rotateY(180deg);
    }
}
```

---

## 🎨 Styling Checklist

**For whatever option you chose, include:**

### Visual Elements
- [ ] Custom background (gradient, pattern, or image)
- [ ] Themed color palette (3-5 colors)
- [ ] Styled game table/playing area
- [ ] Custom card design
- [ ] Themed buttons
- [ ] Consistent iconography

### Typography
- [ ] Custom font choices
- [ ] Appropriate sizing hierarchy
- [ ] Text shadows or effects
- [ ] Readable contrast

### Animations
- [ ] At least 3 custom animations
- [ ] Smooth transitions on hover
- [ ] Entrance animations
- [ ] Interactive feedback

### Layout
- [ ] Centered, organized layout
- [ ] Proper spacing (margins, padding)
- [ ] Responsive design
- [ ] Clear visual hierarchy

---

## 📋 Documentation Template

**Create a file called `THEME_GUIDE.md`:**

```markdown
# [Your Game Name] Theme Guide

## Theme Name
**[Your Theme Name]**

## Inspiration
[What inspired this theme? Movies, places, time periods, etc.]

## Color Palette
- Primary: #______ (used for: _________)
- Secondary: #______ (used for: _________)
- Accent: #______ (used for: _________)
- Background: #______ (used for: _________)
- Text: #______ (used for: _________)

## Typography
- Title Font: _________________
- Body Font: _________________
- Size Scale: _________________

## Key Features
1. [Feature 1 and why it fits the theme]
2. [Feature 2 and why it fits the theme]
3. [Feature 3 and why it fits the theme]

## Animations
- [Animation 1]: [Purpose]
- [Animation 2]: [Purpose]
- [Animation 3]: [Purpose]

## Screenshots
[If possible, include screenshots showing your theme]

## Future Improvements
- [Idea 1]
- [Idea 2]
- [Idea 3]
```

---

## 🎯 Advanced Challenges

### Challenge 1: Particle Effects
Create floating particles (stars, bubbles, leaves, etc.)

```css
@keyframes particle-float {
    0% {
        transform: translateY(100vh) translateX(0);
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        transform: translateY(-100vh) translateX(100px);
        opacity: 0;
    }
}

.particle {
    position: fixed;
    font-size: 1rem;
    animation: particle-float 15s infinite;
}
```

### Challenge 2: Dynamic Lighting
Create a spotlight effect that follows the cursor!

```css
body {
    position: relative;
    overflow: hidden;
}

body::before {
    content: '';
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: radial-gradient(
        circle 200px at var(--x, 50%) var(--y, 50%),
        transparent 0%,
        rgba(0, 0, 0, 0.5) 100%
    );
    pointer-events: none;
}
```

(Requires JavaScript to update `--x` and `--y` CSS variables)

### Challenge 3: 3D Card Flip
Create cards that flip in 3D!

```css
.card-container {
    perspective: 1000px;
}

.card {
    transform-style: preserve-3d;
    transition: transform 0.6s;
}

.card:hover {
    transform: rotateY(180deg);
}

.card-front,
.card-back {
    position: absolute;
    backface-visibility: hidden;
}

.card-back {
    transform: rotateY(180deg);
}
```

---

## ✅ Completion Checklist

- [ ] Theme chosen and concept clear
- [ ] Complete `style.css` created
- [ ] All visual elements themed consistently
- [ ] At least 3 custom animations added
- [ ] Responsive design implemented
- [ ] Theme documentation created
- [ ] Tested in browser (looks good!)
- [ ] Screenshot taken
- [ ] At least 1 advanced challenge attempted

---

## 🎨 Theme Examples Gallery

**Document your theme:**

### Screenshots
- Start screen: [Take screenshot]
- Game screen: [Take screenshot]
- End screen: [Take screenshot]

### Color Codes
| Element | Color | Hex Code |
|---------|-------|----------|
| Background | _______ | #______ |
| Primary | _______ | #______ |
| Secondary | _______ | #______ |
| Accent | _______ | #______ |

### What I'm Proud Of
1. _________________________________
2. _________________________________
3. _________________________________

### What I Learned
1. _________________________________
2. _________________________________
3. _________________________________

---

## 💡 Pro Tips

1. **Consistency is key** - Use the same color palette throughout
2. **Less is more** - Don't use too many different fonts or colors
3. **Test on multiple screens** - Check mobile, tablet, desktop
4. **Get feedback** - Show friends/family, ask what they think
5. **Iterate** - First version doesn't have to be perfect!

---

## 🎓 What You've Mastered

✅ Creating cohesive visual themes  
✅ Custom color palette selection  
✅ Advanced CSS techniques  
✅ Animation implementation  
✅ Responsive design principles  
✅ CSS project documentation  

**Your themed game is a work of art!** 🎨🃏✨

---

**Teacher/Parent Sign-Off:**

Student completed exercise: _________________ Date: _______

Game/Theme created: ____________________________________

Notes: _________________________________________________
