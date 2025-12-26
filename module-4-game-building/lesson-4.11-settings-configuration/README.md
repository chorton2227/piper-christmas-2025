# Lesson 4.11: Settings & Configuration ⚙️

## 🎯 Lesson Objectives

By the end of this lesson, you will:
- Create a settings interface for customizing game options
- Implement validation for configuration values
- Build preset configurations (tournament, cash game, quick play)
- Save and load settings using localStorage
- Allow players to adjust number of AI opponents, starting chips, and blind levels
- Create a difficulty selector for AI opponents
- Make the game highly customizable and replayable

## 📚 Introduction to Game Configuration

### Why Configuration Matters

Configuration options make your game:
- **Replayable** - Different settings create different experiences
- **Accessible** - Players can adjust difficulty
- **Flexible** - Supports various play styles
- **Professional** - Shows attention to player preferences

### What Should Be Configurable?

**Game Setup:**
- Number of players (2-6)
- Starting chip amounts
- Player names
- AI difficulty

**Blind Structure:**
- Small blind amount
- Big blind amount
- Blind increase interval (optional)

**Game Rules:**
- Tournament vs cash game mode
- Buy-in amount
- Time limits (optional)

**UI Preferences:**
- Sound on/off
- Animation speed
- Color scheme

## 🎮 Game Configuration Object

### Configuration Structure

```javascript
const defaultConfig = {
    // Players
    playerCount: 6,
    playerName: 'Player',
    startingChips: 1000,
    
    // Blinds
    smallBlind: 10,
    bigBlind: 20,
    blindIncreaseInterval: null,  // null = no increase
    
    // Game mode
    gameMode: 'cash',  // 'cash' or 'tournament'
    buyIn: 1000,
    
    // AI
    aiDifficulty: 'medium',  // 'easy', 'medium', 'hard'
    aiPersonalities: true,  // Mix of personalities vs all same
    
    // UI
    soundEnabled: true,
    animationSpeed: 'normal',  // 'fast', 'normal', 'slow'
    theme: 'classic'  // 'classic', 'dark', 'neon'
};
```

### Creating Configuration State

```javascript
class GameConfig {
    constructor(options = {}) {
        this.playerCount = options.playerCount || 6;
        this.playerName = options.playerName || 'Player';
        this.startingChips = options.startingChips || 1000;
        this.smallBlind = options.smallBlind || 10;
        this.bigBlind = options.bigBlind || 20;
        this.aiDifficulty = options.aiDifficulty || 'medium';
        this.soundEnabled = options.soundEnabled !== false;
        this.animationSpeed = options.animationSpeed || 'normal';
    }
    
    validate() {
        const errors = [];
        
        if (this.playerCount < 2 || this.playerCount > 6) {
            errors.push('Player count must be between 2 and 6');
        }
        
        if (this.startingChips < this.bigBlind * 10) {
            errors.push('Starting chips must be at least 10x big blind');
        }
        
        if (this.smallBlind >= this.bigBlind) {
            errors.push('Small blind must be less than big blind');
        }
        
        if (this.bigBlind <= 0) {
            errors.push('Big blind must be positive');
        }
        
        return errors;
    }
    
    isValid() {
        return this.validate().length === 0;
    }
}
```

## 🎨 Settings UI

### Settings Modal HTML

