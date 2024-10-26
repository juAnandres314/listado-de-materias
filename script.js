function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Por favor, ingresa una tarea.");
    } else {
        var taskList = document.getElementById("task-list");
        var newTask = document.createElement("li");
        newTask.innerHTML = taskText + " <button onclick='deleteTask(this)'>Eliminar</button>";
        taskList.appendChild(newTask);
        taskInput.value = "";
    }
}

function deleteTask(task) {
    var taskList = document.getElementById("task-list");
    taskList.removeChild(task.parentNode);
}