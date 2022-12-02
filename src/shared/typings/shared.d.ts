type ID = string

type AnyObject = Record<string, any>

interface ListResponse<T extends AnyObject = any> {
  data: T[]
  requestId: string
  total: number
  limit: number
  offset: number
  code?: string
  message?: string
}
