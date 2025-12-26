# Lesson 5.3 Cheatsheet: GitHub Pages Deployment

## 🚀 Enable GitHub Pages

**Quick steps:**
1. Repository → **Settings**
2. Click **Pages** (left sidebar)
3. Source: **"Deploy from a branch"**
4. Branch: **main** (or master)
5. Folder: **/ (root)**
6. Click **Save**
7. Wait 1-2 minutes
8. Refresh to see URL

---

## 🔗 Your URL Format

```
https://[username].github.io/[repository-name]/
```

**Example:**
```
https://piper-dev.github.io/poker-game/
```

**Real working example:**
```
https://chorton2227.github.io/poker-game/
```

---

## ✅ Deployment Checklist

Before enabling Pages:

- [ ] Repository is **Public**
- [ ] `index.html` in **root directory**
- [ ] File paths are **correct**
- [ ] All files **uploaded**
- [ ] README.md **created**

---

## 🧪 Testing Checklist

After deployment, test:

- [ ] Page loads
- [ ] CSS loads (styles display)
- [ ] JavaScript works (game functions)
- [ ] No console errors
- [ ] All features work
- [ ] Audio works (if applicable)

---

## 🛠️ Troubleshooting

### 404 Error
- Wait 2-5 minutes
- Check repo is Public
- Verify `index.html` in root

### Blank Page
- Check `index.html` filename (lowercase)
- Verify file in root, not in folder
- Check console for errors

### CSS Not Loading
```html
<!-- Fix path in index.html -->
<link rel="stylesheet" href="css/styles.css">
```
- Check path matches folder structure
- Clear cache (Ctrl+Shift+R)

### JavaScript Not Working
```html
<!-- Add type="module" if using ES6 -->
<script type="module" src="js/game.js"></script>
```
- Check console for errors
- Verify all script paths
- Check for CORS issues

---

## 🔄 Update Workflow

To update your live site:

1. **Edit file** in repository
2. **Commit** with clear message
3. **Wait** 1-2 minutes for rebuild
4. **Hard refresh** browser:
   - Windows: Ctrl + Shift + R
   - Mac: Cmd + Shift + R
5. **Test** the change

---

## 🐛 Using Browser DevTools

**Open DevTools:**
- Windows: F12
- Mac: Cmd + Option + I

**Check Console Tab:**
- Red text = errors
- Fix errors in your code
- Commit and redeploy

**Check Network Tab:**
- Red items = failed to load
- Verify file paths
- Ensure files exist

---

## 📸 Taking Screenshots

**Windows:**
- Windows Key + Shift + S

**Mac:**
- Cmd + Shift + 4

**Use screenshots for:**
- README.md
- Social media sharing
- Portfolio
- Documentation

---

## 📤 Sharing Your Game

### Quick Share Message
```
Check out this poker game I built!
[YOUR-URL]

Built with HTML, CSS, and JavaScript 🃏
```

### Share On:
- Text to friends/family
- Social media
- Email
- GitHub profile (website field)
- Portfolio/resume

---

## 📝 Adding Screenshot to README

1. Create `screenshots/` folder
2. Upload screenshot
3. Edit README.md:
```markdown
![Game Screenshot](screenshots/game.png)
```

---

## 🔧 Common URL Issues

### Correct ✅
```
https://username.github.io/repo-name/
```

### Incorrect ❌
```
https://github.com/username/repo-name/  ← Repository page
http://username.github.io/repo-name/   ← Not HTTPS
```

---

## 📊 After Deployment

**Update your GitHub profile:**
1. Profile icon → "Your profile"
2. Edit profile
3. Website field → Add your game URL
4. Save

**Collect feedback:**
- Ask friends to test
- Note bugs found
- Document feature requests
- Fix and iterate

---

## 💡 Pro Tips

**Test before sharing:**
- Click every button
- Test in multiple browsers
- Check on mobile
- Look for console errors

**Hard refresh after updates:**
- Browser caches old files
- Ctrl+Shift+R forces reload
- Important after every update

**Clear commit messages:**
- "Fix betting bug" ✅
- "update" ❌

**Keep improving:**
- Deployment isn't the end
- Listen to feedback
- Fix bugs promptly
- Add features over time

---

## 🎯 Success Indicators

Your deployment is successful when:

✅ URL loads your game  
✅ All features work  
✅ No console errors  
✅ Others can play it  
✅ You're proud to share it  

---

## 📚 Helpful Links

**GitHub Pages:**
- https://pages.github.com

**Documentation:**
- https://docs.github.com/en/pages

**Troubleshooting:**
- Check console first
- Verify file paths
- Clear browser cache

---

## 🎉 Celebration Checklist

When your game is live:

- [ ] Play your own game online
- [ ] Share URL with 3+ people
- [ ] Add to GitHub profile
- [ ] Take screenshot
- [ ] Update README with URL
- [ ] Pat yourself on the back!

---

**Remember: You built something REAL that anyone in the world can access!** 🚀🃏🏆
