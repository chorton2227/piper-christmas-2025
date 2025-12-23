# Exercise 3: Pseudocode Practice

**Time**: 30 minutes  
**Goal**: Write pseudocode for key poker game functions before coding

---

## 🤔 What is Pseudocode?

**Pseudocode** = Writing out logic in plain English (or your language) BEFORE writing real code

**Why use it?**
- Plan your logic first
- Catch problems before coding
- Easier to understand than real code
- Language-independent (not tied to JavaScript/Python/etc.)

**Example:**
```
Real Code (JavaScript):
function addNumbers(a, b) {
    return a + b;
}

Pseudocode:
FUNCTION addNumbers(a, b):
    ADD a and b together
    RETURN the result
```

---

## 📝 Pseudocode Rules

### Format:
- Use UPPERCASE for keywords (FUNCTION, IF, ELSE, FOR, WHILE, RETURN)
- Indent to show nested logic
- Use plain English for actions
- Be specific but not too detailed

### Keywords:
- **FUNCTION** - Defines a function
- **IF / ELSE IF / ELSE** - Conditionals
- **FOR** - Loop through items
- **WHILE** - Loop while condition true
- **RETURN** - Give back a value
- **SET** - Assign a variable
- **CALL** - Run another function
- **DISPLAY** - Show on screen

---

## 🎴 Challenge 1: Create Deck

**Task**: Write pseudocode for creating a 52-card deck

**Hints:**
- 4 suits: Hearts, Diamonds, Clubs, Spades
- 13 ranks: A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K
- Need 52 total cards (4 × 13)
- Each card is an object with rank and suit

### Your Pseudocode:

```
FUNCTION createDeck():
    SET deck to empty array
    
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    
    RETURN deck
```

<details>
<summary>Click to see example solution</summary>

```
FUNCTION createDeck():
    SET deck to empty array
    SET suits to ["♥", "♦", "♣", "♠"]
    SET ranks to ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    
    FOR each suit in suits:
        FOR each rank in ranks:
            CREATE card object with rank and suit
            ADD card to deck
    
    RETURN deck (52 cards total)
```
</details>

---

## 🔀 Challenge 2: Shuffle Deck

**Task**: Write pseudocode for shuffling a deck randomly

**Hints:**
- Fisher-Yates shuffle is best algorithm
- Go through deck backwards
- For each card, swap with random card before it
- Ensures truly random shuffle

### Your Pseudocode:

```
FUNCTION shuffleDeck(deck):
    
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    
    RETURN shuffled deck
```

<details>
<summary>Click to see example solution</summary>

```
FUNCTION shuffleDeck(deck):
    FOR i from (deck length - 1) down to 1:
        SET randomIndex to random number from 0 to i
        SWAP deck[i] with deck[randomIndex]
    
    RETURN shuffled deck
```
</details>

---

## 🎴 Challenge 3: Deal Cards

**Task**: Write pseudocode for dealing 5 cards to player and dealer

**Hints:**
- Need to deal 10 cards total (5 each)
- Remove cards from deck as you deal them
- Store in separate hands (player and dealer)

### Your Pseudocode:

```
FUNCTION dealCards(deck):
    SET playerHand to empty array
    SET dealerHand to empty array
    
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    
    RETURN playerHand and dealerHand
```

<details>
<summary>Click to see example solution</summary>

```
FUNCTION dealCards(deck):
    SET playerHand to empty array
    SET dealerHand to empty array
    
    FOR 5 times:
        SET card to top card from deck
        REMOVE card from deck
        ADD card to playerHand
    
    FOR 5 times:
        SET card to top card from deck
        REMOVE card from deck
        ADD card to dealerHand
    
    DISPLAY playerHand on screen (face-up)
    HIDE dealerHand on screen (face-down)
    
    RETURN playerHand and dealerHand
```
</details>

---

## 🔍 Challenge 4: Check for Pair

**Task**: Write pseudocode to detect if hand has a pair

