import { ProxyState } from "../AppState.js"
import { CheckItem } from "../Models/CheckItem.js"

class CheckItemsService {
    addCheckItem(newcheckitems) {
        new newcheckitems( )
        ProxyState.checkitems = [...ProxyState.checkitems, new CheckItem(newcheckitems)]
         ProxyState.checkitems = ProxyState.checkitems
        console.log('Make new check box 2', ProxyState.checkitems)

    }
}

export const checkItemsService = new CheckItemsService()


// This came from gregs-list service tab
//  addCar(formData) {
//         new Car(formData.make, formData.model, formData.model, formData.miles, formData.color, formData.price, formData.img)
//         ProxyState.cars.unshift(newCar) //THis puts the new car at the beg. of array.
//         ProxyState.cars = ProxyState.cars //triggers all the events to occur.
//         ProxyState.cars = [newCar, ...ProxyState.cars] //Use this if you dont want to use the unshift. THis way expands the array out. Called the spread operator (...) its the 3 dots.
//     }