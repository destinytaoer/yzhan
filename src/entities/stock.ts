/**
 * 库存货物
 */
export interface Stock extends CommonStockInfo {
  // 剩余总库存
  remnant_inventory: number
  // 批次列表
  batch_list: StockBatch[]
}

export interface CommonStockInfo {
  // 由物品类型 + 物品 id
  _id: ID
  // 存货类型
  type: StockType
  // 货物名称
  name: string
}

export enum StockType {
  Teabag = 'TEABAG',
  GiftBox = 'GIFT_BOX',
}

export const StockTypeIdPrefixMap = new Map([
  [StockType.Teabag, 'TB-'],
  [StockType.GiftBox, 'GB-'],
])

export function getStockId(id: string, type: StockType) {
  return `${StockTypeIdPrefixMap.get(type ?? '')}${id}`
}

export const StockTypeMap = new Map([
  [StockType.Teabag, '茶包'],
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