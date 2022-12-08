import request from '@/shared/aspects/request'
import { Stock } from '../models/stock'
import { CreateStockOrder, StockOrder } from '../models/stock-order'

export const stockApi = {
  list: '/stock/list',
  orderCreate: '/stock/order/create',
  orderList: '/stock/order/list',
}

export default class StockService {
  static getStocks() {
    return request.get<ListResponse<Stock>>(stockApi.list)
  }

  static getStockOrders() {
    return request.get<ListResponse<StockOrder>>(stockApi.orderList)
  }

  static createStockOrder(data: CreateStockOrder) {
    return request.post(stockApi.orderCreate, data)
  }
}
