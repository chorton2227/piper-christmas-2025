
This document provides all the code implementations for Exercise 2 (10 features) and Exercise 3 (6 game genres).

## Exercise 2: Feature Implementations

All 10 features with complete working code.

---

## Feature 1: Quest System (⭐⭐⭐)

### Quest Data Structure
```javascript
const quests = {
    firstBlood: {
        id: 'firstBlood',
        name: 'First Blood',
        description: 'Defeat your first monster',
        type: 'kill',
        target: null, // any monster
        required: 1,
        current: 0,
        reward: { gold: 50, xp: 25 },
        completed: false
    },
    goblinHunter: {
        id: 'goblinHunter',
        name: 'Goblin Hunter',
        description: 'Defeat 5 goblins',
        type: 'kill',
        target: 'goblin',
        required: 5,
        current: 0,
        reward: { gold: 100, attack: 2 },
        completed: false
    },
    goldCollector: {
        id: 'goldCollector',
        name: 'Gold Collector',
        description: 'Collect 200 gold',
        type: 'collect',
        required: 200,
        current: 0,
        reward: { maxHealth: 20 },
        completed: false
    }
};
```

### Quest Functions
```javascript
// Update quest progress
function updateQuestProgress(type, target = null, amount = 1) {
    for (let questId in quests) {
        const quest = quests[questId];
        
        if (quest.completed) continue;
        
        if (quest.type === type) {
            if (quest.target === null || quest.target === target) {
                quest.current += amount;
                
                if (quest.current >= quest.required) {
                    completeQuest(questId);
                }
            }
        }
    }
    
    updateQuestDisplay();
}

// Complete quest
function completeQuest(questId) {
    const quest = quests[questId];
    quest.completed = true;
    
    // Award rewards
    if (quest.reward.gold) player.gold += quest.reward.gold;
    if (quest.reward.xp) player.xp += quest.reward.xp;
    if (quest.reward.attack) player.attack += quest.reward.attack;
    if (quest.reward.maxHealth) {
        player.maxHealth += quest.reward.maxHealth;
        player.health += quest.reward.maxHealth;
    }
    
    showMessage(`Quest Completed: ${quest.name}!`, 'success');
    checkLevelUp();
}

// Display quests
function updateQuestDisplay() {
    const questDiv = document.getElementById('quest-list');
    questDiv.innerHTML = '';
    
    for (let questId in quests) {
        const quest = quests[questId];
        
        const div = document.createElement('div');
        div.className = `quest-item ${quest.completed ? 'completed' : ''}`;
        
        const progress = Math.min(100, (quest.current / quest.required) * 100);
        
        div.innerHTML = `
            <strong>${quest.name}</strong> ${quest.completed ? '✓' : ''}
            <p>${quest.description}</p>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${progress}%"></div>
            </div>
            <small>${quest.current} / ${quest.required}</small>
        `;
        
        questDiv.appendChild(div);
    }
}

// Call after killing monster
victory() {
    // ... existing code ...
    updateQuestProgress('kill', currentEnemy.id, 1);
}
```

### Quest HTML
```html
<div class="quests-panel">
    <h3>📜 Active Quests</h3>
    <div id="quest-list"></div>
</div>
```

### Quest CSS
```css
.quest-item {
    background: white;
    padding: 12px;
    margin: 8px 0;
    border-radius: 8px;
    border-left: 4px solid #667eea;
}

.quest-item.completed {
    opacity: 0.6;
    border-left-color: #28a745;
}

.progress-bar {
    background: #e9ecef;
    height: 8px;
    border-radius: 4px;
    overflow: hidden;
    margin: 8px 0;
}

.progress-fill {
    background: linear-gradient(90deg, #667eea, #764ba2);
    height: 100%;
    transition: width 0.3s;
}
```

---

## Feature 2: Achievement System (⭐⭐)

### Achievement Data
```javascript
const achievements = {
    firstVictory: {
        id: 'firstVictory',
        name: 'First Victory',
        description: 'Win your first battle',
        unlocked: false,
        check: () => player.stats.wins >= 1
    },
    survivor: {
        id: 'survivor',
        name: 'Survivor',
        description: 'Win a battle with 1 HP',
        unlocked: false,
        check: () => player.health === 1 && justWon
    },
    wealthy: {
        id: 'wealthy',
        name: 'Wealthy Adventurer',
        description: 'Have 500 gold at once',
        unlocked: false,
        check: () => player.gold >= 500
    },
    warrior: {
        id: 'warrior',
        name: 'Warrior',
        description: 'Defeat 25 monsters',
        unlocked: false,
        check: () => player.stats.monstersDefeated >= 25
    },
    legendary: {
        id: 'legendary',
        name: 'Legendary',
        description: 'Reach level 10',
        unlocked: false,
        check: () => player.level >= 10
    }
};

// Add stats tracking to player
player.stats = {
    wins: 0,
    monstersDefeated: 0,
    totalGoldEarned: 0
};
```

