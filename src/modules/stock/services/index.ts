import request from '@/shared/aspects/request'
import { db } from '@/shared/aspects/cloudbase'
import { Stock } from '../models/stock'
import { CreateStockOrder, StockOrder } from '../models/stock-order'

export const stockApi = {
  createOrder: '/stock/order/create',
  list: '/stock/list',
}

export default class StockService {
  static getStocks() {
    return request.get<ListResponse<Stock>>(stockApi.list)
  }

  static getStockOrders() {
    return db.collection('stock-order').orderBy('created_at', 'desc').get() as Promise<ListResponse<StockOrder>>
  }

  static createStockOrder(data: CreateStockOrder) {
    return request.post(stockApi.createOrder, data)
  }
}
