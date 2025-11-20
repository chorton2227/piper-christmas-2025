# Lesson 1.3: Lists

## 🎯 What You'll Learn
- How to create bullet point lists (unordered lists)
- How to create numbered lists (ordered lists)
- How to nest lists inside other lists
- When to use each type of list
- Description lists for definitions

---

## 📋 Unordered Lists (Bullet Points)

Unordered lists are perfect for items where the order doesn't matter - like a shopping list or a list of features.

### Basic Unordered List

```html
<ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Oranges</li>
</ul>
```

**What you'll see:**
- Apples
- Bananas
- Oranges

### Breaking It Down

- `<ul>` = **U**nordered **L**ist (the container)
- `<li>` = **L**ist **I**tem (each item in the list)
- Always close both tags!

### Longer Example

```html
<h2>My Favorite Hobbies</h2>
<ul>
    <li>Playing video games</li>
    <li>Reading books</li>
    <li>Drawing and art</li>
    <li>Hanging out with friends</li>
</ul>
```

---

## 🔢 Ordered Lists (Numbered Lists)

Ordered lists are for items where the order DOES matter - like steps in a recipe or ranking your favorites.

### Basic Ordered List

```html
<ol>
    <li>Wake up</li>
    <li>Eat breakfast</li>
    <li>Go to school</li>
</ol>
```

**What you'll see:**
1. Wake up
2. Eat breakfast
3. Go to school

The browser automatically numbers them for you!

### Breaking It Down

- `<ol>` = **O**rdered **L**ist (the container)
- `<li>` = **L**ist **I**tem (same as unordered!)
- Numbers are added automatically

### Longer Example

```html
<h2>How to Make a Sandwich</h2>
<ol>
    <li>Get two slices of bread</li>
    <li>Spread peanut butter on one slice</li>
    <li>Spread jelly on the other slice</li>
    <li>Put the slices together</li>
    <li>Enjoy your sandwich!</li>
</ol>
```

---

## 🆚 When to Use Which List?

### Use Unordered Lists (`<ul>`) When:
- Order doesn't matter
- Just listing items
- Features or benefits
- Shopping lists
- Navigation menus (later!)

**Examples:**
- Grocery list
- Favorite movies
- Things you like about summer

### Use Ordered Lists (`<ol>`) When:
- Order is important
- Steps in a process
- Rankings
- Instructions
- Recipes

**Examples:**
- How-to steps
- Top 10 lists
- Directions to a place
- Assembly instructions

---

## 🪺 Nested Lists

You can put lists inside other lists! This is great for organizing complex information.

### Nested Unordered Lists

```html
<ul>
    <li>Fruits
        <ul>
            <li>Apples</li>
            <li>Oranges</li>
            <li>Bananas</li>
        </ul>
    </li>
    <li>Vegetables
        <ul>
            <li>Carrots</li>
            <li>Broccoli</li>
            <li>Spinach</li>
        </ul>
    </li>
</ul>
```

**What you'll see:**
- Fruits
  - Apples
  - Oranges
  - Bananas
- Vegetables
  - Carrots
  - Broccoli
  - Spinach

### Mixing Ordered and Unordered

You can nest different types of lists!

```html
<h2>My Morning Routine</h2>
<ol>
    <li>Wake up</li>
    <li>Get dressed
        <ul>
            <li>Put on shirt</li>
            <li>Put on pants</li>
            <li>Put on socks</li>
        </ul>
    </li>
    <li>Eat breakfast
        <ul>
            <li>Cereal</li>
            <li>Orange juice</li>
        </ul>
    </li>
    <li>Brush teeth</li>
</ol>
```

---

## 📖 Description Lists

Description lists are special - they're for terms and definitions (like a dictionary).

### Basic Description List

```html
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language - used to create web pages</dd>
    
    <dt>CSS</dt>
    <dd>Cascading Style Sheets - used to style web pages</dd>
    
    <dt>JavaScript</dt>
    <dd>A programming language that makes web pages interactive</dd>
</dl>
```

### Breaking It Down

- `<dl>` = **D**escription **L**ist (the container)
- `<dt>` = **D**escription **T**erm (the word being defined)
- `<dd>` = **D**escription **D**efinition (the definition itself)

### When to Use Description Lists

- Glossaries
- FAQs
- Definitions
- Metadata (labels and values)

---

## 🎨 Lists with Formatting

You can use all the formatting you learned inside lists!

```html
<h2>Shopping List</h2>
<ul>
    <li><strong>Milk</strong> - <em>Don't forget!</em></li>
    <li>Bread</li>
    <li><mark>Eggs</mark> - We're almost out!</li>
    <li>Butter</li>
</ul>

<h2>Top 3 Favorite Movies</h2>
<ol>
    <li><strong>Spider-Man</strong> - <em>The best superhero movie!</em></li>
    <li><strong>Frozen</strong> - <em>Let it go... 🎵</em></li>
    <li><strong>Toy Story</strong> - <em>Classic!</em></li>
</ol>
```

---

## 💡 Key Concepts to Remember

1. **`<ul>`** = Unordered list (bullet points)
2. **`<ol>`** = Ordered list (numbers)
3. **`<li>`** = List item (used in both!)
4. **`<dl>`** = Description list (for definitions)
5. **Nesting** = Lists inside lists for organization
6. Use **ul** when order doesn't matter
7. Use **ol** when order is important
8. Always close your tags: `<ul>`, `<li>`, `</li>`, `</ul>`

---

## 🎯 Common List Patterns

### Feature List
```html
<h2>Why Our Product is Great</h2>
<ul>
    <li>Fast and reliable</li>
    <li>Easy to use</li>
    <li>Affordable pricing</li>
    <li>24/7 customer support</li>
</ul>
```

### Step-by-Step Instructions
```html
<h2>How to Tie Your Shoes</h2>
<ol>
    <li>Put your foot in the shoe</li>
    <li>Pull the laces tight</li>
    <li>Make a loop with one lace</li>
    <li>Wrap the other lace around it</li>
    <li>Pull through to make a bow</li>
</ol>
```

### Organized Categories
```html
<h2>School Subjects</h2>
<ul>
    <li>Math
        <ul>
            <li>Algebra</li>
            <li>Geometry</li>
        </ul>
    </li>
    <li>Science
        <ul>
            <li>Biology</li>
            <li>Chemistry</li>
        </ul>
    </li>
</ul>
```

---

## 🎮 Practice Time!

Ready to create your own lists? Head to the exercises!

---

## 🚀 What's Next?

In the next lesson, you'll learn about links - how to connect your pages and link to other websites!

---

## 📚 Quick Reference

### Unordered List (Bullets)
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

### Ordered List (Numbers)
```html
<ol>
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
</ol>
```

### Nested List
```html
<ul>
    <li>Parent Item
        <ul>
            <li>Child Item</li>
            <li>Child Item</li>
        </ul>
    </li>
</ul>
```

### Description List
```html
<dl>
    <dt>Term</dt>
    <dd>Definition</dd>
</dl>
```
