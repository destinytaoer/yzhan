import { PriceSet } from '@/shared/model/price'

/**
 * 礼盒
 */
export interface GiftBox {
  _id: ID
  name: string
  // 图片
  image?: string
  description?: string
  price_set?: PriceSet
  created_at: string
  updated_at: string
}
