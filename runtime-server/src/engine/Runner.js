const EventMap = require('./EventMap');

const server = require('express')()

class Runner {
    constructor() {
        this.events = []
    }

    startOn(port) {
        server.listen(port, () => {
            this.start()
        })
    }

    dispatchEvent(event) {
        console.log('dispatching', event);
        setTimeout(() => {
            EventMap.actionsFor(event)
                .forEach(action => action.execute(event.payload))
        }, 0);
    }

    start() {
        this.dispatchEvent({key: 'START', payload: {started: Date.now()}})
    }
}

module.exports = new Runner()