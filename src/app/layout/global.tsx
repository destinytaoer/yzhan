import { FC } from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import GlobalHeader from './components/header'

const { Content } = Layout

const GlobalLayout: FC = () => {
  return (
    <Layout className='h-screen'>
      <GlobalHeader />
      <Content>
        <Outlet />
      </Content>
    </Layout>
  )
}

export default GlobalLayout
