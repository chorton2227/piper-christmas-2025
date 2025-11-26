# Example 2: Completed Game Design Document - "Cookie Empire"

This is an example of a completed game design document for a clicker/idle game.

---

# 🎮 GAME DESIGN DOCUMENT

## Game Title
**Name:** Cookie Empire

**Tagline:** Build your cookie empire one click at a time!

---

## Overview

**Genre:** Clicker / Idle Game

**Platform:** Web Browser (HTML/CSS/JavaScript)

**Target Player:** Kids ages 8-14, anyone who likes progression games

**Play Time:** Endless (no time limit, can play as long as desired)

---

## Game Objective

**What is the goal?**  
Click the giant cookie to earn cookies. Use cookies to buy upgrades that make you earn cookies faster. Try to unlock all upgrades and reach 1 million cookies!

**How do you win?**  
Reach 1,000,000 total cookies earned! (But you can keep playing forever)

**How do you lose?**  
You can't lose! This is a relaxed, progression-focused game.

---

## Gameplay

### Controls
- **Mouse:** Click the giant cookie button
- **Mouse:** Click upgrade buttons in the shop
- **No keyboard controls needed**

### Core Mechanics
Player clicks a big cookie in the center of the screen. Each click earns 1 cookie (or more with upgrades). Cookies accumulate in a counter. Player spends cookies to buy upgrades from the shop. Upgrades increase cookies per click OR add automatic cookie generation (cookies per second). Game continues forever, but "winning" milestone is 1 million cookies.

### Rules
1. Click the big cookie to earn cookies
2. Each click = 1 cookie (base value)
3. Spend cookies to buy upgrades
4. Upgrades are permanent once purchased
5. Some upgrades increase cookies per click
6. Some upgrades generate cookies automatically (per second)
7. Cookie count never decreases
8. Can play for as long as you want

---

## Scoring System

**Cookies are earned by:**
- Clicking the cookie: +1 per click (base)
- Auto-clickers: +1 per second per auto-clicker owned
- Cookie farm: +5 per second
- Cookie factory: +20 per second
- Cookie wizard: +100 per second (rare!)

**Cookies are spent on:**
- Upgrades (see shop below)

---

## Shop Upgrades

### Click Upgrades (Increase cookies per click)
1. **Better Oven** - $50 cookies - +1 per click
2. **Golden Spatula** - $250 cookies - +2 per click  
3. **Magic Recipe** - $1,000 cookies - +5 per click
4. **Cookie Multiplier** - $5,000 cookies - Double all click values

### Auto-Generation Upgrades (Earn cookies automatically)
1. **Grandma** - $100 cookies - +1 cookie/sec
2. **Cookie Farm** - $500 cookies - +5 cookies/sec
3. **Cookie Factory** - $2,000 cookies - +20 cookies/sec
4. **Cookie Mine** - $10,000 cookies - +50 cookies/sec
5. **Cookie Wizard** - $50,000 cookies - +100 cookies/sec

### Visual Upgrades (Just for fun!)
1. **Rainbow Cookie** - $1,000 cookies - Changes cookie colors
2. **Sparkle Effect** - $2,500 cookies - Adds sparkles when clicking
3. **Celebration Mode** - $10,000 cookies - Confetti and celebrations

---

## Game Elements

### Visual Elements
- Giant clickable cookie in center (gets fancy with upgrades)
- Cookie counter showing total cookies
- Cookies per second counter
- Shop with upgrade buttons
- Each upgrade shows icon, name, cost, description
- Visual indicators for owned upgrades
- Milestone achievement popups

### UI Elements
- **Cookie Count:** Large display showing total cookies
- **Per Second:** Shows how many cookies earned automatically
- **Per Click:** Shows cookies earned with each click
- **Shop Panel:** List of all upgrades
- **Achievement Panel:** Badges for milestones reached
- **Stats:** Total clicks, time played, etc.

---

## Screens

### Start Screen
- [x] Game title "COOKIE EMPIRE"
- [x] Cute cookie illustration
- [x] "Start Baking!" button
- [x] Brief instructions overlay (dismissible)

