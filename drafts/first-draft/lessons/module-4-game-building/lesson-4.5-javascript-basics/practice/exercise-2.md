# Exercise 2: JavaScript Experiments & Debugging 🔬

**Goal**: Experiment with JavaScript to understand how it works and practice debugging.

**Time**: 45-60 minutes

**What You'll Do**:
- Modify deck creation
- Experiment with shuffle algorithm
- Create custom deal variations
- Practice debugging techniques
- Add console logging
- Handle edge cases

---

## 🎯 Part 1: Deck Experiments (15 minutes)

### Experiment 1: Create a Smaller Deck

**Challenge**: Modify `createDeck()` to create just one suit.

```javascript
function createOneSuitDeck() {
    const suits = ['♠'];  // Just spades
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    
    let deck = [];
    
    for (let suit of suits) {
        for (let i = 0; i < ranks.length; i++) {
            deck.push({
                rank: ranks[i],
                suit: suit,
                value: values[i],
                color: 'black'
            });
        }
    }
    
    return deck;  // Returns 13 cards
}

// Test it
let smallDeck = createOneSuitDeck();
console.log('Small deck size:', smallDeck.length);  // Should be 13
```

**Task**: Try creating:
- Two-suit deck (hearts and diamonds only)
- Face cards only (J, Q, K, A from all suits)
- Number cards only (2-10 from all suits)

**Question**: Why might you want a smaller deck?
- My answer: _____________________________________________

### Experiment 2: Add Jokers

**Challenge**: Add 2 joker cards to the deck.

```javascript
function createDeckWithJokers() {
    // Create normal 52-card deck
    let deck = createDeck();
    
    // Add 2 jokers
    deck.push({
        rank: 'JOKER',
        suit: '🃏',
        value: 15,  // Higher than Ace
        color: 'red'
    });
    
    deck.push({
        rank: 'JOKER',
        suit: '🃏',
        value: 15,
        color: 'black'
    });
    
    return deck;  // 54 cards
}

// Test it
let jokerDeck = createDeckWithJokers();
console.log('Deck with jokers:', jokerDeck.length);  // Should be 54
console.log('Last card:', jokerDeck[53]);
```

**Task**: Modify to add:
- 4 jokers instead of 2
- Wild cards with custom symbols
- Special "bonus" cards

### Experiment 3: Log Every Card

**Challenge**: Print all 52 cards to console in a readable format.

```javascript
function logDeck(deck) {
    console.log('=== DECK CONTENTS ===');
    
    for (let i = 0; i < deck.length; i++) {
        let card = deck[i];
        console.log(
            `Card ${i + 1}: ${card.rank}${card.suit} ` +
            `(value: ${card.value}, color: ${card.color})`
        );
    }
    
    console.log('=== END OF DECK ===');
}

// Test it
let deck = createDeck();
logDeck(deck);
```

**Task**: Modify to:
- Group cards by suit
- Sort cards by value
- Show only face cards
- Count cards by color

---

## 🔀 Part 2: Shuffle Experiments (15 minutes)

### Experiment 4: Count How Many Cards Change Position

**Challenge**: Track how many cards move during shuffle.

```javascript
function analyzeShufflе(deck) {
    // Remember original positions
    let originalPositions = deck.map((card, index) => ({
        card: card,
        originalIndex: index
    }));
    
    // Shuffle
    shuffleDeck(deck);
    
    // Count how many moved
    let moved = 0;
    for (let i = 0; i < deck.length; i++) {
        if (deck[i] !== originalPositions[i].card) {
            moved++;
        }
    }
    
    console.log(`${moved} out of ${deck.length} cards changed position`);
    console.log(`${((moved / deck.length) * 100).toFixed(1)}% moved`);
}

// Test it multiple times
for (let i = 0; i < 5; i++) {
    let testDeck = createDeck();
    console.log(`Test ${i + 1}:`);
    analyzeShufflе(testDeck);
}
```

**Question**: What percentage of cards move on average?
- My answer: _____________________________________________

### Experiment 5: Bad Shuffle vs Good Shuffle

**Challenge**: Create a bad shuffle and compare to Fisher-Yates.

