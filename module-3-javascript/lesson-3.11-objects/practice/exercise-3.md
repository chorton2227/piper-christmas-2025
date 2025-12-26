
Create a virtual pet simulator where you can manage multiple pets!

## Your Task

Create a file called `pet-collection.html` that lets you adopt, care for, and manage virtual pets.

### Part 1: Pet Object
Each pet should have:
- `name` - Pet's name
- `type` - cat, dog, hamster, bird, fish
- `age` - In years
- `emoji` - Visual representation (🐱🐶🐹🐦🐠)
- `stats` - Nested object:
  - `hunger` (0-100, higher = more hungry)
  - `happiness` (0-100)
  - `health` (0-100)
  - `energy` (0-100)
- `personality` - playful, lazy, energetic, calm
- `favoriteFood` - What they like to eat

### Part 2: Pet Methods
Add methods for pet actions:
- `feed(food)` - Reduce hunger, may increase happiness if favorite food
- `play()` - Increase happiness, decrease energy, increase hunger
- `sleep()` - Increase energy, slightly increase hunger
- `groom()` - Increase happiness and health
- `getStatus()` - Return string describing pet's condition
- `needsCare()` - Return true if any stat is critical (< 20 or > 80)

### Part 3: Pet Collection Manager
Create a manager object with:
- `pets` - Array of all pet objects
- `adoptPet(name, type)` - Add new pet
- `removePet(name)` - Remove a pet (adoption)
- `getPet(name)` - Find specific pet
- `getAllPets()` - Return all pets
- `careForAll(action)` - Perform action on all pets
- `getAverageStat(statName)` - Calculate average across all pets

### Part 4: Interactive Features
- Form to adopt new pets (name, type, personality)
- Display all pets as cards
- Each pet card shows stats with progress bars
- Action buttons for each pet (feed, play, sleep, groom)
- Visual indicators when pet needs care
- Overall statistics for all pets

### Bonus Challenges
- Automatic stat changes over time (pets get hungry, tired)
- Mini-games for different activities
- Pet moods that affect behavior
- Items/toys in inventory
- Pet relationships (pets can be friends)
- Achievements system
- Pet evolution (changes appearance as they grow)
- Save pets to localStorage
- Add different breeds with special abilities

## What You'll Practice
- Creating multiple objects with same structure
- Objects with methods using `this`
- Nested objects for complex properties
- Arrays of objects (pet collection)
- Factory functions to create pets
- Object state management
- Timers for automatic updates

## Hints
- Use factory function to easily create new pets
- `setInterval()` can make stats change over time
- Use emojis for visual pet representation
- Progress bars make stats easy to see
- Consider max/min values for stats (0-100)

## Example Pet Structure
```javascript
function createPet(name, type, personality) {
    let emoji = {
        cat: "🐱",
        dog: "🐶",
        hamster: "🐹",
        bird: "🐦",
        fish: "🐠"
    }[type];
    
    return {
        name: name,
        type: type,
        age: 0,
        emoji: emoji,
        stats: {
            hunger: 50,
            happiness: 80,
            health: 100,
            energy: 70
        },
        personality: personality,
        favoriteFood: getFavoriteFood(type),
        
        feed: function(food) {
            this.stats.hunger = Math.max(0, this.stats.hunger - 30);
            if (food === this.favoriteFood) {
                this.stats.happiness = Math.min(100, this.stats.happiness + 15);
                return this.name + " loves " + food + "! 😻";
            }
            return this.name + " ate " + food + ".";
        },
        
        play: function() {
            if (this.stats.energy < 20) {
                return this.name + " is too tired! 😴";
            }
            this.stats.happiness = Math.min(100, this.stats.happiness + 20);
            this.stats.energy = Math.max(0, this.stats.energy - 25);
            this.stats.hunger = Math.min(100, this.stats.hunger + 15);
            return this.name + " had fun! 🎾";
        },
        
        getStatus: function() {
            if (this.stats.hunger > 80) return "I'm starving! 😿";
            if (this.stats.happiness < 20) return "I'm sad... 😢";
            if (this.stats.energy < 20) return "So sleepy... 😴";
            if (this.stats.health < 30) return "Not feeling well... 🤒";
            return "I'm doing great! 😊";
        }
    };
}
```

## Example Display
```
🏠 Pet Collection

My Pets (3):

┌─────────────────────────┐
│ 🐱 Fluffy (Cat)         │
│ Personality: Playful    │
│                         │
│ Hunger:    ████░░ 40%   │
│ Happiness: ████████ 85% │
│ Health:    █████████ 95%│
│ Energy:    ███░░ 30%    │
│                         │
│ Status: "So sleepy..."  │
│                         │
│ [Feed] [Play] [Sleep]   │
│ [Groom] [Release]       │
└─────────────────────────┘

[Adopt New Pet]

Collection Stats:
- Total Pets: 3
- Average Happiness: 78%
- Pets Needing Care: 1
```

Good luck! 🐾