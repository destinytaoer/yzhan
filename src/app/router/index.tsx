import { createBrowserRouter } from 'react-router-dom'
import { GlobalLayout, WithSiderLayout, NoSiderLayout } from '../layout'
import ErrorPage from '@/pages/error'
import NotFoundPage from '@/pages/not-found'
import HomePage from '@/pages/home'
import { DataManagementRoute, DataManagementMenuItems } from '@/pages/data-management'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <GlobalLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/data',
        element: <WithSiderLayout menus={DataManagementMenuItems} />,
        children: DataManagementRoute,
      },
      {
        path: '/',
        element: <NoSiderLayout />,
        children: [{ path: '/', element: <HomePage /> }],
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