```javascript
function badShuffle(deck) {
    // BAD: Just sorts by random number
    deck.sort(() => Math.random() - 0.5);
    return deck;
}

function testShuffleQuality(shuffleFunction, name) {
    console.log(`Testing ${name}...`);
    
    let firstCardCounts = {};
    let trials = 1000;
    
    for (let i = 0; i < trials; i++) {
        let deck = createDeck();
        shuffleFunction(deck);
        
        let firstCard = `${deck[0].rank}${deck[0].suit}`;
        firstCardCounts[firstCard] = (firstCardCounts[firstCard] || 0) + 1;
    }
    
    // Each card should appear ~19 times (1000/52)
    let values = Object.values(firstCardCounts);
    let avg = values.reduce((a, b) => a + b) / values.length;
    let expected = trials / 52;
    
    console.log(`Average appearances: ${avg.toFixed(1)} (expected: ${expected.toFixed(1)})`);
    console.log(`Most common:`, Math.max(...values));
    console.log(`Least common:`, Math.min(...values));
}

// Compare shuffles
testShuffleQuality(shuffleDeck, 'Fisher-Yates');
testShuffleQuality(badShuffle, 'Bad Shuffle');
```

**Question**: Which shuffle is more random? How can you tell?
- My answer: _____________________________________________

### Experiment 6: Shuffle Multiple Times

**Challenge**: Does shuffling twice make it "more random"?

```javascript
function multiShuffle(deck, times) {
    for (let i = 0; i < times; i++) {
        shuffleDeck(deck);
    }
    return deck;
}

// Test
let deck1 = createDeck();
shuffleDeck(deck1);
console.log('Shuffled 1x, first card:', deck1[0]);

let deck2 = createDeck();
multiShuffle(deck2, 5);
console.log('Shuffled 5x, first card:', deck2[0]);
```

**Question**: Is there any benefit to shuffling multiple times?
- My answer: _____________________________________________

---

## 🎴 Part 3: Dealing Experiments (10 minutes)

### Experiment 7: Deal Specific Cards

**Challenge**: Deal only face cards (J, Q, K, A).

```javascript
function dealFaceCard(deck) {
    for (let i = deck.length - 1; i >= 0; i--) {
        if (['J', 'Q', 'K', 'A'].includes(deck[i].rank)) {
            return deck.splice(i, 1)[0];  // Remove and return
        }
    }
    return null;  // No face cards left
}

function dealFaceCardsOnly(deck, count) {
    let hand = [];
    for (let i = 0; i < count; i++) {
        let card = dealFaceCard(deck);
        if (card) {
            hand.push(card);
        }
    }
    return hand;
}

// Test
let deck = createDeck();
shuffleDeck(deck);
let faceCards = dealFaceCardsOnly(deck, 5);
console.log('Face cards dealt:', faceCards);
```

**Task**: Create functions to deal:
- Only red cards
- Only cards with value > 10
- Only cards of a specific suit

### Experiment 8: Deal from Top vs Bottom

**Challenge**: Compare dealing from top vs bottom of deck.

```javascript
function dealFromTop(deck) {
    return deck.shift();  // Remove first element
}

function dealFromBottom(deck) {
    return deck.pop();  // Remove last element
}

// Test
let deck = createDeck();
console.log('Top card:', dealFromTop(deck));
console.log('Bottom card:', dealFromBottom(deck));
console.log('Deck now has:', deck.length, 'cards');
```

**Question**: Which is faster: `shift()` or `pop()`? Why?
- My answer: _____________________________________________

### Experiment 9: Deal Multiple Hands

**Challenge**: Deal cards to 4 players at once.

```javascript
function dealToMultiplePlayers(deck, numPlayers, cardsEach) {
    let hands = [];
    
    // Create empty hand for each player
    for (let i = 0; i < numPlayers; i++) {
        hands.push([]);
    }
    
    // Deal cards one at a time to each player
    for (let card = 0; card < cardsEach; card++) {
        for (let player = 0; player < numPlayers; player++) {
            hands[player].push(dealCard(deck));
        }
    }
    
    return hands;
}

// Test
let deck = createDeck();
shuffleDeck(deck);
let fourHands = dealToMultiplePlayers(deck, 4, 5);

fourHands.forEach((hand, index) => {
    console.log(`Player ${index + 1}:`, hand);
});

console.log('Deck remaining:', deck.length);  // Should be 32
```

