import { FC } from 'react'
import { Layout, Menu, MenuProps } from 'antd'
import { Link } from 'react-router-dom'
import { DatabaseOutlined } from '@ant-design/icons'
import Logo from '@/shared/widgets/logo'

const { Header } = Layout

const items: MenuProps['items'] = [
  {
    label: <Link to='/data'>基础数据</Link>,
    key: 'data',
    icon: <DatabaseOutlined />,
  },
  {
    label: <Link to='/package'>套餐管理</Link>,
    key: 'package',
  },
  {
    label: <Link to='/stock'>库存管理</Link>,
    key: 'stock',
  },
  {
    label: <Link to='/order'>订单管理</Link>,
    key: 'order',
  },
  {
    label: <Link to='/user'>用户管理</Link>,
    key: 'user',
  },
]

const GlobalHeader: FC = () => {
  return (
    <Header className='flex justify-between items-center px-10 h-16'>
      <Link to={'/'}>
        <Logo />
      </Link>
      <Menu theme='dark' className='flex-auto justify-end min-w-0' selectable={false} mode='horizontal' items={items} />
    </Header>
  )
}

export default GlobalHeader
