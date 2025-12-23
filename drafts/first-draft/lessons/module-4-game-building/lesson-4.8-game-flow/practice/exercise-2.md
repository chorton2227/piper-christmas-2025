# Exercise 2: Testing and Debugging Game Flow

**Estimated Time:** 45-60 minutes  
**Difficulty:** Intermediate  
**Prerequisites:** Complete Exercise 1 (Game Flow Implementation)

---

## 🎯 Learning Objectives

By the end of this exercise, you will be able to:
- Test all game flow scenarios systematically
- Identify and fix common game flow bugs
- Validate state transitions
- Handle edge cases in poker gameplay
- Debug winner determination logic

---

## 📋 Overview

Now that you've implemented the basic game flow, it's time to test it thoroughly! In this exercise, you'll:

1. Create a comprehensive test suite
2. Test all game scenarios (win, lose, tie)
3. Debug common issues
4. Validate chip management
5. Test edge cases

---

## Part 1: Setting Up Test Mode

### Step 1: Create Test Controls

Add test controls to your HTML (below your game container):

```html
<!-- Test Controls -->
<div id="test-controls" style="margin-top: 30px; padding: 20px; background: #f0f0f0; border-radius: 8px;">
    <h3>🧪 Test Controls</h3>
    
    <div style="margin: 10px 0;">
        <button onclick="testScenario('player-wins-high-card')">Test: Player Wins (High Card)</button>
        <button onclick="testScenario('dealer-wins-pair')">Test: Dealer Wins (Pair)</button>
        <button onclick="testScenario('tie-same-high-card')">Test: Tie (Same High Card)</button>
    </div>
    
    <div style="margin: 10px 0;">
        <button onclick="testScenario('player-wins-flush')">Test: Player Wins (Flush)</button>
        <button onclick="testScenario('dealer-wins-straight')">Test: Dealer Wins (Straight)</button>
        <button onclick="testScenario('player-royal-flush')">Test: Player Royal Flush</button>
    </div>
    
    <div style="margin: 10px 0;">
        <button onclick="testScenario('player-low-chips')">Test: Low Chips (5 left)</button>
        <button onclick="testScenario('player-out-of-chips')">Test: Out of Chips</button>
    </div>
    
    <div style="margin: 10px 0;">
        <button onclick="runAllTests()">🚀 Run All Tests</button>
        <button onclick="resetGame()">🔄 Reset Game</button>
    </div>
    
    <div id="test-results" style="margin-top: 15px; padding: 10px; background: white; border-radius: 4px; font-family: monospace; font-size: 12px; max-height: 200px; overflow-y: auto;">
        <strong>Test Results:</strong><br>
        Ready to run tests...
    </div>
</div>
```

### Step 2: Create Test Scenario Function

Add this function to create specific test scenarios:

