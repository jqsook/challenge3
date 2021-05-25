import { generateId } from "../Utils/GenerateId.js"

export class Task {
    constructor({ name, vehicle, complaint, color, id }) {
        this.id = id || generateId()
        this.name = name
        this.vehicle = vehicle
        this.complaint = complaint
        this.color = color  
    }
}