### Achievement Functions
```javascript
// Check achievements
function checkAchievements() {
    for (let achId in achievements) {
        const ach = achievements[achId];
        
        if (!ach.unlocked && ach.check()) {
            unlockAchievement(achId);
        }
    }
}

// Unlock achievement
function unlockAchievement(achId) {
    const ach = achievements[achId];
    ach.unlocked = true;
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = 'achievement-notification';
    notification.innerHTML = `
        <div class="achievement-content">
            <h3>🏆 Achievement Unlocked!</h3>
            <h4>${ach.name}</h4>
            <p>${ach.description}</p>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 500);
    }, 4000);
    
    updateAchievementDisplay();
}

// Display achievements
function updateAchievementDisplay() {
    const achDiv = document.getElementById('achievement-list');
    achDiv.innerHTML = '';
    
    let unlockedCount = 0;
    let totalCount = 0;
    
    for (let achId in achievements) {
        const ach = achievements[achId];
        totalCount++;
        if (ach.unlocked) unlockedCount++;
        
        const div = document.createElement('div');
        div.className = `achievement ${ach.unlocked ? 'unlocked' : 'locked'}`;
        div.innerHTML = `
            <span class="achievement-icon">${ach.unlocked ? '🏆' : '🔒'}</span>
            <div class="achievement-info">
                <strong>${ach.name}</strong>
                <small>${ach.description}</small>
            </div>
        `;
        
        achDiv.appendChild(div);
    }
    
    document.getElementById('achievement-count').textContent = 
        `${unlockedCount}/${totalCount}`;
}

// Call after important events
victory() {
    // ... existing code ...
    player.stats.wins++;
    player.stats.monstersDefeated++;
    checkAchievements();
}
```

### Achievement CSS
```css
.achievement-notification {
    position: fixed;
    top: -200px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 20px 30px;
    border-radius: 15px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.5);
    z-index: 10000;
    transition: top 0.5s;
}

.achievement-notification.show {
    top: 20px;
}

.achievement {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px;
    margin: 5px 0;
    border-radius: 8px;
    background: white;
}

.achievement.locked {
    opacity: 0.4;
}

.achievement-icon {
    font-size: 24px;
}
```

---

## Feature 3: Equipment System (⭐⭐⭐)

### Equipment Data
```javascript
// Add to player object
player.equipment = {
    weapon: null,
    armor: null,
    accessory: null
};

// Update item data
ITEMS.sword.slot = 'weapon';
ITEMS.shield.slot = 'armor';

// Add new items
ITEMS.ring = {
    id: 'ring',
    name: 'Power Ring',
    type: 'equipment',
    slot: 'accessory',
    attackBonus: 3,
    defenseBonus: 2,
    price: 100
};
```

### Equipment Functions
```javascript
// Equip item
function equipItem(itemId) {
    const item = ITEMS[itemId];
    const slot = item.slot;
    
    // Unequip current item in slot
    if (player.equipment[slot]) {
        const oldItem = player.equipment[slot];
        unequipItem(oldItem);
    }
    
    // Equip new item
    player.equipment[slot] = itemId;
    
    // Apply stat bonuses
    if (item.attackBonus) player.attack += item.attackBonus;
    if (item.defenseBonus) player.defense += item.defenseBonus;
    if (item.healthBonus) {
        player.maxHealth += item.healthBonus;
        player.health += item.healthBonus;
    }
    
    // Remove from inventory
    const index = player.inventory.indexOf(itemId);
    if (index > -1) player.inventory.splice(index, 1);
    
    showMessage(`Equipped ${item.name}!`, 'success');
    updateEquipmentDisplay();
    updateUI();
}

