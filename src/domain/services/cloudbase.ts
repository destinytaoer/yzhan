import cloudbase from '@cloudbase/js-sdk'
import { CloudbaseEnvId, CloudbaseRegion } from '@/shared/utils/config'

export const app = cloudbase.init({
  env: CloudbaseEnvId,
  region: CloudbaseRegion,
})

// 鉴权
export const auth = app.auth({ persistence: 'local' })

// 数据库引用
export const db = app.database()
