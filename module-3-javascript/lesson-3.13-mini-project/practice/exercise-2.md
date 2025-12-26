
Take the basic game from Exercise 1 and add advanced features!

## Your Task

Add 5 new features to your adventure game from the list below.

---

## Feature Options

### Feature 1: Quest System (⭐⭐⭐)

Add quests that players can complete for rewards:

```javascript
const quests = [
    {
        id: 1,
        name: "Goblin Hunter",
        description: "Defeat 5 goblins",
        progress: 0,
        goal: 5,
        reward: { gold: 100, xp: 50 },
        completed: false
    }
];

function checkQuests() {
    quests.forEach(quest => {
        if (!quest.completed && quest.progress >= quest.goal) {
            quest.completed = true;
            player.gold += quest.reward.gold;
            alert(`Quest Complete: ${quest.name}!`);
        }
    });
}
```

###Feature 2: Achievement System (⭐⭐)

Track player accomplishments:

```javascript
const achievements = {
    firstWin: {
        name: "First Blood",
        description: "Win your first battle",
        unlocked: false
    },
    goldCollector: {
        name: "Gold Collector",
        description: "Collect 500 gold",
        unlocked: false
    }
};

function checkAchievements() {
    if (!achievements.firstWin.unlocked && stats.wins >= 1) {
        achievements.firstWin.unlocked = true;
        alert("Achievement Unlocked: First Blood!");
    }
}
```

### Feature 3: Equipment System (⭐⭐⭐)

Allow players to equip weapons and armor:

```javascript
player.equipment = {
    weapon: null,
    armor: null
};

function equipItem(item) {
    if (item.type === 'weapon') {
        if (player.equipment.weapon) {
            player.inventory.push(player.equipment.weapon);
        }
        player.equipment.weapon = item;
        player.attack += item.attackBonus;
    }
}
```

### Feature 4: Random Events (⭐⭐)

Add random encounters while exploring:

```javascript
const randomEvents = [
    {
        text: "You found a treasure chest!",
        reward: { gold: 50 }
    },
    {
        text: "A friendly merchant gives you a potion!",
        reward: { item: "potion" }
    },
    {
        text: "You slip and hurt yourself!",
        damage: 10
    }
];

function triggerRandomEvent() {
    if (Math.random() < 0.2) { // 20% chance
        const event = randomEvents[Math.floor(Math.random() * randomEvents.length)];
        alert(event.text);
        // Apply event effects
    }
}
```

### Feature 5: Difficulty Levels (⭐⭐)

Let players choose difficulty:

```javascript
const difficulty = {
    easy: { damageMultiplier: 0.75, goldMultiplier: 1.5 },
    normal: { damageMultiplier: 1.0, goldMultiplier: 1.0 },
    hard: { damageMultiplier: 1.5, goldMultiplier: 0.75 }
};

let currentDifficulty = 'normal';

function setDifficulty(level) {
    currentDifficulty = level;
    alert(`Difficulty set to: ${level}`);
}
```

### Feature 6: Boss Battles (⭐⭐⭐)

Add special boss monsters:

```javascript
const bosses = {
    dragon: {
        name: "Ancient Dragon",
        health: 200,
        attack: 25,
        defense: 10,
        gold: 500,
        special: "Fire Breath" // Special attack
    }
};

function bossSpecialAttack() {
    const damage = Math.floor(Math.random() * 30) + 20;
    player.health -= damage;
    alert(`Dragon uses Fire Breath! ${damage} damage!`);
}
```

### Feature 7: Crafting System (⭐⭐⭐)

Combine items to create new ones:

```javascript
const recipes = [
    {
        name: "Super Potion",
        requires: ["potion", "potion"],
        creates: { name: "Super Potion", healing: 60 }
    }
];

function craft(recipeIndex) {
    const recipe = recipes[recipeIndex];
    // Check if player has ingredients
    // Remove ingredients
    // Add crafted item
}
```

### Feature 8: Pet System (⭐⭐)

Add a pet that helps in battle:

```javascript
player.pet = {
    name: "Wolf",
    attack: 3,
    active: false
};

function petAttack() {
    if (player.pet.active) {
        const damage = Math.floor(Math.random() * player.pet.attack) + 1;
        currentEnemy.health -= damage;
        alert(`${player.pet.name} deals ${damage} damage!`);
    }
}
```

### Feature 9: Status Effects (⭐⭐⭐)

Add buffs and debuffs:

```javascript
player.status = [];

function applyStatus(statusName, duration) {
    player.status.push({
        name: statusName,
        turnsLeft: duration,
        effect: {
            'poisoned': () => { player.health -= 5; },
            'buffed': () => { player.attack += 5; }
        }[statusName]
    });
}

function processStatusEffects() {
    player.status.forEach(status => {
        status.effect();
        status.turnsLeft--;
    });
    player.status = player.status.filter(s => s.turnsLeft > 0);
}
```

### Feature 10: Mini-Games (⭐⭐)

Add skill-based mini-games:

```javascript
function fishingGame() {
    const target = Math.random();
    const guess = parseFloat(prompt("Enter a number between 0 and 1:"));
    
    if (Math.abs(guess - target) < 0.1) {
        alert("You caught a fish! +20 gold");
        player.gold += 20;
    } else {
        alert("The fish got away!");
    }
}
```

---

## Requirements

Choose 5 features from the list above and implement them.

Document your choices:

```javascript
// Features implemented:
// 1. Quest System - Added 3 quests
// 2. Equipment System - Weapons and armor
// 3. Boss Battles - Dragon boss
// 4. Achievement System - 5 achievements
// 5. Random Events - 4 different events
```

---

## Testing Each Feature

### Quest System
- [ ] Quests display correctly
- [ ] Progress updates when requirements met
- [ ] Rewards given on completion
- [ ] Can't complete quest twice

### Achievement System
- [ ] Achievements unlock at right time
- [ ] Notification appears
- [ ] Stays unlocked after save/load

### Equipment System
- [ ] Can equip weapons
- [ ] Can equip armor
- [ ] Stats update correctly
- [ ] Old equipment unequipped

### Random Events
- [ ] Events trigger randomly
- [ ] Different events possible
- [ ] Effects apply correctly

### Difficulty Levels
- [ ] Can select difficulty
- [ ] Affects combat correctly
- [ ] Saves with game

---

## Bonus Challenges

- Combine multiple features creatively
- Add animations or visual effects
- Create a story arc
- Balance difficulty carefully
- Add sound effects
- Make it mobile-friendly

---

## Grading Rubric

Each feature worth 20 points:
- **Implementation (10 pts):** Feature works correctly
- **Integration (5 pts):** Fits well with existing code
- **Polish (5 pts):** Well-tested and bug-free

**Total: 100 points (5 features × 20 points)**

---

## Tips

1. **Start simple** - Get basic version working first
2. **Test frequently** - After each feature addition
3. **Use console.log** - Debug as you go
4. **Keep code organized** - Use functions and comments
5. **Save often** - Don't lose your work!

---