---

## 🐛 Part 4: Debugging Practice (15 minutes)

### Debugging Challenge 1: Find the Bug

**This code has a bug. Can you find and fix it?**

```javascript
function dealCards(deck) {
    let hand = [];
    for (let i = 0; i < 5; i++) {
        hand.push(deck[i]);  // ❌ BUG!
    }
    return hand;
}
```

**Hint**: What happens to the deck?

**Fixed version:**
```javascript
function dealCards(deck) {
    let hand = [];
    for (let i = 0; i < 5; i++) {
        hand.push(deck.pop());  // ✅ Removes from deck
    }
    return hand;
}
```

### Debugging Challenge 2: Find the Bug

**This code has a bug. Can you find and fix it?**

```javascript
function shuffleDeck(deck) {
    for (let i = deck.length; i > 0; i--) {  // ❌ BUG!
        let j = Math.floor(Math.random() * i);
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}
```

**Hint**: What happens when i = deck.length?

**Fixed version:**
```javascript
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {  // ✅ Start at length - 1
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}
```

### Debugging Challenge 3: Logic Error

**This code runs but gives wrong results. Why?**

```javascript
let gameState = {
    playerChips: 1000,
    pot: 0
};

function placeBet(amount) {
    gameState.playerChips - amount;  // ❌ BUG!
    gameState.pot + amount;          // ❌ BUG!
}

placeBet(50);
console.log('Chips:', gameState.playerChips);  // Still 1000!
console.log('Pot:', gameState.pot);            // Still 0!
```

**Fixed version:**
```javascript
function placeBet(amount) {
    gameState.playerChips -= amount;  // ✅ Actually subtract
    gameState.pot += amount;          // ✅ Actually add
}
```

### Debugging Challenge 4: Type Error

**Find and fix the bug:**

```javascript
function displayCard(card) {
    let cardElement = document.getElementById('player-cards');
    cardElement.textContent = card.rank + card.suit;
}

let hand = dealHand(deck, 5);
displayCard(hand);  // ❌ BUG!
```

**Hint**: What type is `hand`?

**Fixed version:**
```javascript
function displayCard(card) {
    let cardElement = document.getElementById('player-cards');
    cardElement.textContent = card.rank + card.suit;
}

let hand = dealHand(deck, 5);
displayCard(hand[0]);  // ✅ Pass single card, not array
```

---

## 🔍 Part 5: Console Logging Practice (10 minutes)

### Add Detailed Logging

**Challenge**: Add helpful console messages to track game flow.

```javascript
function startGame() {
    console.log('╔══════════════════════════════════╗');
    console.log('║     STARTING NEW POKER GAME      ║');
    console.log('╚══════════════════════════════════╝');
    
    console.log('📦 Creating deck...');
    gameState.deck = createDeck();
    console.log(`✓ Deck created: ${gameState.deck.length} cards`);
    
    console.log('🔀 Shuffling deck...');
    gameState.deck = shuffleDeck(gameState.deck);
    console.log('✓ Deck shuffled');
    
    console.log('💰 Taking ante...');
    console.log(`   Player chips: ${gameState.playerChips} → ${gameState.playerChips - 10}`);
    gameState.playerChips -= 10;
    gameState.pot += 20;
    console.log(`   Pot: ${gameState.pot - 20} → ${gameState.pot}`);
    
    console.log('🎴 Dealing cards...');
    gameState.playerHand = dealHand(gameState.deck, 5);
    gameState.dealerHand = dealHand(gameState.deck, 5);
    console.log(`   Player hand: ${gameState.playerHand.length} cards`);
    console.log(`   Dealer hand: ${gameState.dealerHand.length} cards`);
    console.log(`   Deck remaining: ${gameState.deck.length} cards`);
    
    console.log('🎮 Game ready!');
    console.log('═════════════════════════════════════');
}
```