**Hints:**
- Look at all 5 cards
- Count how many of each rank
- If any rank appears 2 times = pair

### Your Pseudocode:

```
FUNCTION hasPair(hand):
    
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    
    RETURN true or false
```

<details>
<summary>Click to see example solution</summary>

```
FUNCTION hasPair(hand):
    FOR each card in hand:
        SET count to 0
        FOR each otherCard in hand:
            IF card rank equals otherCard rank:
                INCREMENT count
        
        IF count equals 2:
            RETURN true (found a pair!)
    
    RETURN false (no pair found)
```
</details>

---

## 🌊 Challenge 5: Check for Flush

**Task**: Write pseudocode to detect if hand has a flush (all same suit)

**Hints:**
- Check if all 5 cards have same suit
- Can check first card's suit, then compare others

### Your Pseudocode:

```
FUNCTION hasFlush(hand):
    
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    
    RETURN true or false
```

<details>
<summary>Click to see example solution</summary>

```
FUNCTION hasFlush(hand):
    SET firstSuit to hand[0].suit
    
    FOR each card in hand:
        IF card.suit does NOT equal firstSuit:
            RETURN false
    
    RETURN true (all cards same suit!)
```
</details>

---

## 📈 Challenge 6: Check for Straight

**Task**: Write pseudocode to detect if hand is a straight (5 cards in a row)

**Hints:**
- Sort cards by rank first
- Check if each card is 1 higher than previous
- Special case: A-2-3-4-5 (ace low)

### Your Pseudocode:

```
FUNCTION hasStraight(hand):
    
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    
    RETURN true or false
```

<details>
<summary>Click to see example solution</summary>

```
FUNCTION hasStraight(hand):
    SORT hand by rank value (low to high)
    
    FOR i from 0 to 3:
        IF hand[i+1].value does NOT equal hand[i].value + 1:
            RETURN false
    
    RETURN true (all consecutive!)
    
    // Note: Also check for A-2-3-4-5 special case
```
</details>

---

## ⚔️ Challenge 7: Compare Hands

**Task**: Write pseudocode to determine which hand wins

**Hints:**
- Evaluate both hands first (get hand type)
- Compare hand types (flush beats straight)
- If same type, compare high cards

### Your Pseudocode:

```
FUNCTION compareHands(playerHand, dealerHand):
    
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    
    RETURN "player" or "dealer" or "tie"
```

<details>
<summary>Click to see example solution</summary>

```
FUNCTION compareHands(playerHand, dealerHand):
    SET playerType to CALL evaluateHand(playerHand)
    SET dealerType to CALL evaluateHand(dealerHand)
    
    IF playerType.rank > dealerType.rank:
        RETURN "player wins"
    ELSE IF dealerType.rank > playerType.rank:
        RETURN "dealer wins"
    ELSE:
        // Same hand type, compare high cards
        IF playerType.highCard > dealerType.highCard:
            RETURN "player wins"
        ELSE IF dealerType.highCard > playerType.highCard:
            RETURN "dealer wins"
        ELSE:
            RETURN "tie"
```
</details>

---

## 💰 Challenge 8: Player Raises

**Task**: Write pseudocode for when player raises bet

**Hints:**
- Check if player has enough chips
- Deduct chips from player
- Add chips to pot
- Update display
- Wait for dealer response

### Your Pseudocode:

```
FUNCTION playerRaises(amount):
    
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    
```

<details>
<summary>Click to see example solution</summary>

```
FUNCTION playerRaises(amount):
    IF playerChips < amount:
        DISPLAY "Not enough chips!"
        RETURN
    
    SUBTRACT amount from playerChips
    ADD amount to pot
    SET currentBet to amount
    
    UPDATE chip display on screen
    UPDATE pot display on screen
    
    DISPLAY "You raised {amount} chips!"
    
    CALL dealerRespond(currentBet)
```
</details>

---

