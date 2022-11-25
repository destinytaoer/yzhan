export interface GradientPrice {
  // 多少个起
  start: number
  // 价格
  price: number
}

export interface PriceSet {
  // 梯度批发价
  gradient_wholesale_price?: GradientPrice[]
  // 预置代理价
  agency_price?: number
  // 建议零售价
  recommended_retail_price?: number
}
