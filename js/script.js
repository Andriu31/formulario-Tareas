document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');
    const searchInput = document.getElementById('taskSearch');

    taskForm.addEventListener('submit', addTask);
    searchInput.addEventListener('input', searchTasks);
});

