# Lesson 3.7: Conditionals (if/else)

## Introduction

Imagine you're playing a video game. When you reach a fork in the road, you have to make a choice: go left or go right. Each choice leads to a different outcome. **Conditionals** in JavaScript work the same way—they let your code make decisions and do different things based on whether something is true or false.

In this lesson, you'll learn how to use `if`, `else`, `else if`, comparison operators, logical operators, and `switch` statements to make your programs smart and interactive!

---

## What Are Conditionals?

A **conditional** is a piece of code that only runs **if** a certain condition is true.

Think of it like this:
- **If** it's raining, bring an umbrella
- **If** you're hungry, eat a snack
- **If** the door is locked, use a key

In JavaScript, we use **if statements** to make these kinds of decisions.

---

## Basic if Statement

The simplest conditional is an `if` statement. It checks if something is true, and if it is, it runs the code inside.

### Syntax

```javascript
if (condition) {
    // Code to run if condition is true
}
```

### Example

```javascript
let age = 10;

if (age >= 10) {
    console.log("You're old enough to play this game!");
}
```

**What happens:**
- JavaScript checks: Is `age` greater than or equal to 10?
- Since `age` is 10, the condition is **true**
- The message appears in the console

---

## if/else Statement

Sometimes you want to do one thing if a condition is true, and a **different** thing if it's false. That's what `else` is for!

### Syntax

```javascript
if (condition) {
    // Code to run if condition is true
} else {
    // Code to run if condition is false
}
```

### Example

```javascript
let temperature = 65;

if (temperature > 70) {
    console.log("It's warm outside!");
} else {
    console.log("It's cool outside!");
}
```

**What happens:**
- JavaScript checks: Is temperature greater than 70?
- Since 65 is NOT greater than 70, the condition is **false**
- The `else` block runs instead
- Output: "It's cool outside!"

---

## else if Statement

What if you have **more than two** possibilities? You can use `else if` to check multiple conditions!

### Syntax

```javascript
if (condition1) {
    // Code for condition1
} else if (condition2) {
    // Code for condition2
} else if (condition3) {
    // Code for condition3
} else {
    // Code if none of the above are true
}
```

### Example

```javascript
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
```

**What happens:**
- JavaScript checks each condition **in order**
- First check: Is score >= 90? No (85 < 90)
- Second check: Is score >= 80? **Yes!** (85 >= 80)
- Runs that block: "Grade: B"
- **Stops checking** the rest (even though 85 >= 70 and 85 >= 60 are also true)

**Important:** JavaScript only runs the **first** condition that's true, then skips the rest!

---

## Comparison Operators

To make conditions, we need to **compare** things. JavaScript has special operators for this:

| Operator | Meaning | Example | Result |
|----------|---------|---------|--------|
| `===` | Equal to (strict) | `5 === 5` | `true` |
| `!==` | Not equal to | `5 !== 3` | `true` |
| `>` | Greater than | `10 > 5` | `true` |
| `<` | Less than | `3 < 7` | `true` |
| `>=` | Greater than or equal | `5 >= 5` | `true` |
| `<=` | Less than or equal | `4 <= 3` | `false` |

### Examples

```javascript
let age = 12;

if (age === 12) {
    console.log("You are exactly 12 years old");
}

if (age > 10) {
    console.log("You are older than 10");
}

if (age < 20) {
    console.log("You are younger than 20");
}

if (age >= 12) {
    console.log("You are at least 12");
}

if (age !== 15) {
    console.log("You are not 15");
}
```

**All of these** would run because they're all true!

### Why === Instead of ==?

JavaScript has TWO equality operators:
- `==` (loose equality) - tries to convert types and compare
- `===` (strict equality) - compares value AND type

**Always use `===`** to avoid weird bugs!

```javascript
// Loose equality (can be confusing!)
console.log(5 == "5");   // true (converts "5" to a number)
console.log(0 == false); // true (converts false to 0)

// Strict equality (recommended!)
console.log(5 === "5");   // false (number vs string)
console.log(0 === false); // false (number vs boolean)
```

---

## Logical Operators

Sometimes you need to check **multiple conditions** at once. That's where logical operators come in!

### AND Operator (&&)

Use `&&` when **both** conditions must be true.

```javascript
let age = 14;
let hasTicket = true;

if (age >= 13 && hasTicket) {
    console.log("You can enter the movie!");
}
```

