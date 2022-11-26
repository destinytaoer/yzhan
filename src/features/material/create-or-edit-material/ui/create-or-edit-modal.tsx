import { FC, RefObject, useEffect } from 'react'
import { Button, Form, Input, InputNumber, message, Modal, Select } from 'antd'
import { IModalRef, useModalImperative } from '@/shared/hooks/useModalImperative'
import { Material, MaterialLabelMap } from '@/domain/entities/material'
import { createMaterial, updateMaterial } from '@/domain/services/material'
import { useRequest } from 'ahooks'

interface ICreateOrEditMaterialModalProps {
  modalRef: RefObject<IModalRef<Material | undefined>>
  onSuccess: () => void
}

const CreateOrEditMaterialModal: FC<ICreateOrEditMaterialModalProps> = ({ modalRef, onSuccess }) => {
  const { data, open, hide } = useModalImperative(modalRef)

  const { run: create } = useRequest(createMaterial, {
    manual: true,
    onSuccess: () => {
      hide()
      message.success('创建成功')
      onSuccess()
    },
  })
  const { run: update } = useRequest(updateMaterial, {
    manual: true,
    onSuccess: () => {
      hide()
      message.success('更新成功')
      onSuccess()
    },
  })

  const [form] = Form.useForm<Partial<Material>>()

  const onFinish = async (values: Partial<Material>) => {
    console.log(values)
    const now = new Date().valueOf()
    if (data) {
      update(data._id, {
        name: values.name,
        category: values.category,
        unit: values.unit,
        price_set: {
          agency_price: values.price_set?.agency_price ?? null,
          recommended_retail_price: values.price_set?.agency_price ?? null,
        },
        updated_at: now,
      })
    } else {
      create({
        name: values.name,
        category: values.category,
        unit: values.unit,
        price_set: {
          agency_price: values.price_set?.agency_price ?? null,
          recommended_retail_price: values.price_set?.agency_price ?? null,
        },
        created_at: now,
        updated_at: now,
      })
    }
  }

  useEffect(() => {
    console.log('reset')
    form.resetFields()
  }, [data])

  const initialValues: Partial<Material> = data ?? {}
  console.log('inital', initialValues)

  return (
    <Modal title={`${data ? '编辑' : '新建'}原材料`} open={open} onCancel={hide} closable maskClosable={false} centered footer={null}>
      <Form layout='vertical' labelAlign='left' form={form} initialValues={initialValues} onFinish={onFinish}>
        <Form.Item label='名称' name='name' required>
          <Input placeholder='名称' />
        </Form.Item>
        <Form.Item label='分类' name='category' required>
          <Select placeholder='请选择'>
            {[...MaterialLabelMap.entries()].map((item) => {
              const [key, label] = item
              return (
                <Select.Option key={key} value={key}>
                  {label}
                </Select.Option>
              )
            })}
          </Select>
        </Form.Item>
        <Form.Item label='单位' name='unit' required>
          <Input placeholder='单位' />
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

export default CreateOrEditMaterialModal
