import { FC, ReactNode } from 'react'
import { Table } from 'antd'
import { displayMaterialCategory, Material } from '@/entities/material'
import type { ColumnType } from 'antd/es/table'

interface IMaterialTableProps {
  list: Material[]
  renderActions: (data: Material) => ReactNode
}

const MaterialTable: FC<IMaterialTableProps> = ({ list, renderActions }) => {
  const columns: ColumnType<Material>[] = [
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
      render(category) {
        return displayMaterialCategory(category)
      },
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

export default MaterialTable
