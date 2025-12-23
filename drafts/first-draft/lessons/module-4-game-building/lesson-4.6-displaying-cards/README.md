# Lesson 4.6: Displaying Cards (Advanced) 🎴✨

**Make your poker game visually stunning with animations and effects!**

---

## 📚 Lesson Overview

**Duration:** 90-120 minutes  
**Difficulty:** Intermediate  
**Prerequisites:** Lessons 4.1-4.5 complete

### What You'll Learn

By the end of this lesson, you'll be able to:
- ✅ Animate cards dealing one at a time
- ✅ Flip cards from face-down to face-up
- ✅ Highlight winning cards
- ✅ Add smooth transitions between game states
- ✅ Create card hover effects
- ✅ Display hand rankings (e.g., "Pair of Kings")
- ✅ Add visual feedback for player actions
- ✅ Implement staggered animations

---

## 🎯 Why Advanced Card Display Matters

**Basic vs Advanced:**

**Basic (Lesson 4.5):**
```javascript
// Cards just appear instantly
container.appendChild(cardElement);
```

**Advanced (This Lesson):**
```javascript
// Cards slide in one at a time with delays
setTimeout(() => {
    cardElement.classList.add('deal-animation');
    container.appendChild(cardElement);
}, index * 200);  // 200ms delay between each card
```

**The difference:** Your game goes from functional to professional! 🚀

---

## 🎨 Part 1: CSS Animations for Cards

### Understanding CSS Animations

CSS animations have two parts:
1. **@keyframes** - Defines the animation steps
2. **animation property** - Applies the animation to elements

### Basic Animation Structure

```css
/* Define the animation */
@keyframes slidein {
    from {
        transform: translateX(-100px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

/* Apply to element */
.card {
    animation: slidein 0.5s ease-out;
}
```

### Card Deal Animation

Add this to your CSS:

```css
/* Card starts off-screen and slides in */
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

.card.dealing {
    animation: dealCard 0.5s ease-out;
}
```

**How it works:**
- 0%: Card is above screen, tilted, invisible
- 60%: Card overshoots slightly (bounce effect)
- 100%: Card settles in final position

### Card Flip Animation

```css
/* Flip animation for revealing cards */
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

.card.flipping {
    animation: flipCard 0.6s ease-in-out;
    transform-style: preserve-3d;
}

/* Face-down cards need backface */
.card.face-down {
    backface-visibility: hidden;
}
```

### Card Highlight Animation

```css
/* Pulse animation for winning cards */
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

.card.winning {
    animation: highlight 1s ease-in-out infinite;
    border: 3px solid gold;
}
```

### Hover Effects

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
    /* Face-down cards don't lift as much */
    transform: translateY(-5px);
    cursor: default;
}
```

---

## 💻 Part 2: JavaScript Animation Control

### Dealing Cards with Delay

Update your `displayHand` function:

```javascript
function displayHandAnimated(hand, containerId, delay = 200) {
    let container = document.getElementById(containerId);
    container.innerHTML = '';
    
    // Deal each card with increasing delay
    hand.forEach((card, index) => {
        setTimeout(() => {
            let cardElement = createCardElement(card);
            cardElement.classList.add('dealing');
            container.appendChild(cardElement);
            
            // Remove animation class after animation completes
            setTimeout(() => {
                cardElement.classList.remove('dealing');
            }, 500);
            
        }, index * delay);  // 0ms, 200ms, 400ms, 600ms, 800ms
    });
}
```

**How it works:**
1. Loop through each card
2. Use `setTimeout` to delay each card
3. First card: 0ms delay
4. Second card: 200ms delay
5. Third card: 400ms delay
6. etc.

### Flipping Cards

```javascript
function flipCards(containerId, cards) {
    let container = document.getElementById(containerId);
    let cardElements = container.querySelectorAll('.card');
    
    cardElements.forEach((cardElement, index) => {
        setTimeout(() => {
            // Add flip animation
            cardElement.classList.add('flipping');
            
            // Change from face-down to face-up midway through flip
            setTimeout(() => {
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
            }, 300);  // Halfway through flip animation
            
            // Remove animation class
            setTimeout(() => {
                cardElement.classList.remove('flipping');
            }, 600);
            
        }, index * 150);  // Stagger the flips
    });
}
```

### Highlighting Winning Cards

```javascript
function highlightWinningCards(hand, winningIndices) {
    let container = document.getElementById('player-cards');
    let cardElements = container.querySelectorAll('.card');
    
    winningIndices.forEach(index => {
        if (cardElements[index]) {
            cardElements[index].classList.add('winning');
        }
    });
}

