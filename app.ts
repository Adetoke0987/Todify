let Todo:string[] = [];
let input = document.getElementById("btn") as HTMLButtonElement
let id = document.getElementById("taskid") as HTMLInputElement
let description = document.getElementById("newtask") as HTMLInputElement
let save = document.getElementById("tasklist") as HTMLInputElement

input.addEventListener("click", function addTask() {
    Todo.push(description.value)
    displayTask()
    
})
function displayTask() {
    let info:string ='';
    save.innerHTML ='';
    for (let index = 0; index < Todo.length; index++) {
        const element = Todo[index];

        
        info += 
        `
        <li>${Todo[index]} <button onclick= "editTask(${index})">Edit</button> <button onclick= "deleteTask(${index})">Delete</button> </li>
        `
    }
    save.innerHTML += info
}
function deleteTask(index:number) {
    Todo.splice(index,1)
    displayTask();
}
let editTask = (index:string)=>{
    
}