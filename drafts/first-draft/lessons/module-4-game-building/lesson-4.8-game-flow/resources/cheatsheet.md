# Game Flow Quick Reference Cheatsheet

## 🎮 Game State Structure

```javascript
gameState = {
    playerChips: 100,        // Player's chip count
    dealerChips: 100,        // Dealer's chip count
    pot: 0,                  // Current pot amount
    ante: 5,                 // Ante amount (bet to start)
    playerHand: [],          // Array of 5 cards
    dealerHand: [],          // Array of 5 cards
    gamePhase: 'betting',    // 'betting', 'showdown', 'gameOver'
    playerFolded: false      // True if player folded
}
```

---

## 🔄 Game Flow Sequence

```
1. START NEW ROUND
   ↓
2. PLACE ANTE (both players pay)
   ↓
3. DEAL CARDS (5 to each player)
   ↓
4. PLAYER DECISION
   ├─→ FOLD (lose ante, dealer wins)
   ├─→ CALL (match ante, go to showdown)
   └─→ RAISE (bet 2x ante, dealer decides)
       ├─→ Dealer calls → SHOWDOWN
       └─→ Dealer folds → Player wins
   ↓
5. SHOWDOWN
   ├─→ Evaluate both hands
   ├─→ Determine winner
   └─→ Award pot
   ↓
6. CHECK GAME OVER
   ├─→ Player has chips → New round
   └─→ Player out of chips → Game over
```

---

## 🃏 Core Functions

### Round Management

```javascript
// Start a new round
function startNewRound() {
    gameState.pot = 0;
    gameState.playerHand = [];
    gameState.dealerHand = [];
    gameState.playerFolded = false;
    gameState.gamePhase = 'betting';
    
    placeAnte();
    dealInitialCards();
    updateDisplay();
}

// Place ante bets
function placeAnte() {
    if (gameState.playerChips < gameState.ante) {
        gameOver('Out of chips!');
        return;
    }
    
    gameState.playerChips -= gameState.ante;
    gameState.dealerChips -= gameState.ante;
    gameState.pot += gameState.ante * 2;
}

// Deal 5 cards to each player
function dealInitialCards() {
    for (let i = 0; i < 5; i++) {
        gameState.playerHand.push(drawCard());
        gameState.dealerHand.push(drawCard());
    }
}
```

### Player Actions

```javascript
// Fold - Give up hand
function fold() {
    gameState.playerFolded = true;
    gameState.dealerChips += gameState.pot;
    gameState.pot = 0;
    
    alert('You folded! Dealer wins.');
    setTimeout(startNewRound, 1500);
}

// Call - Match the ante
function call() {
    const callAmount = gameState.ante;
    
    if (gameState.playerChips < callAmount) {
        alert('Not enough chips!');
        return;
    }
    
    gameState.playerChips -= callAmount;
    gameState.pot += callAmount;
    
    // Dealer calls too
    gameState.dealerChips -= callAmount;
    gameState.pot += callAmount;
    
    showdown();
}

// Raise - Bet 2x ante
function raise() {
    const raiseAmount = gameState.ante * 2;
    
    if (gameState.playerChips < raiseAmount) {
        alert('Not enough chips!');
        return;
    }
    
    gameState.playerChips -= raiseAmount;
    gameState.pot += raiseAmount;
    
    // Dealer decides
    if (gameState.dealerChips >= raiseAmount) {
        gameState.dealerChips -= raiseAmount;
        gameState.pot += raiseAmount;
        showdown();
    } else {
        // Dealer folds
        gameState.playerChips += gameState.pot;
        gameState.pot = 0;
        alert('Dealer folds! You win!');
        setTimeout(startNewRound, 1500);
    }
}
```

### Showdown

```javascript
// Show cards and determine winner
function showdown() {
    gameState.gamePhase = 'showdown';
    updateDisplay();
    
    const winner = determineWinner();
    
    if (winner === 'player') {
        gameState.playerChips += gameState.pot;
        alert('You win!');
    } else if (winner === 'dealer') {
        gameState.dealerChips += gameState.pot;
        alert('Dealer wins!');
    } else {
        // Tie - split pot
        gameState.playerChips += gameState.pot / 2;
        gameState.dealerChips += gameState.pot / 2;
        alert('Push (tie)!');
    }
    
    gameState.pot = 0;
    
    setTimeout(startNewRound, 3000);
}
```

