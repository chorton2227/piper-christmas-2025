# Exercise 3: Poker Game Simulator (Offline)

**Time**: 45 minutes  
**Goal**: Play actual poker hands with cards to understand game flow

---

## 🎴 What You Need

- **A deck of cards** (real or handmade)
  - If you don't have cards, you can print/draw them
  - Need at least 52 cards (4 suits × 13 ranks)
  
- **Poker chips** (or substitutes)
  - Real chips
  - Coins
  - Buttons
  - Paper clips
  - Cut paper "chips"
  
- **A partner** (parent, sibling, friend)
  - Can also play against yourself for practice

- **Paper and pencil** for scoring

---

## 📋 Game Setup

### Starting Chips
- **You**: 20 chips
- **Opponent**: 20 chips
- **Ante**: 1 chip per hand

### Simplified Rules
We'll play simplified poker to match what you'll code:

1. Both players ante (put 1 chip in pot)
2. Deal 5 cards to each player
3. Look at YOUR cards (keep opponent's face-down)
4. Decide: Fold, Call, or Raise
5. Opponent responds
6. Reveal cards, compare hands
7. Winner takes pot
8. Play until someone has 0 chips or 10 hands

---

## 🎮 How to Play Each Hand

### Step 1: Shuffle
- Mix up ALL 52 cards really well
- Shuffle at least 7 times

### Step 2: Ante
- Both players put 1 chip in the middle (the pot)
- Pot now has 2 chips

### Step 3: Deal
- Deal 5 cards to Player 1 (face-down, then they look)
- Deal 5 cards to Player 2 (face-down, then they look)
- Put remaining cards aside

### Step 4: Player 1 Decides

Player 1 looks at their hand and chooses:

**Option A: FOLD**
- Give up immediately
- Lose your 1 chip ante
- Opponent wins pot
- Go to Step 7 (next hand)

**Option B: CALL**
- Match current bet (stay in game)
- No additional chips
- Go to Step 6 (showdown)

**Option C: RAISE**
- Add MORE chips to pot (+1, +2, or +5)
- Makes opponent decide
- Go to Step 5

### Step 5: Player 2 Responds (if raised)

If Player 1 raised, Player 2 must:

**Option A: FOLD**
- Give up
- Lose their ante
- Player 1 wins pot WITHOUT showing cards!
- Go to Step 7

**Option B: CALL**
- Match the raise
- Both players now go to showdown
- Go to Step 6

### Step 6: Showdown
- Both players reveal their cards
- Identify each hand type
- Compare hands (use hand ranking chart!)
- Better hand wins pot
- If tie: split pot (each take half)

### Step 7: Winner Takes Chips
- Add pot chips to winner's stack
- Write down winner on score sheet

### Step 8: Next Hand
- Collect all 10 cards
- Shuffle back into deck
- Start over at Step 1

---

## 📊 Score Sheet

Use this format to track your game:

| Hand # | Your Cards | Your Hand | Opp Hand | Winner | Your Chips | Opp Chips |
|--------|------------|-----------|----------|--------|------------|-----------|
| 1 | | | | | 20 | 20 |
| 2 | | | | | | |
| 3 | | | | | | |
| 4 | | | | | | |
| 5 | | | | | | |
| 6 | | | | | | |
| 7 | | | | | | |
| 8 | | | | | | |
| 9 | | | | | | |
| 10 | | | | | | |

---

## 🎯 Learning Objectives

As you play, pay attention to:

### 1. Hand Frequency
**Keep count**: How many times did you get each hand type?

- High Card: _____ times
- One Pair: _____ times
- Two Pair: _____ times
- Three of a Kind: _____ times
- Straight: _____ times
- Flush: _____ times
- Full House: _____ times
- Four of a Kind: _____ times
- Straight Flush: _____ times
- Royal Flush: _____ times

**Notice**: Common hands (pairs) appear WAY more than rare hands (flushes)!

### 2. Decision Making
**Track your choices**:

- How many times did you fold? _____
- How many times did you call? _____
- How many times did you raise? _____

**Reflect**: 
- When did you fold? (probably bad hands)
- When did you raise? (probably good hands)
- Did you ever bluff? (raise with bad hand to scare opponent)

### 3. Chip Management
**Watch the chips**:

- Biggest pot you won: _____ chips
- Biggest pot you lost: _____ chips
- Did you ever run low on chips? _____
- Did chip count affect your betting? _____

### 4. Game Flow
**Understand the rhythm**:

- How long did one hand take? _____ minutes
- What took the longest? (shuffling, dealing, deciding)
- How did it feel when you won? Lost?
- What was most exciting?

---

## 🤔 Reflection Questions

After playing 10 hands, answer these:

**1. What was your final chip count?**
_____ chips

**2. Who won the most hands?**
_____________________________________

**3. What was the best hand you got?**
_____________________________________

**4. What was the most common hand type?**
_____________________________________

**5. Did you get any rare hands (flush, full house, etc.)?**
_____________________________________

**6. What was your strategy?**
- Did you play safe or risky?
- Did you fold often or rarely?
- When did you raise?

_____________________________________
_____________________________________
_____________________________________

**7. What part will be hardest to code?**
- Shuffling?
- Dealing cards?
- Identifying hand types?
- Deciding winner?
- Dealer AI?

_____________________________________
_____________________________________

**8. What surprised you about playing poker?**
_____________________________________
_____________________________________

---

## 🏆 Bonus Challenges

### Challenge 1: Play Against Yourself
Deal two hands, play both sides, practice identifying hands quickly.

### Challenge 2: Speed Poker
Time how fast you can:
- Shuffle deck: _____ seconds
- Deal 10 cards: _____ seconds
- Identify hand type: _____ seconds

### Challenge 3: Hand Collection
Try to get ONE of each hand type:
- [ ] High Card
- [ ] One Pair
- [ ] Two Pair
- [ ] Three of a Kind
- [ ] Straight
- [ ] Flush
- [ ] Full House
- [ ] Four of a Kind
- [ ] Straight Flush
- [ ] Royal Flush

Keep dealing 5 cards until you collect all 10!

### Challenge 4: Probability Test
Deal 20 hands and count:
- How many pairs? _____
- How many flushes? _____
- How many straights? _____

**Prediction**: You'll get MANY pairs, but very few flushes/straights!

---

## 💭 Thinking Like a Programmer

As you play, think about how you'll CODE this:

**Questions to consider**:

1. **How will you represent cards?**
   - Objects? `{ rank: "A", suit: "♠" }`
   - Numbers? 1-52?
   
2. **How will you shuffle?**
   - Random sort?
   - Fisher-Yates algorithm?
   
3. **How will you detect a flush?**
   - Check if all suits are same?
   
4. **How will you detect a straight?**
   - Sort cards by rank?
   - Check if consecutive?
   
5. **How will you compare hands?**
   - Give each hand type a number?
   - If both have pair, compare which pair is higher?
   
6. **How will dealer AI decide?**
   - Always fold on bad hands?
   - Always raise on good hands?
   - Add some randomness?

**Write your ideas here**:
_____________________________________
_____________________________________
_____________________________________
_____________________________________
_____________________________________

---

## ✅ Completion Checklist

- [ ] Played at least 10 hands
- [ ] Tracked hands on score sheet
- [ ] Counted hand type frequencies
- [ ] Understood game flow (ante → deal → bet → showdown)
- [ ] Made strategic decisions (fold/call/raise)
- [ ] Identified winning hands
- [ ] Answered all reflection questions
- [ ] Thought about how to code each part

---

## 🎓 What You Learned

By playing poker offline, you:
- ✅ Experienced the full game loop
- ✅ Made betting decisions
- ✅ Compared hands in real situations
- ✅ Understood chip management
- ✅ Saw which hands are common vs rare
- ✅ Started thinking like a programmer about game logic

**This hands-on experience is ESSENTIAL!** When you code the game, you'll remember how it FEELS to play. This will help you design better gameplay and catch bugs. 🃏✨

---

## 📸 Optional: Document Your Game

**Take photos or videos of**:
- Your setup (cards, chips, score sheet)
- An interesting hand
- The final chip count
- You playing with your partner

**Save these!** They'll be great to show alongside your finished coded game! 📱🎮
