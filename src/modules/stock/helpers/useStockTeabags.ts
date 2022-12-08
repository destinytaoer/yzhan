import { useMemo } from 'react'
import { useRequest } from 'ahooks'
import { TeabagService } from '@/modules/data/teabag'
import { getStockId, StockType } from '../models/stock'

export const useStockTeabags = () => {
  const { data, loading } = useRequest(TeabagService.list)
  const { data: teabagList = [] } = data ?? {}
  const stockTeabags = useMemo(
    () =>
      teabagList.map((item) => ({
        _id: getStockId(item._id, StockType.Teabag),
        type: StockType.Teabag,
        name: item.name,
      })),
    [teabagList],
  )

  return [loading, stockTeabags] as const
}
