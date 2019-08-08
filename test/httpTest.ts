import { http } from "../"
import { listener } from "@listener-js/listener"
import { log } from "@listener-js/log"

listener({ http, log })

const todo = {
  completed: false,
  id: 1,
  title: "delectus aut autem",
  userId: 1
}

const url = "https://jsonplaceholder.typicode.com/todos/1"

test("fetch", async (): Promise<void> => {
  const out = await http.fetch([], url)
  expect(out.body).toEqual(todo)
  expect(out.ok).toBe(true)
  expect(out.status).toBe(200)
  expect(out.url).toBe(url)
})

test("fetch error", (): Promise<any> => {
  expect.assertions(1)
  return http
    .fetch(
      ["todos"],
      "http://does-not-exist",
      { error: true }
    )
    .catch((): boolean => expect(true).toBe(true))
})
