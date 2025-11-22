# Practice Exercise 3: Form Element Collection

## Objective
Practice getting form elements including inputs, selects, checkboxes, and buttons. Learn to organize form data and validate that all required elements exist.

## Instructions

Create a character creation form for a game, then write JavaScript to find and work with all form elements.

### Part 1: Create Character Form HTML (20 minutes)

Create an HTML file with a complete character creation form:

#### Basic Information:
- Text input with `id="char-name"` for character name
- Text input with `id="player-email"` for player email
- Number input with `id="age"` for age

#### Character Class (Radio Buttons):
- At least 4 radio inputs with `name="class"` and `class="class-radio"`
- Options: Warrior, Mage, Rogue, Paladin (or your own choices)
- Each should have unique `id` and `value` attributes

#### Character Race (Dropdown):
- Select element with `id="race"` and `class="form-select"`
- At least 4 options: Human, Elf, Dwarf, Orc, etc.

#### Skills (Checkboxes):
- At least 6 checkbox inputs with `class="skill-checkbox"`
- Each with unique `id`, `name`, and `value`
- Examples: Swordsmanship, Magic, Stealth, Crafting, Archery, Healing

#### Character Appearance:
- Text input with `id="hair-color"` for hair color
- Number input with `id="height"` for height in cm
- Textarea with `id="backstory"` for character backstory

#### Special Attributes:
- Range input with `id="strength"` (min 1, max 10)
- Range input with `id="intelligence"` (min 1, max 10)
- Range input with `id="agility"` (min 1, max 10)

#### Form Actions:
- Button with `id="create-btn"` and `class="form-btn"` (Create Character)
- Button with `id="reset-btn"` and `class="form-btn"` (Reset Form)
- Button with `id="preview-btn"` and `class="form-btn"` (Preview)

### Part 2: Get Basic Input Elements (10 minutes)

Use `getElementById()` to get basic inputs:

```javascript
// Get basic inputs
let charName = document.getElementById('char-name');
let playerEmail = document.getElementById('player-email');
let age = document.getElementById('age');

console.log('Basic inputs found:');
console.log('  Character name input:', charName);
console.log('  Email input:', playerEmail);
console.log('  Age input:', age);

// Get current values
console.log('Current values:');
console.log('  Name:', charName.value);
console.log('  Email:', playerEmail.value);
console.log('  Age:', age.value);
```

**Requirements**:
- Get all basic text/number inputs by ID
- Log each element
- Display current values (even if empty)
- Check that all elements exist

### Part 3: Get Radio Buttons (10 minutes)

Work with radio button groups:

```javascript
// Get all class radio buttons
let classRadios = document.querySelectorAll('.class-radio');

console.log('Character classes:');
console.log('  Total options:', classRadios.length);

// Loop through and display options
classRadios.forEach(function(radio) {
    console.log('  Option:', radio.value, '- Checked:', radio.checked);
});

// Find which one is checked
let selectedClass = null;
classRadios.forEach(function(radio) {
    if (radio.checked) {
        selectedClass = radio.value;
    }
});
console.log('Selected class:', selectedClass || 'None selected');
```

**Requirements**:
- Get all radio buttons in the group
- Display how many options
- Show value of each option
- Determine which (if any) is selected
- Handle case where none selected

### Part 4: Get Dropdown Elements (10 minutes)

Work with select dropdowns:

```javascript
// Get race select
let raceSelect = document.getElementById('race');

console.log('Race selection:');
console.log('  Element:', raceSelect);
console.log('  Current value:', raceSelect.value);
console.log('  Number of options:', raceSelect.options.length);

// List all options
for (let i = 0; i < raceSelect.options.length; i++) {
    let option = raceSelect.options[i];
    console.log('  Option ' + (i + 1) + ':', option.value, '(' + option.text + ')');
}
```

**Requirements**:
- Get select element by ID
- Display current selected value
- Count available options
- List all option values and text
- Check if default option is selected

### Part 5: Get Checkboxes (15 minutes)

Work with skill checkboxes:

```javascript
// Get all skill checkboxes
let skillCheckboxes = document.querySelectorAll('.skill-checkbox');

console.log('Available skills:');
console.log('  Total skills:', skillCheckboxes.length);

// Show all skills and their checked status
skillCheckboxes.forEach(function(checkbox, index) {
    let label = document.querySelector('label[for="' + checkbox.id + '"]');
    let labelText = label ? label.textContent : checkbox.value;
    console.log('  Skill ' + (index + 1) + ':', labelText, '- Selected:', checkbox.checked);
});

// Get list of selected skills
let selectedSkills = [];
skillCheckboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
        selectedSkills.push(checkbox.value);
    }
});
console.log('Selected skills:', selectedSkills.length > 0 ? selectedSkills.join(', ') : 'None');
```

