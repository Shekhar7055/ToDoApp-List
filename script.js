document.getElementById('add-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('todo-input');
    const taskValue = taskInput.value.trim();

    if (taskValue === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('todo-list');
    const taskItem = document.createElement('li');
    
    const taskText = document.createElement('span');
    taskText.textContent = taskValue;
    taskText.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskInput.value = '';
}
