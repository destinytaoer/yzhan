import { CSSProperties, FC } from 'react'
import cs from 'classnames'

interface ILogoProps {
  className?: string
  style?: CSSProperties
}

const Logo: FC<ILogoProps> = ({ className, style }) => {
  return (
    <div className={cs('flex items-center', className)} style={style}>
      <img src='./vite.svg' alt='Vite logo' />
      {/*<h1 className='text-lg ml-2 text-gray-50'>一盏茶时</h1>*/}
    </div>
  )
}

export default Logo
