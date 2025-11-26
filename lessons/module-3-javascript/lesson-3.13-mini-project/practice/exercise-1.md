# Exercise 1: Build Your Own Mini Adventure

Create a simplified version of Adventure Quest with your own twist!

## Your Task

Build a basic adventure game that includes:
- Player with health, gold, and inventory
- At least 2 locations
- At least 2 types of monsters
- Combat system
- Shop to buy items
- Save/load functionality

---

## Requirements

### Part 1: Setup (15 points)

Create the basic HTML structure with:
- [ ] Player stats display (health, gold, level)
- [ ] Location description area
- [ ] Action buttons section
- [ ] Inventory display
- [ ] Save/Load buttons

### Part 2: Player System (20 points)

Create a player object with:
- [ ] health, maxHealth, attack, defense properties
- [ ] gold and level properties
- [ ] inventory array
- [ ] Function to update stats display

### Part 3: Location System (15 points)

Create at least 2 locations:
- [ ] Town (safe, has shop)
- [ ] Forest or Cave (has monsters)
- [ ] Function to navigate between locations
- [ ] Update description when location changes

### Part 4: Combat System (25 points)

Implement turn-based combat:
- [ ] Start combat with random monster
- [ ] Player can attack
- [ ] Monster attacks back
- [ ] Calculate damage with random numbers
- [ ] Victory gives gold and XP
- [ ] Defeat returns player to town

### Part 5: Shop System (15 points)

Create a shop where player can:
- [ ] View available items
- [ ] Buy items if they have enough gold
- [ ] Add items to inventory
- [ ] Use items (potions, equipment)

### Part 6: Save/Load (10 points)

Implement persistence:
- [ ] Save game data to localStorage
- [ ] Load saved game on button click
- [ ] Save player stats, inventory, location

---

