# Lesson 4.13 - Final Project Cheat Sheet 🎯

## Quick Reference for Building Your Poker Game

### Essential Functions

#### Deck Management
```javascript
// Create a standard 52-card deck
function createDeck() {
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const deck = [];
    
    for (const suit of suits) {
        for (const rank of ranks) {
            deck.push({ suit, rank });
        }
    }
    
    return deck;
}

// Fisher-Yates shuffle
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}
```

#### Game State Template
```javascript
const gameState = {
    // Deck
    deck: [],
    communityCards: [],
    
    // Players
    players: [
        { id: 0, name: 'You', chips: 1000, cards: [], bet: 0, folded: false, allIn: false },
        { id: 1, name: 'Alice', chips: 1000, cards: [], bet: 0, folded: false, allIn: false },
        { id: 2, name: 'Bob', chips: 1000, cards: [], bet: 0, folded: false, allIn: false }
    ],
    
    // Betting
    pot: 0,
    currentBet: 0,
    currentPlayerIndex: 0,
    dealerIndex: 0,
    
    // Round tracking
    round: 'preflop', // preflop, flop, turn, river, showdown
    
    // Blinds
    smallBlind: 10,
    bigBlind: 20
};
```

#### Hand Evaluation
```javascript
// Check for pairs, trips, quads
function countRanks(cards) {
    const counts = {};
    for (const card of cards) {
        const rank = card.rank;
        counts[rank] = (counts[rank] || 0) + 1;
    }
    return counts;
}

// Check for flush
function isFlush(cards) {
    const firstSuit = cards[0].suit;
    return cards.every(card => card.suit === firstSuit);
}

// Check for straight
function isStraight(cards) {
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const values = cards.map(c => ranks.indexOf(c.rank)).sort((a, b) => a - b);
    
    // Check for consecutive values
    for (let i = 0; i < values.length - 1; i++) {
        if (values[i + 1] - values[i] !== 1) return false;
    }
    return true;
}
```

#### Betting Actions
```javascript
// Call the current bet
function call(player, gameState) {
    const callAmount = gameState.currentBet - player.bet;
    const actualCall = Math.min(callAmount, player.chips);
    
    player.chips -= actualCall;
    player.bet += actualCall;
    gameState.pot += actualCall;
    
    if (player.chips === 0) player.allIn = true;
}

// Raise the bet
function raise(player, amount, gameState) {
    const totalBet = gameState.currentBet + amount;
    const betAmount = totalBet - player.bet;
    
    if (player.chips >= betAmount) {
        player.chips -= betAmount;
        player.bet = totalBet;
        gameState.pot += betAmount;
        gameState.currentBet = totalBet;
    }
}

// Fold hand
function fold(player) {
    player.folded = true;
}
```

#### AI Decision Making
```javascript
function makeAIDecision(player, gameState, hand Strength) {
    // Weak hand (0-30)
    if (handStrength < 30) {
        if (gameState.currentBet === 0) return 'check';
        return Math.random() < 0.8 ? 'fold' : 'call';
    }
    
    // Medium hand (30-60)
    if (handStrength < 60) {
        if (gameState.currentBet === 0) return Math.random() < 0.5 ? 'check' : 'raise';
        return Math.random() < 0.7 ? 'call' : 'fold';
    }
    
    // Strong hand (60+)
    if (gameState.currentBet === 0) return 'raise';
    return Math.random() < 0.8 ? 'raise' : 'call';
}
```

### Common Patterns

#### Dealing Cards
```javascript
async function dealHoleCards() {
    for (let i = 0; i < 2; i++) {
        for (const player of gameState.players) {
            if (!player.folded) {
                const card = gameState.deck.pop();
                player.cards.push(card);
                await delay(200); // Animation delay
            }
        }
    }
}

async function dealFlop() {
    gameState.deck.pop(); // Burn card
    for (let i = 0; i < 3; i++) {
        const card = gameState.deck.pop();
        gameState.communityCards.push(card);
        await delay(300);
    }
}
```

