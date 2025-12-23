# Example 2: Game Flow Walkthrough

**Complete Step-by-Step Example of Playing One Hand**

This example walks through a full poker hand from start to finish, showing exactly what happens at each step.

---

## 🎮 Game Setup

### Starting Positions:
- **Player (You)**: 500 chips
- **Dealer (Computer)**: 500 chips
- **Ante**: 10 chips per hand

---

## 📝 Hand #1: Complete Walkthrough

### Step 1: Ante (Starting Bet)

**What happens:**
- Player puts 10 chips in pot
- Dealer puts 10 chips in pot

**After ante:**
```
Player chips: 490 (500 - 10)
Dealer chips: 490 (500 - 10)
Pot: 20 chips
```

---

### Step 2: Shuffle & Deal

**Shuffle:**
The 52-card deck is shuffled randomly:
```
Before: A♠, 2♠, 3♠, 4♠, 5♠, 6♠, 7♠, 8♠, 9♠, 10♠, J♠, Q♠, K♠, A♥, 2♥...
After shuffle: 7♦, K♠, 3♣, A♥, 9♠, 2♦, J♣, 8♥, 5♠... (random order)
```

**Deal 5 cards to each:**

**Player's cards (face-up):**
```
K♠  K♥  9♦  7♣  2♠
```

**Dealer's cards (face-down):**
```
🂠  🂠  🂠  🂠  🂠  (Hidden until showdown)
```

---

### Step 3: Player Evaluates Hand

**Player's hand: K♠ K♥ 9♦ 7♣ 2♠**

**Analysis:**
- Two Kings (K♠, K♥) = **ONE PAIR**
- Hand rank: #2 (not bad!)
- Kicker: 9 (highest other card)

**Player thinks:**
> "I have a pair of Kings! That's a decent hand. Pairs are common, but Kings are high. I should probably stay in and see what the dealer has. Maybe raise a little to test them?"

---

### Step 4: Player Makes Decision

**Options:**
1. **FOLD** = Give up, lose 10 chips
2. **CALL** = Match current bet (stay in for free)
3. **RAISE** = Add more chips (+10, +25, or +50)

**Player chooses: RAISE +25**

**After player raises:**
```
Player chips: 465 (490 - 25)
Dealer chips: 490
Pot: 45 chips (20 + 25)
Current bet: 25 chips
```

**Screen shows:**
```
💬 "You raised 25 chips!"
💬 "Dealer is thinking..."
```

---

### Step 5: Dealer Responds

**Dealer's hidden hand (we don't know yet):**
```
A♦  A♣  10♥  5♠  3♦
```

