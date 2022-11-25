import { PriceSet } from './price'

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