// Unequip item
function unequipItem(itemId) {
    const item = ITEMS[itemId];
    
    // Remove stat bonuses
    if (item.attackBonus) player.attack -= item.attackBonus;
    if (item.defenseBonus) player.defense -= item.defenseBonus;
    if (item.healthBonus) {
        player.maxHealth -= item.healthBonus;
        player.health = Math.min(player.health, player.maxHealth);
    }
    
    // Add back to inventory
    player.inventory.push(itemId);
    
    // Remove from equipment slot
    for (let slot in player.equipment) {
        if (player.equipment[slot] === itemId) {
            player.equipment[slot] = null;
        }
    }
}

// Display equipment
function updateEquipmentDisplay() {
    for (let slot in player.equipment) {
        const equipDiv = document.getElementById(`equip-${slot}`);
        const itemId = player.equipment[slot];
        
        if (itemId) {
            const item = ITEMS[itemId];
            equipDiv.innerHTML = `
                <div class="equipped-item" onclick="unequipItem('${itemId}')">
                    <strong>${item.name}</strong>
                    <small>${item.description}</small>
                </div>
            `;
        } else {
            equipDiv.innerHTML = `<div class="empty-slot">Empty</div>`;
        }
    }
}
```

### Equipment HTML
```html
<div class="equipment-panel">
    <h3>⚔️ Equipment</h3>
    <div class="equipment-slots">
        <div class="slot">
            <label>Weapon:</label>
            <div id="equip-weapon"></div>
        </div>
        <div class="slot">
            <label>Armor:</label>
            <div id="equip-armor"></div>
        </div>
        <div class="slot">
            <label>Accessory:</label>
            <div id="equip-accessory"></div>
        </div>
    </div>
</div>
```

---

## Feature 4: Random Events (⭐⭐)

### Event Data & Functions
```javascript
const RANDOM_EVENTS = [
    {
        name: 'Mysterious Merchant',
        description: 'A traveling merchant offers you a free potion!',
        effect: () => {
            player.inventory.push('healthPotion');
        }
    },
    {
        name: 'Lucky Find',
        description: 'You found a treasure chest!',
        effect: () => {
            const gold = Math.floor(Math.random() * 50) + 25;
            player.gold += gold;
            showMessage(`Found ${gold} gold!`, 'success');
        }
    },
    {
        name: 'Blessing',
        description: 'A mysterious aura surrounds you!',
        effect: () => {
            player.attack += 2;
            showMessage('+2 Attack!', 'success');
        }
    },
    {
        name: 'Ambush',
        description: 'Bandits ambush you!',
        effect: () => {
            const damage = Math.floor(Math.random() * 10) + 5;
            player.health = Math.max(1, player.health - damage);
            showMessage(`Lost ${damage} HP!`, 'error');
        }
    },
    {
        name: 'Helpful Stranger',
        description: 'A stranger teaches you a technique!',
        effect: () => {
            player.xp += 25;
            showMessage('+25 XP!', 'success');
            checkLevelUp();
        }
    }
];

// Trigger random event
function triggerRandomEvent() {
    const event = RANDOM_EVENTS[Math.floor(Math.random() * RANDOM_EVENTS.length)];
    
    showMessage(`${event.name}: ${event.description}`, 'info');
    event.effect();
    updateUI();
}

// Update explore function
function explore() {
    // 20% chance of random event
    if (Math.random() < 0.2) {
        triggerRandomEvent();
        return;
    }
    
    // Normal exploration
    const goldFound = Math.floor(Math.random() * 20) + 10;
    player.gold += goldFound;
    showMessage(`You found ${goldFound} gold!`, 'success');
    updateUI();
}
```

---

## Feature 5: Difficulty Levels (⭐⭐)

### Difficulty System
```javascript
const DIFFICULTY_SETTINGS = {
    easy: {
        name: 'Easy',
        damageMultiplier: 0.75,
        goldMultiplier: 1.25,
        xpMultiplier: 1.0,
        description: 'For beginners'
    },
    normal: {
        name: 'Normal',
        damageMultiplier: 1.0,
        goldMultiplier: 1.0,
        xpMultiplier: 1.0,
        description: 'Balanced experience'
    },
    hard: {
        name: 'Hard',
        damageMultiplier: 1.5,
        goldMultiplier: 1.5,
        xpMultiplier: 2.0,
        description: 'For experts'
    }
};

let currentDifficulty = 'normal';

// Set difficulty
function setDifficulty(level) {
    currentDifficulty = level;
    const setting = DIFFICULTY_SETTINGS[level];
    showMessage(`Difficulty set to ${setting.name}`, 'info');
    updateDifficultyDisplay();
}

