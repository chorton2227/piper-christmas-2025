# Sound & Animation Cheatsheet

## Audio Event Map
Action | Sound Key | Notes
------ | --------- | -----
Deal card | `deal` | Short, soft
Bet/Raise | `chip` | Slight pitch variance
Win hand | `win` | Longer, triumphant
Lose hand | `lose` | Soft descending
Shuffle | `shuffle` | At new hand start

## CSS Guidelines
- Keep animations < 1s
- Use `transform` & `opacity` (avoid layout changes)
- Stagger with small delays (80–150ms)
- Provide `.reduce-motion` class to disable

## Reduced Motion Pattern
```js
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reduceMotion) document.body.classList.add('reduce-motion');
```
```css
.reduce-motion .animated-card {animation:none !important; opacity:1 !important;}
```

## Micro-Interaction Ideas
Element | Effect | Duration
------- | ------ | -------
Button press | scale(.94) then bounce | 160ms
Win overlay | fade + scale | 400ms
Chip travel | translate + slight rotate | 700ms
Achievement badge | slide-in from top | 300ms

## Performance Tips
- Reuse DOM nodes for chips
- Preload audio early
- Avoid large shadow animations repeatedly
- Batch DOM updates using `requestAnimationFrame`

## Audio Variation
```js
function playVariant(key){
  const a = audioManager.sounds[key];
  if(!a || audioManager.muted) return;
  a.playbackRate = 0.95 + Math.random()*0.1; // subtle pitch variety
  a.currentTime = 0; a.play();
}
```

## Common Issues
Issue | Fix
----- | ----
Sound delay first play | Preload & user interaction unlock
Animation jitter | Use `will-change: transform` sparingly
Overlapping sounds | Queue or limit via timestamp check
Memory leak (many Audio objects) | Reuse single Audio per key
