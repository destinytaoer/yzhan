/**
 * 礼盒
 */
export interface GiftBox {
  _id_: ID
  name: string
  grade: GiftBoxGrade
  wholesale_price_preset: number
  recommended_retail_price: number
  capacity: string
  description?: string
}

/**
 * 礼盒档次
 */
export enum GiftBoxGrade {
  High = 'HIGH',
  Medium = 'MEDIUM',
  Low = 'LOW',
}