// Apply difficulty to damage
function calculateDamage(baseDamage, isPlayerDamage = true) {
    const multiplier = isPlayerDamage ? 
        1 / DIFFICULTY_SETTINGS[currentDifficulty].damageMultiplier :
        DIFFICULTY_SETTINGS[currentDifficulty].damageMultiplier;
    
    return Math.floor(baseDamage * multiplier);
}

// Apply difficulty to rewards
function applyDifficultyToRewards(gold, xp) {
    const setting = DIFFICULTY_SETTINGS[currentDifficulty];
    return {
        gold: Math.floor(gold * setting.goldMultiplier),
        xp: Math.floor(xp * setting.xpMultiplier)
    };
}

// Update victory function
victory() {
    const rewards = applyDifficultyToRewards(
        currentEnemy.gold,
        currentEnemy.xp
    );
    
    player.gold += rewards.gold;
    player.xp += rewards.xp;
    
    showMessage(`Victory! +${rewards.gold}g, +${rewards.xp}XP`, 'success');
}
```

### Difficulty HTML
```html
<div class="difficulty-selector">
    <h3>⚙️ Difficulty</h3>
    <button onclick="setDifficulty('easy')" class="success">Easy</button>
    <button onclick="setDifficulty('normal')" class="warning">Normal</button>
    <button onclick="setDifficulty('hard')" class="danger">Hard</button>
</div>
```

---

## Feature 6: Boss Battles (⭐⭐⭐)

### Boss Data
```javascript
const BOSSES = {
    dragon: {
        id: 'dragon',
        name: 'Ancient Dragon',
        health: 200,
        maxHealth: 200,
        attack: 25,
        defense: 10,
        gold: 500,
        xp: 200,
        isBoss: true,
        specialAttacks: ['fireBreath', 'tailSwipe', 'roar'],
        specialAttackChance: 0.3
    }
};

// Boss special attacks
function bossSpecialAttack() {
    const attackType = currentEnemy.specialAttacks[
        Math.floor(Math.random() * currentEnemy.specialAttacks.length)
    ];
    
    switch(attackType) {
        case 'fireBreath':
            const fireDamage = Math.floor(currentEnemy.attack * 1.5);
            player.health -= fireDamage;
            addCombatMessage(`${currentEnemy.name} breathes fire for ${fireDamage} damage!`, 'enemy');
            break;
            
        case 'tailSwipe':
            const tailDamage = currentEnemy.attack;
            player.health -= tailDamage;
            player.defense = Math.max(0, player.defense - 2);
            addCombatMessage(`Tail swipe! ${tailDamage} damage and -2 defense!`, 'enemy');
            break;
            
        case 'roar':
            player.attack = Math.max(1, player.attack - 3);
            addCombatMessage('The roar terrifies you! -3 attack!', 'enemy');
            break;
    }
}

// Update enemy attack for bosses
enemyAttack() {
    if (currentEnemy.isBoss && Math.random() < currentEnemy.specialAttackChance) {
        bossSpecialAttack();
    } else {
        // Normal attack
        // ... existing code ...
    }
}
```

---

## Feature 7: Crafting System (⭐⭐⭐)

### Crafting Data
```javascript
const MATERIALS = {
    wood: { name: 'Wood', description: 'Basic material' },
    iron: { name: 'Iron Ore', description: 'Metal ore' },
    leather: { name: 'Leather', description: 'From animals' },
    crystal: { name: 'Magic Crystal', description: 'Rare material' }
};

const RECIPES = {
    woodenSword: {
        name: 'Wooden Sword',
        result: 'sword',
        materials: { wood: 3 },
        description: 'Craft a basic sword'
    },
    ironArmor: {
        name: 'Iron Armor',
        result: 'armor',
        materials: { iron: 5, leather: 2 },
        description: 'Craft strong armor'
    },
    magicRing: {
        name: 'Magic Ring',
        result: 'ring',
        materials: { iron: 2, crystal: 1 },
        description: 'Craft a powerful ring'
    }
};

// Add materials to player
player.materials = { wood: 0, iron: 0, leather: 0, crystal: 0 };

// Craft item
function craftItem(recipeId) {
    const recipe = RECIPES[recipeId];
    
    // Check if player has materials
    for (let material in recipe.materials) {
        if (player.materials[material] < recipe.materials[material]) {
            showMessage('Not enough materials!', 'error');
            return;
        }
    }
    
    // Remove materials
    for (let material in recipe.materials) {
        player.materials[material] -= recipe.materials[material];
    }
    
    // Add crafted item
    player.inventory.push(recipe.result);
    
    showMessage(`Crafted ${recipe.name}!`, 'success');
    updateCraftingUI();
}

