# Exercise 3: Theme Switcher & Dashboard

## 🎯 Objective
Create a complete dashboard with multiple theme options:
- Light theme
- Dark theme
- High contrast theme
- Custom color themes
- Font size controls
- Layout toggles

This exercise practices:
- Using `classList` to manage complex themes
- Using `style` for dynamic customization
- Creating a complete, professional interface

---

## 📋 Requirements

### Part 1: HTML Structure
Create a dashboard with:
- Header with navigation
- Sidebar with menu items
- Main content area with:
  - Statistics cards
  - Charts/graphs (can be simple colored boxes)
  - Data table
- Settings panel with:
  - Theme selector
  - Font size slider
  - Layout options
  - Color customization

### Part 2: JavaScript Tasks

#### Task 1: Theme Switching
Create a function to switch between predefined themes:

```javascript
function switchTheme(themeName) {
    let body = document.body;
    
    // Remove all theme classes
    body.classList.remove('light-theme', 'dark-theme', 'high-contrast', 'ocean-theme', 'forest-theme');
    
    // Add selected theme
    body.classList.add(themeName);
    
    // Save preference (bonus)
    localStorage.setItem('preferred-theme', themeName);
    
    console.log('Theme changed to:', themeName);
}
```

**What you'll practice:**
- `classList.remove()` with multiple classes
- `classList.add()` for theme application
- `localStorage` for persistence (bonus)

#### Task 2: Custom Color Selection
Create a function for custom colors:

```javascript
function setCustomColors(primaryColor, secondaryColor, backgroundColor) {
    let root = document.documentElement;
    
    // Set CSS custom properties (variables)
    root.style.setProperty('--primary-color', primaryColor);
    root.style.setProperty('--secondary-color', secondaryColor);
    root.style.setProperty('--background-color', backgroundColor);
    
    console.log('Custom colors applied:', {primaryColor, secondaryColor, backgroundColor});
}
```

**What you'll practice:**
- CSS custom properties
- `style.setProperty()` method
- Color coordination

#### Task 3: Font Size Control
Create a function to adjust font size:

```javascript
function changeFontSize(size) {
    let body = document.body;
    
    // Remove all font size classes
    body.classList.remove('font-small', 'font-medium', 'font-large', 'font-xlarge');
    
    // Add new font size
    body.classList.add('font-' + size);
    
    // Also update with style for immediate effect
    if (size === 'small') {
        body.style.fontSize = '14px';
    } else if (size === 'medium') {
        body.style.fontSize = '16px';
    } else if (size === 'large') {
        body.style.fontSize = '18px';
    } else if (size === 'xlarge') {
        body.style.fontSize = '20px';
    }
    
    console.log('Font size changed to:', size);
}
```

**What you'll practice:**
- Combining `classList` and `style`
- Conditional styling
- Accessibility considerations

#### Task 4: Layout Toggles
Create functions to toggle different layout options:

```javascript
function toggleSidebar() {
    let sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
    
    // Update icon
    let icon = document.getElementById('sidebarIcon');
    if (sidebar.classList.contains('collapsed')) {
        icon.textContent = '→';
    } else {
        icon.textContent = '←';
    }
}

function toggleCompactMode() {
    let dashboard = document.getElementById('dashboard');
    dashboard.classList.toggle('compact-mode');
    
    // Update all cards
    let cards = document.querySelectorAll('.stat-card');
    cards.forEach(function(card) {
        if (dashboard.classList.contains('compact-mode')) {
            card.style.padding = '10px';
        } else {
            card.style.padding = '20px';
        }
    });
}

function changeLayoutColumns(columns) {
    let grid = document.getElementById('statsGrid');
    grid.style.gridTemplateColumns = 'repeat(' + columns + ', 1fr)';
    console.log('Layout changed to', columns, 'columns');
}
```

**What you'll practice:**
- `classList.toggle()` for UI states
- Dynamic grid layouts
- Updating multiple elements

#### Task 5: Live Preview
Create a function that shows a live preview of theme changes:

```javascript
function previewTheme(themeName) {
    // Temporarily apply theme
    switchTheme(themeName);
    
    // Show "Apply" or "Cancel" buttons
    let previewPanel = document.getElementById('previewPanel');
    previewPanel.style.display = 'block';
    
    // Store original theme for cancel
    window.originalTheme = document.body.className;
}

function applyPreview() {
    // Keep current theme
    let previewPanel = document.getElementById('previewPanel');
    previewPanel.style.display = 'none';
    console.log('Theme applied!');
}

function cancelPreview() {
    // Restore original theme
    document.body.className = window.originalTheme;
    let previewPanel = document.getElementById('previewPanel');
    previewPanel.style.display = 'none';
    console.log('Theme cancelled!');
}
```

**What you'll practice:**
- Temporary state management
- User confirmation flows
- Reverting changes

---

## 🎨 CSS Requirements

