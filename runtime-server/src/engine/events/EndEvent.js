
export default class EndEvent {
    constructor(){
        this.key = "END"
        this.subscribers = []
    }

    get subscribers(){
        return [...this.subscribers, exitAction]
    }

}

const exitAction = () => {
    process.exit(1)
}
