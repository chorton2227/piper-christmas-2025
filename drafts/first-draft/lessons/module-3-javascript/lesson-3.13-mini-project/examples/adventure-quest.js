// ============================================
// ADVENTURE QUEST - Main Game Logic
// ============================================

// Game state
const game = {
    // Player object
    player: {
        name: "Hero",
        health: 100,
        maxHealth: 100,
        attack: 10,
        defense: 5,
        gold: 50,
        xp: 0,
        level: 1,
        xpNeeded: 100,
        inventory: [],
        equipment: {
            weapon: null,
            armor: null
        }
    },
    
    // Current game state
    currentLocation: 'town',
    inCombat: false,
    currentEnemy: null,
    playerDefending: false,
    combatStartHealth: 100,
    
    // Statistics
    stats: {
        monstersDefeated: 0,
        totalGoldEarned: 0,
        itemsBought: 0,
        dragonsDefeated: 0,
        level: 1
    },
    
    // Active quests
    quests: {},
    
    // Achievements
    achievements: {},
    
    // Initialize game
    init() {
        console.log("🎮 Adventure Quest starting...");
        
        // Load quests
        for (let key in QUESTS) {
            this.quests[key] = { ...QUESTS[key] };
        }
        
        // Load achievements
        for (let key in ACHIEVEMENTS) {
            this.achievements[key] = { ...ACHIEVEMENTS[key] };
        }
        
        // Add starting items
        this.player.inventory.push({ ...ITEMS.stick });
        this.player.inventory.push({ ...ITEMS.potion });
        this.player.inventory.push({ ...ITEMS.potion });
        
        // Equip starting weapon
        this.equipItem(ITEMS.stick);
        
        // Load saved game if exists
        const saved = localStorage.getItem('adventureQuestSave');
        if (saved) {
            const loadChoice = confirm("Continue previous game?");
            if (loadChoice) {
                this.loadGame();
                return;
            }
        }
        
        // Update UI
        this.updateUI();
        this.goToLocation('town');
    },
    
    // Update all UI elements
    updateUI() {
        // Update player stats
        document.getElementById('playerHealth').textContent = this.player.health;
        document.getElementById('playerMaxHealth').textContent = this.player.maxHealth;
        document.getElementById('playerGold').textContent = this.player.gold;
        document.getElementById('playerLevel').textContent = this.player.level;
        document.getElementById('playerXP').textContent = this.player.xp;
        document.getElementById('playerXPNeeded').textContent = this.player.xpNeeded;
        
        // Update inventory
        this.updateInventory();
        
        // Update equipment
        this.updateEquipment();
        
        // Update quests
        this.updateQuests();
        
        // Update achievements
        this.updateAchievements();
    },
    
    // Navigate to location
    goToLocation(locationId) {
        const location = LOCATIONS[locationId];
        if (!location) return;
        
        this.currentLocation = locationId;
        
        // Update location display
        document.getElementById('locationName').textContent = location.name;
        document.getElementById('locationDescription').textContent = location.description;
        
        // Hide combat panel
        document.getElementById('combatPanel').style.display = 'none';
        this.inCombat = false;
        
        // Update action buttons
        const actionButtons = document.getElementById('actionButtons');
        actionButtons.innerHTML = '';
        
        location.actions.forEach(action => {
            const button = document.createElement('button');
            button.textContent = action.text;
            button.onclick = () => {
                if (action.action === 'goToLocation') {
                    this.goToLocation(action.param);
                } else if (action.action === 'openShop') {
                    this.openShop();
                } else if (action.action === 'visitTavern') {
                    this.visitTavern();
                } else if (action.action === 'explore') {
                    this.explore();
                } else if (action.action === 'hunt') {
                    this.hunt();
                } else if (action.action === 'fightBoss') {
                    this.startCombat('dragon');
                }
            };
            actionButtons.appendChild(button);
        });
        
        // Clear message
        this.hideMessage();
    },
    
    // Explore current location
    explore() {
        const location = LOCATIONS[this.currentLocation];
        
        if (location.encounters.length === 0) {
            this.showMessage("Nothing interesting here...");
            return;
        }
        
        // 50% chance of encounter
        if (Math.random() < 0.5) {
            this.showMessage("You found some gold!", "success");
            const goldFound = Math.floor(Math.random() * 20) + 10;
            this.player.gold += goldFound;
            this.stats.totalGoldEarned += goldFound;
            this.updateUI();
            this.checkAchievements();
        } else {
            // Random encounter
            const randomMonster = location.encounters[Math.floor(Math.random() * location.encounters.length)];
            this.startCombat(randomMonster);
        }
    },
    
    // Hunt for monsters
    hunt() {
        const location = LOCATIONS[this.currentLocation];
        
        if (location.encounters.length === 0) {
            this.showMessage("No monsters here!");
            return;
        }
        
        // Guaranteed encounter
        const randomMonster = location.encounters[Math.floor(Math.random() * location.encounters.length)];
        this.startCombat(randomMonster);
    },
    
    // Start combat
    startCombat(monsterId) {
        const monsterTemplate = MONSTERS[monsterId];
        if (!monsterTemplate) return;
        
        // Create enemy instance
        this.currentEnemy = {
            ...monsterTemplate,
            maxHealth: monsterTemplate.health,
            id: monsterId
        };
        
        this.inCombat = true;
        this.playerDefending = false;
        this.combatStartHealth = this.player.health;
        
        // Show combat panel
        document.getElementById('combatPanel').style.display = 'block';
        
        // Update enemy display
        document.getElementById('enemyName').textContent = this.currentEnemy.name;
        document.getElementById('enemyHealth').textContent = this.currentEnemy.health;
        document.getElementById('enemyMaxHealth').textContent = this.currentEnemy.maxHealth;
        this.updateEnemyHealthBar();
        
        // Clear combat log
        document.getElementById('combatLog').innerHTML = '';
        
        this.addCombatMessage(`A ${this.currentEnemy.name} appears!`);
    },
    
    // Player attack
    attack() {
        if (!this.inCombat) return;
        
        // Calculate player damage
        const weaponBonus = this.player.equipment.weapon ? this.player.equipment.weapon.attack : 0;
        const baseDamage = this.player.attack + weaponBonus;
        const damage = Math.floor(Math.random() * baseDamage) + Math.floor(baseDamage / 2);
        
        this.currentEnemy.health -= damage;
        this.addCombatMessage(`You deal ${damage} damage!`, 'player-attack');
        
        // Check if enemy defeated
        if (this.currentEnemy.health <= 0) {
            this.victory();
            return;
        }
        
        this.updateEnemyHealthBar();
        
        // Enemy turn
        setTimeout(() => this.enemyAttack(), 500);
    },
    
    // Player defend
    defend() {
        if (!this.inCombat) return;
        
        this.playerDefending = true;
        this.addCombatMessage("You brace for impact!", 'player-attack');
        
        // Enemy turn
        setTimeout(() => this.enemyAttack(), 500);
    },
    
    // Enemy attack
    enemyAttack() {
        if (!this.inCombat) return;
        
        // Calculate enemy damage
        const baseDamage = this.currentEnemy.attack;
        let damage = Math.floor(Math.random() * baseDamage) + Math.floor(baseDamage / 2);
        
        // Apply player defense
        const armorBonus = this.player.equipment.armor ? this.player.equipment.armor.defense : 0;
        const totalDefense = this.player.defense + armorBonus;
        
        if (this.playerDefending) {
            damage = Math.max(0, damage - totalDefense * 2);
            this.playerDefending = false;
        } else {
            damage = Math.max(0, damage - totalDefense);
        }
        
        // 10% miss chance
        if (Math.random() < 0.1) {
            this.addCombatMessage(`${this.currentEnemy.name} missed!`, 'miss');
        } else {
            this.player.health -= damage;
            this.addCombatMessage(`${this.currentEnemy.name} deals ${damage} damage!`, 'enemy-attack');
            
            // Check if player defeated
            if (this.player.health <= 0) {
                this.defeat();
                return;
            }
        }
        
        this.updateUI();
    },
    
    // Use potion
    usePotion() {
        if (!this.inCombat) return;
        
        // Find a potion in inventory
        const potionIndex = this.player.inventory.findIndex(item => item.type === 'consumable');
        
        if (potionIndex === -1) {
            this.addCombatMessage("No potions available!");
            return;
        }
        
        const potion = this.player.inventory[potionIndex];
        const healing = potion.healing;
        
        this.player.health = Math.min(this.player.maxHealth, this.player.health + healing);
        this.player.inventory.splice(potionIndex, 1);
        
        this.addCombatMessage(`You use ${potion.name} and restore ${healing} HP!`, 'heal');
        this.updateUI();
        
        // Enemy turn
        setTimeout(() => this.enemyAttack(), 500);
    },
    
    // Flee from combat
    flee() {
        if (!this.inCombat) return;
        
        // 50% flee chance
        if (Math.random() < 0.5) {
            this.addCombatMessage("You fled successfully!", 'heal');
            setTimeout(() => {
                this.inCombat = false;
                document.getElementById('combatPanel').style.display = 'none';
                this.showMessage("You escaped!");
            }, 1000);
        } else {
            this.addCombatMessage("Failed to flee!");
            setTimeout(() => this.enemyAttack(), 500);
        }
    },
    
    // Victory
    victory() {
        const enemy = this.currentEnemy;
        
        // Check for perfect victory achievement
        if (this.player.health === this.combatStartHealth) {
            this.unlockAchievement('perfectVictory');
        }
        
        // Rewards
        this.player.gold += enemy.gold;
        this.player.xp += enemy.xp;
        this.stats.totalGoldEarned += enemy.gold;
        this.stats.monstersDefeated++;
        
        if (enemy.id === 'dragon') {
            this.stats.dragonsDefeated++;
        }
        
        this.addCombatMessage(`Victory! You earned ${enemy.gold} gold and ${enemy.xp} XP!`, 'victory');
        
        // Check for level up
        this.checkLevelUp();
        
        // Update stats
        this.stats.level = this.player.level;
        
        // Check quests and achievements
        this.updateQuestProgress();
        this.checkAchievements();
        
        this.updateUI();
        
        // End combat after delay
        setTimeout(() => {
            this.inCombat = false;
            document.getElementById('combatPanel').style.display = 'none';
            this.showMessage(`You defeated the ${enemy.name}!`, 'success');
        }, 2000);
    },
    
    // Defeat
    defeat() {
        this.addCombatMessage("You have been defeated...", 'enemy-attack');
        
        // Lose some gold
        const goldLost = Math.floor(this.player.gold * 0.2);
        this.player.gold -= goldLost;
        this.player.health = this.player.maxHealth;
        
        setTimeout(() => {
            this.inCombat = false;
            document.getElementById('combatPanel').style.display = 'none';
            this.showMessage(`Defeated! Lost ${goldLost} gold. Returning to town...`, 'error');
            this.goToLocation('town');
            this.updateUI();
        }, 2000);
    },
    
    // Check for level up
    checkLevelUp() {
        while (this.player.xp >= this.player.xpNeeded) {
            this.player.level++;
            this.player.xp -= this.player.xpNeeded;
            this.player.xpNeeded = Math.floor(this.player.xpNeeded * 1.5);
            
            // Increase stats
            this.player.maxHealth += 10;
            this.player.health = this.player.maxHealth;
            this.player.attack += 2;
            this.player.defense += 1;
            
            this.showMessage(`Level Up! You are now level ${this.player.level}!`, 'success');
        }
    },
    
    // Update quest progress
    updateQuestProgress() {
        for (let key in this.quests) {
            const quest = this.quests[key];
            if (!quest.completed && quest.check(this.stats)) {
                quest.completed = true;
                this.player.gold += quest.reward.gold;
                this.player.xp += quest.reward.xp;
                this.stats.totalGoldEarned += quest.reward.gold;
                this.showMessage(`Quest Complete: ${quest.name}! Earned ${quest.reward.gold} gold and ${quest.reward.xp} XP!`, 'success');
                this.checkLevelUp();
            }
        }
        this.updateQuests();
    },
    
    // Check achievements
    checkAchievements() {
        for (let key in this.achievements) {
            const achievement = this.achievements[key];
            if (!achievement.unlocked && !achievement.manual) {
                if (achievement.check(this.player.gold >= 1000 ? this.player : this.stats)) {
                    this.unlockAchievement(key);
                }
            }
        }
    },
    
    // Unlock achievement
    unlockAchievement(achievementId) {
        const achievement = this.achievements[achievementId];
        if (achievement && !achievement.unlocked) {
            achievement.unlocked = true;
            this.showMessage(`Achievement Unlocked: ${achievement.name}!`, 'success');
            this.updateAchievements();
        }
    },
    
    // Update inventory display
    updateInventory() {
        const inventoryList = document.getElementById('inventoryList');
        const inventoryCount = document.getElementById('inventoryCount');
        
        inventoryCount.textContent = this.player.inventory.length;
        
        if (this.player.inventory.length === 0) {
            inventoryList.innerHTML = '<p style="color: #999; font-style: italic;">Empty</p>';
            return;
        }
        
        inventoryList.innerHTML = '';
        this.player.inventory.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'inventory-item';
            
            let stats = '';
            if (item.attack) stats += `⚔️ +${item.attack} ATK `;
            if (item.defense) stats += `🛡️ +${item.defense} DEF `;
            if (item.healing) stats += `❤️ +${item.healing} HP`;
            
            itemDiv.innerHTML = `
                <div class="item-name">${item.name}</div>
                <div class="item-stats">${stats}</div>
                <div class="item-value">💰 ${item.value}g</div>
            `;
            
            itemDiv.onclick = () => this.useItem(index);
            inventoryList.appendChild(itemDiv);
        });
    },
    
    // Update equipment display
    updateEquipment() {
        const weaponSpan = document.getElementById('equippedWeapon');
        const armorSpan = document.getElementById('equippedArmor');
        
        if (this.player.equipment.weapon) {
            weaponSpan.textContent = `${this.player.equipment.weapon.name} (+${this.player.equipment.weapon.attack})`;
        } else {
            weaponSpan.textContent = 'None';
        }
        
        if (this.player.equipment.armor) {
            armorSpan.textContent = `${this.player.equipment.armor.name} (+${this.player.equipment.armor.defense})`;
        } else {
            armorSpan.textContent = 'None';
        }
    },
    
    // Update quests display
    updateQuests() {
        const questList = document.getElementById('questList');
        questList.innerHTML = '';
        
        let hasQuests = false;
        for (let key in this.quests) {
            const quest = this.quests[key];
            hasQuests = true;
            
            const questDiv = document.createElement('div');
            questDiv.className = 'quest-item' + (quest.completed ? ' completed' : ' active');
            
            let progress = '';
            if (quest.id === 'firstBlood') progress = `${this.stats.monstersDefeated}/${quest.goal}`;
            else if (quest.id === 'monsterHunter') progress = `${this.stats.monstersDefeated}/${quest.goal}`;
            else if (quest.id === 'wealthyAdventurer') progress = `${this.stats.totalGoldEarned}/${quest.goal}`;
            else if (quest.id === 'dragonSlayer') progress = `${this.stats.dragonsDefeated}/${quest.goal}`;
            else if (quest.id === 'levelUp') progress = `${this.player.level}/${quest.goal}`;
            
            questDiv.innerHTML = `
                <div style="font-weight: bold;">${quest.name}</div>
                <div class="quest-progress">${quest.description}</div>
                <div class="quest-progress">${progress}</div>
            `;
            
            questList.appendChild(questDiv);
        }
        
        if (!hasQuests) {
            questList.innerHTML = '<p style="color: #999; font-style: italic;">No quests</p>';
        }
    },
    
    // Update achievements display
    updateAchievements() {
        const achievementList = document.getElementById('achievementList');
        const achievementCount = document.getElementById('achievementCount');
        
        achievementList.innerHTML = '';
        
        let unlockedCount = 0;
        for (let key in this.achievements) {
            const achievement = this.achievements[key];
            if (achievement.unlocked) unlockedCount++;
            
            const achDiv = document.createElement('div');
            achDiv.className = 'achievement-item' + (achievement.unlocked ? '' : ' locked');
            
            achDiv.innerHTML = `
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-details">
                    <div class="achievement-name">${achievement.name}</div>
                    <div class="achievement-description">${achievement.description}</div>
                </div>
            `;
            
            achievementList.appendChild(achDiv);
        }
        
        achievementCount.textContent = `${unlockedCount}/${Object.keys(this.achievements).length}`;
    },
    
    // Use/equip item
    useItem(index) {
        const item = this.player.inventory[index];
        
        if (item.type === 'weapon' || item.type === 'armor') {
            this.equipItem(item);
            this.player.inventory.splice(index, 1);
        } else if (item.type === 'consumable') {
            if (this.player.health < this.player.maxHealth) {
                this.player.health = Math.min(this.player.maxHealth, this.player.health + item.healing);
                this.player.inventory.splice(index, 1);
                this.showMessage(`Used ${item.name}! Restored ${item.healing} HP`, 'success');
            } else {
                this.showMessage("Health is already full!", 'error');
            }
        }
        
        this.updateUI();
    },
    
    // Equip item
    equipItem(item) {
        if (item.type === 'weapon') {
            if (this.player.equipment.weapon) {
                this.player.inventory.push(this.player.equipment.weapon);
            }
            this.player.equipment.weapon = item;
        } else if (item.type === 'armor') {
            if (this.player.equipment.armor) {
                this.player.inventory.push(this.player.equipment.armor);
            }
            this.player.equipment.armor = item;
        }
    },
    
    // Open shop
    openShop() {
        const shopItems = [
            ITEMS.dagger, ITEMS.sword, ITEMS.greatsword,
            ITEMS.leather, ITEMS.chainmail,
            ITEMS.potion, ITEMS.megaPotion
        ];
        
        let html = '<h2>🏪 Shop</h2><p>Buy items and equipment</p>';
        
        shopItems.forEach(item => {
            let stats = '';
            if (item.attack) stats += `⚔️ +${item.attack} ATK `;
            if (item.defense) stats += `🛡️ +${item.defense} DEF `;
            if (item.healing) stats += `❤️ +${item.healing} HP`;
            
            html += `
                <div class="shop-item">
                    <div class="shop-item-info">
                        <div class="shop-item-name">${item.name}</div>
                        <div class="shop-item-description">${item.description}</div>
                        <div class="shop-item-description">${stats}</div>
                    </div>
                    <span class="shop-item-price">💰 ${item.value}g</span>
                    <button onclick="game.buyItem('${item.id}')" ${this.player.gold < item.value ? 'disabled' : ''}>
                        Buy
                    </button>
                </div>
            `;
        });
        
        this.openModal(html);
    },
    
    // Buy item
    buyItem(itemId) {
        const item = ITEMS[itemId];
        
        if (this.player.gold >= item.value) {
            this.player.gold -= item.value;
            this.player.inventory.push({ ...item });
            this.stats.itemsBought++;
            this.showMessage(`Bought ${item.name}!`, 'success');
            this.updateUI();
            this.checkAchievements();
            this.closeModal();
            this.openShop(); // Refresh shop
        }
    },
    
    // Visit tavern
    visitTavern() {
        const healCost = 20;
        
        let html = `
            <h2>🍺 Tavern</h2>
            <p>Rest and recover your health</p>
            <div style="margin: 20px 0;">
                <p>Current Health: ${this.player.health}/${this.player.maxHealth}</p>
                <p>Rest Cost: ${healCost} gold</p>
            </div>
            <button onclick="game.rest()" ${this.player.gold < healCost || this.player.health === this.player.maxHealth ? 'disabled' : ''}>
                Rest (${healCost}g)
            </button>
        `;
        
        this.openModal(html);
    },
    
    // Rest at tavern
    rest() {
        const healCost = 20;
        if (this.player.gold >= healCost) {
            this.player.gold -= healCost;
            this.player.health = this.player.maxHealth;
            this.showMessage("You feel refreshed!", 'success');
            this.updateUI();
            this.closeModal();
        }
    },
    
    // Show statistics
    showStats() {
        let html = `
            <h2>📊 Statistics</h2>
            <div style="text-align: left; line-height: 2;">
                <p><strong>Level:</strong> ${this.player.level}</p>
                <p><strong>Health:</strong> ${this.player.maxHealth}</p>
                <p><strong>Attack:</strong> ${this.player.attack}</p>
                <p><strong>Defense:</strong> ${this.player.defense}</p>
                <hr>
                <p><strong>Monsters Defeated:</strong> ${this.stats.monstersDefeated}</p>
                <p><strong>Dragons Defeated:</strong> ${this.stats.dragonsDefeated}</p>
                <p><strong>Total Gold Earned:</strong> ${this.stats.totalGoldEarned}</p>
                <p><strong>Items Bought:</strong> ${this.stats.itemsBought}</p>
            </div>
        `;
        
        this.openModal(html);
    },
    
    // Save game
    saveGame() {
        const saveData = {
            player: this.player,
            stats: this.stats,
            quests: this.quests,
            achievements: this.achievements,
            currentLocation: this.currentLocation
        };
        
        localStorage.setItem('adventureQuestSave', JSON.stringify(saveData));
        this.showMessage("Game saved!", 'success');
    },
    
    // Load game
    loadGame() {
        const saved = localStorage.getItem('adventureQuestSave');
        
        if (saved) {
            const saveData = JSON.parse(saved);
            this.player = saveData.player;
            this.stats = saveData.stats;
            this.quests = saveData.quests;
            this.achievements = saveData.achievements;
            this.currentLocation = saveData.currentLocation;
            
            this.updateUI();
            this.goToLocation(this.currentLocation);
            this.showMessage("Game loaded!", 'success');
        } else {
            this.showMessage("No saved game found!", 'error');
        }
    },
    
    // Reset game
    resetGame() {
        if (confirm("Start a new game? Current progress will be lost!")) {
            localStorage.removeItem('adventureQuestSave');
            location.reload();
        }
    },
    
    // Show message
    showMessage(text, type = '') {
        const messageDiv = document.getElementById('gameMessage');
        messageDiv.textContent = text;
        messageDiv.className = 'game-message show ' + type;
        
        setTimeout(() => {
            messageDiv.classList.remove('show');
        }, 3000);
    },
    
    // Hide message
    hideMessage() {
        const messageDiv = document.getElementById('gameMessage');
        messageDiv.classList.remove('show');
    },
    
    // Add combat message
    addCombatMessage(text, className = '') {
        const logDiv = document.getElementById('combatLog');
        const message = document.createElement('div');
        message.className = 'combat-message ' + className;
        message.textContent = text;
        logDiv.appendChild(message);
        logDiv.scrollTop = logDiv.scrollHeight;
    },
    
    // Update enemy health bar
    updateEnemyHealthBar() {
        const healthBar = document.getElementById('enemyHealthBar');
        const healthText = document.getElementById('enemyHealth');
        
        const percent = (this.currentEnemy.health / this.currentEnemy.maxHealth) * 100;
        healthBar.style.width = percent + '%';
        healthText.textContent = Math.max(0, this.currentEnemy.health);
    },
    
    // Open modal
    openModal(html) {
        const modal = document.getElementById('modal');
        const modalBody = document.getElementById('modalBody');
        
        modalBody.innerHTML = html;
        modal.style.display = 'flex';
    },
    
    // Close modal
    closeModal() {
        const modal = document.getElementById('modal');
        modal.style.display = 'none';
    }
};

// Start game when page loads
window.addEventListener('load', () => {
    game.init();
});