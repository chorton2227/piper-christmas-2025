# Teaching Modules Breakdown

## 🎯 Module 1: HTML Fundamentals

### Lesson 1.1: What is HTML?
- **Concept**: Understanding what HTML is and how browsers work
- **Topics**:
  - HTML stands for HyperText Markup Language
  - HTML is the skeleton/structure of web pages
  - Browsers read HTML and display it
  - Tags and elements concept
- **Activity**: View source code of a favorite website
- **Practice**: Write first `<h1>Hello World!</h1>` in browser

### Lesson 1.2: Headings and Paragraphs
- **Concept**: Organizing text content
- **Topics**:
  - `<h1>` through `<h6>` - heading hierarchy
  - `<p>` - paragraphs
  - `<br>` - line breaks
  - `<hr>` - horizontal rule
  - Text formatting basics (`<strong>`, `<em>`)
- **Activity**: Create a story with proper heading structure
- **Practice**: "About Me" page with headings and paragraphs

### Lesson 1.3: Lists
- **Concept**: Organizing items in lists
- **Topics**:
  - `<ul>` - unordered list (bullets)
  - `<ol>` - ordered list (numbers)
  - `<li>` - list items
  - Nested lists
- **Activity**: Create a shopping list and to-do list
- **Practice**: "My Favorites" page (movies, foods, games)

### Lesson 1.4: Links
- **Concept**: Connecting pages together
- **Topics**:
  - `<a>` tag with `href` attribute
  - Absolute URLs (full web addresses)
  - Relative URLs (links within your site)
  - `target="_blank"` for new tabs
  - Email links with `mailto:`
  - Anchor links within page
- **Activity**: Create a page with links to favorite websites
- **Practice**: Build a multi-page site with navigation

### Lesson 1.5: Images
- **Concept**: Adding pictures to web pages
- **Topics**:
  - `<img>` tag with `src` attribute
  - `alt` text for accessibility
  - `width` and `height` attributes
  - Image file formats (jpg, png, gif)
  - `<figure>` and `<figcaption>` for captions
- **Activity**: Add images to previous pages
- **Practice**: Photo gallery page

### Lesson 1.6: Tables
- **Concept**: Organizing data in rows and columns
- **Topics**:
  - `<table>` - table container
  - `<tr>` - table row
  - `<th>` - table header cell
  - `<td>` - table data cell
  - `<thead>`, `<tbody>`, `<tfoot>` - table sections
  - Table borders and styling basics
- **Activity**: Create a class schedule or game stats table
- **Practice**: Build a comparison table or scoreboard

### Lesson 1.7: Divisions and Spans
- **Concept**: Grouping and organizing content
- **Topics**:
  - `<div>` - block-level container
  - `<span>` - inline container
  - Why we need containers
  - Setting up structure for styling later
- **Activity**: Organize "About Me" page with divs
- **Practice**: Create sections for different content types

### Lesson 1.8: Forms and Inputs
- **Concept**: Getting information from users
- **Topics**:
  - `<form>` element
  - `<input>` types (text, number, checkbox, radio, button)
  - `<button>` element
  - `<label>` for accessibility
  - Basic form structure
- **Activity**: Build a simple contact form
- **Practice**: Create game control buttons

### Lesson 1.9: Semantic HTML
- **Concept**: Using meaningful HTML tags
- **Topics**:
  - `<header>`, `<nav>`, `<main>`, `<footer>`
  - `<article>`, `<section>`, `<aside>`
  - Why semantic HTML matters
  - Accessibility benefits
  - Better page structure
- **Activity**: Convert div-based layout to semantic HTML
- **Practice**: Structure a blog post with semantic tags

### Lesson 1.10: HTML Mini-Project
- **Concept**: Put it all together
- **Activity**: Build a complete multi-page website about a favorite topic
- **Requirements**:
  - At least 3 linked pages
  - Headings, paragraphs, lists
  - Images with alt text
  - Navigation links
  - Form with inputs
- **Challenge**: Add extra creative elements

---

## 🎨 Module 2: CSS Styling

