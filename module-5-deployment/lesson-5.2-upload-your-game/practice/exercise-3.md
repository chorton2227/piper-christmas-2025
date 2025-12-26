# Exercise 3: Verify Everything Works

## Objective

Double-check that all your files are uploaded correctly, organized properly, and your repository is ready for deployment.

## Why This Matters

Before deploying to GitHub Pages, you need to make sure:
- All files are uploaded
- Folder structure is correct
- File paths work
- README displays properly
- Repository looks professional

Think of this as a final inspection before going live!

## Instructions

### Part 1: Repository Structure Check (10 minutes)

Go to your repository home page and verify the following:

#### ✅ Checklist: Root Directory

Look at your repository files. You should see:

- [ ] `index.html` (in root, not in a folder)
- [ ] `README.md` (in root)
- [ ] `css/` folder
- [ ] `js/` folder
- [ ] Any other folders you created (assets/, images/, etc.)

**What you should NOT see in root:**
- ❌ Individual CSS files (should be in `css/` folder)
- ❌ Individual JS files (should be in `js/` folder)
- ❌ Old/backup files (`game-old.js`, `backup.html`)
- ❌ Multiple HTML files (only `index.html` should be there)

#### ✅ Checklist: CSS Folder

Click on the `css/` folder. You should see:

- [ ] `styles.css` (or your CSS filename)
- [ ] Any other CSS files you created

#### ✅ Checklist: JS Folder

Click on the `js/` folder. You should see:

- [ ] `game.js` (your main game file)
- [ ] `modules/` subfolder (if you're using modules)

Click on `js/modules/` if it exists:

- [ ] `deck.js`
- [ ] `handEvaluator.js`
- [ ] `ai.js`
- [ ] `ui.js`
- [ ] Any other module files

### Part 2: File Path Verification (10 minutes)

Let's make sure your HTML file references are correct.

#### Step 1: Check index.html

1. Click on `index.html` in your repository
2. Look for these tags (scroll through the file):

**CSS Link:**
```html
<link rel="stylesheet" href="css/styles.css">
```
- [ ] Path includes `css/`
- [ ] Filename matches your actual CSS file

**JavaScript Scripts:**
```html
<script src="js/game.js"></script>
<script src="js/modules/deck.js"></script>
<script src="js/modules/handEvaluator.js"></script>
<!-- etc. -->
```
- [ ] Paths include `js/` or `js/modules/`
- [ ] Filenames match your actual JS files
- [ ] All modules are included

#### Step 2: Verify Module Types

If you're using ES6 modules, check for:
```html
<script type="module" src="js/game.js"></script>
```
- [ ] `type="module"` attribute present if needed

### Part 3: README Display Check (5 minutes)

Scroll down on your repository home page.

#### ✅ README Checklist

Your README should display and include:

- [ ] Project title with emoji (🃏)
- [ ] Project description
- [ ] Features section with bullet points
- [ ] How to Play section
- [ ] Technologies Used section
- [ ] Project Structure
- [ ] Credits
- [ ] No typos or broken formatting

**Formatting Check:**
- [ ] Headers are different sizes (# is bigger than ##)
- [ ] Bullet lists display correctly
- [ ] Code blocks are formatted
- [ ] Emojis display

### Part 4: Commit History Review (5 minutes)

Click on "Commits" (near the top of your repository page).

#### Good Commit History

Look at your commit messages. They should be:

✅ **Clear and descriptive:**
- "Add index.html"
- "Add CSS styles"
- "Add JavaScript modules"
- "Update file paths"
- "Add comprehensive README"

❌ **Not vague:**
- "update"
- "changes"
- "idk"
- "asdf"

**Count your commits:** You should have at least 5-10 commits showing gradual progress.

### Part 5: Final Comparison (10 minutes)

Compare your repository to this ideal structure:

#### The Ideal Repository

```
poker-game/                       ✅ Good descriptive name
├── README.md                     ✅ Explains the project
├── index.html                    ✅ Main HTML file
├── css/
│   └── styles.css               ✅ Organized CSS
└── js/
    ├── game.js                   ✅ Main game logic
    └── modules/
        ├── deck.js               ✅ Modular code
        ├── handEvaluator.js
        ├── ai.js
        └── ui.js
```

#### Your Repository

Draw your actual structure:

```
[your-repo-name]/
├── 
├── 
├── 
└── 
```

**Does it match the ideal?** Yes ☐ / No ☐

If no, what's different?
__________________________________________
__________________________________________

### Part 6: Troubleshooting (if needed)

#### Problem: Files in wrong location

**Solution:**
1. Click the file
2. Click edit (pencil icon)
3. In the filename field, add the path: `css/styles.css`
4. Commit: "Move [filename] to correct folder"
5. Delete the old file

#### Problem: File paths don't match structure

**Solution:**
1. Edit `index.html`
2. Update all `<link>` and `<script>` tags
3. Commit: "Fix file paths"

#### Problem: README not displaying

**Solution:**
- Make sure it's named exactly `README.md` (all caps)
- Make sure it's in the root directory
- Check for Markdown syntax errors

## What You're Learning

This exercise teaches you:
- Quality assurance practices
- Attention to detail
- Troubleshooting skills
- Professional standards
- Project organization verification

## Success Criteria

✅ All files in correct locations  
✅ Folder structure matches best practices  
✅ File paths in index.html are correct  
✅ README displays properly  
✅ Commit messages are clear  
✅ No unnecessary/backup files  
✅ Repository looks professional  

## Final Checklist Before Lesson 5.3

Before moving on to deployment, confirm:

- [ ] Repository has a good name
- [ ] Repository has a description
- [ ] `index.html` is in root directory
- [ ] Files are organized in folders
- [ ] All file paths work
- [ ] README is comprehensive and error-free
- [ ] Commit history shows clear progress
- [ ] No debug/test files in repository

## If Everything Checks Out...

**Congratulations!** 🎉

Your repository is:
- ✅ Well-organized
- ✅ Professionally documented
- ✅ Ready for deployment

You're ready for **Lesson 5.3: Deploy with GitHub Pages**!

## If You Found Issues...

**Don't worry!** Fix them now:
1. Make a list of what needs fixing
2. Fix one thing at a time
3. Commit each fix with a clear message
4. Re-check this list

**Better to catch problems now than after deployment!**

## Time Estimate

**30-40 minutes** (including fixes)

## Tips

💡 **Be thorough** - It's easier to fix issues now than later

💡 **Use the checklist** - Don't skip steps

💡 **Ask for help** - Have someone else look at your README

💡 **Take pride** - This represents your work!

## Next Steps

Once everything passes this verification:

1. Take a moment to appreciate what you've built
2. Save this checklist for future projects
3. Move on to **Lesson 5.3** to deploy your game!

---

**Your poker game is ready for the world!** 🚀
