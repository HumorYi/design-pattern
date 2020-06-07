/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-25 23:11:32
 * @Description: 中介者模式：将多个对象间的交互逻辑解耦，使用一个中介者进行统一处理
 *  设计原则验证：将关联对象通过中介者隔离，符合开放封闭原则
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-08-25 23:24:32
 * @LastEditorsDescription:
 */

class A {
  constructor() {
    this.number = 0
  }

  setNumber(number, mediator) {
    this.number = number
    mediator && mediator.setB()
  }
}

class B {
  constructor() {
    this.number = 0
  }

  setNumber(number, mediator) {
    this.number = number
    mediator && mediator.setA()
  }
}

class Mediator {
  constructor(a, b) {
    this.a = a
    this.b = b
  }

  setA() {
    this.a.setNumber(this.b.number / 100)
  }

  setB() {
    this.b.setNumber(this.a.number * 100)
  }
}

const a = new A()
const b = new B()
const mediator = new Mediator(a, b)
a.setNumber(100, mediator)
console.log(a.number, b.number)
b.setNumber(100, mediator)
console.log(a.number, b.number)