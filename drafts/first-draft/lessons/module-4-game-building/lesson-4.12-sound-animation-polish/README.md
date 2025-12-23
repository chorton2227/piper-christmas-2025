# Lesson 4.12 – Sound & Animation Polish

## Overview
Students transform raw logic into a more immersive experience by layering sound effects and subtle animations tied to game events. Focus: feedback timing, restraint (not overwhelming), and accessibility.

## Learning Goals
- Add event-driven audio (bet, fold, win, shuffle, deal)
- Use CSS transitions & keyframes for card reveals and chip movements
- Implement a lightweight animation queue to avoid overlapping chaos
- Respect accessibility: volume controls, mute toggle, prefers-reduced-motion
- Performance awareness (avoid layout thrash & massive repaint loops)

## Core Principles
| Principle | Explanation |
|-----------|------------|
| Feedback Speed | Audio/visual response within ~100ms feels instant |
| Consistency | Same action → same/a variant feedback |
| Hierarchy | Big events (win hand) > small events (check) |
| Restraint | Less is more; avoid constant pulsing |
| Accessibility | Player choice matters (mute & motion reduction) |

## Feature Checklist
- [ ] `audioManager` with preload & playByKey
- [ ] Mute / volume slider UI
- [ ] prefers-reduced-motion detection
- [ ] Card deal animation (staggered)
- [ ] Chip move animation when pot awarded
- [ ] Win/lose overlay fade with scale
- [ ] Button press micro-interaction (scale / shadow)

## Audio Manager Sketch
```js
const audioManager = {
  sounds: {},
  muted: false,
  volume: 0.7,
  preload(list) {
    list.forEach(({key, src}) => {
      const a = new Audio(src);
      a.volume = this.volume;
      this.sounds[key] = a;
    });
  },
  play(key) {
    if (this.muted) return;
    const s = this.sounds[key];
    if (s) { s.currentTime = 0; s.play(); }
  },
  setVolume(v){ this.volume = v; Object.values(this.sounds).forEach(a=>a.volume=v); }
};
```

## Animation Queue Concept
```js
const animQueue = [];
let animRunning = false;
function enqueueAnim(fn){ animQueue.push(fn); runNext(); }
function runNext(){ if(animRunning || animQueue.length===0) return; animRunning = true; const fn=animQueue.shift(); fn(()=>{ animRunning=false; runNext(); }); }
```
Use to sequence: deal → reveal → chip slide → overlay.

## CSS Snippets
```css
.card.deal {animation: popIn .4s ease forwards; opacity:0;}
@keyframes popIn {0%{transform:translateY(-20px) scale(.6); opacity:0;}100%{transform:translateY(0) scale(1); opacity:1;}}
.chip-slide {transition: transform .6s cubic-bezier(.22,.8,.32,1);}
```

## prefers-reduced-motion
```js
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reduceMotion) { /* disable non-essential animations */ }
```

## Edge Cases
1. Rapid multi-click causing overlapping audio – solution: debounce or disable buttons mid-animation.
2. Long animations delaying next hand – cap durations & use queue.
3. Muted state not persisting – store in `localStorage`.
4. Audio load delay first play – preload early after page load.
5. Reduced motion users still get heavy flashing – ensure conditional CSS class disables keyframes.

## Step-by-Step Implementation
1. Create `/sounds/` folder, gather small MP3/OGG assets.
2. Implement `audioManager` and preload on startup.
3. Add `play()` calls in key game events: shuffle, deal flop, bet, win.
4. Wrap card creation with animation classes.
5. Add chip pot movement using absolute positioning container.
6. Create mute & volume controls, wire events.
7. Add `reduceMotion` check to skip animation classes.
8. Test sequence of: bet → raise → win.

## Practice Exercises
See `practice/` folder.

## Instructor Tips
- Encourage students to choose 2–3 meaningful animations first.
- Challenge them: "What feedback helps the player learn?"

## Extension Ideas
- Dynamic sound layering (crowd cheer intensity by pot size)
- Particle burst on rare achievements
- Theme packs (retro, sci-fi, fantasy) swapping sound/visual sets

Next Lesson: Instructions Screen (4.13) adds an onboarding/tutorial layer.
