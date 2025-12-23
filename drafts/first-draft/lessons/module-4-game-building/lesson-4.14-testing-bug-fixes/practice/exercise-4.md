# Exercise 4 (Challenge) – Lightweight Coverage Approximation

## Objective
Estimate which logical branches executed during tests without a full instrumentation tool.

## Concept
Wrap key functions with counters or manually increment counters at branch points. After tests, report which branches ran.

## Requirements
- Create `coverage` object mapping branch IDs to counters
- Insert `coverage.hit('deck-shuffle-loop')` style calls in strategic spots
- After test runner finishes, list branches with hit counts; highlight zeros

## Steps
1. Define helper: `coverage.hit(id)` increments count
2. Add IDs for critical logic (hand evaluation rank detection, all-in resolution, pot award)
3. Call hits where code paths diverge
4. After tests: `Object.entries(coverage.map)` to report

## Example Helper
```js
const coverage = { map:{}, hit(id){ this.map[id] = (this.map[id]||0)+1; } };
```

## Validation Checklist
- Coverage report lists branch IDs
- Zero-hit branches flagged for needing test

## Stretch
Compute percentage: `(hitBranches / totalBranches) * 100` and show progress bar.

Add instrumentation sparingly to avoid clutter. Remove or disable in production.