// Display crafting
function updateCraftingUI() {
    const craftingDiv = document.getElementById('crafting-list');
    craftingDiv.innerHTML = '';
    
    for (let recipeId in RECIPES) {
        const recipe = RECIPES[recipeId];
        
        // Check if can craft
        let canCraft = true;
        for (let material in recipe.materials) {
            if (player.materials[material] < recipe.materials[material]) {
                canCraft = false;
                break;
            }
        }
        
        const div = document.createElement('div');
        div.className = `recipe-item ${canCraft ? 'available' : 'unavailable'}`;
        
        let materialsHTML = '';
        for (let material in recipe.materials) {
            const required = recipe.materials[material];
            const has = player.materials[material];
            materialsHTML += `<div>${MATERIALS[material].name}: ${has}/${required}</div>`;
        }
        
        div.innerHTML = `
            <h4>${recipe.name}</h4>
            <p>${recipe.description}</p>
            <div class="materials">${materialsHTML}</div>
            <button onclick="craftItem('${recipeId}')" ${!canCraft ? 'disabled' : ''}>
                Craft
            </button>
        `;
        
        craftingDiv.appendChild(div);
    }
}
```

---

## Feature 8: Pet System (⭐⭐)

### Pet Data & Functions
```javascript
const PETS = {
    dog: {
        id: 'dog',
        name: 'Loyal Dog',
        attack: 5,
        ability: 'Doubles gold from battles',
        goldMultiplier: 2
    },
    cat: {
        id: 'cat',
        name: 'Lucky Cat',
        attack: 3,
        ability: 'Increases XP gain',
        xpMultiplier: 1.5
    },
    bird: {
        id: 'bird',
        name: 'Swift Bird',
        attack: 4,
        ability: '100% flee success',
        fleeBonus: true
    }
};

// Add to player
player.pet = null;

// Pet attacks in combat
function petAttack() {
    if (!player.pet) return 0;
    
    const pet = PETS[player.pet];
    const damage = Math.floor(Math.random() * pet.attack) + pet.attack;
    
    addCombatMessage(`Your ${pet.name} attacks for ${damage} damage!`, 'player');
    
    return damage;
}

// Update attack function
attack() {
    // ... existing player attack code ...
    
    // Add pet attack
    if (player.pet) {
        const petDamage = petAttack();
        currentEnemy.health -= petDamage;
    }
    
    // ... rest of code ...
}

// Apply pet bonuses
victory() {
    let gold = currentEnemy.gold;
    let xp = currentEnemy.xp;
    
    if (player.pet) {
        const pet = PETS[player.pet];
        if (pet.goldMultiplier) gold *= pet.goldMultiplier;
        if (pet.xpMultiplier) xp *= pet.xpMultiplier;
    }
    
    player.gold += gold;
    player.xp += xp;
}
```

---

## Feature 9: Status Effects (⭐⭐⭐)

### Status Effect System
```javascript
const STATUS_EFFECTS = {
    poisoned: {
        name: 'Poisoned',
        icon: '🤢',
        damagePerTurn: 5,
        duration: 3
    },
    strengthened: {
        name: 'Strengthened',
        icon: '💪',
        attackBonus: 5,
        duration: 3
    },
    shielded: {
        name: 'Shielded',
        icon: '🛡️',
        defenseBonus: 5,
        duration: 3
    },
    bleeding: {
        name: 'Bleeding',
        icon: '🩸',
        damagePerTurn: 8,
        duration: 2
    }
};

// Add to player and enemy
player.statusEffects = [];
currentEnemy.statusEffects = [];

// Apply status effect
function applyStatusEffect(target, effectId) {
    const effect = { ...STATUS_EFFECTS[effectId], id: effectId, turnsLeft: STATUS_EFFECTS[effectId].duration };
    target.statusEffects.push(effect);
    
    const targetName = target === player ? 'You' : currentEnemy.name;
    addCombatMessage(`${targetName} ${effect.name.toLowerCase()}!`, 'info');
    
    updateStatusDisplay();
}

