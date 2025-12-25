// GAME DATA - Items, Monsters, Locations, Quests
// ============================================

// Items Database
const ITEMS = {
    // Weapons
    stick: {
        id: 'stick',
        name: "Wooden Stick",
        type: "weapon",
        attack: 2,
        value: 5,
        description: "A simple wooden stick. Better than nothing!"
    },
    dagger: {
        id: 'dagger',
        name: "Rusty Dagger",
        type: "weapon",
        attack: 4,
        value: 25,
        description: "A small but sharp dagger"
    },
    sword: {
        id: 'sword',
        name: "Iron Sword",
        type: "weapon",
        attack: 7,
        value: 75,
        description: "A sturdy iron sword"
    },
    greatsword: {
        id: 'greatsword',
        name: "Great Sword",
        type: "weapon",
        attack: 12,
        value: 200,
        description: "A powerful two-handed sword"
    },
    excalibur: {
        id: 'excalibur',
        name: "Excalibur",
        type: "weapon",
        attack: 20,
        value: 500,
        description: "Legendary sword of heroes"
    },
    
    // Armor
    cloth: {
        id: 'cloth',
        name: "Cloth Armor",
        type: "armor",
        defense: 1,
        value: 10,
        description: "Basic cloth protection"
    },
    leather: {
        id: 'leather',
        name: "Leather Armor",
        type: "armor",
        defense: 3,
        value: 50,
        description: "Flexible leather protection"
    },
    chainmail: {
        id: 'chainmail',
        name: "Chainmail",
        type: "armor",
        defense: 6,
        value: 150,
        description: "Strong metal rings"
    },
    platemail: {
        id: 'platemail',
        name: "Plate Armor",
        type: "armor",
        defense: 10,
        value: 350,
        description: "Heavy plate armor"
    },
    
    // Consumables
    potion: {
        id: 'potion',
        name: "Health Potion",
        type: "consumable",
        healing: 30,
        value: 20,
        description: "Restores 30 health"
    },
    megaPotion: {
        id: 'megaPotion',
        name: "Mega Potion",
        type: "consumable",
        healing: 50,
        value: 50,
        description: "Restores 50 health"
    },
    elixir: {
        id: 'elixir',
        name: "Full Restore Elixir",
        type: "consumable",
        healing: 999,
        value: 100,
        description: "Fully restores health"
    }
};

// Monsters Database
const MONSTERS = {
    rat: {
        name: "Giant Rat",
        health: 20,
        attack: 3,
        defense: 1,
        xp: 10,
        gold: 5,
        description: "A large rodent with sharp teeth"
    },
    goblin: {
        name: "Goblin",
        health: 35,
        attack: 6,
        defense: 2,
        xp: 20,
        gold: 15,
        description: "A small but vicious goblin"
    },
    wolf: {
        name: "Fierce Wolf",
        health: 45,
        attack: 8,
        defense: 3,
        xp: 30,
        gold: 20,
        description: "A fierce forest predator"
    },
    bandit: {
        name: "Bandit",
        health: 50,
        attack: 10,
        defense: 4,
        xp: 40,
        gold: 35,
        description: "A dangerous highway robber"
    },
    orc: {
        name: "Orc Warrior",
        health: 70,
        attack: 12,
        defense: 5,
        xp: 50,
        gold: 45,
        description: "A brutal orc warrior"
    },
    spider: {
        name: "Giant Spider",
        health: 55,
        attack: 11,
        defense: 4,
        xp: 45,
        gold: 30,
        description: "A venomous giant spider"
    },
    skeleton: {
        name: "Skeleton Warrior",
        health: 60,
        attack: 13,
        defense: 6,
        xp: 60,
        gold: 50,
        description: "An undead skeleton warrior"
    },
    troll: {
        name: "Cave Troll",
        health: 100,
        attack: 15,
        defense: 7,
        xp: 80,
        gold: 75,
        description: "A massive troll"
    },
    dragon: {
        name: "Dragon",
        health: 200,
        attack: 25,
        defense: 10,
        xp: 200,
        gold: 250,
        description: "A mighty dragon!"
    }
};

