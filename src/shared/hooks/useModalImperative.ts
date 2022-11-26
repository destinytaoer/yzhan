import { Ref, useCallback, useImperativeHandle, useState } from 'react'
import { useLatest } from 'ahooks'

export interface IModalRef<D> {
  show: (data: D) => void
  hide: () => void
}

export const useModalImperative = <D = any, T = D>(ref: Ref<IModalRef<D>>, transformFn?: (data: D) => T) => {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState<T | D | null>(null)

  const transformFnRef = useLatest(transformFn)

  const show = useCallback(
    (data: D) => {
      setOpen(true)
      setData(transformFnRef.current?.(data) ?? data)
    },
    [transformFnRef],
  )

  const hide = useCallback(() => {
    setOpen(false)
    setData(null)
  }, [])

  useImperativeHandle(
    ref,
    () => {
      return {
        show,
        hide,
      }
    },
    [show, hide],
  )
  return {
    open,
    data,
    show,
    hide,
  }
}
