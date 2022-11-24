import { app } from '@/domain/services/cloudbase'

export function login() {
  const auth = app.auth({ persistence: 'local' })
  console.log('auth', auth.currentUser)
  if (!auth.currentUser) {
    app
      .auth({ persistence: 'local' })
      .signUpWithEmailAndPassword('zhuweilong370@gmail.com', '713669tz')
      .then((item) => {
        console.log('logined', item)
      })
      .catch((e) => console.log('err', e))
  }
}
