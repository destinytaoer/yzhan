import { FC } from 'react'
import { Button } from 'antd'
import ListPageContainer from '@/widgets/list-page-container'
import { useNavigate } from 'react-router-dom'

const StockListPage: FC = () => {
  const navigate = useNavigate()

  return (
    <ListPageContainer
      title='库存管理'
      extraButtons={
        <Button type='primary' onClick={() => navigate('/stock/order/create')}>
          出入库
        </Button>
      }
    >
      StockListPage
    </ListPageContainer>
  )
}

export default StockListPage
