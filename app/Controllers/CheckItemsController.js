import { checkItemsService } from "../Services/CheckItemsService.js"



export default class CheckItemsController{
  constructor(){
  }

  addCheckItem(event, task) {
    event.preventDefault()
    let form = event.target
    let newcheckitems = {
      name: form.name.value,  
      task: task,
      
    }
    form.reset()
    
    checkItemsService.addCheckItem(newcheckitems)
    
  }

  //Want to display only after the onclick of the create check item
  defaultCount() {
       document.getElementById("countBox").onclick = function() {
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
}

// From the reading- could I use the blog post word counter and look for the t/f on the check boxes?
// const getWordCount = (text) => text ? text.trim().split(/\s+/).length : 0;
// () => blogObserver.broadcast()

// var form = document.forms[0]; // your form element (whatever)
// var checkedElms = form.querySelectorAll(':checked').length;

// another 
// function isCountCheck(helperMsg) {
//     var i, len, inputs = document.form1.getElementsByTagName("input");
//     for (i = 0, len = inputs.length; i < len; i++) {
//         if (inputs[i].type === "checkbox"
//             && inputs[i].checked)
//             return true;
//     }
//     alert(helperMsg);
//     return false;
// }

// addCar(event) {
//     event.preventDefault()
//     console.log(event) //For testing to see what happens before prevent default.  Should see submit event in the console.

//     // THis is for taking info from the forms
//     let form = event.target
//     let formData = {
//       make: form.make.value,
//       model: form.model.value,
//       price: form.price.value,
//       color: form.color.value,
//       miles: form.miles.value,
//       img: form.img.value
//     }
//     console.log(formData)
//     CarsService.addCar(formData)
//     //Dont need to draw as it should update when the page changes
//     form.reset() 
