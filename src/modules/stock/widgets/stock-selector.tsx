import { FC } from 'react'
import { Form, InputNumber, Button, Select, Row, Col } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { CommonStockInfo } from '../model/stock'

interface IStockSelectorProps {
  fieldName: string
  stockList: CommonStockInfo[]
}

const StockSelector: FC<IStockSelectorProps> = ({ fieldName, stockList }) => {
  return (
    <Form.List name={fieldName}>
      {(fields, { add, remove }) => (
        <div>
          <Row className='mb-4'>
            <Col span={8}>
              <span>茶包:</span>
            </Col>
            <Col span={6}>
              <span>数量:</span>
            </Col>
            <Col span={6}>
              <span>价格:</span>
            </Col>
            <Col span={4}>
              <MinusCircleOutlined className='hidden' />
            </Col>
          </Row>
          <div>
            {fields.map(({ key, name, ...restField }) => (
              <Row key={key} align='middle' gutter={10}>
                <Col span={8}>
                  <Form.Item {...restField} name={[name, '_id']} rules={[{ required: true, message: '请选择商品' }]}>
                    <Select placeholder='选择库存商品'>
                      {stockList.map((item) => (
                        <Select.Option key={item._id} value={item._id}>
                          {item.name}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item {...restField} name={[name, 'count']} rules={[{ required: true, message: '请输入数量' }]}>
                    <InputNumber placeholder='数量' />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item {...restField} name={[name, 'price']} rules={[{ required: true, message: '请输入价格' }]}>
                    <InputNumber placeholder='价格' />
                  </Form.Item>
                </Col>
                <Col span={4}>
                  <MinusCircleOutlined className='h-8 mb-6' onClick={() => remove(name)} />
                </Col>
              </Row>
            ))}
          </div>
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
        </div>
      )}
    </Form.List>
  )
}

export default StockSelector
