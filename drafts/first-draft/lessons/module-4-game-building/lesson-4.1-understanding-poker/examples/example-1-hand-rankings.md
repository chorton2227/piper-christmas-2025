# Example 1: Hand Ranking Reference

**Visual Guide to All 10 Poker Hands**

This example shows each hand type with multiple examples to help you recognize patterns.

---

## 1. High Card (No Pairs)

**Worst possible hand - no matching cards**

### Example 1A: Ace High
```
A♠ K♦ 9♣ 6♥ 2♠

Breakdown:
- Highest card: Ace
- No pairs, no flush, no straight
- "Ace high" beats "King high" if opponent also has nothing
```

### Example 1B: King High
```
K♥ Q♠ 8♦ 5♣ 3♠

Breakdown:
- Highest card: King
- Loses to any Ace high
- Beats Queen high or lower
```

### Example 1C: Complete Junk
```
10♣ 8♦ 6♥ 4♠ 2♣

Breakdown:
- Highest card: 10
- Very weak hand
- Should probably fold!
```

---

## 2. One Pair

**Two cards of the same rank**

### Example 2A: Pair of Aces
```
A♠ A♥ K♦ 7♣ 3♠

Breakdown:
- Pair: Two Aces (A-A)
- Kicker: King (highest other card)
- Best possible pair!
```

### Example 2B: Pair of Sevens
```
7♥ 7♠ Q♦ 9♣ 2♠

Breakdown:
- Pair: Two Sevens (7-7)
- Kicker: Queen
- Beats high card, loses to higher pairs
```

### Example 2C: Pair of Twos (Deuces)
```
2♦ 2♣ A♠ K♥ J♠

Breakdown:
- Pair: Two Twos (2-2)
- Kicker: Ace
- Lowest pair, but still beats high card!
```

---

## 3. Two Pair

**Two different pairs**

### Example 3A: Aces and Kings
```
A♠ A♥ K♦ K♣ 8♠

Breakdown:
- First pair: Aces
- Second pair: Kings
- Kicker: 8
- Extremely strong two pair!
```

### Example 3B: Jacks and Fives
```
J♥ J♠ 5♦ 5♣ Q♠

Breakdown:
- First pair: Jacks
- Second pair: Fives
- Kicker: Queen
- Decent two pair
```

### Example 3C: Threes and Twos
```
3♣ 3♦ 2♥ 2♠ A♠

Breakdown:
- First pair: Threes
- Second pair: Twos
- Kicker: Ace
- Lowest possible two pair
```

---

## 4. Three of a Kind

**Three cards of the same rank**

### Example 4A: Three Kings
```
K♠ K♥ K♦ 9♣ 4♠

Breakdown:
- Three Kings (K-K-K)
- Other cards: 9, 4
- Strong hand!
```

### Example 4B: Three Sevens
```
7♥ 7♠ 7♦ A♣ 2♠

Breakdown:
- Three Sevens (7-7-7)
- Kicker: Ace
- Good solid hand
```

### Example 4C: Three Twos
```
2♦ 2♣ 2♠ K♥ Q♠

Breakdown:
- Three Twos (2-2-2)
- Kickers: King, Queen
- Still beats all pairs!
```

---

## 5. Straight

**Five cards in a row (any suits)**

### Example 5A: Broadway (Ace-High Straight)
```
A♠ K♦ Q♣ J♥ 10♠

Breakdown:
- A-K-Q-J-10 sequence
- Highest possible straight
- Also called "Broadway"
- Mixed suits (not a royal flush)
```

### Example 5B: Nine-High Straight
```
9♥ 8♠ 7♦ 6♣ 5♠

Breakdown:
- 9-8-7-6-5 sequence
- Mid-range straight
- Good hand
```

### Example 5C: Wheel (Ace-Low Straight)
```
5♣ 4♦ 3♥ 2♠ A♠

Breakdown:
- A-2-3-4-5 sequence
- Ace counts as LOW here
- Lowest possible straight
- Also called "The Wheel" or "Bicycle"
```

---

## 6. Flush

**Five cards of the same suit (not in sequence)**

### Example 6A: Ace-High Heart Flush
```
A♥ K♥ 8♥ 5♥ 2♥

Breakdown:
- All hearts (♥)
- Not in sequence (or it'd be straight flush)
- Highest card: Ace
- Very strong flush!
```

### Example 6B: Queen-High Spade Flush
```
Q♠ 10♠ 7♠ 5♠ 3♠

Breakdown:
- All spades (♠)
- Highest card: Queen
- Loses to Ace or King flush
```

### Example 6C: Seven-High Diamond Flush
```
7♦ 6♦ 4♦ 3♦ 2♦

Breakdown:
- All diamonds (♦)
- Highest card: 7
- Weak flush, but still beats straights!
```

---

## 7. Full House

**Three of a kind + One pair**

