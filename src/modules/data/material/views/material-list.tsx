import { FC } from 'react'
import { Button } from 'antd'
import ListPageContainer from '@/shared/widgets/list-page-container'
import MaterialTable from '../widgets/list-table'
import MaterialActions from '../widgets/list-actions'
import MaterialDetail from '../widgets/detail-drawer'
import CreateOrEditMaterialModal from '../widgets/create-or-edit-modal'

import { useModal } from '@/shared/hooks/useModal'
import { useRequest } from 'ahooks'
import MaterialService from '../service'
import { Material } from '../model'

const MaterialListPage: FC = () => {
  const { data, refresh } = useRequest(MaterialService.list)
  const { data: list = [] } = data ?? {}

  const [detailDraw, showDetailDraw] = useModal<Material>()
  const [createOrEditModal, showCreateOrEditModal] = useModal<Material | undefined>()

  return (
    <ListPageContainer
      title='原材料管理'
      extraButtons={
        <Button type='primary' onClick={() => showCreateOrEditModal(undefined)}>
          新建材料
        </Button>
      }
    >
      <MaterialTable
        list={list}
        renderActions={(data) => <MaterialActions data={data} onDetail={showDetailDraw} onEdit={showCreateOrEditModal} onSuccess={refresh} />}
      />
      <MaterialDetail modalRef={detailDraw} />
      <CreateOrEditMaterialModal modalRef={createOrEditModal} onSuccess={refresh} />
    </ListPageContainer>
  )
}

export default MaterialListPage
