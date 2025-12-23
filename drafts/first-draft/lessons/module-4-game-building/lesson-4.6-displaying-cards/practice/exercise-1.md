# Exercise 1: Add All Animations 🎬

**Goal**: Implement complete animation system for your poker game.

**Time**: 60-90 minutes

**What You'll Build:**
- Card dealing animations
- Card flipping animations
- Winning card highlights
- Message overlays
- Smooth transitions

---

## 🎯 Part 1: CSS Animations (20 minutes)

### Step 1: Add Animation Keyframes

Add these to your `style.css`:

```css
/* ===================================
   CARD ANIMATIONS
   =================================== */

/* Card dealing animation */
@keyframes dealCard {
    0% {
        transform: translateY(-200px) rotateZ(-10deg);
        opacity: 0;
    }
    60% {
        transform: translateY(10px) rotateZ(2deg);
    }
    100% {
        transform: translateY(0) rotateZ(0);
        opacity: 1;
    }
}

/* Card flip animation */
@keyframes flipCard {
    0% {
        transform: rotateY(0deg);
    }
    50% {
        transform: rotateY(90deg);
    }
    100% {
        transform: rotateY(180deg);
    }
}

/* Winning card highlight */
@keyframes highlight {
    0%, 100% {
        transform: scale(1);
        box-shadow: 0 4px 8px rgba(255, 215, 0, 0.3);
    }
    50% {
        transform: scale(1.1);
        box-shadow: 0 8px 20px rgba(255, 215, 0, 0.8);
    }
}

/* Fade in animation */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

### Step 2: Add Animation Classes

```css
/* Apply animations to cards */
.card.dealing {
    animation: dealCard 0.5s ease-out;
}

.card.flipping {
    animation: flipCard 0.6s ease-in-out;
    transform-style: preserve-3d;
}

.card.winning {
    animation: highlight 1s ease-in-out infinite;
    border: 3px solid #ffd700;
    z-index: 5;
}

.fade-in {
    animation: fadeIn 0.5s ease-out;
}
```

### Step 3: Enhanced Card Hover

```css
.card {
    transition: all 0.3s ease;
    cursor: pointer;
}

.card:hover {
    transform: translateY(-15px) scale(1.05);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
    z-index: 10;
}

.card.face-down:hover {
    transform: translateY(-5px);
    cursor: default;
}
```

**✅ Checkpoint:** Save CSS and refresh browser. Cards should have hover effect.

---

## 💬 Part 2: Message Overlay (15 minutes)

### Step 4: Add Message HTML

Add this to your HTML (inside `<body>`, after all screens):

```html
<!-- Message Overlay -->
<div id="message-overlay" class="message-overlay">
    <div class="message-content">
        <p id="message-text">Message goes here</p>
    </div>
</div>
```

### Step 5: Style Message Overlay

Add to your CSS:

```css
/* ===================================
   MESSAGE OVERLAY
   =================================== */

.message-overlay {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.95);
    color: white;
    padding: 40px 80px;
    border-radius: 20px;
    font-size: 2.5em;
    font-weight: bold;
    z-index: 1000;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
    text-align: center;
    border: 3px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}

.message-overlay.show {
    opacity: 1;
}

.message-content {
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}
```

### Step 6: JavaScript Message Functions

Add to your `script.js`:

```javascript
// ===================================
// MESSAGE DISPLAY FUNCTIONS
// ===================================

function showMessage(text, duration = 2000) {
    let overlay = document.getElementById('message-overlay');
    let messageText = document.getElementById('message-text');
    
    if (!overlay || !messageText) {
        console.error('Message overlay not found');
        return;
    }
    
    messageText.textContent = text;
    overlay.classList.add('show');
    
    console.log('📢 Message:', text);
    
    // Auto-hide after duration (if duration > 0)
    if (duration > 0) {
        setTimeout(() => {
            hideMessage();
        }, duration);
    }
}

