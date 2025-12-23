// Example 1 – Basic Game Over Detection
// Simplified snippet demonstrating how to integrate game over logic.

const sessionStats = {
  handsPlayed: 0,
  handsWon: 0,
  handsLost: 0,
  folds: 0,
  allIns: 0,
  biggestPot: 0,
  netChange: 0,
  startingBankroll: 1000
};

let gameState = {
  playerChips: 1000,
  dealerChips: 1000,
  pot: 0,
  gameOver: false
};

function endHand(winner) {
  const potBefore = gameState.pot;
  if (potBefore > sessionStats.biggestPot) sessionStats.biggestPot = potBefore;
  sessionStats.handsPlayed++;
  if (winner === 'player') sessionStats.handsWon++; else if (winner === 'dealer') sessionStats.handsLost++; // ties ignored
  // Award pot simplified
  if (winner === 'player') gameState.playerChips += gameState.pot; else if (winner === 'dealer') gameState.dealerChips += gameState.pot;
  gameState.pot = 0;
  sessionStats.netChange = gameState.playerChips - sessionStats.startingBankroll;
  checkGameOver();
}

function checkGameOver() {
  if (gameState.gameOver) return; // guard
  if (gameState.playerChips <= 0) return triggerGameOver('defeat');
  if (gameState.dealerChips <= 0) return triggerGameOver('victory');
  if (gameState.playerChips >= 2000) return triggerGameOver('victory');
}

function triggerGameOver(result) {
  gameState.gameOver = true;
  console.log('\n=== GAME OVER ===');
  console.log('Result:', result);
  console.table(sessionStats);
}

// Demo sequence
endHand('player');
endHand('dealer');
endHand('player');
console.log('Continuing while not game over...');
