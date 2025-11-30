# Final Draft Plan

Overview:
We will rebuild the curriculum from scratch, referencing the archived first draft (`drafts/first-draft/`). The final draft emphasizes consistent UX, accessible pacing, and reusable assets.

Module Priorities:
- Module 4 – Game Building: Start here; finalize polished Hold’em demo, extract shared UI/CSS, and create testing harnesses.
- Module 3 – JavaScript: Emphasize state management, DOM patterns, and event handling.
- Module 2 – CSS: Centralize variables, themes, and motion guidelines.
- Module 1 – HTML: Tighten semantics, structure, and parent guides.

Migration Guidelines:
- Reuse concepts/examples where strong; rewrite where clarity or accessibility improves learning.
- Unify lesson structure: `README.md`, `examples/`, `practice/`, `resources/`, `answer-key/`, `student-workspace/`.
- Add reduced-motion and message-speed controls where animations or overlays are used.

Immediate Actions:
1. Start Module 1: scaffold standardized lesson templates and refine semantics.
2. Define cross-module style guide (HTML structure, CSS variables, motion rules).
3. Validate pacing (message speeds) and accessibility in interactive lessons.
4. Prepare Module 5: outline deployment/tooling flow and portfolio deliverables.

Anticipated Changes Starting at Module 1:
- Tighten semantics and ARIA where useful; prefer native elements.
- Introduce a consistent file/folder template per lesson.
- Add parent guides and cheat sheets early for continuity.
- Establish reduced-motion defaults and message-speed controls from the outset.

Mini Projects (Outline)
- Module 1: Multi-page semantic site (Home/About/Contact) with nav, images w/ alt, and contact form. Focus: structure and semantics.
- Module 2: Theming + responsive layout for the Module 1 site using CSS variables, flex/grid, and a dark mode toggle. Focus: styling, responsiveness, accessibility.
- Module 3: Interactivity add-ons — form validation, FAQ accordion or image gallery, and nav state. Focus: DOM, events, state.
 
Shared Base Assets
- Create a `shared/` folder for a base stylesheet (`base.css`) with CSS variables (colors, spacing), typography defaults, and motion rules.
- Provide JS helpers for message-speed controls and reduced-motion detection where relevant.
- Reuse lesson templates and checklists across modules.
