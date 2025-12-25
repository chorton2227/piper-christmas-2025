
Essential patterns and code snippets for building games with JavaScript!

---

## Table of Contents
1. [Game State Management](#game-state-management)
2. [Combat Systems](#combat-systems)
3. [Inventory Management](#inventory-management)
4. [Save/Load Systems](#saveload-systems)
5. [Quest Tracking](#quest-tracking)
6. [Achievement Systems](#achievement-systems)
7. [UI Updates](#ui-updates)
8. [Common Patterns](#common-patterns)

---

## Game State Management

### Basic Game Object
```javascript
const game = {
    player: {
        health: 100,
        maxHealth: 100,
        attack: 10,
        defense: 5,
        gold: 50,
        xp: 0,
        level: 1
    },
    currentLocation: 'town',
    inCombat: false
};
```

### Update All Stats
```javascript
function updateUI() {
    document.getElementById('health').textContent = game.player.health;
    document.getElementById('gold').textContent = game.player.gold;
    document.getElementById('level').textContent = game.player.level;
}
```

---

## Combat Systems

### Start Combat
```javascript
function startCombat(enemyType) {
    game.currentEnemy = { ...ENEMIES[enemyType] };
    game.inCombat = true;
    
    showMessage(`${game.currentEnemy.name} appears!`, 'combat');
    updateCombatUI();
}
```

### Calculate Damage
```javascript
function calculateDamage(attacker, defender) {
    // Random damage between 50% and 100% of attack
    const baseDamage = Math.random() * attacker.attack + attacker.attack / 2;
    
    // Apply defense
    const finalDamage = Math.max(0, Math.floor(baseDamage - defender.defense));
    
    return finalDamage;
}
```

### Player Attack
```javascript
function attack() {
    const damage = calculateDamage(game.player, game.currentEnemy);
    
    game.currentEnemy.health -= damage;
    showMessage(`You deal ${damage} damage!`, 'success');
    
    if (game.currentEnemy.health <= 0) {
        victory();
    } else {
        setTimeout(enemyAttack, 1000);
    }
}
```

### Enemy Attack
```javascript
function enemyAttack() {
    const damage = calculateDamage(game.currentEnemy, game.player);
    
    game.player.health -= damage;
    showMessage(`Enemy deals ${damage} damage!`, 'error');
    
    if (game.player.health <= 0) {
        defeat();
    }
    
    updateUI();
}
```

### Victory/Defeat
```javascript
function victory() {
    const goldReward = game.currentEnemy.gold;
    const xpReward = game.currentEnemy.xp;
    
    game.player.gold += goldReward;
    game.player.xp += xpReward;
    
    showMessage(`Victory! +${goldReward} gold, +${xpReward} XP`, 'success');
    
    game.inCombat = false;
    checkLevelUp();
    updateUI();
}

function defeat() {
    game.player.gold = Math.floor(game.player.gold * 0.8);
    game.player.health = game.player.maxHealth;
    game.currentLocation = 'town';
    game.inCombat = false;
    
    showMessage('Defeated! Lost 20% gold, returned to town', 'error');
    updateUI();
}
```

---

## Inventory Management

### Add Item
```javascript
function addItem(itemId) {
    game.player.inventory.push(itemId);
    showMessage(`Obtained ${ITEMS[itemId].name}!`, 'success');
    updateInventory();
}
```

### Remove Item
```javascript
function removeItem(index) {
    const item = game.player.inventory[index];
    game.player.inventory.splice(index, 1);
    return item;
}
```

### Use Item
```javascript
function useItem(index) {
    const itemId = game.player.inventory[index];
    const item = ITEMS[itemId];
    
    if (item.type === 'consumable') {
        if (item.healing) {
            game.player.health = Math.min(
                game.player.health + item.healing,
                game.player.maxHealth
            );
            showMessage(`Used ${item.name}! Healed ${item.healing} HP`, 'success');
        }
        
        removeItem(index);
        updateUI();
    } else if (item.type === 'equipment') {
        equipItem(item);
    }
}
```

### Display Inventory
```javascript
function updateInventory() {
    const inventoryDiv = document.getElementById('inventory');
    inventoryDiv.innerHTML = '';
    
    if (game.player.inventory.length === 0) {
        inventoryDiv.innerHTML = '<p>Empty</p>';
        return;
    }
    
    game.player.inventory.forEach((itemId, index) => {
        const item = ITEMS[itemId];
        const itemDiv = document.createElement('div');
        itemDiv.className = 'inventory-item';
        itemDiv.textContent = item.name;
        itemDiv.onclick = () => useItem(index);
        inventoryDiv.appendChild(itemDiv);
    });
}
```

---

## Save/Load Systems

### Save Game
```javascript
function saveGame() {
    const saveData = {
        player: game.player,
        location: game.currentLocation,
        quests: game.quests,
        achievements: game.achievements,
        timestamp: Date.now()
    };
    
    try {
        localStorage.setItem('myGame', JSON.stringify(saveData));
        showMessage('Game saved!', 'success');
    } catch (error) {
        showMessage('Failed to save!', 'error');
        console.error(error);
    }
}
```

### Load Game
```javascript
function loadGame() {
    const saved = localStorage.getItem('myGame');
    
    if (!saved) {
        showMessage('No saved game found!', 'error');
        return;
    }
    
    try {
        const data = JSON.parse(saved);
        
        // Restore all data
        Object.assign(game.player, data.player);
        game.currentLocation = data.location;
        Object.assign(game.quests, data.quests);
        Object.assign(game.achievements, data.achievements);
        
        updateUI();
        showMessage('Game loaded!', 'success');
    } catch (error) {
        showMessage('Failed to load!', 'error');
        console.error(error);
    }
}
```

### Auto-Save
```javascript
let autoSaveTimer;

function startAutoSave() {
    autoSaveTimer = setInterval(() => {
        saveGame();
    }, 60000); // Save every minute
}

function stopAutoSave() {
    clearInterval(autoSaveTimer);
}
```

---

## Quest Tracking

### Quest Structure
```javascript
const quests = {
    quest1: {
        id: 'quest1',
        name: 'First Steps',
        description: 'Defeat 3 enemies',
        type: 'kill',
        required: 3,
        current: 0,
        completed: false,
        reward: { gold: 100, xp: 50 }
    }
};
```

### Update Quest Progress
```javascript
function updateQuestProgress(type, value = 1) {
    for (let questId in quests) {
        const quest = quests[questId];
        
        if (!quest.completed && quest.type === type) {
            quest.current += value;
            
            if (quest.current >= quest.required) {
                completeQuest(questId);
            }
        }
    }
    
    updateQuestDisplay();
}
```

### Complete Quest
```javascript
function completeQuest(questId) {
    const quest = quests[questId];
    quest.completed = true;
    
    // Award rewards
    if (quest.reward.gold) game.player.gold += quest.reward.gold;
    if (quest.reward.xp) game.player.xp += quest.reward.xp;
    if (quest.reward.item) addItem(quest.reward.item);
    
    showMessage(`Quest Complete: ${quest.name}!`, 'success');
    checkLevelUp();
    updateUI();
}
```

### Display Quests
```javascript
function updateQuestDisplay() {
    const questDiv = document.getElementById('quests');
    questDiv.innerHTML = '<h3>📜 Quests</h3>';
    
    for (let questId in quests) {
        const quest = quests[questId];
        
        const div = document.createElement('div');
        div.className = `quest ${quest.completed ? 'completed' : ''}`;
        div.innerHTML = `
            <strong>${quest.name}</strong>
            <p>${quest.description}</p>
            <div class="progress">
                ${quest.current} / ${quest.required}
                ${quest.completed ? '✓' : ''}
            </div>
        `;
        
        questDiv.appendChild(div);
    }
}
```

---

## Achievement Systems

### Achievement Structure
```javascript
const achievements = {
    firstBlood: {
        id: 'firstBlood',
        name: 'First Blood',
        description: 'Win your first battle',
        unlocked: false,
        check: () => game.stats.wins >= 1
    },
    wealthy: {
        id: 'wealthy',
        name: 'Wealthy',
        description: 'Have 500 gold',
        unlocked: false,
        check: () => game.player.gold >= 500
    }
};
```

### Check Achievements
```javascript
function checkAchievements() {
    for (let achId in achievements) {
        const ach = achievements[achId];
        
        if (!ach.unlocked && ach.check()) {
            unlockAchievement(achId);
        }
    }
}
```

### Unlock Achievement
```javascript
function unlockAchievement(achId) {
    const ach = achievements[achId];
    ach.unlocked = true;
    
    // Show notification
    const notification = document.createElement('div');
    notification.className = 'achievement-notification';
    notification.innerHTML = `
        <h3>🏆 Achievement Unlocked!</h3>
        <p>${ach.name}</p>
        <small>${ach.description}</small>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 500);
    }, 3000);
    
    updateAchievementDisplay();
}
```

---

## UI Updates

### Show Message
```javascript
function showMessage(text, type = 'info') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = text;
    
    const container = document.getElementById('messages');
    container.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.classList.add('fade-out');
        setTimeout(() => messageDiv.remove(), 500);
    }, 3000);
}
```

### Update Health Bar
```javascript
function updateHealthBar(current, max, elementId) {
    const percentage = (current / max) * 100;
    const bar = document.getElementById(elementId);
    
    bar.style.width = percentage + '%';
    bar.textContent = `${current} / ${max}`;
    
    // Color coding
    if (percentage > 60) {
        bar.style.backgroundColor = 'green';
    } else if (percentage > 30) {
        bar.style.backgroundColor = 'orange';
    } else {
        bar.style.backgroundColor = 'red';
    }
}
```

### Modal Windows
```javascript
function openModal(content) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    
    modalContent.innerHTML = content;
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
```

---

## Common Patterns

### Level Up System
```javascript
function checkLevelUp() {
    const xpNeeded = game.player.level * 100;
    
    while (game.player.xp >= xpNeeded) {
        game.player.xp -= xpNeeded;
        game.player.level++;
        
        // Increase stats
        game.player.maxHealth += 10;
        game.player.health = game.player.maxHealth;
        game.player.attack += 2;
        game.player.defense += 1;
        
        showMessage(`Level Up! Now level ${game.player.level}!`, 'success');
    }
}
```

### Random Encounters
```javascript
function explore() {
    const location = LOCATIONS[game.currentLocation];
    
    // 60% chance of encounter
    if (Math.random() < 0.6 && location.encounters) {
        const enemy = location.encounters[
            Math.floor(Math.random() * location.encounters.length)
        ];
        startCombat(enemy);
    } else {
        // Find gold
        const gold = Math.floor(Math.random() * 20) + 5;
        game.player.gold += gold;
        showMessage(`Found ${gold} gold!`, 'success');
        updateUI();
    }
}
```

### Equipment System
```javascript
function equipItem(item) {
    const slot = item.slot; // 'weapon' or 'armor'
    
    // Unequip old item
    if (game.player.equipment[slot]) {
        const oldItem = game.player.equipment[slot];
        
        // Remove bonuses
        if (oldItem.attackBonus) game.player.attack -= oldItem.attackBonus;
        if (oldItem.defenseBonus) game.player.defense -= oldItem.defenseBonus;
        
        // Return to inventory
        addItem(oldItem.id);
    }
    
    // Equip new item
    game.player.equipment[slot] = item;
    
    // Apply bonuses
    if (item.attackBonus) game.player.attack += item.attackBonus;
    if (item.defenseBonus) game.player.defense += item.defenseBonus;
    
    showMessage(`Equipped ${item.name}!`, 'success');
    updateUI();
}
```

### Shop System
```javascript
function buyItem(itemId) {
    const item = ITEMS[itemId];
    
    if (game.player.gold >= item.value) {
        game.player.gold -= item.value;
        addItem(itemId);
        showMessage(`Bought ${item.name}!`, 'success');
        updateUI();
    } else {
        showMessage('Not enough gold!', 'error');
    }
}
```

### Timer-Based Events
```javascript
function startTimer(duration, callback) {
    let timeLeft = duration;
    
    const timer = setInterval(() => {
        timeLeft--;
        
        document.getElementById('timer').textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            callback();
        }
    }, 1000);
    
    return timer;
}
```

---

## Debugging Tips

### Console Logging
```javascript
// Log game state
console.log('Player:', game.player);
console.log('Location:', game.currentLocation);
console.log('In Combat:', game.inCombat);