```javascript
// Test scenario creator
function testScenario(scenarioName) {
    logTest(`\n=== Testing: ${scenarioName} ===`);
    
    // Reset game state
    gameState = {
        playerChips: 100,
        dealerChips: 100,
        pot: 0,
        ante: 5,
        playerHand: [],
        dealerHand: [],
        gamePhase: 'betting', // 'betting', 'showdown', 'gameOver'
        playerFolded: false
    };
    
    // Create specific scenarios
    switch(scenarioName) {
        case 'player-wins-high-card':
            // Player: K♥ Q♦ J♣ 9♠ 7♥ (King high)
            gameState.playerHand = [
                {rank: 'K', suit: '♥'},
                {rank: 'Q', suit: '♦'},
                {rank: 'J', suit: '♣'},
                {rank: '9', suit: '♠'},
                {rank: '7', suit: '♥'}
            ];
            // Dealer: Q♣ J♥ 10♦ 8♣ 6♠ (Queen high)
            gameState.dealerHand = [
                {rank: 'Q', suit: '♣'},
                {rank: 'J', suit: '♥'},
                {rank: '10', suit: '♦'},
                {rank: '8', suit: '♣'},
                {rank: '6', suit: '♠'}
            ];
            break;
            
        case 'dealer-wins-pair':
            // Player: K♥ Q♦ J♣ 9♠ 7♥ (High card)
            gameState.playerHand = [
                {rank: 'K', suit: '♥'},
                {rank: 'Q', suit: '♦'},
                {rank: 'J', suit: '♣'},
                {rank: '9', suit: '♠'},
                {rank: '7', suit: '♥'}
            ];
            // Dealer: 10♥ 10♣ K♦ Q♠ 8♥ (Pair of 10s)
            gameState.dealerHand = [
                {rank: '10', suit: '♥'},
                {rank: '10', suit: '♣'},
                {rank: 'K', suit: '♦'},
                {rank: 'Q', suit: '♠'},
                {rank: '8', suit: '♥'}
            ];
            break;
            
        case 'tie-same-high-card':
            // Both have K high with Q, J, 9, 7
            gameState.playerHand = [
                {rank: 'K', suit: '♥'},
                {rank: 'Q', suit: '♦'},
                {rank: 'J', suit: '♣'},
                {rank: '9', suit: '♠'},
                {rank: '7', suit: '♥'}
            ];
            gameState.dealerHand = [
                {rank: 'K', suit: '♣'},
                {rank: 'Q', suit: '♠'},
                {rank: 'J', suit: '♥'},
                {rank: '9', suit: '♦'},
                {rank: '7', suit: '♣'}
            ];
            break;
            
        case 'player-wins-flush':
            // Player: Flush (5 hearts)
            gameState.playerHand = [
                {rank: 'K', suit: '♥'},
                {rank: 'J', suit: '♥'},
                {rank: '9', suit: '♥'},
                {rank: '7', suit: '♥'},
                {rank: '5', suit: '♥'}
            ];
            // Dealer: Pair of Jacks
            gameState.dealerHand = [
                {rank: 'J', suit: '♣'},
                {rank: 'J', suit: '♦'},
                {rank: 'K', suit: '♠'},
                {rank: '8', suit: '♥'},
                {rank: '6', suit: '♣'}
            ];
            break;
            
        case 'dealer-wins-straight':
            // Player: Pair of Kings
            gameState.playerHand = [
                {rank: 'K', suit: '♥'},
                {rank: 'K', suit: '♦'},
                {rank: 'Q', suit: '♣'},
                {rank: '9', suit: '♠'},
                {rank: '7', suit: '♥'}
            ];
            // Dealer: Straight (10-J-Q-K-A)
            gameState.dealerHand = [
                {rank: 'A', suit: '♥'},
                {rank: 'K', suit: '♣'},
                {rank: 'Q', suit: '♦'},
                {rank: 'J', suit: '♠'},
                {rank: '10', suit: '♥'}
            ];
            break;
            
        case 'player-royal-flush':
            // Player: Royal Flush!
            gameState.playerHand = [
                {rank: 'A', suit: '♠'},
                {rank: 'K', suit: '♠'},
                {rank: 'Q', suit: '♠'},
                {rank: 'J', suit: '♠'},
                {rank: '10', suit: '♠'}
            ];
            // Dealer: Full House (strong but loses)
            gameState.dealerHand = [
                {rank: 'K', suit: '♥'},
                {rank: 'K', suit: '♦'},
                {rank: 'K', suit: '♣'},
                {rank: '8', suit: '♠'},
                {rank: '8', suit: '♥'}
            ];
            break;
            
        case 'player-low-chips':
            gameState.playerChips = 5; // Only enough for one more ante
            gameState.playerHand = [
                {rank: 'A', suit: '♥'},
                {rank: 'K', suit: '♦'},
                {rank: 'Q', suit: '♣'},
                {rank: 'J', suit: '♠'},
                {rank: '10', suit: '♥'}
            ];
            gameState.dealerHand = [
                {rank: '7', suit: '♥'},
                {rank: '5', suit: '♦'},
                {rank: '4', suit: '♣'},
                {rank: '3', suit: '♠'},
                {rank: '2', suit: '♥'}
            ];
            break;
            
        case 'player-out-of-chips':
            gameState.playerChips = 0; // Game over!
            break;
    }
    
    // Place antes and simulate game
    if (scenarioName !== 'player-out-of-chips') {
        placeAnte();
        updateDisplay();
        
        // Auto-call to reach showdown
        setTimeout(() => {
            call();
            logTest(`Pot after call: ${gameState.pot}`);
            
            // Run showdown
            setTimeout(() => {
                showdown();
                logTest(`Test complete!\n`);
            }, 500);
        }, 500);
    } else {
        updateDisplay();
        logTest('Player out of chips - game should end!');
    }
}

// Test logging
function logTest(message) {
    const testResults = document.getElementById('test-results');
    testResults.innerHTML += message + '<br>';
    testResults.scrollTop = testResults.scrollHeight;
    console.log(message);
}
```

---

## Part 2: Automated Test Suite

### Step 3: Create Test Runner

Add a comprehensive test runner:

