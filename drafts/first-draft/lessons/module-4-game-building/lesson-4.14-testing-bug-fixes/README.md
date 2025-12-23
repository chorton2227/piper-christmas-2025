# Lesson 4.14 – Testing & Bug Fixes

## Goal
Establish a lightweight testing and QA workflow for the poker game: identify, reproduce, categorize, and fix defects while adding automated checks to prevent regressions.

## Why It Matters
Games hide complex state transitions (betting rounds, folds, all-ins). Manual play-through isn't enough—edge cases appear late or under rare conditions. A repeatable test suite and clear bug log accelerate debugging and improve reliability.

## Outcomes
Students will:
- Build a mini test runner for core logic functions
- Log and categorize bugs (severity, status, steps to reproduce)
- Add simulation tests for multi-hand scenarios
- Implement regression tests after fixing a bug
- Practice writing clear test names & assertions

## Key Concepts
- Deterministic vs. Random: making random operations testable (injectable RNG)
- Assertions: comparing expected vs. actual state
- Regression: a previously fixed bug reappearing
- Severity vs. Priority: impact vs. order of fixing
- Test isolation: avoiding state bleed between tests

## Testing Targets
- Deck creation (52 unique cards, shuffle randomness)
- Hand evaluation ranking correctness (baseline rules)
- Betting round progression (phases advance correctly)
- Pot settlement (single winner vs. tie split)
- Fold logic (hand ends early with correct winner)
- All-in sequence (buttons disabled, phases reveal automatically)

## Implementation Phases
1. Bug Log & Categories
2. Mini Assertion Library & Runner
3. Core Unit Tests (pure functions)
4. State Simulation (integration tests)
5. Regression Cases for previously found issues
6. Optional Coverage Approximation (track executed lines or branches heuristically)

## Severity Guide
- Critical: crashes, freezes, corrupts data
- High: incorrect chip transfers, wrong winner
- Medium: UI inconsistency, missing disable state
- Low: cosmetic, minor layout shift

## Success Criteria
- Running the test page prints pass/fail summary
- Failing tests clearly list expected vs. actual details
- Each fixed bug adds at least one new test
- No unintentional global state leaks between tests

## Extension Ideas
- Snapshot diff for gameState after actions
- Mutation test concept: intentionally alter logic to confirm tests fail
- Timing tests (ensure animations respect reduced motion)

Proceed to the exercises to build each piece incrementally.
