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

    // similiatr to the firside with vender rebuild
    boxCount() {
    let x = document.getElementsByClassName('chk');
    let y = 0
    for (var i = 0; i < boxes.length; i++) { //Iterates over the array
        y = x.length; //This should sum the total boxes (checked and unchecked)
        x = boxes[i]; //This should count the checked boxes
        if (box.checked) {
            ProxyState.counter = Math.fraction(x/y)
            console.log(count)
        }
    }
    
    }
}


export const tasksService = new TasksService()