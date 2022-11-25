import { PriceSet } from './price'

/**
 * 原材料
 */
export interface Material {
  _id_: ID
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
  // 药材
  MedicinalMaterial = 'MEDICINAL_MATERIAL',
  // 糖
  Sugar = 'Sugar',
}
