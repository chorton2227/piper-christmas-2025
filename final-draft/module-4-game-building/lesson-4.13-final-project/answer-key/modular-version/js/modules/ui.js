// ===== UI MODULE =====
// Handles all user interface updates and display logic
const UIModule = (function() {
    'use strict';
    
    /**
     * Updates the entire game UI
     * @param {Object} gameState - Current game state
     */
    function updateUI(gameState) {
        updateCommunityCards(gameState);
        updatePot(gameState);
        updateRoundLabel(gameState);
        updatePlayers(gameState);
        updateButtons(gameState);
        updateActionLog(gameState);
    }
    
    /**
     * Updates community cards display
     * @param {Object} gameState - Current game state
     */
    function updateCommunityCards(gameState) {
        const communityDiv = document.getElementById('community-cards');
        communityDiv.innerHTML = gameState.communityCards.map(card => 
            `<div class="card ${card.suit} dealing">${card.rank}${DeckModule.getSuitSymbol(card.suit)}</div>`
        ).join('');
    }
    
    /**
     * Updates pot display
     * @param {Object} gameState - Current game state
     */
    function updatePot(gameState) {
        document.getElementById('pot-amount').textContent = gameState.pot;
    }
    
    /**
     * Updates round label (Pre-Flop, Flop, Turn, River, Showdown)
     * @param {Object} gameState - Current game state
     */
    function updateRoundLabel(gameState) {
        const roundLabels = {
            'pre-flop': 'Pre-Flop',
            'flop': 'Flop',
            'turn': 'Turn',
            'river': 'River',
            'showdown': 'Showdown'
        };
        document.getElementById('round-label').textContent = roundLabels[gameState.phase];
    }
    
    /**
     * Updates all player displays
     * @param {Object} gameState - Current game state
     */
    function updatePlayers(gameState) {
        const playersDiv = document.getElementById('players-container');
        playersDiv.innerHTML = gameState.players.map((player, index) => {
            const isActive = index === gameState.currentPlayerIndex;
            const isDealer = index === gameState.dealerIndex;
            
            let cardsHTML;
            if (player.isAI && gameState.phase !== 'showdown') {
                cardsHTML = player.cards.map(() => 
                    '<div class="card back">🂠</div>'
                ).join('');
            } else {
                cardsHTML = player.cards.map(card => 
                    `<div class="card ${card.suit}">${card.rank}${DeckModule.getSuitSymbol(card.suit)}</div>`
                ).join('');
            }
            
            return `
                <div class="player-seat ${isActive ? 'active' : ''} ${player.folded ? 'folded' : ''}">
                    <div class="player-name">
                        ${player.name}
                        ${isDealer ? '<span class="dealer-button">D</span>' : ''}
                    </div>
                    <div class="player-cards">${cardsHTML}</div>
                    <div class="player-info">
                        <div class="chips">💰 $${player.chips}</div>
                        ${player.currentBet > 0 ? `<div class="current-bet">Bet: $${player.currentBet}</div>` : ''}
                        ${player.folded ? '<div class="player-action">Folded</div>' : ''}
                        ${player.allIn ? '<div class="player-action">All-In</div>' : ''}
                    </div>
                </div>
            `;
        }).join('');
    }
    
    /**
     * Updates action buttons state
     * @param {Object} gameState - Current game state
     */
    function updateButtons(gameState) {
        const humanPlayer = gameState.players[0];
        const isHumanTurn = gameState.currentPlayerIndex === 0 && !humanPlayer.folded;
        const toCall = gameState.currentBet - humanPlayer.currentBet;
        
        document.getElementById('check-btn').disabled = !isHumanTurn || toCall > 0;
        document.getElementById('call-btn').disabled = !isHumanTurn || toCall === 0;
        document.getElementById('call-amount').textContent = toCall;
        
        document.querySelectorAll('.btn-fold, .btn-raise, .btn-allin').forEach(btn => {
            btn.disabled = !isHumanTurn;
        });
    }
    
    /**
     * Updates action log display
     * @param {Object} gameState - Current game state
     */
    function updateActionLog(gameState) {
        const logDiv = document.getElementById('action-log');
        logDiv.innerHTML = gameState.actionLog.slice(-10).map(action => 
            `<div class="action-log-item">${action}</div>`
        ).join('');
        logDiv.scrollTop = logDiv.scrollHeight;
    }
    
    /**
     * Toggles raise controls visibility
     * @param {Object} gameState - Current game state
     */
    function toggleRaiseControls(gameState) {
        const controls = document.getElementById('raise-controls');
        controls.style.display = controls.style.display === 'none' ? 'flex' : 'none';
        
        if (controls.style.display === 'flex') {
            const minRaise = (gameState.currentBet - gameState.players[0].currentBet) * 2;
            document.getElementById('raise-amount').value = minRaise;
            document.getElementById('raise-amount').min = minRaise;
        }
    }
    
    /**
     * Announces winner with animation
     * @param {Object} player - Winning player
     * @param {string} handName - Name of winning hand
     * @param {boolean} isSplit - Whether pot was split
     */
    function announceWinner(player, handName, isSplit = false) {
        const announcement = document.getElementById('winner-announcement');
        announcement.innerHTML = `
            🏆 ${player.name} wins! 🏆<br>
            <div style="font-size: 18px; margin-top: 10px;">
                ${handName}${isSplit ? ' (Split Pot)' : ''}
            </div>
        `;
        announcement.classList.add('show');
        
        setTimeout(() => {
            announcement.classList.remove('show');
        }, 3000);
    }
    
    /**
     * Shows settings modal
     */
    function showSettings() {
        document.getElementById('settings-modal').classList.add('active');
    }
    
    /**
     * Hides settings modal
     */
    function hideSettings() {
        document.getElementById('settings-modal').classList.remove('active');
    }
    
    // Public API
    return {
        updateUI: updateUI,
        toggleRaiseControls: toggleRaiseControls,
        announceWinner: announceWinner,
        showSettings: showSettings,
        hideSettings: hideSettings
    };
})();
