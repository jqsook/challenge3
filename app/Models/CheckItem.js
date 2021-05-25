

export class CheckItem {
  constructor({ name, task}) {
    this.name = name
    this.task = task

    // this.count = count  this is for the counter output. Not sure about this.

  }
  
 
   get Template(){
    return  /*html*/`
               <div class="form-check">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1" />
                    <label class="form-check-label" for="defaultCheck1">
                        ${t.name}
                    </label>
                    <button><span class="bg-transparent">🗑</span></button>
                </div> 
        `
  }
}

  
  
  
  





