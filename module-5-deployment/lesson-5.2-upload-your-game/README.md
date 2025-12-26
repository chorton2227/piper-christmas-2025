# Lesson 5.2: Upload Your Game to GitHub

## What You'll Learn

In this lesson, you'll create your first GitHub repository and upload all your Texas Hold'em poker game files to it. By the end, your code will be safely stored in the cloud and ready for deployment!

## Learning Objectives

By the end of this lesson, you will be able to:
- Create a new GitHub repository
- Upload files through GitHub's web interface
- Organize files in folders
- Write a professional README for your project
- Make your first commit

---

## Prerequisites

Before starting, make sure you have:
- ✅ GitHub account (from Lesson 5.1)
- ✅ Chosen repository name and description
- ✅ Your poker game files ready to upload
- ✅ About 45-60 minutes of time

---

## Step 1: Create a New Repository

Let's create a home for your poker game on GitHub!

### Navigate to Create Repository

1. Log in to GitHub
2. Click the **"+"** icon in the top-right corner
3. Select **"New repository"**

You'll see the "Create a new repository" page.

### Fill in Repository Details

#### Repository Name
Enter the name you planned in Lesson 5.1.

**Example:** `poker-game`

**Rules:**
- Lowercase letters
- Numbers OK
- Hyphens OK for spaces
- No special characters

#### Description (Optional but Recommended)
Add your one-sentence project description.

**Example:** "A fully-featured Texas Hold'em poker game built with HTML, CSS, and JavaScript"