### Lesson 2.1: What is CSS?
- **Concept**: Understanding CSS and how it works with HTML
- **Topics**:
  - CSS stands for Cascading Style Sheets
  - CSS controls the appearance/style
  - Three ways to add CSS (inline, internal, external)
  - Why external CSS is best
- **Activity**: Add inline styles to see immediate changes
- **Practice**: Create and link an external stylesheet

### Lesson 2.2: CSS Selectors
- **Concept**: Targeting elements to style
- **Topics**:
  - Element selector (`p`, `h1`, etc.)
  - Class selector (`.classname`)
  - ID selector (`#idname`)
  - When to use each type
  - Multiple selectors
- **Activity**: Style different elements with different selectors
- **Practice**: Add classes to HTML and style them

### Lesson 2.3: Colors
- **Concept**: Adding color to web pages
- **Topics**:
  - `color` - text color
  - `background-color` - background color
  - Color names (`red`, `blue`, etc.)
  - Hex codes (`#FF0000`)
  - RGB values (`rgb(255, 0, 0)`)
  - Color picker tools
- **Activity**: Create a rainbow page with different colors
- **Practice**: Design a color scheme for personal website

### Lesson 2.4: Fonts and Text
- **Concept**: Making text look good
- **Topics**:
  - `font-family` - choosing fonts
  - `font-size` - text size (px, em, rem)
  - `font-weight` - boldness
  - `text-align` - alignment (left, center, right)
  - `line-height` - spacing between lines
  - `text-decoration` - underlines, etc.
  - Google Fonts integration
- **Activity**: Experiment with different font combinations
- **Practice**: Style a blog post with beautiful typography

### Lesson 2.5: The Box Model
- **Concept**: Understanding how elements take up space
- **Topics**:
  - Content, padding, border, margin
  - `padding` - space inside element
  - `margin` - space outside element
  - `border` - outline around element
  - Box model diagram
  - Browser dev tools to visualize
- **Activity**: Create boxes with different padding/margin
- **Practice**: Build a card layout with proper spacing

### Lesson 2.6: Borders and Backgrounds
- **Concept**: Decorating elements
- **Topics**:
  - `border` properties (width, style, color)
  - `border-radius` - rounded corners
  - `background-color` - solid backgrounds
  - `background-image` - image backgrounds
  - `background-size` and `background-position`
- **Activity**: Create decorative cards and boxes
- **Practice**: Design button styles with borders

### Lesson 2.7: Layout with Flexbox
- **Concept**: Arranging elements on the page
- **Topics**:
  - `display: flex` - enabling flexbox
  - `flex-direction` - row or column
  - `justify-content` - horizontal alignment
  - `align-items` - vertical alignment
  - `gap` - spacing between flex items
  - Flex containers and flex items
- **Activity**: Create a navigation bar
- **Practice**: Build a card grid layout

### Lesson 2.8: Positioning
- **Concept**: Controlling where elements appear
- **Topics**:
  - `position: static` (default)
  - `position: relative` - move from normal position
  - `position: absolute` - position anywhere
  - `position: fixed` - stays on screen when scrolling
  - `top`, `right`, `bottom`, `left` properties
  - `z-index` - stacking order
- **Activity**: Create a fixed navigation header
- **Practice**: Position game elements

### Lesson 2.9: Hover Effects and Transitions
- **Concept**: Making things interactive with CSS
- **Topics**:
  - `:hover` pseudo-class
  - `:active` and `:focus` states
  - `transition` property
  - Animating changes smoothly
  - `cursor` property
- **Activity**: Create buttons that change on hover
- **Practice**: Add hover effects to navigation and images

### Lesson 2.10: Responsive Design Basics
- **Concept**: Making pages work on all screen sizes
- **Topics**:
  - `max-width` and `min-width`
  - Percentage vs fixed units
  - `@media` queries introduction
  - Mobile-first thinking
  - Testing on different screen sizes
- **Activity**: Make a page responsive
- **Practice**: Adjust game layout for mobile

