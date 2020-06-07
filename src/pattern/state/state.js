/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-25 22:06:45
 * @Description: 状态模式；一个对象有状态变化，每次状态变化都会触发一个逻辑，不能总是用 if...else 控制
 *  例如：交通信号控制不同的颜色变化
 *  设计原则验证：将状态对象和主题对象相分离，状态的变化逻辑单独处理
 *    符合开放封闭原则
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-08-25 23:10:59
 * @LastEditorsDescription:
 */
class State {
  constructor(color) {
    this.color = color
  }

  handle(context) {
    context.setState(this)
  }
}

class Context {
  constructor() {
    this.state = null
  }

  getState() {
    return this.state
  }

  setState(state) {
    this.state = state
  }
}

let context = new Context()
let stateGreen = new State('green')
let stateYellow = new State('yellow')
let stateRed = new State('red')

stateGreen.handle(context)
console.log(context.getState())
stateYellow.handle(context)
console.log(context.getState())
stateRed.handle(context)
console.log(context.getState())
