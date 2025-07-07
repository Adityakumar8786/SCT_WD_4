const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;
    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox" class="checkbox" onclick="toggleTask(this)">
        <span>${taskText}</span>
        <button onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
}

function toggleTask(checkbox) {
    const li = checkbox.parentElement;
    li.classList.toggle('completed');
}

function deleteTask(button) {
    button.parentElement.remove();
}

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});