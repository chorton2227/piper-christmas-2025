# Lesson 5.3: Deploy with GitHub Pages

## What You'll Learn

This is it - the moment you've been working toward! In this lesson, you'll deploy your Texas Hold'em poker game to GitHub Pages and get a real web address that anyone can visit.

By the end of this lesson, **your game will be live on the internet**! 🎉

## Learning Objectives

By the end of this lesson, you will be able to:
- Enable GitHub Pages for your repository
- Deploy a static website
- Access your live game URL
- Test your deployed game
- Troubleshoot common deployment issues
- Share your game with others

---

## Prerequisites

Before starting, make sure you:
- ✅ Have a GitHub repository with your poker game
- ✅ Have `index.html` in the root directory
- ✅ Have all files uploaded and organized
- ✅ Have file paths updated correctly
- ✅ Completed Lesson 5.2 verification

---

## Step 1: Enable GitHub Pages

Let's make your repository into a live website!

### Navigate to Settings

1. Go to your repository on GitHub
2. Click the **"Settings"** tab (near the top, right side)
3. Scroll down the left sidebar
4. Click **"Pages"** (under "Code and automation")

You'll see the GitHub Pages settings page.

### Configure GitHub Pages

Under "Build and deployment":

#### Source
- Keep it set to: **"Deploy from a branch"**

