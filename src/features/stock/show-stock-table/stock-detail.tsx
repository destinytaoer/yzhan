import { FC, RefObject } from 'react'
import { Descriptions, Drawer, Table, TableColumnType } from 'antd'
import { IModalRef, useModalImperative } from '@/shared/hooks/useModalImperative'
import { displayStockType, Stock, StockBatch } from '@/domain/entities/stock'

interface IStockDetailProps {
  modalRef: RefObject<IModalRef<Stock>>
}

const StockDetail: FC<IStockDetailProps> = ({ modalRef }) => {
  const { data, open, hide } = useModalImperative(modalRef)

  const batchColumns: TableColumnType<StockBatch>[] = [
    { dataIndex: 'batch_no', title: '批次号' },
    { dataIndex: 'stock_time', title: '进货日期' },
    { dataIndex: 'stock_price', title: '进货价' },
    { dataIndex: 'total', title: '进货总数' },
    { dataIndex: 'remain', title: '剩余库存' },
  ]

  return (
    <Drawer title={`${data?.name ?? ''}库存`} width={700} placement='right' onClose={hide} open={open}>
      <Descriptions column={2}>
        <Descriptions.Item label='名称'>{data?.name ?? ''}</Descriptions.Item>
        <Descriptions.Item label='类型'>{displayStockType(data?.type)}</Descriptions.Item>
        <Descriptions.Item label='剩余库存' span={2}>
          {data?.remnant_inventory ?? 0}
        </Descriptions.Item>
        <Descriptions.Item span={2}>
          <Table rowKey='batch_no' dataSource={data?.batch_list ?? []} columns={batchColumns} />
        </Descriptions.Item>
      </Descriptions>
    </Drawer>
  )
}

export default StockDetail
