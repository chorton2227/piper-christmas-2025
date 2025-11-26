# Lesson 3.13: Mini-Project - Adventure Quest Game 🎮

Welcome to your final JavaScript project! You'll build a complete adventure game that uses everything you've learned.

---

## 🎯 What You'll Build

**Adventure Quest** - An interactive text-based adventure game where players:
- Explore different locations
- Collect items and manage inventory
- Battle monsters with a combat system
- Complete quests and earn achievements
- Save/load game progress
- Track statistics and high scores

This project combines **all Module 3 concepts**:
- ✅ Variables and functions
- ✅ DOM manipulation
- ✅ Event handling
- ✅ Conditionals and logic
- ✅ Arrays and loops
- ✅ Timers and intervals
- ✅ Random numbers
- ✅ Objects
- ✅ Debugging techniques

---

## 🎓 Learning Objectives

By completing this project, you will:
- Combine multiple JavaScript concepts in one project
- Build a complete, working application
- Practice planning and organizing code
- Use objects to model game entities
- Implement game loops and state management
- Create interactive user interfaces
- Debug complex interactions
- Feel proud of what you've created!

---

## 📋 Project Overview

### Game Features

**1. Player System**
- Character with health, attack, defense, gold
- Experience points and leveling up
- Inventory management
- Statistics tracking

**2. Location System**
- Multiple areas to explore (Town, Forest, Cave, Castle)
- Different encounters in each location
- Location descriptions and atmosphere

**3. Combat System**
- Turn-based battles with monsters
- Attack, defend, use items
- Random damage calculations
- Victory rewards (gold, experience, items)

**4. Quest System**
- Multiple quests to complete
- Quest tracking and completion
- Rewards for finishing quests

**5. Shop System**
- Buy weapons, armor, potions
- Sell items for gold
- Upgradeable equipment

**6. Achievement System**
- Track milestones (first win, 10 monsters defeated, etc.)
- Display earned achievements
- Unlock special rewards

**7. Save/Load System**
- Save game to localStorage
- Load previous games
- Multiple save slots

---

## 🏗️ Project Structure

### Phase 1: Setup and Player (Lessons 3.1-3.3)
- HTML structure
- CSS styling
- Player object with properties
- Display player stats

### Phase 2: Locations and Navigation (Lessons 3.4-3.5)
- Location objects
- Travel between locations
- Update UI based on location
- Event handling for buttons

### Phase 3: Combat System (Lessons 3.7-3.8)
- Monster objects
- Battle mechanics with conditionals
- Attack/defend actions
- Health management
- Arrays of monsters

### Phase 4: Items and Inventory (Lessons 3.8-3.9)
- Item objects
- Inventory array
- Use items (potions, weapons)
- Timers for item effects

### Phase 5: Shop and Economy (Lessons 3.10-3.11)
- Shop inventory
- Buy/sell mechanics
- Gold management
- Random item generation

### Phase 6: Quests and Achievements (Lessons 3.11)
- Quest objects
- Quest tracking
- Achievement system
- Statistics

### Phase 7: Save/Load and Polish (Lessons 3.12)
- localStorage save system
- Load game state
- Debug and fix issues
- Final polish

---

## 🎨 Getting Started

### Step 1: Create Project Files

Create a new folder: `adventure-quest/`

Inside, create:
- `index.html` - Main game page
- `style.css` - Game styling
- `game.js` - Main game logic
- `player.js` - Player management
- `combat.js` - Battle system
- `items.js` - Item definitions
- `locations.js` - Location data
- `quests.js` - Quest system

---

## 📝 Detailed Implementation Guide

### Part 1: HTML Structure

