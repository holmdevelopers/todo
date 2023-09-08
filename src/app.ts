const taskInput = document.getElementById('taskInput') as HTMLInputElement;
const addTaskButton = document.getElementById('addTaskButton') as HTMLButtonElement;
const taskList = document.getElementById('taskList') as HTMLUListElement;
let tasks: { text: string; done: boolean }[] = [];

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        tasks.push({ text: taskText, done: false });
        renderTasks();
        taskInput.value = '';
    }
}

function toggleTask(index: number) {
    tasks[index].done = !tasks[index].done;
    renderTasks();
}

function removeTask(index: number) {
    tasks.splice(index, 1);
    renderTasks();
}

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('task-item'); // Här lägger jag till en klass för uppgiftselementet
        const taskText = document.createElement('span');
        taskText.textContent = task.text;

        if (task.done) {
            taskText.classList.add('done');
        }

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Ta bort';
        removeButton.classList.add('remove'); // här lägg jag till en klass för tabortknappen
        removeButton.addEventListener('click', () => removeTask(index));

        const toggleButton = document.createElement('button');
        toggleButton.textContent = task.done ? 'Ångra' : 'Klar';
        toggleButton.classList.add('toggle'); // Här lägger jag till en klass för markera-knappen
        toggleButton.addEventListener('click', () => toggleTask(index));

        listItem.appendChild(taskText);
        listItem.appendChild(removeButton);
        listItem.appendChild(toggleButton);
        taskList.appendChild(listItem);
    });
}

addTaskButton.addEventListener('click', addTask);