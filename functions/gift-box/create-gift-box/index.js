const cloudbase = require('@cloudbase/node-sdk')
const { v4: uuid } = require('uuid')

// 初始化
const app = cloudbase.init({
  env: 'yzhan-admin-3gt4iizsb0c99971',
  region: 'ap-shanghai',
})

// 数据库引用
const db = app.database()

exports.main = async function (event) {
  const data = JSON.parse(event.body)
  const headers = event.headers
  const _openid = headers['x-userid']

  const giftBoxId = uuid()
  const created_at = db.serverDate()

  const transaction = await db.startTransaction()
  const giftBoxCollection = transaction.collection('gift-box')
  const stockCollection = transaction.collection('stock')

  // 添加礼盒
  const res = await giftBoxCollection.add({
    _id: giftBoxId,
    _openid,
    ...data,
    created_at,
    updated_at: created_at,
  })

  // 添加库存数据
  await stockCollection.add({
    _id: `GB-${giftBoxId}`,
    type: 'GIFT_BOX',
    name: data.name,
    remnant_inventory: 0,
    batch_list: [],
  })

  await transaction.commit()

  return res
}
