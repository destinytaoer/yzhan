import { FC, RefObject, useEffect } from 'react'
import { Button, Form, Input, InputNumber, message, Modal, Select } from 'antd'
import { IModalRef, useModalImperative } from '@/shared/hooks/useModalImperative'
import { useRequest } from 'ahooks'
import GiftBoxService from '../services'
import { GiftBox } from '../models'

interface ICreateOrEditGiftBoxModalProps {
  modalRef: RefObject<IModalRef<GiftBox | undefined>>
  onSuccess: () => void
}

const CreateOrEditGiftBoxModal: FC<ICreateOrEditGiftBoxModalProps> = ({ modalRef, onSuccess }) => {
  const { data, open, hide } = useModalImperative(modalRef)

  const { run: create } = useRequest(GiftBoxService.create, {
    manual: true,
    onSuccess: () => {
      hide()
      message.success('创建成功')
      onSuccess()
    },
  })
  const { run: update } = useRequest(GiftBoxService.update, {
    manual: true,
    onSuccess: () => {
      hide()
      message.success('更新成功')
      onSuccess()
    },
  })

  const [form] = Form.useForm<Partial<GiftBox>>()

  const onFinish = async (values: Partial<GiftBox>) => {
    console.log(values)

    if (data) {
      update(data._id, values)
    } else {
      create(values)
    }
  }

  useEffect(() => {
    const initialValues: Partial<GiftBox> = {
      name: '',
      description: '',
      price_set: {
        agency_price: null,
        recommended_retail_price: null,
      },
    }
    // 避免 form 未初始化报错
    if (data === null) return

    form.setFieldsValue(data ?? initialValues)
  }, [data])

  return (
    <Modal title={`${data ? '编辑' : '新建'}礼盒`} open={open} onCancel={hide} closable maskClosable={false} centered footer={null}>
      <Form layout='vertical' labelAlign='left' form={form} onFinish={onFinish}>
        <Form.Item label='名称' name='name' rules={[{ required: true }]}>
          <Input placeholder='名称' />
        </Form.Item>
        <Form.Item label='描述' name='description' rules={[{ max: 200, message: '最多输入 200 字符' }]}>
          <Input.TextArea placeholder='描述' maxLength={200} showCount />
        </Form.Item>
        <Form.Item label='预置代理价' name={['price_set', 'agency_price']}>
          <InputNumber placeholder='预置代理价' />
        </Form.Item>
        <Form.Item label='建议零售价' name={['price_set', 'recommended_retail_price']}>
          <InputNumber placeholder='建议零售价' />
        </Form.Item>
        <Form.Item className='mb-0'>
          <div className='flex items-center justify-end gap-x-3'>
            <Button htmlType='button' onClick={hide}>
              取消
            </Button>
            <Button type='primary' htmlType='submit'>
              确定
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default CreateOrEditGiftBoxModal
