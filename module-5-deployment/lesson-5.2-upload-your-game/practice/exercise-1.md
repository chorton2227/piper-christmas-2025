# Exercise 1: Upload and Organize Your Files

## Objective

Practice uploading files to GitHub and organizing them into a professional folder structure.

## What You'll Need

- Your completed poker game files
- GitHub account (logged in)
- Repository created in Step 1 of the lesson

## Instructions

### Part 1: Gather Your Files (10 minutes)

Before uploading, organize your files on your computer.

1. **Find all your poker game files:**
   - [ ] Main HTML file
   - [ ] CSS file(s)
   - [ ] JavaScript files (game.js, modules, etc.)
   - [ ] Image files (if any)
   - [ ] Sound files (if any)

2. **Create a checklist:**

Write down every file you need to upload:

**HTML:**
- _______________________________

**CSS:**
- _______________________________
- _______________________________

**JavaScript:**
- _______________________________
- _______________________________
- _______________________________
- _______________________________
- _______________________________

**Assets:**
- _______________________________
- _______________________________

3. **Rename if necessary:**
   - Is your main HTML file named `index.html`?
   - If not, rename it NOW before uploading

### Part 2: Upload Files (20 minutes)

Follow these steps carefully:

#### Step 1: Upload index.html
1. Go to your repository
2. Click "Add file" → "Upload files"
3. Upload ONLY `index.html`
4. Commit message: `Add index.html`
5. Click "Commit changes"

#### Step 2: Create and Upload CSS Folder
1. Click "Add file" → "Create new file"
2. Name it: `css/styles.css`
3. Copy your CSS code and paste it
4. Commit message: `Add CSS styles`
5. Click "Commit changes"

#### Step 3: Create JS Folder
1. Click "Add file" → "Create new file"
2. Name it: `js/game.js`
3. Copy your main game code and paste it
4. Commit message: `Add main game logic`
5. Click "Commit changes"

#### Step 4: Upload JavaScript Modules
For each module file:
1. Click "Add file" → "Create new file"
2. Name it: `js/modules/[filename].js` (example: `js/modules/deck.js`)
3. Copy the code and paste it
4. Commit message: `Add [module name] module`
5. Repeat for each module

### Part 3: Update File Paths (10 minutes)

Now that files are in folders, update your HTML:

1. Click on `index.html`
2. Click the pencil (edit) icon
3. Find all `<link>` and `<script>` tags
4. Update paths to include folder names:

**Change this:**
```html
<link rel="stylesheet" href="styles.css">
<script src="game.js"></script>
<script src="deck.js"></script>
```

**To this:**
```html
<link rel="stylesheet" href="css/styles.css">
<script src="js/game.js"></script>
<script src="js/modules/deck.js"></script>
```

5. Commit message: `Update file paths`

### Part 4: Verify Structure (5 minutes)

Check your repository structure:

```
✅ Expected structure:
poker-game/
├── index.html
├── css/
│   └── styles.css
└── js/
    ├── game.js
    └── modules/
        └── [your module files]
```

**Verification checklist:**
- [ ] `index.html` is in the root (not in a folder)
- [ ] CSS files are in `css/` folder
- [ ] JavaScript files are in `js/` or `js/modules/` folders
- [ ] File paths in `index.html` match the structure

## What You're Learning

This exercise teaches you:
- File organization best practices
- Creating folder structures in GitHub
- Updating file paths
- Making meaningful commits
- Professional project structure

## Success Criteria

✅ All files uploaded to GitHub
✅ Files organized in proper folders
✅ File paths updated in index.html
✅ Each upload has a clear commit message
✅ Repository structure matches the expected structure

## Common Mistakes to Avoid

❌ **Uploading everything to root** - Use folders!
❌ **Forgetting to update paths** - index.html won't find files
❌ **Vague commit messages** - "update" doesn't explain what you did
❌ **Wrong HTML filename** - Must be `index.html` (lowercase)

## Troubleshooting

**Problem:** Can't create a folder  
**Solution:** GitHub only shows folders with files. Create `css/styles.css` to make the `css/` folder.

**Problem:** File paths still broken  
**Solution:** Check capitalization and spelling. `CSS/styles.css` ≠ `css/styles.css`

**Problem:** Too many files in root  
**Solution:** Move them one by one into folders using edit → rename

## Time Estimate

**45 minutes total**

Take your time and be methodical!

## Next Steps

Once your files are uploaded and organized, move on to **Exercise 2** where you'll write a professional README.
