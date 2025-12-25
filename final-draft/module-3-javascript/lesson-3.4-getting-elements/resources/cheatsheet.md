# Getting Elements Cheatsheet 📝

## The Three Methods

### getElementById()
```javascript
let element = document.getElementById('element-id');
```
- **Returns**: Single element or `null`
- **Use for**: Getting one specific element by its unique ID
- **Speed**: Fastest
- **Note**: Don't include `#` symbol!

### querySelector()
```javascript
let element = document.querySelector('.class-name');
let element = document.querySelector('#id-name');
let element = document.querySelector('tag-name');
```
- **Returns**: First matching element or `null`
- **Use for**: Getting first element matching any CSS selector
- **Speed**: Fast
- **Note**: Include `#` for IDs, `.` for classes

### querySelectorAll()
```javascript
let elements = document.querySelectorAll('.class-name');
```
- **Returns**: NodeList (array-like) with all matches
- **Use for**: Getting all elements matching a selector
- **Speed**: Slower (has to find all matches)
- **Note**: Returns empty NodeList if no matches (not `null`)

## Common Selector Patterns

```javascript
// By ID
document.getElementById('score')
document.querySelector('#score')

// By class
document.querySelector('.enemy')          // First enemy
document.querySelectorAll('.enemy')       // All enemies

// By tag
document.querySelector('button')          // First button
document.querySelectorAll('button')       // All buttons

// By attribute
document.querySelector('[data-type="boss"]')           // First boss
document.querySelectorAll('[data-level]')             // All with data-level

// Complex selectors
document.querySelector('#menu button')                // Button inside menu
document.querySelectorAll('.container > .card')       // Direct children
document.querySelector('button.action-btn')           // Button with class
```

## Working with NodeLists

```javascript
let items = document.querySelectorAll('.item');

// Get count
console.log(items.length);

// Access individual elements
let first = items[0];
let second = items[1];

// Loop through - Method 1
for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
}

// Loop through - Method 2
items.forEach(function(item, index) {
    console.log(item);
});
```

## Checking if Elements Exist

```javascript
let element = document.getElementById('might-not-exist');

if (element) {
    // Element exists, safe to use
    console.log(element.textContent);
} else {
    // Element doesn't exist
    console.log('Element not found!');
}

// For NodeList
let items = document.querySelectorAll('.item');
if (items.length > 0) {
    // Found some items
} else {
    // No items found
}
```

## Best Practices

### ✅ DO:

```javascript
// Store elements in variables
let scoreDisplay = document.getElementById('score');
console.log(scoreDisplay.textContent);

// Use getElementById for IDs (fastest)
let player = document.getElementById('player');

// Use descriptive variable names
let healthBar = document.getElementById('health');
let enemyList = document.querySelectorAll('.enemy');

// Check if element exists
if (scoreDisplay) {
    // Safe to use
}
```

### ❌ DON'T:

```javascript
// Don't get element repeatedly (slow!)
console.log(document.getElementById('score').textContent);
console.log(document.getElementById('score').textContent);
console.log(document.getElementById('score').textContent);

// Don't include # with getElementById
let wrong = document.getElementById('#score');  // Wrong!
let correct = document.getElementById('score'); // Correct

// Don't forget quotes
let wrong = document.getElementById(score);     // Error!
let correct = document.getElementById('score'); // Correct
```

## Common Mistakes

### Mistake 1: Including # or . in getElementById
```javascript
❌ document.getElementById('#score')
❌ document.getElementById('.enemy')
✅ document.getElementById('score')
```

### Mistake 2: Forgetting # or . in querySelector
```javascript
❌ document.querySelector('my-class')
✅ document.querySelector('.my-class')
```

### Mistake 3: Treating NodeList like single element
```javascript
let enemies = document.querySelectorAll('.enemy');
❌ enemies.textContent          // Doesn't work
✅ enemies[0].textContent       // Works (first enemy)
✅ enemies.length               // Works (count)
```

### Mistake 4: Not checking if element exists
```javascript
❌ let elem = document.getElementById('missing');
   console.log(elem.textContent);  // Error if null!

✅ let elem = document.getElementById('missing');
   if (elem) {
       console.log(elem.textContent);
   }
```

## Practical Examples

### Game Interface
```javascript
// Get player stats
let playerHealth = document.getElementById('health');
let playerMana = document.getElementById('mana');
let playerScore = document.getElementById('score');

// Get all enemies
let enemies = document.querySelectorAll('.enemy');
console.log('Fighting ' + enemies.length + ' enemies');

// Get specific enemy type
let bosses = document.querySelectorAll('[data-type="boss"]');

// Get all buttons
let actionButtons = document.querySelectorAll('.action-btn');
```

### Form Elements
```javascript
// Get input fields
let username = document.getElementById('username');
let email = document.getElementById('email');

// Get all checkboxes
let skills = document.querySelectorAll('input[type="checkbox"]');

// Get dropdown
let raceSelect = document.getElementById('race');
```

### Organizing Elements
```javascript
let game = {
    player: {
        health: document.getElementById('health'),
        mana: document.getElementById('mana'),
        score: document.getElementById('score')
    },
    
    enemies: {
        all: document.querySelectorAll('.enemy'),
        bosses: document.querySelectorAll('[data-type="boss"]')
    },
    
    ui: {
        buttons: document.querySelectorAll('button'),
        menu: document.getElementById('menu')
    }
};

// Easy access
console.log('Health:', game.player.health.textContent);
console.log('Total enemies:', game.enemies.all.length);
```

## When to Use Which Method

| Scenario | Method | Reason |
|----------|--------|--------|
| Get specific element by ID | `getElementById` | Fastest, clearest |
| Get first item of a class | `querySelector` | Flexible, clear intent |
| Get all items of a class | `querySelectorAll` | Need collection |
| Complex CSS selector | `querySelector/All` | Most flexible |
| Element with attribute | `querySelector/All` | Only option |

## Quick Decision Tree

1. **Is it a unique element with an ID?**
   - Yes → Use `getElementById()`
   
2. **Do you need ALL matching elements?**
   - Yes → Use `querySelectorAll()`
   
3. **Do you need the FIRST matching element?**
   - Yes → Use `querySelector()`

## Summary

- **getElementById**: Fast, for unique elements with IDs
- **querySelector**: Flexible, for first match with any selector
- **querySelectorAll**: For all matches, returns NodeList
- Always store elements in variables
- Check if elements exist before using
- Use descriptive variable names
- Organize related elements into objects

## Remember

Getting elements is the FIRST step. In the next lesson (3.5), you'll learn how to **change** these elements - their text, styles, and more!