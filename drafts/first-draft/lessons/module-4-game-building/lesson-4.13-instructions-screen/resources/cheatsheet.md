# Tutorial & Instructions Cheatsheet

## Core Elements
- Modal Container: `role="dialog" aria-modal="true"`
- Labeling: `aria-labelledby` (title), optional `aria-describedby` (summary)
- Focus Trap: Cycle focusable elements; return focus on close
- Escape Close: Keydown listener
- Auto-Open Control: localStorage flag `hasSeenTutorial`

## Step Data Structure
```js
const tutorialSteps = [
  { id:'intro', title:'Welcome', html:'<p>Overview...</p>' },
  { id:'actions', title:'Player Actions', html:'<ul>...</ul>' },
  { id:'phases', title:'Hand Phases', html:'<p>Pre-Flop → ...</p>' }
];
```

## Progress Indicators
- Bar: width = `(index+1)/steps * 100%`
- Dots: `aria-current="step"` on active

## Tooltips
- Attribute: `data-tooltip="Check means no bet."`
- Accessible Container: `role="tooltip"`
- Show on `focus`/`mouseenter`; hide on `blur`/`mouseleave`

## Persistence
```js
if(localStorage.getItem('hasSeenTutorial')!=='1') openTutorial();
// On finish:
localStorage.setItem('hasSeenTutorial','1');
```

## Guided Mode Hooks
- `guidedMode` boolean
- `updateGuidedState(phase)` to set prompt
- Highlight class: `.highlight { outline: 3px solid #ffc107; animation: pulse 1.5s infinite; }`

## Accessibility Tips
- Avoid long paragraphs; chunk content
- Ensure color contrast for highlights
- Provide manual re-open Help button

## Escape Hatch
- Always allow closing tutorial mid-way
- Offer "Reset Tutorial" option to practice again

## Minimal Focus Trap Snippet
```js
function trapFocus(container){
  const selectors = 'a,button,input,select,textarea,[tabindex]:not([tabindex="-1"])';
  let focusables = Array.from(container.querySelectorAll(selectors));
  let first = focusables[0];
  let last = focusables[focusables.length-1];
  container.addEventListener('keydown', e=>{
    if(e.key==='Tab'){
      if(e.shiftKey && document.activeElement===first){ e.preventDefault(); last.focus(); }
      else if(!e.shiftKey && document.activeElement===last){ e.preventDefault(); first.focus(); }
    }
  });
}
```

Use this as a quick memory aid while building the tutorial feature.
