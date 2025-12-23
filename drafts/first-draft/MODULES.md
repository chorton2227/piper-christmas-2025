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

## 🎮 Module 4: Building a Poker Game

### Lesson 4.1: Understanding Poker
- **Concept**: Learn poker basics before building
- **Topics**:
  - Basic poker rules (Texas Hold'em simplified)
  - Card deck structure (52 cards, 4 suits, 13 ranks)
  - Hand rankings (high card to royal flush)
  - Game flow (deal, player turn, dealer turn, winner)
  - Poker terminology (deal, hit, stand, bust, etc.)
- **Activity**: Play a hand of simplified poker on paper
- **Practice**: Memorize hand rankings

### Lesson 4.2: Planning the Poker Game
- **Concept**: Design before coding
- **Topics**:
  - Simplified poker rules for our game (player vs computer dealer)
  - Required features (deck, dealing, scoring, betting)
  - Game screens (start, playing, result)
  - UI elements needed (cards, buttons, chip count, messages)
  - Win/lose conditions
- **Activity**: Complete poker game design document
- **Practice**: Draw wireframes for game screens

### Lesson 4.3: HTML Structure for Poker
- **Concept**: Building the game foundation
- **Topics**:
  - Game container layout
  - Card display areas (player hand, dealer hand, community cards)
  - Button controls (deal, hit, stand, fold, bet)
  - Info displays (chip count, pot, messages)
  - Start and end screens
- **Activity**: Build complete HTML structure
- **Practice**: Add all game elements with semantic IDs/classes

### Lesson 4.4: CSS Styling for Poker
- **Concept**: Making poker table look professional
- **Topics**:
  - Creating card visuals with CSS
  - Poker table green felt design
  - Card flip animations
  - Button styling (poker chip style)
  - Layout with Flexbox for card arrangement
  - Responsive design for different screens
- **Activity**: Style poker table and cards
- **Practice**: Create card back and face designs

### Lesson 4.5: Card Deck System
- **Concept**: Creating and managing the deck
- **Topics**:
  - Representing cards as objects (suit, rank, value)
  - Creating full 52-card deck array
  - Shuffle algorithm (Fisher-Yates)
  - Dealing cards (removing from deck)
  - Resetting deck for new game
- **Activity**: Build deck creation and shuffle functions
- **Practice**: Test deck functionality in console

### Lesson 4.6: Displaying Cards
- **Concept**: Showing cards on screen
- **Topics**:
  - Creating card HTML elements dynamically
  - Card images vs CSS-only cards
  - Face-up vs face-down cards
  - Adding cards to player/dealer hands
  - Card animations (dealing, flipping)
- **Activity**: Create card display functions
- **Practice**: Deal test hands visually

### Lesson 4.7: Hand Evaluation Logic
- **Concept**: Determining hand strength
- **Topics**:
  - Identifying pairs, three of a kind, etc.
  - Straight detection
  - Flush detection
  - Full house and other combinations
  - Comparing two hands to find winner
  - Breaking ties
- **Activity**: Build hand evaluation functions
- **Practice**: Test with different hand combinations

### Lesson 4.8: Game Flow and Logic
- **Concept**: The main game mechanics
- **Topics**:
  - Starting a new hand (shuffle, deal, reset bets)
  - Player turn logic (hit, stand, fold)
  - Dealer turn logic (computer AI)
  - Determining winner
  - Updating chip counts
  - Round results
- **Activity**: Build game loop and turn functions
- **Practice**: Play through complete hand

### Lesson 4.9: Betting System
- **Concept**: Adding poker betting mechanics
- **Topics**:
  - Starting chip count
  - Ante/blind bets
  - Raising and calling
  - Pot management
  - All-in logic
  - Preventing invalid bets
- **Activity**: Implement betting controls
- **Practice**: Test betting scenarios

### Lesson 4.10: Computer Dealer AI
- **Concept**: Making the dealer play smartly
- **Topics**:
  - Basic dealer strategy
  - When dealer should hit or stand
  - Bluffing probability (optional)
  - Random decision-making
  - Making AI feel natural
- **Activity**: Build dealer decision function
- **Practice**: Test AI against different scenarios

### Lesson 4.11: Win/Lose Conditions
- **Concept**: Ending hands and game
- **Topics**:
  - Determining hand winner
  - Displaying results clearly
  - Awarding chips to winner
  - Game over when out of chips
  - Victory when reaching chip goal
  - Play again functionality
- **Activity**: Implement end-of-hand logic
- **Practice**: Test all win/lose scenarios

### Lesson 4.12: Sound and Animation Polish
- **Concept**: Making poker feel real
- **Topics**:
  - Card dealing sounds
  - Chip sounds for betting
  - Win/lose sound effects
  - Card flip animations
  - Smooth transitions
  - Victory celebrations
- **Activity**: Add sounds and animations
- **Practice**: Polish all interactions

### Lesson 4.13: Instructions and Rules Screen
- **Concept**: Teaching players how to play
- **Topics**:
  - Creating help/rules overlay
  - Explaining hand rankings with examples
  - Button function descriptions
  - Poker terminology glossary
  - Tips for beginners
- **Activity**: Build instructions screen
- **Practice**: Get feedback on clarity

### Lesson 4.14: Testing and Bug Fixes
- **Concept**: Making sure poker game works perfectly
- **Topics**:
  - Testing all betting scenarios
  - Testing hand evaluation edge cases
  - Checking chip count math
  - Testing game flow from start to end
  - Finding and fixing bugs
  - Getting playtest feedback
- **Activity**: Complete testing checklist
- **Practice**: Fix all found issues

### Lesson 4.15: Poker Game Complete!
- **Concept**: Final playable poker game
- **Deliverable**: Completed poker game with:
  - Full 52-card deck system
  - Card dealing and display
  - Hand evaluation (all poker hands)
  - Betting system with chips
  - Computer dealer AI
  - Win/lose conditions
  - Sound effects and animations
  - Instructions and rules
  - Polished UI
- **Showcase**: Play poker with family and friends!

---

## 🚀 Module 5: Deploying Your Poker Game

### Lesson 5.1: What is Web Hosting?
- **Concept**: Understanding how websites go online
- **Topics**:
  - What web hosting means
  - Domain names vs hosting
  - Different hosting options
  - Why GitHub Pages is great for learning
  - How people access your poker game
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

### Lesson 5.3: Preparing Poker Game for Deployment
- **Concept**: Getting code ready to publish
- **Topics**:
  - File organization (HTML, CSS, JS, images, sounds)
  - Checking file names (no spaces)
  - Testing poker game locally first
  - Making sure all paths are correct
  - index.html as homepage
  - Testing all game features work
- **Activity**: Organize poker game files
- **Practice**: Test everything works locally

### Lesson 5.4: Uploading Poker Game to GitHub
- **Concept**: Getting files online
- **Topics**:
  - Creating a new repository (e.g., "poker-game")
  - Uploading files via web interface
  - Adding a README with game description
  - Repository settings
  - Public repo so anyone can play
- **Activity**: Upload poker game to repository
- **Practice**: Verify all files uploaded correctly

### Lesson 5.5: Enabling GitHub Pages
- **Concept**: Turning repository into playable website
- **Topics**:
  - Accessing GitHub Pages settings
  - Selecting source branch
  - Waiting for deployment
  - Finding your poker game URL
  - Testing live game
- **Activity**: Enable GitHub Pages
- **Practice**: Play poker game online!

### Lesson 5.6: Testing and Troubleshooting
- **Concept**: Making sure poker game works online
- **Topics**:
  - Testing on different devices
  - Checking all buttons work
  - Fixing broken images/sounds/paths
  - Browser compatibility
  - Mobile testing (playing poker on phone)
  - Performance optimization
- **Activity**: Complete testing checklist
- **Practice**: Fix any issues found

### Lesson 5.7: Sharing Your Poker Game
- **Concept**: Showing your work to the world
- **Topics**:
  - Copying the game URL
  - Creating QR codes for easy access
  - Sharing on social media
  - Sending to friends/family to play
  - Getting feedback from players
  - Collecting testimonials
- **Activity**: Create sharing materials
- **Practice**: Have 5 people play your game!

### Lesson 5.8: Updating Your Poker Game
- **Concept**: Making improvements after deployment
- **Topics**:
  - Uploading bug fixes
  - Adding new features (sound effects, animations)
  - Replacing old files
  - GitHub Pages auto-updates
  - Testing changes
  - Version control benefits
- **Activity**: Make an improvement to live game
- **Practice**: Add new feature and redeploy

### Lesson 5.9: Creating a Portfolio Page
- **Concept**: Showcasing your poker game
- **Topics**:
  - Building a portfolio landing page
  - Screenshots of poker game
  - Project description
  - Technologies used
  - Link to play the game
  - What you learned
- **Activity**: Create portfolio page
- **Practice**: Link poker game from portfolio

### Lesson 5.10: Final Celebration!
- **Concept**: You're a game developer!
- **Activity**: 
  - Poker tournament with family/friends using your game
  - Demo presentation showing how you built it
  - Collect feedback and compliments
  - Receive completion certificate
  - Discuss favorite parts of the journey
  - Plan next project ideas
- **Reflection**: What was challenging? What was fun? What's next?

---

## 📚 Module Summary

**Total Lessons**: ~55 lessons across 5 modules
**Estimated Time**: 6-9 weeks (flexible pace)
**Skills Gained**: 
- HTML structure and semantics
- CSS styling and layout
- JavaScript programming fundamentals
- Advanced game logic (card games, AI)
- Poker game development
- Web deployment

**Final Deliverable**: 
- Complete, fully functional poker game
- Live website with interactive gameplay
- Shareable URL
- Portfolio-worthy project
- Foundation for future web development

---

**Notes**: 
- Each lesson should be 20-30 minutes
- Include breaks and fun activities
- Encourage experimentation
- Celebrate progress frequently
- Adjust pace based on Piper's engagement
