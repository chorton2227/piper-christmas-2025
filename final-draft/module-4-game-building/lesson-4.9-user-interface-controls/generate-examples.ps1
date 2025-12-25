# Script to generate complete example files for Lesson 4.9

$examplesDir = "$PSScriptRoot\examples"
$answerKeyDir = "$PSScriptRoot\answer-key"

Write-Host "Generating complete example files for Lesson 4.9..." -ForegroundColor Green

# Create Example 2: Player Seats (15-18KB target)
$example2Content = @'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example 2: Player Seats - User Interface & Controls</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
            color: white;
            padding: 20px;
            min-height: 100vh;
        }
        
        .container { max-width: 1400px; margin: 0 auto; }
        
        h1 {
            text-align: center;
            margin-bottom: 10px;
            color: #4CAF50;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        
        .description {
            text-align: center;
            color: #ddd;
            margin-bottom: 30px;
        }
        
        .poker-table {
            background: radial-gradient(ellipse at center, #1a5d1a 0%, #0d4d0d 100%);
            border-radius: 50%;
            padding: 80px 60px;
            box-shadow: 
                inset 0 0 100px rgba(0, 0, 0, 0.3),
                0 10px 50px rgba(0, 0, 0, 0.5);
            border: 20px solid #8b4513;
            position: relative;
            aspect-ratio: 16/9;
            max-width: 1000px;
            margin: 20px auto;
            min-height: 600px;
        }
        
        .player-seat {
            position: absolute;
            width: 180px;
            background: rgba(0, 0, 0, 0.7);
            border-radius: 12px;
            padding: 10px;
            border: 3px solid transparent;
            transition: all 0.3s;
            backdrop-filter: blur(5px);
        }
        
        .player-seat.active {
            border-color: #ffd700;
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
        }
        
        .player-seat.folded { opacity: 0.5; }
        
        .player-info { text-align: center; margin-bottom: 8px; }
        .player-name { font-weight: bold; font-size: 14px; color: #fff; margin-bottom: 4px; }
        .player-chips { color: #ffd700; font-size: 16px; font-weight: bold; }
        .player-status { font-size: 11px; color: #aaa; margin-top: 2px; }
        .player-status.folded { color: #f44336; }
        
        .player-cards {
            display: flex;
            gap: 5px;
            justify-content: center;
            margin: 8px 0;
            min-height: 60px;
        }
        
        .card {
            background: white;
            border: 2px solid #333;
            border-radius: 6px;
            padding: 8px 6px;
            font-size: 18px;
            font-weight: bold;
            min-width: 40px;
            text-align: center;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }
        
        .card.hearts, .card.diamonds { color: #d32f2f; }
        .card.clubs, .card.spades { color: #000; }
        
        .card.face-down {
            background: linear-gradient(135deg, #1565c0 0%, #0d47a1 100%);
            color: transparent;
            border-color: #0d47a1;
        }
        
        .card.face-down::after {
            content: '🂠';
            color: #fff;
            font-size: 20px;
        }
        
        .dealer-button {
            position: absolute;
            top: -15px;
            right: 10px;
            background: white;
            border: 3px solid #ffd700;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: #000;
            font-size: 14px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
        }
        
        .seat-0 { bottom: 10%; left: 50%; transform: translateX(-50%); }
        .seat-1 { top: 30%; left: 5%; }
        .seat-2 { top: 10%; left: 50%; transform: translateX(-50%); }
        .seat-3 { top: 30%; right: 5%; }
        .seat-6-0 { bottom: 10%; left: 50%; transform: translateX(-50%); }
        .seat-6-1 { bottom: 30%; left: 5%; }
        .seat-6-2 { top: 30%; left: 5%; }
        .seat-6-3 { top: 10%; left: 50%; transform: translateX(-50%); }
        .seat-6-4 { top: 30%; right: 5%; }
        .seat-6-5 { bottom: 30%; right: 5%; }
        
        .controls { text-align: center; margin-top: 30px; }
        
        button {
            background: #4CAF50;
            color: white;
            border: none;
            padding: 12px 24px;
            font-size: 16px;
            border-radius: 5px;
            cursor: pointer;
            margin: 5px;
            transition: all 0.3s ease;
        }
        
        button:hover { 
            background: #45a049;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }
        
        .debug {
            font-family: monospace;
            background: #1e1e1e;
            color: #4ec9b0;
            padding: 15px;
            border-radius: 5px;
            margin-top: 20px;
            white-space: pre-wrap;
            max-height: 400px;
            overflow-y: auto;
            border: 1px solid #333;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🪑 Example 2: Player Seats</h1>
        <p class="description">Creating individual player seat components with cards, chips, status, and dealer button positioning</p>
        
        <div id="poker-table" class="poker-table"></div>
        
        <div class="controls">
            <button onclick="testFourPlayers()">Test: 4 Players</button>
            <button onclick="testSixPlayers()">Test: 6 Players</button>
            <button onclick="testFoldedPlayers()">Test: Some Folded</button>
        </div>
        
        <div id="debug" class="debug"></div>
    </div>

    <script>
        console.log('Example 2: Player Seats\n');
        
        function createCard(rank, suit, faceDown = false) {
            const card = document.createElement('div');
            if (faceDown) {
                card.className = 'card face-down';
            } else {
                card.className = 'card ' + suit;
                const symbols = { 'hearts': '♥', 'diamonds': '♦', 'clubs': '♣', 'spades': '♠' };
                card.textContent = rank + symbols[suit];
            }
            return card;
        }
        
        function createPlayerSeat(player, seatNumber, totalSeats) {
            const seat = document.createElement('div');
            const seatClass = totalSeats === 4 ? `seat-${seatNumber}` : `seat-6-${seatNumber}`;
            seat.className = `player-seat ${seatClass}`;
            
            if (player.isActive) seat.classList.add('active');
            if (player.hasFolded) seat.classList.add('folded');
            
            const info = document.createElement('div');
            info.className = 'player-info';
            info.innerHTML = `
                <div class="player-name">${player.name}</div>
                <div class="player-chips">$${player.chips}</div>
                ${player.hasFolded ? '<div class="player-status folded">Folded</div>' : 
                  player.lastAction ? `<div class="player-status">${player.lastAction}</div>` : ''}
            `;
            
            const cardsContainer = document.createElement('div');
            cardsContainer.className = 'player-cards';
            
            if (player.cards && player.cards.length > 0) {
                player.cards.forEach(card => {
                    cardsContainer.appendChild(createCard(card.rank, card.suit, card.faceDown));
                });
            } else if (!player.hasFolded) {
                cardsContainer.appendChild(createCard('', '', true));
                cardsContainer.appendChild(createCard('', '', true));
            }
            
            seat.appendChild(info);
            seat.appendChild(cardsContainer);
            
            if (player.isDealer) {
                const dealerBtn = document.createElement('div');
                dealerBtn.className = 'dealer-button';
                dealerBtn.textContent = 'D';
                seat.appendChild(dealerBtn);
            }
            
            return seat;
        }
        
        function renderTable(players) {
            const table = document.getElementById('poker-table');
            table.innerHTML = '';
            players.forEach((player, index) => {
                table.appendChild(createPlayerSeat(player, index, players.length));
            });
        }
        
        function testFourPlayers() {
            console.log('\n=== Test Case 1: 4-Player Table ===');
            const players = [
                { name: 'You', chips: 1000, cards: [{ rank: 'A', suit: 'spades' }, { rank: 'K', suit: 'spades' }], isActive: true, isDealer: false, hasFolded: false, lastAction: 'Your turn' },
                { name: 'Alice', chips: 850, cards: [{ rank: '', suit: '', faceDown: true }, { rank: '', suit: '', faceDown: true }], isActive: false, isDealer: true, hasFolded: false, lastAction: 'Call $20' },
                { name: 'Bob', chips: 1250, cards: [{ rank: '', suit: '', faceDown: true }, { rank: '', suit: '', faceDown: true }], isActive: false, isDealer: false, hasFolded: false, lastAction: 'Raise $40' },
                { name: 'Charlie', chips: 600, cards: [{ rank: '', suit: '', faceDown: true }, { rank: '', suit: '', faceDown: true }], isActive: false, isDealer: false, hasFolded: false, lastAction: 'Check' }
            ];
            renderTable(players);
            console.log('✓ Created 4-player table');
            console.log('✓ Your cards: A♠ K♠');
            console.log('✓ Active player highlighted (You)');
            console.log('✓ Dealer button on Alice');
        }
        
        function testSixPlayers() {
            console.log('\n=== Test Case 2: 6-Player Table ===');
            const players = [
                { name: 'You', chips: 1000, cards: [{ rank: 'Q', suit: 'hearts' }, { rank: 'Q', suit: 'diamonds' }], isActive: false, isDealer: false, hasFolded: false, lastAction: 'Call $30' },
                { name: 'Alice', chips: 850, cards: [{ rank: '', suit: '', faceDown: true }, { rank: '', suit: '', faceDown: true }], isActive: false, isDealer: false, hasFolded: false, lastAction: 'Call $30' },
                { name: 'Bob', chips: 1250, cards: [{ rank: '', suit: '', faceDown: true }, { rank: '', suit: '', faceDown: true }], isActive: true, isDealer: true, hasFolded: false, lastAction: 'To act' },
                { name: 'Charlie', chips: 600, cards: [{ rank: '', suit: '', faceDown: true }, { rank: '', suit: '', faceDown: true }], isActive: false, isDealer: false, hasFolded: false, lastAction: 'Raise $30' },
                { name: 'Diana', chips: 1500, cards: [{ rank: '', suit: '', faceDown: true }, { rank: '', suit: '', faceDown: true }], isActive: false, isDealer: false, hasFolded: false, lastAction: 'Call $30' },
                { name: 'Eve', chips: 900, cards: [{ rank: '', suit: '', faceDown: true }, { rank: '', suit: '', faceDown: true }], isActive: false, isDealer: false, hasFolded: false, lastAction: 'Check' }
            ];
            renderTable(players);
            console.log('✓ Created 6-player table');
            console.log('✓ Your cards: Q♥ Q♦');
            console.log('✓ Active player: Bob (Dealer)');
        }
        
        function testFoldedPlayers() {
            console.log('\n=== Test Case 3: Some Players Folded ===');
            const players = [
                { name: 'You', chips: 1000, cards: [{ rank: 'J', suit: 'clubs' }, { rank: '10', suit: 'clubs' }], isActive: true, isDealer: false, hasFolded: false, lastAction: 'Your turn' },
                { name: 'Alice', chips: 850, cards: [], isActive: false, isDealer: false, hasFolded: true },
                { name: 'Bob', chips: 1350, cards: [{ rank: '', suit: '', faceDown: true }, { rank: '', suit: '', faceDown: true }], isActive: false, isDealer: true, hasFolded: false, lastAction: 'Raise $50' },
                { name: 'Charlie', chips: 600, cards: [], isActive: false, isDealer: false, hasFolded: true }
            ];
            renderTable(players);
            console.log('✓ Folded players shown with reduced opacity');
            console.log('✓ Your cards: J♣ 10♣');
        }
        
        const originalLog = console.log;
        console.log = function(...args) {
            originalLog.apply(console, args);
            document.getElementById('debug').textContent += args.join(' ') + '\n';
        };
        
        console.log('✓ Player seat components loaded');
        console.log('✓ Support for 4-player and 6-player tables');
        console.log('\nClick buttons to test different configurations!');
    </script>
</body>
</html>
'@

Set-Content -Path "$examplesDir\example-2-player-seats.html" -Value $example2Content -Encoding UTF8
$size = [Math]::Round(($example2Content.Length/1KB),1)
Write-Host "Created example-2-player-seats.html ($size KB)" -ForegroundColor Cyan

Write-Host "All example files created successfully" -ForegroundColor Green
