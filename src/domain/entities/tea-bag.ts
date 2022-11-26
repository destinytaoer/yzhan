import { Material } from './material'
import { PriceSet } from './price'

/**
 * 茶包
 */
export interface TeaBag {
  _id: ID
  // 名称
  name: string
  // 品类
  category: TeaBagCategory
  // 配方
  formula: TeaBagMaterial[]
  // 适合人群
  suit_crowds: SuitCrowds[]
  // 功效
  effects: string[]
  // 包装方式
  packaging: Packaging
  // 价格集合
  price_set: PriceSet
  created_at: number
  updated_at: number
}

// 用于更新和创建
export type PartialTeaBag = Partial<TeaBag> & {
  formula?: Partial<TeaBagMaterial>[]
  packaging?: Partial<Packaging>
}

/**
 * 茶包分类
 */
export enum TeaBagCategory {
  // 果饮
  FruitDrink = 'FRUIT_DRINK',
  // 花茶
  ScentedTea = 'SCENTED_TEA',
  // 汤包
  SoupStock = 'SOUP_STOCK',
  // 炖煮类
  Stew = 'STEW',
  // 滋补炖煮类
  NourishingStew = 'NOURISHING_STEW',
  // 豆类
  SoybeanMilk = 'SOYBEAN_MILK',
}

/**
 * 适合人群
 */
export enum SuitCrowds {
  // 父母养生
  Parent = 'PARENT',
  // 孩子养生
  Children = 'CHILDREN',
  // 男性养生
  Male = 'MALE',
  // 少女养生
  Female = 'FEMALE',
  // 熬夜养生
  StayUpLate = 'STAY_UP_LATE',
  // 美白养颜
  WhiteningAndBeautifying = 'WHITENING_AND_BEAUTIFYING',
  // 女生姨妈
  Menses = 'MENSES',
}

export interface TeaBagMaterial extends Material {
  quantity: number
}

/**
 * 打包方式
 */
export interface Packaging {
  type: string
  name: string
  size?: PackagingSize
}

export interface PackagingSize {
  width: number
  height: number
  unit: string
}

export function displayFormula(formula: TeaBagMaterial[]) {
  return formula.map((material) => `${material.name} ${material.quantity} ${material.unit}`).join(' + ')
}

export const SuitCrowdsMap = new Map([
  [SuitCrowds.Parent, { label: '父母养生', color: 'grey' }],
  [SuitCrowds.Children, { label: '孩子养生', color: 'cyan' }],
  [SuitCrowds.Male, { label: '男性养生', color: 'blue' }],
  [SuitCrowds.Female, { label: '少女养生', color: 'pink' }],
  [SuitCrowds.StayUpLate, { label: '熬夜养生', color: 'grey' }],
  [SuitCrowds.WhiteningAndBeautifying, { label: '美白养颜', color: 'gold' }],
  [SuitCrowds.Menses, { label: '女生姨妈', color: 'red' }],
])

export function displaySuitCrowds(suit_crowds: SuitCrowds) {
  if (suit_crowds) {
  }
}
