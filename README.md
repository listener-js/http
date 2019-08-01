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
import { Http } from "@listener-js/http"

listener({ Http })

const url = "https://jsonplaceholder.typicode.com/todos/1"
const { body, ok, status, url } = await Http.http([], url)
```
