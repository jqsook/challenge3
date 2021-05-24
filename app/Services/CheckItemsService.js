import { ProxyState } from "../AppState.js"
import { CheckItem } from "../Models/CheckItem.js"

class CheckItemsService {
    addCheckItem(newcheckitems) {
        ProxyState.checkitems = [...ProxyState.checkitems, new CheckItem
            (newcheckitems)]
        ProxyState.checkitems = ProxyState.checkitems
        console.log('in the items service', ProxyState.checkitems)
    }
  
}

export const checkItemsService = new CheckItemsService()