```html
<div id="settings-modal" class="modal">
    <div class="modal-content settings-content">
        <h2>⚙️ Game Settings</h2>
        
        <!-- Preset Buttons -->
        <div class="presets">
            <button class="preset-btn" data-preset="quick">Quick Play</button>
            <button class="preset-btn" data-preset="casual">Casual</button>
            <button class="preset-btn" data-preset="tournament">Tournament</button>
        </div>
        
        <!-- Player Settings -->
        <div class="settings-section">
            <h3>Players</h3>
            
            <div class="setting-row">
                <label>Your Name:</label>
                <input type="text" id="player-name" value="Player" maxlength="20">
            </div>
            
            <div class="setting-row">
                <label>Number of Players:</label>
                <select id="player-count">
                    <option value="2">2 Players (Heads-Up)</option>
                    <option value="3">3 Players</option>
                    <option value="4">4 Players</option>
                    <option value="5">5 Players</option>
                    <option value="6" selected>6 Players</option>
                </select>
            </div>
            
            <div class="setting-row">
                <label>AI Difficulty:</label>
                <select id="ai-difficulty">
                    <option value="easy">Easy</option>
                    <option value="medium" selected>Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>
        </div>
        
        <!-- Chip Settings -->
        <div class="settings-section">
            <h3>Chips & Blinds</h3>
            
            <div class="setting-row">
                <label>Starting Chips:</label>
                <input type="number" id="starting-chips" value="1000" min="100" step="100">
            </div>
            
            <div class="setting-row">
                <label>Small Blind:</label>
                <input type="number" id="small-blind" value="10" min="1" step="5">
            </div>
            
            <div class="setting-row">
                <label>Big Blind:</label>
                <input type="number" id="big-blind" value="20" min="2" step="5">
            </div>
        </div>
        
        <!-- UI Settings -->
        <div class="settings-section">
            <h3>Interface</h3>
            
            <div class="setting-row">
                <label>Sound Effects:</label>
                <input type="checkbox" id="sound-enabled" checked>
            </div>
            
            <div class="setting-row">
                <label>Animation Speed:</label>
                <select id="animation-speed">
                    <option value="fast">Fast</option>
                    <option value="normal" selected>Normal</option>
                    <option value="slow">Slow</option>
                </select>
            </div>
        </div>
        
        <!-- Validation Messages -->
        <div id="settings-errors" class="error-messages"></div>
        
        <!-- Action Buttons -->
        <div class="settings-actions">
            <button id="save-settings" class="btn btn-primary">Start Game</button>
            <button id="cancel-settings" class="btn btn-secondary">Cancel</button>
        </div>
    </div>
</div>
```

### Settings CSS

```css
.settings-content {
    max-width: 600px;
    max-height: 80vh;
    overflow-y: auto;
    padding: 30px;
}

.presets {
    display: flex;
    gap: 10px;
    margin-bottom: 30px;
}

.preset-btn {
    flex: 1;
    padding: 15px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: transform 0.2s;
}

.preset-btn:hover {
    transform: scale(1.05);
}

.settings-section {
    margin-bottom: 25px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
}

.settings-section h3 {
    margin-top: 0;
    margin-bottom: 15px;
    color: #667eea;
}

.setting-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

.setting-row label {
    font-weight: bold;
    flex: 1;
}

.setting-row input,
.setting-row select {
    flex: 1;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
}

.error-messages {
    color: #f44336;
    padding: 10px;
    margin: 10px 0;
    background: rgba(244, 67, 54, 0.1);
    border-radius: 5px;
    display: none;
}

.error-messages.show {
    display: block;
}

.settings-actions {
    display: flex;
    gap: 15px;
    margin-top: 20px;
}

.settings-actions .btn {
    flex: 1;
    padding: 15px;
    font-size: 18px;
}
```

## 🎯 Preset Configurations

### Predefined Presets

```javascript
const PRESETS = {
    quick: {
        name: 'Quick Play',
        playerCount: 3,
        startingChips: 500,
        smallBlind: 10,
        bigBlind: 20,
        aiDifficulty: 'easy'
    },
    
    casual: {
        name: 'Casual Game',
        playerCount: 6,
        startingChips: 1000,
        smallBlind: 10,
        bigBlind: 20,
        aiDifficulty: 'medium'
    },
    
    tournament: {
        name: 'Tournament',
        playerCount: 6,
        startingChips: 1500,
        smallBlind: 25,
        bigBlind: 50,
        aiDifficulty: 'hard'
    }
};
```

### Applying a Preset

```javascript
function applyPreset(presetName) {
    const preset = PRESETS[presetName];
    
    if (!preset) {
        console.error('Unknown preset:', presetName);
        return;
    }
    
    // Update form fields
    document.getElementById('player-count').value = preset.playerCount;
    document.getElementById('starting-chips').value = preset.startingChips;
    document.getElementById('small-blind').value = preset.smallBlind;
    document.getElementById('big-blind').value = preset.bigBlind;
    document.getElementById('ai-difficulty').value = preset.aiDifficulty;
    
    // Show confirmation
    showMessage(`Loaded "${preset.name}" preset`);
}

// Attach to preset buttons
document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const preset = btn.dataset.preset;
        applyPreset(preset);
    });
});
```

## 💾 Saving and Loading Settings

### Save to localStorage

```javascript
function saveSettings(config) {
    try {
        const configJson = JSON.stringify(config);
        localStorage.setItem('pokerGameConfig', configJson);
        console.log('Settings saved');
        return true;
    } catch (error) {
        console.error('Failed to save settings:', error);
        return false;
    }
}
```

### Load from localStorage

