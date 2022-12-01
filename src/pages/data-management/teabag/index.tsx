import { FC } from 'react'
import { Button } from 'antd'
import { TeabagTable, TeabagDetail, TeabagActions, CreateOrEditTeabagModal } from '@/features/teabag'

import { useRequest } from 'ahooks'
import { useModal } from '@/shared/hooks/useModal'
import TeabagService from '@/domain/services/teabag'
import { Teabag } from '@/domain/entities/teabag'

const TeabagPage: FC = () => {
  const { data, refresh } = useRequest(TeabagService.list)
  const { data: list = [] } = data ?? {}

  const [detailDraw, showDetailDraw] = useModal<Teabag>()
  const [createOrEditModal, showCreateOrEditModal] = useModal<Teabag | undefined>()

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
          <TeabagTable
            list={list}
            renderActions={(data) => (
              <TeabagActions data={data} onDetail={showDetailDraw} onEdit={() => showCreateOrEditModal(data)} onSuccess={refresh} />
            )}
          />
          <TeabagDetail modalRef={detailDraw} />
          <CreateOrEditTeabagModal modalRef={createOrEditModal} onSuccess={refresh} />
        </div>
      </div>
    </div>
  )
}

export default TeabagPage
