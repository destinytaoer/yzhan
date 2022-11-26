import { FC, ReactNode } from 'react'
import { Table } from 'antd'
import { TeaBag } from '@/domain/entities/tea-bag'
import type { ColumnType } from 'antd/es/table'

interface ITeaBagTableProps {
  list: TeaBag[]
  renderActions: (data: TeaBag) => ReactNode
}

const TeaBagTable: FC<ITeaBagTableProps> = ({ list, renderActions }) => {
  const columns: ColumnType<TeaBag>[] = [
    {
      dataIndex: '_id',
      title: 'ID',
      width: 300,
      ellipsis: true,
    },
    { dataIndex: 'name', title: '名称' },
    {
      dataIndex: 'category',
      title: '分类',
    },
    {
      dataIndex: 'formula',
      title: '配方',
    },
    {
      dataIndex: 'suit_crowds',
      title: '适合人群',
    },
    {
      dataIndex: 'effects',
      title: '功效',
    },
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

export default TeaBagTable
