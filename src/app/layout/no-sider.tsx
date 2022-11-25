import { FC } from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import GlobalFooter from '@/widgets/footer'

const { Content } = Layout

const NoSiderLayout: FC = () => {
  return (
    <Layout className='h-full'>
      <Content>
        <Outlet />
      </Content>
      <GlobalFooter />
    </Layout>
  )
}

export default NoSiderLayout
