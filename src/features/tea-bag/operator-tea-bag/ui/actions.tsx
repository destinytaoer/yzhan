import { FC } from 'react'
import { message, Modal } from 'antd'
import TableActions, { Action } from '@/widgets/table-actions'
import { useRequest } from 'ahooks'
import TeaBagService from '@/domain/services/tea-bag'
import { TeaBag } from '@/domain/entities/tea-bag'

interface ITeaBagActionsProps {
  data: TeaBag
  onDetail: (data: TeaBag) => void
  onEdit: (data: TeaBag) => void
  onSuccess: () => void
}

const TeaBagActions: FC<ITeaBagActionsProps> = ({ data, onDetail, onEdit, onSuccess }) => {
  const { run: remove } = useRequest(TeaBagService.remove, {
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
          content: '确定删除该茶包?',
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

export default TeaBagActions
