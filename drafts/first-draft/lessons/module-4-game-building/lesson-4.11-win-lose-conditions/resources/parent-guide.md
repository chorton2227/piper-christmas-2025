# Parent / Instructor Guide – Lesson 4.11

## Objective
Support students in adding session-level win/lose logic and reflective statistics to the Poker project.

## Why It Matters
End conditions provide closure and learning milestones. Statistics transform gameplay into data students can analyze, reinforcing computational thinking and iteration.

## Talking Points
| Topic | Prompt |
|-------|--------|
| Losing | "What pattern led to chip decline?" |
| Streaks | "How does a win streak affect risk-taking?" |
| Achievements | "Which unlocked achievement surprised you?" |

## Facilitation Flow (Approx 60–75 min)
1. Review previous lesson (AI decisions) – 5 min
2. Introduce session stats & terminal states – 10 min
3. Students implement base stats object – 15 min
4. Add game over detection & overlay – 15 min
5. Reflection & achievement brainstorm – 10 min
6. Share insights / demo – 10 min

## Common Challenges & Support
| Issue | Strategy |
|-------|---------|
| Stats not updating | Have student log the stats object after each hand |
| Overlay not appearing | Confirm game over check runs after awarding pot |
| Duplicate overlay | Suggest `gameState.gameOver` boolean guard |
| Streak logic confusion | Walk through sequence of W/W/L hands on whiteboard |

## Encouragement Language
Use growth-oriented phrasing: "You improved your decision consistency" rather than "You won more". Celebrate process.

## Extension Support
If a student finishes early:
- Add achievement persistence with `localStorage`
- Graph chip trend using simple ASCII or canvas
- Add JSON export of session stats

## Assessment Snapshot
| Skill | Evidence |
|-------|---------|
| State Management | Accurate sessionStats updates |
| UI Composition | Overlay readable & accessible |
| Debugging | Student isolates stat miscount with logs |
| Reflection | Student articulates one strategic adjustment |

Keep focus on strategic thinking, not gambling concepts.
