Requirements
---Dont forget the carrer services project that is slacked-----

<!-- Task title/body must be between 3-50 characters -->
<!-- List creation must include a title limited to 3-15 characters -->
<!-- Users are prompted to confirm any delete (search window.confirm) -->
<!-- Forms should not submit unless the fields adhere to the requirements = add required -->
<!-- Lists are displayed out in columns across the page -->
<!-- Lists and tasks each have a delete button -->
<!-- Tasks can be Deleted (seperate from being marked complete) -->

All lists and tasks are rendered on load/reload
Each List must have its own Task form
Tasks can be marked complete, this will persist on reload
Lists can be Created
Lists can be Deleted
Lists include a count of all tasks compared to uncompleted tasks
List creation must include a color picker or minimum 5 different colors
All Data persists through local storage

---------------Additional Info--------------------------
Dive right into the coding, it doesn't matter which step below you do first however the following is a broad scope of the things that need to be done:

Create a data model for what your list is, and the properties you need on it. This should at least include a title, and a list of items it includes.
Generate the HTML needed to create a new list
In your controller capture the form submission and pass the data to your service, ensure the page does not reload.
Your service is responsible to turn your raw data into a List class object, and put it in the state (REMINDER: You will also want to make sure this gets saved in your local storage)
Write the needed function to render your list to the screen.
Repeat a similar process for deleting a list and creating and deleting Items (NOTE: you may not need Items to be their own class, as they are likely just a string).

<!-- Ref material -->

For the Counter section of the card
https://www.geeksforgeeks.org/collect-js-count-function/#:~:text=The%20count()%20function%20is,is%20applied%20to%20the%20collection.&text=Return%20Value%3A%20Returns%20the%20count%20of%20the%20element%20in%20that%20collection.

For the checked boxes on the card- this is going to help with the building of the logic for the check box output

https://stackoverflow.com/questions/11838667/javascript-count-checked-checkbox

<!-- Checked boxes again -->

https://stackoverflow.com/questions/11838667/javascript-count-checked-checkbox

<!-- For the counter of checks-->

http://jsfiddle.net/nnnnnn/ZjK3w/2/

<!-- To change the coloring of the top of the card and the buttons -->
<!-- This one actually works -->

https://stackoverflow.com/questions/52279665/how-to-change-bootstrap-card-header-value-with-java-script

<!-- Cut out sections -->

// } //THis was added to test to make sure the botton is operating
// let tasks = ProxyState.tasks
// document.getElementById('tasks').innerHTML = template
// let template = ''
// tasks.forEach(t => {
// let checkItems = ProxyState.checkItems.filter(c => c.task == t.id)
// template += `
// <div class="col-3 m-3 bg-light px-0 border border-dark">
// <div class="bg-dark text-light">
// <span class="col-6 mr-5"> Customer: </span>
// <button class="col-2 ml-5">
// <span class="">???</span>
// </button>
// </div>

// <div class="row justify-content-center py-1 card-body">

// <b class="col-12">Counter- dynamic</b>
// <ul class="col-12 bg-shade">
// <div class="form-check">
// <input
// class="form-check-input"
// type="checkbox"
// value=""
// id="defaultCheck1"
// />
// <label class="form-check-label" for="defaultCheck1">
// Default checkbox
// </label>
// <button><span class="bg-transparent">????</span></button>
// </div>
// <div class="form-check">
// <input
// class="form-check-input"
// type="checkbox"
// value=""
// id="defaultCheck1"
// />

// <form
// onsubmit="app.toppingsController.addTopping(event, 'pizzaId')"
// >
// <label for="name"></label>
// <div class="input-group p-4">
// <input
// type="text"
// class="form-control"
// placeholder="Add to list.."
// aria-label=""
// />
// <div class="input-group-append">
// <button class=""><span class="">???</span></button>
// </div>
// </div>
// </form>
// `

//

<div class="form-check">
        <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="defaultCheck1"
        />
        <label class="form-check-label" for="defaultCheck1">
        Default checkbox
        </label>
        <button><span class="bg-transparent">????</span></button>
        </div>
        <div class="form-check">
        <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="defaultCheck1"
        />

// get Template() {
// return /_html_/ `// <div class="form-check"> // <input // class="form-check-input" // type="checkbox" // value="" // id="defaultCheck1" // /> // <label class="form-check-label" for="defaultCheck1"> // Default checkbox // </label> // <button><span class="bg-transparent">????</span></button> // </div> // </ul> // <!-- Add task to form submission --> // <form // onsubmit="app.toppingsController.addTopping(event, 'pizzaId')" // > // <label for="name"></label> // <div class="input-group p-4"> // <input // type="text" // class="form-control" // placeholder="Add to list.." // aria-label="" // /> // <div class="input-group-append"> // <button class=""><span class="">???</span></button> // </div> // </div> // </form> // `
// }
// }

