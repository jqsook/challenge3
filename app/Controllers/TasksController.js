import { ProxyState } from '../AppState.js'
import { tasksService } from '../Services/TasksService.js'
import { loadState } from '../Utils/LocalStorage.js'



function _drawTasks() {
    // console.log("You are in TasksController")
    let tasks = ProxyState.tasks
    let taskElm = document.getElementById('task')
    let template = ''
//NOTE style tag on this div for background color, background-color : MYHEXCode, t.color
    //This is for the counter <div class="ml-3"><span>  Repairs</span></div>
    tasks.forEach(t => {
        let checkitems = ProxyState.checkitems.filter(c => c.task == t.id)
        template += `
        <div class="col-3 m-3 bg-light px-0 border border-dark">
        
                <div class="text-dark" id="colornew">
                    ${t.name}
                    <button class="col-2 ml-5" onclick="app.tasksController.endRepairOrder('${t.id}')">☓</button>
                </div>
                
                <div class="row justify-content-center py-1 card-body ">
                    <b class="col-12">Repairs:</b>
                    <ul class="col-12 bg-shade">
                        <li class="row align-items-center"></li>
                        <li class="row align-items-center"> </li>
                    </ul>
                    <b class="col-12"></b>
                    <ul class="col-12 bg-shade">`

        checkitems.forEach(c => {
                        template +=`
                    <div class="form-check">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1" />
                    <label class="form-check-label" for="defaultCheck1">
                        ${c.name}
                    </label>
                    <button name="repairItem" onclick="app.tasksController.endRepairItem('${c.id}')"><span class="bg-transparent">🗑</span></button>
                </div>
                        `
                    })


                template +=   `</ul>
                    <form onsubmit="app.checkItemsController.addCheckItem(event, '${t.id}' )">
                    <div class="input-group p-3">
                    <input type="text" class="form-control" name="name" placeholder="Add Repair Task.." >
                    <div class="input-group-append">

                    <button class="p-0 border-0 "><span class="input-group-text">✚</span></button>
                    </div>
                    </div>
                    </form>
                </div>
            </div>
    `
  })
  taskElm.innerHTML = template
}


export class TasksController {
    constructor() {
        ProxyState.on('tasks', _drawTasks)
        ProxyState.on('checkitems', _drawTasks)
        loadState()
        
    }
    
    createTask(event) {
        event.preventDefault()
        let form = event.target
        let newTask = {
            name: form.name.value,
            vehicle: form.vehicle.value,
            complaint: form.complaint.value,
            id: form.id.value,  //Where do i get this from ?????
            // color: form.color.value
        }
        tasksService.createTask(newTask)
        //Hard wired in -cant get them to attach to the id 
        document.getElementById("Button").disabled = false;
        document.getElementById("Button2").disabled = false;
        document.getElementById("Button3").disabled = false;
        document.getElementById("Button4").disabled = false;
        document.getElementById("Button5").disabled = false; 
        form.reset()
        
    }
    // Functons for the deletion of the work orders.
    endRepairOrder(taskId) {
        let con = confirm("Would you like to delete the Repair Order?")
        console.log('RO- deleted', taskId)
        if (con == true)
            checkItemsService.endRepairOrder(taskId)
        else {
            console.log("cancleed the RO delete")
        }
    }

    endRepairItem(checkitems) { 
        let repcon = confirm("Would you like to delete the Repair Item?")
        console.log('Item- deleted')
        if (repcon == true) {
            tasksService.endRepairItem(checkitems)  
        
        } else {
            console.log("cancelled task delete")
        }
    }


     // Function to change the coloring of the header // It does not stick with the individual cards (id issue?  If I make it global the information is not secure.)
    btnOne(taskId) {
        // console.log("button 1 is in controller")
        var x = document.getElementById("colornew");
        x.style.backgroundColor="#27AE60";
        tasksService.btnOne(color, taskId)
    }
    btnTwo(taskId) {
        var x = document.getElementById("colornew");
        x.style.backgroundColor="#00c9bd";
        tasksService.btnTwo(taskId)
    }
    btnThree(taskId) {
        var x = document.getElementById("colornew");
        x.style.backgroundColor="#3ba5dc";
        tasksService.btnThree(taskId)
    }
    btnFour(taskId) {
        var x = document.getElementById("colornew");
        x.style.backgroundColor="#ff7f50";
        tasksService.btnFour(taskId)
    }
    btnFive(taskId) {
        var x = document.getElementById("colornew");
        x.style.backgroundColor="#eb5757";
        tasksService.btnFive(taskId)
    }
    
    
    btnDisable() {  
    document.getElementById("Button").disabled = false;
    document.getElementById("Button2").disabled = false;
    document.getElementById("Button3").disabled = false;
    document.getElementById("Button4").disabled = false;
    document.getElementById("Button5").disabled = false;
    }
}



