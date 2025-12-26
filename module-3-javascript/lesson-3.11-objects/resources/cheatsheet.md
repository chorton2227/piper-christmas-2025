
## Quick Reference for Working with Objects

---

## Creating Objects

### Object Literal (Most Common)
```javascript
let person = {
    name: "Alice",
    age: 25,
    city: "New York"
};
```

### Empty Object
```javascript
let obj = {};
obj.name = "Bob";
```

### Using new Object()
```javascript
let person = new Object();
person.name = "Charlie";
person.age = 30;
```

---

## Accessing Properties

### Dot Notation
```javascript
console.log(person.name);  // "Alice"
console.log(person.age);   // 25
```

### Bracket Notation
```javascript
console.log(person["name"]);  // "Alice"
console.log(person["age"]);   // 25
```

### Dynamic Property Access
```javascript
let property = "name";
console.log(person[property]);  // "Alice"
```

---

## Modifying Objects

### Change Property
```javascript
person.age = 26;
person["city"] = "Boston";
```

### Add Property
```javascript
person.email = "alice@email.com";
person["phone"] = "555-1234";
```

### Delete Property
```javascript
delete person.city;
```

---

## Object Methods

### Basic Method
```javascript
let calculator = {
    add: function(a, b) {
        return a + b;
    }
};
console.log(calculator.add(5, 3));  // 8
```

### Shorthand Syntax
```javascript
let calculator = {
    add(a, b) {
        return a + b;
    }
};
```

### Using `this` Keyword
```javascript
let person = {
    name: "Alice",
    age: 25,
    greet: function() {
        return "Hi, I'm " + this.name;
    },
    haveBirthday: function() {
        this.age++;
    }
};

console.log(person.greet());  // "Hi, I'm Alice"
person.haveBirthday();
console.log(person.age);  // 26
```

---

## Nested Objects

### Accessing Nested Properties
```javascript
let person = {
    name: "Alice",
    address: {
        street: "123 Main St",
        city: "New York",
        zip: "10001"
    }
};

console.log(person.address.city);  // "New York"
console.log(person.address.zip);   // "10001"
```

### Deeply Nested
```javascript
let company = {
    name: "TechCorp",
    ceo: {
        name: "Bob",
        contact: {
            email: "bob@techcorp.com",
            phone: "555-0000"
        }
    }
};

console.log(company.ceo.contact.email);  // "bob@techcorp.com"
```

---

## Arrays of Objects

### Creating Array of Objects
```javascript
let students = [
    { name: "Alice", grade: 95 },
    { name: "Bob", grade: 87 },
    { name: "Charlie", grade: 92 }
];
```

### Accessing Objects in Array
```javascript
console.log(students[0].name);   // "Alice"
console.log(students[1].grade);  // 87
```

### Looping Through Array of Objects
```javascript
// Using for loop
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}

// Using forEach
students.forEach(function(student) {
    console.log(student.name);
});
```

### Filtering Array of Objects
```javascript
let topStudents = students.filter(function(student) {
    return student.grade >= 90;
});
```

### Mapping Array of Objects
```javascript
let names = students.map(function(student) {
    return student.name;
});
// ["Alice", "Bob", "Charlie"]
```

### Finding in Array of Objects
```javascript
let alice = students.find(function(student) {
    return student.name === "Alice";
});
```

---

## Factory Functions

### Creating Multiple Similar Objects
```javascript
function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet: function() {
            return "Hi, I'm " + this.name;
        }
    };
}

let person1 = createPerson("Alice", 25);
let person2 = createPerson("Bob", 30);
```

---

## Checking Properties

### Check if Property Exists
```javascript
if (person.email) {
    console.log("Email exists");
}

// Using hasOwnProperty
if (person.hasOwnProperty("name")) {
    console.log("Has name property");
}
```

### Get All Property Names
```javascript
let keys = Object.keys(person);
// ["name", "age", "city"]
```

### Loop Through Properties
```javascript
for (let key in person) {
    console.log(key + ": " + person[key]);
}
```

---

## Common Patterns

### Configuration Object
```javascript
function createGame(config) {
    let game = {
        width: config.width || 800,
        height: config.height || 600,
        difficulty: config.difficulty || "medium"
    };
    return game;
}

let myGame = createGame({ width: 1024, difficulty: "hard" });
```

### Object as Data Store
```javascript
let inventory = {
    apple: 10,
    orange: 5,
    banana: 8
};

inventory.apple -= 2;  // Sold 2 apples
inventory.grape = 12;  // Added grapes
```

### Object Methods Modifying State
```javascript
let counter = {
    value: 0,
    increment: function() {
        this.value++;
    },
    decrement: function() {
        this.value--;
    },
    reset: function() {
        this.value = 0;
    }
};
```

---

## Common Mistakes to Avoid

### ❌ Forgetting `this` Keyword
```javascript
// WRONG
let person = {
    name: "Alice",
    greet: function() {
        return "Hi, I'm " + name;  // Error!
    }
};

// CORRECT
let person = {
    name: "Alice",
    greet: function() {
        return "Hi, I'm " + this.name;  // ✓
    }
};
```

### ❌ Missing Comma Between Properties
```javascript
// WRONG
let person = {
    name: "Alice"
    age: 25  // Error! Missing comma
};

// CORRECT
let person = {
    name: "Alice",
    age: 25  // ✓
};
```

### ❌ Calling Property as Function
```javascript
let person = {
    name: "Alice",
    age: 25
};

// WRONG
person.age();  // Error! age is not a function

// CORRECT
console.log(person.age);  // ✓
```

### ❌ Using Quotes When Not Needed
```javascript
// Unnecessary (but not wrong)
let obj = {
    "name": "Alice",
    "age": 25
};

// Better (cleaner)
let obj = {
    name: "Alice",
    age: 25
};
```

---

## Quick Tips

1. **Use dot notation** when you know the property name
2. **Use bracket notation** when property name is dynamic or has spaces
3. **Always use `this`** to access object properties inside methods
4. **Objects can contain any data type**: strings, numbers, booleans, arrays, other objects, functions
5. **Property names are strings** (JavaScript converts them automatically)
6. **Order doesn't matter** in objects (unlike arrays)
7. **Test if properties exist** before using them to avoid errors

---

## Practice Examples

### Simple Game Character
```javascript
let hero = {
    name: "Link",
    health: 100,
    attack: 15,
    takeDamage: function(amount) {
        this.health -= amount;
    },
    heal: function(amount) {
        this.health = Math.min(100, this.health + amount);
    }
};
```

### Shopping Cart
```javascript
let cart = {
    items: [],
    addItem: function(name, price) {
        this.items.push({ name: name, price: price });
    },
    getTotal: function() {
        let total = 0;
        for (let i = 0; i < this.items.length; i++) {
            total += this.items[i].price;
        }
        return total;
    }
};
```

### User Profile
```javascript
let user = {
    username: "alice123",
    email: "alice@email.com",
    settings: {
        theme: "dark",
        notifications: true,
        language: "en"
    },
    updateSetting: function(key, value) {
        this.settings[key] = value;
    }
};
```

---

Remember: Objects are perfect for storing related data together! 🎯