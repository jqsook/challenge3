import { generateId } from "../Utils/GenerateId.js"

export class Task {
    constructor({ name, vehicle, complaint, color, id }) {
        this.id = id || generateId()
        this.name = name
        this.vehicle = vehicle
        this.complaint = complaint
        this.color = color  //Having trouble defining this item to attach it and the id to the card-- Hoisting issue???
    }
}

