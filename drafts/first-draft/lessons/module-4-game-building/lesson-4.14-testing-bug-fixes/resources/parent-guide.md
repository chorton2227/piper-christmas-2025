# Parent Guide – Lesson 4.14 (Testing & Bug Fixes)

## Purpose
Students learn disciplined approaches to catching and preventing errors in their poker game project. The focus shifts from adding features to ensuring quality and stability.

## Learning Objectives
- Identify and categorize software bugs
- Create automated tests with assertions
- Run simulations for complex state transitions
- Document and prevent regressions

## Conversation Prompts
1. Why is a bug log helpful instead of just fixing issues immediately?
2. How does writing a test before fixing a bug help?
3. What makes a test "good" or "useful"?
4. Why should random outcomes be controlled in tests?

## Vocabulary
- Assertion: A statement that must be true for the test to pass
- Regression: A bug that reappears after being fixed
- Simulation: Automated sequence mimicking user/game actions
- Coverage: Measure of which code paths ran during tests

## Watch For
- Students skipping the failing test step and going straight to fix
- Tests that silently pass without real checks
- Global state leaking between tests (variables not reset)
- Ambiguous bug descriptions (missing reproduction steps)

## Support Tips
- Encourage short, focused tests
- Suggest seeding randomness (fixed order of deck) for predictability
- Have them explain expected vs. actual out loud

## Extension Ideas
- Visual dashboard of pass/fail trends
- Simple coverage percentage bar
- Mutation idea: purposely break a function to see if tests catch it

## Reflection Questions
"Which bug taught you the most about the game logic and why?" or "How did adding tests change your confidence in making changes?"

Use this guide to foster quality-focused thinking and reinforce systematic debugging habits.
