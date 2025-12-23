# Student Workspace – Lesson 4.13 (Instructions & Tutorial Screen)

## Goal
Add a helpful tutorial overlay that explains game phases, player actions, and basic strategy. Include persistence so it only auto-opens once.

## Checklist
- [ ] Modal HTML structure (overlay + dialog)
- [ ] Open/close logic and Help button
- [ ] Focus trap & ESC close
- [ ] Multi-step tutorial data array
- [ ] Step navigation (prev/next + progress indicator)
- [ ] Auto-open on first visit only (localStorage flag)
- [ ] Tooltips for action buttons
- [ ] Reset tutorial button
- [ ] (Optional) Guided Mode prompting first hand

## Suggested Order
1. Basic modal shell
2. Step system
3. Persistence
4. Tooltips
5. Guided Mode (challenge)

## Tips
- Keep each step short; avoid text walls.
- Test purely with keyboard.
- Use `aria-current="step"` on the active dot.
- Provide an obvious close button.

## Stretch Ideas
- Animation for step transitions (respect reduced motion)
- Dark/light theme adapt
- Localization support (extract text to object)

Start small and build up! Re-open the tutorial as you test changes frequently.
