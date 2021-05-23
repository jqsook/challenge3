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

