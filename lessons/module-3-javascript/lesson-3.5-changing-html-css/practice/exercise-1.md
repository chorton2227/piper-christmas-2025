# Exercise 1: Dynamic To-Do List

## 🎯 Objective
Create an interactive to-do list where you can:
- Add new tasks
- Mark tasks as complete
- Delete tasks
- Change task styling

This exercise practices:
- Using `textContent` to update text
- Using `classList` to add/remove classes
- Using `style` to change colors

---

## 📋 Requirements

### Part 1: HTML Structure (Already provided in starter code)
Your HTML should have:
- An input field for new tasks
- An "Add Task" button
- A container for the task list
- Individual task items with:
  - Task text
  - "Complete" button
  - "Delete" button

### Part 2: JavaScript Tasks

#### Task 1: Add New Tasks
Create a function `addTask()` that:
1. Gets the value from the input field
2. Creates a new task element
3. Sets the text content to the input value
4. Adds the task to the list
5. Clears the input field

**What you'll practice:**
- `textContent` to set task text
- `value` property to get/clear input

#### Task 2: Mark Tasks as Complete
Create a function `completeTask(task)` that:
1. Adds a 'completed' class to the task
2. Changes the text color to gray using `style.color`
3. Adds strikethrough using `style.textDecoration`

**What you'll practice:**
- `classList.add()` to add a class
- `style` property for text decoration

#### Task 3: Delete Tasks
Create a function `deleteTask(task)` that:
1. Removes the task from the DOM
2. (Bonus: Add a fade-out animation first)

**What you'll practice:**
- Removing elements
- Optional: CSS transitions

#### Task 4: Task Counter
Create a function that updates a counter showing:
- Total tasks
- Completed tasks
- Remaining tasks

**What you'll practice:**
- `querySelectorAll()` to count elements
- `textContent` to update counter display

---

## 🎨 Styling Requirements

Create CSS classes for:

```css
.task {
    /* Base task styling */
    padding: 15px;
    margin: 10px 0;
    background: white;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.task.completed {
    /* Completed task styling */
    background: #f0f0f0;
    opacity: 0.6;
}

.task button {
    /* Button styling */
}
```

---

## 💡 Hints

### Adding a Task:
```javascript
function addTask() {
    // 1. Get input element
    let input = document.getElementById('taskInput');
    
    // 2. Get input value
    let taskText = input.value;
    
    // 3. Check if not empty
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    
    // 4. Create new task element
    // YOUR CODE HERE
    
    // 5. Set textContent
    // YOUR CODE HERE
    
    // 6. Add to list
    // YOUR CODE HERE
    
    // 7. Clear input
    input.value = '';
}
```

### Marking Complete:
```javascript
function completeTask(button) {
    // Get the task element (parent of button)
    let task = button.parentElement;
    
    // Add 'completed' class
    task.classList.add('completed');
    
    // Change styles
    task.style.textDecoration = 'line-through';
    task.style.color = '#999';
}
```

### Deleting a Task:
```javascript
function deleteTask(button) {
    let task = button.parentElement;
    task.remove();  // Simple version
    
    // Or with animation:
    task.style.opacity = '0';
    setTimeout(function() {
        task.remove();
    }, 300);
}
```

---

## 🏆 Bonus Challenges

1. **Priority Levels**: Add ability to set task priority (high, medium, low) with different colors
2. **Edit Tasks**: Allow clicking a task to edit its text
3. **Filter Tasks**: Add buttons to show all/active/completed tasks
4. **Save Tasks**: Store tasks in localStorage so they persist on page reload
5. **Due Dates**: Add due dates to tasks and highlight overdue ones

---

## ✅ Testing Checklist

- [ ] Can add new tasks
- [ ] Tasks appear in the list
- [ ] Can mark tasks as complete (visual change)
- [ ] Can delete tasks
- [ ] Counter updates correctly
- [ ] Input clears after adding task
- [ ] Cannot add empty tasks
- [ ] Styling looks good

---

## 📝 Expected Output

When complete, your to-do list should:
1. Let users type in the input and click "Add" to create tasks
2. Show each task with "Complete" and "Delete" buttons
3. Gray out and strikethrough completed tasks
4. Remove tasks when deleted
5. Show accurate counts of total/completed/remaining tasks

---

## 🎯 Key Learning Points

This exercise teaches you:
- ✅ How to use `textContent` safely with user input
- ✅ How to manipulate elements with `classList`
- ✅ How to use the `style` property for dynamic styling
- ✅ How to create interactive, user-friendly interfaces
- ✅ How DOM manipulation makes apps dynamic

Good luck! 🚀
