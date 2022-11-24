import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout'
import ErrorPage from '@/pages/error'
import NotFoundPage from '@/pages/not-found'
import HomePage from '@/pages/home'

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
      {
        path: '/',
        element: <HomePage />,
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
