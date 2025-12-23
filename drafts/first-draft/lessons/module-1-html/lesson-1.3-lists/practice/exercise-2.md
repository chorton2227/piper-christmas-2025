# Exercise 2: Nested Lists Challenge

## 🎯 Goal
Create nested lists to organize complex information.

## 📋 Instructions

1. Create a new file called `organized-lists.html`
2. Create at least TWO nested list structures
3. Use proper indentation to make your code readable

### Ideas for Nested Lists:

**Option 1: Organize by Categories**
```
- School Subjects
  - Math
    - Algebra
    - Geometry
  - Science
    - Biology
    - Chemistry
```

**Option 2: Break Down a Process**
```
1. Get ready for school
   - Get dressed
   - Eat breakfast
     - Pour cereal
     - Add milk
   - Pack backpack
2. Go to school
   - Walk to bus
   - Ride bus
```

**Option 3: Create a Menu/Directory**
```
- Entertainment
  - Movies
    - Action
    - Comedy
  - Video Games
    - Adventure
    - Sports
```

## ✅ Success Check

Your page should have:
- [ ] At least 2 different nested list structures
- [ ] Proper indentation in your code
- [ ] Mix of parent and child items
- [ ] Headings for each major section
- [ ] All tags properly closed
- [ ] At least one list that's 3 levels deep

## 🌟 Bonus Challenge

- Create a list that's 4+ levels deep
- Mix ordered and unordered lists (ul inside ol, or vice versa)
- Add formatting to make important items stand out
- Create a "Table of Contents" style nested list
- Make a family tree with nested lists
- Create a nested list with 10+ parent items

## 💡 Tips

- Keep track of opening and closing tags
- Use proper indentation - it makes nested lists much easier to read!
- Each nested list should be inside a `<li>` tag
- Test frequently to make sure everything displays correctly
- Start simple and add complexity gradually

---

## 🎯 Example of Good Nesting

```html
<h2>My Favorite Foods</h2>
<ul>
    <li>Italian Food
        <ul>
            <li>Pizza</li>
            <li>Pasta
                <ul>
                    <li>Spaghetti</li>
                    <li>Fettuccine</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>Mexican Food
        <ul>
            <li>Tacos</li>
            <li>Burritos</li>
        </ul>
    </li>
</ul>
```

Notice:
- Each nested `<ul>` is inside a `<li>`
- Proper indentation shows the hierarchy
- All tags are properly closed
