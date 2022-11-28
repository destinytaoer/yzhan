import { db } from './cloudbase'
import { Material } from '@/domain/entities/material'
import { getMaterials } from '../apis/material'

const collection = db.collection('material')

export default class MaterialService {
  static collection = collection

  static list() {
    return getMaterials()
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
