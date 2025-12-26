# Lesson 4.9: User Interface & Controls 🎨

## 🎯 Lesson Objectives

By the end of this lesson, you will:
- Design a professional poker table layout with HTML/CSS
- Create player seat components showing cards, chips, and status
- Build an intuitive betting control panel with validation
- Display the pot and community cards in the center of the table
- Add chip movement animations from players to pot
- Create action logs showing game events
- Build winner announcement overlays and modals
- Make the interface responsive for different screen sizes

## 📚 Introduction to Game UI Design

### What Makes a Good Poker UI?

A great poker interface should be:
- **Clear** - Easy to see cards, chips, and whose turn it is
- **Intuitive** - Controls where you expect them
- **Attractive** - Polished, professional appearance
- **Responsive** - Provides instant feedback to actions
- **Accessible** - Readable text, clear buttons

### UI Components We'll Build

1. **Poker table** - Green felt background, rounded edges
2. **Player seats** - Cards, name, chips, dealer button
3. **Community cards area** - Center of table
4. **Pot display** - Shows current pot amount
5. **Betting controls** - Buttons and sliders for actions
6. **Action log** - History of what happened
7. **Winner overlay** - Announces winners dramatically

## 🎲 Poker Table Layout

### HTML Structure

```html
<div class="game-container">
    <!-- Poker Table -->
    <div class="poker-table">
        <!-- Community Cards -->
        <div class="community-cards-area">
            <div id="community-cards" class="community-cards"></div>
            <div class="pot-display">
                Pot: $<span id="pot-amount">0</span>
            </div>
        </div>
        
        <!-- Player Seats (6 positions) -->
        <div class="player-seat seat-0" data-seat="0">
            <div class="player-info">
                <div class="player-name">You</div>
                <div class="player-chips">$<span class="chip-amount">1000</span></div>
            </div>
            <div class="player-hand"></div>
            <div class="player-bet">$<span class="bet-amount">0</span></div>
            <div class="player-status"></div>
            <div class="dealer-button" style="display: none;">D</div>
        </div>
        
        <!-- Repeat for seats 1-5 -->
        
        <!-- Action Log -->
        <div class="action-log">
            <div class="action-log-title">Actions</div>
            <div id="action-log-content"></div>
        </div>
    </div>
    
    <!-- Betting Controls (bottom) -->
    <div class="betting-panel">
        <div class="player-info-bar">
            <div class="info-item">
                Your Chips: $<span id="player-chips">1000</span>
            </div>
            <div class="info-item">
                To Call: $<span id="to-call">0</span>
            </div>
        </div>
        
        <div class="action-buttons">
            <button id="fold-btn" class="btn btn-fold">Fold</button>
            <button id="check-btn" class="btn btn-check">Check</button>
            <button id="call-btn" class="btn btn-call">
                Call $<span id="call-amount">0</span>
            </button>
            <button id="raise-btn" class="btn btn-raise">Raise</button>
            <button id="all-in-btn" class="btn btn-all-in">All-In</button>
        </div>
        
        <div class="raise-controls" style="display: none;">
            <input type="range" id="raise-slider" min="20" max="1000" value="20">
            <div class="raise-amount">$<span id="raise-display">20</span></div>
            <button id="confirm-raise">Confirm</button>
            <button id="cancel-raise">Cancel</button>
        </div>
    </div>
</div>
```

### Poker Table CSS

```css
.game-container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px;
}

.poker-table {
    width: 100%;
    height: 700px;
    background: linear-gradient(135deg, #0a5f38 0%, #0d7a4a 100%);
    border-radius: 200px;
    border: 15px solid #8b4513;
    box-shadow: 
        inset 0 0 50px rgba(0, 0, 0, 0.3),
        0 10px 30px rgba(0, 0, 0, 0.5);
    position: relative;
    overflow: hidden;
}

/* Felt texture effect */
.poker-table::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            rgba(255, 255, 255, 0.03) 2px,
            rgba(255, 255, 255, 0.03) 4px
        );
    pointer-events: none;
}
```

### Table Border/Rail

