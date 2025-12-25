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
    
    // Track previous community card count for animation
    let previousCommunityCount = 0;
    
    /**
     * Updates community cards display
     * @param {Object} gameState - Current game state
     */
    function updateCommunityCards(gameState) {
        const communityDiv = document.getElementById('community-cards');
        const currentCount = gameState.communityCards.length;
        
        communityDiv.innerHTML = gameState.communityCards.map((card, index) => {
            // Only animate new cards
            const isNew = index >= previousCommunityCount;
            return `<div class="card ${card.suit} ${isNew ? 'dealing' : ''}">${card.rank}${DeckModule.getSuitSymbol(card.suit)}</div>`;
        }).join('');
        
        previousCommunityCount = currentCount;
        
        // Reset count on new hand
        if (currentCount === 0) previousCommunityCount = 0;
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
            const isEliminated = player.chips === 0 && !gameState.players.includes(player);
            
            if (player.isAI && gameState.phase !== 'showdown') {
                cardsHTML = player.cards.map(() => 
                    '<div class="card back">🂠</div>'
                ).join('');
            } else {
                cardsHTML = player.cards.map(card => 
                    `<div class="card ${card.suit}">${card.rank}${DeckModule.getSuitSymbol(card.suit)}</div>`
                ).join('');
            }
            
            // Show current action status
            let actionStatus = '';
            if (player.folded) {
                actionStatus = '<div class="player-action" style="color: #ff6b6b; font-weight: bold;">Folded</div>';
            } else if (player.allIn) {
                actionStatus = '<div class="player-action" style="color: #ffd700; font-weight: bold; font-size: 16px;">💰 ALL-IN! 💰</div>';
            } else if (player.lastAction === 'check') {
                actionStatus = '<div class="player-action" style="color: #4CAF50; font-weight: bold;">✓ Checked</div>';
            } else if (player.lastAction === 'call') {
                actionStatus = '<div class="player-action" style="color: #2196F3;">Called</div>';
            } else if (player.lastAction === 'raise') {
                actionStatus = '<div class="player-action" style="color: #ff9800; font-weight: bold;">Raised!</div>';
            } else if (isActive && !player.isAI) {
                actionStatus = '<div class="player-action" style="color: #ffd700; animation: pulse 1s infinite;">Your Turn!</div>';
            } else if (isActive && player.isAI) {
                actionStatus = '<div class="player-action" style="color: #ffeb3b;">Thinking...</div>';
            }
            
            return `
                <div class="player-seat ${isActive ? 'active' : ''} ${player.folded ? 'folded' : ''} ${isEliminated ? 'eliminated' : ''}">
                    <div class="player-name">
                        ${player.name}${isEliminated ? ' (Eliminated)' : ''}
                        ${isDealer ? '<span class="dealer-button">D</span>' : ''}
                    </div>
                    <div class="player-cards">${cardsHTML}</div>
                    <div class="player-info">
                        <div class="chips">💰 $${player.chips}</div>
                        ${player.currentBet > 0 ? `<div class="current-bet">Bet: $${player.currentBet}</div>` : ''}
                        ${actionStatus}
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
     * @param {Object} winDetails - Object containing playerCards, communityCards, winningHandCards, potAmount
     */
    function announceWinner(player, handName, isSplit = false, winDetails = {}) {
        const announcement = document.getElementById('winner-announcement');
        
        const { playerCards = [], communityCards = [], winningHandCards = [], potAmount = 0 } = winDetails;
        
        let cardsHTML = '';
        
        // Show pot amount if provided
        let potHTML = '';
        if (potAmount > 0) {
            potHTML = `<div style="font-size: 18px; margin-top: 8px; color: #4CAF50;">Won: $${potAmount}</div>`;
        }
        
        // Show player cards and community cards
        if (playerCards.length > 0 || communityCards.length > 0) {
            cardsHTML = '<div style="margin-top: 15px;">';
            
            // Player's hole cards
            if (playerCards.length > 0) {
                cardsHTML += `<div style="margin-bottom: 10px; font-size: 14px; color: #fff;">Player Cards:</div>`;
                cardsHTML += `<div style="display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin-bottom: 15px;">`;
                playerCards.forEach(card => {
                    const isWinning = winningHandCards.some(wc => wc.rank === card.rank && wc.suit === card.suit);
                    const highlightStyle = isWinning ? 'box-shadow: 0 0 15px #ffd700; border: 2px solid #ffd700;' : '';
                    cardsHTML += `<div class="card ${card.suit}" style="width: 50px; height: 70px; font-size: 20px; ${highlightStyle}">${card.rank}${DeckModule.getSuitSymbol(card.suit)}</div>`;
                });
                cardsHTML += '</div>';
            }
            
            // Community cards
            if (communityCards.length > 0) {
                cardsHTML += `<div style="margin-bottom: 10px; font-size: 14px; color: #fff;">Community Cards:</div>`;
                cardsHTML += `<div style="display: flex; gap: 8px; justify-content: center; flex-wrap: wrap;">`;
                communityCards.forEach(card => {
                    const isWinning = winningHandCards.some(wc => wc.rank === card.rank && wc.suit === card.suit);
                    const highlightStyle = isWinning ? 'box-shadow: 0 0 15px #ffd700; border: 2px solid #ffd700;' : '';
                    cardsHTML += `<div class="card ${card.suit}" style="width: 50px; height: 70px; font-size: 20px; ${highlightStyle}">${card.rank}${DeckModule.getSuitSymbol(card.suit)}</div>`;
                });
                cardsHTML += '</div>';
            }
            
            cardsHTML += '</div>';
        }
        
        announcement.innerHTML = `
            🏆 ${player.name} wins! 🏆<br>
            <div style="font-size: 20px; margin-top: 10px; font-weight: bold; color: #ffd700;">
                ${handName}${isSplit ? ' (Split Pot)' : ''}
            </div>
            ${potHTML}
            ${cardsHTML}
        `;
        announcement.classList.add('show');
        
        setTimeout(() => {
            announcement.classList.remove('show');
        }, 5000);
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
