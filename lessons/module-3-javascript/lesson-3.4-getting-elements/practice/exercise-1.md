# Practice Exercise 1: Element Finder Challenge

## Objective
Practice getting HTML elements using `getElementById()`, `querySelector()`, and `querySelectorAll()`. Build confidence selecting different types of elements.

## Instructions

Create an HTML file with various elements, then write JavaScript to find and log information about them.

### Part 1: Create Your HTML (10 minutes)

Create an HTML file with the following elements:

1. **Unique IDs** (use getElementById):
   - A heading with `id="page-title"`
   - A paragraph with `id="description"`
   - A div with `id="game-area"`
   - A button with `id="start-btn"`
   - An input with `id="username"`

2. **Classes** (use querySelector and querySelectorAll):
   - At least 5 div elements with `class="card"`
   - At least 3 buttons with `class="action-btn"`
   - At least 4 paragraphs with `class="info"`

3. **Data Attributes**:
   - 3 elements with `data-type="enemy"` (can be divs)
   - 2 elements with `data-type="item"` (can be divs)
   - Elements should also have descriptive text content

### Part 2: Get Single Elements (15 minutes)

Write JavaScript to get and log each unique element:

```javascript
// Get element by ID
let pageTitle = document.getElementById('page-title');
console.log('Page title:', pageTitle);
console.log('Title text:', pageTitle.textContent);

// Do this for all 5 elements with IDs
```

**Requirements**:
- Get all 5 elements with IDs
- Log each element
- Log the text content of each element
- Check if each element exists before logging

### Part 3: Get First Matches (15 minutes)

Use `querySelector()` to get the first element of each type:

```javascript
// Get first card
let firstCard = document.querySelector('.card');
console.log('First card:', firstCard);

// Get first button with class
let firstActionBtn = document.querySelector('.action-btn');
console.log('First action button:', firstActionBtn);

// Continue for other elements...
```

**Requirements**:
- Get first `.card` element
- Get first `.action-btn` button
- Get first `.info` paragraph
- Get first element with `data-type` attribute
- Get first element with `data-type="enemy"`

### Part 4: Get All Matches (15 minutes)

Use `querySelectorAll()` to get collections:

```javascript
// Get all cards
let allCards = document.querySelectorAll('.card');
console.log('Number of cards:', allCards.length);

// Loop through and log each
allCards.forEach(function(card, index) {
    console.log('Card ' + (index + 1) + ':', card.textContent);
});

// Do this for other collections...
```

**Requirements**:
- Get all `.card` elements and log how many
- Get all `.action-btn` buttons and loop through them
- Get all `.info` paragraphs and display their text
- Get all elements with `data-type="enemy"` attribute
- Get all elements with `data-type="item"` attribute

### Part 5: Element Analysis (15 minutes)

Write code to analyze your page:

```javascript
// Count different element types
let totalCards = document.querySelectorAll('.card').length;
let totalButtons = document.querySelectorAll('button').length;
let totalParagraphs = document.querySelectorAll('p').length;

console.log('Page Statistics:');
console.log('  Cards:', totalCards);
console.log('  Buttons:', totalButtons);
console.log('  Paragraphs:', totalParagraphs);

// Continue counting other elements...
```

**Requirements**:
- Count total cards
- Count total buttons
- Count total paragraphs
- Count enemies vs items (using data-type attribute)
- Calculate total number of elements with classes

### Part 6: Complex Selectors (10 minutes)

Practice more advanced selectors:

```javascript
// Get button inside game-area
let gameButton = document.querySelector('#game-area button');

// Get all paragraphs inside cards
let cardParagraphs = document.querySelectorAll('.card p');

// Get elements with specific attributes
let enemies = document.querySelectorAll('[data-type="enemy"]');
```

**Requirements**:
- Select element inside another element (descendant)
- Select elements with multiple classes
- Select by attribute value
- Select first child of a container

## Success Criteria

✅ You've successfully completed this exercise when:

1. All elements with IDs are found and logged
2. First elements of each type are found using querySelector
3. All collections are retrieved with querySelectorAll
4. You've looped through collections and displayed information
5. Page statistics are calculated correctly
6. No errors in the console
7. All element checks confirm elements exist

## Common Challenges

### Challenge: "I get null when trying to get an element"
**Solution**: Check these:
- Is the ID/class spelled correctly?
- Did you include quotes around the selector?
- For querySelector with IDs, did you include the # symbol?
- Is your JavaScript running after the HTML loads?

### Challenge: "querySelectorAll returns empty NodeList"
**Solution**: 
- Check if elements with that class/selector exist
- Verify the selector syntax (. for classes, # for IDs)
- Remember: empty NodeList is not an error, just means no matches

### Challenge: "How do I access individual elements in a NodeList?"
**Solution**:
- Use bracket notation: `allCards[0]` for first element
- Use .length to see how many: `allCards.length`
- Use forEach to loop: `allCards.forEach(function(card) { ... })`

## Bonus Challenges

Once you complete the main exercise, try these:

1. **Categorization**: Group elements by type and display organized summary
2. **Element Properties**: Get and log other properties like className, id, tagName
3. **Nested Selection**: Get elements inside other selected elements
4. **Attribute Values**: Extract and display data-type values from all elements
5. **First vs All**: Compare results of querySelector vs querySelectorAll for same selector

## Example Output

Your console should show something like:

```
=== Single Elements ===
Page title: <h1 id="page-title">...</h1>
Title text: My Awesome Page
Description: <p id="description">...</p>
...

=== First Matches ===
First card: <div class="card">...</div>
First action button: <button class="action-btn">...</button>
...

=== Collections ===
Number of cards: 5
Card 1: Player Card
Card 2: Enemy Card
...

=== Page Statistics ===
Cards: 5
Buttons: 4
Paragraphs: 8
Enemies: 3
Items: 2
```

## Time Estimate
- Part 1: 10 minutes
- Part 2: 15 minutes
- Part 3: 15 minutes
- Part 4: 15 minutes
- Part 5: 15 minutes
- Part 6: 10 minutes
- **Total: ~80 minutes**

## Next Steps

After completing this exercise:
1. Check the answer key to compare solutions
2. Try Exercise 2 for a more complex game interface
3. Experiment with different selector combinations
4. Practice until getting elements feels natural!