**Both conditions must be true:**
- Is age >= 13? Yes (14 >= 13)
- Is hasTicket true? Yes
- **Result:** Message appears!

If EITHER condition was false, the whole thing would be false.

### OR Operator (||)

Use `||` when **at least one** condition must be true.

```javascript
let day = "Saturday";

if (day === "Saturday" || day === "Sunday") {
    console.log("It's the weekend!");
}
```

**At least one must be true:**
- Is day "Saturday"? Yes!
- **Result:** Message appears! (doesn't even need to check the second condition)

### NOT Operator (!)

Use `!` to **reverse** a condition (true becomes false, false becomes true).

```javascript
let isRaining = false;

if (!isRaining) {
    console.log("You don't need an umbrella!");
}
```

**What happens:**
- `isRaining` is false
- `!isRaining` (NOT false) becomes **true**
- Message appears!

### Combining Logical Operators

You can combine these to make complex conditions!

```javascript
let age = 16;
let hasLicense = true;
let hasCar = false;

if (age >= 16 && hasLicense && hasCar) {
    console.log("You can drive to school!");
} else if (age >= 16 && hasLicense) {
    console.log("You can drive, but you need a car!");
} else {
    console.log("You need a license first!");
}
```

---

## Truthy and Falsy Values

In JavaScript, **everything** has a true or false value when used in a condition!

### Falsy Values (act like false)
- `false`
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN` (Not a Number)

### Truthy Values (act like true)
- Everything else!
- `true`
- Any non-zero number (`1`, `-5`, `3.14`)
- Any non-empty string (`"hello"`, `"0"`, `" "`)
- Arrays and objects (`[]`, `{}`)

### Examples

```javascript
let username = "";

if (username) {
    console.log("Welcome, " + username);
} else {
    console.log("Please enter a username");
}
// Output: "Please enter a username" (empty string is falsy)

let score = 0;

if (score) {
    console.log("You scored: " + score);
} else {
    console.log("You haven't scored yet");
}
// Output: "You haven't scored yet" (0 is falsy)
```

**Be careful!** Sometimes you want to check specifically for `0` or `""`:

```javascript
let score = 0;

if (score !== undefined) {
    console.log("Score: " + score); // This works correctly!
}
```

---

## Switch Statements

When you have **many** possible values to check, a `switch` statement can be cleaner than lots of `else if` statements.

### Syntax

```javascript
switch (expression) {
    case value1:
        // Code for value1
        break;
    case value2:
        // Code for value2
        break;
    case value3:
        // Code for value3
        break;
    default:
        // Code if no cases match
}
```

### Example: Day of the Week

```javascript
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName); // Output: "Wednesday"
```

### The break Statement

**Important:** You MUST include `break;` after each case, or JavaScript will keep running into the next case!

```javascript
let grade = "B";

switch (grade) {
    case "A":
        console.log("Excellent!");
        break; // Stops here
    case "B":
        console.log("Good job!");
        break; // Stops here
    case "C":
        console.log("Keep trying!");
        break; // Stops here
    default:
        console.log("Invalid grade");
}
// Output: "Good job!"
```

**Without break:**

```javascript
let grade = "B";

switch (grade) {
    case "A":
        console.log("Excellent!");
    case "B":
        console.log("Good job!");
    case "C":
        console.log("Keep trying!");
    default:
        console.log("Invalid grade");
}
// Output: "Good job!" "Keep trying!" "Invalid grade" (all run!)
```

### Multiple Cases with Same Code

Sometimes you want multiple cases to do the same thing:

```javascript
let day = "Saturday";

switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("It's a weekday - time for school!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend - time to relax!");
        break;
    default:
        console.log("That's not a day!");
}
// Output: "It's the weekend - time to relax!"
```

---

## Nested Conditionals

You can put conditionals **inside** other conditionals! This is called **nesting**.

### Example

```javascript
let age = 16;
let hasTicket = true;

if (age >= 13) {
    // First check: old enough?
    if (hasTicket) {
        // Second check: has ticket?
        console.log("Enjoy the movie!");
    } else {
        console.log("You need to buy a ticket first!");
    }
} else {
    console.log("Sorry, you're too young for this movie");
}
```

**What happens:**
- First checks: Is age >= 13? Yes (16 >= 13)
- Goes inside that block
- Second checks: Is hasTicket true? Yes
- Output: "Enjoy the movie!"

### Be Careful with Deep Nesting!

Too much nesting makes code hard to read:

```javascript
// Hard to read!
if (condition1) {
    if (condition2) {
        if (condition3) {
            if (condition4) {
                // What are we even checking anymore?
            }
        }
    }
}
```

**Better:** Use logical operators instead:

```javascript
// Much clearer!
if (condition1 && condition2 && condition3 && condition4) {
    // Easy to understand!
}
```

---

## Ternary Operator (Shortcut)

For simple if/else statements, there's a shortcut called the **ternary operator**.

### Syntax

```javascript
condition ? valueIfTrue : valueIfFalse
```

### Example

Instead of this:

```javascript
let age = 15;
let status;

