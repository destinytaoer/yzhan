import { FC } from 'react'
import { Button } from 'antd'
import { MaterialActions, MaterialTable, MaterialDetail, EditMaterialModal } from '@/features/material'

import { useModal } from '@/shared/hooks/useModal'
import { useRequest } from 'ahooks'
import { getMaterials } from '@/domain/services/material'
import { Material } from '@/domain/entities/material'

const MaterialPage: FC = () => {
  const { data, refresh } = useRequest(getMaterials)

  const { data: list = [] } = data ?? {}
  const [detailDraw, showDetailDraw] = useModal<Material>()
  const [createOrEditModal, showCreateOrEditModal] = useModal<Material | undefined>()
  return (
    <div className='page-container'>
      <div className='page-main'>
        <div className='page-header'>
          <h2 className='page-title'>原材料管理</h2>
          <Button type='primary' onClick={() => showCreateOrEditModal(undefined)}>
            新建材料
          </Button>
        </div>
        <div className='page-content'>
          <MaterialTable
            list={list}
            renderActions={(data) => <MaterialActions data={data} onDetail={showDetailDraw} onEdit={showCreateOrEditModal} onSuccess={refresh} />}
          />
          <MaterialDetail modalRef={detailDraw} />
          <EditMaterialModal modalRef={createOrEditModal} onSuccess={refresh} />
        </div>
      </div>
    </div>
  )
}

export default MaterialPage
