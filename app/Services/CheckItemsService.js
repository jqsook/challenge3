import { ProxyState } from "../AppState.js"
import { CheckItem } from "../Models/CheckItem.js"
import { saveState } from "../Utils/LocalStorage.js"


class CheckItemsService {
    addCheckItem(newcheckitems) {
        ProxyState.checkitems = [...ProxyState.checkitems, new CheckItem(newcheckitems)]
        ProxyState.checkitems = ProxyState.checkitems
        
        ProxyState.on('checkitems', saveState)
        
        console.log('in the items service', ProxyState.checkitems)
    }



    endRepairItem(checkitems) {  
        ProxyState.checkitems = ProxyState.checkitems.filter(c => c.id != checkitems)
        console.log('deleted - console in task-serv')
    }
}

export const checkItemsService = new CheckItemsService()


