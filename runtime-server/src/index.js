import loadProject from './initialization/loadProject';

const path = require('path')

export function goTime(args){
    console.log('Initializing Phaser');
    if(args.length < 3) {
        console.error('Invalid number of arguments. Must specify a project directory')
        process.exit(9)
    }
    const projectDir = path.resolve(args[2])
    loadProject(projectDir)
}
