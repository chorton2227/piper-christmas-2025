# Exercise 2 – Card Deal Animation

## Goal
Animate cards as they are dealt using a subtle pop/slide effect without overwhelming the UI.

## Requirements
- Add CSS keyframe `popIn`.
- Cards start with `opacity:0` & transform then animate to visible.
- Stagger card animations (e.g., 120ms between cards).
- Disable animation if `prefers-reduced-motion: reduce`.

## Steps
1. Detect reduced motion preference.
2. Add class `animated-card` during creation.
3. Use `setTimeout` to stagger applying `deal` class.
4. Remove animation classes after completion (cleanup).

## Stretch
Add a slight sound pitch variation per card.

## Checklist
- [ ] All cards animate on first render.
- [ ] Community cards animate when flop/turn/river dealt.
- [ ] Reduced motion disables keyframes gracefully.

## Reflection
"What timing felt best and why?"
