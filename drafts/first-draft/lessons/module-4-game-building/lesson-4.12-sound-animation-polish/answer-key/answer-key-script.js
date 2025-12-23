// Answer Key Script (Skeleton) – Lesson 4.12
// Integrates audio manager + reduced motion + sample animations.

// Audio manager with fallback tone synthesis if external files missing
const audioManager = {
  sounds:{}, muted:false, volume:0.7,
  ctx:null,
  preload(list){
    list.forEach(({key,src})=>{
      const a = new Audio();
      a.src = src;
      a.volume = this.volume;
      a.addEventListener('error', ()=>{
        // Fallback: mark key as synthetic tone
        this.sounds[key] = { synthetic:true, freq:this.defaultFreq(key) };
      }, {once:true});
      a.addEventListener('canplaythrough', ()=>{ if(!this.sounds[key]) this.sounds[key]=a; }, {once:true});
      // Tentatively store; may be replaced by synthetic on error
      this.sounds[key] = a;
    });
  },
  ensureCtx(){ if(!this.ctx) this.ctx = new (window.AudioContext||window.webkitAudioContext)(); },
  defaultFreq(key){ return ({deal:660, bet:440, win:880, lose:330, shuffle:520}[key] || 500); },
  play(key){ if(this.muted) return; const ref = this.sounds[key]; if(!ref) return; if(ref.synthetic){ this.playTone(ref.freq, 0.12); return; } ref.currentTime=0; ref.volume=this.volume; ref.play(); },
  playVariant(key){ if(this.muted) return; const ref = this.sounds[key]; if(!ref) return; if(ref.synthetic){ this.playTone(this.defaultFreq(key)*(0.95+Math.random()*0.1), 0.12); return; } ref.playbackRate=0.95+Math.random()*0.1; ref.currentTime=0; ref.volume=this.volume; ref.play(); },
  playTone(frequency, duration){
    this.ensureCtx();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type='sine';
    osc.frequency.value = frequency;
    gain.gain.value = this.volume * 0.25; // softer tone
    osc.connect(gain).connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  },
  setVolume(v){ this.volume=v; Object.values(this.sounds).forEach(a=>{ if(!a.synthetic) a.volume=v; }); localStorage.setItem('pokerVol', v); },
  toggleMute(){ this.muted=!this.muted; localStorage.setItem('pokerMute', this.muted?'1':'0'); }
};

function initAudio(){
  audioManager.preload([
    {key:'deal', src:'sounds/deal.mp3'},
    {key:'bet', src:'sounds/bet.mp3'},
    {key:'win', src:'sounds/win.mp3'},
    {key:'lose', src:'sounds/lose.mp3'},
    {key:'shuffle', src:'sounds/shuffle.mp3'}
  ]);
  const muteStored = localStorage.getItem('pokerMute');
  if(muteStored==='1') audioManager.muted=true;
  const volStored = localStorage.getItem('pokerVol');
  if(volStored) audioManager.setVolume(parseFloat(volStored));
  // Resume audio context after user gesture if using synthetic fallback
  window.addEventListener('click', ()=>{ if(audioManager.ctx && audioManager.ctx.state==='suspended') audioManager.ctx.resume(); }, {once:true});
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(reduceMotion) document.documentElement.classList.add('reduce-motion');

function dealCardsAnimation(cardElements){
  if(reduceMotion){ cardElements.forEach(c=>c.style.opacity=1); return; }
  cardElements.forEach((c,i)=>{
    c.classList.add('animated-card');
    setTimeout(()=>{ c.classList.add('deal'); audioManager.playVariant('deal'); }, i*120);
  });
}

// Chip travel demo (requires positioned chip container)
function animateChipAward(targetEl, amount, done){
  const chip = document.getElementById('chip-travel');
  chip.textContent = amount;
  chip.style.display='block';
  chip.style.transform='translate(0,0)';
  requestAnimationFrame(()=>{
    const startRect = chip.getBoundingClientRect();
    const endRect = targetEl.getBoundingClientRect();
    const dx = endRect.left - startRect.left;
    const dy = endRect.top - startRect.top;
    chip.style.transform = `translate(${dx}px, ${dy}px)`;
  });
  chip.addEventListener('transitionend', ()=>{ chip.style.display='none'; done&&done(); }, {once:true});
}

// Overlay example
function showWinOverlay(result){
  const overlay = document.getElementById('overlay');
  overlay.innerHTML = `<div class="overlay-panel ${result}"><h1>${result==='win'?'🏆 Victory!':'💔 Defeat'}</h1><p>${result==='win'?'Great strategic decisions!':'Reflect & adjust next session.'}</p><button onclick="dismissOverlay()">Continue</button></div>`;
  overlay.classList.add('active');
  audioManager.play(result==='win'?'win':'lose');
}
function dismissOverlay(){ document.getElementById('overlay').classList.remove('active'); }

// Initialization
window.addEventListener('click', function firstUserInteraction(){
  initAudio();
  window.removeEventListener('click', firstUserInteraction); // ensure autoplay compliance
});
