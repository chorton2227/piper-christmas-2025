// Example 1 – Minimal Audio Manager
const audioManager = {
  sounds:{}, muted:false, volume:0.7,
  preload(list){
    list.forEach(({key,src})=>{const a=new Audio(src); a.volume=this.volume; this.sounds[key]=a;});
  },
  play(key){ if(this.muted) return; const a=this.sounds[key]; if(!a) return; a.currentTime=0; a.play(); },
  setVolume(v){ this.volume=v; Object.values(this.sounds).forEach(a=>a.volume=v); },
  toggleMute(){ this.muted=!this.muted; }
};

// Demo usage (requires real audio assets in production)
audioManager.preload([
  {key:'deal', src:'sounds/deal.mp3'},
  {key:'bet', src:'sounds/bet.mp3'},
  {key:'win', src:'sounds/win.mp3'}
]);

document.addEventListener('click',()=>{
  audioManager.play('deal');
  setTimeout(()=>audioManager.play('bet'),400);
  setTimeout(()=>audioManager.play('win'),900);
});