### Lesson 2.11: CSS Mini-Project
- **Concept**: Style a complete website
- **Activity**: Take HTML mini-project and fully style it
- **Requirements**:
  - External stylesheet
  - Custom color scheme
  - Nice typography
  - Hover effects
  - Flexbox layout
  - Responsive design
- **Challenge**: Add CSS animations

---

## ⚡ Module 3: JavaScript Interactivity

### Lesson 3.1: What is JavaScript?
- **Concept**: Understanding JavaScript and programming
- **Topics**:
  - JavaScript makes pages interactive
  - Programming vs markup languages
  - How JS works with HTML and CSS
  - `<script>` tag and external .js files
  - Browser console for testing
- **Activity**: Open console and write first JS code
- **Practice**: Link a JavaScript file to HTML

### Lesson 3.2: Variables and Data Types
- **Concept**: Storing information in code
- **Topics**:
  - `let` and `const` for variables
  - Numbers, strings, booleans
  - Variable naming rules
  - `console.log()` to see values
  - Basic math operations (+, -, *, /)
- **Activity**: Create variables for game data (score, name, level)
- **Practice**: Build a simple calculator with console

### Lesson 3.3: Functions
- **Concept**: Reusable blocks of code
- **Topics**:
  - What functions are and why we use them
  - Declaring functions
  - Parameters and arguments
  - Return values
  - Calling functions
- **Activity**: Create functions for common tasks
- **Practice**: Build helper functions (greet user, calculate score)

### Lesson 3.4: Getting HTML Elements
- **Concept**: Connecting JavaScript to HTML
- **Topics**:
  - `document.getElementById()`
  - `document.querySelector()`
  - `document.querySelectorAll()`
  - Storing elements in variables
  - The DOM (Document Object Model)
- **Activity**: Get elements and log them to console
- **Practice**: Select game elements to manipulate

### Lesson 3.5: Changing HTML and CSS
- **Concept**: Modifying the page with JavaScript
- **Topics**:
  - `textContent` and `innerHTML`
  - Changing element content
  - `style` property to change CSS
  - `classList` to add/remove classes
  - Creating dynamic content
- **Activity**: Change text and colors on button click
- **Practice**: Update score display in game

### Lesson 3.6: Events and Event Listeners
- **Concept**: Responding to user actions
- **Topics**:
  - What events are (click, keypress, etc.)
  - `addEventListener()` method
  - Event types (click, mouseover, keydown)
  - Event handler functions
  - `event` object
- **Activity**: Create buttons that respond to clicks
- **Practice**: Add keyboard controls to game

### Lesson 3.7: Conditionals (If/Else)
- **Concept**: Making decisions in code
- **Topics**:
  - `if` statements
  - `else` and `else if`
  - Comparison operators (==, ===, >, <, etc.)
  - Logical operators (&&, ||, !)
  - Boolean logic
- **Activity**: Create a guessing game
- **Practice**: Add game win/lose conditions

### Lesson 3.8: Arrays and Loops
- **Concept**: Working with lists of data
- **Topics**:
  - Arrays - lists of values
  - Array indexes (0-based)
  - `push()`, `pop()`, `length`
  - `for` loops to repeat code
  - Looping through arrays
  - `forEach()` method
- **Activity**: Create and loop through lists
- **Practice**: Generate game elements from array

### Lesson 3.9: Timers and Intervals
- **Concept**: Code that runs over time
- **Topics**:
  - `setTimeout()` - run once after delay
  - `setInterval()` - run repeatedly
  - `clearTimeout()` and `clearInterval()`
  - Creating countdowns
  - Animation with intervals
- **Activity**: Build a countdown timer
- **Practice**: Add game timer or animation loop

### Lesson 3.10: Random Numbers and Math
- **Concept**: Using math in games
- **Topics**:
  - `Math.random()` for random values
  - `Math.floor()` and `Math.ceil()`
  - Generating random integers
  - Other useful Math methods
  - Using randomness in games
- **Activity**: Create dice roller
- **Practice**: Randomize game elements

