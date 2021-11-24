import path from 'path'
import Event from '../events/Event'
import Runner from '../Runner'

export default class Action {
    label: string
    triggers: Array<string>
    location: string
    event: string
    actionFunction: Function | null = null

    constructor(triggers: Array<string>, label: string, location: string, event: string) {
        this.label = label
        this.triggers = triggers
        this.location = location;
        this.event = event
    }

    async _loadFunction() {
        if (!this.actionFunction) {
            const fnLocation = path.resolve(this.location)
            const {default: loadedFunction} = await import(fnLocation)
            this.actionFunction = loadedFunction;
        }
        return this.actionFunction
    }

    async execute(eventPayload: any) {
        const actionFunction = await this._loadFunction()
        const result = await actionFunction?.(eventPayload)
        if (this.event) {
            return new Event(this.event, result)
        }
    }
}
