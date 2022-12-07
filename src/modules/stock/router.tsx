import { Link, RouteObject } from 'react-router-dom'
import { MenuProps } from 'antd'
import { DatabaseOutlined } from '@ant-design/icons'
import StockListPage from './views/stock-list'
import StockOrderListPage from './views/stock-order-list'
import CreateStockOrderPage from './views/create-stock-order'

export const StockManagementRoute: RouteObject[] = [
  {
    index: true,
    element: <StockListPage />,
  },
  {
    path: '/stock/order',
    element: <StockOrderListPage />,
  },
  {
    path: '/stock/order/create',
    element: <CreateStockOrderPage />,
  },
]

export const StockManagementMenuItems: MenuProps['items'] = [
  {
    label: <Link to='/stock'>库存管理</Link>,
    key: 'stock',
    icon: <DatabaseOutlined />,
  },
  {
    label: <Link to='/stock/order'>出入库记录</Link>,
    key: 'stock-order',
    icon: <DatabaseOutlined />,
  },
]