```javascript
// Automated test suite
async function runAllTests() {
    const testResults = document.getElementById('test-results');
    testResults.innerHTML = '<strong>Running All Tests...</strong><br><br>';
    
    const tests = [
        'player-wins-high-card',
        'dealer-wins-pair',
        'tie-same-high-card',
        'player-wins-flush',
        'dealer-wins-straight',
        'player-royal-flush',
        'player-low-chips'
    ];
    
    let passedTests = 0;
    let failedTests = 0;
    
    for (let test of tests) {
        logTest(`\n🧪 Running: ${test}...`);
        
        try {
            // Run test
            testScenario(test);
            
            // Wait for test to complete
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Validate result
            const valid = validateTestResult(test);
            
            if (valid) {
                logTest(`✅ PASSED: ${test}`);
                passedTests++;
            } else {
                logTest(`❌ FAILED: ${test}`);
                failedTests++;
            }
        } catch (error) {
            logTest(`❌ ERROR: ${test} - ${error.message}`);
            failedTests++;
        }
    }
    
    // Final summary
    logTest(`\n${'='.repeat(50)}`);
    logTest(`📊 Test Summary:`);
    logTest(`   ✅ Passed: ${passedTests}`);
    logTest(`   ❌ Failed: ${failedTests}`);
    logTest(`   📈 Success Rate: ${Math.round(passedTests / (passedTests + failedTests) * 100)}%`);
    logTest(`${'='.repeat(50)}\n`);
}

// Validate test results
function validateTestResult(testName) {
    switch(testName) {
        case 'player-wins-high-card':
            // Player should have more chips
            return gameState.playerChips > 100;
            
        case 'dealer-wins-pair':
            // Player should have fewer chips
            return gameState.playerChips < 100;
            
        case 'tie-same-high-card':
            // Chips should be returned to original
            return gameState.playerChips === 100;
            
        case 'player-wins-flush':
            return gameState.playerChips > 100;
            
        case 'dealer-wins-straight':
            return gameState.playerChips < 100;
            
        case 'player-royal-flush':
            return gameState.playerChips > 100;
            
        case 'player-low-chips':
            // Player should win and have more than 5 chips
            return gameState.playerChips > 5;
            
        default:
            return false;
    }
}
```

---

## Part 3: Common Bugs and Fixes

### Bug #1: Pot Not Resetting

**Problem:** Pot carries over to next round.

**Fix:**
```javascript
function startNewRound() {
    // Make sure pot resets!
    gameState.pot = 0;  // ← ADD THIS
    gameState.playerHand = [];
    gameState.dealerHand = [];
    gameState.playerFolded = false;
    gameState.gamePhase = 'betting';
    
    placeAnte();
    dealInitialCards();
    updateDisplay();
}
```

### Bug #2: Winner Determination Wrong

**Problem:** Wrong player wins sometimes.

**Debug by adding logging:**
```javascript
function determineWinner() {
    const playerEval = evaluateHand(gameState.playerHand);
    const dealerEval = evaluateHand(gameState.dealerHand);
    
    // DEBUG LOGGING
    console.log('Player hand:', playerEval);
    console.log('Dealer hand:', dealerEval);
    console.log('Player rank:', playerEval.rank);
    console.log('Dealer rank:', dealerEval.rank);
    
    // Compare ranks
    if (playerEval.rank > dealerEval.rank) {
        console.log('Player wins by rank!');
        return 'player';
    } else if (dealerEval.rank > playerEval.rank) {
        console.log('Dealer wins by rank!');
        return 'dealer';
    }
    
    // Same rank - compare values
    console.log('Same rank, comparing values...');
    console.log('Player values:', playerEval.values);
    console.log('Dealer values:', dealerEval.values);
    
    for (let i = 0; i < playerEval.values.length; i++) {
        if (playerEval.values[i] > dealerEval.values[i]) {
            console.log(`Player wins at position ${i}!`);
            return 'player';
        } else if (dealerEval.values[i] > playerEval.values[i]) {
            console.log(`Dealer wins at position ${i}!`);
            return 'dealer';
        }
    }
    
    console.log('Perfect tie!');
    return 'tie';
}
```

### Bug #3: Cards Showing Before Showdown

**Problem:** Dealer cards visible too early.

**Fix:**
```javascript
function updateDisplay() {
    // Only show dealer cards during showdown
    if (gameState.gamePhase === 'showdown') {
        displayHand('dealer-hand', gameState.dealerHand, false);
    } else {
        displayHand('dealer-hand', gameState.dealerHand, true); // Keep face down
    }
    
    // Always show player cards
    displayHand('player-hand', gameState.playerHand, false);
}
```

