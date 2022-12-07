import { FC } from 'react'
import CreatePageContainer from '@/shared/widgets/create-page-container'
import StockOrderForm from '../widgets/stock-order-form'

import { useNavigate } from 'react-router-dom'

const CreateStockOrderPage: FC = () => {
  const navigate = useNavigate()

  return (
    <CreatePageContainer
      title='创建库存单'
      onBack={() => {
        navigate(-1)
      }}
    >
      <div className='w-full flex py-2.5'>
        <StockOrderForm />
      </div>
    </CreatePageContainer>
  )
}

export default CreateStockOrderPage
