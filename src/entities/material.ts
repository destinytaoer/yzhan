import { PriceSet } from '../shared/model/price'

/**
 * 原材料
 */
export interface Material {
  _id: ID
  // 名称
  name: string
  // 分类
  category: MaterialCategory
  // 计量单位
  unit: string
  // 价格集合
  price_set?: PriceSet
  created_at: string
  updated_at: string
}

/**
 * 材料分类
 */
export enum MaterialCategory {
  // 果干
  DriedFruit = 'DRIED_FRUIT',
  // 花
  Flower = 'FLOWER',
  // 茶
  Tea = 'TEA',
  // 中药材
  ChineseMedicine = 'CHINESE_MEDICINE',
  // 保健类
  Healthcare = 'HEALTHCARE',
  // 糖
  Sugar = 'SUGAR',
}

export const MaterialLabelMap = new Map([
  [MaterialCategory.DriedFruit, '果干'],
  [MaterialCategory.Flower, '花'],
  [MaterialCategory.Tea, '茶'],
  [MaterialCategory.ChineseMedicine, '中药材'],
  [MaterialCategory.Healthcare, '保健类'],
  [MaterialCategory.Sugar, '糖'],
])

export function displayMaterialCategory(category?: MaterialCategory) {
  if (!category) return ''
  return MaterialLabelMap.get(category) ?? '未知'
}
