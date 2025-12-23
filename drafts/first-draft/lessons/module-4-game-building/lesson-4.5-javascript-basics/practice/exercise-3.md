# Exercise 3: Build Custom Card Games 🎮

**Goal**: Apply your JavaScript skills to create different card games.

**Time**: 60-90 minutes

**Choose ONE option:**
- Option A: Blackjack (21)
- Option B: War (Card Battle)
- Option C: Go Fish
- Option D: Your own custom game

---

## 🎯 Option A: Blackjack (21)

### Game Rules:
- Goal: Get cards totaling 21 (or close without going over)
- Aces = 1 or 11, Face cards = 10, Number cards = face value
- Player gets 2 cards, dealer gets 2 cards (1 face down)
- Player can "Hit" (take card) or "Stand" (stop)
- Dealer must hit until reaching 17 or higher
- Closest to 21 wins!

### Step 1: Modify Card Values

```javascript
function createBlackjackDeck() {
    const suits = ['♠', '♥', '♦', '♣'];
    const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    
    let deck = [];
    
    for (let suit of suits) {
        for (let rank of ranks) {
            let value;
            
            // Blackjack-specific values
            if (rank === 'A') {
                value = 11;  // Ace worth 11 (can be 1 if over 21)
            } else if (['J', 'Q', 'K'].includes(rank)) {
                value = 10;  // Face cards worth 10
            } else {
                value = parseInt(rank);  // Number cards
            }
            
            deck.push({
                rank: rank,
                suit: suit,
                value: value,
                color: (suit === '♥' || suit === '♦') ? 'red' : 'black'
            });
        }
    }
    
    return deck;
}
```

### Step 2: Calculate Hand Total

```javascript
function calculateBlackjackTotal(hand) {
    let total = 0;
    let aces = 0;
    
    // Add up all cards
    for (let card of hand) {
        total += card.value;
        if (card.rank === 'A') {
            aces++;
        }
    }
    
    // Adjust for aces if over 21
    while (total > 21 && aces > 0) {
        total -= 10;  // Count ace as 1 instead of 11
        aces--;
    }
    
    return total;
}

// Test
let hand = [
    { rank: 'A', suit: '♠', value: 11 },
    { rank: 'K', suit: '♥', value: 10 }
];
console.log('Blackjack!', calculateBlackjackTotal(hand));  // 21
```

### Step 3: Check for Bust

```javascript
function isBust(hand) {
    return calculateBlackjackTotal(hand) > 21;
}

function isBlackjack(hand) {
    return hand.length === 2 && calculateBlackjackTotal(hand) === 21;
}
```

### Step 4: Hit and Stand Functions

```javascript
function hit() {
    if (!gameState.gameActive) return;
    
    // Deal one card to player
    let card = dealCard(gameState.deck);
    gameState.playerHand.push(card);
    
    // Update display
    displayHand(gameState.playerHand, 'player-cards');
    updateScoreDisplay();
    
    // Check for bust
    if (isBust(gameState.playerHand)) {
        console.log('BUST! You went over 21');
        endGame('lose');
    }
}

function stand() {
    if (!gameState.gameActive) return;
    
    console.log('Player stands at', calculateBlackjackTotal(gameState.playerHand));
    
    // Dealer plays
    dealerPlay();
}

function dealerPlay() {
    // Reveal dealer cards
    displayHand(gameState.dealerHand, 'dealer-cards');
    
    // Dealer must hit until 17 or higher
    while (calculateBlackjackTotal(gameState.dealerHand) < 17) {
        let card = dealCard(gameState.deck);
        gameState.dealerHand.push(card);
        console.log('Dealer hits');
        displayHand(gameState.dealerHand, 'dealer-cards');
    }
    
    // Determine winner
    let playerTotal = calculateBlackjackTotal(gameState.playerHand);
    let dealerTotal = calculateBlackjackTotal(gameState.dealerHand);
    
    console.log('Player:', playerTotal, 'Dealer:', dealerTotal);
    
    if (dealerTotal > 21) {
        console.log('Dealer busts! You win!');
        endGame('win');
    } else if (playerTotal > dealerTotal) {
        console.log('You win!');
        endGame('win');
    } else if (dealerTotal > playerTotal) {
        console.log('Dealer wins');
        endGame('lose');
    } else {
        console.log('Push (tie)');
        endGame('tie');
    }
}
```

