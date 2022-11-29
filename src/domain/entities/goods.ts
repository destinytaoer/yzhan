/**
 * 用于各种订单的商品(快照形式)
 */
export interface Goods {
  // 商品对应 id
  _id: ID
  // 商品类型
  type: GoodsType
  name: string
  // 价格
  // 数量
}

export enum GoodsType {
  TeaBag = 'TEA_BAG',
  GiftBox = 'GiftBox',
}

export const GoodsTypeMap = new Map([
  [GoodsType.TeaBag, '茶包'],
  [GoodsType.GiftBox, '礼盒'],
])