**Task**: Add similar detailed logging to:
- `shuffleDeck()`
- `dealCard()`
- Betting functions

---

## 🎯 Advanced Challenges

### Challenge 1: Card Statistics

**Create a function that analyzes a hand:**

```javascript
function analyzeHand(hand) {
    let stats = {
        totalValue: 0,
        highCard: null,
        lowCard: null,
        redCards: 0,
        blackCards: 0,
        suits: { '♠': 0, '♥': 0, '♦': 0, '♣': 0 }
    };
    
    for (let card of hand) {
        stats.totalValue += card.value;
        stats.suits[card.suit]++;
        
        if (card.color === 'red') stats.redCards++;
        else stats.blackCards++;
        
        if (!stats.highCard || card.value > stats.highCard.value) {
            stats.highCard = card;
        }
        
        if (!stats.lowCard || card.value < stats.lowCard.value) {
            stats.lowCard = card;
        }
    }
    
    return stats;
}

// Test
let hand = dealHand(createDeck(), 5);
let stats = analyzeHand(hand);
console.log('Hand statistics:', stats);
```

### Challenge 2: Deck Verification

**Create a function to verify deck integrity:**

```javascript
function verifyDeck(deck) {
    let errors = [];
    
    // Check count
    if (deck.length !== 52) {
        errors.push(`Wrong card count: ${deck.length} (expected 52)`);
    }
    
    // Check for duplicates
    let seen = new Set();
    for (let card of deck) {
        let cardId = `${card.rank}${card.suit}`;
        if (seen.has(cardId)) {
            errors.push(`Duplicate card: ${cardId}`);
        }
        seen.add(cardId);
    }
    
    // Check all ranks present
    let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = ['♠', '♥', '♦', '♣'];
    
    for (let suit of suits) {
        for (let rank of ranks) {
            let found = deck.find(c => c.rank === rank && c.suit === suit);
            if (!found) {
                errors.push(`Missing card: ${rank}${suit}`);
            }
        }
    }
    
    if (errors.length === 0) {
        console.log('✓ Deck is valid!');
        return true;
    } else {
        console.log('✗ Deck has errors:');
        errors.forEach(err => console.log('  -', err));
        return false;
    }
}

// Test
let deck = createDeck();
verifyDeck(deck);
```

### Challenge 3: Performance Testing

**Measure how long functions take:**

```javascript
function measurePerformance(func, ...args) {
    let start = performance.now();
    let result = func(...args);
    let end = performance.now();
    
    console.log(`${func.name} took ${(end - start).toFixed(3)}ms`);
    return result;
}

// Test
let deck = createDeck();
measurePerformance(shuffleDeck, deck);

let hand = measurePerformance(dealHand, deck, 5);
```

---

## 📝 Reflection Questions

**Answer these questions:**

1. **What's the difference between `pop()` and `shift()`?**
   - My answer: ___________________________________________

2. **Why is Fisher-Yates better than sorting with random numbers?**
   - My answer: ___________________________________________

3. **What does `console.log()` help you do?**
   - My answer: ___________________________________________

4. **When would you use a smaller deck?**
   - My answer: ___________________________________________

5. **How do you know if a shuffle is truly random?**
   - My answer: ___________________________________________

---

## ✅ Completion Checklist

- [ ] Tried all 9 experiments
- [ ] Fixed all 4 debugging challenges
- [ ] Added detailed console logging
- [ ] Completed at least 1 advanced challenge
- [ ] Answered reflection questions
- [ ] Tested each experiment in browser
- [ ] No errors in console

---

## 🎓 What You Learned

✅ Array manipulation methods  
✅ Algorithm analysis  
✅ Debugging techniques  
✅ Console logging strategies  
✅ Performance measurement  
✅ Code verification  
✅ Edge case handling  

**You're becoming a real JavaScript developer!** 🚀

---

**Next**: Exercise 3 - Build Custom Card Games

**Teacher/Parent Sign-Off:**

Student completed exercise: _________________ Date: _______

Most interesting experiment: ________________________________

Notes: _________________________________________________
