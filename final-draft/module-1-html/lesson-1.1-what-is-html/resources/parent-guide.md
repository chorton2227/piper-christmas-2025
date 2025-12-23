# Parent & Mentor Guide — Lesson 1.1: What Is HTML?

A guide for parents, mentors, and anyone helping someone learn HTML

---

## 🎯 Lesson Overview

**What students will learn:**
- HTML is the structure/skeleton of websites
- How to write basic HTML tags and elements
- How to create a simple web page
- How to link pages together

**Time commitment:** 45-60 minutes (flexible, can be split across multiple sessions)

**Age range:** 10+ (younger with support, older independently)

---

## 📖 Key Concepts to Understand

### What Is HTML?

Think of building a house:
- **HTML** = The frame, walls, and rooms (structure)
- **CSS** = The paint, furniture, and decoration (style) - comes later
- **JavaScript** = The lights, doors, and appliances (functionality) - comes later

HTML is text with special codes (called "tags") that tell browsers how to display content.

### Tags and Elements

**Tag:** The code that marks up content
```html
<p>This is a paragraph</p>
```
- `<p>` = Opening tag
- `</p>` = Closing tag (notice the `/`)
- The whole thing = Element

**Think of it like:** Quotation marks in writing. Just as quotes show "someone is speaking," tags show "this is a paragraph" or "this is a heading."

### HTML Structure

Every HTML page has the same basic skeleton:
```html
<!DOCTYPE html>
<html>
<head>
    <title>What shows in the tab</title>
</head>
<body>
    What shows on the page
</body>
</html>
```

**Analogy:** Like a business letter format - you always have a header, body, and signature. HTML is the same!

---

## 💡 How to Help

### Before the Lesson

**Set expectations:**
- "We're going to build actual web pages today!"
- "It might look confusing at first, but it's just text with special codes"
- "Mistakes are good - that's how we learn!"

**Prepare the environment:**
- Install a code editor (VS Code is free and excellent)
- Make sure they have a modern web browser
- Create a dedicated folder for their HTML practice

### During the Lesson

**Encourage exploration:**
- "What do you think this tag does?"
- "What happens if you change this word?"
- "Try it and see!"

**Ask guiding questions:**
- "Why do you think we need both a title and a heading?"
- "What makes a good page title?"
- "How would someone who can't see the image know what it shows?"

**Celebrate mistakes:**
- "Great! You found something that doesn't work. Now let's figure out why."
- "Browsers are very forgiving - your 'mistake' still shows something!"

### What to Praise

- ✅ Trying something new
- ✅ Experimenting with code
- ✅ Asking "why" questions
- ✅ Noticing patterns
- ✅ Fixing their own errors
- ✅ Adding personal creativity

---

## 🆘 Common Questions & How to Answer

### "Why do I need to type all this structure every time?"

**Answer:** "Good question! Developers use shortcuts and templates for this. For now, typing it helps you learn what each part does. Later, we'll use faster methods."

**Reality:** Code editors have shortcuts. But learning the structure first is important!

### "Why do some tags have `< />` and others have separate closing tags?"

**Answer:** "Some elements don't have content inside them, like images. They're complete by themselves, so they don't need a closing tag."

**Example:** A paragraph has text inside: `<p>text</p>`. An image is just there: `<img src="...">`

### "Can I use anything as a tag name?"

**Answer:** "No, HTML has specific tag names that browsers understand. You can't make up new ones. Each tag has a special meaning - `<p>` means paragraph, `<h1>` means heading."

### "Why doesn't my page look good?"

**Answer:** "HTML is just the structure - it tells what things are, not how they look. To make it look pretty, we'll learn CSS later. For now, we're building the skeleton!"

### "Do I have to memorize all these tags?"

**Answer:** "No! Even professional developers look things up constantly. That's what the cheatsheet is for. You'll remember the common ones naturally as you use them."

---

## 🎓 Teaching Tips

### Make It Visual

Show them:
- View Source on real websites (Right-click → View Page Source)
- Inspect Element in browser dev tools (Right-click → Inspect)
- Their own page in the browser next to their code

### Use Analogies

- **Tags are like:** Punctuation marks, labels on containers, formatting in a word processor
- **Attributes are like:** Adjectives that describe nouns
- **Nesting is like:** Russian dolls, folders within folders

### Connect to Their Interests

- "Want to make a page about your favorite game?"
- "Let's build a page about your pets"
- "What website do you wish existed?"

### Emphasize Accessibility Early

Help them understand:
- Not everyone can see images (alt text matters!)
- Screen readers read web pages out loud
- Good HTML helps everyone, including people with disabilities

This builds empathy and good habits from day one.

---

## 🐛 Troubleshooting Common Issues

### Page Shows HTML Code Instead of Formatted Text

**Problem:** File saved as `.txt` instead of `.html`

**Solution:** 
1. In Notepad: File → Save As → Change "Save as type" to "All Files"
2. Make sure filename ends with `.html`
3. Rename the file if needed

