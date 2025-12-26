# Exercise 2: Build an Organized Guide

## 🎯 Goal
Practice creating nested lists to organize complex information with categories and subcategories. You'll build a comprehensive guide using both unordered and ordered lists!

---

## 📋 Instructions

### Step 1: Choose Your Topic
Pick something you can organize into categories with subcategories:
- A guide to your hobbies (with types of each)
- Your favorite video games (organized by genre)
- A guide to your town/city (places organized by type)
- School subjects (with specific topics in each)
- Your favorite media (books, movies, shows organized by category)

### Step 2: Create Your File
Create `organized-lists.html` in your student-workspace folder.

### Step 3: Plan Your Structure
On paper or in your head, plan:
- What's your main topic? (h1)
- What are your main categories? (h2 + parent list items)
- What subcategories go under each? (nested lists)

### Step 4: Build the HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Guide to [Your Topic]</title>
</head>
<body>
    <h1>Your Main Title</h1>
    <!-- Your organized lists go here! -->
</body>
</html>
```

### Step 5: Create Nested Lists
For each main category:
1. Add an `<h2>` heading
2. Start a list (`<ul>` or `<ol>`)
3. Create parent items with `<li>`
4. **Inside** each `<li>`, add a nested list
5. Close all tags properly

### Step 6: Add Details
- Include at least 3 main categories
- Each category should have 3+ subcategories
- Add descriptions or formatting where helpful

---

## ✅ Success Check

Your guide should have:
- [ ] Proper HTML structure
- [ ] One `<h1>` main title
- [ ] At least 3 `<h2>` category headings
- [ ] At least 3 nested lists (lists within lists)
- [ ] Each parent item has 3+ nested children
- [ ] Proper indentation in your code
- [ ] All tags correctly opened and closed
- [ ] Both `<ul>` and `<ol>` used appropriately

---

## 🌟 Bonus Challenges

Take your guide to the next level:

1. **Deep Nesting:** Create three levels of nesting (list → nested list → nested-nested list)
2. **Mix List Types:** Use `<ol>` for rankings and `<ul>` for regular items
3. **Add Formatting:** Use `<strong>`, `<em>`, `<mark>` to highlight important items
4. **Include Descriptions:** Add paragraph descriptions before each category
5. **Create a Mega-Guide:** 5+ categories with 5+ items each
6. **Add a Table of Contents:** Create a list at the top showing all sections

---

## 💡 Nesting Reminder

Remember: The nested list goes **INSIDE** the `<li>` tag!

```html
<!-- ✅ CORRECT -->
<ul>
    <li>Parent Item
        <ul>
            <li>Child Item</li>
            <li>Child Item</li>
        </ul>
    </li>
</ul>

<!-- ❌ WRONG -->
<ul>
    <li>Parent Item</li>
    <ul>
        <li>Child Item</li>
        <li>Child Item</li>
    </ul>
</ul>
```

---

## 🎨 Example Structure

Here's a simple example to guide you:

```html
<h1>Guide to My Favorite Hobbies</h1>

<h2>Indoor Hobbies</h2>
<ul>
    <li>Gaming
        <ul>
            <li>Action games</li>
            <li>Puzzle games</li>
            <li>RPGs</li>
        </ul>
    </li>
    <li>Reading
        <ul>
            <li>Fantasy books</li>
            <li>Mystery books</li>
            <li>Comics</li>
        </ul>
    </li>
    <li>Art
        <ul>
            <li>Drawing</li>
            <li>Painting</li>
            <li>Digital art</li>
        </ul>
    </li>
</ul>

<hr>

<h2>Outdoor Hobbies</h2>
<ul>
    <li>Sports
        <ul>
            <li>Soccer</li>
            <li>Basketball</li>
            <li>Swimming</li>
        </ul>
    </li>
    <li>Nature Activities
        <ul>
            <li>Hiking</li>
            <li>Camping</li>
            <li>Bird watching</li>
        </ul>
    </li>
</ul>
```

---

## 💭 Think About It

After completing your guide:
1. How does nesting help organize information better than flat lists?
2. Could someone understand your organization just by looking at the indentation?
3. When might you need three levels of nesting instead of two?

---

## 🆘 Troubleshooting

**Problem:** My nested list doesn't indent  
**Solution:** Make sure the nested `<ul>` or `<ol>` is INSIDE an `<li>` tag, not after it.

**Problem:** My code is hard to read  
**Solution:** Indent each level:
```html
<ul>
    <li>Level 1
        <ul>
            <li>Level 2</li>
        </ul>
    </li>
</ul>
```

**Problem:** I have closing tags in the wrong order  
**Solution:** Close the inner list before closing the outer `<li>`:
```html
<li>Parent
    <ul>
        <li>Child</li>
    </ul>  <!-- Close nested ul first -->
</li>      <!-- Then close parent li -->
```

---

## 🎨 More Topic Ideas

### Collections
- Your favorite books/movies/games organized by genre
- Music collection organized by artist or mood
- Toy collection organized by type

### Places
- Guide to your neighborhood (parks, stores, restaurants)
- Places you've visited organized by category
- Dream vacation spots organized by continent

### Skills & Knowledge
- School subjects with specific topics
- Skills you have organized by category
- Things you want to learn

### Entertainment
- Video games by genre
- YouTube channels you watch by category
- Sports organized by type (team vs individual, indoor vs outdoor)

### Planning
- Weekly activities organized by day
- Birthday party plans (guests, food, activities)
- Room organization ideas

---

## 🎉 Completion

When finished:
1. Save your file
2. Open in browser
3. Check that indentation looks correct
4. Verify all categories have subcategories
5. Test that nested lists show proper bullet or number styles
6. Read through it - is the organization clear?

**Excellent work!** You've mastered nested lists - a powerful way to organize complex information! 🌟
