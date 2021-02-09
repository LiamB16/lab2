"use strict";
exports.__esModule = true;
var Todo = /** @class */ (function () {
    function Todo() {
        this.tasks = [];
    }
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("__________________New task Added________________");
        console.log("Task " + task + " inserted into list of array");
        return this.tasks.length;
    };
    Todo.prototype.listAllItems = function () {
        console.log("all tasks in Array:");
        this.tasks.forEach(function (task) {
            console.log(task);
        });
        console.log("end: all items in array");
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.slice(index, 1);
            console.log("_________________Task Removed ______________");
            console.log("Task " + task + " removed from list");
        }
        return this.tasks.length;
    };
    return Todo;
}());
var myTodos = new Todo();
myTodos.addTask("eat");
myTodos.addTask("sleep");
myTodos.listAllItems();
myTodos.deleteTask('sleep');
