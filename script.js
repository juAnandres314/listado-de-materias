// Cargar tareas desde localStorage al iniciar
document.addEventListener("DOMContentLoaded", loadTasks);

function loadTasks() {
    var taskList = document.getElementById("task-list");
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function(taskText) {
        var newTask = document.createElement("li");
        newTask.textContent = taskText;
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.onclick = function() { deleteTask(newTask); };
        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);
    });
}

function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Por favor, ingresa una tarea.");
    } else {
        var taskList = document.getElementById("task-list");
        var newTask = document.createElement("li");
        newTask.textContent = taskText;

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.onclick = function() { deleteTask(newTask); };

        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);

        // Guardar tarea en localStorage
        saveTaskToLocalStorage(taskText);
        
        taskInput.value = "";
    }
}

function saveTaskToLocalStorage(taskText) {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteTask(task) {
    if (confirm("¿Estás seguro de que deseas eliminar esta tarea?")) {
        var taskList = document.getElementById("task-list");
        taskList.removeChild(task);

        // Eliminar tarea de localStorage
        removeTaskFromLocalStorage(task.textContent);
    }
}

function removeTaskFromLocalStorage(taskText) {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task !== taskText); // Filtrar la tarea eliminada
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
