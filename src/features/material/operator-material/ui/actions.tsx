import { FC } from 'react'
import { message, Modal } from 'antd'
import TableActions, { Action } from '@/shared/widgets/table-actions'
import { useRequest } from 'ahooks'
import MaterialService from '@/services/material'
import { Material } from '@/entities/material'

interface IMaterialActionsProps {
  data: Material
  onDetail: (data: Material) => void
  onEdit: (data: Material) => void
  onSuccess: () => void
}

const MaterialActions: FC<IMaterialActionsProps> = ({ data, onDetail, onEdit, onSuccess }) => {
  const { run: remove } = useRequest(MaterialService.remove, {
    manual: true,
    onSuccess() {
      message.success('删除成功')
      onSuccess()
    },
  })
  const actions: Action[] = [
    {
      text: '详情',
      key: 'detail',
      onClick: () => onDetail(data),
    },
    {
      text: '编辑',
      key: 'edit',
      onClick: () => onEdit(data),
    },
    {
      text: '删除',
      key: 'remove',
      danger: true,
      onClick: () => {
        Modal.confirm({
          title: '操作',
          content: '确定删除该材料?',
          okText: '删除',
          centered: true,
          okButtonProps: {
            danger: true,
          },
          onOk() {
            return remove(data._id)
          },
        })
      },
    },
  ]
  return <TableActions actions={actions} limitCount={3} />
}

export default MaterialActions