#### Branch
1. Click the dropdown that says "None"
2. Select **"main"** (or "master" if that's what you have)
3. Keep the folder as **"/ (root)"**
4. Click **"Save"**

**That's it!** GitHub is now building your site.

---

## Step 2: Get Your Live URL

GitHub will take a minute or two to build and deploy your site.

### Find Your URL

After saving, you'll see a blue box at the top that says:

> "GitHub Pages source saved."

Refresh the page after 1-2 minutes, and you'll see:

> "Your site is live at `https://[username].github.io/[repository-name]/`"

**This is your live URL!**

### Your Game is Live! 🎉

Click the link to visit your deployed poker game!

**Example URL:**
```
https://piper-dev.github.io/poker-game/
```

**Real working example:**
```
https://chorton2227.github.io/poker-game/
```

Try playing the real example to see what yours will be like!

---

## Step 3: Test Your Deployed Game

Time to make sure everything works!

### Open Your Game

Click your GitHub Pages URL to open your poker game.

### Complete Testing Checklist

Test every feature systematically:

#### ✅ Game Loads
- [ ] Page loads without errors
- [ ] Poker table displays
- [ ] Buttons visible
- [ ] Chips display

#### ✅ Game Starts
- [ ] "Start Game" button works
- [ ] Cards are dealt
- [ ] Player and AI cards appear
- [ ] Initial betting round begins

#### ✅ Betting Works
- [ ] Fold button works
- [ ] Check button works (when allowed)
- [ ] Call button works
- [ ] Raise button works
- [ ] All-in button works
- [ ] Chip counts update correctly

#### ✅ Game Progresses
- [ ] Flop reveals correctly
- [ ] Turn reveals correctly
- [ ] River reveals correctly
- [ ] Betting rounds work between each stage

#### ✅ Hand Evaluation
- [ ] Winner determined correctly
- [ ] Winning hand displayed
- [ ] Pot awarded to winner
- [ ] Hand rankings work (test different hands if possible)

#### ✅ Visual Elements
- [ ] CSS styles load correctly
- [ ] Animations work smoothly
- [ ] Layout looks correct
- [ ] Colors/fonts match your design

#### ✅ Audio (if applicable)
- [ ] Sound effects play
- [ ] Sounds match actions

#### ✅ End Game
- [ ] Game ends when player runs out of chips
- [ ] Game ends when AI runs out of chips
- [ ] Can start a new game

### Browser Testing

Test in multiple browsers if possible:

- [ ] Chrome
- [ ] Firefox  
- [ ] Safari
- [ ] Edge

### Mobile Testing (Optional)

If you have a smartphone:

- [ ] Visit URL on phone
- [ ] Test if game is playable
- [ ] Check if buttons work on touch screen

---

## Step 4: Troubleshooting

If something doesn't work, here's how to fix it:

### Problem: Page doesn't load / 404 Error

**Possible causes:**
1. GitHub Pages hasn't finished building yet
2. Repository is private
3. GitHub Pages not enabled correctly

**Solutions:**
- Wait 2-5 minutes and refresh
- Check that repository is Public (Settings → General)
- Re-check GitHub Pages settings (Step 1)

### Problem: Blank page

**Possible causes:**
1. `index.html` not in root directory
2. File name typo (`Index.html` instead of `index.html`)

**Solutions:**
- Verify `index.html` is in root (not in a folder)
- Check filename is exactly `index.html` (lowercase)

### Problem: CSS not loading (page looks unstyled)

**Possible causes:**
1. CSS file path is wrong
2. CSS file not uploaded
3. Typo in filename

**Solutions:**

1. Open browser DevTools (F12)
2. Check Console for errors
3. Look for "Failed to load resource: css/styles.css"
4. Fix the path in `index.html`:

```html
<!-- Make sure path matches your folder structure -->
<link rel="stylesheet" href="css/styles.css">
```

5. Verify CSS file exists in repository at that path

### Problem: JavaScript not working

**Possible causes:**
1. JS file paths wrong
2. Module import errors
3. Console errors

**Solutions:**

1. Open browser DevTools (F12)
2. Check Console tab for errors
3. Common issues:

**Wrong path:**
```html
<!-- Fix path to match folder structure -->
<script src="js/game.js"></script>
<script src="js/modules/deck.js"></script>
```

**Module type missing:**
```html
<!-- If using ES6 modules, add type="module" -->
<script type="module" src="js/game.js"></script>
```

**CORS errors with modules:**
- This might happen locally but should work on GitHub Pages
- If it doesn't, you may need to combine modules into one file

### Problem: 404 for images/sounds

**Possible causes:**
1. Asset paths incorrect
2. Files not uploaded

**Solutions:**
- Check paths in your code
- Verify files are in repository
- Use relative paths: `assets/images/card.png`

---

## Step 5: Making Updates

Found a bug? Want to change something? Here's how to update your live site:

### Edit Files on GitHub

1. Go to your repository
2. Navigate to the file you want to edit
3. Click the pencil icon (edit)
4. Make your changes
5. Commit with a clear message

### Wait for Deployment

- GitHub Pages will automatically rebuild
- Wait 1-2 minutes
- Refresh your live site
- Changes should appear!

### Testing Changes

Always test after updating:
1. Make change in repository
2. Wait for deployment
3. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
4. Test the change on live site

---

## Step 6: Share Your Game!

Your poker game is live - time to share it with the world!

### Get Your URL

Copy your GitHub Pages URL:
```
https://[your-username].github.io/[repository-name]/
```

### Share It

**Text/email to:**
- Friends
- Family
- Classmates
- Teachers

**Add to:**
- Your GitHub profile (Settings → Website field)
- Social media (if appropriate)
- Portfolio/resume
- College applications

### Write a Sharing Message

**Template:**
```
Hey! I just built and deployed a Texas Hold'em poker game! 🃏

Check it out: [your-url]

I built it from scratch using HTML, CSS, and JavaScript. 
Let me know what you think!
```

---

## Step 7: Add Your URL to GitHub Profile

Make your deployed game easy to find!

### Update Profile

1. Click your profile icon → "Your profile"
2. Click "Edit profile"
3. In the "Website" field, paste your game URL
4. Save changes

Now anyone viewing your profile can play your game with one click!

---

## Going Further (Optional)

Want to make your deployment even better?

### Custom Domain (Advanced)

You can use a custom domain like `poker.yourdomain.com` instead of `github.io`:

1. Buy a domain (costs money - around $10/year)
2. Configure DNS settings
3. Add custom domain in GitHub Pages settings
4. Follow GitHub's custom domain guide

**Note:** This is optional and advanced. The `github.io` URL works great!

### HTTPS Certificate

**Good news:** GitHub Pages automatically provides HTTPS (the lock icon in browser)!

You don't need to do anything - your site is already secure.

### Analytics (Optional)

Want to know how many people visit your game?

1. Set up Google Analytics (free)
2. Add tracking code to your `index.html`
3. View visitor stats in Analytics dashboard

**Note:** This is optional and beyond this lesson's scope.

---

## Common Questions

### Q: Can I make my repository private but keep the site public?

**A:** No. GitHub Pages requires a public repository for free accounts. Your code will be visible to anyone.

### Q: How much does GitHub Pages cost?

**A:** It's completely free! No hidden costs, no credit card required.

### Q: Can I host multiple projects?

**A:** Yes! Each repository can have its own GitHub Pages site. You could host many games/projects.

### Q: What if someone copies my code?

**A:** That's part of open source! It's actually a compliment. Plus, having public code helps with:
- Portfolio building
- Learning from others
- Contributing to the developer community

You can add a license file if you want to specify how others can use your code.

### Q: Can I take the site down later?

**A:** Yes! Just disable GitHub Pages in Settings → Pages. The repository stays, but the live site goes offline.

### Q: Will my site stay up forever?

**A:** As long as your GitHub account exists and Pages is enabled, yes! GitHub Pages is a permanent hosting solution.

---

## Checklist

Before finishing this module, confirm:

- [ ] GitHub Pages enabled
- [ ] Site deployed successfully
- [ ] URL works
- [ ] All game features work on live site
- [ ] Tested in at least one browser
- [ ] No console errors
- [ ] CSS loads correctly
- [ ] JavaScript works correctly
- [ ] Shared URL with at least one person
- [ ] Added URL to GitHub profile

---

## What You've Accomplished

**Congratulations!** You've:

- ✅ Enabled GitHub Pages
- ✅ Deployed your poker game to the internet
- ✅ Got a live, shareable URL
- ✅ Tested your deployed game
- ✅ Troubleshooted any issues
- ✅ Shared your accomplishment with others

**You're now a published web developer!** 🎉🚀

---

## Module Complete!

You've finished Module 5! Let's review what you've learned:

### Module 5 Summary

**Lesson 5.1:** Created GitHub account, learned GitHub basics  
**Lesson 5.2:** Uploaded game files, wrote documentation  
**Lesson 5.3:** Deployed game, got live URL

### Skills Gained

- Version control with Git/GitHub
- Project organization
- Technical documentation
- Web deployment
- Troubleshooting
- Professional presentation

### What's Next?

Your learning doesn't have to stop here! Consider:

**Build More Projects:**
- Another game
- Personal website
- Interactive app

**Improve Your Poker Game:**
- Add more features
- Improve AI
- Add multiplayer
- Better graphics/animations

**Learn More:**
- JavaScript frameworks (React, Vue)
- Backend development (Node.js)
- Databases
- Advanced CSS

**Share Your Knowledge:**
- Help others learn
- Write blog posts about what you built
- Contribute to open source

---

## Final Thoughts

You started Module 1 learning basic HTML, and now you have a **live, fully-functional poker game on the internet**.

**That's incredible!** 

You've learned:
- HTML, CSS, and JavaScript
- Programming concepts
- Game development
- Professional workflows
- Deployment

**Most importantly:** You've proven you can build real things that work!

Keep coding, keep building, keep learning. The sky's the limit! 🚀

---

## Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Learning Lab](https://lab.github.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [JavaScript.info](https://javascript.info/)

---

**Congratulations on completing the full web development curriculum!** 🎉🃏🏆
