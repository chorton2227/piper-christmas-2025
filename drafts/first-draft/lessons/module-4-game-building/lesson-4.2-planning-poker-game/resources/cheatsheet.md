# Game Planning Cheat Sheet 📋

**Quick reference for planning your poker game**

---

## 🎯 Planning Checklist

### Before You Code:
- [ ] Game rules defined
- [ ] Features listed (MVP + nice-to-have)
- [ ] Wireframes drawn (all screens)
- [ ] Data structures planned
- [ ] Functions identified
- [ ] Timeline created
- [ ] Got feedback

---

## 📊 Standard Poker Game Specs

**Use these defaults or customize:**

| Setting | Recommended Value | Why? |
|---------|-------------------|------|
| Starting chips | 1000 | Gives plenty of room to play |
| Ante | 10 | 1% of starting chips |
| Raise options | +10, +25, +50 | Small, medium, large bets |
| Win condition | Opponent < 10 chips | Can't afford ante |
| Cards dealt | 5 each | Standard poker hand |

---

## 🎨 Screen Elements Reference

### Start Screen Must-Haves:
- [ ] Game title
- [ ] Start button
- [ ] Instructions button
- [ ] High score (optional)

### Game Screen Must-Haves:
- [ ] Dealer cards (5 slots)
- [ ] Player cards (5 slots)
- [ ] Chip counters (player & dealer)
- [ ] Pot display
- [ ] Message area
- [ ] Betting buttons (fold, call, raise)
- [ ] Deal new hand button

### End Screen Must-Haves:
- [ ] Win/lose message
- [ ] Final statistics
- [ ] Play again button
- [ ] Quit button

---

## 🗂️ Data Structure Templates

### Card Object:
```javascript
{
  rank: "K",        // A, 2-10, J, Q, K
  suit: "♠",        // ♠, ♥, ♦, ♣
  value: 13,        // For comparison (2-14)
  image: "K_spade"  // For display
}
```

### Game State Object:
```javascript
{
  playerChips: 1000,
  dealerChips: 1000,
  pot: 0,
  currentBet: 0,
  playerHand: [],
  dealerHand: [],
  deck: [],
  phase: "betting",  // or "showdown", "ended"
  message: "Your turn..."
}
```

### Hand Evaluation Result:
```javascript
{
  type: "PAIR",              // Hand type name
  rank: 2,                   // 1-10 ranking
  value: 13,                 // For comparing same types
  description: "Pair of Kings"
}
```

---

## 🔧 Essential Functions List

### Card Management:
- `createDeck()` - Make 52 cards
- `shuffleDeck(deck)` - Randomize order
- `dealCards(deck, count)` - Give cards to players
- `displayCard(card, element)` - Show card on screen

### Hand Evaluation:
- `evaluateHand(hand)` - Determine hand type
- `isPair(hand)` - Check for pair
- `isTwoPair(hand)` - Check for two pair
- `isThreeOfKind(hand)` - Check for three of a kind
- `isStraight(hand)` - Check for straight
- `isFlush(hand)` - Check for flush
- `isFullHouse(hand)` - Check for full house
- `isFourOfKind(hand)` - Check for four of a kind
- `isStraightFlush(hand)` - Check for straight flush
- `isRoyalFlush(hand)` - Check for royal flush

### Game Logic:
- `takeAnte()` - Deduct ante from both players
- `playerFolds()` - Player gives up
- `playerCalls()` - Player matches bet
- `playerRaises(amount)` - Player bets more
- `dealerDecision()` - AI chooses action
- `compareHands(hand1, hand2)` - Determine winner
- `awardPot(winner)` - Give chips to winner
- `checkGameOver()` - Test win/lose conditions

### UI Updates:
- `updateChipDisplay()` - Refresh chip counts
- `updatePotDisplay()` - Refresh pot amount
- `showMessage(text)` - Display game message
- `showStartScreen()` - Display start screen
- `showGameScreen()` - Display game screen
- `showEndScreen(result)` - Display win/lose screen

---

## 📈 Hand Ranking Values

**Assign numbers for comparison:**

| Hand Type | Rank Value | Beat By |
|-----------|------------|---------|
| High Card | 1 | Everything |
| One Pair | 2 | All above |
| Two Pair | 3 | All above |
| Three of a Kind | 4 | All above |
| Straight | 5 | All above |
| Flush | 6 | All above |
| Full House | 7 | Top 3 |
| Four of a Kind | 8 | Top 2 |
| Straight Flush | 9 | Royal Flush |
| Royal Flush | 10 | Unbeatable |