// Log function calls
function attack() {
    console.log('attack() called');
    console.log('Player attack:', game.player.attack);
    // ... rest of function
}
```

### Error Handling
```javascript
function safeAction(action) {
    try {
        action();
    } catch (error) {
        console.error('Error:', error);
        showMessage('Something went wrong!', 'error');
    }
}
```

### Validation
```javascript
function validatePlayer() {
    if (game.player.health < 0) {
        console.warn('Health below 0! Fixing...');
        game.player.health = 0;
    }
    
    if (game.player.gold < 0) {
        console.warn('Gold below 0! Fixing...');
        game.player.gold = 0;
    }
}
```

---

## Quick Tips

✅ **Do:**
- Save frequently
- Update UI after state changes
- Use meaningful variable names
- Add comments for complex logic
- Test edge cases (0 health, negative gold, etc.)

❌ **Don't:**
- Modify state directly without updating UI
- Forget to check for null/undefined
- Use global variables unnecessarily
- Hard-code values (use constants)
- Skip error handling

---

## Useful Formulas

### Damage Calculation
```javascript
const damage = Math.floor(
    (attacker.attack * Math.random() + attacker.attack / 2) - defender.defense
);
```

### XP Required for Level
```javascript
const xpNeeded = level * 100;
// OR for exponential growth:
const xpNeeded = Math.floor(100 * Math.pow(1.5, level - 1));
```

### Drop Chance
```javascript
const dropChance = Math.random() < 0.3; // 30% chance
```

### Random Array Element
```javascript
const randomItem = array[Math.floor(Math.random() * array.length)];
```

### Random Number in Range
```javascript
function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

---
