"use strict";
let Todo = [];
let btn = document.getElementById("btn");
let id = document.getElementById("taskid");
let description = document.getElementById("newtask");
let save = document.getElementById("tasklist");
btn.addEventListener("click", function addTask() {
    if (id.value.length > 0, description.value.length > 0) {
        Todo.push({ id: id.value, description: description.value });
        displayTasks();
        id.value = '';
        description.value = '';
    }
});
function displayTasks() {
    save.innerHTML = '';
    for (let index = 0; index < Todo.length; index++) {
        const task = Todo[index];
        save.innerHTML +=
            `<ul> 
           <div class="flex">
               <div class="task-info">
                  <span id="taskD">${task.id} </span>
                  <span id="taskDesc">${task.description} </span>
               </div> 
               <div class="buttons">
                  <button onclick="editTask(${index})">Edit</button> 
                  <button onclick="deleteTask(${index})">Delete</button></div>
           </div>
         </ul>`;
    }
}
function deleteTask(index) {
    Todo.splice(index, 1);
    displayTasks();
}
let editTask = (index) => {
    const updatedId = prompt("Edit Task ID", Todo[index].id);
    const updatedDescription = prompt("Edit Task Description", Todo[index].description);
    if (updatedId !== null && updatedDescription !== null) {
        Todo.splice(index, 1, { id: updatedId, description: updatedDescription });
        displayTasks();
    }
};
