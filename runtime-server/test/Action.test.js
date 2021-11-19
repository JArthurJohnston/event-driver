const Action = require("../src/engine/actions/Action")
const Event = require("../src/engine/events/Event")

test("creating and executing an action", async () => {
    const action = new Action([], "", "./test/mockFunctionForAction.js", "done")
    const expectedEvent = new Event("done", "some value")

    const event = await action.execute({payload: ""})

    expect(event).toEqual(expectedEvent)
})