```javascript
function loadSettings() {
    try {
        const configJson = localStorage.getItem('pokerGameConfig');
        
        if (!configJson) {
            console.log('No saved settings found, using defaults');
            return new GameConfig();
        }
        
        const configData = JSON.parse(configJson);
        const config = new GameConfig(configData);
        
        console.log('Settings loaded');
        return config;
    } catch (error) {
        console.error('Failed to load settings:', error);
        return new GameConfig();
    }
}
```

### Clear Saved Settings

```javascript
function clearSettings() {
    localStorage.removeItem('pokerGameConfig');
    console.log('Settings cleared');
}
```

## ✅ Validating Settings

### Real-Time Validation

```javascript
function validateAndShowErrors() {
    const config = getConfigFromForm();
    const errors = config.validate();
    
    const errorDiv = document.getElementById('settings-errors');
    
    if (errors.length > 0) {
        errorDiv.innerHTML = '<ul>' + 
            errors.map(err => `<li>${err}</li>`).join('') + 
            '</ul>';
        errorDiv.classList.add('show');
        return false;
    } else {
        errorDiv.classList.remove('show');
        return true;
    }
}

// Attach to form inputs
document.querySelectorAll('.setting-row input, .setting-row select').forEach(input => {
    input.addEventListener('change', validateAndShowErrors);
});
```

### Get Configuration from Form

```javascript
function getConfigFromForm() {
    return new GameConfig({
        playerCount: parseInt(document.getElementById('player-count').value),
        playerName: document.getElementById('player-name').value,
        startingChips: parseInt(document.getElementById('starting-chips').value),
        smallBlind: parseInt(document.getElementById('small-blind').value),
        bigBlind: parseInt(document.getElementById('big-blind').value),
        aiDifficulty: document.getElementById('ai-difficulty').value,
        soundEnabled: document.getElementById('sound-enabled').checked,
        animationSpeed: document.getElementById('animation-speed').value
    });
}
```

### Apply Configuration to Form

```javascript
function applyConfigToForm(config) {
    document.getElementById('player-count').value = config.playerCount;
    document.getElementById('player-name').value = config.playerName;
    document.getElementById('starting-chips').value = config.startingChips;
    document.getElementById('small-blind').value = config.smallBlind;
    document.getElementById('big-blind').value = config.bigBlind;
    document.getElementById('ai-difficulty').value = config.aiDifficulty;
    document.getElementById('sound-enabled').checked = config.soundEnabled;
    document.getElementById('animation-speed').value = config.animationSpeed;
}
```

## 🚀 Starting a Game with Configuration

### Save and Start

```javascript
document.getElementById('save-settings').addEventListener('click', () => {
    // Validate
    if (!validateAndShowErrors()) {
        return;
    }
    
    // Get configuration
    const config = getConfigFromForm();
    
    // Save to localStorage
    saveSettings(config);
    
    // Hide settings modal
    document.getElementById('settings-modal').style.display = 'none';
    
    // Start game with this configuration
    startNewGame(config);
});
```

### Starting New Game

```javascript
function startNewGame(config) {
    console.log('Starting new game with config:', config);
    
    // Create game state with configuration
    const gameState = createGame(
        config.playerCount,
        config.startingChips
    );
    
    // Apply configuration
    gameState.smallBlind = config.smallBlind;
    gameState.bigBlind = config.bigBlind;
    gameState.players[0].name = config.playerName;
    
    // Set AI difficulty for all AI players
    gameState.players.forEach(player => {
        if (player.isAI) {
            player.aiConfig = createAI(config.aiDifficulty);
        }
    });
    
    // Apply UI settings
    applyUISettings(config);
    
    // Start first hand
    startNewHand(gameState);
}
```

### Applying UI Settings

```javascript
function applyUISettings(config) {
    // Sound
    window.soundEnabled = config.soundEnabled;
    
    // Animation speed
    const speedMultipliers = {
        fast: 0.5,
        normal: 1.0,
        slow: 1.5
    };
    window.animationSpeedMultiplier = speedMultipliers[config.animationSpeed];
    
    // Theme
    if (config.theme) {
        document.body.className = `theme-${config.theme}`;
    }
}
```

## 🎲 Dynamic Configuration Changes

### Changing Settings Mid-Game

```javascript
function canChangeSettings(gameState) {
    // Only allow changes between hands
    return gameState.phase === 'waiting';
}

function openSettings() {
    if (gameState && !canChangeSettings(gameState)) {
        alert('Cannot change settings during a hand. Please finish the current hand first.');
        return;
    }
    
    // Load current configuration
    const config = loadSettings();
    applyConfigToForm(config);
    
    // Show modal
    document.getElementById('settings-modal').style.display = 'flex';
}
```

