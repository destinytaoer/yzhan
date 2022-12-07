import { createBrowserRouter } from 'react-router-dom'
import { GlobalLayout, WithSiderLayout, NoSiderLayout } from '../layout'
import { HomePage } from '@/modules/home'
import { DataManagementRoute, DataManagementMenuItems } from '@/modules/data'
import { StockManagementRoute, StockManagementMenuItems } from '@/modules/stock'
import ErrorPage from './error'
import NotFoundPage from './404'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <GlobalLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/stock',
        element: <WithSiderLayout menus={StockManagementMenuItems} />,
        children: StockManagementRoute,
      },
      {
        path: '/data',
        element: <WithSiderLayout menus={DataManagementMenuItems} />,
        children: DataManagementRoute,
      },
      {
        path: '/',
        element: <NoSiderLayout />,
        children: [{ index: true, element: <HomePage /> }],
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
