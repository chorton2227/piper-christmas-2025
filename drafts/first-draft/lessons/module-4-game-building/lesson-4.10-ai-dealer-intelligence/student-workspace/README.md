# Student Workspace - AI Dealer Intelligence

**Track your progress building intelligent poker AI**

---

## 🎯 Your Mission

Transform your poker dealer from a simple random player into an intelligent opponent that:
- Evaluates hands deeply
- Adjusts strategy based on difficulty
- Learns your playing style
- Adapts counter-strategies

---

## 📋 Progress Tracker

### Exercise 1: Enhanced Hand Evaluation

#### Step 1: hasTopPairOrBetter() Function
- [ ] Check if communityCards length > 0
- [ ] Check if holeCards length >= 2
- [ ] Find highest community card rank
- [ ] Check if either hole card matches high card
- [ ] Call hasOverpair() as fallback
- [ ] Test with Ace-King on King-high board (should return true)
- [ ] Test with 7-2 on King-high board (should return false)
- [ ] Test pre-flop (should return false)

#### Step 2: hasOverpair() Function
- [ ] Check if communityCards length > 0
- [ ] Check if holeCards length >= 2
- [ ] Check if hole cards form a pocket pair
- [ ] Get pocket pair rank
- [ ] Find highest community card
- [ ] Return true if pair rank > high board card
- [ ] Test with pocket Queens on Jack-high board (should return true)
- [ ] Test with pocket Jacks on Queen-high board (should return false)
- [ ] Test with non-pair hole cards (should return false)

#### Step 3: evaluateDraws() Function
- [ ] Combine hole cards and community cards
- [ ] Count cards by suit (flush draw check)
- [ ] Check if any suit has exactly 4 cards
- [ ] Set flushDraw accordingly
- [ ] Get unique ranks sorted
- [ ] Check for 4 consecutive cards (open-ended straight draw)
- [ ] Check for gutshot (one gap in sequence)
- [ ] Return object with flushDraw, straightDraw, comboDraw
- [ ] Test with 4 hearts (should detect flush draw)
- [ ] Test with 8-9-10-J (should detect straight draw)

#### Step 4: analyzeBoardTexture() Function
- [ ] Return default object if < 3 community cards
- [ ] Count cards by suit
- [ ] Set flushPossible if 3+ same suit
- [ ] Get unique ranks
- [ ] Calculate max gap between ranks
- [ ] Set straightPossible if gap <= 4
- [ ] Count cards by rank
- [ ] Set paired if any rank appears 2+ times
- [ ] Determine texture: dry/paired/coordinated/very-coordinated
- [ ] Set danger level 1-5
- [ ] Test with rainbow unconnected board (danger = 1)
- [ ] Test with flush + straight possible (danger = 5)

#### Step 5: categorizeHand() Function
- [ ] Get rank from handEvaluation
- [ ] Return 'monster' if rank >= 7
- [ ] Return 'strong' if rank >= 4
- [ ] Return 'made-hand' if rank >= 2
- [ ] Return 'high-card' if rank = 1 and highCard >= 12
- [ ] Return 'weak' otherwise
- [ ] Test with full house (should be 'monster')
- [ ] Test with two pair (should be 'made-hand')
- [ ] Test with 7-high (should be 'weak')

#### Step 6: evaluateHandStrength() Integration
- [ ] Combine holeCards and communityCards
- [ ] Call evaluateHand() for basic evaluation
- [ ] Call hasTopPairOrBetter()
- [ ] Call hasOverpair()
- [ ] Call evaluateDraws()
- [ ] Call analyzeBoardTexture()
- [ ] Call categorizeHand()
- [ ] Return comprehensive object with all properties
- [ ] Test with various scenarios
- [ ] Verify all properties present in result

#### Testing
- [ ] Test all functions individually
- [ ] Test with edge cases (0 cards, 7 cards)
- [ ] Test with various hand strengths
- [ ] Test with different board textures
- [ ] Verify no crashes or errors
- [ ] Add console.log() for debugging

---

### Exercise 2: Difficulty Levels & Decision Making

#### Step 1: Add Difficulty to State
- [ ] Add 'difficulty' property to gameState
- [ ] Add 'dealerPersonality' object to gameState
- [ ] Include all personality properties:
  - [ ] bluffFrequency
  - [ ] aggression
  - [ ] callDownFrequency
  - [ ] foldFrequency
  - [ ] slowplayFrequency
  - [ ] adaptability
- [ ] Set default values

