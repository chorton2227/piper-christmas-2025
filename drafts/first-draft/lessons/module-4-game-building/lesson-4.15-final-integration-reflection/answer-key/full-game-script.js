// Full Texas Hold’em single-player vs AI dealer
// Phases: waiting -> preflop -> flop -> turn -> river -> showdown

const gs = {
  playerChips: 1000,
  dealerChips: 1000,
  pot: 0,
  currentBet: 0,
  playerBet: 0,
  dealerBet: 0,
  playerCards: [],
  dealerCards: [],
  community: [],
  deck: [],
  handNum: 0,
  phase: 'waiting',
  foldedPlayer: null,
  playerAllIn: false,
  dealerAllIn: false,
  difficulty: 'medium',
  handActive: false,
  awarded: false
};

const suits = ['hearts','diamonds','clubs','spades'];
const ranks = [2,3,4,5,6,7,8,9,10,11,12,13,14]; // 11=J,12=Q,13=K,14=A

function createDeck(){ const d=[]; for(const s of suits){ for(const r of ranks){ d.push({r,s}); } } // shuffle
 for(let i=d.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [d[i],d[j]]=[d[j],d[i]]; }
 return d; }
function deal(){ return gs.deck.pop(); }
function rStr(r){ return r<=10? String(r) : ({11:'J',12:'Q',13:'K',14:'A'})[r]; }
function sStr(s){ return ({hearts:'♥',diamonds:'♦',clubs:'♣',spades:'♠'})[s]; }

function log(msg, kind='info'){ const el=document.getElementById('log'); const d=document.createElement('div'); d.className='entry'+(kind==='success'?' success':kind==='warn'?' warn':kind==='error'?' error':''); d.textContent=msg; el.prepend(d); while(el.children.length>120) el.removeChild(el.lastChild); }
function showAction(text){ const ov=document.getElementById('actionOverlay'); const t=document.getElementById('actionText'); t.textContent=text; ov.classList.add('show'); setTimeout(()=>ov.classList.remove('show'), getMessageDurations().overlay); }
function showActionModal(type, title, detail){
  const m=document.getElementById('actionModal'); const c=document.getElementById('actionCard'); const h=document.getElementById('actionTitle'); const d=document.getElementById('actionDetail');
  if(!m||!c||!h||!d) return; c.className='action-card '+type;
  const icon=document.getElementById('actionIcon'); const ht=document.getElementById('actionTitleText');
  if(ht) ht.textContent=title; else h.textContent=title;
  if(icon){ icon.textContent = ({check:'✓',call:'↔',bet:'$',raise:'⬆',fold:'⤴',allin:'★'})[type] || '?'; }
  d.textContent=detail;
  m.classList.add('show');
  setTimeout(()=>{ m.classList.remove('show'); }, getMessageDurations().modal);
}
function getMessageDurations(){
  const sel=document.getElementById('messageSpeed'); const mode = sel? sel.value : 'normal';
  if(mode==='fast') return { overlay: 1000, modal: 1600, banner: 2200 };
  if(mode==='slow') return { overlay: 2000, modal: 3000, banner: 3800 };
  return { overlay: 1600, modal: 2400, banner: 3000 };
}
function setPhase(p){ gs.phase=p; document.getElementById('phase').textContent=p.toUpperCase(); }
function updateUI(){
  document.getElementById('playerChips').textContent=gs.playerChips;
  document.getElementById('dealerChips').textContent=gs.dealerChips;
  document.getElementById('playerBet').textContent=gs.playerBet;
  document.getElementById('dealerBet').textContent=gs.dealerBet;
  document.getElementById('pot').textContent=gs.pot;
  document.getElementById('handBadge').textContent='Hand #'+gs.handNum;
  // Avoid re-applying deal-in animation on every refresh to prevent flicker
  const pc=document.getElementById('playerCards'); pc.innerHTML=gs.playerCards.map(c=>cardHTML(c,false)).join('');
  const dc=document.getElementById('dealerCards'); dc.innerHTML=gs.phase==='showdown'? gs.dealerCards.map(c=>cardHTML(c,false)).join('') : `<div class="card back">🂠</div><div class="card back">🂠</div>`;
  const com=document.getElementById('community'); com.innerHTML=gs.community.map(c=>cardHTML(c,false)).join('');
  const toCall = gs.currentBet - gs.playerBet;
  const busy = !!gs._transitioning;
  const inactive = !gs.handActive;
  document.getElementById('btnCheck').disabled = busy || inactive || toCall>0 || gs.phase==='showdown' || gs.foldedPlayer;
  document.getElementById('btnCall').disabled = busy || inactive || toCall<=0 || gs.phase==='showdown' || gs.foldedPlayer;
  const canBet = gs.currentBet===0 && !gs.foldedPlayer && gs.phase!=='showdown';
  document.getElementById('btnBet').disabled = busy || inactive || !canBet || gs.playerChips===0;
  document.getElementById('btnRaise').disabled = busy || inactive || (toCall===0 || gs.playerChips<=toCall) || gs.phase==='showdown' || gs.foldedPlayer;
  document.getElementById('btnFold').disabled = busy || inactive || gs.phase==='showdown' || gs.foldedPlayer;
  document.getElementById('btnAllIn').disabled = busy || inactive || gs.phase==='showdown' || gs.foldedPlayer || gs.playerChips===0;
}
function cardHTML(c, animate){ return `<div class="card ${c.s} ${animate?'deal-in':''}"><div>${rStr(c.r)}</div><div>${sStr(c.s)}</div></div>`; }

