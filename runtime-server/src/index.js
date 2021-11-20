const loadProject = require('./initialization/loadProject')
const path = require('path');
const Runner = require('./engine/Runner');

function goTime(args){
    console.log('Initializing Phaser');
    if(args.length < 3) {
        console.error('Invalid number of arguments. Must specify a project directory')
        process.exit(9)
    }
    const projectDir = path.resolve(args[2])
    loadProject(projectDir)

    Runner.start()
    // Runner.startOn(3000)
}

module.exports = {
    goTime
}
