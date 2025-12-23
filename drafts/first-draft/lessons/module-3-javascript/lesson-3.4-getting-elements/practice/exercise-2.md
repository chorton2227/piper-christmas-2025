# Practice Exercise 2: RPG Game Interface

## Objective
Create a complete RPG game interface with player stats, enemies, inventory, and actions. Practice selecting and organizing all the game elements using the three DOM selection methods.

## Instructions

Build a full game interface and write JavaScript to find and organize all elements.

### Part 1: Create Game Interface HTML (20 minutes)

Create an HTML file with a complete RPG interface:

#### Player Stats Section:
- Heading with `id="player-name"`
- Div with `id="health-display"` showing health (e.g., "100/100")
- Div with `id="mana-display"` showing mana (e.g., "50/50")
- Div with `id="level-display"` showing level (e.g., "Level 5")
- Div with `id="xp-display"` showing experience (e.g., "750/1000 XP")
- Div with `id="gold-display"` showing gold (e.g., "350 Gold")

#### Combat Actions:
- Button with `id="attack-btn"` and `class="combat-btn"`
- Button with `id="defend-btn"` and `class="combat-btn"`
- Button with `id="magic-btn"` and `class="combat-btn"`
- Button with `id="run-btn"` and `class="combat-btn"`

#### Enemies (at least 4):
- Each enemy is a div with `class="enemy"`
- Each has `data-enemy-type` (slime, goblin, orc, dragon, etc.)
- Each has `data-enemy-level` (1-10)
- Each contains enemy name, level, and HP display

#### Inventory (at least 8 items):
- Each item is a div with `class="inventory-item"`
- Use `data-item-type` (potion, weapon, armor, scroll, key, etc.)
- Include item name and quantity

#### Special Items:
- At least 2 items with `data-item-type="potion"`
- At least 1 item with `data-item-type="weapon"`
- At least 1 item with `data-item-type="armor"`

### Part 2: Get Player Elements (10 minutes)

Use `getElementById()` to get all player stat elements:

```javascript
// Get player stat elements
let playerName = document.getElementById('player-name');
let healthDisplay = document.getElementById('health-display');
let manaDisplay = document.getElementById('mana-display');
// ... get all stat elements

console.log('Player name:', playerName.textContent);
console.log('Health:', healthDisplay.textContent);
// ... log all stats
```

**Requirements**:
- Get all 6 player stat elements by ID
- Log each element's text content
- Verify all elements exist

### Part 3: Get Action Buttons (10 minutes)

Get combat buttons using both getElementById and querySelector:

```javascript
// Method 1: By ID
let attackBtn = document.getElementById('attack-btn');

// Method 2: Get all combat buttons
let allCombatBtns = document.querySelectorAll('.combat-btn');

console.log('Combat actions available:', allCombatBtns.length);
```

**Requirements**:
- Get each button by ID
- Get all buttons as a collection using class
- Log how many combat actions are available
- Display the text of each button

### Part 4: Get and Analyze Enemies (15 minutes)

Use querySelectorAll to work with all enemies:

```javascript
// Get all enemies
let allEnemies = document.querySelectorAll('.enemy');

console.log('Total enemies:', allEnemies.length);

// Loop through and display details
allEnemies.forEach(function(enemy, index) {
    let type = enemy.getAttribute('data-enemy-type');
    let level = enemy.getAttribute('data-enemy-level');
    console.log('Enemy ' + (index + 1) + ': ' + type + ' (Level ' + level + ')');
});
```

**Requirements**:
- Get all enemies as a collection
- Log total number of enemies
- Loop through and display type and level of each
- Count enemies by type (how many slimes, goblins, etc.)
- Find highest level enemy

### Part 5: Get and Organize Inventory (15 minutes)

Work with inventory items:

```javascript
// Get all items
let allItems = document.querySelectorAll('.inventory-item');

// Get items by type
let potions = document.querySelectorAll('[data-item-type="potion"]');
let weapons = document.querySelectorAll('[data-item-type="weapon"]');
let armor = document.querySelectorAll('[data-item-type="armor"]');

console.log('Inventory breakdown:');
console.log('  Total items:', allItems.length);
console.log('  Potions:', potions.length);
console.log('  Weapons:', weapons.length);
console.log('  Armor:', armor.length);
```

**Requirements**:
- Get all inventory items
- Categorize by item type
- Count items in each category
- Display item names for each category

### Part 6: Create Organized Game Object (20 minutes)

Organize all elements into a structured object:

```javascript
let game = {
    player: {
        name: document.getElementById('player-name'),
        health: document.getElementById('health-display'),
        mana: document.getElementById('mana-display'),
        level: document.getElementById('level-display'),
        xp: document.getElementById('xp-display'),
        gold: document.getElementById('gold-display')
    },
    
    combat: {
        buttons: {
            attack: document.getElementById('attack-btn'),
            defend: document.getElementById('defend-btn'),
            magic: document.getElementById('magic-btn'),
            run: document.getElementById('run-btn'),
            all: document.querySelectorAll('.combat-btn')
        }
    },
    
    enemies: {
        all: document.querySelectorAll('.enemy'),
        // Add more categorization...
    },
    
    inventory: {
        all: document.querySelectorAll('.inventory-item'),
        potions: document.querySelectorAll('[data-item-type="potion"]'),
        weapons: document.querySelectorAll('[data-item-type="weapon"]'),
        armor: document.querySelectorAll('[data-item-type="armor"]')
    }
};

console.log('Game object created!');
console.log('Access player name:', game.player.name.textContent);
console.log('Total enemies:', game.enemies.all.length);
```