---

## 🤖 Simple Dealer AI Logic

```
IF hand rank >= 7:     → RAISE (strong hand)
IF hand rank >= 5:     → CALL (decent hand)
IF hand rank >= 3:     → CALL if bet <= 10, else FOLD
IF hand rank = 2:      → CALL if bet = 0, else FOLD
IF hand rank = 1:      → FOLD (weak hand)
```

---

## 🎨 Color Scheme Suggestions

### Classic Casino:
- Table: Dark green (#0a5f0a)
- Cards: White with red/black suits
- Buttons: Gold (#FFD700)
- Background: Dark red (#8B0000)

### Modern Blue:
- Table: Navy blue (#001f3f)
- Cards: White with blue/black
- Buttons: Cyan (#00FFFF)
- Background: Light blue (#87CEEB)

### Playful Purple:
- Table: Purple (#6a0dad)
- Cards: White with purple/pink
- Buttons: Pink (#FF69B4)
- Background: Lavender (#E6E6FA)

---

## 📐 Recommended Sizes

### Desktop (1920×1080):
- Card: 100px × 150px
- Button: 120px × 40px
- Table: 1200px × 800px
- Text: 18px body, 24px headings

### Tablet (768×1024):
- Card: 70px × 105px
- Button: 100px × 35px
- Table: 700px × 600px
- Text: 16px body, 20px headings

### Mobile (375×667):
- Card: 50px × 75px
- Button: 80px × 30px
- Table: 350px × 450px
- Text: 14px body, 18px headings

---

## ⏱️ Development Time Estimates

**Typical time for each phase:**

| Phase | Estimated Hours | Lessons |
|-------|-----------------|---------|
| HTML Structure | 2-3 hours | 4.3 |
| CSS Styling | 3-4 hours | 4.4 |
| Card System | 3-4 hours | 4.5-4.6 |
| Hand Evaluation | 4-6 hours | 4.7 |
| Game Logic | 4-5 hours | 4.8-4.9 |
| Dealer AI | 2-3 hours | 4.10 |
| Win/Lose | 1-2 hours | 4.11 |
| Polish | 3-4 hours | 4.12-4.13 |
| Testing | 2-3 hours | 4.14 |
| **Total** | **24-34 hours** | **All** |

**At 1-2 hours per day = 2-4 weeks**

---

## 🚩 Common Planning Mistakes

### Mistake 1: Skipping wireframes
**Problem**: End up rearranging CSS constantly  
**Solution**: Draw screens BEFORE coding

### Mistake 2: Too many features at once
**Problem**: Get overwhelmed, never finish  
**Solution**: Build MVP first, add features later

### Mistake 3: Not planning data structures
**Problem**: Have to refactor code later  
**Solution**: Think through objects/arrays first

### Mistake 4: Forgetting edge cases
**Problem**: Bugs with 0 chips, ties, etc.  
**Solution**: List all scenarios to handle

### Mistake 5: No testing plan
**Problem**: Ship buggy game  
**Solution**: Plan testing from the start

---

## ✅ Ready to Code Checklist

**Before Lesson 4.3, make sure:**

- [ ] Rules are crystal clear
- [ ] MVP features identified
- [ ] All 3 screens sketched
- [ ] Data structures make sense
- [ ] Functions listed
- [ ] Timeline seems realistic
- [ ] Got feedback from someone
- [ ] Feeling confident (not overwhelmed!)

---

## 💡 Pro Planning Tips

1. **"MVP first, always"** - Finish a working game before adding bells and whistles

2. **"Plan for failure"** - What happens when player has 0 chips? When there's a tie?

3. **"Keep it simple"** - Your first game doesn't need to be perfect

4. **"Get feedback early"** - Show wireframes to others before coding

5. **"Document as you go"** - Future you will thank you!

---

## 🔗 Quick Links

- [Back to Lesson 4.2](../README.md)
- [Exercise 1: Design Document](../practice/exercise-1.md)
- [Exercise 2: Wireframes](../practice/exercise-2.md)
- [Exercise 3: Pseudocode](../practice/exercise-3.md)

---

**Keep this cheat sheet open while planning!** 📋✨
