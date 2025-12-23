# Exercise 3 – Chip Movement & Win Overlay Animation

## Goal
Animate chips moving to the winner and show a smooth win/lose overlay.

## Requirements
- Use an absolute-positioned chip element that travels to player or dealer area.
- Use CSS transition or keyframes for movement (0.6–0.8s).
- Trigger overlay fade/scale after chips arrive.
- Prevent next hand from starting until animation completes.

## Steps
1. Create placeholder `<div id="chip-travel"></div>`.
2. Compute start/end positions with `getBoundingClientRect()`.
3. Apply transform with translate.
4. Listen for `transitionend` to trigger overlay.
5. Add overlay with result & button.

## Stretch
Scale chip slightly mid-flight (keyframes) or add particle sparkle.

## Checklist
- [ ] Movement direction correct.
- [ ] Overlay waits for animation completion.
- [ ] Multiple wins do not overlap animations.

## Reflection
"How does animation timing affect perceived responsiveness?"
