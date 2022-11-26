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
  agency_price?: number | null
  // 建议零售价
  recommended_retail_price?: number | null
}

export function displayGradientPrice(gradientPrice: GradientPrice[] = []) {
  if (gradientPrice.length === 0) return ['']
  if (gradientPrice.length === 1) return [gradientPrice[0].price.toString()]

  return gradientPrice.map((item) => {
    const { start, price } = item
    return `${start} 数量起 - ${price}元`
  })
}
