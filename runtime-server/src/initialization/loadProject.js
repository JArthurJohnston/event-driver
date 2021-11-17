import Action from "../engine/actions/Action";
import EndAction from "../engine/actions/EndAction";
import EventMap from "../engine/EventMap";
import Runner from "../engine/Runner";
const path = require('path')

export default function loadProject(projectDir){
    const {actions} = require(`${projectDir}/phaser-config.json`)
    actions.forEach(({location, triggers, event, label}) => {
        const actionLocation = path.resolve(`${projectDir}/${location}`)
        const action = new Action(triggers, label, actionLocation, event)
        EventMap.register(action)
    });

    EventMap.register(new EndAction())
    
    new Runner(EventMap, 3000).start()
}