Create the game interface in `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adventure Quest</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="game-container">
        <!-- Header -->
        <header>
            <h1>🗡️ Adventure Quest</h1>
            <div class="player-stats">
                <div class="stat">
                    <span class="stat-label">❤️ Health:</span>
                    <span id="playerHealth">100</span>/<span id="playerMaxHealth">100</span>
                </div>
                <div class="stat">
                    <span class="stat-label">💰 Gold:</span>
                    <span id="playerGold">0</span>
                </div>
                <div class="stat">
                    <span class="stat-label">⭐ Level:</span>
                    <span id="playerLevel">1</span>
                </div>
                <div class="stat">
                    <span class="stat-label">✨ XP:</span>
                    <span id="playerXP">0</span>/<span id="playerXPNeeded">100</span>
                </div>
            </div>
        </header>

        <!-- Main Game Area -->
        <main>
            <!-- Story/Description Panel -->
            <div class="story-panel">
                <h2 id="locationName">Town Square</h2>
                <p id="locationDescription">You stand in the center of a bustling town...</p>
                <div id="gameMessage"></div>
            </div>

            <!-- Action Buttons -->
            <div class="action-panel">
                <h3>Actions</h3>
                <div class="button-grid" id="actionButtons">
                    <!-- Buttons will be added dynamically -->
                </div>
            </div>

            <!-- Combat Panel (hidden by default) -->
            <div class="combat-panel" id="combatPanel" style="display: none;">
                <div class="enemy-info">
                    <h3 id="enemyName">Monster</h3>
                    <div class="health-bar">
                        <div class="health-fill" id="enemyHealthBar"></div>
                    </div>
                    <p><span id="enemyHealth">50</span>/<span id="enemyMaxHealth">50</span> HP</p>
                </div>
                <div class="combat-actions">
                    <button onclick="attack()">⚔️ Attack</button>
                    <button onclick="defend()">🛡️ Defend</button>
                    <button onclick="usePotion()">🧪 Use Potion</button>
                    <button onclick="flee()">🏃 Flee</button>
                </div>
                <div id="combatLog"></div>
            </div>
        </main>

        <!-- Sidebar -->
        <aside>
            <!-- Inventory -->
            <div class="inventory-panel">
                <h3>🎒 Inventory</h3>
                <div id="inventoryList"></div>
            </div>

            <!-- Quests -->
            <div class="quest-panel">
                <h3>📜 Quests</h3>
                <div id="questList"></div>
            </div>

            <!-- Achievements -->
            <div class="achievement-panel">
                <h3>🏆 Achievements</h3>
                <div id="achievementList"></div>
            </div>
        </aside>

        <!-- Footer -->
        <footer>
            <button onclick="saveGame()">💾 Save Game</button>
            <button onclick="loadGame()">📂 Load Game</button>
            <button onclick="resetGame()">🔄 New Game</button>
            <button onclick="showStats()">📊 Statistics</button>
        </footer>
    </div>

    <!-- Modal for Shop, Stats, etc. -->
    <div class="modal" id="modal" style="display: none;">
        <div class="modal-content">
            <span class="close" onclick="closeModal()">&times;</span>
            <div id="modalBody"></div>
        </div>
    </div>

    <!-- Load JavaScript files -->
    <script src="items.js"></script>
    <script src="locations.js"></script>
    <script src="quests.js"></script>
    <script src="player.js"></script>
    <script src="combat.js"></script>
    <script src="game.js"></script>
</body>
</html>
```

---

### Part 2: CSS Styling

Create beautiful game styling in `style.css`:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Georgia', serif;
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
    color: #333;
    min-height: 100vh;
}

.game-container {
    max-width: 1200px;
    margin: 20px auto;
    background: white;
    border-radius: 15px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.5);
    overflow: hidden;
    display: grid;
    grid-template-areas:
        "header header"
        "main sidebar"
        "footer footer";
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto 1fr auto;
    min-height: 90vh;
}

/* Header */
header {
    grid-area: header;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 20px;
}

header h1 {
    margin-bottom: 15px;
    text-align: center;
}

.player-stats {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 15px;
}

.stat {
    background: rgba(255, 255, 255, 0.2);
    padding: 10px 15px;
    border-radius: 8px;
}

.stat-label {
    font-weight: bold;
}

/* Main Area */
main {
    grid-area: main;
    padding: 30px;
    overflow-y: auto;
}

.story-panel {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    border-left: 5px solid #667eea;
}

.story-panel h2 {
    color: #667eea;
    margin-bottom: 10px;
}

#gameMessage {
    margin-top: 15px;
    padding: 10px;
    background: #fff3cd;
    border-left: 3px solid #ffc107;
    border-radius: 5px;
    display: none;
}

#gameMessage.show {
    display: block;
}

.action-panel {
    margin-top: 20px;
}

.button-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
    margin-top: 10px;
}

button {
    padding: 12px 20px;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background: #667eea;
    color: white;
    transition: all 0.3s;
}

