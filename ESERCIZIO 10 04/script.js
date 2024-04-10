function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText =taskInput.value.trim();
    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var li = document.createElement("li");
        li.textContent = taskText;
        li.addEventListener("click", toggleCompleted);
        
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Elimina";
        deleteButton.addEventListener("click", deleteTask);

        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = "";
    }
}

function toggleCompleted() {
    this.classList.toggle("completed");
}

function deleteTask() {
    this.parentNode.remove();
}