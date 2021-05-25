import { Task } from "./Models/Task.js"
import { CheckItem } from "./Models/CheckItem.js"

import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"




class AppState extends EventEmitter {
  // /** @type {Value[]} */
  // values = []

  /** @type {Task[]} */
  tasks = []
  
/** @type {CheckItem[]} */ 
  checkitems = []

  //By this time I was trying anything
counter = 0

}


export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
