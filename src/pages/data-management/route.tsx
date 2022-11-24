import DataManagement from '.'
import MaterialPage from './material'
import TeaBagPage from './tea-bag'
import GiftBoxPage from './gift-box'
import { RouteObject } from 'react-router-dom'

const DataManagementRoute: RouteObject = {
  path: '/data',
  element: <DataManagement />,
  children: [
    {
      path: '/material',
      element: <MaterialPage />,
    },
    {
      path: '/tea-bag',
      element: <TeaBagPage />,
    },
    {
      path: 'gift-box',
      element: <GiftBoxPage />,
    },
  ],
}

export default DataManagementRoute