### Image Won't Display

**Problem:** Wrong file path or filename

**Check:**
- Is the image in the same folder as the HTML file?
- Is the filename spelled exactly right (including capital letters)?
- Does the file extension match? (`photo.jpg` not `photo.jpeg`)

**Quick fix:** Use a placeholder image: `https://placehold.co/400x300`

### Link Doesn't Work

**Problem:** Misspelled filename or wrong path

**Check:**
- Are both files in the same folder?
- Is the filename in `href` exactly the same as the actual file?
- Did they forget the `.html` extension?

### Nothing Shows Up

**Problem:** Content in `<head>` instead of `<body>`

**Solution:** Make sure all visible content is between `<body>` and `</body>`

### Browser Tab Says "Untitled"

**Problem:** No `<title>` tag or title is empty

**Solution:** Add `<title>Page Name</title>` in the `<head>` section

---

## 📊 How to Check Understanding

### Questions to Ask

**Recall:**
- "What does HTML stand for?"
- "What's the difference between a tag and an element?"

**Understanding:**
- "Why do we use headings?"
- "What's the purpose of alt text?"
- "When would you use a link vs. just text?"

**Application:**
- "How would you add a new paragraph?"
- "What tag would you use for the main title?"

**Analysis:**
- "Why do you think browsers need the DOCTYPE?"
- "What would happen if you forgot the closing tag?"

### Success Indicators

Student can:
- [ ] Create an HTML file and open it in a browser
- [ ] Explain what a tag is
- [ ] Write a basic HTML structure from memory (or with minimal reference)
- [ ] Add headings and paragraphs
- [ ] Create a working link
- [ ] Add an image with alt text
- [ ] Fix simple errors in their code

---

## 🚀 Extension Activities

### If They're Flying Through

**Challenge them to:**
1. Create a 3-page website about their favorite topic
2. Add 5+ different types of content (headings, paragraphs, lists, links, images)
3. Research a new HTML tag and teach you about it
4. Look at a real website's HTML and identify tags they recognize
5. Create a "cheatsheet" in their own words

### If They're Struggling

**Slow down and:**
1. Focus on just the structure first (no content yet)
2. Type together - you narrate, they type
3. Use a pre-written template they can modify
4. Celebrate each small win
5. Take breaks - coding requires focus!

### Project Ideas

- **About Me page** - With photo, interests, favorite things
- **Pet showcase** - Pictures and descriptions of pets (real or imaginary)
- **Book/Movie review** - With star ratings and links
- **Recipe page** - Ingredients list and instructions
- **Hobby page** - Whatever they're passionate about

---

## 🎨 Encouraging Creativity

HTML might seem dry at first, but encourage personalization:

**They can write about:**
- Things they love
- Made-up worlds
- Funny stories
- Dreams and goals
- Family and friends

**Remind them:**
"This is YOUR web page. There's no wrong content - make it about something you care about!"

---

## 📚 Additional Resources for You

### If You Want to Learn Too

- **MDN Web Docs:** Professional, comprehensive (https://developer.mozilla.org/en-US/docs/Web/HTML)
- **W3Schools:** Simple explanations with interactive examples (https://www.w3schools.com/html/)
- **FreeCodeCamp:** Free, structured curriculum (https://www.freecodecamp.org/)

### Understanding Your Role

You don't need to be an expert! You're a:
- **Guide** - Pointing them to resources
- **Cheerleader** - Celebrating their progress
- **Debugger** - Helping find and fix errors
- **Question-asker** - Encouraging them to think

**It's okay to say:** "I don't know - let's look it up together!"

---

## ✅ Completion Checklist

Your student is ready to move on when they can:

- [ ] Explain what HTML is in their own words
- [ ] Create a basic HTML file from scratch
- [ ] Open an HTML file in a browser
- [ ] Use headings (`<h1>`, `<h2>`, etc.)
- [ ] Write paragraphs (`<p>`)
- [ ] Create links (`<a href="...">`)
- [ ] Add images with alt text (`<img src="..." alt="...">`)
- [ ] Link two pages together
- [ ] Find and fix a simple error (like a missing closing tag)

**Don't worry if:** They need to reference the cheatsheet - professionals do this too!

---

## 💭 Final Thoughts

**Remember:**
- Learning to code is like learning a language - it takes practice
- Everyone learns at their own pace
- Frustration is part of the process (and means they're growing!)
- Small wins matter - celebrate creating their first web page!
- The goal isn't perfection - it's understanding and confidence

**Your job:** Make it fun, safe to fail, and celebrate curiosity!

---

## 📞 Need More Help?

- Check the main lesson README.md for detailed explanations
- Review the cheatsheet for quick reference
- Look at the example files to see working code
- Join online communities (Reddit's r/learnprogramming, Stack Overflow)

**You've got this!** Teaching someone to code is incredibly rewarding. 🎉