### Game Screen (Only screen needed - no timer/end!)
- [x] Giant cookie button in center
- [x] Cookie count at top (large and clear)
- [x] Cookies per second display
- [x] Cookies per click display
- [x] Shop panel on right side
- [x] Achievement badges at bottom
- [x] Save/Load buttons
- [x] Reset progress button (with confirmation)

### No End Screen
(This game doesn't end, but has milestone celebrations)

---

## Features

### Must-Have (MVP)
1. Clickable cookie that increments counter
2. Cookie count display that updates
3. At least 3 shop upgrades that work
4. Click upgrades increase cookies per click
5. Auto-clicker upgrade generates cookies per second
6. Can afford and purchase upgrades
7. Save progress to localStorage
8. Visual feedback when clicking cookie

### Nice-to-Have (Stretch Goals)
1. 10+ different upgrades
2. Achievement system with popups
3. Sound effects (click sound, purchase sound)
4. Animations when clicking (cookie squish effect)
5. Particle effects (cookie crumbs flying)
6. Upgrade tiers (buy multiple of same upgrade)
7. Stats page (total clicks, time played, etc.)
8. Prestige system (reset for permanent bonuses)
9. Golden cookie random event (appears rarely, big bonus)
10. Bakery theme background with animations

---

## Visual Style

**Color Scheme:**
- Primary Color: Warm Brown (#8B4513) - bakery theme
- Secondary Color: Cream (#FAEBD7) - cookie dough
- Accent Color: Gold (#FFD700) - premium upgrades
- Background: Light blue (#87CEEB) - sky/peaceful

**Style/Theme:**
Cozy bakery aesthetic with a fantasy twist. Cookie looks delicious and inviting. Shop has vintage bakery sign style. Upgrades have cute icons (grandma, factory, wizard). Warm, welcoming colors. Subtle animations make everything feel alive.

---

## Technical Notes

**Variables Needed:**
- `cookies` - Total cookies (current amount)
- `totalCookiesEarned` - Lifetime cookies (for achievements)
- `cookiesPerClick` - Base 1, increased by upgrades
- `cookiesPerSecond` - Sum of all auto-generation
- `totalClicks` - Count all clicks (for stats)
- `upgrades` - Array/Object storing which upgrades are owned
- `achievements` - Array of unlocked achievements

**Upgrade Object Structure:**
```javascript
{
  id: 'grandma',
  name: 'Grandma',
  cost: 100,
  description: '+1 cookie per second',
  type: 'auto',
  value: 1,
  owned: 0, // How many of this upgrade
  icon: '👵'
}
```

**Functions Needed:**
- `clickCookie()` - Add cookies per click to total
- `updateDisplay()` - Refresh all UI numbers
- `buyUpgrade(upgradeId)` - Check cost, purchase, apply effect
- `generateAutoCookies()` - Add cookies per second (setInterval)
- `checkAffordable()` - Update which upgrades can be bought
- `unlockAchievement(achievementId)` - Check and award achievements
- `saveGame()` - Store progress to localStorage
- `loadGame()` - Retrieve saved game on page load
- `resetGame()` - Clear all progress (with confirmation)

**Challenges to Solve:**
- Updating cookies per second every second without lag
- Formatting large numbers (1,234,567 instead of 1234567)
- Preventing accidental double-purchases
- Efficiently checking which upgrades player can afford
- Making save/load reliable

---

## Milestones & Achievements

**Cookie Milestones:**
- 100 cookies - "First Batch!" 🍪
- 1,000 cookies - "Cookie Maker"
- 10,000 cookies - "Cookie Expert"
- 100,000 cookies - "Cookie Tycoon"
- 1,000,000 cookies - "Cookie Empire!" 👑 (WIN!)

**Click Achievements:**
- 100 clicks - "Getting the Hang of It"
- 1,000 clicks - "Dedicated Baker"
- 10,000 clicks - "Clicking Master"

**Upgrade Achievements:**
- Buy first upgrade - "First Investment"
- Buy 5 upgrades - "Expanding Business"
- Buy all upgrades - "Complete Empire"

---

## Schedule

**Day 1-2:** HTML Structure (Lesson 4.2)  
- Create main game screen with cookie, counters, shop

**Day 3-4:** CSS Styling (Lesson 4.3)  
- Style cookie, make it look delicious, style shop

**Day 5-6:** Game Variables & Setup (Lessons 4.4-4.5)  
- Set up upgrade data, initialize functions, click events

**Day 7-8:** Core Game Logic (Lesson 4.6)  
- Implement clicking, buying upgrades, auto-generation

**Day 9:** Save/Load System (Lesson 4.7)  
- Add localStorage functionality, achievement system

**Day 10:** Polish & Testing (Lessons 4.8-4.9)  
- Add animations, sounds, test all upgrades

**Day 11:** Final Presentation (Lesson 4.10)  
- Present game, reflect on process

---

**Document Created:** November 21, 2025  
**Last Updated:** November 21, 2025  
**Status:** Planning Complete! Ready to build! 🚀

---

## Wireframe Sketches

### Start Screen Wireframe
```
┌─────────────────────────────────────────────┐
│                                             │
│         🍪 COOKIE EMPIRE 🍪                 │
│                                             │
│           ┌─────────────┐                   │
│           │             │                   │
│           │     🍪      │                   │
│           │             │                   │
│           └─────────────┘                   │
│                                             │
│       Build your cookie empire             │
│       one click at a time!                  │
│                                             │
│        [ START BAKING! ]                    │
│                                             │
└─────────────────────────────────────────────┘
```

### Main Game Screen Wireframe
```
┌──────────────────────────────────────────────────────────┐
│  🍪 COOKIE EMPIRE                         [Save] [Reset] │
│                                                           │
│  Cookies: 3,456                Per Second: +15           │
│  Per Click: +3                                           │
├──────────────────────────┬────────────────────────────────┤
│                          │  🏪 UPGRADE SHOP              │
│                          │                               │
│        ┌──────┐          │  ┌─────────────────────────┐ │
│        │      │          │  │ 👵 Grandma - 100🍪      │ │
│        │  🍪  │ ← Click! │  │ +1 cookie/sec  [BUY]    │ │
│        │      │          │  └─────────────────────────┘ │
│        └──────┘          │                               │
│                          │  ┌─────────────────────────┐ │
│   (Giant cookie button)  │  │ 🏭 Factory - 2,000🍪    │ │
│                          │  │ +20 cookies/sec [BUY]   │ │
│                          │  └─────────────────────────┘ │
│                          │                               │
│                          │  ┌─────────────────────────┐ │
│                          │  │ 🧙 Wizard - 50,000🍪    │ │
│  Total Clicks: 234       │  │ +100 cookies/sec [BUY]  │ │
│  Time Played: 5:23       │  └─────────────────────────┘ │
│                          │                               │
├──────────────────────────┴────────────────────────────────┤
│  🏆 Achievements: [First Batch✓] [Cookie Maker✓] [...]  │
└──────────────────────────────────────────────────────────┘
```

### Achievement Popup (Overlay)
```
        ┌─────────────────────────────┐
        │  🎉 ACHIEVEMENT UNLOCKED! 🎉 │
        │                             │
        │         🍪 COOKIE MAKER      │
        │                             │
        │     1,000 cookies earned!   │
        │                             │
        │         [ AWESOME! ]         │
        └─────────────────────────────┘
```

---

## Notes & Ideas

**Why this game will be fun:**
- Satisfying click feedback makes you want to click more
- Watching numbers go up is oddly addictive
- Upgrades provide goals to work toward
- No pressure or time limit - play at your own pace
- Each upgrade makes you noticeably stronger
- Achievements give sense of progress
- Can play for 5 minutes or 5 hours

**What makes it different:**
- Cute bakery theme instead of generic clicker
- Clear visual upgrades (grandma, factory, wizard)
- Achievement system celebrates milestones
- Optional "win" condition at 1 million
- Save system means you can come back anytime

**Potential expansions:**
- Prestige system (restart with bonuses)
- Random golden cookies that appear
- Special events (cookie festival)
- Multiple cookie types
- Unlock mini-games with cookies
- Bakery customization options

---

**This is a great example of a simple game that can expand!**  
The basic version is easy to build (click button, buy upgrades), but you can keep adding features forever. This is the beauty of clicker games!
