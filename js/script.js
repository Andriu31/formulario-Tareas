document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');
    const searchInput = document.getElementById('taskSearch');

    taskForm.addEventListener('submit', addTask);
    searchInput.addEventListener('input', searchTasks);

    function addTask(e) {
        e.preventDefault();

        const title = document.getElementById('taskTitle').value;
        const description = document.getElementById('taskDescription').value;
        const dueDate = document.getElementById('taskDueDate').value;
        const priority = document.getElementById('taskPriority').value;

        const task = {
            title,
            description,
            dueDate,
            priority,
            status: 'pendiente'
        };

        renderTask(task);
        taskForm.reset();
    }

   
});

    