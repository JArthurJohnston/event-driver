const Action = require("../src/engine/actions/Action")
const EventMap = require("../src/engine/EventMap")
const Event = require("../src/engine/events/Event")

beforeEach(()=> {
    EventMap._clear()
})

test('actionsFor to return empty list for unknown events', () => {
    const event = new Event("lskjdf", {"sfljsd": "sdflhdsf"})

    const actions = EventMap.actionsFor(event)

    expect(actions).toEqual([])
})

test("register and retrieve an action", () => {
    const eventKey = "SOMETHING_HAPPENED"
    const action = new Action([eventKey], "", "", "SOMETHING_DONE")
    const event = new Event(eventKey, {})

    EventMap.register(action)
    const actualActions = EventMap.actionsFor(event)

    expect(actualActions[0]).toEqual(action)
})

test("register and retrieve multiple actions", () => {
    const eventKey = "SOMETHING_HAPPENED"
    const action1 = new Action([eventKey], "", "", "SOMETHING_DONE")
    const action2 = new Action([eventKey], "", "", "SOMETHING_DONE")
    const event = new Event(eventKey, {})

    EventMap.register(action1)
    EventMap.register(action2)
    const actualActions = EventMap.actionsFor(event)

    expect(actualActions.length).toEqual(2)
    expect(actualActions[0]).toEqual(action1)
    expect(actualActions[1]).toEqual(action2)
})



