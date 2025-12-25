// ===== MAIN GAME LOGIC =====
// Core game state and flow management

// Game state and config
let gameState = {
    deck: [],
    communityCards: [],
    players: [],
    pot: 0,
    currentBet: 0,
    dealerIndex: 0,
    currentPlayerIndex: 0,
    phase: 'pre-flop',
    smallBlind: 10,
    bigBlind: 20,
    actionLog: [],
    lastRaiserIndex: -1,
    playersActed: []
};

let config = {
    playerCount: 3,
    startingChips: 1000,
    smallBlind: 10,
    aiDifficulty: 'medium'
};

/**
 * Initializes a new game with settings from modal
 */
function initGame() {
    const playerCount = parseInt(document.getElementById('player-count').value);
    const startingChips = parseInt(document.getElementById('starting-chips').value);
    const smallBlind = parseInt(document.getElementById('small-blind').value);
    
    // Initialize sound module
    SoundModule.init();
    
    config.playerCount = playerCount;
    config.startingChips = startingChips;
    config.smallBlind = smallBlind;
    config.aiDifficulty = document.getElementById('ai-difficulty').value;
    
    gameState = {
        deck: DeckModule.createDeck(),
        communityCards: [],
        players: [],
        pot: 0,
        currentBet: 0,
        dealerIndex: 0,
        currentPlayerIndex: 0,
        phase: 'pre-flop',
        smallBlind: smallBlind,
        bigBlind: smallBlind * 2,
        actionLog: [],
        lastRaiserIndex: -1,
        playersActed: []
    };
    
    // Create players
    gameState.players.push({
        id: 0,
        name: 'You',
        chips: startingChips,
        cards: [],
        currentBet: 0,
        folded: false,
        allIn: false,
        isAI: false
    });
    
    const aiNames = ['Alice', 'Bob', 'Charlie', 'Diana', 'Edward'];
    for (let i = 0; i < playerCount; i++) {
        gameState.players.push({
            id: i + 1,
            name: aiNames[i],
            chips: startingChips,
            cards: [],
            currentBet: 0,
            folded: false,
            allIn: false,
            isAI: true
        });
    }
    
    DeckModule.shuffleDeck(gameState.deck);
    startHand();
}

/**
 * Starts a new hand
 */
function startHand() {
    // Reset for new hand
    gameState.communityCards = [];
    gameState.pot = 0;
    gameState.currentBet = 0;
    gameState.phase = 'pre-flop';
    gameState.deck = DeckModule.createDeck();
    DeckModule.shuffleDeck(gameState.deck);
    SoundModule.shuffle();
    gameState.lastRaiserIndex = -1;
    gameState.playersActed = [];
    
    gameState.players.forEach(player => {
        player.cards = [];
        player.currentBet = 0;
        player.folded = false;
        player.allIn = false;
        player.lastAction = null; // Clear last action for new hand
    });
    
    gameState.actionLog = [];
    
    // Post blinds
    const sbIndex = (gameState.dealerIndex + 1) % gameState.players.length;
    const bbIndex = (gameState.dealerIndex + 2) % gameState.players.length;
    
    postBlind(sbIndex, gameState.smallBlind);
    postBlind(bbIndex, gameState.bigBlind);
    
    gameState.currentBet = gameState.bigBlind;
    gameState.currentPlayerIndex = (bbIndex + 1) % gameState.players.length;
    gameState.lastRaiserIndex = bbIndex;
    
    // Deal hole cards with animation
    let dealIndex = 0;
    const dealInterval = setInterval(() => {
        const playerIndex = dealIndex % gameState.players.length;
        const round = Math.floor(dealIndex / gameState.players.length);
        
        if (round < 2) {
            gameState.players[playerIndex].cards.push(gameState.deck.pop());
            SoundModule.deal();
            UIModule.updateUI(gameState);
            dealIndex++;
        } else {
            clearInterval(dealInterval);
            logAction('Cards dealt to all players');
            UIModule.updateUI(gameState);
            
            // Start action if first player is AI
            if (gameState.players[gameState.currentPlayerIndex].isAI) {
                setTimeout(aiTurn, 1000);
            }
        }
    }, 200);
}

