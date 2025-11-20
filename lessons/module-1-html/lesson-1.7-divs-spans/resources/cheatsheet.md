# HTML Divs and Spans Cheatsheet

## Basic Tags

| Tag | Display Type | Purpose | Example |
|-----|--------------|---------|---------|
| `<div>` | Block | Group sections | `<div>Content</div>` |
| `<span>` | Inline | Target words | `<span>word</span>` |

## Key Differences

### `<div>` - Block Container
- Starts on new line
- Takes full width available
- Used for major sections
- Can contain any elements

```html
<div>
  <h2>Section Title</h2>
  <p>Section content</p>
</div>
```

### `<span>` - Inline Container
- Stays on same line
- Only takes needed width
- Used for small parts
- Usually contains text

```html
<p>I love <span>this word</span> specifically.</p>
```

## Common Attributes

### class Attribute
Used for styling groups of elements:
```html
<div class="game-card">...</div>
<div class="game-card">...</div>
<span class="highlight">text</span>
```

### id Attribute
Used for unique elements (only one per page):
```html
<div id="header">...</div>
<div id="main-content">...</div>
<span id="user-score">1500</span>
```

## Common Patterns

### Page Sections
```html
<div id="header">
  <h1>Title</h1>
</div>

<div id="main-content">
  <p>Content here</p>
</div>

<div id="footer">
  <p>Footer info</p>
</div>
```

### Card Layout
```html
<div class="card">
  <div class="card-header">
    <h3>Title</h3>
  </div>
  
  <div class="card-body">
    <p>Content</p>
  </div>
  
  <div class="card-footer">
    <p>Footer</p>
  </div>
</div>
```

### Highlighting Text
```html
<p>
  Score: <span class="score">9850</span> points
  Status: <span class="online">Online</span>
</p>
```

### Lists with Labels
```html
<ul>
  <li><span class="label">Name:</span> <span class="value">Player</span></li>
  <li><span class="label">Level:</span> <span class="value">42</span></li>
</ul>
```

## Nesting Containers

Containers can be nested (put inside each other):

```html
<div class="outer">
  <div class="inner">
    <p>Content with <span>highlighted</span> word</p>
  </div>
</div>
```

## Best Practices

### ✅ DO:
- Use divs to group related content
- Use spans for specific words/values
- Give meaningful class/id names
- Keep structure organized
- Use indentation for readability

### ❌ DON'T:
- Don't overuse divs (divitis!)
- Don't use divs for single elements
- Don't nest too deeply without reason
- Don't use generic names like "div1", "div2"
- Don't forget closing tags

## Quick Examples

### Good Structure
```html
<div class="user-profile">
  <h2>User Name</h2>
  <p>Member since: <span class="date">2024</span></p>
  <p>Status: <span class="status">Active</span></p>
</div>
```

### Bad Structure (Too Many Divs)
```html
<div>
  <div>
    <div>
      <p>Just one paragraph</p>
    </div>
  </div>
</div>
```

## Template Structure

### Basic Page Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Page Title</title>
</head>
<body>
    <div id="header">
        <h1>Site Title</h1>
    </div>
    
    <div id="navigation">
        <!-- Nav links -->
    </div>
    
    <div id="main-content">
        <div class="section">
            <h2>Section Title</h2>
            <p>Content here</p>
        </div>
    </div>
    
    <div id="footer">
        <p>Footer info</p>
    </div>
</body>
</html>
```

### Card Template
```html
<div class="card">
    <div class="card-header">
        <h3>Card Title</h3>
        <span class="badge">New</span>
    </div>
    
    <div class="card-body">
        <p>Card content goes here</p>
        <p><span class="label">Detail:</span> <span class="value">Info</span></p>
    </div>
    
    <div class="card-footer">
        <span class="action">Read More</span>
    </div>
</div>
```

## Why Use Divs and Spans?

1. **Organization** - Group related content
2. **Styling** - Target specific elements with CSS
3. **Structure** - Create clear page layouts
4. **Maintenance** - Easier to update and manage
5. **Consistency** - Repeatable patterns

## Looking Ahead

Right now divs and spans seem invisible, but they're essential for:
- **CSS Styling** (Module 2) - Colors, layouts, spacing
- **JavaScript** (Module 3) - Targeting elements to manipulate
- **Responsive Design** - Different layouts for mobile/desktop

## Quick Reference

```html
<!-- Div: Block container -->
<div class="section">Content</div>

<!-- Span: Inline container -->
<p>Text with <span class="highlight">span</span></p>

<!-- With ID (unique) -->
<div id="header">Header</div>

<!-- With Class (reusable) -->
<div class="card">Card 1</div>
<div class="card">Card 2</div>

<!-- Nested -->
<div class="outer">
  <div class="inner">
    <span>Text</span>
  </div>
</div>
```

## Remember!

- Divs = big boxes for sections
- Spans = small labels for words
- Classes = reusable styling
- IDs = unique elements
- Structure now, style later with CSS!