## 🤖 Challenge 9: Dealer AI Decision

**Task**: Write pseudocode for dealer deciding whether to fold, call, or raise

**Hints:**
- Evaluate dealer's hand strength
- Strong hand = raise
- Medium hand = call
- Weak hand = fold
- Consider player's bet size

### Your Pseudocode:

```
FUNCTION dealerDecision(dealerHand, playerBet):
    
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    
    RETURN "fold" or "call" or "raise"
```

<details>
<summary>Click to see example solution</summary>

```
FUNCTION dealerDecision(dealerHand, playerBet):
    SET handStrength to CALL evaluateHand(dealerHand)
    
    IF handStrength >= 7:  // Full house or better
        RETURN "raise"
    ELSE IF handStrength >= 5:  // Straight or better
        IF playerBet <= 25:
            RETURN "call"
        ELSE:
            RETURN "raise"
    ELSE IF handStrength >= 3:  // Two pair or better
        IF playerBet <= 10:
            RETURN "call"
        ELSE:
            RETURN "fold"
    ELSE IF handStrength === 2:  // One pair
        IF playerBet === 0:
            RETURN "call"
        ELSE:
            RETURN "fold"
    ELSE:  // High card (weak)
        RETURN "fold"
```
</details>

---

## 🎮 Challenge 10: Main Game Loop

**Task**: Write pseudocode for the main game flow

**Hints:**
- Keep playing hands until someone runs out of chips
- Each hand: ante, deal, bet, showdown, award
- Check win/lose conditions after each hand

### Your Pseudocode:

```
FUNCTION playPokerGame():
    
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    ___________________________________________
    
```

<details>
<summary>Click to see example solution</summary>

```
FUNCTION playPokerGame():
    SET playerChips to 1000
    SET dealerChips to 1000
    
    WHILE playerChips >= 10 AND dealerChips >= 10:
        // Take ante
        SUBTRACT 10 from playerChips
        SUBTRACT 10 from dealerChips
        SET pot to 20
        
        // Deal cards
        SET deck to CALL createDeck()
        CALL shuffleDeck(deck)
        SET playerHand to CALL dealCards(deck, "player")
        SET dealerHand to CALL dealCards(deck, "dealer")
        
        // Betting phase
        DISPLAY playerHand
        WAIT for player decision (fold/call/raise)
        CALL dealerDecision(dealerHand, currentBet)
        
        // Showdown
        REVEAL dealerHand
        SET winner to CALL compareHands(playerHand, dealerHand)
        
        // Award pot
        IF winner equals "player":
            ADD pot to playerChips
        ELSE:
            ADD pot to dealerChips
        
        // Check game over
        IF dealerChips < 10:
            DISPLAY "You win the game!"
            BREAK
        IF playerChips < 10:
            DISPLAY "Dealer wins the game!"
            BREAK
```
</details>

---

## ✅ Pseudocode Checklist

**Good pseudocode should:**

- [ ] Be easy to read and understand
- [ ] Use clear, descriptive names
- [ ] Show logic flow clearly (IF/ELSE, loops)
- [ ] Be specific enough to code from
- [ ] Not be actual code (no syntax)
- [ ] Handle edge cases (what if player has 0 chips?)
- [ ] Be organized with proper indentation

---

## 🎯 Next Steps

**After writing pseudocode:**

1. **Review with someone** - Does it make sense?
2. **Test your logic** - Walk through it step-by-step
3. **Find problems** - What did you forget?
4. **Revise** - Fix issues before coding
5. **Keep it handy** - Use as reference when writing real code

**Pro tip**: When you start coding in JavaScript (Lesson 4.5+), turn each pseudocode function into a real function. Your pseudocode becomes your code outline!

---

## 🏆 Challenge Complete!

You've practiced thinking like a programmer! Pseudocode is used by professional developers every day to plan complex features.

**Save your pseudocode!** You'll convert it to real JavaScript code in upcoming lessons. 💻✨
