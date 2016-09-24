import assert from "power-assert"
import {
  addTodo,
  completeTodo,
} from "../src/actions.js"
import {
  todos,
} from "../src/reducers.js"

describe("reducers", () => {

  describe("todos", () => {
    it("addTodo", () => {
      assert.notStrictEqual(
        todos([], addTodo("hello")),
        [{type:"ADD_TODO", payload:"hello"}],
      )
    })

    it("completeTodo", () => {
      assert.notStrictEqual(
        todos([{}, {}], completeTodo(1)),
        [{}, {completed:true}],
      )
    })
  })

})
