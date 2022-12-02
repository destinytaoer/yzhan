import { FC, useEffect, useMemo, useState } from 'react'
import { Collapse, Form, Input, InputNumber, Space } from 'antd'

import { groupBy } from 'lodash'
import { TeabagCategory } from '@/entities/teabag'
import { PartialStock } from '@/entities/stock-order'

interface IStockSelectorProps {
  value?: PartialStock[]
  onChange?: (value: PartialStock) => void
}

const { Panel } = Collapse
const teaBags = [
  {
    _id: 'b6fb1a896385925f0013bd0d57e340b1',
    category: 'FRUIT_DRINK',
    name: '凤梨百香果',
  },
  {
    _id: 'b6fb1a896385925f0013bd0e67c841b8',
    category: 'FRUIT_DRINK',
    name: '金桔百香果',
  },
  {
    _id: 'b98fb1a898785925f0013bd0d57e340b1',
    category: 'FRUIT_DRINK',
    name: '木瓜火龙果',
  },
  {
    _id: '10fb1a896385925f0013bd0e67c841b8',
    category: 'FRUIT_DRINK',
    name: '茉香奇异果',
  },
  {
    _id: 'b6fb1a896385925f0013bd1e61410ceb',
    category: 'SCENTED_TEA',
    name: '山楂荷叶茶',
  },
  {
    _id: 'b6fb1a896385925f0013bd1f1e283a97',
    category: 'SCENTED_TEA',
    name: '润肠排毒茶',
  },
  {
    _id: 'b6fb1a896385925f0013bd1c7814a564',
    category: 'SCENTED_TEA',
    name: '白里透红茶',
  },
  {
    _id: 'b6fb1a896385925f0013bd1e61410ceb',
    category: 'SCENTED_TEA',
    name: '山楂荷叶茶',
  },
].map((item) => ({
  ...item,
  stock_id: `TB-${item._id}`,
  stock_type: 'TEA_BAG',
}))
const TeabagCategoryMap = new Map([
  [TeabagCategory.FruitDrink, '果茶'],
  [TeabagCategory.ScentedTea, '花茶'],
])

const StockSelector: FC<IStockSelectorProps> = ({ value, onChange }) => {
  // 获取茶包数据
  // const {} = useRequest()
  // 获取礼盒数据
  // const {} = useRequest()

  const [stockList, setStockList] = useState<PartialStock[]>([])
  useEffect(() => {
    setStockList(value ?? [])
  }, [value])

  const TeaBagGroups = useMemo(() => {
    return groupBy(teaBags, 'category')
  }, [teaBags])

  console.log(TeaBagGroups)

  const handleChange = (data: any, key: 'count' | 'price', value: number | null) => {
    const stock: PartialStock = {
      _id: data.stock_id,
      type: data.stock_type,
      name: data.name,
    }
  }

  return (
    <Form.List name='teabag-list'>
      {(fields) => (
        <div className='w-full'>
          {fields.slice(0, 4).map(({ key, name, ...restField }) => (
            <Collapse bordered={false} defaultActiveKey={[...TeabagCategoryMap.keys()]}>
              {[...TeabagCategoryMap.entries()].map(([category, title]) => (
                <Panel header={title} key={category}>
                  <Space direction='horizontal' wrap>
                    {TeaBagGroups[category].map((teaBag) => {
                      const stock = stockList.find((item) => item._id === teaBag.stock_id)
                      return (
                        <Input.Group size='small'>
                          <Form.Item
                            {...restField}
                            name={[name, 'count']}
                            rules={[
                              {
                                required: true,
                                message: 'Missing first name',
                              },
                            ]}
                          >
                            <InputNumber
                              style={{ width: '60%' }}
                              addonBefore={teaBag.name}
                              value={stock?.batch_list?.[0]?.total ?? 0}
                              onChange={(value) => handleChange(teaBag, 'count', value)}
                            />
                          </Form.Item>
                          <Form.Item {...restField} name={[name, 'last']} rules={[{ required: true, message: 'Missing last name' }]}>
                            <InputNumber
                              style={{ width: '30%' }}
                              addonBefore='进货价'
                              value={stock?.batch_list?.[0].stock_price ?? 0}
                              onChange={(value) => handleChange(teaBag, 'price', value)}
                            />
                          </Form.Item>
                        </Input.Group>
                      )
                    })}
                  </Space>
                </Panel>
              ))}
            </Collapse>
          ))}
        </div>
      )}
    </Form.List>
  )
}

export default StockSelector
