# Lesson 4.13 – Instructions & Tutorial Screen

## Goal
Add an onboarding experience so new players (and parents) understand the game flow, controls, objectives, and key strategy concepts before they play. We'll build a reusable modal / overlay tutorial with progressive steps, tooltips that can re-open, and an optional "Guided First Hand" mode.

## Why It Matters
A polished game offers a gentle ramp: players shouldn't feel lost. Explaining phases (Pre‑Flop → Flop → Turn → River → Showdown), betting actions, and win conditions improves retention and confidence. Accessible instructions also support different learning styles.

## Outcomes
By the end of this lesson students will:
- Design concise instructional copy
- Implement a modal/tutorial overlay component
- Create step navigation (prev/next indicators, progress bar)
- Persist "hasSeenTutorial" state (localStorage)
- Add contextual tooltips to UI controls
- (Extension) Offer a "Guided First Hand" option that highlights actions as they become valid

## Key Concepts
- Overlay layering & focus management
- ARIA roles (`dialog`, `aria-modal`, labeling)
- State persistence & gating features
- Progressive disclosure (show only essential info first)
- Non-blocking help (re-openable via Help button / hotkey)

## Implementation Phases
1. Copy & Structure: Draft the instructional content sections
2. Modal Shell: HTML/CSS scaffold + open/close logic
3. Step System: Array of steps rendered dynamically; navigation controls
4. Persistence: localStorage flag; auto-open on first visit only
5. Tooltips: Small hover/focus hints for action buttons
6. Guided Mode (optional advanced): Sequence overlay cues during the first real hand
7. Polish & Accessibility: Focus trapping, escape key close, reduced motion handling

## Files in This Lesson
- `examples/` minimal static tutorial
- `answer-key/` full dynamic implementation with guided mode
- `practice/` exercises building up each feature incrementally
- `resources/` cheatsheet + parent guide
- `student-workspace/` starter scaffold

## Exercises Overview
1. Build the basic modal and open/close logic
2. Add multi-step navigation + progress
3. Implement persistence and tooltips
4. (Challenge) Guided First Hand highlight system

## Success Criteria
- Tutorial auto-opens only on first visit (unless manually re-opened later)
- Focus stays trapped within modal while open; ESC closes
- Each step clearly communicates one concept & shows active step indicator
- Tooltips are accessible (focusable trigger, `aria-describedby`)
- No console errors; overlay responsiveness maintained

## Strategy Tips (Content Suggestions)
- Hand Phases timeline diagram
- Action table (Check, Call, Bet/Raise, Fold, All-In) with short definitions
- Basic odds/starting hand considerations (simplified)
- Bankroll management reminder (avoid chasing losses)

## Extension Ideas
- Multi-language support (JSON translations)
- Animated walkthrough (step fades or slide transitions)
- Inline video / GIF demonstration
- "Reset Tutorial" button in settings

Proceed to the exercises and start with the modal shell. 🚀
