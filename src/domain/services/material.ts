import { Material } from '@/domain/entities/material'
import { db } from './cloudbase'
import { materialApi } from './apis'
import request from './request'

const collection = db.collection('material')

export default class MaterialService {
  static collection = collection

  static list(): Promise<Response<Material>> {
    return request.get(materialApi.list)
  }

  static create(data: Partial<Material>) {
    return request.post(materialApi.create, data)
  }

  static update(id: string, data: Partial<Material>) {
    return request.post(materialApi.update, { id, data })
  }

  static remove(id: string) {
    return request.post(materialApi.remove, { id })
  }
}
