/**
 * 库存货物
 */
export interface Stock {
  // 由物品类型 + 物品 id
  _id: ID
  // 存货类型
  type: StockType
  // 货物名称
  name: string
  // 剩余总库存
  remnant_inventory: number
  // 批次列表
  batch_list: StockBatch[]
}

export enum StockType {
  TeaBag = 'TEA_BAG',
  GiftBox = 'GiftBox',
}

export const StockTypeMap = new Map([
  [StockType.TeaBag, '茶包'],
  [StockType.GiftBox, '礼盒'],
])

export function displayStockType(type?: StockType) {
  if (!type) return ''
  return StockTypeMap.get(type) ?? '未知'
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