/**
 * Posts a blind bet
 * @param {number} playerIndex - Index of player posting blind
 * @param {number} amount - Blind amount
 */
function postBlind(playerIndex, amount) {
    const player = gameState.players[playerIndex];
    const actualAmount = Math.min(amount, player.chips);
    player.chips -= actualAmount;
    player.currentBet += actualAmount;
    gameState.pot += actualAmount;
    
    logAction(`${player.name} posts ${actualAmount === amount ? '' : 'partial '}${amount === gameState.smallBlind ? 'small' : 'big'} blind $${actualAmount}`);
}

/**
 * Handles player action
 * @param {string} action - Action type (fold, check, call, raise, allin)
 */
function playerAction(action) {
    const player = gameState.players[0]; // Human player
    
    // Can't act if not their turn, folded, all-in, or in showdown
    if (gameState.currentPlayerIndex !== 0 || player.folded || player.allIn || gameState.phase === 'showdown') {
        return;
    }
    
    let amount = 0;
    
    if (action === 'fold') {
        player.folded = true;
        player.lastAction = 'fold';
        logAction(`${player.name} folds`);
    } else if (action === 'check') {
        player.lastAction = 'check';
        logAction(`${player.name} checks`);
    } else if (action === 'call') {
        player.lastAction = 'call';
        amount = gameState.currentBet - player.currentBet;
        amount = Math.min(amount, player.chips);
        player.chips -= amount;
        player.currentBet += amount;
        gameState.pot += amount;
        logAction(`${player.name} calls $${amount}`);
        
        if (player.chips === 0) {
            player.allIn = true;
            player.lastAction = 'allin';
            SoundModule.allin();
        } else {
            SoundModule.bet();
        }
    } else if (action === 'raise') {
        player.lastAction = 'raise';
        const raiseInput = parseInt(document.getElementById('raise-amount').value);
        amount = raiseInput;
        
        if (amount > player.chips) amount = player.chips;
        if (amount < gameState.currentBet * 2 - player.currentBet) {
            alert('Raise must be at least double the current bet');
            return;
        }
        
        player.chips -= amount;
        gameState.pot += amount;
        player.currentBet += amount;
        gameState.currentBet = player.currentBet;
        gameState.lastRaiserIndex = 0;
        logAction(`${player.name} raises to $${player.currentBet}`);
        
        if (player.chips === 0) {
            player.allIn = true;
            player.lastAction = 'allin';
            SoundModule.allin();
        } else {
            SoundModule.raise();
        }
        
        document.getElementById('raise-controls').style.display = 'none';
    } else if (action === 'allin') {
        player.lastAction = 'allin';
        amount = player.chips;
        player.chips = 0;
        player.currentBet += amount;
        gameState.pot += amount;
        player.allIn = true;
        SoundModule.allin();
        
        if (player.currentBet > gameState.currentBet) {
            gameState.currentBet = player.currentBet;
            gameState.lastRaiserIndex = 0;
        }
        
        logAction(`${player.name} goes all-in with $${amount}`);
    }
    
    // Check if human player is eliminated (not all-in, just out of chips somehow)
    if (gameState.players[0].chips === 0 && !gameState.players[0].allIn) {
        setTimeout(() => {
            alert('😢 You\'re out of chips! Game Over!\n\nBetter luck next time!');
            if (confirm('Would you like to start a new game?')) {
                UIModule.showSettings();
            }
        }, 1000);
        return;
    }
    
    nextPlayer();
}

/**
 * AI turn handler
 */
