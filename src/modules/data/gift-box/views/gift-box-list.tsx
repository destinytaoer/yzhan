import { FC } from 'react'
import { Button } from 'antd'
import ListPageContainer from '@/shared/widgets/list-page-container'
import GiftBoxTable from '../widgets/list-table'
import MaterialActions from '../widgets/list-actions'
import GiftBoxDetail from '../widgets/detail-drawer'

import { useRequest } from 'ahooks'
import { useModal } from '@/shared/hooks/useModal'
import GiftBoxService from '../services'
import { GiftBox } from '../models'
import CreateOrEditGiftBoxModal from '@/modules/data/gift-box/widgets/create-or-edit-modal'

const GiftBoxListPage: FC = () => {
  const { data, refresh } = useRequest(GiftBoxService.list)
  const { data: list = [] } = data ?? {}

  const [detailDraw, showDetailDraw] = useModal<GiftBox>()
  const [createOrEditModal, showCreateOrEditModal] = useModal<GiftBox | undefined>()

  return (
    <ListPageContainer
      title='礼盒管理'
      extraButtons={
        <Button type='primary' onClick={() => showCreateOrEditModal(undefined)}>
          新建礼盒
        </Button>
      }
    >
      <GiftBoxTable
        list={list}
        renderActions={(data) => <MaterialActions data={data} onDetail={showDetailDraw} onEdit={showCreateOrEditModal} onSuccess={refresh} />}
      />
      <GiftBoxDetail modalRef={detailDraw} />
      <CreateOrEditGiftBoxModal modalRef={createOrEditModal} onSuccess={refresh} />
    </ListPageContainer>
  )
}

export default GiftBoxListPage
