# Card Deck Fundamentals - Quick Reference 🃏

## Card Object Structure

### Basic Card
```javascript
{
    suit: 'hearts',      // 'hearts', 'diamonds', 'clubs', 'spades'
    rank: '7',           // '2'-'10', 'J', 'Q', 'K', 'A'
    value: 7             // 2-14 (Ace = 14)
}
```

### Face Card Values
| Rank | Value |
|------|-------|
| 2-10 | 2-10 |
| J (Jack) | 11 |
| Q (Queen) | 12 |
| K (King) | 13 |
| A (Ace) | 14 |

---

## Creating a Deck

### Full Deck Function
```javascript
function createDeck() {
    const suits = ['spades', 'hearts', 'diamonds', 'clubs'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    
    const deck = [];
    
    for (let suit of suits) {
        for (let i = 0; i < ranks.length; i++) {
            deck.push({
                suit: suit,
                rank: ranks[i],
                value: values[i]
            });
        }
    }
    
    return deck;
}
```

### Usage
```javascript
const deck = createDeck();
console.log(deck.length);  // 52
```

---

## Fisher-Yates Shuffle Algorithm

### The CORRECT Way to Shuffle

```javascript
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        // Pick random index from 0 to i
        const j = Math.floor(Math.random() * (i + 1));
        
        // Swap cards at positions i and j
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}
```

### How It Works
1. Start at the last card (index = length - 1)
2. Pick a random card from positions 0 to current position
3. Swap those two cards
4. Move to the previous position
5. Repeat until you reach the first card

### Why Fisher-Yates?
- ✅ Truly random (every arrangement equally likely)
- ✅ Fast (O(n) time complexity)
- ✅ Industry standard for card games
- ✅ Cryptographically sound

### ❌ DON'T Use This!
```javascript
// BAD: Creates biased shuffles
deck.sort(() => Math.random() - 0.5);
```

---

## Dealing Cards

### Deal Single Card
```javascript
function dealCard(deck) {
    return deck.pop();  // Removes and returns last card
}
```

### Deal Multiple Cards
```javascript
function dealCards(deck, count) {
    const hand = [];
    for (let i = 0; i < count; i++) {
        hand.push(deck.pop());
    }
    return hand;
}
```

### Deal to Multiple Players
```javascript
function dealToPlayers(deck, playerCount, cardsPerPlayer) {
    const players = [];
    
    // Create player objects
    for (let i = 0; i < playerCount; i++) {
        players.push({
            name: `Player ${i + 1}`,
            hand: []
        });
    }
    
    // Deal one card at a time to each player
    for (let round = 0; round < cardsPerPlayer; round++) {
        for (let playerNum = 0; playerNum < playerCount; playerNum++) {
            players[playerNum].hand.push(deck.pop());
        }
    }
    
    return players;
}
```

### Usage
```javascript
const deck = createDeck();
shuffleDeck(deck);

const players = dealToPlayers(deck, 4, 5);
// 4 players, 5 cards each
```

---

## Displaying Cards

### Card Display Function
```javascript
function displayCard(card) {
    const symbols = {
        'spades': '♠',
        'hearts': '♥',
        'diamonds': '♦',
        'clubs': '♣'
    };
    return `${card.rank}${symbols[card.suit]}`;
}
```

### Examples
```javascript
displayCard({ suit: 'hearts', rank: 'A', value: 14 });
// Returns: "A♥"

displayCard({ suit: 'spades', rank: '7', value: 7 });
// Returns: "7♠"
```

---

## Array Methods for Cards

### `pop()` - Remove Last Element
```javascript
const card = deck.pop();
// Removes and returns last card
// deck.length is now 1 less
```

### `push()` - Add to End
```javascript
deck.push(newCard);
// Adds newCard to end of deck
```

### `shift()` - Remove First Element
```javascript
const card = deck.shift();
// Removes and returns first card
```

### `unshift()` - Add to Beginning
```javascript
deck.unshift(newCard);
// Adds newCard to beginning
```

### `filter()` - Get Matching Cards
```javascript
const hearts = deck.filter(card => card.suit === 'hearts');
// Returns array of all hearts
```

### `find()` - Find Single Card
```javascript
const aceOfSpades = deck.find(
    card => card.rank === 'A' && card.suit === 'spades'
);
```

### `map()` - Transform Each Card
```javascript
const ranks = deck.map(card => card.rank);
// Returns array of just the ranks
```

---

## Common Patterns

### Poker Deal Pattern
```javascript
const deck = createDeck();
shuffleDeck(deck);

// Deal hole cards (2 per player)
const players = dealToPlayers(deck, 6, 2);

// Burn and deal flop
deck.pop();  // Burn card
const flop = dealCards(deck, 3);

// Burn and deal turn
deck.pop();  // Burn card
const turn = dealCard(deck);

// Burn and deal river
deck.pop();  // Burn card
const river = dealCard(deck);
```

### Safety Check
```javascript
function dealCardSafe(deck) {
    if (deck.length === 0) {
        console.error('Deck is empty!');
        return null;
    }
    return deck.pop();
}
```

### Count Cards by Suit
```javascript
const suitCounts = {};

for (let card of deck) {
    if (suitCounts[card.suit]) {
        suitCounts[card.suit]++;
    } else {
        suitCounts[card.suit] = 1;
    }
}

// Result: { spades: 13, hearts: 13, diamonds: 13, clubs: 13 }
```

---

## Quick Tips

💡 **Always shuffle before dealing** - New decks are in perfect order

💡 **Use `pop()` for dealing** - It's O(1) fast and removes from deck

💡 **Track deck length** - Prevents dealing more cards than available

💡 **Copy before mutating** - Use `[...deck]` to create a copy

💡 **Display with Unicode** - ♠ ♥ ♦ ♣ look professional

---

## Complete Example

```javascript
// Complete poker deal
const deck = createDeck();
shuffleDeck(deck);

const players = dealToPlayers(deck, 6, 2);
console.log('Dealt to 6 players');

players.forEach(player => {
    const handDisplay = player.hand.map(displayCard).join(' ');
    console.log(`${player.name}: ${handDisplay}`);
});

console.log(`Cards remaining: ${deck.length}`);
```

---

## Common Mistakes to Avoid

❌ Not shuffling before dealing  
❌ Using bad shuffle (`sort()` with `Math.random()`)  
❌ Dealing more cards than available  
❌ Forgetting that `pop()` mutates the array  
❌ Using strings like "Ace of Spades" instead of objects

---

This cheatsheet covers everything you need to manage a deck of cards in JavaScript!
