import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { CheckItem } from "../Models/CheckItem.js";





export function saveState(){
  localStorage.setItem('RoGen', JSON.stringify({
    tasks: ProxyState.tasks,
    checkitems: ProxyState.checkitems
  }))
console.log('in the saved state', ProxyState)
}

export function loadState(){
  let data = JSON.parse(localStorage.getItem('RoGen'))
  console.log(data)
  if(data != null){
    ProxyState.tasks = data.tasks.map(t => new Task(t))
    ProxyState.checkitems = data.checkitems.map(c => new CheckItem(c))
  }

}

  // For the local storage https://www.smashingmagazine.com/2019/08/shopping-cart-html5-web-storage/
// https://scotch.io/courses/build-an-interactive-javascript-food-menu/add-to-cart-and-show-items-in-modal
  // https://jsfiddle.net/divekarvinit/rwv9hk1z/1/