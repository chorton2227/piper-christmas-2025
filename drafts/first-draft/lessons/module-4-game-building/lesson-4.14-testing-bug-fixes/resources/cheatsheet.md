# Testing & Bug Fixes Cheatsheet

## Assertion Helpers
```js
function assert(cond,msg){ if(!cond) throw new Error(msg); }
function assertEqual(a,b,msg){ if(a!==b) throw new Error(`${msg} (expected ${b}, got ${a})`); }
```

## Common Test Targets
- Deck: size 52, uniqueness
- Phases: preflop → flop → turn → river → showdown
- Pot: total equals sum of wagers; awarded once
- Fold: immediate winner, no extra dealing
- All-In: buttons disabled until showdown

## Bug Log Fields
ID | Title | Severity | Status | Steps | Expected | Actual | Date

## Severity Levels
Critical | High | Medium | Low

## Regression Workflow
1. Discover bug
2. Reproduce consistently
3. Write failing test
4. Fix bug
5. Test passes
6. Add note in bug log (Root Cause)

## Simulation Pattern
```js
for(let i=0;i<handCount;i++){
  setupHand();
  scriptedActions();
  verifyState();
}
```

## Coverage Approximation
```js
coverage.hit('branch-id'); // increment counter
```
Zero-hit branches → write tests.

## Test Naming Tips
- State result clearly: "createDeck returns 52 unique cards"
- Avoid vague names ("deck works")

## Edge Cases
- All players but one fold immediately
- Tie at showdown (split pot)
- Player all-in pre-flop; board auto-deals

## Avoid
- Tests depending on real timeouts
- Randomness without seeding/stubbing

Keep this sheet handy while building your runner and simulations.
