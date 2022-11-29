import { GoodsType } from './goods'

/**
 * 库存货物
 */
export interface Stock {
  _id: ID
  // 存货类型
  goods_type: GoodsType
  // 货物对应 id
  goods_id: ID
  // 剩余总库存
  remnant_inventory: number
  // 批次列表
  batch_list: StockBatch[]
}

export interface StockBatch {
  // 批次号, 对应入库单号
  batch_no: ID
  // 进货价
  stock_price: number
  // 进货日期
  stock_time: string
  // 进货总数
  total: number
  // 剩余库存
  remain: number
}
