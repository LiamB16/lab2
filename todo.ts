import {todointerface} from './todointerface';

class Todo implements todointerface
{
    constructor(){}

    tasks: Array<string>=[];

    addTask(task:string):number
    {
      this.tasks.push(task);
      console.log("__________________New task Added________________");
      console.log("Task " +task+ " inserted into list of array");
      return this.tasks.length;
    }
    listAllItems():void
    {
      console.log("all tasks in Array:");
      this.tasks.forEach(function (task)
      {
        console.log(task);
      })
       console.log("end: all items in array");
    }

    deleteTask(task:string):number
    {
      let index:number = this.tasks.indexOf(task);
      if(index > -1)
      {
        this.tasks.slice(index,1);
        console.log("_________________Task Removed ______________");
        console.log("Task " +task+ " removed from list")
      }
     return this.tasks.length;
    }
}
let myTodos = new Todo();
myTodos.addTask("eat");
myTodos.addTask("sleep");
myTodos.listAllItems();

myTodos.deleteTask('sleep');