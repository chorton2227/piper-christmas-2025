# Exercise 2 – Build Game Over Overlay

## Goal
Create a reusable overlay (modal-style) that appears when the game ends.

## Requirements
- Full-screen semi-transparent backdrop.
- Center panel with Victory / Defeat messaging.
- Stats summary list.
- Two buttons: Play Again (reset session) & Continue Session (keep stats, just reset chips) – optional.

## Instructions
1. Add HTML container `<div id="overlay" class="hidden"></div>`.
2. Write CSS for fade-in transition and scale.
3. Implement `showGameOver(result)` that fills inner HTML.
4. Add event handlers for buttons.
5. Disable action buttons while overlay visible.

## Stretch
Animate each stat line (fade or slide).

## Test Checklist
- [ ] Overlay appears on player bust.
- [ ] Overlay appears on dealer bust.
- [ ] Overlay appears on reaching target bankroll.
- [ ] Buttons work (session resets correctly).
- [ ] No duplicate overlay if spam triggered.

## Reflection
Why are overlays useful compared to inline text messages?
