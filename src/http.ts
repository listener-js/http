import * as fetchImport from "isomorphic-unfetch"

const fetch = (
  fetchImport.default || fetchImport
) as typeof fetchImport.default

export interface HttpArg extends RequestInit {
  error?: boolean
  store?: boolean
  text?: boolean
}

interface HttpOutput {
  body: string
  ok: boolean
  status: number
  url: string
}

export class Http {
  public static listeners = ["http", "httpError"]

  public static async http(
    id: string[], url: string, arg: HttpArg = {}
  ): Promise<HttpOutput> {
    const r = await fetch(url, arg)
      .catch((err): void => {
        this.httpError(id, err)

        if (arg.error) {
          throw new Error(err)
        }
      })

    if (r) {
      const { ok, status } = r
      let body

      if (!ok) {
        const err = "Request to " +
          url +
          " failed, status code: " +
          status.toString()

        this.httpError(id, err)

        if (arg.error) {
          throw new Error(err)
        }
      } else if (arg.text) {
        body = await r.text()
      } else {
        body = await r.json()
      }

      return { body, ok, status, url }
    }
  }

  public static httpError(
    id: string[], error: string
  ): string {
    return error
  }
}
