import { FC } from 'react'
import { Button } from 'antd'
import { TeaBagTable, CreateOrEditTeaBagModal } from '@/features/tea-bag'

import { useRequest } from 'ahooks'
import { useModal } from '@/shared/hooks/useModal'
import TeaBagService from '@/domain/services/tea-bag'
import { TeaBag } from '@/domain/entities/tea-bag'

const TeaBagPage: FC = () => {
  const { data, refresh } = useRequest(TeaBagService.list)
  const { data: list = [] } = data ?? {}

  const [createOrEditModal, showCreateOrEditModal] = useModal<TeaBag | undefined>()

  return (
    <div className='page-container'>
      <div className='page-main'>
        <div className='page-header'>
          <h2 className='page-title'>茶包管理</h2>
          <Button type='primary' onClick={() => showCreateOrEditModal(undefined)}>
            新建茶包
          </Button>
        </div>
        <div className='page-content'>
          <TeaBagTable list={list} renderActions={() => null} />
          <CreateOrEditTeaBagModal modalRef={createOrEditModal} onSuccess={refresh} />
        </div>
      </div>
    </div>
  )
}

export default TeaBagPage
