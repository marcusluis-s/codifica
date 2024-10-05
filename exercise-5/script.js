const buttonAddTask = document.getElementById("button-add-task"); 
const todoList = document.getElementById("todo-list");

function addTasks() {
    const inputField = document.getElementById("input-field-new-task");
    const inputFieldNewTask = inputField.value;
    if (inputFieldNewTask.trim() !== "") {
        const listItem = createTodoListItems(inputFieldNewTask);
        todoList.appendChild(listItem);

        saveTasksToLocalStorage(inputFieldNewTask);

        inputField.value = "";
    }
}

function createTodoListItems(task) {
    const listItem = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = task;

    listItem.appendChild(span);
    return listItem;
}


function loadTasks() {
    let tasks = getTasksFromLocalStorage();

    tasks.forEach(element => {
        const item = createTodoListItems(element);
        todoList.appendChild(item);
    });
}

buttonAddTask.addEventListener("click", function(event) {
    event.preventDefault();

    addTasks();
});

function saveTasksToLocalStorage(newTask) {
    const tasks = getTasksFromLocalStorage(); // Pegando as tarefas existentes
    tasks.push(newTask); // Adicionando a nova tarefa ao array
    
    // TIL
    // Se eu deixar apenas essa linha de código, ela irá sobrescrever o array
    // de tarefas a cada nova tarefa adicionada, em vez de adicionar a tarefa
    // ao array existente. Por isso é necessário, primeiro, obter as terfas
    // existenes e depois adicionar a nova tarefa ao array.
    //
    // Com as duas linhas de código acima, essa linha de código irá
    // salvar o array atualizado.
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasksFromLocalStorage() {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
}

document.addEventListener("DOMContentLoaded", function() {
    if (document.body.contains(document.getElementById("todo-list"))) {
        loadTasks();
    }
});
