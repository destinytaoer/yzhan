import { FC } from 'react'
import { Button } from 'antd'
import { TeaBagTable } from '@/features/tea-bag'

import { useRequest } from 'ahooks'
import TeaBagService from '@/domain/services/tea-bag'

const TeaBagPage: FC = () => {
  const { data, refresh } = useRequest(TeaBagService.list)
  const { data: list = [] } = data ?? {}

  return (
    <div className='page-container'>
      <div className='page-main'>
        <div className='page-header'>
          <h2 className='page-title'>茶包管理</h2>
          <Button type='primary' onClick={() => {}}>
            新建茶包
          </Button>
        </div>
        <div className='page-content'>
          <TeaBagTable list={list} renderActions={() => null} />
        </div>
      </div>
    </div>
  )
}

export default TeaBagPage
