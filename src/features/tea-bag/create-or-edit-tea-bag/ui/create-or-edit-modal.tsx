import { FC, RefObject, useEffect } from 'react'
import { Button, Form, Input, InputNumber, message, Modal, Select } from 'antd'
import FormulaForm from './formula-form'

import { useRequest } from 'ahooks'
import { IModalRef, useModalImperative } from '@/shared/hooks/useModalImperative'
import TeaBagService from '@/domain/services/tea-bag'
import { TeaBag, PartialTeaBag, TeaBagCategoryMap, SuitCrowdsMap, splitEffects } from '@/domain/entities/tea-bag'

interface ICreateOrEditTeaBagModalProps {
  modalRef: RefObject<IModalRef<TeaBag | undefined>>
  onSuccess: () => void
}

const CreateOrEditTeaBagModal: FC<ICreateOrEditTeaBagModalProps> = ({ modalRef, onSuccess }) => {
  const { data, open, hide } = useModalImperative(modalRef)

  const { run: create } = useRequest(TeaBagService.create, {
    manual: true,
    onSuccess: () => {
      hide()
      message.success('创建成功')
      onSuccess()
    },
  })
  const { run: update } = useRequest(TeaBagService.update, {
    manual: true,
    onSuccess: () => {
      hide()
      message.success('更新成功')
      onSuccess()
    },
  })

  const [form] = Form.useForm<PartialTeaBag>()

  const onFinish = async (values: PartialTeaBag) => {
    const { effects, ...others } = values
    const now = new Date().valueOf()
    const realEffects = splitEffects(effects?.toString() ?? '')

    const updateData = {
      ...others,
      effects: realEffects,
    }
    console.log(updateData)

    if (data) {
      update(data._id, {
        ...updateData,
        updated_at: now,
      })
    } else {
      create({
        ...updateData,
        created_at: now,
        updated_at: now,
      })
    }
  }

  useEffect(() => {
    const initialValues: PartialTeaBag = {
      name: '',
      category: undefined,
      formula: [],
      suit_crowds: [],
      price_set: {
        agency_price: null,
        recommended_retail_price: null,
      },
      effects: undefined,
      packaging: undefined,
    }
    // 避免 form 未初始化报错
    if (data === null) return

    form.setFieldsValue(data ?? initialValues)
  }, [data])

  return (
    <Modal width={700} title={`${data ? '编辑' : '新建'}茶包`} open={open} onCancel={hide} closable maskClosable={false} centered footer={null}>
      <Form layout='vertical' labelAlign='left' form={form} onFinish={onFinish}>
        <div style={{ maxHeight: '800px', overflowY: 'auto' }}>
          <Form.Item label='名称' name='name' rules={[{ required: true }]}>
            <Input placeholder='名称' />
          </Form.Item>
          <Form.Item label='分类' name='category' rules={[{ required: true }]}>
            <Select placeholder='请选择'>
              {[...TeaBagCategoryMap.entries()].map((item) => {
                const [key, label] = item
                return (
                  <Select.Option key={key} value={key}>
                    {label}
                  </Select.Option>
                )
              })}
            </Select>
          </Form.Item>
          <Form.Item label='配方' required>
            <FormulaForm fieldName='formula' />
          </Form.Item>
          <Form.Item label='适合人群' name='suit_crowds' rules={[{ required: true }]}>
            <Select mode='tags' placeholder='请选择'>
              {[...SuitCrowdsMap.entries()].map((item) => {
                const [key, { label }] = item
                return (
                  <Select.Option key={key} value={key}>
                    {label}
                  </Select.Option>
                )
              })}
            </Select>
          </Form.Item>
          <Form.Item label='功效' name='effects' rules={[{ required: true }]}>
            <Input placeholder='请输入功效, 以|分隔' />
          </Form.Item>
          <Form.Item label='包装方式' name='packaging'>
            <Input placeholder='单位' />
          </Form.Item>
          <Form.Item label='预置代理价' name={['price_set', 'agency_price']}>
            <InputNumber placeholder='预置代理价' />
          </Form.Item>
          <Form.Item label='建议零售价' name={['price_set', 'recommended_retail_price']}>
            <InputNumber placeholder='建议零售价' />
          </Form.Item>
        </div>
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

export default CreateOrEditTeaBagModal
