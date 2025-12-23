# Exercise 1: Character Creator ðŸŽ®

## ðŸŽ¯ Goal
Create a game character using variables! You'll store information about your character and display it in the console.

## ðŸ“‹ Instructions

### Step 1: Create Your HTML File
Create a file called `character-creator.html` with basic HTML structure

### Step 2: Add a Script Tag
Add a `<script>` tag at the end of the body (before `</body>`)

### Step 3: Create Character Variables
Inside your script tag, create variables for:

#### Character Basics (use `const`)
- `CHARACTER_NAME` - Your character's name
- `CHARACTER_CLASS` - Their class (Warrior, Mage, Rogue, etc.)
- `STARTING_HEALTH` - How much health they start with (e.g., 100)
- `STARTING_MANA` - How much mana they start with (e.g., 50)

#### Character Stats (use `let`)
- `currentHealth` - Their current health (starts same as STARTING_HEALTH)
- `currentMana` - Their current mana (starts same as STARTING_MANA)
- `level` - Their current level (starts at 1)
- `experience` - Their experience points (starts at 0)

#### Character Status (use booleans with `let`)
- `isAlive` - Is the character alive? (starts true)
- `isInBattle` - Are they in battle? (starts false)
- `hasWeapon` - Do they have a weapon? (your choice!)
- `hasArmor` - Do they have armor? (your choice!)

### Step 4: Display Character Information
Use `console.log()` to display:
1. A fancy header with the character name
2. All the character's information
3. Some calculated stats (like total power, or health percentage)

### Step 5: Simulate Some Actions
Simulate your character doing things:
- Take damage (reduce currentHealth)
- Use a spell (reduce currentMana)
- Gain experience
- Maybe level up!

Display the updated stats after each action!

## ðŸ’¡ Tips
- Use descriptive variable names
- Group related variables together with comments
- Use `const` for things that don't change
- Use `let` for things that do change
- Show before and after for actions

## âœ… Requirements Checklist
- [ ] HTML file with proper structure
- [ ] At least 4 constants (UPPERCASE names)
- [ ] At least 4 regular variables (camelCase)
- [ ] At least 2 boolean variables
- [ ] Console displays character info clearly
- [ ] At least 3 simulated actions
- [ ] Updated stats shown after each action
- [ ] Good use of comments and organization

## ðŸŽ¯ Example Output Format
```
â•”â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•—
â•‘     THUNDER KNIGHT            â•‘
â•šâ•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

CLASS: Warrior
LEVEL: 1
EXPERIENCE: 0 XP

HEALTH: 100 / 100
MANA: 50 / 50

STATUS:
- Alive: true
- In Battle: false
- Has Weapon: true
- Has Armor: true

â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
âš”ï¸ ENTERING BATTLE!
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

Taking 30 damage...
Health: 70 / 100

Using Fire Spell (costs 20 mana)...
Mana: 30 / 50

Victory! Gained 150 XP
Experience: 150 XP

ðŸ’ª LEVELED UP!
Level: 2
```

## ðŸš€ Challenge (Optional)
- Calculate and show health percentage
- Add more stats (strength, defense, speed)
- Create an inventory counter
- Calculate damage based on stats
- Show a power level (sum of different stats)
- Add equipment bonuses
- Create a title based on level (Novice, Apprentice, Expert, etc.)

## ðŸ“ What You'll Learn
- Creating and organizing variables
- Using const vs let appropriately
- Working with numbers, strings, and booleans
- Updating variable values
- Building structured output
- Simulating game logic

Have fun creating your character! ðŸŽ®âœ¨
