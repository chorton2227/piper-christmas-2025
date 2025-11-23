# Exercise 3: Text Adventure Game

## 🎯 Objective
Create an interactive text-based adventure game using **nested conditionals**, **switch statements**, and **complex decision trees**. This exercise combines all the conditional concepts you've learned!

## 📋 Requirements

### Basic Requirements
1. **Story Display Area**: Shows the current scene description
2. **Choice Buttons**: 2-4 buttons for different choices
3. **Inventory Display**: Shows items the player has collected
4. **Game State Tracking**: Keeps track of player's location and progress

### Game Flow

#### Starting Scene
```
You wake up in a mysterious forest. The sun is setting, and you hear strange noises.
What do you do?

[Explore North] [Explore South] [Stay and Rest]
```

#### Minimum Story Structure
Your game should have:
- **5+ different locations** (forest, cave, village, river, mountain, etc.)
- **10+ decision points** (choices that lead to different outcomes)
- **3+ different endings** (good, bad, neutral)
- **Items to collect** (key, sword, map, potion, etc.)
- **Inventory system** (track what player has)

### Features to Implement

#### 1. **Scene System with Switch Statement**
Use a switch statement to determine which scene to display:
```javascript
switch (currentScene) {
    case 'forest':
        // Display forest scene
        break;
    case 'cave':
        // Display cave scene
        break;
    // ... more scenes
}
```

#### 2. **Nested Conditionals for Complex Choices**
Some choices should depend on multiple conditions:
```javascript
if (currentScene === 'cave') {
    if (hasKey) {
        // Can unlock chest
        if (hasTorch) {
            // Can see inside chest
        } else {
            // Too dark to see
        }
    } else {
        // Need key first
    }
}
```

#### 3. **Inventory System**
- Track items in an array or use boolean variables
- Check inventory before allowing certain actions
- Display inventory on the screen

#### 4. **Health/Energy System** (Optional)
- Track player health or energy points
- Some actions consume energy
- Game over if health reaches 0

#### 5. **Multiple Endings**
The game should end in different ways based on choices:
- **Good Ending**: Player finds treasure and escapes
- **Bad Ending**: Player gets lost or defeated
- **Secret Ending**: Player discovers hidden path (requires specific items)

## 🎮 Example Game Structure

### Scene Map
```
           [Mountain]
                |
    [Cave] - [Forest] - [Village]
       |                    |
   [Treasure]           [River]
```

### Sample Scene Logic
```javascript
// Forest Scene
if (currentScene === 'forest') {
    if (hasMap) {
        // Show more options with map
        showChoices(['Go to Village', 'Go to Cave', 'Go to Mountain', 'Check Map']);
    } else {
        // Limited options without map
        showChoices(['Go North', 'Go South', 'Go East', 'Go West']);
    }
}

// Cave Scene with nested conditions
if (currentScene === 'cave') {
    if (!hasTorch) {
        story = "It's too dark to see! You hear growling...";
        if (brave) {
            // Option to continue anyway
        } else {
            // Forced to return
        }
    } else {
        // Can explore with torch
        if (hasKey) {
            // Can open locked door
        }
    }
}
```

## 🌟 Bonus Challenges

### Character Stats
Add character attributes that affect choices:
- Strength (affects combat options)
- Intelligence (affects puzzle solutions)
- Charisma (affects NPC interactions)

### Random Events
Use conditionals with random numbers:
```javascript
const randomEvent = Math.random();
if (randomEvent < 0.3) {
    // 30% chance of finding item
} else if (randomEvent < 0.6) {
    // 30% chance of enemy encounter
} else {
    // 40% chance of nothing
}
```

### Save/Load System
- Save current game state to variables
- Allow player to restart from saved point

### Time System
- Track day/night cycle
- Some events only happen at certain times
- Use logical operators: `if (time === 'night' && location === 'forest')`

### NPC Interactions
- Add characters to talk to
- Conversations branch based on previous choices
- Use switch for dialogue options

### Combat System
- Turn-based combat using conditionals
- Attack, defend, or run options
- Outcome based on player stats and enemy strength

## 💡 Hints

