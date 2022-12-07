import { FC, RefObject } from 'react'
import { displayMaterialCategory, Material } from '@/entities/material'
import { useModalImperative, IModalRef } from '@/shared/hooks/useModalImperative'
import { Descriptions, Drawer } from 'antd'
import { displayGradientPrice } from '@/shared/model/price'

interface IMaterialDetailProps {
  modalRef: RefObject<IModalRef<Material>>
}

const MaterialDetail: FC<IMaterialDetailProps> = ({ modalRef }) => {
  const { data, open, hide } = useModalImperative(modalRef)

  return (
    <Drawer title='详情' width={600} placement='right' onClose={hide} open={open}>
      <Descriptions column={2}>
        <Descriptions.Item label='名称'>{data?.name}</Descriptions.Item>
        <Descriptions.Item label='分类'>{displayMaterialCategory(data?.category)}</Descriptions.Item>
        <Descriptions.Item label='单位'>{data?.unit}</Descriptions.Item>
        <Descriptions.Item label='批发价'>{displayGradientPrice(data?.price_set?.gradient_wholesale_price)}</Descriptions.Item>
        <Descriptions.Item label='预置代理价'>{data?.price_set?.agency_price}</Descriptions.Item>
        <Descriptions.Item label='建议零售价'>{data?.price_set?.recommended_retail_price}</Descriptions.Item>
      </Descriptions>
    </Drawer>
  )
}

export default MaterialDetail