### Theme Classes:
```css
/* Light Theme (default) */
body {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --background-color: #ecf0f1;
    --text-color: #2c3e50;
    --card-background: white;
    background: var(--background-color);
    color: var(--text-color);
}

/* Dark Theme */
body.dark-theme {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --background-color: #2c3e50;
    --text-color: #ecf0f1;
    --card-background: #34495e;
}

/* High Contrast Theme */
body.high-contrast {
    --primary-color: #ffff00;
    --secondary-color: #00ff00;
    --background-color: #000000;
    --text-color: #ffffff;
    --card-background: #1a1a1a;
}

/* Ocean Theme */
body.ocean-theme {
    --primary-color: #006994;
    --secondary-color: #00d4ff;
    --background-color: #e6f7ff;
    --text-color: #003d5c;
    --card-background: #cceeff;
}

/* Forest Theme */
body.forest-theme {
    --primary-color: #2d5016;
    --secondary-color: #76b947;
    --background-color: #f0f4ed;
    --text-color: #1a3008;
    --card-background: #e8f0e0;
}
```

### Font Size Classes:
```css
body.font-small { font-size: 14px; }
body.font-medium { font-size: 16px; }
body.font-large { font-size: 18px; }
body.font-xlarge { font-size: 20px; }
```

### Layout Classes:
```css
.sidebar {
    width: 250px;
    transition: width 0.3s;
}

.sidebar.collapsed {
    width: 60px;
}

.dashboard.compact-mode .stat-card {
    padding: 10px;
    font-size: 0.9em;
}
```

---

## 💡 Hints

### Theme Selector UI:
```html
<div class="theme-selector">
    <button onclick="switchTheme('light-theme')" class="theme-btn light">
        ☀️ Light
    </button>
    <button onclick="switchTheme('dark-theme')" class="theme-btn dark">
        🌙 Dark
    </button>
    <button onclick="switchTheme('high-contrast')" class="theme-btn contrast">
        ⚡ High Contrast
    </button>
    <button onclick="switchTheme('ocean-theme')" class="theme-btn ocean">
        🌊 Ocean
    </button>
    <button onclick="switchTheme('forest-theme')" class="theme-btn forest">
        🌲 Forest
    </button>
</div>
```

### Custom Color Picker:
```html
<div class="custom-colors">
    <label>Primary Color:</label>
    <input type="color" id="primaryColor" value="#3498db">
    
    <label>Secondary Color:</label>
    <input type="color" id="secondaryColor" value="#2ecc71">
    
    <label>Background Color:</label>
    <input type="color" id="bgColor" value="#ecf0f1">
    
    <button onclick="applyCustomColors()">Apply Colors</button>
</div>

<script>
function applyCustomColors() {
    let primary = document.getElementById('primaryColor').value;
    let secondary = document.getElementById('secondaryColor').value;
    let bg = document.getElementById('bgColor').value;
    
    setCustomColors(primary, secondary, bg);
}
</script>
```

### Saving Preferences:
```javascript
function saveSettings() {
    let settings = {
        theme: getCurrentTheme(),
        fontSize: getCurrentFontSize(),
        sidebarCollapsed: isSidebarCollapsed(),
        compactMode: isCompactMode()
    };
    
    localStorage.setItem('dashboard-settings', JSON.stringify(settings));
    console.log('Settings saved!');
}

function loadSettings() {
    let saved = localStorage.getItem('dashboard-settings');
    if (saved) {
        let settings = JSON.parse(saved);
        switchTheme(settings.theme);
        changeFontSize(settings.fontSize);
        // Apply other settings...
    }
}

// Load on page load
window.addEventListener('load', loadSettings);
```

---

## 🏆 Bonus Challenges

1. **Smooth Transitions**: Add smooth animations between theme switches
2. **Theme Creator**: Let users create and name custom themes
3. **Export/Import**: Allow exporting and sharing theme configurations
4. **Color Blindness Modes**: Add colorblind-friendly themes
5. **Time-Based Themes**: Auto-switch between light/dark based on time
6. **Theme Gallery**: Show thumbnails of all themes
7. **Keyboard Shortcuts**: Add hotkeys for quick theme switching
8. **Accessibility Score**: Show accessibility rating for custom themes

---

## ✅ Testing Checklist

- [ ] All predefined themes work correctly
- [ ] Custom colors can be set and applied
- [ ] Font size controls work smoothly
- [ ] Sidebar can collapse/expand
- [ ] Compact mode toggles correctly
- [ ] Layout columns can be changed
- [ ] All changes are visible and smooth
- [ ] Settings persist on page reload
- [ ] No visual glitches during transitions
- [ ] All themes are readable and accessible

---

## 📝 Expected Output

Your theme switcher dashboard should:
1. Start with a default theme
2. Allow instant theme switching with buttons
3. Support custom color selection
4. Adjust font sizes smoothly
5. Toggle sidebar and compact layouts
6. Save preferences and reload them
7. Look professional and polished
8. Work smoothly without flicker or lag

---

## 🎯 Key Learning Points

This exercise teaches you:
- ✅ How to manage complex UI states with `classList`
- ✅ How to use CSS custom properties with JavaScript
- ✅ How to create professional theme systems
- ✅ How to persist user preferences
- ✅ How to build complete, production-ready interfaces
- ✅ How different DOM manipulation techniques work together

Create an amazing dashboard! 🎨✨