### Scene Management
```javascript
let currentScene = 'forest';
let inventory = [];

function changeScene(newScene) {
    currentScene = newScene;
    updateDisplay();
}

function updateDisplay() {
    switch (currentScene) {
        case 'forest':
            showForestScene();
            break;
        case 'cave':
            showCaveScene();
            break;
        // ... more cases
    }
}
```

### Item Management
```javascript
function hasItem(itemName) {
    return inventory.includes(itemName);
}

function addItem(itemName) {
    if (!hasItem(itemName)) {
        inventory.push(itemName);
        updateInventoryDisplay();
    }
}

function useItem(itemName) {
    if (hasItem(itemName)) {
        // Item-specific logic
        if (itemName === 'key' && currentScene === 'cave') {
            // Unlock door
        }
    } else {
        alert("You don't have a " + itemName + "!");
    }
}
```

### Complex Decision Tree Example
```javascript
function exploreNorth() {
    if (currentScene === 'forest') {
        if (hasMap) {
            story = "Your map shows a mountain ahead.";
            if (hasClimbingGear) {
                // Can climb mountain
                changeScene('mountain');
            } else {
                // Need equipment
                showMessage("You need climbing gear!");
            }
        } else {
            // Random outcome without map
            if (Math.random() < 0.5) {
                changeScene('mountain');
            } else {
                showMessage("You got lost and returned to the forest.");
            }
        }
    }
}
```

### Ending Conditions
```javascript
function checkGameEnd() {
    // Good ending
    if (hasItem('treasure') && currentScene === 'village') {
        showGoodEnding();
        return true;
    }
    
    // Bad ending
    if (health <= 0) {
        showBadEnding();
        return true;
    }
    
    // Secret ending
    if (hasItem('ancient artifact') && 
        hasItem('magic scroll') && 
        currentScene === 'hidden temple') {
        showSecretEnding();
        return true;
    }
    
    return false; // Game continues
}
```

## 🎨 Styling Tips
- Use a typewriter effect for text appearing
- Add atmospheric background images for each scene
- Style buttons to look like medieval parchment
- Show inventory as item icons or a list
- Add fade transitions between scenes
- Use different colors for different types of messages:
  - Green for finding items
  - Red for danger/combat
  - Blue for information
  - Yellow for hints

## 🧪 Test Your Game
Play through these scenarios:
1. **Direct path to good ending**: Make all correct choices
2. **Bad ending path**: Make poor choices deliberately
3. **Secret ending**: Find hidden requirements
4. **Inventory requirements**: Try actions without needed items
5. **Backtracking**: Return to previous locations
6. **Item collection**: Collect all available items

## 📖 Example Story Snippet

```
SCENE: Forest Entrance
"You stand at the edge of a dark forest. The path splits into three directions.
A rusty sign reads: 'North to Mountain, East to Village, West to Cave.'"

[If player has map]
    "Your map shows that the treasure is likely in the cave, but legends say
    the cave is guarded by a sleeping dragon."

[If player has torch]
    "Your torch flickers. It might help in dark places."

CHOICES:
[Go North to Mountain] [Go East to Village] [Go West to Cave] [Check Inventory]

---

SCENE: Cave (without torch)
"You enter the cave. It's pitch black. You can't see anything!"
[Nested condition: if brave === true]
    "Do you dare continue in the darkness?"
    [Yes - 50% chance of finding treasure, 50% chance of bad ending]
    [No - Return to forest]

SCENE: Cave (with torch)
"Your torch illuminates ancient cave paintings. You see a locked chest."
[If has key]
    [Open Chest] → Find treasure → Return to village for GOOD ENDING
[If no key]
    "The chest is locked. Perhaps someone in the village has the key?"
```

## 📝 What You'll Learn
- Nested if statements for complex logic
- Switch statements for scene management
- Logical operators for compound conditions
- State management (tracking location, inventory, stats)
- Program flow control
- Breaking down complex problems into smaller pieces
- Creating branching narratives
- User experience design

Have fun creating your adventure! This is your chance to be creative and build an entire interactive world! 🗺️⚔️🏆
