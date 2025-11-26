# Exercise 1: Character Creator for Video Game

Create a character creator system using objects!

## Your Task

Create a file called `character-creator.html` that lets users create and manage video game characters.

### Part 1: Character Object
Create a character object with these properties:
- `name` - Character's name
- `class` - Fighter, Mage, or Rogue
- `level` - Starting at 1
- `health` - Starting HP
- `maxHealth` - Maximum HP
- `mana` - Starting mana
- `stats` - Nested object with strength, intelligence, agility
- `inventory` - Array of items

### Part 2: Character Methods
Add these methods to your character:
- `levelUp()` - Increase level, boost stats, restore HP/mana
- `takeDamage(amount)` - Reduce health
- `heal(amount)` - Restore health (can't exceed max)
- `useSkill(skillName)` - Use a class-specific skill (costs mana)
- `addItem(item)` - Add item to inventory
- `displayStats()` - Return formatted string of all stats

### Part 3: Multiple Characters
- Create an array to store multiple characters
- Add buttons to create new characters
- Display all characters in a list
- Allow switching between characters

### Part 4: Interactive Features
- Form to input character name and choose class
- Display character card with all stats
- Buttons for actions (level up, take damage, heal)
- Show inventory items
- Save character state when actions are performed

### Bonus Challenges
- Add equipment system (weapon, armor)
- Implement experience points (need X XP to level up)
- Add skills/abilities unique to each class
- Create a battle system (character vs enemy)
- Add character portraits or icons
- Implement save/load characters (localStorage)

## What You'll Practice
- Creating objects with properties and methods
- Using `this` keyword in methods
- Nested objects (stats, equipment)
- Arrays of objects (multiple characters)
- Object methods that modify properties
- DOM manipulation to display object data

## Hints
- Start with one character, then expand to multiple
- Use `this` to access character properties in methods
- Create helper functions to update the display
- Math.max() and Math.min() are useful for clamping values

## Example Character Structure
```javascript
let character = {
    name: "Hero",
    class: "Fighter",
    level: 1,
    health: 100,
    maxHealth: 100,
    mana: 50,
    stats: {
        strength: 15,
        intelligence: 8,
        agility: 10
    },
    inventory: ["Health Potion", "Wooden Sword"],
    
    levelUp: function() {
        this.level++;
        this.maxHealth += 10;
        this.health = this.maxHealth;
        this.stats.strength += 2;
        // ... more stat increases
    },
    
    takeDamage: function(amount) {
        this.health -= amount;
        if (this.health < 0) this.health = 0;
        return this.health > 0;
    }
};
```

## Example Display
```
🗡️ Character: Hero (Fighter)
Level: 5
HP: 150/150
Mana: 75/100

Stats:
  Strength: 25
  Intelligence: 12
  Agility: 18

Inventory:
  - Health Potion x3
  - Iron Sword
  - Leather Armor

[Level Up] [Take Damage] [Heal] [Use Skill]
```

Good luck! ⚔️
