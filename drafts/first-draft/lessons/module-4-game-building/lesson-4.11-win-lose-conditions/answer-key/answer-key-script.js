// Answer Key Script – Lesson 4.11 (Minimal integration scaffold)
// NOTE: This is a trimmed version focusing on session/game over logic.

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

const gameState = {
  playerChips: 1000,
  dealerChips: 1000,
  pot: 0,
  currentBet: 0,
  gameOver: false,
  lastHandPlayerAllIn: false,
  lowestPlayerChips: 1000
};

function startNewHand() {
  gameState.pot = 0;
  gameState.currentBet = 0;
  gameState.lastHandPlayerAllIn = false;
}

function endHand(winner) {
  const potBefore = gameState.pot;
  if (potBefore > sessionStats.biggestPot) sessionStats.biggestPot = potBefore;
  sessionStats.handsPlayed++;
  if (winner === 'player') {
    sessionStats.handsWon++;
    sessionStats.currentWinStreak++;
    if (sessionStats.currentWinStreak > sessionStats.longestWinStreak) sessionStats.longestWinStreak = sessionStats.currentWinStreak;
  } else if (winner === 'dealer') {
    sessionStats.handsLost++;
    sessionStats.currentWinStreak = 0;
  } else { // tie
    sessionStats.currentWinStreak = 0; // choose to break streak on tie
  }
  // Award pot simplified
  if (winner === 'player') gameState.playerChips += potBefore; else if (winner === 'dealer') gameState.dealerChips += potBefore; else {
    gameState.playerChips += Math.floor(potBefore / 2);
    gameState.dealerChips += potBefore - Math.floor(potBefore / 2);
  }
  gameState.pot = 0;
  sessionStats.netChange = gameState.playerChips - sessionStats.startingBankroll;
  checkAchievements({ lastHandWinner: winner, lastHandPlayerAllIn: gameState.lastHandPlayerAllIn, lowestPlayerChips: gameState.lowestPlayerChips });
  checkGameOver();
}

function checkGameOver() {
  if (gameState.gameOver) return;
  const TARGET = 2000;
  if (gameState.playerChips <= 0) return triggerGameOver('defeat');
  if (gameState.dealerChips <= 0) return triggerGameOver('victory');
  if (gameState.playerChips >= TARGET) return triggerGameOver('victory');
}

function triggerGameOver(result) {
  gameState.gameOver = true;
  console.log('\n=== GAME OVER ===');
  console.log('Result:', result);
  console.table(sessionStats);
}

function checkAchievements(context) {
  const a = sessionStats.achievements; const has = id => a.some(x => x.id === id);
  if (!has('first-win') && sessionStats.handsWon >= 1) a.push({ id: 'first-win', name: 'First Win', unlockedAt: sessionStats.handsPlayed });
  if (!has('hot-streak-3') && sessionStats.longestWinStreak >= 3) a.push({ id: 'hot-streak-3', name: '3-Win Streak', unlockedAt: sessionStats.handsPlayed });
  if (!has('all-in-hero') && context.lastHandPlayerAllIn && context.lastHandWinner === 'player') a.push({ id: 'all-in-hero', name: 'All-In Hero', unlockedAt: sessionStats.handsPlayed });
  if (!has('comeback') && context.lowestPlayerChips < 300 && context.lastHandWinner === 'player') a.push({ id: 'comeback', name: 'Comeback Victory', unlockedAt: sessionStats.handsPlayed });
}

function resetSession(full) {
  if (full) {
    Object.assign(sessionStats, { handsPlayed:0,handsWon:0,handsLost:0,folds:0,allIns:0,biggestPot:0,netChange:0,currentWinStreak:0,longestWinStreak:0,achievements:[], startingBankroll:1000 });
  }
  gameState.playerChips = 1000;
  gameState.dealerChips = 1000;
  gameState.gameOver = false;
  startNewHand();
}

// Demo
startNewHand();
// Simulate a few results
endHand('player'); // win
endHand('player'); // win
endHand('dealer'); // loss
endHand('player'); // win
console.log('Achievements:', sessionStats.achievements);
