import { generateId } from "../Utils/GenerateId.js"
import { colorGenerator } from "../Utils/ColorSelector.js"
//


export class Task {
    constructor({ name, vehicle, complaint, color, id, counter }) {
        this.id = id || generateId()
        this.name = name
        this.vehicle = vehicle
        this.complaint = complaint
        this.color = color || colorGenerator()
        // this.counter = counter
    }
}

