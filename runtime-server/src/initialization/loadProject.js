const path = require('path');
const Action = require('../engine/actions/Action');
const EndAction = require('../engine/actions/EndAction');
const EventMap = require('../engine/EventMap');
const Runner = require('../engine/Runner');

module.exports = function loadProject(projectDir){
    const {actions} = require(`${projectDir}/phaser-config.json`)
    actions.forEach(({location, triggers, event, label}) => {
        const actionLocation = path.resolve(`${projectDir}/${location}`)
        const action = new Action(triggers, label, actionLocation, event)
        EventMap.register(action)
    });

    EventMap.register(new EndAction())
    
    new Runner(EventMap, 3000).start()
}

