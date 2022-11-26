import { db } from './cloudbase'
import { Material } from '@/domain/entities/material'

export default class MaterialService {
  static collection = 'material'

  static list() {
    return db.collection(MaterialService.collection).get() as Promise<Response<Material>>
  }

  static create(data: Partial<Material>) {
    return db.collection(MaterialService.collection).add(data)
  }

  static update(id: string, data: Partial<Material>) {
    return db.collection(MaterialService.collection).doc(id).update(data)
  }

  static remove(id: string) {
    return db.collection(MaterialService.collection).doc(id).remove()
  }
}