function startNewHand(){
  gs.handNum++; gs.deck=createDeck(); gs.playerCards=[]; gs.dealerCards=[]; gs.community=[];
  gs.pot=0; gs.currentBet=0; gs.playerBet=0; gs.dealerBet=0; gs.foldedPlayer=null; gs.playerAllIn=false; gs.dealerAllIn=false;
  gs.handActive=true; gs.awarded=false; gs._transitioning=false;
  setPhase('preflop');
  audioManager && audioManager.play('shuffle');
  const small=10,big=20; const playerSmall = gs.handNum%2===1;
  if(playerSmall){ postBlind('player',small); postBlind('dealer',big); } else { postBlind('dealer',small); postBlind('player',big); }
  gs.playerCards=[deal(),deal()]; gs.dealerCards=[deal(),deal()];
  log('Your cards: '+gs.playerCards.map(c=>rStr(c.r)+sStr(c.s)).join(' '));
  log('Blinds posted. Current bet: '+gs.currentBet);
  showAction('New Hand Started');
  updateUI();
}
function postBlind(who,amt){ if(who==='player'){ gs.playerChips-=amt; gs.playerBet+=amt; } else { gs.dealerChips-=amt; gs.dealerBet+=amt; } gs.pot+=amt; gs.currentBet=Math.max(gs.currentBet, gs.playerBet, gs.dealerBet); }

// Evaluation
function bestHoldem5(cards7){
  const byRank={}, bySuit={}; cards7.forEach(c=>{ byRank[c.r]=(byRank[c.r]||0)+1; bySuit[c.s]=(bySuit[c.s]||0)+1; });
  const ranksSorted = Object.keys(byRank).map(Number).sort((a,b)=>b-a);
  let flushSuit=null; for(const s of suits){ if((bySuit[s]||0)>=5){ flushSuit=s; break; } }
  const cardsBySuit = flushSuit? cards7.filter(c=>c.s===flushSuit).sort((a,b)=>b.r-a):[];
  function straightTop(vals){ vals=[...new Set(vals)].sort((a,b)=>b-a); if(vals.includes(14)) vals.push(1); for(let i=0;i<=vals.length-5;i++){ let ok=true; for(let d=0;d<4;d++){ if(vals[i+d]-1!==vals[i+d+1]){ ok=false; break; } } if(ok) return vals[i]; } return null; }
  const straightHigh = straightTop(cards7.map(c=>c.r)); let sfHigh=null; if(flushSuit){ sfHigh=straightTop(cardsBySuit.map(c=>c.r)); }
  if(sfHigh){ return {rank:9, t:[sfHigh]}; }
  const fours = ranksSorted.find(r=>byRank[r]===4); if(fours){ const kicker = ranksSorted.find(r=>r!==Number(fours)); return {rank:8, t:[Number(fours), kicker]}; }
  const trips = ranksSorted.filter(r=>byRank[r]===3); const pairs = ranksSorted.filter(r=>byRank[r]===2);
  if(trips.length && pairs.length){ return {rank:7, t:[trips[0], pairs[0]]}; }
  if(flushSuit){ return {rank:6, t:cardsBySuit.slice(0,5).map(c=>c.r)}; }
  if(straightHigh){ return {rank:5, t:[straightHigh]}; }
  if(trips.length){ const kickers = ranksSorted.filter(r=>r!==trips[0]).slice(0,2); return {rank:4, t:[trips[0], ...kickers]}; }
  if(pairs.length>=2){ const topTwo=pairs.slice(0,2); const kicker=ranksSorted.find(r=>!topTwo.includes(r)); return {rank:3, t:[...topTwo, kicker]}; }
  if(pairs.length===1){ const kickers=ranksSorted.filter(r=>r!==pairs[0]).slice(0,3); return {rank:2, t:[pairs[0], ...kickers]}; }
  return {rank:1, t:ranksSorted.slice(0,5)};
}
function compareHands(a,b){ if(a.rank!==b.rank) return a.rank>b.rank?1:-1; for(let i=0;i<Math.max(a.t.length,b.t.length);i++){ const av=a.t[i]||0, bv=b.t[i]||0; if(av!==bv) return av>bv?1:-1; } return 0; }
function to7(hole, board){ return [...hole, ...board]; }

