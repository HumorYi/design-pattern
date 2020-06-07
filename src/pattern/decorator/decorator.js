/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-24 21:25:02
 * @Description: 适配器模式：在不改变原有的结构和功能的前提下，为对象添加新功能
 *  设计原则验证：将现有对象和装饰器进行分离，两者独立存在，符合开发和封闭原则
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-08-24 22:31:43
 * @LastEditorsDescription:
 */

class Circle {
  draw() {
    console.log('画一个圆形')
  }
}

class Decorator {
  constructor(circle) {
    this.circle = circle
  }

  draw() {
    this.circle.draw()
    this.setRedBorder(circle)
  }

  setRedBorder(circle) {
    console.log('画一个红色边框')
  }
}

let circle = new Circle()
circle.draw()

console.log('---适配器模式---')
let decorator = new Decorator(circle)
decorator.draw()