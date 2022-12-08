import { FC } from 'react'
import { Button } from 'antd'
import ListPageContainer from '@/shared/widgets/list-page-container'
import TeabagTable from '../widgets/list-table'
import TeabagActions from '../widgets/list-actions'
import TeabagDetail from '../widgets/detail-drawer'
import CreateOrEditTeabagModal from '../widgets/create-or-edit-modal'

import { useRequest } from 'ahooks'
import { useModal } from '@/shared/hooks/useModal'
import TeabagService from '../services'
import { Teabag } from '../models'

const TeabagListPage: FC = () => {
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

export default TeabagListPage