```css
/* Wood rail around table */
.poker-table {
    border: 15px solid #8b4513;
    box-shadow: 
        inset 0 0 0 5px #654321,
        inset 0 0 0 10px #8b4513,
        0 10px 30px rgba(0, 0, 0, 0.5);
}
```

## 👥 Player Seat Components

### Player Seat Positioning

Position seats around the table:

```css
.player-seat {
    position: absolute;
    width: 200px;
    text-align: center;
}

/* Top positions */
.seat-0 {
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
}

.seat-1 {
    left: 20px;
    bottom: 150px;
}

.seat-2 {
    left: 20px;
    top: 150px;
}

.seat-3 {
    left: 50%;
    top: 20px;
    transform: translateX(-50%);
}

.seat-4 {
    right: 20px;
    top: 150px;
}

.seat-5 {
    right: 20px;
    bottom: 150px;
}
```

### Player Info Styling

```css
.player-info {
    background: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
    color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.player-name {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
}

.player-chips {
    font-size: 16px;
    color: #ffd700;
}

.chip-amount {
    font-weight: bold;
}
```

### Player Hand Display

```css
.player-hand {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin: 10px 0;
    min-height: 120px;
}

.player-hand .card {
    width: 70px;
    height: 105px;
}
```

### Player Bet Display

```css
.player-bet {
    background: rgba(255, 215, 0, 0.2);
    border: 2px solid #ffd700;
    border-radius: 20px;
    padding: 5px 15px;
    display: inline-block;
    font-weight: bold;
    color: #ffd700;
    margin-top: 10px;
}

.player-bet:empty {
    display: none;
}
```

### Player Status Indicators

```css
.player-status {
    margin-top: 5px;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
}

.player-status.folded {
    color: #ff4444;
}

.player-status.all-in {
    color: #ff9800;
}

.player-status.active {
    color: #4caf50;
}

.player-status.thinking {
    color: #2196f3;
}
```

### Dealer Button

```css
.dealer-button {
    width: 40px;
    height: 40px;
    background: white;
    border: 3px solid #000;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 20px;
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
}
```

### Active Player Highlight

```css
.player-seat.active {
    animation: pulse 1.5s infinite;
}

@keyframes pulse {
    0%, 100% {
        box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7);
    }
    50% {
        box-shadow: 0 0 0 15px rgba(76, 175, 80, 0);
    }
}
```

## 🎴 Community Cards Area

### Community Cards Container

```css
.community-cards-area {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.community-cards {
    display: flex;
    gap: 15px;
    justify-content: center;
    margin-bottom: 20px;
    padding: 20px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    min-width: 500px;
    min-height: 140px;
    align-items: center;
}
```

### Pot Display

```css
.pot-display {
    background: rgba(255, 215, 0, 0.9);
    color: #000;
    font-size: 24px;
    font-weight: bold;
    padding: 15px 30px;
    border-radius: 30px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    display: inline-block;
}

#pot-amount {
    color: #d32f2f;
}
```

## 🎮 Betting Control Panel

### Betting Panel Container

```css
.betting-panel {
    background: linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%);
    border-radius: 15px;
    padding: 20px;
    margin-top: 20px;
    box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.5);
}

.player-info-bar {
    display: flex;
    justify-content: space-around;
    margin-bottom: 15px;
    font-size: 18px;
    color: white;
}

.info-item {
    padding: 10px 20px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
}
```

### Action Buttons

```css
.action-buttons {
    display: flex;
    gap: 15px;
    justify-content: center;
}

.btn {
    padding: 15px 30px;
    font-size: 18px;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
}

.btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.btn:active:not(:disabled) {
    transform: translateY(0);
}

.btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.btn-fold {
    background: #f44336;
    color: white;
}

.btn-fold:hover:not(:disabled) {
    background: #d32f2f;
}

.btn-check {
    background: #2196f3;
    color: white;
}

.btn-check:hover:not(:disabled) {
    background: #1976d2;
}

.btn-call {
    background: #4caf50;
    color: white;
}

.btn-call:hover:not(:disabled) {
    background: #388e3c;
}

.btn-raise {
    background: #ff9800;
    color: white;
}

.btn-raise:hover:not(:disabled) {
    background: #f57c00;
}

.btn-all-in {
    background: #9c27b0;
    color: white;
}

.btn-all-in:hover:not(:disabled) {
    background: #7b1fa2;
}
```

