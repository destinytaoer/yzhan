import { FC, useMemo } from 'react'
import { Form, Space, Select, Input, Button } from 'antd'
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons'
import { useRequest } from 'ahooks'
import MaterialService from '@/domain/services/material'

interface IFormulaFormProps {
  fieldName: string
}

const FormulaForm: FC<IFormulaFormProps> = ({ fieldName }) => {
  const { data } = useRequest(MaterialService.list)
  const { data: list = [] } = data ?? {}

  const options = useMemo(() => {
    return list.map((item) => ({
      label: item.name,
      value: item._id,
    }))
  }, [list])

  return (
    <Form.List
      name={fieldName}
      rules={[
        {
          validator: async (_, values) => {
            if (!values || values.length === 0) {
              return Promise.reject(new Error('请选择配料'))
            }
          },
        },
      ]}
    >
      {(fields, { add, remove }) => (
        <>
          {fields.map((field) => (
            <Space className='mb-5' key={field.key} align='center'>
              <Form.Item className='mb-0' {...field} name={[field.name, '_id']} rules={[{ required: true, message: '请选择材料' }]}>
                <Select
                  className='w-80'
                  placeholder='请选择材料'
                  showSearch
                  filterOption={(input, option) => ((option?.label ?? '') as string).includes(input)}
                  options={options}
                />
              </Form.Item>
              <Form.Item className='mb-0' {...field} name={[field.name, 'quantity']} rules={[{ required: true, message: '请输入数量' }]}>
                <Input className='w-40' placeholder='数量, 如 1、1-2 等' />
              </Form.Item>
              <MinusCircleOutlined onClick={() => remove(field.name)} />
            </Space>
          ))}
          <Form.Item noStyle>
            <Button type='dashed' onClick={() => add()} block icon={<PlusOutlined />}>
              添加材料
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  )
}

export default FormulaForm
