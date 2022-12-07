import { Material } from '@/modules/data/material/model'
import request from '@/shared/aspects/request'

export const materialApi = {
  list: '/material/list',
  create: '/material/create',
  update: '/material/update',
  remove: '/material/remove',
}

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