### Raise Slider Controls

```css
.raise-controls {
    margin-top: 20px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
}

#raise-slider {
    width: 100%;
    height: 8px;
    border-radius: 4px;
    outline: none;
    -webkit-appearance: none;
    background: rgba(255, 255, 255, 0.3);
}

#raise-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #ff9800;
    cursor: pointer;
}

#raise-slider::-moz-range-thumb {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #ff9800;
    cursor: pointer;
}

.raise-amount {
    text-align: center;
    font-size: 28px;
    color: #ff9800;
    font-weight: bold;
    margin: 15px 0;
}
```

## 📜 Action Log

### Action Log Styling

```css
.action-log {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 250px;
    max-height: 400px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    padding: 15px;
    color: white;
    overflow-y: auto;
}

.action-log-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    border-bottom: 2px solid rgba(255, 255, 255, 0.3);
    padding-bottom: 5px;
}

#action-log-content {
    font-size: 14px;
}

.action-entry {
    padding: 5px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.action-entry:last-child {
    border-bottom: none;
}
```

### Adding Actions to Log

```javascript
function logAction(playerName, action, amount = null) {
    const logContent = document.getElementById('action-log-content');
    const entry = document.createElement('div');
    entry.className = 'action-entry';
    
    let message = `${playerName} ${action}`;
    if (amount) {
        message += ` $${amount}`;
    }
    
    entry.textContent = message;
    logContent.insertBefore(entry, logContent.firstChild);
    
    // Keep only last 20 actions
    while (logContent.children.length > 20) {
        logContent.removeChild(logContent.lastChild);
    }
}

// Usage
logAction('Player 2', 'raises', 100);
logAction('Player 3', 'folds');
logAction('You', 'calls', 100);
```

## 🎊 Winner Announcement Overlay

### Winner Modal HTML

```html
<div id="winner-modal" class="modal" style="display: none;">
    <div class="modal-content">
        <h2 class="winner-title">🏆 Winner! 🏆</h2>
        <div class="winner-name"></div>
        <div class="winning-hand"></div>
        <div class="pot-won">Won: $<span></span></div>
        <button id="continue-btn" class="btn btn-continue">Continue</button>
    </div>
</div>
```

### Winner Modal CSS

```css
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.modal-content {
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
    padding: 40px;
    border-radius: 20px;
    text-align: center;
    color: white;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
    animation: slideIn 0.5s ease;
}

@keyframes slideIn {
    from {
        transform: scale(0.7) translateY(-50px);
        opacity: 0;
    }
    to {
        transform: scale(1) translateY(0);
        opacity: 1;
    }
}

.winner-title {
    font-size: 36px;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.winner-name {
    font-size: 28px;
    font-weight: bold;
    color: #ffd700;
    margin-bottom: 15px;
}

.winning-hand {
    font-size: 24px;
    margin-bottom: 20px;
    color: #4caf50;
}

.pot-won {
    font-size: 32px;
    font-weight: bold;
    color: #ffd700;
    margin-bottom: 30px;
}

.btn-continue {
    background: #4caf50;
    color: white;
    padding: 15px 40px;
    font-size: 20px;
}
```

### Showing Winner

```javascript
function showWinner(playerName, handType, potAmount) {
    const modal = document.getElementById('winner-modal');
    modal.querySelector('.winner-name').textContent = playerName;
    modal.querySelector('.winning-hand').textContent = handType;
    modal.querySelector('.pot-won span').textContent = potAmount;
    modal.style.display = 'flex';
}

document.getElementById('continue-btn').addEventListener('click', () => {
    document.getElementById('winner-modal').style.display = 'none';
    startNewHand(gameState);
});
```

## 💎 Chip Animation

