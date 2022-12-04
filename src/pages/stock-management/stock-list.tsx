import { FC } from 'react'
import { Button } from 'antd'
import ListPageContainer from '@/widgets/list-page-container'
import { StockTable } from '@/features/stock'
import { useNavigate } from 'react-router-dom'

const StockListPage: FC = () => {
  const navigate = useNavigate()

  return (
    <ListPageContainer
      title='库存管理'
      extraButtons={
        <Button type='primary' onClick={() => navigate('/stock/order/create')}>
          采购
        </Button>
      }
    >
      <StockTable />
    </ListPageContainer>
  )
}

export default StockListPage
