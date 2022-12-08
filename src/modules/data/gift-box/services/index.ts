import request from '@/shared/aspects/request'
import { GiftBox } from '../models'

export const giftBoxApi = {
  list: '/gift-box/list',
  create: '/gift-box/create',
  update: '/gift-box/update',
  remove: '/gift-box/remove',
}

export default class GiftBoxService {
  static list() {
    return request.get<ListResponse<GiftBox>>(giftBoxApi.list)
  }

  static create(data: Partial<GiftBox>) {
    return request.post(giftBoxApi.create, data)
  }

  static update(id: string, data: Partial<GiftBox>) {
    return request.post(giftBoxApi.update, { id, data })
  }

  static remove(id: string) {
    return request.post(giftBoxApi.remove, { id })
  }
}
