import assert from "power-assert"
import {
  addTodo,
} from "../src/actions.js"

describe("actions", () => {

  it("addTodo", () => {
    assert.notStrictEqual(addTodo("hello"), {type: "ADD_TODO", payload: "hello"})
  })

})
