import { FC } from 'react'
import { Table, TableColumnType } from 'antd'
import { displayStockType } from '@/entities/stock'
import TableActions from '@/widgets/table-actions'
import { useRequest } from 'ahooks'
import StockService from '@/services/stock'
import { StockOrder } from '@/entities/stock-order'

const StockOrderTable: FC = () => {
  const { data } = useRequest(StockService.getStockOrders)
  const { data: list = [] } = data ?? {}

  const columns: TableColumnType<StockOrder>[] = [
    { dataIndex: '_id', title: '库存单号' },
    {
      dataIndex: 'type',
      title: '类型',
      render(type) {
        return displayStockType(type)
      },
    },
    {
      dataIndex: 'total_price',
      title: '总价值',
    },
    {
      dataIndex: 'order_id',
      title: '关联订单',
    },
    {
      dataIndex: 'created_at',
      title: '创建时间',
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

  return <Table rowKey='_id' dataSource={list} columns={columns} />
}

export default StockOrderTable