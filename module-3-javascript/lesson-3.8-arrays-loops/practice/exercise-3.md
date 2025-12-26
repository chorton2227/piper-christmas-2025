
## Objective
Build a full-featured todo list application with filtering, completion tracking, and priority levels. This is a comprehensive exercise combining everything you've learned about arrays, loops, and array methods.

## What You'll Build
A todo list manager that:
- Adds tasks with priority levels
- Marks tasks as complete/incomplete
- Filters tasks (all, active, completed)
- Edits existing tasks
- Deletes individual tasks
- Shows progress statistics
- Saves to local storage (bonus)

## Requirements

### 1. HTML Structure
Create an interface with:
- Input field for new task
- Priority selector (Low, Medium, High)
- "Add Task" button
- Filter buttons (All / Active / Completed)
- Task list display area
- Progress bar showing completion percentage
- Statistics panel
- "Clear Completed" button

### 2. Data Structure
Use an array of task objects:
```javascript
let todos = [
    {
        id: 1,
        text: 'Learn JavaScript',
        completed: false,
        priority: 'high',
        createdAt: '2024-01-15'
    }
];
```

### 3. Core Functions

#### addTodo(text, priority)
- Validate task text is not empty
- Create unique ID (use Date.now() or counter)
- Create task object with:
  - id
  - text
  - completed: false
  - priority
  - createdAt: current date
- Push to todos array
- Update display
- Clear input field

#### toggleComplete(id)
- Find todo by ID
- Toggle completed property (true ↔ false)
- Update display
- Recalculate statistics

#### deleteTodo(id)
- Find index of todo with matching ID
- Use `splice()` to remove
- Update display
- Update statistics

#### editTodo(id, newText)
- Find todo by ID
- Update text property
- Update display

#### filterTodos(filter)
- Loop through todos array
- Show/hide based on filter:
  - 'all': Show all tasks
  - 'active': Show where completed === false
  - 'completed': Show where completed === true
- Use conditionals in loop to decide what to display

#### calculateProgress()
- Count total tasks
- Count completed tasks
- Calculate percentage: (completed / total) × 100
- Update progress bar width

#### clearCompleted()
- Filter todos array to keep only incomplete ones
- todos = todos.filter(todo => !todo.completed);
- Update display

### 4. Display Features

#### Each Task Shows:
- Checkbox (checked if completed)
- Task text (strikethrough if completed)
- Priority badge (color-coded)
- Edit button (pencil icon)
- Delete button (trash icon)
- Created date

#### Priority Colors:
- **High:** Red (#f44336)
- **Medium:** Orange (#ff9800)
- **Low:** Green (#4caf50)

#### Statistics Panel:
- Total tasks
- Active (incomplete) tasks
- Completed tasks
- Completion percentage
- Tasks by priority count

#### Progress Bar:
- Visual bar showing completion percentage
- Different colors based on progress:
  - 0-33%: Red
  - 34-66%: Orange
  - 67-100%: Green

### 5. Input Validation
Check for:
- Empty task → "Please enter a task"
- Task too short (< 3 chars) → "Task must be at least 3 characters"
- Duplicate task → "This task already exists"

## Bonus Challenges

### Challenge 1: Local Storage
- Save todos array to localStorage on every change
- Load todos from localStorage when page loads
- Use JSON.stringify() and JSON.parse()
```javascript
localStorage.setItem('todos', JSON.stringify(todos));
let saved = JSON.parse(localStorage.getItem('todos'));
```

### Challenge 2: Due Dates
- Add date input for each task
- Store dueDate with each todo
- Mark overdue tasks in red
- Sort by due date

### Challenge 3: Subtasks
- Add ability to create subtasks
- Store as array within todo
- Show progress for parent task based on subtasks
- Indent subtasks in display

### Challenge 4: Search/Filter
- Add search box
- Filter displayed tasks as user types
- Search through task text
- Highlight matching text

### Challenge 5: Drag and Drop Reordering
- Allow dragging tasks to reorder
- Update array order on drop
- Save new order

### Challenge 6: Task Categories
- Add category field (Work, Personal, Shopping, etc.)
- Filter by category
- Show category count
- Color-code by category

## Example Output
```
━━━━━━ TODO LIST ━━━━━━

[+] Add new task...  [High ▼] [Add]

[All] [Active] [Completed]

Progress: ████████░░ 80%

☑ Buy groceries           [HIGH]  [Edit] [×]
☐ Learn JavaScript        [MED]   [Edit] [×]
☑ Call dentist           [LOW]   [Edit] [×]
☐ Finish project         [HIGH]  [Edit] [×]
☑ Read book              [LOW]   [Edit] [×]

━━━━━━ STATISTICS ━━━━━━
Total: 5 tasks
Active: 2 tasks
Completed: 3 tasks
Completion: 60%

High Priority: 2
Medium Priority: 1
Low Priority: 2

[Clear Completed]
```

## Tips

### Generating Unique IDs
```javascript
let id = Date.now();  // Milliseconds since 1970
// Or use counter
let nextId = 1;
let id = nextId++;
```

### Finding Todo by ID
```javascript
let todo = todos.find(t => t.id === id);

// Or with loop
for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
        let todo = todos[i];
        break;
    }
}
```

### Filtering Array
```javascript
// Get only incomplete todos
let active = todos.filter(todo => !todo.completed);

// Get only completed todos
let completed = todos.filter(todo => todo.completed);
```

### Counting by Priority
```javascript
let highCount = 0;
for (let i = 0; i < todos.length; i++) {
    if (todos[i].priority === 'high') {
        highCount++;
    }
}
```

### Creating Checkbox
```javascript
<input type="checkbox" 
       ${todo.completed ? 'checked' : ''} 
       onchange="toggleComplete(${todo.id})">
```

### Strikethrough Completed
```css
.completed {
    text-decoration: line-through;
    opacity: 0.6;
}
```

## Testing Checklist
- [ ] Can add new todos
- [ ] Can mark todos as complete
- [ ] Can unmark completed todos
- [ ] Can delete individual todos
- [ ] Can filter by all/active/completed
- [ ] Progress bar updates correctly
- [ ] Statistics calculate accurately
- [ ] Can clear all completed at once
- [ ] Priority badges show correct colors
- [ ] Cannot add empty todos
- [ ] IDs are unique

## Common Mistakes to Avoid
1. **Not using unique IDs** → Array index changes when items are removed!
2. **Forgetting to update all displays** after changes
3. **Not filtering correctly** → Check completed property carefully
4. **Off-by-one errors** in loops
5. **Not handling empty list** → Show "No tasks yet!" message
6. **Hardcoding array length** instead of using `.length` property

## Estimated Time
1-2 hours for basic version
+30-45 minutes for each bonus challenge

This is a substantial project! Consider working on it over multiple sessions.

## What You'll Learn
- Complete CRUD operations (Create, Read, Update, Delete)
- Working with complex objects in arrays
- Finding and modifying specific array items
- Filtering arrays based on properties
- Calculating statistics from array data
- Building a real-world application
- State management in JavaScript

## Code Organization Tips
Consider breaking your code into sections:
1. Data (todos array and global variables)
2. Add/Remove functions
3. Update/Edit functions
4. Display functions
5. Filter functions
6. Statistics functions
7. Event listeners

Ready for the challenge? This is your biggest project yet! 📝✨