function aiTurn() {
    const player = gameState.players[gameState.currentPlayerIndex];
    
    if (player.folded || player.allIn) {
        nextPlayer();
        return;
    }
    
    const decision = AIModule.makeAIDecision(player, gameState, config);
    
    // Set thinking status temporarily
    logAction(`${player.name} is thinking...`);
    UIModule.updateUI(gameState);
    
    setTimeout(() => {
        if (decision.action === 'fold') {
            player.folded = true;
            player.lastAction = 'fold';
            logAction(`${player.name} folds`);
            SoundModule.fold();
        } else if (decision.action === 'check') {
            player.lastAction = 'check';
            logAction(`${player.name} checks`);
        } else if (decision.action === 'call') {
            player.lastAction = 'call';
            const amount = Math.min(gameState.currentBet - player.currentBet, player.chips);
            player.chips -= amount;
            player.currentBet += amount;
            gameState.pot += amount;
            logAction(`${player.name} calls $${amount}`);
            
            if (player.chips === 0) {
                player.allIn = true;
                SoundModule.allin();
            } else {
                SoundModule.bet();
            }
        } else if (decision.action === 'raise') {
            player.lastAction = 'raise';
            const toCall = gameState.currentBet - player.currentBet;
            const raiseAmount = Math.min(decision.amount, player.chips - toCall);
            const totalBet = toCall + raiseAmount;
            
            player.chips -= totalBet;
            player.currentBet += totalBet;
            gameState.pot += totalBet;
            gameState.currentBet = player.currentBet;
            gameState.lastRaiserIndex = gameState.currentPlayerIndex;
            logAction(`${player.name} raises to $${player.currentBet}`);
            
            if (player.chips === 0) {
                player.allIn = true;
                SoundModule.allin();
            } else {
                SoundModule.raise();
            }
        }
        
        nextPlayer();
    }, 1500 + Math.random() * 1000);
}

/**
 * Moves to next player
 */
function nextPlayer() {
    UIModule.updateUI(gameState);
    
    // Mark current player as having acted
    if (!gameState.playersActed.includes(gameState.currentPlayerIndex)) {
        gameState.playersActed.push(gameState.currentPlayerIndex);
    }
    
    // Check if betting round is complete
    const activePlayers = gameState.players.filter(p => !p.folded && !p.allIn);
    
    // If only 0-1 active players (rest are all-in or folded), end betting round
    if (activePlayers.length <= 1) {
        advancePhase();
        return;
    }
    
    // Check if all active players have matched the current bet
    const allMatched = activePlayers.every(p => p.currentBet === gameState.currentBet);
    
    // Check if action has returned to the last raiser (or gone around once if no raise)
    let actionComplete = false;
    if (gameState.lastRaiserIndex === -1) {
        // No raise yet, check if everyone has acted
        actionComplete = activePlayers.every((p) => {
            const playerIndex = gameState.players.indexOf(p);
            return gameState.playersActed.includes(playerIndex);
        });
    } else {
        // There was a raise, check if action is back to raiser
        const nextIndex = (gameState.currentPlayerIndex + 1) % gameState.players.length;
        actionComplete = nextIndex === gameState.lastRaiserIndex || 
                        (gameState.players[nextIndex].folded && 
                         activePlayers.every(p => {
                            const pIndex = gameState.players.indexOf(p);
                            return pIndex === gameState.lastRaiserIndex || gameState.playersActed.includes(pIndex);
                         }));
    }
    
    // If all active players have acted and bets are matched, end betting round
    if (allMatched && actionComplete) {
        advancePhase();
        return;
    }
    
    // Move to next player
    let count = 0;
    do {
        gameState.currentPlayerIndex = (gameState.currentPlayerIndex + 1) % gameState.players.length;
        count++;
    } while ((gameState.players[gameState.currentPlayerIndex].folded || 
             gameState.players[gameState.currentPlayerIndex].allIn) && 
             count < gameState.players.length);
    
    // Continue betting
    if (activePlayers.length > 0) {
        if (gameState.players[gameState.currentPlayerIndex].isAI) {
            aiTurn();
        } else {
            UIModule.updateUI(gameState);
        }
    } else {
        advancePhase();
    }
}