#### Public vs Private
- Select **"Public"** (required for free GitHub Pages hosting)
- This means anyone can view your code (that's OK!)

#### Initialize Repository
For now, **DO NOT** check these boxes:
- ❌ Add a README file (we'll create our own)
- ❌ Add .gitignore
- ❌ Choose a license

We'll add these files ourselves!

### Create the Repository

Click the green **"Create repository"** button.

**Congratulations! You've created your first repository!** 🎉

---

## Step 2: Upload Your Game Files

Now let's add your poker game files to the repository.

### Understanding the Upload Page

You'll see a page with several options. We'll use **"uploading an existing file"**.

Click the link that says **"uploading an existing file"** in the "Quick setup" section.

### Prepare Your Files

Before uploading, organize your poker game files:

**Find these files on your computer:**
- `index.html` (or your main HTML file)
- `styles.css` (or whatever you named your CSS)
- All your JavaScript files (`game.js`, `deck.js`, etc.)
- Any image or sound files

**Rename if needed:**
- Your main HTML file MUST be named `index.html` for GitHub Pages to work
- If it's named something else (like `poker.html`), rename it to `index.html`

### Upload Files

1. **Drag and drop** your files onto the upload area, OR
2. **Click "choose your files"** and select them from your computer

**Start with your HTML file:**
- Upload `index.html` first
- Wait for it to finish uploading

You'll see the file appear in the list below.

### Make Your First Commit

At the bottom of the page, you'll see a "Commit changes" section.

**Commit message:** This describes what you're uploading.

For your first upload, write:
```
Add initial poker game files
```

or

```
Initial commit - poker game
```

Click the green **"Commit changes"** button.

Your `index.html` file is now on GitHub!

---

## Step 3: Upload Remaining Files

Now let's upload the rest of your files and organize them into folders.

### Upload CSS Files

1. Click **"Add file"** → **"Upload files"**
2. Upload your CSS file(s)
3. Commit with message: `Add CSS styles`

### Upload JavaScript Files

We'll organize these into a folder structure.

#### Method 1: Upload and Organize Later
1. Upload all `.js` files
2. Commit with message: `Add JavaScript files`

We'll organize them into folders in the next step.

#### Method 2: Create Folder Structure First (Advanced)
GitHub doesn't let you create empty folders, but you can create folders by uploading files into them. We'll do this in Step 4.

### Upload Assets (Images/Sounds)

If you have images or sound files:

1. Upload them
2. Commit with message: `Add game assets`

---

## Step 4: Organize Files into Folders

Let's create a proper folder structure.

### Create CSS Folder

1. Click **"Add file"** → **"Create new file"**
2. In the name field, type: `css/styles.css`
   - The `css/` creates a folder
   - The `styles.css` is the file
3. Copy your CSS code into the editor
4. Commit with message: `Move CSS to css folder`

Now delete the old CSS file from the root:
1. Click on the old `styles.css` file
2. Click the trash can icon
3. Commit with message: `Remove old CSS file`

### Create JS Folder Structure

Create a folder for your JavaScript:

1. **Option A: Keep it simple**
   - Create `js/game.js` with your main game code
   - Create `js/modules/deck.js` for your first module
   - Add other modules one by one

2. **Option B: Upload in bulk**
   - Upload all JS files to root first
   - Then move them one by one into `js/` folder

### Final Structure

Your repository should look like this:

```
poker-game/
├── index.html
├── css/
│   └── styles.css
└── js/
    ├── game.js
    └── modules/
        ├── deck.js
        ├── handEvaluator.js
        ├── ai.js
        └── ui.js
```

---

## Step 5: Update File Paths

**IMPORTANT:** Since you moved files into folders, you need to update paths in your HTML!

### Edit index.html

1. Click on `index.html` in your repository
2. Click the pencil icon (edit)
3. Update the file paths:

**Before (old paths):**
```html
<link rel="stylesheet" href="styles.css">
<script src="game.js"></script>
<script src="deck.js"></script>
```

**After (new paths):**
```html
<link rel="stylesheet" href="css/styles.css">
<script src="js/game.js"></script>
<script src="js/modules/deck.js"></script>
```

4. Commit with message: `Update file paths for folder structure`

---

## Step 6: Create a Professional README

Every good repository has a README.md file that explains the project.

### Create README.md

1. Click **"Add file"** → **"Create new file"**
2. Name it: `README.md`
3. Add the following content (customize for your game):

```markdown
# Texas Hold'em Poker Game 🃏

A fully-featured Texas Hold'em poker game built with HTML, CSS, and JavaScript.

## Features

- Complete Texas Hold'em rules
- AI opponents with smart betting strategies
- Realistic poker chip betting system
- Hand evaluation (Royal Flush to High Card)
- Animated card dealing
- Sound effects
- Responsive design

## How to Play

1. Click "Start Game" to begin
2. Use the betting buttons to:
   - **Fold** - Give up your hand
   - **Check** - Stay in without betting (when possible)
   - **Call** - Match the current bet
   - **Raise** - Increase the bet
   - **All-In** - Bet all your chips
3. Win hands by having the best poker hand
4. Last player with chips wins!

## Poker Hand Rankings

From highest to lowest:
1. Royal Flush - A, K, Q, J, 10 all same suit
2. Straight Flush - 5 cards in sequence, same suit
3. Four of a Kind - 4 cards of same rank
4. Full House - 3 of a kind + pair
5. Flush - 5 cards same suit
6. Straight - 5 cards in sequence
7. Three of a Kind - 3 cards of same rank
8. Two Pair - 2 different pairs
9. One Pair - 2 cards of same rank
10. High Card - Highest single card

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Modular JavaScript architecture

## Project Structure

```
poker-game/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling
└── js/
    ├── game.js         # Main game logic
    └── modules/
        ├── deck.js           # Deck creation and shuffling
        ├── handEvaluator.js  # Poker hand evaluation
        ├── ai.js             # AI opponent logic
        └── ui.js             # UI updates and animations
```

## Game Rules

Texas Hold'em basics:
- Each player starts with 1000 chips
- 2 cards dealt to each player (hole cards)
- 5 community cards dealt in stages:
  - Flop: 3 cards
  - Turn: 1 card
  - River: 1 card
- Betting rounds after each stage
- Best 5-card hand wins the pot

## Credits

Created by [Your Name]  
Developed as part of a web development learning project

## License

This project is for educational purposes.
```

4. Commit with message: `Add project README`

**Customize this template:**
- Replace `[Your Name]` with your name
- Add/remove features as needed
- Adjust poker hand rankings format if desired
- Add screenshots if you want (we'll cover this in practice exercises)

---

## Step 7: Review Your Repository

Let's make sure everything looks good!

### Check Your Files

1. Go to your repository home page
2. Verify you see:
   - ✅ `index.html`
   - ✅ `README.md`
   - ✅ `css/` folder with styles
   - ✅ `js/` folder with game files

### View Your README

Scroll down on your repository page - you should see your beautiful README displayed!

### Test File Paths

Click on `index.html` and verify the paths look correct:
- CSS: `href="css/styles.css"`
- JS: `src="js/game.js"` and `src="js/modules/..."`

---

## Common Issues & Solutions

### Issue: "index.html not found"
**Solution:** Make sure your main HTML file is named exactly `index.html` (lowercase)

### Issue: "CSS/JS not loading"
**Solution:** Check your file paths in `index.html`. They should match your folder structure.

### Issue: "Files in wrong folder"
**Solution:** You can move files by editing them:
1. Click the file
2. Click edit (pencil icon)
3. In the filename, add the folder path: `css/styles.css`
4. Commit the change
5. Delete the old file

### Issue: "Can't create folder"
**Solution:** GitHub only shows folders that contain files. Create a file inside the folder: `css/styles.css` creates both the folder and file.

### Issue: "Commit message unclear"
**Solution:** Use descriptive messages like:
- ✅ "Add poker hand evaluation logic"
- ❌ "Update" or "changes"

---

## Checklist

Before moving to Lesson 5.3, verify:

- [ ] Repository created with descriptive name
- [ ] `index.html` file uploaded and in root directory
- [ ] CSS files in `css/` folder
- [ ] JavaScript files in `js/` or `js/modules/` folder
- [ ] File paths updated in `index.html`
- [ ] `README.md` created with project information
- [ ] All files committed with clear messages

---

## What You've Accomplished

**Congratulations!** You've:
- ✅ Created your first GitHub repository
- ✅ Uploaded all your poker game files
- ✅ Organized files in a professional structure
- ✅ Written professional documentation
- ✅ Made multiple commits

Your code is now safely stored on GitHub and ready to be deployed!

---

## Next Lesson

Ready to see your game live on the internet? Continue to **[Lesson 5.3: Deploy with GitHub Pages](../lesson-5.3-deploy-with-github-pages/README.md)**

In Lesson 5.3, you'll:
- Enable GitHub Pages
- Get your live URL
- Play your poker game on the internet
- Share it with friends and family!
