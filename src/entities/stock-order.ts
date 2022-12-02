import { Stock, StockBatch } from '@/entities/stock'

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

export type CreateStockOrder = Partial<Omit<StockOrder, 'stock_list'>> & {
  stock_list: PartialStock[]
}

export type PartialStock = Partial<Omit<Stock, 'batch_list'>> & {
  batch_list: Partial<StockBatch>[]
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
