# Exercise 1 – Add Session Statistics

## Goal
Create and update a `sessionStats` object that tracks the player's overall performance.

## Requirements
- Initialize stats object at game start.
- Increment handsPlayed after every hand.
- Increment handsWon / handsLost based on winner.
- Track biggestPot before distributing.
- Update netChange (playerChips - startingBankroll).

## Instructions
1. In your game file, define `sessionStats` using the provided shape.
2. In `endHand(winner)`, update counters accordingly.
3. Create `updateStatsUI()` to display stats in a sidebar.
4. Format large numbers with commas (e.g., 12,345) – write a helper.

## Stretch
Add longest win streak logic.

## Test Checklist
- [ ] Win a hand: handsWon increments.
- [ ] Lose a hand: handsLost increments.
- [ ] Tie: neither won nor lost increments, handsPlayed increments.
- [ ] Biggest pot updates only when larger.
- [ ] Net change accurate after several hands.

## Reflection
Which stat would you use to decide if your strategy is working? Why?
