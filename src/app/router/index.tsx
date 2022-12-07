import { createBrowserRouter } from 'react-router-dom'
import { GlobalLayout, WithSiderLayout, NoSiderLayout } from '../layout'
import { HomePage } from '@/modules/home'
import { DataManagementRouter } from '@/modules/data'
import { StockRouter } from '@/modules/stock'
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
        element: <WithSiderLayout menus={StockRouter.MenuItems} />,
        children: StockRouter.Route,
      },
      {
        path: '/data',
        element: <WithSiderLayout menus={DataManagementRouter.MenuItems} />,
        children: DataManagementRouter.Route,
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
