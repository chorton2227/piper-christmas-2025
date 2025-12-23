# Exercise 2 – Multi-Step Navigation & Progress

## Objective
Expand the tutorial dialog into multiple steps with Next/Prev controls and a progress indicator.

## Requirements
- Represent steps as an array of objects `{ id, title, html }` in JS.
- Dynamically render current step content when navigating.
- Provide Previous / Next buttons; disable Previous on first step; Next changes to "Finish" on last.
- Add a simple progress bar or step dots indicating current position.
- Announce step title changes (update `aria-live` region or move focus to heading each time).

## Steps
1. Create `const tutorialSteps = [...]` with at least 3 sample steps.
2. Maintain `currentStepIndex` state.
3. Render function updates inner HTML of content area and heading.
4. Progress UI: either a bar (`width = (index+1)/steps * 100%`) or a list of dots with `aria-current="step"`.
5. Event handlers for Prev/Next.
6. Optional: keyboard shortcuts (Left/Right arrows) to navigate.

## Example Step Structure
```js
const tutorialSteps = [
  { id:'intro', title:'Welcome', html:'<p>Overview of the game phases...</p>' },
  { id:'actions', title:'Player Actions', html:'<ul><li>Check</li><li>Call</li><li>Bet/Raise</li><li>Fold</li><li>All-In</li></ul>' },
  { id:'win', title:'Winning Hands', html:'<p>Showdown basics & hand ranks summary.</p>' }
];
```

## Validation Checklist
- Clicking Next updates content and progress.
- Finish (last step) closes dialog and returns focus.
- Progress bar or dots reflect accurate position.
- Heading updates are announced (test with screen reader or focus shift).

## Stretch
Animate step transitions (fade/slide) respecting reduced motion.

Move to Exercise 3 after successful navigation implementation.
