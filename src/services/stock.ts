import { app, db } from '@/services/cloudbase'
import request from './request'
import { stockApi } from '@/services/apis'
import { Stock } from '@/entities/stock'
import { CreateStockOrder, StockOrder } from '@/entities/stock-order'

const _ = db.command
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

  static createStockOrder(createData: CreateStockOrder) {
    // return request.post(stockApi.createOrder, createData)
    return app.callFunction({
      // 云函数名称
      name: 'create-stock-order',
      // 传给云函数的参数
      data: createData,
    })
  }
}
