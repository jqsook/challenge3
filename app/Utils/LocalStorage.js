import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { CheckItem } from "../Models/CheckItem.js";


export function saveState(){
  localStorage.setItem('RoGen', JSON.stringify({
    tasks: ProxyState.tasks,
    checkitems: ProxyState.checkitems
  }))
console.log('in the saved state', ProxyState.checkitems)
}

export function loadState(){
  let data = JSON.parse(localStorage.getItem('RoGen'))
  console.log("In load state", data)
  if(data != null){
    ProxyState.tasks = data.tasks.map(t => new Task(t))
    ProxyState.checkitems = data.checkitems.map(c => new CheckItem(c))
    
  }

}

  