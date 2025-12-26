# Exercise 1: Deploy and Test Your Game

## Objective

Enable GitHub Pages for your repository and verify that your poker game works correctly on the live site.

## Instructions

### Part 1: Enable GitHub Pages (5 minutes)

Follow these steps carefully:

1. **Go to your repository** on GitHub

2. **Click Settings** (top menu, right side)

3. **Click Pages** (left sidebar, under "Code and automation")

4. **Configure deployment:**
   - Source: "Deploy from a branch"
   - Branch: Select "main" (or "master")
   - Folder: "/ (root)"

5. **Click Save**

6. **Wait 1-2 minutes** for GitHub to build your site

7. **Refresh the page**

8. **Find your URL** - You should see:
   > "Your site is live at https://[username].github.io/[repo-name]/"

### Part 2: Access Your Live Game (2 minutes)

1. **Copy your GitHub Pages URL**

Write it here:
```
https://_________________________________.github.io/_________________________________/
```

2. **Click the URL** or paste it in a new browser tab

3. **Wait for the page to load**

### Part 3: Complete Testing (20 minutes)

Test every feature systematically. Check each box as you test:

#### Loading
- [ ] Page loads
- [ ] No error messages
- [ ] Poker table displays
- [ ] All UI elements visible

#### Game Start
- [ ] Click "Start Game"
- [ ] Cards are dealt
- [ ] Both player and AI receive 2 cards
- [ ] Initial chip counts display

#### Betting Round 1 (Pre-Flop)
- [ ] Betting buttons appear
- [ ] Can fold
- [ ] Can check (if allowed)
- [ ] Can call
- [ ] Can raise
- [ ] Chip counts update after bets

#### Flop
- [ ] 3 community cards revealed
- [ ] Cards display correctly
- [ ] Betting round begins

#### Turn
- [ ] 4th community card revealed
- [ ] Betting round works

#### River
- [ ] 5th community card revealed
- [ ] Final betting round

#### Showdown
- [ ] Winner determined
- [ ] Winning hand displayed correctly
- [ ] Pot awarded to winner
- [ ] Hand rankings correct

#### New Round
- [ ] Can start a new round
- [ ] Chip counts carry over
- [ ] New cards dealt

#### End Game
- [ ] Game ends when chips run out
- [ ] Appropriate message displayed

#### Visual/Audio
- [ ] CSS styles loaded
- [ ] Fonts correct
- [ ] Colors correct
- [ ] Animations smooth
- [ ] Sound effects work (if applicable)

### Part 4: Browser DevTools Check (10 minutes)

Let's check for hidden errors:

1. **Open DevTools:**
   - Windows: Press F12
   - Mac: Press Cmd+Option+I

2. **Click the "Console" tab**

3. **Look for errors** (red text)

**Do you see any errors?** Yes ☐ / No ☐

**If yes, write them here:**
```
________________________________________________
________________________________________________
________________________________________________
```

4. **Click the "Network" tab**

5. **Refresh the page** (F5 or Cmd+R)

6. **Look for failed requests** (red items)

**Any failed requests?** Yes ☐ / No ☐

**If yes, which files?**
```
________________________________________________
________________________________________________
```

### Part 5: Multi-Browser Testing (Optional - 10 minutes)

If you have access to multiple browsers, test in each:

**Chrome:**
- [ ] Game loads
- [ ] All features work
- [ ] No console errors

**Firefox:**
- [ ] Game loads
- [ ] All features work
- [ ] No console errors

**Safari:**
- [ ] Game loads
- [ ] All features work
- [ ] No console errors

**Edge:**
- [ ] Game loads
- [ ] All features work
- [ ] No console errors

## What You're Learning

This exercise teaches you:
- Deployment configuration
- Quality assurance testing
- Using browser DevTools
- Cross-browser testing
- Debugging deployed apps

## Success Criteria

✅ GitHub Pages enabled  
✅ Live URL accessible  
✅ Game loads without errors  
✅ All game features work correctly  
✅ No console errors  
✅ Tested systematically  

## Troubleshooting

### Issue: 404 Error

**Try:**
- Wait another 2-3 minutes
- Check repository is Public
- Verify `index.html` is in root directory

### Issue: Blank Page

**Try:**
- Check console for errors
- Verify `index.html` filename (exact lowercase)
- Check file is in root, not in a folder

### Issue: CSS Not Loading

**Try:**
- Check path in `index.html`: `<link href="css/styles.css">`
- Verify CSS file exists at that path in repository
- Clear browser cache (Ctrl+Shift+R)

### Issue: JavaScript Not Working

**Try:**
- Check console for specific errors
- Verify script paths in `index.html`
- Check for `type="module"` if using ES6 modules
- Ensure all JS files uploaded correctly

## Time Estimate

**45 minutes total** (including troubleshooting if needed)

## Next Steps

Once your game works perfectly on the live site, move to **Exercise 2** to create promotional materials!

---

## Victory Moment! 🎉

**If your game works:** Congratulations! Your poker game is LIVE on the internet!

Take a screenshot and save it - this is a major milestone!
