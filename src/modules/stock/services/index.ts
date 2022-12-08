import request from '@/shared/aspects/request'
import { db } from '@/shared/aspects/cloudbase'
import { Stock } from '../models/stock'
import { CreateStockOrder, StockOrder } from '../models/stock-order'

export const stockApi = {
  createOrder: '/stock/order/create',
}

export default class StockService {
  static getStocks() {
    return (
      db
        .collection('stock')
        // .where({ remnant_inventory: _.gt(0) })
        .orderBy('remnant_inventory', 'desc')
        .get() as Promise<ListResponse<Stock>>
    )
  }

  static getStockOrders() {
    return db.collection('stock-order').orderBy('created_at', 'desc').get() as Promise<ListResponse<StockOrder>>
  }

  static createStockOrder(data: CreateStockOrder) {
    return request.post(stockApi.createOrder, data)
  }
}
