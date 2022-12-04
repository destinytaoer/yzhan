import { FC } from 'react'
import { Form, Button, Radio, message } from 'antd'
import StockSelector from './stock-selector'
import { StockOrderType, StockOrderTypeMap } from '@/entities/stock-order'
import { useStockTeabags } from '../lib/useStockTeabags'
import { createFormToCreateData, StockOrderFormData } from '../lib/mapper'
import StockService from '@/services/stock'
import { useRequest } from 'ahooks'
import { useNavigate } from 'react-router-dom'

const StockOrderForm: FC = () => {
  const navigate = useNavigate()
  // 获取茶包数据
  const [loading, stockTeabags] = useStockTeabags()
  const { loading: createLoading, run: createOrder } = useRequest(StockService.createStockOrder, {
    manual: true,
    onSuccess: () => {
      message.success('创建成功')
      navigate(-1)
    },
  })

  const [form] = Form.useForm<StockOrderFormData>()

  const onFinish = (values: StockOrderFormData) => {
    const orderData = createFormToCreateData(values, stockTeabags)
    console.log('createOrder', orderData)
    createOrder(orderData)
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
          {/*{[...StockOrderTypeMap.entries()].map(([value, label]) => (*/}
          <Radio.Button key={StockOrderType.Purchase} value={StockOrderType.Purchase}>
            {StockOrderTypeMap.get(StockOrderType.Purchase)}
          </Radio.Button>
          {/*))}*/}
        </Radio.Group>
      </Form.Item>
      <Form.Item label='选择茶包'></Form.Item>
      <StockSelector fieldName='teabagList' stockList={stockTeabags} />
      <Form.Item>
        <Button type='primary' htmlType='submit' loading={createLoading}>
          创建
        </Button>
      </Form.Item>
    </Form>
  )
}

export default StockOrderForm