### Chip Movement CSS

```css
@keyframes moveChipsToPot {
    0% {
        transform: translateY(0) scale(1);
        opacity: 1;
    }
    50% {
        transform: translateY(-100px) scale(1.2);
        opacity: 0.8;
    }
    100% {
        transform: translateY(-200px) scale(0.5);
        opacity: 0;
    }
}

.chip-moving {
    animation: moveChipsToPot 1s ease forwards;
}
```

### Animate Chips to Pot

```javascript
function animateChipsToPot(playerId, amount) {
    const playerSeat = document.querySelector(`.seat-${playerId}`);
    const potDisplay = document.querySelector('.pot-display');
    
    // Create chip element
    const chip = document.createElement('div');
    chip.className = 'chip chip-moving';
    chip.textContent = `$${amount}`;
    chip.style.position = 'absolute';
    chip.style.color = '#ffd700';
    chip.style.fontWeight = 'bold';
    
    // Position at player's seat
    const rect = playerSeat.getBoundingClientRect();
    chip.style.left = rect.left + 'px';
    chip.style.top = rect.top + 'px';
    
    document.body.appendChild(chip);
    
    // Remove after animation
    setTimeout(() => {
        chip.remove();
    }, 1000);
}
```

## 📱 Responsive Design

### Mobile-Friendly Layout

```css
@media (max-width: 768px) {
    .poker-table {
        height: 500px;
        border-radius: 100px;
    }
    
    .player-seat {
        width: 150px;
    }
    
    .player-hand .card {
        width: 50px;
        height: 75px;
    }
    
    .community-cards {
        min-width: 300px;
        gap: 10px;
    }
    
    .action-buttons {
        flex-wrap: wrap;
    }
    
    .btn {
        padding: 10px 20px;
        font-size: 14px;
    }
    
    .action-log {
        display: none;  /* Hide on mobile */
    }
}
```

## 💡 Best Practices

### 1. Use CSS Variables for Theming

```css
:root {
    --table-color: #0a5f38;
    --rail-color: #8b4513;
    --text-color: white;
    --gold: #ffd700;
    --success: #4caf50;
    --danger: #f44336;
}

.poker-table {
    background: var(--table-color);
    border-color: var(--rail-color);
}
```

### 2. Provide Clear Visual Feedback

```javascript
function highlightCurrentPlayer(playerId) {
    // Remove previous highlights
    document.querySelectorAll('.player-seat').forEach(seat => {
        seat.classList.remove('active');
    });
    
    // Highlight current player
    document.querySelector(`.seat-${playerId}`).classList.add('active');
}
```

### 3. Disable Controls When Appropriate

```javascript
function updateBettingControls(gameState, playerId) {
    const player = getPlayerById(gameState, playerId);
    const toCall = gameState.currentBet - player.bet;
    
    document.getElementById('check-btn').disabled = toCall > 0;
    document.getElementById('call-btn').disabled = toCall === 0;
    document.getElementById('raise-btn').disabled = player.chips < calculateMinRaise(gameState);
}
```

## 🏆 Key Takeaways

- **Table layout** uses absolute positioning for player seats
- **Green felt effect** achieved with gradients and textures
- **Player components** show all relevant info at a glance
- **Betting controls** provide clear, accessible actions
- **Action log** keeps history of game events
- **Winner overlay** celebrates victories dramatically
- **Chip animations** add polish and feedback
- **Responsive design** works on mobile and desktop
- **Visual feedback** guides player actions

## 📝 Practice Challenges

Ready to practice? Check the `practice/` folder for exercises:

1. **Exercise 1:** Create a poker table layout with 6 player seats
2. **Exercise 2:** Build betting control panel with all buttons
3. **Exercise 3:** Add chip animation from player to pot
4. **Exercise 4:** Create winner announcement modal

## 🎯 What's Next?

In **Lesson 4.10**, we'll implement **Showdown & Winner Determination** - revealing cards, comparing hands, and awarding the pot!

---

**Spectacular! 🎉 You've built a professional poker game interface that looks and feels amazing!**
