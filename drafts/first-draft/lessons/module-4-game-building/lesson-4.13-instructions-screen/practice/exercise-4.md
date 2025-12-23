# Exercise 4 (Challenge) – Guided First Hand Mode

## Objective
Implement an optional mode that walks the player through the first hand with contextual highlights and short prompts.

## Concept
When "Guided Mode" is active:
1. Highlight the Deal button / start area.
2. After cards dealt, highlight the player's action panel.
3. Provide a suggestion (e.g., "Try a Check first" or "Consider folding weak hands").
4. As phases progress, update prompt panel (Flop explanation, Turn/River nuances, Showdown summary).
5. End of hand: show summary message and deactivate guided mode.

## Requirements
- Toggle (checkbox or button) to enable guided mode before starting.
- Highlight effect: add a CSS class with glow/outline.
- Prompt area: dedicated `<div id="guidedPrompt" aria-live="polite">` region.
- Progress logic keyed off game phase changes.
- Ability to exit guided mode early.

## Steps
1. Add UI toggle + store `guidedMode` boolean.
2. Create `updateGuidedState(phase)` mapping phases to messages & highlight targets.
3. Inject messages into prompt area; ensure only one highlight active at a time.
4. On hand completion, clear highlight and message; unset guidedMode or allow continuation for several hands.

## Example Mapping (Pseudo)
```js
const guidedMessages = {
  'preflop': 'These are your hole cards. Evaluate strength before betting.',
  'flop': 'Now 3 community cards appear. Your hand combines hole + board.',
  'turn': 'Fourth card adds more possibilities. Reassess draws.',
  'river': 'Final card. No more betting rounds after river before showdown.',
  'showdown': 'Hands are compared. Highest ranking wins the pot.'
};
```

## Validation Checklist
- Toggle enables/disables guided prompts.
- Messages change at correct phases.
- Highlight moves to appropriate element.
- Exiting guided mode removes highlight & stops messages.

## Stretch
Add branching advice based on approximate hand strength or pot size.

After completing this challenge, integrate everything into the answer key implementation.
