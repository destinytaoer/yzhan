import { FC } from 'react'
import { Button } from 'antd'
import ListPageContainer from '@/shared/widgets/list-page-container'
import { TeabagTable, TeabagDetail, TeabagActions, CreateOrEditTeabagModal } from '@/features/teabag'

import { useRequest } from 'ahooks'
import { useModal } from '@/shared/hooks/useModal'
import TeabagService from '@/services/teabag'
import { Teabag } from '@/entities/teabag'

const TeabagPage: FC = () => {
  const { data, refresh } = useRequest(TeabagService.list)
  const { data: list = [] } = data ?? {}

  const [detailDraw, showDetailDraw] = useModal<Teabag>()
  const [createOrEditModal, showCreateOrEditModal] = useModal<Teabag | undefined>()

  return (
    <ListPageContainer
      title='茶包管理'
      extraButtons={
        <Button type='primary' onClick={() => showCreateOrEditModal(undefined)}>
          新建茶包
        </Button>
      }
    >
      <TeabagTable
        list={list}
        renderActions={(data) => (
          <TeabagActions data={data} onDetail={showDetailDraw} onEdit={() => showCreateOrEditModal(data)} onSuccess={refresh} />
        )}
      />
      <TeabagDetail modalRef={detailDraw} />
      <CreateOrEditTeabagModal modalRef={createOrEditModal} onSuccess={refresh} />
    </ListPageContainer>
  )
}

export default TeabagPage