**Dealer's AI evaluation:**
- Two Aces = **ONE PAIR** (rank #2)
- Aces are HIGHEST pair
- AI thinks: "Pair of Aces is strong! I'll call."

**Dealer chooses: CALL**

**After dealer calls:**
```
Player chips: 465
Dealer chips: 465 (490 - 25 to match raise)
Pot: 70 chips (45 + 25)
```

**Screen shows:**
```
💬 "Dealer calls your raise!"
💬 "Showdown!"
```

---

### Step 6: Showdown (Reveal Cards)

**Dealer's cards flip over with animation:**

**Before:**
```
🂠  🂠  🂠  🂠  🂠
```

**After (1 second flip animation):**
```
A♦  A♣  10♥  5♠  3♦
```

**Both hands visible:**

**Player:**
```
K♠  K♥  9♦  7♣  2♠
ONE PAIR - Kings
```

**Dealer:**
```
A♦  A♣  10♥  5♠  3♦
ONE PAIR - Aces
```

---

### Step 7: Compare Hands

**Both have One Pair - compare which pair is higher:**

**Player**: Pair of Kings (K-K)  
**Dealer**: Pair of Aces (A-A)

**Aces are higher than Kings!**

**Winner: DEALER** 🏆

**Screen shows:**
```
💬 "Dealer has Pair of Aces!"
💬 "You have Pair of Kings"
💬 "Dealer wins!"
```

---

### Step 8: Award Chips

**Dealer wins the pot (70 chips):**

```
Player chips: 465 (no change - lost bet)
Dealer chips: 535 (465 + 70 won)
```

**Animation:**
- Chips slide from pot to dealer's stack
- Sound effect: "cha-ching!"

---

### Step 9: New Hand Button

**Screen shows:**
```
💬 "Dealer wins 70 chips!"

[Deal New Hand]  ← Click to continue
```

**Player can:**
- Click to play another hand
- See updated chip counts
- Game continues until someone has < 10 chips

---

## 📊 Hand Summary

| Action | Player Chips | Dealer Chips | Pot | Result |
|--------|--------------|--------------|-----|--------|
| Start | 500 | 500 | 0 | - |
| Ante | 490 | 490 | 20 | Both paid 10 |
| Player Raise +25 | 465 | 490 | 45 | Player bets more |
| Dealer Call | 465 | 465 | 70 | Dealer matches |
| Showdown | 465 | 465 | 70 | Cards revealed |
| Winner | 465 | 535 | 0 | Dealer wins pot |

**Net result:**
- Player: Lost 35 chips (500 → 465)
- Dealer: Won 35 chips (500 → 535)

---

## 🎯 Alternative Outcomes

### What if Player had FOLDED?

**Step 4 alternative:**
```
Player sees: K♠ K♥ 9♦ 7♣ 2♠ (Pair of Kings)
Player thinks: "Eh, Kings might not be good enough"
Player chooses: FOLD
```

**Result:**
- Player loses 10 chips (ante)
- Dealer wins pot WITHOUT showing cards
- Fast hand, low risk

**After fold:**
```
Player chips: 490 (lost ante)
Dealer chips: 510 (won ante)
Pot: 0
```

### What if Player had BETTER hand?

**Alternate scenario:**
```
Player: A♠ K♠ Q♠ J♠ 10♠ (ROYAL FLUSH!)
Dealer: A♦ A♣ 10♥ 5♠ 3♦ (Pair of Aces)
```

**Result:**
- Royal Flush beats everything!
- Player wins pot
- Rare and exciting!

---

## 🎮 Multiple Hands Example

### Playing 3 Hands in a Row:

**Hand #1:**
- Player: Pair of 7s
- Dealer: Three of a Kind
- Dealer wins: +40 chips

**Hand #2:**
- Player: Flush
- Dealer: Two Pair
- Player wins: +50 chips

**Hand #3:**
- Player: High Card
- Player folds immediately
- Dealer wins: +10 chips (ante only)

**Net result after 3 hands:**
```
Player: 500 → 490 → 540 → 530
Dealer: 500 → 540 → 490 → 500
```

---

## 🤔 Strategic Thinking

### Why did Player raise with Pair of Kings?

**Good reasons:**
- Kings are HIGH pair (only Aces beat it)
- Want to test dealer's strength
- Build pot if dealer has weaker hand
- Good balance of risk/reward

### Why did Dealer call?

**Dealer's AI logic:**
```
IF hand = Pair of Aces:
    Confidence = VERY HIGH
    → CALL or RAISE
    
IF hand = Pair of Kings:
    Confidence = HIGH
    → CALL
    
IF hand = Pair of 5s:
    Confidence = MEDIUM
    → CALL or FOLD (50/50)
    
IF hand = High Card:
    Confidence = LOW
    → FOLD
```

---

## 💡 Key Takeaways

**For coding your game, notice:**

1. **Step-by-step process** - Each action happens in order
2. **Chip tracking** - Must update amounts correctly
3. **Hidden information** - Player doesn't see dealer's cards until showdown
4. **Comparison logic** - Need algorithm to determine winner
5. **Multiple outcomes** - Different paths based on decisions
6. **State management** - Track chips, pot, cards, whose turn

**When you code this, you'll need functions for:**
- `dealCards()` - Shuffle and deal
- `evaluateHand()` - Identify hand type
- `compareHands()` - Determine winner
- `updateChips()` - Add/subtract chips
- `dealerAI()` - Decide dealer's action
- `showdown()` - Reveal and compare

---

**This is what you'll build!** Each step here will become code in your poker game. Understanding the flow now will make programming it much easier! 🃏💻
