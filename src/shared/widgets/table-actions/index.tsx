import { FC, useMemo } from 'react'
import { Button, ButtonProps, Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'

export type Action = ButtonProps & { text: string; key: string }

interface ITableActionsProps {
  /**
   * 操作行为
   */
  actions: Action[]
  /**
   * 显示按钮上限, 超过限制数量的操作将以 DropDown 形式展示(注意: 超过上限时, 更多按钮也会算在数量内)
   */
  limitCount?: number
  /**
   * 更多按钮文案
   */
  moreText?: string
}

const TableActions: FC<ITableActionsProps> = ({ actions, limitCount = 3, moreText = '更多' }) => {
  const actionCount = actions.length
  const overLimit = actionCount > limitCount

  const [showActions, hideActions] = useMemo(() => {
    const showLen = overLimit ? limitCount - 1 : limitCount
    const show = actions.slice(0, showLen)
    const hide = actions.slice(showLen)
    return [show, hide]
  }, [actions, limitCount, overLimit])

  const renderActions = (actions: Action[]) => {
    return (
      <>
        {actions.map((action) => {
          const { text, ...props } = action
          return (
            <Button type='link' className='px-1' {...props}>
              {text}
            </Button>
          )
        })}
      </>
    )
  }

  const renderMenu = (actions: Action[]) => {
    return (
      <Menu className=''>
        {actions.map((action) => {
          const { text, key, ...props } = action
          return (
            <Menu.Item key={key}>
              <Button type='link' className='px-1' {...props}>
                {text}
              </Button>
            </Menu.Item>
          )
        })}
      </Menu>
    )
  }

  return (
    <div className='flex items-center gap-x-2'>
      {renderActions(showActions)}
      {overLimit && (
        <Dropdown overlay={renderMenu(hideActions)} arrow={true} trigger={['hover']}>
          <Button type='link' className='px-1'>
            {moreText}
            <DownOutlined className='m-1' />
          </Button>
        </Dropdown>
      )}
    </div>
  )
}

export default TableActions
