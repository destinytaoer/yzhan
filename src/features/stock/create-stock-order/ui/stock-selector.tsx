import { FC } from 'react'
import { Form, Input, InputNumber, Space, Button, Select } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { CommonStockInfo } from '@/entities/stock'

interface IStockSelectorProps {
  fieldName: string
  stockList: CommonStockInfo[]
}

const StockSelector: FC<IStockSelectorProps> = ({ fieldName, stockList }) => {
  return (
    <Form.List name={fieldName}>
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align='baseline'>
              <Form.Item {...restField} name={[name, '_id']} rules={[{ required: true, message: '请选择商品' }]}>
                <Select placeholder='选择库存商品'>
                  {stockList.map((item) => (
                    <Select.Option key={item._id} value={item._id}>
                      {item.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item {...restField} name={[name, 'count']} rules={[{ required: true, message: '请输入数量' }]}>
                <Input placeholder='数量' />
              </Form.Item>
              <Form.Item {...restField} name={[name, 'price']} rules={[{ required: true, message: '请输入价格' }]}>
                <Input placeholder='价格' />
              </Form.Item>
              <MinusCircleOutlined onClick={() => remove(name)} />
            </Space>
          ))}
          <Form.Item>
            <Button
              type='dashed'
              onClick={() =>
                add({
                  _id: undefined,
                  count: 0,
                  price: 0,
                })
              }
              block
              icon={<PlusOutlined />}
            >
              Add field
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  )
}

export default StockSelector