// Player actions
function playerFold(){ if(!gs.handActive || gs.foldedPlayer) return; gs.foldedPlayer='player'; gs.handActive=false; gs._transitioning=true; showAction('You Fold'); showActionModal('fold','You folded','You forfeited the pot.'); log('You fold.', 'warn'); audioManager && audioManager.play('fold'); updateUI();
  setTimeout(()=>{ award('dealer'); gs._transitioning=false; setPhase('showdown'); updateUI(); endHand(); }, 1400);
}
function playerCheck(){ if(!gs.handActive || gs.foldedPlayer) return; log('You check.'); showAction('You Check'); showActionModal('check','You checked','You didn\'t add chips to the pot.'); }
function playerCall(){ if(!gs.handActive || gs.foldedPlayer) return; const toCall=gs.currentBet - gs.playerBet; if(toCall<=0) return; const amt=Math.min(toCall, gs.playerChips); gs.playerChips-=amt; gs.playerBet+=amt; gs.pot+=amt; log('You call '+amt+'.'); showAction('You Call'); showActionModal('call','You called','$'+amt+' added to match the bet.'); audioManager && audioManager.play('call'); if(gs.playerChips===0){ gs.playerAllIn=true; log('You are ALL-IN.', 'warn'); } }
function playerBet(amt){ if(!gs.handActive || gs.foldedPlayer) return; if(gs.currentBet>0) return; amt=Math.min(amt, gs.playerChips); gs.playerChips-=amt; gs.playerBet+=amt; gs.currentBet=gs.playerBet; gs.pot+=amt; log('You bet '+amt+'.'); showAction('You Bet'); showActionModal('bet','You bet','$'+amt+' opened the betting.'); audioManager && audioManager.play('bet'); if(gs.playerChips===0){ gs.playerAllIn=true; log('You are ALL-IN.', 'warn'); } }
function playerRaise(amt){ if(!gs.handActive || gs.foldedPlayer) return; const toCall=gs.currentBet - gs.playerBet; if(toCall===0) return; amt=Math.min(amt, gs.playerChips - toCall); const total=toCall+amt; gs.playerChips-=total; gs.playerBet=gs.currentBet+amt; gs.currentBet=gs.playerBet; gs.pot+=total; log('You raise '+total+'.'); showAction('You Raise'); showActionModal('raise','You raised','$'+total+' total (call + raise).'); audioManager && audioManager.play('raise'); if(gs.playerChips===0){ gs.playerAllIn=true; log('You are ALL-IN.', 'warn'); } }
function playerAllIn(){ if(!gs.handActive || gs.foldedPlayer) return; const amt=gs.playerChips; gs.playerChips=0; gs.playerBet+=amt; gs.pot+=amt; if(gs.playerBet>gs.currentBet) gs.currentBet=gs.playerBet; gs.playerAllIn=true; log('You go ALL-IN for '+amt+'.', 'warn'); showAction('You ALL-IN'); showActionModal('allin','You are ALL-IN','$'+amt+' pushed to the center.'); audioManager && audioManager.play('allin'); }

