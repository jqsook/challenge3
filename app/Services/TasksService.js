import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"
import { saveState } from "../Utils/LocalStorage.js"

class TasksService {
    constructor() {
        ProxyState.on('tasks', saveState)
        ProxyState.on('checkitems', saveState ) 
        // console.log("You are in the Task services")
    }

    endRepairOrder(taskId) {  
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != taskId)
    console.log(ProxyState.tasks)
    }
    

    endRepairItem(checkitemsId) {  
        ProxyState.checkitems = ProxyState.checkitems.filter(c => c.id != checkitemsId)
        console.log('deleted - console in task-serv')
        
    }

    createTask(newTask) {
        ProxyState.tasks  = [...ProxyState.tasks, new Task(newTask)]
        // console.log("You are in the Tasks Service", ProxyState.tasks)
    }

     // card coloring assigned to specific ID and saved to the array.
    btnOne(color, taskId) {  
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != taskId)
    console.log("button 1 is in services", color, taskId)
    } 
    btnTwo(taskId) {  
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != taskId)
    console.log("button 2 is in services")
    } 
    btnThree(taskId) {  
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != taskId)
    console.log("button 3 is in services")
    } 
    btnFour(taskId) {  
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != taskId)
    console.log("button 4 is in services")
    } 
    btnFive(taskId) {  
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != taskId)
    console.log("button 5 is in services")
    } 



}

export const tasksService = new TasksService()