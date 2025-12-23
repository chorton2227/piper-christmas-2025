# Lesson 4.11 – Win / Lose Conditions & End-of-Game Flow

## Overview
Students add true "game over" logic to their Poker project. When either player runs out of chips or a target chip count is reached, the game enters a terminal state that shows a Victory or Defeat screen with session statistics and a Play Again option.

## Learning Goals
- Detect terminal states (player bust, dealer bust, target bankroll reached)
- Separate hand flow from game session flow
- Persist and display cumulative session statistics
- Build reusable UI overlays (modal / screen components)
- Provide positive/constructive feedback (growth mindset wording)

## Key Concepts
| Concept | Why It Matters |
|--------|----------------|
| Session vs Hand State | Promotes modular game architecture |
| Terminal Conditions | Clarifies end goals and pacing |
| Data Aggregation | Enables meaningful statistics & reflection |
| Overlay UI / Modals | Common pattern in games & apps |
| Reset Mechanics | Supports replayability |

## Feature Checklist
- [ ] Track: handsPlayed, handsWon, handsLost, folds, allIns, biggestPot, netChange
- [ ] Detect bust: playerChips <= 0 OR dealerChips <= 0
- [ ] Optional win target: first to 2000 chips (configurable)
- [ ] Show end screen: message, stats summary, emoji flair, encouragement line
- [ ] Disable in-hand buttons when game over
- [ ] Play Again resets chips & session OR offers keep-session mode

## Data Shape (Draft)
```js
sessionStats = {
  handsPlayed: 0,
  handsWon: 0,
  handsLost: 0,
  folds: 0,
  allIns: 0,
  biggestPot: 0,
  netChange: 0, // playerChips - startingBankroll
  startingBankroll: 1000,
  longestWinStreak: 0,
  currentWinStreak: 0
};
```

## Edge Cases
1. Tie at same time as bust (split pot may revive a player) – handle before game over check.
2. Player goes all-in and wins side pot – confirm chip math.
3. Multiple rapid clicks near end – ensure idempotent gameOver() function.
4. Play Again while overlay fading – block until overlay finished.
5. Stats overflow (very long session) – still readable formatting.

## Step-by-Step Implementation
1. Add `sessionStats` object and initialize.
2. Update stats in existing hand resolution (`endHand`).
3. Create `checkGameOver()` after awarding pot.
4. Build `showGameOverScreen(result)` to construct overlay HTML.
5. Add "Play Again" button → calls `resetSession()` or `resetGameKeepStats()`.
6. Wire disable of action buttons when `gameState.gameOver = true`.
7. Test three scenarios: player bust, dealer bust, target reached.

## Victory / Defeat Messaging Guide
| Situation | Message | Tone |
|-----------|---------|------|
| Victory | "🏆 You dominated this session!"
| Defeat | "💔 Tough luck! Every pro learns from losses." |
| Close | "⚖️ So close! Just a few decisions from a comeback." |

Follow each with an encouragement line: "Try a new strategy next run" / "Experiment with tighter play early" etc.

## Practice Exercises
See `practice/` folder.
1. Implement sessionStats & display real-time scoreboard.
2. Create modal overlay markup & CSS.
3. Add advanced stat: longest win streak logic.

## Parent / Instructor Tips
- Emphasize reflection more than winning.
- Ask: "What pattern did the AI exploit?" or "What one change might improve next session?"

## Extension Ideas
- Persist stats to `localStorage`.
- Add achievements ("First All-In Win", "10 Hands Without Folding").
- Graph performance trend.

## Rubric (Excerpt)
| Category | Excellent | Developing | Needs Work |
|----------|-----------|-----------|-----------|
| Correct Game Over Trigger | All edge cases handled | Basic bust triggers | Missing or incorrect |
| Stats Accuracy | All counters correct | Minor off-by-one | Multiple incorrect |
| Overlay UX | Clear, readable, encouraging | Functional but plain | Confusing/incomplete |

Full rubric in `answer-key/ANSWER_KEY.md`.

## Next Lesson Preview
Lesson 4.12 adds sound effects & subtle animations to polish feedback pathways. Students layer aesthetic reinforcement over strategic mechanics.
