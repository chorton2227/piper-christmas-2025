# Extended Adventure Game - Answer Key

This file demonstrates Exercise 2 solutions with **5 advanced features** integrated into the basic game.

## Features Added

1. **Quest System** ⭐⭐⭐
2. **Achievement System** ⭐⭐
3. **Equipment System** ⭐⭐⭐
4. **Random Events** ⭐⭐
5. **Difficulty Levels** ⭐⭐

---

## Complete Implementation

For the complete extended game with all 5 features, see the HTML file below:

### File Structure

```
answer-extended-game/
├── index.html (Main game file with all features)
└── README.md (This file)
```

---

## How to View

Open `answer-extended-game.html` in your browser. This version includes:

### 1. Quest System
- Track quest progress
- Complete quests for rewards
- Multiple quest types:
  - Kill quests (defeat X enemies)
  - Collection quests (gather gold)
  - Exploration quests (visit locations)

### 2. Achievement System  
- Unlock achievements for special actions
- Persistent tracking across sessions
- Achievement notifications with animations
- Categories:
  - Combat achievements
  - Wealth achievements  
  - Exploration achievements

### 3. Equipment System
- Weapon slot (increases attack)
- Armor slot (increases defense)
- Equipment management interface
- Swap equipment dynamically
- View equipped items

### 4. Random Events
- 20% chance when exploring
- Multiple event types:
  - Find treasure
  - Merchant encounter
  - Random blessing
  - Minor enemy attack
- Each event has unique rewards/penalties

### 5. Difficulty Levels
- Easy Mode: 0.75x damage, 1.25x gold
- Normal Mode: 1x damage, 1x gold
- Hard Mode: 1.5x damage, 1.5x gold
- Choose difficulty at game start
- Can change difficulty in settings

---

## Key Code Examples

### Quest System Implementation

```javascript
const quests = {
    goblinHunter: {
        name: "Goblin Hunter",
        description: "Defeat 5 goblins",
        type: "kill",
        target: "goblin",
        required: 5,
        current: 0,
        reward: { gold: 100, xp: 50 },
        completed: false
    },
    goldCollector: {
        name: "Gold Collector",
        description: "Collect 200 gold",
        type: "collect",
        required: 200,
        current: 0,
        reward: { attack: 2 },
        completed: false
    }
};

function checkQuests() {
    for (let questId in quests) {
        const quest = quests[questId];
        
        if (!quest.completed && quest.current >= quest.required) {
            quest.completed = true;
            
            // Award rewards
            if (quest.reward.gold) player.gold += quest.reward.gold;
            if (quest.reward.xp) player.xp += quest.reward.xp;
            if (quest.reward.attack) player.attack += quest.reward.attack;
            
            showMessage(`Quest Completed: ${quest.name}!`, "success");
        }
    }
    
    updateQuestDisplay();
}
```

### Achievement System Implementation

```javascript
const achievements = {
    firstBlood: {
        name: "First Blood",
        description: "Win your first battle",
        unlocked: false,
        check: () => player.monstersDefeated >= 1
    },
    wealthy: {
        name: "Wealthy Adventurer",
        description: "Have 500 gold at once",
        unlocked: false,
        check: () => player.gold >= 500
    }
};

function checkAchievements() {
    for (let achId in achievements) {
        const achievement = achievements[achId];
        
        if (!achievement.unlocked && achievement.check()) {
            achievement.unlocked = true;
            unlockAchievement(achievement.name);
        }
    }
}

function unlockAchievement(name) {
    // Create achievement notification
    const notification = document.createElement('div');
    notification.className = 'achievement-unlock';
    notification.innerHTML = `
        <h3>🏆 Achievement Unlocked!</h3>
        <p>${name}</p>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.remove(), 4000);
}
```

### Equipment System Implementation

```javascript
const player = {
    health: 100,
    maxHealth: 100,
    attack: 10,
    defense: 5,
    gold: 50,
    equipment: {
        weapon: null,
        armor: null
    },
    inventory: []
};

function equipItem(item, slot) {
    // Unequip current item
    if (player.equipment[slot]) {
        const oldItem = player.equipment[slot];
        
        // Remove bonuses
        if (oldItem.attackBonus) player.attack -= oldItem.attackBonus;
        if (oldItem.defenseBonus) player.defense -= oldItem.defenseBonus;
        
        // Return to inventory
        player.inventory.push(oldItem);
    }
    
    // Equip new item
    player.equipment[slot] = item;
    
    // Apply bonuses
    if (item.attackBonus) player.attack += item.attackBonus;
    if (item.defenseBonus) player.defense += item.defenseBonus;
    
    // Remove from inventory
    const index = player.inventory.indexOf(item);
    player.inventory.splice(index, 1);
    
    showMessage(`Equipped ${item.name}!`, "success");
    updateDisplay();
}
```

### Random Events Implementation

```javascript
function explore() {
    // 20% chance of random event
    if (Math.random() < 0.2) {
        triggerRandomEvent();
        return;
    }
    
    // Normal exploration
    const goldFound = Math.floor(Math.random() * 15) + 5;
    player.gold += goldFound;
    showMessage(`You found ${goldFound} gold!`, "success");
    updateDisplay();
}

