import { Link, RouteObject } from 'react-router-dom'
import { MenuProps } from 'antd'
import { DatabaseOutlined } from '@ant-design/icons'
import { MaterialListPage } from './material'
import { TeabagListPage } from './teabag'
import { GiftBoxListPage } from './gift-box'

export const Route: RouteObject[] = [
  {
    path: '/data/material',
    element: <MaterialListPage />,
  },
  {
    path: '/data/teabag',
    element: <TeabagListPage />,
  },
  {
    path: '/data/gift-box',
    element: <GiftBoxListPage />,
  },
]

export const MenuItems: MenuProps['items'] = [
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
