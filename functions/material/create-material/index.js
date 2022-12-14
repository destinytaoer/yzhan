const cloudbase = require('@cloudbase/node-sdk')

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

  const now = db.serverDate()
  return db.collection('material').add({
    _openid,
    ...data,
    created_at: now,
    updated_at: now,
  })
}
