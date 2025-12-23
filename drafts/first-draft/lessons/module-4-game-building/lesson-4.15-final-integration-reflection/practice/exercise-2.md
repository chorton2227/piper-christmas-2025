# Exercise 2 – Accessibility & Performance Audit

## Objective
Perform a final review ensuring the game is accessible and performant.

## Requirements
- Keyboard-only navigation test (no mouse)
- Check color contrast (buttons, highlights)
- Verify focus indicators visible
- Confirm ARIA roles/labels on dialogs, tooltips
- Reduced motion: animations disabled properly
- Performance: avoid large unused assets; measure initial load size

## Steps
1. Tab through interface: ensure logical order
2. Use a contrast checker for key UI elements
3. Inspect tutorial dialog attributes (`role="dialog" aria-modal="true"`)
4. Disable animations with OS setting: verify fallback
5. Count total request size (Network panel)

## Validation Checklist
- All interactive elements reachable & operable via keyboard
- No contrast ratio below 4.5:1 for text
- Tooltips accessible (appear on focus)
- No excessive unused JS/CSS

## Stretch
Add `skip to game actions` hidden link at top.

Proceed to Exercise 3 for release notes & reflection artifacts.