// Example usage:
// If player has pair of Kings (cards at index 1 and 3)
highlightWinningCards(gameState.playerHand, [1, 3]);
```

### Removing Highlights

```javascript
function clearHighlights(containerId) {
    let container = document.getElementById(containerId);
    let cards = container.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.classList.remove('winning');
    });
}
```

---

## 🎭 Part 3: Sequence Management

### Chaining Animations

Often you want animations to happen in sequence, not all at once:

```javascript
async function startGameWithAnimations() {
    console.log('🎬 Starting animated game sequence...');
    
    // Step 1: Show game screen
    showGameScreen();
    
    // Step 2: Wait 500ms
    await sleep(500);
    
    // Step 3: Deal player cards (takes 1000ms for 5 cards)
    displayHandAnimated(gameState.playerHand, 'player-cards', 200);
    await sleep(1200);  // Wait for dealing to finish + buffer
    
    // Step 4: Deal dealer cards face-down (takes 1000ms)
    displayDealerHandAnimatedHidden(gameState.dealerHand);
    await sleep(1200);
    
    // Step 5: Update displays
    updateChipDisplay();
    updatePotDisplay();
    
    console.log('✅ Animation sequence complete!');
}

// Helper function for delays
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
```

### Better Reveal Sequence

```javascript
async function revealAndCompareAnimated() {
    console.log('🎭 Revealing cards with animation...');
    
    gameState.gameActive = false;
    
    // Step 1: Show message
    showMessage('Revealing cards...');
    await sleep(1000);
    
    // Step 2: Flip dealer cards
    flipCards('dealer-cards', gameState.dealerHand);
    await sleep(1000);  // Wait for flips to complete
    
    // Step 3: Calculate winner
    let playerValue = calculateHandValue(gameState.playerHand);
    let dealerValue = calculateHandValue(gameState.dealerHand);
    
    await sleep(500);
    
    // Step 4: Highlight winning hand
    if (playerValue > dealerValue) {
        highlightAllCards('player-cards');
        showMessage('You Win! 🎉');
    } else if (dealerValue > playerValue) {
        highlightAllCards('dealer-cards');
        showMessage('Dealer Wins 😔');
    } else {
        showMessage('Push (Tie) 🤝');
    }
    
    await sleep(2000);
    
    // Step 5: Update chips
    distributeWinnings(playerValue, dealerValue);
    
    await sleep(1000);
    
    // Step 6: Show end screen
    showEndScreen(playerValue > dealerValue ? 'win' : dealerValue > playerValue ? 'lose' : 'tie');
}
```

---

## 📱 Part 4: Message Display System

### Create Message Overlay

Add to your HTML:

```html
<div id="message-overlay" class="message-overlay">
    <div class="message-content">
        <p id="message-text">Message goes here</p>
    </div>
</div>
```

### Style the Overlay

Add to your CSS:

```css
.message-overlay {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.9);
    color: white;
    padding: 30px 60px;
    border-radius: 15px;
    font-size: 2em;
    font-weight: bold;
    z-index: 1000;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
}

.message-overlay.show {
    opacity: 1;
}

.message-content {
    text-align: center;
}
```

### JavaScript Message Functions

```javascript
function showMessage(text, duration = 2000) {
    let overlay = document.getElementById('message-overlay');
    let messageText = document.getElementById('message-text');
    
    messageText.textContent = text;
    overlay.classList.add('show');
    
    if (duration > 0) {
        setTimeout(() => {
            hideMessage();
        }, duration);
    }
}

function hideMessage() {
    let overlay = document.getElementById('message-overlay');
    overlay.classList.remove('show');
}
```

---

## 🏆 Part 5: Hand Ranking Display

### Show Hand Name

```javascript
function displayHandRanking(hand, containerId) {
    // This is simplified - full implementation in Lesson 4.7
    let ranking = evaluateHandSimple(hand);
    
    let rankingElement = document.getElementById(containerId);
    if (rankingElement) {
        rankingElement.textContent = ranking;
        rankingElement.classList.add('fade-in');
    }
}

