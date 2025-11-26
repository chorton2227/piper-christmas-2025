# Lesson 3.11: JavaScript Objects 🎯

## Introduction

Welcome to objects! Objects are one of the most powerful and important features in JavaScript. They let you group related information together and organize your code in a more natural way.

Think of an object like a real-world thing:
- A **person** has a name, age, and favorite color
- A **car** has a brand, color, and speed
- A **pet** has a name, type, and age

In JavaScript, we can create objects to represent these things!

## What is an Object?

An **object** is a collection of related data and functions:
- **Properties**: Data (like name, age, color)
- **Methods**: Functions that belong to the object

### Simple Example
```javascript
// Creating an object
let person = {
    name: "Piper",
    age: 10,
    favoriteColor: "purple"
};

// Using the object
console.log(person.name);  // Piper
console.log(person.age);   // 10
```

## Creating Objects

### Method 1: Object Literal (Most Common)
```javascript
let dog = {
    name: "Buddy",
    breed: "Golden Retriever",
    age: 3,
    color: "golden"
};
```

### Method 2: Using new Object()
```javascript
let cat = new Object();
cat.name = "Whiskers";
cat.age = 2;
cat.color = "orange";
```

### Empty Object (Add Properties Later)
```javascript
let emptyObject = {};
emptyObject.property1 = "value1";
emptyObject.property2 = "value2";
```

## Accessing Properties

### Dot Notation (Most Common)
```javascript
let car = {
    brand: "Tesla",
    model: "Model 3",
    year: 2024
};

console.log(car.brand);  // Tesla
console.log(car.year);   // 2024
```

### Bracket Notation (For Dynamic Access)
```javascript
let propertyName = "model";
console.log(car[propertyName]);  // Model 3

// Also useful for properties with spaces (not recommended)
let weird = {
    "my property": "value"
};
console.log(weird["my property"]);  // value
```

## Modifying Objects

### Changing Properties
```javascript
let person = {
    name: "Alex",
    age: 10
};

// Change a property
person.age = 11;
console.log(person.age);  // 11

// Add a new property
person.grade = 5;
console.log(person.grade);  // 5

// Remove a property
delete person.age;
console.log(person.age);  // undefined
```

## Object Methods

Methods are **functions inside objects**:

```javascript
let calculator = {
    // Properties
    brand: "MathPro",
    color: "blue",
    
    // Methods
    add: function(a, b) {
        return a + b;
    },
    
    subtract: function(a, b) {
        return a - b;
    },
    
    multiply: function(a, b) {
        return a * b;
    }
};

// Using methods
console.log(calculator.add(5, 3));       // 8
console.log(calculator.multiply(4, 5));  // 20
```

### Shorthand Method Syntax (Modern)
```javascript
let calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    }
};
```

## The `this` Keyword

`this` refers to the **object itself**:

```javascript
let person = {
    firstName: "Piper",
    lastName: "Smith",
    age: 10,
    
    // Method using 'this'
    introduce: function() {
        return "Hi! I'm " + this.firstName + " " + this.lastName + 
               " and I'm " + this.age + " years old.";
    },
    
    haveBirthday: function() {
        this.age = this.age + 1;
        return "Happy birthday! You're now " + this.age;
    }
};

console.log(person.introduce());  
// Hi! I'm Piper Smith and I'm 10 years old.

console.log(person.haveBirthday());  
// Happy birthday! You're now 11
```

### Why Use `this`?

Without `this`, you'd have to repeat the object name:
```javascript
// ❌ Without 'this' - repetitive
let person = {
    name: "Piper",
    greet: function() {
        return "Hi, I'm " + person.name;  // using 'person'
    }
};

// ✅ With 'this' - flexible
let person = {
    name: "Piper",
    greet: function() {
        return "Hi, I'm " + this.name;  // using 'this'
    }
};
```

## Nested Objects

Objects can contain other objects:

```javascript
let student = {
    name: "Piper",
    age: 10,
    address: {
        street: "123 Main St",
        city: "Springfield",
        state: "IL",
        zipCode: "62701"
    },
    grades: {
        math: 95,
        science: 92,
        reading: 98
    }
};

// Accessing nested properties
console.log(student.address.city);     // Springfield
console.log(student.grades.math);      // 95
```

## Arrays of Objects

Very common pattern - a list of similar objects:

```javascript
let students = [
    {
        name: "Piper",
        age: 10,
        grade: "A"
    },
    {
        name: "Alex",
        age: 11,
        grade: "B"
    },
    {
        name: "Sam",
        age: 10,
        grade: "A"
    }
];

// Access specific student
console.log(students[0].name);  // Piper
console.log(students[1].age);   // 11

// Loop through students
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name + " got a " + students[i].grade);
}

// Using forEach
students.forEach(function(student) {
    console.log(student.name + " is " + student.age + " years old");
});
```

## Useful Object Operations

### Check if Property Exists
```javascript
let person = {
    name: "Piper",
    age: 10
};

console.log("name" in person);     // true
console.log("height" in person);   // false
```

### Get All Property Names
```javascript
let car = {
    brand: "Honda",
    model: "Civic",
    year: 2024
};

let keys = Object.keys(car);
console.log(keys);  // ["brand", "model", "year"]
```

### Get All Values
```javascript
let values = Object.values(car);
console.log(values);  // ["Honda", "Civic", 2024]
```

### Copy an Object
```javascript
let original = { name: "Piper", age: 10 };

// Shallow copy
let copy = Object.assign({}, original);

// Modern way (spread operator)
let copy2 = { ...original };
```

