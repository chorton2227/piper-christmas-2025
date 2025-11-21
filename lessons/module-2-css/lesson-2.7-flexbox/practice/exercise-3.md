# Exercise 3: Complete Page Layout

## 🎯 Goal
Build a complete webpage layout with a header, sidebar, main content area, and footer using Flexbox - the classic "Holy Grail" layout!

## 📋 Instructions

1. Create a new file called `page-layout.html` in your student workspace
2. Create a new file called `page-layout.css` in your student workspace
3. Follow the requirements below

## Requirements

### HTML Structure
Create a complete page layout:

```html
<div class="page-wrapper">
    <header class="header">
        <!-- Logo and navigation -->
    </header>
    
    <div class="content-wrapper">
        <aside class="sidebar">
            <!-- Sidebar menu -->
        </aside>
        
        <main class="main-content">
            <!-- Your main content -->
        </main>
    </div>
    
    <footer class="footer">
        <!-- Footer content -->
    </footer>
</div>
```

**Header Content:**
- Logo (text or emoji)
- Navigation menu with 4-5 links

**Sidebar Content:**
- Menu with 5-6 links
- Each link in its own styled box

**Main Content:**
- Page title
- At least 3 paragraphs of content
- A grid of 3 "stat cards" showing statistics

**Footer:**
- Copyright text
- Social media links (use emojis: 📘 💬 📸 🐦)

## CSS Requirements

### Overall Structure
```css
.page-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;  /* Full viewport height */
}
```

### Header (`.header`)
- Use Flexbox for horizontal layout
- Put logo on left, navigation on right
- Add padding and background color
- Use `justify-content: space-between`
- Use `align-items: center`

### Content Wrapper (`.content-wrapper`)
- Use `display: flex` (horizontal layout)
- This holds sidebar and main content side by side
- Use `flex: 1` to make it take remaining space

### Sidebar (`.sidebar`)
- Use `flex: none` so it doesn't grow
- Set a fixed width (like 200px or 250px)
- Add background color
- Make menu links vertical using Flexbox

### Main Content (`.main-content`)
- Use `flex: 1` to take remaining space
- Add padding for content
- Create stat cards using Flexbox

### Footer (`.footer`)
- Stays at bottom
- Centered content
- Background color

## 💡 Hints

```css
/* Full height layout */
.page-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

/* Content area takes remaining space */
.content-wrapper {
    display: flex;
    flex: 1;  /* Grows to fill space between header and footer */
}

/* Fixed sidebar */
.sidebar {
    flex: none;  /* Don't grow or shrink */
    width: 250px;
}

/* Flexible main area */
.main-content {
    flex: 1;  /* Takes all remaining space */
}
```

## 🎨 Bonus Challenges

1. Make it **responsive**:
   - On mobile, stack sidebar below main content
   - Make header navigation stack vertically
   
2. Add a **"back to top" button** in the footer

3. Make the sidebar **scrollable** if content is long

4. Add **smooth scrolling** behavior

5. Create a **grid of images** in the main content area

6. Make the header **sticky** so it stays at top when scrolling

## ✅ Success Criteria

Your page layout should:
- [ ] Have all four sections: header, sidebar, main, footer
- [ ] Sidebar has fixed width, main content is flexible
- [ ] Footer stays at the bottom of the page
- [ ] Layout fills the entire viewport height
- [ ] Header has logo and navigation properly aligned
- [ ] Sidebar menu is styled with Flexbox
- [ ] Main content has a stat card grid using Flexbox
- [ ] Works well on different screen sizes

## 📸 What It Should Look Like

```
┌─────────────────────────────────────────────┐
│  [Logo]                    [Nav Links]      │ ← Header
├────────────┬────────────────────────────────┤
│            │                                │
│  Sidebar   │     Main Content Area          │
│  Menu      │                                │
│   Link 1   │  Title                         │ ← Content
│   Link 2   │  Paragraphs...                 │   Wrapper
│   Link 3   │  [Stat] [Stat] [Stat]          │
│   Link 4   │                                │
│            │                                │
├────────────┴────────────────────────────────┤
│         © 2025 - Social Links               │ ← Footer
└─────────────────────────────────────────────┘
```

## 🔍 Testing Your Layout

1. Does the sidebar stay at a fixed width?
2. Does the main content expand to fill space?
3. Does the footer stay at the bottom even with little content?
4. Does everything work when you resize the browser?

Good luck building your first complete layout! 🏗️✨
