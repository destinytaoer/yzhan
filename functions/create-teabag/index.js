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

  const formula_ids = data.formula.map((item) => item._id)

  const now = db.serverDate()
  return db.collection('tea-bag').add({
    ...data,
    formula_ids,
    created_at: now,
    updated_at: now,
  })
}
