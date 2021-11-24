import Action from "../src/engine/actions/Action"
import Event from "../src/engine/events/Event"

test("creating and executing an action", async () => {
    const action = new Action([], "", "./tests/mockFunctionForAction.js", "done")
    const expectedEvent = new Event("done", "some value")

    const event = await action.execute({payload: ""})

    expect(event).toEqual(expectedEvent)
})

test('executing an action without an event, returns undefined', () => {
    
})