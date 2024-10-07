const buttonAddTask = document.getElementById("button-add-task"); 
const todoList = document.getElementById("todo-list");

todoList.addEventListener("click", function(event) {
    const listItem = event.target.closest("li");
    if (listItem) {
        const taskItemSpan = listItem.querySelector("span");
        if (taskItemSpan) {
            taskItemSpan.classList.toggle("checked");
        }
    }

    return false;
});

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
    listItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center", "mb-2");

    const span = document.createElement("span");
    span.textContent = task;

    const buttonGroup = document.createElement("div");
    buttonGroup.classList.add("btn-group", "gap-2");

    const editButton = document.createElement("button");
    editButton.textContent = "Editar";
    editButton.classList.add("btn", "btn-warning", "btn-sm");
    editButton.addEventListener("click", editTask);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Deletar";
    removeButton.classList.add("btn", "btn-danger", "btn-sm");
    removeButton.addEventListener("click", removeTask);

    listItem.appendChild(span);
    buttonGroup.appendChild(editButton);
    buttonGroup.appendChild(removeButton);
    listItem.appendChild(buttonGroup);
    return listItem;
}

function loadTasks() {
    let tasks = getTasksFromLocalStorage();

    tasks.forEach(element => {
        const item = createTodoListItems(element);
        todoList.appendChild(item);
    });
}

function editTask(event) {
    // Acessa o elemento <li>
    const listItem = event.target.closest("li");
    if (!listItem) {
        console.error("Item da lista não encontrado.");
        return;
    }
    
    // Acessa o <span> que contém o texto da tarefa
    const span = listItem.querySelector("span");
    if (!span) {
        console.error("Span não encontrado no item da lista.");
    }

    const currentTaskText = span.textContent;

    // Cria um campo de entrada para edição
    const input = document.createElement("input");
    input.type = "text";
    input.value = currentTaskText;

    // Substitui o <span> pelo campo de entrada
    listItem.replaceChild(input, span);

    // Altera o texto do botão de "Editar" para "Salvar"
    event.target.textContent = "Salvar";
    event.target.removeEventListener("click", editTask);

    // Adiciona um novo listener para salvar a tarefa
    event.target.addEventListener("click", function saveTask(e) {
        // Evita que o evento de clique do botão "Salvar" se propague para o <li>
        // Isso evita que a tarefa seja marcada como verificada.
        e.stopPropagation();
        const newTaskText = input.value.trim();

        if (newTaskText !== "") {
            // Cria um novo <span> com o texto editado
            const newSpan = document.createElement("span");
            newSpan.textContent = newTaskText;

            // Substitui o campo de entrada pelo novo <span>
            listItem.replaceChild(newSpan, input);

            // Atualiza o botão de "Salvar" de volta para "Editar"
            event.target.textContent = "Editar";
            event.target.removeEventListener("click", saveTask);

            // Adiciona o listener de edição novamente
            event.target.addEventListener("click", editTask);

            // Atualiza o armazenamento local
            let tasks = getTasksFromLocalStorage();
            // Atualiza a tarefa editada
            tasks = tasks.map(task => task === currentTaskText ? newTaskText : task);
            // Salva a lista atualizada
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    });
}

function removeTask(event) {
    // 1. Remover o item <li> da lista de tarefas
    const listItem = event.target.closest("li");
    const taskBeingRemoved = listItem.querySelector("span").textContent;
    todoList.removeChild(listItem);

    // 2. Atualizar o armazenamento local para refletir essa remocao
    // o método `filter()` cria uma nova lista de tarefas que nao inclui
    // a tarefa removida.
    // `tasks` representa cada elemento do array
    // `item` é a variável que representa cada tarefa individual na lista
    let tasks = getTasksFromLocalStorage();
    tasks = tasks.filter((item) => {
        return item !== taskBeingRemoved;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

buttonAddTask.addEventListener("click", function(event) {
    event.preventDefault();

    addTasks();
});

function saveTasksToLocalStorage(newTask) {
    const tasks = getTasksFromLocalStorage();
    tasks.push(newTask);
    
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
