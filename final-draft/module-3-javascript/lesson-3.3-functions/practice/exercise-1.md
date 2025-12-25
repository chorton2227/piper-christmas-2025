
# Exercise 1: Function Library 📚

Create a collection of useful helper functions that you can reuse in your programs!

---

## 🎯 Your Mission

Build a library of at least **12 useful functions** organized into categories. Each function should be small, focused, and well-named.

---

## 📋 Requirements

### Function Categories

Create at least **3 functions** in each category:

#### 1. Math Functions
Functions that perform calculations and return results.

Examples:
- `add(a, b)` - Add two numbers
- `subtract(a, b)` - Subtract two numbers
- `multiply(a, b)` - Multiply two numbers
- `calculateSquare(number)` - Calculate number squared
- `calculateCircleArea(radius)` - Calculate area of a circle
- `isEven(number)` - Check if number is even (return true/false)

#### 2. String Functions
Functions that work with text.

Examples:
- `makeGreeting(name)` - Create greeting message
- `makeFullName(firstName, lastName)` - Combine names
- `countCharacters(text)` - Return length of text
- `repeatText(text, times)` - Repeat text multiple times
- `makeUppercase(text)` - Convert to uppercase
- `makeShoutMessage(text)` - Add exclamation marks

#### 3. Check Functions (Return Boolean)
Functions that check conditions and return true or false.

Examples:
- `isAdult(age)` - Check if age 18+
- `isPasswordLong(password)` - Check if 8+ characters
- `hasEnoughMoney(price, money)` - Check if can afford
- `isPositive(number)` - Check if number > 0
- `isWeekend(dayNumber)` - Check if Saturday (6) or Sunday (7)
- `canVote(age)` - Check if old enough to vote

#### 4. Display Functions
Functions that show formatted output (use console.log, don't return).

Examples:
- `displayWelcome(name)` - Show welcome message
- `displayStats(health, mana, level)` - Show game stats
- `displayDivider()` - Show line of dashes or equals
- `displayBox(message)` - Show message in a box
- `displayList(item1, item2, item3)` - Show numbered list

---

## 💡 Testing Your Functions

After creating each function, **call it** to test it works!

Example:
```javascript
// Create function
function add(a, b) {
    return a + b;
}

// Test it
console.log('Testing add():');
console.log('5 + 3 =', add(5, 3));
console.log('10 + 20 =', add(10, 20));
```

---

## 📝 Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Function Library</title>
</head>
<body>
    <h1>My Function Library</h1>
    <p>Open the console (F12) to see the functions!</p>

    <script>
        console.log('====================================');
        console.log('MY FUNCTION LIBRARY');
        console.log('====================================');

        // ====================
        // MATH FUNCTIONS
        // ====================
        
        console.log('\nMATH FUNCTIONS:');
        console.log('--------------------');

        // Create your math functions here
        function add(a, b) {
            return a + b;
        }

        // Test them
        console.log('5 + 3 =', add(5, 3));


        // ====================
        // STRING FUNCTIONS
        // ====================
        
        console.log('\nSTRING FUNCTIONS:');
        console.log('--------------------');

        // Create your string functions here


        // ====================
        // CHECK FUNCTIONS
        // ====================
        
        console.log('\nCHECK FUNCTIONS:');
        console.log('--------------------');

        // Create your boolean check functions here


        // ====================
        // DISPLAY FUNCTIONS
        // ====================
        
        console.log('\nDISPLAY FUNCTIONS:');
        console.log('--------------------');

        // Create your display functions here


        console.log('\n====================================');
        console.log('LIBRARY COMPLETE!');
        console.log('====================================');
    </script>
</body>
</html>
```

---

## ✅ Checklist

- [ ] Created HTML file `function-library.html`
- [ ] At least 3 math functions created
- [ ] At least 3 string functions created
- [ ] At least 3 check functions (return boolean)
- [ ] At least 3 display functions
- [ ] Total of at least 12 functions
- [ ] Each function has a clear, descriptive name
- [ ] Each function tested with console.log
- [ ] Functions organized by category with comments
- [ ] All functions work correctly

---

## 🌟 Bonus Challenges

Want to go further?

1. **Conversion Functions** - Create functions that convert units (miles to km, °F to °C, etc.)
2. **Game Functions** - Create functions for a game (rollDice, calculateDamage, healPlayer)
3. **Array Functions** - Create functions that work with lists (getFirst, getLast, countItems)
4. **Validation Functions** - More checking functions (isValidEmail, isStrongPassword)
5. **Format Functions** - Functions that format output (formatMoney, formatDate, formatPhone)

---

## 💭 Tips

- **Name functions with verbs** - `calculate`, `display`, `check`, `make`, `get`, `is`, `has`
- **Keep functions short** - If too long, break into smaller functions
- **One job per function** - Each function should do ONE thing
- **Test as you go** - Test each function right after creating it
- **Use good parameter names** - `name` not `n`, `price` not `p`
- **Add comments** - Explain what each function does
- **Organize by category** - Use comments to separate different types of functions

---

## 🎯 Success Criteria

You're done when:
- You have at least 12 working functions
- Functions are organized into clear categories
- Each function has been tested
- Function names clearly describe what they do
- You can explain what each function does
- All functions work correctly with no errors

Good luck! 🚀