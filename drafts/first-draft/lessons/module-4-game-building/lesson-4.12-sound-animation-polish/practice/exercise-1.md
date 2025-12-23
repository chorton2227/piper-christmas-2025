# Exercise 1 – Audio Manager & Mute Control

## Goal
Implement a reusable `audioManager` and hook up a mute toggle + volume slider.

## Requirements
- Preload at least 5 sounds: shuffle, deal, bet, win, lose.
- Provide `play(key)` method that restarts sound from start.
- Provide `setVolume(value)` method (0–1 range) updating all preloaded sounds.
- Provide `toggleMute()` storing state in `localStorage`.

## Steps
1. Create `audioManager` object.
2. Preload inside `window.onload`.
3. Add UI controls: checkbox (mute), range (volume).
4. Wire events to manager.
5. Call `audioManager.play('deal')` when hole cards dealt.

## Stretch
Fade out win sound if new hand starts quickly.

## Checklist
- [ ] Sounds preload only once.
- [ ] Mute prevents playback.
- [ ] Volume slider updates immediately.
- [ ] State persists after refresh.

## Reflection
"Which action benefited most from audio feedback? Why?"
