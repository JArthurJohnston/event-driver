import EventMap from './EventMap'

const server = require('express')()

export default class Runner {
    constructor(){
        this.events = []
    }

    startOn(port){
        console.log(EventMap);
        server.listen(port, () => {

        })
    }

    dispatchEvent(event){

    }

    runEvents(){
        this.events.forEach(event => {
            
        });
    }


}
