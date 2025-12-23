# Exercise 1 – Build the Tutorial Modal Shell

## Objective
Create a basic modal overlay that can open and close, with focus management and accessibility attributes.

## Requirements
- Add a `div` overlay with a semi-transparent backdrop.
- Inside it add a tutorial container (`role="dialog" aria-modal="true"`), heading, placeholder body text, and a close button.
- Add a "Help / Tutorial" button in the main UI that triggers open.
- Trap focus: when open, tabbing should cycle inside content; ESC closes.
- Ensure background content is visually obscured and non-interactive (use `aria-hidden` or inert pattern if supported).

## Steps
1. HTML: Add overlay markup (hidden by default with `display:none` or visually hidden class).
2. CSS: Position fixed full-screen backdrop; center dialog.
3. JS: `openTutorial()` sets visible class, stores previously focused element, moves focus to heading.
4. JS: `closeTutorial()` removes class, restores focus.
5. Focus Trap: Keydown listener for TAB cycles through focusable elements.
6. Accessibility: Provide `aria-labelledby` linking heading id to dialog.
7. ESC Handling: Keydown listener closes on `Escape`.

## Starter Snippet (Pseudo)
```html
<button id="helpBtn">Help</button>
<div id="tutorialOverlay" class="overlay" hidden>
  <div class="tutorial-dialog" role="dialog" aria-modal="true" aria-labelledby="tutorialTitle">
    <h2 id="tutorialTitle">How to Play</h2>
    <p>Intro text...</p>
    <button id="closeTutorial">Close</button>
  </div>
</div>
```

## Validation Checklist
- Does clicking Help open the modal? Close button hides it?
- Is focus trapped (TAB cycles)?
- Can ESC close it?
- Does screen reader announce dialog heading?

## Stretch
Add a fade-in animation (respect `prefers-reduced-motion`).

Proceed to Exercise 2 when complete.
