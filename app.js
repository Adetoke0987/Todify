"use strict";
let Todo = [];
let input = document.getElementById("btn");
let id = document.getElementById("taskid");
let description = document.getElementById("newtask");
let save = document.getElementById("tasklist");
input.addEventListener("click", function addTask() {
    Todo.push(description.value);
    displayTask();
});
function displayTask() {
    let info = '';
    save.innerHTML = '';
    for (let index = 0; index < Todo.length; index++) {
        const element = Todo[index];
        info +=
            `
        <li>${Todo[index]} <button onclick= "editTask(${index})">Edit</button> <button onclick= "deleteTask(${index})">Delete</button> </li>
        `;
    }
    save.innerHTML += info;
}
function deleteTask(index) {
    Todo.splice(index, 1);
    displayTask();
}
let editTask = (index) => {
};