### Settings Button

```html
<button id="settings-btn" class="btn btn-settings">⚙️ Settings</button>
```

```javascript
document.getElementById('settings-btn').addEventListener('click', openSettings);
```

## 📊 Advanced: Blind Increase Schedule

### Tournament Blind Levels

```javascript
const blindLevels = [
    { smallBlind: 10, bigBlind: 20, duration: 10 },    // Level 1: 10 minutes
    { smallBlind: 15, bigBlind: 30, duration: 10 },    // Level 2
    { smallBlind: 25, bigBlind: 50, duration: 10 },    // Level 3
    { smallBlind: 50, bigBlind: 100, duration: 10 },   // Level 4
    { smallBlind: 75, bigBlind: 150, duration: 10 },   // Level 5
    { smallBlind: 100, bigBlind: 200, duration: 10 }   // Level 6
];

let currentLevel = 0;
let levelStartTime = Date.now();

function checkBlindIncrease(gameState) {
    const elapsed = Date.now() - levelStartTime;
    const levelDuration = blindLevels[currentLevel].duration * 60 * 1000;  // Convert to ms
    
    if (elapsed >= levelDuration && currentLevel < blindLevels.length - 1) {
        currentLevel++;
        levelStartTime = Date.now();
        
        // Update blinds
        gameState.smallBlind = blindLevels[currentLevel].smallBlind;
        gameState.bigBlind = blindLevels[currentLevel].bigBlind;
        
        // Notify players
        showMessage(`Blinds increased to ${gameState.smallBlind}/${gameState.bigBlind}`);
        logAction('System', `Blinds increased to ${gameState.smallBlind}/${gameState.bigBlind}`);
    }
}
```

## 💡 Best Practices

### 1. Validate All Inputs

```javascript
function validatePlayerCount(count) {
    if (count < 2 || count > 6) {
        return { valid: false, error: 'Must be 2-6 players' };
    }
    return { valid: true };
}

function validateBlinds(smallBlind, bigBlind) {
    if (smallBlind >= bigBlind) {
        return { valid: false, error: 'Small blind must be less than big blind' };
    }
    return { valid: true };
}
```

### 2. Provide Good Defaults

```javascript
// Use sensible defaults
const DEFAULT_CONFIG = {
    playerCount: 6,
    startingChips: 1000,
    smallBlind: 10,
    bigBlind: 20
};
```

### 3. Show Units and Ranges

```html
<label>Starting Chips (100-10000):</label>
<input type="number" min="100" max="10000" step="100">
```

## 🔍 Common Mistakes to Avoid

### Mistake 1: Not Validating Input

```javascript
// ❌ BAD: No validation
const chips = parseInt(input.value);
gameState.startingChips = chips;

// ✅ GOOD: Validate first
const chips = parseInt(input.value);
if (chips >= 100 && chips <= 10000) {
    gameState.startingChips = chips;
} else {
    alert('Invalid chip amount');
}
```

### Mistake 2: Losing Settings on Refresh

```javascript
// ✅ Save to localStorage
saveSettings(config);

// ✅ Load on page load
window.addEventListener('load', () => {
    const config = loadSettings();
    applyConfigToForm(config);
});
```

### Mistake 3: Changing Settings During Play

```javascript
// ✅ Check if safe to change
if (gameState.phase !== 'waiting') {
    alert('Cannot change settings during a hand');
    return;
}
```

## 🏆 Key Takeaways

- **Configuration object** centralizes all game settings
- **Validation** prevents invalid configurations
- **Presets** provide quick setup options
- **localStorage** persists settings between sessions
- **UI form** makes settings accessible and clear
- **Real-time validation** gives immediate feedback
- **Sensible defaults** make setup easy
- **Flexibility** allows various play styles

## 📝 Practice Challenges

Ready to practice? Check the `practice/` folder for exercises:

1. **Exercise 1:** Create a settings form with validation
2. **Exercise 2:** Implement 3 preset configurations
3. **Exercise 3:** Save and load settings from localStorage
4. **Exercise 4:** Add a blind increase schedule for tournaments

## 🎯 What's Next?

In **Lesson 4.12**, we'll add **Polish & Enhancement** - sound effects, responsive design, keyboard shortcuts, and accessibility features!

---

**Excellent! 🎉 Your game is now highly customizable and professional!**