// Process status effects
function processStatusEffects(target) {
    const targetName = target === player ? 'You' : currentEnemy.name;
    
    target.statusEffects = target.statusEffects.filter(effect => {
        // Apply effect
        if (effect.damagePerTurn) {
            target.health -= effect.damagePerTurn;
            addCombatMessage(`${targetName} take ${effect.damagePerTurn} ${effect.name} damage!`, 'enemy');
        }
        
        // Decrease duration
        effect.turnsLeft--;
        
        // Return true to keep effect
        return effect.turnsLeft > 0;
    });
    
    updateStatusDisplay();
}

// Update combat turn
attack() {
    // ... existing attack code ...
    
    // Process player status effects
    processStatusEffects(player);
    
    if (currentEnemy.health > 0) {
        setTimeout(() => {
            enemyAttack();
            // Process enemy status effects
            processStatusEffects(currentEnemy);
        }, 1000);
    }
}

// Display status effects
function updateStatusDisplay() {
    const playerEffects = document.getElementById('player-status');
    playerEffects.innerHTML = player.statusEffects.map(e => 
        `${e.icon} ${e.name} (${e.turnsLeft})`
    ).join(' ');
    
    if (currentEnemy) {
        const enemyEffects = document.getElementById('enemy-status');
        enemyEffects.innerHTML = currentEnemy.statusEffects.map(e => 
            `${e.icon} ${e.name} (${e.turnsLeft})`
        ).join(' ');
    }
}
```

---

## Feature 10: Mini-Games (⭐⭐)

### Fishing Mini-Game
```javascript
// Fishing mini-game
function startFishing() {
    const targetNumber = Math.floor(Math.random() * 10) + 1;
    let attempts = 3;
    
    const modal = document.getElementById('minigame-modal');
    const content = document.getElementById('minigame-content');
    
    content.innerHTML = `
        <h2>🎣 Fishing Mini-Game</h2>
        <p>Guess the number between 1-10!</p>
        <p>Attempts left: <span id="attempts">${attempts}</span></p>
        <input type="number" id="guess" min="1" max="10" />
        <button onclick="makeGuess(${targetNumber})">Guess</button>
        <div id="guess-result"></div>
    `;
    
    modal.classList.add('active');
}

function makeGuess(targetNumber) {
    const guess = parseInt(document.getElementById('guess').value);
    const attemptsSpan = document.getElementById('attempts');
    const resultDiv = document.getElementById('guess-result');
    
    let attempts = parseInt(attemptsSpan.textContent) - 1;
    attemptsSpan.textContent = attempts;
    
    if (guess === targetNumber) {
        const reward = Math.floor(Math.random() * 30) + 20;
        player.gold += reward;
        resultDiv.innerHTML = `<p style="color: green;">Correct! Won ${reward} gold!</p>`;
        setTimeout(closeMiniGame, 2000);
    } else if (attempts === 0) {
        resultDiv.innerHTML = `<p style="color: red;">Out of attempts! It was ${targetNumber}</p>`;
        setTimeout(closeMiniGame, 2000);
    } else {
        const hint = guess < targetNumber ? 'higher' : 'lower';
        resultDiv.innerHTML = `<p>Try ${hint}!</p>`;
    }
    
    updateUI();
}

