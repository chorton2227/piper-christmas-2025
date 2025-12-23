# Parent Guide: Lesson 1.5

## 🎯 Lesson Overview
This lesson teaches images - how to add them to web pages, size them properly, make them clickable, and use them effectively. Piper will learn the `<img>` tag and best practices for web images.

**Time**: 60-80 minutes
**Difficulty**: Medium
**Prerequisites**: Lessons 1.1-1.4 (HTML basics, text, lists, links)

---

## 📚 What Piper Will Learn

### Core Concepts:
1. The `<img>` tag (self-closing)
2. Image paths (local and online)
3. Alt text (accessibility and importance)
4. Sizing images (width/height)
5. Image formats (JPG, PNG, GIF, SVG)
6. Making images clickable (image links)
7. Figure and figcaption elements
8. Image best practices

### Practical Skills:
- Add images to web pages
- Write descriptive alt text
- Size images appropriately
- Create clickable images
- Add captions to images
- Organize images in galleries
- Use placeholder images for testing
- Troubleshoot image issues

---

## 🎓 Teaching Tips

### Use Real Visual Examples
- Images are inherently visual - show, don't just tell
- Open websites and inspect images
- Point out good and bad examples
- Make it tangible with immediate visual feedback

### Alt Text is Critical
- Emphasize accessibility importance
- Show what screen readers do
- Demonstrate broken images showing alt text
- Practice writing good descriptions

### Start with Placeholders
- Use https://placehold.co for practice
- No need to find real images immediately
- Easy to test different sizes
- Can customize colors and text

### Make It Personal
- Let her choose her favorite images
- Build galleries of things she cares about
- Photos of pets, hobbies, interests
- Makes learning more engaging!

---

## ✅ Completion Checklist

Piper should be able to:
- [ ] Add an image with proper src and alt
- [ ] Write descriptive alt text
- [ ] Size images using width/height
- [ ] Use images from URLs
- [ ] Make images clickable (wrap in `<a>` tag)
- [ ] Add captions with figure/figcaption
- [ ] Troubleshoot when images don't show
- [ ] Explain why alt text matters
- [ ] Choose appropriate image formats

---

## 🎮 Practice Exercises

### Exercise 1: Add Images to a Page (Easy/Medium)
**Goal**: Practice basic image syntax
**Time**: 20-25 minutes

**Help if stuck:**
- Show example-1 (basic images)
- Help with placeholder URL syntax
- Practice writing alt text together
- Check file paths carefully

**What to look for:**
- Are all images displaying?
- Does every image have alt text?
- Is alt text descriptive?
- Are sizes appropriate?
- Is the page well-organized?

**Common issues:**
- Forgetting alt attribute
- Vague alt text ("image" or "photo")
- Wrong placeholder URL format
- Images too large or too small

### Exercise 2: Create an Image Gallery (Medium)
**Goal**: Use figure/figcaption and organize images
**Time**: 25-35 minutes

**Help if stuck:**
- Show example-2 and example-4
- Help structure figure tags
- Practice writing captions
- Test anchor links together

**What to look for:**
- Are figures used correctly?
- Do captions add value?
- Is content well-organized in sections?
- Do anchor links jump correctly?
- Professional appearance?

**Caption Quality:**
- Good: "Sunset at Malibu Beach, Summer 2025"
- Bad: "A photo"
- Encourage descriptive, interesting captions

### Exercise 3: Complete Website with Images (Challenging)
**Goal**: Build multi-page site with comprehensive image use
**Time**: 40-60 minutes

**This is a BIG project!**
- Multiple pages with navigation
- Images on every page
- Clickable images
- Full gallery page
- Profile images
- Social icons

**Help if stuck:**
- Break it into smaller steps
- Create one page at a time
- Copy navigation between pages
- Reference previous examples
- Test frequently

**What to look for:**
- Navigation works on all pages
- Images used appropriately on each page
- Clickable images function correctly
- Gallery is comprehensive
- Consistent design across pages
- All links work

---

## 🐛 Common Issues & Solutions

### "My image doesn't show!"
**Check:**
1. Is src path correct?
2. Is filename spelled right? (case-sensitive!)
3. Is file extension correct? (.jpg not .jpeg?)
4. Does file actually exist in that location?
5. For online images, is URL complete with https://?

**Quick test:** Try a placeholder URL to verify syntax is correct

