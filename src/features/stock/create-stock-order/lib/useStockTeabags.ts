import { useMemo } from 'react'
import { useRequest } from 'ahooks'
import TeabagService from '@/services/teabag'
import { getStockId, StockType } from '@/entities/stock'

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
