// 📝 Simple Task Management App with Comments for Beginners

// 🗂️ List to hold all task objects
let tasks = [];

// 📌 Current filter for viewing tasks (e.g., all, completed, pending)
let currentFilter = 'all';

// ✏️ ID of task currently being edited (if any)
let editingTaskId = null;

// 🟢 When the page loads, do some initial setup
// Load tasks from memory, theme, update stats, render task list
// Also, set up event listeners (like pressing Enter to add task)
document.addEventListener('DOMContentLoaded', function() {
    loadTasksFromMemory();
    loadTheme();
    updateStats();
    renderTasks();

    // If user presses 'Enter' key inside the input box, call addTask()
    document.getElementById('task-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});

// 🧱 Task object template
class Task {
    constructor(text, priority = 'low') {
        this.id = Date.now() + Math.random(); // unique id
        this.text = text.trim();              // task description
        this.priority = priority;             // priority: low, medium, high
        this.completed = false;               // by default task is not completed
        this.createdAt = new Date();          // time of creation
    }
}

// ➕ Add a new task or update an existing one
function addTask() {
    const input = document.getElementById('task-input');
    const priority = document.getElementById('priority-select').value;
    const text = input.value.trim();

    // 🚨 If input is empty, show red border and return
    if (!text) {
        input.focus();
        input.style.borderColor = 'var(--danger-color)';
        setTimeout(() => {
            input.style.borderColor = 'var(--border-color)';
        }, 2000);
        // return;

    }

    if (editingTaskId) {
        // ✏️ If editing, update the existing task
        const task = tasks.find(t => t.id === editingTaskId);
        if (task) {
            task.text = text;
            task.priority = priority;
        }
        editingTaskId = null;
        document.getElementById('add-btn-text').textContent = 'Add Task';
    } else {
        // 🆕 Otherwise, create a new task and add to the beginning
        const newTask = new Task(text, priority);
        tasks.unshift(newTask);

        // 🔄 Animate add button briefly
        const addBtn = document.getElementById('add-btn');
        addBtn.classList.add('bounce');
        setTimeout(() => addBtn.classList.remove('bounce'), 1000);
    }

    // 🔄 Clear input box, save, update, render
    input.value = '';
    saveTasksToMemory();
    updateStats();
    renderTasks();
}

// ✅ Toggle task completion on/off
function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        saveTasksToMemory();
        updateStats();
        renderTasks();
    }
}

// ❌ Delete a task with animation
function deleteTask(id) {
    const taskElement = document.querySelector(`[data-task-id="${id}"]`);
    if (taskElement) {
        taskElement.style.transform = 'translateX(-100%)';
        taskElement.style.opacity = '0';
        setTimeout(() => {
            tasks = tasks.filter(t => t.id !== id);
            saveTasksToMemory();
            updateStats();
            renderTasks();
        }, 300);
    }
}

// ✏️ Start editing a task
function editTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        document.getElementById('task-input').value = task.text;
        document.getElementById('priority-select').value = task.priority;
        editingTaskId = id;
        document.getElementById('add-btn-text').textContent = 'Update Task';
        document.getElementById('task-input').focus();
    }
}

// 🗑️ Clear all tasks after confirmation
function clearAllTasks() {
    if (tasks.length === 0) return;
    if (confirm('Are you sure you want to clear all tasks?')) {
        const taskList = document.getElementById('task-list');
        taskList.style.opacity = '0';
        setTimeout(() => {
            tasks = [];
            saveTasksToMemory();
            updateStats();
            renderTasks();
            taskList.style.opacity = '1';
        }, 300);
    }
}

// 🔍 Filter tasks by status or priority
function filterTasks(filter) {
    currentFilter = filter;

    // Highlight the active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    renderTasks();
}

// 🧹 Return task list based on current filter
function getFilteredTasks() {
    switch (currentFilter) {
        case 'pending': return tasks.filter(t => !t.completed);
        case 'completed': return tasks.filter(t => t.completed);
        case 'high': return tasks.filter(t => t.priority === 'high');
        case 'medium': return tasks.filter(t => t.priority === 'medium');
        case 'low': return tasks.filter(t => t.priority === 'low');
        default: return tasks;
    }
}

// 🖼️ Render tasks on the screen
function renderTasks() {
    const taskList = document.getElementById('task-list');
    const filteredTasks = getFilteredTasks();

    if (filteredTasks.length === 0) {
        taskList.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">📝</div>
                <div class="empty-text">${currentFilter === 'all' ? 'No tasks yet' : `No ${currentFilter} tasks`}</div>
                <div class="empty-subtext">${currentFilter === 'all' ? 'Add a task above to get started!' : 'Try a different filter or add new tasks'}</div>
            </div>
        `;
        return;
    }

    taskList.innerHTML = filteredTasks.map(task => `
        <div class="task-item ${task.completed ? 'completed' : ''} ${task.priority}-priority" data-task-id="${task.id}">
            <div class="task-content">
                <div class="task-checkbox ${task.completed ? 'checked' : ''}" onclick="toggleTask(${task.id})"></div>
                <span class="task-text ${task.completed ? 'completed' : ''}">${task.text}</span>
                <span class="task-priority priority-${task.priority}">${task.priority}</span>
            </div>
            <div class="task-actions">
                <button class="task-btn edit-btn" onclick="editTask(${task.id})" ${task.completed ? 'disabled' : ''}>Edit</button>
                <button class="task-btn delete-btn" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        </div>
    `).join('');
}

// 📊 Show task counts: total, completed, pending
function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const pending = total - completed;

    document.getElementById('total-tasks').textContent = `${total} Task${total !== 1 ? 's' : ''}`;
    document.getElementById('completed-tasks').textContent = `${completed} Completed`;
    document.getElementById('pending-tasks').textContent = `${pending} Pending`;
}

// 🌗 Toggle between light and dark theme
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text');

    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeIcon.textContent = '🌙';
        themeText.textContent = 'Dark Mode';
        storeInMemory('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Light Mode';
        storeInMemory('theme', 'dark');
    }
}

// 📥 Load saved theme (if any) when app loads
function loadTheme() {
    const savedTheme = getFromMemory('theme');
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        document.getElementById('theme-icon').textContent = '☀️';
        document.getElementById('theme-text').textContent = 'Light Mode';
    }
}

// 💾 Local memory simulation using in-memory object instead of localStorage
let memoryStorage = {};

function storeInMemory(key, value) {
    memoryStorage[key] = JSON.stringify(value);
}

function getFromMemory(key) {
    const value = memoryStorage[key];
    return value ? JSON.parse(value) : null;
}

// 💽 Save current tasks list to memory
function saveTasksToMemory() {
    storeInMemory('tasks', tasks);
}

// 📤 Load tasks list from memory on app load
function loadTasksFromMemory() {
    const savedTasks = getFromMemory('tasks');
    console.log(savedTasks)
    if (savedTasks && Array.isArray(savedTasks)) {
        tasks = savedTasks;
    }
}

// 🧪 Add example tasks when app starts (optional)
function addSampleTasks() {
    if (tasks.length === 0) {
        tasks = [
            new Task("Review portfolio projects", "high"),
            new Task("Update LinkedIn profile", "medium"),
            new Task("Practice coding interview questions", "high"),
            new Task("Read industry news", "low")
        ];
        saveTasksToMemory();
        updateStats();
        renderTasks();
    }
}

// ⬇️ Uncomment to auto-add sample tasks after 1 sec
// setTimeout(addSampleTasks, 1000);