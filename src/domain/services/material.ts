import { Material } from '@/domain/entities/material'
import { db } from './cloudbase'
import { materialApi } from './apis'
import request from './request'

const collection = db.collection('material')

export default class MaterialService {
  static collection = collection

  static list() {
    return request.get<Response<Material>>(materialApi.list)
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
