# Exercise 3: Keyboard Game ⌨️

## Objective
Create an interactive game that responds to keyboard inputs. Practice using keyboard events, arrow key controls, and creating a playable game experience.

## Requirements

### 1. Game Overview
Create a simple game where:
- A character moves around the screen using keyboard controls
- Items appear that the player must collect
- Score increases when items are collected
- Game has a timer or scoring system
- Game can be paused and reset

### 2. HTML Structure
Your page should include:
- A title "Keyboard Adventure Game"
- A game area (a div that acts as the playing field)
- A player character (can be emoji or styled div)
- Collectible items (at least 5)
- Score display
- Timer display (optional)
- Instructions showing which keys to use
- Pause and Reset buttons

### 3. Player Controls

#### Movement Options (Choose one or implement both):

**Option A: Arrow Keys**
- ↑ (Up Arrow) - Move up
- ↓ (Down Arrow) - Move down
- ← (Left Arrow) - Move left
- → (Right Arrow) - Move right

**Option B: WASD Keys**
- W - Move up
- S - Move down
- A - Move left
- D - Move right

**Bonus: Implement Both!**
- Let players use either arrow keys OR WASD

#### Additional Controls
- **SPACE** - Pause/unpause the game
- **ENTER** - Reset/restart the game
- **ESC** - Show/hide help menu

### 4. Game Mechanics

#### Player Character
- Represented by emoji (🚀, 🐱, 👾, 🏃, etc.) or styled element
- Moves smoothly around the game area
- Cannot move outside the game boundaries
- Position updates based on keyboard input

#### Collectible Items
- At least 5 items scattered around the game area
- Different types worth different points:
  - Stars ⭐ (5 points)
  - Gems 💎 (10 points)
  - Coins 🪙 (3 points)
- Disappear when player touches them
- New items appear after collection

#### Collision Detection
- Detect when player reaches an item
- Check if player position overlaps item position
- Simple method: Check if positions are close enough

```javascript
function checkCollision(player, item) {
    let distance = Math.abs(playerX - itemX) + Math.abs(playerY - itemY);
    return distance < 30; // Within 30 pixels = collision
}
```

#### Score System
- Starts at 0
- Increases when items are collected
- Different items give different points
- Display prominently on screen

#### Timer (Optional)
- Count up: Show how long player has been playing
- Count down: Give player 60 seconds to collect items

### 5. Game States

#### Playing State
- Player can move
- Collisions are detected
- Timer is running (if implemented)

#### Paused State
- Player cannot move
- Timer stops
- Show "PAUSED" message
- Can be unpaused with SPACE

#### Game Over / Win State (Optional)
- When all items collected
- When timer runs out
- Show final score
- Offer restart option

## Technical Requirements

### HTML Structure Example
```html
<div id="gameArea" class="game-area">
    <!-- Player -->
    <div id="player" class="player">🚀</div>
    
    <!-- Items (create with JavaScript) -->
    <div class="item star" data-points="5">⭐</div>
    <div class="item gem" data-points="10">💎</div>
    <!-- More items... -->
</div>

<div class="game-info">
    <div id="score">Score: 0</div>
    <div id="timer">Time: 0s</div>
</div>

<div class="controls">
    <button id="pauseBtn">Pause</button>
    <button id="resetBtn">Reset</button>
</div>

<div class="instructions">
    Use Arrow Keys or WASD to move
    SPACE to pause
</div>
```

### JavaScript Functions Needed

```javascript
// Player movement
let playerX = 100;
let playerY = 100;
let moveSpeed = 10;
let isPaused = false;

function movePlayer(direction) {
    if (isPaused) return;
    
    if (direction === 'up') {
        playerY = playerY - moveSpeed;
    }
    // ... other directions
    
    keepPlayerInBounds();
    updatePlayerPosition();
    checkAllCollisions();
}

function keepPlayerInBounds() {
    // Make sure player doesn't go outside game area
    if (playerX < 0) playerX = 0;
    if (playerX > maxX) playerX = maxX;
    if (playerY < 0) playerY = 0;
    if (playerY > maxY) playerY = maxY;
}

function updatePlayerPosition() {
    player.style.left = playerX + 'px';
    player.style.top = playerY + 'px';
}

function checkAllCollisions() {
    // Check if player touched any items
    items.forEach(function(item) {
        if (checkCollision(player, item)) {
            collectItem(item);
        }
    });
}

function collectItem(item) {
    // Add points to score
    // Remove item from screen
    // Spawn new item (optional)
}

function pauseGame() {
    isPaused = !isPaused;
    // Show/hide pause message
}

function resetGame() {
    // Reset score, timer, positions
}
```

### Event Listeners Needed