### Winner Determination

```javascript
// Determine winner by comparing hands
function determineWinner() {
    const playerEval = evaluateHand(gameState.playerHand);
    const dealerEval = evaluateHand(gameState.dealerHand);
    
    // Compare ranks (10 = Royal Flush, 1 = High Card)
    if (playerEval.rank > dealerEval.rank) {
        return 'player';
    } else if (dealerEval.rank > playerEval.rank) {
        return 'dealer';
    }
    
    // Same rank - compare values
    for (let i = 0; i < playerEval.values.length; i++) {
        if (playerEval.values[i] > dealerEval.values[i]) {
            return 'player';
        } else if (dealerEval.values[i] > playerEval.values[i]) {
            return 'dealer';
        }
    }
    
    return 'tie';
}
```

---

## 🎲 Card Functions

```javascript
// Create deck
function createDeck() {
    const deck = [];
    const suits = ['♠', '♥', '♦', '♣'];
    const ranks = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    
    for (let suit of suits) {
        for (let rank of ranks) {
            deck.push({ rank, suit });
        }
    }
    
    return deck;
}

// Shuffle deck (Fisher-Yates)
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

// Draw one card
function drawCard() {
    if (deck.length === 0) {
        deck = createDeck();
        shuffleDeck(deck);
    }
    return deck.pop();
}

// Get numeric value of card
function cardValue(rank) {
    if (rank === 'A') return 14;
    if (rank === 'K') return 13;
    if (rank === 'Q') return 12;
    if (rank === 'J') return 11;
    return parseInt(rank);
}
```

---

## 🖥️ Display Functions

```javascript
// Update entire display
function updateDisplay() {
    updateChips();
    updatePot();
    updateHands();
    updateButtons();
}

// Update chip counts
function updateChips() {
    document.getElementById('player-chips').textContent = 
        `$${gameState.playerChips}`;
    document.getElementById('dealer-chips').textContent = 
        `$${gameState.dealerChips}`;
}

// Update pot amount
function updatePot() {
    document.getElementById('pot-amount').textContent = 
        `Pot: $${gameState.pot}`;
}

// Display hand of cards
function displayHand(containerId, hand, faceDown = false) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    for (let card of hand) {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        
        if (faceDown) {
            cardDiv.textContent = '🂠';
            cardDiv.style.color = '#333';
        } else {
            const color = (card.suit === '♥' || card.suit === '♦') 
                ? 'red' : 'black';
            cardDiv.textContent = `${card.rank}${card.suit}`;
            cardDiv.style.color = color;
        }
        
        container.appendChild(cardDiv);
    }
}

// Update button states
function updateButtons() {
    const foldBtn = document.getElementById('fold-btn');
    const callBtn = document.getElementById('call-btn');
    const raiseBtn = document.getElementById('raise-btn');
    
    if (gameState.gamePhase === 'betting') {
        foldBtn.disabled = false;
        callBtn.disabled = false;
        raiseBtn.disabled = false;
    } else {
        foldBtn.disabled = true;
        callBtn.disabled = true;
        raiseBtn.disabled = true;
    }
}
```

---

## ⚠️ Common Mistakes

### ❌ Wrong
```javascript
function showdown() {
    const winner = determineWinner();
    gameState.playerChips += gameState.pot; // Always gives to player!
}
```

### ✅ Right
```javascript
function showdown() {
    const winner = determineWinner();
    
    if (winner === 'player') {
        gameState.playerChips += gameState.pot;
    } else if (winner === 'dealer') {
        gameState.dealerChips += gameState.pot;
    } else {
        // Split pot on tie
        gameState.playerChips += gameState.pot / 2;
        gameState.dealerChips += gameState.pot / 2;
    }
    
    gameState.pot = 0;
}
```

### ❌ Wrong
```javascript
function startNewRound() {
    // Forgot to reset pot!
    gameState.playerHand = [];
    gameState.dealerHand = [];
}
```

### ✅ Right
```javascript
function startNewRound() {
    gameState.pot = 0;  // ← Reset pot!
    gameState.playerHand = [];
    gameState.dealerHand = [];
    gameState.playerFolded = false;
    gameState.gamePhase = 'betting';
}
```

