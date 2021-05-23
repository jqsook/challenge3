import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"
import { saveState } from "../Utils/LocalStorage.js"

class TasksService {
    constructor() {
        ProxyState.on('tasks', saveState)
        ProxyState.on('checkitems', saveState ) 
        console.log("You are in the services")
    }

    endRepairOrder(taskId) {  
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != taskId)
    console.log(ProxyState.tasks)
    }
    
    // card coloring assigned to specific ID and saved to the array.
    cardColor(taskId) {  
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != taskId)
    console.log("It should change colors on the input of the rgb")
    } 

    endRepairItem(checkitems) {  
        ProxyState.checkitems = ProxyState.checkitems.filter(c => c.id != checkitemsId)
        console.log('deleted - console in task-serv')
        
    }

    createTask(newTask) {
        ProxyState.tasks  = [...ProxyState.tasks, new Task(newTask)]
        console.log("You are in the Tasks Service", ProxyState.tasks)
    }

}

export const tasksService = new TasksService()