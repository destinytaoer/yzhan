import { FC, PropsWithChildren, ReactNode } from 'react'

interface IListPageContainerProps {
  title: string
  extraButtons?: ReactNode
}

const ListPageContainer: FC<PropsWithChildren<IListPageContainerProps>> = ({ title, extraButtons, children }) => {
  return (
    <div className='page-container'>
      <div className='page-main'>
        <div className='page-header'>
          <h2 className='page-header-title'>{title}</h2>
          <div className='page-header-extra-btns'>{extraButtons}</div>
        </div>
        <div className='page-content'>{children}</div>
      </div>
    </div>
  )
}

export default ListPageContainer
