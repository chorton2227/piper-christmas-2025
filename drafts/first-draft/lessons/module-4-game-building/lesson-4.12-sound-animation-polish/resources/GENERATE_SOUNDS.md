# Generating / Replacing Poker Game Sound Assets

This lesson's answer key now includes a resilient audio fallback: if an MP3 file fails to load, a short synthetic tone will be generated with the Web Audio API so the demo still has audible feedback.

## Provided Keys
We attempt to load these files from `sounds/`:
- deal.mp3 (card dealing, light tick / swish)
- bet.mp3 (chip movement, mid-frequency click)
- win.mp3 (cheer / pleasant chord)
- lose.mp3 (low thud / minor chord)
- shuffle.mp3 (riffle loop)

If they are missing, the system maps each key to a frequency:
- deal → 660 Hz
- bet → 440 Hz
- win → 880 Hz
- lose → 330 Hz
- shuffle → 520 Hz

Variants slightly randomize the pitch for subtle variation.

## Option 1: Quick Synth Using Web Audio (Script Snippets)
You can capture generated tones and export them as WAV/MP3 using an offline audio context. (Advanced; not required for lesson.)

## Option 2: Record or Source Free Sounds
Find short, < 0.5s, mono sounds. Recommended sites:
- https://freesound.org (check license; prefer CC0)
- https://pixabay.com/sound-effects/
Place them in `answer-key/sounds/` or `examples/sounds/` and ensure filenames match.

## File Guidelines
- Length: 150–500 ms (except shuffle: up to 1 s)
- Format: `.mp3` or `.wav`
- Sample Rate: 44.1kHz
- Loudness: Normalize so peak ≈ -3dB; avoid clipping

## How Fallback Works
1. `Audio` element is created and assigned `src`.
2. If it errors (`error` event), we replace the entry with `{ synthetic: true, freq: <mapped> }`.
3. On `play()` we detect synthetic entries and spawn an oscillator → short sine beep.

## Muting & Volume
- `Mute` toggles a flag; synthetic tones respect it.
- Volume slider reduces oscillator gain.

## Testing
Temporarily rename `sounds/` folder to simulate missing files and verify tones still play.

## Accessibility Notes
- Short, simple tones are less fatiguing; keep volume moderate.
- Provide a way to disable all audio quickly (mute button already implemented).

## Advanced Enhancement Ideas
- Layer two oscillators for a nicer win chord (root + fifth).
- Envelope: ramp gain down over last 40 ms to avoid click.
- Add a simple reverb impulse for win sound.

## Simple Dual-Oscillator Win Variant (Optional)
```js
function playWinChord(){
  audioManager.ensureCtx();
  const ctx = audioManager.ctx;
  const freqs = [880, 1320]; // A5 + E6
  const now = ctx.currentTime;
  freqs.forEach(f=>{
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type='sine';
    osc.frequency.value=f;
    gain.gain.setValueAtTime(audioManager.volume*0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now+0.6);
    osc.connect(gain).connect(ctx.destination);
    osc.start(now);
    osc.stop(now+0.6);
  });
}
```
Integrate by calling `playWinChord()` in addition to `audioManager.play('win')`.

---
This file supports students experimenting with sound generation before sourcing real assets.
