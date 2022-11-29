import { Goods } from '@/domain/entities/goods'

/**
 * 出入库单
 */
export interface StockOrder {
  // 订单号
  _id: ID
  // 出入库类型
  type: StockOrderType
  // 商品列表
  goods_list: Goods[]
  // 总价
  total_price: number
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
