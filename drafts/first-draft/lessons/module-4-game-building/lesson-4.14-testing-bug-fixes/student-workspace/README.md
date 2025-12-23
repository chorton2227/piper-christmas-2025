# Student Workspace – Lesson 4.14 (Testing & Bug Fixes)

## Goal
Introduce a repeatable test and QA process for your poker game. Catch problems early and prevent regressions.

## Checklist
- [ ] BUG_LOG.md with sample entries
- [ ] Assertion helpers (assert, assertEqual)
- [ ] Unit test runner (outputs pass/fail summary)
- [ ] Core tests (deck size, uniqueness, evaluation ranking)
- [ ] Regression tests added after fixing any new bug
- [ ] Simulation function executing multiple hands
- [ ] Anomaly tracking (stuck phase, duplicate pot, disabled button issues)
- [ ] Coverage approximation (branch hit counters)

## Suggested Order
1. Create bug log
2. Build assertion helpers & runner
3. Add unit tests
4. Simulate integration scenarios
5. Add coverage counters

## Tips
- Keep tests small & independent
- Use clear test names (“createDeck returns 52 unique cards”)
- Always add a test for a bug before fixing it

## Stretch Ideas
- Mutation challenges
- Visual coverage bar
- Export test results to JSON

Run tests frequently as you evolve your logic.
