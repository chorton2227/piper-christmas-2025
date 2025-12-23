# Poker Strategy: When to Fold, Call, or Raise

**Strategic thinking for your poker game**

---

## 🎯 Basic Strategy Guide

### When to FOLD ❌

**Fold when you have:**
- High card with low cards (like 7-high or 10-high)
- Low pair (2s, 3s, 4s) and opponent raises big
- Nothing promising and opponent seems confident
- Not enough chips to risk

**Example fold situations:**
```
Your hand: 10♠ 7♦ 5♣ 3♥ 2♠ (10-high nothing)
Opponent raises: +50 chips
Decision: FOLD (save your chips!)
```

**Strategy tip**: It's okay to fold! Saving chips for better hands is smart.

---

### When to CALL ✓

**Call when you have:**
- Decent pair (8s, 9s, 10s, Jacks)
- Two pair
- Possible straight or flush (almost have it)
- Want to see showdown without risking more

**Example call situations:**
```
Your hand: 9♠ 9♥ K♦ 7♣ 2♠ (Pair of 9s)
Opponent raises: +10 chips
Decision: CALL (decent hand, small raise)
```

**Strategy tip**: Call when you're unsure but have something decent.

---

### When to RAISE 🚀

**Raise when you have:**
- High pair (Queens, Kings, Aces)
- Three of a kind or better
- Strong two pair
- Want to test opponent's strength

**Example raise situations:**
```
Your hand: K♠ K♥ A♦ 9♣ 3♠ (Pair of Kings)
Decision: RAISE +25 (strong hand, test dealer)
```

**Strategy tip**: Raise to build the pot when you have good cards!

---

## 🤖 Dealer AI Strategy

**When you code the dealer, use similar logic:**

### Simple AI Decision Tree:
```
IF dealer has:
  Royal Flush, Straight Flush, Four of a Kind:
    → RAISE big! (+ 50 chips)
    
  Full House, Flush, Straight:
    → RAISE medium (+ 25 chips)
    
  Three of a Kind:
    → RAISE small (+ 10 chips) OR CALL
    
  Two Pair, High Pair (J, Q, K, A):
    → CALL OR RAISE small (+ 10 chips)
    
  Low Pair (2-10):
    → CALL if player didn't raise much
    → FOLD if player raised big
    
  High Card:
    → FOLD (usually)
```

---

## 💡 Advanced Concepts

### Bluffing
**Bluffing** = Raising with a bad hand to scare opponent into folding

**Example:**
```
Your hand: 10♠ 7♦ 5♣ 3♥ 2♠ (Nothing!)
You raise: +50 chips (pretending you have good cards)
Opponent thinks: "Wow, they must have something strong!"
Opponent folds
You win WITHOUT having good cards!
```

**Note**: Bluffing is risky! Use sparingly.

### Pot Odds
**Pot Odds** = Is the pot big enough to risk the call?

**Example:**
```
Pot: 100 chips
Cost to call: 10 chips

10/100 = 10% of pot
If you have 10% chance to win, worth calling!
```

---

## 🧠 Think Like a Programmer

**When coding dealer AI, consider:**

### Basic AI (Easy to code):
```javascript
function dealerDecision(hand, playerBet) {
    let handStrength = evaluateHand(hand);
    
    if (handStrength >= 7) {  // Full house or better
        return "RAISE +50";
    } else if (handStrength >= 5) {  // Straight or better
        return "RAISE +25";
    } else if (handStrength >= 3) {  // Two pair or better
        return "CALL";
    } else if (handStrength === 2 && playerBet <= 10) {  // One pair, small bet
        return "CALL";
    } else {
        return "FOLD";
    }
}
```

### Advanced AI (More realistic):
- Add randomness (sometimes bluff!)
- Consider pot size
- Track player's betting patterns
- Adjust strategy based on chip counts

---

## 📊 Hand Strength Values

**Assign numbers to hands for AI:**

| Hand | Strength Value | AI Action |
|------|----------------|-----------|
| Royal Flush | 10 | Always raise big |
| Straight Flush | 9 | Always raise big |
| Four of a Kind | 8 | Raise big |
| Full House | 7 | Raise medium |
| Flush | 6 | Raise or call |
| Straight | 5 | Call or raise small |
| Three of a Kind | 4 | Call or raise small |
| Two Pair | 3 | Call |
| One Pair | 2 | Call if low risk, fold if high risk |
| High Card | 1 | Usually fold |

---

**Use these ideas when planning your game in Lesson 4.2!** 🎮
