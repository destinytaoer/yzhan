import { useCallback, useRef } from 'react'
import { IModalRef } from './useModalImperative'

export const useModal = <Data>() => {
  const modal = useRef<IModalRef<Data>>(null)

  const show = useCallback((data: Data) => {
    modal.current?.show(data)
  }, [])

  return [modal, show] as const
}
