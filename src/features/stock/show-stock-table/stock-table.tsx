import { FC, memo } from 'react'
import { Table, TableColumnType } from 'antd'
import TableActions from '@/widgets/table-actions'
import StockDetail from './stock-detail'

import { useRequest } from 'ahooks'
import { useModal } from '@/shared/hooks/useModal'
import StockService from '@/services/stock'
import { Stock, displayStockType } from '@/entities/stock'

const StockTable: FC = () => {
  const { data } = useRequest(StockService.getStocks)
  const { data: list = [] } = data ?? {}

  const [detailDraw, showDetailDraw] = useModal<Stock>()

  const columns: TableColumnType<Stock>[] = [
    { dataIndex: 'name', title: '名称' },
    {
      dataIndex: 'type',
      title: '类型',
      render(type) {
        return displayStockType(type)
      },
    },
    {
      dataIndex: 'remnant_inventory',
      title: '剩余库存',
    },
    {
      dataIndex: 'action',
      title: '操作',
      render(_, data) {
        return (
          <TableActions
            actions={[
              {
                key: 'detail',
                text: '详情',
                onClick: () => showDetailDraw(data),
              },
            ]}
          />
        )
      },
    },
  ]

  return (
    <>
      <Table rowKey='_id' dataSource={list} columns={columns} />
      <StockDetail modalRef={detailDraw} />
    </>
  )
}

export default memo(StockTable)
