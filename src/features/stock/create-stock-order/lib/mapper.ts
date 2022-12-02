import { CreateStockOrder, PartialStock, StockOrderType } from '@/entities/stock-order'
import { CommonStockInfo } from '@/entities/stock'

export interface StockFormData {
  _id: string
  count?: number
  price?: number
}

export interface StockOrderFormData {
  type: StockOrderType
  teabagList: StockFormData[]
}

// 创建表单数据转换为库存订单数据
export function createFormToCreateData(createForm: StockOrderFormData, commonStockList: CommonStockInfo[]): CreateStockOrder {
  const { type, teabagList } = createForm
  const stock_list = stockFormListToStockList(teabagList, commonStockList)
  return {
    type,
    stock_list
  }
}

export function stockFormListToStockList(teabagList: StockFormData[], commonStockList: CommonStockInfo[]): PartialStock[] {
  return teabagList.map((item) => {
    const stock = commonStockList.find((s) => item._id === s._id)
    return {
      ...stock,
      batch_list: [
        {
          stock_price: item.price ?? 0,
          total: item.count ?? 0,
        },
      ],
    }
  })
}
