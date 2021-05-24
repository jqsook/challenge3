import { ProxyState } from "../AppState.js"
import { CheckItem } from "../Models/CheckItem.js"

class CheckItemsService {
    addCheckItem(newcheckitems) {
        ProxyState.checkitems = [...ProxyState.checkitems, new CheckItem
            (newcheckitems)]
        ProxyState.checkitems = ProxyState.checkitems
        console.log('in the items service', ProxyState.checkitems)
    }
  createCheckItem(newCheckItem) {
        ProxyState.tasks  = [...ProxyState.tasks, new CheckItem(newCheckItem)]
        // console.log("You are in the Tasks Service", ProxyState.tasks)
    }
}

export const checkItemsService = new CheckItemsService()


