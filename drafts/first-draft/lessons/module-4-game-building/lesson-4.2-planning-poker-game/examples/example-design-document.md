# Example Design Document: "Ace High Poker"

**Complete game design document example to use as reference**

---

## 🎮 Game Overview

### Game Title
**Ace High Poker**

**Tagline:** "Beat the Dealer, Win the Pot!"

**Description:**  
Ace High Poker is a fast-paced, single-player poker game where you face off against a computer dealer. Start with 1000 chips and try to win them all! Make strategic decisions to fold, call, or raise based on your 5-card hand. Can you outsmart the dealer and become the chip champion?

**Target Audience:** Ages 10-14, beginners to poker and coding

**Unique Features:**
- Clean, classic casino aesthetic
- Smart dealer AI that adapts to your play style
- Hand strength indicator to help you learn
- Celebration animations when you win big pots

---

## 📜 Game Rules

### Starting Conditions
- **Player chips:** 1000
- **Dealer chips:** 1000
- **Ante:** 10 chips per hand
- **Raise options:** +10, +25, +50 chips
- **Cards per hand:** 5 cards each

### Win/Lose Conditions
- **Player wins game:** Dealer has < 10 chips (can't afford ante)
- **Player loses game:** Player has < 10 chips (can't afford ante)

### Betting Rules
- Ante is mandatory (deducted automatically)
- Player can fold (lose ante), call (free), or raise
- If player raises, dealer must respond (fold or call)
- Only one raise per hand (keeps it simple for MVP)

### Hand Rankings
*Standard poker rankings 1-10 (from Lesson 4.1)*

---

## ✨ Features List

### MVP Features (Must Build)

**Core Mechanics:** ✅
- [x] 52-card deck creation
- [x] Fisher-Yates shuffle algorithm
- [x] Deal 5 cards to each player
- [x] Player cards face-up, dealer cards face-down
- [x] Hand evaluation for all 10 hand types
- [x] Hand comparison logic
- [x] Winner determination

**Betting System:** ✅
- [x] Automatic ante deduction
- [x] Fold button (give up immediately)
- [x] Call button (go to showdown)
- [x] Raise +10 button
- [x] Raise +25 button
- [x] Raise +50 button
- [x] Pot tracking and display
- [x] Chip management (add/subtract)

**Dealer AI:** ✅
- [x] Evaluate dealer hand strength
- [x] Decision tree (fold/call based on hand)
- [x] Respond to player raises

**Screens:** ✅
- [x] Start screen with title and "Start Game" button
- [x] Main game screen with poker table
- [x] Win screen (dealer out of chips)
- [x] Lose screen (player out of chips)

**UI Elements:** ✅
- [x] Green felt poker table
- [x] Card display areas (10 total cards)
- [x] Chip counters (player and dealer)
- [x] Pot display (center of table)
- [x] Message area for game updates
- [x] Betting control panel

---

### Post-MVP Features (Add Later)

**Priority 1 (Next):** 🔥
1. **Hand name display** - "You have: Pair of Kings" below your cards
2. **Card dealing animation** - Cards fly in from deck
3. **Win celebration** - Confetti or sparkle effect on big wins
4. **Sound effects** - Card flip, chip clink sounds
5. **Instructions overlay** - Help button with poker rules

**Priority 2 (If time):** ⭐
6. Dealer "thinking" delay (1-2 seconds before decision)
7. High score tracking (max chips achieved)
8. Statistics panel (hands won, biggest pot)
9. Different difficulty levels (Easy/Medium/Hard AI)
10. Keyboard shortcuts (F=fold, C=call, R=raise)

**Priority 3 (Dream features):** 💭
11. Multiple dealer characters to choose from
12. Different table themes (space, western, medieval)
13. Background music with mute toggle
14. Achievement system
15. Multiplayer option (play vs friend)

---

## 🎨 Visual Design

### Color Scheme
**Classic Casino Theme**

- **Table background:** Dark green (#0a5f0a) - traditional felt
- **Table border:** Brown wood texture (#654321)
- **Card backgrounds:** White (#FFFFFF)
- **Red suits:** Bright red (#D50000)
- **Black suits:** Pure black (#000000)
- **Buttons:**
  - Fold: Red/gray (#B71C1C)
  - Call: Blue (#1976D2)
  - Raise: Green (#388E3C)
- **Pot display:** Gold (#FFD700)
- **Text:** White on dark, Black on light
- **Background:** Dark charcoal (#1A1A1A)

### Visual Style
**Classic/Traditional** - Mimics real casino poker table with modern clean UI

### Typography
- **Title:** Bold, serif font (Georgia or Playfair)
- **Buttons:** Sans-serif (Arial or Roboto)
- **Card text:** Bold, large, easily readable
- **Body text:** Clean sans-serif, 16-18px

---

## 📐 Wireframes

### Screen 1: Start Screen

```
┌────────────────────────────────────────────┐
│          ████████████████                  │
│                                            │
│          ♠♥ ACE HIGH POKER ♦♣             │
│         "Beat the Dealer!"                 │
│                                            │
│         ┌────────────────────┐             │
│         │                    │             │
│         │    START GAME      │             │
│         │                    │             │
│         └────────────────────┘             │
│                                            │
│         ┌────────────────────┐             │
│         │   HOW TO PLAY      │             │
│         └────────────────────┘             │
│                                            │
│       High Score: 2,500 chips              │
│                                            │
│     Made by: [Your Name]                   │
│                                            │
└────────────────────────────────────────────┘
```

**Key elements:**
- Large title centered
- Big "Start Game" button (primary action)
- Secondary "How to Play" button
- High score for replay value
- Creator credit

---

### Screen 2: Game Screen

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  DEALER                             💰 Chips: 990       │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐                   │
│  │ 🂠 │ │ 🂠 │ │ 🂠 │ │ 🂠 │ │ 🂠 │ (face-down)      │
│  └────┘ └────┘ └────┘ └────┘ └────┘                   │
│                                                          │
│                  ┌──────────────┐                        │
│                  │   POT: 20    │  ← Gold display       │
│                  └──────────────┘                        │
│               "Place your bet..."                        │
│                                                          │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐                   │
│  │ 7♠ │ │ 7♥ │ │ K♦ │ │ 9♣ │ │ 2♠ │ (face-up)        │
│  │    │ │    │ │    │ │    │ │    │                   │
│  └────┘ └────┘ └────┘ └────┘ └────┘                   │
│  YOU                                💰 Chips: 990       │
│                                                          │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  You have: Pair of Sevens  ← Hand name display          │
│                                                          │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐│
│  │ FOLD   │ │ CALL   │ │ +10    │ │ +25    │ │ +50    ││
│  │ (Red)  │ │ (Blue) │ │(Green) │ │(Green) │ │(Green) ││
│  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘│
│                                                          │
│              ┌──────────────────┐                        │
│              │  DEAL NEW HAND   │ (hidden until end)    │
│              └──────────────────┘                        │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Key elements:**
- Oval poker table shape (dark green)
- Dealer area at top with 5 card slots
- Player area at bottom with 5 card slots
- Pot center-stage (most important info)
- Chip counters visible for both players
- Message area for game updates
- Hand name display (helps learning)
- Betting buttons in horizontal row
- Color-coded buttons (red=danger, green=action)

**Measurements:**
- Table: 1200px × 700px
- Cards: 100px × 140px
- Buttons: 120px × 50px
- Spacing: 20px between cards

---

### Screen 3A: Win Screen

```
┌────────────────────────────────────────────┐
│                                            │
│          🎉🎉🎉🎉🎉🎉                     │
│                                            │
│            YOU WIN!!!                      │
│                                            │
│     The dealer ran out of chips!           │
│        You're the champion!                │
│                                            │
│   ┌──────────────────────────────┐         │
│   │   Final Chips: 1,850         │         │
│   └──────────────────────────────┘         │
│                                            │
│        Hands Played: 18                    │
│        Hands Won: 12                       │
│        Biggest Pot: 150 chips              │
│        Win Rate: 67%                       │
│                                            │
│         ┌────────────────────┐             │
│         │   PLAY AGAIN       │             │
│         └────────────────────┘             │
│                                            │
│         ┌────────────────────┐             │
│         │      QUIT          │             │
│         └────────────────────┘             │
│                                            │
└────────────────────────────────────────────┘
```

**Key elements:**
- Celebratory emojis/icons
- Big "YOU WIN" title
- Encouraging message
- Final statistics box
- Play Again button (prominent)
- Quit option

---

### Screen 3B: Lose Screen

```
┌────────────────────────────────────────────┐
│                                            │
│              💸💸💸                       │
│                                            │
│          OUT OF CHIPS                      │
│                                            │
│      The dealer won this time!             │
│       Better luck next game!               │
│                                            │
│   ┌──────────────────────────────┐         │
│   │   Final Chips: 0             │         │
│   └──────────────────────────────┘         │
│                                            │
│        Hands Played: 15                    │
│        Hands Won: 5                        │
│        You tried your best!                │
│                                            │
│         ┌────────────────────┐             │
│         │   TRY AGAIN        │             │
│         └────────────────────┘             │
│                                            │
│         ┌────────────────────┐             │
│         │      QUIT          │             │
│         └────────────────────┘             │
│                                            │
└────────────────────────────────────────────┘
```

**Key elements:**
- Not too harsh (encouraging tone)
- Same layout as win screen (consistency)
- Different emojis
- Motivating message
- Try Again button prominent

---

## 🗂️ Data Structures

### Card Object
```javascript
card = {
  rank: "K",           // "A", "2"-"10", "J", "Q", "K"
  suit: "♠",           // "♠", "♥", "♦", "♣"
  value: 13,           // Numeric for comparison (2-14, A=14)
  symbol: "K♠"         // Display string
}
```

### Game State Object
```javascript
gameState = {
  // Chip tracking
  playerChips: 1000,
  dealerChips: 1000,
  pot: 0,
  currentBet: 0,
  
  // Card tracking
  deck: [],              // Array of 52 card objects
  playerHand: [],        // Array of 5 cards
  dealerHand: [],        // Array of 5 cards
  
  // Game flow
  gamePhase: "start",    // "start", "betting", "showdown", "ended"
  message: "",           // Current game message
  
  // Statistics
  handsPlayed: 0,
  handsWon: 0,
  biggestPot: 0
}
```

### Hand Evaluation Result
```javascript
handResult = {
  type: "PAIR",          // Hand type constant
  rank: 2,               // 1-10 for comparison
  value: 13,             // High card value for tiebreaks
  cards: [card1, card2], // The cards that make the hand
  description: "Pair of Kings"
}
```

---

## 🔧 Functions Needed

### Card Management (4 functions)
1. `createDeck()` → Returns array of 52 cards
2. `shuffleDeck(deck)` → Shuffles deck in place
3. `dealHand(deck, count)` → Deals and returns 'count' cards
4. `displayCards(hand, container, faceUp)` → Shows cards in DOM

### Hand Evaluation (11 functions)
5. `evaluateHand(hand)` → Returns handResult object
6. `isRoyalFlush(hand)` → Boolean
7. `isStraightFlush(hand)` → Boolean
8. `isFourOfKind(hand)` → Boolean
9. `isFullHouse(hand)` → Boolean
10. `isFlush(hand)` → Boolean
11. `isStraight(hand)` → Boolean
12. `isThreeOfKind(hand)` → Boolean
13. `isTwoPair(hand)` → Boolean
14. `isPair(hand)` → Boolean
15. `getHighCard(hand)` → Returns highest card

### Game Logic (8 functions)
16. `startNewGame()` → Resets everything
17. `startNewHand()` → Deals cards, takes ante
18. `playerFolds()` → Player gives up
19. `playerCalls()` → Go to showdown
20. `playerRaises(amount)` → Player bets more
21. `dealerDecision(hand, bet)` → AI chooses action
22. `showdown()` → Reveal and compare
23. `awardPot(winner)` → Give chips to winner

### UI Updates (6 functions)
24. `updateChipDisplay()` → Refresh chip counts
25. `updatePotDisplay()` → Refresh pot amount
26. `showMessage(text)` → Update message area
27. `enableBettingButtons(enable)` → Enable/disable buttons
28. `showScreen(screenName)` → Switch between screens
29. `updateStatistics()` → Update stats display

**Total: 29 functions**

---

## 📅 Development Timeline

### Week 1: Foundation
- **Lesson 4.3:** HTML structure (3 hours)
- **Lesson 4.4:** CSS styling (4 hours)
- **Milestone:** Beautiful static poker table

### Week 2: Card System
- **Lesson 4.5:** Deck creation and shuffling (3 hours)
- **Lesson 4.6:** Displaying cards dynamically (3 hours)
- **Milestone:** Can deal and show cards

### Week 3: Game Logic Part 1
- **Lesson 4.7:** Hand evaluation (5 hours)
- **Milestone:** Game knows hand types

### Week 4: Game Logic Part 2
- **Lesson 4.8:** Game flow (3 hours)
- **Lesson 4.9:** Betting system (3 hours)
- **Milestone:** Can play one complete hand

### Week 5: AI and Completion
- **Lesson 4.10:** Dealer AI (3 hours)
- **Lesson 4.11:** Win/lose conditions (2 hours)
- **Milestone:** Complete playable game!

### Week 6: Polish
- **Lesson 4.12:** Animations and sounds (3 hours)
- **Lesson 4.13:** Instructions screen (2 hours)
- **Milestone:** Professional-looking game

### Week 7: Testing
- **Lesson 4.14:** Testing and bug fixes (4 hours)
- **Lesson 4.15:** Final polish and celebration!
- **Milestone:** Shipped game! 🎉

**Total estimated time:** 35-40 hours over 7 weeks

---

## ✅ Success Criteria

### MVP Success (Must Have):
- [ ] Game runs without console errors
- [ ] All 10 hand types detected correctly
- [ ] Winner determined accurately every time
- [ ] Chips tracked correctly (no chip duplication bugs)
- [ ] Can play multiple hands in a row
- [ ] Win/lose conditions trigger properly
- [ ] UI is clear and understandable
- [ ] All buttons work as expected

### Quality Goals (Should Have):
- [ ] Game is fun to play (playtested by 3+ people)
- [ ] Easy to learn (first-time player understands it)
- [ ] Looks professional (nice CSS, good layout)
- [ ] No confusing bugs (thoroughly tested)
- [ ] Dealer AI feels realistic (not too easy/hard)
- [ ] Runs smoothly on modern browsers

### Personal Goals:
- [ ] Finish in 7 weeks (by [target date])
- [ ] Add at least 2 post-MVP features
- [ ] Show to 5 friends/family members
- [ ] Be proud of the final product!

---

## 📝 Notes and Questions

**Challenges I anticipate:**
1. Hand evaluation logic (lots of if/else statements)
2. Making dealer AI feel realistic
3. Handling edge cases (ties, 0 chips, etc.)

**Resources I'll need:**
- Fisher-Yates shuffle algorithm example
- Hand ranking reference (from Lesson 4.1)
- Parent help for testing

**Questions to answer:**
- Should dealer reveal hand immediately or with delay?
- What happens on exact tie (both have pair of kings)?
- Should I allow multiple raises per hand?

**Decision:** Start simple, add complexity later!

---

## 🎉 Ready to Build!

This design document will guide me through Lessons 4.3-4.15. I'll refer to it constantly while coding. Time to turn this plan into reality! 🚀🃏