/**
 * Advances to next phase of the hand
 */
function advancePhase() {
    // Reset bets and tracking for next round
    gameState.players.forEach(p => p.currentBet = 0);
    gameState.currentBet = 0;
    gameState.lastRaiserIndex = -1;
    gameState.playersActed = [];
    
    // Check if only one player remains (everyone else folded)
    const playersInHand = gameState.players.filter(p => !p.folded);
    if (playersInHand.length === 1) {
        // Award pot immediately to last remaining player
        const winner = playersInHand[0];
        winner.chips += gameState.pot;
        logAction(`${winner.name} wins $${gameState.pot} (everyone else folded)`);
        
        UIModule.updateUI(gameState);
        
        // Remove broke players
        gameState.players = gameState.players.filter(p => p.chips > 0);
        
        if (gameState.players.length === 1) {
            setTimeout(() => {
                alert(`Game Over! ${gameState.players[0].name} wins!`);
                UIModule.showSettings();
            }, 3000);
        } else {
            // Move dealer button
            gameState.dealerIndex = (gameState.dealerIndex + 1) % gameState.players.length;
            
            setTimeout(() => {
                startHand();
            }, 6000);
        }
        return;
    }
    
    // Check if everyone is all-in (no more betting possible)
    const activePlayers = gameState.players.filter(p => !p.folded && !p.allIn);
    const allAllIn = activePlayers.length === 0;
    
    if (gameState.phase === 'pre-flop') {
        dealFlop();
    } else if (gameState.phase === 'flop') {
        dealTurn();
    } else if (gameState.phase === 'turn') {
        dealRiver();
    } else if (gameState.phase === 'river') {
        showdown();
        return;
    }
    
    // If everyone is all-in, skip betting and auto-advance
    if (allAllIn) {
        logAction('All players all-in, revealing cards...');
        setTimeout(() => advancePhase(), 2500);
        return;
    }
    
    // Clear last actions for new betting round
    gameState.players.forEach(p => p.lastAction = null);
    
    // Start next betting round with first active player
    gameState.currentPlayerIndex = (gameState.dealerIndex + 1) % gameState.players.length;
    
    // Skip to first active player
    let iterations = 0;
    while ((gameState.players[gameState.currentPlayerIndex].folded || 
           gameState.players[gameState.currentPlayerIndex].allIn) &&
           iterations < gameState.players.length) {
        gameState.currentPlayerIndex = (gameState.currentPlayerIndex + 1) % gameState.players.length;
        iterations++;
    }
    
    UIModule.updateUI(gameState);
    
    if (gameState.players[gameState.currentPlayerIndex].isAI) {
        setTimeout(aiTurn, 1000);
    }
}

/**
 * Deals the flop (3 community cards)
 */
function dealFlop() {
    gameState.deck.pop(); // Burn card
    
    let cardIndex = 0;
    const dealInterval = setInterval(() => {
        if (cardIndex < 3) {
            gameState.communityCards.push(gameState.deck.pop());
            SoundModule.deal();
            UIModule.updateUI(gameState);
            cardIndex++;
        } else {
            clearInterval(dealInterval);
            gameState.phase = 'flop';
            logAction('Flop dealt');
        }
    }, 300);
}

/**
 * Deals the turn (4th community card)
 */
function dealTurn() {
    gameState.deck.pop(); // Burn card
    gameState.communityCards.push(gameState.deck.pop());
    SoundModule.deal();
    gameState.phase = 'turn';
    logAction('Turn dealt');
}

/**
 * Deals the river (5th community card)
 */
