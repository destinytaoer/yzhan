import { Material } from '@/entities/material'
import { materialApi } from './apis'
import request from './request'

export default class MaterialService {
  static list() {
    return request.get<ListResponse<Material>>(materialApi.list)
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
