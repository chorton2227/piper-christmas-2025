# Exercise 3 – Integration Simulation Tests

## Objective
Automate multiple simulated hands to detect edge cases (early folds, all-in sequences, pot settlement).

## Requirements
- Create simulation function that runs N hands
- Mock or stub randomness (deterministic deck or action sequence)
- Verify final pot distribution matches expected
- Detect unexpected stuck phase (phase never reaches showdown)
- Log anomalies to a results panel

## Steps
1. Add `simulateHands(count)` function
2. For each hand: initialize gameState, perform scripted actions (e.g., player check, dealer bet, player call, etc.)
3. Ensure phases advance correctly; increment counters
4. Track anomalies: duplicate pot award, phase stuck > X steps
5. After run, output summary stats (hands run, anomalies found)

## Example Anomaly Record
```js
anomalies.push({ type:'stuck-phase', handNumber:i, phase:gameState.phase });
```

## Validation Checklist
- Simulation runs designated number of hands
- Summary outputs counts
- Anomalies list includes details

## Stretch
Randomize action choices within safe bounds and gather distribution of outcomes (fold %, all-in %, average pot).

Proceed to Exercise 4 for coverage approximation.
