let tasks: Array<string>=[];
function addTask(task:string):number
{
    tasks.push(task);
    console.log("__________________New task Added________________");
    console.log("Task " +task+ " inserted into list of array");
    return tasks.length;
}
function listAllTasks():void
{
    console.log("all tasks in Array:");
    tasks.forEach(function (task){
        console.log(task);
    })
    
    
}
function deleteTask(task:string):number
{
    let index:number = task.indexOf(task);
    if(index > -1){
        tasks.slice(index,1);
        console.log("_________________Task Removed ______________");
        console.log("Task " +task+ " removed from list")
    }
    return tasks.length;
}

addTask('Wake up');
addTask('sleep');

listAllTasks();

deleteTask('sleep');