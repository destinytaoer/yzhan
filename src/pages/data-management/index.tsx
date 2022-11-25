import MaterialPage from './material'
import TeaBagPage from './tea-bag'
import GiftBoxPage from './gift-box'
import { Link, RouteObject } from 'react-router-dom'
import { MenuProps } from 'antd'
import { DatabaseOutlined } from '@ant-design/icons'

export const DataManagementRoute: RouteObject[] = [
  {
    path: '/data/material',
    element: <MaterialPage />,
  },
  {
    path: '/data/tea-bag',
    element: <TeaBagPage />,
  },
  {
    path: '/data/gift-box',
    element: <GiftBoxPage />,
  },
]

export const DataManagementMenuItems: MenuProps['items'] = [
  {
    label: <Link to='/data'>基础数据</Link>,
    key: 'data',
    icon: <DatabaseOutlined />,
  },
  {
    label: <Link to='/data'>套餐管理</Link>,
    key: 'package',
  },
  {
    label: <Link to='/stock'>库存管理</Link>,
    key: 'stock',
  },
  {
    label: <Link to='/order'>订单管理</Link>,
    key: 'order',
  },
  {
    label: <Link to='/user'>用户管理</Link>,
    key: 'user',
  },
]
