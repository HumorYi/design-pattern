/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-24 20:31:57
 * @Description: 登录框
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-08-24 20:36:10
 * @LastEditorsDescription:
 */

class LoginForm {
  constructor() {
    this.state = 'hide'
  }

  show() {
    if (this.state === 'show') {
      console.log('already show');
      return
    }

    this.state = 'show'
    console.log('show success')
  }

  hide() {
    if (this.state === 'hide') {
      console.log('already hide');
      return
    }

    this.state = 'hide'
    console.log('hide success')
  }
}

LoginForm.getInstance = (()=> {
  let instance = null

  return () => {
    if (!instance) {
      instance = new LoginForm()
    }

    return instance
  }
})()

let login1 = LoginForm.getInstance()
login1.show()
let login2 = LoginForm.getInstance()
// login2.hide()
login2.show()

console.log('login1 === login2', login1 === login2)