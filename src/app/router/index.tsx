import { createBrowserRouter } from 'react-router-dom'
import { GlobalLayout, WithSiderLayout, NoSiderLayout } from '../layout'
import ErrorPage from '@/pages/error'
import NotFoundPage from '@/pages/not-found'
import HomePage from '@/pages/home'
import { DataManagementRoute, DataManagementMenuItems } from '@/pages/data-management'
import { StockManagementRoute, StockManagementMenuItems } from '@/pages/stock-management'

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
