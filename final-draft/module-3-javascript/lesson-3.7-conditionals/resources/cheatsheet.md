
Quick reference for if/else statements, comparison operators, logical operators, and switch statements.

## If/Else Statements# Conditionals Cheatsheet 🎲
### Basic If Statement
```javascript
if (condition) {
    // Runs only if condition is true
}
```

### If/Else Statement
```javascript
if (condition) {
    // Runs if condition is true
} else {
    // Runs if condition is false
}
```

### If/Else If/Else Chain
```javascript
if (condition1) {
    // Runs if condition1 is true
} else if (condition2) {
    // Runs if condition2 is true
} else if (condition3) {
    // Runs if condition3 is true
} else {
    // Runs if all conditions are false
}
```

### Nested If Statements
```javascript
if (condition1) {
    if (condition2) {
        // Runs if BOTH conditions are true
    }
}
```

## Comparison Operators

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `===` | Strict Equal | `5 === 5` | `true` |
| `!==` | Strict Not Equal | `5 !== 3` | `true` |
| `>` | Greater Than | `10 > 5` | `true` |
| `<` | Less Than | `3 < 8` | `true` |
| `>=` | Greater or Equal | `5 >= 5` | `true` |
| `<=` | Less or Equal | `4 <= 7` | `true` |

### Examples
```javascript
let age = 18;

if (age === 18) {
    // Exactly 18
}

if (age !== 21) {
    // Not 21
}

if (age >= 18) {
    // 18 or older
}

if (age < 21) {
    // Under 21
}
```

### String Comparison
```javascript
let name = 'Alice';

if (name === 'Alice') {
    // Name is Alice
}

// Strings are compared alphabetically
if ('apple' < 'banana') {
    // true - 'a' comes before 'b'
}
```

## Logical Operators

### AND Operator (&&)
Both conditions must be true
```javascript
if (age >= 18 && hasLicense) {
    // Can drive: age is 18+ AND has license
}

// Truth table
true && true   // → true
true && false  // → false
false && true  // → false
false && false // → false
```

### OR Operator (||)
At least one condition must be true
```javascript
if (age < 13 || age > 65) {
    // Gets discount: under 13 OR over 65
}

// Truth table
true || true   // → true
true || false  // → true
false || true  // → true
false || false // → false
```

### NOT Operator (!)
Flips the boolean value
```javascript
if (!isLoggedIn) {
    // Not logged in
}

// Truth table
!true  // → false
!false // → true
```

### Combining Operators
```javascript
// Complex conditions
if ((age >= 18 && hasLicense) || hasParent) {
    // Can drive if: (18+ AND has license) OR has parent
}

if (age >= 13 && age <= 19) {
    // Teenager (between 13 and 19 inclusive)
}

if (!(age < 18)) {
    // Same as: age >= 18
}
```

## Switch Statements

### Basic Switch
```javascript
switch (variable) {
    case value1:
        // Code if variable === value1
        break;
    case value2:
        // Code if variable === value2
        break;
    default:
        // Code if no cases match
}
```

### Multiple Cases (Fall-through)
```javascript
switch (month) {
    case 12:
    case 1:
    case 2:
        season = 'Winter';
        break;
    case 3:
    case 4:
    case 5:
        season = 'Spring';
        break;
    default:
        season = 'Unknown';
}
```

### Switch vs If/Else
Use switch when checking one variable against many specific values:

```javascript
// Using if/else
if (day === 1) {
    dayName = 'Monday';
} else if (day === 2) {
    dayName = 'Tuesday';
} else if (day === 3) {
    dayName = 'Wednesday';
}

// Using switch (cleaner!)
switch (day) {
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
}
```

## Truthy and Falsy Values

Values that are considered **false** in conditions:
- `false`
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

Everything else is **truthy**!

```javascript
if (username) {
    // Runs if username is not empty
}

if (!password) {
    // Runs if password is empty
}
```

## Common Patterns

### Range Checking
```javascript
if (score >= 90 && score <= 100) {
    grade = 'A';
}

// Alternative using nested conditions
if (score >= 0 && score <= 100) {
    if (score >= 90) {
        grade = 'A';
    }
}
```

### Validation
```javascript
// Check if input is valid
if (input === '' || input === null) {
    alert('Please enter a value!');
}

// Check if number is in valid range
if (age < 0 || age > 120) {
    alert('Invalid age!');
}
```

### Multiple Conditions
```javascript
// All must be true
if (username !== '' && password !== '' && agreeToTerms) {
    // Can submit form
}

// At least one must be true
if (isStudent || isSenior || hasCoupon) {
    // Gets discount
}
```

### Nested Login Check
```javascript
if (username === 'admin') {
    if (password === 'secret123') {
        alert('Login successful!');
    } else {
        alert('Wrong password!');
    }
} else {
    alert('User not found!');
}
```

## Ternary Operator (Shorthand)

For simple if/else, you can use the ternary operator:

```javascript
// Regular if/else
if (age >= 18) {
    message = 'Adult';
} else {
    message = 'Minor';
}

// Ternary operator (shorter)
message = age >= 18 ? 'Adult' : 'Minor';

// Format: condition ? valueIfTrue : valueIfFalse
```

## Common Mistakes to Avoid

### 1. Using = instead of ===
```javascript
// WRONG - assigns instead of compares
if (age = 18) {
    // This sets age to 18!
}

// CORRECT
if (age === 18) {
    // This compares age to 18
}
```

### 2. Forgetting break in switch
```javascript
// WRONG - falls through to next case
switch (day) {
    case 1:
        name = 'Monday';
        // Missing break! Will also run case 2!
    case 2:
        name = 'Tuesday';
        break;
}

// CORRECT
switch (day) {
    case 1:
        name = 'Monday';
        break; // Stops here
    case 2:
        name = 'Tuesday';
        break;
}
```

### 3. Using == instead of ===
```javascript
// AVOID - loose comparison (can have unexpected results)
if (5 == '5') {
    // true - converts string to number
}

// PREFER - strict comparison
if (5 === '5') {
    // false - different types
}
```

### 4. Confusing && and ||
```javascript
// WRONG - can never be true!
if (age === 18 || age === 19 && hasID) {
    // Confusing logic
}

// CORRECT - use parentheses for clarity
if ((age === 18 || age === 19) && hasID) {
    // Clear: (18 or 19) AND has ID
}
```

## Quick Tips

1. **Use ===** instead of == for comparisons
2. **Always include break** in switch cases (unless you want fall-through)
3. **Use parentheses** to make complex conditions clear
4. **Check for empty input** before processing
5. **Order matters** in if/else if chains - first true condition wins
6. **Use switch** for checking one variable against many values
7. **Use if/else** for ranges or complex conditions
8. **Test edge cases** like 0, empty string, negative numbers

## Practice Challenge

Can you predict what these print?

```javascript
let x = 10;
let y = 5;

console.log(x > 5 && y < 10);  // ?
console.log(x === 10 || y === 10);  // ?
console.log(!(x < y));  // ?

let grade = 'B';
switch (grade) {
    case 'A':
    case 'B':
        console.log('Good job!');
        break;
    case 'C':
        console.log('You passed!');
        break;
}
// What prints?
```

<details>
<summary>Answers</summary>

```
true && true = true
true || false = true
!(false) = true
"Good job!"
```
</details>