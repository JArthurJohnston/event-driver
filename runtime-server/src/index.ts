import path from 'path'
import Runner from './engine/Runner';
import loadProject from './initialization/loadProject';

export default function goTime(args: any){
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