### Bug #4: Buttons Enabled at Wrong Time

**Problem:** Player can click buttons during showdown.

**Fix:**
```javascript
function updateButtonStates() {
    const foldBtn = document.getElementById('fold-btn');
    const callBtn = document.getElementById('call-btn');
    const raiseBtn = document.getElementById('raise-btn');
    const playAgainBtn = document.getElementById('play-again-btn');
    
    if (gameState.gamePhase === 'betting' && !gameState.playerFolded) {
        // Enable betting buttons
        foldBtn.disabled = false;
        callBtn.disabled = false;
        raiseBtn.disabled = false;
        playAgainBtn.style.display = 'none';
    } else {
        // Disable betting buttons
        foldBtn.disabled = true;
        callBtn.disabled = true;
        raiseBtn.disabled = true;
        
        // Show play again if round is over
        if (gameState.gamePhase === 'showdown') {
            playAgainBtn.style.display = 'block';
        }
    }
}

// Call this in updateDisplay!
function updateDisplay() {
    // ... existing code ...
    
    updateButtonStates(); // ← ADD THIS
}
```

### Bug #5: Chip Count Goes Negative

**Problem:** Player chips can become negative.

**Fix:**
```javascript
function call() {
    const callAmount = gameState.ante; // Match the ante
    
    // CHECK if player has enough chips
    if (gameState.playerChips < callAmount) {
        alert('Not enough chips to call!');
        return;
    }
    
    gameState.playerChips -= callAmount;
    gameState.pot += callAmount;
    
    showdown();
}

function raise() {
    const raiseAmount = gameState.ante * 2; // Raise by 2x ante
    
    // CHECK if player has enough chips
    if (gameState.playerChips < raiseAmount) {
        alert('Not enough chips to raise!');
        return;
    }
    
    gameState.playerChips -= raiseAmount;
    gameState.pot += raiseAmount;
    
    // Dealer calls the raise
    if (gameState.dealerChips >= raiseAmount) {
        gameState.dealerChips -= raiseAmount;
        gameState.pot += raiseAmount;
    } else {
        // Dealer doesn't have enough - player wins
        gameState.playerChips += gameState.pot;
        gameState.pot = 0;
        alert('Dealer cannot match your raise! You win!');
        startNewRound();
        return;
    }
    
    showdown();
}
```

---

## Part 4: Edge Case Testing

### Test Case 1: Out of Chips

**Scenario:** Player runs out of chips mid-game.

**Test:**
```javascript
function testOutOfChips() {
    gameState.playerChips = 2; // Less than ante
    
    try {
        placeAnte();
        // Should trigger game over
        if (gameState.gamePhase === 'gameOver') {
            console.log('✅ Out of chips handled correctly');
        } else {
            console.log('❌ Game should have ended!');
        }
    } catch (error) {
        console.log('❌ Error:', error);
    }
}
```

**Expected Fix:**
```javascript
function placeAnte() {
    // Check if player can afford ante
    if (gameState.playerChips < gameState.ante) {
        gameOver('You ran out of chips! Game over.');
        return;
    }
    
    // Both players pay ante
    gameState.playerChips -= gameState.ante;
    gameState.dealerChips -= gameState.ante;
    gameState.pot += gameState.ante * 2;
}
```

### Test Case 2: Exact Chip Match

**Scenario:** Player and dealer have exact same chips at showdown.

**Test:**
```javascript
function testExactChipMatch() {
    gameState.playerChips = 50;
    gameState.dealerChips = 50;
    gameState.pot = 10;
    
    // Simulate tie
    gameState.playerHand = [{rank: 'K', suit: '♥'}, ...];
    gameState.dealerHand = [{rank: 'K', suit: '♦'}, ...];
    
    showdown();
    
    // Both should have 50 chips still
    if (gameState.playerChips === 50 && gameState.dealerChips === 50) {
        console.log('✅ Tie chips distributed correctly');
    } else {
        console.log('❌ Chip distribution error!');
    }
}
```

### Test Case 3: Royal Flush vs Royal Flush

**Scenario:** Both players get royal flush (super rare but possible!).