// Dealer actions / AI
function handStrength(cards){ const e=bestHoldem5(cards); return (e.rank-1)/8; }
function dealerDecision(){ if(!gs.handActive || gs.phase==='showdown' || gs.foldedPlayer) return; const toCall=gs.currentBet - gs.dealerBet; const strength=handStrength([...gs.dealerCards, ...gs.community]); let action='check';
  if(gs.dealerChips===0) action='check';
  else if(gs.playerAllIn && !gs.dealerAllIn){ const th={easy:.75,medium:.55,hard:.45,expert:.4}[gs.difficulty]; action=strength>=th?(toCall>0?'call':'check'):'fold'; }
  else if(toCall>0){ action = strength>.8? 'raise' : strength>.45? 'call' : (Math.random()<.2? 'call':'fold'); }
  else { action = strength>.88? 'allin' : strength>.7? 'bet' : 'check'; }
  log('Dealer chooses: '+action.toUpperCase()); if(action==='fold') showAction('Dealer Folds');
  switch(action){ case 'fold': dealerFold(); break; case 'check': dealerCheck(); break; case 'call': dealerCall(); break; case 'bet': dealerBet(50); break; case 'raise': dealerRaise(50); break; case 'allin': dealerAllIn(); break; }
}
function dealerFold(){ if(!gs.handActive || gs.foldedPlayer) return; gs.foldedPlayer='dealer'; gs.handActive=false; gs._transitioning=true; showAction('Dealer Folds'); showActionModal('fold','Dealer folded','Dealer forfeited the pot.'); log('Dealer folds.', 'success'); audioManager && audioManager.play('fold'); updateUI();
  setTimeout(()=>{ award('player'); gs._transitioning=false; setPhase('showdown'); updateUI(); endHand(); }, 1400);
}
function dealerCheck(){ if(!gs.handActive || gs.foldedPlayer) return; log('Dealer checks.'); showAction('Dealer Checks'); showActionModal('check','Dealer checked','Dealer didn\'t add chips to the pot.'); }
function dealerCall(){ if(!gs.handActive || gs.foldedPlayer) return; const toCall=gs.currentBet - gs.dealerBet; if(toCall<=0) return; const amt=Math.min(toCall, gs.dealerChips); gs.dealerChips-=amt; gs.dealerBet+=amt; gs.pot+=amt; log('Dealer calls '+amt+'.'); showAction('Dealer Calls'); showActionModal('call','Dealer called','$'+amt+' matched your bet.'); audioManager && audioManager.play('call'); if(gs.dealerChips===0){ gs.dealerAllIn=true; log('Dealer is ALL-IN.', 'warn'); } }
function dealerBet(amt){ if(!gs.handActive || gs.foldedPlayer) return; if(gs.currentBet>0) return; amt=Math.min(amt, gs.dealerChips); gs.dealerChips-=amt; gs.dealerBet+=amt; gs.pot+=amt; gs.currentBet=gs.dealerBet; log('Dealer bets '+amt+'.'); showAction('Dealer Bets'); showActionModal('bet','Dealer bet','$'+amt+' opened the betting.'); audioManager && audioManager.play('bet'); if(gs.dealerChips===0){ gs.dealerAllIn=true; log('Dealer is ALL-IN.', 'warn'); } }
function dealerRaise(amt){ if(!gs.handActive || gs.foldedPlayer) return; const toCall=gs.currentBet - gs.dealerBet; if(toCall===0) return; amt=Math.min(amt, gs.dealerChips - toCall); const total=toCall+amt; gs.dealerChips-=total; gs.dealerBet=gs.currentBet+amt; gs.currentBet=gs.dealerBet; gs.pot+=total; log('Dealer raises '+total+'.'); showAction('Dealer Raises'); showActionModal('raise','Dealer raised','$'+total+' total (call + raise).'); audioManager && audioManager.play('raise'); if(gs.dealerChips===0){ gs.dealerAllIn=true; log('Dealer is ALL-IN.', 'warn'); } }
function dealerAllIn(){ if(!gs.handActive || gs.foldedPlayer) return; const amt=gs.dealerChips; gs.dealerChips=0; gs.dealerBet+=amt; gs.pot+=amt; if(gs.dealerBet>gs.currentBet) gs.currentBet=gs.dealerBet; gs.dealerAllIn=true; log('Dealer goes ALL-IN for '+amt+'.', 'warn'); showAction('Dealer ALL-IN'); showActionModal('allin','Dealer is ALL-IN','$'+amt+' pushed to the center.'); audioManager && audioManager.play('allin'); }