**Requirements**:
- Create a `game` object with organized sections
- Include player, combat, enemies, and inventory sections
- Store both individual elements and collections
- Test accessing elements through the object

### Part 7: Game Statistics (10 minutes)

Calculate and display game statistics:

```javascript
console.log('=== GAME STATISTICS ===');
console.log('Player: ' + game.player.name.textContent);
console.log('Level: ' + game.player.level.textContent);
console.log('');
console.log('Combat:');
console.log('  Available actions: ' + game.combat.buttons.all.length);
console.log('  Current enemies: ' + game.enemies.all.length);
console.log('');
console.log('Inventory:');
console.log('  Total items: ' + game.inventory.all.length);
console.log('  Potions: ' + game.inventory.potions.length);
// ... more stats
```

**Requirements**:
- Display player information
- Show combat statistics
- Show inventory breakdown
- Calculate total enemy levels
- Display unique enemy types

### Part 8: Advanced Queries (10 minutes)

Practice complex selections:

```javascript
// Get high-level enemies (level 5+)
let strongEnemies = document.querySelectorAll('[data-enemy-level]');
let highLevel = [];
strongEnemies.forEach(function(enemy) {
    if (parseInt(enemy.getAttribute('data-enemy-level')) >= 5) {
        highLevel.push(enemy);
    }
});
console.log('High-level enemies (5+):', highLevel.length);

// Get first enemy of specific type
let firstSlime = document.querySelector('[data-enemy-type="slime"]');

// Get all items except potions
let nonPotions = document.querySelectorAll('.inventory-item:not([data-item-type="potion"])');
```

**Requirements**:
- Find enemies above certain level
- Find first enemy of specific type
- Filter items by type
- Find items with specific attributes

## Success Criteria

✅ You've successfully completed this exercise when:

1. Complete game interface is created with all required elements
2. All player stats are retrieved and displayed
3. All combat buttons are found and organized
4. Enemy collection is analyzed (count, types, levels)
5. Inventory is categorized by item type
6. Game object is created and organized
7. Statistics are calculated and displayed accurately
8. Advanced queries work correctly
9. No errors in console
10. All elements are accessible through organized structure

## Common Challenges

### Challenge: "Too many elements to keep track of!"
**Solution**: Create the game object structure FIRST, then fill it in piece by piece. Don't try to do everything at once.

### Challenge: "How do I count enemies by type?"
**Solution**:
```javascript
let slimes = document.querySelectorAll('[data-enemy-type="slime"]').length;
let goblins = document.querySelectorAll('[data-enemy-type="goblin"]').length;
// etc.
```

### Challenge: "How do I find the highest level enemy?"
**Solution**:
```javascript
let highestLevel = 0;
allEnemies.forEach(function(enemy) {
    let level = parseInt(enemy.getAttribute('data-enemy-level'));
    if (level > highestLevel) {
        highestLevel = level;
    }
});
```

## Bonus Challenges

1. **Enemy Threat Calculator**: Calculate total enemy threat (sum of all levels)
2. **Inventory Value**: If items have data-value attributes, calculate total value
3. **Battle Difficulty**: Categorize battle as easy/medium/hard based on enemy count and levels
4. **Quick Access Functions**: Create helper functions like `getEnemiesByType(type)`, `getItemsByType(type)`
5. **Validation**: Check that all required elements exist and log any missing ones

## Example Output

```
=== PLAYER STATS ===
Name: Hero Knight
Health: 100/100
Mana: 50/50
Level: Level 5
XP: 750/1000 XP
Gold: 350 Gold

=== COMBAT ===
Available actions: 4
Actions: Attack, Defend, Magic, Run

=== ENEMIES ===
Total enemies: 4
Enemy 1: slime (Level 2)
Enemy 2: goblin (Level 4)
Enemy 3: orc (Level 6)
Enemy 4: dragon (Level 10)
Highest level: 10

=== INVENTORY ===
Total items: 8
Potions: 2
Weapons: 1
Armor: 1
Other: 4

=== GAME STATISTICS ===
Ready for combat!
```

## Time Estimate
- Part 1 (HTML): 20 minutes
- Part 2 (Player): 10 minutes
- Part 3 (Buttons): 10 minutes
- Part 4 (Enemies): 15 minutes
- Part 5 (Inventory): 15 minutes
- Part 6 (Game Object): 20 minutes
- Part 7 (Statistics): 10 minutes
- Part 8 (Advanced): 10 minutes
- **Total: ~110 minutes**

## Next Steps

After completing this exercise:
1. Compare your solution with the answer key
2. Try Exercise 3 for form element handling
3. Think about how you'll use these elements in the next lesson to change content!
4. Keep your game object structure - you'll build on it later!
