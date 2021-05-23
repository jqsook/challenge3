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

https://stackoverflow.com/questions/40537142change-background-color-using-event-handler

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
// <span class="">☓</span>
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
// <button><span class="bg-transparent">🗑</span></button>
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
// <button class=""><span class="">✚</span></button>
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
        <button><span class="bg-transparent">🗑</span></button>
        </div>
        <div class="form-check">
        <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="defaultCheck1"
        />

// get Template() {
// return /_html_/ `// <div class="form-check"> // <input // class="form-check-input" // type="checkbox" // value="" // id="defaultCheck1" // /> // <label class="form-check-label" for="defaultCheck1"> // Default checkbox // </label> // <button><span class="bg-transparent">🗑</span></button> // </div> // </ul> // <!-- Add task to form submission --> // <form // onsubmit="app.toppingsController.addTopping(event, 'pizzaId')" // > // <label for="name"></label> // <div class="input-group p-4"> // <input // type="text" // class="form-control" // placeholder="Add to list.." // aria-label="" // /> // <div class="input-group-append"> // <button class=""><span class="">✚</span></button> // </div> // </div> // </form> // `
// }
// }

<div id="task" class="row justify-content-around">
        <div class="col-3 m-3 bg-light px-0">
          <!-- Customer Vehicle CARD FORM -->
        <!-- <div class="card border border-dark" style="width: 18rem;"> -->
            <h6 class="card-title bg-dark text-light mb-0">
            <button class="col-2 ml-5" onclick="app.tasksController.endRepairOrder('${t.id}')">☓</button></h6>
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
                    <button onclick="app.tasksController.endRepairItem('${c.id}')"><span class="bg-transparent">🗑</span></button>
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
                    <button><span>✚</span></button>
                </form>
                </li>
          </div>
        <!-- </div> -->
      </div>
    </div>
