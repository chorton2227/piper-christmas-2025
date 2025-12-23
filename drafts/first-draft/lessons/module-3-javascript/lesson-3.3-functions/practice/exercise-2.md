# Exercise 2: RPG Combat System ⚔️

Build a complete combat system for a role-playing game using functions!

---

## 🎯 Your Mission

Create a battle system with multiple functions that work together to simulate combat between a hero and an enemy.

---

## 📋 Requirements

### Required Functions (Create at least 10)

#### Combat Calculation Functions
- `calculateDamage(attackPower, defense)` - Return damage dealt (can't be negative)
- `calculateCriticalHit(normalDamage)` - Return double damage
- `calculateHealing(currentHealth, healAmount, maxHealth)` - Return new health (can't exceed max)
- `calculateManaCost(spellPower)` - Return mana needed for spell

#### Status Check Functions
- `isAlive(health)` - Return true if health > 0
- `canCastSpell(currentMana, manaCost)` - Return true if enough mana
- `isCriticalHealth(health, maxHealth)` - Return true if health below 25%
- `getHealthPercentage(currentHealth, maxHealth)` - Return percentage

#### Display Functions
- `displayCharacter(name, health, maxHealth, level)` - Show character card
- `displayAction(attacker, action, target, result)` - Show what happened
- `displayBattleResult(winner, loser)` - Show who won

#### Bonus Functions (Optional)
- `shouldDodge(speed)` - Return true/false based on speed
- `calculateExperience(enemyLevel)` - Return XP earned
- `getLevelTitle(level)` - Return rank name (Novice, Warrior, etc.)

---

## 🎮 Battle Flow

Your program should simulate a battle with these steps:

1. **Setup** - Create hero and enemy with stats (health, mana, attack, defense, level)
2. **Display starting stats** - Show both characters
3. **Round 1** - Hero attacks enemy
4. **Round 1** - Enemy attacks hero
5. **Round 2** - Hero casts spell (if enough mana)
6. **Round 2** - Enemy attacks hero
7. **Round 3** - Hero uses healing potion
8. **Round 3** - Hero attacks enemy
9. **Check winner** - See who's still alive
10. **Display results** - Show final stats and winner

---

## 💡 Example Structure

```javascript
// === COMBAT FUNCTIONS ===

function calculateDamage(attackPower, defense) {
    // Your code here
}

function isAlive(health) {
    // Your code here
}

// ... more functions ...

// === BATTLE SIMULATION ===

// Create hero
let heroName = 'Thunder Knight';
let heroHealth = 100;
let heroMaxHealth = 100;
// ... more hero stats ...

// Create enemy
let enemyName = 'Shadow Beast';
let enemyHealth = 80;
// ... more enemy stats ...

// Show starting stats
displayCharacter(heroName, heroHealth, heroMaxHealth, heroLevel);
displayCharacter(enemyName, enemyHealth, enemyMaxHealth, enemyLevel);

// ROUND 1
console.log('\n=== ROUND 1 ===');

// Hero attacks
let damage = calculateDamage(heroAttack, enemyDefense);
enemyHealth = enemyHealth - damage;
displayAction(heroName, 'attacks', enemyName, damage + ' damage');

// Enemy attacks back
let damage2 = calculateDamage(enemyAttack, heroDefense);
heroHealth = heroHealth - damage2;
displayAction(enemyName, 'attacks', heroName, damage2 + ' damage');

// ... continue battle ...

// Check winner
if (isAlive(heroHealth) && !isAlive(enemyHealth)) {
    displayBattleResult(heroName, enemyName);
}
```

---

## 📝 Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RPG Combat System</title>
</head>
<body>
    <h1>⚔️ RPG Combat System ⚔️</h1>
    <p>Open the console (F12) to watch the battle!</p>

    <script>
        console.log('================================');
        console.log('⚔️  RPG COMBAT SYSTEM');
        console.log('================================');

        // ========================
        // COMBAT FUNCTIONS
        // ========================

        function calculateDamage(attackPower, defense) {
            // Calculate and return damage
        }

        // Add more functions here...


        // ========================
        // BATTLE SETUP
        // ========================

        console.log('\n🎮 BATTLE BEGINS!');
        
        // Create hero stats
        let heroName = 'Thunder Knight';
        let heroHealth = 100;
        let heroMaxHealth = 100;
        // Add more stats...

        // Create enemy stats
        let enemyName = 'Shadow Beast';
        let enemyHealth = 80;
        // Add more stats...


        // ========================
        // BATTLE ROUNDS
        // ========================

        // Display starting stats
        console.log('\n📋 COMBATANTS:');
        displayCharacter(heroName, heroHealth, heroMaxHealth, heroLevel);
        displayCharacter(enemyName, enemyHealth, enemyMaxHealth, enemyLevel);

        // ROUND 1
        console.log('\n=== ROUND 1 ===');
        // Your battle code here...

        // ROUND 2
        console.log('\n=== ROUND 2 ===');
        // Your battle code here...

        // ROUND 3
        console.log('\n=== ROUND 3 ===');
        // Your battle code here...


        // ========================
        // BATTLE RESULTS
        // ========================

        // Determine winner and display results
        console.log('\n================================');
        console.log('⚔️  BATTLE COMPLETE!');
        console.log('================================');
    </script>
</body>
</html>
```

---

## ✅ Checklist

- [ ] Created HTML file `rpg-combat.html`
- [ ] At least 10 combat functions created
- [ ] Combat calculation functions (damage, healing, etc.)
- [ ] Status check functions (isAlive, canCast, etc.)
- [ ] Display functions for output
- [ ] Hero character with stats (name, health, mana, attack, defense, level)
- [ ] Enemy character with stats
- [ ] At least 3 rounds of combat
- [ ] Functions called to perform all actions
- [ ] Winner determined and displayed
- [ ] Clear console output showing battle flow
- [ ] All functions have descriptive names

---

## 🌟 Bonus Challenges

1. **Critical Hits** - Random chance for double damage (use Math.random())
2. **Dodge System** - Character might dodge based on speed stat
3. **Multiple Enemies** - Fight 2 or 3 enemies in sequence
4. **Special Moves** - Different attack types (slash, smash, pierce)
5. **Status Effects** - Poison damage over time, burn effects
6. **Experience & Leveling** - Gain XP, level up if enough XP earned
7. **Inventory** - Use healing potions, mana potions from inventory
8. **Turn Counter** - Track and display which turn it is

---

## 💭 Tips

- **Test functions individually first** - Make sure each works before combining
- **Use descriptive console.log messages** - Make the battle easy to follow
- **Keep track of health/mana** - Update values after each action
- **Check conditions** - Is character alive? Enough mana? Health critical?
- **Use functions for everything** - Don't calculate damage directly, use calculateDamage()
- **Organize your code** - Keep functions together, battle simulation separate
- **Add dramatic flair** - Use emojis and formatting to make it exciting!

---

## 🎯 Success Criteria

You're done when:
- All required functions are created and working
- Complete battle plays out with multiple rounds
- Functions are used for all calculations and checks
- Clear output shows what happens each turn
- Battle determines a winner
- Code is organized and easy to read
- You can explain what each function does
- You could easily add new features using your functions

Time to code an epic battle! ⚔️🛡️
