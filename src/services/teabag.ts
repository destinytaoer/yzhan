import { Teabag, PartialTeabag } from '@/entities/teabag'
import { db } from './cloudbase'
import { teabagApi } from './apis'
import request from './request'

const collection = db.collection('teabag')

export default class TeabagService {
  static collection = collection

  static list(): Promise<Response<Teabag>> {
    return request.get(teabagApi.list)
  }

  static create(data: PartialTeabag) {
    return request.post(teabagApi.create, data)
  }

  static update(id: string, data: PartialTeabag) {
    return collection.doc(id).update(data)
  }

  static remove(id: string) {
    return collection.doc(id).remove()
  }
}
