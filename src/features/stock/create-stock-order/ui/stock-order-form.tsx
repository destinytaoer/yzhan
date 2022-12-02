import { FC } from 'react'
import { Form, Button, Radio } from 'antd'
import StockSelector from './stock-selector'
import { StockOrderType, StockOrderTypeMap } from '@/entities/stock-order'
import { useStockTeabags } from '../lib/useStockTeabags'
import { createFormToCreateData, StockOrderFormData } from '../lib/mapper'

const StockOrderForm: FC = () => {
  // 获取茶包数据
  const [loading, stockTeabags] = useStockTeabags()

  const [form] = Form.useForm<StockOrderFormData>()

  const onFinish = (values: StockOrderFormData) => {
    const createOrder = createFormToCreateData(values, stockTeabags)
    console.log('createOrder', createOrder)
  }

  return (
    <Form
      form={form}
      className='w-full'
      onValuesChange={(changedFields) => {
        console.log(changedFields)
      }}
      initialValues={{
        type: StockOrderType.Purchase,
      }}
      onFinish={onFinish}
    >
      <Form.Item label='订单类型' name='type'>
        <Radio.Group buttonStyle='solid'>
          {[...StockOrderTypeMap.entries()].map(([value, label]) => (
            <Radio.Button key={value} value={value}>
              {label}
            </Radio.Button>
          ))}
        </Radio.Group>
      </Form.Item>
      <Form.Item label='选择茶包'></Form.Item>
      <StockSelector fieldName='teabagList' stockList={stockTeabags} />
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          创建
        </Button>
      </Form.Item>
    </Form>
  )
}

export default StockOrderForm
