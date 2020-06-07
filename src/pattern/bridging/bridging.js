/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-25 23:53:16
 * @Description: 桥接模式：用于把抽象化和实现化解耦，是的二者可以独立变化
 *  例如：画图、填色
 *  设计原则验证：抽象和实现相分离，解耦，符合开放封闭原则
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-08-25 23:57:44
 * @LastEditorsDescription:
 */

class Color {
  constructor(name) {
    this.name = name
  }
}

class Shape {
  constructor(name, color) {
    this.name = name
    this.color = color
  }

  draw() {
    console.log(`${this.color.name} ${this.name}`)
  }
}

const red = new Color('red')
const yellow = new Color('yellow')

const circle = new Shape('circle', red)
circle.draw()

const triangle = new Shape('triangle', yellow)
triangle.draw()
