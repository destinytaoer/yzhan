const cloudbase = require('@cloudbase/node-sdk')

// 初始化
const app = cloudbase.init({
  env: 'yzhan-admin-3gt4iizsb0c99971',
  region: 'ap-shanghai',
})

// 数据库引用
const db = app.database()

const _ = db.command

exports.main = async function () {
  return db
    .collection('stock')
    .where({ remnant_inventory: _.gt(0) })
    .orderBy('remnant_inventory', 'desc')
    .get()
}
