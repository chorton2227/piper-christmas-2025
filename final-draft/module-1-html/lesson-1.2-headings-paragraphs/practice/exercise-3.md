# Exercise 3: Build a Blog Post

## 🎯 Goal
Create a complete, professional-looking blog post using proper heading hierarchy and all the text formatting techniques you've learned. This is your chance to show off everything!

---

## 📋 Instructions

### Step 1: Pick Your Topic
Choose something you're passionate about! Your blog post can be about:
- A review (book, movie, game, product)
- A how-to guide
- Your opinion on something
- A personal experience
- A comparison of two things
- A "Top 5" or "Top 10" list
- Anything that interests you!

### Step 2: Create Your File
Create `blog-post.html` in your student-workspace folder.

### Step 3: Plan Your Structure
Before coding, sketch out your headings:
- What's your h1 (main title)?
- What are your h2 sections (major topics)?
- Will any h2 sections need h3 subsections?

### Step 4: Build the HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Blog: [Your Topic]</title>
</head>
<body>
    <!-- Your amazing blog post goes here! -->
</body>
</html>
```

### Step 5: Add Required Elements

**Heading Hierarchy:**
- 1 `<h1>` - Your blog post title
- At least 3 `<h2>` - Main sections
- At least 2 `<h3>` - Subsections under at least one h2

**Content:**
- At least 8 paragraphs total
- Opening paragraph introducing the topic
- Body paragraphs with details
- Closing paragraph with conclusions

**Formatting:**
- `<strong>` for key points or important words
- `<em>` for emphasis or titles
- `<hr>` to separate major sections
- `<br>` for special formatting (quotes, addresses, etc.)
- At least 3 other tags (`<mark>`, `<u>`, `<small>`, `<del>`)

---

## ✅ Success Check

Your blog post must have:
- [ ] Proper HTML structure (DOCTYPE, html, head, body)
- [ ] Descriptive `<title>` tag
- [ ] Exactly ONE `<h1>` tag
- [ ] At least 3 `<h2>` tags
- [ ] At least 2 `<h3>` tags properly nested under an h2
- [ ] NO skipped heading levels (not h1 → h3)
- [ ] At least 8 `<p>` paragraphs
- [ ] `<strong>` used at least 3 times
- [ ] `<em>` used at least 3 times
- [ ] At least 1 `<hr>` divider
- [ ] `<br>` used appropriately
- [ ] At least 3 additional formatting tags
- [ ] Clear, organized content
- [ ] Professional appearance

---

## 🌟 Bonus Challenges

Take your blog to the next level:

1. **Add Metadata:**
   ```html
   <p><em>By: Your Name | Date: December 22, 2025 | Reading Time: 5 minutes</em></p>
   ```

2. **Create a Fake Table of Contents:**
   ```html
   <h2>In This Post:</h2>
   <p>
       1. Introduction<br>
       2. Main Points<br>
       3. Examples<br>
       4. Conclusion
   </p>
   ```

3. **Add an Author Bio:**
   ```html
   <hr>
   <h2>About the Author</h2>
   <p><small>Your Name is a [age]-year-old aspiring web developer...</small></p>
   ```

4. **Include Pull Quotes:**
   ```html
   <p><strong><mark>"This is the most important point in the entire post!"</mark></strong></p>
   ```

5. **Show Edits:**
   ```html
   <p>This recipe takes <del>30</del> only 20 minutes!</p>
   ```

6. **Add Multiple Subsections:**
   Use h3 tags under different h2 sections for really detailed organization

7. **Make It Long:**
   Write at least 15 paragraphs for an in-depth post

8. **Add a "Last Updated" Section:**
   ```html
   <p><small>Last updated: December 22, 2025</small></p>
   ```

---

## 💭 Think About It

As you create your blog post:
1. Can someone understand your topic just by reading the headings?
2. Is your information organized logically?
3. Does your formatting guide the reader to important points?
4. Would this be enjoyable to read?

---

## 🆘 Troubleshooting

**Problem:** My heading hierarchy doesn't make sense  
**Solution:** List out your headings on paper first. Make sure you go h1 → h2 → h3, and only use h3 when it's truly a subsection of an h2.

**Problem:** I have too many or too few paragraphs  
**Solution:** Each main idea should be its own paragraph. If a paragraph is super long, break it into two!

**Problem:** My formatting looks random  
**Solution:** Use formatting purposefully! `<strong>` for important points, `<em>` for titles/emphasis, `<mark>` for highlights.

**Problem:** I don't know what to write about  
**Solution:** Check the blog post ideas below, or write about your favorite hobby!

---

## ✍️ Blog Post Ideas

### Reviews
- Your favorite book and why you loved it
- A video game review
- Movie review
- Toy or gadget review
- Restaurant or food review

### How-To Guides
- How to get better at [skill]
- How to make friends
- How to take care of a pet
- How to organize your room
- How to beat a level in a game

### Opinion Pieces
- Why [topic] is awesome/overrated
- The best [sport/hobby/activity] for kids
- Should schools [do something]?
- Technology: good or bad?
- The importance of [value you care about]

### Personal Stories
- My greatest adventure
- The time I learned [something important]
- My most embarrassing moment
- When I overcame a challenge
- A day I'll never forget

### Comparison Posts
- Cats vs Dogs
- Summer vs Winter
- Books vs Movies
- Morning Person vs Night Owl
- Indoor vs Outdoor Activities

### List Posts
- Top 5 Reasons to Learn Coding
- 10 Best Books I've Ever Read
- My 7 Favorite Hobbies
- 5 Things I'm Grateful For
- Top 3 Life Lessons

---

## 📝 Example Blog Structure

Here's a sample structure for a "Top 5" blog post:

```html
<h1>Top 5 Reasons Why Learning HTML is Awesome</h1>

<p><em>By: Piper | Date: December 22, 2025</em></p>

<h2>Introduction</h2>
<p>Learning HTML has been an amazing journey...</p>
<p>In this post, I'll share my top 5 reasons...</p>

<hr>

<h2>The Top 5 Reasons</h2>

<h3>Reason #1: You Can Build Real Websites</h3>
<p>The <strong>coolest thing</strong> about HTML is...</p>
<p>I built my first website in just <mark>one day</mark>!</p>

<h3>Reason #2: It's Easier Than You Think</h3>
<p>Before I started, I thought coding was <em>super hard</em>...</p>

<h3>Reason #3: Creativity and Logic Combined</h3>
<p>HTML lets you be creative <strong>and</strong> logical...</p>

<h3>Reason #4: Career Opportunities</h3>
<p>Did you know that web developers are in high demand?</p>

<h3>Reason #5: It's Fun!</h3>
<p>Most importantly, coding is actually <strong>fun</strong>...</p>

<hr>

<h2>Conclusion</h2>
<p>So there you have it - my top 5 reasons...</p>
<p>What are you waiting for? <mark>Start learning HTML today!</mark></p>

<hr>

<h2>About the Author</h2>
<p><small>Piper is a 10-year-old web developer in training...</small></p>
```

---

## 🎉 Completion

When you finish:
1. Save your blog-post.html file
2. Open it in your browser
3. Read it as if you're a visitor - is it engaging?
4. Check all headings - do they flow logically?
5. Verify the success criteria
6. Check for typos and formatting errors
7. Be proud - you created a professional blog post!

**Fantastic work!** You've mastered headings, paragraphs, and text formatting. Your blog post shows real web development skills! 🌟📝
