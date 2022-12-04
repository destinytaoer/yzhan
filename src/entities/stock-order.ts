import Big from 'big.js'
import { calcStockTotalPrice, Stock, StockType } from '@/entities/stock'

/**
 * 出入库单
 */
export interface StockOrder {
  // 订单号
  _id: ID
  // 出入库类型
  type: StockOrderType
  // 库存列表
  stock_list: Stock[]
  // 总价 = stock_list 总价值 = batch list 总价值
  total_price: number
  // 关联订单
  order_id?: ID
  // 创建时间
  created_at: string
}

export type CreateStockOrder = {
  type: StockOrderType
  stock_list: PartialStock[]
  total_price: number
}

export type PartialStock = {
  _id: ID
  type: StockType
  name: string
  batch_list: PartialStockBatch[]
}

export type PartialStockBatch = {
  stock_price: number
  total: number
}

// 库存订单类型
export enum StockOrderType {
  // 采购入库
  Purchase = 'PURCHASE',
  // 退货入库
  Return = 'RETURN',
  // 订单出库
  Sale = 'SALE',
}

export const StockOrderTypeMap = new Map([
  [StockOrderType.Purchase, '采购入库'],
  [StockOrderType.Return, '退货入库'],
  [StockOrderType.Sale, '订单出库'],
])

/**
 * 创建库存单时, 计算总价
 * @param stocks
 */
export function calcCreateOrderTotalPrice(stocks: PartialStock[]) {
  return stocks
    .map((stock) => calcStockTotalPrice(stock as Stock))
    .reduce((prev, cur) => {
      return Big(prev).plus(cur).toNumber()
    }, 0)
}
