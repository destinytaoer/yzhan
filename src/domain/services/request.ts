import axios from 'axios'
import { auth } from './cloudbase'

const baseURL = `https://yzhan-admin-3gt4iizsb0c99971-1253481644.ap-shanghai.service.tcloudbase.com/api`

const request = axios.create({
  baseURL,
})

request.interceptors.request.use(
  (config) => {
    //请求拦截一般会有哪些操作
    // 1.比如config中的一些信息不符合服务器的要求,这里可以做一些修改
    // 2.比如每次发送网络请求时,都希望在界面中显示一个请求的图标(然后再响应拦截中取消显示)
    // 3.某些网络请求必须携带一些特殊的信息(如登录token),如果没有携带就可以拦截并作响应提示
    const authHeader = auth.getAuthHeader()

    return {
      ...config,
      headers: {
        ...config.headers,
        ...authHeader,
      },
    }
  },
  (err) => {
    // 请求未成功发出，如：没有网络...
    return Promise.reject(err)
  },
)

request.interceptors.response.use(
  (res) => {
    // 成功响应的拦截
    return Promise.resolve(res.data)
  },
  (err) => {
    // 失败响应的拦截
    console.log(err)
    if (err.response) {
      // 失败响应的status需要在response中获得
      console.log(err.response)
      switch (err.response.status) {
        // 对得到的状态码的处理，具体的设置视自己的情况而定
        case 401:
          console.log('未登录')
          window.location.href = '/'
          break
        case 404:
          window.location.href = '/'
          break
        case 405:
          console.log('不支持的方法')
          break
        // case ...
        default:
          console.log('其他错误')
          break
      }
    }

    return Promise.reject(err)
  },
)

export default request
