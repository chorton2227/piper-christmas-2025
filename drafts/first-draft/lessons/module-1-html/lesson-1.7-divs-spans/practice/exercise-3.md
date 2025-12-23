# Exercise 3: Blog Post Page

## 📝 Instructions

Create an HTML page called `blog-post.html` with a complete blog post structure using nested divs and spans.

## Requirements

Create a blog post page with these sections:

### 1. Page Header (div class="page-header")
- Blog title
- Navigation links to: Home | About | Archive | Contact

### 2. Blog Post Container (div class="blog-post")

Inside the post container, include:

#### Post Header (div class="post-header")
- Post title (h2)
- Post metadata div with:
  - Author name (in span)
  - Date (in span)
  - Category (in span)
  - Reading time estimate (in span)

#### Post Content (div class="post-content")
- At least 3 paragraphs about any topic you choose
- Use spans to highlight important words or terms
- Include a quote box (div class="quote-box") with a favorite quote
- Add a list of key points or tips

#### Post Footer (div class="post-footer")
- Tags (multiple spans inside a div)
- Share/Like/Comment action links

### 3. Sidebar (div class="sidebar")
- "About the Author" section
- "Related Posts" section with 3 post titles
- "Popular Tags" section

### 4. Page Footer (div class="page-footer")
- Copyright information
- Social media links

## Example Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Blog Post</title>
</head>
<body>
    <div class="page-header">
        <h1>My Awesome Blog</h1>
        <div class="navigation">
            <!-- Nav links -->
        </div>
    </div>
    
    <div class="blog-post">
        <div class="post-header">
            <h2>Post Title</h2>
            <div class="post-meta">
                <span class="author">By: Name</span> |
                <span class="date">Date</span> |
                <span class="category">Category</span>
            </div>
        </div>
        
        <div class="post-content">
            <p>First paragraph with <span class="highlight">important</span> words...</p>
            
            <div class="quote-box">
                <p>"Quote here"</p>
            </div>
            
            <p>More content...</p>
        </div>
        
        <div class="post-footer">
            <div class="tags">
                <span class="tag">Tag1</span>
                <span class="tag">Tag2</span>
            </div>
        </div>
    </div>
    
    <div class="sidebar">
        <!-- Sidebar content -->
    </div>
    
    <div class="page-footer">
        <!-- Footer content -->
    </div>
</body>
</html>
```

## Blog Post Topic Ideas

Choose any topic you're interested in:
- "Learning to Code: My First Week"
- "Top 5 Games I Played This Year"
- "How to Build in Minecraft: Beginner's Guide"
- "My Gaming Setup Tour"
- "Why I Love [Favorite Game]"
- "Tips for New Players of [Game]"

## 🎯 Challenge

- Add a "Comments Section" div with 2-3 sample comments
- Include a "Share This Post" section with multiple social platforms
- Add an image or two (from previous lesson)
- Create a "Table of Contents" div that lists the sections

## 💡 Tips

- This is a complex structure - work section by section
- Test frequently by opening in browser
- Make sure all divs are properly closed
- Use indentation to keep nested divs organized
- Write actual content - make it fun!

## ✅ When You're Done

Verify that:
- [ ] Page header with navigation is complete
- [ ] Blog post has all required sections
- [ ] Post metadata uses spans appropriately
- [ ] Quote box is included
- [ ] Post footer has tags
- [ ] Sidebar has all sections
- [ ] Page footer is present
- [ ] All divs are properly nested and closed
- [ ] Content is complete and interesting
- [ ] Spans highlight important terms