function dealRiver() {
    gameState.deck.pop(); // Burn card
    gameState.communityCards.push(gameState.deck.pop());
    SoundModule.deal();
    gameState.phase = 'river';
    logAction('River dealt');
}

/**
 * Calculates side pots based on all-in situations and returns excess chips
 * @returns {Array} Array of pot objects with amount and eligible players
 */
function calculateSidePots() {
    const activePlayers = gameState.players.filter(p => !p.folded);
    
    // If everyone has the same bet or only one player, return single pot
    if (activePlayers.length <= 1) {
        return [{
            amount: gameState.pot,
            eligiblePlayers: activePlayers
        }];
    }
    
    // Create array of {player, contribution} sorted by contribution
    const contributions = activePlayers.map(p => ({
        player: p,
        amount: p.currentBet
    })).sort((a, b) => a.amount - b.amount);
    
    // Return excess chips to players who bet more than lowest all-in
    // This ensures players only risk what the all-in player can match
    const lowestBet = contributions[0].amount;
    let totalPotAmount = 0;
    
    activePlayers.forEach(p => {
        if (p.currentBet > lowestBet) {
            // Return excess chips
            const excess = p.currentBet - lowestBet;
            p.chips += excess;
            p.currentBet = lowestBet;
            gameState.pot -= excess;
            logAction(`${p.name} gets $${excess} returned (uncalled bet)`);
        }
        totalPotAmount += p.currentBet;
    });
    
    // Recalculate contributions after returning excess
    const adjustedContributions = activePlayers.map(p => ({
        player: p,
        amount: p.currentBet
    })).sort((a, b) => a.amount - b.amount);
    
    // Remove duplicates and create betting levels
    const uniqueLevels = [...new Set(adjustedContributions.map(c => c.amount))].filter(v => v > 0).sort((a, b) => a - b);
    
    const pots = [];
    let previousLevel = 0;
    
    for (let i = 0; i < uniqueLevels.length; i++) {
        const level = uniqueLevels[i];
        if (level > previousLevel) {
            // Find all players who contributed at least this level
            const eligiblePlayers = adjustedContributions
                .filter(c => c.amount >= level)
                .map(c => c.player);
            
            // Calculate pot amount for this level
            const potAmount = (level - previousLevel) * eligiblePlayers.length;
            
            if (potAmount > 0) {
                pots.push({
                    amount: potAmount,
                    eligiblePlayers: eligiblePlayers
                });
            }
            
            previousLevel = level;
        }
    }
    
    return pots.length > 0 ? pots : [{
        amount: gameState.pot,
        eligiblePlayers: activePlayers
    }];
}

/**
 * Handles showdown and determines winner
 */