### Step 5: Update HTML

Your HTML needs:
```html
<div class="score-display">
    <p>Your Total: <span id="player-score">0</span></p>
    <p>Dealer Total: <span id="dealer-score">?</span></p>
</div>

<div class="game-controls">
    <button class="btn btn-call" id="hit-btn">Hit</button>
    <button class="btn btn-fold" id="stand-btn">Stand</button>
</div>
```

### Step 6: Update Score Display

```javascript
function updateScoreDisplay() {
    let playerScore = calculateBlackjackTotal(gameState.playerHand);
    document.getElementById('player-score').textContent = playerScore;
    
    // Only show dealer score after stand
    if (!gameState.gameActive) {
        let dealerScore = calculateBlackjackTotal(gameState.dealerHand);
        document.getElementById('dealer-score').textContent = dealerScore;
    }
}
```

### Complete Blackjack Starter Code

```javascript
// Copy this into your script.js and modify!

let gameState = {
    deck: [],
    playerHand: [],
    dealerHand: [],
    playerChips: 1000,
    pot: 0,
    gameActive: false
};

function startBlackjackGame() {
    // Create and shuffle deck
    gameState.deck = createBlackjackDeck();
    shuffleDeck(gameState.deck);
    
    // Reset hands
    gameState.playerHand = [];
    gameState.dealerHand = [];
    
    // Deal initial cards
    gameState.playerHand.push(dealCard(gameState.deck));
    gameState.dealerHand.push(dealCard(gameState.deck));
    gameState.playerHand.push(dealCard(gameState.deck));
    gameState.dealerHand.push(dealCard(gameState.deck));
    
    gameState.gameActive = true;
    
    // Display
    displayHand(gameState.playerHand, 'player-cards');
    displayDealerHandPartial(gameState.dealerHand);  // Show 1 card
    updateScoreDisplay();
    
    // Check for immediate blackjack
    if (isBlackjack(gameState.playerHand)) {
        console.log('BLACKJACK!');
        stand();  // Dealer plays
    }
}

function displayDealerHandPartial(hand) {
    let container = document.getElementById('dealer-cards');
    container.innerHTML = '';
    
    // Show first card
    container.appendChild(createCardElement(hand[0]));
    
    // Hide remaining cards
    for (let i = 1; i < hand.length; i++) {
        container.appendChild(createFaceDownCard());
    }
}
```

---

## ⚔️ Option B: War (Card Battle Game)

### Game Rules:
- Each player gets half the deck
- Both flip top card
- Higher card wins both cards
- Ties start a "war": each player puts 3 cards down, then flips 4th
- Whoever has cards left wins!

### Card War Starter Code:

