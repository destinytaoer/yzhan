import { FC, RefObject } from 'react'
import { Descriptions, Drawer } from 'antd'
import { useModalImperative, IModalRef } from '@/shared/hooks/useModalImperative'
import { displayGradientPrice } from '@/shared/model/price'
import { GiftBox } from '../models'

interface IGiftBoxDetailProps {
  modalRef: RefObject<IModalRef<GiftBox>>
}

const GiftBoxDetail: FC<IGiftBoxDetailProps> = ({ modalRef }) => {
  const { data, open, hide } = useModalImperative(modalRef)

  return (
    <Drawer title='详情' width={600} placement='right' onClose={hide} open={open}>
      <Descriptions column={2}>
        <Descriptions.Item label='名称'>{data?.name}</Descriptions.Item>
        <Descriptions.Item label='进货价'>{displayGradientPrice(data?.price_set?.gradient_wholesale_price)}</Descriptions.Item>
        <Descriptions.Item label='预置代理价'>{data?.price_set?.agency_price}</Descriptions.Item>
        <Descriptions.Item label='建议零售价'>{data?.price_set?.recommended_retail_price}</Descriptions.Item>
      </Descriptions>
    </Drawer>
  )
}

export default GiftBoxDetail