#### Step 2: setDifficulty() Function
- [ ] Create function that accepts 'level' parameter
- [ ] Define 'easy' preset (passive, predictable)
- [ ] Define 'medium' preset (balanced)
- [ ] Define 'hard' preset (aggressive, smart)
- [ ] Define 'expert' preset (master level)
- [ ] Set gameState.dealerPersonality to chosen preset
- [ ] Add console.log to confirm
- [ ] Test switching between difficulties

#### Step 3: gatherGameContext() Function
- [ ] Calculate toCall amount
- [ ] Get pot size
- [ ] Calculate pot odds
- [ ] Get dealer chips
- [ ] Get player chips
- [ ] Get betting round (gamePhase)
- [ ] Get player bet amount
- [ ] Determine dealer position
- [ ] Get hand number
- [ ] Return object with all properties
- [ ] Test in different game phases

#### Step 4: calculateActionWeights() Function
- [ ] Create weights object (fold, check, call, bet, raise, allIn)
- [ ] Get hand category from handEval
- [ ] Set base weights for 'monster' hands
- [ ] Set base weights for 'strong' hands
- [ ] Set base weights for 'made-hand' hands
- [ ] Set base weights for 'high-card' hands
- [ ] Set base weights for 'weak' hands
- [ ] Adjust weights if combo draw
- [ ] Adjust weights if single draw
- [ ] Adjust for dangerous board texture
- [ ] Adjust for good pot odds
- [ ] Set impossible actions to 0 (can't call/fold when free)
- [ ] Handle short stack situations
- [ ] Return weights object
- [ ] Test with different hand categories

#### Step 5: adjustWeightsForDifficulty() Function
- [ ] Get personality properties
- [ ] Multiply bet/raise by aggression factor
- [ ] Multiply call inversely by aggression
- [ ] Multiply fold by fold frequency
- [ ] Apply call down frequency to made hands
- [ ] Implement slowplay logic for monsters
- [ ] Return adjusted weights
- [ ] Test with easy difficulty (should fold more)
- [ ] Test with expert difficulty (should be aggressive)

#### Step 6: selectWeightedAction() Function
- [ ] Sum all weight values
- [ ] Return 'fold' if total = 0
- [ ] Generate random number between 0 and total
- [ ] Loop through weights
- [ ] Subtract each weight from random
- [ ] Return action when random <= 0
- [ ] Test multiple times to verify randomness
- [ ] Verify it favors higher weights

#### Step 7: intelligentDealerAction() Function
- [ ] Call gatherGameContext()
- [ ] Call evaluateHandStrength()
- [ ] Call calculateActionWeights()
- [ ] Call adjustWeightsForDifficulty()
- [ ] Call selectWeightedAction()
- [ ] Call executeAction()
- [ ] Add console logs for debugging
- [ ] Test in actual game

#### Step 8: executeAction() Function
- [ ] Accept action, handEval, context parameters
- [ ] Handle 'fold' action
- [ ] Handle 'check' action
- [ ] Handle 'call' action
- [ ] Handle 'bet' action (calculate size)
- [ ] Handle 'raise' action (calculate size)
- [ ] Handle 'allIn' action
- [ ] Test each action type

#### Step 9: Bet Sizing Functions
- [ ] Create calculateBetSize() function
- [ ] Use pot size as base
- [ ] Vary multiplier by hand category
- [ ] Add randomness for unpredictability
- [ ] Enforce minimum (big blind)
- [ ] Enforce maximum (dealer chips)
- [ ] Create calculateRaiseSize() function
- [ ] Base on pot size + amount to call
- [ ] Vary by hand category
- [ ] Enforce min/max constraints
- [ ] Test with different pot sizes

#### Step 10: Replace Old AI
- [ ] Find where old dealerAction() is called
- [ ] Replace with intelligentDealerAction()
- [ ] Remove old simple AI code
- [ ] Test entire game flow
- [ ] Verify AI makes smart decisions

#### Testing & Balancing
- [ ] Play against easy mode (should win often)
- [ ] Play against medium mode (should be competitive)
- [ ] Play against hard mode (should be challenging)
- [ ] Play against expert mode (should be very difficult)
- [ ] Adjust personality values if needed
- [ ] Verify no crashes
- [ ] Check that all actions work

#### UI Enhancement
- [ ] Add difficulty selector buttons
- [ ] Style buttons distinctively
- [ ] Highlight active difficulty
- [ ] Allow changing mid-game
- [ ] Display current difficulty
- [ ] Test on different devices

---

### Exercise 3: Opponent Modeling & Adaptation

#### Step 1: Add Tracking to State
- [ ] Add 'playerStats' object to gameState
- [ ] Include handsPlayed counter
- [ ] Include totalBets counter
- [ ] Include totalRaises counter
- [ ] Include totalCalls counter
- [ ] Include totalFolds counter
- [ ] Include totalChecks counter
- [ ] Initialize all to 0
- [ ] Add 'playerModel' object
- [ ] Include 'type' (default 'unknown')
- [ ] Include 'confidence' (default 0)
- [ ] Include 'tendencies' object

#### Step 2: trackPlayerAction() Function
- [ ] Create function accepting action and amount
- [ ] Handle 'bet' action (increment totalBets)
- [ ] Handle 'raise' action (increment totalRaises)
- [ ] Handle 'call' action (increment totalCalls)
- [ ] Handle 'fold' action (increment totalFolds)
- [ ] Handle 'check' action (increment totalChecks)
- [ ] Test by calling with different actions
- [ ] Verify counters update

#### Step 3: Integrate Tracking
- [ ] Add trackPlayerAction() to playerBet()
- [ ] Add trackPlayerAction() to playerRaise()
- [ ] Add trackPlayerAction() to playerCall()
- [ ] Add trackPlayerAction() to playerFold()
- [ ] Add trackPlayerAction() to playerCheck()
- [ ] Add trackPlayerAction() to playerAllIn()
- [ ] Play test game
- [ ] Verify stats accumulate

#### Step 4: updatePlayerModel() Function
- [ ] Get handsPlayed from stats
- [ ] Return early if < 5 hands
- [ ] Calculate aggressionFactor
- [ ] Calculate foldFrequency
- [ ] Calculate callFrequency
- [ ] Update playerModel.tendencies
- [ ] Classify as 'aggressive-loose' if:
  - [ ] Aggression > 0.6 AND fold < 0.3
- [ ] Classify as 'aggressive-tight' if:
  - [ ] Aggression > 0.6 AND fold > 0.4
- [ ] Classify as 'passive-loose' if:
  - [ ] Aggression < 0.3 AND call > 0.4
- [ ] Classify as 'passive-tight' if:
  - [ ] Aggression < 0.3 AND fold > 0.4
- [ ] Default to 'balanced' otherwise
- [ ] Calculate confidence (handsPlayed / 20, max 1.0)
- [ ] Update playerModel with type and confidence
- [ ] Add console.log for classification
- [ ] Test by playing different styles

#### Step 5: Periodic Adaptation
- [ ] Check if handNumber % 5 === 0
- [ ] Check if handsPlayed >= 5
- [ ] Call updatePlayerModel()
- [ ] Increment handsPlayed at end of each hand
- [ ] Test that model updates every 5 hands

#### Step 6: adjustStrategyForOpponent() Function
- [ ] Accept weights and handEval parameters
- [ ] Get playerModel
- [ ] Return early if confidence < 0.2
- [ ] Get confidence and type
- [ ] Handle 'aggressive-loose' counter-strategy:
  - [ ] Increase call weight (call them down)
  - [ ] Decrease fold weight (don't fold as much)
  - [ ] If strong/monster hand, increase check/call (trap)
- [ ] Handle 'aggressive-tight' counter-strategy:
  - [ ] Increase fold weight (respect their bets)
  - [ ] Decrease call weight (don't call light)
  - [ ] If weak/high-card, fold even more
- [ ] Handle 'passive-loose' counter-strategy:
  - [ ] Increase bet/raise weight (value bet more)
  - [ ] If weak/high-card, decrease bet (don't bluff)
  - [ ] Increase fold weight (they won't fold)
- [ ] Handle 'passive-tight' counter-strategy:
  - [ ] Increase bet weight (bluff more)
  - [ ] If weak/high-card, bluff more
  - [ ] If they bet, fold more (only bet strong)
- [ ] Return adjusted weights
- [ ] Multiply adjustments by confidence
- [ ] Test against each player type

#### Step 7: Integrate Adaptation
- [ ] Add adjustStrategyForOpponent() to intelligentDealerAction()
- [ ] Call after adjustWeightsForDifficulty()
- [ ] Pass weights and handEval
- [ ] Only call if adaptability > 0
- [ ] Add console logs to show adaptation
- [ ] Test in full game

#### Testing Adaptation
- [ ] Play aggressively (bet/raise often)
- [ ] Verify AI classifies as aggressive-loose or aggressive-tight
- [ ] Watch AI start calling you down
- [ ] Play passively (call/check often)
- [ ] Verify AI classifies as passive-loose
- [ ] Watch AI value bet more, bluff less
- [ ] Play tight (fold often)
- [ ] Verify AI classifies as passive-tight or rock
- [ ] Watch AI bluff more frequently
- [ ] Test confidence building over 20 hands

#### Optional: Display AI Analysis
- [ ] Add UI element to show player type
- [ ] Display confidence percentage
- [ ] Show progress bar for confidence
- [ ] Display counter-strategy being used
- [ ] Add visual feedback when AI adapts
- [ ] Style nicely
- [ ] Test on different screen sizes

---

## 🎯 Success Criteria

### Exercise 1 Complete When:
- [ ] All helper functions work correctly
- [ ] Test cases pass
- [ ] Functions handle edge cases
- [ ] Code is clean and readable
- [ ] No crashes with unusual inputs

### Exercise 2 Complete When:
- [ ] Four difficulty levels implemented
- [ ] Each difficulty feels distinctly different
- [ ] AI makes logical decisions
- [ ] Bet sizing varies appropriately
- [ ] Easy mode is beatable
- [ ] Expert mode is genuinely challenging
- [ ] No errors during gameplay

### Exercise 3 Complete When:
- [ ] Player actions tracked accurately
- [ ] Player type classification works
- [ ] AI adapts strategy based on player type
- [ ] Confidence builds over time
- [ ] Adaptation is noticeable but not jarring
- [ ] Different play styles countered effectively
- [ ] No crashes or errors

---

## 💡 Debugging Checklist

### If AI always folds:
- [ ] Check fold weights aren't too high
- [ ] Verify difficulty multipliers
- [ ] Look at base weight calculation
- [ ] Test with console.log(weights)

### If AI is too aggressive:
- [ ] Reduce aggression values in personality
- [ ] Lower bet/raise weight multipliers
- [ ] Check that weak hands aren't betting too much

### If AI never adapts:
- [ ] Verify trackPlayerAction() is being called
- [ ] Check handsPlayed is incrementing
- [ ] Ensure updatePlayerModel() runs every 5 hands
- [ ] Check adaptability > 0

### If classification is wrong:
- [ ] Verify stat calculations (aggression, fold %)
- [ ] Check classification thresholds (0.3, 0.4, 0.6)
- [ ] Play more hands (need 5+ for classification)
- [ ] Log metrics to see actual values

### If game crashes:
- [ ] Check for division by zero
- [ ] Verify array lengths before accessing
- [ ] Check for undefined values
- [ ] Look at console for error messages

---

## 🚀 Extensions & Enhancements

### After completing all exercises, try:

#### Advanced Features:
- [ ] Add more difficulty presets (maniac, nit, etc.)
- [ ] Track more detailed statistics (bet sizing, position)
- [ ] Implement hand history review
- [ ] Add AI "tells" (thinking animation)
- [ ] Create custom difficulty builder

#### Visual Enhancements:
- [ ] Show AI's "thought process"
- [ ] Display probability calculations
- [ ] Add animations for AI decisions
- [ ] Show player classification visually
- [ ] Add charts for statistics

#### Machine Learning:
- [ ] Save player models between sessions
- [ ] Learn optimal counter-strategies
- [ ] Adjust based on win rate
- [ ] A/B test different approaches

---

## 📊 Time Tracking

| Exercise | Estimated | Actual | Notes |
|----------|-----------|--------|-------|
| Exercise 1 | 60-90 min | ___ min | |
| Exercise 2 | 90-120 min | ___ min | |
| Exercise 3 | 90-120 min | ___ min | |
| **Total** | **4-6 hours** | **___ hours** | |

---

## 🎓 Reflection Questions

After completing this lesson, answer these:

1. **What was the hardest part of implementing the AI?**
   - Your answer: _______________

2. **How does your AI compare to commercial poker AI?**
   - Your answer: _______________

3. **What would you add to make the AI even smarter?**
   - Your answer: _______________

4. **How could opponent modeling be used in other games?**
   - Your answer: _______________

5. **What did you learn about game AI in general?**
   - Your answer: _______________

---

## ✅ Final Checklist

Before moving to Lesson 4.11:

- [ ] All three exercises completed
- [ ] All test cases passing
- [ ] AI plays intelligently on all difficulty levels
- [ ] Adaptation system working
- [ ] No crashes or errors
- [ ] Code is clean and commented
- [ ] You understand how the AI makes decisions
- [ ] You can explain opponent modeling to someone else

---

**Congratulations on building intelligent poker AI!** 🤖🏆

This is one of the most advanced lessons in the module. You've learned concepts used in professional game development and AI engineering!

**Next:** Lesson 4.11 - Win/Lose Conditions & Game Over
