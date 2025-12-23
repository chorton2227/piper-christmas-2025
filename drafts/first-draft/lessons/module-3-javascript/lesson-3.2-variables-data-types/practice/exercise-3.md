# Exercise 3: Story Variables 📖

## 🎯 Goal
Create an interactive story using variables! You'll use string variables to build a customizable adventure where you can easily change details.

## 📋 Instructions

### Step 1: Create Your HTML File
Create a file called `story-variables.html`

### Step 2: Create Story Constants (Things That Don't Change)
Use `const` for fixed story elements:
- `STORY_TITLE` - Your story's title
- `SETTING` - Where the story takes place
- `QUEST_ITEM` - The object they're searching for
- `VILLAIN_NAME` - The antagonist's name
- `MAGIC_NUMBER` - A special number in your story

### Step 3: Create Character Variables (Things That Can Change)
Use `let` for character details:
- `heroName` - Main character's name
- `heroAge` - Their age
- `sidekickName` - Their companion's name
- `heroTitle` - Their title (starts as "Novice", can change to "Expert", "Master", etc.)

### Step 4: Create Story State Variables
Track progress:
- `currentChapter` - Which chapter (starts at 1)
- `questProgress` - Percentage complete (starts at 0)
- `itemsCollected` - Number of items found (starts at 0)
- `enemiesDefeated` - Number defeated (starts at 0)

### Step 5: Create Status Booleans
- `hasMap` - Do they have a map?
- `hasSword` - Do they have a sword?
- `isQuestComplete` - Is the quest done?

### Step 6: Write Your Story!
Write a story in the console that:
1. Uses ALL your variables
2. Updates variables as the story progresses
3. Shows changing stats
4. Has at least 5 chapters
5. Combines strings with variables

## 💡 Tips
- Use + to combine strings and variables
- Update variables to show progress
- Use clear chapter markers
- Show stats at key moments
- Make it creative and fun!

## ✅ Requirements Checklist
- [ ] HTML file with script tag
- [ ] At least 5 constants defined
- [ ] At least 8 variables (let)
- [ ] At least 3 boolean variables
- [ ] Story has at least 5 chapters
- [ ] Variables are updated throughout
- [ ] Stats shown at key moments
- [ ] All variables used in the story
- [ ] Clear, engaging narrative

## 🎯 Example Story Structure
```
╔═══════════════════════════════╗
║   THE QUEST FOR THE CRYSTAL   ║
╚═══════════════════════════════╝

CHAPTER 1: The Beginning
─────────────────────────────

Luna the Novice stands in the Enchanted Forest.
Age: 12 years old
Quest: Find the Crystal of Power

Items Collected: 0
Quest Progress: 0%

Status:
✓ Has Map
✗ Has Sword
✗ Quest Complete

"I must find the Crystal before the Shadow King does!"

─────────────────────────────

CHAPTER 2: The First Challenge
─────────────────────────────

Luna defeats a forest guardian!

Enemies Defeated: 1
Items Collected: 1 (Found a sword!)

Status Update:
✓ Has Map
✓ Has Sword
✗ Quest Complete

"With this sword, I can continue!"

[Continue for 3 more chapters...]

─────────────────────────────

FINAL STATS:
─────────────────────────────

Hero: Luna the Master
Enemies Defeated: 5
Items Collected: 3
Quest Progress: 100%
Quest Complete: ✓

"The Crystal is safe! The kingdom is saved!"

THE END
```

## 🚀 Challenge (Optional)
- Add a companion with their own variables
- Track multiple items separately
- Calculate hero's power level
- Add dialog with character names
- Create chapter summaries
- Add time tracking (days passed)
- Include inventory management
- Show experience points and leveling
- Add choices that change variables

## 📝 What You'll Learn
- Using variables to make stories dynamic
- Combining strings with +
- Updating variables to show progress
- Using booleans for status tracking
- Organizing story elements
- Building engaging narratives with code

Make your story unique and exciting! 🌟📚
