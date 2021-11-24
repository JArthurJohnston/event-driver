//consider renaming, as Event is a pretty common name, might clash
export default class Event {
    key: string
    payload: any

    constructor(key: string, payload: any) {
        this.key = key
        this.payload = payload
    }
}