function hideMessage() {
    let overlay = document.getElementById('message-overlay');
    if (overlay) {
        overlay.classList.remove('show');
    }
}
```

**✅ Checkpoint:** Test in console:
```javascript
showMessage('Hello!', 3000);
```

---

## 🎴 Part 3: Animated Card Display (25 minutes)

### Step 7: Helper Sleep Function

Add this utility function:

```javascript
// ===================================
// UTILITY FUNCTIONS
// ===================================

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
```

### Step 8: Animated Display Function

Add this improved version:

```javascript
// ===================================
// ANIMATED DISPLAY FUNCTIONS
// ===================================

function displayHandAnimated(hand, containerId, delay = 200) {
    let container = document.getElementById(containerId);
    
    if (!container) {
        console.error('Container not found:', containerId);
        return;
    }
    
    container.innerHTML = '';
    
    // Deal each card with staggered timing
    hand.forEach((card, index) => {
        setTimeout(() => {
            let cardElement = createCardElement(card);
            cardElement.classList.add('dealing');
            container.appendChild(cardElement);
            
            // Play card deal sound (if you have one)
            // playSound('cardDeal');
            
            // Remove animation class after it completes
            setTimeout(() => {
                cardElement.classList.remove('dealing');
            }, 500);
            
            console.log(`🎴 Card ${index + 1} dealt:`, card.rank + card.suit);
            
        }, index * delay);
    });
}

function displayDealerHandAnimatedHidden(hand) {
    let container = document.getElementById('dealer-cards');
    
    if (!container) {
        console.error('Dealer cards container not found');
        return;
    }
    
    container.innerHTML = '';
    
    // Deal each face-down card with delay
    hand.forEach((card, index) => {
        setTimeout(() => {
            let faceDownCard = createFaceDownCard();
            faceDownCard.classList.add('dealing');
            container.appendChild(faceDownCard);
            
            setTimeout(() => {
                faceDownCard.classList.remove('dealing');
            }, 500);
            
        }, index * 200);
    });
}
```

**✅ Checkpoint:** Cards should now deal one at a time with animation.

---

## 🔄 Part 4: Card Flipping (20 minutes)

### Step 9: Flip Animation Function

```javascript
function flipCards(containerId, cards) {
    let container = document.getElementById(containerId);
    let cardElements = container.querySelectorAll('.card');
    
    console.log('🔄 Flipping cards...');
    
    cardElements.forEach((cardElement, index) => {
        setTimeout(() => {
            // Add flip animation
            cardElement.classList.add('flipping');
            
            // Change content midway through flip (when card is edge-on)
            setTimeout(() => {
                // Remove face-down class
                cardElement.classList.remove('face-down');
                
                // Update card content
                let card = cards[index];
                cardElement.innerHTML = '';
                
                let rankSpan = document.createElement('span');
                rankSpan.className = 'rank';
                rankSpan.textContent = card.rank;
                
                let suitSpan = document.createElement('span');
                suitSpan.className = 'suit';
                suitSpan.textContent = card.suit;
                
                cardElement.appendChild(rankSpan);
                cardElement.appendChild(suitSpan);
                cardElement.className = `card ${card.color}`;
                
            }, 300);  // Halfway through 600ms flip animation
            
            // Remove animation class after completion
            setTimeout(() => {
                cardElement.classList.remove('flipping');
            }, 600);
            
        }, index * 150);  // Stagger flips by 150ms
    });
}
```

**✅ Checkpoint:** Test flipping in console (after dealing cards):
```javascript
flipCards('dealer-cards', gameState.dealerHand);
```

---

## ✨ Part 5: Highlighting Winners (15 minutes)

### Step 10: Highlight Functions

```javascript
function highlightWinningCards(containerId, indices) {
    let container = document.getElementById(containerId);
    let cardElements = container.querySelectorAll('.card');
    
    indices.forEach(index => {
        if (cardElements[index]) {
            cardElements[index].classList.add('winning');
            console.log(`✨ Card ${index} highlighted`);
        }
    });
}

function highlightAllCards(containerId) {
    let container = document.getElementById(containerId);
    let cardElements = container.querySelectorAll('.card');
    
    cardElements.forEach(card => {
        card.classList.add('winning');
    });
    
    console.log(`✨ All cards in ${containerId} highlighted`);
}