```javascript
let gameState = {
    playerDeck: [],
    dealerDeck: [],
    playerScore: 0,
    dealerScore: 0,
    inWar: false
};

function startWarGame() {
    // Create and shuffle deck
    let fullDeck = createDeck();
    shuffleDeck(fullDeck);
    
    // Split deck in half
    gameState.playerDeck = fullDeck.slice(0, 26);
    gameState.dealerDeck = fullDeck.slice(26, 52);
    
    gameState.playerScore = 26;
    gameState.dealerScore = 26;
    
    console.log('War game started! Each player has 26 cards');
    updateDeckCounts();
}

function playRound() {
    if (gameState.playerDeck.length === 0) {
        console.log('Dealer wins the game!');
        endGame('lose');
        return;
    }
    
    if (gameState.dealerDeck.length === 0) {
        console.log('You win the game!');
        endGame('win');
        return;
    }
    
    // Both players flip card
    let playerCard = gameState.playerDeck.shift();
    let dealerCard = gameState.dealerDeck.shift();
    
    console.log(`You: ${playerCard.rank}${playerCard.suit}`);
    console.log(`Dealer: ${dealerCard.rank}${dealerCard.suit}`);
    
    // Display cards
    displayBattleCards(playerCard, dealerCard);
    
    // Compare
    if (playerCard.value > dealerCard.value) {
        console.log('You win this round!');
        gameState.playerDeck.push(playerCard, dealerCard);
        gameState.playerScore += 2;
        gameState.dealerScore -= 2;
    } else if (dealerCard.value > playerCard.value) {
        console.log('Dealer wins this round');
        gameState.dealerDeck.push(playerCard, dealerCard);
        gameState.dealerScore += 2;
        gameState.playerScore -= 2;
    } else {
        console.log('WAR!');
        startWar([playerCard], [dealerCard]);
    }
    
    updateDeckCounts();
}

function startWar(playerPile, dealerPile) {
    // Each player puts 3 cards face down
    for (let i = 0; i < 3; i++) {
        if (gameState.playerDeck.length > 0) {
            playerPile.push(gameState.playerDeck.shift());
        }
        if (gameState.dealerDeck.length > 0) {
            dealerPile.push(gameState.dealerDeck.shift());
        }
    }
    
    // Flip 4th card
    if (gameState.playerDeck.length === 0 || gameState.dealerDeck.length === 0) {
        // Someone ran out of cards
        if (gameState.playerDeck.length === 0) {
            gameState.dealerDeck.push(...playerPile, ...dealerPile);
            console.log('You ran out of cards! Dealer wins war');
        } else {
            gameState.playerDeck.push(...playerPile, ...dealerPile);
            console.log('Dealer ran out! You win war');
        }
        return;
    }
    
    let playerWarCard = gameState.playerDeck.shift();
    let dealerWarCard = gameState.dealerDeck.shift();
    
    playerPile.push(playerWarCard);
    dealerPile.push(dealerWarCard);
    
    console.log(`War cards - You: ${playerWarCard.rank}${playerWarCard.suit}, Dealer: ${dealerWarCard.rank}${dealerWarCard.suit}`);
    
    // Compare war cards
    if (playerWarCard.value > dealerWarCard.value) {
        console.log('You win the war!');
        gameState.playerDeck.push(...playerPile, ...dealerPile);
    } else if (dealerWarCard.value > playerWarCard.value) {
        console.log('Dealer wins the war');
        gameState.dealerDeck.push(...playerPile, ...dealerPile);
    } else {
        console.log('Another war!');
        startWar(playerPile, dealerPile);
    }
}

function updateDeckCounts() {
    document.getElementById('player-deck-count').textContent = gameState.playerDeck.length;
    document.getElementById('dealer-deck-count').textContent = gameState.dealerDeck.length;
}
```

---

## 🐟 Option C: Go Fish

### Game Rules:
- Each player gets 5 cards
- Ask opponent for a rank you have
- If they have it, they give you all cards of that rank
- If not, "Go Fish" - draw a card
- Make sets of 4 (four of a kind)
- Most sets wins!

### Go Fish Starter Code:

