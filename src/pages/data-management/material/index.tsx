import { FC } from 'react'
import { Button } from 'antd'
import ListPageContainer from '@/shared/widgets/list-page-container'
import { MaterialActions, MaterialTable, MaterialDetail, EditMaterialModal } from '@/features/material'

import { useModal } from '@/shared/hooks/useModal'
import { useRequest } from 'ahooks'
import MaterialService from '@/services/material'
import { Material } from '@/entities/material'

const MaterialPage: FC = () => {
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
      <EditMaterialModal modalRef={createOrEditModal} onSuccess={refresh} />
    </ListPageContainer>
  )
}

export default MaterialPage