## Starter Code

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Adventure Game</title>
    <style>
        body {
            font-family: Arial;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
        }
        
        .stats {
            background: #f0f0f0;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        
        .location {
            background: #e8f4f8;
            padding: 20px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        
        button {
            padding: 10px 20px;
            margin: 5px;
            font-size: 16px;
            cursor: pointer;
        }
        
        .inventory {
            background: #fff3cd;
            padding: 15px;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <h1>🗡️ My Adventure Game</h1>
    
    <!-- Player Stats -->
    <div class="stats">
        <h2>Player Stats</h2>
        <p>Health: <span id="health">100</span></p>
        <p>Gold: <span id="gold">0</span></p>
        <p>Level: <span id="level">1</span></p>
    </div>
    
    <!-- Location -->
    <div class="location">
        <h2 id="locationName">Town</h2>
        <p id="locationDescription">You are in town.</p>
    </div>
    
    <!-- Actions -->
    <div>
        <h3>Actions</h3>
        <div id="actions"></div>
    </div>
    
    <!-- Inventory -->
    <div class="inventory">
        <h3>Inventory</h3>
        <div id="inventory"></div>
    </div>
    
    <!-- Footer -->
    <div>
        <button onclick="saveGame()">Save Game</button>
        <button onclick="loadGame()">Load Game</button>
    </div>

    <script>
        // TODO: Create your game here!
        
        // Player object
        const player = {
            health: 100,
            maxHealth: 100,
            attack: 10,
            defense: 5,
            gold: 0,
            level: 1,
            inventory: []
        };
        
        // Locations
        const locations = {
            town: {
                name: "Town",
                description: "A peaceful town.",
                actions: ["Go to Forest", "Visit Shop"]
            },
            forest: {
                name: "Dark Forest",
                description: "A dangerous forest with monsters.",
                actions: ["Explore", "Return to Town"]
            }
        };
        
        // Monsters
        const monsters = {
            goblin: {
                name: "Goblin",
                health: 30,
                attack: 5,
                gold: 15
            },
            wolf: {
                name: "Wolf",
                health: 40,
                attack: 7,
                gold: 20
            }
        };
        
        // Current game state
        let currentLocation = 'town';
        let inCombat = false;
        let currentEnemy = null;
        
        // TODO: Implement game functions
        
        function updateDisplay() {
            // Update player stats
            document.getElementById('health').textContent = player.health;
            document.getElementById('gold').textContent = player.gold;
            document.getElementById('level').textContent = player.level;
            
            // TODO: Update location
            // TODO: Update inventory
        }
        
        function goToLocation(locationName) {
            // TODO: Change current location
            // TODO: Update display
            // TODO: Show appropriate actions
        }
        
        function startCombat(monsterType) {
            // TODO: Create enemy from monster template
            // TODO: Set inCombat = true
            // TODO: Start combat loop
        }
        
        function playerAttack() {
            // TODO: Calculate damage
            // TODO: Reduce enemy health
            // TODO: Check if enemy defeated
            // TODO: If not, enemy attacks back
        }
        
        function enemyAttack() {
            // TODO: Calculate damage
            // TODO: Reduce player health
            // TODO: Check if player defeated
        }
        
        function victory() {
            // TODO: Award gold
            // TODO: Award XP
            // TODO: End combat
        }
        
        function defeat() {
            // TODO: Reset player health
            // TODO: Return to town
            // TODO: Lose some gold
        }
        
        function openShop() {
            // TODO: Show available items
            // TODO: Allow buying items
        }
        
        function buyItem(itemName) {
            // TODO: Check if player has enough gold
            // TODO: Deduct gold
            // TODO: Add item to inventory
        }
        
        function saveGame() {
            // TODO: Save player data to localStorage
            const saveData = {
                player: player,
                currentLocation: currentLocation
            };
            localStorage.setItem('mySaveGame', JSON.stringify(saveData));
            alert("Game saved!");
        }
        
        function loadGame() {
            // TODO: Load player data from localStorage
            const saved = localStorage.getItem('mySaveGame');
            if (saved) {
                const saveData = JSON.parse(saved);
                // TODO: Restore player and location
                alert("Game loaded!");
            }
        }
        
        // Initialize game
        updateDisplay();
        goToLocation('town');
    </script>
</body>
</html>
```

---

## Step-by-Step Guide

### Step 1: Update Display Function

```javascript
function updateDisplay() {
    // Update player stats
    document.getElementById('health').textContent = player.health;
    document.getElementById('gold').textContent = player.gold;
    document.getElementById('level').textContent = player.level;
    
    // Update location
    const location = locations[currentLocation];
    document.getElementById('locationName').textContent = location.name;
    document.getElementById('locationDescription').textContent = location.description;
    
    // Update actions
    const actionsDiv = document.getElementById('actions');
    actionsDiv.innerHTML = '';
    location.actions.forEach(action => {
        const button = document.createElement('button');
        button.textContent = action;
        button.onclick = () => handleAction(action);
        actionsDiv.appendChild(button);
    });
    
    // Update inventory
    const inventoryDiv = document.getElementById('inventory');
    if (player.inventory.length === 0) {
        inventoryDiv.innerHTML = '<p>Empty</p>';
    } else {
        inventoryDiv.innerHTML = player.inventory.map(item => 
            `<p>${item.name} - ${item.description}</p>`
        ).join('');
    }
}
```

### Step 2: Location Navigation

```javascript
function goToLocation(locationName) {
    currentLocation = locationName;
    updateDisplay();
}

function handleAction(action) {
    if (action === "Go to Forest") {
        goToLocation('forest');
    } else if (action === "Return to Town") {
        goToLocation('town');
    } else if (action === "Visit Shop") {
        openShop();
    } else if (action === "Explore") {
        // Random chance of encounter
        if (Math.random() < 0.5) {
            startCombat('goblin');
        } else {
            alert("Nothing here...");
        }
    }
}
```

### Step 3: Combat System

```javascript
function startCombat(monsterType) {
    currentEnemy = { ...monsters[monsterType] };
    inCombat = true;
    alert(`A ${currentEnemy.name} appears!`);
    playerTurn();
}

function playerTurn() {
    if (!inCombat) return;
    
    const action = prompt("Choose action: attack or flee");
    
    if (action === "attack") {
        playerAttack();
    } else if (action === "flee") {
        if (Math.random() < 0.5) {
            alert("Fled successfully!");
            inCombat = false;
        } else {
            alert("Failed to flee!");
            enemyAttack();
        }
    }
}

function playerAttack() {
    const damage = Math.floor(Math.random() * player.attack) + 5;
    currentEnemy.health -= damage;
    alert(`You deal ${damage} damage!`);
    
    if (currentEnemy.health <= 0) {
        victory();
    } else {
        enemyAttack();
    }
}

function enemyAttack() {
    const damage = Math.max(0, Math.floor(Math.random() * currentEnemy.attack) - player.defense);
    player.health -= damage;
    alert(`${currentEnemy.name} deals ${damage} damage!`);
    updateDisplay();
    
    if (player.health <= 0) {
        defeat();
    } else {
        playerTurn();
    }
}

function victory() {
    player.gold += currentEnemy.gold;
    alert(`Victory! You earned ${currentEnemy.gold} gold!`);
    inCombat = false;
    updateDisplay();
}

function defeat() {
    alert("You were defeated!");
    player.health = player.maxHealth;
    player.gold = Math.floor(player.gold * 0.8); // Lose 20% gold
    goToLocation('town');
}
```

### Step 4: Shop System

```javascript
const shopItems = [
    { name: "Health Potion", cost: 20, healing: 30 },
    { name: "Sword", cost: 50, attack: 5 }
];

function openShop() {
    let shopText = "Shop:\n";
    shopItems.forEach((item, index) => {
        shopText += `${index + 1}. ${item.name} - ${item.cost} gold\n`;
    });
    
    const choice = prompt(shopText + "\nEnter item number to buy (or 'exit'):");
    
    if (choice && choice !== 'exit') {
        const itemIndex = parseInt(choice) - 1;
        if (itemIndex >= 0 && itemIndex < shopItems.length) {
            buyItem(shopItems[itemIndex]);
        }
    }
}

function buyItem(item) {
    if (player.gold >= item.cost) {
        player.gold -= item.cost;
        player.inventory.push(item);
        alert(`Bought ${item.name}!`);
        updateDisplay();
    } else {
        alert("Not enough gold!");
    }
}
```

---

## Testing Checklist

- [ ] Player stats display correctly
- [ ] Can navigate between locations
- [ ] Combat starts and plays out correctly
- [ ] Victory rewards gold
- [ ] Defeat returns to town
- [ ] Shop displays items
- [ ] Can buy items with gold
- [ ] Items added to inventory
- [ ] Save game works
- [ ] Load game restores state

---

## Bonus Challenges

1. **Add more features:**
   - Level up system
   - Equipment (equip weapons/armor)
   - Multiple monster types per location
   - Quest system

2. **Improve UI:**
   - Better styling
   - Combat log
   - Health bars
   - Animations

3. **Add complexity:**
   - Different character classes
   - Magic spells
   - Boss battles
   - Achievements

---

## Grading Rubric

- **Setup (15 pts):** HTML structure complete
- **Player System (20 pts):** Player object and stats working
- **Locations (15 pts):** Multiple locations with navigation
- **Combat (25 pts):** Full combat system implemented
- **Shop (15 pts):** Shop with buy functionality
- **Save/Load (10 pts):** Persistence working

**Total: 100 points**

---

Good luck building your adventure! 🎮✨