```javascript
let gameState = {
    deck: [],
    playerHand: [],
    dealerHand: [],
    playerSets: [],
    dealerSets: []
};

function startGoFishGame() {
    gameState.deck = createDeck();
    shuffleDeck(gameState.deck);
    
    // Deal 5 cards to each player
    gameState.playerHand = dealHand(gameState.deck, 5);
    gameState.dealerHand = dealHand(gameState.deck, 5);
    
    checkForSets(gameState.playerHand, gameState.playerSets);
    checkForSets(gameState.dealerHand, gameState.dealerSets);
    
    displayHand(gameState.playerHand, 'player-cards');
    updateSetsDisplay();
}

function askForRank(rank) {
    console.log(`You ask: "Do you have any ${rank}s?"`);
    
    // Check if dealer has that rank
    let dealerCards = gameState.dealerHand.filter(card => card.rank === rank);
    
    if (dealerCards.length > 0) {
        console.log(`Yes! Dealer gives you ${dealerCards.length} ${rank}(s)`);
        
        // Transfer cards
        gameState.playerHand.push(...dealerCards);
        gameState.dealerHand = gameState.dealerHand.filter(card => card.rank !== rank);
        
        // Check for new sets
        checkForSets(gameState.playerHand, gameState.playerSets);
        
        displayHand(gameState.playerHand, 'player-cards');
        updateSetsDisplay();
        
        // Player gets another turn
    } else {
        console.log('Go Fish!');
        let card = dealCard(gameState.deck);
        gameState.playerHand.push(card);
        console.log(`You drew: ${card.rank}${card.suit}`);
        
        displayHand(gameState.playerHand, 'player-cards');
        
        // Dealer's turn
        setTimeout(dealerTurn, 1000);
    }
}

function checkForSets(hand, setsArray) {
    let rankCounts = {};
    
    // Count each rank
    for (let card of hand) {
        rankCounts[card.rank] = (rankCounts[card.rank] || 0) + 1;
    }
    
    // Find sets of 4
    for (let rank in rankCounts) {
        if (rankCounts[rank] === 4) {
            console.log(`Set of ${rank}s completed!`);
            
            // Remove from hand
            hand = hand.filter(card => card.rank !== rank);
            
            // Add to sets
            setsArray.push(rank);
        }
    }
    
    return hand;
}

function dealerTurn() {
    if (gameState.dealerHand.length === 0) return;
    
    // Pick random card from dealer's hand
    let randomCard = gameState.dealerHand[Math.floor(Math.random() * gameState.dealerHand.length)];
    let rank = randomCard.rank;
    
    console.log(`Dealer asks: "Do you have any ${rank}s?"`);
    
    let playerCards = gameState.playerHand.filter(card => card.rank === rank);
    
    if (playerCards.length > 0) {
        console.log(`You give dealer ${playerCards.length} ${rank}(s)`);
        gameState.dealerHand.push(...playerCards);
        gameState.playerHand = gameState.playerHand.filter(card => card.rank !== rank);
        
        checkForSets(gameState.dealerHand, gameState.dealerSets);
        displayHand(gameState.playerHand, 'player-cards');
        updateSetsDisplay();
        
        // Dealer goes again
        setTimeout(dealerTurn, 1000);
    } else {
        console.log('"Go Fish!"');
        let card = dealCard(gameState.deck);
        gameState.dealerHand.push(card);
        
        // Player's turn
    }
}

function updateSetsDisplay() {
    document.getElementById('player-sets').textContent = gameState.playerSets.length;
    document.getElementById('dealer-sets').textContent = gameState.dealerSets.length;
}
```

---

## 🎨 Option D: Create Your Own Game!

### Ideas:
1. **Memory Match** - Flip two cards, match pairs
2. **Solitaire** - Classic single-player card sorting
3. **Crazy Eights** - Discard matching rank or suit
4. **Speed** - Fast-paced matching game
5. **52 Pickup** (joke game!) - Cards scatter, click to collect

### Custom Game Template:

```javascript
// 1. Define your game state
let gameState = {
    // What data does your game need?
};

// 2. Start game function
function startGame() {
    // Initialize game
}

// 3. Main game play function
function playTurn() {
    // What happens each turn?
}

// 4. Check win condition
function checkWinner() {
    // How do you know when game is over?
}

// 5. End game function
function endGame(result) {
    // What happens when game ends?
}
```

---

## ✅ Completion Requirements

### For whichever game you chose:

- [ ] Game starts when button clicked
- [ ] Deck creates and shuffles properly
- [ ] Cards deal correctly
- [ ] Game rules implemented
- [ ] Win/lose conditions work
- [ ] Score/status displays update
- [ ] Console logs show game flow
- [ ] Can play multiple rounds
- [ ] No errors in console
- [ ] HTML updated for your game
- [ ] CSS styled (optional but nice!)

---

## 📋 Documentation Template

**Create a file called `GAME_GUIDE.md`:**

```markdown
# [Your Game Name]

## Rules
[Explain how to play]

## Code Structure
- `startGame()` - [What it does]
- `playTurn()` - [What it does]
- [List other key functions]

## Game State
```javascript
{
    // Explain each property
}
```

## Challenges Faced
1. [Problem 1]: [How you solved it]
2. [Problem 2]: [How you solved it]

## What I Learned
- [Lesson 1]
- [Lesson 2]

## Future Improvements
- [Idea 1]
- [Idea 2]
```

---

## 🎓 What You've Mastered

✅ Game logic implementation  
✅ State management  
✅ Function composition  
✅ Condition checking  
✅ Turn-based systems  
✅ Win/lose conditions  
✅ Custom algorithms  

**You've built a complete card game from scratch!** 🎉

---

**Teacher/Parent Sign-Off:**

Student completed: Option _____ Game: _______________________

Date: ____________

Notes: _________________________________________________
