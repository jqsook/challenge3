import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"
import { saveState } from "../Utils/LocalStorage.js"

class TasksService {
    constructor() {
        ProxyState.on('tasks', saveState)
         
        // console.log("You are in the Task services")
    }

    endRepairOrder(taskId) {  
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != taskId)
    // console.log(ProxyState.tasks)
    }

    createTask(newTask) {
        ProxyState.tasks  = [...ProxyState.tasks, new Task(newTask)]
        // console.log("You are in the Tasks Service", ProxyState.tasks)
    }



}

export const tasksService = new TasksService()