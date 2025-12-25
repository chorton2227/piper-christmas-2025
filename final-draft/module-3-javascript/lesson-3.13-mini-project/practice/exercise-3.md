
Design and build a completely original game using JavaScript concepts!

## Your Task

Create a game in a different genre than Adventure Quest. Use all the JavaScript concepts you've learned but apply them creatively!

---

## Game Genre Ideas

### Option 1: Farming/Life Simulation 🌾
- Plant and harvest crops
- Raise animals
- Sell products for money
- Upgrade farm buildings
- Seasonal events

### Option 2: Space Exploration 🚀
- Navigate between planets
- Manage fuel and resources
- Discover alien species
- Trade with space stations
- Upgrade spaceship

### Option 3: Restaurant Manager 🍕
- Cook dishes for customers
- Manage ingredients
- Serve customers quickly
- Upgrade kitchen equipment
- Unlock new recipes

### Option 4: Pet Collection 🐾
- Catch and collect pets
- Train pets to level up
- Battle other trainers
- Breed pets for new types
- Build pet habitats

### Option 5: Puzzle/Strategy 🧩
- Match-3 game
- Tower defense
- Word game
- Logic puzzles
- Card game

### Option 6: Sports/Racing 🏎️
- Racing game with lap times
- Basketball shooting game
- Soccer penalty kicks
- Track and field events
- Skateboarding tricks

---

## Required JavaScript Concepts

Your game MUST use at least 8 of these concepts:

### Core Concepts (Must use all 4)
- [ ] **Objects** - Game entities as objects
- [ ] **Arrays** - Collections of items/enemies/levels
- [ ] **Functions** - Organized, reusable code
- [ ] **DOM Manipulation** - Update HTML dynamically

### Interactive Features (Choose 4)
- [ ] **Event Handling** - Button clicks, keyboard input
- [ ] **Conditionals** - If/else for game logic
- [ ] **Loops** - Process arrays, repeated actions
- [ ] **Random Numbers** - Chance-based mechanics
- [ ] **Timers** - setTimeout or setInterval
- [ ] **localStorage** - Save/load game

---

## Planning Template

### 1. Game Concept

**Genre:** _______________

**Core Mechanic:** 
_What is the main thing players do?_

**Goal:**
_What are players trying to achieve?_

### 2. Game Objects

List the main objects in your game:

```javascript
// Example for Restaurant Game
const restaurant = {
    money: 100,
    reputation: 50,
    ingredients: [],
    equipment: [],
    customers: []
};

const recipes = [
    {
        name: "Pizza",
        ingredients: ["dough", "cheese", "sauce"],
        cookTime: 5,
        price: 15
    }
];
```

### 3. Core Functions

List the main functions you'll need:

```javascript
// Example functions
function startGame() { }
function updateDisplay() { }
function handleCustomer() { }
function cookDish(recipe) { }
function earnMoney(amount) { }
function saveGame() { }
function loadGame() { }
```

### 4. HTML Structure

Sketch your interface:

```html
<!-- Example layout -->
<div class="stats">
    <!-- Money, reputation, etc. -->
</div>

<div class="main-area">
    <!-- Main game area -->
</div>

<div class="actions">
    <!-- Buttons for actions -->
</div>
```

---

## Implementation Steps

### Step 1: Basic Setup (Week 1)
- Create HTML structure
- Add CSS styling
- Create main game object
- Implement updateDisplay()

### Step 2: Core Mechanic (Week 2)
- Implement main gameplay loop
- Add primary actions
- Test thoroughly

### Step 3: Progression System (Week 3)
- Add points/money/XP system
- Implement upgrades or levels
- Add goals or achievements

### Step 4: Polish & Features (Week 4)
- Add secondary features
- Implement save/load
- Bug fixing
- Visual improvements

---

## Example: Simple Clicker Game