### Example 7A: Aces Full of Kings
```
A♠ A♥ A♦ K♣ K♠

Breakdown:
- Three Aces (A-A-A)
- Pair of Kings (K-K)
- "Aces full of Kings"
- Best possible full house!
```

### Example 7B: Eights Full of Threes
```
8♥ 8♠ 8♦ 3♣ 3♠

Breakdown:
- Three Eights (8-8-8)
- Pair of Threes (3-3)
- "Eights full of Threes"
- Very strong hand
```

### Example 7C: Twos Full of Sevens
```
2♦ 2♣ 2♠ 7♥ 7♠

Breakdown:
- Three Twos (2-2-2)
- Pair of Sevens (7-7)
- "Twos full of Sevens"
- Weakest full house, but still beats flushes!
```

---

## 8. Four of a Kind

**Four cards of the same rank**

### Example 8A: Four Aces
```
A♠ A♥ A♦ A♣ K♠

Breakdown:
- Four Aces (A-A-A-A)
- Kicker: King
- Best possible four of a kind!
- Extremely rare!
```

### Example 8B: Four Fives
```
5♥ 5♠ 5♦ 5♣ 9♠

Breakdown:
- Four Fives (5-5-5-5)
- Kicker: 9
- Amazing hand!
```

### Example 8C: Four Twos
```
2♦ 2♣ 2♠ 2♥ A♠

Breakdown:
- Four Twos (2-2-2-2)
- Kicker: Ace
- Still incredibly strong!
```

---

## 9. Straight Flush

**Five cards in a row, all same suit**

### Example 9A: King-High Straight Flush
```
K♠ Q♠ J♠ 10♠ 9♠

Breakdown:
- K-Q-J-10-9 sequence
- All spades (♠)
- Second best possible hand!
- One short of royal flush
```

### Example 9B: Eight-High Straight Flush
```
8♥ 7♥ 6♥ 5♥ 4♥

Breakdown:
- 8-7-6-5-4 sequence
- All hearts (♥)
- Beats four of a kind!
```

### Example 9C: Five-High Straight Flush (Steel Wheel)
```
5♦ 4♦ 3♦ 2♦ A♦

Breakdown:
- A-2-3-4-5 sequence
- All diamonds (♦)
- Ace counts low
- Lowest straight flush
- Also called "Steel Wheel"
```

---

## 10. Royal Flush

**A-K-Q-J-10, all same suit - THE BEST!**

### Example 10A: Royal Flush in Hearts
```
A♥ K♥ Q♥ J♥ 10♥

Breakdown:
- A-K-Q-J-10 sequence
- All hearts (♥)
- UNBEATABLE!
- Rarest hand in poker
```

### Example 10B: Royal Flush in Spades
```
A♠ K♠ Q♠ J♠ 10♠

Breakdown:
- A-K-Q-J-10 sequence
- All spades (♠)
- UNBEATABLE!
- Equal to all royal flushes
```

### Example 10C: Royal Flush in Diamonds
```
A♦ K♦ Q♦ J♦ 10♦

Breakdown:
- A-K-Q-J-10 sequence
- All diamonds (♦)
- PERFECT HAND!
- You'll probably never see one!
```

### Example 10D: Royal Flush in Clubs
```
A♣ K♣ Q♣ J♣ 10♣

Breakdown:
- A-K-Q-J-10 sequence
- All clubs (♣)
- THE DREAM!
- About 1 in 650,000 chance!
```

---

## 🎯 Pattern Recognition Tips

### Look for:
1. **Matching numbers** = Pairs, trips, quads, full house
2. **All same suit** = Flush (or straight flush/royal)
3. **Numbers in a row** = Straight (or straight flush if also same suit)

### Quick Check Method:
```
Step 1: Same suit? → Check for flush/straight flush
Step 2: In sequence? → Check for straight
Step 3: Count matches → Pairs, trips, quads, full house
Step 4: Nothing? → High card
```

---

## 📊 Comparison Examples

### Battle 1: Pair vs Two Pair
```
Player A: 7♠ 7♥ A♦ K♣ 3♠ (One Pair)
Player B: 5♣ 5♦ 3♥ 3♠ Q♠ (Two Pair)

Winner: Player B
Why: Two Pair beats One Pair (even though 7s are higher than 5s!)
```

### Battle 2: Flush vs Full House
```
Player A: A♥ J♥ 8♥ 5♥ 2♥ (Flush)
Player B: 4♠ 4♥ 4♦ 9♣ 9♠ (Full House)

Winner: Player B
Why: Full House beats Flush (rank 7 beats rank 6)
```

### Battle 3: Straight Flush vs Four of a Kind
```
Player A: 6♠ 5♠ 4♠ 3♠ 2♠ (Straight Flush)
Player B: K♥ K♠ K♦ K♣ A♠ (Four Kings)

Winner: Player A
Why: Straight Flush beats everything except Royal Flush!
```

---

**Practice with these examples!** Try to identify each hand type before reading the breakdown. The more you practice, the faster you'll recognize hands! 🃏✨
