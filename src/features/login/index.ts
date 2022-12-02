import { auth } from '@/services/cloudbase'

export async function login() {
  console.log('auth', auth.currentUser)
  const user = auth.currentUser
  if (!user) {
    try {
      const item = await auth.signInWithEmailAndPassword('zhuweilong370@gmail.com', '713669tz')
      console.log('logined', item)
      // if (!(await auth.isUsernameRegistered(username))) { // 检查用户名是否绑定过
      //   await auth.currentUser.updateUsername(username) // 绑定用户名
      // }
    } catch (e) {
      console.log('err', e)
    }
  } else {
    // await user.update({
    //   nickName: 'destiny',
    //   gender: 'MALE',
    // })
  }
}
