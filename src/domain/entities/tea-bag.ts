import { Material } from './material'
import { PriceSet } from './price'

/**
 * 茶包
 */
export interface TeaBag {
  _id: ID
  // 名称
  name: string
  // 编号
  no: string
  // 品类
  category: TeaBagCategory
  // 配方
  formula: TeaBagMaterial[]
  // 适合人群
  suit_crowds: SuitCrowds[]
  // 功效
  effects: string[]
  // 包装方式
  packaging?: Packaging
  // 价格集合
  price_set: PriceSet
  created_at: string
  updated_at: string
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
  // 养生类
  HealthPreservation = 'HEALTH_PRESERVATION',
  // 调理类
  Recuperate = 'RECUPERATE',
  // 汤包
  SoupStock = 'SOUP_STOCK',
  // 炖煮类
  Stew = 'STEW',
  // 滋补炖煮类
  NourishingStew = 'NOURISHING_STEW',
  // 豆类
  SoybeanMilk = 'SOYBEAN_MILK',
}

export const TeaBagCategoryMap = new Map([
  [TeaBagCategory.FruitDrink, '果饮'],
  [TeaBagCategory.ScentedTea, '花茶'],
  [TeaBagCategory.HealthPreservation, '养生类'],
  [TeaBagCategory.Recuperate, '调理类'],
  [TeaBagCategory.SoupStock, '汤包'],
  [TeaBagCategory.Stew, '炖煮类'],
  [TeaBagCategory.NourishingStew, '滋补炖煮类'],
  [TeaBagCategory.SoybeanMilk, '豆类'],
])

export function displayTeaBagCategory(category: TeaBagCategory) {
  return TeaBagCategoryMap.get(category) ?? '未知'
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
  // 办公室
  Office = 'OFFICE',
}

export const SuitCrowdsMap = new Map([
  [SuitCrowds.Parent, { label: '父母养生', color: 'grey' }],
  [SuitCrowds.Children, { label: '孩子养生', color: 'cyan' }],
  [SuitCrowds.Male, { label: '男性养生', color: 'blue' }],
  [SuitCrowds.Female, { label: '少女养生', color: 'pink' }],
  [SuitCrowds.StayUpLate, { label: '熬夜养生', color: 'grey' }],
  [SuitCrowds.WhiteningAndBeautifying, { label: '美白养颜', color: 'gold' }],
  [SuitCrowds.Menses, { label: '女生姨妈', color: 'red' }],
  [SuitCrowds.Office, { label: '办公室', color: 'grey' }],
])

export function displaySuitCrowds(suit_crowds: SuitCrowds[]) {
  if (!suit_crowds) return []

  return suit_crowds
    .map((suit_crowd) => {
      return SuitCrowdsMap.get(suit_crowd)!
    })
    .filter((item) => !!item)
}

export interface TeaBagMaterial extends Material {
  // 数量, 以字符串主要考虑到是以展示为主, 为了更加灵活
  // 满足 1-2 等情况
  quantity: string
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
  return formula.map((material) => `${material.name} ${material.quantity} ${material.unit}`)
}

export function displayEffects(effects: string[]) {
  return effects.join('|')
}

export function splitEffects(effects: string) {
  return effects.split('|').map((item) => item.trim())
}
