import * as fetchImport from "isomorphic-unfetch"

const fetch = (
  fetchImport.default || fetchImport
) as typeof fetchImport.default

export interface HttpArg extends RequestInit {
  error?: boolean
  full?: boolean
  store?: boolean
  text?: boolean
}

export type HttpReturn = string | object

export class Http {
  public static listeners = ["http", "httpError"]

  public static async http(
    id: string[], url: string, arg: HttpArg = {}
  ): Promise<HttpReturn> {
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

      body = arg.full ? { body, ok, status, url } : body

      return body
    }
  }

  public static httpError(
    id: string[], error: string
  ): string {
    return error
  }
}
