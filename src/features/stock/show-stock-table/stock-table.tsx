import { FC, memo } from 'react'
import { Table } from 'antd'
import TableActions from '@/widgets/table-actions'

import { useRequest } from 'ahooks'
import StockService from '@/domain/services/stock'
import { Stock, displayStockType } from '@/domain/entities/stock'
import { ColumnType } from 'antd/es/table'

const StockTable: FC = () => {
  const { data } = useRequest(StockService.getStocks)
  const { data: list = [] } = data ?? {}

  const columns: ColumnType<Stock>[] = [
    { dataIndex: 'goods_name', title: '名称' },
    {
      dataIndex: 'goods_type',
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
                onClick: () => {},
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
    </>
  )
}

export default memo(StockTable)