function evaluateHandSimple(hand) {
    // Count ranks
    let ranks = {};
    hand.forEach(card => {
        ranks[card.rank] = (ranks[card.rank] || 0) + 1;
    });
    
    let counts = Object.values(ranks).sort((a, b) => b - a);
    
    if (counts[0] === 4) return 'Four of a Kind! 🎰';
    if (counts[0] === 3 && counts[1] === 2) return 'Full House! 🏠';
    if (counts[0] === 3) return 'Three of a Kind! 🎲';
    if (counts[0] === 2 && counts[1] === 2) return 'Two Pair! ✌️';
    if (counts[0] === 2) return 'Pair! 👯';
    
    // Check for flush (all same suit)
    let suits = hand.map(c => c.suit);
    if (new Set(suits).size === 1) return 'Flush! 💎';
    
    // Check for straight
    let values = hand.map(c => c.value).sort((a, b) => a - b);
    let isStraight = true;
    for (let i = 1; i < values.length; i++) {
        if (values[i] !== values[i-1] + 1) {
            isStraight = false;
            break;
        }
    }
    if (isStraight) return 'Straight! 📏';
    
    return 'High Card';
}
```

### Add Hand Ranking to HTML

```html
<div class="hand-ranking">
    <p id="player-ranking" class="ranking-text">Your Hand: <span>-</span></p>
    <p id="dealer-ranking" class="ranking-text">Dealer Hand: <span>-</span></p>
</div>
```

### Style Hand Rankings

```css
.hand-ranking {
    text-align: center;
    margin: 20px 0;
    font-size: 1.3em;
}

.ranking-text {
    margin: 10px 0;
    font-weight: bold;
}

.ranking-text span {
    color: #ffd700;
    text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
}

@keyframes fade-in {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
}

.fade-in {
    animation: fade-in 0.5s ease-out;
}
```

---

## ⚡ Part 6: Performance Optimization

### Avoid Too Many Animations

```javascript
// ❌ BAD: Creates lag
for (let i = 0; i < 1000; i++) {
    element.classList.add('animate');
}

// ✅ GOOD: Batch operations
requestAnimationFrame(() => {
    elements.forEach(el => el.classList.add('animate'));
});
```

### Remove Event Listeners on Animated Elements

```javascript
function disableButtonsDuringAnimation() {
    let buttons = document.querySelectorAll('.game-controls button');
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = '0.5';
        btn.style.cursor = 'not-allowed';
    });
}

function enableButtons() {
    let buttons = document.querySelectorAll('.game-controls button');
    buttons.forEach(btn => {
        btn.disabled = false;
        btn.style.opacity = '1';
        btn.style.cursor = 'pointer';
    });
}

