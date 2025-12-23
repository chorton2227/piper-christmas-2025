# Answer Key – Lesson 4.11 Win / Lose Conditions

## Core Implementation Steps
1. Initialize `sessionStats` and `gameState.gameOver`.
2. Update stats ONLY in `endHand(winner)`.
3. Capture `potBefore` prior to distribution for biggestPot.
4. Compute netChange after awarding chips.
5. Call `checkGameOver()` as final step of hand.
6. Guard game over logic: `if (gameState.gameOver) return;`.
7. Build overlay content and disable inputs.

## Reference `sessionStats` Structure
```js
const sessionStats = {
  handsPlayed: 0,
  handsWon: 0,
  handsLost: 0,
  folds: 0,
  allIns: 0,
  biggestPot: 0,
  netChange: 0,
  startingBankroll: 1000,
  currentWinStreak: 0,
  longestWinStreak: 0,
  achievements: []
};
```

## Win Streak Logic
```js
if (winner === 'player') {
  sessionStats.currentWinStreak++;
  if (sessionStats.currentWinStreak > sessionStats.longestWinStreak)
    sessionStats.longestWinStreak = sessionStats.currentWinStreak;
} else if (winner === 'dealer') {
  sessionStats.currentWinStreak = 0;
}
```

## Achievement Check Sample
```js
function checkAchievements(context) {
  const a = sessionStats.achievements;
  const has = id => a.some(x=>x.id===id);
  if (!has('first-win') && sessionStats.handsWon >= 1) a.push({id:'first-win', name:'First Win', unlockedAt: sessionStats.handsPlayed});
  if (!has('hot-streak-3') && sessionStats.longestWinStreak >= 3) a.push({id:'hot-streak-3', name:'3-Win Streak', unlockedAt: sessionStats.handsPlayed});
  if (!has('all-in-hero') && context.lastHandPlayerAllIn && context.lastHandWinner==='player') a.push({id:'all-in-hero', name:'All-In Hero', unlockedAt: sessionStats.handsPlayed});
  if (!has('comeback') && context.lowestPlayerChips < 300 && context.lastHandWinner==='player') a.push({id:'comeback', name:'Comeback Victory', unlockedAt: sessionStats.handsPlayed});
}
```

## Game Over Check
```js
function checkGameOver() {
  if (gameState.gameOver) return;
  if (gameState.playerChips <= 0) return triggerGameOver('defeat');
  if (gameState.dealerChips <= 0) return triggerGameOver('victory');
  const TARGET = 2000;
  if (gameState.playerChips >= TARGET) return triggerGameOver('victory');
}
```

## Overlay Skeleton
```html
<div id="overlay" class="hidden"></div>
```
```css
#overlay {position:fixed; inset:0; background:rgba(0,0,0,0.8); display:flex; align-items:center; justify-content:center; z-index:999;}
#overlay .panel {background:#1e1e2f; padding:40px; border-radius:20px; width:420px; animation:pop 0.4s ease; border:2px solid #FFD700;}
@keyframes pop {0%{transform:scale(.6); opacity:0;}100%{transform:scale(1); opacity:1;}}
```
```js
function triggerGameOver(result) {
  gameState.gameOver = true;
  const o = document.getElementById('overlay');
  o.classList.remove('hidden');
  const stats = sessionStats;
  const emoji = result==='victory'?'🏆':'💔';
  o.innerHTML = `<div class="panel">
    <h1>${emoji} ${result.toUpperCase()}</h1>
    <p>${result==='victory'?'Great run!':'Every loss teaches a pattern.'}</p>
    <ul class="stats">
      <li>Hands Played: ${stats.handsPlayed}</li>
      <li>Hands Won: ${stats.handsWon}</li>
      <li>Win %: ${(stats.handsWon/Math.max(1,stats.handsPlayed)*100).toFixed(1)}%</li>
      <li>Biggest Pot: ${stats.biggestPot}</li>
      <li>Net Change: ${stats.netChange}</li>
      <li>Longest Streak: ${stats.longestWinStreak}</li>
    </ul>
    <div class="achievements">${stats.achievements.map(a=>`<span class="badge">${a.name}</span>`).join('')}</div>
    <button onclick="resetSession(true)">Play Again (Full Reset)</button>
    <button onclick="resetSession(false)">Reset Chips (Keep Stats)</button>
  </div>`;
  disableActionButtons();
}
```

## Reset Logic
```js
function resetSession(full) {
  if (full) {
    Object.assign(sessionStats, {handsPlayed:0,handsWon:0,handsLost:0,folds:0,allIns:0,biggestPot:0,netChange:0,currentWinStreak:0,longestWinStreak:0,achievements:[], startingBankroll:1000});
  }
  gameState.playerChips = 1000;
  gameState.dealerChips = 1000;
  gameState.gameOver = false;
  document.getElementById('overlay').classList.add('hidden');
  startNewHand();
  enableActionButtons();
  updateStatsUI();
}
```

## Common Mistakes
| Mistake | Fix |
|---------|-----|
| Forgetting to guard duplicate game over | Add `if (gameState.gameOver) return;` at start |
| Incorrect win % (includes ties) | Exclude ties from numerator and denominator decision or clarify formula |
| biggestPot updated after awarding | Capture pot in a local var first |
| Achievements unlock multiple times | Check presence before push |

## Grading Rubric (Summary)
| Category | Points |
|----------|--------|
| Accurate terminal condition detection | 30 |
| Stats correctness (all fields) | 40 |
| Overlay UI clarity & accessibility | 20 |
| Achievement logic (>=2 implemented) | 10 |
| Total | 100 |

Encourage reflection: Students should write one sentence on how stats influence next strategy.
