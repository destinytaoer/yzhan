import { FC, PropsWithChildren } from 'react'
import { LeftCircleFilled } from '@ant-design/icons'

interface ICreatePageContainerProps {
  title: string
  onBack: () => void
}

const CreatePageContainer: FC<PropsWithChildren<ICreatePageContainerProps>> = ({ title, onBack, children }) => {
  return (
    <div className='page-container'>
      <div className='page-main'>
        <div className='page-header'>
          <LeftCircleFilled className='text-gray-300 text-lg mr-2 cursor-pointer' onClick={onBack} />
          <h2 className='page-header-title'>{title}</h2>
        </div>
        <div className='page-content'>{children}</div>
      </div>
    </div>
  )
}

export default CreatePageContainer
