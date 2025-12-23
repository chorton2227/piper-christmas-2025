# Animation Quick Reference Cheat Sheet 🎬

**For Lesson 4.6 - Displaying Cards (Advanced)**

---

## 🎨 CSS Animation Basics

### Creating Keyframe Animation

```css
/* Define animation */
@keyframes animationName {
    from { /* starting state */ }
    to { /* ending state */ }
}

/* OR with percentages */
@keyframes animationName {
    0% { /* start */ }
    50% { /* middle */ }
    100% { /* end */ }
}

/* Apply animation */
.element {
    animation: animationName duration timing-function;
}
```

### Animation Properties

```css
.element {
    animation-name: slidein;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-delay: 0.5s;
    animation-iteration-count: 1;  /* or infinite */
    animation-direction: normal;   /* or reverse, alternate */
    animation-fill-mode: forwards; /* keeps end state */
}

/* Shorthand */
.element {
    animation: slidein 2s ease-in-out 0.5s 1 normal forwards;
}
```

### Timing Functions

```css
ease            /* slow start, fast, slow end */
ease-in         /* slow start */
ease-out        /* slow end */
ease-in-out     /* slow start and end */
linear          /* constant speed */
cubic-bezier(0.1, 0.7, 1.0, 0.1)  /* custom curve */
```

---

## 🎴 Card Animation Patterns

### Deal Card Animation

```css
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

### Flip Card Animation

```css
@keyframes flipCard {
    0% { transform: rotateY(0deg); }
    50% { transform: rotateY(90deg); }
    100% { transform: rotateY(180deg); }
}

.card.flipping {
    animation: flipCard 0.6s ease-in-out;
    transform-style: preserve-3d;
}
```

### Highlight Animation

```css
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

### Bounce Animation

```css
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-30px);
    }
    60% {
        transform: translateY(-15px);
    }
}
```

### Fade In/Out

```css
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
}
```

---

## ⏱️ JavaScript Timing Functions

### setTimeout

```javascript
// Run once after delay
setTimeout(() => {
    console.log('This runs after 1 second');
}, 1000);

// Store reference to cancel
let timeoutId = setTimeout(() => {
    doSomething();
}, 2000);

clearTimeout(timeoutId);  // Cancel it
```

### setInterval

```javascript
// Run repeatedly
let intervalId = setInterval(() => {
    console.log('This runs every second');
}, 1000);

clearInterval(intervalId);  // Stop it
```

### requestAnimationFrame

```javascript
// Run on next frame (smooth animations)
function animate() {
    // Update animation
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
```

---

## 🔄 Async/Await for Sequences

### Sleep Function

```javascript
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Use with await
await sleep(1000);  // Wait 1 second
```

### Sequential Animations

```javascript
async function animateSequence() {
    // Step 1
    doFirstThing();
    await sleep(500);
    
    // Step 2
    doSecondThing();
    await sleep(500);
    
    // Step 3
    doThirdThing();
}
```

### Parallel Animations

```javascript
async function animateParallel() {
    // Both start at same time
    await Promise.all([
        animatePlayer(),
        animateDealer()
    ]);
}
```

---

## 🎴 Card Display Functions

### Staggered Card Dealing

```javascript
function displayHandAnimated(hand, containerId, delay = 200) {
    let container = document.getElementById(containerId);
    container.innerHTML = '';
    
    hand.forEach((card, index) => {
        setTimeout(() => {
            let cardElement = createCardElement(card);
            cardElement.classList.add('dealing');
            container.appendChild(cardElement);
            
            setTimeout(() => {
                cardElement.classList.remove('dealing');
            }, 500);
        }, index * delay);
    });
}
```

### Flip Cards

```javascript
function flipCards(containerId, cards) {
    let container = document.getElementById(containerId);
    let cardElements = container.querySelectorAll('.card');
    
    cardElements.forEach((cardElement, index) => {
        setTimeout(() => {
            cardElement.classList.add('flipping');
            
            setTimeout(() => {
                // Update content at midpoint
                updateCardContent(cardElement, cards[index]);
            }, 300);
            
            setTimeout(() => {
                cardElement.classList.remove('flipping');
            }, 600);
        }, index * 150);
    });
}
```

### Highlight Winners

```javascript
function highlightWinningCards(containerId, indices) {
    let container = document.getElementById(containerId);
    let cards = container.querySelectorAll('.card');
    
    indices.forEach(i => {
        cards[i].classList.add('winning');
    });
}

function clearHighlights(containerId) {
    let container = document.getElementById(containerId);
    let cards = container.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.classList.remove('winning');
    });
}
```

---

## 💬 Message Overlay

### HTML Structure

```html
<div id="message-overlay" class="message-overlay">
    <div class="message-content">
        <p id="message-text">Message</p>
    </div>
</div>
```

### CSS

```css
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
    z-index: 1000;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
}

.message-overlay.show {
    opacity: 1;
}
```