<div id="task" class="row justify-content-around">
        <div class="col-3 m-3 bg-light px-0">
          <!-- Customer Vehicle CARD FORM -->
        <!-- <div class="card border border-dark" style="width: 18rem;"> -->
            <h6 class="card-title bg-dark text-light mb-0">
            <button class="col-2 ml-5" onclick="app.tasksController.endRepairOrder('${t.id}')">???</button></h6>
            <p class="card-text pl-2 mt-0 border-bottom"><br>
            </p>
            <div class=" row justify-content-center card-body ">
        
            <div name="checkBoxCount"></div>

            <ul class="col-12 bg-shade">
            <li class="row align-items-center">
            <div class="form-check">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        name="defaultCheck"/>
                    <label class="form-check-label" for="defaultCheck1">
            </label>
                    <button onclick="app.tasksController.endRepairItem('${c.id}')"><span class="bg-transparent">????</span></button>
                </div>
              </li>
            </ul>
            <form onsubmit="app.CheckItemsController.addCheckItem(event, '${t.id}' )">
                    <label for="name"></label>
                    <input
            type="text"
            name="name"
            class="form-control"
            placeholder="Add Repair Task.."
            aria-label=""/>
                    <button><span>???</span></button>
                </form>
                </li>
          </div>
        <!-- </div> -->
      </div>
    </div>

// const collect = require('collect.js');
// let selected =
// const collection = collect([document.getElementsByClassName('defaultCheck')]);
// const x = collection.count();

// console.log(`Total number of elements are : ${x}`)
//

{/_ <div class="form-check"> _/}
// <input
// class="form-check-input"
// type="checkbox"
// value=""
// id="defaultCheck1" />
// <label class="form-check-label" for="defaultCheck1">
// ${c.name}
// </label>
// <button><span class="bg-transparent">????</span></button>
// </div>

// <li class="row align-items-center">
// <div class="form-check">
// <input
// class="form-check-input"
// type="checkbox"
// value=""
// name="color-new"/>
// <label class="form-check-label" for="defaultCheck">
// ${c.complaint}
//                         </label>
//                     <button id="countBox" onclick="app.tasksController.endRepairItem('${c.id}')"><span class="bg-transparent">????</span></button>
// </div>
// </li>

//From site http://jsfiddle.net/nnnnnn/ZjK3w/2/
// defaultCount() {
// document.getElementById("countBox").onclick = function () {
// isCountCheck("Check something");
// };

    //     function isCountCheck(helperMsg) {
    //         var i, len, inputs = document.chkBxForm.getElementsByTagName("input");
    //         for (i = 0, len = inputs.length; i < len; i++) {
    //             if (inputs[i].type === "checkbox" && inputs[i].checked) return true;
    //         }
    //         console.log("The counter is here", helperMsg);
    //         return false;
    //     }

    // }



      // checkitems.forEach(t => {  //supposed to be the card section
      //   `

      //       `
      // })

// <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
// <div class="btn-group" role="group" aria-label="First group" >

// <button type="button" id="Button"class="btn btn-success"onclick="app.tasksController.btnOne('${t.id}')" disabled>1</button>
//         <button type="button" id="Button2"class="btn btn-info"onclick="app.tasksController.btnTwo('${t.id}')"disabled> 2</button>
// <button type="button" id="Button3"class="btn btn-primary" onclick="app.tasksController.btnThree('${t.id}')"disabled>3</button>
//         <button type="button" id="Button4"class="btn btn-warning" onclick="app.tasksController.btnFour('${t.id}')"disabled>4</button>
// <button type="button" id="Button5"class="btn btn-danger" onclick="app.tasksController.btnFive('${t.id}')"disabled>5</button>
// </div>
// </div>

<div class="col-2 p-2 "> Task color selection
          <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div class="btn-group" role="group" aria-label="First group" >
              <!-- Cant pass the color value in to attach to the id in checked items. -->
            </div>
          </div>
        </div>
<button type="button" id="Button"class="btn btn-success"onclick="app.tasksController.btnOne('${t.id}')" disabled>1</button>
        <button type="button" id="Button2"class="btn btn-info"onclick="app.tasksController.btnTwo('${t.id}')"disabled> 2</button>
<button type="button" id="Button3"class="btn btn-primary" onclick="app.tasksController.btnThree('${t.id}')"disabled>3</button>
        <button type="button" id="Button4"class="btn btn-warning" onclick="app.tasksController.btnFour('${t.id}')"disabled>4</button>
<button type="button" id="Button5"class="btn btn-danger" onclick="app.tasksController.btnFive('${t.id}')"disabled>5</button>

// Function to change the coloring of the header // It does not stick with the individual cards (id issue? If I make it global the information is not secure.)
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

//Hard wired in -cant get them to attach to the id
document.getElementById("Button").disabled = false;
document.getElementById("Button2").disabled = false;
document.getElementById("Button3").disabled = false;
document.getElementById("Button4").disabled = false;
document.getElementById("Button5").disabled = false;

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
