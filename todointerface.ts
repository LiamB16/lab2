export interface todointerface{
    tasks: Array<string>;
    addTask(task:String):number;
    listAllItems():void;
    deleteTask(task:String):number;
}