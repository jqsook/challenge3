import { checkItemsService } from "../Services/CheckItemsService.js"



export default class CheckItemsController{
  constructor(){
  }

  addCheckItem(event, task) {
    event.preventDefault()
    let form = event.target
    let newcheckitems = {
      name: form.name.value,
      complaint: form.complaint.value,  //This and color are new
      color: form.color.value,
      task: task,
      count: displaycounter
    }
    form.reset()
    
    checkItemsService.addCheckItem(newcheckitems)
    
  }

  //Want to display only after the onclick of the create check item
  defaultCount() {
        const collect = require('collect.js');
        let num = 0
        let displaycounter = 0
        let confirm = document.getElementsByName('checkBoxCount')
        if (confirm == true) {
            num++
        }
        let collection = collect([document.getElementsByClassName('defaultCheck')]);
        let total = collection.count();
    displaycounter = math.fraction(num / total);

    }
}

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