function progressRound(){
  if(!gs.handActive || gs.foldedPlayer) return;
  if(gs.playerBet!==gs.dealerBet) return;
  gs.currentBet=0; gs.playerBet=0; gs.dealerBet=0;
  const com=document.getElementById('community');
  function addCardAnimated(card){ const div=document.createElement('div'); div.className='card '+card.s+' deal-in'; div.innerHTML=`<div>${rStr(card.r)}</div><div>${sStr(card.s)}</div>`; com.appendChild(div); }
  if(gs.phase==='preflop'){
    gs._transitioning=true; showAction('Dealing FLOP...'); setPhase('flop');
    const c1=deal(),c2=deal(),c3=deal(); audioManager && audioManager.playVariant('deal'); gs.community.push(c1); addCardAnimated(c1);
    setTimeout(()=>{ audioManager && audioManager.playVariant('deal'); gs.community.push(c2); addCardAnimated(c2); setTimeout(()=>{ audioManager && audioManager.playVariant('deal'); gs.community.push(c3); addCardAnimated(c3); gs._transitioning=false; log('Flop dealt.'); updateUI(); }, 950); }, 950);
  } else if(gs.phase==='flop'){
    gs._transitioning=true; showAction('Dealing TURN...'); const c=deal(); audioManager && audioManager.playVariant('deal'); gs.community.push(c); setPhase('turn'); setTimeout(()=>{ addCardAnimated(c); gs._transitioning=false; log('Turn dealt.'); updateUI(); }, 950);
  } else if(gs.phase==='turn'){
    gs._transitioning=true; showAction('Dealing RIVER...'); const c=deal(); audioManager && audioManager.playVariant('deal'); gs.community.push(c); setPhase('river'); setTimeout(()=>{ addCardAnimated(c); gs._transitioning=false; log('River dealt.'); updateUI(); }, 950);
  } else if(gs.phase==='river'){
    gs._transitioning=true; showAction('Showdown...'); setTimeout(()=>{ gs._transitioning=false; setPhase('showdown'); updateUI(); showdown(); }, 1300);
  }
}

function showdown(){ if(gs.phase!=='showdown') return; if(gs.awarded) return; gs.handActive=false; showAction('Showdown'); log('Showdown!');
  updateUI();
  const pEval=bestHoldem5(to7(gs.playerCards, gs.community));
  const dEval=bestHoldem5(to7(gs.dealerCards, gs.community));
  const cmp=compareHands(pEval, dEval);
  if(cmp>0){ award('player'); log('You win.', 'success'); showAction('You Win'); audioManager && audioManager.play('win'); }
  else if(cmp<0){ award('dealer'); log('Dealer wins.', 'error'); showAction('Dealer Wins'); audioManager && audioManager.play('lose'); }
  else { splitPot(); log('Tie. Pot split.', 'warn'); showAction('Tie'); }
  endHand();
}
function award(w){ if(gs.awarded) return; gs.awarded=true; const amt=gs.pot; if(w==='player'){ gs.playerChips+=amt; showWinnerBanner('Player wins $'+amt); } else { gs.dealerChips+=amt; showWinnerBanner('Dealer wins $'+amt); } gs.pot=0; }
function splitPot(){ const h=Math.floor(gs.pot/2); gs.playerChips+=h; gs.dealerChips+=gs.pot-h; gs.pot=0; }

function endHand(skipAuto){ updateUI(); if(gs.playerChips<=0){ alert('Game Over – You ran out of chips.'); return; } if(gs.dealerChips<=0){ alert('You win the match! Dealer is out of chips.'); return; }
  if(!skipAuto){ gs._transitioning=true; setTimeout(()=>{ showAction('Next Hand...'); gs._transitioning=false; startNewHand(); updateUI(); }, 2400); }
}

// Handlers
function onFold(){ if(gs.phase==='waiting'||gs.phase==='showdown') return; playerFold(); updateUI(); }
function onCheck(){ if(!gs.handActive || gs.foldedPlayer || gs.phase==='showdown') return; const toCall=gs.currentBet - gs.playerBet; if(toCall>0) return; playerCheck(); updateUI(); setTimeout(()=>{ dealerDecision(); updateUI(); setTimeout(()=>{ progressRound(); }, 1000); }, 800); }
function onCall(){ if(!gs.handActive || gs.foldedPlayer || gs.phase==='showdown') return; const toCall=gs.currentBet - gs.playerBet; if(toCall<=0) return; playerCall(); updateUI(); setTimeout(()=>{ dealerDecision(); updateUI(); setTimeout(()=>{ progressRound(); }, 1000); }, 800); }
function onBet(){ if(!gs.handActive || gs.foldedPlayer || gs.phase==='showdown') return; if(gs.currentBet>0) return; playerBet(50); updateUI(); setTimeout(()=>{ dealerDecision(); updateUI(); setTimeout(()=>{ progressRound(); }, 1000); }, 800); }
function onRaise(){ if(!gs.handActive || gs.foldedPlayer || gs.phase==='showdown') return; const toCall=gs.currentBet - gs.playerBet; if(toCall===0) return; playerRaise(50); updateUI(); setTimeout(()=>{ dealerDecision(); updateUI(); setTimeout(()=>{ progressRound(); }, 1000); }, 800); }
function onAllIn(){ if(gs.phase==='showdown' || !gs.handActive || gs.foldedPlayer) return; playerAllIn(); updateUI(); setTimeout(()=>{ dealerDecision(); updateUI(); if(gs.playerAllIn || gs.dealerAllIn){ setTimeout(()=>{ autoDealToShowdown(); }, 1300); } }, 850); }