function closeMiniGame() {
    document.getElementById('minigame-modal').classList.remove('active');
}
```

---

## Exercise 3: Game Genre Examples

Complete game implementations for 6 different genres.

### Genre 1: Cookie Clicker (Included in exercise-3.md)

### Genre 2: Space Exploration Game

```javascript
const spaceGame = {
    player: {
        fuel: 100,
        credits: 50,
        oxygen: 100,
        shipHealth: 100
    },
    
    currentPlanet: 'earth',
    
    planets: {
        earth: {
            name: 'Earth',
            description: 'Home planet',
            fuelCost: 0,
            actions: ['Refuel', 'Trade', 'Launch']
        },
        mars: {
            name: 'Mars',
            description: 'The red planet',
            fuelCost: 20,
            actions: ['Mine Resources', 'Explore', 'Return']
        },
        jupiter: {
            name: 'Jupiter',
            description: 'Gas giant',
            fuelCost: 40,
            actions: ['Scan Moons', 'Collect Gas', 'Return']
        }
    },
    
    travelTo(planet) {
        const cost = this.planets[planet].fuelCost;
        if (this.player.fuel >= cost) {
            this.player.fuel -= cost;
            this.currentPlanet = planet;
            this.updateDisplay();
        }
    },
    
    mineResources() {
        const resources = Math.floor(Math.random() * 30) + 10;
        this.player.credits += resources;
        this.player.fuel -= 5;
        this.updateDisplay();
    }
};
```

### Genre 3: Restaurant Management

```javascript
const restaurantGame = {
    player: {
        money: 100,
        reputation: 50,
        energy: 100
    },
    
    ingredients: {
        tomato: 10,
        cheese: 5,
        dough: 8
    },
    
    recipes: {
        pizza: {
            name: 'Pizza',
            ingredients: { tomato: 1, cheese: 1, dough: 1 },
            price: 15,
            timeToMake: 3
        }
    },
    
    serveCustomer(recipe) {
        // Check ingredients
        for (let ing in recipe.ingredients) {
            if (this.ingredients[ing] < recipe.ingredients[ing]) {
                return false;
            }
        }
        
        // Use ingredients
        for (let ing in recipe.ingredients) {
            this.ingredients[ing] -= recipe.ingredients[ing];
        }
        
        // Earn money
        this.player.money += recipe.price;
        this.player.reputation += 1;
        this.player.energy -= 10;
        
        return true;
    }
};
```

### Genre 4: Pet Collection Game

```javascript
const petGame = {
    player: {
        money: 100,
        pokeballs: 10
    },
    
    pets: [],
    
    availablePets: [
        { id: 'cat', name: 'Cat', rarity: 'common', catchChance: 0.7 },
        { id: 'dog', name: 'Dog', rarity: 'common', catchChance: 0.7 },
        { id: 'dragon', name: 'Dragon', rarity: 'legendary', catchChance: 0.1 }
    ],
    
    catchPet() {
        if (this.player.pokeballs === 0) return false;
        
        this.player.pokeballs--;
        
        const pet = this.availablePets[Math.floor(Math.random() * this.availablePets.length)];
        
        if (Math.random() < pet.catchChance) {
            this.pets.push({ ...pet, level: 1, xp: 0 });
            return pet.name;
        }
        
        return null;
    },
    
    trainPet(index) {
        const pet = this.pets[index];
        pet.xp += 10;
        
        if (pet.xp >= 100) {
            pet.level++;
            pet.xp = 0;
        }
    }
};
```

### Genre 5: Card Battle Game

```javascript
const cardGame = {
    player: {
        health: 30,
        mana: 10,
        deck: [],
        hand: []
    },
    
    cards: {
        fireball: { name: 'Fireball', cost: 3, damage: 5 },
        heal: { name: 'Heal', cost: 2, healing: 4 },
        shield: { name: 'Shield', cost: 2, defense: 3 }
    },
    
    drawCard() {
        if (this.player.deck.length === 0) return;
        
        const card = this.player.deck.pop();
        this.player.hand.push(card);
    },
    
    playCard(cardIndex) {
        const card = this.player.hand[cardIndex];
        
        if (this.player.mana < card.cost) return false;
        
        this.player.mana -= card.cost;
        
        if (card.damage) {
            // Attack enemy
        } else if (card.healing) {
            this.player.health += card.healing;
        }
        
        this.player.hand.splice(cardIndex, 1);
        return true;
    }
};
```

### Genre 6: Racing Game

```javascript
const racingGame = {
    player: {
        position: 0,
        speed: 0,
        boost: 3,
        money: 0
    },
    
    track: {
        length: 1000,
        obstacles: []
    },
    
    accelerate() {
        this.player.speed = Math.min(this.player.speed + 5, 50);
    },
    
    brake() {
        this.player.speed = Math.max(this.player.speed - 10, 0);
    },
    
    useBoost() {
        if (this.player.boost > 0) {
            this.player.boost--;
            this.player.speed += 20;
        }
    },
    
    update() {
        this.player.position += this.player.speed;
        
        // Check for finish
        if (this.player.position >= this.track.length) {
            this.finishRace();
        }
        
        // Apply friction
        this.player.speed = Math.max(0, this.player.speed - 1);
    },
    
    finishRace() {
        const reward = Math.floor(1000 / (Date.now() - this.startTime) * 1000);
        this.player.money += reward;
    }
};
```

---

## Integration Tips

1. **Start Small**: Add one feature at a time
2. **Test Thoroughly**: Make sure each feature works before adding the next
3. **Save Everything**: Update your save/load to include new features
4. **Balance**: Adjust numbers to keep the game fun
5. **UI**: Make sure features are visible and easy to use

---
