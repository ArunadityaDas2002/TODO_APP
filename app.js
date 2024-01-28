function addTask() {
    const input = document.getElementById("taskInput");
    // const button = document.getElementById("button");
    const list = document.getElementById("taskList");
    var work = input.value;

    if (work == '') {
        alert("You can add a task now");
    } else {
        let li = document.createElement("li");
        li.innerHTML = `
            <span>${work}</span>
            <button onclick="removeTask(this)">Remove</button>
        `;

        // Clear the input value after creating a new task
        input.value = '';

        // Append the created li to the list
        list.appendChild(li);
    }
}


function removeTask(button) {
    const taskToRemove = button.parentElement;
    taskToRemove.remove();
}
