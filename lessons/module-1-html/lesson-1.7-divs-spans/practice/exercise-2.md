# Exercise 2: Game Card Collection

## 📝 Instructions

Create an HTML page called `game-cards.html` that displays at least **3 game cards** using a consistent div structure.

## Requirements

1. Create a complete HTML document
2. Add a main heading: "My Game Collection"
3. Create **3 or more game cards**, each with the same structure:
   - Game card container div (class="game-card")
   - Card header div with game title
   - Card body div with game details
   - Card footer div with additional info

4. Each game should include:
   - Game title
   - Platform (PC, Xbox, PlayStation, Switch, etc.)
   - Genre
   - Rating
   - Brief description
   - Play time or purchase date

5. Use **spans** to label specific data (like "Platform:", "Genre:", etc.)

## Example Structure

```html
<div class="game-card">
    <div class="card-header">
        <h2>Game Title</h2>
    </div>
    
    <div class="card-body">
        <p><span class="label">Platform:</span> <span class="value">PC</span></p>
        <p><span class="label">Genre:</span> <span class="value">Adventure</span></p>
        <p><span class="label">Rating:</span> <span class="value">5/5</span></p>
        
        <div class="description">
            <p>Game description here...</p>
        </div>
    </div>
    
    <div class="card-footer">
        <p>Played: 50 hours</p>
    </div>
</div>
```

## 🎯 Challenge

- Create 5+ game cards
- Add a "currently-playing" class to your favorite game card
- Include a stats section showing total games, total play time, favorite genre
- Use divs to separate different types of information within each card

## 💡 Tips

- Keep the structure identical for each card
- Use consistent class names
- Separate cards with `<hr>` tags for now
- Think about what information matters most for each game

## ✅ When You're Done

Verify that:
- [ ] At least 3 game cards are complete
- [ ] Each card has the same structure
- [ ] Cards use consistent class names
- [ ] Spans are used for labels and values
- [ ] All cards have complete information
- [ ] Description text is included for each game