button:hover {
    background: #5568d3;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

button:active {
    transform: translateY(0);
}

button:disabled {
    background: #ccc;
    cursor: not-allowed;
}

/* Combat Panel */
.combat-panel {
    background: #ffe5e5;
    border: 3px solid #ff6b6b;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
}

.enemy-info {
    text-align: center;
    margin-bottom: 20px;
}

.health-bar {
    width: 100%;
    height: 30px;
    background: #ddd;
    border-radius: 15px;
    overflow: hidden;
    margin: 10px 0;
}

.health-fill {
    height: 100%;
    background: linear-gradient(90deg, #ff6b6b 0%, #ee5a6f 100%);
    transition: width 0.3s;
}

.combat-actions {
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 15px;
}

#combatLog {
    background: white;
    padding: 15px;
    border-radius: 5px;
    max-height: 200px;
    overflow-y: auto;
    font-size: 14px;
}

.combat-message {
    padding: 5px;
    margin: 3px 0;
    border-left: 3px solid #667eea;
    padding-left: 10px;
}

.combat-message.damage {
    border-left-color: #ff6b6b;
    color: #c92a2a;
}

.combat-message.heal {
    border-left-color: #51cf66;
    color: #2b8a3e;
}

/* Sidebar */
aside {
    grid-area: sidebar;
    background: #f8f9fa;
    padding: 20px;
    overflow-y: auto;
}

aside h3 {
    color: #667eea;
    margin-bottom: 10px;
    padding-bottom: 5px;
    border-bottom: 2px solid #667eea;
}

.inventory-panel,
.quest-panel,
.achievement-panel {
    margin-bottom: 25px;
}

.inventory-item,
.quest-item,
.achievement-item {
    background: white;
    padding: 10px;
    margin: 8px 0;
    border-radius: 5px;
    border-left: 3px solid #667eea;
}

.inventory-item:hover {
    background: #e9ecef;
    cursor: pointer;
}

.quest-item.completed {
    opacity: 0.6;
    text-decoration: line-through;
}

.achievement-item {
    display: flex;
    align-items: center;
    gap: 10px;
}

.achievement-item.locked {
    opacity: 0.3;
}

/* Footer */
footer {
    grid-area: footer;
    background: #343a40;
    padding: 15px;
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
}

footer button {
    background: #495057;
}

footer button:hover {
    background: #6c757d;
}

/* Modal */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background: white;
    padding: 30px;
    border-radius: 15px;
    max-width: 600px;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
}

.close {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 30px;
    cursor: pointer;
    color: #999;
}

.close:hover {
    color: #333;
}

/* Responsive */
@media (max-width: 768px) {
    .game-container {
        grid-template-areas:
            "header"
            "main"
            "sidebar"
            "footer";
        grid-template-columns: 1fr;
    }
    
    .button-grid {
        grid-template-columns: 1fr;
    }
}
```

---

### Part 3: Game Data Files

**items.js** - Define all game items:

```javascript
// Items database
const ITEMS = {
    // Weapons
    stick: {
        name: "Wooden Stick",
        type: "weapon",
        attack: 2,
        value: 5,
        description: "A simple wooden stick"
    },
    sword: {
        name: "Iron Sword",
        type: "weapon",
        attack: 5,
        value: 50,
        description: "A sturdy iron sword"
    },
    greatsword: {
        name: "Great Sword",
        type: "weapon",
        attack: 10,
        value: 150,
        description: "A powerful two-handed sword"
    },
    
    // Armor
    leather: {
        name: "Leather Armor",
        type: "armor",
        defense: 2,
        value: 30,
        description: "Basic leather protection"
    },
    chainmail: {
        name: "Chainmail",
        type: "armor",
        defense: 5,
        value: 100,
        description: "Strong metal armor"
    },
    
    // Consumables
    potion: {
        name: "Health Potion",
        type: "consumable",
        healing: 30,
        value: 20,
        description: "Restores 30 health"
    },
    megaPotion: {
        name: "Mega Potion",
        type: "consumable",
        healing: 50,
        value: 50,
        description: "Restores 50 health"
    }
};
```

**locations.js** - Define game locations:

```javascript
const LOCATIONS = {
    town: {
        name: "Town Square",
        description: "A bustling town with friendly faces and warm fires.",
        actions: ["Shop", "Tavern", "Forest", "Cave"],
        encounters: []
    },
    
    forest: {
        name: "Dark Forest",
        description: "Ancient trees loom overhead, blocking out the sun.",
        actions: ["Explore", "Hunt", "Return to Town"],
        encounters: ["goblin", "wolf", "bandit"]
    },
    
    cave: {
        name: "Mysterious Cave",
        description: "A dark cave entrance beckons you inside...",
        actions: ["Enter Cave", "Search", "Return to Town"],
        encounters: ["bat", "spider", "troll"]
    },
    
    castle: {
        name: "Ancient Castle",
        description: "A foreboding castle shrouded in mist.",
        actions: ["Enter", "Investigate", "Return to Town"],
        encounters: ["skeleton", "ghost", "dragon"]
    }
};

