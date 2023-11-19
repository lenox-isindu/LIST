function addTask() {
    const taskInput = document.getElementById('task');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <input type="checkbox">
            <span>${taskInput.value}</span>
            <button type="button" onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

function removeTask(button) {
    const taskList = document.getElementById('taskList');
    const taskItem = button.parentNode;
    taskList.removeChild(taskItem);
}
