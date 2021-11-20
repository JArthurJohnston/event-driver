const path = require('path');
const Event = require('../events/Event');
const Runner = require('../Runner');

module.exports = class Action {
    constructor(triggers, label, location, event){
        this.label = label
        this.triggers = triggers
        this.location = location;
        this.event = event
    }

    async _loadFunction(){
        if(!this.actionFunction){
            const fnLocation = path.resolve(this.location)
            const {default: actionFunction} = await import(fnLocation)
            this.actionFunction = actionFunction;
        }
        return this.actionFunction
    }

    async execute(eventPayload){
        const actionFunction = await this._loadFunction()
        const result = await actionFunction(eventPayload)
        if(this.event){
            Runner.dispatchEvent(new Event(this.event, result))
        }
    }
}