// Locations Database
const LOCATIONS = {
    town: {
        id: 'town',
        name: "Town Square",
        description: "A bustling town with friendly faces and warm fires. The marketplace is busy with merchants selling their wares.",
        actions: [
            { text: "🏪 Visit Shop", action: "openShop" },
            { text: "🍺 Visit Tavern", action: "visitTavern" },
            { text: "🌲 Go to Forest", action: "goToLocation", param: "forest" },
            { text: "⛰️ Go to Cave", action: "goToLocation", param: "cave" }
        ],
        encounters: []
    },
    
    forest: {
        id: 'forest',
        name: "Dark Forest",
        description: "Ancient trees loom overhead, blocking out the sun. Strange sounds echo through the woods.",
        actions: [
            { text: "🔍 Explore", action: "explore" },
            { text: "🎯 Hunt for Monsters", action: "hunt" },
            { text: "🏘️ Return to Town", action: "goToLocation", param: "town" }
        ],
        encounters: ["rat", "goblin", "wolf", "bandit"]
    },
    
    cave: {
        id: 'cave',
        name: "Mysterious Cave",
        description: "A dark cave entrance beckons you inside. You can hear strange noises from within.",
        actions: [
            { text: "🚪 Enter Cave", action: "explore" },
            { text: "🔦 Search Deeper", action: "hunt" },
            { text: "🏘️ Return to Town", action: "goToLocation", param: "town" }
        ],
        encounters: ["spider", "orc", "troll", "skeleton"]
    },
    
    castle: {
        id: 'castle',
        name: "Ancient Castle",
        description: "A foreboding castle shrouded in mist. Legend says a dragon guards treasure here.",
        actions: [
            { text: "🏰 Enter Castle", action: "explore" },
            { text: "⚔️ Challenge Dragon", action: "fightBoss" },
            { text: "🏘️ Return to Town", action: "goToLocation", param: "town" }
        ],
        encounters: ["skeleton", "troll", "dragon"]
    }
};

// Quests Database
const QUESTS = {
    firstBlood: {
        id: 'firstBlood',
        name: "First Blood",
        description: "Defeat your first monster",
        progress: 0,
        goal: 1,
        completed: false,
        reward: { gold: 50, xp: 25 },
        check: (stats) => stats.monstersDefeated >= 1
    },
    
    monsterHunter: {
        id: 'monsterHunter',
        name: "Monster Hunter",
        description: "Defeat 10 monsters",
        progress: 0,
        goal: 10,
        completed: false,
        reward: { gold: 200, xp: 100 },
        check: (stats) => stats.monstersDefeated >= 10
    },
    
    wealthyAdventurer: {
        id: 'wealthyAdventurer',
        name: "Wealthy Adventurer",
        description: "Collect 500 gold",
        progress: 0,
        goal: 500,
        completed: false,
        reward: { gold: 100, xp: 150 },
        check: (stats) => stats.totalGoldEarned >= 500
    },
    
    dragonSlayer: {
        id: 'dragonSlayer',
        name: "Dragon Slayer",
        description: "Defeat the dragon",
        progress: 0,
        goal: 1,
        completed: false,
        reward: { gold: 1000, xp: 500 },
        check: (stats) => stats.dragonsDefeated >= 1
    },
    
    levelUp: {
        id: 'levelUp',
        name: "Growing Stronger",
        description: "Reach level 5",
        progress: 0,
        goal: 5,
        completed: false,
        reward: { gold: 150, xp: 0 },
        check: (stats) => stats.level >= 5
    }
};

// Achievements Database
const ACHIEVEMENTS = {
    firstWin: {
        id: 'firstWin',
        name: "First Victory",
        description: "Win your first battle",
        icon: "🎖️",
        unlocked: false,
        check: (stats) => stats.monstersDefeated >= 1
    },
    
    survivor: {
        id: 'survivor',
        name: "Survivor",
        description: "Survive with 1 HP",
        icon: "💪",
        unlocked: false,
        check: (player) => player.health === 1
    },
    
    hoarder: {
        id: 'hoarder',
        name: "Hoarder",
        description: "Collect 1000 gold",
        icon: "💰",
        unlocked: false,
        check: (player) => player.gold >= 1000
    },
    
    warrior: {
        id: 'warrior',
        name: "Warrior",
        description: "Defeat 25 monsters",
        icon: "⚔️",
        unlocked: false,
        check: (stats) => stats.monstersDefeated >= 25
    },
    
    legendary: {
        id: 'legendary',
        name: "Legendary Hero",
        description: "Reach level 10",
        icon: "👑",
        unlocked: false,
        check: (player) => player.level >= 10
    },
    
    dragonSlayer: {
        id: 'dragonSlayer',
        name: "Dragon Slayer",
        description: "Defeat the dragon",
        icon: "🐉",
        unlocked: false,
        check: (stats) => stats.dragonsDefeated >= 1
    },
    
    shopaholic: {
        id: 'shopaholic',
        name: "Shopaholic",
        description: "Buy 10 items from shop",
        icon: "🛒",
        unlocked: false,
        check: (stats) => stats.itemsBought >= 10
    },
    
    perfectVictory: {
        id: 'perfectVictory',
        name: "Perfect Victory",
        description: "Win without taking damage",
        icon: "✨",
        unlocked: false,
        manual: true // Checked during combat
    }