if (age >= 18) {
    status = "Adult";
} else {
    status = "Minor";
}
```

You can write this:

```javascript
let age = 15;
let status = age >= 18 ? "Adult" : "Minor";
```

**Both do the same thing!** The ternary operator is just shorter.

### When to Use It

✅ **Good for simple assignments:**

```javascript
let price = isMember ? 10 : 15;
let message = isLoggedIn ? "Welcome back!" : "Please log in";
let color = score > 50 ? "green" : "red";
```

❌ **Avoid for complex logic:**

```javascript
// Hard to read!
let result = condition1 ? (condition2 ? value1 : value2) : (condition3 ? value3 : value4);

// Better as if/else:
let result;
if (condition1) {
    if (condition2) {
        result = value1;
    } else {
        result = value2;
    }
} else {
    if (condition3) {
        result = value3;
    } else {
        result = value4;
    }
}
```

---

## Common Patterns

### Pattern 1: Input Validation

Check if user input is valid before using it:

```javascript
let username = prompt("Enter your username:");

if (username === "" || username === null) {
    alert("Please enter a username!");
} else if (username.length < 3) {
    alert("Username must be at least 3 characters!");
} else {
    alert("Welcome, " + username + "!");
}
```

### Pattern 2: Range Checking

Check if a number is within a range:

```javascript
let age = 25;

if (age >= 18 && age <= 65) {
    console.log("You're in the working age range");
}

// Or check if OUTSIDE a range:
if (age < 18 || age > 65) {
    console.log("You're outside the working age range");
}
```

### Pattern 3: Multiple Conditions with Variables

Store complex conditions in variables for clarity:

```javascript
let age = 16;
let hasLicense = true;
let hasCar = true;
let hasInsurance = false;

let canDrive = age >= 16 && hasLicense;
let canDriveOwn = canDrive && hasCar && hasInsurance;

if (canDriveOwn) {
    console.log("You can drive your own car!");
} else if (canDrive) {
    console.log("You can drive, but need a car with insurance!");
} else {
    console.log("You can't drive yet!");
}
```

### Pattern 4: Guard Clauses

Check for problems first, then run main code:

```javascript
function processOrder(item, quantity) {
    // Check for problems first (guard clauses)
    if (item === "") {
        console.log("Error: No item specified");
        return;
    }
    
    if (quantity <= 0) {
        console.log("Error: Invalid quantity");
        return;
    }
    
    if (quantity > 100) {
        console.log("Error: Quantity too large");
        return;
    }
    
    // Main code only runs if all checks pass
    console.log("Processing order: " + quantity + " " + item);
}
```

---

## Conditionals with Events

Conditionals become really powerful when combined with events!

### Example: Button Click with Conditions

```javascript
let score = 0;

document.getElementById('clickButton').addEventListener('click', function() {
    score++;
    
    if (score < 10) {
        console.log("Keep clicking! Score: " + score);
    } else if (score < 20) {
        console.log("You're doing great! Score: " + score);
    } else if (score < 50) {
        console.log("Wow, you're on fire! Score: " + score);
    } else {
        console.log("LEGENDARY! Score: " + score);
    }
});
```

### Example: Form Validation

```javascript
document.getElementById('submitButton').addEventListener('click', function() {
    let age = document.getElementById('ageInput').value;
    let name = document.getElementById('nameInput').value;
    
    if (name === "") {
        alert("Please enter your name!");
        return;
    }
    
    if (age === "" || age < 1 || age > 120) {
        alert("Please enter a valid age!");
        return;
    }
    
    alert("Form submitted successfully!");
});
```

---

## Debugging Conditionals

### Use console.log to See What's Happening

```javascript
let age = 15;
let hasTicket = false;

console.log("Age:", age);
console.log("Has ticket:", hasTicket);