### ❌ Wrong
```javascript
function call() {
    // Didn't check if player has enough chips!
    gameState.playerChips -= gameState.ante;
    gameState.pot += gameState.ante;
}
```

### ✅ Right
```javascript
function call() {
    const callAmount = gameState.ante;
    
    if (gameState.playerChips < callAmount) {
        alert('Not enough chips!');
        return;
    }
    
    gameState.playerChips -= callAmount;
    gameState.pot += callAmount;
}
```

---

## 🐛 Debugging Checklist

When something goes wrong:

1. **Check Console**
   ```javascript
   console.log('Game State:', gameState);
   console.log('Winner:', determineWinner());
   ```

2. **Verify Phase**
   ```javascript
   console.log('Current phase:', gameState.gamePhase);
   ```

3. **Check Chips**
   ```javascript
   console.log('Player chips:', gameState.playerChips);
   console.log('Dealer chips:', gameState.dealerChips);
   console.log('Pot:', gameState.pot);
   ```

4. **Verify Hands**
   ```javascript
   console.log('Player hand:', gameState.playerHand);
   console.log('Dealer hand:', gameState.dealerHand);
   ```

5. **Test Winner Logic**
   ```javascript
   const playerEval = evaluateHand(gameState.playerHand);
   const dealerEval = evaluateHand(gameState.dealerHand);
   console.log('Player eval:', playerEval);
   console.log('Dealer eval:', dealerEval);
   ```

---

## 💡 Quick Tips

1. **Always Reset**: Reset pot and hands at start of each round
2. **Check Chips**: Always verify player has enough chips before betting
3. **Update Display**: Call `updateDisplay()` after every state change
4. **Handle Ties**: Don't forget to split pot on ties
5. **Disable Buttons**: Disable betting buttons during showdown
6. **Game Over**: Check if player is out of chips after each round
7. **Dealer Cards**: Keep dealer cards face down until showdown

---

## 🧪 Testing Scenarios

Test these scenarios:

- [ ] Player folds
- [ ] Player calls (player wins)
- [ ] Player calls (dealer wins)
- [ ] Player calls (tie)
- [ ] Player raises (dealer calls)
- [ ] Player raises (dealer folds)
- [ ] Player runs out of chips
- [ ] Royal flush vs royal flush
- [ ] Exact chip count match

---

## 📱 HTML Structure

```html
<div id="game-container">
    <!-- Dealer Area -->
    <div id="dealer-area">
        <div id="dealer-chips">$100</div>
        <div id="dealer-hand"></div>
    </div>
    
    <!-- Pot -->
    <div id="pot-area">
        <div id="pot-amount">Pot: $0</div>
    </div>
    
    <!-- Player Area -->
    <div id="player-area">
        <div id="player-hand"></div>
        <div id="player-chips">$100</div>
    </div>
    
    <!-- Controls -->
    <div id="controls">
        <button id="fold-btn">Fold</button>
        <button id="call-btn">Call</button>
        <button id="raise-btn">Raise</button>
    </div>
</div>
```

---

## 🎨 CSS Card Styling

```css
.card {
    width: 60px;
    height: 90px;
    background: white;
    border: 2px solid #333;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
    margin: 0 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    transition: all 0.3s ease;
}
```

---

## 🔢 Hand Rankings

```
10. Royal Flush      → A♠ K♠ Q♠ J♠ 10♠
9.  Straight Flush   → 9♥ 8♥ 7♥ 6♥ 5♥
8.  Four of a Kind   → K♦ K♣ K♥ K♠ 3♦
7.  Full House       → Q♠ Q♦ Q♥ 7♣ 7♠
6.  Flush            → K♥ 10♥ 7♥ 5♥ 3♥
5.  Straight         → 10♣ 9♦ 8♥ 7♠ 6♣
4.  Three of a Kind  → 8♠ 8♦ 8♣ K♥ 5♠
3.  Two Pair         → J♥ J♣ 4♦ 4♠ A♥
2.  Pair             → 10♠ 10♦ K♣ 8♥ 3♦
1.  High Card        → A♦ K♣ 9♠ 7♥ 4♦
```

---

**Need more help?** Check the parent guide or ask for assistance!
