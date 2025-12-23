# Parent Guide – Lesson 4.13 (Instructions & Tutorial Screen)

## Purpose
This lesson teaches students how to make their game approachable by adding a clear tutorial. It covers user experience fundamentals (onboarding, progressive disclosure) and accessibility best practices.

## Learning Objectives Reinforced
- Planning user-facing explanatory content
- Managing UI state (open/close, step progression)
- Accessibility (focus management, ARIA roles, keyboard support)
- Local persistence (remembering tutorial completion)

## Discussion Starters
1. Why does a good tutorial improve a game's success?
2. What information is most helpful for brand-new players?
3. How can the game remain fun while providing guidance?
4. Why should players be able to skip or revisit tutorials?

## Key Vocabulary
- Onboarding: The initial experience guiding a new user.
- Progressive Disclosure: Showing information gradually.
- Focus Trap: Keeping keyboard focus inside a modal dialog.
- Persistence: Saving settings across sessions.

## What to Watch For
- Student modal opens but cannot be closed (missing escape or close button handler).
- Focus not trapped (TAB moves into background page).
- Missing ARIA attributes; screen reader may not announce dialog.
- Tutorial auto-opens every time (forgot to set completion flag).

## Encouraging Deeper Thinking
Ask students: "If you added one more advanced tutorial step for experienced players, what would it contain?" or "How would you explain pot odds in one sentence?"

## Extension Paths
- Multi-language tutorial (JSON data and selection dropdown)
- Animated transitions with reduced motion detection
- A guided first game mode with dynamic highlights

## Supporting Struggling Students
- Provide a simple base modal snippet they can adapt.
- Encourage building one feature at a time (open/close, then steps, then persistence).
- Have them test with only keyboard interaction to verify accessibility.

## Wrap-Up Reflection Prompt
"List three things a good tutorial does for a player besides explaining rules." (Possible answers: reduces anxiety, speeds mastery, prevents early quitting.)

Use this guide to facilitate discussion and ensure the feature supports all learners.
