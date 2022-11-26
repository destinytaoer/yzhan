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
    label: <Link to='/data/material'>原材料管理</Link>,
    key: 'material',
    icon: <DatabaseOutlined />,
  },
  {
    label: <Link to='/data/tea-bag'>茶包管理</Link>,
    key: 'tea-bag',
  },
  {
    label: <Link to='/data/gift-box'>礼盒管理</Link>,
    key: 'gift-box',
  },
]