function autoDealToShowdown(){ if(!gs.handActive || gs.foldedPlayer) return; gs._transitioning=true; updateUI(); const com=document.getElementById('community');
  function addCardAnimated(card){ const div=document.createElement('div'); div.className='card '+card.s+' deal-in'; div.innerHTML=`<div>${rStr(card.r)}</div><div>${sStr(card.s)}</div>`; com.appendChild(div); }
  const steps=[];
  if(gs.phase==='preflop'){
    steps.push(()=>{ showAction('Dealing FLOP...'); const c1=deal(),c2=deal(),c3=deal(); gs.community.push(c1); addCardAnimated(c1); });
    steps.push(()=>{ const c2=deal(); gs.community.push(c2); addCardAnimated(c2); });
    steps.push(()=>{ const c3=deal(); gs.community.push(c3); addCardAnimated(c3); setPhase('flop'); log('Flop dealt.'); });
  }
  if(gs.phase==='flop') steps.push(()=>{ showAction('Dealing TURN...'); const c=deal(); gs.community.push(c); addCardAnimated(c); setPhase('turn'); log('Turn dealt.'); });
  if(gs.phase==='turn') steps.push(()=>{ showAction('Dealing RIVER...'); const c=deal(); gs.community.push(c); addCardAnimated(c); setPhase('river'); log('River dealt.'); });
  steps.push(()=>{ setPhase('showdown'); gs._transitioning=false; updateUI(); showdown(); });
  let i=0; function runNext(){ if(i>=steps.length) return; steps[i++](); setTimeout(runNext, 950); }
  runNext();
}

function wire(){ document.getElementById('newGameBtn').addEventListener('click', ()=>{ startNewHand(); updateUI(); });
  document.getElementById('difficulty').addEventListener('change', e=>{ gs.difficulty=e.target.value; log('Difficulty set to '+gs.difficulty); });
  const muteEl=document.getElementById('muteToggle'); const volEl=document.getElementById('volumeSlider');
  if(muteEl){ muteEl.checked = localStorage.getItem('pokerMute')==='1'; muteEl.addEventListener('change', ()=>{ audioManager && audioManager.toggleMute(); }); }
  if(volEl){ const stored=localStorage.getItem('pokerVol'); volEl.value=stored? stored : (audioManager? audioManager.volume : 0.7); volEl.addEventListener('input', ()=>{ audioManager && audioManager.setVolume(parseFloat(volEl.value)); }); }
  const speedEl=document.getElementById('messageSpeed'); if(speedEl){ speedEl.addEventListener('change', ()=>{ const m=getMessageDurations(); log('Message speed set to '+speedEl.value+' (overlay '+m.overlay+'ms, modal '+m.modal+'ms)'); }); }
  document.getElementById('btnFold').addEventListener('click', onFold);
  document.getElementById('btnCheck').addEventListener('click', onCheck);
  document.getElementById('btnCall').addEventListener('click', onCall);
  document.getElementById('btnBet').addEventListener('click', onBet);
  document.getElementById('btnRaise').addEventListener('click', onRaise);
  document.getElementById('btnAllIn').addEventListener('click', onAllIn);
}

function showWinnerBanner(text){ const b=document.getElementById('winnerBanner'); const t=document.getElementById('winnerText'); if(!b||!t) return; t.textContent=text; b.classList.add('show'); setTimeout(()=>{ b.classList.remove('show'); }, getMessageDurations().banner); }

function init(){ wire(); setPhase('waiting'); updateUI(); setTimeout(()=>{ startNewHand(); updateUI(); }, 900); }
init();
