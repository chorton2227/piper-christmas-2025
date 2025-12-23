# Exercise 1: Build Your JavaScript Step-by-Step 🎮

**Goal**: Create a complete `script.js` file that makes your poker game interactive.

**Time**: 90-120 minutes

**What You'll Build**:
- Card deck system (52 cards)
- Shuffle function
- Deal cards function
- Start game functionality
- Screen switching
- Interactive buttons
- Display updates

---

## 🎯 Before You Start

### Required Files:
- ✅ `index.html` (from Lesson 4.3)
- ✅ `style.css` (from Lesson 4.4)
- 📝 `script.js` (you'll create this now!)

### Required HTML IDs:
Make sure your HTML has these IDs:
- `start-btn` - Start game button
- `start-screen` - Start screen div
- `game-screen` - Game screen div
- `end-screen` - End screen div
- `player-cards` - Container for player cards
- `dealer-cards` - Container for dealer cards
- `player-chips` - Chip count display
- `pot-amount` - Pot amount display
- `fold-btn` - Fold button
- `call-btn` - Call button
- `raise-btn` - Raise button

---

## 📝 Part 1: Create JavaScript File (5 minutes)

### Step 1.1: Create the File

1. In VS Code, create new file: `script.js`
2. Save it in the same folder as `index.html`

### Step 1.2: Link JavaScript to HTML

Add this line to your HTML **before the closing `</body>` tag**:

```html
    <!-- Link JavaScript -->
    <script src="script.js"></script>
</body>
</html>
```

**Why at the bottom?** JavaScript needs the HTML to load first before it can manipulate it.

### Step 1.3: Test the Connection

Add this to your `script.js`:

```javascript
console.log('JavaScript loaded successfully!');
```

**Test it:**
1. Save `script.js`
2. Open `index.html` in browser
3. Press `F12` to open console
4. You should see: "JavaScript loaded successfully!"

✅ **Checkpoint**: Message appears in console

---

## 🎮 Part 2: Game State Setup (10 minutes)

### Step 2.1: Create Game State Object

Add this to your `script.js`:

```javascript
// ============================================
//  POKER GAME - GAME STATE
// ============================================

// Store all game information in one object
let gameState = {
    deck: [],              // Array of 52 card objects
    playerHand: [],        // Array of 5 cards
    dealerHand: [],        // Array of 5 cards
    playerChips: 1000,     // Starting chips
    dealerChips: 1000,     // Dealer chips
    pot: 0,                // Current pot amount
    currentBet: 20,        // Current bet to call
    ante: 10,              // Cost to play each hand
    gameActive: false      // Is game currently running?
};

console.log('Game state initialized:', gameState);
```

**Understanding:**
- `gameState` is one object that holds ALL game data
- This makes it easy to track and modify game information
- We can pass `gameState` to functions that need it

✅ **Checkpoint**: Console shows game state object with all properties

---

## 🃏 Part 3: Create Deck Function (15 minutes)

### Step 3.1: Define Card Structure

Add this comment to understand what we're building:

```javascript
// ============================================
//  CARD DECK SYSTEM
// ============================================

/* Card object structure:
{
    rank: 'A',      // '2'-'10', 'J', 'Q', 'K', 'A'
    suit: '♠',      // ♠, ♥, ♦, ♣
    value: 14,      // Numeric value for comparison
    color: 'black'  // 'red' or 'black'
}
*/
```

### Step 3.2: Create Deck Function

```javascript
function createDeck() {
    // Card data
    const suits = ['♠', '♥', '♦', '♣'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    
    let deck = [];
    
    // Nested loops to create all 52 cards
    for (let suit of suits) {                    // For each suit
        for (let i = 0; i < ranks.length; i++) { // For each rank
            let card = {
                rank: ranks[i],
                suit: suit,
                value: values[i],
                color: (suit === '♥' || suit === '♦') ? 'red' : 'black'
            };
            deck.push(card);
        }
    }
    
    console.log('Deck created:', deck.length, 'cards');
    return deck;
}
```

**Understanding:**
- Outer loop: 4 suits
- Inner loop: 13 ranks per suit
- Total: 4 × 13 = 52 cards
- Each card is an object with 4 properties
- Red suits: ♥ and ♦
- Black suits: ♠ and ♣

### Step 3.3: Test the Function

Add this test code temporarily:

```javascript
// TEST: Create deck
let testDeck = createDeck();
console.log('First card:', testDeck[0]);
console.log('Last card:', testDeck[51]);
console.log('Random card:', testDeck[25]);
```

**Test it:**
1. Save and refresh browser
2. Open console (F12)
3. Should see: 52 cards created
4. Should see: First card (2♠), Last card (A♣)

✅ **Checkpoint**: Deck has 52 cards, first is 2♠, last is A♣

**Remove the test code** after verifying it works.

---

## 🔀 Part 4: Shuffle Function (15 minutes)

### Step 4.1: Implement Fisher-Yates Shuffle

```javascript
function shuffleDeck(deck) {
    console.log('Shuffling deck...');
    
    // Fisher-Yates shuffle algorithm
    for (let i = deck.length - 1; i > 0; i--) {
        // Pick random index from 0 to i
        let j = Math.floor(Math.random() * (i + 1));
        
        // Swap deck[i] and deck[j]
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    
    console.log('Deck shuffled!');
    return deck;
}
```

**Understanding:**
- `Math.random()` generates random number 0-1
- `Math.random() * (i + 1)` gives 0 to i
- `Math.floor()` rounds down to integer
- `[a, b] = [b, a]` swaps values (modern JavaScript)
- Loop goes backwards from 51 to 1
- Guarantees perfectly random shuffle

### Step 4.2: Test Shuffle

```javascript
// TEST: Shuffle deck
let testDeck2 = createDeck();
console.log('Before shuffle:', testDeck2[0]);
shuffleDeck(testDeck2);
console.log('After shuffle:', testDeck2[0]);
```

**Test it:**
1. Save and refresh
2. First card should be different before/after shuffle
3. Refresh multiple times - should get different cards

✅ **Checkpoint**: First card changes each time you refresh

**Remove test code** after verifying.

---

## 🎴 Part 5: Deal Card Functions (10 minutes)

### Step 5.1: Deal Single Card

```javascript
function dealCard(deck) {
    // Remove and return last card from deck
    return deck.pop();
}
```

**Understanding:**
- `pop()` removes last item from array and returns it
- Modifies the original deck array
- Deck gets smaller each time

### Step 5.2: Deal Multiple Cards (Hand)

```javascript
function dealHand(deck, numberOfCards) {
    let hand = [];
    
    for (let i = 0; i < numberOfCards; i++) {
        let card = dealCard(deck);
        hand.push(card);
    }
    
    console.log('Dealt', numberOfCards, 'cards');
    return hand;
}
```

**Understanding:**
- Calls `dealCard()` multiple times
- Builds array of cards
- Returns the hand

### Step 5.3: Test Dealing

```javascript
// TEST: Deal cards
let testDeck3 = createDeck();
shuffleDeck(testDeck3);
console.log('Deck size before:', testDeck3.length);
let testHand = dealHand(testDeck3, 5);
console.log('Hand:', testHand);
console.log('Deck size after:', testDeck3.length);
```

**Test it:**
1. Deck should start at 52
2. After dealing 5 cards, should be 47
3. Hand should have 5 random cards

✅ **Checkpoint**: Deck goes from 52 to 47, hand has 5 cards

**Remove test code.**

---

## 🖥️ Part 6: Display Functions (20 minutes)

### Step 6.1: Create Card Element

```javascript
// ============================================
//  DISPLAY FUNCTIONS
// ============================================

function createCardElement(card) {
    // Create div element
    let cardDiv = document.createElement('div');
    
    // Add 'card' class
    cardDiv.classList.add('card');
    
    // Add color-specific class
    if (card.suit === '♥' || card.suit === '♦') {
        cardDiv.classList.add('hearts');  // Red cards
    } else {
        cardDiv.classList.add('spades');  // Black cards
    }
    
    // Add card content (rank and suit)
    cardDiv.innerHTML = `
        <span>${card.rank}</span>
        <span>${card.suit}</span>
    `;
    
    return cardDiv;
}
```

**Understanding:**
- `createElement('div')` makes new HTML element
- `classList.add()` adds CSS classes
- `innerHTML` sets content inside element
- Returns the element (not yet added to page)

### Step 6.2: Create Face-Down Card

```javascript
function createFaceDownCard() {
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'face-down');
    return cardDiv;
}
```

### Step 6.3: Display Full Hand

```javascript
function displayHand(hand, containerId) {
    // Get the container element
    let container = document.getElementById(containerId);
    
    // Clear existing cards
    container.innerHTML = '';
    
    // Add each card
    for (let card of hand) {
        let cardElement = createCardElement(card);
        container.appendChild(cardElement);
    }
    
    console.log('Displayed', hand.length, 'cards in', containerId);
}
```

**Understanding:**
- Gets container by ID
- Clears old content with `innerHTML = ''`
- Creates element for each card
- `appendChild()` adds card to container

### Step 6.4: Display Hidden Hand (Dealer)

```javascript
function displayDealerHandHidden(hand) {
    let container = document.getElementById('dealer-cards');
    container.innerHTML = '';
    
    // Show face-down cards
    for (let card of hand) {
        let cardElement = createFaceDownCard();
        container.appendChild(cardElement);
    }
    
    console.log('Displayed dealer hand (face down)');
}
```

---

## 🎬 Part 7: Screen Management (10 minutes)

### Step 7.1: Show/Hide Screen Functions

```javascript
// ============================================
//  SCREEN MANAGEMENT
// ============================================

function showStartScreen() {
    document.getElementById('start-screen').classList.add('active');
    document.getElementById('game-screen').classList.remove('active');
    document.getElementById('end-screen').classList.remove('active');
    console.log('Showing start screen');
}

function showGameScreen() {
    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('game-screen').classList.add('active');
    document.getElementById('end-screen').classList.remove('active');
    console.log('Showing game screen');
}

function showEndScreen() {
    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('game-screen').classList.remove('active');
    document.getElementById('end-screen').classList.add('active');
    console.log('Showing end screen');
}
```

**Understanding:**
- Only one screen should have `active` class at a time
- CSS hides screens without `active` class
- These functions ensure correct screen is visible

---

## 📊 Part 8: Update Display Functions (10 minutes)

### Step 8.1: Update Chip Display

```javascript
// ============================================
//  UPDATE DISPLAYS
// ============================================

function updateChipDisplay() {
    let chipElement = document.getElementById('player-chips');
    chipElement.textContent = gameState.playerChips;
    console.log('Updated chip display:', gameState.playerChips);
}

function updatePotDisplay() {
    let potElement = document.getElementById('pot-amount');
    potElement.textContent = gameState.pot;
    console.log('Updated pot display:', gameState.pot);
}
```

**Understanding:**
- `textContent` changes text inside element
- Reads from `gameState` object
- Called whenever chips or pot changes

---

## 🎮 Part 9: Start Game Function (15 minutes)

### Step 9.1: Main Start Game Function

```javascript
// ============================================
//  GAME LOGIC
// ============================================

function startGame() {
    console.log('=== STARTING NEW GAME ===');
    
    // Step 1: Create and shuffle deck
    gameState.deck = createDeck();
    gameState.deck = shuffleDeck(gameState.deck);
    
    // Step 2: Reset hands
    gameState.playerHand = [];
    gameState.dealerHand = [];
    
    // Step 3: Take ante from both players
    gameState.playerChips -= gameState.ante;
    gameState.dealerChips -= gameState.ante;
    gameState.pot = gameState.ante * 2;
    
    // Step 4: Deal cards
    gameState.playerHand = dealHand(gameState.deck, 5);
    gameState.dealerHand = dealHand(gameState.deck, 5);
    
    // Step 5: Set game as active
    gameState.gameActive = true;
    gameState.currentBet = 20;
    
    // Step 6: Update display
    showGameScreen();
    displayHand(gameState.playerHand, 'player-cards');
    displayDealerHandHidden(gameState.dealerHand);
    updateChipDisplay();
    updatePotDisplay();
    
    console.log('Game started!');
    console.log('Player hand:', gameState.playerHand);
    console.log('Deck remaining:', gameState.deck.length);
}
```

**Understanding:**
- Called when "Start Game" button clicked
- Follows logical sequence
- Updates game state
- Updates all displays
- Logs to console for debugging

---

## 🔘 Part 10: Button Event Listeners (10 minutes)

### Step 10.1: Setup Event Listeners

```javascript
// ============================================
//  EVENT LISTENERS
// ============================================

function setupEventListeners() {
    // Start button
    let startBtn = document.getElementById('start-btn');
    if (startBtn) {
        startBtn.addEventListener('click', startGame);
        console.log('Start button listener added');
    }
    
    // Fold button
    let foldBtn = document.getElementById('fold-btn');
    if (foldBtn) {
        foldBtn.addEventListener('click', fold);
        console.log('Fold button listener added');
    }
    
    // Call button
    let callBtn = document.getElementById('call-btn');
    if (callBtn) {
        callBtn.addEventListener('click', call);
        console.log('Call button listener added');
    }
    
    // Raise button
    let raiseBtn = document.getElementById('raise-btn');
    if (raiseBtn) {
        raiseBtn.addEventListener('click', raise);
        console.log('Raise button listener added');
    }
}
```

**Understanding:**
- Gets each button by ID
- `if (btn)` checks if element exists
- `addEventListener('click', function)` connects button to function
- Each button triggers different function

### Step 10.2: Placeholder Betting Functions

```javascript
// ============================================
//  BETTING FUNCTIONS (Placeholders)
// ============================================

function fold() {
    console.log('Player folded');
    alert('Fold functionality coming in Lesson 4.9!');
    // TODO: Implement in Lesson 4.9
}

function call() {
    console.log('Player called');
    alert('Call functionality coming in Lesson 4.9!');
    // TODO: Implement in Lesson 4.9
}

function raise() {
    console.log('Player raised');
    alert('Raise functionality coming in Lesson 4.9!');
    // TODO: Implement in Lesson 4.9
}
```

**Understanding:**
- These are placeholder functions
- They work (buttons click and show alerts)
- We'll add real logic in Lesson 4.9
- For now, they prove buttons are connected

---

## 🚀 Part 11: Initialize on Page Load (5 minutes)

### Step 11.1: DOMContentLoaded Event

Add this at the **TOP** of your `script.js` (after game state):

```javascript
// ============================================
//  INITIALIZE GAME
// ============================================

// Wait for page to load before running JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('=== POKER GAME LOADED ===');
    
    // Set up button click listeners
    setupEventListeners();
    
    // Update initial display
    updateChipDisplay();
    
    console.log('Game ready! Click "Start New Game" to begin.');
});
```

**Understanding:**
- `DOMContentLoaded` waits for HTML to finish loading
- Then runs our setup code
- Sets up all button listeners
- Shows initial chip count
- Now safe to manipulate DOM

---

## ✅ Part 12: Final Testing (10 minutes)

### Complete Testing Checklist:

**Open your poker game in browser and test:**

1. **Console Check**
   - [ ] Press F12 to open console
   - [ ] See "POKER GAME LOADED" message
   - [ ] See all button listeners added
   - [ ] No red error messages

2. **Start Game**
   - [ ] Click "Start New Game" button
   - [ ] See "STARTING NEW GAME" in console
   - [ ] Screen switches to game screen
   - [ ] 5 cards appear in player hand
   - [ ] 5 face-down cards appear in dealer hand
   - [ ] Chip count shows 990 (1000 - 10 ante)
   - [ ] Pot shows 20 (2 × 10 ante)

3. **Betting Buttons**
   - [ ] Click "Fold" - alert appears
   - [ ] Click "Call" - alert appears
   - [ ] Click "Raise" - alert appears
   - [ ] Check console for "Player folded" etc.

4. **Refresh Test**
   - [ ] Refresh browser (F5)
   - [ ] Start game again
   - [ ] Different cards appear (shuffle working!)
   - [ ] All functionality still works

### If Something Doesn't Work:

**Problem**: No console messages
- **Solution**: Check if `script.js` is linked in HTML
- Check: `<script src="script.js"></script>` before `</body>`

**Problem**: "getElementById is null" error
- **Solution**: Check HTML has correct IDs
- Make sure ID spelling matches exactly

**Problem**: Cards not showing
- **Solution**: Check CSS has `.card` class styled
- Check container IDs: `player-cards`, `dealer-cards`

**Problem**: Buttons don't work
- **Solution**: Check button IDs match
- Check `setupEventListeners()` is called

---

## 🎉 Congratulations!

You've built a working poker game with:

✅ 52-card deck system  
✅ Fisher-Yates shuffle algorithm  
✅ Deal cards functionality  
✅ Interactive buttons  
✅ Screen switching  
✅ Display updates  
✅ Game state management  

### What You've Learned:

- JavaScript fundamentals
- DOM manipulation
- Event listeners
- Arrays and objects
- Functions and algorithms
- Debugging with console

---

## 📝 Reflection Questions

**Answer these in your student workspace:**

1. **What does `createDeck()` return?**
   - My answer: ___________________________________________

2. **Why do we shuffle the deck every game?**
   - My answer: ___________________________________________

3. **What does `pop()` do to an array?**
   - My answer: ___________________________________________

4. **What's the difference between `textContent` and `innerHTML`?**
   - My answer: ___________________________________________

5. **Why do we use `addEventListener` instead of `onclick`?**
   - My answer: ___________________________________________

---

## 🚀 Optional Challenges

**If you finish early, try these:**

### Challenge 1: Add a "New Game" Button on End Screen
- Make it call `startGame()` when clicked

### Challenge 2: Show Deck Count
- Display "Cards Remaining: X" on game screen
- Update it when cards are dealt

### Challenge 3: Add Card Dealing Animation
- Add CSS class to cards when dealt
- Use timeout to deal cards one at a time

### Challenge 4: Validate Chip Count
- Don't allow game start if player has < 10 chips
- Show alert: "Not enough chips!"

### Challenge 5: Console Log Every Action
- Add more detailed console messages
- Track game flow for debugging

---

## 📸 Screenshot Checklist

Take screenshots of:
- [ ] Game start screen
- [ ] Game screen with cards dealt
- [ ] Console showing all messages
- [ ] Alert from betting buttons

**Save as**: `exercise-1-complete.png`

---

## ✅ Completion Checklist

- [ ] `script.js` file created
- [ ] All functions implemented
- [ ] Game state object working
- [ ] Deck creates 52 cards
- [ ] Shuffle works (cards change each game)
- [ ] Cards deal correctly
- [ ] Cards display on screen
- [ ] Chip count updates
- [ ] Pot display updates
- [ ] Start button works
- [ ] Betting buttons connected (even if placeholder)
- [ ] Console shows all messages
- [ ] No errors in console
- [ ] Tested multiple times
- [ ] Screenshots taken
- [ ] Reflection questions answered

---

**Time to move to Exercise 2: JavaScript Experiments!** 🎮✨

**Teacher/Parent Sign-Off:**

Student completed exercise: _________________ Date: _______

Notes: _________________________________________________
