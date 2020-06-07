/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-08-26 01:50:38
 * @Description: 备忘录模式：随时记录对象的状态变化，随时恢复对象之前的某个状态(撤销)
 *  例如：备忘录，撤销和恢复
 *  设计原则验证：状态对象与使用者分开，解耦，符合开放封闭原则
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-08-26 02:01:53
 * @LastEditorsDescription:
 */

class Memento {
  constructor(content) {
    this.content = content
  }

  getContent() {
    return this.content
  }
}

class CareTaker {
  constructor() {
    this.list = []
  }

  add(memento) {
    this.list.push(memento)
  }

  get(index) {
    return this.list[index]
  }
}

class Editor {
  constructor() {
    this.content = null
  }

  getContent() {
    return this.content
  }

  setContent(content) {
    this.content = content
  }

  saveMomento() {
    return new Memento(this.content)
  }

  getMomento(memento) {
    this.content = memento.getContent()
    return this.content
  }
}

const editor = new Editor()
const careTaker = new CareTaker()

editor.setContent('111')
editor.setContent('222')
careTaker.add(editor.saveMomento())
editor.setContent('333')
careTaker.add(editor.saveMomento())
editor.setContent('444')

console.log(editor.getContent())
editor.getMomento(careTaker.get(1))
console.log(editor.getContent())
editor.getMomento(careTaker.get(0))
console.log(editor.getContent())