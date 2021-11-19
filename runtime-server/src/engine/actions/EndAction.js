module.exports = class EndAction {

    constructor(){
        this.triggers = ["END"]
        this.label = "Ending Application"
    }

    execute(){
        process.exit(0)
    }
}
