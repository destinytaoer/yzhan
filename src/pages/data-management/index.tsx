import { Link, RouteObject } from 'react-router-dom'
import { MenuProps } from 'antd'
import { DatabaseOutlined } from '@ant-design/icons'
import MaterialPage from './material'
import TeabagPage from './teabag'
import GiftBoxPage from './gift-box'

export const DataManagementRoute: RouteObject[] = [
  {
    path: '/data/material',
    element: <MaterialPage />,
  },
  {
    path: '/data/teabag',
    element: <TeabagPage />,
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
    label: <Link to='/data/teabag'>茶包管理</Link>,
    key: 'teabag',
  },
  {
    label: <Link to='/data/gift-box'>礼盒管理</Link>,
    key: 'gift-box',
  },
]
