# Exercise 3 – Advanced Stats & Achievements

## Goal
Add higher-order insights and lightweight achievement tracking to deepen player reflection.

## Requirements
- Track average pot size (totalPot / handsPlayed).
- Track percentage of hands won.
- Maintain an array of achievement objects `{ id, name, unlockedAtHand }`.
- Unlock examples: First Win, Win 3 In A Row, First All-In Victory, Comeback (win after being <300 chips).

## Instructions
1. Add new fields to `sessionStats`.
2. Create `checkAchievements(context)` called at end of each hand.
3. When an achievement unlocks, push object & log a special message.
4. Display achievements in sidebar.

## Stretch
Persist achievements using `localStorage`.

## Test Checklist
- [ ] Achievements unlock only once.
- [ ] Percent calculations correct after ties.
- [ ] Average pot recalculates each hand.

## Reflection
How can achievements encourage experimentation instead of only optimizing to win quickly?
