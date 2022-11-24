import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout'
import ErrorPage from '@/pages/error'
import NotFoundPage from '@/pages/not-found'
import HomePage from '@/pages/home'
import DataManagementRoute from '@/pages/data-management/route'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/home',
        element: <HomePage />,
      },
      DataManagementRoute,
      {
        path: '/',
        element: <HomePage />,
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