function clearHighlights(containerId) {
    let container = document.getElementById(containerId);
    let cardElements = container.querySelectorAll('.card');
    
    cardElements.forEach(card => {
        card.classList.remove('winning');
    });
}

function clearAllHighlights() {
    clearHighlights('player-cards');
    clearHighlights('dealer-cards');
}
```

**✅ Checkpoint:** Test highlighting:
```javascript
highlightAllCards('player-cards');  // Should pulse with gold glow
```

---

## 🎬 Part 6: Button Control (10 minutes)

### Step 11: Button Enable/Disable

```javascript
function disableButtons() {
    let buttons = document.querySelectorAll('.game-controls button');
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = '0.5';
        btn.style.cursor = 'not-allowed';
    });
    console.log('🔒 Buttons disabled');
}

function enableButtons() {
    let buttons = document.querySelectorAll('.game-controls button');
    buttons.forEach(btn => {
        btn.disabled = false;
        btn.style.opacity = '1';
        btn.style.cursor = 'pointer';
    });
    console.log('🔓 Buttons enabled');
}
```

---

## 🎮 Part 7: Updated Game Flow (20 minutes)

### Step 12: Animated Start Game

Replace your `startGame()` function with this animated version:

```javascript
async function startGame() {
    console.log('═══════════════════════════════════════');
    console.log('    🎬 STARTING ANIMATED POKER GAME    ');
    console.log('═══════════════════════════════════════');
    
    // Disable buttons during animations
    disableButtons();
    clearAllHighlights();
    
    // Create and shuffle deck
    console.log('📦 Creating deck...');
    gameState.deck = createDeck();
    shuffleDeck(gameState.deck);
    
    // Reset hands
    gameState.playerHand = [];
    gameState.dealerHand = [];
    
    // Take ante
    console.log('💰 Taking ante...');
    if (gameState.playerChips >= gameState.ante && gameState.dealerChips >= gameState.ante) {
        gameState.playerChips -= gameState.ante;
        gameState.dealerChips -= gameState.ante;
        gameState.pot = gameState.ante * 2;
    } else {
        alert('Not enough chips to play!');
        enableButtons();
        return;
    }
    
    // Deal cards to hands
    gameState.playerHand = dealHand(gameState.deck, 5);
    gameState.dealerHand = dealHand(gameState.deck, 5);
    gameState.gameActive = true;
    
    // Show game screen
    showGameScreen();
    updateChipDisplay();
    updatePotDisplay();
    
    // Wait for screen transition
    await sleep(300);
    
    // Show dealing message
    showMessage('Dealing cards...', 0);
    await sleep(1000);
    hideMessage();
    
    // Deal player cards with animation
    console.log('🎴 Dealing player cards...');
    displayHandAnimated(gameState.playerHand, 'player-cards', 200);
    await sleep(1400);  // Wait for 5 cards @ 200ms each + buffer
    
    // Deal dealer cards face-down
    console.log('🎴 Dealing dealer cards...');
    displayDealerHandAnimatedHidden(gameState.dealerHand);
    await sleep(1400);
    
    // Enable buttons
    enableButtons();
    
    console.log('✅ Game ready! Your turn!');
    console.log('═══════════════════════════════════════');
}
```

### Step 13: Animated Reveal

Replace your `revealAndCompare()` function:

```javascript
async function revealAndCompare() {
    console.log('═══════════════════════════════════════');
    console.log('    🎭 REVEALING CARDS (ANIMATED)    ');
    console.log('═══════════════════════════════════════');
    
    disableButtons();
    gameState.gameActive = false;
    
    // Show revealing message
    showMessage('Revealing dealer cards...', 0);
    await sleep(1000);
    hideMessage();
    
    // Flip dealer cards
    console.log('🔄 Flipping dealer cards...');
    flipCards('dealer-cards', gameState.dealerHand);
    await sleep(1200);  // Wait for flips to complete
    
    // Calculate hand values
    let playerValue = calculateHandValue(gameState.playerHand);
    let dealerValue = calculateHandValue(gameState.dealerHand);
    
    console.log('Player value:', playerValue);
    console.log('Dealer value:', dealerValue);
    
    await sleep(500);
    
    // Determine and show winner
    let result;
    if (playerValue > dealerValue) {
        console.log('🎉 Player wins!');
        highlightAllCards('player-cards');
        showMessage('You Win! 🎉', 2000);
        gameState.playerChips += gameState.pot;
        result = 'win';
    } else if (dealerValue > playerValue) {
        console.log('😔 Dealer wins');
        highlightAllCards('dealer-cards');
        showMessage('Dealer Wins 😔', 2000);
        gameState.dealerChips += gameState.pot;
        result = 'lose';
    } else {
        console.log('🤝 Push (tie)');
        showMessage('Push (Tie) 🤝', 2000);
        gameState.playerChips += gameState.pot / 2;
        gameState.dealerChips += gameState.pot / 2;
        result = 'tie';
    }
    
    gameState.pot = 0;
    
    // Update displays
    updateChipDisplay();
    updatePotDisplay();
    
    await sleep(2500);
    
    // Show end screen
    hideMessage();
    showEndScreen(result);
    
    console.log('═══════════════════════════════════════');
}
```

**✅ Checkpoint:** Play a complete game. Animations should flow smoothly!

---

## 🧪 Part 8: Testing (10 minutes)

### Test Checklist:

Run through these tests:

- [ ] **Start game**: Cards deal one at a time
- [ ] **Message appears**: "Dealing cards..." shows and hides
- [ ] **Buttons disabled**: Can't click during dealing
- [ ] **Buttons enabled**: Can click after dealing completes
- [ ] **Call button**: Dealer cards flip one at a time
- [ ] **Winner highlight**: Winning hand pulses with gold glow
- [ ] **Win message**: "You Win!" appears
- [ ] **Smooth flow**: No jarring transitions
- [ ] **Console clean**: No errors in console (F12)
- [ ] **Play again**: Works smoothly

### Debug Common Issues:

**Issue: Cards don't animate**
```javascript
// Check: Is animation class being added?
console.log('Card classes:', cardElement.classList);
// Should include 'dealing' temporarily
```

**Issue: Timing feels off**
```javascript
// Adjust delays:
displayHandAnimated(hand, container, 150);  // Faster
displayHandAnimated(hand, container, 300);  // Slower
```

**Issue: Message doesn't disappear**
```javascript
// Check: Is hideMessage being called?
showMessage('Test', 2000);  // Should auto-hide after 2 seconds
```

---

## ✅ Completion Checklist

- [ ] All CSS animations added
- [ ] Message overlay created and styled
- [ ] Message functions working
- [ ] Sleep utility function added
- [ ] Animated display functions created
- [ ] Flip animation function working
- [ ] Highlight functions implemented
- [ ] Button disable/enable functions added
- [ ] Start game function updated with animations
- [ ] Reveal and compare function animated
- [ ] Tested all animations work smoothly
- [ ] No errors in console
- [ ] Game flows smoothly from start to finish

---

## 🎓 What You've Accomplished

✅ Card dealing animations  
✅ Card flipping animations  
✅ Winning card highlights  
✅ Message overlay system  
✅ Button control during animations  
✅ Smooth animation sequences  
✅ Professional game flow  

**Your poker game now has professional-quality animations!** 🎉

---

## 📝 Reflection Questions

1. **What's the difference between CSS animations and JavaScript setTimeout?**
   - My answer: _____________________________________________

2. **Why do we disable buttons during animations?**
   - My answer: _____________________________________________

3. **How does async/await help with animation timing?**
   - My answer: _____________________________________________

4. **What would happen if we didn't use delays between cards?**
   - My answer: _____________________________________________

---

**Next**: Exercise 2 - Create custom animation effects!

**Parent/Teacher Sign-Off:**

Student completed exercise: _____ Date: _______

Animations working smoothly: ☐ Yes ☐ Needs adjustment

Notes: ___________________________________________________