**Test:**
```javascript
function testDoubleRoyalFlush() {
    gameState.playerHand = [
        {rank: 'A', suit: '♠'},
        {rank: 'K', suit: '♠'},
        {rank: 'Q', suit: '♠'},
        {rank: 'J', suit: '♠'},
        {rank: '10', suit: '♠'}
    ];
    
    gameState.dealerHand = [
        {rank: 'A', suit: '♥'},
        {rank: 'K', suit: '♥'},
        {rank: 'Q', suit: '♥'},
        {rank: 'J', suit: '♥'},
        {rank: '10', suit: '♥'}
    ];
    
    const winner = determineWinner();
    
    if (winner === 'tie') {
        console.log('✅ Double royal flush = tie (correct!)');
    } else {
        console.log('❌ Should be a tie!');
    }
}
```

---

## Part 5: State Transition Testing

### Test Valid State Transitions

Create a state machine validator:

```javascript
// Valid state transitions
const validTransitions = {
    'betting': ['showdown', 'gameOver'],
    'showdown': ['betting', 'gameOver'],
    'gameOver': []
};

// Track state changes
let stateHistory = [];

function changeGamePhase(newPhase) {
    const currentPhase = gameState.gamePhase;
    
    // Validate transition
    if (!validTransitions[currentPhase].includes(newPhase)) {
        console.error(`❌ Invalid state transition: ${currentPhase} → ${newPhase}`);
        throw new Error(`Invalid state transition`);
    }
    
    // Log transition
    stateHistory.push({
        from: currentPhase,
        to: newPhase,
        timestamp: Date.now()
    });
    
    console.log(`✅ Valid transition: ${currentPhase} → ${newPhase}`);
    gameState.gamePhase = newPhase;
}

// Use this instead of directly setting gameState.gamePhase
// Example:
// gameState.gamePhase = 'showdown'; // OLD WAY
// changeGamePhase('showdown'); // NEW WAY
```

### Test Sequence

Test a complete game sequence:

```javascript
function testCompleteGameSequence() {
    console.log('=== Testing Complete Game Sequence ===');
    
    // 1. Start game
    console.log('1. Starting game...');
    gameState.gamePhase = 'betting';
    
    // 2. Place ante
    console.log('2. Placing ante...');
    placeAnte();
    
    // 3. Deal cards
    console.log('3. Dealing cards...');
    dealInitialCards();
    
    // 4. Player calls
    console.log('4. Player calls...');
    call();
    
    // 5. Showdown happens (called by call())
    console.log('5. Showdown...');
    // (already triggered)
    
    // 6. New round starts
    console.log('6. Starting new round...');
    startNewRound();
    
    console.log('✅ Complete sequence successful!');
}
```

---

## 🎯 Your Task

### Checklist

- [ ] Add test controls HTML to your page
- [ ] Implement `testScenario()` function
- [ ] Implement `runAllTests()` function
- [ ] Fix all 5 common bugs in your code
- [ ] Test all 3 edge cases
- [ ] Implement state transition validation
- [ ] Run complete game sequence test
- [ ] Achieve 100% test pass rate

### Validation Questions

Answer these after testing:

1. **What bug did you find most surprising?**
   - Your answer: _______________

2. **How did you verify winner determination is correct?**
   - Your answer: _______________

3. **What happens if dealer runs out of chips?**
   - Your answer: _______________

4. **Did you find any bugs not listed here?**
   - Your answer: _______________

---

## 🏆 Success Criteria

Your testing suite should:
- ✅ Run all tests automatically
- ✅ Pass 100% of test cases
- ✅ Handle all edge cases gracefully
- ✅ Log clear test results
- ✅ Validate state transitions
- ✅ Prevent invalid game states

---

## 💡 Debugging Tips

1. **Add Console Logging Everywhere**
   ```javascript
   console.log('Current phase:', gameState.gamePhase);
   console.log('Player chips:', gameState.playerChips);
   console.log('Pot:', gameState.pot);
   ```

2. **Use Debugger Breakpoints**
   ```javascript
   function determineWinner() {
       debugger; // Pause here
       // ... rest of code
   }
   ```

3. **Visual State Indicators**
   ```javascript
   function updateDisplay() {
       // Show game phase
       document.getElementById('game-info').innerHTML = `
           Phase: ${gameState.gamePhase}<br>
           Player Folded: ${gameState.playerFolded}<br>
           Pot: $${gameState.pot}
       `;
   }
   ```

4. **Test One Thing at a Time**
   - Test betting first
   - Then test winner determination
   - Then test chip management
   - Finally test full game flow

---

## 🚀 Going Further

Once all tests pass:
1. Add more edge case tests
2. Test rapid clicking (spam prevention)
3. Test browser refresh (save state?)
4. Test mobile screen sizes
5. Add performance tests (speed)

---

**Next:** Exercise 3 - Advanced Features (Settings, Variations, Polish)
