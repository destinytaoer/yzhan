/**
 * 原材料
 */
export interface Material {
  _id_: ID
  name: string
  category: MaterialCategory
  preset_wholesale_price?: number
  recommended_retail_price?: number
  unit: string
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
