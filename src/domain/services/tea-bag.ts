import { TeaBag, PartialTeaBag } from '@/domain/entities/tea-bag'
import { db } from './cloudbase'
import { teaBagApi } from './apis'
import request from './request'

const collection = db.collection('tea-bag')

export default class TeaBagService {
  static collection = collection

  static list() {
    return request.get<Response<TeaBag>>(teaBagApi.list)
  }

  static create(data: PartialTeaBag) {
    return collection.add(data)
  }

  static update(id: string, data: PartialTeaBag) {
    return collection.doc(id).update(data)
  }

  static remove(id: string) {
    return collection.doc(id).remove()
  }
}