function showdown() {
    gameState.phase = 'showdown';
    
    const activePlayers = gameState.players.filter(p => !p.folded);
    
    if (activePlayers.length === 1) {
        // Everyone else folded
        const winner = activePlayers[0];
        const potAmount = gameState.pot;
        winner.chips += gameState.pot;
        SoundModule.collect();
        logAction(`${winner.name} wins $${potAmount} (everyone else folded)`);
        SoundModule.collect();
        UIModule.announceWinner(winner, 'Everyone else folded', false, {
            playerCards: winner.cards,
            communityCards: gameState.communityCards,
            winningHandCards: [],
            potAmount: potAmount
        });
    } else {
        // Calculate side pots
        const pots = calculateSidePots();
        
        // Evaluate all active players' hands
        const evaluations = activePlayers.map(p => ({
            player: p,
            hand: HandEvaluator.findBestHand([...p.cards, ...gameState.communityCards])
        }));
        
        evaluations.sort((a, b) => HandEvaluator.compareHands(b.hand, a.hand));
        
        let totalWon = 0;
        let mainWinner = null;
        let mainWinningHand = null;
        
        // Award each pot to eligible winner(s)
        pots.forEach((pot, potIndex) => {
            // Filter to only eligible players for this pot
            const eligibleEvaluations = evaluations.filter(e => 
                pot.eligiblePlayers.includes(e.player)
            );
            
            if (eligibleEvaluations.length === 0) return;
            
            // Find winner(s) among eligible players
            const potWinners = [eligibleEvaluations[0]];
            for (let i = 1; i < eligibleEvaluations.length; i++) {
                if (HandEvaluator.compareHands(eligibleEvaluations[i].hand, eligibleEvaluations[0].hand) === 0) {
                    potWinners.push(eligibleEvaluations[i]);
                } else {
                    break;
                }
            }
            
            const winAmount = Math.floor(pot.amount / potWinners.length);
            
            potWinners.forEach(w => {
                w.player.chips += winAmount;
                if (potIndex === 0) {
                    totalWon = winAmount;
                    mainWinner = w.player;
                    mainWinningHand = w.hand;
                } else if (w.player === mainWinner) {
                    totalWon += winAmount;
                }
                
                const potName = potIndex === 0 ? 'main pot' : `side pot ${potIndex}`;
                logAction(`${w.player.name} wins $${winAmount} from ${potName} with ${w.hand.name}`);
            });
        });
        
        // Show winner announcement for main pot winner
        if (mainWinner && mainWinningHand) {
            SoundModule.win();
            UIModule.announceWinner(mainWinner, mainWinningHand.name, pots.length > 1, {
                playerCards: mainWinner.cards,
                communityCards: gameState.communityCards,
                winningHandCards: mainWinningHand.cards || [],
                potAmount: totalWon
            });
        }
    }
    
    UIModule.updateUI(gameState);
    
    // Check if human player lost (has no chips)
    const humanPlayer = gameState.players.find(p => !p.isAI);
    const humanLost = !humanPlayer || humanPlayer.chips === 0;
    
    // Remove broke players
    gameState.players = gameState.players.filter(p => p.chips > 0);
    
    if (humanLost && !gameState.players.find(p => !p.isAI)) {
        // Human player was eliminated
        setTimeout(() => {
            alert('😢 You Lose! You\'re out of chips!\n\nBetter luck next time!');
            if (confirm('Would you like to start a new game?')) {
                UIModule.showSettings();
            }
        }, 5000);
        return;
    }
    
    if (gameState.players.length === 1) {
        const winner = gameState.players[0];
        setTimeout(() => {
            if (winner.isAI) {
                alert(`😢 You Lose! ${winner.name} wins the game!\n\nBetter luck next time!`);
            } else {
                alert(`🎉 Congratulations! You won the game!\n\nYou beat all the AI players!`);
            }
            // Only show settings if user wants to play again
            if (confirm('Would you like to start a new game?')) {
                UIModule.showSettings();
            }
        }, 5000);
    } else {
        // Move dealer button
        gameState.dealerIndex = (gameState.dealerIndex + 1) % gameState.players.length;
        
        setTimeout(() => {
            startHand();
        }, 6000);
    }
}

/**
 * Logs an action to the action log
 * @param {string} message - Action message
 */
function logAction(message) {
    gameState.actionLog.push(message);
}

/**
 * Wrapper for UI.toggleRaiseControls
 */
function toggleRaiseControls() {
    UIModule.toggleRaiseControls(gameState);
}

/**
 * Shows settings modal
 */
function showSettings() {
    UIModule.showSettings();
}

/**
 * Starts new game from settings modal
 */
function startNewGame() {
    UIModule.hideSettings();
    initGame();
}

// Initialize on page load
window.addEventListener('load', () => {
    console.log('🃏 Texas Hold\'em Poker Game Loaded!');
    console.log('Complete modular implementation with:');
    console.log('- Deck module (deck.js)');
    console.log('- Hand evaluator module (handEvaluator.js)');
    console.log('- AI module (ai.js)');
    console.log('- UI module (ui.js)');
    console.log('- Main game logic (game.js)');
    
    UIModule.showSettings();
});