const MONSTERS = {
    goblin: {
        name: "Goblin",
        health: 30,
        attack: 5,
        defense: 2,
        xp: 15,
        gold: 10,
        description: "A small but vicious goblin"
    },
    wolf: {
        name: "Wolf",
        health: 40,
        attack: 7,
        defense: 3,
        xp: 20,
        gold: 15,
        description: "A fierce forest wolf"
    },
    // Add more monsters...
};
```

---

## 🎮 Implementation Steps

### Week 1: Basic Structure
1. Create HTML structure
2. Add CSS styling
3. Create player object
4. Display player stats
5. Test: Stats should display correctly

### Week 2: Navigation
1. Implement location system
2. Add action buttons
3. Handle location changes
4. Update descriptions
5. Test: Can navigate between locations

### Week 3: Combat
1. Create combat system
2. Implement attack/defend
3. Add monster encounters
4. Calculate damage with random
5. Test: Can fight and win battles

### Week 4: Items & Shop
1. Create item system
2. Add inventory management
3. Implement shop
4. Add equipment system
5. Test: Can buy items and use them

### Week 5: Quests & Achievements
1. Create quest objects
2. Track quest progress
3. Add achievement system
4. Reward completion
5. Test: Quests work and achievements unlock

### Week 6: Save/Load & Polish
1. Implement localStorage save
2. Add load game functionality
3. Debug all systems
4. Add animations/effects
5. Test: Game saves and loads correctly

---

## 💡 Key Programming Concepts Used

### Objects (Lesson 3.11)
```javascript
const player = {
    name: "Hero",
    health: 100,
    maxHealth: 100,
    attack: 10,
    defense: 5,
    gold: 0,
    xp: 0,
    level: 1,
    inventory: []
};
```

### Arrays and Loops (Lesson 3.8)
```javascript
// Loop through inventory
for (let item of player.inventory) {
    displayItem(item);
}
```

### Conditionals (Lesson 3.7)
```javascript
if (player.health <= 0) {
    gameOver();
} else if (monster.health <= 0) {
    victory();
}
```

### Random Numbers (Lesson 3.10)
```javascript
let damage = Math.floor(Math.random() * player.attack) + 1;
```

### Timers (Lesson 3.9)
```javascript
// Show message briefly
setTimeout(() => {
    hideMessage();
}, 3000);
```

### localStorage (Lesson 3.12)
```javascript
function saveGame() {
    localStorage.setItem('adventureQuest', JSON.stringify(player));
}
```

---

## 🏆 Challenges

### Basic Challenges
- [ ] Complete the basic game structure
- [ ] Implement working combat
- [ ] Add at least 5 items
- [ ] Create 3 different locations
- [ ] Add save/load functionality

### Intermediate Challenges
- [ ] Add 5 quests
- [ ] Create 10 achievements
- [ ] Implement equipment system
- [ ] Add random encounters
- [ ] Create boss battles

### Advanced Challenges
- [ ] Add character classes (Warrior, Mage, Rogue)
- [ ] Implement magic spells
- [ ] Create crafting system
- [ ] Add difficulty levels
- [ ] Multiplayer high scores

---

## 🐛 Debugging Tips

Use what you learned in Lesson 3.12:

```javascript
// Debug player stats
console.log("Player:", player);

// Debug combat
console.log("Attack damage:", damage);
console.log("Monster health:", monster.health);

// Debug items
console.table(player.inventory);

// Time functions
console.time("combat");
// ... combat code ...
console.timeEnd("combat");
```

---

## 📚 Resources

- Review previous lessons for specific concepts
- Check example files for code patterns
- Use browser DevTools to debug
- Test frequently as you build
- Save your work often!

---

## 🎉 What You'll Learn

By completing this project, you'll demonstrate mastery of:
- ✅ JavaScript fundamentals
- ✅ DOM manipulation
- ✅ Event handling
- ✅ Object-oriented programming
- ✅ Game loop design
- ✅ State management
- ✅ Data persistence
- ✅ Debugging complex applications

This is a **portfolio piece** - something you can show others and be proud of!

---

## 🚀 Next Steps

After completing the basic game:
1. Add your own features
2. Customize the story
3. Create unique items and monsters
4. Design your own quests
5. Share with friends and family!

**Remember:** This is YOUR game. Be creative! Add features you think would be fun!

---

Ready to build your adventure? Let's start coding! 🎮✨