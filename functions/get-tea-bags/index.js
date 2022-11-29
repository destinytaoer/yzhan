const cloudbase = require('@cloudbase/node-sdk')

// 初始化
const app = cloudbase.init({
  env: 'yzhan-admin-3gt4iizsb0c99971',
  region: 'ap-shanghai',
})

// 数据库引用
const db = app.database()

const _ = db.command
const $ = _.aggregate

exports.main = async function () {
  const res = await db
    .collection('tea-bag')
    .aggregate()
    // 聚合两张表
    .lookup({
      from: 'material',
      localField: 'formula_ids',
      foreignField: '_id',
      as: 'formulas',
    })
    .sort({ created_at: -1 })
    .end()

  // 合并 formula 和 formulas, 去掉 formula_ids, 将 quality 合并到 material 数据中
  res.data = res.data.map((item) => {
    const { formula, formula_ids, formulas, ...rest } = item
    return {
      ...rest,
      formula: formulas.map((item, index) => ({
        ...item,
        quantity: formula[index].quantity,
      })),
    }
  })

  return res
}
