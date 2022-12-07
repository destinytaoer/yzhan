import { FC } from 'react'
import ListPageContainer from '@/shared/widgets/list-page-container'
import { StockOrderTable } from '@/features/stock'

const StockOrderListPage: FC = () => {
  return (
    <ListPageContainer title='出入库记录'>
      <StockOrderTable />
    </ListPageContainer>
  )
}

export default StockOrderListPage
