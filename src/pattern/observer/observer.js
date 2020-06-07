/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-25 10:44:31
 * @Description: 观察者模式：一种监听模式，发布 & 订阅，一对一，一对多
 *  例如：事件绑定、Promise、jQuery.Callbacks、node.js自定义事件
 *  设计原则验证：
 *    主题和观察者分离，不是主动触发而是被动监听，两者解耦
 *    符合开放封闭原则
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-08-25 11:39:56
 * @LastEditorsDescription:
 */

class Subject {
  constructor() {
    this.observers = []
    this.state = 0
  }

  getState() {
    return this.state
  }

  setState(state) {
    this.state = state
    this.notify()
  }

  attach(observer) {
    this.observers.push(observer)
  }

  notify() {
    this.observers.forEach(observer => observer.update())
  }
}

class Observer {
  constructor(name, subject) {
    this.name = name
    this.subject = subject
    this.subject.attach(this)
  }

  update() {
    console.log(`${this.name} is update, state is ${this.subject.getState()}`)
  }
}

let subject = new Subject()
let observer1 = new Observer('observer1', subject)
let observer2 = new Observer('observer2', subject)
let observer3 = new Observer('observer3', subject)

subject.setState(1)
subject.setState(2)
subject.setState(3)
