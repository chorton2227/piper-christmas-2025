# Exercise 3 – Persistence & Tooltips

## Objective
Store a flag so the tutorial auto-opens only on the user's first visit, and add tooltips to key action buttons that summarize their function.

## Requirements
- On load: if `localStorage.getItem('hasSeenTutorial') !== '1'`, auto-open tutorial.
- On tutorial finish: set `localStorage.setItem('hasSeenTutorial','1')`.
- Add a small tooltip system (`data-tooltip` attributes + positioned element on hover/focus).
- Tooltips must be dismissible and accessible: appear on `focus` and `mouseenter`, hide on `blur` and `mouseleave`.
- Associate tooltip text with button via `aria-describedby` or `aria-label`.
- Provide a way in Settings or Help to "Reset Tutorial" (clear flag).

## Steps
1. Detection logic in initialization function.
2. Finish button sets flag.
3. Tooltip module: find all `[data-tooltip]` elements, create a single floating tooltip container and reuse it.
4. Position: calculate bounding rect, adjust for viewport edges.
5. Accessibility: ensure tooltip text is available (use `role="tooltip"`).

## Example Tooltip Initialization (Pseudo)
```js
function initTooltips(){
  const tip = document.createElement('div');
  tip.id='tooltip';
  tip.role='tooltip';
  document.body.appendChild(tip);
  let active=null;
  document.querySelectorAll('[data-tooltip]').forEach(el=>{
    el.addEventListener('focus', ()=>showTip(el));
    el.addEventListener('mouseenter', ()=>showTip(el));
    ['blur','mouseleave'].forEach(evt=>el.addEventListener(evt, hideTip));
  });
  function showTip(el){ active=el; tip.textContent=el.getAttribute('data-tooltip'); /* position logic */ }
  function hideTip(){ if(active){ active=null; tip.style.opacity=0; }
  }
}
```

## Validation Checklist
- Tutorial auto-opens on first visit only.
- Clearing flag (via button) re-enables auto-open.
- Tooltips appear on hover & keyboard focus; disappear correctly.
- Tooltip doesn't obstruct button or go off-screen.

## Stretch
Store counts of tooltip uses; show advanced tips once the basic ones have been viewed.

Proceed to Exercise 4 for the guided mode challenge.