```javascript
// Keyboard events
document.addEventListener('keydown', function(event) {
    let key = event.key.toLowerCase();
    
    if (key === 'arrowup' || key === 'w') {
        movePlayer('up');
    }
    else if (key === 'arrowdown' || key === 's') {
        movePlayer('down');
    }
    else if (key === 'arrowleft' || key === 'a') {
        movePlayer('left');
    }
    else if (key === 'arrowright' || key === 'd') {
        movePlayer('right');
    }
    else if (key === ' ') {
        event.preventDefault(); // Prevent page scroll
        pauseGame();
    }
    else if (key === 'enter') {
        resetGame();
    }
});

// Button events
pauseButton.addEventListener('click', pauseGame);
resetButton.addEventListener('click', resetGame);
```

## Styling Requirements

### Game Area
- Fixed size (e.g., 600px × 400px)
- Clear border
- Background color or pattern
- position: relative (for absolute positioning of items)

### Player Character
- position: absolute
- Larger than items (easy to see)
- Smooth movement (use transitions or instant)
- Visual indicator (emoji or styled div)

### Items
- position: absolute
- Random positions within game area
- Different styles for different items
- Fade out animation when collected

### UI Elements
- Score and timer prominently displayed
- Buttons styled attractively
- Instructions clearly visible
- Pause overlay (semi-transparent background)

## Example Layout

```
┌──────────────────────────────────────────┐
│  Keyboard Adventure Game     Score: 45   │
│                              Time: 23s   │
├──────────────────────────────────────────┤
│  ┌──────────────────────────────────┐   │
│  │          GAME AREA               │   │
│  │                                  │   │
│  │    ⭐        💎                   │   │
│  │                                  │   │
│  │         🚀  ← Player             │   │
│  │                                  │   │
│  │  🪙                    ⭐         │   │
│  │                                  │   │
│  └──────────────────────────────────┘   │
│                                          │
│  [Pause]  [Reset]                        │
│                                          │
│  Instructions:                           │
│  • Arrow Keys or WASD to move            │
│  • SPACE to pause                        │
│  • Collect items to gain points!         │
└──────────────────────────────────────────┘
```

## Testing Checklist

Before you finish, test:
- [ ] Player moves in all 4 directions
- [ ] Player cannot move outside game area
- [ ] Items are collected when player touches them
- [ ] Score increases correctly
- [ ] Items disappear after collection
- [ ] Pause button stops movement
- [ ] Reset button restarts the game
- [ ] Keyboard shortcuts work (SPACE, ENTER)
- [ ] No errors in console
- [ ] Game is playable and fun!

## Bonus Challenges 🌟

If you finish early, try these:

1. **Obstacles**: Add walls or obstacles the player must avoid
2. **Enemies**: Moving bad items that decrease score
3. **Power-ups**: Special items that give temporary speed boost
4. **Levels**: Multiple levels with increasing difficulty
5. **High Score**: Save and display the highest score
6. **Sound Effects**: Console.log different messages for different actions
7. **Animations**: Smooth movement with CSS transitions
8. **Mobile Controls**: Add on-screen arrow buttons for touch devices

## Hints 💡

### Random Item Positions
```javascript
function createItem(type, points) {
    let item = document.createElement('div');
    item.className = 'item ' + type;
    item.textContent = getEmojiForType(type);
    
    // Random position
    let maxX = gameArea.offsetWidth - 40;
    let maxY = gameArea.offsetHeight - 40;
    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);
    
    item.style.left = randomX + 'px';
    item.style.top = randomY + 'px';
    item.dataset.points = points;
    
    gameArea.appendChild(item);
}
```

### Collision Detection
```javascript
function checkCollision(player, item) {
    let playerRect = player.getBoundingClientRect();
    let itemRect = item.getBoundingClientRect();
    
    return !(playerRect.right < itemRect.left || 
             playerRect.left > itemRect.right || 
             playerRect.bottom < itemRect.top || 
             playerRect.top > itemRect.bottom);
}
```

### Preventing Diagonal Gaps
```javascript
// Problem: Player can move diagonally through corners
// Solution: Check bounds separately for X and Y

function keepPlayerInBounds() {
    let gameRect = gameArea.getBoundingClientRect();
    let playerSize = 40;
    
    if (playerX < 0) playerX = 0;
    if (playerX > gameRect.width - playerSize) {
        playerX = gameRect.width - playerSize;
    }
    if (playerY < 0) playerY = 0;
    if (playerY > gameRect.height - playerSize) {
        playerY = gameRect.height - playerSize;
    }
}
```

## What You'll Learn

- Keyboard event handling (`keydown`, `keyup`)
- Game loop and state management
- Position calculations and boundaries
- Collision detection basics
- Creating interactive game experiences
- Managing game state (playing, paused, etc.)
- Dynamic element creation and removal

Good luck creating your keyboard game! Have fun! 🎮