// Audio Manager for Lesson 4.15 (with fallback tones)
const audioManager = {
  sounds:{}, muted:false, volume:0.7, ctx:null, _userInteracted:false, _queue:[],
  preload(list){
    list.forEach(({key,src})=>{
      const a = new Audio(); a.src = src; a.volume = this.volume;
      a.addEventListener('error', ()=>{ this.sounds[key] = { synthetic:true, freq:this.defaultFreq(key) }; }, {once:true});
      a.addEventListener('canplaythrough', ()=>{ if(!this.sounds[key]) this.sounds[key]=a; }, {once:true});
      this.sounds[key]=a;
    });
  },
  ensureCtx(){ if(!this.ctx) this.ctx = new (window.AudioContext||window.webkitAudioContext)(); },
  defaultFreq(key){ return ({deal:660, bet:440, raise:520, call:500, fold:360, allin:300, win:880, lose:330, shuffle:520}[key] || 500); },
  play(key){ if(this.muted) return; const ref=this.sounds[key]; if(!ref) return; if(ref.synthetic){ if(!this._userInteracted){ this._queue.push(()=>this.play(key)); return; } this.playTone(this.defaultFreq(key), 0.12); return; } ref.currentTime=0; ref.volume=this.volume; const ok = ref.play(); if(ok && ok.catch){ ok.catch(()=>{}); } },
  playVariant(key){ if(this.muted) return; const ref=this.sounds[key]; if(!ref) return; if(ref.synthetic){ if(!this._userInteracted){ this._queue.push(()=>this.playVariant(key)); return; } this.playTone(this.defaultFreq(key)*(0.95+Math.random()*0.1), 0.12); return; } ref.playbackRate=0.95+Math.random()*0.1; ref.currentTime=0; ref.volume=this.volume; const ok = ref.play(); if(ok && ok.catch){ ok.catch(()=>{}); } },
  playTone(freq, dur){ this.ensureCtx(); const osc=this.ctx.createOscillator(); const gain=this.ctx.createGain(); osc.type='sine'; osc.frequency.value=freq; gain.gain.value=this.volume*0.25; osc.connect(gain).connect(this.ctx.destination); osc.start(); osc.stop(this.ctx.currentTime+dur); },
  setVolume(v){ this.volume=v; Object.values(this.sounds).forEach(a=>{ if(!a.synthetic) a.volume=v; }); localStorage.setItem('pokerVol', v); },
  toggleMute(){ this.muted=!this.muted; localStorage.setItem('pokerMute', this.muted?'1':'0'); }
};

(function initAudio(){
  audioManager.preload([
    {key:'deal', src:'sounds/deal.mp3'},
    {key:'bet', src:'sounds/bet.mp3'},
    {key:'raise', src:'sounds/raise.mp3'},
    {key:'call', src:'sounds/call.mp3'},
    {key:'fold', src:'sounds/fold.mp3'},
    {key:'allin', src:'sounds/allin.mp3'},
    {key:'win', src:'sounds/win.mp3'},
    {key:'lose', src:'sounds/lose.mp3'},
    {key:'shuffle', src:'sounds/shuffle.mp3'}
  ]);
  const muteStored=localStorage.getItem('pokerMute'); if(muteStored==='1') audioManager.muted=true;
  const volStored=localStorage.getItem('pokerVol'); if(volStored) audioManager.setVolume(parseFloat(volStored));
  function onInteract(){ audioManager._userInteracted=true; if(audioManager.ctx && audioManager.ctx.state==='suspended'){ audioManager.ctx.resume(); }
    // flush queued plays
    const q=audioManager._queue.splice(0); q.forEach(fn=>fn());
    ['click','pointerdown','keydown','touchstart'].forEach(evt=>window.removeEventListener(evt, onInteract));
  }
  ['click','pointerdown','keydown','touchstart'].forEach(evt=>window.addEventListener(evt, onInteract, {once:false}));
})();