function triggerRandomEvent() {
    const events = [
        {
            name: "Mysterious Merchant",
            message: "A merchant offers you a free health potion!",
            effect: () => {
                player.inventory.push("Health Potion");
            }
        },
        {
            name: "Lucky Find",
            message: "You found a treasure chest with 50 gold!",
            effect: () => {
                player.gold += 50;
            }
        },
        {
            name: "Blessing",
            message: "You feel blessed! Attack increased by 2!",
            effect: () => {
                player.attack += 2;
            }
        }
    ];
    
    const event = events[Math.floor(Math.random() * events.length)];
    event.effect();
    showMessage(`${event.name}: ${event.message}`, "success");
    updateDisplay();
}
```

### Difficulty System Implementation

```javascript
const difficulty = {
    easy: {
        name: "Easy",
        damageMultiplier: 0.75,
        goldMultiplier: 1.25
    },
    normal: {
        name: "Normal",
        damageMultiplier: 1.0,
        goldMultiplier: 1.0
    },
    hard: {
        name: "Hard",
        damageMultiplier: 1.5,
        goldMultiplier: 1.5
    }
};

let currentDifficulty = "normal";

function setDifficulty(level) {
    currentDifficulty = level;
    showMessage(`Difficulty set to ${difficulty[level].name}`, "success");
    updateDisplay();
}

function calculateDamage(baseDamage) {
    return Math.floor(baseDamage * difficulty[currentDifficulty].damageMultiplier);
}

function calculateGoldReward(baseGold) {
    return Math.floor(baseGold * difficulty[currentDifficulty].goldMultiplier);
}
```

---

## Integration Tips

### How Features Work Together

1. **Quests + Achievements**: Completing quests can unlock achievements
2. **Equipment + Combat**: Better equipment makes combat easier
3. **Difficulty + Rewards**: Harder difficulty = better rewards = faster progression
4. **Random Events + Quests**: Events can help complete collection quests
5. **All Features + Save/Load**: Everything persists between sessions

### Save/Load with New Features

```javascript
function saveGame() {
    const saveData = {
        player: player,
        currentLocation: currentLocation,
        quests: quests,
        achievements: achievements,
        difficulty: currentDifficulty
    };
    
    localStorage.setItem('extendedGame', JSON.stringify(saveData));
    showMessage("Game saved!", "success");
}

function loadGame() {
    const saved = localStorage.getItem('extendedGame');
    
    if (saved) {
        const data = JSON.parse(saved);
        
        Object.assign(player, data.player);
        currentLocation = data.currentLocation;
        Object.assign(quests, data.quests);
        Object.assign(achievements, data.achievements);
        currentDifficulty = data.difficulty || "normal";
        
        updateDisplay();
        showMessage("Game loaded!", "success");
    }
}
```

---

## UI Updates

### Quest Display

```html
<div class="quests">
    <h3>📜 Quests</h3>
    <div id="quest-list"></div>
</div>
```

```javascript
function updateQuestDisplay() {
    const questList = document.getElementById('quest-list');
    questList.innerHTML = '';
    
    for (let questId in quests) {
        const quest = quests[questId];
        
        const questDiv = document.createElement('div');
        questDiv.className = 'quest-item';
        questDiv.innerHTML = `
            <strong>${quest.name}</strong>
            <p>${quest.description}</p>
            <div class="progress">
                ${quest.current} / ${quest.required}
            </div>
            ${quest.completed ? '<span class="completed">✓ Complete</span>' : ''}
        `;
        
        questList.appendChild(questDiv);
    }
}
```

### Achievement Display

```html
<div class="achievements">
    <h3>🏆 Achievements</h3>
    <div id="achievement-list"></div>
</div>
```

```javascript
function updateAchievementDisplay() {
    const achList = document.getElementById('achievement-list');
    achList.innerHTML = '';
    
    for (let achId in achievements) {
        const ach = achievements[achId];
        
        const achDiv = document.createElement('div');
        achDiv.className = `achievement ${ach.unlocked ? 'unlocked' : 'locked'}`;
        achDiv.innerHTML = `
            ${ach.unlocked ? '🏆' : '🔒'} ${ach.name}
            <br>
            <small>${ach.description}</small>
        `;
        
        achList.appendChild(achDiv);
    }
}
```

---

## Testing Checklist

### Quest System
- [ ] Quests track progress correctly
- [ ] Completing quests awards rewards
- [ ] Quest UI updates in real-time
- [ ] Quests save and load properly

### Achievement System
- [ ] Achievements unlock when conditions met
- [ ] Notification appears on unlock
- [ ] Achievements persist after save/load
- [ ] All achievements are attainable

### Equipment System
- [ ] Can equip weapons and armor
- [ ] Stats update when equipping
- [ ] Can swap equipment
- [ ] Equipment affects combat

### Random Events
- [ ] Events trigger at correct rate (~20%)
- [ ] All event types can occur
- [ ] Events grant proper rewards
- [ ] Events don't break game flow

### Difficulty System
- [ ] Can select difficulty
- [ ] Damage modifiers work correctly
- [ ] Gold rewards scale properly
- [ ] Difficulty persists after save/load

---

## Next Steps

To further extend this game, consider adding:

1. **Boss Battles** - Special encounters with unique mechanics
2. **Crafting System** - Combine items to create better equipment
3. **Pet System** - Companions that help in combat
4. **Status Effects** - Buffs and debuffs during combat
5. **Multiple Save Slots** - Let players have different games

---

## Complete File

See `answer-extended-game.html` for the full implementation with all 5 features integrated!

**Note**: The extended game builds upon `answer-basic-game.html` by adding these features while maintaining all the core functionality from Exercise 1.