### Lesson 3.11: Working with Objects
- **Concept**: Organizing related data
- **Topics**:
  - Objects store key-value pairs
  - Creating objects
  - Accessing properties (dot notation)
  - Updating properties
  - Objects for game state
- **Activity**: Create player and game objects
- **Practice**: Use objects to organize game data

### Lesson 3.12: Debugging
- **Concept**: Finding and fixing errors
- **Topics**:
  - Reading error messages
  - Using `console.log()` strategically
  - Browser dev tools debugger
  - Common mistakes and how to fix them
  - Testing code step by step
- **Activity**: Debug broken code examples
- **Practice**: Fix bugs in game code

### Lesson 3.13: JavaScript Mini-Project
- **Concept**: Build an interactive app
- **Activity**: Create a complete interactive project
- **Requirements**:
  - User input and events
  - Variables to track state
  - Functions for logic
  - Conditionals for decisions
  - DOM manipulation
  - Visual feedback
- **Examples**: Quiz, calculator, to-do list, simple clicker game
- **Challenge**: Add local storage to save data

---

## 🎮 Module 4: Game Building

### Lesson 4.1: Planning Your Game
- **Concept**: Design before coding
- **Topics**:
  - Choosing a game type
  - Writing game rules
  - Sketching the layout
  - Listing features (must-have vs nice-to-have)
  - Planning game states (start, playing, game over)
- **Activity**: Complete game design document
- **Practice**: Draw wireframes on paper

### Lesson 4.2: HTML Game Structure
- **Concept**: Building the game foundation
- **Topics**:
  - Creating game container
  - Setting up game elements
  - Start screen, game screen, end screen
  - Score display and UI elements
  - Buttons and controls
- **Activity**: Build complete HTML structure
- **Practice**: Add all game elements with IDs/classes

### Lesson 4.3: CSS Game Styling
- **Concept**: Making the game look good
- **Topics**:
  - Styling game container
  - Positioning game elements
  - Creating game sprites/graphics
  - Animations with CSS
  - Responsive game layout
  - Visual feedback (colors, shadows)
- **Activity**: Style all game elements
- **Practice**: Create cohesive visual theme

### Lesson 4.4: Game Variables and State
- **Concept**: Tracking game data
- **Topics**:
  - Score tracking
  - Player lives/health
  - Level/difficulty
  - Game status (playing, paused, over)
  - Timer/countdown
  - High score
- **Activity**: Set up all game variables
- **Practice**: Create game state object

### Lesson 4.5: Game Initialization
- **Concept**: Starting the game properly
- **Topics**:
  - Start button functionality
  - Resetting variables
  - Setting up initial game state
  - Hiding/showing screens
  - Getting elements needed
- **Activity**: Write start game function
- **Practice**: Test game initialization

### Lesson 4.6: Core Game Logic
- **Concept**: The main game mechanics
- **Topics**:
  - Game loop (if needed)
  - Player actions and responses
  - Checking game conditions
  - Updating score
  - Generating game elements
- **Activity**: Build main game functions
- **Practice**: Test core gameplay

### Lesson 4.7: Win and Lose Conditions
- **Concept**: Ending the game properly
- **Topics**:
  - Checking for win condition
  - Checking for lose condition
  - Displaying game over screen
  - Showing final score
  - Play again functionality
- **Activity**: Implement end game logic
- **Practice**: Test all ending scenarios

### Lesson 4.8: Sound and Polish
- **Concept**: Adding juice to the game
- **Topics**:
  - Adding sound effects (HTML5 audio)
  - Visual feedback (animations, particles)
  - Smooth transitions
  - Instructions screen
  - Pause functionality
- **Activity**: Add sound and polish
- **Practice**: Playtest and refine

### Lesson 4.9: Testing and Debugging
- **Concept**: Making sure the game works
- **Topics**:
  - Testing all features
  - Finding edge cases
  - Fixing bugs
  - Getting feedback from others
  - Improving based on testing
- **Activity**: Complete testing checklist
- **Practice**: Fix all found issues