## Real-World Examples

### Example 1: Video Game Character
```javascript
let character = {
    name: "Hero",
    health: 100,
    mana: 50,
    level: 1,
    inventory: ["sword", "shield", "potion"],
    
    takeDamage: function(damage) {
        this.health = this.health - damage;
        if (this.health < 0) {
            this.health = 0;
        }
        return "Health: " + this.health;
    },
    
    heal: function(amount) {
        this.health = this.health + amount;
        if (this.health > 100) {
            this.health = 100;
        }
        return "Healed! Health: " + this.health;
    },
    
    levelUp: function() {
        this.level++;
        this.health = 100;
        this.mana = 50;
        return "Level up! Now level " + this.level;
    }
};
```

### Example 2: Bank Account
```javascript
let account = {
    owner: "Piper",
    balance: 100,
    accountNumber: "12345",
    
    deposit: function(amount) {
        this.balance = this.balance + amount;
        return "Deposited $" + amount + ". New balance: $" + this.balance;
    },
    
    withdraw: function(amount) {
        if (amount > this.balance) {
            return "Insufficient funds!";
        }
        this.balance = this.balance - amount;
        return "Withdrew $" + amount + ". New balance: $" + this.balance;
    },
    
    checkBalance: function() {
        return "Balance: $" + this.balance;
    }
};
```

### Example 3: Pet Tracker
```javascript
let pet = {
    name: "Fluffy",
    type: "cat",
    age: 2,
    hunger: 50,
    happiness: 80,
    
    feed: function() {
        this.hunger = Math.max(0, this.hunger - 20);
        this.happiness = Math.min(100, this.happiness + 10);
        return this.name + " ate! Hunger: " + this.hunger;
    },
    
    play: function() {
        this.hunger = Math.min(100, this.hunger + 10);
        this.happiness = Math.min(100, this.happiness + 20);
        return this.name + " is happy! Happiness: " + this.happiness;
    },
    
    sleep: function() {
        this.hunger = Math.min(100, this.hunger + 15);
        this.happiness = Math.min(100, this.happiness + 5);
        return this.name + " is rested!";
    },
    
    getStatus: function() {
        return this.name + " - Hunger: " + this.hunger + 
               ", Happiness: " + this.happiness;
    }
};
```

## Common Patterns

### Factory Function (Create Multiple Similar Objects)
```javascript
function createPerson(name, age, favoriteColor) {
    return {
        name: name,
        age: age,
        favoriteColor: favoriteColor,
        introduce: function() {
            return "Hi! I'm " + this.name + " and I'm " + this.age;
        }
    };
}

let person1 = createPerson("Piper", 10, "purple");
let person2 = createPerson("Alex", 11, "blue");

console.log(person1.introduce());  // Hi! I'm Piper and I'm 10
console.log(person2.introduce());  // Hi! I'm Alex and I'm 11
```

### Configuration Objects
```javascript
function createGame(config) {
    let game = {
        title: config.title || "Untitled Game",
        difficulty: config.difficulty || "normal",
        maxPlayers: config.maxPlayers || 1,
        
        start: function() {
            console.log("Starting " + this.title + "...");
            console.log("Difficulty: " + this.difficulty);
            console.log("Max players: " + this.maxPlayers);
        }
    };
    return game;
}

let game1 = createGame({
    title: "Super Adventure",
    difficulty: "hard",
    maxPlayers: 4
});

let game2 = createGame({ title: "Quick Game" });
```

## Common Mistakes

### 1. Forgetting `this`
```javascript
// ❌ Wrong
let person = {
    name: "Piper",
    greet: function() {
        return "Hi, I'm " + name;  // 'name' is not defined
    }
};

// ✅ Correct
let person = {
    name: "Piper",
    greet: function() {
        return "Hi, I'm " + this.name;
    }
};
```

### 2. Missing Commas Between Properties
```javascript
// ❌ Wrong
let person = {
    name: "Piper"
    age: 10  // Missing comma above!
};

// ✅ Correct
let person = {
    name: "Piper",
    age: 10
};
```

### 3. Trying to Call a Property Like a Method
```javascript
let person = {
    name: "Piper"
};

// ❌ Wrong
console.log(person.name());  // Error: name is not a function

// ✅ Correct
console.log(person.name);    // Piper
```

## Practice Exercises

Try these in the `practice` folder:

1. **Exercise 1**: Create a Character Creator for a video game
2. **Exercise 2**: Build a Simple To-Do List Manager  
3. **Exercise 3**: Make a Virtual Pet Simulator

## Quick Reference

### Creating Objects
```javascript
let obj = { property: value };
let obj = new Object();
let obj = {};
```

### Accessing Properties
```javascript
obj.property
obj["property"]
```

### Methods
```javascript
let obj = {
    method: function() { }
    // or
    method() { }
};
```

### Using `this`
```javascript
let obj = {
    prop: "value",
    method: function() {
        return this.prop;
    }
};
```

### Arrays of Objects
```javascript
let arr = [
    { name: "Item 1" },
    { name: "Item 2" }
];
```

## Why Objects Matter

Objects help you:
- **Organize code**: Keep related data together
- **Model real things**: Represent real-world items
- **Reuse code**: Create templates for similar items
- **Build complex apps**: Foundation for advanced programming

Almost everything in JavaScript is an object! Arrays, functions, even strings and numbers have object-like properties and methods.

## Next Steps

Now that you understand objects, you can:
- Build more complex programs
- Create game characters and items
- Manage data more effectively
- Prepare for object-oriented programming

Let's explore objects with the interactive examples! 🎯
