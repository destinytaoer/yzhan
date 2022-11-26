import { db } from './cloudbase'
import { TeaBag, PartialTeaBag } from '@/domain/entities/tea-bag'

export default class TeaBagService {
  static collection = 'tea-bag'

  static list() {
    return db.collection(TeaBagService.collection).get() as Promise<Response<TeaBag>>
  }

  static create(data: PartialTeaBag) {
    return db.collection(TeaBagService.collection).add(data)
  }

  static update(id: string, data: PartialTeaBag) {
    return db.collection(TeaBagService.collection).doc(id).update(data)
  }

  static remove(id: string) {
    return db.collection(TeaBagService.collection).doc(id).remove()
  }
}
