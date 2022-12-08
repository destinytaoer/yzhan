const cloudbase = require('@cloudbase/node-sdk')

// 初始化
const app = cloudbase.init({
  env: 'yzhan-admin-3gt4iizsb0c99971',
  region: 'ap-shanghai',
})

// 数据库引用
const db = app.database()

exports.main = async function (event) {
  const body = JSON.parse(event.body)
  const { id, data } = body

  return db
    .collection('gift-box')
    .doc(id)
    .update({
      ...data,
      updated_at: db.serverDate(),
    })
}
