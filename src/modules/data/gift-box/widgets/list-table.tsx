import { FC, ReactNode } from 'react'
import { Table, TableColumnType } from 'antd'
import { GiftBox } from '../models'

interface IGiftBoxTableProps {
  list: GiftBox[]
  renderActions: (data: GiftBox) => ReactNode
}

const GiftBoxTable: FC<IGiftBoxTableProps> = ({ list, renderActions }) => {
  const columns: TableColumnType<GiftBox>[] = [
    {
      dataIndex: '_id',
      title: 'ID',
      width: 300,
      ellipsis: true,
    },
    { dataIndex: 'name', title: '名称' },
    {
      dataIndex: 'action',
      title: '操作',
      width: 200,
      render(_, data) {
        return renderActions(data)
      },
    },
  ]

  return <Table rowKey='_id' dataSource={list} columns={columns} />
}

export default GiftBoxTable