#### Turn Rotation
```javascript
function nextPlayer(gameState) {
    let nextIndex = (gameState.currentPlayerIndex + 1) % gameState.players.length;
    
    // Skip folded players
    while (gameState.players[nextIndex].folded) {
        nextIndex = (nextIndex + 1) % gameState.players.length;
    }
    
    gameState.currentPlayerIndex = nextIndex;
    return gameState.players[nextIndex];
}
```

#### Winner Determination
```javascript
function findWinner(players, communityCards) {
    let bestPlayer = null;
    let bestRank = -1;
    
    for (const player of players) {
        if (player.folded) continue;
        
        const allCards = [...player.cards, ...communityCards];
        const handRank = evaluateHand(allCards);
        
        if (handRank > bestRank) {
            bestRank = handRank;
            bestPlayer = player;
        }
    }
    
    return bestPlayer;
}
```

### UI Updates

#### Display Cards
```javascript
function displayCard(card) {
    const cardDiv = document.createElement('div');
    cardDiv.className = `card ${card.suit}`;
    cardDiv.textContent = card.rank + getSuitSymbol(card.suit);
    return cardDiv;
}

function getSuitSymbol(suit) {
    const symbols = { hearts: '♥', diamonds: '♦', clubs: '♣', spades: '♠' };
    return symbols[suit];
}
```

#### Update Game State Display
```javascript
function updateUI() {
    // Update pot
    document.getElementById('pot').textContent = `$${gameState.pot}`;
    
    // Update player displays
    gameState.players.forEach((player, index) => {
        const elem = document.getElementById(`player-${index}`);
        elem.querySelector('.chips').textContent = `$${player.chips}`;
        elem.querySelector('.bet').textContent = `Bet: $${player.bet}`;
        elem.classList.toggle('active', index === gameState.currentPlayerIndex);
        elem.classList.toggle('folded', player.folded);
    });
}
```

### Debugging Tips

```javascript
// Log game state
function debugLog() {
    console.log('=== GAME STATE ===');
    console.log(`Round: ${gameState.round}`);
    console.log(`Pot: $${gameState.pot}`);
    console.log(`Current Bet: $${gameState.currentBet}`);
    console.log('Players:');
    gameState.players.forEach(p => {
        console.log(`  ${p.name}: $${p.chips} (bet: $${p.bet}, ${p.folded ? 'FOLDED' : 'ACTIVE'})`);
    });
    console.log('================');
}

// Test hand evaluation
function testHandEvaluation() {
    const testHands = [
        [{ rank: 'A', suit: 'hearts' }, { rank: 'A', suit: 'diamonds' }], // Pair
        [{ rank: 'K', suit: 'hearts' }, { rank: 'Q', suit: 'hearts' }],   // High cards
    ];
    
    testHands.forEach(hand => {
        const result = evaluateHand(hand);
        console.log(`Hand: ${formatHand(hand)} → ${result}`);
    });
}
```

### Common Gotchas

❌ **Don't:**
- Mutate the original deck without copying
- Forget to check for all-in players
- Skip bet validation
- Forget to reset bets between rounds

✅ **Do:**
- Copy arrays before sorting
- Validate all user inputs
- Handle edge cases (all players fold, one player remains)
- Test with console.log frequently

### Game Flow Checklist

1. ✅ New hand starts
2. ✅ Shuffle and deal hole cards
3. ✅ Post blinds
4. ✅ Pre-flop betting round
5. ✅ Deal flop
6. ✅ Betting round
7. ✅ Deal turn
8. ✅ Betting round
9. ✅ Deal river
10. ✅ Final betting round
11. ✅ Showdown (if needed)
12. ✅ Award pot
13. ✅ Reset for next hand

### Performance Targets

- ⚡ Card deal animation: 200-300ms per card
- 🎯 AI decision time: 500-1500ms (realistic)
- 🖱️ Button response: <100ms
- 📱 Mobile responsive: <768px breakpoint

### Keep in Mind

- **Scope:** Start small, add features later
- **Test:** Test each feature before moving on
- **Debug:** Use console.log liberally
- **Commit:** Save your work frequently
- **Ask:** Don't be afraid to ask for help!

---

**Good luck with your final project! 🎉**