```html
<!DOCTYPE html>
<html>
<head>
    <title>Cookie Clicker Clone</title>
    <style>
        body {
            text-align: center;
            font-family: Arial;
            padding: 50px;
        }
        
        #cookie {
            font-size: 100px;
            cursor: pointer;
            user-select: none;
        }
        
        #cookie:active {
            transform: scale(0.95);
        }
        
        .upgrade {
            margin: 10px;
            padding: 10px 20px;
        }
    </style>
</head>
<body>
    <h1>Cookie Clicker</h1>
    
    <div>
        <h2>Cookies: <span id="cookies">0</span></h2>
        <h3>Per Second: <span id="perSecond">0</span></h3>
    </div>
    
    <div id="cookie" onclick="clickCookie()">🍪</div>
    
    <div>
        <h3>Upgrades</h3>
        <button class="upgrade" onclick="buyUpgrade('cursor')">
            Cursor (Cost: <span id="cursorCost">10</span>)<br>
            +1 per click
        </button>
        <button class="upgrade" onclick="buyUpgrade('grandma')">
            Grandma (Cost: <span id="grandmaCost">100</span>)<br>
            +1 per second
        </button>
    </div>
    
    <button onclick="saveGame()">Save</button>
    <button onclick="loadGame()">Load</button>

    <script>
        const game = {
            cookies: 0,
            clickPower: 1,
            perSecond: 0,
            upgrades: {
                cursor: { count: 0, cost: 10, power: 1, costMultiplier: 1.15 },
                grandma: { count: 0, cost: 100, persecond: 1, costMultiplier: 1.15 }
            }
        };
        
        function clickCookie() {
            game.cookies += game.clickPower;
            updateDisplay();
        }
        
        function buyUpgrade(type) {
            const upgrade = game.upgrades[type];
            
            if (game.cookies >= upgrade.cost) {
                game.cookies -= upgrade.cost;
                upgrade.count++;
                upgrade.cost = Math.floor(upgrade.cost * upgrade.costMultiplier);
                
                if (upgrade.power) {
                    game.clickPower += upgrade.power;
                }
                if (upgrade.persecond) {
                    game.perSecond += upgrade.persecond;
                }
                
                updateDisplay();
            }
        }
        
        function updateDisplay() {
            document.getElementById('cookies').textContent = Math.floor(game.cookies);
            document.getElementById('perSecond').textContent = game.perSecond;
            document.getElementById('cursorCost').textContent = game.upgrades.cursor.cost;
            document.getElementById('grandmaCost').textContent = game.upgrades.grandma.cost;
        }
        
        function saveGame() {
            localStorage.setItem('cookieGame', JSON.stringify(game));
            alert("Game saved!");
        }
        
        function loadGame() {
            const saved = localStorage.getItem('cookieGame');
            if (saved) {
                Object.assign(game, JSON.parse(saved));
                updateDisplay();
                alert("Game loaded!");
            }
        }
        
        // Auto-generate cookies
        setInterval(() => {
            game.cookies += game.perSecond;
            updateDisplay();
        }, 1000);
        
        // Initialize
        updateDisplay();
    </script>
</body>
</html>
```

---

## Requirements Checklist

### Technical Requirements
- [ ] Uses objects for game state
- [ ] Uses arrays for collections
- [ ] Has at least 5 functions
- [ ] Updates DOM dynamically
- [ ] Implements save/load
- [ ] Uses at least 3 events
- [ ] Has progression system
- [ ] Well-organized code

### Game Design Requirements
- [ ] Clear goal or objective
- [ ] Player makes meaningful choices
- [ ] Has progression/advancement
- [ ] Balanced difficulty
- [ ] Instructions provided
- [ ] Polished appearance

### Code Quality
- [ ] Functions are well-named
- [ ] Code has comments
- [ ] No console errors
- [ ] Tested thoroughly
- [ ] Uses proper indentation

---

## Grading Rubric

**Technical Implementation (50 points)**
- Uses required concepts (30 pts)
- Code organization (10 pts)
- Save/load works (10 pts)

**Game Design (30 points)**
- Fun to play (10 pts)
- Clear goal (10 pts)
- Balanced progression (10 pts)

**Polish (20 points)**
- Visual design (10 pts)
- Bug-free (10 pts)

**Total: 100 points**

---

## Inspiration & Ideas

### Resource Management Games
- Manage multiple resources
- Balance supply and demand
- Upgrade production

### Collection Games
- Collect different types of items
- Complete collections
- Trade or combine items

### Skill-Based Games
- Timing challenges
- Accuracy tests
- Quick reactions

### Strategy Games
- Plan ahead
- Optimize choices
- Manage risks

---

## Bonus Challenges

- **Animations** - Add visual effects
- **Sound** - Background music or effects
- **Multiple Save Slots** - Let players have multiple games
- **Leaderboards** - High scores with localStorage
- **Achievements** - Special accomplishments
- **Mobile-Friendly** - Works on phones
- **Multiplayer** - Local or shared scores

---

## Presentation

Be ready to demo your game and explain:

1. **What's the goal?** - What are players trying to do?
2. **What's unique?** - What makes it interesting?
3. **What concepts?** - What JavaScript did you use?
4. **What challenges?** - What was hardest to build?
5. **Future features?** - What would you add next?

---

## Tips for Success

1. **Start Simple** - Get basic version working first
2. **Iterate** - Add features one at a time
3. **Test Often** - Play your own game frequently
4. **Get Feedback** - Let others try it
5. **Have Fun!** - Make something YOU enjoy

---

This is your chance to be creative! Build something unique and be proud of it! 🎮✨
