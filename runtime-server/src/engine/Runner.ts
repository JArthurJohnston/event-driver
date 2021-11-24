import Action from "./actions/Action";
import Event from "./events/Event";

const EventMap = require('./EventMap');

const server = require('express')()

class Runner {
    events: Array<Event>
    constructor() {
        this.events = []
    }

    startOn(port: number) {
        server.listen(port, () => {
            this.start()
        })
    }

    dispatchEvent(event: Event) {
        setTimeout(() => {
            EventMap.actionsFor(event)
                .forEach(async (action: Action) => {
                    const nextEvent = await action.execute(event.payload)
                    if(nextEvent)
                        this.dispatchEvent(nextEvent)
                })
        }, 0);
    }

    start() {
        this.dispatchEvent({key: 'START', payload: {started: Date.now()}})
    }
}

export default new Runner()