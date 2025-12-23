# Exercise 2: Format a Recipe

## 🎯 Goal
Practice text formatting by creating a recipe page. You'll use headings to organize sections, paragraphs for instructions, and formatting to make important information stand out!

---

## 📋 Instructions

### Step 1: Create Your File
Create a new HTML file called `recipe.html` in your student-workspace folder.

### Step 2: Choose Your Recipe
Pick a recipe you know - it can be:
- Something you actually make
- Your favorite food (even if simple!)
- A silly made-up recipe
- A family recipe

### Step 3: Set Up HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Recipe: [Your Recipe Name]</title>
</head>
<body>
    <!-- Your recipe goes here! -->
</body>
</html>
```

### Step 4: Add the Recipe Title
Use an `<h1>` tag for your recipe name.

### Step 5: Add a Description
Write 1-2 paragraphs describing the recipe. What makes it special?

### Step 6: Create the Ingredients Section
- Add an `<h2>` heading that says "Ingredients"
- List all ingredients in a paragraph
- Use `<br>` tags to put each ingredient on its own line
- Use `<strong>` to highlight measurements or key ingredients

### Step 7: Write the Instructions
- Add an `<h2>` heading that says "Instructions"
- Write each step in its own paragraph
- Number each step manually (Step 1:, Step 2:, etc.)
- Use `<strong>` or `<em>` to emphasize important actions

### Step 8: Add Extra Sections
Add at least ONE more section with an `<h2>`, such as:
- Cooking Tips
- Serving Suggestions
- Storage Instructions
- Notes or Variations

---

## ✅ Success Check

Your recipe should have:
- [ ] Proper HTML structure (DOCTYPE, html, head, body)
- [ ] Descriptive `<title>` tag
- [ ] One `<h1>` for the recipe name
- [ ] At least 3 `<h2>` sections (Description, Ingredients, Instructions, plus more)
- [ ] Ingredients listed with `<br>` between each one
- [ ] Instructions in separate paragraphs (one per step)
- [ ] `<strong>` used for important words (temperatures, warnings, key steps)
- [ ] `<em>` used for optional items or emphasis
- [ ] At least 1 `<hr>` divider between sections
- [ ] At least 6 paragraphs total

---

## 🌟 Bonus Challenges

Level up your recipe with these additions:

1. **Add Prep/Cook Time:** Create a section with cooking details using `<br>` for formatting
2. **Highlight Allergens:** Use `<mark>` to highlight common allergens (eggs, nuts, dairy)
3. **Add Subsections:** Use `<h3>` under Ingredients for "Dry Ingredients" and "Wet Ingredients"
4. **Include Serving Size:** Use `<small>` for serving information
5. **Show Substitutions:** Use `<del>` and regular text to show ingredient swaps
6. **Add Author Info:** Include who created or shared the recipe
7. **Create Difficulty Level:** Add a section rating the difficulty

### Example Bonus Structure
```html
<h2>Quick Info</h2>
<p>
    <strong>Prep Time:</strong> 10 minutes<br>
    <strong>Cook Time:</strong> 25 minutes<br>
    <strong>Servings:</strong> <mark>4 people</mark><br>
    <strong>Difficulty:</strong> <em>Easy</em>
</p>

<hr>

<h2>Ingredients</h2>

<h3>For the Batter:</h3>
<p>
    2 cups flour<br>
    1 tsp baking powder<br>
    1/2 tsp salt
</p>

<h3>For the Topping:</h3>
<p>
    1 cup chocolate chips<br>
    <mark>Contains: Dairy, Soy</mark>
</p>
```

---

## 💭 Think About It

After creating your recipe:
1. Is it easy to follow just by reading?
2. Do the headings make it clear where each section is?
3. Would someone who's never made this recipe be able to follow your instructions?
4. Did formatting help highlight the most important information?

---

## 🆘 Troubleshooting

**Problem:** Ingredients run together without line breaks  
**Solution:** Add `<br>` at the end of each ingredient line (inside the paragraph).

**Problem:** My step numbers don't line up  
**Solution:** Make sure each step is in its own `<p>` tag, and manually type the numbers.

**Problem:** Can't find the right tags for lists  
**Solution:** For now, use paragraphs and `<br>` tags. You'll learn proper list tags in the next lesson!

**Problem:** Too much bold text looks messy  
**Solution:** Only use `<strong>` for truly important information - not every word!

---

## 🍳 Recipe Formatting Examples

### Good Ingredient Section
```html
<h2>Ingredients</h2>
<p>
    <strong>2 cups</strong> all-purpose flour<br>
    <strong>1 cup</strong> granulated sugar<br>
    <strong>1/2 cup</strong> butter (softened)<br>
    <strong>2</strong> large eggs<br>
    1 tsp vanilla extract <em>(optional)</em><br>
    <mark>Contains: Wheat, Eggs, Dairy</mark>
</p>
```

### Good Instructions Section
```html
<h2>Instructions</h2>

<p><strong>Step 1:</strong> Preheat your oven to <mark>350°F (175°C)</mark>.</p>

<p><strong>Step 2:</strong> In a large bowl, mix the flour and sugar together. <em>Don't overmix!</em></p>

<p><strong>Step 3:</strong> Add the softened butter and eggs. Beat until <strong>smooth and creamy</strong>.</p>

<p><strong>Step 4:</strong> Pour into a greased 9x13 pan and bake for <strong>25-30 minutes</strong>.</p>
```

### Good Tips Section
```html
<h2>Chef's Tips</h2>
<p><strong>Tip 1:</strong> Make sure all ingredients are at room temperature for best results.</p>
<p><strong>Tip 2:</strong> You can substitute <del>butter</del> coconut oil for a dairy-free version.</p>
<p><em>Pro tip: Let it cool for at least 10 minutes before cutting!</em></p>
```

---

## 🎨 Recipe Ideas

### Simple Recipes
- Peanut butter and jelly sandwich
- Perfect hot chocolate
- Fruit smoothie
- Cheese quesadilla
- Scrambled eggs

### No-Cook Recipes
- Ice cream sundae
- Trail mix
- Overnight oats
- Frozen yogurt bark
- Fruit salad

### Fun/Silly Recipes
- "Recipe for a Perfect Day"
- "How to Make a Best Friend"
- "Ultimate Blanket Fort"
- "The Perfect Game Night"

### Real Recipes
- Your favorite family dish
- Cookies or brownies
- Pasta recipe
- Homemade pizza
- Any dish you love!

---

## 🎉 Completion

When finished:
1. Save your file
2. Open it in your browser
3. Read through it - could you follow this recipe?
4. Check all the success criteria
5. Try reading only the headings - do they tell you what's in each section?

**Excellent work!** You've created a professional-looking recipe page using HTML! 👨‍🍳👩‍🍳
