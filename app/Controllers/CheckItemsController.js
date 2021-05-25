import { ProxyState } from '../AppState.js'
import { checkItemsService } from "../Services/CheckItemsService.js"
import { loadState } from '../Utils/LocalStorage.js'

export default class CheckItemsController {
  constructor() {
    ProxyState.on('checkitems')
        loadState()
  }

  addCheckItem(event, task) {
    console.log("Made it to the Cheitems controller")
    event.preventDefault()
    let form = event.target
    let newcheckitems = {
      name: form.name.value,
      task: task
    }
      console.log(newcheckitems.name)

    
    
    checkItemsService.addCheckItem(newcheckitems)
    
  }

endRepairItem(checkitems) {
        let repcon = confirm("Would you like to delete the Repair Item?")
        console.log('Item-deleted', checkitems)
        if (repcon == true) {
            checkItemsService.endRepairItem(checkitems)
        } else {
            console.log("cancelled task delete")
        }
    }







}
















  //Want to display only after the onclick of the create check item
//   defaultCount() {
//     document.getElementById("countBox").onclick = function () {
//       isCountCheck("Check something");
//     };

    
//     //set a variable for the count of the ones that are checked and a variable for the inputs.length
//     function isCountCheck(helperMsg) {
      
//       let countBox = 0
//       var i, len, inputs = document.chkBxForm.getElementsByTagName("input");
//       for (countBox = 0, len = inputs.length; countBox < len; countBox++) {
//         if (inputs[i].type === "checkbox" && inputs[i].checked)
//           totalBox = len
//         let inputCount = countBox / totalBox
//         console.log("In the Count Check func", inputCount)
//         return inputCount;
//       }
//     }
//   }
// }




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
