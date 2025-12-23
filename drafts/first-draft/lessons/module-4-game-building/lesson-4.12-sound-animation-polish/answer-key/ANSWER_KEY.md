# Answer Key – Lesson 4.12 Sound & Animation Polish

## Audio Implementation Reference
```js
const audioManager = {
  sounds:{}, muted:false, volume:0.7,
  preload(list){list.forEach(({key,src})=>{const a=new Audio(src); a.volume=this.volume; this.sounds[key]=a;});},
  play(key){ if(this.muted) return; const a=this.sounds[key]; if(!a) return; a.currentTime=0; a.play(); },
  playVariant(key){ if(this.muted) return; const a=this.sounds[key]; if(!a) return; a.playbackRate = 0.95 + Math.random()*0.1; a.currentTime=0; a.play(); },
  setVolume(v){ this.volume=v; Object.values(this.sounds).forEach(a=>a.volume=v); localStorage.setItem('pokerVol', v); },
  toggleMute(){ this.muted=!this.muted; localStorage.setItem('pokerMute', this.muted?'1':'0'); }
};
```
Initialize after first user interaction to satisfy autoplay policies.

## Reduced Motion Pattern
```js
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reduceMotion) document.body.classList.add('reduce-motion');
```
CSS disables keyframes if `.reduce-motion` present.

## Card Deal Animation
```css
.card.deal {animation: popIn .4s ease forwards; opacity:0;}
@keyframes popIn {0%{transform:translateY(-20px) scale(.6);opacity:0;}100%{transform:translateY(0) scale(1);opacity:1;}}
```
Apply stagger:
```js
cards.forEach((el,i)=>{ setTimeout(()=> el.classList.add('deal'), i*120); });
```

## Chip Travel
```js
function animatePotAward(toSelector, amount, done){
  const chip = document.getElementById('chip-travel');
  chip.textContent = amount;
  chip.style.display='block';
  const start = chip.getBoundingClientRect();
  const target = document.querySelector(toSelector).getBoundingClientRect();
  const dx = target.left - start.left;
  const dy = target.top - start.top;
  chip.style.transform = `translate(${dx}px,${dy}px)`;
  chip.addEventListener('transitionend', ()=>{ chip.style.display='none'; done(); }, {once:true});
}
```
CSS:
```css
#chip-travel {position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); transition:transform .7s cubic-bezier(.22,.8,.32,1); background:#FFD700; padding:10px 18px; border-radius:40px; color:#000; font-weight:700;}
```

## Animation Queue
```js
const animQueue=[]; let running=false;
function enqueue(fn){ animQueue.push(fn); runNext(); }
function runNext(){ if(running||!animQueue.length) return; running=true; const fn=animQueue.shift(); fn(()=>{ running=false; runNext(); }); }
```
Sequence: enqueue(dealCards) → enqueue(moveChips) → enqueue(showOverlay)

## Overlay Fade
```css
.overlay {animation:fadeScale .4s ease forwards; opacity:0; transform:scale(.6);} 
@keyframes fadeScale {to{opacity:1; transform:scale(1);}}
```

## Accessibility Considerations
| Feature | Solution |
|---------|----------|
| Mute | Persistent toggle + keyboard shortcut (M) |
| Volume | Range input with label & ARIA description |
| Reduced Motion | Class-based disable of keyframes |
| High Contrast | Avoid very low contrast neon-only effects |

## Performance Tips
- Reuse a single traveling chip element.
- Batch DOM writes (adding classes after building fragments).
- Avoid `setInterval` for animations; rely on CSS & `setTimeout` for staging.

## Common Mistakes & Fixes
| Mistake | Fix |
|---------|-----|
| Audio plays twice rapidly | Add minimal 100ms throttle per key |
| Animations run for hidden elements | Remove classes on cleanup |
| Volume slider drifts after mute toggle | Do not overwrite stored volume when muted |
| Janky chip movement | Ensure element positioned before measuring rect |

## Grading Rubric (Summary)
| Category | Points |
|----------|--------|
| Audio Manager Functionality | 25 |
| Animation Implementation & Restraint | 25 |
| Accessibility (mute + reduced motion) | 20 |
| Performance / No Jank | 15 |
| Code Organization & Reuse | 15 |
| Total | 100 |

Focus feedback: Encourage students to articulate WHY each added effect improves clarity.
