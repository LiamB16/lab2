var tasks = [];
function addTask(task) {
    tasks.push(task);
    console.log("__________________New task Added________________");
    console.log("Task " + task + " inserted into list of array");
    return task.length;
}
function listAllTasks() {
    console.log("all tasks in Array:");
    task.forEach(function (task) {
        console.log(task);
    });
}
function deleteTask(task) {
    var index = task.indexOf(task);
    if (index > -1) {
        task.slice(index, 1);
        console.log("_________________Task Removed ______________");
        console.log("Task " + task + " removed from list");
    }
    return task.length;
}
addTasks('Wake up');
addTasks('sleep');
listAllTask();
deleteTasks('sleep');