### "Image is stretched/squished!"
**Cause:** Width and height don't match image's aspect ratio
**Solutions:**
- Only set width OR height (not both)
- Calculate correct ratio
- Check original image dimensions
**Example:** 800×600 image = 4:3 ratio, so use 400×300 or 200×150

### "I forgot the alt attribute"
**Explain:** 
- Screen readers need it
- SEO uses it
- Shows when image broken
- Always required!

**Practice writing alt text together**

### "Placeholder URL doesn't work"
**Check:**
- Format: `https://placehold.co/400x300`
- No spaces in URL
- Correct numbers (width x height)
- Full URL with https://

### "How do I make image clickable?"
**Show:**
```html
<a href="destination.html">
    <img src="image.jpg" alt="Description">
</a>
```
- Image goes INSIDE the `<a>` tags
- Like wrapping text in a link, but with an image

---

## 💬 Discussion Questions

Ask Piper:
- "Why is alt text important?"
- "What makes good alt text?"
- "When would you use PNG vs JPG?"
- "Why might an image not show on a webpage?"
- "How do clickable images work?"
- "What's the purpose of captions?"

---

## 🎨 Customization Ideas

Make it relevant to her interests:

**Gaming:**
- Gallery of game screenshots
- Favorite game character images
- Gaming setup photos
- Achievement images

**Pets:**
- Pet photo gallery
- Before/after grooming
- Funny pet moments
- Pet profile page

**Hobbies:**
- Art portfolio
- Craft projects
- Collections
- Progress photos

**Travel/Places:**
- Vacation photos
- Dream destinations
- Local attractions
- Before/after visits

---

## 📊 Assessment

### Knowledge Check:
- Can she explain what src and alt do?
- Does she understand image paths?
- Can she describe image formats?
- Does she know when to use figure/figcaption?

### Skill Check:
- Can she add images independently?
- Does she write good alt text?
- Can she size images appropriately?
- Can she make images clickable?
- Can she troubleshoot broken images?

### Quality Check:
- Are all images displaying?
- Is alt text descriptive and helpful?
- Are sizes appropriate (not too big/small)?
- Do clickable images work?
- Is the page well-organized?

---

## ⏭️ What's Next

**Lesson 1.6**: Tables (coming up)
- Organizing data in rows and columns
- Table structure
- Combining everything learned so far

---

## 🎯 Key Success Indicators

**She's ready to move on when:**
- Images display correctly every time
- Alt text is consistently descriptive
- She can troubleshoot broken images
- Clickable images work properly
- Figure/figcaption used correctly
- She understands image best practices
- Can build image-rich pages independently

**Spend more time if:**
- Images frequently don't display
- Alt text is consistently vague
- Can't troubleshoot path issues
- Confusion about clickable images
- Doesn't understand why alt matters

---

## 💡 Pro Tips for Teaching

1. **Visual Learning** - Images are perfect for immediate feedback
2. **Start Simple** - One image first, then build up
3. **Use Placeholders** - No need for real images initially
4. **Alt Text Practice** - Spend time on this - it's important!
5. **Make It Personal** - Her photos/interests = more engaging
6. **Troubleshoot Together** - Path issues teach debugging
7. **Celebrate Galleries** - Big accomplishment!
8. **Real World Examples** - Show how websites use images

---

## 🔍 Debugging Process

Teach her this workflow:

**Image doesn't show?**
1. Check browser - do you see broken image icon?
2. Right-click → Inspect → Check error message
3. Verify file path is correct
4. Check filename spelling (case-sensitive!)
5. Try placeholder URL to test syntax
6. Fix and refresh browser

**Wrong size?**
1. Check original image dimensions
2. Calculate aspect ratio
3. Adjust width/height
4. Or only set one dimension

---

## 📝 Notes Space

**What worked well:**
[Your notes]

**Image challenges:**
[Your notes]

**Alt text quality:**
[Your notes]

**Gallery success:**
[Your notes]

**Time spent:**
[Your notes]

---

## 🌟 Celebrate Progress!

After this lesson, Piper can:
- ✅ Add images to any web page
- ✅ Write accessible alt text
- ✅ Create beautiful galleries
- ✅ Make images clickable
- ✅ Size images properly
- ✅ Use captions effectively

**Her websites are now visual and engaging!** 🎉

Images bring websites to life - this is a huge step toward building modern, attractive web pages!
