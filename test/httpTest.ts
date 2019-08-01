import { Http } from "../"
import { listener } from "@listener-js/listener"

listener({ Http })

const todo = {
  completed: false,
  id: 1,
  title: "delectus aut autem",
  userId: 1
}

const url = "https://jsonplaceholder.typicode.com/todos/1"

test("http error", (): Promise<any> => {
  expect.assertions(1)
  return Http
    .http(
      ["todos"],
      "http://does-not-exist",
      { error: true }
    )
    .catch((): boolean => expect(true).toBe(true))
})

test("http", async (): Promise<void> => {
  const out = await Http.http([], url)
  expect(out.body).toEqual(todo)
  expect(out.ok).toBe(true)
  expect(out.status).toBe(200)
  expect(out.url).toBe(url)
})