### Lesson 4.10: Game Mini-Project Complete
- **Concept**: Final playable game
- **Deliverable**: Completed game with:
  - Full HTML structure
  - Styled with CSS
  - Interactive with JavaScript
  - Clear rules and instructions
  - Win/lose conditions
  - Score tracking
  - Polish and feedback
- **Showcase**: Play and share with others!

---

## 🚀 Module 5: Deployment

### Lesson 5.1: What is Web Hosting?
- **Concept**: Understanding how websites go online
- **Topics**:
  - What web hosting means
  - Domain names vs hosting
  - Different hosting options
  - Why GitHub Pages is great for learning
  - How people access your site
- **Activity**: Visit and explore GitHub
- **Practice**: Create GitHub account

### Lesson 5.2: Introduction to Git and GitHub
- **Concept**: Version control basics
- **Topics**:
  - What Git is (saving versions of code)
  - What GitHub is (storing code online)
  - Repositories
  - Commits (saving changes)
  - Basic Git concepts simplified
- **Activity**: Create first repository
- **Practice**: Explore GitHub interface

### Lesson 5.3: Preparing Files for Deployment
- **Concept**: Getting code ready to publish
- **Topics**:
  - File organization
  - Checking file names (no spaces)
  - Testing locally first
  - Making sure paths are correct
  - index.html as homepage
- **Activity**: Organize project files
- **Practice**: Test everything works locally

### Lesson 5.4: Uploading to GitHub
- **Concept**: Getting files online
- **Topics**:
  - Creating a new repository
  - Uploading files via web interface
  - Adding a README
  - Repository settings
  - Public vs private repos
- **Activity**: Upload game to repository
- **Practice**: Verify all files uploaded correctly

### Lesson 5.5: Enabling GitHub Pages
- **Concept**: Turning repository into website
- **Topics**:
  - Accessing GitHub Pages settings
  - Selecting source branch
  - Waiting for deployment
  - Finding your site URL
  - Testing live site
- **Activity**: Enable GitHub Pages
- **Practice**: Visit live website!

### Lesson 5.6: Testing and Troubleshooting
- **Concept**: Making sure everything works online
- **Topics**:
  - Testing on different devices
  - Checking all links work
  - Fixing broken images/paths
  - Browser compatibility
  - Mobile testing
- **Activity**: Complete testing checklist
- **Practice**: Fix any issues found

### Lesson 5.7: Sharing Your Website
- **Concept**: Showing your work to the world
- **Topics**:
  - Copying the URL
  - Creating QR codes
  - Sharing on social media
  - Sending to friends/family
  - Getting feedback
- **Activity**: Create sharing materials
- **Practice**: Share with 5 people!

### Lesson 5.8: Updating Your Site
- **Concept**: Making changes after deployment
- **Topics**:
  - Uploading new files
  - Replacing old files
  - GitHub Pages auto-updates
  - Testing changes
  - Version control benefits
- **Activity**: Make an update to live site
- **Practice**: Add new feature and redeploy

### Lesson 5.9: Next Steps (Optional)
- **Concept**: Continuing web development journey
- **Topics**:
  - Custom domain names
  - Other hosting options
  - Building more projects
  - Learning resources
  - Web development career paths
- **Activity**: Explore additional resources
- **Practice**: Plan next project

### Lesson 5.10: Final Celebration!
- **Concept**: You're a web developer!
- **Activity**: 
  - Showcase presentation
  - Demo site to family/friends
  - Collect feedback and compliments
  - Receive completion certificate
  - Discuss what was learned
- **Reflection**: Favorite parts and future projects

---

## 📚 Module Summary

**Total Lessons**: ~50 lessons across 5 modules
**Estimated Time**: 5-8 weeks (flexible pace)
**Skills Gained**: 
- HTML structure and semantics
- CSS styling and layout
- JavaScript programming fundamentals
- Game development
- Web deployment

**Final Deliverable**: 
- Complete, live website with interactive game
- Shareable URL
- Portfolio piece
- Foundation for future web development

---

**Notes**: 
- Each lesson should be 20-30 minutes
- Include breaks and fun activities
- Encourage experimentation
- Celebrate progress frequently
- Adjust pace based on Piper's engagement
