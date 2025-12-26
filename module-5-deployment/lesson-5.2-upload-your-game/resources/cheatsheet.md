# Lesson 5.2 Cheatsheet: Uploading to GitHub

## 📤 Uploading Files

### Create New File
1. Click "Add file" → "Create new file"
2. Type filename: `folder/filename.ext`
3. Add content
4. Commit with message

### Upload Existing File
1. Click "Add file" → "Upload files"
2. Drag & drop OR click "choose your files"
3. Commit with message

---

## 📁 Required File Structure

```
poker-game/
├── index.html          ← Must be named exactly this!
├── README.md           ← Project documentation
├── css/
│   └── styles.css
└── js/
    ├── game.js
    └── modules/
        ├── deck.js
        ├── handEvaluator.js
        └── ai.js
```

**Critical:**
- `index.html` must be in root (not in a folder)
- Main HTML file MUST be named `index.html`

---

## 🔗 File Paths in HTML

### Linking CSS
```html
<link rel="stylesheet" href="css/styles.css">
```

### Linking JavaScript
```html
<script src="js/game.js"></script>
<script src="js/modules/deck.js"></script>
```

### With ES6 Modules
```html
<script type="module" src="js/game.js"></script>
```

**Remember:** Paths are relative to `index.html`

---

## 💬 Good Commit Messages

### ✅ Good Examples
- "Add index.html"
- "Create CSS folder and add styles"
- "Add poker hand evaluation module"
- "Update file paths for new structure"
- "Add comprehensive README"

### ❌ Bad Examples
- "update"
- "changes"
- "fix"
- "idk"

**Formula:** `[Action] [What you did]`

---

## 📝 README Template

```markdown
# Project Title 🃏

One-sentence description.

## Features

- Feature 1
- Feature 2
- Feature 3

## How to Play

1. Step 1
2. Step 2

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Credits

Created by [Your Name]
```

---

## 🛠️ Common Tasks

### Create Folder with File
```
Type: css/styles.css
(This creates both css/ folder and styles.css file)
```

### Move File to Folder
1. Click file
2. Edit (pencil icon)
3. Change filename to: `folder/filename.ext`
4. Commit

### Delete File
1. Click file
2. Click trash icon
3. Commit with message: "Remove old [filename]"

---

## ✅ Pre-Deployment Checklist

Before Lesson 5.3:

- [ ] `index.html` in root
- [ ] Files in correct folders
- [ ] Paths updated in HTML
- [ ] README.md created
- [ ] No old/backup files
- [ ] Clear commit messages

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Can't create folder | Use `folder/file.ext` syntax |
| Paths don't work | Check capitalization and spelling |
| README not showing | Must be `README.md` in root |
| Wrong HTML filename | Rename to `index.html` exactly |

---

## 🎯 Quick Reference

**Repository Actions:**
- Add file: Green "Add file" button
- Upload: Choose files from computer
- Edit: Pencil icon
- Delete: Trash icon
- Commit: Green button at bottom

**File Organization:**
- Root = Top level of repository
- Folders = Created by including `/` in filename
- Paths = Relative to `index.html` location

---

## 💡 Pro Tips

**Take your time** - Organizing now saves headaches later

**Commit often** - Small, clear commits are better than one big one

**Test paths** - Make sure `href` and `src` match your structure

**Proofread** - Check your README for typos

---

**Next:** Lesson 5.3 - Deploy with GitHub Pages!
