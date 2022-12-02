import { FC, ReactNode } from 'react'
import { Table, Tag } from 'antd'
import { displayEffects, displayFormula, displaySuitCrowds, displayTeabagCategory, Teabag } from '@/entities/teabag'
import type { ColumnType } from 'antd/es/table'

interface ITeabagTableProps {
  list: Teabag[]
  renderActions: (data: Teabag) => ReactNode
}

const TeabagTable: FC<ITeabagTableProps> = ({ list, renderActions }) => {
  const columns: ColumnType<Teabag>[] = [
    // {
    //   dataIndex: '_id',
    //   title: 'ID',
    //   width: 100,
    //   ellipsis: true,
    // },
    { dataIndex: 'name', title: '名称' },
    {
      dataIndex: 'category',
      title: '分类',
      width: 100,
      render(category) {
        return displayTeabagCategory(category)
      },
    },
    {
      dataIndex: 'formula',
      title: '配方',
      render(formula) {
        return (
          <div>
            {displayFormula(formula).map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        )
      },
    },
    {
      dataIndex: 'suit_crowds',
      title: '适合人群',
      render(suit_crowds) {
        return (
          <div>
            {displaySuitCrowds(suit_crowds).map((item) => {
              const { color, label } = item
              return <Tag color={color}>{label}</Tag>
            })}
          </div>
        )
      },
    },
    {
      dataIndex: 'effects',
      title: '功效',
      render(effects) {
        return displayEffects(effects)
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

export default TeabagTable
