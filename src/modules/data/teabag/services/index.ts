import { Teabag, PartialTeabag } from '../models'
import { db } from '@/shared/aspects/cloudbase'
import request from '@/shared/aspects/request'

const collection = db.collection('teabag')

export const teabagApi = {
  list: '/teabag/list',
  create: '/teabag/create',
}

export default class TeabagService {
  static list() {
    return request.get<ListResponse<Teabag>>(teabagApi.list)
  }

  static create(data: PartialTeabag) {
    return request.post(teabagApi.create, data)
  }

  static update(id: string, data: PartialTeabag) {
    return collection.doc(id).update(data)
  }

  static remove(id: string) {
    return collection.doc(id).remove()
  }
}
