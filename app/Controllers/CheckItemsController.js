import { checkItemsService } from "../Services/CheckItemsService.js"



function drawItems(){
  let template = ''
  ProxyState.items.forEach(t => template += t.Template)
  document.getElementById('checkbox').innerHTML = template
}


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
    drawItems()
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
