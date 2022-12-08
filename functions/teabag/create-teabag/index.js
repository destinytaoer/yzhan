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

  const formula_ids = data.formula.map((item) => item._id)
  const teabagId = uuid()

  const transaction = await db.startTransaction()
  const teabagCollection = transaction.collection('teabag')
  const stockCollection = transaction.collection('stock')
  const now = db.serverDate()
  const res = await teabagCollection.add({
    _id: teabagId,
    _openid,
    ...data,
    formula_ids,
    created_at: now,
    updated_at: now,
  })

  await stockCollection.add({
    _id: `TB-${teabagId}`,
    type: 'TEABAG',
    name: data.name,
    remnant_inventory: 0,
    batch_list: [],
  })

  await transaction.commit()

  return res
}