### JavaScript

```javascript
function showMessage(text, duration = 2000) {
    let overlay = document.getElementById('message-overlay');
    let messageText = document.getElementById('message-text');
    
    messageText.textContent = text;
    overlay.classList.add('show');
    
    if (duration > 0) {
        setTimeout(() => hideMessage(), duration);
    }
}

function hideMessage() {
    document.getElementById('message-overlay')
        .classList.remove('show');
}
```

---

## 🎯 Button Control

### Disable/Enable During Animations

```javascript
function disableButtons() {
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
```

---

## ✨ Special Effects

### Confetti

```javascript
function createConfetti() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00'];
    
    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + 's';
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
    }
}
```

```css
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
```

### Screen Shake

```javascript
function shakeScreen() {
    let screen = document.getElementById('game-screen');
    screen.classList.add('shake');
    setTimeout(() => screen.classList.remove('shake'), 500);
}
```

```css
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
    20%, 40%, 60%, 80% { transform: translateX(10px); }
}

.shake {
    animation: shake 0.5s;
}
```

### Pulse Glow

```css
@keyframes pulse {
    0%, 100% {
        box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
    }
    50% {
        box-shadow: 0 0 30px rgba(255, 215, 0, 1);
    }
}

.pulse {
    animation: pulse 1.5s ease-in-out infinite;
}
```

---

## 🎮 Complete Animation Sequence

```javascript
async function startGameAnimated() {
    disableButtons();
    clearAllHighlights();
    
    // Setup
    gameState.deck = createDeck();
    shuffleDeck(gameState.deck);
    gameState.playerHand = dealHand(gameState.deck, 5);
    gameState.dealerHand = dealHand(gameState.deck, 5);
    
    // Show screen
    showGameScreen();
    updateChipDisplay();
    updatePotDisplay();
    await sleep(300);
    
    // Show message
    showMessage('Dealing cards...', 0);
    await sleep(1000);
    hideMessage();
    
    // Deal player cards
    displayHandAnimated(gameState.playerHand, 'player-cards', 200);
    await sleep(1400);
    
    // Deal dealer cards
    displayDealerHandAnimatedHidden(gameState.dealerHand);
    await sleep(1400);
    
    enableButtons();
}

async function revealAndCompareAnimated() {
    disableButtons();
    
    showMessage('Revealing...', 0);
    await sleep(1000);
    hideMessage();
    
    // Flip dealer cards
    flipCards('dealer-cards', gameState.dealerHand);
    await sleep(1200);
    
    // Determine winner
    let result = determineWinner();
    
    if (result === 'win') {
        highlightAllCards('player-cards');
        showMessage('You Win! 🎉', 2000);
        createConfetti();
    } else if (result === 'lose') {
        highlightAllCards('dealer-cards');
        showMessage('Dealer Wins 😔', 2000);
        shakeScreen();
    }
    
    await sleep(2500);
    showEndScreen(result);
}
```

---

## ⚡ Performance Tips

### Do:
✅ Use `transform` and `opacity` (GPU accelerated)  
✅ Use `requestAnimationFrame` for smooth animations  
✅ Limit number of simultaneous animations  
✅ Remove animation classes after completion  
✅ Use CSS animations for simple effects  

### Don't:
❌ Animate `width`, `height`, `top`, `left` (slow)  
❌ Animate during user input  
❌ Create too many DOM elements  
❌ Use `setInterval` for animations  
❌ Forget to clean up event listeners  

---

## 📏 Common Timing Values

| Duration | Use For |
|----------|---------|
| 100ms | Micro-interactions |
| 200ms | Hover effects |
| 300ms | Screen transitions |
| 500ms | Card animations |
| 1000ms | Message displays |
| 2000ms | Auto-hide messages |

---

## 🐛 Debugging Animations

### Check Animation Applied

```javascript
// Log element classes
console.log(element.classList);

// Check computed style
let style = window.getComputedStyle(element);
console.log(style.animation);
```

### Test Timing

```javascript
console.time('animation');
await animateSequence();
console.timeEnd('animation');  // Shows duration
```

### Slow Down Animations

```css
/* In dev mode, slow everything down */
* {
    animation-duration: 3s !important;
    transition-duration: 3s !important;
}
```

---

## 📝 Common Patterns

### Wait for Multiple Animations

```javascript
async function waitForAll() {
    await Promise.all([
        animatePlayer(),
        animateDealer(),
        updatePot()
    ]);
}
```

### Cancel Animation

```javascript
let animationId = setTimeout(() => animate(), 1000);
clearTimeout(animationId);

// OR
element.classList.remove('animating');
```

### Detect Animation End

```javascript
element.addEventListener('animationend', () => {
    console.log('Animation finished!');
    element.classList.remove('animating');
});
```

---

**Keep this cheat sheet handy while animating!** 🎬✨
