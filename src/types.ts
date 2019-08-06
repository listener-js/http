export interface HttpArg extends RequestInit {
  error?: boolean
  store?: boolean
  text?: boolean
}

export interface HttpOutput {
  body: string
  ok: boolean
  status: number
  url: string
}
