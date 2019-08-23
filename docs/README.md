> **[@listener-js/http](README.md)**

[Globals](globals.md) /

# http

Listener universal http fetch

![http](media/http.gif)

## Install

```bash
npm install @listener-js/listener @listener-js/http
```

## Usage

```ts
import { listener } from "@listener-js/listener"
import { http } from "@listener-js/http"

listener({ http })

const url = "https://jsonplaceholder.typicode.com/todos/1"
const { body, ok, status, url } = await http.fetch([], url)
```