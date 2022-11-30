import { Stock } from '@/domain/entities/stock'

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

// 采购、退货/订单
export enum StockOrderType {
  // 采购入库
  Purchase = 'PURCHASE',
  // 退货入库
  Return = 'RETURN',
  // 订单出库
  Sale = 'SALE',
}
