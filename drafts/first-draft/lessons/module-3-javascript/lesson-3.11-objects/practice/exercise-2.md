# Exercise 2: Task Manager with Categories

Build a task management system using arrays of objects!

## Your Task

Create a file called `task-manager.html` that manages tasks organized by categories.

### Part 1: Task Object Structure
Each task should be an object with:
- `id` - Unique identifier
- `title` - Task description
- `category` - Work, Personal, School, etc.
- `priority` - Low, Medium, High
- `dueDate` - When it's due
- `completed` - Boolean status
- `createdAt` - When task was created

### Part 2: Task Manager Object
Create a main manager object with:
- `tasks` - Array of all task objects
- `categories` - Array of category names
- `nextId` - Counter for generating IDs

Add these methods:
- `addTask(title, category, priority, dueDate)` - Create new task
- `deleteTask(id)` - Remove a task
- `toggleComplete(id)` - Mark task as done/undone
- `getTasksByCategory(category)` - Filter tasks
- `getTasksByPriority(priority)` - Filter by priority
- `getCompletedTasks()` - Get all completed
- `getPendingTasks()` - Get all incomplete
- `sortByDueDate()` - Sort tasks by due date

### Part 3: Display Features
- Show all tasks in a list
- Color-code by priority (red=high, yellow=medium, green=low)
- Show completed tasks with strikethrough
- Display category tags
- Show task count for each category

### Part 4: Filtering and Sorting
- Buttons to filter by category
- Buttons to filter by priority
- Button to show only completed tasks
- Button to show only pending tasks
- Sort by due date or priority

### Bonus Challenges
- Add search functionality (search task titles)
- Edit existing tasks
- Add subtasks (nested tasks within tasks)
- Show overdue tasks in red
- Add task notes/description
- Calculate completion percentage
- Show statistics (total tasks, completion rate, etc.)
- Add tags to tasks (array of strings)

## What You'll Practice
- Arrays of objects
- Object methods
- Array methods (filter, sort, map)
- Finding objects in arrays
- Modifying array objects
- Complex data structures

## Hints
- Use `Date` object for due dates
- Use array `filter()` to get tasks by criteria
- Use array `find()` to locate specific tasks
- Update display after every change
- Consider using factory function to create tasks

## Example Task Structure
```javascript
let taskManager = {
    tasks: [],
    categories: ["Work", "Personal", "School", "Shopping"],
    nextId: 1,
    
    addTask: function(title, category, priority, dueDate) {
        let task = {
            id: this.nextId++,
            title: title,
            category: category,
            priority: priority,
            dueDate: dueDate,
            completed: false,
            createdAt: new Date()
        };
        this.tasks.push(task);
        return task;
    },
    
    getTasksByCategory: function(category) {
        return this.tasks.filter(task => task.category === category);
    }
};
```

## Example Display
```
📋 Task Manager

Categories: [All] [Work] [Personal] [School]
Priority: [All] [High] [Medium] [Low]
Status: [All] [Pending] [Completed]

Tasks (8 total, 3 completed):

🔴 HIGH - Buy groceries [Shopping]
   Due: Nov 25, 2025
   [✓ Complete] [Delete]

🟡 MEDIUM - ✓ Finish homework [School]
   Due: Nov 26, 2025
   Completed ✓
   [Delete]

🟢 LOW - Call dentist [Personal]
   Due: Nov 30, 2025
   [✓ Complete] [Delete]

Statistics:
- Total Tasks: 8
- Completed: 3 (37.5%)
- Pending: 5 (62.5%)
- High Priority: 2
```

Good luck! 📝
