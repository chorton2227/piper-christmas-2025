# Betting System Quick Reference

**Quick lookup for all betting functions and concepts**

---

## 🎯 Betting Actions

### Check
```javascript
function check() {
    if (gameState.currentBet > gameState.playerBetThisRound) {
        return false; // Can't check if there's a bet to call
    }
    alert('You check');
    dealerAction();
    return true;
}
```
- **When:** No bet to call (or you've already called)
- **Result:** Pass action to next player
- **Cost:** $0

### Bet
```javascript
function bet(amount) {
    if (amount < gameState.minimumBet) {
        alert(`Minimum bet is $${gameState.minimumBet}`);
        return false;
    }
    gameState.playerChips -= amount;
    gameState.playerBetThisRound += amount;
    gameState.pot += amount;
    gameState.currentBet = gameState.playerBetThisRound;
    return true;
}
```
- **When:** No current bet (or you're raising)
- **Minimum:** Usually the big blind amount
- **Result:** Put chips in pot, set new bet level

### Call
```javascript
function call() {
    const toCall = gameState.currentBet - gameState.playerBetThisRound;
    if (toCall <= 0) return false;
    
    gameState.playerChips -= toCall;
    gameState.playerBetThisRound += toCall;
    gameState.pot += toCall;
    return true;
}
```
- **When:** There's a bet you need to match
- **Cost:** Difference between current bet and your bet
- **Result:** Match the current bet

### Raise
```javascript
function raise(raiseAmount) {
    const toCall = gameState.currentBet - gameState.playerBetThisRound;
    const totalCost = toCall + raiseAmount;
    
    if (raiseAmount < gameState.minimumBet) {
        return false; // Raise must be at least minimum bet
    }
    
    gameState.playerChips -= totalCost;
    gameState.playerBetThisRound += totalCost;
    gameState.pot += totalCost;
    gameState.currentBet = gameState.playerBetThisRound;
    return true;
}
```
- **When:** Increasing the bet
- **Minimum Raise:** Usually equal to big blind
- **Cost:** Call amount + raise amount
- **Result:** Set new higher bet level

### Fold
```javascript
function fold() {
    gameState.gamePhase = 'game-over';
    alert('You fold');
    gameState.dealerChips += gameState.pot;
    gameState.pot = 0;
}
```
- **When:** Don't want to match bet
- **Cost:** Lose your hand
- **Result:** Opponent wins pot

### All-In
```javascript
function allIn() {
    const allInAmount = gameState.playerChips;
    gameState.playerChips = 0;
    gameState.playerBetThisRound += allInAmount;
    gameState.pot += allInAmount;
    gameState.playerIsAllIn = true;
    
    if (gameState.playerBetThisRound > gameState.currentBet) {
        gameState.currentBet = gameState.playerBetThisRound;
    }
    return true;
}
```
- **When:** Bet all remaining chips
- **Cost:** All your chips
- **Result:** Can only win up to what you bet

---

## 🃏 Betting Rounds

### Round Flow
1. **Pre-Flop** - After dealing hole cards
   - Small blind posts
   - Big blind posts
   - Betting begins left of big blind

2. **Flop** - After 3 community cards
   - First player acts
   - Betting round

3. **Turn** - After 4th community card
   - First player acts
   - Betting round

4. **River** - After 5th community card
   - First player acts
   - Final betting round
   - Then showdown

### Advance Round
```javascript
function advanceBettingRound() {
    // Save bets to total
    gameState.playerTotalBet += gameState.playerBetThisRound;
    gameState.dealerTotalBet += gameState.dealerBetThisRound;
    
    // Reset round bets
    gameState.playerBetThisRound = 0;
    gameState.dealerBetThisRound = 0;
    gameState.currentBet = 0;
    
    // Next round
    if (gameState.bettingRound === 'pre-flop') {
        gameState.bettingRound = 'flop';
        dealFlop();
    } else if (gameState.bettingRound === 'flop') {
        gameState.bettingRound = 'turn';
        dealTurn();
    } else if (gameState.bettingRound === 'turn') {
        gameState.bettingRound = 'river';
        dealRiver();
    } else {
        showdown();
    }
}
```

---

## 💰 Blinds System

### Post Blinds
```javascript
function postBlinds() {
    // Small blind (button)
    if (gameState.isPlayerDealer) {
        gameState.playerChips -= gameState.smallBlind;
        gameState.playerBetThisRound = gameState.smallBlind;
        gameState.pot += gameState.smallBlind;
    } else {
        gameState.dealerChips -= gameState.smallBlind;
        gameState.dealerBetThisRound = gameState.smallBlind;
        gameState.pot += gameState.smallBlind;
    }
    
    // Big blind
    if (gameState.isPlayerDealer) {
        gameState.dealerChips -= gameState.bigBlind;
        gameState.dealerBetThisRound = gameState.bigBlind;
        gameState.pot += gameState.bigBlind;
    } else {
        gameState.playerChips -= gameState.bigBlind;
        gameState.playerBetThisRound = gameState.bigBlind;
        gameState.pot += gameState.bigBlind;
    }
    
    gameState.currentBet = gameState.bigBlind;
}
```

### Rotate Button
```javascript
function rotateButton() {
    gameState.isPlayerDealer = !gameState.isPlayerDealer;
}
```

---

## 🎲 Side Pots

### Calculate Side Pots
```javascript
function calculateSidePots() {
    const playerTotal = gameState.playerTotalBet + gameState.playerBetThisRound;
    const dealerTotal = gameState.dealerTotalBet + gameState.dealerBetThisRound;
    
    gameState.pots = [];
    
    // Equal bets - single pot
    if (playerTotal === dealerTotal) {
        gameState.pots.push({
            amount: gameState.pot,
            eligiblePlayers: ['player', 'dealer'],
            type: 'main'
        });
        return;
    }
    
    // Unequal - main pot + side pot
    const minBet = Math.min(playerTotal, dealerTotal);
    const maxBet = Math.max(playerTotal, dealerTotal);
    
    // Main pot
    gameState.pots.push({
        amount: minBet * 2,
        eligiblePlayers: ['player', 'dealer'],
        type: 'main'
    });
    
    // Side pot
    const sidePot = maxBet - minBet;
    if (sidePot > 0) {
        const eligiblePlayer = playerTotal > dealerTotal ? 'player' : 'dealer';
        gameState.pots.push({
            amount: sidePot,
            eligiblePlayers: [eligiblePlayer],
            type: 'side'
        });
    }
}
```

### Award Pots
```javascript
function awardSidePots() {
    calculateSidePots();
    
    for (let pot of gameState.pots) {
        // One eligible - auto win
        if (pot.eligiblePlayers.length === 1) {
            const winner = pot.eligiblePlayers[0];
            if (winner === 'player') {
                gameState.playerChips += pot.amount;
            } else {
                gameState.dealerChips += pot.amount;
            }
            continue;
        }
        
        // Compare hands
        const winner = compareHands();
        if (winner === 'player') {
            gameState.playerChips += pot.amount;
        } else if (winner === 'dealer') {
            gameState.dealerChips += pot.amount;
        } else {
            // Split
            gameState.playerChips += pot.amount / 2;
            gameState.dealerChips += pot.amount / 2;
        }
    }
}
```

---

## 🤖 Dealer AI

### Basic Decision Making
```javascript
function dealerAction() {
    const toCall = gameState.currentBet - gameState.dealerBetThisRound;
    const handValue = evaluateHand(gameState.dealerHand);
    
    // Evaluate strength
    if (handValue.rank >= 2) {
        // Strong hand - raise
        dealerRaise(gameState.bigBlind);
    } else if (toCall === 0) {
        // No bet - check
        dealerCheck();
    } else if (toCall <= gameState.bigBlind && handValue.rank >= 1) {
        // Small bet, decent hand - call
        dealerCall();
    } else {
        // Fold
        dealerFold();
    }
}
```

### Hand Evaluation
```javascript
function evaluateHand(cards) {
    // Simple evaluation
    const ranks = cards.map(c => c.rank);
    const suits = cards.map(c => c.suit);
    
    // Check for pairs, high cards, etc.
    const hasPair = ranks.length !== new Set(ranks).size;
    const highCard = Math.max(...ranks.map(r => rankValue(r)));
    
    return {
        rank: hasPair ? 2 : 1,
        values: [highCard],
        name: hasPair ? 'Pair' : 'High Card'
    };
}
```

---

## 📊 Game State

### Essential Properties
```javascript
let gameState = {
    // Chips
    playerChips: 1000,
    dealerChips: 1000,
    pot: 0,
    
    // Betting
    currentBet: 0,
    minimumBet: 10,
    playerBetThisRound: 0,
    dealerBetThisRound: 0,
    playerTotalBet: 0,
    dealerTotalBet: 0,
    
    // Blinds
    smallBlind: 5,
    bigBlind: 10,
    isPlayerDealer: false,
    
    // Cards
    deck: [],
    playerHand: [],
    dealerHand: [],
    communityCards: [],
    
    // Rounds
    bettingRound: 'pre-flop',
    gamePhase: 'betting',
    
    // All-in
    playerIsAllIn: false,
    dealerIsAllIn: false,
    pots: []
};
```

---

## 🎨 UI Updates

### Update Display
```javascript
function updateDisplay() {
    // Chips
    document.getElementById('player-chips').textContent = 
        `$${gameState.playerChips}`;
    document.getElementById('dealer-chips').textContent = 
        `$${gameState.dealerChips}`;
    
    // Pot
    document.getElementById('pot').textContent = 
        `Pot: $${gameState.pot}`;
    
    // Bets
    document.getElementById('player-bet').textContent = 
        `Bet: $${gameState.playerBetThisRound}`;
    document.getElementById('dealer-bet').textContent = 
        `Bet: $${gameState.dealerBetThisRound}`;
    
    // Cards
    displayCards();
    
    // Buttons
    updateButtonStates();
}
```

### Button States
```javascript
function updateButtonStates() {
    const toCall = gameState.currentBet - gameState.playerBetThisRound;
    
    // Check available when no bet or already called
    document.getElementById('check-btn').disabled = toCall > 0;
    
    // Call available when there's a bet to call
    document.getElementById('call-btn').disabled = 
        toCall <= 0 || gameState.playerChips < toCall;
    
    // Bet/Raise available when have chips
    document.getElementById('bet-btn').disabled = 
        gameState.playerChips < gameState.minimumBet;
    
    // All-in available unless already all-in
    document.getElementById('all-in-btn').disabled = 
        gameState.playerIsAllIn || gameState.playerChips === 0;
}
```

---

## 🔧 Common Patterns

### Input Modal
```javascript
function promptBet(action) {
    const modal = document.getElementById('bet-modal');
    const input = document.getElementById('bet-input');
    const confirmBtn = document.getElementById('confirm-bet');
    
    document.getElementById('modal-title').textContent = 
        action === 'bet' ? 'Enter Bet Amount' : 'Enter Raise Amount';
    
    modal.style.display = 'block';
    input.value = gameState.minimumBet;
    input.focus();
    
    confirmBtn.onclick = () => {
        const amount = parseInt(input.value);
        modal.style.display = 'none';
        
        if (action === 'bet') {
            bet(amount);
        } else {
            raise(amount);
        }
    };
}
```

### Check Round Complete
```javascript
function checkBettingRoundComplete() {
    // Both all-in - run out cards
    if (gameState.playerIsAllIn && gameState.dealerIsAllIn) {
        runOutCards();
        return true;
    }
    
    // Bets equal and both acted
    const betsEqual = 
        gameState.playerBetThisRound === gameState.dealerBetThisRound;
    
    if (betsEqual && gameState.currentBet >= 0) {
        if (gameState.bettingRound === 'river') {
            showdown();
        } else {
            advanceBettingRound();
        }
        return true;
    }
    
    return false;
}
```

---

## 📝 Quick Tips

### Validation
- Always check if player has enough chips
- Verify minimum bet requirements
- Ensure bets are valid for current situation

### All-In
- Set isAllIn flag immediately
- Calculate side pots before showdown
- Only eligible players can win each pot

### Dealer AI
- Evaluate hand strength
- Consider pot odds
- Vary behavior (don't be predictable)

### Testing
- Test with $0 chips (all-in scenario)
- Test with equal bets (no side pot)
- Test with unequal bets (side pot needed)
- Test dealer folding, calling, raising

---

## 🐛 Common Bugs

### Bug: Can check when there's a bet
**Fix:** Check `toCall > 0` before allowing check

### Bug: Side pots calculated wrong
**Fix:** Use `playerTotalBet + playerBetThisRound`, not just current round

### Bug: Can bet negative amounts
**Fix:** Add validation `if (amount <= 0) return false;`

### Bug: Pot doesn't reset
**Fix:** Set `gameState.pot = 0` after awarding chips

### Bug: All-in flags not cleared
**Fix:** Reset in `startNewRound()`

---

**Keep this cheatsheet handy while coding!** 🚀
