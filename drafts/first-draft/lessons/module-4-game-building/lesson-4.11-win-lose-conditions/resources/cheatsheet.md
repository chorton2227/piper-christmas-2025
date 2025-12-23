# Win / Lose Conditions Cheatsheet

## Terminal Triggers
- Player bust: `playerChips <= 0`
- Dealer bust: `dealerChips <= 0`
- Target bankroll: `playerChips >= target` OR `dealerChips >= target`

## Order of Operations (End of Hand)
1. Determine winner
2. Award pot
3. Update stats
4. Update streaks & biggest pot
5. Check achievements
6. Call `checkGameOver()`
7. If not game over: prepare next hand

## Suggested Helper Functions
| Function | Purpose |
|----------|---------|
| `updateStatsAfterHand(winner, potBeforeAward)` | Centralize stat math |
| `checkGameOver()` | Returns boolean & calls overlay if true |
| `showGameOver(result)` | Builds overlay UI |
| `resetSession(fullReset=true)` | Resets chips & optionally stats |

## Encouraging Messages
Use growth mindset:
- "Every chip lost teaches a pattern."
- "Adjust one decision next session."
- "Collect data: what action preceded losses?"

## Common Bugs & Fixes
| Problem | Fix |
|---------|-----|
| Game over triggers twice | Guard with `if (gameState.gameOver) return;` |
| Stats off by one | Increment `handsPlayed` only once inside endHand |
| Biggest pot incorrect | Capture pot BEFORE awarding |
| Streak never resets | Reset `currentWinStreak` when a loss or tie occurs |

## Achievement Ideas
ID | Condition
---|---------
`first-win` | First hand won
`hot-streak-3` | 3 wins in a row
`all-in-hero` | Win after going all-in
`comeback` | Win after dropping below 300 chips

## Formatting Helpers
```js
function formatNumber(n){return n.toLocaleString('en-US');}
function pct(part,total){return total?((part/total)*100).toFixed(1)+'%':'0%';}
```

Keep logic modular; avoid mixing display and calculation.
