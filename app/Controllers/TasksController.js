import { ProxyState } from '../AppState.js'
import { tasksService } from '../Services/TasksService.js'
import { loadState } from '../Utils/LocalStorage.js'



function _drawTasks() {
    console.log("You are in TasksController")
    let tasks = ProxyState.tasks
    let taskElm = document.getElementById('task')
    let template = ''

    tasks.forEach(t => {
        let checkitems = ProxyState.checkitems.filter(c => c.task == t.id)
        template += `
        <div class="col-3 m-3 bg-light px-0 border border-dark">
                <div class="text-dark" id="colornew">
                    ${t.name}
                    <button class="col-2 ml-5" onclick="app.tasksController.endRepairOrder('${t.id}')">☓</button>
                </div>
                <div class="ml-3"><span>  Repairs</span></div>
                <div class="row justify-content-center py-1 card-body ">
                    <b class="col-12">Repairs:</b>
                    <ul class="col-12 bg-shade">
                        <li class="row align-items-center"></li>
                        <li class="row align-items-center"> </li>
                    </ul>
                    <b class="col-12"></b>
                    <ul class="col-12 bg-shade">`

                    checkitems.forEach(t => { `
                    <li class="row align-items-center">
                    <div class="col-7">${t.name}</div>
                    </li>
                        `
                    })


                template +=   `</ul>
                    <form onsubmit="app.CheckItemsController.addCheckItem(event, '${t.id}' )">
                    <div class="input-group p-3">
                    <input type="text" class="form-control" placeholder="Add Repair Task.." >
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
            color: form.color.value //Where do I get this from ????? If not from form 
        }
        tasksService.createTask(newTask)
        document.getElementById("Button").disabled = false;  //Test to see if I get ID pushed- hoisting?
        form.reset()
        
    }
    // Functons for the deletion of the work orders.
    endRepairOrder(taskId) {
        let con = confirm("Would you like to delete the Repair Order?")
        console.log('RO- deleted', taskId)
        if (con == true)
            tasksService.endRepairOrder(taskId)
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
    defaultCount() {
        document.getElementById("countBox").onclick = function () {
            isCountCheck("Check something");
        };

        function isCountCheck(helperMsg) {
            var i, len, inputs = document.chkBxForm.getElementsByTagName("input");
            for (i = 0, len = inputs.length; i < len; i++) {
                if (inputs[i].type === "checkbox" && inputs[i].checked) return true;
            }
            console.log("The counter is here", helperMsg);
            return false;
        }

    }

     // Function to change the coloring of the header // It does not stick with the individual cards (id issue?  )
    btnOne(color, taskId) {
        // console.log("button 1 is in controller")
         var x = document.getElementById("colornew");
        x.style.backgroundColor="#27AE60";
        // x.innerHTML = "After";
        tasksService.btnOne(color, taskId)
    }
    btnTwo(taskId) {
         var x = document.getElementById("colornew");
        x.style.backgroundColor="#00c9bd";
        // x.innerHTML = "After";
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




//  const collect = require('collect.js');
//         let selected = 
//         const collection = collect([document.getElementsByClassName('defaultCheck')]);
//         const x = collection.count();

//         console.log(`Total number of elements are : ${x}`)
//   <div class="form-check">
//                     <input
//                         class="form-check-input"
//                         type="checkbox"
//                         value=""
//                         id="defaultCheck1" />
//                     <label class="form-check-label" for="defaultCheck1">
//                         ${c.name}
//             </label>
//                     <button><span class="bg-transparent">🗑</span></button>
//                 </div>

// <li class="row align-items-center">
//                         <div class="form-check">
//                             <input
//                             class="form-check-input"
//                             type="checkbox"
//                             value=""
//                             name="color-new"/>
//                         <label class="form-check-label" for="defaultCheck">
//                             ${c.complaint}
//                         </label>
//                     <button id="countBox" onclick="app.tasksController.endRepairItem('${c.id}')"><span class="bg-transparent">🗑</span></button>
//                             </div>
//                         </li>