**Requirements**:
- Get all skill checkboxes
- Display total number of skills
- Show checked status of each
- Create array of selected skills
- Handle case where none selected

### Part 6: Get Range Inputs (10 minutes)

Work with attribute sliders:

```javascript
// Get attribute sliders
let strength = document.getElementById('strength');
let intelligence = document.getElementById('intelligence');
let agility = document.getElementById('agility');

console.log('Character attributes:');
console.log('  Strength: ' + strength.value + '/' + strength.max);
console.log('  Intelligence: ' + intelligence.value + '/' + intelligence.max);
console.log('  Agility: ' + agility.value + '/' + agility.max);

// Calculate total points
let totalPoints = parseInt(strength.value) + parseInt(intelligence.value) + parseInt(agility.value);
console.log('  Total points:', totalPoints);
```

**Requirements**:
- Get all range inputs by ID
- Display current value and maximum
- Calculate total attribute points
- Show min/max ranges

### Part 7: Get Form Buttons (10 minutes)

Get all form action buttons:

```javascript
// Get buttons individually
let createBtn = document.getElementById('create-btn');
let resetBtn = document.getElementById('reset-btn');
let previewBtn = document.getElementById('preview-btn');

// Get all as collection
let allFormBtns = document.querySelectorAll('.form-btn');

console.log('Form actions:');
console.log('  Create button:', createBtn.textContent);
console.log('  Reset button:', resetBtn.textContent);
console.log('  Preview button:', previewBtn.textContent);
console.log('  Total buttons:', allFormBtns.length);
```

**Requirements**:
- Get each button by ID
- Get all buttons as collection
- Display button text
- Verify count matches

### Part 8: Create Form Object (20 minutes)

Organize all form elements:

```javascript
let characterForm = {
    // Basic inputs
    basic: {
        name: document.getElementById('char-name'),
        email: document.getElementById('player-email'),
        age: document.getElementById('age')
    },
    
    // Radio buttons
    class: {
        all: document.querySelectorAll('.class-radio'),
        getSelected: function() {
            let selected = null;
            this.all.forEach(function(radio) {
                if (radio.checked) selected = radio.value;
            });
            return selected;
        }
    },
    
    // Select dropdown
    race: document.getElementById('race'),
    
    // Checkboxes
    skills: {
        all: document.querySelectorAll('.skill-checkbox'),
        getSelected: function() {
            let selected = [];
            this.all.forEach(function(checkbox) {
                if (checkbox.checked) selected.push(checkbox.value);
            });
            return selected;
        }
    },
    
    // Appearance
    appearance: {
        hairColor: document.getElementById('hair-color'),
        height: document.getElementById('height'),
        backstory: document.getElementById('backstory')
    },
    
    // Attributes
    attributes: {
        strength: document.getElementById('strength'),
        intelligence: document.getElementById('intelligence'),
        agility: document.getElementById('agility'),
        getTotal: function() {
            return parseInt(this.strength.value) + 
                   parseInt(this.intelligence.value) + 
                   parseInt(this.agility.value);
        }
    },
    
    // Buttons
    buttons: {
        create: document.getElementById('create-btn'),
        reset: document.getElementById('reset-btn'),
        preview: document.getElementById('preview-btn'),
        all: document.querySelectorAll('.form-btn')
    }
};

console.log('Character form object created!');
```

**Requirements**:
- Organize all elements into logical structure
- Include helper methods for getting selected values
- Group related elements together
- Make all elements easily accessible

### Part 9: Form Validation (15 minutes)

Check that all required elements exist:

```javascript
console.log('=== FORM VALIDATION ===');

// Check basic inputs
let hasName = characterForm.basic.name !== null;
let hasEmail = characterForm.basic.email !== null;
let hasAge = characterForm.basic.age !== null;

console.log('Basic inputs:');
console.log('  Name input exists:', hasName);
console.log('  Email input exists:', hasEmail);
console.log('  Age input exists:', hasAge);

// Check radio buttons
let hasClassOptions = characterForm.class.all.length >= 4;
console.log('Character class:');
console.log('  Has 4+ class options:', hasClassOptions);
console.log('  Actual count:', characterForm.class.all.length);

// Check checkboxes
let hasSkills = characterForm.skills.all.length >= 6;
console.log('Skills:');
console.log('  Has 6+ skills:', hasSkills);
console.log('  Actual count:', characterForm.skills.all.length);

// Check attributes
let hasAllAttributes = characterForm.attributes.strength &&
                       characterForm.attributes.intelligence &&
                       characterForm.attributes.agility;
console.log('Attributes:');
console.log('  All attribute sliders exist:', hasAllAttributes);

// Check buttons
let hasAllButtons = characterForm.buttons.all.length === 3;
console.log('Buttons:');
console.log('  Has all 3 buttons:', hasAllButtons);

// Overall validation
let formComplete = hasName && hasEmail && hasAge && hasClassOptions &&
                   hasSkills && hasAllAttributes && hasAllButtons;
console.log('');
console.log('✓ Form complete:', formComplete);
```

