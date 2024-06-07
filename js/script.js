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

    function renderTask(task) {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${task.title}</td>
            <td>${task.description}</td>
            <td>${task.dueDate}</td>
            <td>${task.priority}</td>
            <td>${task.status}</td>
            <td>
                <button onclick="toggleStatus(this)">Marcar como ${task.status === 'pendiente' ? 'completada' : 'pendiente'}</button>
                <button onclick="deleteTask(this)">Eliminar</button>
            </td>
        `;

        taskList.appendChild(tr);
    }

    window.toggleStatus = function(button) {
        const tr = button.parentElement.parentElement;
        const statusCell = tr.children[4];

        if (statusCell.textContent === 'pendiente') {
            statusCell.textContent = 'completada';
            button.textContent = 'Marcar como pendiente';
        } else {
            statusCell.textContent = 'pendiente';
            button.textContent = 'Marcar como completada';
        }
    };

    
});

    