import cloudbase from '@cloudbase/js-sdk'

export const app = cloudbase.init({
  env: 'yzhan-admin-3gt4iizsb0c99971',
  region: 'ap-shanghai',
})

// 鉴权
export const auth = app.auth({ persistence: 'local' })

// 数据库引用
export const db = app.database()