**Requirements**:
- Verify all required elements exist
- Check counts of collections (radios, checkboxes)
- Report any missing elements
- Display overall validation status

### Part 10: Display Form Summary (10 minutes)

Create a comprehensive summary:

```javascript
console.log('=== FORM SUMMARY ===');
console.log('');
console.log('📝 Basic Information:');
console.log('  Name field:', characterForm.basic.name.value || 'Empty');
console.log('  Email field:', characterForm.basic.email.value || 'Empty');
console.log('  Age field:', characterForm.basic.age.value || 'Empty');
console.log('');

console.log('⚔️ Character Class:');
console.log('  Available classes:', characterForm.class.all.length);
console.log('  Selected:', characterForm.class.getSelected() || 'None');
console.log('');

console.log('🧝 Race:');
console.log('  Selected:', characterForm.race.value || 'None');
console.log('');

console.log('🎯 Skills:');
console.log('  Available skills:', characterForm.skills.all.length);
let selected = characterForm.skills.getSelected();
console.log('  Selected skills:', selected.length > 0 ? selected.join(', ') : 'None');
console.log('');

console.log('💪 Attributes:');
console.log('  Strength:', characterForm.attributes.strength.value);
console.log('  Intelligence:', characterForm.attributes.intelligence.value);
console.log('  Agility:', characterForm.attributes.agility.value);
console.log('  Total points:', characterForm.attributes.getTotal());
console.log('');

console.log('🎨 Appearance:');
console.log('  Hair color:', characterForm.appearance.hairColor.value || 'Not set');
console.log('  Height:', characterForm.appearance.height.value + ' cm' || 'Not set');
console.log('  Backstory:', characterForm.appearance.backstory.value ? 'Provided' : 'Empty');
```

**Requirements**:
- Display all form sections
- Show current values (or empty status)
- Use helper methods for selections
- Format output clearly
- Calculate totals where applicable

## Success Criteria

✅ You've successfully completed this exercise when:

1. Complete character creation form is built
2. All input types are included (text, number, radio, checkbox, select, range, textarea)
3. All elements are retrieved correctly
4. Form object is organized logically
5. Helper methods work for getting selected values
6. Validation confirms all elements exist
7. Summary displays all form data
8. No errors in console
9. Form structure is clear and accessible

## Common Challenges

### Challenge: "How do I get the selected radio button?"
**Solution**:
```javascript
let selected = null;
let radios = document.querySelectorAll('input[name="class"]');
radios.forEach(function(radio) {
    if (radio.checked) selected = radio.value;
});
```

### Challenge: "How do I get selected checkboxes?"
**Solution**:
```javascript
let selected = [];
let checkboxes = document.querySelectorAll('.skill-checkbox');
checkboxes.forEach(function(cb) {
    if (cb.checked) selected.push(cb.value);
});
```

### Challenge: "How do I get the selected dropdown value?"
**Solution**:
```javascript
let select = document.getElementById('race');
let value = select.value;  // Gets current selection
```

### Challenge: "How do I count range input values?"
**Solution**:
```javascript
let slider = document.getElementById('strength');
let value = parseInt(slider.value);  // Convert to number
```

## Bonus Challenges

1. **Value Validation**: Check if form values are valid (e.g., name not empty, age reasonable)
2. **Character Preview**: Create a function that returns a formatted character summary
3. **Form Completeness**: Calculate percentage of form completed
4. **Export Data**: Create a function that collects all form data into a single object
5. **Reset Detector**: Create a function that checks if form has been modified from defaults

## Example Output

```
=== FORM SUMMARY ===

📝 Basic Information:
  Name field: Aragorn
  Email field: ranger@middleearth.com
  Age field: 87

⚔️ Character Class:
  Available classes: 4
  Selected: Ranger

🧝 Race:
  Selected: Human

🎯 Skills:
  Available skills: 6
  Selected skills: Swordsmanship, Archery, Stealth

💪 Attributes:
  Strength: 8
  Intelligence: 6
  Agility: 9
  Total points: 23

✓ Form validation passed!
```

## Time Estimate
- Part 1 (HTML): 20 minutes
- Parts 2-7: 65 minutes
- Part 8 (Object): 20 minutes
- Part 9 (Validation): 15 minutes
- Part 10 (Summary): 10 minutes
- **Total: ~130 minutes**

## Next Steps

After completing this exercise:
1. Compare with the answer key
2. Think about how you'll change these values in the next lesson!
3. Consider how you'd validate form data
4. Practice with different form types
