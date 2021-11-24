import Action from "./actions/Action";
import Event from "./events/Event";

class EventMap {
    map: any
    constructor(){
        this.map = {
            "START": [],
            "END": []
        }
    }

    /**
     * For testing purposes only
     */
    _clear(){
        this.map = {
            "START": [],
            "END": []
        }
    }

    register(action: Action){
        action.triggers.forEach(triggerEvent => {
            if(this.map[triggerEvent]){
                this.map[triggerEvent].push(action)
            } else {
                this.map[triggerEvent] = [action]
            }
        });
    }

    actionsFor(event: Event){
        return this.map[event.key] || []
    }
}

module.exports = new EventMap()
//^^^ each time nodejs requires or imports this module, it will reuse this instance. giving us a pseudo-singleton