// Use in animation sequences
async function startGameWithAnimations() {
    disableButtonsDuringAnimation();
    
    // ... animations ...
    
    enableButtons();
}
```

---

## 🎬 Part 7: Complete Animated Game Flow

Here's the complete updated `startGame` function:

```javascript
async function startGame() {
    console.log('═════════════════════════════════════');
    console.log('    🎬 STARTING ANIMATED GAME    ');
    console.log('═════════════════════════════════════');
    
    // Disable buttons during animation
    disableButtonsDuringAnimation();
    
    // Create and shuffle deck
    gameState.deck = createDeck();
    shuffleDeck(gameState.deck);
    
    // Reset hands
    gameState.playerHand = [];
    gameState.dealerHand = [];
    
    // Take ante
    if (gameState.playerChips >= gameState.ante && gameState.dealerChips >= gameState.ante) {
        gameState.playerChips -= gameState.ante;
        gameState.dealerChips -= gameState.ante;
        gameState.pot = gameState.ante * 2;
    } else {
        alert('Not enough chips to play!');
        return;
    }
    
    // Deal cards
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
    await sleep(800);
    hideMessage();
    
    // Deal player cards with animation (200ms per card = 1000ms total)
    displayHandAnimated(gameState.playerHand, 'player-cards', 200);
    await sleep(1200);
    
    // Evaluate and show player hand
    let playerRanking = evaluateHandSimple(gameState.playerHand);
    document.querySelector('#player-ranking span').textContent = playerRanking;
    
    // Deal dealer cards face-down with animation
    displayDealerHandAnimatedHidden(gameState.dealerHand);
    await sleep(1200);
    
    // Enable buttons
    enableButtons();
    
    console.log('✅ Game ready! Your turn!');
    console.log('═════════════════════════════════════');
}
```

---

## 🔄 Part 8: Card Replacement Animation

For games where you can discard and draw new cards:

```javascript
function replaceCardAnimated(handArray, oldIndex, newCard, containerId) {
    let container = document.getElementById(containerId);
    let cardElements = container.querySelectorAll('.card');
    let oldCardElement = cardElements[oldIndex];
    
    // Step 1: Fade out old card
    oldCardElement.style.transition = 'all 0.3s ease';
    oldCardElement.style.transform = 'scale(0) rotateZ(180deg)';
    oldCardElement.style.opacity = '0';
    
    setTimeout(() => {
        // Step 2: Replace in array
        handArray[oldIndex] = newCard;
        
        // Step 3: Create new card element
        let newCardElement = createCardElement(newCard);
        newCardElement.style.transform = 'scale(0) rotateZ(-180deg)';
        newCardElement.style.opacity = '0';
        
        // Step 4: Replace in DOM
        container.replaceChild(newCardElement, oldCardElement);
        
        // Step 5: Animate in new card
        setTimeout(() => {
            newCardElement.style.transition = 'all 0.5s ease';
            newCardElement.style.transform = 'scale(1) rotateZ(0)';
            newCardElement.style.opacity = '1';
        }, 50);
        
    }, 300);
}
```

---

## 🎨 Part 9: Advanced Visual Effects

### Particle Effect for Wins

```javascript
function createConfetti() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
    
    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + 's';
        document.body.appendChild(confetti);
        
        // Remove after animation
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// CSS for confetti
/*
.confetti {
    position: fixed;
    width: 10px;
    height: 10px;
    top: -10px;
    animation: fall 3s linear;
}

@keyframes fall {
    to {
        transform: translateY(100vh) rotate(360deg);
    }
}
*/
```

### Chip Animation

```javascript
function animateChipTransfer(from, to, amount) {
    // Create chip element
    let chip = document.createElement('div');
    chip.className = 'chip-animation';
    chip.textContent = `+${amount}`;
    
    // Position at 'from' element
    let fromRect = from.getBoundingClientRect();
    chip.style.left = fromRect.left + 'px';
    chip.style.top = fromRect.top + 'px';
    
    document.body.appendChild(chip);
    
    // Animate to 'to' element
    let toRect = to.getBoundingClientRect();
    setTimeout(() => {
        chip.style.left = toRect.left + 'px';
        chip.style.top = toRect.top + 'px';
        chip.style.opacity = '0';
    }, 50);
    
    // Remove after animation
    setTimeout(() => {
        chip.remove();
    }, 1000);
}

// CSS
/*
.chip-animation {
    position: fixed;
    background: #ffd700;
    color: #000;
    padding: 10px 20px;
    border-radius: 50%;
    font-weight: bold;
    transition: all 0.8s ease;
    z-index: 1000;
    pointer-events: none;
}
*/
```

---

## 📝 Lesson Summary

### What You've Learned

✅ CSS @keyframes animations  
✅ JavaScript `setTimeout` for delays  
✅ Async/await for animation sequences  
✅ Card dealing animations  
✅ Card flipping animations  
✅ Highlighting winning cards  
✅ Message overlays  
✅ Hand ranking display  
✅ Performance optimization  
✅ Complete animated game flow  

### Key Concepts

**1. Animation Timing:**
- Use delays to create sequences
- Don't animate too many elements at once
- Wait for animations to complete before next step

**2. User Feedback:**
- Animations show what's happening
- Messages explain game state
- Highlights draw attention to important cards

**3. Polish:**
- Small details make big difference
- Smooth transitions feel professional
- Disable buttons during animations to prevent bugs

---

## 🎯 Practice Exercises

Complete the exercises in the `practice/` folder:
1. **Exercise 1:** Add All Animations (implement dealing, flipping, highlighting)
2. **Exercise 2:** Custom Animation Effects (create your own animations)
3. **Exercise 3:** Polish Your Game (add finishing touches)

---

## 📚 Resources

- `cheatsheet.md` - Animation reference
- `parent-guide.md` - Teaching animations
- `examples/` - Complete animated code

---

**Next Lesson:** 4.7 - Hand Evaluation Logic (detect all poker hands!)

**Ready to make your game beautiful?** Let's go! 🎨✨
