import { FC } from 'react'
import { Form, Button, Radio } from 'antd'
import { CreateStockOrder, StockOrderType, StockOrderTypeMap } from '@/domain/entities/stock-order'
import StockSelector from '@/features/stock/create-stock-order/stock-selector'

const StockOrderForm: FC = () => {
  const [form] = Form.useForm<CreateStockOrder>()

  const onFinish = (values: CreateStockOrder) => {
    console.log(values)
  }

  return (
    <Form
      form={form}
      className='w-full'
      onValuesChange={(changedFields) => {
        console.log(changedFields)
      }}
      onFinish={onFinish}
    >
      <Form.Item label='订单类型' name='type'>
        <Radio.Group defaultValue={StockOrderType.Purchase} buttonStyle='solid'>
          {[...StockOrderTypeMap.entries()].map(([value, label]) => (
            <Radio.Button key={value} value={value}>
              {label}
            </Radio.Button>
          ))}
        </Radio.Group>
      </Form.Item>
      <Form.Item label='选择库存' name='stock_list'>
        <StockSelector />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          创建
        </Button>
      </Form.Item>
    </Form>
  )
}

export default StockOrderForm
