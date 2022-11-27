import { db } from './cloudbase'
import { Material } from '@/domain/entities/material'

const collection = db.collection('material')

export default class MaterialService {
  static collection = collection

  static list() {
    return collection.orderBy('created_at', 'desc').get() as Promise<Response<Material>>
  }

  static create(data: Partial<Material>) {
    return collection.add(data)
  }

  static update(id: string, data: Partial<Material>) {
    return collection.doc(id).update(data)
  }

  static remove(id: string) {
    return collection.doc(id).remove()
  }
}
