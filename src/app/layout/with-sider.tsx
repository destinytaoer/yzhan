import { FC } from 'react'
import { Layout, Menu, MenuProps } from 'antd'
import { Outlet } from 'react-router-dom'
import GlobalFooter from '@/widgets/footer'

const { Content, Sider } = Layout

interface IWithSiderLayoutProps {
  menus: MenuProps['items']
}

const WithSiderLayout: FC<IWithSiderLayoutProps> = ({ menus }) => {
  return (
    <Layout className='h-full'>
      <Sider theme='light' width={300}>
        <Menu theme='light' className='flex-auto justify-end min-w-0' items={menus} />
      </Sider>
      <Layout>
        <Content>
          <Outlet />
        </Content>
        <GlobalFooter />
      </Layout>
    </Layout>
  )
}

export default WithSiderLayout
