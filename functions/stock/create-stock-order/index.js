const cloudbase = require('@cloudbase/node-sdk')
const { v4: uuid } = require('uuid')

// 初始化
const app = cloudbase.init({
  env: 'yzhan-admin-3gt4iizsb0c99971',
  region: 'ap-shanghai',
})

const auth = app.auth()

// 数据库引用
const db = app.database()
const _ = db.command

const typePrefixMap = {
  PURCHASE: 'PC-',
  RETURN: 'RT-',
  SALE: 'SL-',
}

exports.main = async function (event) {
  const data = JSON.parse(event.body)
  const { type, total_price } = data
  const created_at = db.serverDate()
  const headers = event.headers
  const _openid = headers['x-userid']

  const _id = `${typePrefixMap[type]}${uuid()}`

  let stock_list = data.stock_list
  if (type === 'PURCHASE') {
    stock_list = stock_list.map((stock) => ({
      ...stock,
      batch_list: stock.batch_list.map((batch) => ({
        ...batch,
        batch_no: _id,
        stock_time: created_at,
        remain: batch.total,
      })),
    }))
  }

  const transaction = await db.startTransaction()
  const stockCollection = transaction.collection('stock')
  const stockOrderCollection = transaction.collection('stock-order')

  if (type === 'PURCHASE') {
    for (const stock of stock_list) {
      const { _id, batch_list } = stock

      const total = batch_list.reduce((prev, cur) => prev + cur.total, 0)

      await stockCollection.doc(_id).update({
        remnant_inventory: _.inc(total),
        batch_list: _.push(batch_list),
      })
    }
  }

  const res = await stockOrderCollection.add({
    _id,
    _openid,
    type,
    stock_list,
    total_price,
    created_at,
  })

  await transaction.commit()

  return res
}
