document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();

        if (taskText) {
           const li = document.createElement('li');
            li.classList.add('list-group-item', 'task-item');
            
            li.textContent = taskText;

            const removeBtn = document.createElement('button');
            removeBtn.classList.add('btn', 'btn-danger', 'btn-sm');
            removeBtn.textContent = 'Remover';
            removeBtn.addEventListener('click', () => {
                taskList.removeChild(li);
            });

            li.appendChild(removeBtn);

            taskList.appendChild(li);

            taskInput.value = '';
        }
    });

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskBtn.click();
        }
    });
});