if (age >= 13 && hasTicket) {
    console.log("Condition is TRUE");
    console.log("You can watch the movie!");
} else {
    console.log("Condition is FALSE");
    console.log("You cannot watch the movie");
}
```

### Check Each Part of Complex Conditions

```javascript
let a = 10;
let b = 20;
let c = 30;

console.log("a > 5:", a > 5);           // true
console.log("b < 15:", b < 15);         // false
console.log("c === 30:", c === 30);     // true

let result = (a > 5) && (b < 15) && (c === 30);
console.log("Final result:", result);   // false (because b < 15 is false)
```

### Common Mistakes to Check

**Mistake 1: Using = instead of ===**

```javascript
let score = 10;

// WRONG - assigns 20 to score!
if (score = 20) {
    console.log("This always runs!");
}

// CORRECT - compares score to 20
if (score === 20) {
    console.log("This only runs if score is 20");
}
```

**Mistake 2: Forgetting break in switch**

```javascript
// WRONG - all cases run!
switch (day) {
    case 1:
        console.log("Monday");
    case 2:
        console.log("Tuesday");
}

// CORRECT - only one case runs
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
}
```

**Mistake 3: Wrong logical operator**

```javascript
let age = 15;

// WRONG - both can't be true at once!
if (age > 18 && age < 13) {
    console.log("This never runs!");
}

// CORRECT - use OR for ranges outside
if (age > 18 || age < 13) {
    console.log("Not a teenager");
}
```

---

## When to Use What

### Use if/else when:
- You have 1-3 conditions to check
- Conditions are complex (use &&, ||, etc.)
- Conditions involve ranges (>, <, etc.)

```javascript
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else {
    grade = "C";
}
```

### Use switch when:
- You're checking ONE variable against many exact values
- You have 4+ possible values
- Each case is simple and discrete

```javascript
switch (dayOfWeek) {
    case "Monday":
        console.log("Start of the week!");
        break;
    case "Friday":
        console.log("Almost weekend!");
        break;
    // ... more cases
}
```

### Use ternary operator when:
- You have a simple if/else
- You're assigning a value based on a condition
- It fits on one line comfortably

```javascript
let status = isOnline ? "Active" : "Offline";
```

---

## Practice Challenge

Try to predict what each of these will output:

```javascript
// Challenge 1
let x = 10;
if (x > 5) {
    console.log("A");
} else {
    console.log("B");
}

// Challenge 2
let y = 7;
if (y > 10) {
    console.log("C");
} else if (y > 5) {
    console.log("D");
} else {
    console.log("E");
}

// Challenge 3
let a = true;
let b = false;
if (a && b) {
    console.log("F");
} else if (a || b) {
    console.log("G");
} else {
    console.log("H");
}

// Challenge 4
let grade = "B";
switch (grade) {
    case "A":
    case "B":
        console.log("Great!");
        break;
    case "C":
        console.log("Good!");
        break;
    default:
        console.log("Keep trying!");
}
```

<details>
<summary>Click to see answers</summary>

1. **Output: "A"** - x (10) is greater than 5, so the if block runs
2. **Output: "D"** - y (7) is not greater than 10, but IS greater than 5, so else if runs
3. **Output: "G"** - a && b is false (true AND false = false), but a || b is true (true OR false = true)
4. **Output: "Great!"** - grade is "B", which matches the second case, and that code runs until break

</details>

---

## Summary

In this lesson, you learned:

✅ **if statements** - run code when a condition is true  
✅ **else statements** - run different code when a condition is false  
✅ **else if statements** - check multiple conditions in order  
✅ **Comparison operators** - ===, !==, >, <, >=, <=  
✅ **Logical operators** - && (and), || (or), ! (not)  
✅ **Truthy and falsy values** - what counts as true or false  
✅ **switch statements** - check one value against many possibilities  
✅ **Ternary operator** - shortcut for simple if/else  
✅ **Nested conditionals** - conditions inside conditions  
✅ **Common patterns** - validation, ranges, guard clauses  

Conditionals are the foundation of making decisions in code. Master these, and you can make your programs smart and interactive!

---

## What's Next?

Now that you understand conditionals, you're ready for the practice exercises!

**In the practice folder, you'll build:**
1. **Grade Calculator** - Convert numeric scores to letter grades
2. **Login System** - Validate username and password with multiple checks
3. **Adventure Game** - Create a text-based game with branching story paths

Each exercise will help you practice using if/else, comparison operators, logical operators, and switch statements in real projects!

Happy coding! 🎮
