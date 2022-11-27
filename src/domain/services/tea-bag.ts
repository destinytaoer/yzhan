import { db } from './cloudbase'
import { TeaBag, PartialTeaBag } from '@/domain/entities/tea-bag'

const collection = db.collection('tea-bag')

export default class TeaBagService {
  static collection = collection

  static list() {
    return collection.get() as Promise<Response<TeaBag>>
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
